import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@mcpauth/auth', 'vercel-api-js'],
  experimental: {
    authInterrupts: true
  },
  async rewrites() {
    return [
      {
        source: '/.well-known/:slug*',
        destination: '/api/oauth/.well-known/:slug*'
      }
    ];
  }
};

export default nextConfig;
