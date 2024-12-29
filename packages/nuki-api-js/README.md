# Nuki API JavaScript SDK

Unofficial Nuki API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const nuki = new NukiApi({ token: 'token' });

// Direct methods
const { accountId, name } = await nuki.request('GET /account', {});

// Namespaced methods
await nuki.api.smartlock.postSmartlockLockActionResource({ pathParams: { smartlockId: 'smartlockId' } });
```
