# cloudflare-api-js

## 0.18.1

### Patch Changes

- 33ccecb: Add the 'indicatorType' field to POST request body types.
- d78d3d4: Add `dlp` property to gateway response types.

## 0.18.0

### Minor Changes

- 3bd766d: Add new endpoint to list all IP leases owned by an account

### Patch Changes

- 05df1f4: Introduce types for bulk operation statuses in Lists API.
- 941bf80: Default viewport added to multiple request bodies.
- 8a6bbfc: Increase default and maximum value for max_num_results in AutoragConfigAiSearchRequestBody.
- d94b4e1: Remove default annotation from rule description comments.
- 39a4d16: Add new AI search model '@cf/moonshotai/kimi-k2-instruct' to AutoragConfigAiSearchRequestBody
- 25fc971: Change terraform configurability to computed_optional for various schema settings
- f677999: Add system_prompt field to AutoragConfigAiSearchRequestBody type
- 1bb5971: [BREAKING] Remove optional custom AI models configuration from BrapiPostJsonRequestBody
- 5e1fa8c: Add new endpoint to list autorag jobs.
- c86bd08: Add optional store_id field to AigConfig types.
- 6158bfa: [BREAKING] Rename ListsCompletedBulkOperation to ListsBulkOperationCompleted.
- 362df9a: Add new endpoints for GPT OSS 120b and 20b under Workers AI CF OpenAI.
- 070fe4f: Add 'scopes' attribute to the SecretsStoreSecretsListQueryParams.
- 5c54f53: Add new function to retrieve AI bot traffic distribution by user agent
- 860e35a: Update x-stainless-terraform-configurability for ZeroTrustGatewayDnsDestinationIpv6BlockId to computed_optional.
- 2688eb8: Add support for Python module content types in Worker script uploads
- 57e1e90: Add AutoragConfigSyncError type for error handling with status 400
- 5f6b93c: Add new API endpoint for bulk creation of saved string queries in Brand Protection.
- cc6194a: Extend 'limitType' to include 'cost' for various AigConfig responses and requests.
- 8aba99a: Add pagination support to several Access API list endpoints with page and per_page query parameters

## 0.17.0

### Minor Changes

- 606106d: Add new endpoints for binary data upload and retrieval

## 0.16.1

### Patch Changes

- 8a73b10: Add @x-stainless-terraform-configurability computed_optional metadata to various endpoint schemas
- bf2f229: [BREAKING] Allow ZeroTrustGatewayEndpoints to be null
- 6784a24: Add default false value to LogpushJobFlagEnabled flag.
- aa8c1d0: Add 'creator' field to CloudflareImagesListImagesQueryParams and V2QueryParams.
- b158961: Update comment on reportType parameter in SubmitAbuseReportPathParams
- 582e994: [BREAKING] Change IamResources type to support nested objects with string values

## 0.16.0

### Minor Changes

- 99de2dc: Add auditability annotations to WorkersAi API response types
- f38416b: Add 'memberships' option to resource_scope parameter in AuditLogsV2GetAccountAuditLogsQueryParams

### Patch Changes

- fbc5a20: [BREAKING] Remove several deprecated `api/` endpoints in Brand Protection.
- d67852a: Add ListsCompleted type for operation completion timestamp.
- d060f3d: Add 'insight' and 'raw' properties to PatchEventUpdateRequestBody and PostEventUpdateRequestBody

## 0.15.3

### Patch Changes

- 5909a0a: [OpenAPI] Spec updates for cloudflare-api-js

## 0.15.2

### Patch Changes

- 8ae636d: Add 'webp' option to the polish configuration
- 06a9d2a: [BREAKING] Change CIDRs to IPv4 only and note that IPv6 CIDRs are currently unsupported
- ede8536: Add x-auditable flag to CustomIndicatorFeedsDescription type
- a44aa65: Add new endpoint to fetch all DEX tests
- 22b8ffe: [BREAKING] Add new x-auditable attribute to StreamSchemasIdentifier type definition
- 4ee2ac1: Add detailed result information to ApiShieldApiResponseCollection
- 9c610a7: Change InfraApiResponseCollection to include result_info as a nested object
- 2c9fe89: Add x-auditable property to DnsSettingsIdentifier schema

