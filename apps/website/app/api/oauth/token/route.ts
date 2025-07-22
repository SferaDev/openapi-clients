import { NextRequest } from 'next/server';
import { mcpAuth } from '@/lib/mcpauth';

export async function POST(req: NextRequest) {
  try {
    return mcpAuth.token(req);
  } catch (error) {
    console.error('OAuth token error:', error);
    return Response.json(
      { error: 'Token exchange failed' },
      { status: 500 }
    );
  }
}