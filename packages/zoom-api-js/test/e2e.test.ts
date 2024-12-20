import { describe, it, expect, beforeAll } from 'vitest';
import { ZoomApi } from '../dist';

describe('Zoom API E2E Tests', () => {
  let zoomApi: ZoomApi;

  beforeAll(() => {
    require('dotenv').config();
    const token = process.env.ZOOM_API_TOKEN;
    zoomApi = new ZoomApi({ token });
  });

  it('should compile the package well', () => {
    expect(zoomApi).toBeDefined();
  });

  it('should connect and authenticate against the API', async () => {
    const response = await zoomApi.request('GET /users/me', {});
    expect(response).toBeDefined();
    expect(response.id).toBeDefined();
  });
});
