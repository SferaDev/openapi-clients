import type { AdapterAccountType } from '@auth/core/adapters';
import { relations } from 'drizzle-orm';
import { boolean, integer, jsonb, pgTable, primaryKey, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const users = pgTable('user', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text('name'),
  email: text('email').unique(),
  emailVerified: timestamp('emailVerified', { mode: 'date' }),
  image: text('image')
});

export const accounts = pgTable(
  'account',
  {
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    type: text('type').$type<AdapterAccountType>().notNull(),
    provider: text('provider').notNull(),
    providerAccountId: text('providerAccountId').notNull(),
    refresh_token: text('refresh_token'),
    access_token: text('access_token'),
    expires_at: integer('expires_at'),
    token_type: text('token_type'),
    scope: text('scope'),
    id_token: text('id_token'),
    session_state: text('session_state')
  },
  (account) => [
    {
      compoundKey: primaryKey({
        columns: [account.provider, account.providerAccountId]
      })
    }
  ]
);

export const sessions = pgTable('session', {
  sessionToken: text('sessionToken').primaryKey(),
  userId: text('userId')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  expires: timestamp('expires', { mode: 'date' }).notNull()
});

export const verificationTokens = pgTable(
  'verificationToken',
  {
    identifier: text('identifier').notNull(),
    token: text('token').notNull(),
    expires: timestamp('expires', { mode: 'date' }).notNull()
  },
  (verificationToken) => [
    {
      compositePk: primaryKey({
        columns: [verificationToken.identifier, verificationToken.token]
      })
    }
  ]
);

export const authenticators = pgTable(
  'authenticator',
  {
    credentialID: text('credentialID').notNull().unique(),
    userId: text('userId')
      .notNull()
      .references(() => users.id, { onDelete: 'cascade' }),
    providerAccountId: text('providerAccountId').notNull(),
    credentialPublicKey: text('credentialPublicKey').notNull(),
    counter: integer('counter').notNull(),
    credentialDeviceType: text('credentialDeviceType').notNull(),
    credentialBackedUp: boolean('credentialBackedUp').notNull(),
    transports: text('transports')
  },
  (authenticator) => [
    {
      compositePK: primaryKey({
        columns: [authenticator.userId, authenticator.credentialID]
      })
    }
  ]
);

export const oauthClient = pgTable('oauth_client', {
  id: varchar('id', { length: 255 }).primaryKey(),
  clientId: varchar('client_id', { length: 255 }).unique().notNull(),
  clientSecret: varchar('client_secret', { length: 255 }),
  name: varchar('name', { length: 255 }).notNull(),
  description: text('description'),
  logoUri: text('logo_uri'),
  redirectUris: text('redirect_uris').array().notNull(),
  grantTypes: text('grant_types').array().notNull(),
  tokenEndpointAuthMethod: text('token_endpoint_auth_method').notNull(),
  scope: text('scope'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull()
});

export const oauthAuthorizationCode = pgTable('oauth_authorization_code', {
  authorizationCode: varchar('authorization_code', { length: 255 }).primaryKey(),
  expiresAt: timestamp('expires_at').notNull(),
  redirectUri: text('redirect_uri').notNull(),
  scope: text('scope'),
  authorizationDetails: jsonb('authorization_details'),
  codeChallenge: text('code_challenge'),
  codeChallengeMethod: text('code_challenge_method'),
  clientId: varchar('client_id', { length: 255 })
    .notNull()
    .references(() => oauthClient.id, { onDelete: 'cascade' }),
  userId: varchar('user_id', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const oauthToken = pgTable('oauth_token', {
  accessToken: varchar('access_token', { length: 255 }).primaryKey(),
  accessTokenExpiresAt: timestamp('access_token_expires_at').notNull(),
  refreshToken: varchar('refresh_token', { length: 255 }).unique(),
  refreshTokenExpiresAt: timestamp('refresh_token_expires_at'),
  scope: text('scope'),
  authorizationDetails: jsonb('authorization_details'),
  clientId: varchar('client_id', { length: 255 })
    .notNull()
    .references(() => oauthClient.id, { onDelete: 'cascade' }),
  userId: varchar('user_id', { length: 255 }).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export const oauthClientRelations = relations(oauthClient, ({ many }) => ({
  authorizationCodes: many(oauthAuthorizationCode),
  tokens: many(oauthToken)
}));

export const oauthAuthorizationCodeRelations = relations(oauthAuthorizationCode, ({ one }) => ({
  client: one(oauthClient, {
    fields: [oauthAuthorizationCode.clientId],
    references: [oauthClient.id]
  })
}));

export const oauthTokenRelations = relations(oauthToken, ({ one }) => ({
  client: one(oauthClient, {
    fields: [oauthToken.clientId],
    references: [oauthClient.id]
  })
}));
