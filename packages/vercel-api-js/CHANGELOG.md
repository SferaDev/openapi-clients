# vercel-api-js

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
