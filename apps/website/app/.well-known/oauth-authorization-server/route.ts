import { NextRequest } from 'next/server';
import { mcpAuth } from '@/lib/mcpauth';

export async function GET(req: NextRequest) {
  try {
    return mcpAuth.authorizationServer(req);
  } catch (error) {
    console.error('OAuth authorization server error:', error);
    return Response.json(
      { error: 'Internal server error' },
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