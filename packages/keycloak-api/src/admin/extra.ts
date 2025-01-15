import {
  getAdminRealms,
  postAdminRealms,
  getAdminRealmsRealm,
  putAdminRealmsRealm,
  deleteAdminRealmsRealm,
  getAdminRealmsRealmAdminEvents,
  deleteAdminRealmsRealmAdminEvents,
  deleteAdminRealmsRealmAttackDetectionBruteForceUsers,
  getAdminRealmsRealmAttackDetectionBruteForceUsersUserId,
  deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserId,
  getAdminRealmsRealmAuthenticationAuthenticatorProviders,
  getAdminRealmsRealmAuthenticationClientAuthenticatorProviders,
  postAdminRealmsRealmAuthenticationConfig,
  getAdminRealmsRealmAuthenticationConfigDescriptionProviderId,
  getAdminRealmsRealmAuthenticationConfigId,
  putAdminRealmsRealmAuthenticationConfigId,
  deleteAdminRealmsRealmAuthenticationConfigId,
  postAdminRealmsRealmAuthenticationExecutions,
  getAdminRealmsRealmAuthenticationExecutionsExecutionId,
  deleteAdminRealmsRealmAuthenticationExecutionsExecutionId,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfig,
  getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigId,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriority,
  postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriority,
  getAdminRealmsRealmAuthenticationFlows,
  postAdminRealmsRealmAuthenticationFlows,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasCopy,
  getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions,
  putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecution,
  postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlow,
  getAdminRealmsRealmAuthenticationFlowsId,
  putAdminRealmsRealmAuthenticationFlowsId,
  deleteAdminRealmsRealmAuthenticationFlowsId,
  getAdminRealmsRealmAuthenticationFormActionProviders,
  getAdminRealmsRealmAuthenticationFormProviders,
  getAdminRealmsRealmAuthenticationPerClientConfigDescription,
  postAdminRealmsRealmAuthenticationRegisterRequiredAction,
  getAdminRealmsRealmAuthenticationRequiredActions,
  getAdminRealmsRealmAuthenticationRequiredActionsAlias,
  putAdminRealmsRealmAuthenticationRequiredActionsAlias,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAlias,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  putAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescription,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriority,
  postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriority,
  getAdminRealmsRealmAuthenticationUnregisteredRequiredActions,
  postAdminRealmsRealmClientDescriptionConverter,
  getAdminRealmsRealmClientPoliciesPolicies,
  putAdminRealmsRealmClientPoliciesPolicies,
  getAdminRealmsRealmClientPoliciesProfiles,
  putAdminRealmsRealmClientPoliciesProfiles,
  getAdminRealmsRealmClientRegistrationPolicyProviders,
  getAdminRealmsRealmClientScopes,
  postAdminRealmsRealmClientScopes,
  getAdminRealmsRealmClientScopesClientScopeId,
  putAdminRealmsRealmClientScopesClientScopeId,
  deleteAdminRealmsRealmClientScopesClientScopeId,
  postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModels,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels,
  postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocol,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappings,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailable,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientComposite,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailable,
  getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmComposite,
  getAdminRealmsRealmClientSessionStats,
  getAdminRealmsRealmClientTemplates,
  postAdminRealmsRealmClientTemplates,
  getAdminRealmsRealmClientTemplatesClientScopeId,
  putAdminRealmsRealmClientTemplatesClientScopeId,
  deleteAdminRealmsRealmClientTemplatesClientScopeId,
  postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModels,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels,
  postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocol,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappings,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailable,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientComposite,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailable,
  getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmComposite,
  getAdminRealmsRealmClientTypes,
  putAdminRealmsRealmClientTypes,
  getAdminRealmsRealmClients,
  postAdminRealmsRealmClients,
  getAdminRealmsRealmClientsInitialAccess,
  postAdminRealmsRealmClientsInitialAccess,
  deleteAdminRealmsRealmClientsInitialAccessId,
  getAdminRealmsRealmClientsClientUuid,
  putAdminRealmsRealmClientsClientUuid,
  deleteAdminRealmsRealmClientsClientUuid,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServer,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServer,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerImport,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluate,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProviders,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearch,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluate,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProviders,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearch,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResource,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerResource,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearch,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributes,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissions,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopes,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScope,
  postAdminRealmsRealmClientsClientUuidAuthzResourceServerScope,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearch,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissions,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResources,
  getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettings,
  getAdminRealmsRealmClientsClientUuidCertificatesAttr,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrDownload,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerate,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownload,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUpload,
  postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificate,
  getAdminRealmsRealmClientsClientUuidClientSecret,
  postAdminRealmsRealmClientsClientUuidClientSecret,
  getAdminRealmsRealmClientsClientUuidClientSecretRotated,
  deleteAdminRealmsRealmClientsClientUuidClientSecretRotated,
  getAdminRealmsRealmClientsClientUuidDefaultClientScopes,
  putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId,
  deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessToken,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdToken,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfo,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappers,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGranted,
  getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGranted,
  getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderId,
  getAdminRealmsRealmClientsClientUuidManagementPermissions,
  putAdminRealmsRealmClientsClientUuidManagementPermissions,
  postAdminRealmsRealmClientsClientUuidNodes,
  deleteAdminRealmsRealmClientsClientUuidNodesNode,
  getAdminRealmsRealmClientsClientUuidOfflineSessionCount,
  getAdminRealmsRealmClientsClientUuidOfflineSessions,
  getAdminRealmsRealmClientsClientUuidOptionalClientScopes,
  putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId,
  deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId,
  postAdminRealmsRealmClientsClientUuidProtocolMappersAddModels,
  getAdminRealmsRealmClientsClientUuidProtocolMappersModels,
  postAdminRealmsRealmClientsClientUuidProtocolMappersModels,
  getAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  putAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocol,
  postAdminRealmsRealmClientsClientUuidPushRevocation,
  postAdminRealmsRealmClientsClientUuidRegistrationAccessToken,
  getAdminRealmsRealmClientsClientUuidRoles,
  postAdminRealmsRealmClientsClientUuidRoles,
  getAdminRealmsRealmClientsClientUuidRolesRoleName,
  putAdminRealmsRealmClientsClientUuidRolesRoleName,
  deleteAdminRealmsRealmClientsClientUuidRolesRoleName,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  postAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  deleteAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsClientUuid,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealm,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameGroups,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions,
  putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions,
  getAdminRealmsRealmClientsClientUuidRolesRoleNameUsers,
  getAdminRealmsRealmClientsClientUuidScopeMappings,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailable,
  getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientComposite,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  postAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailable,
  getAdminRealmsRealmClientsClientUuidScopeMappingsRealmComposite,
  getAdminRealmsRealmClientsClientUuidServiceAccountUser,
  getAdminRealmsRealmClientsClientUuidSessionCount,
  getAdminRealmsRealmClientsClientUuidTestNodesAvailable,
  getAdminRealmsRealmClientsClientUuidUserSessions,
  getAdminRealmsRealmComponents,
  postAdminRealmsRealmComponents,
  getAdminRealmsRealmComponentsId,
  putAdminRealmsRealmComponentsId,
  deleteAdminRealmsRealmComponentsId,
  getAdminRealmsRealmComponentsIdSubComponentTypes,
  getAdminRealmsRealmCredentialRegistrators,
  getAdminRealmsRealmDefaultDefaultClientScopes,
  putAdminRealmsRealmDefaultDefaultClientScopesClientScopeId,
  deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeId,
  getAdminRealmsRealmDefaultGroups,
  putAdminRealmsRealmDefaultGroupsGroupId,
  deleteAdminRealmsRealmDefaultGroupsGroupId,
  getAdminRealmsRealmDefaultOptionalClientScopes,
  putAdminRealmsRealmDefaultOptionalClientScopesClientScopeId,
  deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeId,
  getAdminRealmsRealmEvents,
  deleteAdminRealmsRealmEvents,
  getAdminRealmsRealmEventsConfig,
  putAdminRealmsRealmEventsConfig,
  getAdminRealmsRealmGroupByPathPath,
  getAdminRealmsRealmGroups,
  postAdminRealmsRealmGroups,
  getAdminRealmsRealmGroupsCount,
  getAdminRealmsRealmGroupsGroupId,
  putAdminRealmsRealmGroupsGroupId,
  deleteAdminRealmsRealmGroupsGroupId,
  getAdminRealmsRealmGroupsGroupIdChildren,
  postAdminRealmsRealmGroupsGroupIdChildren,
  getAdminRealmsRealmGroupsGroupIdManagementPermissions,
  putAdminRealmsRealmGroupsGroupIdManagementPermissions,
  getAdminRealmsRealmGroupsGroupIdMembers,
  getAdminRealmsRealmGroupsGroupIdRoleMappings,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailable,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdComposite,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  postAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailable,
  getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmComposite,
  postAdminRealmsRealmIdentityProviderImportConfig,
  getAdminRealmsRealmIdentityProviderInstances,
  postAdminRealmsRealmIdentityProviderInstances,
  getAdminRealmsRealmIdentityProviderInstancesAlias,
  putAdminRealmsRealmIdentityProviderInstancesAlias,
  deleteAdminRealmsRealmIdentityProviderInstancesAlias,
  getAdminRealmsRealmIdentityProviderInstancesAliasExport,
  getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions,
  putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions,
  getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypes,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappers,
  postAdminRealmsRealmIdentityProviderInstancesAliasMappers,
  getAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  putAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeys,
  getAdminRealmsRealmIdentityProviderProvidersProviderId,
  getAdminRealmsRealmKeys,
  getAdminRealmsRealmLocalization,
  getAdminRealmsRealmLocalizationLocale,
  postAdminRealmsRealmLocalizationLocale,
  deleteAdminRealmsRealmLocalizationLocale,
  getAdminRealmsRealmLocalizationLocaleKey,
  putAdminRealmsRealmLocalizationLocaleKey,
  deleteAdminRealmsRealmLocalizationLocaleKey,
  postAdminRealmsRealmLogoutAll,
  getAdminRealmsRealmOrganizations,
  postAdminRealmsRealmOrganizations,
  getAdminRealmsRealmOrganizationsMembersMemberIdOrganizations,
  getAdminRealmsRealmOrganizationsOrgId,
  putAdminRealmsRealmOrganizationsOrgId,
  deleteAdminRealmsRealmOrganizationsOrgId,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProviders,
  postAdminRealmsRealmOrganizationsOrgIdIdentityProviders,
  getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias,
  deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias,
  getAdminRealmsRealmOrganizationsOrgIdMembers,
  postAdminRealmsRealmOrganizationsOrgIdMembers,
  getAdminRealmsRealmOrganizationsOrgIdMembersCount,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUser,
  postAdminRealmsRealmOrganizationsOrgIdMembersInviteUser,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberId,
  deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberId,
  getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizations,
  postAdminRealmsRealmPartialExport,
  postAdminRealmsRealmPartialImport,
  postAdminRealmsRealmPushRevocation,
  getAdminRealmsRealmRoles,
  postAdminRealmsRealmRoles,
  getAdminRealmsRealmRolesByIdRoleId,
  putAdminRealmsRealmRolesByIdRoleId,
  deleteAdminRealmsRealmRolesByIdRoleId,
  getAdminRealmsRealmRolesByIdRoleIdComposites,
  postAdminRealmsRealmRolesByIdRoleIdComposites,
  deleteAdminRealmsRealmRolesByIdRoleIdComposites,
  getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuid,
  getAdminRealmsRealmRolesByIdRoleIdCompositesRealm,
  getAdminRealmsRealmRolesByIdRoleIdManagementPermissions,
  putAdminRealmsRealmRolesByIdRoleIdManagementPermissions,
  getAdminRealmsRealmRolesRoleName,
  putAdminRealmsRealmRolesRoleName,
  deleteAdminRealmsRealmRolesRoleName,
  getAdminRealmsRealmRolesRoleNameComposites,
  postAdminRealmsRealmRolesRoleNameComposites,
  deleteAdminRealmsRealmRolesRoleNameComposites,
  getAdminRealmsRealmRolesRoleNameCompositesClientsClientUuid,
  getAdminRealmsRealmRolesRoleNameCompositesRealm,
  getAdminRealmsRealmRolesRoleNameGroups,
  getAdminRealmsRealmRolesRoleNameManagementPermissions,
  putAdminRealmsRealmRolesRoleNameManagementPermissions,
  getAdminRealmsRealmRolesRoleNameUsers,
  deleteAdminRealmsRealmSessionsSession,
  postAdminRealmsRealmTestSMTPConnection,
  getAdminRealmsRealmUsers,
  postAdminRealmsRealmUsers,
  getAdminRealmsRealmUsersManagementPermissions,
  putAdminRealmsRealmUsersManagementPermissions,
  getAdminRealmsRealmUsersCount,
  getAdminRealmsRealmUsersProfile,
  putAdminRealmsRealmUsersProfile,
  getAdminRealmsRealmUsersProfileMetadata,
  getAdminRealmsRealmUsersUserId,
  putAdminRealmsRealmUsersUserId,
  deleteAdminRealmsRealmUsersUserId,
  getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypes,
  getAdminRealmsRealmUsersUserIdConsents,
  deleteAdminRealmsRealmUsersUserIdConsentsClient,
  getAdminRealmsRealmUsersUserIdCredentials,
  deleteAdminRealmsRealmUsersUserIdCredentialsCredentialId,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId,
  postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirst,
  putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabel,
  putAdminRealmsRealmUsersUserIdDisableCredentialTypes,
  putAdminRealmsRealmUsersUserIdExecuteActionsEmail,
  getAdminRealmsRealmUsersUserIdFederatedIdentity,
  postAdminRealmsRealmUsersUserIdFederatedIdentityProvider,
  deleteAdminRealmsRealmUsersUserIdFederatedIdentityProvider,
  getAdminRealmsRealmUsersUserIdGroups,
  getAdminRealmsRealmUsersUserIdGroupsCount,
  putAdminRealmsRealmUsersUserIdGroupsGroupId,
  deleteAdminRealmsRealmUsersUserIdGroupsGroupId,
  postAdminRealmsRealmUsersUserIdImpersonation,
  postAdminRealmsRealmUsersUserIdLogout,
  getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuid,
  putAdminRealmsRealmUsersUserIdResetPassword,
  putAdminRealmsRealmUsersUserIdResetPasswordEmail,
  getAdminRealmsRealmUsersUserIdRoleMappings,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailable,
  getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdComposite,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  postAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  deleteAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailable,
  getAdminRealmsRealmUsersUserIdRoleMappingsRealmComposite,
  putAdminRealmsRealmUsersUserIdSendVerifyEmail,
  getAdminRealmsRealmUsersUserIdSessions,
  getAdminRealmsRealmUsersUserIdUnmanagedAttributes
} from './components';

