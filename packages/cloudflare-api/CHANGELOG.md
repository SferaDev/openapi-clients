# cloudflare-api-js

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
