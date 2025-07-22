import { NextRequest } from 'next/server';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';

export function withAuth(
  handler: (req: NextRequest, token: string) => Promise<Response>
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
      // Verify JWT token using the private key
      const privateKeyPem = process.env.MCPAUTH_PRIVATE_KEY?.replace(/\\n/g, '\n');
      if (!privateKeyPem) {
        throw new Error('Private key not configured');
      }

      const privateKey = crypto.createPrivateKey(privateKeyPem);
      const publicKey = crypto.createPublicKey(privateKey);
      const publicKeyPem = publicKey.export({ type: 'spki', format: 'pem' });

      // Verify the JWT token
      jwt.verify(token, publicKeyPem, { algorithms: ['RS256'] });

      const authReq = new NextRequest(req.url, {
        method: req.method,
        headers: req.headers,
        body: req.body
      });

      return handler(authReq, token);
    } catch (error) {
      console.error('Token verification failed:', error);
      return Response.json(
        { error: 'Invalid access token' },
        {
          status: 401,
          headers: {
            'WWW-Authenticate': 'Bearer error="invalid_token", error_description="Invalid access token"'
          }
        }
      );
    }
  };
}
