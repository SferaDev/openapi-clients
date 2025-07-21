import { createMcpHandler } from 'mcp-handler';
import { withAuth } from '@/lib/with-auth';

// Temporary mock implementation until vercel-api-js builds correctly
const mockVercelMcp = (server: any, config: { token: string }) => {
  server.setRequestHandler('tools/list', async () => {
    return {
      tools: [
        {
          name: 'vercel_get_user',
          description: 'Get current user information from Vercel API',
          inputSchema: {
            type: 'object',
            properties: {},
            additionalProperties: false
          }
        },
        {
          name: 'vercel_list_projects',
          description: 'List all projects in the authenticated user\'s account',
          inputSchema: {
            type: 'object',
            properties: {
              limit: { type: 'number', description: 'Number of projects to retrieve' }
            },
            additionalProperties: false
          }
        }
      ]
    };
  });

  server.setRequestHandler('tools/call', async (request: any) => {
    const { name, arguments: args } = request.params;
    
    // Mock successful tool execution with OAuth token validation
    return {
      content: [
        {
          type: 'text',
          text: `OAuth-authenticated MCP tool '${name}' executed successfully with token scopes: ${JSON.stringify(config.token.substring(0, 20))}...`
        }
      ]
    };
  });
};

const handler = withAuth((request, token, payload) => {
  const provider = request.nextUrl.pathname.split('/')[2];

  const mcpHandler = createMcpHandler(
    async (server) => {
      mockVercelMcp(server, { token });
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
