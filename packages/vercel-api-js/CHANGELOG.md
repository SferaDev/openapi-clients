# vercel-api-js

## 1.0.2

### Patch Changes

- 0477f31: Update constructor

## 1.0.1

### Patch Changes

- ee3042e: Fix baseUrl and updates

## 1.0.0

### Major Changes

- 24c9a11: Revamp Vercel API client

### Patch Changes

- 5b28378: Add Nitro support in project configuration.

## 0.25.3

### Patch Changes

- d186f87: Add AWS configuration options to user event and project responses
- e4a886b: Remove dangerous promotion from canary
- 9b061f2: Remove northstarMigration from AuthUser schema

## 0.25.2

### Patch Changes

- 36bb5d7: Add new 'connectConfigurations' field to 'UpdateProjectDataCacheResponse'
- afab785: Add `increasedOnDemandEmailSentAt`
- 85cfccd: Add environmentOverrides field to UpdateResourceSecretsRequestBody, UpdateResourceSecretsByIdRequestBody, and ImportResourceRequestBody types
- 26b0be3: Add edgeCacheNamespace to project related responses
- 0029939: Add removeRedirects field to RemoveProjectDomainRequestBody
- f8b866f: Rename createOrTransferDomain to postDomains for consistency

## 0.25.1

### Patch Changes

- ee2684f: Update buildMachineType field in resourceConfig and defaultResourceConfig

## 0.25.0

### Minor Changes

- 9df31d8: [BREAKING] Added configurationId field to CreateProjectResponse, GetProjectResponse, UpdateProjectResponse, and UpdateProjectDataCacheResponse

### Patch Changes

- 640279f: Add shared v0 token

## 0.24.3

### Patch Changes

- 52b71a8: Reduce maxLength constraint on project search field
- 158dcb6: Adjust type definition for GetDeploymentEvents response

## 0.24.2

### Patch Changes

- 6466a46: Add new 'fromRollingReleaseId' field to lastAliasRequest type
- 3dab4ff: Removed 'aiCredits' from UserEvent and AuthUser schemas
- 6feddf3: [BREAKING] Add new 'vercelAppInstallation' property to 'GetProjectsResponse', 'CreateProjectResponse', 'GetProjectResponse', and 'UpdateProjectResponse'
- 9298c0b: Make some changes to optional properties
- fbe45d4: Reorder 'handle' properties in 'CreateDeploymentResponse' to match alphabetical order
- 9ae5776: Remove 'abovePlan' field from UserEvent type
- 7dddb74: undefined
- 99819ef: Change ordering of 'type' values in matching options
- 80457f9: Update build machine type options in various API responses
- 37efdb6: Update customEnvironments type to include detailed properties for each environment
- 16764f0: Add patchAliasesIdProtectionBypass

## 0.24.1

### Patch Changes

- 14decee: Add new endpoint to move project domain to another project
- 93d6b84: Remove recommendedIps and recommendedCname fields from GetDomainConfigResponse
- 6c401f1: Add 'abovePlan' field to 'buildMachine' in UserEvent type
- 3d20390: [BREAKING] Add new field customEnvironmentsPerProject to UserEvent and AuthUser schemas
- de0d55c: [BREAKING] Add new 'google' type to user credentials and auth tokens
- b9da014: Update `requireApproval` and `minutesToRelease` fields

## 0.24.0

### Minor Changes

- 06a8f43: [BREAKING] New endpoint vercelRun to perform a new action

### Patch Changes

- fea55e7: Remove vsmValue

## 0.23.6

### Patch Changes

- 0214182: Add team member MFA status field to project responses

## 0.23.5

### Patch Changes

- a747080: Add body parameter to upload file endpoint

## 0.23.4

### Patch Changes

- c39ff4a: [BREAKING] Change structure of favoriteProjectsAndSpaces in UserEvent and AuthUser

## 0.23.3

### Patch Changes

- 320f4c8: Add new flags explorer overrides threshold and unlimited overrides
- 11e409a: Rename 'GetV1ExperimentationItems' type to 'QueryExperimentationItems'
- 9220b02: Add new optional fields to ImportResourceRequestBody

## 0.23.2

### Patch Changes

