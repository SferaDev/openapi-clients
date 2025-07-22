import { db } from '@/lib/db';
import { accounts, oauthToken } from '@/lib/schema';
import { eq } from 'drizzle-orm';
import { createMcpHandler, withMcpAuth } from 'mcp-handler';
import { VercelApi } from 'vercel-api-js';
import { initMcpTools } from 'vercel-api-js/mcp';

const handler = withMcpAuth(
  (request) => {
    const mcpHandler = createMcpHandler(
      async (server) => initMcpTools(server, { token: null, fetchImpl: fetch }),
      { capabilities: {} },
      {
        basePath: '/api/vercel',
        verboseLogs: true,
        maxDuration: 800
      }
    );

    return mcpHandler(request);
  },
  async (_request, bearerToken) => {
    if (!bearerToken) return undefined;

    const accountToken = await getVercelToken(bearerToken);
    const vercel = new VercelApi({ token: accountToken ?? bearerToken });

    try {
      const response = (await vercel.api.user.getAuthUser()) as any;
      const { user } = response;

      return {
        id: user.id,
        token: accountToken ?? bearerToken,
        clientId: '',
        scopes: []
      };
    } catch (error) {
      console.error('Error fetching user:', error);
      return undefined;
    }
  },
  { required: true }
);

async function getVercelToken(userToken: string): Promise<string | null> {
  const response = await db
    .select()
    .from(oauthToken)
    .where(eq(oauthToken.accessToken, userToken))
    .innerJoin(accounts, eq(accounts.userId, oauthToken.userId));

  if (response.length > 0) {
    return response[0].account.access_token;
  }

  return null;
}

export { handler as GET, handler as POST };
