import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  const baseUrl = new URL(req.url).origin;
  
  const metadata = {
    resource: `${baseUrl}/api/vercel/sse`,
    authorization_servers: [`${baseUrl}/.well-known/oauth-authorization-server`],
    jwks_uri: `${baseUrl}/.well-known/jwks.json`,
    scopes_supported: ["read", "write"],
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code", "refresh_token"],
    token_endpoint_auth_methods_supported: ["client_secret_basic", "client_secret_post"]
  };

  return Response.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  });
}

export async function OPTIONS(req: NextRequest) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}