import { describe, it, expect, beforeAll } from 'vitest';
import { NetlifyClient } from '../dist';
import dotenv from 'dotenv';

dotenv.config();

describe('Netlify API E2E Tests', () => {
  let client: NetlifyClient;

  beforeAll(() => {
    const token = process.env.NETLIFY_API_TOKEN;

    if (!token) {
      throw new Error('Missing environment variable for Netlify API');
    }

    client = new NetlifyClient({
      token,
    });
  });

  it('should compile the package correctly', () => {
    expect(client).toBeDefined();
  });

  it('should connect and authenticate against the Netlify API', async () => {
    const response = await client.get('/user');
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});
