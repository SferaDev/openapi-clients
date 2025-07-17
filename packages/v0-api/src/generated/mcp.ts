import client from '../utils/fetcher'
import type { FetcherConfig, ErrorWrapper } from '../utils/fetcher'
import type { CallToolResult } from '../utils/mcp'
import type {
  ChatsCreateMutationResponse,
  ChatsCreate401,
  ChatsCreate403,
  ChatsCreate404,
  ChatsCreate409,
  ChatsCreate413,
  ChatsCreate422,
  ChatsCreate429,
  ChatsCreate500,
  ChatsFindQueryResponse,
  ChatsFindQueryParams,
  ChatsFind401,
  ChatsFind403,
  ChatsFind404,
  ChatsFind409,
  ChatsFind413,
  ChatsFind422,
  ChatsFind429,
  ChatsFind500,
  ChatsDeleteMutationResponse,
  ChatsDeletePathParams,
  ChatsDelete401,
  ChatsDelete403,
  ChatsDelete404,
  ChatsDelete409,
  ChatsDelete413,
  ChatsDelete422,
  ChatsDelete429,
  ChatsDelete500,
  ChatsGetByIdQueryResponse,
  ChatsGetByIdPathParams,
  ChatsGetById401,
  ChatsGetById403,
  ChatsGetById404,
  ChatsGetById409,
  ChatsGetById413,
  ChatsGetById422,
  ChatsGetById429,
  ChatsGetById500,
  ChatsUpdateMutationResponse,
  ChatsUpdatePathParams,
  ChatsUpdate401,
  ChatsUpdate403,
  ChatsUpdate404,
  ChatsUpdate409,
  ChatsUpdate413,
  ChatsUpdate422,
  ChatsUpdate429,
  ChatsUpdate500,
  ChatsFavoriteMutationResponse,
  ChatsFavoritePathParams,
  ChatsFavorite401,
  ChatsFavorite403,
  ChatsFavorite404,
  ChatsFavorite409,
  ChatsFavorite413,
  ChatsFavorite422,
  ChatsFavorite429,
  ChatsFavorite500,
  ChatsForkMutationResponse,
  ChatsForkPathParams,
  ChatsFork401,
  ChatsFork403,
  ChatsFork404,
  ChatsFork409,
  ChatsFork413,
  ChatsFork422,
  ChatsFork429,
  ChatsFork500,
  ProjectsGetByChatIdQueryResponse,
  ProjectsGetByChatIdPathParams,
  ProjectsGetByChatId401,
  ProjectsGetByChatId403,
  ProjectsGetByChatId404,
  ProjectsGetByChatId409,
  ProjectsGetByChatId413,
  ProjectsGetByChatId422,
  ProjectsGetByChatId429,
  ProjectsGetByChatId500,
  ChatsSendMessageMutationResponse,
  ChatsSendMessagePathParams,
  ChatsSendMessage401,
  ChatsSendMessage403,
  ChatsSendMessage404,
  ChatsSendMessage409,
  ChatsSendMessage413,
  ChatsSendMessage422,
  ChatsSendMessage429,
  ChatsSendMessage500,
  ChatsGetMetadataQueryResponse,
  ChatsGetMetadataPathParams,
  ChatsGetMetadata401,
  ChatsGetMetadata403,
  ChatsGetMetadata404,
  ChatsGetMetadata409,
  ChatsGetMetadata413,
  ChatsGetMetadata422,
  ChatsGetMetadata429,
  ChatsGetMetadata500,
  ChatsResumeMutationResponse,
  ChatsResumePathParams,
  ChatsResume401,
  ChatsResume403,
  ChatsResume404,
  ChatsResume409,
  ChatsResume413,
  ChatsResume422,
  ChatsResume429,
  ChatsResume500,
  DeploymentsFindLogsQueryResponse,
  DeploymentsFindLogsPathParams,
  DeploymentsFindLogsQueryParams,
  DeploymentsFindLogs401,
  DeploymentsFindLogs403,
  DeploymentsFindLogs404,
  DeploymentsFindLogs409,
  DeploymentsFindLogs413,
  DeploymentsFindLogs422,
  DeploymentsFindLogs429,
  DeploymentsFindLogs500,
  DeploymentsFindErrorsQueryResponse,
  DeploymentsFindErrorsPathParams,
  DeploymentsFindErrors401,
  DeploymentsFindErrors403,
  DeploymentsFindErrors404,
  DeploymentsFindErrors409,
  DeploymentsFindErrors413,
  DeploymentsFindErrors422,
  DeploymentsFindErrors429,
  DeploymentsFindErrors500,
  IntegrationsVercelProjectsFindQueryResponse,
  IntegrationsVercelProjectsFind401,
  IntegrationsVercelProjectsFind403,
  IntegrationsVercelProjectsFind404,
  IntegrationsVercelProjectsFind409,
  IntegrationsVercelProjectsFind413,
  IntegrationsVercelProjectsFind422,
  IntegrationsVercelProjectsFind429,
  IntegrationsVercelProjectsFind500,
  IntegrationsVercelProjectsCreateMutationResponse,
  IntegrationsVercelProjectsCreate401,
  IntegrationsVercelProjectsCreate403,
  IntegrationsVercelProjectsCreate404,
  IntegrationsVercelProjectsCreate409,
  IntegrationsVercelProjectsCreate413,
  IntegrationsVercelProjectsCreate422,
  IntegrationsVercelProjectsCreate429,
  IntegrationsVercelProjectsCreate500,
  ProjectsFindQueryResponse,
  ProjectsFind401,
  ProjectsFind403,
  ProjectsFind404,
  ProjectsFind409,
  ProjectsFind413,
  ProjectsFind422,
  ProjectsFind429,
  ProjectsFind500,
  ProjectsCreateMutationResponse,
  ProjectsCreate401,
  ProjectsCreate403,
  ProjectsCreate404,
  ProjectsCreate409,
  ProjectsCreate413,
  ProjectsCreate422,
  ProjectsCreate429,
  ProjectsCreate500,
  ProjectsAssignMutationResponse,
  ProjectsAssignPathParams,
  ProjectsAssign401,
  ProjectsAssign403,
  ProjectsAssign404,
  ProjectsAssign409,
  ProjectsAssign413,
  ProjectsAssign422,
  ProjectsAssign429,
  ProjectsAssign500,
  RateLimitsFindQueryResponse,
  RateLimitsFindQueryParams,
  RateLimitsFind401,
  RateLimitsFind403,
  RateLimitsFind404,
  RateLimitsFind409,
  RateLimitsFind413,
  RateLimitsFind422,
  RateLimitsFind429,
  RateLimitsFind500,
  UserGetQueryResponse,
  UserGet401,
  UserGet403,
  UserGet404,
  UserGet409,
  UserGet413,
  UserGet422,
  UserGet429,
  UserGet500,
  UserGetBillingQueryResponse,
  UserGetBillingQueryParams,
  UserGetBilling401,
  UserGetBilling403,
  UserGetBilling404,
  UserGetBilling409,
  UserGetBilling413,
  UserGetBilling422,
  UserGetBilling429,
  UserGetBilling500,
  UserGetPlanQueryResponse,
  UserGetPlan401,
  UserGetPlan403,
  UserGetPlan404,
  UserGetPlan409,
  UserGetPlan413,
  UserGetPlan422,
  UserGetPlan429,
  UserGetPlan500,
  UserGetScopesQueryResponse,
  UserGetScopes401,
  UserGetScopes403,
  UserGetScopes404,
  UserGetScopes409,
  UserGetScopes413,
  UserGetScopes422,
  UserGetScopes429,
  UserGetScopes500,
} from './types.ts'
import {
  chatsFindQueryParamsSchema,
  chatsDeletePathParamsSchema,
  chatsGetByIdPathParamsSchema,
  chatsUpdatePathParamsSchema,
  chatsFavoritePathParamsSchema,
  chatsForkPathParamsSchema,
  projectsGetByChatIdPathParamsSchema,
  chatsSendMessagePathParamsSchema,
  chatsGetMetadataPathParamsSchema,
  chatsResumePathParamsSchema,
  deploymentsFindLogsPathParamsSchema,
  deploymentsFindLogsQueryParamsSchema,
  deploymentsFindErrorsPathParamsSchema,
  projectsAssignPathParamsSchema,
  rateLimitsFindQueryParamsSchema,
  userGetBillingQueryParamsSchema,
} from './schemas.ts'

