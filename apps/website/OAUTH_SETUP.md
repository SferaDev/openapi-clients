# OAuth 2.0 Setup for MCP Authentication

This implementation provides OAuth 2.0 authentication for MCP (Model Context Protocol) clients using better-auth and mcpauth.

## Architecture

The authentication flow follows this pattern:
```
MCP Client -> MCP Server -> OAuth well-known configuration -> Better auth -> Vercel OAuth2
```

## Components

### 1. OAuth Well-Known Endpoints

- **Authorization Server Metadata**: `/.well-known/oauth-authorization-server`
- **Protected Resource Metadata**: `/.well-known/oauth-protected-resource`  
- **JWKS (JSON Web Key Set)**: `/.well-known/jwks`

### 2. OAuth 2.0 Endpoints

- **Authorization**: `/api/oauth/authorize`
- **Token Exchange**: `/api/oauth/token`

### 3. Better Auth Integration

- **Authentication Routes**: `/api/auth/[...auth]`
- Supports various providers including custom OAuth2 setups

## Configuration

### Environment Variables

Copy `.env.local` and configure:

```bash
# MCP Auth Configuration
MCPAUTH_ALLOWED_ORIGIN=http://localhost:3000,https://localhost:3000
MCPAUTH_SECRET=your-secret-key-here-change-this-in-production
MCPAUTH_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"

# Vercel OAuth Configuration (to be filled by user)
VERCEL_CLIENT_ID=your-vercel-client-id
VERCEL_CLIENT_SECRET=your-vercel-client-secret
VERCEL_REDIRECT_URI=http://localhost:3000/api/auth/callback/vercel

# Better Auth Configuration
BETTER_AUTH_SECRET=your-better-auth-secret-key-here
BETTER_AUTH_URL=http://localhost:3000
```

### Vercel OAuth2 Setup

1. Go to Vercel Dashboard > Settings > Integrations
2. Create a new OAuth2 application
3. Set the redirect URI to: `http://localhost:3000/api/auth/callback/vercel`
4. Copy the Client ID and Client Secret to your `.env.local`

## Usage

### For MCP Clients

1. **Discovery**: GET `/.well-known/oauth-protected-resource` to discover OAuth configuration
2. **Authorization**: Direct user to `/api/oauth/authorize` with required parameters
3. **Token Exchange**: POST to `/api/oauth/token` with authorization code
4. **API Access**: Use the access token in `Authorization: Bearer <token>` header

### Authentication Flow

1. MCP client discovers OAuth configuration via well-known endpoints
2. Client redirects user to authorization endpoint
3. User authenticates via Vercel OAuth2
4. Authorization code is exchanged for access token
5. Access token is used to authenticate API requests

## Security Features

- JWT tokens signed with RS256 algorithm
- Token verification on protected endpoints
- CORS support for cross-origin requests
- Secure key management via environment variables

## Integration with Existing MCP Server

The existing MCP server at `/api/[provider]/[transport]/route.ts` already uses `withAuth()` which now:

- Validates JWT tokens using the public key
- Verifies token signatures
- Provides authenticated access to MCP tools

## Testing

1. Start the development server: `pnpm dev`
2. Visit `/.well-known/oauth-authorization-server` to see OAuth metadata
3. Test authentication flow with your MCP client
4. Verify token-based API access to `/api/vercel/sse`

## Notes

- The implementation uses a local SQLite database for better-auth
- Private keys are auto-generated but should be managed securely in production
- Token verification happens on every protected request
- No session management or cookies - purely token-based authentication