export const operationsByPath = {
  'GET /admin/realms': getAdminRealms,
  'POST /admin/realms': postAdminRealms,
  'GET /admin/realms/{realm}': getAdminRealmsRealm,
  'PUT /admin/realms/{realm}': putAdminRealmsRealm,
  'DELETE /admin/realms/{realm}': deleteAdminRealmsRealm,
  'GET /admin/realms/{realm}/admin-events': getAdminRealmsRealmAdminEvents,
  'DELETE /admin/realms/{realm}/admin-events': deleteAdminRealmsRealmAdminEvents,
  'DELETE /admin/realms/{realm}/attack-detection/brute-force/users':
    deleteAdminRealmsRealmAttackDetectionBruteForceUsers,
  'GET /admin/realms/{realm}/attack-detection/brute-force/users/{userId}':
    getAdminRealmsRealmAttackDetectionBruteForceUsersUserId,
  'DELETE /admin/realms/{realm}/attack-detection/brute-force/users/{userId}':
    deleteAdminRealmsRealmAttackDetectionBruteForceUsersUserId,
  'GET /admin/realms/{realm}/authentication/authenticator-providers':
    getAdminRealmsRealmAuthenticationAuthenticatorProviders,
  'GET /admin/realms/{realm}/authentication/client-authenticator-providers':
    getAdminRealmsRealmAuthenticationClientAuthenticatorProviders,
  'POST /admin/realms/{realm}/authentication/config': postAdminRealmsRealmAuthenticationConfig,
  'GET /admin/realms/{realm}/authentication/config-description/{providerId}':
    getAdminRealmsRealmAuthenticationConfigDescriptionProviderId,
  'GET /admin/realms/{realm}/authentication/config/{id}': getAdminRealmsRealmAuthenticationConfigId,
  'PUT /admin/realms/{realm}/authentication/config/{id}': putAdminRealmsRealmAuthenticationConfigId,
  'DELETE /admin/realms/{realm}/authentication/config/{id}': deleteAdminRealmsRealmAuthenticationConfigId,
  'POST /admin/realms/{realm}/authentication/executions': postAdminRealmsRealmAuthenticationExecutions,
  'GET /admin/realms/{realm}/authentication/executions/{executionId}':
    getAdminRealmsRealmAuthenticationExecutionsExecutionId,
  'DELETE /admin/realms/{realm}/authentication/executions/{executionId}':
    deleteAdminRealmsRealmAuthenticationExecutionsExecutionId,
  'POST /admin/realms/{realm}/authentication/executions/{executionId}/config':
    postAdminRealmsRealmAuthenticationExecutionsExecutionIdConfig,
  'GET /admin/realms/{realm}/authentication/executions/{executionId}/config/{id}':
    getAdminRealmsRealmAuthenticationExecutionsExecutionIdConfigId,
  'POST /admin/realms/{realm}/authentication/executions/{executionId}/lower-priority':
    postAdminRealmsRealmAuthenticationExecutionsExecutionIdLowerPriority,
  'POST /admin/realms/{realm}/authentication/executions/{executionId}/raise-priority':
    postAdminRealmsRealmAuthenticationExecutionsExecutionIdRaisePriority,
  'GET /admin/realms/{realm}/authentication/flows': getAdminRealmsRealmAuthenticationFlows,
  'POST /admin/realms/{realm}/authentication/flows': postAdminRealmsRealmAuthenticationFlows,
  'POST /admin/realms/{realm}/authentication/flows/{flowAlias}/copy':
    postAdminRealmsRealmAuthenticationFlowsFlowAliasCopy,
  'GET /admin/realms/{realm}/authentication/flows/{flowAlias}/executions':
    getAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions,
  'PUT /admin/realms/{realm}/authentication/flows/{flowAlias}/executions':
    putAdminRealmsRealmAuthenticationFlowsFlowAliasExecutions,
  'POST /admin/realms/{realm}/authentication/flows/{flowAlias}/executions/execution':
    postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsExecution,
  'POST /admin/realms/{realm}/authentication/flows/{flowAlias}/executions/flow':
    postAdminRealmsRealmAuthenticationFlowsFlowAliasExecutionsFlow,
  'GET /admin/realms/{realm}/authentication/flows/{id}': getAdminRealmsRealmAuthenticationFlowsId,
  'PUT /admin/realms/{realm}/authentication/flows/{id}': putAdminRealmsRealmAuthenticationFlowsId,
  'DELETE /admin/realms/{realm}/authentication/flows/{id}': deleteAdminRealmsRealmAuthenticationFlowsId,
  'GET /admin/realms/{realm}/authentication/form-action-providers':
    getAdminRealmsRealmAuthenticationFormActionProviders,
  'GET /admin/realms/{realm}/authentication/form-providers': getAdminRealmsRealmAuthenticationFormProviders,
  'GET /admin/realms/{realm}/authentication/per-client-config-description':
    getAdminRealmsRealmAuthenticationPerClientConfigDescription,
  'POST /admin/realms/{realm}/authentication/register-required-action':
    postAdminRealmsRealmAuthenticationRegisterRequiredAction,
  'GET /admin/realms/{realm}/authentication/required-actions': getAdminRealmsRealmAuthenticationRequiredActions,
  'GET /admin/realms/{realm}/authentication/required-actions/{alias}':
    getAdminRealmsRealmAuthenticationRequiredActionsAlias,
  'PUT /admin/realms/{realm}/authentication/required-actions/{alias}':
    putAdminRealmsRealmAuthenticationRequiredActionsAlias,
  'DELETE /admin/realms/{realm}/authentication/required-actions/{alias}':
    deleteAdminRealmsRealmAuthenticationRequiredActionsAlias,
  'GET /admin/realms/{realm}/authentication/required-actions/{alias}/config':
    getAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  'PUT /admin/realms/{realm}/authentication/required-actions/{alias}/config':
    putAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  'DELETE /admin/realms/{realm}/authentication/required-actions/{alias}/config':
    deleteAdminRealmsRealmAuthenticationRequiredActionsAliasConfig,
  'GET /admin/realms/{realm}/authentication/required-actions/{alias}/config-description':
    getAdminRealmsRealmAuthenticationRequiredActionsAliasConfigDescription,
  'POST /admin/realms/{realm}/authentication/required-actions/{alias}/lower-priority':
    postAdminRealmsRealmAuthenticationRequiredActionsAliasLowerPriority,
  'POST /admin/realms/{realm}/authentication/required-actions/{alias}/raise-priority':
    postAdminRealmsRealmAuthenticationRequiredActionsAliasRaisePriority,
  'GET /admin/realms/{realm}/authentication/unregistered-required-actions':
    getAdminRealmsRealmAuthenticationUnregisteredRequiredActions,
  'POST /admin/realms/{realm}/client-description-converter': postAdminRealmsRealmClientDescriptionConverter,
  'GET /admin/realms/{realm}/client-policies/policies': getAdminRealmsRealmClientPoliciesPolicies,
  'PUT /admin/realms/{realm}/client-policies/policies': putAdminRealmsRealmClientPoliciesPolicies,
  'GET /admin/realms/{realm}/client-policies/profiles': getAdminRealmsRealmClientPoliciesProfiles,
  'PUT /admin/realms/{realm}/client-policies/profiles': putAdminRealmsRealmClientPoliciesProfiles,
  'GET /admin/realms/{realm}/client-registration-policy/providers':
    getAdminRealmsRealmClientRegistrationPolicyProviders,
  'GET /admin/realms/{realm}/client-scopes': getAdminRealmsRealmClientScopes,
  'POST /admin/realms/{realm}/client-scopes': postAdminRealmsRealmClientScopes,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}': getAdminRealmsRealmClientScopesClientScopeId,
  'PUT /admin/realms/{realm}/client-scopes/{client-scope-id}': putAdminRealmsRealmClientScopesClientScopeId,
  'DELETE /admin/realms/{realm}/client-scopes/{client-scope-id}': deleteAdminRealmsRealmClientScopesClientScopeId,
  'POST /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/add-models':
    postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersAddModels,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models':
    getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels,
  'POST /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models':
    postAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModels,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}':
    getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  'PUT /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}':
    putAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  'DELETE /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/models/{id}':
    deleteAdminRealmsRealmClientScopesClientScopeIdProtocolMappersModelsId,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/protocol-mappers/protocol/{protocol}':
    getAdminRealmsRealmClientScopesClientScopeIdProtocolMappersProtocolProtocol,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappings,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  'POST /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}':
    postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  'DELETE /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}':
    deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClient,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}/available':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientAvailable,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/clients/{client}/composite':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsClientsClientComposite,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  'POST /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm':
    postAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  'DELETE /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm':
    deleteAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealm,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm/available':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmAvailable,
  'GET /admin/realms/{realm}/client-scopes/{client-scope-id}/scope-mappings/realm/composite':
    getAdminRealmsRealmClientScopesClientScopeIdScopeMappingsRealmComposite,
  'GET /admin/realms/{realm}/client-session-stats': getAdminRealmsRealmClientSessionStats,
  'GET /admin/realms/{realm}/client-templates': getAdminRealmsRealmClientTemplates,
  'POST /admin/realms/{realm}/client-templates': postAdminRealmsRealmClientTemplates,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}': getAdminRealmsRealmClientTemplatesClientScopeId,
  'PUT /admin/realms/{realm}/client-templates/{client-scope-id}': putAdminRealmsRealmClientTemplatesClientScopeId,
  'DELETE /admin/realms/{realm}/client-templates/{client-scope-id}': deleteAdminRealmsRealmClientTemplatesClientScopeId,
  'POST /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/add-models':
    postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersAddModels,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models':
    getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels,
  'POST /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models':
    postAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModels,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}':
    getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  'PUT /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}':
    putAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  'DELETE /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/models/{id}':
    deleteAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersModelsId,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/protocol-mappers/protocol/{protocol}':
    getAdminRealmsRealmClientTemplatesClientScopeIdProtocolMappersProtocolProtocol,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappings,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  'POST /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}':
    postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  'DELETE /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}':
    deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClient,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}/available':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientAvailable,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/clients/{client}/composite':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsClientsClientComposite,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  'POST /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm':
    postAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  'DELETE /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm':
    deleteAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealm,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm/available':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmAvailable,
  'GET /admin/realms/{realm}/client-templates/{client-scope-id}/scope-mappings/realm/composite':
    getAdminRealmsRealmClientTemplatesClientScopeIdScopeMappingsRealmComposite,
  'GET /admin/realms/{realm}/client-types': getAdminRealmsRealmClientTypes,
  'PUT /admin/realms/{realm}/client-types': putAdminRealmsRealmClientTypes,
  'GET /admin/realms/{realm}/clients': getAdminRealmsRealmClients,
  'POST /admin/realms/{realm}/clients': postAdminRealmsRealmClients,
  'GET /admin/realms/{realm}/clients-initial-access': getAdminRealmsRealmClientsInitialAccess,
  'POST /admin/realms/{realm}/clients-initial-access': postAdminRealmsRealmClientsInitialAccess,
  'DELETE /admin/realms/{realm}/clients-initial-access/{id}': deleteAdminRealmsRealmClientsInitialAccessId,
  'GET /admin/realms/{realm}/clients/{client-uuid}': getAdminRealmsRealmClientsClientUuid,
  'PUT /admin/realms/{realm}/clients/{client-uuid}': putAdminRealmsRealmClientsClientUuid,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}': deleteAdminRealmsRealmClientsClientUuid,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServer,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server':
    putAdminRealmsRealmClientsClientUuidAuthzResourceServer,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/import':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerImport,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermission,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/evaluate':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionEvaluate,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/providers':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionProviders,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/permission/search':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPermissionSearch,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicy,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/evaluate':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyEvaluate,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/providers':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicyProviders,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/policy/search':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerPolicySearch,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResource,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerResource,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/search':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceSearch,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}':
    putAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}':
    deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceId,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/attributes':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdAttributes,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/permissions':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdPermissions,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/resource/{resource-id}/scopes':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerResourceResourceIdScopes,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScope,
  'POST /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope':
    postAdminRealmsRealmClientsClientUuidAuthzResourceServerScope,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/search':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeSearch,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}':
    putAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}':
    deleteAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeId,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}/permissions':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdPermissions,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/scope/{scope-id}/resources':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerScopeScopeIdResources,
  'GET /admin/realms/{realm}/clients/{client-uuid}/authz/resource-server/settings':
    getAdminRealmsRealmClientsClientUuidAuthzResourceServerSettings,
  'GET /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}':
    getAdminRealmsRealmClientsClientUuidCertificatesAttr,
  'POST /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/download':
    postAdminRealmsRealmClientsClientUuidCertificatesAttrDownload,
  'POST /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate':
    postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerate,
  'POST /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/generate-and-download':
    postAdminRealmsRealmClientsClientUuidCertificatesAttrGenerateAndDownload,
  'POST /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/upload':
    postAdminRealmsRealmClientsClientUuidCertificatesAttrUpload,
  'POST /admin/realms/{realm}/clients/{client-uuid}/certificates/{attr}/upload-certificate':
    postAdminRealmsRealmClientsClientUuidCertificatesAttrUploadCertificate,
  'GET /admin/realms/{realm}/clients/{client-uuid}/client-secret': getAdminRealmsRealmClientsClientUuidClientSecret,
  'POST /admin/realms/{realm}/clients/{client-uuid}/client-secret': postAdminRealmsRealmClientsClientUuidClientSecret,
  'GET /admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated':
    getAdminRealmsRealmClientsClientUuidClientSecretRotated,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/client-secret/rotated':
    deleteAdminRealmsRealmClientsClientUuidClientSecretRotated,
  'GET /admin/realms/{realm}/clients/{client-uuid}/default-client-scopes':
    getAdminRealmsRealmClientsClientUuidDefaultClientScopes,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}':
    putAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/default-client-scopes/{clientScopeId}':
    deleteAdminRealmsRealmClientsClientUuidDefaultClientScopesClientScopeId,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-access-token':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleAccessToken,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-id-token':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleIdToken,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/generate-example-userinfo':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesGenerateExampleUserinfo,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/protocol-mappers':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesProtocolMappers,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/scope-mappings/{roleContainerId}/granted':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdGranted,
  'GET /admin/realms/{realm}/clients/{client-uuid}/evaluate-scopes/scope-mappings/{roleContainerId}/not-granted':
    getAdminRealmsRealmClientsClientUuidEvaluateScopesScopeMappingsRoleContainerIdNotGranted,
  'GET /admin/realms/{realm}/clients/{client-uuid}/installation/providers/{providerId}':
    getAdminRealmsRealmClientsClientUuidInstallationProvidersProviderId,
  'GET /admin/realms/{realm}/clients/{client-uuid}/management/permissions':
    getAdminRealmsRealmClientsClientUuidManagementPermissions,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/management/permissions':
    putAdminRealmsRealmClientsClientUuidManagementPermissions,
  'POST /admin/realms/{realm}/clients/{client-uuid}/nodes': postAdminRealmsRealmClientsClientUuidNodes,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/nodes/{node}': deleteAdminRealmsRealmClientsClientUuidNodesNode,
  'GET /admin/realms/{realm}/clients/{client-uuid}/offline-session-count':
    getAdminRealmsRealmClientsClientUuidOfflineSessionCount,
  'GET /admin/realms/{realm}/clients/{client-uuid}/offline-sessions':
    getAdminRealmsRealmClientsClientUuidOfflineSessions,
  'GET /admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes':
    getAdminRealmsRealmClientsClientUuidOptionalClientScopes,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}':
    putAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/optional-client-scopes/{clientScopeId}':
    deleteAdminRealmsRealmClientsClientUuidOptionalClientScopesClientScopeId,
  'POST /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/add-models':
    postAdminRealmsRealmClientsClientUuidProtocolMappersAddModels,
  'GET /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models':
    getAdminRealmsRealmClientsClientUuidProtocolMappersModels,
  'POST /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models':
    postAdminRealmsRealmClientsClientUuidProtocolMappersModels,
  'GET /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}':
    getAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}':
    putAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/models/{id}':
    deleteAdminRealmsRealmClientsClientUuidProtocolMappersModelsId,
  'GET /admin/realms/{realm}/clients/{client-uuid}/protocol-mappers/protocol/{protocol}':
    getAdminRealmsRealmClientsClientUuidProtocolMappersProtocolProtocol,
  'POST /admin/realms/{realm}/clients/{client-uuid}/push-revocation':
    postAdminRealmsRealmClientsClientUuidPushRevocation,
  'POST /admin/realms/{realm}/clients/{client-uuid}/registration-access-token':
    postAdminRealmsRealmClientsClientUuidRegistrationAccessToken,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles': getAdminRealmsRealmClientsClientUuidRoles,
  'POST /admin/realms/{realm}/clients/{client-uuid}/roles': postAdminRealmsRealmClientsClientUuidRoles,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}':
    getAdminRealmsRealmClientsClientUuidRolesRoleName,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}':
    putAdminRealmsRealmClientsClientUuidRolesRoleName,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}':
    deleteAdminRealmsRealmClientsClientUuidRolesRoleName,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  'POST /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites':
    postAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites':
    deleteAdminRealmsRealmClientsClientUuidRolesRoleNameComposites,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites/clients/{client-uuid}':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesClientsClientUuid,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/composites/realm':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameCompositesRealm,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/groups':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameGroups,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/management/permissions':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions,
  'PUT /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/management/permissions':
    putAdminRealmsRealmClientsClientUuidRolesRoleNameManagementPermissions,
  'GET /admin/realms/{realm}/clients/{client-uuid}/roles/{role-name}/users':
    getAdminRealmsRealmClientsClientUuidRolesRoleNameUsers,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings': getAdminRealmsRealmClientsClientUuidScopeMappings,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}':
    getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  'POST /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}':
    postAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}':
    deleteAdminRealmsRealmClientsClientUuidScopeMappingsClientsClient,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/available':
    getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientAvailable,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/clients/{client}/composite':
    getAdminRealmsRealmClientsClientUuidScopeMappingsClientsClientComposite,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm':
    getAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  'POST /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm':
    postAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  'DELETE /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm':
    deleteAdminRealmsRealmClientsClientUuidScopeMappingsRealm,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm/available':
    getAdminRealmsRealmClientsClientUuidScopeMappingsRealmAvailable,
  'GET /admin/realms/{realm}/clients/{client-uuid}/scope-mappings/realm/composite':
    getAdminRealmsRealmClientsClientUuidScopeMappingsRealmComposite,
  'GET /admin/realms/{realm}/clients/{client-uuid}/service-account-user':
    getAdminRealmsRealmClientsClientUuidServiceAccountUser,
  'GET /admin/realms/{realm}/clients/{client-uuid}/session-count': getAdminRealmsRealmClientsClientUuidSessionCount,
  'GET /admin/realms/{realm}/clients/{client-uuid}/test-nodes-available':
    getAdminRealmsRealmClientsClientUuidTestNodesAvailable,
  'GET /admin/realms/{realm}/clients/{client-uuid}/user-sessions': getAdminRealmsRealmClientsClientUuidUserSessions,
  'GET /admin/realms/{realm}/components': getAdminRealmsRealmComponents,
  'POST /admin/realms/{realm}/components': postAdminRealmsRealmComponents,
  'GET /admin/realms/{realm}/components/{id}': getAdminRealmsRealmComponentsId,
  'PUT /admin/realms/{realm}/components/{id}': putAdminRealmsRealmComponentsId,
  'DELETE /admin/realms/{realm}/components/{id}': deleteAdminRealmsRealmComponentsId,
  'GET /admin/realms/{realm}/components/{id}/sub-component-types': getAdminRealmsRealmComponentsIdSubComponentTypes,
  'GET /admin/realms/{realm}/credential-registrators': getAdminRealmsRealmCredentialRegistrators,
  'GET /admin/realms/{realm}/default-default-client-scopes': getAdminRealmsRealmDefaultDefaultClientScopes,
  'PUT /admin/realms/{realm}/default-default-client-scopes/{clientScopeId}':
    putAdminRealmsRealmDefaultDefaultClientScopesClientScopeId,
  'DELETE /admin/realms/{realm}/default-default-client-scopes/{clientScopeId}':
    deleteAdminRealmsRealmDefaultDefaultClientScopesClientScopeId,
  'GET /admin/realms/{realm}/default-groups': getAdminRealmsRealmDefaultGroups,
  'PUT /admin/realms/{realm}/default-groups/{groupId}': putAdminRealmsRealmDefaultGroupsGroupId,
  'DELETE /admin/realms/{realm}/default-groups/{groupId}': deleteAdminRealmsRealmDefaultGroupsGroupId,
  'GET /admin/realms/{realm}/default-optional-client-scopes': getAdminRealmsRealmDefaultOptionalClientScopes,
  'PUT /admin/realms/{realm}/default-optional-client-scopes/{clientScopeId}':
    putAdminRealmsRealmDefaultOptionalClientScopesClientScopeId,
  'DELETE /admin/realms/{realm}/default-optional-client-scopes/{clientScopeId}':
    deleteAdminRealmsRealmDefaultOptionalClientScopesClientScopeId,
  'GET /admin/realms/{realm}/events': getAdminRealmsRealmEvents,
  'DELETE /admin/realms/{realm}/events': deleteAdminRealmsRealmEvents,
  'GET /admin/realms/{realm}/events/config': getAdminRealmsRealmEventsConfig,
  'PUT /admin/realms/{realm}/events/config': putAdminRealmsRealmEventsConfig,
  'GET /admin/realms/{realm}/group-by-path/{path}': getAdminRealmsRealmGroupByPathPath,
  'GET /admin/realms/{realm}/groups': getAdminRealmsRealmGroups,
  'POST /admin/realms/{realm}/groups': postAdminRealmsRealmGroups,
  'GET /admin/realms/{realm}/groups/count': getAdminRealmsRealmGroupsCount,
  'GET /admin/realms/{realm}/groups/{group-id}': getAdminRealmsRealmGroupsGroupId,
  'PUT /admin/realms/{realm}/groups/{group-id}': putAdminRealmsRealmGroupsGroupId,
  'DELETE /admin/realms/{realm}/groups/{group-id}': deleteAdminRealmsRealmGroupsGroupId,
  'GET /admin/realms/{realm}/groups/{group-id}/children': getAdminRealmsRealmGroupsGroupIdChildren,
  'POST /admin/realms/{realm}/groups/{group-id}/children': postAdminRealmsRealmGroupsGroupIdChildren,
  'GET /admin/realms/{realm}/groups/{group-id}/management/permissions':
    getAdminRealmsRealmGroupsGroupIdManagementPermissions,
  'PUT /admin/realms/{realm}/groups/{group-id}/management/permissions':
    putAdminRealmsRealmGroupsGroupIdManagementPermissions,
  'GET /admin/realms/{realm}/groups/{group-id}/members': getAdminRealmsRealmGroupsGroupIdMembers,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings': getAdminRealmsRealmGroupsGroupIdRoleMappings,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}':
    getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  'POST /admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}':
    postAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  'DELETE /admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}':
    deleteAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientId,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}/available':
    getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdAvailable,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/clients/{client-id}/composite':
    getAdminRealmsRealmGroupsGroupIdRoleMappingsClientsClientIdComposite,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/realm': getAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  'POST /admin/realms/{realm}/groups/{group-id}/role-mappings/realm':
    postAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  'DELETE /admin/realms/{realm}/groups/{group-id}/role-mappings/realm':
    deleteAdminRealmsRealmGroupsGroupIdRoleMappingsRealm,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/realm/available':
    getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmAvailable,
  'GET /admin/realms/{realm}/groups/{group-id}/role-mappings/realm/composite':
    getAdminRealmsRealmGroupsGroupIdRoleMappingsRealmComposite,
  'POST /admin/realms/{realm}/identity-provider/import-config': postAdminRealmsRealmIdentityProviderImportConfig,
  'GET /admin/realms/{realm}/identity-provider/instances': getAdminRealmsRealmIdentityProviderInstances,
  'POST /admin/realms/{realm}/identity-provider/instances': postAdminRealmsRealmIdentityProviderInstances,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}': getAdminRealmsRealmIdentityProviderInstancesAlias,
  'PUT /admin/realms/{realm}/identity-provider/instances/{alias}': putAdminRealmsRealmIdentityProviderInstancesAlias,
  'DELETE /admin/realms/{realm}/identity-provider/instances/{alias}':
    deleteAdminRealmsRealmIdentityProviderInstancesAlias,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/export':
    getAdminRealmsRealmIdentityProviderInstancesAliasExport,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/management/permissions':
    getAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions,
  'PUT /admin/realms/{realm}/identity-provider/instances/{alias}/management/permissions':
    putAdminRealmsRealmIdentityProviderInstancesAliasManagementPermissions,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/mapper-types':
    getAdminRealmsRealmIdentityProviderInstancesAliasMapperTypes,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/mappers':
    getAdminRealmsRealmIdentityProviderInstancesAliasMappers,
  'POST /admin/realms/{realm}/identity-provider/instances/{alias}/mappers':
    postAdminRealmsRealmIdentityProviderInstancesAliasMappers,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}':
    getAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  'PUT /admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}':
    putAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  'DELETE /admin/realms/{realm}/identity-provider/instances/{alias}/mappers/{id}':
    deleteAdminRealmsRealmIdentityProviderInstancesAliasMappersId,
  'GET /admin/realms/{realm}/identity-provider/instances/{alias}/reload-keys':
    getAdminRealmsRealmIdentityProviderInstancesAliasReloadKeys,
  'GET /admin/realms/{realm}/identity-provider/providers/{provider_id}':
    getAdminRealmsRealmIdentityProviderProvidersProviderId,
  'GET /admin/realms/{realm}/keys': getAdminRealmsRealmKeys,
  'GET /admin/realms/{realm}/localization': getAdminRealmsRealmLocalization,
  'GET /admin/realms/{realm}/localization/{locale}': getAdminRealmsRealmLocalizationLocale,
  'POST /admin/realms/{realm}/localization/{locale}': postAdminRealmsRealmLocalizationLocale,
  'DELETE /admin/realms/{realm}/localization/{locale}': deleteAdminRealmsRealmLocalizationLocale,
  'GET /admin/realms/{realm}/localization/{locale}/{key}': getAdminRealmsRealmLocalizationLocaleKey,
  'PUT /admin/realms/{realm}/localization/{locale}/{key}': putAdminRealmsRealmLocalizationLocaleKey,
  'DELETE /admin/realms/{realm}/localization/{locale}/{key}': deleteAdminRealmsRealmLocalizationLocaleKey,
  'POST /admin/realms/{realm}/logout-all': postAdminRealmsRealmLogoutAll,
  'GET /admin/realms/{realm}/organizations': getAdminRealmsRealmOrganizations,
  'POST /admin/realms/{realm}/organizations': postAdminRealmsRealmOrganizations,
  'GET /admin/realms/{realm}/organizations/members/{member-id}/organizations':
    getAdminRealmsRealmOrganizationsMembersMemberIdOrganizations,
  'GET /admin/realms/{realm}/organizations/{org-id}': getAdminRealmsRealmOrganizationsOrgId,
  'PUT /admin/realms/{realm}/organizations/{org-id}': putAdminRealmsRealmOrganizationsOrgId,
  'DELETE /admin/realms/{realm}/organizations/{org-id}': deleteAdminRealmsRealmOrganizationsOrgId,
  'GET /admin/realms/{realm}/organizations/{org-id}/identity-providers':
    getAdminRealmsRealmOrganizationsOrgIdIdentityProviders,
  'POST /admin/realms/{realm}/organizations/{org-id}/identity-providers':
    postAdminRealmsRealmOrganizationsOrgIdIdentityProviders,
  'GET /admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}':
    getAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias,
  'DELETE /admin/realms/{realm}/organizations/{org-id}/identity-providers/{alias}':
    deleteAdminRealmsRealmOrganizationsOrgIdIdentityProvidersAlias,
  'GET /admin/realms/{realm}/organizations/{org-id}/members': getAdminRealmsRealmOrganizationsOrgIdMembers,
  'POST /admin/realms/{realm}/organizations/{org-id}/members': postAdminRealmsRealmOrganizationsOrgIdMembers,
  'GET /admin/realms/{realm}/organizations/{org-id}/members/count': getAdminRealmsRealmOrganizationsOrgIdMembersCount,
  'POST /admin/realms/{realm}/organizations/{org-id}/members/invite-existing-user':
    postAdminRealmsRealmOrganizationsOrgIdMembersInviteExistingUser,
  'POST /admin/realms/{realm}/organizations/{org-id}/members/invite-user':
    postAdminRealmsRealmOrganizationsOrgIdMembersInviteUser,
  'GET /admin/realms/{realm}/organizations/{org-id}/members/{member-id}':
    getAdminRealmsRealmOrganizationsOrgIdMembersMemberId,
  'DELETE /admin/realms/{realm}/organizations/{org-id}/members/{member-id}':
    deleteAdminRealmsRealmOrganizationsOrgIdMembersMemberId,
  'GET /admin/realms/{realm}/organizations/{org-id}/members/{member-id}/organizations':
    getAdminRealmsRealmOrganizationsOrgIdMembersMemberIdOrganizations,
  'POST /admin/realms/{realm}/partial-export': postAdminRealmsRealmPartialExport,
  'POST /admin/realms/{realm}/partialImport': postAdminRealmsRealmPartialImport,
  'POST /admin/realms/{realm}/push-revocation': postAdminRealmsRealmPushRevocation,
  'GET /admin/realms/{realm}/roles': getAdminRealmsRealmRoles,
  'POST /admin/realms/{realm}/roles': postAdminRealmsRealmRoles,
  'GET /admin/realms/{realm}/roles-by-id/{role-id}': getAdminRealmsRealmRolesByIdRoleId,
  'PUT /admin/realms/{realm}/roles-by-id/{role-id}': putAdminRealmsRealmRolesByIdRoleId,
  'DELETE /admin/realms/{realm}/roles-by-id/{role-id}': deleteAdminRealmsRealmRolesByIdRoleId,
  'GET /admin/realms/{realm}/roles-by-id/{role-id}/composites': getAdminRealmsRealmRolesByIdRoleIdComposites,
  'POST /admin/realms/{realm}/roles-by-id/{role-id}/composites': postAdminRealmsRealmRolesByIdRoleIdComposites,
  'DELETE /admin/realms/{realm}/roles-by-id/{role-id}/composites': deleteAdminRealmsRealmRolesByIdRoleIdComposites,
  'GET /admin/realms/{realm}/roles-by-id/{role-id}/composites/clients/{clientUuid}':
    getAdminRealmsRealmRolesByIdRoleIdCompositesClientsClientUuid,
  'GET /admin/realms/{realm}/roles-by-id/{role-id}/composites/realm': getAdminRealmsRealmRolesByIdRoleIdCompositesRealm,
  'GET /admin/realms/{realm}/roles-by-id/{role-id}/management/permissions':
    getAdminRealmsRealmRolesByIdRoleIdManagementPermissions,
  'PUT /admin/realms/{realm}/roles-by-id/{role-id}/management/permissions':
    putAdminRealmsRealmRolesByIdRoleIdManagementPermissions,
  'GET /admin/realms/{realm}/roles/{role-name}': getAdminRealmsRealmRolesRoleName,
  'PUT /admin/realms/{realm}/roles/{role-name}': putAdminRealmsRealmRolesRoleName,
  'DELETE /admin/realms/{realm}/roles/{role-name}': deleteAdminRealmsRealmRolesRoleName,
  'GET /admin/realms/{realm}/roles/{role-name}/composites': getAdminRealmsRealmRolesRoleNameComposites,
  'POST /admin/realms/{realm}/roles/{role-name}/composites': postAdminRealmsRealmRolesRoleNameComposites,
  'DELETE /admin/realms/{realm}/roles/{role-name}/composites': deleteAdminRealmsRealmRolesRoleNameComposites,
  'GET /admin/realms/{realm}/roles/{role-name}/composites/clients/{client-uuid}':
    getAdminRealmsRealmRolesRoleNameCompositesClientsClientUuid,
  'GET /admin/realms/{realm}/roles/{role-name}/composites/realm': getAdminRealmsRealmRolesRoleNameCompositesRealm,
  'GET /admin/realms/{realm}/roles/{role-name}/groups': getAdminRealmsRealmRolesRoleNameGroups,
  'GET /admin/realms/{realm}/roles/{role-name}/management/permissions':
    getAdminRealmsRealmRolesRoleNameManagementPermissions,
  'PUT /admin/realms/{realm}/roles/{role-name}/management/permissions':
    putAdminRealmsRealmRolesRoleNameManagementPermissions,
  'GET /admin/realms/{realm}/roles/{role-name}/users': getAdminRealmsRealmRolesRoleNameUsers,
  'DELETE /admin/realms/{realm}/sessions/{session}': deleteAdminRealmsRealmSessionsSession,
  'POST /admin/realms/{realm}/testSMTPConnection': postAdminRealmsRealmTestSMTPConnection,
  'GET /admin/realms/{realm}/users': getAdminRealmsRealmUsers,
  'POST /admin/realms/{realm}/users': postAdminRealmsRealmUsers,
  'GET /admin/realms/{realm}/users-management-permissions': getAdminRealmsRealmUsersManagementPermissions,
  'PUT /admin/realms/{realm}/users-management-permissions': putAdminRealmsRealmUsersManagementPermissions,
  'GET /admin/realms/{realm}/users/count': getAdminRealmsRealmUsersCount,
  'GET /admin/realms/{realm}/users/profile': getAdminRealmsRealmUsersProfile,
  'PUT /admin/realms/{realm}/users/profile': putAdminRealmsRealmUsersProfile,
  'GET /admin/realms/{realm}/users/profile/metadata': getAdminRealmsRealmUsersProfileMetadata,
  'GET /admin/realms/{realm}/users/{user-id}': getAdminRealmsRealmUsersUserId,
  'PUT /admin/realms/{realm}/users/{user-id}': putAdminRealmsRealmUsersUserId,
  'DELETE /admin/realms/{realm}/users/{user-id}': deleteAdminRealmsRealmUsersUserId,
  'GET /admin/realms/{realm}/users/{user-id}/configured-user-storage-credential-types':
    getAdminRealmsRealmUsersUserIdConfiguredUserStorageCredentialTypes,
  'GET /admin/realms/{realm}/users/{user-id}/consents': getAdminRealmsRealmUsersUserIdConsents,
  'DELETE /admin/realms/{realm}/users/{user-id}/consents/{client}': deleteAdminRealmsRealmUsersUserIdConsentsClient,
  'GET /admin/realms/{realm}/users/{user-id}/credentials': getAdminRealmsRealmUsersUserIdCredentials,
  'DELETE /admin/realms/{realm}/users/{user-id}/credentials/{credentialId}':
    deleteAdminRealmsRealmUsersUserIdCredentialsCredentialId,
  'POST /admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveAfter/{newPreviousCredentialId}':
    postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveAfterNewPreviousCredentialId,
  'POST /admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/moveToFirst':
    postAdminRealmsRealmUsersUserIdCredentialsCredentialIdMoveToFirst,
  'PUT /admin/realms/{realm}/users/{user-id}/credentials/{credentialId}/userLabel':
    putAdminRealmsRealmUsersUserIdCredentialsCredentialIdUserLabel,
  'PUT /admin/realms/{realm}/users/{user-id}/disable-credential-types':
    putAdminRealmsRealmUsersUserIdDisableCredentialTypes,
  'PUT /admin/realms/{realm}/users/{user-id}/execute-actions-email': putAdminRealmsRealmUsersUserIdExecuteActionsEmail,
  'GET /admin/realms/{realm}/users/{user-id}/federated-identity': getAdminRealmsRealmUsersUserIdFederatedIdentity,
  'POST /admin/realms/{realm}/users/{user-id}/federated-identity/{provider}':
    postAdminRealmsRealmUsersUserIdFederatedIdentityProvider,
  'DELETE /admin/realms/{realm}/users/{user-id}/federated-identity/{provider}':
    deleteAdminRealmsRealmUsersUserIdFederatedIdentityProvider,
  'GET /admin/realms/{realm}/users/{user-id}/groups': getAdminRealmsRealmUsersUserIdGroups,
  'GET /admin/realms/{realm}/users/{user-id}/groups/count': getAdminRealmsRealmUsersUserIdGroupsCount,
  'PUT /admin/realms/{realm}/users/{user-id}/groups/{groupId}': putAdminRealmsRealmUsersUserIdGroupsGroupId,
  'DELETE /admin/realms/{realm}/users/{user-id}/groups/{groupId}': deleteAdminRealmsRealmUsersUserIdGroupsGroupId,
  'POST /admin/realms/{realm}/users/{user-id}/impersonation': postAdminRealmsRealmUsersUserIdImpersonation,
  'POST /admin/realms/{realm}/users/{user-id}/logout': postAdminRealmsRealmUsersUserIdLogout,
  'GET /admin/realms/{realm}/users/{user-id}/offline-sessions/{clientUuid}':
    getAdminRealmsRealmUsersUserIdOfflineSessionsClientUuid,
  'PUT /admin/realms/{realm}/users/{user-id}/reset-password': putAdminRealmsRealmUsersUserIdResetPassword,
  'PUT /admin/realms/{realm}/users/{user-id}/reset-password-email': putAdminRealmsRealmUsersUserIdResetPasswordEmail,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings': getAdminRealmsRealmUsersUserIdRoleMappings,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}':
    getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  'POST /admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}':
    postAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  'DELETE /admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}':
    deleteAdminRealmsRealmUsersUserIdRoleMappingsClientsClientId,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}/available':
    getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdAvailable,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/clients/{client-id}/composite':
    getAdminRealmsRealmUsersUserIdRoleMappingsClientsClientIdComposite,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/realm': getAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  'POST /admin/realms/{realm}/users/{user-id}/role-mappings/realm': postAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  'DELETE /admin/realms/{realm}/users/{user-id}/role-mappings/realm':
    deleteAdminRealmsRealmUsersUserIdRoleMappingsRealm,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/realm/available':
    getAdminRealmsRealmUsersUserIdRoleMappingsRealmAvailable,
  'GET /admin/realms/{realm}/users/{user-id}/role-mappings/realm/composite':
    getAdminRealmsRealmUsersUserIdRoleMappingsRealmComposite,
  'PUT /admin/realms/{realm}/users/{user-id}/send-verify-email': putAdminRealmsRealmUsersUserIdSendVerifyEmail,
  'GET /admin/realms/{realm}/users/{user-id}/sessions': getAdminRealmsRealmUsersUserIdSessions,
  'GET /admin/realms/{realm}/users/{user-id}/unmanagedAttributes': getAdminRealmsRealmUsersUserIdUnmanagedAttributes
};
