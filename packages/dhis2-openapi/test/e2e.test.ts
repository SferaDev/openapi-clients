import { describe, it, expect, beforeAll } from 'vitest';
import { DHIS2Client } from '../dist';
import dotenv from 'dotenv';

dotenv.config();

describe('DHIS2 OpenAPI E2E Tests', () => {
  let client: DHIS2Client;

  beforeAll(() => {
    const baseUrl = process.env.DHIS2_BASE_URL;
    const username = process.env.DHIS2_USERNAME;
    const password = process.env.DHIS2_PASSWORD;

    if (!baseUrl || !username || !password) {
      throw new Error('Missing environment variables for DHIS2 API');
    }

    client = new DHIS2Client({
      baseUrl,
      credentials: {
        type: 'basic',
        username,
        password,
      },
    });
  });

  it('should compile the package correctly', () => {
    expect(client).toBeDefined();
  });

  it('should connect and authenticate against the DHIS2 API', async () => {
    const response = await client.get('/me');
    expect(response).toBeDefined();
    expect(response.status).toBe(200);
  });
});