- a365114: [BREAKING] Change the order of 'type' options in CreateProjectEnvResponse
- ad484c6: [BREAKING] Change handle values in CreateDeploymentResponse

## 0.23.1

### Patch Changes

- 1331e24: Change handling for lambdas createdAt and readyState in CreateDeploymentResponse
- 4efc49f: Change readySubstate values and added a new 'ROLLING' state
- ad83874: [BREAKING] Change deliveryFormat options in log drain endpoints

## 0.23.0

### Minor Changes

- ecf56ca: Add recommended IPs and CNAME for the domain in GetDomainConfigResponse

## 0.22.1

### Patch Changes

- 5f0ac90: Update type for get custom deployment
- 15c6623: [BREAKING] Change type order in filterProjectEnvs and related functions
- e120dde: [BREAKING] Remove 'blobStores' field from resourceConfig in AuthUser schema
- c808605: Add 'partial' field to UpdateResourceSecretsRequestBody and UpdateResourceSecretsByIdRequestBody

## 0.22.0

### Minor Changes

- 8ce2794: Add support for managedRules in components

### Patch Changes

- 5f3f515: Add new field 'gitProviderOptions' to UpdateProjectDataCacheResponse
- c1f5210: Add new 'drain' property to various project-related API response types
- 2ccc455: Add 'UsageViewer' permission to teamPermissions
- 1550896: Add flagsExplorerSubscription field to project-related responses
- 3d4776c: Add teamRoles and teamPermissions fields to ReadAccessGroupResponse, UpdateAccessGroupResponse, and CreateAccessGroupResponse types

## 0.21.2

### Patch Changes

- 1aa4dec: Refactor managedRules structure in GetFirewallConfigResponse and PutFirewallConfigResponse
- f0f0865: Add projectRollingRelease field to various project endpoints
- 5169182: Add 'action' field to managedRules in PutFirewallConfigRequestBody

## 0.21.1

### Patch Changes

- 610c7dc: Add new tag 'tag_flags'
- fd37558: Move createProject endpoint from v10 to v11

## 0.21.0

### Minor Changes

- e80705b: Update spec

## 0.20.1

### Patch Changes

- 671ea25: Add integrationSSOSession field to project-related responses
- 5423343: Add new field 'imageOptimizationNewPrice' to project-related API responses
- 40d709b: Add new marketplace experimentation data to project responses
- 30188f2: Add defaultResourceConfig field to multiple API endpoints
- 05ee70e: Add new permissions for user, userConnection, webAuthn, and oauth2Connection

## 0.20.0

### Minor Changes

- f051ebf: Add new property 'routeObservabilityToDefaultApp' to UpdateProjectDataCacheResponse type

### Patch Changes

- 2353d03: [MINOR] Add new 'bypassSystem' field to firewall configuration variables
- 207b8ec: Add skipBillingData to GetConfigurationsQueryParams

## 0.19.5

### Patch Changes

- 1b2a9f5: Add response type for creating project transfer request
- 108a247: Change functionDefaultRegion type to accept null
- 75e9f57: Update descriptions

## 0.19.4

### Patch Changes

- e1ca271: Add fluid property to resourceConfig in multiple endpoints
- 2ace464: Add new image optimization metrics to AuthUser schema
- b32db47: Add new endpoint to retrieve active attack status within the last 24h window
- 6ba6722: Add new field customEnvironmentId to AddProjectDomainRequestBody type

## 0.19.3

### Patch Changes

- 1d85bc3: [BREAKING] Add 'functionZeroConfigFailover' to resourceConfig

## 0.19.2

### Patch Changes

- ae316fc: [BREAKING] Rename all custom environment API endpoints from V1 to V9

## 0.19.1

### Patch Changes

- c50aad5: Add tagIds field to getConfigurations endpoint
- 1986a5d: [BREAKING] Change field name from 'Project' to 'ProjectId' in getBypassIp response
- c0119ba: Change additionalPermissions to additionalRoles in GetTeamMembersResponse

## 0.19.0

### Minor Changes

- 52eee8a: Add 'additionalPermissions' field to GetTeamMembersResponse and TeamLimited types

## 0.18.3

### Patch Changes

