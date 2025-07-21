import { NextResponse } from 'next/server'

export async function GET() {
  const metadata = {
    resource_registration_endpoint: 'https://vercel.com/api/oauth/resource-registration',
    authorization_servers: [
      'https://vercel.com'
    ],
    scopes_supported: [
      'user:read',
      'project:read',
      'project:write',
      'team:read'
    ],
    bearer_methods_supported: [
      'header'
    ],
    resource_documentation: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/docs/oauth`,
    resource: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/vercel/stdio`,
    resource_servers: [
      {
        resource_server: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}`,
        authorization_servers: [
          'https://vercel.com'
        ],
        scopes_required: ['user:read', 'project:read']
      }
    ],
    jwks_uri: 'https://vercel.com/.well-known/jwks.json'
  }

  return NextResponse.json(metadata, {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600'
    }
  })
}