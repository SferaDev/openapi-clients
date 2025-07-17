import { NextRequest } from 'next/server';

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

    const authReq = new NextRequest(req.url, {
      method: req.method,
      headers: req.headers,
      body: req.body
    });

    return handler(authReq, authHeader.replace('Bearer ', ''));
  };
}