- e267193: The user's default team field description updated
- fe9112f: Add bypass IP firewall endpoints

## 0.18.2

### Patch Changes

- 1ab789b: [OpenAPI] Spec updates for vercel-api-js

## 0.18.1

### Patch Changes

- 3c79610: Remove verification challenges from VerifyProjectDomainResponse

## 0.18.0

### Minor Changes

- 06f9c69: Add new qualities field to images in getDeployment, CreateDeploymentResponse, and CancelDeploymentResponse

## 0.17.0

### Minor Changes

- 35374e2: Update bundle mechanism

## 0.16.1

### Patch Changes

- 5d3c268: Add 'observabilityEvent' to AuthUser type

## 0.16.0

### Minor Changes

- bfcf8aa: Add support for microfrontends in the 'getDeployment' and 'createDeployment' endpoints
- 1e5d876: Add observabilityConfiguration and observabilityData to various project endpoints

### Patch Changes

- 445b9fc: Add new 'v0-web' option to source field in deployment API

## 0.15.0

### Minor Changes

- 6c01a57: Add firewallBypassIps field to project update and get responses

### Patch Changes

- 64d934c: [BREAKING] Change group to groupIds in project endpoints
- d8ac4ad: Add teamMicrofrontends field to project-related API responses

## 0.14.0

### Minor Changes

- 699dd5d: [BREAKING] Add new endpoint to get user info

### Patch Changes

- f27daa1: [BREAKING] Update field 'type' in AuthToken schema with new options 'otp' and 'sms'
- d4f12f9: Update customEnvironments type to use Record<string, any> instead of specific fields
- b7a8a1f: Add branchMatcher field to project responses

## 0.13.1

### Patch Changes

- badfb19: Add isInSystemBuildsQueue field to deployment response

## 0.13.0

### Minor Changes

- 31174d4: Add new deployment integration actions: cancel and cleanup

### Patch Changes

- d4bf41e: Adjust type enum to include 'secret'
- a6b9572: [BREAKING] Removed 'removedLogDrainsAt', 'removedProjectEnvsAt', 'removedTokensAt', and 'removedWebhooksAt' fields from getConfigurations and getConfiguration API endpoints
- 1690c07: Add defaultRoute field to GetDeploymentResponse and other related types
- f556dbb: Add 'issuerMode' field to 'oidcTokenConfig' in 'UpdateProjectDataCacheResponse'
- 0cf8bb2: [BREAKING] Change the order of 'type' enum values in CreateProjectResponse and UpdateProjectResponse

## 0.12.0

### Minor Changes

- 39fa39b: Add new 'hobby' and 'v0TeamSeats' fields to the CreateTeamResponse interface
- b7af1a2: Add entitlements field to UpdateAccessGroupResponse

### Patch Changes

- a5aaadb: Add support for IP buckets with expiration date in project responses
- 5ad752c: Add integrations field to getDeployment, createDeployment, cancelDeployment, CreateProjectResponse, UpdateProjectResponse, CreateProjectEnvResponse, removeProjectEnv, and editProjectEnv types
- 1f4b4fd: Add integrationIdOrSlug parameter to GetConfigurationsQueryParams

## 0.11.1

### Patch Changes

- 88045f8: Add installationType parameter to GetConfigurationsQueryParams
- fc395d2: Add allowServerlessConcurrency field to resourceConfig

## 0.11.0

### Minor Changes

- 90dbe51: Add new fields 'id', 'buildingAt', 'checksConclusion', 'checksState', 'oidcTokenClaims', and 'previewCommentsEnabled' to latestDeployments in UpdateProjectDataCacheResponse

### Patch Changes

- 15a5c36: [BREAKING] Update supported node versions to include 22.x
- c4f56ad: [BREAKING] Add 'wafRateLimitRequest' to AuthUser schema
- 05ff026: [BREAKING] Add new 'flags-connection-string' type to project environment variables
- c0aa464: Change response type of searchRepo endpoint
- dd7b469: Add new 'previewDeploymentsDisabled' field to UpdateProjectRequestBody
- f7231ed: Remove lambdaDefaultTimeout and lambdaDefaultMemoryType fields from resourceConfig in several endpoints

## 0.10.0

### Minor Changes

