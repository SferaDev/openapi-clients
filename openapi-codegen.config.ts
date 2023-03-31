import { defineConfig } from "@openapi-codegen/cli";
import { Context } from "@openapi-codegen/cli/lib/types";
import { generateFetchers, generateSchemaTypes } from "@openapi-codegen/typescript";

export default defineConfig({
    vercel: {
        from: {
            source: "url",
            url: "https://openapi.vercel.sh",
        },
        outputDir: "src/api",
        to: async (context) => {
            const filenamePrefix = "";

            // Rename invalid component name for searchRepo
            context.openAPIDocument = updateMethod({
                openAPIDocument: context.openAPIDocument,
                path: "/v1/integrations/search-repo",
                method: "get",
                update: (operation) => ({ ...operation, operationId: "searchRepo" }),
            });

            const { schemasFiles } = await generateSchemaTypes(context, { filenamePrefix });
            await generateFetchers(context, { filenamePrefix, schemasFiles });
        },
    },
});

function updateMethod({
    openAPIDocument,
    path,
    method,
    update,
}: {
    openAPIDocument: Context["openAPIDocument"];
    path: string;
    method: string;
    update: (
        operation: Context["openAPIDocument"]["paths"][string][string]
    ) => Context["openAPIDocument"]["paths"][string][string];
}) {
    const operation = openAPIDocument.paths?.[path]?.[method];
    if (!operation) return openAPIDocument;

    openAPIDocument.paths[path][method] = { ...operation, ...update(operation) };

    return openAPIDocument;
}
