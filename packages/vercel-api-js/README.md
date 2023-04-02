# Vercel API JavaScript SDK

Unofficial Vercel API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const vercel = new VercelApi({ token: "token" });
await vercel.api.projects.createProject({ body: { name: "Awesome project", buildCommand: "pnpm build" } });
const { projects } = await vercel.api.projects.getProjects();
```