- 4bc222f: Add new endpoint to request a new login for a user to get a token
- a33712f: Add 'fasthtml' to supported project types

### Patch Changes

- f110dcf: [BREAKING] Change in CreateProjectRequestBody structure
- 6ce1455: Reorder 'type' enum values for 'lambdas' in CreateDeploymentResponse
- 7c541b7: Add 'fasthtml' to the list of available project types
- 7eec3fc: Change 'purpose' type to object with 'type' and 'projectId'
- 12b46d9: [BREAKING] Remove undocumented field 'membership' from 'TeamLimited'
- f39e026: [BREAKING] Change type field enum options and comments in components.ts
- ab2d48d: [BREAKING] Reorder 'type' enum values for consistency

## 0.9.1

### Patch Changes

- c45927e: Fix typo in CreateOrTransferDomainResponse type
- a6f10e2: Add enableProductionFeedback to UpdateProjectDataCacheResponse and other related types
- 719d78d: Add new 'name' field to CreateConfigurableLogDrainRequestBody
- d60cedc: Add new integrationResourceReplCommand field to project response types
- 04dfbc9: Add new field 'includedAllocationMiu' to 'components' and 'schemas'
- f963898: [BREAKING] Add new fields to the response of getConfiguration endpoint
- c842536: Add vpcPeeringConnection and sonar fields to responses
- 79de957: [BREAKING] Rename 'pro' to 'concurrentBuilds' in CreateTeamResponse
- 9d78c6b: Add new field 'imageOptimizationType' to AuthUser schema
- 651ab8b: New buy domain endpoint
- 9db31c8: Add new fields 'projectFlags', 'projectTier', and 'customEnvironment' to UpdateProjectDataCacheResponse

## 0.9.0

### Minor Changes

- 19b3382: Add support for new targets object in getDeployment and createDeployment APIs

### Patch Changes

- 23fbbe2: [BREAKING] Add new 'firewall' source option to log drains
- 1644eaf: Add ACLAction enum for resource actions
- 062bcd1: Add 'environment' field to the project data cache response
- 1f54229: Add 'firewall' as a source option for LogDrainRequestBody and ConfigurableLogDrainRequestBody
- 65c3e00: [BREAKING] Add vsmValue to project environment variables
- 63ac8ae: Add new AWS Marketplace field to AuthUser type
- 95bf70e: Add `teamId` and `userId` properties to domains responses
- 60d3771: Add 'environment' field to project response types

## 0.8.5

### Patch Changes

- 5640e39: Add new marketplace invoice endpoints
- 765c3c3: Update the deployment protection automation bypass for a project
- e07b4b0: Removed integrationStore from several API responses

## 0.8.4

### Patch Changes

- 611e148: Make deploymentExpiration fields optional
- cb67b7d: Add new fields to deployment expiration in UpdateProjectDataCacheResponse
- f86aa27: Add teamGitExclusivity field to project endpoints
- cd0ddde: Add integrationResource field to various API responses

## 0.8.3

### Patch Changes

- 5ef8f47: Add highestQuantity field to CreateTeamResponse and AuthUser types
- 0e0a7dc: [BREAKING] Change integrationResource to integrationStore in project endpoints
- cbfda3a: Add new fields expirationDaysCanceled and expirationDaysErrored to deploymentExpiration in GetProjectsResponse, CreateProjectResponse, GetProjectResponse, and UpdateProjectResponse types
- e5a70f3: [BREAKING] Modify emailInviteCodes type structure
- 7c3e6f3: Add new type UpdateAccessGroupRequestBody for updating access group details
- 1b099f6: [BREAKING] Change integrationStore to integrationResource in several endpoints

## 0.8.2

### Patch Changes

- fe996c7: Add 'account-plan-downgrade' to disabledReason enum
- 5124d55: [BREAKING] Update domain buy endpoint version from v4 to v5
- b8e920d: Add undeletedAt field to deployment response
- 7b2a03e: Add forceOrbMigration field to CreateTeamResponse and AuthUser types
- ed056ad: Add validation for minimum and maximum items in optionsAllowlist paths

## 0.8.1

### Patch Changes

- 2819f3c: Add new endpoint to create an access group

## 0.8.0

### Minor Changes