## 0.15.1

### Patch Changes

- 55fee33: [BREAKING] Add new query parameter 'forceRefresh' to 'GetEventListGetQueryParams'
- 676de5b: List Catalog Syncs (Closed Beta) - fix typo in endpoint description
- ad1807f: [BREAKING] Change type of virtual_network_id in TunnelRouteCreateATunnelRouteRequestBody and TunnelRouteUpdateATunnelRouteRequestBody to TunnelVirtualNetworkIdComputedOptional
- 5e07130: Add sccm_vpn_boundary_support field to TeamsDevicesDefaultDeviceSettingsPolicy and TeamsDevicesDeviceSettingsPolicy
- b0fb688: Add 'x-auditable' property to RumIdentifier and SpectrumAnalyticsIdentifier types
- 2a0cc51: [BREAKING] Change pattern for LogcontrolRegions from ^[a-z,]_$ to ^[a-z]_$
- a3b53bf: Make script property optional in WorkersRoute type
- 0a8ee17: Update result type from R2LifecycleRule to R2QueuesConfig
- cf68a5d: [BREAKING] Removed DnsRecordsResultInfo type and moved its properties to DnsRecordsApiResponseCollection type
- e922b8d: Update workers endpoints
- 9803c5b: [BREAKING] Remove AddressingResultInfo interface, replace with nested result_info in AddressingApiResponseCollection

## 0.15.0

### Minor Changes

- 18102a2: Add new endpoint to get a single event notification rule

## 0.14.0

### Minor Changes

- ba95cf1: Add TeamsDevicesAccessSerialNumberListInputRequest

### Patch Changes

- 12473b8: Add new endpoint to get event list
- 2cb75b8: Add new endpoint to delete a workflow
- 03c3941: [BREAKING] Add support for zstd compression algorithm
- eeee8d0: Add new field 'filter' to request bodies for log push jobs
- 9bcf0d3: Add new endpoint to update access application settings
- dfa0d59: Change type and structure of errors and messages in Whois API response
- 0ff63aa: [BREAKING] Change CloudConnectorRules to CloudConnectorRule in the schemas
- 25c4794: Change type of body in AccountResourceGroupCreateVariables from Schemas.IamCreateResourceGroup to Schemas.IamRequestCreateResourceGroup
- 022df88: Change type of 'period' property to 'number' in RulesetsBlockRule, RulesetsChallengeRule, RulesetsCompressResponseRule, ...
- f46b555: Defines the state of the rules contained in the rule group. When `on`, the rules in the group are configurable/usable.

## 0.13.1

### Patch Changes

- 3cc92fe: Add x-auditable flag to Logpush API schemas
- 6f4798a: Add new endpoint to update LAN device settings policy
- 438e0b9: Updates properties of an existing R2 bucket
- 78060c9: Disable Content Scanning.
- 61a1bd4: Creates a new GRE tunnel. Use `?validate_only=true` as an optional query parameter to only run validation without persisting changes.
- dfac69b: Add x-auditable metadata to multiple types

## 0.13.0

### Minor Changes

- b70b4e3: Refactor WorkersRoute type to use a more descriptive pattern property
- 787a5bd: [BREAKING] Remove deviceDEXTests endpoints

### Patch Changes

- 2893835: Add new field 'data_time' to RadarGetBgpRoutesRealtimeResponse

## 0.12.1

### Patch Changes

- bdaac6f: Add x-auditable field to various types in schemas

## 0.12.0

### Minor Changes

- 3a597c4: Add 'include_context' option to ZeroTrustGatewayNotificationSettings

### Patch Changes

- 780d445: Add x-auditable field to StreamWatermarkProfileDeleteWatermarkProfilesResponse
- 5ec4235: Fix type in RumSchemasMessages code field
- 6abb2fa: Fix typo in spectrum analytics API response comments

## 0.11.2

### Patch Changes

- 03f9eb5: Change WorkersSecretResponse to use WorkersSecret type

## 0.11.1

### Patch Changes

