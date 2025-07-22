import { NextRequest } from 'next/server';
import { mcpAuth } from '@/lib/mcpauth';

export async function GET(req: NextRequest) {
  try {
    return mcpAuth.authorize(req);
  } catch (error) {
    console.error('OAuth authorize error:', error);
    return Response.json(
      { error: 'Authorization failed' },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    return mcpAuth.authorize(req);
  } catch (error) {
    console.error('OAuth authorize POST error:', error);
    return Response.json(
      { error: 'Authorization failed' },
      { status: 500 }
    );
  }
}