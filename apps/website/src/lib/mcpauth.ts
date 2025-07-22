import type { OAuthUser } from '@mcpauth/auth';
import { McpAuth } from '@mcpauth/auth/adapters/next';
import { DrizzleAdapter } from '@mcpauth/auth/stores/drizzle';
import { auth as nextAuth } from './auth';
import { db } from './db';

const issuerUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export const { handlers, auth } = McpAuth({
  adapter: DrizzleAdapter(db),
  issuerUrl,
  issuerPath: '/api/oauth',
  authenticateUser: async () => {
    const session = await nextAuth();
    return (session?.user as OAuthUser) ?? null;
  },
  signInUrl: () => {
    return `${issuerUrl}/api/auth/signin`;
  }
});
