import { DrizzleAdapter } from '@auth/drizzle-adapter';
import NextAuth from 'next-auth';
import { db } from './db';
import { accounts, sessions, users, verificationTokens } from './schema';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens
  }),
  providers: [
    {
      id: 'vercel',
      name: 'Vercel',
      type: 'oauth',
      authorization: {
        url: `https://vercel.com/integrations/${process.env.AUTH_VERCEL_APP_NAME}/new`
      },
      token: 'https://api.vercel.com/oauth/access_token',
      userinfo: 'https://api.vercel.com/v2/user',
      clientId: process.env.AUTH_VERCEL_ID,
      clientSecret: process.env.AUTH_VERCEL_SECRET,
      profile(profile) {
        return {
          id: profile.user.id,
          name: profile.user.name,
          email: profile.user.email,
          image: profile.user.avatar
        };
      }
    }
  ]
});
