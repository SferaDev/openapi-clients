# Keycloak API JavaScript SDK

Unofficial Keycloak API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const keycloak = new KeycloakApi({ token: 'token' });
const realms = await keycloak.request('GET /admin/realms', {});
```