- ab47f1f: Add x-auditable field to various DNS settings types
- 04d82ef: Removed MagicTransitResultInfo from MagicTransitApiResponseCollection
- ece05e3: [BREAKING] Add support for 'internal' type in ZonesType
- 832b72f: [BREAKING] Fix typo in LogpushApiResponseCommon and LogpushApiResponseCommonFailure
- 4d46ca9: [BREAKING] Add new endpoint to send event for workflow instance
- 54f7337: [BREAKING] Add new property `maxdurationseconds` to StreamUploadMetadata
- d28b04d: Add new endpoints to check source and target connectivity

## 0.11.0

### Minor Changes

- c59d758: Add new optional 'pooling' field to WorkersAiPostRunCfBaaiBgeM3Response
- 593c6de: Add ZeroTrustGatewayAccountLogOptions type for gateway account logging

### Patch Changes

- 6ed62b6: Add 'x-auditable' attribute to multiple types

## 0.10.1

### Patch Changes

- 6bef323: [BREAKING] Change type enum values in AaaAuditLogsV2 schema
- 6cd4bfb: Add x-auditable metadata to various schema fields

## 0.10.0

### Minor Changes

- d55f18f: Add new endpoint to get multiple KV pairs from a namespace
- 297a985: Add new endpoint to update partial Queue details

### Patch Changes

- 7fb3398: Add 'LabelDiscovery' to ApiShieldApiDiscoveryOrigin enum
- 2fadebb: Add new 'crawler_protection' attribute to BotManagementBaseConfig
- 5d56a2f: [BREAKING] Add 'x-auditable' attribute to various schemas for auditing purposes
- 1091d4b: Add new endpoint to retrieve Global WARP override state
- fc542f8: [BREAKING] Remove 'accountLevelCustomNameserversGetEligibleZonesForAccountCustomNameservers' API endpoint
- 971aff0: Add beta field to WorkersKvNamespace type
- 0909d1e: [BREAKING] Remove default values for batch_prefix, batch_suffix, field_delimiter, record_delimiter, record_prefix, and record_suffix in LogpushOutputOptions

## 0.9.2

### Patch Changes

- 025e4fd: [BREAKING] Add @x-auditable metadata to various types for auditing purposes
- fbfb377: Add new endpoint to convert to markdown
- d90845e: Add documentation for required parameter `datasetId` in postEventList, postEventCreate, postEventCreateBulk, and deleteEventDelete endpoints

## 0.9.1

### Patch Changes

- b0b6a88: Add new attribute for configuring OAuth Bearer Token authentication scheme for SCIM provisioning to an application
- cd026ab: [BREAKING] Mark 'CallsSecret', 'CallsTurnKey', 'StreamInputRtmpsStreamKey', 'StreamInputSrtStreamPassphrase', 'StreamJwk', 'StreamPem', 'StreamPlaybackRtmpsStreamKey', 'StreamPlaybackSrtStreamPassphrase', 'StreamSignedTokenRequest.pem', 'StreamSignedTokenResponse.token' as sensitive data
- a4ed428: Remove deprecated 'attack' field in RadarGetAttacksLayer7TimeseriesQueryParams
- 225a36a: Add new endpoint to list waiting rooms for an account

## 0.9.0

### Minor Changes

- 173c962: Add new endpoint to post event list
- 755540e: Add new properties for high availability state in MconnSnapshot
- 8daa84e: Add new endpoint to get indicator types list

### Patch Changes

- 57cb3fd: Add new endpoint to delete scans for a cloudforce-one account
- 3bb0299: [BREAKING] Change type of tunnelId in CloudflareTunnelConfigurationGetConfigurationPathParams
- e9274c9: Add new endpoint to get list of configurations
- 4bb88ae: Add x-sensitive property to LogpushOwnershipChallenge type
- c88bde2: Add new query parameter 'direct_user' to initiate video uploads using Tus
- 81f32ae: Change response type for WorkersAiPostRunCfOpenaiWhisperLargeV3Turbo endpoint
- 5a57464: Add 'warp' as a valid value for subnet_types in ZeroTrustNetworksSubnetsListQueryParams
- e438f6b: Replace individual response fields with shared common response schema for GetConfig and PostConfigCreate endpoints

## 0.8.2

### Patch Changes

- 265d09c: Add x-auditable true to ImagesApiResponseCollectionV2 success field
- 1c8df70: Add new endpoint to run AI with llama guard 3-8b
- 01c8316: [BREAKING] Remove doh_in_tunnel field from TeamsDevicesDefaultDeviceSettingsPolicy and TeamsDevicesDeviceSettingsPolicy