- e6e9dd3: Add new endpoints

### Patch Changes

- e6e9dd3: Update dependencies

## 0.7.2

### Patch Changes

- 3b348dc: Add new fields to AuthUser schema

## 0.7.1

### Patch Changes

- d90c29c: Refactor emailLogin function to support different response types
- ea16d5f: [BREAKING] Update disabledReason enum values

## 0.7.0

### Minor Changes

- 7d2d4b8: [BREAKING] Change endpoint URL for getting deployment events from v2 to v3

## 0.6.4

### Patch Changes

- 1734501: Add new 'nodeVersion' field to CreateDeploymentRequestBody
- 7253391: [BREAKING] Add new type 'integration-store-secret' to UpdateProjectDataCacheResponse, GetProjectsResponse, CreateProjectResponse, GetProjectResponse, UpdateProjectResponse, filterProjectEnvs, getProjectEnv, CreateProjectEnvResponse, removeProjectEnv, EditProjectEnvResponse
- dc191cf: Add new fields skewProtectionBoundaryAt and skewProtectionMaxAge to UpdateProjectRequestBody
- e096156: [BREAKING] Add new oauth2Connection field to multiple project-related API responses
- 9d8632b: Change viewPreference order in activeDashboardViews type

## 0.6.3

### Patch Changes

- 0b0194e: Add new field attackModeActiveUntil to project responses
- cd00645: Add oauth2Application field to project related responses
- 8920920: Remove planIteration from CreateTeamResponse and AuthUser
- 06e6e64: Add new property 'cronJobsPerProject' to 'AuthUser' type
- 44f20a3: Add skewProtectionBoundaryAt and skewProtectionMaxAge to project data cache and project response
- 224ec97: Update API endpoint to create project from v9 to v10
- 71615f0: Add new field 'planIteration' to AuthUser type
- 5bfccd9: Add optional field 'planIteration' to AuthUser type

## 0.6.2

### Patch Changes

- 79d46c2: Add 'dryRun' option to PatchEdgeConfigItems and PatchEdgeConfigSchema query params
- 364ba3e: Add projectAccessGroup field to project related responses
- 92880b3: [BREAKING] Add integrationStores to AuthUser in schemas.ts
- cda8a8e: Modified CreateProjectEnvVariables to specify that git branch must have target=preview

## 0.6.1

### Patch Changes

- f002c7a: Add security information to project endpoints
- e59cf32: Add notificationStatementOfReasons to project-related API endpoints
- 5f5bea1: Add firewall settings to security object in project-related API endpoints
- cca589a: Add 'project' field to getDeployment and createDeployment response

## 0.6.0

### Minor Changes

- 46aa322: [BREAKING] Change structure of GetProjectEnvResponse

### Patch Changes

- 862b128: Change 'origin' values in GetTeamMembersResponse type

## 0.5.1

### Patch Changes

- 3d3fc73: [BREAKING] Remove migrateExistingEnvVariablesToSensitive field from PatchTeamRequestBody
- 58c0459: [BREAKING] Add new 'sensitive' type for ENV variables
- e7d1ddf: [BREAKING] Reduce maxLength of projectId in InviteUserToTeamRequestBody
- 286adc8: Update domain configuration response to include 'dns-01' option
- 580013f: Remove minimum limit requirement in GetTeamMembersQueryParams
- 5718437: Add web analytics object to project data endpoints

## 0.5.0

### Minor Changes

- 787cf84: Add new endpoints to manage Edge Config schema
- 4330f7c: Add migration status property to AuthUser schema for Northstar migration
- d0479f5: Add attribution information for the session or current page to CreateTeamRequestBody

### Patch Changes

- ed57233: Add serverlessFunctionZeroConfigFailover field to project related API endpoints
- 5aeca61: Add new properties to VerifyTokenQueryParams
- 3359159: Add crons field to deployment response
- 86aeaf6: Add new 'compression' field to log drain endpoints
- c6d4fd4: Add 'store.credentials-reset' to webhook events
- 9b75b8a: Add 'store.updated' to allowed webhook event types
- 446c95d: Update minimum value for limit parameter in GetTeamMembersQueryParams

## 0.4.0

### Minor Changes

