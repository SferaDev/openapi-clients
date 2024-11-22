# Zoom API JavaScript SDK

Unofficial Zoom API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const zoom = new ZoomApi({ token: 'token' });
const recordings = await zoom.request('GET /users/{userId}/recordings', {
  pathParams: { userId: 'user@email.com' }
});
```
