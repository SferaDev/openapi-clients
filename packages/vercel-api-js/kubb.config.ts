import { defineConfig } from '@kubb/core';
import { baseConfig } from 'openapi-utils';
import { OpenAPIObject, PathItemObject } from "openapi3-ts/oas30";
import { camelCase } from '@kubb/core/transformers';


export default defineConfig(async () => {
  const response = await fetch('https://openapi.vercel.sh');
  let openAPIDocument: OpenAPIObject = await response.json();

  // Add missing operation ids and clean them
  openAPIDocument = cleanOperationIds({ openAPIDocument });

  // Rename invalid component name for searchRepo
  openAPIDocument = updateMethod({
    openAPIDocument,
    path: '/v1/integrations/search-repo',
    method: 'get',
    update: (operation) => ({ ...operation, operationId: 'searchRepo' })
  });

  // Rename invalid component name for listPromoteAliases
  openAPIDocument = updateMethod({
    openAPIDocument,
    path: '/v1/projects/{projectId}/promote/aliases',
    method: 'get',
    update: (operation) => ({ ...operation, operationId: 'listPromoteAliases' })
  });

  // Sort alphabetically enum values
  openAPIDocument = sortArrays(openAPIDocument);

  // Fix empty arrays
  openAPIDocument = fixWrongGroupIds(openAPIDocument);

  return {
    ...baseConfig,
    input: { data: openAPIDocument },
  }
});


function fixWrongGroupIds(
  openAPIDocument: OpenAPIObject
) {
  return JSON.parse(
    JSON.stringify(openAPIDocument),
    (key, value) => {
      if (key === "groupIds" && value.maxItems === 0 && value.minItems === 0) {
        return {
          "items": {
            "oneOf": [
              {
                "type": "string"
              },
              {
                "type": "string"
              }
            ]
          },
          "maxItems": 2,
          "minItems": 2,
          "type": "array",
        }
      }

      return value;
    }
  );
}

function updateMethod({
  openAPIDocument,
  path,
  method,
  update
}: {
  openAPIDocument: OpenAPIObject;
  path: string;
  method: string;
  update: (
    operation: OpenAPIObject['paths'][string][string]
  ) => OpenAPIObject['paths'][string][string];
}) {
  const operation = openAPIDocument.paths?.[path]?.[method];
  if (!operation) return openAPIDocument;

  openAPIDocument.paths[path][method] = { ...operation, ...update(operation) };

  return openAPIDocument;
}

function sortArrays(openAPIDocument: OpenAPIObject) {
  // Recurse through the document and in any "enum" property that is a string array, sort the values alphabetically
  function sortEnumValuesRecursively<T>(obj: T): T {
    if (Array.isArray(obj)) {
      return obj.sort() as T;
    } else if (typeof obj === 'object' && !!obj) {
      return Object.fromEntries(
        Object.entries(obj as any).map(([key, value]) => {
          if (key === 'enum' && Array.isArray(value)) {
            return [key, value.sort()];
          }
          return [key, sortEnumValuesRecursively(value)];
        })
      ) as T;
    } else {
      return obj;
    }
  }

  return sortEnumValuesRecursively(openAPIDocument);
}

function cleanOperationIds({
  openAPIDocument,
}: {
  openAPIDocument: OpenAPIObject;
}) {
  for (const [key, path] of Object.entries(openAPIDocument.paths as Record<string, PathItemObject>)) {
    for (const method of ["get", "put", "post", "patch", "delete"] as const) {
      if (path[method]) {
        const operationId = path[method].operationId ?? `${method} ${key}`;
        if (!!openAPIDocument.paths?.[key]) openAPIDocument.paths[key][method] = {
          ...openAPIDocument.paths[key]?.[method],
          operationId: camelCase(operationId)
        }
      }
    }

  }

  return openAPIDocument;
}