- f75fb8d: [BREAKING] Add new fields to the project object in the API response

### Patch Changes

- f090e4a: [OpenAPI] Spec updates for vercel-api-js

## 0.3.0

### Minor Changes

- be76b72: Add 'role' field to InviteUserToTeamRequestBody

### Patch Changes

- 18f26af: [BREAKING] Remove teamId field from JoinTeamRequestBody

## 0.2.0

### Minor Changes

- ce46c2b: [BREAKING] Change endpoint URL from v6 to v7 for file retrieval
- 37f6643: [BREAKING] Add new request body for DeleteConfiguration
- 668433e: Add new request body type for cancelling deployment
- e4b3662: Add sampling rate option to CreateConfigurableLogDrainRequestBody

### Patch Changes

- 4991311: Remove redundant comment and re-order properties in AuthUser type
- 350a358: Add validation pattern for edgeConfigId in endpoint path params
- dd972a2: [BREAKING] Remove 'previousLogDrainId' field from 'CreateLogDrainRequestBody'

## 0.1.25

### Patch Changes

- 7405cf2: Add support for node 20

## 0.1.24

### Patch Changes

- 0be29c9: Export `types`

## 0.1.23

### Patch Changes

- 2da8330: [OpenAPI] Spec updates for vercel-api-js
- 73631f0: [OpenAPI] Add pause project endpoints

## 0.1.22

### Patch Changes

- 352a83a: [OpenAPI] Spec updates for vercel-api-js
- f587d3d: [OpenAPI] Spec updates for vercel-api-js
- a267e20: [OpenAPI] Spec updates for vercel-api-js
- 64b8c15: [OpenAPI] Spec updates for vercel-api-js

## 0.1.21

### Patch Changes

- 8faaa44: [OpenAPI] Add patch domain endpoint
- 3b9bfd6: [OpenAPI] Add getDomainTransfer endpoint

## 0.1.20

### Patch Changes

- 22694e7: [OpenAPI] Spec updates for vercel-api-js
- b0d9604: [OpenAPI] Spec updates for vercel-api-js
- c2b314e: [OpenAPI] Remove oauth configurations
- 7f508cc: [OpenAPI] Add new projects array response

## 0.1.19

### Patch Changes

- 1ab0e65: [OpenAPI] Spec updates for vercel-api-js

## 0.1.18

### Patch Changes

- 8570cfa: [OpenAPI] Spec updates for vercel-api-js

## 0.1.17

### Patch Changes

- 67bc9ee: [OpenAPI] Spec updates for vercel-api-js

## 0.1.16

### Patch Changes

- 43a95cc: Fix env variables

## 0.1.15

### Patch Changes

- d5f744b: [OpenAPI] Spec updates for vercel-api-js

## 0.1.14

### Patch Changes

- a8b7568: [OpenAPI] Remove `listDeploymentBuilds`
- 1f06b87: [OpenAPI] Spec updates for Vercel

## 0.1.13

### Patch Changes

- c903731: [OpenAPI] Spec updates

## 0.1.12

### Patch Changes

- 04b419b: [OpenAPI] Revert change to schema

## 0.1.11

### Patch Changes

- eacb118: [OpenAPI] Update schemas for projects and deployments

## 0.1.10

### Patch Changes

- 7445ccd: [OpenAPI] Update InviteUserToTeamResponse

## 0.1.9

### Patch Changes

- 8ca0e54: [OpenAPI] Spec updates

## 0.1.8

### Patch Changes

- 13148b3: Update accessToken result to match types

## 0.1.7

### Patch Changes

- 64b81ee: Update accessToken helper

## 0.1.6

### Patch Changes

- 53e14fe: Add accessToken auth method

## 0.1.5

### Patch Changes

- d535c65: Fix enum values

## 0.1.4

### Patch Changes

- 4264ad4: Fix return type of `request` method

## 0.1.3

### Patch Changes

- dd84ad5: Add `request` method with string literals"

## 0.1.2

### Patch Changes

- 660d05b: Add `connectConfigurationId` to schema

## 0.1.1

### Patch Changes

- 0e017b1: Schema updates for edge config endpoints

## 0.1.0

### Minor Changes

- 7278900: Initial release
