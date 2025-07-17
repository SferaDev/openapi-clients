import { createMcpHandler } from 'mcp-handler';
import { withAuth } from '@/lib/with-auth';
import { initMcpTools as vercelMcp } from 'vercel-api-js/mcp';

const handler = withAuth((request, token) => {
    const provider = request.nextUrl.pathname.split('/')[3];

    const mcpHandler = createMcpHandler(
        async (server) => {
            vercelMcp(server, { token });
        },
        { capabilities: {} },
        {
            basePath: `/api/ai/${provider}`,
            verboseLogs: true,
            maxDuration: 800
        }
    );

    return mcpHandler(request);
});

export { handler as GET, handler as POST };
