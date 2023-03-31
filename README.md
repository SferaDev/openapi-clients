# Vercel API JavaScript SDK

Unofficial Vercel API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const vercel = new VercelApi({ token: "token" });
const { projects } = await vercel.api.projects.getProjects({});
```
