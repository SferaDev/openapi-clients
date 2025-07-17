import { createMcpHandler } from 'mcp-handler';
import { initMcpTools as vercelMcp } from 'vercel-api-js/mcp';
import { withAuth } from '@/lib/with-auth';

const handler = withAuth((request, token) => {
  const provider = request.nextUrl.pathname.split('/')[2];

  const mcpHandler = createMcpHandler(
    async (server) => {
      vercelMcp(server, { token });
    },
    { capabilities: {} },
    {
      basePath: `/api/${provider}`,
      verboseLogs: true,
      maxDuration: 800
    }
  );

  return mcpHandler(request);
});

export { handler as GET, handler as POST };
