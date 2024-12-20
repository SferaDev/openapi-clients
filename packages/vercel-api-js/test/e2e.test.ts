import { describe, it, expect, beforeAll } from 'vitest';
import { VercelApi } from '../dist';
import dotenv from 'dotenv';

dotenv.config();

describe('Vercel API E2E Tests', () => {
  let client: VercelApi;

  beforeAll(() => {
    const token = process.env.VERCEL_API_TOKEN;

    if (!token) {
      throw new Error('Missing environment variable for Vercel API');
    }

    client = new VercelApi({
      token,
    });
  });

  it('should compile the package correctly', () => {
    expect(client).toBeDefined();
  });

  it('should connect and authenticate against the Vercel API', async () => {
    const response = await client.get('/v1/projects');
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});
