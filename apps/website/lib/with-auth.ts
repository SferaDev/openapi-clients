import { NextRequest } from 'next/server';
import { jwtVerify, createRemoteJWKSet } from 'jose';

const VERCEL_JWKS_URL = 'https://vercel.com/.well-known/jwks.json';
const JWKS = createRemoteJWKSet(new URL(VERCEL_JWKS_URL));

export function withAuth(
  handler: (req: NextRequest, token: string, payload: any) => Promise<Response>
): (req: NextRequest) => Promise<Response> {
  return async (req: NextRequest) => {
    const headers = new Headers(req.headers);
    const authHeader = headers.get('Authorization');
    if (!authHeader?.startsWith('Bearer ')) {
      return Response.json(
        { error: 'Missing access token' },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Bearer error="invalid_token", error_description="Missing access token"'
          }
        }
      );
    }

    const token = authHeader.replace('Bearer ', '');
    
    try {
      // Verify JWT token using Vercel's JWKS
      const { payload } = await jwtVerify(token, JWKS, {
        issuer: 'https://vercel.com',
        audience: process.env.VERCEL_CLIENT_ID || process.env.NEXT_PUBLIC_VERCEL_CLIENT_ID
      });
      
      // Validate required claims for Vercel tokens
      if (!payload.sub || !payload.aud) {
        return Response.json(
          { error: 'Invalid token structure' },
          {
            status: 401,
            headers: {
              'WWW-Authenticate': 'Bearer error="invalid_token", error_description="Invalid token structure"'
            }
          }
        );
      }

      // Check if token has required scopes for Vercel API access
      const scopes = (payload.scope as string)?.split(' ') || [];
      const requiredScopes = ['user:read'];
      const hasRequiredScopes = requiredScopes.some(scope => scopes.includes(scope));
      
      if (scopes.length > 0 && !hasRequiredScopes) {
        return Response.json(
          { error: 'Insufficient scope' },
          {
            status: 403,
            headers: {
              'WWW-Authenticate': 'Bearer error="insufficient_scope", error_description="Token lacks required scopes for Vercel API access"'
            }
          }
        );
      }

      const authReq = new NextRequest(req.url, {
        method: req.method,
        headers: req.headers,
        body: req.body
      });

      return handler(authReq, token, payload);
    } catch (error) {
      console.error('JWT verification failed:', error);
      return Response.json(
        { error: 'Invalid or expired token' },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Bearer error="invalid_token", error_description="Token is invalid or expired"'
          }
        }
      );
    }
  };
}
