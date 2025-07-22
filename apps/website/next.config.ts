import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  transpilePackages: ['@mcpauth/auth'],
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
