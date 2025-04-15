# LiteLLM API JavaScript SDK

Unofficial LiteLLM API JavaScript SDK built from the OpenAPI specification and with TypeScript types.

```ts
const litellm = new LiteLLMApi({ baseUrl, token });

const assistants = await litellm.request('GET /assistants', {});

const models = await litellm.api.modelManagement.modelListModelsGet({ queryParams: { team_id } });
```
