# cloudflare-api-js

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