## 0.8.1

### Patch Changes

- 779ddfb: Change type of body in webAnalyticsUpdateSiteVariables from RumCreateSiteRequest to RumUpdateSiteRequest

## 0.8.0

### Minor Changes

- 03f4813: [BREAKING] Remove `auditLogsGetOrganizationAuditLogs` endpoint

### Patch Changes

- 49a966e: Add x-auditable true to various record types

## 0.7.0

### Minor Changes

- 3d1f1a7: Add new query parameter 'status' to AccessPolicyTestsGetAUserPageQueryParams type

### Patch Changes

- 87a7226: Add LoadBalancingComponentsSchemasZoneName type for zone name
- 634a913: [BREAKING] Change rules property to optional in RulesetsCreateRuleset, RulesetsUpdateEntrypointRuleset, and RulesetsUpdateRuleset
- 802c4c6: Add new endpoint to get Internet services categories

## 0.6.2

### Patch Changes

- d285a4c: Add register_interface_ip_with_dns field to TeamsDevicesDeviceSettingsPolicy and related request bodies
- 8fe0d4b: Add log_management_strategy field to AigConfig types
- fbf7deb: [OpenAPI] Spec updates for cloudflare-api-js

## 0.6.1

### Patch Changes

- bc404b2: [BREAKING] Change return type of zoneSnippetsSnippetContent to string
- 519029f: [BREAKING] Modify AaaAlertType and AaaFilters to include new alert types and filter options
- d409b04: Add internal_dns field to DnsSettingsDnsSettings
- 2caab64: Restructure AaaMechanisms schema for better organization

## 0.6.0

### Minor Changes

- 5afee48: Add usage statistics for the inference request in multiple endpoints

### Patch Changes

- b386d6c: [BREAKING] Change maximum value for CacheRulesOriginH2MaxStreamsValue from 200 to 1000
- 64a94ef: Add active_delivery_mode filter to EmailSecurityListDomainsQueryParams
- 726d3e1: Add 'suspended' status to WaitingroomStatus type
- 77b0376: [BREAKING] Deprecated serve_directly option in WorkersMultipartScript
- 625d213: Add x-auditable annotation to various schema types

## 0.5.1

### Patch Changes

- 9bf32a4: Add 'last_seen_at' field to AccessServiceTokens schema
- 81691fb: [BREAKING] Rename 'TurnstileMode' to 'TurnstileWidgetMode'
- 5b848a1: Add ZonesCacheRulesAegis to zone settings

## 0.5.0

### Minor Changes

- 9678a0a: Add new endpoint to get Origin H2 Max Streams Setting

## 0.4.1

### Patch Changes

- d299717: Add unidirectional option to MagicAcl, MagicAclUpdateRequest, and MagicAclsAddSingleRequest
- 707dd62: Lists and sorts an account’s targets. Filters are optional and are ANDed together.

## 0.4.0

### Minor Changes

- b2f3d1f: Refactor query_string structure to support both include and exclude options

### Patch Changes

- 71cc81b: [BREAKING] Add new configuration for resolving DNS internally
- 45e8197: [OpenAPI] Spec updates for cloudflare-api-js
- efbdc12: [BREAKING] Add new parameters 'prompts.prompt_id' and 'prompts.version_id' to AigConfigDeleteGatewayLogsQueryParams and AigConfigListGatewayLogsQueryParams

## 0.3.0

### Minor Changes

- 3889330: [BREAKING] Add new endpoints getCommandsEligibleDevices and getCommandsEligibleUsers

### Patch Changes

- 81c233b: [OpenAPI] Spec updates for cloudflare-api-js
- 62e0e1d: Remove order_by and order_by_direction from AigConfigListGatewayQueryParams

## 0.2.1

### Patch Changes

- 86867c1: [OpenAPI] Spec updates for cloudflare-api-js

## 0.2.0

### Minor Changes

- a547faf: Add limitPerGroup property to several query parameters

### Patch Changes

- 9fd8237: Update EmailSecurityCreateDisplayNameResponse result structure

## 0.1.0

### Minor Changes

- 0a971e3: Initial release
