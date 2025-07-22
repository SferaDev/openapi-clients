import { NextRequest } from 'next/server';
import crypto from 'crypto';

export async function GET(req: NextRequest) {
  try {
    // Get the private key from environment
    const privateKeyPem = process.env.MCPAUTH_PRIVATE_KEY?.replace(/\\n/g, '\n') || '';
    
    if (!privateKeyPem) {
      return Response.json(
        { error: 'Private key not configured' },
        { status: 500 }
      );
    }

    // Extract public key from private key
    const privateKey = crypto.createPrivateKey(privateKeyPem);
    const publicKey = crypto.createPublicKey(privateKey);
    const publicKeyPem = publicKey.export({ type: 'spki', format: 'pem' }) as string;

    // Convert to JWK format
    const publicKeyObject = crypto.createPublicKey(publicKeyPem);
    const keyData = publicKeyObject.export({ format: 'jwk' });

    const jwks = {
      keys: [
        {
          ...keyData,
          kid: 'mcpauth-key-1',
          alg: 'RS256',
          use: 'sig',
        }
      ]
    };

    return Response.json(jwks, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  } catch (error) {
    console.error('JWKS error:', error);
    return Response.json(
      { error: 'Failed to generate JWKS' },
      { status: 500 }
    );
  }
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