/**
 * @description Create a new chat
 * @summary Create Chat
 * {@link chats}
 */
export async function chatsCreate({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    ChatsCreateMutationResponse,
    ErrorWrapper<ChatsCreate401 | ChatsCreate403 | ChatsCreate404 | ChatsCreate409 | ChatsCreate413 | ChatsCreate422 | ChatsCreate429 | ChatsCreate500>,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'POST', url: `chats`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find all chats
 * @summary Find Chats
 * {@link chats}
 */
export async function chatsFind({
  queryParams,
  config = {},
}: {
  queryParams?: ChatsFindQueryParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    ChatsFindQueryResponse,
    ErrorWrapper<ChatsFind401 | ChatsFind403 | ChatsFind404 | ChatsFind409 | ChatsFind413 | ChatsFind422 | ChatsFind429 | ChatsFind500>,
    null,
    Record<string, string>,
    ChatsFindQueryParams,
    Record<string, string>
  >({ method: 'GET', url: `chats`, queryParams, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Delete a chat
 * @summary Delete Chat
 * {@link chatsChatId}
 */
export async function chatsDelete({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsDeletePathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsDeleteMutationResponse,
    ErrorWrapper<ChatsDelete401 | ChatsDelete403 | ChatsDelete404 | ChatsDelete409 | ChatsDelete413 | ChatsDelete422 | ChatsDelete429 | ChatsDelete500>,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsDeletePathParams
  >({ method: 'DELETE', url: `chatsChatId`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get a chat
 * @summary Get Chat
 * {@link chatsChatId}
 */
export async function chatsGetById({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsGetByIdPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsGetByIdQueryResponse,
    ErrorWrapper<ChatsGetById401 | ChatsGetById403 | ChatsGetById404 | ChatsGetById409 | ChatsGetById413 | ChatsGetById422 | ChatsGetById429 | ChatsGetById500>,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsGetByIdPathParams
  >({ method: 'GET', url: `chatsChatId`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Update a chat
 * @summary Update Chat
 * {@link chatsChatId}
 */
export async function chatsUpdate({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsUpdatePathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsUpdateMutationResponse,
    ErrorWrapper<ChatsUpdate401 | ChatsUpdate403 | ChatsUpdate404 | ChatsUpdate409 | ChatsUpdate413 | ChatsUpdate422 | ChatsUpdate429 | ChatsUpdate500>,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsUpdatePathParams
  >({ method: 'PATCH', url: `chatsChatId`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Favorite a chat
 * @summary Favorite Chat
 * {@link chatsChatIdFavorite}
 */
export async function chatsFavorite({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsFavoritePathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsFavoriteMutationResponse,
    ErrorWrapper<
      ChatsFavorite401 | ChatsFavorite403 | ChatsFavorite404 | ChatsFavorite409 | ChatsFavorite413 | ChatsFavorite422 | ChatsFavorite429 | ChatsFavorite500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsFavoritePathParams
  >({ method: 'PUT', url: `chatsChatIdFavorite`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Fork a version in a chat
 * @summary Fork Chat
 * {@link chatsChatIdFork}
 */
export async function chatsFork({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsForkPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsForkMutationResponse,
    ErrorWrapper<ChatsFork401 | ChatsFork403 | ChatsFork404 | ChatsFork409 | ChatsFork413 | ChatsFork422 | ChatsFork429 | ChatsFork500>,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsForkPathParams
  >({ method: 'POST', url: `chatsChatIdFork`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get the project for a chat
 * @summary Get Project by Chat ID
 * {@link chatsChatIdProject}
 */
export async function projectsGetByChatId({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ProjectsGetByChatIdPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ProjectsGetByChatIdQueryResponse,
    ErrorWrapper<
      | ProjectsGetByChatId401
      | ProjectsGetByChatId403
      | ProjectsGetByChatId404
      | ProjectsGetByChatId409
      | ProjectsGetByChatId413
      | ProjectsGetByChatId422
      | ProjectsGetByChatId429
      | ProjectsGetByChatId500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    ProjectsGetByChatIdPathParams
  >({ method: 'GET', url: `chatsChatIdProject`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Create a new message in a chat
 * @summary Create Message
 * {@link chatsChatIdMessages}
 */
export async function chatsSendMessage({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsSendMessagePathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsSendMessageMutationResponse,
    ErrorWrapper<
      | ChatsSendMessage401
      | ChatsSendMessage403
      | ChatsSendMessage404
      | ChatsSendMessage409
      | ChatsSendMessage413
      | ChatsSendMessage422
      | ChatsSendMessage429
      | ChatsSendMessage500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsSendMessagePathParams
  >({ method: 'POST', url: `chatsChatIdMessages`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get the metadata for a chat
 * @summary Get Chat Metadata
 * {@link chatsChatIdMetadata}
 */
export async function chatsGetMetadata({
  pathParams: { chatId },
  config = {},
}: {
  pathParams: ChatsGetMetadataPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  const data = await request<
    ChatsGetMetadataQueryResponse,
    ErrorWrapper<
      | ChatsGetMetadata401
      | ChatsGetMetadata403
      | ChatsGetMetadata404
      | ChatsGetMetadata409
      | ChatsGetMetadata413
      | ChatsGetMetadata422
      | ChatsGetMetadata429
      | ChatsGetMetadata500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsGetMetadataPathParams
  >({ method: 'GET', url: `chatsChatIdMetadata`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Resume a chat message
 * @summary Resume Chat Message
 * {@link chatsChatIdMessagesMessageIdResume}
 */
export async function chatsResume({
  pathParams: { chatId, messageId },
  config = {},
}: {
  pathParams: ChatsResumePathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!chatId) {
    throw new Error(`Missing required path parameter: chatId`)
  }

  if (!messageId) {
    throw new Error(`Missing required path parameter: messageId`)
  }

  const data = await request<
    ChatsResumeMutationResponse,
    ErrorWrapper<ChatsResume401 | ChatsResume403 | ChatsResume404 | ChatsResume409 | ChatsResume413 | ChatsResume422 | ChatsResume429 | ChatsResume500>,
    null,
    Record<string, string>,
    Record<string, string>,
    ChatsResumePathParams
  >({ method: 'POST', url: `chatsChatIdMessagesMessageIdResume`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find logs for a deployment
 * @summary Find Deployment Logs
 * {@link deploymentsDeploymentIdLogs}
 */
export async function deploymentsFindLogs({
  pathParams: { deploymentId },
  queryParams,
  config = {},
}: {
  pathParams: DeploymentsFindLogsPathParams
  queryParams?: DeploymentsFindLogsQueryParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!deploymentId) {
    throw new Error(`Missing required path parameter: deploymentId`)
  }

  const data = await request<
    DeploymentsFindLogsQueryResponse,
    ErrorWrapper<
      | DeploymentsFindLogs401
      | DeploymentsFindLogs403
      | DeploymentsFindLogs404
      | DeploymentsFindLogs409
      | DeploymentsFindLogs413
      | DeploymentsFindLogs422
      | DeploymentsFindLogs429
      | DeploymentsFindLogs500
    >,
    null,
    Record<string, string>,
    DeploymentsFindLogsQueryParams,
    DeploymentsFindLogsPathParams
  >({ method: 'GET', url: `deploymentsDeploymentIdLogs`, queryParams, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find errors for a deployment
 * @summary Find Deployment Errors
 * {@link deploymentsDeploymentIdErrors}
 */
export async function deploymentsFindErrors({
  pathParams: { deploymentId },
  config = {},
}: {
  pathParams: DeploymentsFindErrorsPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!deploymentId) {
    throw new Error(`Missing required path parameter: deploymentId`)
  }

  const data = await request<
    DeploymentsFindErrorsQueryResponse,
    ErrorWrapper<
      | DeploymentsFindErrors401
      | DeploymentsFindErrors403
      | DeploymentsFindErrors404
      | DeploymentsFindErrors409
      | DeploymentsFindErrors413
      | DeploymentsFindErrors422
      | DeploymentsFindErrors429
      | DeploymentsFindErrors500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    DeploymentsFindErrorsPathParams
  >({ method: 'GET', url: `deploymentsDeploymentIdErrors`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find all Vercel projects
 * @summary Find Vercel Projects
 * {@link integrationsVercelProjects}
 */
export async function integrationsVercelProjectsFind({
  config = {},
}: {
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    IntegrationsVercelProjectsFindQueryResponse,
    ErrorWrapper<
      | IntegrationsVercelProjectsFind401
      | IntegrationsVercelProjectsFind403
      | IntegrationsVercelProjectsFind404
      | IntegrationsVercelProjectsFind409
      | IntegrationsVercelProjectsFind413
      | IntegrationsVercelProjectsFind422
      | IntegrationsVercelProjectsFind429
      | IntegrationsVercelProjectsFind500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'GET', url: `integrationsVercelProjects`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Create a new Vercel project
 * @summary Create Vercel Project
 * {@link integrationsVercelProjects}
 */
export async function integrationsVercelProjectsCreate({
  config = {},
}: {
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    IntegrationsVercelProjectsCreateMutationResponse,
    ErrorWrapper<
      | IntegrationsVercelProjectsCreate401
      | IntegrationsVercelProjectsCreate403
      | IntegrationsVercelProjectsCreate404
      | IntegrationsVercelProjectsCreate409
      | IntegrationsVercelProjectsCreate413
      | IntegrationsVercelProjectsCreate422
      | IntegrationsVercelProjectsCreate429
      | IntegrationsVercelProjectsCreate500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'POST', url: `integrationsVercelProjects`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find all projects
 * @summary Find Projects
 * {@link projects}
 */
export async function projectsFind({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    ProjectsFindQueryResponse,
    ErrorWrapper<ProjectsFind401 | ProjectsFind403 | ProjectsFind404 | ProjectsFind409 | ProjectsFind413 | ProjectsFind422 | ProjectsFind429 | ProjectsFind500>,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'GET', url: `projects`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Create a new project
 * @summary Create Project
 * {@link projects}
 */
export async function projectsCreate({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    ProjectsCreateMutationResponse,
    ErrorWrapper<
      | ProjectsCreate401
      | ProjectsCreate403
      | ProjectsCreate404
      | ProjectsCreate409
      | ProjectsCreate413
      | ProjectsCreate422
      | ProjectsCreate429
      | ProjectsCreate500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'POST', url: `projects`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Assign a project to a chat
 * @summary Assign Project to Chat
 * {@link projectsProjectIdAssign}
 */
export async function projectsAssign({
  pathParams: { projectId },
  config = {},
}: {
  pathParams: ProjectsAssignPathParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  if (!projectId) {
    throw new Error(`Missing required path parameter: projectId`)
  }

  const data = await request<
    ProjectsAssignMutationResponse,
    ErrorWrapper<
      | ProjectsAssign401
      | ProjectsAssign403
      | ProjectsAssign404
      | ProjectsAssign409
      | ProjectsAssign413
      | ProjectsAssign422
      | ProjectsAssign429
      | ProjectsAssign500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    ProjectsAssignPathParams
  >({ method: 'POST', url: `projectsProjectIdAssign`, ...requestConfig, headers: { 'Content-Type': 'applicationJson', ...requestConfig.headers } })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Find the rate limit for a scope
 * @summary Find Rate Limit
 * {@link rateLimits}
 */
export async function rateLimitsFind({
  queryParams,
  config = {},
}: {
  queryParams?: RateLimitsFindQueryParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    RateLimitsFindQueryResponse,
    ErrorWrapper<
      | RateLimitsFind401
      | RateLimitsFind403
      | RateLimitsFind404
      | RateLimitsFind409
      | RateLimitsFind413
      | RateLimitsFind422
      | RateLimitsFind429
      | RateLimitsFind500
    >,
    null,
    Record<string, string>,
    RateLimitsFindQueryParams,
    Record<string, string>
  >({ method: 'GET', url: `rateLimits`, queryParams, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get the user
 * @summary Get User
 * {@link user}
 */
export async function userGet({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    UserGetQueryResponse,
    ErrorWrapper<UserGet401 | UserGet403 | UserGet404 | UserGet409 | UserGet413 | UserGet422 | UserGet429 | UserGet500>,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'GET', url: `user`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get the billing for the user
 * @summary Get Billing
 * {@link userBilling}
 */
export async function userGetBilling({
  queryParams,
  config = {},
}: {
  queryParams?: UserGetBillingQueryParams
  config?: Partial<FetcherConfig> & { client?: typeof client }
}): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    UserGetBillingQueryResponse,
    ErrorWrapper<
      | UserGetBilling401
      | UserGetBilling403
      | UserGetBilling404
      | UserGetBilling409
      | UserGetBilling413
      | UserGetBilling422
      | UserGetBilling429
      | UserGetBilling500
    >,
    null,
    Record<string, string>,
    UserGetBillingQueryParams,
    Record<string, string>
  >({ method: 'GET', url: `userBilling`, queryParams, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get the plan for the user
 * @summary Get Plan
 * {@link userPlan}
 */
export async function userGetPlan({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    UserGetPlanQueryResponse,
    ErrorWrapper<UserGetPlan401 | UserGetPlan403 | UserGetPlan404 | UserGetPlan409 | UserGetPlan413 | UserGetPlan422 | UserGetPlan429 | UserGetPlan500>,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'GET', url: `userPlan`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

/**
 * @description Get all scopes for the user
 * @summary Get User Scopes
 * {@link userScopes}
 */
export async function userGetScopes({ config = {} }: { config?: Partial<FetcherConfig> & { client?: typeof client } }): Promise<Promise<CallToolResult>> {
  const { client: request = client, ...requestConfig } = config

  const data = await request<
    UserGetScopesQueryResponse,
    ErrorWrapper<
      UserGetScopes401 | UserGetScopes403 | UserGetScopes404 | UserGetScopes409 | UserGetScopes413 | UserGetScopes422 | UserGetScopes429 | UserGetScopes500
    >,
    null,
    Record<string, string>,
    Record<string, string>,
    Record<string, string>
  >({ method: 'GET', url: `userScopes`, ...requestConfig })
  return { content: [{ type: 'text', text: JSON.stringify(data) }] }
}

import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'

export function initMcpTools<Server>(serverLike: Server, config: FetcherConfig) {
  const server = serverLike as McpServer

  server.tool('chatsCreate', 'Create a new chat', async () => {
    try {
      return await chatsCreate({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsFind', 'Find all chats', { queryParams: chatsFindQueryParamsSchema }, async ({ queryParams }) => {
    try {
      return await chatsFind({ queryParams, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsDelete', 'Delete a chat', { chatId: chatsDeletePathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsDelete({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsGetById', 'Get a chat', { chatId: chatsGetByIdPathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsGetById({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsUpdate', 'Update a chat', { chatId: chatsUpdatePathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsUpdate({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsFavorite', 'Favorite a chat', { chatId: chatsFavoritePathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsFavorite({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsFork', 'Fork a version in a chat', { chatId: chatsForkPathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsFork({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('projectsGetByChatId', 'Get the project for a chat', { chatId: projectsGetByChatIdPathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await projectsGetByChatId({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsSendMessage', 'Create a new message in a chat', { chatId: chatsSendMessagePathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsSendMessage({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('chatsGetMetadata', 'Get the metadata for a chat', { chatId: chatsGetMetadataPathParamsSchema.shape['chatId'] }, async ({ chatId }) => {
    try {
      return await chatsGetMetadata({ pathParams: { chatId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool(
    'chatsResume',
    'Resume a chat message',
    { chatId: chatsResumePathParamsSchema.shape['chatId'], messageId: chatsResumePathParamsSchema.shape['messageId'] },
    async ({ chatId, messageId }) => {
      try {
        return await chatsResume({ pathParams: { chatId, messageId }, config })
      } catch (error) {
        return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
      }
    },
  )

  server.tool(
    'deploymentsFindLogs',
    'Find logs for a deployment',
    { deploymentId: deploymentsFindLogsPathParamsSchema.shape['deploymentId'], queryParams: deploymentsFindLogsQueryParamsSchema },
    async ({ deploymentId, queryParams }) => {
      try {
        return await deploymentsFindLogs({ pathParams: { deploymentId }, queryParams, config })
      } catch (error) {
        return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
      }
    },
  )

  server.tool(
    'deploymentsFindErrors',
    'Find errors for a deployment',
    { deploymentId: deploymentsFindErrorsPathParamsSchema.shape['deploymentId'] },
    async ({ deploymentId }) => {
      try {
        return await deploymentsFindErrors({ pathParams: { deploymentId }, config })
      } catch (error) {
        return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
      }
    },
  )

  server.tool('integrationsVercelProjectsFind', 'Find all Vercel projects', async () => {
    try {
      return await integrationsVercelProjectsFind({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('integrationsVercelProjectsCreate', 'Create a new Vercel project', async () => {
    try {
      return await integrationsVercelProjectsCreate({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('projectsFind', 'Find all projects', async () => {
    try {
      return await projectsFind({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('projectsCreate', 'Create a new project', async () => {
    try {
      return await projectsCreate({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('projectsAssign', 'Assign a project to a chat', { projectId: projectsAssignPathParamsSchema.shape['projectId'] }, async ({ projectId }) => {
    try {
      return await projectsAssign({ pathParams: { projectId }, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('rateLimitsFind', 'Find the rate limit for a scope', { queryParams: rateLimitsFindQueryParamsSchema }, async ({ queryParams }) => {
    try {
      return await rateLimitsFind({ queryParams, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('userGet', 'Get the user', async () => {
    try {
      return await userGet({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('userGetBilling', 'Get the billing for the user', { queryParams: userGetBillingQueryParamsSchema }, async ({ queryParams }) => {
    try {
      return await userGetBilling({ queryParams, config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('userGetPlan', 'Get the plan for the user', async () => {
    try {
      return await userGetPlan({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })

  server.tool('userGetScopes', 'Get all scopes for the user', async () => {
    try {
      return await userGetScopes({ config })
    } catch (error) {
      return { isError: true, content: [{ type: 'text', text: JSON.stringify(error) }] }
    }
  })
}