import { defineConfig } from '@kubb/core';
import { baseConfig } from 'openapi-utils';
import { OpenAPIObject, PathItemObject, OperationObject } from "openapi3-ts/oas30";
import c from 'case';

export default defineConfig(async () => {
  const response = await fetch('https://openapi.vercel.sh');
  let openAPIDocument: OpenAPIObject = await response.json();

  // Add missing operation ids and clean them
  openAPIDocument = addMissingPathParams(openAPIDocument);
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

  // Fix array items without proper typing
  openAPIDocument = fixArrayItems(openAPIDocument);

  // Fix constraints on union types
  openAPIDocument = fixUnionConstraints(openAPIDocument);

  // Camel case all properties
  openAPIDocument = camelCaseProperties(openAPIDocument);

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

function fixArrayItems(
  openAPIDocument: OpenAPIObject
) {
  return JSON.parse(
    JSON.stringify(openAPIDocument),
    (_key, value) => {
      // Fix arrays that lack proper item typing
      if (value && typeof value === 'object' && value.type === 'array' && !value.items) {
        return {
          ...value,
          items: {
            type: 'string'
          }
        };
      }

      // Fix arrays with empty items objects
      if (value && typeof value === 'object' && value.type === 'array' && value.items && Object.keys(value.items).length === 0) {
        return {
          ...value,
          items: {
            type: 'string'
          }
        };
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
    operation: OperationObject
  ) => OperationObject;
}) {
  const pathItem = openAPIDocument.paths?.[path];
  if (!pathItem) return openAPIDocument;

  const operation = pathItem[method as keyof PathItemObject] as OperationObject;
  if (!operation) return openAPIDocument;

  (openAPIDocument.paths[path] as any)[method] = { ...operation, ...update(operation) };

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
  for (const [key, pathItem] of Object.entries(openAPIDocument.paths as Record<string, PathItemObject>)) {
    for (const method of ["get", "put", "post", "patch", "delete", "head"] as const) {
      if (method === 'head') {
        delete (openAPIDocument.paths[key] as any)[method];
        continue; // Skip 'head' method as it's not used in this context
      }

      const operation = pathItem[method as keyof PathItemObject] as OperationObject | undefined;
      if (operation) {
        const operationId = operation.operationId ?? getDefaultOperationId(key, method);
        const cleanedOperationId = c.camel(operationId);
        if (openAPIDocument.paths?.[key]) {
          const pathRef = openAPIDocument.paths[key] as any;
          if (pathRef[method]) {
            pathRef[method].operationId = cleanedOperationId;
          }
        }
      }
    }
  }

  return openAPIDocument;
}

function addMissingPathParams(openAPIDocument: OpenAPIObject): OpenAPIObject {
  for (const path in openAPIDocument.paths) {
    const pathItem = openAPIDocument.paths[path];
    if (pathItem) {
      const pathParams = path.match(/\{([^}]+)\}/g);
      if (pathParams) {
        for (const method in pathItem) {
          if (["get", "put", "post", "delete", "patch"].includes(method)) {
            const operation = pathItem[method as keyof PathItemObject] as OperationObject;
            if (operation) {
              if (!operation.parameters) {
                operation.parameters = [];
              }
              for (const pathParam of pathParams) {
                const paramName = pathParam.slice(1, -1);
                const existingParam = operation.parameters.find(
                  (p: any) => p.in === "path" && p.name === paramName
                );
                if (!existingParam) {
                  operation.parameters.push({
                    name: paramName,
                    in: "path",
                    required: true,
                    schema: {
                      type: "string",
                    },
                  } as any);
                } else {
                  (existingParam as any).required = true;
                }
              }
            }
          }
        }
      }
    }
  }
  return openAPIDocument;
}

function getDefaultOperationId(path: string, method: string): string {
  const operationId = `${method.toUpperCase()} ${path}`
  if (hardcodedOperationIds[operationId]) {
    return hardcodedOperationIds[operationId];
  }

  console.warn(`No operationId found for ${operationId}. Using default.`);

  return operationId.replace(/[^a-zA-Z0-9/]/g, ' ');
}

function fixUnionConstraints(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(fixUnionConstraints);
  }
  if (obj !== null && typeof obj === 'object') {
    if (obj.oneOf && (obj.maxLength || obj.maxItems)) {
      const { maxLength, maxItems, ...rest } = obj;
      const constraint = maxLength ? { maxLength } : { maxItems };
      return {
        ...rest,
        oneOf: rest.oneOf.map((item: any) => ({ ...item, ...constraint }))
      };
    }
    return Object.keys(obj).reduce((result, key) => {
      result[key] = fixUnionConstraints(obj[key]);
      return result;
    }, {} as any);
  }
  return obj;
}

function camelCaseProperties(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(camelCaseProperties);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((result, key) => {
      const camelKey = c.camel(key);
      result[camelKey] = camelCaseProperties(obj[key]);
      return result;
    }, {} as any);
  }
  return obj;
}

const hardcodedOperationIds: Record<string, string> = {
  'DELETE /data-cache/purge-all': 'purgeAllDataCache',
  'PATCH /data-cache/billing-settings': 'updateDataCacheBillingSettings',
  'POST /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items': 'createExperimentationItem',
  'PATCH /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}': 'updateExperimentationItem',
  'DELETE /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/items/{itemId}': 'deleteExperimentationItem',
  'PUT /v1/installations/{integrationConfigurationId}/resources/{resourceId}/experimentation/edge-config': 'updateExperimentationEdgeConfig',
  'GET /v9/projects/{idOrName}/custom-environments': 'listCustomEnvironments',
  'GET /certs': 'listCerts',
}