/**
 * Generated by @openapi-codegen
 *
 * @version 1.0.0
 */
import type * as Fetcher from "./fetcher";
import { fetch, FetcherExtraProps } from "./fetcher";
import type * as Schemas from "./schemas";

export type GetAccountQueryParams = {
  userProfileMetadata?: boolean;
};

export type GetAccountError = Fetcher.ErrorWrapper<undefined>;

export type GetAccountVariables = {
  queryParams?: GetAccountQueryParams;
} & FetcherExtraProps;

/**
 * Get user details for currently logged in user
 */
export const getAccount = (
  variables: GetAccountVariables,
  signal?: AbortSignal,
) =>
  fetch<
    Schemas.AccountRepresentation,
    GetAccountError,
    undefined,
    {},
    GetAccountQueryParams,
    {}
  >({ url: "/account/", method: "get", ...variables, signal });

export type UpdateAccountError = Fetcher.ErrorWrapper<undefined>;

export type UpdateAccountVariables = {
  body?: Schemas.AccountRepresentation;
} & FetcherExtraProps;

export const updateAccount = (
  variables: UpdateAccountVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    UpdateAccountError,
    Schemas.AccountRepresentation,
    {},
    {},
    {}
  >({ url: "/account/", method: "post", ...variables, signal });

export type GetApplicationsQueryParams = {
  name?: string;
};

export type GetApplicationsError = Fetcher.ErrorWrapper<undefined>;

export type GetApplicationsResponse = Schemas.ClientRepresentation[];

export type GetApplicationsVariables = {
  queryParams?: GetApplicationsQueryParams;
} & FetcherExtraProps;

export const getApplications = (
  variables: GetApplicationsVariables,
  signal?: AbortSignal,
) =>
  fetch<
    GetApplicationsResponse,
    GetApplicationsError,
    undefined,
    {},
    GetApplicationsQueryParams,
    {}
  >({ url: "/account/applications", method: "get", ...variables, signal });

export type GetConsentPathParams = {
  /**
   * client id
   */
  clientId: string;
};

export type GetConsentError = Fetcher.ErrorWrapper<undefined>;

export type GetConsentVariables = {
  pathParams: GetConsentPathParams;
} & FetcherExtraProps;

export const getConsent = (
  variables: GetConsentVariables,
  signal?: AbortSignal,
) =>
  fetch<
    Schemas.ConsentRepresentation,
    GetConsentError,
    undefined,
    {},
    {},
    GetConsentPathParams
  >({
    url: "/account/applications/{clientId}/consent",
    method: "get",
    ...variables,
    signal,
  });

export type CreateConsentPathParams = {
  /**
   * client id
   */
  clientId: string;
};

export type CreateConsentError = Fetcher.ErrorWrapper<undefined>;

export type CreateConsentVariables = {
  pathParams: CreateConsentPathParams;
} & FetcherExtraProps;

export const createConsent = (
  variables: CreateConsentVariables,
  signal?: AbortSignal,
) =>
  fetch<
    Schemas.ConsentRepresentation,
    CreateConsentError,
    undefined,
    {},
    {},
    CreateConsentPathParams
  >({
    url: "/account/applications/{clientId}/consent",
    method: "post",
    ...variables,
    signal,
  });

export type UpdateConsentPathParams = {
  /**
   * client id
   */
  clientId: string;
};

export type UpdateConsentError = Fetcher.ErrorWrapper<undefined>;

export type UpdateConsentVariables = {
  pathParams: UpdateConsentPathParams;
} & FetcherExtraProps;

export const updateConsent = (
  variables: UpdateConsentVariables,
  signal?: AbortSignal,
) =>
  fetch<
    Schemas.ConsentRepresentation,
    UpdateConsentError,
    undefined,
    {},
    {},
    UpdateConsentPathParams
  >({
    url: "/account/applications/{clientId}/consent",
    method: "put",
    ...variables,
    signal,
  });

export type DeleteConsentPathParams = {
  /**
   * client id
   */
  clientId: string;
};

export type DeleteConsentError = Fetcher.ErrorWrapper<undefined>;

export type DeleteConsentVariables = {
  pathParams: DeleteConsentPathParams;
} & FetcherExtraProps;

export const deleteConsent = (
  variables: DeleteConsentVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    DeleteConsentError,
    undefined,
    {},
    {},
    DeleteConsentPathParams
  >({
    url: "/account/applications/{clientId}/consent",
    method: "delete",
    ...variables,
    signal,
  });

export type GetCredentialsQueryParams = {
  type?: string;
  ["user-credentials"]?: boolean;
};

export type GetCredentialsError = Fetcher.ErrorWrapper<undefined>;

export type GetCredentialsResponse = Schemas.CredentialRepresentation[];

export type GetCredentialsVariables = {
  queryParams?: GetCredentialsQueryParams;
} & FetcherExtraProps;

/**
 * Get credentials for currently logged in user
 */
export const getCredentials = (
  variables: GetCredentialsVariables,
  signal?: AbortSignal,
) =>
  fetch<
    GetCredentialsResponse,
    GetCredentialsError,
    undefined,
    {},
    GetCredentialsQueryParams,
    {}
  >({ url: "/account/credentials", method: "get", ...variables, signal });

export type DeleteCredentialPathParams = {
  /**
   * Credential ID
   */
  credentialId: string;
};

export type DeleteCredentialError = Fetcher.ErrorWrapper<undefined>;

export type DeleteCredentialVariables = {
  pathParams: DeleteCredentialPathParams;
} & FetcherExtraProps;

export const deleteCredential = (
  variables: DeleteCredentialVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    DeleteCredentialError,
    undefined,
    {},
    {},
    DeleteCredentialPathParams
  >({
    url: "/account/credentials/{credentialId}",
    method: "delete",
    ...variables,
    signal,
  });

export type UpdateCredentialLabelPathParams = {
  /**
   * Credential ID
   */
  credentialId: string;
};

export type UpdateCredentialLabelError = Fetcher.ErrorWrapper<undefined>;

export type UpdateCredentialLabelVariables = {
  body?: string;
  pathParams: UpdateCredentialLabelPathParams;
} & FetcherExtraProps;

export const updateCredentialLabel = (
  variables: UpdateCredentialLabelVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    UpdateCredentialLabelError,
    string,
    {},
    {},
    UpdateCredentialLabelPathParams
  >({
    url: "/account/credentials/{credentialId}/label",
    method: "put",
    ...variables,
    signal,
  });

export type GetSessionsError = Fetcher.ErrorWrapper<undefined>;

export type GetSessionsResponse = Schemas.SessionRepresentation[];

export type GetSessionsVariables = FetcherExtraProps;

/**
 * Get sessions for currently logged in user
 */
export const getSessions = (
  variables: GetSessionsVariables,
  signal?: AbortSignal,
) =>
  fetch<GetSessionsResponse, GetSessionsError, undefined, {}, {}, {}>({
    url: "/account/sessions",
    method: "get",
    ...variables,
    signal,
  });

export type DeleteCurrentSessionError = Fetcher.ErrorWrapper<undefined>;

export type DeleteCurrentSessionVariables = FetcherExtraProps;

export const deleteCurrentSession = (
  variables: DeleteCurrentSessionVariables,
  signal?: AbortSignal,
) =>
  fetch<undefined, DeleteCurrentSessionError, undefined, {}, {}, {}>({
    url: "/account/sessions",
    method: "delete",
    ...variables,
    signal,
  });

export type GetDevicesError = Fetcher.ErrorWrapper<undefined>;

export type GetDevicesResponse = Schemas.DeviceRepresentation[];

export type GetDevicesVariables = FetcherExtraProps;

/**
 * Get devices for currently logged in user
 */
export const getDevices = (
  variables: GetDevicesVariables,
  signal?: AbortSignal,
) =>
  fetch<GetDevicesResponse, GetDevicesError, undefined, {}, {}, {}>({
    url: "/account/sessions/devices",
    method: "get",
    ...variables,
    signal,
  });

export type DeleteSessionPathParams = {
  /**
   * Session ID
   */
  sessionId: string;
};

export type DeleteSessionError = Fetcher.ErrorWrapper<undefined>;

export type DeleteSessionVariables = {
  pathParams: DeleteSessionPathParams;
} & FetcherExtraProps;

export const deleteSession = (
  variables: DeleteSessionVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    DeleteSessionError,
    undefined,
    {},
    {},
    DeleteSessionPathParams
  >({
    url: "/account/sessions/{sessionId}",
    method: "delete",
    ...variables,
    signal,
  });

export type GetLinkedAccountsError = Fetcher.ErrorWrapper<undefined>;

export type GetLinkedAccountsResponse = Schemas.LinkedAccountRepresentation[];

export type GetLinkedAccountsVariables = FetcherExtraProps;

/**
 * Get linked accounts for currently logged in user
 */
export const getLinkedAccounts = (
  variables: GetLinkedAccountsVariables,
  signal?: AbortSignal,
) =>
  fetch<
    GetLinkedAccountsResponse,
    GetLinkedAccountsError,
    undefined,
    {},
    {},
    {}
  >({ url: "/account/linked-accounts", method: "get", ...variables, signal });

export type BuildLinkingUriPathParams = {
  /**
   * Provider ID
   */
  providerId: string;
};

export type BuildLinkingUriQueryParams = {
  /**
   * Redirect URI to return to after account linking
   */
  redirectUri: string;
};

export type BuildLinkingUriError = Fetcher.ErrorWrapper<undefined>;

export type BuildLinkingUriVariables = {
  pathParams: BuildLinkingUriPathParams;
  queryParams: BuildLinkingUriQueryParams;
} & FetcherExtraProps;

/**
 * Build account linking URI
 */
export const buildLinkingUri = (
  variables: BuildLinkingUriVariables,
  signal?: AbortSignal,
) =>
  fetch<
    Schemas.AccountLinkUriRepresentation,
    BuildLinkingUriError,
    undefined,
    {},
    BuildLinkingUriQueryParams,
    BuildLinkingUriPathParams
  >({
    url: "/account/linked-accounts/{providerId}",
    method: "get",
    ...variables,
    signal,
  });

export type DeleteLinkedProviderPathParams = {
  /**
   * Provider ID
   */
  providerId: string;
};

export type DeleteLinkedProviderError = Fetcher.ErrorWrapper<undefined>;

export type DeleteLinkedProviderVariables = {
  pathParams: DeleteLinkedProviderPathParams;
} & FetcherExtraProps;

export const deleteLinkedProvider = (
  variables: DeleteLinkedProviderVariables,
  signal?: AbortSignal,
) =>
  fetch<
    undefined,
    DeleteLinkedProviderError,
    undefined,
    {},
    {},
    DeleteLinkedProviderPathParams
  >({
    url: "/account/linked-accounts/{providerId}",
    method: "delete",
    ...variables,
    signal,
  });

export type GetGroupsQueryParams = {
  /**
   * @default true
   */
  briefRepresentation?: boolean;
};

export type GetGroupsError = Fetcher.ErrorWrapper<undefined>;

export type GetGroupsResponse = Schemas.GroupRepresentation[];

export type GetGroupsVariables = {
  queryParams?: GetGroupsQueryParams;
} & FetcherExtraProps;

export const getGroups = (
  variables: GetGroupsVariables,
  signal?: AbortSignal,
) =>
  fetch<
    GetGroupsResponse,
    GetGroupsError,
    undefined,
    {},
    GetGroupsQueryParams,
    {}
  >({ url: "/account/groups", method: "get", ...variables, signal });

export type GetOrganizationsError = Fetcher.ErrorWrapper<undefined>;

export type GetOrganizationsResponse = Schemas.OrganizationRepresentation[];

export type GetOrganizationsVariables = FetcherExtraProps;

/**
 * Get organizations for currently logged in user
 */
export const getOrganizations = (
  variables: GetOrganizationsVariables,
  signal?: AbortSignal,
) =>
  fetch<GetOrganizationsResponse, GetOrganizationsError, undefined, {}, {}, {}>(
    { url: "/account/organizations", method: "get", ...variables, signal },
  );

export const operationsByTag = {
  account: {
    getAccount,
    updateAccount,
    getApplications,
    getConsent,
    createConsent,
    updateConsent,
    deleteConsent,
    getCredentials,
    deleteCredential,
    updateCredentialLabel,
    getSessions,
    deleteCurrentSession,
    getDevices,
    deleteSession,
    getLinkedAccounts,
    buildLinkingUri,
    deleteLinkedProvider,
    getGroups,
    getOrganizations,
  },
};
