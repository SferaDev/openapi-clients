import {
  accountsListAccounts,
  accountCreation,
  accountsBatchMoveAccounts,
  customPagesForAnAccountListCustomPages,
  customPagesForAnAccountGetACustomPage,
  customPagesForAnAccountUpdateACustomPage,
  accountDeletion,
  accountsAccountDetails,
  accountsUpdateAccount,
  listAbuseReports,
  listMitigations,
  requestReview,
  getAbuseReport,
  submitAbuseReport,
  mcpPortalsApiListPortals,
  mcpPortalsApiCreatePortals,
  mcpPortalsApiDeletePortals,
  mcpPortalsApiFetchGateways,
  mcpPortalsApiUpdatePortals,
  mcpPortalsApiListServers,
  mcpPortalsApiCreateServers,
  mcpPortalsApiDeleteServers,
  mcpPortalsApiFetchServers,
  mcpPortalsApiUpdateServers,
  mcpPortalsApiSyncServer,
  accessApplicationsListAccessApplications,
  accessApplicationsAddAnApplication,
  accessShortLivedCertificateCAsListShortLivedCertificateCAs,
  accessApplicationsDeleteAnAccessApplication,
  accessApplicationsGetAnAccessApplication,
  accessApplicationsUpdateAnAccessApplication,
  accessShortLivedCertificateCAsDeleteAShortLivedCertificateCa,
  accessShortLivedCertificateCAsGetAShortLivedCertificateCa,
  accessShortLivedCertificateCAsCreateAShortLivedCertificateCa,
  accessPoliciesListAccessAppPolicies,
  accessPoliciesCreateAnAccessPolicy,
  accessPoliciesDeleteAnAccessPolicy,
  accessPoliciesGetAnAccessPolicy,
  accessPoliciesUpdateAnAccessPolicy,
  accessPoliciesConvertReusable,
  accessApplicationsRevokeServiceTokens,
  accessApplicationsPatchUpdateAccessApplicationSettings,
  accessApplicationsPutUpdateAccessApplicationSettings,
  accessApplicationsTestAccessPolicies,
  accessBookmarkApplicationsDeprecatedListBookmarkApplications,
  accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication,
  accessBookmarkApplicationsDeprecatedGetABookmarkApplication,
  accessBookmarkApplicationsDeprecatedCreateABookmarkApplication,
  accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication,
  accessMtlsAuthenticationListMtlsCertificates,
  accessMtlsAuthenticationAddAnMtlsCertificate,
  accessMtlsAuthenticationListMtlsCertificatesHostnameSettings,
  accessMtlsAuthenticationUpdateAnMtlsCertificateSettings,
  accessMtlsAuthenticationDeleteAnMtlsCertificate,
  accessMtlsAuthenticationGetAnMtlsCertificate,
  accessMtlsAuthenticationUpdateAnMtlsCertificate,
  accessCustomPagesListCustomPages,
  accessCustomPagesCreateACustomPage,
  accessCustomPagesDeleteACustomPage,
  accessCustomPagesGetACustomPage,
  accessCustomPagesUpdateACustomPage,
  accessGatewayCaListSSHCa,
  accessGatewayCaAddAnSSHCa,
  accessGatewayCaDeleteAnSSHCa,
  accessGroupsListAccessGroups,
  accessGroupsCreateAnAccessGroup,
  accessGroupsDeleteAnAccessGroup,
  accessGroupsGetAnAccessGroup,
  accessGroupsUpdateAnAccessGroup,
  accessIdentityProvidersListAccessIdentityProviders,
  accessIdentityProvidersAddAnAccessIdentityProvider,
  accessIdentityProvidersDeleteAnAccessIdentityProvider,
  accessIdentityProvidersGetAnAccessIdentityProvider,
  accessIdentityProvidersUpdateAnAccessIdentityProvider,
  accessIdentityProvidersListScimGroupResources,
  accessIdentityProvidersListScimUserResources,
  accessKeyConfigurationGetTheAccessKeyConfiguration,
  accessKeyConfigurationUpdateTheAccessKeyConfiguration,
  accessKeyConfigurationRotateAccessKeys,
  accessAuthenticationLogsGetAccessAuthenticationLogs,
  accessScimUpdateLogsListAccessScimUpdateLogs,
  zeroTrustOrganizationGetYourZeroTrustOrganization,
  zeroTrustOrganizationCreateYourZeroTrustOrganization,
  zeroTrustOrganizationUpdateYourZeroTrustOrganization,
  zeroTrustOrganizationGetYourZeroTrustOrganizationDohSettings,
  zeroTrustOrganizationUpdateYourZeroTrustOrganizationDohSettings,
  zeroTrustOrganizationRevokeAllAccessTokensForAUser,
  accessPoliciesListAccessReusablePolicies,
  accessPoliciesCreateAnAccessReusablePolicy,
  accessPoliciesDeleteAnAccessReusablePolicy,
  accessPoliciesGetAnAccessReusablePolicy,
  accessPoliciesUpdateAnAccessReusablePolicy,
  accessPolicyTests,
  accessPolicyTestsGetAnUpdate,
  accessPolicyTestsGetAUserPage,
  zeroTrustSeatsUpdateAUserSeat,
  accessServiceTokensListServiceTokens,
  accessServiceTokensCreateAServiceToken,
  accessServiceTokensDeleteAServiceToken,
  accessServiceTokensGetAServiceToken,
  accessServiceTokensUpdateAServiceToken,
  accessServiceTokensRefreshAServiceToken,
  accessServiceTokensRotateAServiceToken,
  accessTagsListTags,
  accessTagsCreateTag,
  accessTagsDeleteATag,
  accessTagsGetATag,
  accessTagsUpdateATag,
  zeroTrustUsersGetUsers,
  zeroTrustUsersGetActiveSessions,
  zeroTrustUsersGetActiveSession,
  zeroTrustUsersGetFailedLogins,
  zeroTrustUsersGetLastSeenIdentity,
  ipAddressManagementAddressMapsListAddressMaps,
  ipAddressManagementAddressMapsCreateAddressMap,
  ipAddressManagementAddressMapsDeleteAddressMap,
  ipAddressManagementAddressMapsAddressMapDetails,
  ipAddressManagementAddressMapsUpdateAddressMap,
  ipAddressManagementAddressMapsRemoveAnAccountMembershipFromAnAddressMap,
  ipAddressManagementAddressMapsAddAnAccountMembershipToAnAddressMap,
  ipAddressManagementAddressMapsRemoveAnIpFromAnAddressMap,
  ipAddressManagementAddressMapsAddAnIpToAnAddressMap,
  ipAddressManagementAddressMapsRemoveAZoneMembershipFromAnAddressMap,
  ipAddressManagementAddressMapsAddAZoneMembershipToAnAddressMap,
  ipAddressManagementListLeases,
  ipAddressManagementPrefixesUploadLoaDocument,
  ipAddressManagementPrefixesDownloadLoaDocument,
  ipAddressManagementPrefixesListPrefixes,
  ipAddressManagementPrefixesAddPrefix,
  ipAddressManagementPrefixesDeletePrefix,
  ipAddressManagementPrefixesPrefixDetails,
  ipAddressManagementPrefixesUpdatePrefixDescription,
  ipAddressManagementPrefixesListBgpPrefixes,
  ipAddressManagementPrefixesCreateBgpPrefix,
  ipAddressManagementPrefixesDeleteBgpPrefix,
  ipAddressManagementPrefixesFetchBgpPrefix,
  ipAddressManagementPrefixesUpdateBgpPrefix,
  ipAddressManagementDynamicAdvertisementGetAdvertisementStatus,
  ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus,
  ipAddressManagementServiceBindingsListServiceBindings,
  ipAddressManagementServiceBindingsCreateServiceBinding,
  ipAddressManagementServiceBindingsDeleteServiceBinding,
  ipAddressManagementServiceBindingsGetServiceBinding,
  ipAddressManagementPrefixDelegationListPrefixDelegations,
  ipAddressManagementPrefixDelegationCreatePrefixDelegation,
  ipAddressManagementPrefixDelegationDeletePrefixDelegation,
  ipAddressManagementPrefixesValidatePrefix,
  dlsAccountRegionalHostnamesAccountListRegions,
  ipAddressManagementServiceBindingsListServices,
  aigConfigListEvaluators,
  aigConfigListGateway,
  aigConfigCreateGateway,
  aigConfigListDataset,
  aigConfigCreateDataset,
  aigConfigDeleteDataset,
  aigConfigFetchDataset,
  aigConfigUpdateDataset,
  aigConfigListEvaluations,
  aigConfigCreateEvaluations,
  aigConfigDeleteEvaluations,
  aigConfigFetchEvaluations,
  aigConfigDeleteGatewayLogs,
  aigConfigListGatewayLogs,
  aigConfigGetGatewayLogDetail,
  aigConfigPatchGatewayLog,
  aigConfigGetGatewayLogRequest,
  aigConfigGetGatewayLogResponse,
  aigConfigListProviders,
  aigConfigCreateProviders,
  aigConfigDeleteProviders,
  aigConfigUpdateProviders,
  aigConfigListGatewayDynamicRoutes,
  aigConfigPostGatewayDynamicRoute,
  aigConfigDeleteGatewayDynamicRoute,
  aigConfigGetGatewayDynamicRoute,
  aigConfigUpdateGatewayDynamicRoute,
  aigConfigListGatewayDynamicRouteDeployments,
  aigConfigPostGatewayDynamicRouteDeployment,
  aigConfigListGatewayDynamicRouteVersions,
  aigConfigPostGatewayDynamicRouteVersion,
  aigConfigGetGatewayDynamicRouteVersion,
  aigConfigGetGatewayUrl,
  aigConfigDeleteGateway,
  aigConfigFetchGateway,
  aigConfigUpdateGateway,
  aiSearchListInstances,
  aiSearchCreateInstances,
  aiSearchDeleteInstances,
  aiSearchFetchInstances,
  aiSearchUpdateInstances,
  aiSearchInstanceListItems,
  aiSearchInstanceGetItem,
  aiSearchInstanceListJobs,
  aiSearchInstanceCreateJob,
  aiSearchInstanceGetJob,
  aiSearchInstanceListJobLogs,
  aiSearchStats,
  aiSearchListTokens,
  aiSearchCreateTokens,
  aiSearchDeleteTokens,
  aiSearchFetchTokens,
  aiSearchUpdateTokens,
  workersAiSearchAuthor,
  workersAiListFinetunes,
  workersAiCreateFinetune,
  workersAiListPublicFinetunes,
  workersAiUploadFinetuneAsset,
  workersAiGetModelSchema,
  workersAiSearchModel,
  workersAiPostRunCfAi4bharatIndictrans2EnIndic1B,
  workersAiPostRunCfAisingaporeGemmaSeaLionV427bIt,
  workersAiPostRunCfBaaiBgeBaseEnV15,
  workersAiPostRunCfBaaiBgeLargeEnV15,
  workersAiPostRunCfBaaiBgeM3,
  workersAiPostRunCfBaaiBgeRerankerBase,
  workersAiPostRunCfBaaiBgeSmallEnV15,
  workersAiPostRunCfBaaiOmniBgeBaseEnV15,
  workersAiPostRunCfBaaiOmniBgeLargeEnV15,
  workersAiPostRunCfBaaiOmniBgeM3,
  workersAiPostRunCfBaaiOmniBgeSmallEnV15,
  workersAiPostRunCfBaaiRayBgeLargeEnV15,
  workersAiPostRunCfBlackForestLabsFlux1Schnell,
  workersAiPostRunCfBlackForestLabsFlux2Dev,
  workersAiPostRunCfBytedanceStableDiffusionXlLightning,
  workersAiPostWebsocketRunCfDeepgramAura,
  workersAiPostWebsocketRunCfDeepgramAura1,
  workersAiPostRunCfDeepgramAura1,
  workersAiPostWebsocketRunCfDeepgramAura1Internal,
  workersAiPostWebsocketRunCfDeepgramAura2,
  workersAiPostWebsocketRunCfDeepgramAura2En,
  workersAiPostRunCfDeepgramAura2En,
  workersAiPostWebsocketRunCfDeepgramAura2Es,
  workersAiPostRunCfDeepgramAura2Es,
  workersAiPostWebsocketRunCfDeepgramFlux,
  workersAiPostRunCfDeepgramFlux,
  workersAiPostWebsocketRunCfDeepgramNova3,
  workersAiPostRunCfDeepgramNova3,
  workersAiPostWebsocketRunCfDeepgramNova3Internal,
  workersAiPostRunCfDeepseekAiDeepseekMath7bInstruct,
  workersAiPostRunCfDeepseekAiDeepseekR1DistillQwen32b,
  workersAiPostRunCfDefogSqlcoder7b2,
  workersAiPostRunCfFacebookBartLargeCnn,
  workersAiPostRunCfFacebookOmniBartLargeCnn,
  workersAiPostRunCfFacebookOmniDetrResnet50,
  workersAiPostRunCfFblgitUnaCybertron7bV2Bf16,
  workersAiPostRunCfGoogleEmbeddinggemma300m,
  workersAiPostRunCfGoogleGemma2bItLora,
  workersAiPostRunCfGoogleGemma312bIt,
  workersAiPostRunCfGoogleGemma7bItLora,
  workersAiPostRunCfGoogleOmniEmbeddinggemma300m,
  workersAiPostRunCfHuggingfaceDistilbertSst2Int8,
  workersAiPostRunCfHuggingfaceOmniDistilbertSst2Int8,
  workersAiPostRunCfIbmGraniteGranite40HMicro,
  workersAiPostRunCfLeonardoLucidOrigin,
  workersAiPostRunCfLeonardoPhoenix10,
  workersAiPostRunCfLykonDreamshaper8Lcm,
  workersAiPostRunCfMetaLlamaLlama27bChatHfLora,
  workersAiPostRunCfMetaLlama27bChatFp16,
  workersAiPostRunCfMetaLlama27bChatInt8,
  workersAiPostRunCfMetaLlama38bInstruct,
  workersAiPostRunCfMetaLlama38bInstructAwq,
  workersAiPostRunCfMetaLlama3170bInstructFp8Fast,
  workersAiPostRunCfMetaLlama318bInstructAwq,
  workersAiPostRunCfMetaLlama318bInstructFp8,
  workersAiPostRunCfMetaLlama318bInstructFp8Fast,
  workersAiPostRunCfMetaLlama3211bVisionInstruct,
  workersAiPostRunCfMetaLlama321bInstruct,
  workersAiPostRunCfMetaLlama323bInstruct,
  workersAiPostRunCfMetaLlama3370bInstructFp8Fast,
  workersAiPostRunCfMetaLlama4Scout17b16eInstruct,
  workersAiPostRunCfMetaLlamaGuard38b,
  workersAiPostRunCfMetaM2m10012b,
  workersAiPostRunCfMicrosoftPhi2,
  workersAiPostRunCfMicrosoftResnet50,
  workersAiPostRunCfMistralMistral7bInstructV01,
  workersAiPostRunCfMistralMistral7bInstructV02Lora,
  workersAiPostRunCfMistralaiMistralSmall3124bInstruct,
  workersAiPostRunCfMyshellAiMelotts,
  workersAiPostRunCfOpenaiGptOss120b,
  workersAiPostRunCfOpenaiGptOss20b,
  workersAiPostRunCfOpenaiWhisper,
  workersAiPostRunCfOpenaiWhisperLargeV3Turbo,
  workersAiPostRunCfOpenaiWhisperTinyEn,
  workersAiPostRunCfOpenchatOpenchat350106,
  workersAiPostRunCfPfnetPlamoEmbedding1b,
  workersAiPostWebsocketRunCfPipecatAiSmartTurnV2,
  workersAiPostWebsocketRunCfPipecatAiSmartTurnV3,
  workersAiPostRunCfQwenQwen1505bChat,
  workersAiPostRunCfQwenQwen1518bChat,
  workersAiPostRunCfQwenQwen1514bChatAwq,
  workersAiPostRunCfQwenQwen157bChatAwq,
  workersAiPostRunCfQwenQwen25Coder32bInstruct,
  workersAiPostRunCfQwenQwen330bA3bFp8,
  workersAiPostRunCfQwenQwen3Embedding06b,
  workersAiPostRunCfQwenQwq32b,
  workersAiPostRunCfRunwaymlStableDiffusionV15Img2img,
  workersAiPostRunCfRunwaymlStableDiffusionV15Inpainting,
  workersAiPostRunCfStabilityaiStableDiffusionXlBase10,
  workersAiPostWebsocketRunCfSvenTestPipeHttp,
  workersAiPostRunCfTheblokeDiscolmGerman7bV1Awq,
  workersAiPostRunCfTiiuaeFalcon7bInstruct,
  workersAiPostRunCfTinyllamaTinyllama11bChatV10,
  workersAiPostRunHfGoogleGemma7bIt,
  workersAiPostRunHfMistralMistral7bInstructV02,
  workersAiPostRunHfNexusflowStarlingLm7bBeta,
  workersAiPostRunHfNousresearchHermes2ProMistral7b,
  workersAiPostRunHfTheblokeDeepseekCoder67bBaseAwq,
  workersAiPostRunHfTheblokeDeepseekCoder67bInstructAwq,
  workersAiPostRunHfTheblokeLlama213bChatAwq,
  workersAiPostRunHfTheblokeLlamaguard7bAwq,
  workersAiPostRunHfTheblokeMistral7bInstructV01Awq,
  workersAiPostRunHfTheblokeNeuralChat7bV31Awq,
  workersAiPostRunHfTheblokeOpenhermes25Mistral7bAwq,
  workersAiPostRunHfTheblokeZephyr7bBetaAwq,
  workersAiPostRunModel,
  workersAiSearchTask,
  workersAiPostToMarkdown,
  workersAiGetToMarkdownSupported,
  notificationAlertTypesGetAlertTypes,
  notificationMechanismEligibilityGetDeliveryMechanismEligibility,
  notificationDestinationsWithPagerDutyDeletePagerDutyServices,
  notificationDestinationsWithPagerDutyListPagerDutyServices,
  notificationDestinationsWithPagerDutyConnectPagerDuty,
  notificationDestinationsWithPagerDutyConnectPagerDutyToken,
  notificationWebhooksListWebhooks,
  notificationWebhooksCreateAWebhook,
  notificationWebhooksDeleteAWebhook,
  notificationWebhooksGetAWebhook,
  notificationWebhooksUpdateAWebhook,
  notificationHistoryListHistory,
  notificationPoliciesListNotificationPolicies,
  notificationPoliciesCreateANotificationPolicy,
  notificationPoliciesDeleteANotificationPolicy,
  notificationPoliciesGetANotificationPolicy,
  notificationPoliciesUpdateANotificationPolicy,
  notificationSilencesListSilences,
  notificationSilencesCreateSilences,
  notificationSilencesUpdateSilences,
  notificationSilencesDeleteSilences,
  notificationSilencesGetSilence,
  auditLogsGetAccountAuditLogs,
  autoragConfigAiSearch,
  autoragConfigFiles,
  autoragConfigListJobs,
  autoragConfigGetJob,
  autoragConfigListJobLogs,
  autoragConfigSearch,
  autoragConfigSync,
  accountBillingProfileDeprecatedBillingProfileDetails,
  botnetThreatFeedGetDayReport,
  botnetThreatFeedGetFullReport,
  botnetThreatFeedListAsn,
  botnetThreatFeedDeleteAsn,
  getAccountsAccountIdBrandProtectionAlerts,
  patchAccountsAccountIdBrandProtectionAlerts,
  patchAccountsAccountIdBrandProtectionAlertsClear,
  patchAccountsAccountIdBrandProtectionAlertsRefute,
  patchAccountsAccountIdBrandProtectionAlertsVerify,
  deleteAccountsAccountIdBrandProtectionBrands,
  getAccountsAccountIdBrandProtectionBrands,
  postAccountsAccountIdBrandProtectionBrands,
  deleteAccountsAccountIdBrandProtectionBrandsPatterns,
  getAccountsAccountIdBrandProtectionBrandsPatterns,
  postAccountsAccountIdBrandProtectionBrandsPatterns,
  patchAccountsAccountIdBrandProtectionClear,
  getAccountsAccountIdBrandProtectionDomainInfo,
  getAccountsAccountIdBrandProtectionLogoMatches,
  getAccountsAccountIdBrandProtectionLogoMatchesDownload,
  getAccountsAccountIdBrandProtectionLogos,
  postAccountsAccountIdBrandProtectionLogos,
  deleteAccountsAccountIdBrandProtectionLogosLogoId,
  getAccountsAccountIdBrandProtectionLogosLogoId,
  getAccountsAccountIdBrandProtectionMatches,
  getAccountsAccountIdBrandProtectionMatchesDownload,
  deleteAccountsAccountIdBrandProtectionQueries,
  getAccountsAccountIdBrandProtectionQueries,
  patchAccountsAccountIdBrandProtectionQueries,
  postAccountsAccountIdBrandProtectionQueries,
  postAccountsAccountIdBrandProtectionQueriesBulk,
  getAccountsAccountIdBrandProtectionRecentSubmissions,
  patchAccountsAccountIdBrandProtectionRefute,
  postAccountsAccountIdBrandProtectionScanLogo,
  postAccountsAccountIdBrandProtectionScanPage,
  postAccountsAccountIdBrandProtectionSearch,
  getAccountsAccountIdBrandProtectionSubmissionInfo,
  postAccountsAccountIdBrandProtectionSubmit,
  getAccountsAccountIdBrandProtectionTotalQueries,
  getAccountsAccountIdBrandProtectionTrackedDomains,
  getAccountsAccountIdBrandProtectionUrlInfo,
  patchAccountsAccountIdBrandProtectionVerify,
  brapiPostContent,
  brapiPostJson,
  brapiPostLinks,
  brapiPostMarkdown,
  brapiPostPdf,
  brapiPostScrape,
  brapiPostScreenshot,
  brapiPostSnapshot,
  getAccountLimits,
  getBuildsByVersionIds,
  getLatestBuildsByScripts,
  getBuildByUuid,
  cancelBuildByUuid,
  getBuildLogs,
  upsertRepoConnection,
  deleteRepoConnection,
  getWorkerConfigAutofill,
  listBuildTokens,
  createBuildToken,
  deleteBuildToken,
  createTrigger,
  deleteTrigger,
  updateTrigger,
  createManualBuild,
  listEnvironmentVariables,
  upsertEnvironmentVariables,
  deleteEnvironmentVariable,
  purgeBuildCache,
  listBuildsByScript,
  listTriggersByScript,
  callsAppsList,
  callsAppsCreateANewApp,
  callsAppsDeleteApp,
  callsAppsRetrieveAppDetails,
  callsAppsUpdateAppDetails,
  callsTurnKeyList,
  callsTurnKeyCreate,
  callsDeleteTurnKey,
  callsRetrieveTurnKeyDetails,
  callsUpdateTurnKey,
  cloudflareTunnelListCloudflareTunnels,
  cloudflareTunnelCreateACloudflareTunnel,
  cloudflareTunnelDeleteACloudflareTunnel,
  cloudflareTunnelGetACloudflareTunnel,
  cloudflareTunnelUpdateACloudflareTunnel,
  cloudflareTunnelConfigurationGetConfiguration,
  cloudflareTunnelConfigurationPutConfiguration,
  cloudflareTunnelCleanUpCloudflareTunnelConnections,
  cloudflareTunnelListCloudflareTunnelConnections,
  cloudflareTunnelGetCloudflareTunnelConnector,
  cloudflareTunnelGetACloudflareTunnelManagementToken,
  cloudflareTunnelGetACloudflareTunnelToken,
  accountsTurnstileWidgetsList,
  accountsTurnstileWidgetCreate,
  accountsTurnstileWidgetDelete,
  accountsTurnstileWidgetGet,
  accountsTurnstileWidgetUpdate,
  accountsTurnstileWidgetRotateSecret,
  postBinDBPost,
  getBinDBGetBinary,
  getEventListGet,
  getEventAggregate,
  getAttackerList,
  getCategoryList,
  getCategoryListComplete,
  postCategoryCreate,
  deleteCategoryDelete,
  getCategoryRead,
  patchCategoryUpdate,
  postCategoryUpdate,
  getCountryRead,
  postEventCreate,
  postEventCreateBulk,
  postDOSEventCreateBulkWithRelationships,
  getDatasetList,
  postDatasetCreate,
  deleteDatasetDelete,
  getDatasetRead,
  patchDatasetUpdate,
  postDatasetUpdate,
  getEventRead,
  postIndicatorTypeCreate,
  getIndicatorListLegacy,
  postIndicatorCreateBulk,
  postIndicatorCreate,
  getIndicatorTagsList,
  deleteIndicatorDelete,
  getIndicatorRead,
  patchIndicatorUpdate,
  postEventMoveToNewDS,
  getTagIndicatorsList,
  getTargetIndustryListByDataset,
  postDatasetPopulate,
  deleteEventTagDelete,
  postEventTagCreate,
  getIndicatorTypesList,
  getLegacyIndicatorTypesList,
  getIndicatorList,
  getEventRawReadDS,
  deleteEventReferenceDelete,
  postEventReferenceCreate,
  postCreateEventRelationship,
  getTagList,
  getTagCategoryList,
  postTagCategoryCreate,
  deleteTagCategoryDelete,
  patchTagCategoryUpdate,
  postTagCreate,
  deleteTagDelete,
  patchTagUpdate,
  getTargetIndustryList,
  getTargetIndustryListComplete,
  deleteEventDeleteDO,
  deleteEventDelete,
  getEventReadDeprecated,
  patchEventUpdate,
  postEventUpdate,
  getEventRawRead,
  patchEventRawUpdate,
  postEventRawUpdate,
  getEventRelationships,
  cloudforceOneRequestList,
  cloudforceOneRequestConstants,
  cloudforceOneRequestNew,
  cloudforceOnePriorityList,
  cloudforceOnePriorityNew,
  cloudforceOnePriorityQuota,
  cloudforceOnePriorityDelete,
  cloudforceOnePriorityGet,
  cloudforceOnePriorityUpdate,
  cloudforceOneRequestQuota,
  cloudforceOneRequestTypes,
  cloudforceOneRequestDelete,
  cloudforceOneRequestGet,
  cloudforceOneRequestUpdate,
  cloudforceOneRequestAssetList,
  cloudforceOneRequestAssetNew,
  cloudforceOneRequestAssetDelete,
  cloudforceOneRequestAssetGet,
  cloudforceOneRequestAssetUpdate,
  cloudforceOneRequestMessageList,
  cloudforceOneRequestMessageNew,
  cloudforceOneRequestMessageDelete,
  cloudforceOneRequestMessageUpdate,
  getConfigFetch,
  postConfigCreate,
  deleteDeleteScans,
  postConfigUpdate,
  getGetOpenPorts,
  postEventGraphQL,
  listCnis,
  createCni,
  deleteCni,
  getCni,
  updateCni,
  listInterconnects,
  createInterconnect,
  deleteInterconnect,
  getInterconnect,
  getInterconnectLoa,
  getInterconnectStatus,
  getSettings,
  updateSettings,
  listSlots,
  getSlot,
  connectivityServicesList,
  connectivityServicesPost,
  connectivityServicesDelete,
  connectivityServicesGet,
  connectivityServicesPut,
  accountLevelCustomNameserversListAccountCustomNameservers,
  accountLevelCustomNameserversAddAccountCustomNameserver,
  accountLevelCustomNameserversDeleteAccountCustomNameserver,
  cloudflareD1ListDatabases,
  cloudflareD1CreateDatabase,
  cloudflareD1DeleteDatabase,
  cloudflareD1GetDatabase,
  cloudflareD1UpdatePartialDatabase,
  cloudflareD1UpdateDatabase,
  cloudflareD1ExportDatabase,
  cloudflareD1ImportDatabase,
  cloudflareD1QueryDatabase,
  cloudflareD1RawDatabaseQuery,
  devicesListDevices,
  deviceManagedNetworksListDeviceManagedNetworks,
  deviceManagedNetworksCreateDeviceManagedNetwork,
  deviceManagedNetworksDeleteDeviceManagedNetwork,
  deviceManagedNetworksDeviceManagedNetworkDetails,
  deviceManagedNetworksUpdateDeviceManagedNetwork,
  listDevices,
  deleteDevice,
  getDevice,
  revokeDevice,
  devicesListDeviceSettingsPolicies,
  devicesGetDefaultDeviceSettingsPolicy,
  devicesUpdateDefaultDeviceSettingsPolicy,
  devicesCreateDeviceSettingsPolicy,
  devicesGetSplitTunnelExcludeList,
  devicesSetSplitTunnelExcludeList,
  devicesGetLocalDomainFallbackList,
  devicesSetLocalDomainFallbackList,
  devicesGetSplitTunnelIncludeList,
  devicesSetSplitTunnelIncludeList,
  devicesDeleteDeviceSettingsPolicy,
  devicesGetDeviceSettingsPolicyById,
  devicesUpdateDeviceSettingsPolicy,
  devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy,
  devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy,
  devicesGetLocalDomainFallbackListForADeviceSettingsPolicy,
  devicesSetLocalDomainFallbackListForADeviceSettingsPolicy,
  devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy,
  devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy,
  devicePostureRulesListDevicePostureRules,
  devicePostureRulesCreateDevicePostureRule,
  devicePostureIntegrationsListDevicePostureIntegrations,
  devicePostureIntegrationsCreateDevicePostureIntegration,
  devicePostureIntegrationsDeleteDevicePostureIntegration,
  devicePostureIntegrationsDevicePostureIntegrationDetails,
  devicePostureIntegrationsUpdateDevicePostureIntegration,
  devicePostureRulesDeleteDevicePostureRule,
  devicePostureRulesDevicePostureRulesDetails,
  devicePostureRulesUpdateDevicePostureRule,
  deleteRegistrations,
  listRegistrations,
  revokeRegistrations,
  unrevokeRegistrations,
  deleteRegistration,
  getRegistration,
  getRegistrationOverrideCodes,
  devicesResilienceRetrieveGlobalWarpOverride,
  devicesResilienceSetGlobalWarpOverride,
  devicesRevokeDevices,
  zeroTrustAccountsDeleteDeviceSettingsForZeroTrustAccount,
  zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount,
  zeroTrustAccountsPatchDeviceSettingsForTheZeroTrustAccount,
  zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount,
  devicesUnrevokeDevices,
  devicesDeviceDetails,
  devicesListAdminOverrideCodeForDevice,
  dexEndpointsListColos,
  getCommands,
  postCommands,
  getCommandsEligibleDevices,
  getCommandsQuota,
  getCommandsCommandIdDownloadsFilename,
  deviceDexTestDetails,
  deviceDexTestCreateDeviceDexTest,
  deviceDexTestDeleteDeviceDexTest,
  deviceDexTestGetDeviceDexTest,
  deviceDexTestUpdateDeviceDexTest,
  devicesLiveStatus,
  dexFleetStatusDevices,
  dexFleetStatusLive,
  dexFleetStatusOverTime,
  dexEndpointsHttpTestDetails,
  dexEndpointsHttpTestPercentiles,
  dexEndpointsListTestsOverview,
  dexEndpointsTestsUniqueDevices,
  dexEndpointsTracerouteTestResultNetworkPath,
  dexEndpointsTracerouteTestDetails,
  dexEndpointsTracerouteTestNetworkPath,
  dexEndpointsTracerouteTestPercentiles,
  listWarpChangeEvents,
  diagnosticsEndpointHealthcheckList,
  diagnosticsEndpointHealthcheckCreate,
  diagnosticsEndpointHealthcheckDelete,
  diagnosticsEndpointHealthcheckGet,
  diagnosticsEndpointHealthcheckUpdate,
  diagnosticsTraceroute,
  dlpDatasetsReadAll,
  dlpDatasetsCreate,
  dlpDatasetsDelete,
  dlpDatasetsRead,
  dlpDatasetsUpdate,
  dlpDatasetsCreateVersion,
  dlpDatasetsUploadVersion,
  dlpDatasetsDefineColumns,
  dlpDatasetsUploadDatasetColumn,
  dlpDocumentFingerprintsReadAll,
  dlpDocumentFingerprintsCreate,
  dlpDocumentFingerprintsDelete,
  dlpDocumentFingerprintsRead,
  dlpDocumentFingerprintsUpdate,
  dlpDocumentFingerprintsUpload,
  dlpEmailScannerGetAccountMapping,
  dlpEmailScannerCreateAccountMapping,
  dlpEmailScannerListAllRules,
  dlpEmailScannerUpdateRulePriorities,
  dlpEmailScannerCreateRule,
  dlpEmailScannerDeleteRule,
  dlpEmailScannerGetRule,
  dlpEmailScannerUpdateRule,
  dlpEntriesListAllEntries,
  dlpEntriesCreateEntry,
  dlpEntriesUpdateCustomEntry,
  dlpEntriesCreateIntegrationEntry,
  dlpEntriesDeleteIntegrationEntry,
  dlpEntriesUpdateIntegrationEntry,
  dlpEntriesCreatePredefinedEntry,
  dlpEntriesDeletePredefinedEntry,
  dlpEntriesUpdatePredefinedEntry,
  dlpEntriesDeleteEntry,
  dlpEntriesGetDlpEntry,
  dlpEntriesUpdateEntry,
  dlpLimitsGet,
  dlpPatternValidate,
  dlpPayloadLogGet,
  dlpPayloadLogPut,
  dlpProfilesListAllProfiles,
  dlpProfilesListAllCustomProfiles,
  dlpProfilesCreateCustomProfiles,
  dlpProfilesDeleteCustomProfile,
  dlpProfilesGetCustomProfile,
  dlpProfilesUpdateCustomProfile,
  dlpProfilesCreatePredefinedProfile,
  dlpProfilesDeletePredefinedProfile,
  dlpProfilesGetPredefinedProfile,
  dlpProfilesUpdatePredefinedProfile,
  dlpProfilesGetPredefinedProfileConfig,
  dlpProfilesCreatePredefinedProfileConfig,
  dlpProfilesUpdatePredefinedProfileConfig,
  dlpProfilesGetDlpProfile,
  dnsFirewallListDnsFirewallClusters,
  dnsFirewallCreateDnsFirewallCluster,
  dnsFirewallDeleteDnsFirewallCluster,
  dnsFirewallDnsFirewallClusterDetails,
  dnsFirewallUpdateDnsFirewallCluster,
  dnsFirewallAnalyticsTable,
  dnsFirewallAnalyticsByTime,
  dnsFirewallShowDnsFirewallClusterReverseDns,
  dnsFirewallUpdateDnsFirewallClusterReverseDns,
  dnsRecordsForAnAccountGetUsage,
  dnsSettingsForAnAccountListDnsSettings,
  dnsSettingsForAnAccountUpdateDnsSettings,
  dnsViewsForAnAccountListInternalDnsViews,
  dnsViewsForAnAccountCreateInternalDnsViews,
  dnsViewsForAnAccountDeleteInternalDnsView,
  dnsViewsForAnAccountGetInternalDnsView,
  dnsViewsForAnAccountUpdateInternalDnsView,
  emailSecurityInvestigate,
  emailSecurityPostBulkMessageMove,
  emailSecurityPostPreview,
  emailSecurityPostRelease,
  emailSecurityGetMessage,
  emailSecurityGetMessageDetections,
  emailSecurityPostMessageMove,
  emailSecurityGetMessagePreview,
  emailSecurityGetMessageRaw,
  emailSecurityPostReclassify,
  emailSecurityGetMessageTrace,
  emailSecurityGetPhishguardReports,
  emailSecurityListAllowPolicies,
  emailSecurityCreateAllowPolicy,
  emailSecurityBatchAllowPolicies,
  emailSecurityDeleteAllowPolicy,
  emailSecurityGetAllowPolicy,
  emailSecurityUpdateAllowPolicy,
  emailSecurityListBlockedSenders,
  emailSecurityCreateBlockedSender,
  emailSecurityBatchBlockedSenders,
  emailSecurityDeleteBlockedSender,
  emailSecurityGetBlockedSender,
  emailSecurityUpdateBlockedSender,
  emailSecurityDeleteDomains,
  emailSecurityListDomains,
  emailSecurityDeleteDomain,
  emailSecurityGetDomain,
  emailSecurityUpdateDomain,
  emailSecurityListDisplayNames,
  emailSecurityCreateDisplayName,
  emailSecurityDeleteDisplayName,
  emailSecurityGetDisplayName,
  emailSecurityUpdateDisplayName,
  emailSecurityBatchSendingDomainRestrictions,
  emailSecurityListTrustedDomains,
  emailSecurityCreateTrustedDomain,
  emailSecurityBatchTrustedDomains,
  emailSecurityDeleteTrustedDomain,
  emailSecurityGetTrustedDomain,
  emailSecurityUpdateTrustedDomain,
  emailSecuritySubmissions,
  emailRoutingDestinationAddressesListDestinationAddresses,
  emailRoutingDestinationAddressesCreateADestinationAddress,
  emailRoutingDestinationAddressesDeleteDestinationAddress,
  emailRoutingDestinationAddressesGetADestinationAddress,
  r2GetEventNotificationConfigs,
  r2EventNotificationDeleteConfig,
  r2GetEventNotificationConfig,
  r2PutEventNotificationConfig,
  subscriptionsList,
  subscriptionsCreate,
  subscriptionsDelete,
  subscriptionsGet,
  subscriptionsPatch,
  ipAccessRulesForAnAccountListIpAccessRules,
  ipAccessRulesForAnAccountCreateAnIpAccessRule,
  ipAccessRulesForAnAccountDeleteAnIpAccessRule,
  ipAccessRulesForAnAccountGetAnIpAccessRule,
  ipAccessRulesForAnAccountUpdateAnIpAccessRule,
  zeroTrustAccountsGetZeroTrustAccountInformation,
  zeroTrustAccountsCreateZeroTrustAccount,
  zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings,
  zeroTrustApplicationsReviewStatusList,
  zeroTrustApplicationsReviewStatusUpdate,
  zeroTrustGetAuditSshSettings,
  zeroTrustUpdateAuditSshSettings,
  zeroTrustRotateSshAccountSeed,
  zeroTrustGatewayCategoriesListCategories,
  zeroTrustCertificatesListZeroTrustCertificates,
  zeroTrustCertificatesCreateZeroTrustCertificate,
  zeroTrustCertificatesDeleteZeroTrustCertificate,
  zeroTrustCertificatesZeroTrustCertificateDetails,
  zeroTrustCertificatesActivateZeroTrustCertificate,
  zeroTrustCertificatesDeactivateZeroTrustCertificate,
  zeroTrustAccountsGetZeroTrustAccountConfiguration,
  zeroTrustAccountsPatchZeroTrustAccountConfiguration,
  zeroTrustAccountsUpdateZeroTrustAccountConfiguration,
  zeroTrustAccountsGetZeroTrustCertificateConfiguration,
  zeroTrustListsListZeroTrustLists,
  zeroTrustListsCreateZeroTrustList,
  zeroTrustListsDeleteZeroTrustList,
  zeroTrustListsZeroTrustListDetails,
  zeroTrustListsPatchZeroTrustList,
  zeroTrustListsUpdateZeroTrustList,
  zeroTrustListsZeroTrustListItems,
  zeroTrustGatewayLocationsListZeroTrustGatewayLocations,
  zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation,
  zeroTrustGatewayLocationsDeleteZeroTrustGatewayLocation,
  zeroTrustGatewayLocationsZeroTrustGatewayLocationDetails,
  zeroTrustGatewayLocationsUpdateZeroTrustGatewayLocation,
  zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount,
  zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount,
  zeroTrustGatewayPacfilesList,
  zeroTrustGatewayPacfilesCreatePacfile,
  zeroTrustGatewayProxyEndpointsListProxyEndpoints,
  zeroTrustGatewayProxyEndpointsCreateProxyEndpoint,
  zeroTrustGatewayProxyEndpointsDeleteProxyEndpoint,
  zeroTrustGatewayProxyEndpointsProxyEndpointDetails,
  zeroTrustGatewayProxyEndpointsUpdateProxyEndpoint,
  zeroTrustGatewayRulesListZeroTrustGatewayRules,
  zeroTrustGatewayRulesCreateZeroTrustGatewayRule,
  zeroTrustGatewayRulesListZeroTrustGatewayRulesTenant,
  zeroTrustGatewayRulesDeleteZeroTrustGatewayRule,
  zeroTrustGatewayRulesZeroTrustGatewayRuleDetails,
  zeroTrustGatewayRulesUpdateZeroTrustGatewayRule,
  zeroTrustGatewayRulesResetExpirationZeroTrustGatewayRule,
  listHyperdrive,
  createHyperdrive,
  deleteHyperdrive,
  getHyperdrive,
  patchHyperdrive,
  updateHyperdrive,
  accountPermissionGroupList,
  accountPermissionGroupDetails,
  accountResourceGroupList,
  accountResourceGroupCreate,
  accountResourceGroupDelete,
  accountResourceGroupDetails,
  accountResourceGroupUpdate,
  accountUserGroupList,
  accountUserGroupCreate,
  accountUserGroupDelete,
  accountUserGroupDetails,
  accountUserGroupUpdate,
  accountUserGroupMemberList,
  accountUserGroupMemberCreate,
  accountUserGroupMembersUpdate,
  accountUserGroupMemberDelete,
  cloudflareImagesListImages,
  cloudflareImagesUploadAnImageViaUrl,
  cloudflareImagesKeysListSigningKeys,
  cloudflareImagesKeysDeleteSigningKey,
  cloudflareImagesKeysAddSigningKey,
  cloudflareImagesImagesUsageStatistics,
  cloudflareImagesVariantsListVariants,
  cloudflareImagesVariantsCreateAVariant,
  cloudflareImagesVariantsDeleteAVariant,
  cloudflareImagesVariantsVariantDetails,
  cloudflareImagesVariantsUpdateAVariant,
  cloudflareImagesDeleteImage,
  cloudflareImagesImageDetails,
  cloudflareImagesUpdateImage,
  cloudflareImagesBaseImage,
  cloudflareImagesListImagesV2,
  cloudflareImagesCreateAuthenticatedDirectUploadUrlV2,
  infraTargetsList,
  infraTargetsPost,
  infraTargetsDeleteBatch,
  infraTargetsPutBatch,
  infraTargetsDeleteBatchPost,
  infraTargetsDelete,
  infraTargetsGet,
  infraTargetsPut,
  asnIntelligenceGetAsnOverview,
  asnIntelligenceGetAsnSubnets,
  getSecurityCenterIssueTypes,
  getSecurityCenterIssues,
  getSecurityCenterIssueCountsByClass,
  getSecurityCenterIssueCountsBySeverity,
  getSecurityCenterIssueCountsByType,
  archiveSecurityCenterInsightDeprecated,
  passiveDnsByIpGetPassiveDnsByIp,
  domainIntelligenceGetDomainDetails,
  domainHistoryGetDomainHistory,
  domainIntelligenceGetMultipleDomainDetails,
  customIndicatorFeedsGetIndicatorFeeds,
  customIndicatorFeedsCreateIndicatorFeeds,
  customIndicatorFeedsAddPermission,
  customIndicatorFeedsRemovePermission,
  customIndicatorFeedsViewPermissions,
  customIndicatorFeedsGetIndicatorFeedMetadata,
  customIndicatorFeedsUpdateIndicatorFeedMetadata,
  customIndicatorFeedsGetIndicatorFeedData,
  customIndicatorFeedsDownloadIndicatorFeedData,
  customIndicatorFeedsUpdateIndicatorFeedData,
  ipIntelligenceGetIpOverview,
  ipListGetIpLists,
  miscategorizationCreateMiscategorization,
  sinkholeConfigGetSinkholes,
  whoisRecordGetWhoisRecord,
  accountLoadBalancerMonitorGroupsListMonitorGroups,
  accountLoadBalancerMonitorGroupsCreateMonitorGroup,
  accountLoadBalancerMonitorGroupsDeleteMonitorGroup,
  accountLoadBalancerMonitorGroupsMonitorGroupDetails,
  accountLoadBalancerMonitorGroupsPatchMonitorGroup,
  accountLoadBalancerMonitorGroupsUpdateMonitorGroup,
  accountLoadBalancerMonitorGroupsListMonitorGroupReferences,
  accountLoadBalancerMonitorsListMonitors,
  accountLoadBalancerMonitorsCreateMonitor,
  accountLoadBalancerMonitorsDeleteMonitor,
  accountLoadBalancerMonitorsMonitorDetails,
  accountLoadBalancerMonitorsPatchMonitor,
  accountLoadBalancerMonitorsUpdateMonitor,
  accountLoadBalancerMonitorsPreviewMonitor,
  accountLoadBalancerMonitorsListMonitorReferences,
  accountLoadBalancerPoolsListPools,
  accountLoadBalancerPoolsPatchPools,
  accountLoadBalancerPoolsCreatePool,
  accountLoadBalancerPoolsDeletePool,
  accountLoadBalancerPoolsPoolDetails,
  accountLoadBalancerPoolsPatchPool,
  accountLoadBalancerPoolsUpdatePool,
  accountLoadBalancerPoolsPoolHealthDetails,
  accountLoadBalancerPoolsPreviewPool,
  accountLoadBalancerPoolsListPoolReferences,
  accountLoadBalancerMonitorsPreviewResult,
  loadBalancerRegionsListRegions,
  loadBalancerRegionsGetRegion,
  accountLoadBalancerSearchSearchResources,
  getAccountsAccountIdLogpushDatasetsDatasetIdFields,
  getAccountsAccountIdLogpushDatasetsDatasetIdJobs,
  getAccountsAccountIdLogpushJobs,
  postAccountsAccountIdLogpushJobs,
  deleteAccountsAccountIdLogpushJobsJobId,
  getAccountsAccountIdLogpushJobsJobId,
  putAccountsAccountIdLogpushJobsJobId,
  postAccountsAccountIdLogpushOwnership,
  postAccountsAccountIdLogpushOwnershipValidate,
  deleteAccountsAccountIdLogpushValidateDestination,
  deleteAccountsAccountIdLogpushValidateDestinationExists,
  postAccountsAccountIdLogpushValidateOrigin,
  auditLogsV2GetAccountAuditLogs,
  deleteAccountsAccountIdLogsControlCmbConfig,
  getAccountsAccountIdLogsControlCmbConfig,
  postAccountsAccountIdLogsControlCmbConfig,
  deleteDnsProtectionRulesForAccount,
  listDnsProtectionRulesForAccount,
  createDnsProtectionRule,
  deleteDnsProtectionRule,
  getDnsProtectionRule,
  updateDnsProtectionRule,
  deleteAllowlistPrefixesForAccount,
  listAllowlistPrefixesForAccount,
  createAllowlistedPrefix,
  deleteAllowlistPrefix,
  getAllowlistPrefix,
  updateAllowlistPrefix,
  deletePrefixesForAccount,
  listPrefixesForAccount,
  createPrefix,
  bulkCreatePrefixes,
  deletePrefix,
  getPrefix,
  updatePrefix,
  deleteSynProtectionFiltersForAccount,
  listSynProtectionFiltersForAccount,
  createSynProtectionFilter,
  deleteSynProtectionFilter,
  getSynProtectionFilter,
  updateSynProtectionFilter,
  deleteSynProtectionRulesForAccount,
  listSynProtectionRulesForAccount,
  createSynProtectionRule,
  deleteSynProtectionRule,
  getSynProtectionRule,
  updateSynProtectionRule,
  deleteTcpFlowProtectionFiltersForAccount,
  listTcpFlowProtectionFiltersForAccount,
  createTcpFlowProtectionFilter,
  deleteTcpFlowProtectionFilter,
  getTcpFlowProtectionFilter,
  updateTcpFlowProtectionFilter,
  deleteTcpFlowProtectionRulesForAccount,
  listTcpFlowProtectionRulesForAccount,
  createTcpFlowProtectionRule,
  deleteTcpFlowProtectionRule,
  getTcpFlowProtectionRule,
  updateTcpFlowProtectionRule,
  getProtectionStatus,
  updateProtectionStatus,
  magicAccountAppsListApps,
  magicAccountAppsAddApp,
  magicAccountAppsDeleteApp,
  magicAccountAppsPatchApp,
  magicAccountAppsUpdateApp,
  magicInterconnectsListInterconnects,
  magicInterconnectsUpdateMultipleInterconnects,
  magicInterconnectsListInterconnectDetails,
  magicInterconnectsUpdateInterconnect,
  catalogSyncsList,
  catalogSyncsCreate,
  catalogSyncsPrebuiltPoliciesList,
  catalogSyncsDelete,
  catalogSyncsRead,
  catalogSyncsPatch,
  catalogSyncsUpdate,
  catalogSyncsRefresh,
  onrampsList,
  onrampsCreate,
  onrampsMwanAddrSpaceRead,
  onrampsMwanAddrSpacePatch,
  onrampsMwanAddrSpaceUpdate,
  onrampsDelete,
  onrampsRead,
  onrampsPatch,
  onrampsUpdate,
  onrampsApply,
  onrampsExport,
  onrampsPlan,
  providersList,
  providersCreate,
  providersDiscoverAll,
  providersDelete,
  providersRead,
  providersPatch,
  providersUpdate,
  providersDiscover,
  providersInitialSetup,
  resourcesCatalogList,
  resourcesCatalogExport,
  resourcesCatalogPolicyPreview,
  resourcesCatalogRead,
  mconnConnectorList,
  mconnConnectorCreate,
  mconnConnectorDelete,
  mconnConnectorFetch,
  mconnConnectorUpdate,
  mconnConnectorReplace,
  mconnConnectorTelemetryEventsList,
  mconnConnectorTelemetryEventsListLatest,
  mconnConnectorTelemetryEventsGet,
  mconnConnectorTelemetrySnapshotsList,
  mconnConnectorTelemetrySnapshotsListLatest,
  mconnConnectorTelemetrySnapshotsGet,
  magicGreTunnelsListGreTunnels,
  magicGreTunnelsCreateGreTunnels,
  magicGreTunnelsUpdateMultipleGreTunnels,
  magicGreTunnelsDeleteGreTunnel,
  magicGreTunnelsListGreTunnelDetails,
  magicGreTunnelsUpdateGreTunnel,
  magicIpsecTunnelsListIpsecTunnels,
  magicIpsecTunnelsCreateIpsecTunnels,
  magicIpsecTunnelsUpdateMultipleIpsecTunnels,
  magicIpsecTunnelsDeleteIpsecTunnel,
  magicIpsecTunnelsListIpsecTunnelDetails,
  magicIpsecTunnelsUpdateIpsecTunnel,
  magicIpsecTunnelsGeneratePreSharedKeyPskForIpsecTunnels,
  magicStaticRoutesDeleteManyRoutes,
  magicStaticRoutesListRoutes,
  magicStaticRoutesCreateRoutes,
  magicStaticRoutesUpdateManyRoutes,
  magicStaticRoutesDeleteRoute,
  magicStaticRoutesRouteDetails,
  magicStaticRoutesUpdateRoute,
  magicSitesListSites,
  magicSitesCreateSite,
  magicSitesDeleteSite,
  magicSitesSiteDetails,
  magicSitesPatchSite,
  magicSitesUpdateSite,
  magicSiteAclsListAcls,
  magicSiteAclsCreateAcl,
  magicSiteAclsDeleteAcl,
  magicSiteAclsAclDetails,
  magicSiteAclsPatchAcl,
  magicSiteAclsUpdateAcl,
  magicSiteAppConfigsListAppConfigs,
  magicSiteAppConfigsAddAppConfig,
  magicSiteAppConfigsDeleteAppConfig,
  magicSiteAppConfigsPatchAppConfig,
  magicSiteAppConfigsUpdateAppConfig,
  magicSiteLansListLans,
  magicSiteLansCreateLan,
  magicSiteLansDeleteLan,
  magicSiteLansLanDetails,
  magicSiteLansPatchLan,
  magicSiteLansUpdateLan,
  magicSiteNetflowConfigDeleteNetflowConfig,
  magicSiteNetflowConfigDetails,
  magicSiteNetflowConfigPatchNetflowConfig,
  magicSiteNetflowConfigCreateNetflowConfig,
  magicSiteNetflowConfigUpdateNetflowConfig,
  magicSiteWansListWans,
  magicSiteWansCreateWan,
  magicSiteWansDeleteWan,
  magicSiteWansWanDetails,
  magicSiteWansPatchWan,
  magicSiteWansUpdateWan,
  accountMembersListMembers,
  accountMembersAddMember,
  accountMembersRemoveMember,
  accountMembersMemberDetails,
  accountMembersUpdateMember,
  magicNetworkMonitoringConfigurationDeleteAccountConfiguration,
  magicNetworkMonitoringConfigurationListAccountConfiguration,
  magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields,
  magicNetworkMonitoringConfigurationCreateAccountConfiguration,
  magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration,
  magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration,
  magicNetworkMonitoringRulesListRules,
  magicNetworkMonitoringRulesCreateRules,
  magicNetworkMonitoringRulesUpdateRules,
  magicNetworkMonitoringRulesDeleteRule,
  magicNetworkMonitoringRulesGetRule,
  magicNetworkMonitoringRulesUpdateRule,
  magicNetworkMonitoringRulesUpdateAdvertisementForRule,
  magicNetworkMonitoringVpcFlowsGenerateAuthenticationToken,
  accountsMoveAccounts,
  mTlsCertificateManagementListMTlsCertificates,
  mTlsCertificateManagementUploadMTlsCertificate,
  mTlsCertificateManagementDeleteMTlsCertificate,
  mTlsCertificateManagementGetMTlsCertificate,
  mTlsCertificateManagementListMTlsCertificateAssociations,
  accountsListAccountOrganizations,
  pagesProjectGetProjects,
  pagesProjectCreateProject,
  pagesProjectDeleteProject,
  pagesProjectGetProject,
  pagesProjectUpdateProject,
  pagesDeploymentGetDeployments,
  pagesDeploymentCreateDeployment,
  pagesDeploymentDeleteDeployment,
  pagesDeploymentGetDeploymentInfo,
  pagesDeploymentGetDeploymentLogs,
  pagesDeploymentRetryDeployment,
  pagesDeploymentRollbackDeployment,
  pagesDomainsGetDomains,
  pagesDomainsAddDomain,
  pagesDomainsDeleteDomain,
  pagesDomainsGetDomain,
  pagesDomainsPatchDomain,
  pagesPurgeBuildCache,
  payPerCrawlCrawlerDeleteStripeConfig,
  payPerCrawlCrawlerGetStripeConfig,
  payPerCrawlCrawlerCreateStripeConfig,
  payPerCrawlPublisherDeleteStripeConfig,
  payPerCrawlPublisherGetStripeConfig,
  payPerCrawlPublisherCreateStripeConfig,
  payPerCrawlSetZonesCanBeEnabled,
  payPerCrawlQueryZonesCanBeEnabled,
  magicPcapCollectionListPacketCaptureRequests,
  magicPcapCollectionCreatePcapRequest,
  magicPcapCollectionListPcaPsBucketOwnership,
  magicPcapCollectionAddBucketsForFullPacketCaptures,
  magicPcapCollectionValidateBucketsForFullPacketCaptures,
  magicPcapCollectionDeleteBucketsForFullPacketCaptures,
  magicPcapCollectionGetPcapRequest,
  magicPcapCollectionDownloadSimplePcap,
  magicPcapCollectionStopFullPcap,
  getV4AccountsByAccountIdPipelinesDeprecated,
  postV4AccountsByAccountIdPipelinesDeprecated,
  getV4AccountsByAccountIdPipelinesV1Pipelines,
  postV4AccountsByAccountIdPipelinesV1Pipelines,
  deleteV4AccountsByAccountIdPipelinesV1PipelinesByPipelineId,
  getV4AccountsByAccountIdPipelinesV1PipelinesByPipelineId,
  getV4AccountsByAccountIdPipelinesV1Sinks,
  postV4AccountsByAccountIdPipelinesV1Sinks,
  deleteV4AccountsByAccountIdPipelinesV1SinksBySinkId,
  getV4AccountsByAccountIdPipelinesV1SinksBySinkId,
  getV4AccountsByAccountIdPipelinesV1Streams,
  postV4AccountsByAccountIdPipelinesV1Streams,
  deleteV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  getV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  patchV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  postV4AccountsByAccountIdPipelinesV1ValidateSql,
  deleteV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  getV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  putV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  accountsGetAccountProfile,
  accountsModifyAccountProfile,
  queuesList,
  queuesCreate,
  queuesDelete,
  queuesGet,
  queuesUpdatePartial,
  queuesUpdate,
  queuesListConsumers,
  queuesCreateConsumer,
  queuesDeleteConsumer,
  queuesGetConsumer,
  queuesUpdateConsumer,
  queuesPushMessage,
  queuesAckMessages,
  queuesPushMessages,
  queuesPullMessages,
  queuesPurgeGet,
  queuesPurge,
  listCatalogs,
  getCatalogDetails,
  storeCredentials,
  disableCatalog,
  enableCatalog,
  getMaintenanceConfig,
  updateMaintenanceConfig,
  listNamespaces,
  listTables,
  getTableMaintenanceConfig,
  updateTableMaintenanceConfig,
  r2ListBuckets,
  r2CreateBucket,
  r2DeleteBucket,
  r2GetBucket,
  r2PatchBucket,
  r2DeleteBucketCorsPolicy,
  r2GetBucketCorsPolicy,
  r2PutBucketCorsPolicy,
  r2ListCustomDomains,
  r2AddCustomDomain,
  r2DeleteCustomDomain,
  r2GetCustomDomainSettings,
  r2EditCustomDomainSettings,
  r2GetBucketPublicPolicy,
  r2PutBucketPublicPolicy,
  r2GetBucketLifecycleConfiguration,
  r2PutBucketLifecycleConfiguration,
  r2GetBucketLockConfiguration,
  r2PutBucketLockConfiguration,
  r2DeleteBucketSippyConfig,
  r2GetBucketSippyConfig,
  r2PutBucketSippyConfig,
  r2GetAccountLevelMetrics,
  r2CreateTempAccessCredentials,
  getApps,
  createApp,
  getOrgAnalytics,
  getLivestreamAnalyticsComplete,
  fetchAllLivestreams,
  postAccountsAccountIdRealtimeKitAppIdLivestreams,
  getV2LivestreamsLivestreamSessionId,
  getV2LivestreamSessionLivestreamId,
  getV2ActiveLivestreamSessionDetails,
  getAllMeetings,
  createMeeting,
  getMeeting,
  updateMeeting,
  replaceMeeting,
  getV2MeetingsMeetingIdActiveLivestream,
  stopLivestreaming,
  getActiveSession,
  kickPartcipants,
  kickAllParticipants,
  muteParticipants,
  muteAllParticipants,
  createPoll,
  livestreamSessionDetails,
  startLivestreaming,
  getMeetingParticipants,
  addParticipant,
  deleteMeetingParticipant,
  getMeetingParticipant,
  editParticipant,
  regenerateToken,
  getPresets,
  postPresets,
  deletePresetsPresetId,
  getPresetsPresetId,
  patchPresetsPresetId,
  getAllRecordings,
  startRecording,
  getActiveRecording,
  startTrackRecordingForAMeeting,
  getOneRecording,
  pauseResumeStopRecording,
  getSessions,
  getParticipantDataFromPeerId,
  getSessionDetails,
  getSessionChat,
  getV2LivestreamsessionSessionMeetingIdActiveLivestream,
  getSessionParticipants,
  getParticipantDetails,
  getSessionSummary,
  postSessionsSessionIdSummary,
  getSessionTranscript,
  getAllWebhooks,
  addWebhook,
  deleteWebhook,
  getWebhook,
  editWebhook,
  replaceWebhook,
  registrarDomainsListDomains,
  registrarDomainsGetDomain,
  registrarDomainsUpdateDomain,
  accountRequestTracerRequestTrace,
  accountRolesListRoles,
  accountRolesRoleDetails,
  listsGetLists,
  listsCreateAList,
  listsGetBulkOperationStatus,
  listsDeleteAList,
  listsGetAList,
  listsUpdateAList,
  listsDeleteListItems,
  listsGetListItems,
  listsCreateListItems,
  listsUpdateAllListItems,
  listsGetAListItem,
  listAccountRulesets,
  createAccountRuleset,
  getAccountEntrypointRuleset,
  updateAccountEntrypointRuleset,
  listAccountEntrypointRulesetVersions,
  getAccountEntrypointRulesetVersion,
  deleteAccountRuleset,
  getAccountRuleset,
  updateAccountRuleset,
  createAccountRulesetRule,
  deleteAccountRulesetRule,
  updateAccountRulesetRule,
  listAccountRulesetVersions,
  deleteAccountRulesetVersion,
  getAccountRulesetVersion,
  listAccountRulesetVersionRulesByTag,
  webAnalyticsCreateSite,
  webAnalyticsListSites,
  webAnalyticsDeleteSite,
  webAnalyticsGetSite,
  webAnalyticsUpdateSite,
  webAnalyticsCreateRule,
  webAnalyticsDeleteRule,
  webAnalyticsUpdateRule,
  webAnalyticsListRules,
  webAnalyticsModifyRules,
  secondaryDnsAclListAcLs,
  secondaryDnsAclCreateAcl,
  secondaryDnsAclDeleteAcl,
  secondaryDnsAclAclDetails,
  secondaryDnsAclUpdateAcl,
  secondaryDnsPeerListPeers,
  secondaryDnsPeerCreatePeer,
  secondaryDnsPeerDeletePeer,
  secondaryDnsPeerPeerDetails,
  secondaryDnsPeerUpdatePeer,
  secondaryDnsTsigListTsiGs,
  secondaryDnsTsigCreateTsig,
  secondaryDnsTsigDeleteTsig,
  secondaryDnsTsigTsigDetails,
  secondaryDnsTsigUpdateTsig,
  secretsStoreQuota,
  secretsStoreList,
  secretsStoreCreate,
  secretsStoreDeleteById,
  secretsStoreDeleteBulk,
  secretsStoreSecretsList,
  secretsStoreSecretCreate,
  secretsStoreSecretDeleteById,
  secretsStoreGetById,
  secretsStorePatchById,
  secretsStoreDuplicateById,
  getSecurityCenterInsights,
  getSecurityCenterInsightCountsByClass,
  getSecurityCenterInsightCountsBySeverity,
  getSecurityCenterInsightCountsByType,
  archiveSecurityCenterInsight,
  sharesList,
  shareCreate,
  shareDelete,
  sharesGetById,
  shareUpdate,
  shareRecipientsList,
  shareRecipientCreate,
  shareRecipientsUpdate,
  shareRecipientDelete,
  shareRecipientsGetById,
  shareResourcesList,
  shareResourceCreate,
  shareResourceDelete,
  shareResourcesGetById,
  shareResourceUpdate,
  slurperListJobs,
  slurperCreateJob,
  slurperAbortAllJobs,
  slurperGetJob,
  slurperAbortJob,
  slurperGetJobLogs,
  slurperPauseJob,
  slurperGetJobProgress,
  slurperResumeJob,
  slurperCheckSourceConnectivity,
  slurperCheckTargetConnectivity,
  getAllSsoConnectors,
  initNewSsoConnector,
  deleteSsoConnector,
  getSsoConnector,
  updateSsoConnectorState,
  beginSsoConnectorVerification,
  workersKvNamespaceListNamespaces,
  workersKvNamespaceCreateANamespace,
  workersKvNamespaceRemoveANamespace,
  workersKvNamespaceGetANamespace,
  workersKvNamespaceRenameANamespace,
  workersKvNamespaceDeleteMultipleKeyValuePairsDeprecated,
  workersKvNamespaceWriteMultipleKeyValuePairs,
  workersKvNamespaceDeleteMultipleKeyValuePairs,
  workersKvNamespaceGetMultipleKeyValuePairs,
  workersKvNamespaceListANamespaceSKeys,
  workersKvNamespaceReadTheMetadataForAKey,
  workersKvNamespaceDeleteKeyValuePair,
  workersKvNamespaceReadKeyValuePair,
  workersKvNamespaceWriteKeyValuePairWithMetadata,
  streamVideosListVideos,
  streamVideosInitiateVideoUploadsUsingTus,
  streamVideoClippingClipVideosGivenAStartAndEndTime,
  streamVideosUploadVideosFromAUrl,
  streamVideosUploadVideosViaDirectUploadUrLs,
  streamSigningKeysListSigningKeys,
  streamSigningKeysCreateSigningKeys,
  streamSigningKeysDeleteSigningKeys,
  streamLiveInputsListLiveInputs,
  streamLiveInputsCreateALiveInput,
  streamLiveInputsDeleteALiveInput,
  streamLiveInputsRetrieveALiveInput,
  streamLiveInputsUpdateALiveInput,
  streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput,
  streamLiveInputsCreateANewOutputConnectedToALiveInput,
  streamLiveInputsDeleteAnOutput,
  streamLiveInputsUpdateAnOutput,
  streamVideosStorageUsage,
  streamWatermarkProfileListWatermarkProfiles,
  streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload,
  streamWatermarkProfileDeleteWatermarkProfiles,
  streamWatermarkProfileWatermarkProfileDetails,
  streamWebhookDeleteWebhooks,
  streamWebhookViewWebhooks,
  streamWebhookCreateWebhooks,
  streamVideosDeleteVideo,
  streamVideosRetrieveVideoDetails,
  streamVideosUpdateVideoDetails,
  listAudioTracks,
  addAudioTrack,
  deleteAudioTracks,
  editAudioTracks,
  streamSubtitlesCaptionsListCaptionsOrSubtitles,
  streamSubtitlesCaptionsDeleteCaptionsOrSubtitles,
  streamSubtitlesCaptionsGetCaptionOrSubtitleForLanguage,
  streamSubtitlesCaptionsUploadCaptionsOrSubtitles,
  streamSubtitlesCaptionsGenerateCaptionOrSubtitleForLanguage,
  streamSubtitlesCaptionsGetVttCaptionOrSubtitle,
  streamMP4DownloadsDeleteDownloads,
  streamMP4DownloadsListDownloads,
  streamMP4DownloadsCreateDownloads,
  streamDownloadsDeleteTypeSpecificDownloads,
  streamDownloadsCreateTypeSpecificDownloads,
  streamVideosRetreieveEmbedCodeHtml,
  streamVideosCreateSignedUrlTokensForVideos,
  accountSubscriptionsListSubscriptions,
  accountSubscriptionsCreateSubscription,
  accountSubscriptionsDeleteSubscription,
  accountSubscriptionsUpdateSubscription,
  tunnelRouteListTunnelRoutes,
  tunnelRouteCreateATunnelRoute,
  tunnelRouteGetTunnelRouteByIp,
  tunnelRouteDeleteATunnelRouteWithCidr,
  tunnelRouteUpdateATunnelRouteWithCidr,
  tunnelRouteCreateATunnelRouteWithCidr,
  tunnelRouteDeleteATunnelRoute,
  tunnelRouteGetTunnelRoute,
  tunnelRouteUpdateATunnelRoute,
  tunnelVirtualNetworkListVirtualNetworks,
  tunnelVirtualNetworkCreateAVirtualNetwork,
  tunnelVirtualNetworkDelete,
  tunnelVirtualNetworkGet,
  tunnelVirtualNetworkUpdate,
  accountApiTokensListTokens,
  accountApiTokensCreateToken,
  accountApiTokensListPermissionGroups,
  accountApiTokensVerifyToken,
  accountApiTokensDeleteToken,
  accountApiTokensTokenDetails,
  accountApiTokensUpdateToken,
  accountApiTokensRollToken,
  cloudflareTunnelListAllTunnels,
  urlscannerGetResponseText,
  urlscannerSearchScans,
  urlscannerCreateScan,
  urlscannerGetScan,
  urlscannerGetScanHar,
  urlscannerGetScanScreenshot,
  urlscannerCreateScanBulkV2,
  urlscannerGetScanDomV2,
  urlscannerGetScanHarV2,
  urlscannerGetResponseV2,
  urlscannerGetScanV2,
  urlscannerCreateScanV2,
  urlscannerGetScanScreenshotV2,
  urlscannerSearchScansV2,
  vectorizeDeprecatedListVectorizeIndexes,
  vectorizeDeprecatedCreateVectorizeIndex,
  vectorizeDeprecatedDeleteVectorizeIndex,
  vectorizeDeprecatedGetVectorizeIndex,
  vectorizeDeprecatedUpdateVectorizeIndex,
  vectorizeDeprecatedDeleteVectorsById,
  vectorizeDeprecatedGetVectorsById,
  vectorizeDeprecatedInsertVector,
  vectorizeDeprecatedQueryVector,
  vectorizeDeprecatedUpsertVector,
  vectorizeListVectorizeIndexes,
  vectorizeCreateVectorizeIndex,
  vectorizeDeleteVectorizeIndex,
  vectorizeGetVectorizeIndex,
  vectorizeDeleteVectorsById,
  vectorizeGetVectorsById,
  vectorizeIndexInfo,
  vectorizeInsertVector,
  vectorizeListVectors,
  vectorizeCreateMetadataIndex,
  vectorizeDeleteMetadataIndex,
  vectorizeListMetadataIndexes,
  vectorizeQueryVector,
  vectorizeUpsertVector,
  waitingRoomListWaitingRoomsAccount,
  cloudflareTunnelListWarpConnectorTunnels,
  cloudflareTunnelCreateAWarpConnectorTunnel,
  cloudflareTunnelDeleteAWarpConnectorTunnel,
  cloudflareTunnelGetAWarpConnectorTunnel,
  cloudflareTunnelUpdateAWarpConnectorTunnel,
  cloudflareTunnelGetAWarpConnectorTunnelToken,
  workerAccountSettingsFetchWorkerAccountSettings,
  workerAccountSettingsCreateWorkerAccountSettings,
  workerAssetsUpload,
  namespaceWorkerList,
  namespaceWorkerCreate,
  namespaceWorkerDeleteNamespace,
  namespaceWorkerGetNamespace,
  namespaceWorkerPatchNamespace,
  namespaceWorkerPutNamespace,
  namespaceWorkerDeleteScripts,
  namespaceWorkerListScripts,
  namespaceWorkerScriptDeleteWorker,
  namespaceWorkerScriptWorkerDetails,
  namespaceWorkerScriptUploadWorkerModule,
  namespaceWorkerScriptUpdateCreateAssetsUploadSession,
  namespaceWorkerGetScriptBindings,
  namespaceWorkerGetScriptContent,
  namespaceWorkerPutScriptContent,
  namespaceWorkerListScriptSecrets,
  namespaceWorkerPutScriptSecrets,
  namespaceWorkerDeleteScriptSecret,
  namespaceWorkerGetScriptSecrets,
  namespaceWorkerGetScriptSettings,
  namespaceWorkerPatchScriptSettings,
  namespaceWorkerGetScriptTags,
  namespaceWorkerPutScriptTags,
  namespaceWorkerDeleteScriptTag,
  namespaceWorkerPutScriptTag,
  workerDomainListDomains,
  workerDomainAttachToDomain,
  workerDomainDetachFromDomain,
  workerDomainGetADomain,
  durableObjectsNamespaceListNamespaces,
  durableObjectsNamespaceListObjects,
  destinationList,
  destinationCreate,
  destinationsDelete,
  destinationUpdate,
  telemetryKeysList,
  telemetryQuery,
  telemetryValuesList,
  workerScriptListWorkers,
  workerScriptSearchWorkers,
  workerScriptDeleteWorker,
  workerScriptDownloadWorker,
  workerScriptUploadWorkerModule,
  workerScriptUpdateCreateAssetsUploadSession,
  workerScriptPutContent,
  workerScriptGetContent,
  workerDeploymentsListDeployments,
  workerDeploymentsCreateDeployment,
  workerDeploymentsDeleteDeployment,
  workerDeploymentsGetDeployment,
  workerCronTriggerGetCronTriggers,
  workerCronTriggerUpdateCronTriggers,
  workerScriptSettingsGetSettings,
  workerScriptSettingsPatchSettings,
  workerListScriptSecrets,
  workerPutScriptSecret,
  workerDeleteScriptSecret,
  workerGetScriptSecret,
  workerScriptGetSettings,
  workerScriptPatchSettings,
  workerScriptDeleteSubdomain,
  workerScriptGetSubdomain,
  workerScriptPostSubdomain,
  getAccountsAccountIdWorkersScriptsScriptNameTails,
  workerTailLogsStartTail,
  workerTailLogsDeleteTail,
  workerScriptFetchUsageModel,
  workerScriptUpdateUsageModel,
  workerVersionsListVersions,
  workerVersionsUploadVersion,
  workerVersionsGetVersionDetail,
  workerEnvironmentGetScriptContent,
  workerEnvironmentPutScriptContent,
  workerScriptEnvironmentGetSettings,
  workerScriptEnvironmentPatchSettings,
  workerSubdomainDeleteSubdomain,
  workerSubdomainGetSubdomain,
  workerSubdomainCreateSubdomain,
  listWorkers,
  createWorker,
  deleteWorker,
  getWorker,
  editWorker,
  updateWorker,
  listWorkerVersions,
  createWorkerVersion,
  deleteWorkerVersion,
  getWorkerVersion,
  worListWorkflows,
  worDeleteWorkflow,
  worGetWorkflowDetails,
  worCreateOrModifyWorkflow,
  worListWorkflowInstances,
  worCreateNewWorkflowInstance,
  worBatchCreateWorkflowInstance,
  worBatchTerminateWorkflowInstances,
  worStatusTerminateWorkflowInstances,
  worDescribeWorkflowInstance,
  worSendEventWorkflowInstance,
  worChangeStatusWorkflowInstance,
  worListWorkflowVersions,
  worDescribeWorkflowVersions,
  zeroTrustAccountsGetConnectivitySettings,
  zeroTrustAccountsPatchConnectivitySettings,
  zeroTrustNetworksRouteHostnameList,
  zeroTrustNetworksRouteHostnameCreate,
  zeroTrustNetworksRouteHostnameDelete,
  zeroTrustNetworksRouteHostnameGet,
  zeroTrustNetworksRouteHostnameUpdate,
  zeroTrustNetworksSubnetsList,
  zeroTrustNetworksSubnetUpdateCloudflareSource,
  dlpRiskScoreBehaviorsGet,
  dlpRiskScoreBehaviorsPut,
  dlpZtRiskScoreIntegrationList,
  dlpZtRiskScoreIntegrationCreate,
  dlpZtRiskScoreIntegrationGetByReferenceId,
  dlpZtRiskScoreIntegrationDelete,
  dlpZtRiskScoreIntegrationGet,
  dlpZtRiskScoreIntegrationUpdate,
  dlpRiskScoreSummaryGet,
  dlpRiskScoreSummaryGetForUser,
  dlpRiskScoreResetPost,
  originCaListCertificates,
  originCaCreateCertificate,
  originCaRevokeCertificate,
  originCaGetCertificate,
  postInternalSubmit,
  cloudflareIpsCloudflareIpDetails,
  getLive,
  userSAccountMembershipsListMemberships,
  userSAccountMembershipsDeleteMembership,
  userSAccountMembershipsMembershipDetails,
  userSAccountMembershipsUpdateMembership,
  organizationListOrganizations,
  organizationsCreateUserOrganization,
  organizationsDelete,
  organizationsRetrieve,
  organizationsModify,
  organizationsGetAccounts,
  membersList,
  membersCreate,
  membersDelete,
  membersRetrieve,
  membersBatchCreate,
  organizationsGetProfile,
  organizationsModifyProfile,
  organizationSharesList,
  radarGetAiBotsSummaryByUserAgent,
  radarGetAiBotsSummary,
  radarGetAiBotsTimeseries,
  radarGetAiBotsTimeseriesGroupByUserAgent,
  radarGetAiBotsTimeseriesGroup,
  radarGetAiInferenceSummaryByModel,
  radarGetAiInferenceSummaryByTask,
  radarGetAiInferenceSummary,
  radarGetAiInferenceTimeseriesGroupByModel,
  radarGetAiInferenceTimeseriesGroupByTask,
  radarGetAiInferenceTimeseriesGroup,
  radarGetAnnotations,
  radarGetAnnotationsOutages,
  radarGetAnnotationsOutagesTop,
  radarGetDnsAs112TimeseriesByDnssec,
  radarGetDnsAs112TimeseriesByEdns,
  radarGetDnsAs112TimeseriesByIpVersion,
  radarGetDnsAs112TimeseriesByProtocol,
  radarGetDnsAs112TimeseriesByQueryType,
  radarGetDnsAs112TimeseriesByResponseCodes,
  radarGetDnsAs112Summary,
  radarGetDnsAs112Timeseries,
  radarGetDnsAs112TimeseriesGroupByDnssec,
  radarGetDnsAs112TimeseriesGroupByEdns,
  radarGetDnsAs112TimeseriesGroupByIpVersion,
  radarGetDnsAs112TimeseriesGroupByProtocol,
  radarGetDnsAs112TimeseriesGroupByQueryType,
  radarGetDnsAs112TimeseriesGroupByResponseCodes,
  radarGetDnsAs112TimeseriesGroup,
  radarGetDnsAs112TopLocations,
  radarGetDnsAs112TopLocationsByDnssec,
  radarGetDnsAs112TopLocationsByEdns,
  radarGetDnsAs112TopLocationsByIpVersion,
  radarGetAttacksLayer3SummaryByBitrate,
  radarGetAttacksLayer3SummaryByDuration,
  radarGetAttacksLayer3SummaryByIndustry,
  radarGetAttacksLayer3SummaryByIpVersion,
  radarGetAttacksLayer3SummaryByProtocol,
  radarGetAttacksLayer3SummaryByVector,
  radarGetAttacksLayer3SummaryByVertical,
  radarGetAttacksLayer3Summary,
  radarGetAttacksLayer3TimeseriesByBytes,
  radarGetAttacksLayer3TimeseriesGroupByBitrate,
  radarGetAttacksLayer3TimeseriesGroupByDuration,
  radarGetAttacksLayer3TimeseriesGroupByIndustry,
  radarGetAttacksLayer3TimeseriesGroupByIpVersion,
  radarGetAttacksLayer3TimeseriesGroupByProtocol,
  radarGetAttacksLayer3TimeseriesGroupByVector,
  radarGetAttacksLayer3TimeseriesGroupByVertical,
  radarGetAttacksLayer3TimeseriesGroup,
  radarGetAttacksLayer3TopAttacks,
  radarGetAttacksLayer3TopIndustries,
  radarGetAttacksLayer3TopOriginLocations,
  radarGetAttacksLayer3TopTargetLocations,
  radarGetAttacksLayer3TopVerticals,
  radarGetAttacksLayer7SummaryByHttpMethod,
  radarGetAttacksLayer7SummaryByHttpVersion,
  radarGetAttacksLayer7SummaryByIndustry,
  radarGetAttacksLayer7SummaryByIpVersion,
  radarGetAttacksLayer7SummaryByManagedRules,
  radarGetAttacksLayer7SummaryByMitigationProduct,
  radarGetAttacksLayer7SummaryByVertical,
  radarGetAttacksLayer7Summary,
  radarGetAttacksLayer7Timeseries,
  radarGetAttacksLayer7TimeseriesGroupByHttpMethod,
  radarGetAttacksLayer7TimeseriesGroupByHttpVersion,
  radarGetAttacksLayer7TimeseriesGroupByIndustry,
  radarGetAttacksLayer7TimeseriesGroupByIpVersion,
  radarGetAttacksLayer7TimeseriesGroupByManagedRules,
  radarGetAttacksLayer7TimeseriesGroupByMitigationProduct,
  radarGetAttacksLayer7TimeseriesGroupByVertical,
  radarGetAttacksLayer7TimeseriesGroup,
  radarGetAttacksLayer7TopOriginAs,
  radarGetAttacksLayer7TopAttacks,
  radarGetAttacksLayer7TopIndustries,
  radarGetAttacksLayer7TopOriginLocation,
  radarGetAttacksLayer7TopTargetLocation,
  radarGetAttacksLayer7TopVerticals,
  radarGetBgpHijacksEvents,
  radarGetBgpIpsTimeseries,
  radarGetBgpRouteLeakEvents,
  radarGetBgpRoutesAsns,
  radarGetBgpPfx2asMoas,
  radarGetBgpPfx2as,
  radarGetBgpRoutesRealtime,
  radarGetBgpRoutesStats,
  radarGetBgpTimeseries,
  radarGetBgpTopAses,
  radarGetBgpTopAsnsByPrefixes,
  radarGetBgpTopPrefixes,
  radarGetBots,
  radarGetCrawlersSummary,
  radarGetCrawlersTimeseriesGroup,
  radarGetBotsSummary,
  radarGetBotsTimeseries,
  radarGetBotsTimeseriesGroup,
  radarGetBotDetails,
  radarGetCertificateAuthorities,
  radarGetCertificateAuthorityDetails,
  radarGetCertificateLogs,
  radarGetCertificateLogDetails,
  radarGetCtSummary,
  radarGetCtTimeseries,
  radarGetCtTimeseriesGroup,
  radarGetReportsDatasets,
  radarPostReportsDatasetDownloadUrl,
  radarGetReportsDatasetDownload,
  radarGetDnsSummaryByCacheHitStatus,
  radarGetDnsSummaryByDnssec,
  radarGetDnsSummaryByDnssecAwareness,
  radarGetDnsSummaryByDnssecE2eVersion,
  radarGetDnsSummaryByIpVersion,
  radarGetDnsSummaryByMatchingAnswerStatus,
  radarGetDnsSummaryByProtocol,
  radarGetDnsSummaryByQueryType,
  radarGetDnsSummaryByResponseCode,
  radarGetDnsSummaryByResponseTtl,
  radarGetDnsSummary,
  radarGetDnsTimeseries,
  radarGetDnsTimeseriesGroupByCacheHitStatus,
  radarGetDnsTimeseriesGroupByDnssec,
  radarGetDnsTimeseriesGroupByDnssecAwareness,
  radarGetDnsTimeseriesGroupByDnssecE2eVersion,
  radarGetDnsTimeseriesGroupByIpVersion,
  radarGetDnsTimeseriesGroupByMatchingAnswerStatus,
  radarGetDnsTimeseriesGroupByProtocol,
  radarGetDnsTimeseriesGroupByQueryType,
  radarGetDnsTimeseriesGroupByResponseCode,
  radarGetDnsTimeseriesGroupByResponseTtl,
  radarGetDnsTimeseriesGroup,
  radarGetDnsTopAses,
  radarGetDnsTopLocations,
  radarGetEmailRoutingSummaryByArc,
  radarGetEmailRoutingSummaryByDkim,
  radarGetEmailRoutingSummaryByDmarc,
  radarGetEmailRoutingSummaryByEncrypted,
  radarGetEmailRoutingSummaryByIpVersion,
  radarGetEmailRoutingSummaryBySpf,
  radarGetEmailRoutingSummary,
  radarGetEmailRoutingTimeseriesGroupByArc,
  radarGetEmailRoutingTimeseriesGroupByDkim,
  radarGetEmailRoutingTimeseriesGroupByDmarc,
  radarGetEmailRoutingTimeseriesGroupByEncrypted,
  radarGetEmailRoutingTimeseriesGroupByIpVersion,
  radarGetEmailRoutingTimeseriesGroupBySpf,
  radarGetEmailRoutingTimeseriesGroup,
  radarGetEmailSecuritySummaryByArc,
  radarGetEmailSecuritySummaryByDkim,
  radarGetEmailSecuritySummaryByDmarc,
  radarGetEmailSecuritySummaryByMalicious,
  radarGetEmailSecuritySummaryBySpam,
  radarGetEmailSecuritySummaryBySpf,
  radarGetEmailSecuritySummaryBySpoof,
  radarGetEmailSecuritySummaryByThreatCategory,
  radarGetEmailSecuritySummaryByTlsVersion,
  radarGetEmailSecuritySummary,
  radarGetEmailSecurityTimeseriesGroupByArc,
  radarGetEmailSecurityTimeseriesGroupByDkim,
  radarGetEmailSecurityTimeseriesGroupByDmarc,
  radarGetEmailSecurityTimeseriesGroupByMalicious,
  radarGetEmailSecurityTimeseriesGroupBySpam,
  radarGetEmailSecurityTimeseriesGroupBySpf,
  radarGetEmailSecurityTimeseriesGroupBySpoof,
  radarGetEmailSecurityTimeseriesGroupByThreatCategory,
  radarGetEmailSecurityTimeseriesGroupByTlsVersion,
  radarGetEmailSecurityTimeseriesGroup,
  radarGetEmailSecurityTopTldsByMessages,
  radarGetEmailSecurityTopTldsByMalicious,
  radarGetEmailSecurityTopTldsBySpam,
  radarGetEmailSecurityTopTldsBySpoof,
  radarGetEntitiesAsnList,
  radarGetEntitiesAsnByIp,
  radarGetEntitiesAsnById,
  radarGetAsnsAsSet,
  radarGetAsnsRel,
  radarGetEntitiesIp,
  radarGetEntitiesLocations,
  radarGetEntitiesLocationByAlpha2,
  radarGetGeolocations,
  radarGetGeolocationDetails,
  radarGetHttpSummaryByBotClass,
  radarGetHttpSummaryByDeviceType,
  radarGetHttpSummaryByHttpProtocol,
  radarGetHttpSummaryByHttpVersion,
  radarGetHttpSummaryByIpVersion,
  radarGetHttpSummaryByOperatingSystem,
  radarGetHttpSummaryByPostQuantum,
  radarGetHttpSummaryByTlsVersion,
  radarGetHttpSummary,
  radarGetHttpTimeseries,
  radarGetHttpTimeseriesGroupByBotClass,
  radarGetHttpTimeseriesGroupByBrowsers,
  radarGetHttpTimeseriesGroupByBrowserFamilies,
  radarGetHttpTimeseriesGroupByDeviceType,
  radarGetHttpTimeseriesGroupByHttpProtocol,
  radarGetHttpTimeseriesGroupByHttpVersion,
  radarGetHttpTimeseriesGroupByIpVersion,
  radarGetHttpTimeseriesGroupByOperatingSystem,
  radarGetHttpTimeseriesGroupByPostQuantum,
  radarGetHttpTimeseriesGroupByTlsVersion,
  radarGetHttpTimeseriesGroup,
  radarGetHttpTopAsesByHttpRequests,
  radarGetHttpTopAsesByBotClass,
  radarGetHttpTopAsesByBrowserFamily,
  radarGetHttpTopAsesByDeviceType,
  radarGetHttpTopAsesByHttpProtocol,
  radarGetHttpTopAsesByHttpVersion,
  radarGetHttpTopAsesByIpVersion,
  radarGetHttpTopAsesByOperatingSystem,
  radarGetHttpTopAsesByTlsVersion,
  radarGetHttpTopBrowsers,
  radarGetHttpTopBrowserFamilies,
  radarGetHttpTopLocationsByHttpRequests,
  radarGetHttpTopLocationsByBotClass,
  radarGetHttpTopLocationsByBrowserFamily,
  radarGetHttpTopLocationsByDeviceType,
  radarGetHttpTopLocationsByHttpProtocol,
  radarGetHttpTopLocationsByHttpVersion,
  radarGetHttpTopLocationsByIpVersion,
  radarGetHttpTopLocationsByOperatingSystem,
  radarGetHttpTopLocationsByTlsVersion,
  radarGetLeakedCredentialChecksSummaryByBotClass,
  radarGetLeakedCredentialChecksSummaryByCompromised,
  radarGetLeakedCredentialChecksSummary,
  radarGetLeakedCredentialChecksTimeseriesGroupByBotClass,
  radarGetLeakedCredentialChecksTimeseriesGroupByCompromised,
  radarGetLeakedCredentialChecksTimeseriesGroup,
  radarGetNetflowsSummaryDeprecated,
  radarGetNetflowsSummary,
  radarGetNetflowsTimeseries,
  radarGetNetflowsTimeseriesGroup,
  radarGetNetflowsTopAses,
  radarGetNetflowsTopLocations,
  radarGetOrigins,
  radarGetOriginsSummary,
  radarGetOriginsTimeseries,
  radarGetOriginsTimeseriesGroup,
  radarGetOriginDetails,
  radarGetQualityIndexSummary,
  radarGetQualityIndexTimeseriesGroup,
  radarGetQualitySpeedHistogram,
  radarGetQualitySpeedSummary,
  radarGetQualitySpeedTopAses,
  radarGetQualitySpeedTopLocations,
  radarGetRankingDomainDetails,
  radarGetRankingInternetServicesCategories,
  radarGetRankingInternetServicesTimeseries,
  radarGetRankingTopInternetServices,
  radarGetRankingDomainTimeseries,
  radarGetRankingTopDomains,
  radarGetRobotsTxtTopDomainCategoriesByFilesParsed,
  radarGetRobotsTxtTopUserAgentsByDirective,
  radarGetSearchGlobal,
  radarGetTcpResetsTimeoutsSummary,
  radarGetTcpResetsTimeoutsTimeseriesGroup,
  radarGetTlds,
  radarGetTldDetails,
  radarGetTrafficAnomalies,
  radarGetTrafficAnomaliesTop,
  radarGetVerifiedBotsTopByHttpRequests,
  radarGetVerifiedBotsTopCategoriesByHttpRequests,
  getReady,
  getSignedUrl,
  tenantsRetrieveTenant,
  tenantsValidAccountTypes,
  tenantsListAccounts,
  tenantsListEntitlements,
  tenantsListMemberships,
  userUserDetails,
  userEditUser,
  auditLogsGetUserAuditLogs,
  userBillingHistoryDeprecatedBillingHistoryDetails,
  userBillingProfileDeprecatedBillingProfileDetails,
  ipAccessRulesForAUserListIpAccessRules,
  ipAccessRulesForAUserCreateAnIpAccessRule,
  ipAccessRulesForAUserDeleteAnIpAccessRule,
  ipAccessRulesForAUserUpdateAnIpAccessRule,
  userSInvitesListInvitations,
  userSInvitesInvitationDetails,
  userSInvitesRespondToInvitation,
  loadBalancerMonitorsListMonitors,
  loadBalancerMonitorsCreateMonitor,
  loadBalancerMonitorsDeleteMonitor,
  loadBalancerMonitorsMonitorDetails,
  loadBalancerMonitorsPatchMonitor,
  loadBalancerMonitorsUpdateMonitor,
  loadBalancerMonitorsPreviewMonitor,
  loadBalancerMonitorsListMonitorReferences,
  loadBalancerPoolsListPools,
  loadBalancerPoolsPatchPools,
  loadBalancerPoolsCreatePool,
  loadBalancerPoolsDeletePool,
  loadBalancerPoolsPoolDetails,
  loadBalancerPoolsPatchPool,
  loadBalancerPoolsUpdatePool,
  loadBalancerPoolsPoolHealthDetails,
  loadBalancerPoolsPreviewPool,
  loadBalancerPoolsListPoolReferences,
  loadBalancerMonitorsPreviewResult,
  loadBalancerHealthcheckEventsListHealthcheckEvents,
  userSOrganizationsListOrganizations,
  userSOrganizationsLeaveOrganization,
  userSOrganizationsOrganizationDetails,
  userSubscriptionGetUserSubscriptions,
  userSubscriptionDeleteUserSubscription,
  userSubscriptionUpdateUserSubscription,
  userApiTokensListTokens,
  userApiTokensCreateToken,
  permissionGroupsListPermissionGroups,
  userApiTokensVerifyToken,
  userApiTokensDeleteToken,
  userApiTokensTokenDetails,
  userApiTokensUpdateToken,
  userApiTokensRollToken,
  userListUserTenants,
  zonesGet,
  zonesPost,
  zoneAnalyticsDeprecatedGetAnalyticsByCoLocations,
  zoneAnalyticsDeprecatedGetDashboard,
  customPagesForAZoneListCustomPages,
  customPagesForAZoneGetACustomPage,
  customPagesForAZoneUpdateACustomPage,
  zones0Delete,
  zones0Get,
  zones0Patch,
  zoneLevelAccessApplicationsListAccessApplications,
  zoneLevelAccessApplicationsAddABookmarkApplication,
  zoneLevelAccessShortLivedCertificateCAsListShortLivedCertificateCAs,
  zoneLevelAccessApplicationsDeleteAnAccessApplication,
  zoneLevelAccessApplicationsGetAnAccessApplication,
  zoneLevelAccessApplicationsUpdateABookmarkApplication,
  zoneLevelAccessShortLivedCertificateCAsDeleteAShortLivedCertificateCa,
  zoneLevelAccessShortLivedCertificateCAsGetAShortLivedCertificateCa,
  zoneLevelAccessShortLivedCertificateCAsCreateAShortLivedCertificateCa,
  zoneLevelAccessPoliciesListAccessPolicies,
  zoneLevelAccessPoliciesCreateAnAccessPolicy,
  zoneLevelAccessPoliciesDeleteAnAccessPolicy,
  zoneLevelAccessPoliciesGetAnAccessPolicy,
  zoneLevelAccessPoliciesUpdateAnAccessPolicy,
  zoneLevelAccessApplicationsRevokeServiceTokens,
  zoneLevelAccessApplicationsPatchUpdateAccessApplicationSettings,
  zoneLevelAccessApplicationsPutUpdateAccessApplicationSettings,
  zoneLevelAccessApplicationsTestAccessPolicies,
  zoneLevelAccessMtlsAuthenticationListMtlsCertificates,
  zoneLevelAccessMtlsAuthenticationAddAnMtlsCertificate,
  zoneLevelAccessMtlsAuthenticationListMtlsCertificatesHostnameSettings,
  zoneLevelAccessMtlsAuthenticationUpdateAnMtlsCertificateSettings,
  zoneLevelAccessMtlsAuthenticationDeleteAnMtlsCertificate,
  zoneLevelAccessMtlsAuthenticationGetAnMtlsCertificate,
  zoneLevelAccessMtlsAuthenticationUpdateAnMtlsCertificate,
  zoneLevelAccessGroupsListAccessGroups,
  zoneLevelAccessGroupsCreateAnAccessGroup,
  zoneLevelAccessGroupsDeleteAnAccessGroup,
  zoneLevelAccessGroupsGetAnAccessGroup,
  zoneLevelAccessGroupsUpdateAnAccessGroup,
  zoneLevelAccessIdentityProvidersListAccessIdentityProviders,
  zoneLevelAccessIdentityProvidersAddAnAccessIdentityProvider,
  zoneLevelAccessIdentityProvidersDeleteAnAccessIdentityProvider,
  zoneLevelAccessIdentityProvidersGetAnAccessIdentityProvider,
  zoneLevelAccessIdentityProvidersUpdateAnAccessIdentityProvider,
  zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization,
  zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization,
  zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization,
  zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser,
  zoneLevelAccessServiceTokensListServiceTokens,
  zoneLevelAccessServiceTokensCreateAServiceToken,
  zoneLevelAccessServiceTokensDeleteAServiceToken,
  zoneLevelAccessServiceTokensGetAServiceToken,
  zoneLevelAccessServiceTokensUpdateAServiceToken,
  customOriginTrustStoreListDetails,
  customOriginTrustStoreCreate,
  customOriginTrustStoreDelete,
  customOriginTrustStoreDetails,
  totalTlsTotalTlsSettingsDetails,
  totalTlsEnableOrDisableTotalTls,
  putZonesZoneIdActivationCheck,
  dlsAccountRegionalHostnamesAccountListHostnames,
  dlsAccountRegionalHostnamesAccountCreateHostname,
  dlsAccountRegionalHostnamesAccountDeleteHostname,
  dlsAccountRegionalHostnamesAccountFetchHostname,
  dlsAccountRegionalHostnamesAccountPatchHostname,
  argoAnalyticsForZoneArgoAnalyticsForAZone,
  argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs,
  apiShieldSettingsRetrieveInformationAboutSpecificConfigurationProperties,
  apiShieldSettingsSetConfigurationProperties,
  apiShieldApiDiscoveryRetrieveDiscoveredOperationsOnAZoneAsOpenapi,
  apiShieldApiDiscoveryRetrieveDiscoveredOperationsOnAZone,
  apiShieldApiPatchDiscoveredOperations,
  apiShieldApiPatchDiscoveredOperation,
  apiShieldExpressionTemplatesFallthrough,
  apiShieldEndpointManagementDeleteMultipleOperations,
  apiShieldEndpointManagementRetrieveInformationAboutAllOperationsOnAZone,
  apiShieldEndpointManagementAddOperationsToAZone,
  apiShieldEndpointManagementAddOperationToAZone,
  apiShieldSchemaValidationUpdateMultipleOperationLevelSettings,
  apiShieldEndpointManagementDeleteAnOperation,
  apiShieldEndpointManagementRetrieveInformationAboutAnOperation,
  apiShieldSchemaValidationRetrieveOperationLevelSettings,
  apiShieldSchemaValidationUpdateOperationLevelSettings,
  apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenApiSchemas,
  apiShieldSchemaValidationRetrieveZoneLevelSettings,
  apiShieldSchemaValidationPatchZoneLevelSettings,
  apiShieldSchemaValidationUpdateZoneLevelSettings,
  apiShieldSchemaValidationRetrieveInformationAboutAllSchemas,
  apiShieldSchemaValidationPostSchema,
  apiShieldSchemaValidationRetrieveUserSchemaHosts,
  apiShieldSchemaDeleteASchema,
  apiShieldSchemaValidationRetrieveInformationAboutSpecificSchema,
  apiShieldSchemaValidationEnableValidationForASchema,
  apiShieldSchemaValidationExtractOperationsFromSchema,
  argoSmartRoutingGetArgoSmartRoutingSetting,
  argoSmartRoutingPatchArgoSmartRoutingSetting,
  tieredCachingGetTieredCachingSetting,
  tieredCachingPatchTieredCachingSetting,
  zoneRatePlanListAvailablePlans,
  zoneRatePlanAvailablePlanDetails,
  zoneRatePlanListAvailableRatePlans,
  botManagementForAZoneGetConfig,
  botManagementForAZoneUpdateConfig,
  botManagementZoneFeedbackList,
  botManagementZoneFeedbackCreate,
  zoneCacheSettingsGetCacheReserveSetting,
  zoneCacheSettingsChangeCacheReserveSetting,
  zoneCacheSettingsGetCacheReserveClear,
  zoneCacheSettingsStartCacheReserveClear,
  zoneCacheSettingsGetOriginPostQuantumEncryptionSetting,
  zoneCacheSettingsChangeOriginPostQuantumEncryptionSetting,
  zoneCacheSettingsGetRegionalTieredCacheSetting,
  zoneCacheSettingsChangeRegionalTieredCacheSetting,
  smartTieredCacheDeleteSmartTieredCacheSetting,
  smartTieredCacheGetSmartTieredCacheSetting,
  smartTieredCachePatchSmartTieredCacheSetting,
  zoneCacheSettingsDeleteVariantsSetting,
  zoneCacheSettingsGetVariantsSetting,
  zoneCacheSettingsChangeVariantsSetting,
  clientCertificateForAZoneListHostnameAssociations,
  clientCertificateForAZonePutHostnameAssociations,
  clientCertificateForAZoneListClientCertificates,
  clientCertificateForAZoneCreateClientCertificate,
  clientCertificateForAZoneDeleteClientCertificate,
  clientCertificateForAZoneClientCertificateDetails,
  clientCertificateForAZoneEditClientCertificate,
  zoneCloudConnectorRules,
  zoneCloudConenctorRulesPut,
  wafContentScanningDisable,
  wafContentScanningEnable,
  wafContentScanningListCustomScanExpressions,
  wafContentScanningAddCustomScanExpressions,
  wafContentScanningDeleteCustomScanExpressions,
  wafContentScanningGetStatus,
  wafContentScanningUpdateSettings,
  customSslForAZoneListSslConfigurations,
  customSslForAZoneCreateSslConfiguration,
  customSslForAZoneRePrioritizeSslCertificates,
  customSslForAZoneDeleteSslConfiguration,
  customSslForAZoneSslConfigurationDetails,
  customSslForAZoneEditSslConfiguration,
  customHostnameForAZoneListCustomHostnames,
  customHostnameForAZoneCreateCustomHostname,
  customHostnameFallbackOriginForAZoneDeleteFallbackOriginForCustomHostnames,
  customHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnames,
  customHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnames,
  customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates,
  customHostnameForAZoneCustomHostnameDetails,
  customHostnameForAZoneEditCustomHostname,
  customHostnameForAZoneDeleteSingleCertificateAndKeyInACustomHostname,
  customHostnameForAZoneEditCustomCertificateCustomHostname,
  accountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadata,
  accountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadata,
  dcvDelegationUuidGet,
  devicesGetPolicyCertificates,
  devicesUpdatePolicyCertificates,
  dnsAnalyticsTable,
  dnsAnalyticsByTime,
  dnsRecordsForAZoneListDnsRecords,
  dnsRecordsForAZoneCreateDnsRecord,
  dnsRecordsForAZoneBatchDnsRecords,
  dnsRecordsForAZoneExportDnsRecords,
  dnsRecordsForAZoneImportDnsRecords,
  dnsRecordsForAZoneScanDnsRecords,
  dnsRecordsForAZoneReviewDnsScan,
  dnsRecordsForAZoneApplyDnsScanResults,
  dnsRecordsForAZoneTriggerDnsScan,
  dnsRecordsForAZoneGetUsage,
  dnsRecordsForAZoneDeleteDnsRecord,
  dnsRecordsForAZoneDnsRecordDetails,
  dnsRecordsForAZonePatchDnsRecord,
  dnsRecordsForAZoneUpdateDnsRecord,
  dnsSettingsForAZoneListDnsSettings,
  dnsSettingsForAZoneUpdateDnsSettings,
  dnssecDeleteDnssecRecords,
  dnssecDnssecDetails,
  dnssecEditDnssecStatus,
  emailRoutingSettingsGetEmailRoutingSettings,
  emailRoutingSettingsDisableEmailRouting,
  emailRoutingSettingsDisableEmailRoutingDns,
  emailRoutingSettingsEmailRoutingDnsSettings,
  emailRoutingSettingsUnlockEmailRoutingDns,
  emailRoutingSettingsEnableEmailRoutingDns,
  emailRoutingSettingsEnableEmailRouting,
  emailRoutingRoutingRulesListRoutingRules,
  emailRoutingRoutingRulesCreateRoutingRule,
  emailRoutingRoutingRulesGetCatchAllRule,
  emailRoutingRoutingRulesUpdateCatchAllRule,
  emailRoutingRoutingRulesDeleteRoutingRule,
  emailRoutingRoutingRulesGetRoutingRule,
  emailRoutingRoutingRulesUpdateRoutingRule,
  filtersDeleteFilters,
  filtersListFilters,
  filtersCreateFilters,
  filtersUpdateFilters,
  filtersDeleteAFilter,
  filtersGetAFilter,
  filtersUpdateAFilter,
  ipAccessRulesForAZoneListIpAccessRules,
  ipAccessRulesForAZoneCreateAnIpAccessRule,
  ipAccessRulesForAZoneDeleteAnIpAccessRule,
  ipAccessRulesForAZoneUpdateAnIpAccessRule,
  zoneLockdownListZoneLockdownRules,
  zoneLockdownCreateAZoneLockdownRule,
  zoneLockdownDeleteAZoneLockdownRule,
  zoneLockdownGetAZoneLockdownRule,
  zoneLockdownUpdateAZoneLockdownRule,
  firewallRulesDeleteFirewallRules,
  firewallRulesListFirewallRules,
  firewallRulesUpdatePriorityOfFirewallRules,
  firewallRulesCreateFirewallRules,
  firewallRulesUpdateFirewallRules,
  firewallRulesDeleteAFirewallRule,
  firewallRulesGetAFirewallRule,
  firewallRulesUpdatePriorityOfAFirewallRule,
  firewallRulesUpdateAFirewallRule,
  userAgentBlockingRulesListUserAgentBlockingRules,
  userAgentBlockingRulesCreateAUserAgentBlockingRule,
  userAgentBlockingRulesDeleteAUserAgentBlockingRule,
  userAgentBlockingRulesGetAUserAgentBlockingRule,
  userAgentBlockingRulesUpdateAUserAgentBlockingRule,
  wafOverridesListWafOverrides,
  wafOverridesCreateAWafOverride,
  wafOverridesDeleteAWafOverride,
  wafOverridesGetAWafOverride,
  wafOverridesUpdateWafOverride,
  wafPackagesListWafPackages,
  wafPackagesGetAWafPackage,
  wafPackagesUpdateAWafPackage,
  wafRuleGroupsListWafRuleGroups,
  wafRuleGroupsGetAWafRuleGroup,
  wafRuleGroupsUpdateAWafRuleGroup,
  wafRulesListWafRules,
  wafRulesGetAWafRule,
  wafRulesUpdateAWafRule,
  healthChecksListHealthChecks,
  healthChecksCreateHealthCheck,
  healthChecksCreatePreviewHealthCheck,
  healthChecksDeletePreviewHealthCheck,
  healthChecksHealthCheckPreviewDetails,
  healthChecksDeleteHealthCheck,
  healthChecksHealthCheckDetails,
  healthChecksPatchHealthCheck,
  healthChecksUpdateHealthCheck,
  zones0HoldDelete,
  zones0HoldGet,
  zones0HoldPatch,
  zones0HoldPost,
  perHostnameTlsSettingsList,
  perHostnameTlsSettingsDelete,
  perHostnameTlsSettingsGet,
  perHostnameTlsSettingsPut,
  keylessSslForAZoneListKeylessSslConfigurations,
  keylessSslForAZoneCreateKeylessSslConfiguration,
  keylessSslForAZoneDeleteKeylessSslConfiguration,
  keylessSslForAZoneGetKeylessSslConfiguration,
  keylessSslForAZoneEditKeylessSslConfiguration,
  wafProductApiLeakedCredentialsGetStatus,
  wafProductApiLeakedCredentialsSetStatus,
  wafProductApiLeakedCredentialsListDetections,
  wafProductApiLeakedCredentialsCreateDetection,
  wafProductApiLeakedCredentialsDeleteDetection,
  wafProductApiLeakedCredentialsGetDetection,
  wafProductApiLeakedCredentialsUpdateDetection,
  loadBalancersListLoadBalancers,
  loadBalancersCreateLoadBalancer,
  loadBalancersDeleteLoadBalancer,
  loadBalancersLoadBalancerDetails,
  loadBalancersPatchLoadBalancer,
  loadBalancersUpdateLoadBalancer,
  getZonesZoneIdLogpushDatasetsDatasetIdFields,
  getZonesZoneIdLogpushDatasetsDatasetIdJobs,
  getZonesZoneIdLogpushEdgeJobs,
  postZonesZoneIdLogpushEdgeJobs,
  getZonesZoneIdLogpushJobs,
  postZonesZoneIdLogpushJobs,
  deleteZonesZoneIdLogpushJobsJobId,
  getZonesZoneIdLogpushJobsJobId,
  putZonesZoneIdLogpushJobsJobId,
  postZonesZoneIdLogpushOwnership,
  postZonesZoneIdLogpushOwnershipValidate,
  postZonesZoneIdLogpushValidateDestination,
  postZonesZoneIdLogpushValidateDestinationExists,
  postZonesZoneIdLogpushValidateOrigin,
  getZonesZoneIdLogsControlRetentionFlag,
  postZonesZoneIdLogsControlRetentionFlag,
  getZonesZoneIdLogsRayidsRayId,
  getZonesZoneIdLogsReceived,
  getZonesZoneIdLogsReceivedFields,
  deleteManagedTransforms,
  listManagedTransforms,
  updateManagedTransforms,
  zoneLevelAuthenticatedOriginPullsListCertificates,
  zoneLevelAuthenticatedOriginPullsUploadCertificate,
  perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication,
  perHostnameAuthenticatedOriginPullListCertificates,
  perHostnameAuthenticatedOriginPullUploadAHostnameClientCertificate,
  perHostnameAuthenticatedOriginPullDeleteHostnameClientCertificate,
  perHostnameAuthenticatedOriginPullGetTheHostnameClientCertificate,
  perHostnameAuthenticatedOriginPullGetTheHostnameStatusForClientAuthentication,
  zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone,
  zoneLevelAuthenticatedOriginPullsSetEnablementForZone,
  zoneLevelAuthenticatedOriginPullsDeleteCertificate,
  zoneLevelAuthenticatedOriginPullsGetCertificateDetails,
  pageShieldGetSettings,
  pageShieldUpdateSettings,
  pageShieldListConnections,
  pageShieldGetConnection,
  pageShieldListCookies,
  pageShieldGetCookie,
  pageShieldListPolicies,
  pageShieldCreatePolicy,
  pageShieldDeletePolicy,
  pageShieldGetPolicy,
  pageShieldUpdatePolicy,
  pageShieldListScripts,
  pageShieldGetScript,
  pageRulesListPageRules,
  pageRulesCreateAPageRule,
  availablePageRulesSettingsListAvailablePageRulesSettings,
  pageRulesDeleteAPageRule,
  pageRulesGetAPageRule,
  pageRulesEditAPageRule,
  pageRulesUpdateAPageRule,
  payPerCrawlGetConfig,
  payPerCrawlPatchConfig,
  payPerCrawlCreateConfig,
  zonePurge,
  rateLimitsForAZoneListRateLimits,
  rateLimitsForAZoneCreateARateLimit,
  rateLimitsForAZoneDeleteARateLimit,
  rateLimitsForAZoneGetARateLimit,
  rateLimitsForAZoneUpdateARateLimit,
  listZoneRulesets,
  createZoneRuleset,
  getZoneEntrypointRuleset,
  updateZoneEntrypointRuleset,
  listZoneEntrypointRulesetVersions,
  getZoneEntrypointRulesetVersion,
  deleteZoneRuleset,
  getZoneRuleset,
  updateZoneRuleset,
  createZoneRulesetRule,
  deleteZoneRulesetRule,
  updateZoneRulesetRule,
  listZoneRulesetVersions,
  deleteZoneRulesetVersion,
  getZoneRulesetVersion,
  listZoneRulesetVersionRulesByTag,
  schemaValidationListSchemasPaginated,
  schemaValidationCreateSchema,
  schemaValidationListSchemaHosts,
  schemaValidationDeleteSchema,
  schemaValidationGetSchema,
  schemaValidationEditSchema,
  schemaValidationExtractOperationsFromSchema,
  schemaValidationGetSettings,
  schemaValidationEditSettings,
  schemaValidationUpdateSettings,
  schemaValidationListPerOperationSettings,
  schemaValidationBulkEditPerOperationSettings,
  schemaValidationDeletePerOperationSetting,
  schemaValidationGetPerOperationSetting,
  schemaValidationUpdatePerOperationSetting,
  secondaryDnsSecondaryZoneForceAxfr,
  secondaryDnsSecondaryZoneDeleteSecondaryZoneConfiguration,
  secondaryDnsSecondaryZoneSecondaryZoneConfigurationDetails,
  secondaryDnsSecondaryZoneCreateSecondaryZoneConfiguration,
  secondaryDnsSecondaryZoneUpdateSecondaryZoneConfiguration,
  secondaryDnsPrimaryZoneDeletePrimaryZoneConfiguration,
  secondaryDnsPrimaryZonePrimaryZoneConfigurationDetails,
  secondaryDnsPrimaryZoneCreatePrimaryZoneConfiguration,
  secondaryDnsPrimaryZoneUpdatePrimaryZoneConfiguration,
  secondaryDnsPrimaryZoneDisableOutgoingZoneTransfers,
  secondaryDnsPrimaryZoneEnableOutgoingZoneTransfers,
  secondaryDnsPrimaryZoneForceDnsNotify,
  secondaryDnsPrimaryZoneGetOutgoingZoneTransferStatus,
  getZoneSecurityCenterInsights,
  getZoneSecurityCenterInsightCountsByClass,
  getZoneSecurityCenterInsightCountsBySeverity,
  getZoneSecurityCenterInsightCountsByType,
  archiveZoneSecurityCenterInsight,
  deleteSecurityTxt,
  getSecurityTxt,
  updateSecurityTxt,
  zoneSettingsGetAllZoneSettings,
  zoneSettingsEditZoneSettingsInfo,
  zoneCacheSettingsGetAegisSetting,
  zoneCacheSettingsChangeAegisSetting,
  zoneSettingsGetFontsSetting,
  zoneSettingsChangeFontsSetting,
  zoneCacheSettingsGetOriginH2MaxStreamsSetting,
  zoneCacheSettingsChangeOriginH2MaxStreamsSetting,
  zoneCacheSettingsGetOriginMaxHttpVersionSetting,
  zoneCacheSettingsChangeOriginMaxHttpVersionSetting,
  webAnalyticsGetRumStatus,
  webAnalyticsToggleRum,
  zoneSettingsGetSpeedBrainSetting,
  zoneSettingsChangeSpeedBrainSetting,
  sslDetectorAutomaticModeGetEnrollment,
  sslDetectorAutomaticModePatchEnrollment,
  getZonesZoneIdentifierZarazConfig,
  putZonesZoneIdentifierZarazConfig,
  getZonesZoneIdentifierZarazDefault,
  getZonesZoneIdentifierZarazExport,
  getZonesZoneIdentifierZarazHistory,
  putZonesZoneIdentifierZarazHistory,
  getZonesZoneIdentifierZarazConfigHistory,
  postZonesZoneIdentifierZarazPublish,
  getZonesZoneIdentifierZarazWorkflow,
  putZonesZoneIdentifierZarazWorkflow,
  zoneSettingsGetSingleSetting,
  zoneSettingsEditSingleSetting,
  smartShieldGetSettings,
  smartShieldPatchSettings,
  smartShieldSettingsGetCacheReserveClear,
  smartShieldSettingsStartCacheReserveClear,
  smartShieldListHealthChecks,
  smartShieldCreateHealthCheck,
  smartShieldDeleteHealthCheck,
  smartShieldHealthCheckDetails,
  smartShieldPatchHealthCheck,
  smartShieldUpdateHealthCheck,
  listZoneSnippets,
  deleteZoneSnippetRules,
  listZoneSnippetRules,
  updateZoneSnippetRules,
  deleteZoneSnippet,
  getZoneSnippet,
  updateZoneSnippet,
  getZoneSnippetContent,
  spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics,
  spectrumAnalyticsByTimeGetAnalyticsByTime,
  spectrumAnalyticsSummaryGetAnalyticsSummary,
  spectrumApplicationsListSpectrumApplications,
  spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin,
  spectrumApplicationsDeleteSpectrumApplication,
  spectrumApplicationsGetSpectrumApplicationConfiguration,
  spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin,
  speedGetAvailabilities,
  speedListPages,
  speedDeleteTests,
  speedListTestHistory,
  speedCreateTest,
  speedGetTest,
  speedListPageTrend,
  speedDeleteTestSchedule,
  speedGetScheduledTest,
  speedCreateScheduledTest,
  analyzeCertificateAnalyzeCertificate,
  certificatePacksListCertificatePacks,
  certificatePacksOrderAdvancedCertificateManagerCertificatePack,
  certificatePacksGetCertificatePackQuotas,
  certificatePacksDeleteAdvancedCertificateManagerCertificatePack,
  certificatePacksGetCertificatePack,
  certificatePacksRestartValidationForAdvancedCertificateManagerCertificatePack,
  sslTlsModeRecommendationSslTlsRecommendation,
  universalSslSettingsForAZoneUniversalSslSettingsDetails,
  universalSslSettingsForAZoneEditUniversalSslSettings,
  sslVerificationSslVerificationDetails,
  sslVerificationEditSslCertificatePackValidationMethod,
  zoneSubscriptionZoneSubscriptionDetails,
  zoneSubscriptionCreateZoneSubscription,
  zoneSubscriptionUpdateZoneSubscription,
  tokenValidationConfigList,
  tokenValidationConfigCreate,
  tokenValidationConfigDelete,
  tokenValidationConfigGet,
  tokenValidationConfigEdit,
  tokenValidationConfigCredentialsUpdate,
  tokenValidationRulesList,
  tokenValidationRulesCreate,
  tokenValidationRulesBulkEdit,
  tokenValidationRulesBulkCreate,
  tokenValidationRulesPreview,
  tokenValidationRulesDelete,
  tokenValidationRulesGet,
  tokenValidationRulesEdit,
  deleteUrlNormalization,
  getUrlNormalization,
  updateUrlNormalization,
  waitingRoomListWaitingRooms,
  waitingRoomCreateWaitingRoom,
  waitingRoomCreateACustomWaitingRoomPagePreview,
  waitingRoomGetZoneSettings,
  waitingRoomPatchZoneSettings,
  waitingRoomUpdateZoneSettings,
  waitingRoomDeleteWaitingRoom,
  waitingRoomWaitingRoomDetails,
  waitingRoomPatchWaitingRoom,
  waitingRoomUpdateWaitingRoom,
  waitingRoomListEvents,
  waitingRoomCreateEvent,
  waitingRoomDeleteEvent,
  waitingRoomEventDetails,
  waitingRoomPatchEvent,
  waitingRoomUpdateEvent,
  waitingRoomPreviewActiveEventDetails,
  waitingRoomListWaitingRoomRules,
  waitingRoomCreateWaitingRoomRule,
  waitingRoomReplaceWaitingRoomRules,
  waitingRoomDeleteWaitingRoomRule,
  waitingRoomPatchWaitingRoomRule,
  waitingRoomGetWaitingRoomStatus,
  web3HostnameListWeb3Hostnames,
  web3HostnameCreateWeb3Hostname,
  web3HostnameDeleteWeb3Hostname,
  web3HostnameWeb3HostnameDetails,
  web3HostnameEditWeb3Hostname,
  web3HostnameIpfsUniversalPathGatewayContentListDetails,
  web3HostnameUpdateIpfsUniversalPathGatewayContentList,
  web3HostnameListIpfsUniversalPathGatewayContentListEntries,
  web3HostnameCreateIpfsUniversalPathGatewayContentListEntry,
  web3HostnameDeleteIpfsUniversalPathGatewayContentListEntry,
  web3HostnameIpfsUniversalPathGatewayContentListEntryDetails,
  web3HostnameEditIpfsUniversalPathGatewayContentListEntry,
  workerRoutesListRoutes,
  workerRoutesCreateRoute,
  workerRoutesDeleteRoute,
  workerRoutesGetRoute,
  workerRoutesUpdateRoute,
} from "./components";

export const operationsByPath = {
  "GET /accounts": accountsListAccounts,
  "POST /accounts": accountCreation,
  "POST /accounts/move": accountsBatchMoveAccounts,
  "GET /accounts/{account_identifier}/custom_pages":
    customPagesForAnAccountListCustomPages,
  "GET /accounts/{account_identifier}/custom_pages/{identifier}":
    customPagesForAnAccountGetACustomPage,
  "PUT /accounts/{account_identifier}/custom_pages/{identifier}":
    customPagesForAnAccountUpdateACustomPage,
  "DELETE /accounts/{account_id}": accountDeletion,
  "GET /accounts/{account_id}": accountsAccountDetails,
  "PUT /accounts/{account_id}": accountsUpdateAccount,
  "GET /accounts/{account_id}/abuse-reports": listAbuseReports,
  "GET /accounts/{account_id}/abuse-reports/{report_id}/mitigations":
    listMitigations,
  "POST /accounts/{account_id}/abuse-reports/{report_id}/mitigations/appeal":
    requestReview,
  "GET /accounts/{account_id}/abuse-reports/{report_param}": getAbuseReport,
  "POST /accounts/{account_id}/abuse-reports/{report_param}": submitAbuseReport,
  "GET /accounts/{account_id}/access/ai-controls/mcp/portals":
    mcpPortalsApiListPortals,
  "POST /accounts/{account_id}/access/ai-controls/mcp/portals":
    mcpPortalsApiCreatePortals,
  "DELETE /accounts/{account_id}/access/ai-controls/mcp/portals/{id}":
    mcpPortalsApiDeletePortals,
  "GET /accounts/{account_id}/access/ai-controls/mcp/portals/{id}":
    mcpPortalsApiFetchGateways,
  "PUT /accounts/{account_id}/access/ai-controls/mcp/portals/{id}":
    mcpPortalsApiUpdatePortals,
  "GET /accounts/{account_id}/access/ai-controls/mcp/servers":
    mcpPortalsApiListServers,
  "POST /accounts/{account_id}/access/ai-controls/mcp/servers":
    mcpPortalsApiCreateServers,
  "DELETE /accounts/{account_id}/access/ai-controls/mcp/servers/{id}":
    mcpPortalsApiDeleteServers,
  "GET /accounts/{account_id}/access/ai-controls/mcp/servers/{id}":
    mcpPortalsApiFetchServers,
  "PUT /accounts/{account_id}/access/ai-controls/mcp/servers/{id}":
    mcpPortalsApiUpdateServers,
  "POST /accounts/{account_id}/access/ai-controls/mcp/servers/{id}/sync":
    mcpPortalsApiSyncServer,
  "GET /accounts/{account_id}/access/apps":
    accessApplicationsListAccessApplications,
  "POST /accounts/{account_id}/access/apps": accessApplicationsAddAnApplication,
  "GET /accounts/{account_id}/access/apps/ca":
    accessShortLivedCertificateCAsListShortLivedCertificateCAs,
  "DELETE /accounts/{account_id}/access/apps/{app_id}":
    accessApplicationsDeleteAnAccessApplication,
  "GET /accounts/{account_id}/access/apps/{app_id}":
    accessApplicationsGetAnAccessApplication,
  "PUT /accounts/{account_id}/access/apps/{app_id}":
    accessApplicationsUpdateAnAccessApplication,
  "DELETE /accounts/{account_id}/access/apps/{app_id}/ca":
    accessShortLivedCertificateCAsDeleteAShortLivedCertificateCa,
  "GET /accounts/{account_id}/access/apps/{app_id}/ca":
    accessShortLivedCertificateCAsGetAShortLivedCertificateCa,
  "POST /accounts/{account_id}/access/apps/{app_id}/ca":
    accessShortLivedCertificateCAsCreateAShortLivedCertificateCa,
  "GET /accounts/{account_id}/access/apps/{app_id}/policies":
    accessPoliciesListAccessAppPolicies,
  "POST /accounts/{account_id}/access/apps/{app_id}/policies":
    accessPoliciesCreateAnAccessPolicy,
  "DELETE /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}":
    accessPoliciesDeleteAnAccessPolicy,
  "GET /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}":
    accessPoliciesGetAnAccessPolicy,
  "PUT /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}":
    accessPoliciesUpdateAnAccessPolicy,
  "PUT /accounts/{account_id}/access/apps/{app_id}/policies/{policy_id}/make_reusable":
    accessPoliciesConvertReusable,
  "POST /accounts/{account_id}/access/apps/{app_id}/revoke_tokens":
    accessApplicationsRevokeServiceTokens,
  "PATCH /accounts/{account_id}/access/apps/{app_id}/settings":
    accessApplicationsPatchUpdateAccessApplicationSettings,
  "PUT /accounts/{account_id}/access/apps/{app_id}/settings":
    accessApplicationsPutUpdateAccessApplicationSettings,
  "GET /accounts/{account_id}/access/apps/{app_id}/user_policy_checks":
    accessApplicationsTestAccessPolicies,
  "GET /accounts/{account_id}/access/bookmarks":
    accessBookmarkApplicationsDeprecatedListBookmarkApplications,
  "DELETE /accounts/{account_id}/access/bookmarks/{bookmark_id}":
    accessBookmarkApplicationsDeprecatedDeleteABookmarkApplication,
  "GET /accounts/{account_id}/access/bookmarks/{bookmark_id}":
    accessBookmarkApplicationsDeprecatedGetABookmarkApplication,
  "POST /accounts/{account_id}/access/bookmarks/{bookmark_id}":
    accessBookmarkApplicationsDeprecatedCreateABookmarkApplication,
  "PUT /accounts/{account_id}/access/bookmarks/{bookmark_id}":
    accessBookmarkApplicationsDeprecatedUpdateABookmarkApplication,
  "GET /accounts/{account_id}/access/certificates":
    accessMtlsAuthenticationListMtlsCertificates,
  "POST /accounts/{account_id}/access/certificates":
    accessMtlsAuthenticationAddAnMtlsCertificate,
  "GET /accounts/{account_id}/access/certificates/settings":
    accessMtlsAuthenticationListMtlsCertificatesHostnameSettings,
  "PUT /accounts/{account_id}/access/certificates/settings":
    accessMtlsAuthenticationUpdateAnMtlsCertificateSettings,
  "DELETE /accounts/{account_id}/access/certificates/{certificate_id}":
    accessMtlsAuthenticationDeleteAnMtlsCertificate,
  "GET /accounts/{account_id}/access/certificates/{certificate_id}":
    accessMtlsAuthenticationGetAnMtlsCertificate,
  "PUT /accounts/{account_id}/access/certificates/{certificate_id}":
    accessMtlsAuthenticationUpdateAnMtlsCertificate,
  "GET /accounts/{account_id}/access/custom_pages":
    accessCustomPagesListCustomPages,
  "POST /accounts/{account_id}/access/custom_pages":
    accessCustomPagesCreateACustomPage,
  "DELETE /accounts/{account_id}/access/custom_pages/{custom_page_id}":
    accessCustomPagesDeleteACustomPage,
  "GET /accounts/{account_id}/access/custom_pages/{custom_page_id}":
    accessCustomPagesGetACustomPage,
  "PUT /accounts/{account_id}/access/custom_pages/{custom_page_id}":
    accessCustomPagesUpdateACustomPage,
  "GET /accounts/{account_id}/access/gateway_ca": accessGatewayCaListSSHCa,
  "POST /accounts/{account_id}/access/gateway_ca": accessGatewayCaAddAnSSHCa,
  "DELETE /accounts/{account_id}/access/gateway_ca/{certificate_id}":
    accessGatewayCaDeleteAnSSHCa,
  "GET /accounts/{account_id}/access/groups": accessGroupsListAccessGroups,
  "POST /accounts/{account_id}/access/groups": accessGroupsCreateAnAccessGroup,
  "DELETE /accounts/{account_id}/access/groups/{group_id}":
    accessGroupsDeleteAnAccessGroup,
  "GET /accounts/{account_id}/access/groups/{group_id}":
    accessGroupsGetAnAccessGroup,
  "PUT /accounts/{account_id}/access/groups/{group_id}":
    accessGroupsUpdateAnAccessGroup,
  "GET /accounts/{account_id}/access/identity_providers":
    accessIdentityProvidersListAccessIdentityProviders,
  "POST /accounts/{account_id}/access/identity_providers":
    accessIdentityProvidersAddAnAccessIdentityProvider,
  "DELETE /accounts/{account_id}/access/identity_providers/{identity_provider_id}":
    accessIdentityProvidersDeleteAnAccessIdentityProvider,
  "GET /accounts/{account_id}/access/identity_providers/{identity_provider_id}":
    accessIdentityProvidersGetAnAccessIdentityProvider,
  "PUT /accounts/{account_id}/access/identity_providers/{identity_provider_id}":
    accessIdentityProvidersUpdateAnAccessIdentityProvider,
  "GET /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/groups":
    accessIdentityProvidersListScimGroupResources,
  "GET /accounts/{account_id}/access/identity_providers/{identity_provider_id}/scim/users":
    accessIdentityProvidersListScimUserResources,
  "GET /accounts/{account_id}/access/keys":
    accessKeyConfigurationGetTheAccessKeyConfiguration,
  "PUT /accounts/{account_id}/access/keys":
    accessKeyConfigurationUpdateTheAccessKeyConfiguration,
  "POST /accounts/{account_id}/access/keys/rotate":
    accessKeyConfigurationRotateAccessKeys,
  "GET /accounts/{account_id}/access/logs/access_requests":
    accessAuthenticationLogsGetAccessAuthenticationLogs,
  "GET /accounts/{account_id}/access/logs/scim/updates":
    accessScimUpdateLogsListAccessScimUpdateLogs,
  "GET /accounts/{account_id}/access/organizations":
    zeroTrustOrganizationGetYourZeroTrustOrganization,
  "POST /accounts/{account_id}/access/organizations":
    zeroTrustOrganizationCreateYourZeroTrustOrganization,
  "PUT /accounts/{account_id}/access/organizations":
    zeroTrustOrganizationUpdateYourZeroTrustOrganization,
  "GET /accounts/{account_id}/access/organizations/doh":
    zeroTrustOrganizationGetYourZeroTrustOrganizationDohSettings,
  "PUT /accounts/{account_id}/access/organizations/doh":
    zeroTrustOrganizationUpdateYourZeroTrustOrganizationDohSettings,
  "POST /accounts/{account_id}/access/organizations/revoke_user":
    zeroTrustOrganizationRevokeAllAccessTokensForAUser,
  "GET /accounts/{account_id}/access/policies":
    accessPoliciesListAccessReusablePolicies,
  "POST /accounts/{account_id}/access/policies":
    accessPoliciesCreateAnAccessReusablePolicy,
  "DELETE /accounts/{account_id}/access/policies/{policy_id}":
    accessPoliciesDeleteAnAccessReusablePolicy,
  "GET /accounts/{account_id}/access/policies/{policy_id}":
    accessPoliciesGetAnAccessReusablePolicy,
  "PUT /accounts/{account_id}/access/policies/{policy_id}":
    accessPoliciesUpdateAnAccessReusablePolicy,
  "POST /accounts/{account_id}/access/policy-tests": accessPolicyTests,
  "GET /accounts/{account_id}/access/policy-tests/{policy_test_id}":
    accessPolicyTestsGetAnUpdate,
  "GET /accounts/{account_id}/access/policy-tests/{policy_test_id}/users":
    accessPolicyTestsGetAUserPage,
  "PATCH /accounts/{account_id}/access/seats": zeroTrustSeatsUpdateAUserSeat,
  "GET /accounts/{account_id}/access/service_tokens":
    accessServiceTokensListServiceTokens,
  "POST /accounts/{account_id}/access/service_tokens":
    accessServiceTokensCreateAServiceToken,
  "DELETE /accounts/{account_id}/access/service_tokens/{service_token_id}":
    accessServiceTokensDeleteAServiceToken,
  "GET /accounts/{account_id}/access/service_tokens/{service_token_id}":
    accessServiceTokensGetAServiceToken,
  "PUT /accounts/{account_id}/access/service_tokens/{service_token_id}":
    accessServiceTokensUpdateAServiceToken,
  "POST /accounts/{account_id}/access/service_tokens/{service_token_id}/refresh":
    accessServiceTokensRefreshAServiceToken,
  "POST /accounts/{account_id}/access/service_tokens/{service_token_id}/rotate":
    accessServiceTokensRotateAServiceToken,
  "GET /accounts/{account_id}/access/tags": accessTagsListTags,
  "POST /accounts/{account_id}/access/tags": accessTagsCreateTag,
  "DELETE /accounts/{account_id}/access/tags/{tag_name}": accessTagsDeleteATag,
  "GET /accounts/{account_id}/access/tags/{tag_name}": accessTagsGetATag,
  "PUT /accounts/{account_id}/access/tags/{tag_name}": accessTagsUpdateATag,
  "GET /accounts/{account_id}/access/users": zeroTrustUsersGetUsers,
  "GET /accounts/{account_id}/access/users/{user_id}/active_sessions":
    zeroTrustUsersGetActiveSessions,
  "GET /accounts/{account_id}/access/users/{user_id}/active_sessions/{nonce}":
    zeroTrustUsersGetActiveSession,
  "GET /accounts/{account_id}/access/users/{user_id}/failed_logins":
    zeroTrustUsersGetFailedLogins,
  "GET /accounts/{account_id}/access/users/{user_id}/last_seen_identity":
    zeroTrustUsersGetLastSeenIdentity,
  "GET /accounts/{account_id}/addressing/address_maps":
    ipAddressManagementAddressMapsListAddressMaps,
  "POST /accounts/{account_id}/addressing/address_maps":
    ipAddressManagementAddressMapsCreateAddressMap,
  "DELETE /accounts/{account_id}/addressing/address_maps/{address_map_id}":
    ipAddressManagementAddressMapsDeleteAddressMap,
  "GET /accounts/{account_id}/addressing/address_maps/{address_map_id}":
    ipAddressManagementAddressMapsAddressMapDetails,
  "PATCH /accounts/{account_id}/addressing/address_maps/{address_map_id}":
    ipAddressManagementAddressMapsUpdateAddressMap,
  "DELETE /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}":
    ipAddressManagementAddressMapsRemoveAnAccountMembershipFromAnAddressMap,
  "PUT /accounts/{account_id}/addressing/address_maps/{address_map_id}/accounts/{account_id}":
    ipAddressManagementAddressMapsAddAnAccountMembershipToAnAddressMap,
  "DELETE /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}":
    ipAddressManagementAddressMapsRemoveAnIpFromAnAddressMap,
  "PUT /accounts/{account_id}/addressing/address_maps/{address_map_id}/ips/{ip_address}":
    ipAddressManagementAddressMapsAddAnIpToAnAddressMap,
  "DELETE /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}":
    ipAddressManagementAddressMapsRemoveAZoneMembershipFromAnAddressMap,
  "PUT /accounts/{account_id}/addressing/address_maps/{address_map_id}/zones/{zone_id}":
    ipAddressManagementAddressMapsAddAZoneMembershipToAnAddressMap,
  "GET /accounts/{account_id}/addressing/leases": ipAddressManagementListLeases,
  "POST /accounts/{account_id}/addressing/loa_documents":
    ipAddressManagementPrefixesUploadLoaDocument,
  "GET /accounts/{account_id}/addressing/loa_documents/{loa_document_id}/download":
    ipAddressManagementPrefixesDownloadLoaDocument,
  "GET /accounts/{account_id}/addressing/prefixes":
    ipAddressManagementPrefixesListPrefixes,
  "POST /accounts/{account_id}/addressing/prefixes":
    ipAddressManagementPrefixesAddPrefix,
  "DELETE /accounts/{account_id}/addressing/prefixes/{prefix_id}":
    ipAddressManagementPrefixesDeletePrefix,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}":
    ipAddressManagementPrefixesPrefixDetails,
  "PATCH /accounts/{account_id}/addressing/prefixes/{prefix_id}":
    ipAddressManagementPrefixesUpdatePrefixDescription,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes":
    ipAddressManagementPrefixesListBgpPrefixes,
  "POST /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes":
    ipAddressManagementPrefixesCreateBgpPrefix,
  "DELETE /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}":
    ipAddressManagementPrefixesDeleteBgpPrefix,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}":
    ipAddressManagementPrefixesFetchBgpPrefix,
  "PATCH /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/prefixes/{bgp_prefix_id}":
    ipAddressManagementPrefixesUpdateBgpPrefix,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status":
    ipAddressManagementDynamicAdvertisementGetAdvertisementStatus,
  "PATCH /accounts/{account_id}/addressing/prefixes/{prefix_id}/bgp/status":
    ipAddressManagementDynamicAdvertisementUpdatePrefixDynamicAdvertisementStatus,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings":
    ipAddressManagementServiceBindingsListServiceBindings,
  "POST /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings":
    ipAddressManagementServiceBindingsCreateServiceBinding,
  "DELETE /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}":
    ipAddressManagementServiceBindingsDeleteServiceBinding,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/bindings/{binding_id}":
    ipAddressManagementServiceBindingsGetServiceBinding,
  "GET /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations":
    ipAddressManagementPrefixDelegationListPrefixDelegations,
  "POST /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations":
    ipAddressManagementPrefixDelegationCreatePrefixDelegation,
  "DELETE /accounts/{account_id}/addressing/prefixes/{prefix_id}/delegations/{delegation_id}":
    ipAddressManagementPrefixDelegationDeletePrefixDelegation,
  "POST /accounts/{account_id}/addressing/prefixes/{prefix_id}/validate":
    ipAddressManagementPrefixesValidatePrefix,
  "GET /accounts/{account_id}/addressing/regional_hostnames/regions":
    dlsAccountRegionalHostnamesAccountListRegions,
  "GET /accounts/{account_id}/addressing/services":
    ipAddressManagementServiceBindingsListServices,
  "GET /accounts/{account_id}/ai-gateway/evaluation-types":
    aigConfigListEvaluators,
  "GET /accounts/{account_id}/ai-gateway/gateways": aigConfigListGateway,
  "POST /accounts/{account_id}/ai-gateway/gateways": aigConfigCreateGateway,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets":
    aigConfigListDataset,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets":
    aigConfigCreateDataset,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}":
    aigConfigDeleteDataset,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}":
    aigConfigFetchDataset,
  "PUT /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/datasets/{id}":
    aigConfigUpdateDataset,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations":
    aigConfigListEvaluations,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations":
    aigConfigCreateEvaluations,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}":
    aigConfigDeleteEvaluations,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/evaluations/{id}":
    aigConfigFetchEvaluations,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs":
    aigConfigDeleteGatewayLogs,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs":
    aigConfigListGatewayLogs,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}":
    aigConfigGetGatewayLogDetail,
  "PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}":
    aigConfigPatchGatewayLog,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/request":
    aigConfigGetGatewayLogRequest,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/logs/{id}/response":
    aigConfigGetGatewayLogResponse,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs":
    aigConfigListProviders,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs":
    aigConfigCreateProviders,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}":
    aigConfigDeleteProviders,
  "PUT /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/provider_configs/{id}":
    aigConfigUpdateProviders,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes":
    aigConfigListGatewayDynamicRoutes,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes":
    aigConfigPostGatewayDynamicRoute,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":
    aigConfigDeleteGatewayDynamicRoute,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":
    aigConfigGetGatewayDynamicRoute,
  "PATCH /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}":
    aigConfigUpdateGatewayDynamicRoute,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments":
    aigConfigListGatewayDynamicRouteDeployments,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/deployments":
    aigConfigPostGatewayDynamicRouteDeployment,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions":
    aigConfigListGatewayDynamicRouteVersions,
  "POST /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions":
    aigConfigPostGatewayDynamicRouteVersion,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/routes/{id}/versions/{version_id}":
    aigConfigGetGatewayDynamicRouteVersion,
  "GET /accounts/{account_id}/ai-gateway/gateways/{gateway_id}/url/{provider}":
    aigConfigGetGatewayUrl,
  "DELETE /accounts/{account_id}/ai-gateway/gateways/{id}":
    aigConfigDeleteGateway,
  "GET /accounts/{account_id}/ai-gateway/gateways/{id}": aigConfigFetchGateway,
  "PUT /accounts/{account_id}/ai-gateway/gateways/{id}": aigConfigUpdateGateway,
  "GET /accounts/{account_id}/ai-search/instances": aiSearchListInstances,
  "POST /accounts/{account_id}/ai-search/instances": aiSearchCreateInstances,
  "DELETE /accounts/{account_id}/ai-search/instances/{id}":
    aiSearchDeleteInstances,
  "GET /accounts/{account_id}/ai-search/instances/{id}": aiSearchFetchInstances,
  "PUT /accounts/{account_id}/ai-search/instances/{id}":
    aiSearchUpdateInstances,
  "GET /accounts/{account_id}/ai-search/instances/{id}/items":
    aiSearchInstanceListItems,
  "GET /accounts/{account_id}/ai-search/instances/{id}/items/{item_id}":
    aiSearchInstanceGetItem,
  "GET /accounts/{account_id}/ai-search/instances/{id}/jobs":
    aiSearchInstanceListJobs,
  "POST /accounts/{account_id}/ai-search/instances/{id}/jobs":
    aiSearchInstanceCreateJob,
  "GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}":
    aiSearchInstanceGetJob,
  "GET /accounts/{account_id}/ai-search/instances/{id}/jobs/{job_id}/logs":
    aiSearchInstanceListJobLogs,
  "GET /accounts/{account_id}/ai-search/instances/{id}/stats": aiSearchStats,
  "GET /accounts/{account_id}/ai-search/tokens": aiSearchListTokens,
  "POST /accounts/{account_id}/ai-search/tokens": aiSearchCreateTokens,
  "DELETE /accounts/{account_id}/ai-search/tokens/{id}": aiSearchDeleteTokens,
  "GET /accounts/{account_id}/ai-search/tokens/{id}": aiSearchFetchTokens,
  "PUT /accounts/{account_id}/ai-search/tokens/{id}": aiSearchUpdateTokens,
  "GET /accounts/{account_id}/ai/authors/search": workersAiSearchAuthor,
  "GET /accounts/{account_id}/ai/finetunes": workersAiListFinetunes,
  "POST /accounts/{account_id}/ai/finetunes": workersAiCreateFinetune,
  "GET /accounts/{account_id}/ai/finetunes/public":
    workersAiListPublicFinetunes,
  "POST /accounts/{account_id}/ai/finetunes/{finetune_id}/finetune-assets":
    workersAiUploadFinetuneAsset,
  "GET /accounts/{account_id}/ai/models/schema": workersAiGetModelSchema,
  "GET /accounts/{account_id}/ai/models/search": workersAiSearchModel,
  "POST /accounts/{account_id}/ai/run/@cf/ai4bharat/indictrans2-en-indic-1B":
    workersAiPostRunCfAi4bharatIndictrans2EnIndic1B,
  "POST /accounts/{account_id}/ai/run/@cf/aisingapore/gemma-sea-lion-v4-27b-it":
    workersAiPostRunCfAisingaporeGemmaSeaLionV427bIt,
  "POST /accounts/{account_id}/ai/run/@cf/baai/bge-base-en-v1.5":
    workersAiPostRunCfBaaiBgeBaseEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/bge-large-en-v1.5":
    workersAiPostRunCfBaaiBgeLargeEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/bge-m3":
    workersAiPostRunCfBaaiBgeM3,
  "POST /accounts/{account_id}/ai/run/@cf/baai/bge-reranker-base":
    workersAiPostRunCfBaaiBgeRerankerBase,
  "POST /accounts/{account_id}/ai/run/@cf/baai/bge-small-en-v1.5":
    workersAiPostRunCfBaaiBgeSmallEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/omni-bge-base-en-v1.5":
    workersAiPostRunCfBaaiOmniBgeBaseEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/omni-bge-large-en-v1.5":
    workersAiPostRunCfBaaiOmniBgeLargeEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/omni-bge-m3":
    workersAiPostRunCfBaaiOmniBgeM3,
  "POST /accounts/{account_id}/ai/run/@cf/baai/omni-bge-small-en-v1.5":
    workersAiPostRunCfBaaiOmniBgeSmallEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/baai/ray-bge-large-en-v1.5":
    workersAiPostRunCfBaaiRayBgeLargeEnV15,
  "POST /accounts/{account_id}/ai/run/@cf/black-forest-labs/flux-1-schnell":
    workersAiPostRunCfBlackForestLabsFlux1Schnell,
  "POST /accounts/{account_id}/ai/run/@cf/black-forest-labs/flux-2-dev":
    workersAiPostRunCfBlackForestLabsFlux2Dev,
  "POST /accounts/{account_id}/ai/run/@cf/bytedance/stable-diffusion-xl-lightning":
    workersAiPostRunCfBytedanceStableDiffusionXlLightning,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura":
    workersAiPostWebsocketRunCfDeepgramAura,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura-1":
    workersAiPostWebsocketRunCfDeepgramAura1,
  "POST /accounts/{account_id}/ai/run/@cf/deepgram/aura-1":
    workersAiPostRunCfDeepgramAura1,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura-1-internal":
    workersAiPostWebsocketRunCfDeepgramAura1Internal,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura-2":
    workersAiPostWebsocketRunCfDeepgramAura2,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura-2-en":
    workersAiPostWebsocketRunCfDeepgramAura2En,
  "POST /accounts/{account_id}/ai/run/@cf/deepgram/aura-2-en":
    workersAiPostRunCfDeepgramAura2En,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/aura-2-es":
    workersAiPostWebsocketRunCfDeepgramAura2Es,
  "POST /accounts/{account_id}/ai/run/@cf/deepgram/aura-2-es":
    workersAiPostRunCfDeepgramAura2Es,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/flux":
    workersAiPostWebsocketRunCfDeepgramFlux,
  "POST /accounts/{account_id}/ai/run/@cf/deepgram/flux":
    workersAiPostRunCfDeepgramFlux,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/nova-3":
    workersAiPostWebsocketRunCfDeepgramNova3,
  "POST /accounts/{account_id}/ai/run/@cf/deepgram/nova-3":
    workersAiPostRunCfDeepgramNova3,
  "GET /accounts/{account_id}/ai/run/@cf/deepgram/nova-3-internal":
    workersAiPostWebsocketRunCfDeepgramNova3Internal,
  "POST /accounts/{account_id}/ai/run/@cf/deepseek-ai/deepseek-math-7b-instruct":
    workersAiPostRunCfDeepseekAiDeepseekMath7bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/deepseek-ai/deepseek-r1-distill-qwen-32b":
    workersAiPostRunCfDeepseekAiDeepseekR1DistillQwen32b,
  "POST /accounts/{account_id}/ai/run/@cf/defog/sqlcoder-7b-2":
    workersAiPostRunCfDefogSqlcoder7b2,
  "POST /accounts/{account_id}/ai/run/@cf/facebook/bart-large-cnn":
    workersAiPostRunCfFacebookBartLargeCnn,
  "POST /accounts/{account_id}/ai/run/@cf/facebook/omni-bart-large-cnn":
    workersAiPostRunCfFacebookOmniBartLargeCnn,
  "POST /accounts/{account_id}/ai/run/@cf/facebook/omni-detr-resnet-50":
    workersAiPostRunCfFacebookOmniDetrResnet50,
  "POST /accounts/{account_id}/ai/run/@cf/fblgit/una-cybertron-7b-v2-bf16":
    workersAiPostRunCfFblgitUnaCybertron7bV2Bf16,
  "POST /accounts/{account_id}/ai/run/@cf/google/embeddinggemma-300m":
    workersAiPostRunCfGoogleEmbeddinggemma300m,
  "POST /accounts/{account_id}/ai/run/@cf/google/gemma-2b-it-lora":
    workersAiPostRunCfGoogleGemma2bItLora,
  "POST /accounts/{account_id}/ai/run/@cf/google/gemma-3-12b-it":
    workersAiPostRunCfGoogleGemma312bIt,
  "POST /accounts/{account_id}/ai/run/@cf/google/gemma-7b-it-lora":
    workersAiPostRunCfGoogleGemma7bItLora,
  "POST /accounts/{account_id}/ai/run/@cf/google/omni-embeddinggemma-300m":
    workersAiPostRunCfGoogleOmniEmbeddinggemma300m,
  "POST /accounts/{account_id}/ai/run/@cf/huggingface/distilbert-sst-2-int8":
    workersAiPostRunCfHuggingfaceDistilbertSst2Int8,
  "POST /accounts/{account_id}/ai/run/@cf/huggingface/omni-distilbert-sst-2-int8":
    workersAiPostRunCfHuggingfaceOmniDistilbertSst2Int8,
  "POST /accounts/{account_id}/ai/run/@cf/ibm-granite/granite-4.0-h-micro":
    workersAiPostRunCfIbmGraniteGranite40HMicro,
  "POST /accounts/{account_id}/ai/run/@cf/leonardo/lucid-origin":
    workersAiPostRunCfLeonardoLucidOrigin,
  "POST /accounts/{account_id}/ai/run/@cf/leonardo/phoenix-1.0":
    workersAiPostRunCfLeonardoPhoenix10,
  "POST /accounts/{account_id}/ai/run/@cf/lykon/dreamshaper-8-lcm":
    workersAiPostRunCfLykonDreamshaper8Lcm,
  "POST /accounts/{account_id}/ai/run/@cf/meta-llama/llama-2-7b-chat-hf-lora":
    workersAiPostRunCfMetaLlamaLlama27bChatHfLora,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-2-7b-chat-fp16":
    workersAiPostRunCfMetaLlama27bChatFp16,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-2-7b-chat-int8":
    workersAiPostRunCfMetaLlama27bChatInt8,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3-8b-instruct":
    workersAiPostRunCfMetaLlama38bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3-8b-instruct-awq":
    workersAiPostRunCfMetaLlama38bInstructAwq,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.1-70b-instruct-fp8-fast":
    workersAiPostRunCfMetaLlama3170bInstructFp8Fast,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.1-8b-instruct-awq":
    workersAiPostRunCfMetaLlama318bInstructAwq,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.1-8b-instruct-fp8":
    workersAiPostRunCfMetaLlama318bInstructFp8,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.1-8b-instruct-fp8-fast":
    workersAiPostRunCfMetaLlama318bInstructFp8Fast,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.2-11b-vision-instruct":
    workersAiPostRunCfMetaLlama3211bVisionInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.2-1b-instruct":
    workersAiPostRunCfMetaLlama321bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.2-3b-instruct":
    workersAiPostRunCfMetaLlama323bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast":
    workersAiPostRunCfMetaLlama3370bInstructFp8Fast,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-4-scout-17b-16e-instruct":
    workersAiPostRunCfMetaLlama4Scout17b16eInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/meta/llama-guard-3-8b":
    workersAiPostRunCfMetaLlamaGuard38b,
  "POST /accounts/{account_id}/ai/run/@cf/meta/m2m100-1.2b":
    workersAiPostRunCfMetaM2m10012b,
  "POST /accounts/{account_id}/ai/run/@cf/microsoft/phi-2":
    workersAiPostRunCfMicrosoftPhi2,
  "POST /accounts/{account_id}/ai/run/@cf/microsoft/resnet-50":
    workersAiPostRunCfMicrosoftResnet50,
  "POST /accounts/{account_id}/ai/run/@cf/mistral/mistral-7b-instruct-v0.1":
    workersAiPostRunCfMistralMistral7bInstructV01,
  "POST /accounts/{account_id}/ai/run/@cf/mistral/mistral-7b-instruct-v0.2-lora":
    workersAiPostRunCfMistralMistral7bInstructV02Lora,
  "POST /accounts/{account_id}/ai/run/@cf/mistralai/mistral-small-3.1-24b-instruct":
    workersAiPostRunCfMistralaiMistralSmall3124bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/myshell-ai/melotts":
    workersAiPostRunCfMyshellAiMelotts,
  "POST /accounts/{account_id}/ai/run/@cf/openai/gpt-oss-120b":
    workersAiPostRunCfOpenaiGptOss120b,
  "POST /accounts/{account_id}/ai/run/@cf/openai/gpt-oss-20b":
    workersAiPostRunCfOpenaiGptOss20b,
  "POST /accounts/{account_id}/ai/run/@cf/openai/whisper":
    workersAiPostRunCfOpenaiWhisper,
  "POST /accounts/{account_id}/ai/run/@cf/openai/whisper-large-v3-turbo":
    workersAiPostRunCfOpenaiWhisperLargeV3Turbo,
  "POST /accounts/{account_id}/ai/run/@cf/openai/whisper-tiny-en":
    workersAiPostRunCfOpenaiWhisperTinyEn,
  "POST /accounts/{account_id}/ai/run/@cf/openchat/openchat-3.5-0106":
    workersAiPostRunCfOpenchatOpenchat350106,
  "POST /accounts/{account_id}/ai/run/@cf/pfnet/plamo-embedding-1b":
    workersAiPostRunCfPfnetPlamoEmbedding1b,
  "GET /accounts/{account_id}/ai/run/@cf/pipecat-ai/smart-turn-v2":
    workersAiPostWebsocketRunCfPipecatAiSmartTurnV2,
  "GET /accounts/{account_id}/ai/run/@cf/pipecat-ai/smart-turn-v3":
    workersAiPostWebsocketRunCfPipecatAiSmartTurnV3,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen1.5-0.5b-chat":
    workersAiPostRunCfQwenQwen1505bChat,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen1.5-1.8b-chat":
    workersAiPostRunCfQwenQwen1518bChat,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen1.5-14b-chat-awq":
    workersAiPostRunCfQwenQwen1514bChatAwq,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen1.5-7b-chat-awq":
    workersAiPostRunCfQwenQwen157bChatAwq,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen2.5-coder-32b-instruct":
    workersAiPostRunCfQwenQwen25Coder32bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen3-30b-a3b-fp8":
    workersAiPostRunCfQwenQwen330bA3bFp8,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwen3-embedding-0.6b":
    workersAiPostRunCfQwenQwen3Embedding06b,
  "POST /accounts/{account_id}/ai/run/@cf/qwen/qwq-32b":
    workersAiPostRunCfQwenQwq32b,
  "POST /accounts/{account_id}/ai/run/@cf/runwayml/stable-diffusion-v1-5-img2img":
    workersAiPostRunCfRunwaymlStableDiffusionV15Img2img,
  "POST /accounts/{account_id}/ai/run/@cf/runwayml/stable-diffusion-v1-5-inpainting":
    workersAiPostRunCfRunwaymlStableDiffusionV15Inpainting,
  "POST /accounts/{account_id}/ai/run/@cf/stabilityai/stable-diffusion-xl-base-1.0":
    workersAiPostRunCfStabilityaiStableDiffusionXlBase10,
  "GET /accounts/{account_id}/ai/run/@cf/sven/test-pipe-http":
    workersAiPostWebsocketRunCfSvenTestPipeHttp,
  "POST /accounts/{account_id}/ai/run/@cf/thebloke/discolm-german-7b-v1-awq":
    workersAiPostRunCfTheblokeDiscolmGerman7bV1Awq,
  "POST /accounts/{account_id}/ai/run/@cf/tiiuae/falcon-7b-instruct":
    workersAiPostRunCfTiiuaeFalcon7bInstruct,
  "POST /accounts/{account_id}/ai/run/@cf/tinyllama/tinyllama-1.1b-chat-v1.0":
    workersAiPostRunCfTinyllamaTinyllama11bChatV10,
  "POST /accounts/{account_id}/ai/run/@hf/google/gemma-7b-it":
    workersAiPostRunHfGoogleGemma7bIt,
  "POST /accounts/{account_id}/ai/run/@hf/mistral/mistral-7b-instruct-v0.2":
    workersAiPostRunHfMistralMistral7bInstructV02,
  "POST /accounts/{account_id}/ai/run/@hf/nexusflow/starling-lm-7b-beta":
    workersAiPostRunHfNexusflowStarlingLm7bBeta,
  "POST /accounts/{account_id}/ai/run/@hf/nousresearch/hermes-2-pro-mistral-7b":
    workersAiPostRunHfNousresearchHermes2ProMistral7b,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/deepseek-coder-6.7b-base-awq":
    workersAiPostRunHfTheblokeDeepseekCoder67bBaseAwq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/deepseek-coder-6.7b-instruct-awq":
    workersAiPostRunHfTheblokeDeepseekCoder67bInstructAwq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/llama-2-13b-chat-awq":
    workersAiPostRunHfTheblokeLlama213bChatAwq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/llamaguard-7b-awq":
    workersAiPostRunHfTheblokeLlamaguard7bAwq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/mistral-7b-instruct-v0.1-awq":
    workersAiPostRunHfTheblokeMistral7bInstructV01Awq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/neural-chat-7b-v3-1-awq":
    workersAiPostRunHfTheblokeNeuralChat7bV31Awq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/openhermes-2.5-mistral-7b-awq":
    workersAiPostRunHfTheblokeOpenhermes25Mistral7bAwq,
  "POST /accounts/{account_id}/ai/run/@hf/thebloke/zephyr-7b-beta-awq":
    workersAiPostRunHfTheblokeZephyr7bBetaAwq,
  "POST /accounts/{account_id}/ai/run/{model_name}": workersAiPostRunModel,
  "GET /accounts/{account_id}/ai/tasks/search": workersAiSearchTask,
  "POST /accounts/{account_id}/ai/tomarkdown": workersAiPostToMarkdown,
  "GET /accounts/{account_id}/ai/tomarkdown/supported":
    workersAiGetToMarkdownSupported,
  "GET /accounts/{account_id}/alerting/v3/available_alerts":
    notificationAlertTypesGetAlertTypes,
  "GET /accounts/{account_id}/alerting/v3/destinations/eligible":
    notificationMechanismEligibilityGetDeliveryMechanismEligibility,
  "DELETE /accounts/{account_id}/alerting/v3/destinations/pagerduty":
    notificationDestinationsWithPagerDutyDeletePagerDutyServices,
  "GET /accounts/{account_id}/alerting/v3/destinations/pagerduty":
    notificationDestinationsWithPagerDutyListPagerDutyServices,
  "POST /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect":
    notificationDestinationsWithPagerDutyConnectPagerDuty,
  "GET /accounts/{account_id}/alerting/v3/destinations/pagerduty/connect/{token_id}":
    notificationDestinationsWithPagerDutyConnectPagerDutyToken,
  "GET /accounts/{account_id}/alerting/v3/destinations/webhooks":
    notificationWebhooksListWebhooks,
  "POST /accounts/{account_id}/alerting/v3/destinations/webhooks":
    notificationWebhooksCreateAWebhook,
  "DELETE /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}":
    notificationWebhooksDeleteAWebhook,
  "GET /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}":
    notificationWebhooksGetAWebhook,
  "PUT /accounts/{account_id}/alerting/v3/destinations/webhooks/{webhook_id}":
    notificationWebhooksUpdateAWebhook,
  "GET /accounts/{account_id}/alerting/v3/history":
    notificationHistoryListHistory,
  "GET /accounts/{account_id}/alerting/v3/policies":
    notificationPoliciesListNotificationPolicies,
  "POST /accounts/{account_id}/alerting/v3/policies":
    notificationPoliciesCreateANotificationPolicy,
  "DELETE /accounts/{account_id}/alerting/v3/policies/{policy_id}":
    notificationPoliciesDeleteANotificationPolicy,
  "GET /accounts/{account_id}/alerting/v3/policies/{policy_id}":
    notificationPoliciesGetANotificationPolicy,
  "PUT /accounts/{account_id}/alerting/v3/policies/{policy_id}":
    notificationPoliciesUpdateANotificationPolicy,
  "GET /accounts/{account_id}/alerting/v3/silences":
    notificationSilencesListSilences,
  "POST /accounts/{account_id}/alerting/v3/silences":
    notificationSilencesCreateSilences,
  "PUT /accounts/{account_id}/alerting/v3/silences":
    notificationSilencesUpdateSilences,
  "DELETE /accounts/{account_id}/alerting/v3/silences/{silence_id}":
    notificationSilencesDeleteSilences,
  "GET /accounts/{account_id}/alerting/v3/silences/{silence_id}":
    notificationSilencesGetSilence,
  "GET /accounts/{account_id}/audit_logs": auditLogsGetAccountAuditLogs,
  "POST /accounts/{account_id}/autorag/rags/{id}/ai-search":
    autoragConfigAiSearch,
  "GET /accounts/{account_id}/autorag/rags/{id}/files": autoragConfigFiles,
  "GET /accounts/{account_id}/autorag/rags/{id}/jobs": autoragConfigListJobs,
  "GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}":
    autoragConfigGetJob,
  "GET /accounts/{account_id}/autorag/rags/{id}/jobs/{job_id}/logs":
    autoragConfigListJobLogs,
  "POST /accounts/{account_id}/autorag/rags/{id}/search": autoragConfigSearch,
  "PATCH /accounts/{account_id}/autorag/rags/{id}/sync": autoragConfigSync,
  "GET /accounts/{account_id}/billing/profile":
    accountBillingProfileDeprecatedBillingProfileDetails,
  "GET /accounts/{account_id}/botnet_feed/asn/{asn_id}/day_report":
    botnetThreatFeedGetDayReport,
  "GET /accounts/{account_id}/botnet_feed/asn/{asn_id}/full_report":
    botnetThreatFeedGetFullReport,
  "GET /accounts/{account_id}/botnet_feed/configs/asn": botnetThreatFeedListAsn,
  "DELETE /accounts/{account_id}/botnet_feed/configs/asn/{asn_id}":
    botnetThreatFeedDeleteAsn,
  "GET /accounts/{account_id}/brand-protection/alerts":
    getAccountsAccountIdBrandProtectionAlerts,
  "PATCH /accounts/{account_id}/brand-protection/alerts":
    patchAccountsAccountIdBrandProtectionAlerts,
  "PATCH /accounts/{account_id}/brand-protection/alerts/clear":
    patchAccountsAccountIdBrandProtectionAlertsClear,
  "PATCH /accounts/{account_id}/brand-protection/alerts/refute":
    patchAccountsAccountIdBrandProtectionAlertsRefute,
  "PATCH /accounts/{account_id}/brand-protection/alerts/verify":
    patchAccountsAccountIdBrandProtectionAlertsVerify,
  "DELETE /accounts/{account_id}/brand-protection/brands":
    deleteAccountsAccountIdBrandProtectionBrands,
  "GET /accounts/{account_id}/brand-protection/brands":
    getAccountsAccountIdBrandProtectionBrands,
  "POST /accounts/{account_id}/brand-protection/brands":
    postAccountsAccountIdBrandProtectionBrands,
  "DELETE /accounts/{account_id}/brand-protection/brands/patterns":
    deleteAccountsAccountIdBrandProtectionBrandsPatterns,
  "GET /accounts/{account_id}/brand-protection/brands/patterns":
    getAccountsAccountIdBrandProtectionBrandsPatterns,
  "POST /accounts/{account_id}/brand-protection/brands/patterns":
    postAccountsAccountIdBrandProtectionBrandsPatterns,
  "PATCH /accounts/{account_id}/brand-protection/clear":
    patchAccountsAccountIdBrandProtectionClear,
  "GET /accounts/{account_id}/brand-protection/domain-info":
    getAccountsAccountIdBrandProtectionDomainInfo,
  "GET /accounts/{account_id}/brand-protection/logo-matches":
    getAccountsAccountIdBrandProtectionLogoMatches,
  "GET /accounts/{account_id}/brand-protection/logo-matches/download":
    getAccountsAccountIdBrandProtectionLogoMatchesDownload,
  "GET /accounts/{account_id}/brand-protection/logos":
    getAccountsAccountIdBrandProtectionLogos,
  "POST /accounts/{account_id}/brand-protection/logos":
    postAccountsAccountIdBrandProtectionLogos,
  "DELETE /accounts/{account_id}/brand-protection/logos/{logo_id}":
    deleteAccountsAccountIdBrandProtectionLogosLogoId,
  "GET /accounts/{account_id}/brand-protection/logos/{logo_id}":
    getAccountsAccountIdBrandProtectionLogosLogoId,
  "GET /accounts/{account_id}/brand-protection/matches":
    getAccountsAccountIdBrandProtectionMatches,
  "GET /accounts/{account_id}/brand-protection/matches/download":
    getAccountsAccountIdBrandProtectionMatchesDownload,
  "DELETE /accounts/{account_id}/brand-protection/queries":
    deleteAccountsAccountIdBrandProtectionQueries,
  "GET /accounts/{account_id}/brand-protection/queries":
    getAccountsAccountIdBrandProtectionQueries,
  "PATCH /accounts/{account_id}/brand-protection/queries":
    patchAccountsAccountIdBrandProtectionQueries,
  "POST /accounts/{account_id}/brand-protection/queries":
    postAccountsAccountIdBrandProtectionQueries,
  "POST /accounts/{account_id}/brand-protection/queries/bulk":
    postAccountsAccountIdBrandProtectionQueriesBulk,
  "GET /accounts/{account_id}/brand-protection/recent-submissions":
    getAccountsAccountIdBrandProtectionRecentSubmissions,
  "PATCH /accounts/{account_id}/brand-protection/refute":
    patchAccountsAccountIdBrandProtectionRefute,
  "POST /accounts/{account_id}/brand-protection/scan-logo":
    postAccountsAccountIdBrandProtectionScanLogo,
  "POST /accounts/{account_id}/brand-protection/scan-page":
    postAccountsAccountIdBrandProtectionScanPage,
  "POST /accounts/{account_id}/brand-protection/search":
    postAccountsAccountIdBrandProtectionSearch,
  "GET /accounts/{account_id}/brand-protection/submission-info":
    getAccountsAccountIdBrandProtectionSubmissionInfo,
  "POST /accounts/{account_id}/brand-protection/submit":
    postAccountsAccountIdBrandProtectionSubmit,
  "GET /accounts/{account_id}/brand-protection/total-queries":
    getAccountsAccountIdBrandProtectionTotalQueries,
  "GET /accounts/{account_id}/brand-protection/tracked-domains":
    getAccountsAccountIdBrandProtectionTrackedDomains,
  "GET /accounts/{account_id}/brand-protection/url-info":
    getAccountsAccountIdBrandProtectionUrlInfo,
  "PATCH /accounts/{account_id}/brand-protection/verify":
    patchAccountsAccountIdBrandProtectionVerify,
  "POST /accounts/{account_id}/browser-rendering/content": brapiPostContent,
  "POST /accounts/{account_id}/browser-rendering/json": brapiPostJson,
  "POST /accounts/{account_id}/browser-rendering/links": brapiPostLinks,
  "POST /accounts/{account_id}/browser-rendering/markdown": brapiPostMarkdown,
  "POST /accounts/{account_id}/browser-rendering/pdf": brapiPostPdf,
  "POST /accounts/{account_id}/browser-rendering/scrape": brapiPostScrape,
  "POST /accounts/{account_id}/browser-rendering/screenshot":
    brapiPostScreenshot,
  "POST /accounts/{account_id}/browser-rendering/snapshot": brapiPostSnapshot,
  "GET /accounts/{account_id}/builds/account/limits": getAccountLimits,
  "GET /accounts/{account_id}/builds/builds": getBuildsByVersionIds,
  "GET /accounts/{account_id}/builds/builds/latest": getLatestBuildsByScripts,
  "GET /accounts/{account_id}/builds/builds/{build_uuid}": getBuildByUuid,
  "PUT /accounts/{account_id}/builds/builds/{build_uuid}/cancel":
    cancelBuildByUuid,
  "GET /accounts/{account_id}/builds/builds/{build_uuid}/logs": getBuildLogs,
  "PUT /accounts/{account_id}/builds/repos/connections": upsertRepoConnection,
  "DELETE /accounts/{account_id}/builds/repos/connections/{repo_connection_uuid}":
    deleteRepoConnection,
  "GET /accounts/{account_id}/builds/repos/{provider_type}/{provider_account_id}/{repo_id}/config_autofill":
    getWorkerConfigAutofill,
  "GET /accounts/{account_id}/builds/tokens": listBuildTokens,
  "POST /accounts/{account_id}/builds/tokens": createBuildToken,
  "DELETE /accounts/{account_id}/builds/tokens/{build_token_uuid}":
    deleteBuildToken,
  "POST /accounts/{account_id}/builds/triggers": createTrigger,
  "DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}": deleteTrigger,
  "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}": updateTrigger,
  "POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/builds":
    createManualBuild,
  "GET /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables":
    listEnvironmentVariables,
  "PATCH /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables":
    upsertEnvironmentVariables,
  "DELETE /accounts/{account_id}/builds/triggers/{trigger_uuid}/environment_variables/{environment_variable_key}":
    deleteEnvironmentVariable,
  "POST /accounts/{account_id}/builds/triggers/{trigger_uuid}/purge_build_cache":
    purgeBuildCache,
  "GET /accounts/{account_id}/builds/workers/{external_script_id}/builds":
    listBuildsByScript,
  "GET /accounts/{account_id}/builds/workers/{external_script_id}/triggers":
    listTriggersByScript,
  "GET /accounts/{account_id}/calls/apps": callsAppsList,
  "POST /accounts/{account_id}/calls/apps": callsAppsCreateANewApp,
  "DELETE /accounts/{account_id}/calls/apps/{app_id}": callsAppsDeleteApp,
  "GET /accounts/{account_id}/calls/apps/{app_id}": callsAppsRetrieveAppDetails,
  "PUT /accounts/{account_id}/calls/apps/{app_id}": callsAppsUpdateAppDetails,
  "GET /accounts/{account_id}/calls/turn_keys": callsTurnKeyList,
  "POST /accounts/{account_id}/calls/turn_keys": callsTurnKeyCreate,
  "DELETE /accounts/{account_id}/calls/turn_keys/{key_id}": callsDeleteTurnKey,
  "GET /accounts/{account_id}/calls/turn_keys/{key_id}":
    callsRetrieveTurnKeyDetails,
  "PUT /accounts/{account_id}/calls/turn_keys/{key_id}": callsUpdateTurnKey,
  "GET /accounts/{account_id}/cfd_tunnel":
    cloudflareTunnelListCloudflareTunnels,
  "POST /accounts/{account_id}/cfd_tunnel":
    cloudflareTunnelCreateACloudflareTunnel,
  "DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}":
    cloudflareTunnelDeleteACloudflareTunnel,
  "GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}":
    cloudflareTunnelGetACloudflareTunnel,
  "PATCH /accounts/{account_id}/cfd_tunnel/{tunnel_id}":
    cloudflareTunnelUpdateACloudflareTunnel,
  "GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations":
    cloudflareTunnelConfigurationGetConfiguration,
  "PUT /accounts/{account_id}/cfd_tunnel/{tunnel_id}/configurations":
    cloudflareTunnelConfigurationPutConfiguration,
  "DELETE /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections":
    cloudflareTunnelCleanUpCloudflareTunnelConnections,
  "GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connections":
    cloudflareTunnelListCloudflareTunnelConnections,
  "GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/connectors/{connector_id}":
    cloudflareTunnelGetCloudflareTunnelConnector,
  "POST /accounts/{account_id}/cfd_tunnel/{tunnel_id}/management":
    cloudflareTunnelGetACloudflareTunnelManagementToken,
  "GET /accounts/{account_id}/cfd_tunnel/{tunnel_id}/token":
    cloudflareTunnelGetACloudflareTunnelToken,
  "GET /accounts/{account_id}/challenges/widgets": accountsTurnstileWidgetsList,
  "POST /accounts/{account_id}/challenges/widgets":
    accountsTurnstileWidgetCreate,
  "DELETE /accounts/{account_id}/challenges/widgets/{sitekey}":
    accountsTurnstileWidgetDelete,
  "GET /accounts/{account_id}/challenges/widgets/{sitekey}":
    accountsTurnstileWidgetGet,
  "PUT /accounts/{account_id}/challenges/widgets/{sitekey}":
    accountsTurnstileWidgetUpdate,
  "POST /accounts/{account_id}/challenges/widgets/{sitekey}/rotate_secret":
    accountsTurnstileWidgetRotateSecret,
  "POST /accounts/{account_id}/cloudforce-one/binary": postBinDBPost,
  "GET /accounts/{account_id}/cloudforce-one/binary/{hash}": getBinDBGetBinary,
  "GET /accounts/{account_id}/cloudforce-one/events": getEventListGet,
  "GET /accounts/{account_id}/cloudforce-one/events/aggregate":
    getEventAggregate,
  "GET /accounts/{account_id}/cloudforce-one/events/attackers": getAttackerList,
  "GET /accounts/{account_id}/cloudforce-one/events/categories":
    getCategoryList,
  "GET /accounts/{account_id}/cloudforce-one/events/categories/catalog":
    getCategoryListComplete,
  "POST /accounts/{account_id}/cloudforce-one/events/categories/create":
    postCategoryCreate,
  "DELETE /accounts/{account_id}/cloudforce-one/events/categories/{category_id}":
    deleteCategoryDelete,
  "GET /accounts/{account_id}/cloudforce-one/events/categories/{category_id}":
    getCategoryRead,
  "PATCH /accounts/{account_id}/cloudforce-one/events/categories/{category_id}":
    patchCategoryUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/categories/{category_id}":
    postCategoryUpdate,
  "GET /accounts/{account_id}/cloudforce-one/events/countries": getCountryRead,
  "POST /accounts/{account_id}/cloudforce-one/events/create": postEventCreate,
  "POST /accounts/{account_id}/cloudforce-one/events/create/bulk":
    postEventCreateBulk,
  "POST /accounts/{account_id}/cloudforce-one/events/create/bulk/relationships":
    postDOSEventCreateBulkWithRelationships,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset": getDatasetList,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/create":
    postDatasetCreate,
  "DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":
    deleteDatasetDelete,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":
    getDatasetRead,
  "PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":
    patchDatasetUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}":
    postDatasetUpdate,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/events/{event_id}":
    getEventRead,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicatorTypes/create":
    postIndicatorTypeCreate,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators":
    getIndicatorListLegacy,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/bulk":
    postIndicatorCreateBulk,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/create":
    postIndicatorCreate,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/tags":
    getIndicatorTagsList,
  "DELETE /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}":
    deleteIndicatorDelete,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}":
    getIndicatorRead,
  "PATCH /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/indicators/{indicator_id}":
    patchIndicatorUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/move":
    postEventMoveToNewDS,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/tags/{tag_uuid}/indicators":
    getTagIndicatorsList,
  "GET /accounts/{account_id}/cloudforce-one/events/dataset/{dataset_id}/targetIndustries":
    getTargetIndustryListByDataset,
  "POST /accounts/{account_id}/cloudforce-one/events/datasets/populate":
    postDatasetPopulate,
  "DELETE /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}":
    deleteEventTagDelete,
  "POST /accounts/{account_id}/cloudforce-one/events/event_tag/{event_id}/create":
    postEventTagCreate,
  "GET /accounts/{account_id}/cloudforce-one/events/indicator-types":
    getIndicatorTypesList,
  "GET /accounts/{account_id}/cloudforce-one/events/indicatorTypes":
    getLegacyIndicatorTypesList,
  "GET /accounts/{account_id}/cloudforce-one/events/indicators":
    getIndicatorList,
  "GET /accounts/{account_id}/cloudforce-one/events/raw/{dataset_id}/{event_id}":
    getEventRawReadDS,
  "DELETE /accounts/{account_id}/cloudforce-one/events/relate/{event_id}":
    deleteEventReferenceDelete,
  "POST /accounts/{account_id}/cloudforce-one/events/relate/{event_id}/create":
    postEventReferenceCreate,
  "POST /accounts/{account_id}/cloudforce-one/events/relationships/create":
    postCreateEventRelationship,
  "GET /accounts/{account_id}/cloudforce-one/events/tags": getTagList,
  "GET /accounts/{account_id}/cloudforce-one/events/tags/categories":
    getTagCategoryList,
  "POST /accounts/{account_id}/cloudforce-one/events/tags/categories/create":
    postTagCategoryCreate,
  "DELETE /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}":
    deleteTagCategoryDelete,
  "PATCH /accounts/{account_id}/cloudforce-one/events/tags/categories/{category_uuid}":
    patchTagCategoryUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/tags/create":
    postTagCreate,
  "DELETE /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}":
    deleteTagDelete,
  "PATCH /accounts/{account_id}/cloudforce-one/events/tags/{tag_uuid}":
    patchTagUpdate,
  "GET /accounts/{account_id}/cloudforce-one/events/targetIndustries":
    getTargetIndustryList,
  "GET /accounts/{account_id}/cloudforce-one/events/targetIndustries/catalog":
    getTargetIndustryListComplete,
  "DELETE /accounts/{account_id}/cloudforce-one/events/{dataset_id}/delete":
    deleteEventDeleteDO,
  "DELETE /accounts/{account_id}/cloudforce-one/events/{event_id}":
    deleteEventDelete,
  "GET /accounts/{account_id}/cloudforce-one/events/{event_id}":
    getEventReadDeprecated,
  "PATCH /accounts/{account_id}/cloudforce-one/events/{event_id}":
    patchEventUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/{event_id}":
    postEventUpdate,
  "GET /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}":
    getEventRawRead,
  "PATCH /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}":
    patchEventRawUpdate,
  "POST /accounts/{account_id}/cloudforce-one/events/{event_id}/raw/{raw_id}":
    postEventRawUpdate,
  "GET /accounts/{account_id}/cloudforce-one/events/{event_id}/relationships":
    getEventRelationships,
  "POST /accounts/{account_id}/cloudforce-one/requests":
    cloudforceOneRequestList,
  "GET /accounts/{account_id}/cloudforce-one/requests/constants":
    cloudforceOneRequestConstants,
  "POST /accounts/{account_id}/cloudforce-one/requests/new":
    cloudforceOneRequestNew,
  "POST /accounts/{account_id}/cloudforce-one/requests/priority":
    cloudforceOnePriorityList,
  "POST /accounts/{account_id}/cloudforce-one/requests/priority/new":
    cloudforceOnePriorityNew,
  "GET /accounts/{account_id}/cloudforce-one/requests/priority/quota":
    cloudforceOnePriorityQuota,
  "DELETE /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}":
    cloudforceOnePriorityDelete,
  "GET /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}":
    cloudforceOnePriorityGet,
  "PUT /accounts/{account_id}/cloudforce-one/requests/priority/{priority_id}":
    cloudforceOnePriorityUpdate,
  "GET /accounts/{account_id}/cloudforce-one/requests/quota":
    cloudforceOneRequestQuota,
  "GET /accounts/{account_id}/cloudforce-one/requests/types":
    cloudforceOneRequestTypes,
  "DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}":
    cloudforceOneRequestDelete,
  "GET /accounts/{account_id}/cloudforce-one/requests/{request_id}":
    cloudforceOneRequestGet,
  "PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}":
    cloudforceOneRequestUpdate,
  "POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset":
    cloudforceOneRequestAssetList,
  "POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/new":
    cloudforceOneRequestAssetNew,
  "DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}":
    cloudforceOneRequestAssetDelete,
  "GET /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}":
    cloudforceOneRequestAssetGet,
  "PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/asset/{asset_id}":
    cloudforceOneRequestAssetUpdate,
  "POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message":
    cloudforceOneRequestMessageList,
  "POST /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/new":
    cloudforceOneRequestMessageNew,
  "DELETE /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}":
    cloudforceOneRequestMessageDelete,
  "PUT /accounts/{account_id}/cloudforce-one/requests/{request_id}/message/{message_id}":
    cloudforceOneRequestMessageUpdate,
  "GET /accounts/{account_id}/cloudforce-one/scans/config": getConfigFetch,
  "POST /accounts/{account_id}/cloudforce-one/scans/config": postConfigCreate,
  "DELETE /accounts/{account_id}/cloudforce-one/scans/config/{config_id}":
    deleteDeleteScans,
  "PATCH /accounts/{account_id}/cloudforce-one/scans/config/{config_id}":
    postConfigUpdate,
  "GET /accounts/{account_id}/cloudforce-one/scans/results/{config_id}":
    getGetOpenPorts,
  "POST /accounts/{account_id}/cloudforce-one/v2/events/graphql":
    postEventGraphQL,
  "GET /accounts/{account_id}/cni/cnis": listCnis,
  "POST /accounts/{account_id}/cni/cnis": createCni,
  "DELETE /accounts/{account_id}/cni/cnis/{cni}": deleteCni,
  "GET /accounts/{account_id}/cni/cnis/{cni}": getCni,
  "PUT /accounts/{account_id}/cni/cnis/{cni}": updateCni,
  "GET /accounts/{account_id}/cni/interconnects": listInterconnects,
  "POST /accounts/{account_id}/cni/interconnects": createInterconnect,
  "DELETE /accounts/{account_id}/cni/interconnects/{icon}": deleteInterconnect,
  "GET /accounts/{account_id}/cni/interconnects/{icon}": getInterconnect,
  "GET /accounts/{account_id}/cni/interconnects/{icon}/loa": getInterconnectLoa,
  "GET /accounts/{account_id}/cni/interconnects/{icon}/status":
    getInterconnectStatus,
  "GET /accounts/{account_id}/cni/settings": getSettings,
  "PUT /accounts/{account_id}/cni/settings": updateSettings,
  "GET /accounts/{account_id}/cni/slots": listSlots,
  "GET /accounts/{account_id}/cni/slots/{slot}": getSlot,
  "GET /accounts/{account_id}/connectivity/directory/services":
    connectivityServicesList,
  "POST /accounts/{account_id}/connectivity/directory/services":
    connectivityServicesPost,
  "DELETE /accounts/{account_id}/connectivity/directory/services/{service_id}":
    connectivityServicesDelete,
  "GET /accounts/{account_id}/connectivity/directory/services/{service_id}":
    connectivityServicesGet,
  "PUT /accounts/{account_id}/connectivity/directory/services/{service_id}":
    connectivityServicesPut,
  "GET /accounts/{account_id}/custom_ns":
    accountLevelCustomNameserversListAccountCustomNameservers,
  "POST /accounts/{account_id}/custom_ns":
    accountLevelCustomNameserversAddAccountCustomNameserver,
  "DELETE /accounts/{account_id}/custom_ns/{custom_ns_id}":
    accountLevelCustomNameserversDeleteAccountCustomNameserver,
  "GET /accounts/{account_id}/d1/database": cloudflareD1ListDatabases,
  "POST /accounts/{account_id}/d1/database": cloudflareD1CreateDatabase,
  "DELETE /accounts/{account_id}/d1/database/{database_id}":
    cloudflareD1DeleteDatabase,
  "GET /accounts/{account_id}/d1/database/{database_id}":
    cloudflareD1GetDatabase,
  "PATCH /accounts/{account_id}/d1/database/{database_id}":
    cloudflareD1UpdatePartialDatabase,
  "PUT /accounts/{account_id}/d1/database/{database_id}":
    cloudflareD1UpdateDatabase,
  "POST /accounts/{account_id}/d1/database/{database_id}/export":
    cloudflareD1ExportDatabase,
  "POST /accounts/{account_id}/d1/database/{database_id}/import":
    cloudflareD1ImportDatabase,
  "POST /accounts/{account_id}/d1/database/{database_id}/query":
    cloudflareD1QueryDatabase,
  "POST /accounts/{account_id}/d1/database/{database_id}/raw":
    cloudflareD1RawDatabaseQuery,
  "GET /accounts/{account_id}/devices": devicesListDevices,
  "GET /accounts/{account_id}/devices/networks":
    deviceManagedNetworksListDeviceManagedNetworks,
  "POST /accounts/{account_id}/devices/networks":
    deviceManagedNetworksCreateDeviceManagedNetwork,
  "DELETE /accounts/{account_id}/devices/networks/{network_id}":
    deviceManagedNetworksDeleteDeviceManagedNetwork,
  "GET /accounts/{account_id}/devices/networks/{network_id}":
    deviceManagedNetworksDeviceManagedNetworkDetails,
  "PUT /accounts/{account_id}/devices/networks/{network_id}":
    deviceManagedNetworksUpdateDeviceManagedNetwork,
  "GET /accounts/{account_id}/devices/physical-devices": listDevices,
  "DELETE /accounts/{account_id}/devices/physical-devices/{device_id}":
    deleteDevice,
  "GET /accounts/{account_id}/devices/physical-devices/{device_id}": getDevice,
  "POST /accounts/{account_id}/devices/physical-devices/{device_id}/revoke":
    revokeDevice,
  "GET /accounts/{account_id}/devices/policies":
    devicesListDeviceSettingsPolicies,
  "GET /accounts/{account_id}/devices/policy":
    devicesGetDefaultDeviceSettingsPolicy,
  "PATCH /accounts/{account_id}/devices/policy":
    devicesUpdateDefaultDeviceSettingsPolicy,
  "POST /accounts/{account_id}/devices/policy":
    devicesCreateDeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/policy/exclude":
    devicesGetSplitTunnelExcludeList,
  "PUT /accounts/{account_id}/devices/policy/exclude":
    devicesSetSplitTunnelExcludeList,
  "GET /accounts/{account_id}/devices/policy/fallback_domains":
    devicesGetLocalDomainFallbackList,
  "PUT /accounts/{account_id}/devices/policy/fallback_domains":
    devicesSetLocalDomainFallbackList,
  "GET /accounts/{account_id}/devices/policy/include":
    devicesGetSplitTunnelIncludeList,
  "PUT /accounts/{account_id}/devices/policy/include":
    devicesSetSplitTunnelIncludeList,
  "DELETE /accounts/{account_id}/devices/policy/{policy_id}":
    devicesDeleteDeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/policy/{policy_id}":
    devicesGetDeviceSettingsPolicyById,
  "PATCH /accounts/{account_id}/devices/policy/{policy_id}":
    devicesUpdateDeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/policy/{policy_id}/exclude":
    devicesGetSplitTunnelExcludeListForADeviceSettingsPolicy,
  "PUT /accounts/{account_id}/devices/policy/{policy_id}/exclude":
    devicesSetSplitTunnelExcludeListForADeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains":
    devicesGetLocalDomainFallbackListForADeviceSettingsPolicy,
  "PUT /accounts/{account_id}/devices/policy/{policy_id}/fallback_domains":
    devicesSetLocalDomainFallbackListForADeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/policy/{policy_id}/include":
    devicesGetSplitTunnelIncludeListForADeviceSettingsPolicy,
  "PUT /accounts/{account_id}/devices/policy/{policy_id}/include":
    devicesSetSplitTunnelIncludeListForADeviceSettingsPolicy,
  "GET /accounts/{account_id}/devices/posture":
    devicePostureRulesListDevicePostureRules,
  "POST /accounts/{account_id}/devices/posture":
    devicePostureRulesCreateDevicePostureRule,
  "GET /accounts/{account_id}/devices/posture/integration":
    devicePostureIntegrationsListDevicePostureIntegrations,
  "POST /accounts/{account_id}/devices/posture/integration":
    devicePostureIntegrationsCreateDevicePostureIntegration,
  "DELETE /accounts/{account_id}/devices/posture/integration/{integration_id}":
    devicePostureIntegrationsDeleteDevicePostureIntegration,
  "GET /accounts/{account_id}/devices/posture/integration/{integration_id}":
    devicePostureIntegrationsDevicePostureIntegrationDetails,
  "PATCH /accounts/{account_id}/devices/posture/integration/{integration_id}":
    devicePostureIntegrationsUpdateDevicePostureIntegration,
  "DELETE /accounts/{account_id}/devices/posture/{rule_id}":
    devicePostureRulesDeleteDevicePostureRule,
  "GET /accounts/{account_id}/devices/posture/{rule_id}":
    devicePostureRulesDevicePostureRulesDetails,
  "PUT /accounts/{account_id}/devices/posture/{rule_id}":
    devicePostureRulesUpdateDevicePostureRule,
  "DELETE /accounts/{account_id}/devices/registrations": deleteRegistrations,
  "GET /accounts/{account_id}/devices/registrations": listRegistrations,
  "POST /accounts/{account_id}/devices/registrations/revoke":
    revokeRegistrations,
  "POST /accounts/{account_id}/devices/registrations/unrevoke":
    unrevokeRegistrations,
  "DELETE /accounts/{account_id}/devices/registrations/{registration_id}":
    deleteRegistration,
  "GET /accounts/{account_id}/devices/registrations/{registration_id}":
    getRegistration,
  "GET /accounts/{account_id}/devices/registrations/{registration_id}/override_codes":
    getRegistrationOverrideCodes,
  "GET /accounts/{account_id}/devices/resilience/disconnect":
    devicesResilienceRetrieveGlobalWarpOverride,
  "POST /accounts/{account_id}/devices/resilience/disconnect":
    devicesResilienceSetGlobalWarpOverride,
  "POST /accounts/{account_id}/devices/revoke": devicesRevokeDevices,
  "DELETE /accounts/{account_id}/devices/settings":
    zeroTrustAccountsDeleteDeviceSettingsForZeroTrustAccount,
  "GET /accounts/{account_id}/devices/settings":
    zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount,
  "PATCH /accounts/{account_id}/devices/settings":
    zeroTrustAccountsPatchDeviceSettingsForTheZeroTrustAccount,
  "PUT /accounts/{account_id}/devices/settings":
    zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount,
  "POST /accounts/{account_id}/devices/unrevoke": devicesUnrevokeDevices,
  "GET /accounts/{account_id}/devices/{device_id}": devicesDeviceDetails,
  "GET /accounts/{account_id}/devices/{device_id}/override_codes":
    devicesListAdminOverrideCodeForDevice,
  "GET /accounts/{account_id}/dex/colos": dexEndpointsListColos,
  "GET /accounts/{account_id}/dex/commands": getCommands,
  "POST /accounts/{account_id}/dex/commands": postCommands,
  "GET /accounts/{account_id}/dex/commands/devices": getCommandsEligibleDevices,
  "GET /accounts/{account_id}/dex/commands/quota": getCommandsQuota,
  "GET /accounts/{account_id}/dex/commands/{command_id}/downloads/{filename}":
    getCommandsCommandIdDownloadsFilename,
  "GET /accounts/{account_id}/dex/devices/dex_tests": deviceDexTestDetails,
  "POST /accounts/{account_id}/dex/devices/dex_tests":
    deviceDexTestCreateDeviceDexTest,
  "DELETE /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}":
    deviceDexTestDeleteDeviceDexTest,
  "GET /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}":
    deviceDexTestGetDeviceDexTest,
  "PUT /accounts/{account_id}/dex/devices/dex_tests/{dex_test_id}":
    deviceDexTestUpdateDeviceDexTest,
  "GET /accounts/{account_id}/dex/devices/{device_id}/fleet-status/live":
    devicesLiveStatus,
  "GET /accounts/{account_id}/dex/fleet-status/devices": dexFleetStatusDevices,
  "GET /accounts/{account_id}/dex/fleet-status/live": dexFleetStatusLive,
  "GET /accounts/{account_id}/dex/fleet-status/over-time":
    dexFleetStatusOverTime,
  "GET /accounts/{account_id}/dex/http-tests/{test_id}":
    dexEndpointsHttpTestDetails,
  "GET /accounts/{account_id}/dex/http-tests/{test_id}/percentiles":
    dexEndpointsHttpTestPercentiles,
  "GET /accounts/{account_id}/dex/tests/overview":
    dexEndpointsListTestsOverview,
  "GET /accounts/{account_id}/dex/tests/unique-devices":
    dexEndpointsTestsUniqueDevices,
  "GET /accounts/{account_id}/dex/traceroute-test-results/{test_result_id}/network-path":
    dexEndpointsTracerouteTestResultNetworkPath,
  "GET /accounts/{account_id}/dex/traceroute-tests/{test_id}":
    dexEndpointsTracerouteTestDetails,
  "GET /accounts/{account_id}/dex/traceroute-tests/{test_id}/network-path":
    dexEndpointsTracerouteTestNetworkPath,
  "GET /accounts/{account_id}/dex/traceroute-tests/{test_id}/percentiles":
    dexEndpointsTracerouteTestPercentiles,
  "GET /accounts/{account_id}/dex/warp-change-events": listWarpChangeEvents,
  "GET /accounts/{account_id}/diagnostics/endpoint-healthchecks":
    diagnosticsEndpointHealthcheckList,
  "POST /accounts/{account_id}/diagnostics/endpoint-healthchecks":
    diagnosticsEndpointHealthcheckCreate,
  "DELETE /accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}":
    diagnosticsEndpointHealthcheckDelete,
  "GET /accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}":
    diagnosticsEndpointHealthcheckGet,
  "PUT /accounts/{account_id}/diagnostics/endpoint-healthchecks/{id}":
    diagnosticsEndpointHealthcheckUpdate,
  "POST /accounts/{account_id}/diagnostics/traceroute": diagnosticsTraceroute,
  "GET /accounts/{account_id}/dlp/datasets": dlpDatasetsReadAll,
  "POST /accounts/{account_id}/dlp/datasets": dlpDatasetsCreate,
  "DELETE /accounts/{account_id}/dlp/datasets/{dataset_id}": dlpDatasetsDelete,
  "GET /accounts/{account_id}/dlp/datasets/{dataset_id}": dlpDatasetsRead,
  "PUT /accounts/{account_id}/dlp/datasets/{dataset_id}": dlpDatasetsUpdate,
  "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload":
    dlpDatasetsCreateVersion,
  "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/upload/{version}":
    dlpDatasetsUploadVersion,
  "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}":
    dlpDatasetsDefineColumns,
  "POST /accounts/{account_id}/dlp/datasets/{dataset_id}/versions/{version}/entries/{entry_id}":
    dlpDatasetsUploadDatasetColumn,
  "GET /accounts/{account_id}/dlp/document_fingerprints":
    dlpDocumentFingerprintsReadAll,
  "POST /accounts/{account_id}/dlp/document_fingerprints":
    dlpDocumentFingerprintsCreate,
  "DELETE /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":
    dlpDocumentFingerprintsDelete,
  "GET /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":
    dlpDocumentFingerprintsRead,
  "POST /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":
    dlpDocumentFingerprintsUpdate,
  "PUT /accounts/{account_id}/dlp/document_fingerprints/{document_fingerprint_id}":
    dlpDocumentFingerprintsUpload,
  "GET /accounts/{account_id}/dlp/email/account_mapping":
    dlpEmailScannerGetAccountMapping,
  "POST /accounts/{account_id}/dlp/email/account_mapping":
    dlpEmailScannerCreateAccountMapping,
  "GET /accounts/{account_id}/dlp/email/rules": dlpEmailScannerListAllRules,
  "PATCH /accounts/{account_id}/dlp/email/rules":
    dlpEmailScannerUpdateRulePriorities,
  "POST /accounts/{account_id}/dlp/email/rules": dlpEmailScannerCreateRule,
  "DELETE /accounts/{account_id}/dlp/email/rules/{rule_id}":
    dlpEmailScannerDeleteRule,
  "GET /accounts/{account_id}/dlp/email/rules/{rule_id}":
    dlpEmailScannerGetRule,
  "PUT /accounts/{account_id}/dlp/email/rules/{rule_id}":
    dlpEmailScannerUpdateRule,
  "GET /accounts/{account_id}/dlp/entries": dlpEntriesListAllEntries,
  "POST /accounts/{account_id}/dlp/entries": dlpEntriesCreateEntry,
  "PUT /accounts/{account_id}/dlp/entries/custom/{entry_id}":
    dlpEntriesUpdateCustomEntry,
  "POST /accounts/{account_id}/dlp/entries/integration":
    dlpEntriesCreateIntegrationEntry,
  "DELETE /accounts/{account_id}/dlp/entries/integration/{entry_id}":
    dlpEntriesDeleteIntegrationEntry,
  "PUT /accounts/{account_id}/dlp/entries/integration/{entry_id}":
    dlpEntriesUpdateIntegrationEntry,
  "POST /accounts/{account_id}/dlp/entries/predefined":
    dlpEntriesCreatePredefinedEntry,
  "DELETE /accounts/{account_id}/dlp/entries/predefined/{entry_id}":
    dlpEntriesDeletePredefinedEntry,
  "PUT /accounts/{account_id}/dlp/entries/predefined/{entry_id}":
    dlpEntriesUpdatePredefinedEntry,
  "DELETE /accounts/{account_id}/dlp/entries/{entry_id}": dlpEntriesDeleteEntry,
  "GET /accounts/{account_id}/dlp/entries/{entry_id}": dlpEntriesGetDlpEntry,
  "PUT /accounts/{account_id}/dlp/entries/{entry_id}": dlpEntriesUpdateEntry,
  "GET /accounts/{account_id}/dlp/limits": dlpLimitsGet,
  "POST /accounts/{account_id}/dlp/patterns/validate": dlpPatternValidate,
  "GET /accounts/{account_id}/dlp/payload_log": dlpPayloadLogGet,
  "PUT /accounts/{account_id}/dlp/payload_log": dlpPayloadLogPut,
  "GET /accounts/{account_id}/dlp/profiles": dlpProfilesListAllProfiles,
  "GET /accounts/{account_id}/dlp/profiles/custom":
    dlpProfilesListAllCustomProfiles,
  "POST /accounts/{account_id}/dlp/profiles/custom":
    dlpProfilesCreateCustomProfiles,
  "DELETE /accounts/{account_id}/dlp/profiles/custom/{profile_id}":
    dlpProfilesDeleteCustomProfile,
  "GET /accounts/{account_id}/dlp/profiles/custom/{profile_id}":
    dlpProfilesGetCustomProfile,
  "PUT /accounts/{account_id}/dlp/profiles/custom/{profile_id}":
    dlpProfilesUpdateCustomProfile,
  "POST /accounts/{account_id}/dlp/profiles/predefined":
    dlpProfilesCreatePredefinedProfile,
  "DELETE /accounts/{account_id}/dlp/profiles/predefined/{profile_id}":
    dlpProfilesDeletePredefinedProfile,
  "GET /accounts/{account_id}/dlp/profiles/predefined/{profile_id}":
    dlpProfilesGetPredefinedProfile,
  "PUT /accounts/{account_id}/dlp/profiles/predefined/{profile_id}":
    dlpProfilesUpdatePredefinedProfile,
  "GET /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config":
    dlpProfilesGetPredefinedProfileConfig,
  "POST /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config":
    dlpProfilesCreatePredefinedProfileConfig,
  "PUT /accounts/{account_id}/dlp/profiles/predefined/{profile_id}/config":
    dlpProfilesUpdatePredefinedProfileConfig,
  "GET /accounts/{account_id}/dlp/profiles/{profile_id}":
    dlpProfilesGetDlpProfile,
  "GET /accounts/{account_id}/dns_firewall": dnsFirewallListDnsFirewallClusters,
  "POST /accounts/{account_id}/dns_firewall":
    dnsFirewallCreateDnsFirewallCluster,
  "DELETE /accounts/{account_id}/dns_firewall/{dns_firewall_id}":
    dnsFirewallDeleteDnsFirewallCluster,
  "GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}":
    dnsFirewallDnsFirewallClusterDetails,
  "PATCH /accounts/{account_id}/dns_firewall/{dns_firewall_id}":
    dnsFirewallUpdateDnsFirewallCluster,
  "GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report":
    dnsFirewallAnalyticsTable,
  "GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}/dns_analytics/report/bytime":
    dnsFirewallAnalyticsByTime,
  "GET /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns":
    dnsFirewallShowDnsFirewallClusterReverseDns,
  "PATCH /accounts/{account_id}/dns_firewall/{dns_firewall_id}/reverse_dns":
    dnsFirewallUpdateDnsFirewallClusterReverseDns,
  "GET /accounts/{account_id}/dns_records/usage":
    dnsRecordsForAnAccountGetUsage,
  "GET /accounts/{account_id}/dns_settings":
    dnsSettingsForAnAccountListDnsSettings,
  "PATCH /accounts/{account_id}/dns_settings":
    dnsSettingsForAnAccountUpdateDnsSettings,
  "GET /accounts/{account_id}/dns_settings/views":
    dnsViewsForAnAccountListInternalDnsViews,
  "POST /accounts/{account_id}/dns_settings/views":
    dnsViewsForAnAccountCreateInternalDnsViews,
  "DELETE /accounts/{account_id}/dns_settings/views/{view_id}":
    dnsViewsForAnAccountDeleteInternalDnsView,
  "GET /accounts/{account_id}/dns_settings/views/{view_id}":
    dnsViewsForAnAccountGetInternalDnsView,
  "PATCH /accounts/{account_id}/dns_settings/views/{view_id}":
    dnsViewsForAnAccountUpdateInternalDnsView,
  "GET /accounts/{account_id}/email-security/investigate":
    emailSecurityInvestigate,
  "POST /accounts/{account_id}/email-security/investigate/move":
    emailSecurityPostBulkMessageMove,
  "POST /accounts/{account_id}/email-security/investigate/preview":
    emailSecurityPostPreview,
  "POST /accounts/{account_id}/email-security/investigate/release":
    emailSecurityPostRelease,
  "GET /accounts/{account_id}/email-security/investigate/{postfix_id}":
    emailSecurityGetMessage,
  "GET /accounts/{account_id}/email-security/investigate/{postfix_id}/detections":
    emailSecurityGetMessageDetections,
  "POST /accounts/{account_id}/email-security/investigate/{postfix_id}/move":
    emailSecurityPostMessageMove,
  "GET /accounts/{account_id}/email-security/investigate/{postfix_id}/preview":
    emailSecurityGetMessagePreview,
  "GET /accounts/{account_id}/email-security/investigate/{postfix_id}/raw":
    emailSecurityGetMessageRaw,
  "POST /accounts/{account_id}/email-security/investigate/{postfix_id}/reclassify":
    emailSecurityPostReclassify,
  "GET /accounts/{account_id}/email-security/investigate/{postfix_id}/trace":
    emailSecurityGetMessageTrace,
  "GET /accounts/{account_id}/email-security/phishguard/reports":
    emailSecurityGetPhishguardReports,
  "GET /accounts/{account_id}/email-security/settings/allow_policies":
    emailSecurityListAllowPolicies,
  "POST /accounts/{account_id}/email-security/settings/allow_policies":
    emailSecurityCreateAllowPolicy,
  "POST /accounts/{account_id}/email-security/settings/allow_policies/batch":
    emailSecurityBatchAllowPolicies,
  "DELETE /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}":
    emailSecurityDeleteAllowPolicy,
  "GET /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}":
    emailSecurityGetAllowPolicy,
  "PATCH /accounts/{account_id}/email-security/settings/allow_policies/{policy_id}":
    emailSecurityUpdateAllowPolicy,
  "GET /accounts/{account_id}/email-security/settings/block_senders":
    emailSecurityListBlockedSenders,
  "POST /accounts/{account_id}/email-security/settings/block_senders":
    emailSecurityCreateBlockedSender,
  "POST /accounts/{account_id}/email-security/settings/block_senders/batch":
    emailSecurityBatchBlockedSenders,
  "DELETE /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}":
    emailSecurityDeleteBlockedSender,
  "GET /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}":
    emailSecurityGetBlockedSender,
  "PATCH /accounts/{account_id}/email-security/settings/block_senders/{pattern_id}":
    emailSecurityUpdateBlockedSender,
  "DELETE /accounts/{account_id}/email-security/settings/domains":
    emailSecurityDeleteDomains,
  "GET /accounts/{account_id}/email-security/settings/domains":
    emailSecurityListDomains,
  "DELETE /accounts/{account_id}/email-security/settings/domains/{domain_id}":
    emailSecurityDeleteDomain,
  "GET /accounts/{account_id}/email-security/settings/domains/{domain_id}":
    emailSecurityGetDomain,
  "PATCH /accounts/{account_id}/email-security/settings/domains/{domain_id}":
    emailSecurityUpdateDomain,
  "GET /accounts/{account_id}/email-security/settings/impersonation_registry":
    emailSecurityListDisplayNames,
  "POST /accounts/{account_id}/email-security/settings/impersonation_registry":
    emailSecurityCreateDisplayName,
  "DELETE /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}":
    emailSecurityDeleteDisplayName,
  "GET /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}":
    emailSecurityGetDisplayName,
  "PATCH /accounts/{account_id}/email-security/settings/impersonation_registry/{display_name_id}":
    emailSecurityUpdateDisplayName,
  "POST /accounts/{account_id}/email-security/settings/sending_domain_restrictions/batch":
    emailSecurityBatchSendingDomainRestrictions,
  "GET /accounts/{account_id}/email-security/settings/trusted_domains":
    emailSecurityListTrustedDomains,
  "POST /accounts/{account_id}/email-security/settings/trusted_domains":
    emailSecurityCreateTrustedDomain,
  "POST /accounts/{account_id}/email-security/settings/trusted_domains/batch":
    emailSecurityBatchTrustedDomains,
  "DELETE /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}":
    emailSecurityDeleteTrustedDomain,
  "GET /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}":
    emailSecurityGetTrustedDomain,
  "PATCH /accounts/{account_id}/email-security/settings/trusted_domains/{trusted_domain_id}":
    emailSecurityUpdateTrustedDomain,
  "GET /accounts/{account_id}/email-security/submissions":
    emailSecuritySubmissions,
  "GET /accounts/{account_id}/email/routing/addresses":
    emailRoutingDestinationAddressesListDestinationAddresses,
  "POST /accounts/{account_id}/email/routing/addresses":
    emailRoutingDestinationAddressesCreateADestinationAddress,
  "DELETE /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}":
    emailRoutingDestinationAddressesDeleteDestinationAddress,
  "GET /accounts/{account_id}/email/routing/addresses/{destination_address_identifier}":
    emailRoutingDestinationAddressesGetADestinationAddress,
  "GET /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration":
    r2GetEventNotificationConfigs,
  "DELETE /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}":
    r2EventNotificationDeleteConfig,
  "GET /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}":
    r2GetEventNotificationConfig,
  "PUT /accounts/{account_id}/event_notifications/r2/{bucket_name}/configuration/queues/{queue_id}":
    r2PutEventNotificationConfig,
  "GET /accounts/{account_id}/event_subscriptions/subscriptions":
    subscriptionsList,
  "POST /accounts/{account_id}/event_subscriptions/subscriptions":
    subscriptionsCreate,
  "DELETE /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}":
    subscriptionsDelete,
  "GET /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}":
    subscriptionsGet,
  "PATCH /accounts/{account_id}/event_subscriptions/subscriptions/{subscription_id}":
    subscriptionsPatch,
  "GET /accounts/{account_id}/firewall/access_rules/rules":
    ipAccessRulesForAnAccountListIpAccessRules,
  "POST /accounts/{account_id}/firewall/access_rules/rules":
    ipAccessRulesForAnAccountCreateAnIpAccessRule,
  "DELETE /accounts/{account_id}/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAnAccountDeleteAnIpAccessRule,
  "GET /accounts/{account_id}/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAnAccountGetAnIpAccessRule,
  "PATCH /accounts/{account_id}/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAnAccountUpdateAnIpAccessRule,
  "GET /accounts/{account_id}/gateway":
    zeroTrustAccountsGetZeroTrustAccountInformation,
  "POST /accounts/{account_id}/gateway":
    zeroTrustAccountsCreateZeroTrustAccount,
  "GET /accounts/{account_id}/gateway/app_types":
    zeroTrustGatewayApplicationAndApplicationTypeMappingsListApplicationAndApplicationTypeMappings,
  "GET /accounts/{account_id}/gateway/apps/review_status":
    zeroTrustApplicationsReviewStatusList,
  "PUT /accounts/{account_id}/gateway/apps/review_status":
    zeroTrustApplicationsReviewStatusUpdate,
  "GET /accounts/{account_id}/gateway/audit_ssh_settings":
    zeroTrustGetAuditSshSettings,
  "PUT /accounts/{account_id}/gateway/audit_ssh_settings":
    zeroTrustUpdateAuditSshSettings,
  "POST /accounts/{account_id}/gateway/audit_ssh_settings/rotate_seed":
    zeroTrustRotateSshAccountSeed,
  "GET /accounts/{account_id}/gateway/categories":
    zeroTrustGatewayCategoriesListCategories,
  "GET /accounts/{account_id}/gateway/certificates":
    zeroTrustCertificatesListZeroTrustCertificates,
  "POST /accounts/{account_id}/gateway/certificates":
    zeroTrustCertificatesCreateZeroTrustCertificate,
  "DELETE /accounts/{account_id}/gateway/certificates/{certificate_id}":
    zeroTrustCertificatesDeleteZeroTrustCertificate,
  "GET /accounts/{account_id}/gateway/certificates/{certificate_id}":
    zeroTrustCertificatesZeroTrustCertificateDetails,
  "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/activate":
    zeroTrustCertificatesActivateZeroTrustCertificate,
  "POST /accounts/{account_id}/gateway/certificates/{certificate_id}/deactivate":
    zeroTrustCertificatesDeactivateZeroTrustCertificate,
  "GET /accounts/{account_id}/gateway/configuration":
    zeroTrustAccountsGetZeroTrustAccountConfiguration,
  "PATCH /accounts/{account_id}/gateway/configuration":
    zeroTrustAccountsPatchZeroTrustAccountConfiguration,
  "PUT /accounts/{account_id}/gateway/configuration":
    zeroTrustAccountsUpdateZeroTrustAccountConfiguration,
  "GET /accounts/{account_id}/gateway/configuration/custom_certificate":
    zeroTrustAccountsGetZeroTrustCertificateConfiguration,
  "GET /accounts/{account_id}/gateway/lists": zeroTrustListsListZeroTrustLists,
  "POST /accounts/{account_id}/gateway/lists":
    zeroTrustListsCreateZeroTrustList,
  "DELETE /accounts/{account_id}/gateway/lists/{list_id}":
    zeroTrustListsDeleteZeroTrustList,
  "GET /accounts/{account_id}/gateway/lists/{list_id}":
    zeroTrustListsZeroTrustListDetails,
  "PATCH /accounts/{account_id}/gateway/lists/{list_id}":
    zeroTrustListsPatchZeroTrustList,
  "PUT /accounts/{account_id}/gateway/lists/{list_id}":
    zeroTrustListsUpdateZeroTrustList,
  "GET /accounts/{account_id}/gateway/lists/{list_id}/items":
    zeroTrustListsZeroTrustListItems,
  "GET /accounts/{account_id}/gateway/locations":
    zeroTrustGatewayLocationsListZeroTrustGatewayLocations,
  "POST /accounts/{account_id}/gateway/locations":
    zeroTrustGatewayLocationsCreateZeroTrustGatewayLocation,
  "DELETE /accounts/{account_id}/gateway/locations/{location_id}":
    zeroTrustGatewayLocationsDeleteZeroTrustGatewayLocation,
  "GET /accounts/{account_id}/gateway/locations/{location_id}":
    zeroTrustGatewayLocationsZeroTrustGatewayLocationDetails,
  "PUT /accounts/{account_id}/gateway/locations/{location_id}":
    zeroTrustGatewayLocationsUpdateZeroTrustGatewayLocation,
  "GET /accounts/{account_id}/gateway/logging":
    zeroTrustAccountsGetLoggingSettingsForTheZeroTrustAccount,
  "PUT /accounts/{account_id}/gateway/logging":
    zeroTrustAccountsUpdateLoggingSettingsForTheZeroTrustAccount,
  "GET /accounts/{account_id}/gateway/pacfiles": zeroTrustGatewayPacfilesList,
  "POST /accounts/{account_id}/gateway/pacfiles":
    zeroTrustGatewayPacfilesCreatePacfile,
  "GET /accounts/{account_id}/gateway/proxy_endpoints":
    zeroTrustGatewayProxyEndpointsListProxyEndpoints,
  "POST /accounts/{account_id}/gateway/proxy_endpoints":
    zeroTrustGatewayProxyEndpointsCreateProxyEndpoint,
  "DELETE /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}":
    zeroTrustGatewayProxyEndpointsDeleteProxyEndpoint,
  "GET /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}":
    zeroTrustGatewayProxyEndpointsProxyEndpointDetails,
  "PATCH /accounts/{account_id}/gateway/proxy_endpoints/{proxy_endpoint_id}":
    zeroTrustGatewayProxyEndpointsUpdateProxyEndpoint,
  "GET /accounts/{account_id}/gateway/rules":
    zeroTrustGatewayRulesListZeroTrustGatewayRules,
  "POST /accounts/{account_id}/gateway/rules":
    zeroTrustGatewayRulesCreateZeroTrustGatewayRule,
  "GET /accounts/{account_id}/gateway/rules/tenant":
    zeroTrustGatewayRulesListZeroTrustGatewayRulesTenant,
  "DELETE /accounts/{account_id}/gateway/rules/{rule_id}":
    zeroTrustGatewayRulesDeleteZeroTrustGatewayRule,
  "GET /accounts/{account_id}/gateway/rules/{rule_id}":
    zeroTrustGatewayRulesZeroTrustGatewayRuleDetails,
  "PUT /accounts/{account_id}/gateway/rules/{rule_id}":
    zeroTrustGatewayRulesUpdateZeroTrustGatewayRule,
  "POST /accounts/{account_id}/gateway/rules/{rule_id}/reset_expiration":
    zeroTrustGatewayRulesResetExpirationZeroTrustGatewayRule,
  "GET /accounts/{account_id}/hyperdrive/configs": listHyperdrive,
  "POST /accounts/{account_id}/hyperdrive/configs": createHyperdrive,
  "DELETE /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}":
    deleteHyperdrive,
  "GET /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}":
    getHyperdrive,
  "PATCH /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}":
    patchHyperdrive,
  "PUT /accounts/{account_id}/hyperdrive/configs/{hyperdrive_id}":
    updateHyperdrive,
  "GET /accounts/{account_id}/iam/permission_groups":
    accountPermissionGroupList,
  "GET /accounts/{account_id}/iam/permission_groups/{permission_group_id}":
    accountPermissionGroupDetails,
  "GET /accounts/{account_id}/iam/resource_groups": accountResourceGroupList,
  "POST /accounts/{account_id}/iam/resource_groups": accountResourceGroupCreate,
  "DELETE /accounts/{account_id}/iam/resource_groups/{resource_group_id}":
    accountResourceGroupDelete,
  "GET /accounts/{account_id}/iam/resource_groups/{resource_group_id}":
    accountResourceGroupDetails,
  "PUT /accounts/{account_id}/iam/resource_groups/{resource_group_id}":
    accountResourceGroupUpdate,
  "GET /accounts/{account_id}/iam/user_groups": accountUserGroupList,
  "POST /accounts/{account_id}/iam/user_groups": accountUserGroupCreate,
  "DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}":
    accountUserGroupDelete,
  "GET /accounts/{account_id}/iam/user_groups/{user_group_id}":
    accountUserGroupDetails,
  "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}":
    accountUserGroupUpdate,
  "GET /accounts/{account_id}/iam/user_groups/{user_group_id}/members":
    accountUserGroupMemberList,
  "POST /accounts/{account_id}/iam/user_groups/{user_group_id}/members":
    accountUserGroupMemberCreate,
  "PUT /accounts/{account_id}/iam/user_groups/{user_group_id}/members":
    accountUserGroupMembersUpdate,
  "DELETE /accounts/{account_id}/iam/user_groups/{user_group_id}/members/{member_id}":
    accountUserGroupMemberDelete,
  "GET /accounts/{account_id}/images/v1": cloudflareImagesListImages,
  "POST /accounts/{account_id}/images/v1": cloudflareImagesUploadAnImageViaUrl,
  "GET /accounts/{account_id}/images/v1/keys":
    cloudflareImagesKeysListSigningKeys,
  "DELETE /accounts/{account_id}/images/v1/keys/{signing_key_name}":
    cloudflareImagesKeysDeleteSigningKey,
  "PUT /accounts/{account_id}/images/v1/keys/{signing_key_name}":
    cloudflareImagesKeysAddSigningKey,
  "GET /accounts/{account_id}/images/v1/stats":
    cloudflareImagesImagesUsageStatistics,
  "GET /accounts/{account_id}/images/v1/variants":
    cloudflareImagesVariantsListVariants,
  "POST /accounts/{account_id}/images/v1/variants":
    cloudflareImagesVariantsCreateAVariant,
  "DELETE /accounts/{account_id}/images/v1/variants/{variant_id}":
    cloudflareImagesVariantsDeleteAVariant,
  "GET /accounts/{account_id}/images/v1/variants/{variant_id}":
    cloudflareImagesVariantsVariantDetails,
  "PATCH /accounts/{account_id}/images/v1/variants/{variant_id}":
    cloudflareImagesVariantsUpdateAVariant,
  "DELETE /accounts/{account_id}/images/v1/{image_id}":
    cloudflareImagesDeleteImage,
  "GET /accounts/{account_id}/images/v1/{image_id}":
    cloudflareImagesImageDetails,
  "PATCH /accounts/{account_id}/images/v1/{image_id}":
    cloudflareImagesUpdateImage,
  "GET /accounts/{account_id}/images/v1/{image_id}/blob":
    cloudflareImagesBaseImage,
  "GET /accounts/{account_id}/images/v2": cloudflareImagesListImagesV2,
  "POST /accounts/{account_id}/images/v2/direct_upload":
    cloudflareImagesCreateAuthenticatedDirectUploadUrlV2,
  "GET /accounts/{account_id}/infrastructure/targets": infraTargetsList,
  "POST /accounts/{account_id}/infrastructure/targets": infraTargetsPost,
  "DELETE /accounts/{account_id}/infrastructure/targets/batch":
    infraTargetsDeleteBatch,
  "PUT /accounts/{account_id}/infrastructure/targets/batch":
    infraTargetsPutBatch,
  "POST /accounts/{account_id}/infrastructure/targets/batch_delete":
    infraTargetsDeleteBatchPost,
  "DELETE /accounts/{account_id}/infrastructure/targets/{target_id}":
    infraTargetsDelete,
  "GET /accounts/{account_id}/infrastructure/targets/{target_id}":
    infraTargetsGet,
  "PUT /accounts/{account_id}/infrastructure/targets/{target_id}":
    infraTargetsPut,
  "GET /accounts/{account_id}/intel/asn/{asn}": asnIntelligenceGetAsnOverview,
  "GET /accounts/{account_id}/intel/asn/{asn}/subnets":
    asnIntelligenceGetAsnSubnets,
  "GET /accounts/{account_id}/intel/attack-surface-report/issue-types":
    getSecurityCenterIssueTypes,
  "GET /accounts/{account_id}/intel/attack-surface-report/issues":
    getSecurityCenterIssues,
  "GET /accounts/{account_id}/intel/attack-surface-report/issues/class":
    getSecurityCenterIssueCountsByClass,
  "GET /accounts/{account_id}/intel/attack-surface-report/issues/severity":
    getSecurityCenterIssueCountsBySeverity,
  "GET /accounts/{account_id}/intel/attack-surface-report/issues/type":
    getSecurityCenterIssueCountsByType,
  "PUT /accounts/{account_id}/intel/attack-surface-report/{issue_id}/dismiss":
    archiveSecurityCenterInsightDeprecated,
  "GET /accounts/{account_id}/intel/dns": passiveDnsByIpGetPassiveDnsByIp,
  "GET /accounts/{account_id}/intel/domain": domainIntelligenceGetDomainDetails,
  "GET /accounts/{account_id}/intel/domain-history":
    domainHistoryGetDomainHistory,
  "GET /accounts/{account_id}/intel/domain/bulk":
    domainIntelligenceGetMultipleDomainDetails,
  "GET /accounts/{account_id}/intel/indicator-feeds":
    customIndicatorFeedsGetIndicatorFeeds,
  "POST /accounts/{account_id}/intel/indicator-feeds":
    customIndicatorFeedsCreateIndicatorFeeds,
  "PUT /accounts/{account_id}/intel/indicator-feeds/permissions/add":
    customIndicatorFeedsAddPermission,
  "PUT /accounts/{account_id}/intel/indicator-feeds/permissions/remove":
    customIndicatorFeedsRemovePermission,
  "GET /accounts/{account_id}/intel/indicator-feeds/permissions/view":
    customIndicatorFeedsViewPermissions,
  "GET /accounts/{account_id}/intel/indicator-feeds/{feed_id}":
    customIndicatorFeedsGetIndicatorFeedMetadata,
  "PUT /accounts/{account_id}/intel/indicator-feeds/{feed_id}":
    customIndicatorFeedsUpdateIndicatorFeedMetadata,
  "GET /accounts/{account_id}/intel/indicator-feeds/{feed_id}/data":
    customIndicatorFeedsGetIndicatorFeedData,
  "GET /accounts/{account_id}/intel/indicator-feeds/{feed_id}/download":
    customIndicatorFeedsDownloadIndicatorFeedData,
  "PUT /accounts/{account_id}/intel/indicator-feeds/{feed_id}/snapshot":
    customIndicatorFeedsUpdateIndicatorFeedData,
  "GET /accounts/{account_id}/intel/ip": ipIntelligenceGetIpOverview,
  "GET /accounts/{account_id}/intel/ip-list": ipListGetIpLists,
  "POST /accounts/{account_id}/intel/miscategorization":
    miscategorizationCreateMiscategorization,
  "GET /accounts/{account_id}/intel/sinkholes": sinkholeConfigGetSinkholes,
  "GET /accounts/{account_id}/intel/whois": whoisRecordGetWhoisRecord,
  "GET /accounts/{account_id}/load_balancers/monitor_groups":
    accountLoadBalancerMonitorGroupsListMonitorGroups,
  "POST /accounts/{account_id}/load_balancers/monitor_groups":
    accountLoadBalancerMonitorGroupsCreateMonitorGroup,
  "DELETE /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}":
    accountLoadBalancerMonitorGroupsDeleteMonitorGroup,
  "GET /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}":
    accountLoadBalancerMonitorGroupsMonitorGroupDetails,
  "PATCH /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}":
    accountLoadBalancerMonitorGroupsPatchMonitorGroup,
  "PUT /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}":
    accountLoadBalancerMonitorGroupsUpdateMonitorGroup,
  "GET /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}/references":
    accountLoadBalancerMonitorGroupsListMonitorGroupReferences,
  "GET /accounts/{account_id}/load_balancers/monitors":
    accountLoadBalancerMonitorsListMonitors,
  "POST /accounts/{account_id}/load_balancers/monitors":
    accountLoadBalancerMonitorsCreateMonitor,
  "DELETE /accounts/{account_id}/load_balancers/monitors/{monitor_id}":
    accountLoadBalancerMonitorsDeleteMonitor,
  "GET /accounts/{account_id}/load_balancers/monitors/{monitor_id}":
    accountLoadBalancerMonitorsMonitorDetails,
  "PATCH /accounts/{account_id}/load_balancers/monitors/{monitor_id}":
    accountLoadBalancerMonitorsPatchMonitor,
  "PUT /accounts/{account_id}/load_balancers/monitors/{monitor_id}":
    accountLoadBalancerMonitorsUpdateMonitor,
  "POST /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview":
    accountLoadBalancerMonitorsPreviewMonitor,
  "GET /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references":
    accountLoadBalancerMonitorsListMonitorReferences,
  "GET /accounts/{account_id}/load_balancers/pools":
    accountLoadBalancerPoolsListPools,
  "PATCH /accounts/{account_id}/load_balancers/pools":
    accountLoadBalancerPoolsPatchPools,
  "POST /accounts/{account_id}/load_balancers/pools":
    accountLoadBalancerPoolsCreatePool,
  "DELETE /accounts/{account_id}/load_balancers/pools/{pool_id}":
    accountLoadBalancerPoolsDeletePool,
  "GET /accounts/{account_id}/load_balancers/pools/{pool_id}":
    accountLoadBalancerPoolsPoolDetails,
  "PATCH /accounts/{account_id}/load_balancers/pools/{pool_id}":
    accountLoadBalancerPoolsPatchPool,
  "PUT /accounts/{account_id}/load_balancers/pools/{pool_id}":
    accountLoadBalancerPoolsUpdatePool,
  "GET /accounts/{account_id}/load_balancers/pools/{pool_id}/health":
    accountLoadBalancerPoolsPoolHealthDetails,
  "POST /accounts/{account_id}/load_balancers/pools/{pool_id}/preview":
    accountLoadBalancerPoolsPreviewPool,
  "GET /accounts/{account_id}/load_balancers/pools/{pool_id}/references":
    accountLoadBalancerPoolsListPoolReferences,
  "GET /accounts/{account_id}/load_balancers/preview/{preview_id}":
    accountLoadBalancerMonitorsPreviewResult,
  "GET /accounts/{account_id}/load_balancers/regions":
    loadBalancerRegionsListRegions,
  "GET /accounts/{account_id}/load_balancers/regions/{region_id}":
    loadBalancerRegionsGetRegion,
  "GET /accounts/{account_id}/load_balancers/search":
    accountLoadBalancerSearchSearchResources,
  "GET /accounts/{account_id}/logpush/datasets/{dataset_id}/fields":
    getAccountsAccountIdLogpushDatasetsDatasetIdFields,
  "GET /accounts/{account_id}/logpush/datasets/{dataset_id}/jobs":
    getAccountsAccountIdLogpushDatasetsDatasetIdJobs,
  "GET /accounts/{account_id}/logpush/jobs": getAccountsAccountIdLogpushJobs,
  "POST /accounts/{account_id}/logpush/jobs": postAccountsAccountIdLogpushJobs,
  "DELETE /accounts/{account_id}/logpush/jobs/{job_id}":
    deleteAccountsAccountIdLogpushJobsJobId,
  "GET /accounts/{account_id}/logpush/jobs/{job_id}":
    getAccountsAccountIdLogpushJobsJobId,
  "PUT /accounts/{account_id}/logpush/jobs/{job_id}":
    putAccountsAccountIdLogpushJobsJobId,
  "POST /accounts/{account_id}/logpush/ownership":
    postAccountsAccountIdLogpushOwnership,
  "POST /accounts/{account_id}/logpush/ownership/validate":
    postAccountsAccountIdLogpushOwnershipValidate,
  "POST /accounts/{account_id}/logpush/validate/destination":
    deleteAccountsAccountIdLogpushValidateDestination,
  "POST /accounts/{account_id}/logpush/validate/destination/exists":
    deleteAccountsAccountIdLogpushValidateDestinationExists,
  "POST /accounts/{account_id}/logpush/validate/origin":
    postAccountsAccountIdLogpushValidateOrigin,
  "GET /accounts/{account_id}/logs/audit": auditLogsV2GetAccountAuditLogs,
  "DELETE /accounts/{account_id}/logs/control/cmb/config":
    deleteAccountsAccountIdLogsControlCmbConfig,
  "GET /accounts/{account_id}/logs/control/cmb/config":
    getAccountsAccountIdLogsControlCmbConfig,
  "POST /accounts/{account_id}/logs/control/cmb/config":
    postAccountsAccountIdLogsControlCmbConfig,
  "DELETE /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules":
    deleteDnsProtectionRulesForAccount,
  "GET /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules":
    listDnsProtectionRulesForAccount,
  "POST /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules":
    createDnsProtectionRule,
  "DELETE /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}":
    deleteDnsProtectionRule,
  "GET /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}":
    getDnsProtectionRule,
  "PATCH /accounts/{account_id}/magic/advanced_dns_protection/configs/dns_protection/rules/{rule_id}":
    updateDnsProtectionRule,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist":
    deleteAllowlistPrefixesForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist":
    listAllowlistPrefixesForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist":
    createAllowlistedPrefix,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}":
    deleteAllowlistPrefix,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}":
    getAllowlistPrefix,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/allowlist/{prefix_id}":
    updateAllowlistPrefix,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes":
    deletePrefixesForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes":
    listPrefixesForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes":
    createPrefix,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/bulk":
    bulkCreatePrefixes,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}":
    deletePrefix,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}":
    getPrefix,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/prefixes/{prefix_id}":
    updatePrefix,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters":
    deleteSynProtectionFiltersForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters":
    listSynProtectionFiltersForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters":
    createSynProtectionFilter,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}":
    deleteSynProtectionFilter,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}":
    getSynProtectionFilter,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/filters/{filter_id}":
    updateSynProtectionFilter,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules":
    deleteSynProtectionRulesForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules":
    listSynProtectionRulesForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules":
    createSynProtectionRule,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}":
    deleteSynProtectionRule,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}":
    getSynProtectionRule,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/syn_protection/rules/{rule_id}":
    updateSynProtectionRule,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters":
    deleteTcpFlowProtectionFiltersForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters":
    listTcpFlowProtectionFiltersForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters":
    createTcpFlowProtectionFilter,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}":
    deleteTcpFlowProtectionFilter,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}":
    getTcpFlowProtectionFilter,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/filters/{filter_id}":
    updateTcpFlowProtectionFilter,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules":
    deleteTcpFlowProtectionRulesForAccount,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules":
    listTcpFlowProtectionRulesForAccount,
  "POST /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules":
    createTcpFlowProtectionRule,
  "DELETE /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}":
    deleteTcpFlowProtectionRule,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}":
    getTcpFlowProtectionRule,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_flow_protection/rules/{rule_id}":
    updateTcpFlowProtectionRule,
  "GET /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status":
    getProtectionStatus,
  "PATCH /accounts/{account_id}/magic/advanced_tcp_protection/configs/tcp_protection_status":
    updateProtectionStatus,
  "GET /accounts/{account_id}/magic/apps": magicAccountAppsListApps,
  "POST /accounts/{account_id}/magic/apps": magicAccountAppsAddApp,
  "DELETE /accounts/{account_id}/magic/apps/{account_app_id}":
    magicAccountAppsDeleteApp,
  "PATCH /accounts/{account_id}/magic/apps/{account_app_id}":
    magicAccountAppsPatchApp,
  "PUT /accounts/{account_id}/magic/apps/{account_app_id}":
    magicAccountAppsUpdateApp,
  "GET /accounts/{account_id}/magic/cf_interconnects":
    magicInterconnectsListInterconnects,
  "PUT /accounts/{account_id}/magic/cf_interconnects":
    magicInterconnectsUpdateMultipleInterconnects,
  "GET /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}":
    magicInterconnectsListInterconnectDetails,
  "PUT /accounts/{account_id}/magic/cf_interconnects/{cf_interconnect_id}":
    magicInterconnectsUpdateInterconnect,
  "GET /accounts/{account_id}/magic/cloud/catalog-syncs": catalogSyncsList,
  "POST /accounts/{account_id}/magic/cloud/catalog-syncs": catalogSyncsCreate,
  "GET /accounts/{account_id}/magic/cloud/catalog-syncs/prebuilt-policies":
    catalogSyncsPrebuiltPoliciesList,
  "DELETE /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}":
    catalogSyncsDelete,
  "GET /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}":
    catalogSyncsRead,
  "PATCH /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}":
    catalogSyncsPatch,
  "PUT /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}":
    catalogSyncsUpdate,
  "POST /accounts/{account_id}/magic/cloud/catalog-syncs/{sync_id}/refresh":
    catalogSyncsRefresh,
  "GET /accounts/{account_id}/magic/cloud/onramps": onrampsList,
  "POST /accounts/{account_id}/magic/cloud/onramps": onrampsCreate,
  "GET /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space":
    onrampsMwanAddrSpaceRead,
  "PATCH /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space":
    onrampsMwanAddrSpacePatch,
  "PUT /accounts/{account_id}/magic/cloud/onramps/magic_wan_address_space":
    onrampsMwanAddrSpaceUpdate,
  "DELETE /accounts/{account_id}/magic/cloud/onramps/{onramp_id}":
    onrampsDelete,
  "GET /accounts/{account_id}/magic/cloud/onramps/{onramp_id}": onrampsRead,
  "PATCH /accounts/{account_id}/magic/cloud/onramps/{onramp_id}": onrampsPatch,
  "PUT /accounts/{account_id}/magic/cloud/onramps/{onramp_id}": onrampsUpdate,
  "POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/apply":
    onrampsApply,
  "POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/export":
    onrampsExport,
  "POST /accounts/{account_id}/magic/cloud/onramps/{onramp_id}/plan":
    onrampsPlan,
  "GET /accounts/{account_id}/magic/cloud/providers": providersList,
  "POST /accounts/{account_id}/magic/cloud/providers": providersCreate,
  "POST /accounts/{account_id}/magic/cloud/providers/discover":
    providersDiscoverAll,
  "DELETE /accounts/{account_id}/magic/cloud/providers/{provider_id}":
    providersDelete,
  "GET /accounts/{account_id}/magic/cloud/providers/{provider_id}":
    providersRead,
  "PATCH /accounts/{account_id}/magic/cloud/providers/{provider_id}":
    providersPatch,
  "PUT /accounts/{account_id}/magic/cloud/providers/{provider_id}":
    providersUpdate,
  "POST /accounts/{account_id}/magic/cloud/providers/{provider_id}/discover":
    providersDiscover,
  "GET /accounts/{account_id}/magic/cloud/providers/{provider_id}/initial_setup":
    providersInitialSetup,
  "GET /accounts/{account_id}/magic/cloud/resources": resourcesCatalogList,
  "GET /accounts/{account_id}/magic/cloud/resources/export":
    resourcesCatalogExport,
  "POST /accounts/{account_id}/magic/cloud/resources/policy-preview":
    resourcesCatalogPolicyPreview,
  "GET /accounts/{account_id}/magic/cloud/resources/{resource_id}":
    resourcesCatalogRead,
  "GET /accounts/{account_id}/magic/connectors": mconnConnectorList,
  "POST /accounts/{account_id}/magic/connectors": mconnConnectorCreate,
  "DELETE /accounts/{account_id}/magic/connectors/{connector_id}":
    mconnConnectorDelete,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}":
    mconnConnectorFetch,
  "PATCH /accounts/{account_id}/magic/connectors/{connector_id}":
    mconnConnectorUpdate,
  "PUT /accounts/{account_id}/magic/connectors/{connector_id}":
    mconnConnectorReplace,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events":
    mconnConnectorTelemetryEventsList,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/latest":
    mconnConnectorTelemetryEventsListLatest,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/events/{event_t}.{event_n}":
    mconnConnectorTelemetryEventsGet,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots":
    mconnConnectorTelemetrySnapshotsList,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/latest":
    mconnConnectorTelemetrySnapshotsListLatest,
  "GET /accounts/{account_id}/magic/connectors/{connector_id}/telemetry/snapshots/{snapshot_t}":
    mconnConnectorTelemetrySnapshotsGet,
  "GET /accounts/{account_id}/magic/gre_tunnels": magicGreTunnelsListGreTunnels,
  "POST /accounts/{account_id}/magic/gre_tunnels":
    magicGreTunnelsCreateGreTunnels,
  "PUT /accounts/{account_id}/magic/gre_tunnels":
    magicGreTunnelsUpdateMultipleGreTunnels,
  "DELETE /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}":
    magicGreTunnelsDeleteGreTunnel,
  "GET /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}":
    magicGreTunnelsListGreTunnelDetails,
  "PUT /accounts/{account_id}/magic/gre_tunnels/{gre_tunnel_id}":
    magicGreTunnelsUpdateGreTunnel,
  "GET /accounts/{account_id}/magic/ipsec_tunnels":
    magicIpsecTunnelsListIpsecTunnels,
  "POST /accounts/{account_id}/magic/ipsec_tunnels":
    magicIpsecTunnelsCreateIpsecTunnels,
  "PUT /accounts/{account_id}/magic/ipsec_tunnels":
    magicIpsecTunnelsUpdateMultipleIpsecTunnels,
  "DELETE /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}":
    magicIpsecTunnelsDeleteIpsecTunnel,
  "GET /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}":
    magicIpsecTunnelsListIpsecTunnelDetails,
  "PUT /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}":
    magicIpsecTunnelsUpdateIpsecTunnel,
  "POST /accounts/{account_id}/magic/ipsec_tunnels/{ipsec_tunnel_id}/psk_generate":
    magicIpsecTunnelsGeneratePreSharedKeyPskForIpsecTunnels,
  "DELETE /accounts/{account_id}/magic/routes":
    magicStaticRoutesDeleteManyRoutes,
  "GET /accounts/{account_id}/magic/routes": magicStaticRoutesListRoutes,
  "POST /accounts/{account_id}/magic/routes": magicStaticRoutesCreateRoutes,
  "PUT /accounts/{account_id}/magic/routes": magicStaticRoutesUpdateManyRoutes,
  "DELETE /accounts/{account_id}/magic/routes/{route_id}":
    magicStaticRoutesDeleteRoute,
  "GET /accounts/{account_id}/magic/routes/{route_id}":
    magicStaticRoutesRouteDetails,
  "PUT /accounts/{account_id}/magic/routes/{route_id}":
    magicStaticRoutesUpdateRoute,
  "GET /accounts/{account_id}/magic/sites": magicSitesListSites,
  "POST /accounts/{account_id}/magic/sites": magicSitesCreateSite,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}": magicSitesDeleteSite,
  "GET /accounts/{account_id}/magic/sites/{site_id}": magicSitesSiteDetails,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}": magicSitesPatchSite,
  "PUT /accounts/{account_id}/magic/sites/{site_id}": magicSitesUpdateSite,
  "GET /accounts/{account_id}/magic/sites/{site_id}/acls":
    magicSiteAclsListAcls,
  "POST /accounts/{account_id}/magic/sites/{site_id}/acls":
    magicSiteAclsCreateAcl,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}":
    magicSiteAclsDeleteAcl,
  "GET /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}":
    magicSiteAclsAclDetails,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}":
    magicSiteAclsPatchAcl,
  "PUT /accounts/{account_id}/magic/sites/{site_id}/acls/{acl_id}":
    magicSiteAclsUpdateAcl,
  "GET /accounts/{account_id}/magic/sites/{site_id}/app_configs":
    magicSiteAppConfigsListAppConfigs,
  "POST /accounts/{account_id}/magic/sites/{site_id}/app_configs":
    magicSiteAppConfigsAddAppConfig,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}/app_configs/{app_config_id}":
    magicSiteAppConfigsDeleteAppConfig,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}/app_configs/{app_config_id}":
    magicSiteAppConfigsPatchAppConfig,
  "PUT /accounts/{account_id}/magic/sites/{site_id}/app_configs/{app_config_id}":
    magicSiteAppConfigsUpdateAppConfig,
  "GET /accounts/{account_id}/magic/sites/{site_id}/lans":
    magicSiteLansListLans,
  "POST /accounts/{account_id}/magic/sites/{site_id}/lans":
    magicSiteLansCreateLan,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}":
    magicSiteLansDeleteLan,
  "GET /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}":
    magicSiteLansLanDetails,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}":
    magicSiteLansPatchLan,
  "PUT /accounts/{account_id}/magic/sites/{site_id}/lans/{lan_id}":
    magicSiteLansUpdateLan,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}/netflow_config":
    magicSiteNetflowConfigDeleteNetflowConfig,
  "GET /accounts/{account_id}/magic/sites/{site_id}/netflow_config":
    magicSiteNetflowConfigDetails,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}/netflow_config":
    magicSiteNetflowConfigPatchNetflowConfig,
  "POST /accounts/{account_id}/magic/sites/{site_id}/netflow_config":
    magicSiteNetflowConfigCreateNetflowConfig,
  "PUT /accounts/{account_id}/magic/sites/{site_id}/netflow_config":
    magicSiteNetflowConfigUpdateNetflowConfig,
  "GET /accounts/{account_id}/magic/sites/{site_id}/wans":
    magicSiteWansListWans,
  "POST /accounts/{account_id}/magic/sites/{site_id}/wans":
    magicSiteWansCreateWan,
  "DELETE /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}":
    magicSiteWansDeleteWan,
  "GET /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}":
    magicSiteWansWanDetails,
  "PATCH /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}":
    magicSiteWansPatchWan,
  "PUT /accounts/{account_id}/magic/sites/{site_id}/wans/{wan_id}":
    magicSiteWansUpdateWan,
  "GET /accounts/{account_id}/members": accountMembersListMembers,
  "POST /accounts/{account_id}/members": accountMembersAddMember,
  "DELETE /accounts/{account_id}/members/{member_id}":
    accountMembersRemoveMember,
  "GET /accounts/{account_id}/members/{member_id}": accountMembersMemberDetails,
  "PUT /accounts/{account_id}/members/{member_id}": accountMembersUpdateMember,
  "DELETE /accounts/{account_id}/mnm/config":
    magicNetworkMonitoringConfigurationDeleteAccountConfiguration,
  "GET /accounts/{account_id}/mnm/config":
    magicNetworkMonitoringConfigurationListAccountConfiguration,
  "PATCH /accounts/{account_id}/mnm/config":
    magicNetworkMonitoringConfigurationUpdateAccountConfigurationFields,
  "POST /accounts/{account_id}/mnm/config":
    magicNetworkMonitoringConfigurationCreateAccountConfiguration,
  "PUT /accounts/{account_id}/mnm/config":
    magicNetworkMonitoringConfigurationUpdateAnEntireAccountConfiguration,
  "GET /accounts/{account_id}/mnm/config/full":
    magicNetworkMonitoringConfigurationListRulesAndAccountConfiguration,
  "GET /accounts/{account_id}/mnm/rules": magicNetworkMonitoringRulesListRules,
  "POST /accounts/{account_id}/mnm/rules":
    magicNetworkMonitoringRulesCreateRules,
  "PUT /accounts/{account_id}/mnm/rules":
    magicNetworkMonitoringRulesUpdateRules,
  "DELETE /accounts/{account_id}/mnm/rules/{rule_id}":
    magicNetworkMonitoringRulesDeleteRule,
  "GET /accounts/{account_id}/mnm/rules/{rule_id}":
    magicNetworkMonitoringRulesGetRule,
  "PATCH /accounts/{account_id}/mnm/rules/{rule_id}":
    magicNetworkMonitoringRulesUpdateRule,
  "PATCH /accounts/{account_id}/mnm/rules/{rule_id}/advertisement":
    magicNetworkMonitoringRulesUpdateAdvertisementForRule,
  "POST /accounts/{account_id}/mnm/vpc-flows/token":
    magicNetworkMonitoringVpcFlowsGenerateAuthenticationToken,
  "POST /accounts/{account_id}/move": accountsMoveAccounts,
  "GET /accounts/{account_id}/mtls_certificates":
    mTlsCertificateManagementListMTlsCertificates,
  "POST /accounts/{account_id}/mtls_certificates":
    mTlsCertificateManagementUploadMTlsCertificate,
  "DELETE /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}":
    mTlsCertificateManagementDeleteMTlsCertificate,
  "GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}":
    mTlsCertificateManagementGetMTlsCertificate,
  "GET /accounts/{account_id}/mtls_certificates/{mtls_certificate_id}/associations":
    mTlsCertificateManagementListMTlsCertificateAssociations,
  "GET /accounts/{account_id}/organizations": accountsListAccountOrganizations,
  "GET /accounts/{account_id}/pages/projects": pagesProjectGetProjects,
  "POST /accounts/{account_id}/pages/projects": pagesProjectCreateProject,
  "DELETE /accounts/{account_id}/pages/projects/{project_name}":
    pagesProjectDeleteProject,
  "GET /accounts/{account_id}/pages/projects/{project_name}":
    pagesProjectGetProject,
  "PATCH /accounts/{account_id}/pages/projects/{project_name}":
    pagesProjectUpdateProject,
  "GET /accounts/{account_id}/pages/projects/{project_name}/deployments":
    pagesDeploymentGetDeployments,
  "POST /accounts/{account_id}/pages/projects/{project_name}/deployments":
    pagesDeploymentCreateDeployment,
  "DELETE /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}":
    pagesDeploymentDeleteDeployment,
  "GET /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}":
    pagesDeploymentGetDeploymentInfo,
  "GET /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/history/logs":
    pagesDeploymentGetDeploymentLogs,
  "POST /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/retry":
    pagesDeploymentRetryDeployment,
  "POST /accounts/{account_id}/pages/projects/{project_name}/deployments/{deployment_id}/rollback":
    pagesDeploymentRollbackDeployment,
  "GET /accounts/{account_id}/pages/projects/{project_name}/domains":
    pagesDomainsGetDomains,
  "POST /accounts/{account_id}/pages/projects/{project_name}/domains":
    pagesDomainsAddDomain,
  "DELETE /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}":
    pagesDomainsDeleteDomain,
  "GET /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}":
    pagesDomainsGetDomain,
  "PATCH /accounts/{account_id}/pages/projects/{project_name}/domains/{domain_name}":
    pagesDomainsPatchDomain,
  "POST /accounts/{account_id}/pages/projects/{project_name}/purge_build_cache":
    pagesPurgeBuildCache,
  "DELETE /accounts/{account_id}/pay-per-crawl/crawler/stripe":
    payPerCrawlCrawlerDeleteStripeConfig,
  "GET /accounts/{account_id}/pay-per-crawl/crawler/stripe":
    payPerCrawlCrawlerGetStripeConfig,
  "POST /accounts/{account_id}/pay-per-crawl/crawler/stripe":
    payPerCrawlCrawlerCreateStripeConfig,
  "DELETE /accounts/{account_id}/pay-per-crawl/publisher/stripe":
    payPerCrawlPublisherDeleteStripeConfig,
  "GET /accounts/{account_id}/pay-per-crawl/publisher/stripe":
    payPerCrawlPublisherGetStripeConfig,
  "POST /accounts/{account_id}/pay-per-crawl/publisher/stripe":
    payPerCrawlPublisherCreateStripeConfig,
  "PATCH /accounts/{account_id}/pay-per-crawl/zones_can_be_enabled":
    payPerCrawlSetZonesCanBeEnabled,
  "POST /accounts/{account_id}/pay-per-crawl/zones_can_be_enabled/query":
    payPerCrawlQueryZonesCanBeEnabled,
  "GET /accounts/{account_id}/pcaps":
    magicPcapCollectionListPacketCaptureRequests,
  "POST /accounts/{account_id}/pcaps": magicPcapCollectionCreatePcapRequest,
  "GET /accounts/{account_id}/pcaps/ownership":
    magicPcapCollectionListPcaPsBucketOwnership,
  "POST /accounts/{account_id}/pcaps/ownership":
    magicPcapCollectionAddBucketsForFullPacketCaptures,
  "POST /accounts/{account_id}/pcaps/ownership/validate":
    magicPcapCollectionValidateBucketsForFullPacketCaptures,
  "DELETE /accounts/{account_id}/pcaps/ownership/{ownership_id}":
    magicPcapCollectionDeleteBucketsForFullPacketCaptures,
  "GET /accounts/{account_id}/pcaps/{pcap_id}":
    magicPcapCollectionGetPcapRequest,
  "GET /accounts/{account_id}/pcaps/{pcap_id}/download":
    magicPcapCollectionDownloadSimplePcap,
  "PUT /accounts/{account_id}/pcaps/{pcap_id}/stop":
    magicPcapCollectionStopFullPcap,
  "GET /accounts/{account_id}/pipelines":
    getV4AccountsByAccountIdPipelinesDeprecated,
  "POST /accounts/{account_id}/pipelines":
    postV4AccountsByAccountIdPipelinesDeprecated,
  "GET /accounts/{account_id}/pipelines/v1/pipelines":
    getV4AccountsByAccountIdPipelinesV1Pipelines,
  "POST /accounts/{account_id}/pipelines/v1/pipelines":
    postV4AccountsByAccountIdPipelinesV1Pipelines,
  "DELETE /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}":
    deleteV4AccountsByAccountIdPipelinesV1PipelinesByPipelineId,
  "GET /accounts/{account_id}/pipelines/v1/pipelines/{pipeline_id}":
    getV4AccountsByAccountIdPipelinesV1PipelinesByPipelineId,
  "GET /accounts/{account_id}/pipelines/v1/sinks":
    getV4AccountsByAccountIdPipelinesV1Sinks,
  "POST /accounts/{account_id}/pipelines/v1/sinks":
    postV4AccountsByAccountIdPipelinesV1Sinks,
  "DELETE /accounts/{account_id}/pipelines/v1/sinks/{sink_id}":
    deleteV4AccountsByAccountIdPipelinesV1SinksBySinkId,
  "GET /accounts/{account_id}/pipelines/v1/sinks/{sink_id}":
    getV4AccountsByAccountIdPipelinesV1SinksBySinkId,
  "GET /accounts/{account_id}/pipelines/v1/streams":
    getV4AccountsByAccountIdPipelinesV1Streams,
  "POST /accounts/{account_id}/pipelines/v1/streams":
    postV4AccountsByAccountIdPipelinesV1Streams,
  "DELETE /accounts/{account_id}/pipelines/v1/streams/{stream_id}":
    deleteV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  "GET /accounts/{account_id}/pipelines/v1/streams/{stream_id}":
    getV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  "PATCH /accounts/{account_id}/pipelines/v1/streams/{stream_id}":
    patchV4AccountsByAccountIdPipelinesV1StreamsByStreamId,
  "POST /accounts/{account_id}/pipelines/v1/validate_sql":
    postV4AccountsByAccountIdPipelinesV1ValidateSql,
  "DELETE /accounts/{account_id}/pipelines/{pipeline_name}":
    deleteV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  "GET /accounts/{account_id}/pipelines/{pipeline_name}":
    getV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  "PUT /accounts/{account_id}/pipelines/{pipeline_name}":
    putV4AccountsByAccountIdPipelinesByPipelineNameDeprecated,
  "GET /accounts/{account_id}/profile": accountsGetAccountProfile,
  "PUT /accounts/{account_id}/profile": accountsModifyAccountProfile,
  "GET /accounts/{account_id}/queues": queuesList,
  "POST /accounts/{account_id}/queues": queuesCreate,
  "DELETE /accounts/{account_id}/queues/{queue_id}": queuesDelete,
  "GET /accounts/{account_id}/queues/{queue_id}": queuesGet,
  "PATCH /accounts/{account_id}/queues/{queue_id}": queuesUpdatePartial,
  "PUT /accounts/{account_id}/queues/{queue_id}": queuesUpdate,
  "GET /accounts/{account_id}/queues/{queue_id}/consumers": queuesListConsumers,
  "POST /accounts/{account_id}/queues/{queue_id}/consumers":
    queuesCreateConsumer,
  "DELETE /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}":
    queuesDeleteConsumer,
  "GET /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}":
    queuesGetConsumer,
  "PUT /accounts/{account_id}/queues/{queue_id}/consumers/{consumer_id}":
    queuesUpdateConsumer,
  "POST /accounts/{account_id}/queues/{queue_id}/messages": queuesPushMessage,
  "POST /accounts/{account_id}/queues/{queue_id}/messages/ack":
    queuesAckMessages,
  "POST /accounts/{account_id}/queues/{queue_id}/messages/batch":
    queuesPushMessages,
  "POST /accounts/{account_id}/queues/{queue_id}/messages/pull":
    queuesPullMessages,
  "GET /accounts/{account_id}/queues/{queue_id}/purge": queuesPurgeGet,
  "POST /accounts/{account_id}/queues/{queue_id}/purge": queuesPurge,
  "GET /accounts/{account_id}/r2-catalog": listCatalogs,
  "GET /accounts/{account_id}/r2-catalog/{bucket_name}": getCatalogDetails,
  "POST /accounts/{account_id}/r2-catalog/{bucket_name}/credential":
    storeCredentials,
  "POST /accounts/{account_id}/r2-catalog/{bucket_name}/disable":
    disableCatalog,
  "POST /accounts/{account_id}/r2-catalog/{bucket_name}/enable": enableCatalog,
  "GET /accounts/{account_id}/r2-catalog/{bucket_name}/maintenance-configs":
    getMaintenanceConfig,
  "POST /accounts/{account_id}/r2-catalog/{bucket_name}/maintenance-configs":
    updateMaintenanceConfig,
  "GET /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces":
    listNamespaces,
  "GET /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables":
    listTables,
  "GET /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs":
    getTableMaintenanceConfig,
  "POST /accounts/{account_id}/r2-catalog/{bucket_name}/namespaces/{namespace}/tables/{table_name}/maintenance-configs":
    updateTableMaintenanceConfig,
  "GET /accounts/{account_id}/r2/buckets": r2ListBuckets,
  "POST /accounts/{account_id}/r2/buckets": r2CreateBucket,
  "DELETE /accounts/{account_id}/r2/buckets/{bucket_name}": r2DeleteBucket,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}": r2GetBucket,
  "PATCH /accounts/{account_id}/r2/buckets/{bucket_name}": r2PatchBucket,
  "DELETE /accounts/{account_id}/r2/buckets/{bucket_name}/cors":
    r2DeleteBucketCorsPolicy,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/cors":
    r2GetBucketCorsPolicy,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/cors":
    r2PutBucketCorsPolicy,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom":
    r2ListCustomDomains,
  "POST /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom":
    r2AddCustomDomain,
  "DELETE /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}":
    r2DeleteCustomDomain,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}":
    r2GetCustomDomainSettings,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/domains/custom/{domain}":
    r2EditCustomDomainSettings,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed":
    r2GetBucketPublicPolicy,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/domains/managed":
    r2PutBucketPublicPolicy,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle":
    r2GetBucketLifecycleConfiguration,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/lifecycle":
    r2PutBucketLifecycleConfiguration,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/lock":
    r2GetBucketLockConfiguration,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/lock":
    r2PutBucketLockConfiguration,
  "DELETE /accounts/{account_id}/r2/buckets/{bucket_name}/sippy":
    r2DeleteBucketSippyConfig,
  "GET /accounts/{account_id}/r2/buckets/{bucket_name}/sippy":
    r2GetBucketSippyConfig,
  "PUT /accounts/{account_id}/r2/buckets/{bucket_name}/sippy":
    r2PutBucketSippyConfig,
  "GET /accounts/{account_id}/r2/metrics": r2GetAccountLevelMetrics,
  "POST /accounts/{account_id}/r2/temp-access-credentials":
    r2CreateTempAccessCredentials,
  "GET /accounts/{account_id}/realtime/kit/apps": getApps,
  "POST /accounts/{account_id}/realtime/kit/apps": createApp,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/analytics/daywise":
    getOrgAnalytics,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/analytics/livestreams/overall":
    getLivestreamAnalyticsComplete,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams":
    fetchAllLivestreams,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/livestreams":
    postAccountsAccountIdRealtimeKitAppIdLivestreams,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/sessions/{livestream-session-id}":
    getV2LivestreamsLivestreamSessionId,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}":
    getV2LivestreamSessionLivestreamId,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/livestreams/{livestream_id}/active-livestream-session":
    getV2ActiveLivestreamSessionDetails,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings": getAllMeetings,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings": createMeeting,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}":
    getMeeting,
  "PATCH /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}":
    updateMeeting,
  "PUT /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}":
    replaceMeeting,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream":
    getV2MeetingsMeetingIdActiveLivestream,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-livestream/stop":
    stopLivestreaming,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session":
    getActiveSession,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick":
    kickPartcipants,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/kick-all":
    kickAllParticipants,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/mute":
    muteParticipants,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/mute-all":
    muteAllParticipants,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/active-session/poll":
    createPoll,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestream":
    livestreamSessionDetails,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/livestreams":
    startLivestreaming,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants":
    getMeetingParticipants,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants":
    addParticipant,
  "DELETE /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}":
    deleteMeetingParticipant,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}":
    getMeetingParticipant,
  "PATCH /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}":
    editParticipant,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/meetings/{meeting_id}/participants/{participant_id}/token":
    regenerateToken,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/presets": getPresets,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/presets": postPresets,
  "DELETE /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}":
    deletePresetsPresetId,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}":
    getPresetsPresetId,
  "PATCH /accounts/{account_id}/realtime/kit/{app_id}/presets/{preset_id}":
    patchPresetsPresetId,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/recordings":
    getAllRecordings,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/recordings":
    startRecording,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/recordings/active-recording/{meeting_id}":
    getActiveRecording,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/recordings/track":
    startTrackRecordingForAMeeting,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}":
    getOneRecording,
  "PUT /accounts/{account_id}/realtime/kit/{app_id}/recordings/{recording_id}":
    pauseResumeStopRecording,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions": getSessions,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/peer-report/{peer_id}":
    getParticipantDataFromPeerId,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}":
    getSessionDetails,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/chat":
    getSessionChat,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/livestream-sessions":
    getV2LivestreamsessionSessionMeetingIdActiveLivestream,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants":
    getSessionParticipants,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/participants/{participant_id}":
    getParticipantDetails,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary":
    getSessionSummary,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/summary":
    postSessionsSessionIdSummary,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/sessions/{session_id}/transcript":
    getSessionTranscript,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/webhooks": getAllWebhooks,
  "POST /accounts/{account_id}/realtime/kit/{app_id}/webhooks": addWebhook,
  "DELETE /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}":
    deleteWebhook,
  "GET /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}":
    getWebhook,
  "PATCH /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}":
    editWebhook,
  "PUT /accounts/{account_id}/realtime/kit/{app_id}/webhooks/{webhook_id}":
    replaceWebhook,
  "GET /accounts/{account_id}/registrar/domains": registrarDomainsListDomains,
  "GET /accounts/{account_id}/registrar/domains/{domain_name}":
    registrarDomainsGetDomain,
  "PUT /accounts/{account_id}/registrar/domains/{domain_name}":
    registrarDomainsUpdateDomain,
  "POST /accounts/{account_id}/request-tracer/trace":
    accountRequestTracerRequestTrace,
  "GET /accounts/{account_id}/roles": accountRolesListRoles,
  "GET /accounts/{account_id}/roles/{role_id}": accountRolesRoleDetails,
  "GET /accounts/{account_id}/rules/lists": listsGetLists,
  "POST /accounts/{account_id}/rules/lists": listsCreateAList,
  "GET /accounts/{account_id}/rules/lists/bulk_operations/{operation_id}":
    listsGetBulkOperationStatus,
  "DELETE /accounts/{account_id}/rules/lists/{list_id}": listsDeleteAList,
  "GET /accounts/{account_id}/rules/lists/{list_id}": listsGetAList,
  "PUT /accounts/{account_id}/rules/lists/{list_id}": listsUpdateAList,
  "DELETE /accounts/{account_id}/rules/lists/{list_id}/items":
    listsDeleteListItems,
  "GET /accounts/{account_id}/rules/lists/{list_id}/items": listsGetListItems,
  "POST /accounts/{account_id}/rules/lists/{list_id}/items":
    listsCreateListItems,
  "PUT /accounts/{account_id}/rules/lists/{list_id}/items":
    listsUpdateAllListItems,
  "GET /accounts/{account_id}/rules/lists/{list_id}/items/{item_id}":
    listsGetAListItem,
  "GET /accounts/{account_id}/rulesets": listAccountRulesets,
  "POST /accounts/{account_id}/rulesets": createAccountRuleset,
  "GET /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint":
    getAccountEntrypointRuleset,
  "PUT /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint":
    updateAccountEntrypointRuleset,
  "GET /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions":
    listAccountEntrypointRulesetVersions,
  "GET /accounts/{account_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}":
    getAccountEntrypointRulesetVersion,
  "DELETE /accounts/{account_id}/rulesets/{ruleset_id}": deleteAccountRuleset,
  "GET /accounts/{account_id}/rulesets/{ruleset_id}": getAccountRuleset,
  "PUT /accounts/{account_id}/rulesets/{ruleset_id}": updateAccountRuleset,
  "POST /accounts/{account_id}/rulesets/{ruleset_id}/rules":
    createAccountRulesetRule,
  "DELETE /accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}":
    deleteAccountRulesetRule,
  "PATCH /accounts/{account_id}/rulesets/{ruleset_id}/rules/{rule_id}":
    updateAccountRulesetRule,
  "GET /accounts/{account_id}/rulesets/{ruleset_id}/versions":
    listAccountRulesetVersions,
  "DELETE /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}":
    deleteAccountRulesetVersion,
  "GET /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}":
    getAccountRulesetVersion,
  "GET /accounts/{account_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}":
    listAccountRulesetVersionRulesByTag,
  "POST /accounts/{account_id}/rum/site_info": webAnalyticsCreateSite,
  "GET /accounts/{account_id}/rum/site_info/list": webAnalyticsListSites,
  "DELETE /accounts/{account_id}/rum/site_info/{site_id}":
    webAnalyticsDeleteSite,
  "GET /accounts/{account_id}/rum/site_info/{site_id}": webAnalyticsGetSite,
  "PUT /accounts/{account_id}/rum/site_info/{site_id}": webAnalyticsUpdateSite,
  "POST /accounts/{account_id}/rum/v2/{ruleset_id}/rule":
    webAnalyticsCreateRule,
  "DELETE /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}":
    webAnalyticsDeleteRule,
  "PUT /accounts/{account_id}/rum/v2/{ruleset_id}/rule/{rule_id}":
    webAnalyticsUpdateRule,
  "GET /accounts/{account_id}/rum/v2/{ruleset_id}/rules": webAnalyticsListRules,
  "POST /accounts/{account_id}/rum/v2/{ruleset_id}/rules":
    webAnalyticsModifyRules,
  "GET /accounts/{account_id}/secondary_dns/acls": secondaryDnsAclListAcLs,
  "POST /accounts/{account_id}/secondary_dns/acls": secondaryDnsAclCreateAcl,
  "DELETE /accounts/{account_id}/secondary_dns/acls/{acl_id}":
    secondaryDnsAclDeleteAcl,
  "GET /accounts/{account_id}/secondary_dns/acls/{acl_id}":
    secondaryDnsAclAclDetails,
  "PUT /accounts/{account_id}/secondary_dns/acls/{acl_id}":
    secondaryDnsAclUpdateAcl,
  "GET /accounts/{account_id}/secondary_dns/peers": secondaryDnsPeerListPeers,
  "POST /accounts/{account_id}/secondary_dns/peers": secondaryDnsPeerCreatePeer,
  "DELETE /accounts/{account_id}/secondary_dns/peers/{peer_id}":
    secondaryDnsPeerDeletePeer,
  "GET /accounts/{account_id}/secondary_dns/peers/{peer_id}":
    secondaryDnsPeerPeerDetails,
  "PUT /accounts/{account_id}/secondary_dns/peers/{peer_id}":
    secondaryDnsPeerUpdatePeer,
  "GET /accounts/{account_id}/secondary_dns/tsigs": secondaryDnsTsigListTsiGs,
  "POST /accounts/{account_id}/secondary_dns/tsigs": secondaryDnsTsigCreateTsig,
  "DELETE /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}":
    secondaryDnsTsigDeleteTsig,
  "GET /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}":
    secondaryDnsTsigTsigDetails,
  "PUT /accounts/{account_id}/secondary_dns/tsigs/{tsig_id}":
    secondaryDnsTsigUpdateTsig,
  "GET /accounts/{account_id}/secrets_store/quota": secretsStoreQuota,
  "GET /accounts/{account_id}/secrets_store/stores": secretsStoreList,
  "POST /accounts/{account_id}/secrets_store/stores": secretsStoreCreate,
  "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}":
    secretsStoreDeleteById,
  "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets":
    secretsStoreDeleteBulk,
  "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets":
    secretsStoreSecretsList,
  "POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets":
    secretsStoreSecretCreate,
  "DELETE /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}":
    secretsStoreSecretDeleteById,
  "GET /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}":
    secretsStoreGetById,
  "PATCH /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}":
    secretsStorePatchById,
  "POST /accounts/{account_id}/secrets_store/stores/{store_id}/secrets/{secret_id}/duplicate":
    secretsStoreDuplicateById,
  "GET /accounts/{account_id}/security-center/insights":
    getSecurityCenterInsights,
  "GET /accounts/{account_id}/security-center/insights/class":
    getSecurityCenterInsightCountsByClass,
  "GET /accounts/{account_id}/security-center/insights/severity":
    getSecurityCenterInsightCountsBySeverity,
  "GET /accounts/{account_id}/security-center/insights/type":
    getSecurityCenterInsightCountsByType,
  "PUT /accounts/{account_id}/security-center/insights/{issue_id}/dismiss":
    archiveSecurityCenterInsight,
  "GET /accounts/{account_id}/shares": sharesList,
  "POST /accounts/{account_id}/shares": shareCreate,
  "DELETE /accounts/{account_id}/shares/{share_id}": shareDelete,
  "GET /accounts/{account_id}/shares/{share_id}": sharesGetById,
  "PUT /accounts/{account_id}/shares/{share_id}": shareUpdate,
  "GET /accounts/{account_id}/shares/{share_id}/recipients":
    shareRecipientsList,
  "POST /accounts/{account_id}/shares/{share_id}/recipients":
    shareRecipientCreate,
  "PUT /accounts/{account_id}/shares/{share_id}/recipients":
    shareRecipientsUpdate,
  "DELETE /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}":
    shareRecipientDelete,
  "GET /accounts/{account_id}/shares/{share_id}/recipients/{recipient_id}":
    shareRecipientsGetById,
  "GET /accounts/{account_id}/shares/{share_id}/resources": shareResourcesList,
  "POST /accounts/{account_id}/shares/{share_id}/resources":
    shareResourceCreate,
  "DELETE /accounts/{account_id}/shares/{share_id}/resources/{resource_id}":
    shareResourceDelete,
  "GET /accounts/{account_id}/shares/{share_id}/resources/{resource_id}":
    shareResourcesGetById,
  "PUT /accounts/{account_id}/shares/{share_id}/resources/{resource_id}":
    shareResourceUpdate,
  "GET /accounts/{account_id}/slurper/jobs": slurperListJobs,
  "POST /accounts/{account_id}/slurper/jobs": slurperCreateJob,
  "PUT /accounts/{account_id}/slurper/jobs/abortAll": slurperAbortAllJobs,
  "GET /accounts/{account_id}/slurper/jobs/{job_id}": slurperGetJob,
  "PUT /accounts/{account_id}/slurper/jobs/{job_id}/abort": slurperAbortJob,
  "GET /accounts/{account_id}/slurper/jobs/{job_id}/logs": slurperGetJobLogs,
  "PUT /accounts/{account_id}/slurper/jobs/{job_id}/pause": slurperPauseJob,
  "GET /accounts/{account_id}/slurper/jobs/{job_id}/progress":
    slurperGetJobProgress,
  "PUT /accounts/{account_id}/slurper/jobs/{job_id}/resume": slurperResumeJob,
  "PUT /accounts/{account_id}/slurper/source/connectivity-precheck":
    slurperCheckSourceConnectivity,
  "PUT /accounts/{account_id}/slurper/target/connectivity-precheck":
    slurperCheckTargetConnectivity,
  "GET /accounts/{account_id}/sso_connectors": getAllSsoConnectors,
  "POST /accounts/{account_id}/sso_connectors": initNewSsoConnector,
  "DELETE /accounts/{account_id}/sso_connectors/{sso_connector_id}":
    deleteSsoConnector,
  "GET /accounts/{account_id}/sso_connectors/{sso_connector_id}":
    getSsoConnector,
  "PATCH /accounts/{account_id}/sso_connectors/{sso_connector_id}":
    updateSsoConnectorState,
  "POST /accounts/{account_id}/sso_connectors/{sso_connector_id}/begin_verification":
    beginSsoConnectorVerification,
  "GET /accounts/{account_id}/storage/kv/namespaces":
    workersKvNamespaceListNamespaces,
  "POST /accounts/{account_id}/storage/kv/namespaces":
    workersKvNamespaceCreateANamespace,
  "DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}":
    workersKvNamespaceRemoveANamespace,
  "GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}":
    workersKvNamespaceGetANamespace,
  "PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}":
    workersKvNamespaceRenameANamespace,
  "DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk":
    workersKvNamespaceDeleteMultipleKeyValuePairsDeprecated,
  "PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk":
    workersKvNamespaceWriteMultipleKeyValuePairs,
  "POST /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/delete":
    workersKvNamespaceDeleteMultipleKeyValuePairs,
  "POST /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/bulk/get":
    workersKvNamespaceGetMultipleKeyValuePairs,
  "GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/keys":
    workersKvNamespaceListANamespaceSKeys,
  "GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/metadata/{key_name}":
    workersKvNamespaceReadTheMetadataForAKey,
  "DELETE /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}":
    workersKvNamespaceDeleteKeyValuePair,
  "GET /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}":
    workersKvNamespaceReadKeyValuePair,
  "PUT /accounts/{account_id}/storage/kv/namespaces/{namespace_id}/values/{key_name}":
    workersKvNamespaceWriteKeyValuePairWithMetadata,
  "GET /accounts/{account_id}/stream": streamVideosListVideos,
  "POST /accounts/{account_id}/stream":
    streamVideosInitiateVideoUploadsUsingTus,
  "POST /accounts/{account_id}/stream/clip":
    streamVideoClippingClipVideosGivenAStartAndEndTime,
  "POST /accounts/{account_id}/stream/copy": streamVideosUploadVideosFromAUrl,
  "POST /accounts/{account_id}/stream/direct_upload":
    streamVideosUploadVideosViaDirectUploadUrLs,
  "GET /accounts/{account_id}/stream/keys": streamSigningKeysListSigningKeys,
  "POST /accounts/{account_id}/stream/keys": streamSigningKeysCreateSigningKeys,
  "DELETE /accounts/{account_id}/stream/keys/{identifier}":
    streamSigningKeysDeleteSigningKeys,
  "GET /accounts/{account_id}/stream/live_inputs":
    streamLiveInputsListLiveInputs,
  "POST /accounts/{account_id}/stream/live_inputs":
    streamLiveInputsCreateALiveInput,
  "DELETE /accounts/{account_id}/stream/live_inputs/{live_input_identifier}":
    streamLiveInputsDeleteALiveInput,
  "GET /accounts/{account_id}/stream/live_inputs/{live_input_identifier}":
    streamLiveInputsRetrieveALiveInput,
  "PUT /accounts/{account_id}/stream/live_inputs/{live_input_identifier}":
    streamLiveInputsUpdateALiveInput,
  "GET /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs":
    streamLiveInputsListAllOutputsAssociatedWithASpecifiedLiveInput,
  "POST /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs":
    streamLiveInputsCreateANewOutputConnectedToALiveInput,
  "DELETE /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}":
    streamLiveInputsDeleteAnOutput,
  "PUT /accounts/{account_id}/stream/live_inputs/{live_input_identifier}/outputs/{output_identifier}":
    streamLiveInputsUpdateAnOutput,
  "GET /accounts/{account_id}/stream/storage-usage": streamVideosStorageUsage,
  "GET /accounts/{account_id}/stream/watermarks":
    streamWatermarkProfileListWatermarkProfiles,
  "POST /accounts/{account_id}/stream/watermarks":
    streamWatermarkProfileCreateWatermarkProfilesViaBasicUpload,
  "DELETE /accounts/{account_id}/stream/watermarks/{identifier}":
    streamWatermarkProfileDeleteWatermarkProfiles,
  "GET /accounts/{account_id}/stream/watermarks/{identifier}":
    streamWatermarkProfileWatermarkProfileDetails,
  "DELETE /accounts/{account_id}/stream/webhook": streamWebhookDeleteWebhooks,
  "GET /accounts/{account_id}/stream/webhook": streamWebhookViewWebhooks,
  "PUT /accounts/{account_id}/stream/webhook": streamWebhookCreateWebhooks,
  "DELETE /accounts/{account_id}/stream/{identifier}": streamVideosDeleteVideo,
  "GET /accounts/{account_id}/stream/{identifier}":
    streamVideosRetrieveVideoDetails,
  "POST /accounts/{account_id}/stream/{identifier}":
    streamVideosUpdateVideoDetails,
  "GET /accounts/{account_id}/stream/{identifier}/audio": listAudioTracks,
  "POST /accounts/{account_id}/stream/{identifier}/audio/copy": addAudioTrack,
  "DELETE /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}":
    deleteAudioTracks,
  "PATCH /accounts/{account_id}/stream/{identifier}/audio/{audio_identifier}":
    editAudioTracks,
  "GET /accounts/{account_id}/stream/{identifier}/captions":
    streamSubtitlesCaptionsListCaptionsOrSubtitles,
  "DELETE /accounts/{account_id}/stream/{identifier}/captions/{language}":
    streamSubtitlesCaptionsDeleteCaptionsOrSubtitles,
  "GET /accounts/{account_id}/stream/{identifier}/captions/{language}":
    streamSubtitlesCaptionsGetCaptionOrSubtitleForLanguage,
  "PUT /accounts/{account_id}/stream/{identifier}/captions/{language}":
    streamSubtitlesCaptionsUploadCaptionsOrSubtitles,
  "POST /accounts/{account_id}/stream/{identifier}/captions/{language}/generate":
    streamSubtitlesCaptionsGenerateCaptionOrSubtitleForLanguage,
  "GET /accounts/{account_id}/stream/{identifier}/captions/{language}/vtt":
    streamSubtitlesCaptionsGetVttCaptionOrSubtitle,
  "DELETE /accounts/{account_id}/stream/{identifier}/downloads":
    streamMP4DownloadsDeleteDownloads,
  "GET /accounts/{account_id}/stream/{identifier}/downloads":
    streamMP4DownloadsListDownloads,
  "POST /accounts/{account_id}/stream/{identifier}/downloads":
    streamMP4DownloadsCreateDownloads,
  "DELETE /accounts/{account_id}/stream/{identifier}/downloads/{download_type}":
    streamDownloadsDeleteTypeSpecificDownloads,
  "POST /accounts/{account_id}/stream/{identifier}/downloads/{download_type}":
    streamDownloadsCreateTypeSpecificDownloads,
  "GET /accounts/{account_id}/stream/{identifier}/embed":
    streamVideosRetreieveEmbedCodeHtml,
  "POST /accounts/{account_id}/stream/{identifier}/token":
    streamVideosCreateSignedUrlTokensForVideos,
  "GET /accounts/{account_id}/subscriptions":
    accountSubscriptionsListSubscriptions,
  "POST /accounts/{account_id}/subscriptions":
    accountSubscriptionsCreateSubscription,
  "DELETE /accounts/{account_id}/subscriptions/{subscription_identifier}":
    accountSubscriptionsDeleteSubscription,
  "PUT /accounts/{account_id}/subscriptions/{subscription_identifier}":
    accountSubscriptionsUpdateSubscription,
  "GET /accounts/{account_id}/teamnet/routes": tunnelRouteListTunnelRoutes,
  "POST /accounts/{account_id}/teamnet/routes": tunnelRouteCreateATunnelRoute,
  "GET /accounts/{account_id}/teamnet/routes/ip/{ip}":
    tunnelRouteGetTunnelRouteByIp,
  "DELETE /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":
    tunnelRouteDeleteATunnelRouteWithCidr,
  "PATCH /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":
    tunnelRouteUpdateATunnelRouteWithCidr,
  "POST /accounts/{account_id}/teamnet/routes/network/{ip_network_encoded}":
    tunnelRouteCreateATunnelRouteWithCidr,
  "DELETE /accounts/{account_id}/teamnet/routes/{route_id}":
    tunnelRouteDeleteATunnelRoute,
  "GET /accounts/{account_id}/teamnet/routes/{route_id}":
    tunnelRouteGetTunnelRoute,
  "PATCH /accounts/{account_id}/teamnet/routes/{route_id}":
    tunnelRouteUpdateATunnelRoute,
  "GET /accounts/{account_id}/teamnet/virtual_networks":
    tunnelVirtualNetworkListVirtualNetworks,
  "POST /accounts/{account_id}/teamnet/virtual_networks":
    tunnelVirtualNetworkCreateAVirtualNetwork,
  "DELETE /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}":
    tunnelVirtualNetworkDelete,
  "GET /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}":
    tunnelVirtualNetworkGet,
  "PATCH /accounts/{account_id}/teamnet/virtual_networks/{virtual_network_id}":
    tunnelVirtualNetworkUpdate,
  "GET /accounts/{account_id}/tokens": accountApiTokensListTokens,
  "POST /accounts/{account_id}/tokens": accountApiTokensCreateToken,
  "GET /accounts/{account_id}/tokens/permission_groups":
    accountApiTokensListPermissionGroups,
  "GET /accounts/{account_id}/tokens/verify": accountApiTokensVerifyToken,
  "DELETE /accounts/{account_id}/tokens/{token_id}":
    accountApiTokensDeleteToken,
  "GET /accounts/{account_id}/tokens/{token_id}": accountApiTokensTokenDetails,
  "PUT /accounts/{account_id}/tokens/{token_id}": accountApiTokensUpdateToken,
  "PUT /accounts/{account_id}/tokens/{token_id}/value":
    accountApiTokensRollToken,
  "GET /accounts/{account_id}/tunnels": cloudflareTunnelListAllTunnels,
  "GET /accounts/{account_id}/urlscanner/response/{response_id}":
    urlscannerGetResponseText,
  "GET /accounts/{account_id}/urlscanner/scan": urlscannerSearchScans,
  "POST /accounts/{account_id}/urlscanner/scan": urlscannerCreateScan,
  "GET /accounts/{account_id}/urlscanner/scan/{scan_id}": urlscannerGetScan,
  "GET /accounts/{account_id}/urlscanner/scan/{scan_id}/har":
    urlscannerGetScanHar,
  "GET /accounts/{account_id}/urlscanner/scan/{scan_id}/screenshot":
    urlscannerGetScanScreenshot,
  "POST /accounts/{account_id}/urlscanner/v2/bulk": urlscannerCreateScanBulkV2,
  "GET /accounts/{account_id}/urlscanner/v2/dom/{scan_id}":
    urlscannerGetScanDomV2,
  "GET /accounts/{account_id}/urlscanner/v2/har/{scan_id}":
    urlscannerGetScanHarV2,
  "GET /accounts/{account_id}/urlscanner/v2/responses/{response_id}":
    urlscannerGetResponseV2,
  "GET /accounts/{account_id}/urlscanner/v2/result/{scan_id}":
    urlscannerGetScanV2,
  "POST /accounts/{account_id}/urlscanner/v2/scan": urlscannerCreateScanV2,
  "GET /accounts/{account_id}/urlscanner/v2/screenshots/{scan_id}.png":
    urlscannerGetScanScreenshotV2,
  "GET /accounts/{account_id}/urlscanner/v2/search": urlscannerSearchScansV2,
  "GET /accounts/{account_id}/vectorize/indexes":
    vectorizeDeprecatedListVectorizeIndexes,
  "POST /accounts/{account_id}/vectorize/indexes":
    vectorizeDeprecatedCreateVectorizeIndex,
  "DELETE /accounts/{account_id}/vectorize/indexes/{index_name}":
    vectorizeDeprecatedDeleteVectorizeIndex,
  "GET /accounts/{account_id}/vectorize/indexes/{index_name}":
    vectorizeDeprecatedGetVectorizeIndex,
  "PUT /accounts/{account_id}/vectorize/indexes/{index_name}":
    vectorizeDeprecatedUpdateVectorizeIndex,
  "POST /accounts/{account_id}/vectorize/indexes/{index_name}/delete-by-ids":
    vectorizeDeprecatedDeleteVectorsById,
  "POST /accounts/{account_id}/vectorize/indexes/{index_name}/get-by-ids":
    vectorizeDeprecatedGetVectorsById,
  "POST /accounts/{account_id}/vectorize/indexes/{index_name}/insert":
    vectorizeDeprecatedInsertVector,
  "POST /accounts/{account_id}/vectorize/indexes/{index_name}/query":
    vectorizeDeprecatedQueryVector,
  "POST /accounts/{account_id}/vectorize/indexes/{index_name}/upsert":
    vectorizeDeprecatedUpsertVector,
  "GET /accounts/{account_id}/vectorize/v2/indexes":
    vectorizeListVectorizeIndexes,
  "POST /accounts/{account_id}/vectorize/v2/indexes":
    vectorizeCreateVectorizeIndex,
  "DELETE /accounts/{account_id}/vectorize/v2/indexes/{index_name}":
    vectorizeDeleteVectorizeIndex,
  "GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}":
    vectorizeGetVectorizeIndex,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/delete_by_ids":
    vectorizeDeleteVectorsById,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/get_by_ids":
    vectorizeGetVectorsById,
  "GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/info":
    vectorizeIndexInfo,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/insert":
    vectorizeInsertVector,
  "GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/list":
    vectorizeListVectors,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/create":
    vectorizeCreateMetadataIndex,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/delete":
    vectorizeDeleteMetadataIndex,
  "GET /accounts/{account_id}/vectorize/v2/indexes/{index_name}/metadata_index/list":
    vectorizeListMetadataIndexes,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/query":
    vectorizeQueryVector,
  "POST /accounts/{account_id}/vectorize/v2/indexes/{index_name}/upsert":
    vectorizeUpsertVector,
  "GET /accounts/{account_id}/waiting_rooms":
    waitingRoomListWaitingRoomsAccount,
  "GET /accounts/{account_id}/warp_connector":
    cloudflareTunnelListWarpConnectorTunnels,
  "POST /accounts/{account_id}/warp_connector":
    cloudflareTunnelCreateAWarpConnectorTunnel,
  "DELETE /accounts/{account_id}/warp_connector/{tunnel_id}":
    cloudflareTunnelDeleteAWarpConnectorTunnel,
  "GET /accounts/{account_id}/warp_connector/{tunnel_id}":
    cloudflareTunnelGetAWarpConnectorTunnel,
  "PATCH /accounts/{account_id}/warp_connector/{tunnel_id}":
    cloudflareTunnelUpdateAWarpConnectorTunnel,
  "GET /accounts/{account_id}/warp_connector/{tunnel_id}/token":
    cloudflareTunnelGetAWarpConnectorTunnelToken,
  "GET /accounts/{account_id}/workers/account-settings":
    workerAccountSettingsFetchWorkerAccountSettings,
  "PUT /accounts/{account_id}/workers/account-settings":
    workerAccountSettingsCreateWorkerAccountSettings,
  "POST /accounts/{account_id}/workers/assets/upload": workerAssetsUpload,
  "GET /accounts/{account_id}/workers/dispatch/namespaces": namespaceWorkerList,
  "POST /accounts/{account_id}/workers/dispatch/namespaces":
    namespaceWorkerCreate,
  "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}":
    namespaceWorkerDeleteNamespace,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}":
    namespaceWorkerGetNamespace,
  "PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}":
    namespaceWorkerPatchNamespace,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}":
    namespaceWorkerPutNamespace,
  "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts":
    namespaceWorkerDeleteScripts,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts":
    namespaceWorkerListScripts,
  "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}":
    namespaceWorkerScriptDeleteWorker,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}":
    namespaceWorkerScriptWorkerDetails,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}":
    namespaceWorkerScriptUploadWorkerModule,
  "POST /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/assets-upload-session":
    namespaceWorkerScriptUpdateCreateAssetsUploadSession,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/bindings":
    namespaceWorkerGetScriptBindings,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content":
    namespaceWorkerGetScriptContent,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/content":
    namespaceWorkerPutScriptContent,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets":
    namespaceWorkerListScriptSecrets,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets":
    namespaceWorkerPutScriptSecrets,
  "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}":
    namespaceWorkerDeleteScriptSecret,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/secrets/{secret_name}":
    namespaceWorkerGetScriptSecrets,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings":
    namespaceWorkerGetScriptSettings,
  "PATCH /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/settings":
    namespaceWorkerPatchScriptSettings,
  "GET /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags":
    namespaceWorkerGetScriptTags,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags":
    namespaceWorkerPutScriptTags,
  "DELETE /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}":
    namespaceWorkerDeleteScriptTag,
  "PUT /accounts/{account_id}/workers/dispatch/namespaces/{dispatch_namespace}/scripts/{script_name}/tags/{tag}":
    namespaceWorkerPutScriptTag,
  "GET /accounts/{account_id}/workers/domains": workerDomainListDomains,
  "PUT /accounts/{account_id}/workers/domains": workerDomainAttachToDomain,
  "DELETE /accounts/{account_id}/workers/domains/{domain_id}":
    workerDomainDetachFromDomain,
  "GET /accounts/{account_id}/workers/domains/{domain_id}":
    workerDomainGetADomain,
  "GET /accounts/{account_id}/workers/durable_objects/namespaces":
    durableObjectsNamespaceListNamespaces,
  "GET /accounts/{account_id}/workers/durable_objects/namespaces/{id}/objects":
    durableObjectsNamespaceListObjects,
  "GET /accounts/{account_id}/workers/observability/destinations":
    destinationList,
  "POST /accounts/{account_id}/workers/observability/destinations":
    destinationCreate,
  "DELETE /accounts/{account_id}/workers/observability/destinations/{slug}":
    destinationsDelete,
  "PATCH /accounts/{account_id}/workers/observability/destinations/{slug}":
    destinationUpdate,
  "POST /accounts/{account_id}/workers/observability/telemetry/keys":
    telemetryKeysList,
  "POST /accounts/{account_id}/workers/observability/telemetry/query":
    telemetryQuery,
  "POST /accounts/{account_id}/workers/observability/telemetry/values":
    telemetryValuesList,
  "GET /accounts/{account_id}/workers/scripts": workerScriptListWorkers,
  "GET /accounts/{account_id}/workers/scripts-search":
    workerScriptSearchWorkers,
  "DELETE /accounts/{account_id}/workers/scripts/{script_name}":
    workerScriptDeleteWorker,
  "GET /accounts/{account_id}/workers/scripts/{script_name}":
    workerScriptDownloadWorker,
  "PUT /accounts/{account_id}/workers/scripts/{script_name}":
    workerScriptUploadWorkerModule,
  "POST /accounts/{account_id}/workers/scripts/{script_name}/assets-upload-session":
    workerScriptUpdateCreateAssetsUploadSession,
  "PUT /accounts/{account_id}/workers/scripts/{script_name}/content":
    workerScriptPutContent,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/content/v2":
    workerScriptGetContent,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments":
    workerDeploymentsListDeployments,
  "POST /accounts/{account_id}/workers/scripts/{script_name}/deployments":
    workerDeploymentsCreateDeployment,
  "DELETE /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}":
    workerDeploymentsDeleteDeployment,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/deployments/{deployment_id}":
    workerDeploymentsGetDeployment,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/schedules":
    workerCronTriggerGetCronTriggers,
  "PUT /accounts/{account_id}/workers/scripts/{script_name}/schedules":
    workerCronTriggerUpdateCronTriggers,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/script-settings":
    workerScriptSettingsGetSettings,
  "PATCH /accounts/{account_id}/workers/scripts/{script_name}/script-settings":
    workerScriptSettingsPatchSettings,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/secrets":
    workerListScriptSecrets,
  "PUT /accounts/{account_id}/workers/scripts/{script_name}/secrets":
    workerPutScriptSecret,
  "DELETE /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}":
    workerDeleteScriptSecret,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/secrets/{secret_name}":
    workerGetScriptSecret,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/settings":
    workerScriptGetSettings,
  "PATCH /accounts/{account_id}/workers/scripts/{script_name}/settings":
    workerScriptPatchSettings,
  "DELETE /accounts/{account_id}/workers/scripts/{script_name}/subdomain":
    workerScriptDeleteSubdomain,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/subdomain":
    workerScriptGetSubdomain,
  "POST /accounts/{account_id}/workers/scripts/{script_name}/subdomain":
    workerScriptPostSubdomain,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/tails":
    getAccountsAccountIdWorkersScriptsScriptNameTails,
  "POST /accounts/{account_id}/workers/scripts/{script_name}/tails":
    workerTailLogsStartTail,
  "DELETE /accounts/{account_id}/workers/scripts/{script_name}/tails/{id}":
    workerTailLogsDeleteTail,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/usage-model":
    workerScriptFetchUsageModel,
  "PUT /accounts/{account_id}/workers/scripts/{script_name}/usage-model":
    workerScriptUpdateUsageModel,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/versions":
    workerVersionsListVersions,
  "POST /accounts/{account_id}/workers/scripts/{script_name}/versions":
    workerVersionsUploadVersion,
  "GET /accounts/{account_id}/workers/scripts/{script_name}/versions/{version_id}":
    workerVersionsGetVersionDetail,
  "GET /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content":
    workerEnvironmentGetScriptContent,
  "PUT /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/content":
    workerEnvironmentPutScriptContent,
  "GET /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings":
    workerScriptEnvironmentGetSettings,
  "PATCH /accounts/{account_id}/workers/services/{service_name}/environments/{environment_name}/settings":
    workerScriptEnvironmentPatchSettings,
  "DELETE /accounts/{account_id}/workers/subdomain":
    workerSubdomainDeleteSubdomain,
  "GET /accounts/{account_id}/workers/subdomain": workerSubdomainGetSubdomain,
  "PUT /accounts/{account_id}/workers/subdomain":
    workerSubdomainCreateSubdomain,
  "GET /accounts/{account_id}/workers/workers": listWorkers,
  "POST /accounts/{account_id}/workers/workers": createWorker,
  "DELETE /accounts/{account_id}/workers/workers/{worker_id}": deleteWorker,
  "GET /accounts/{account_id}/workers/workers/{worker_id}": getWorker,
  "PATCH /accounts/{account_id}/workers/workers/{worker_id}": editWorker,
  "PUT /accounts/{account_id}/workers/workers/{worker_id}": updateWorker,
  "GET /accounts/{account_id}/workers/workers/{worker_id}/versions":
    listWorkerVersions,
  "POST /accounts/{account_id}/workers/workers/{worker_id}/versions":
    createWorkerVersion,
  "DELETE /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}":
    deleteWorkerVersion,
  "GET /accounts/{account_id}/workers/workers/{worker_id}/versions/{version_id}":
    getWorkerVersion,
  "GET /accounts/{account_id}/workflows": worListWorkflows,
  "DELETE /accounts/{account_id}/workflows/{workflow_name}": worDeleteWorkflow,
  "GET /accounts/{account_id}/workflows/{workflow_name}": worGetWorkflowDetails,
  "PUT /accounts/{account_id}/workflows/{workflow_name}":
    worCreateOrModifyWorkflow,
  "GET /accounts/{account_id}/workflows/{workflow_name}/instances":
    worListWorkflowInstances,
  "POST /accounts/{account_id}/workflows/{workflow_name}/instances":
    worCreateNewWorkflowInstance,
  "POST /accounts/{account_id}/workflows/{workflow_name}/instances/batch":
    worBatchCreateWorkflowInstance,
  "POST /accounts/{account_id}/workflows/{workflow_name}/instances/batch/terminate":
    worBatchTerminateWorkflowInstances,
  "GET /accounts/{account_id}/workflows/{workflow_name}/instances/terminate":
    worStatusTerminateWorkflowInstances,
  "GET /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}":
    worDescribeWorkflowInstance,
  "POST /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/events/{event_type}":
    worSendEventWorkflowInstance,
  "PATCH /accounts/{account_id}/workflows/{workflow_name}/instances/{instance_id}/status":
    worChangeStatusWorkflowInstance,
  "GET /accounts/{account_id}/workflows/{workflow_name}/versions":
    worListWorkflowVersions,
  "GET /accounts/{account_id}/workflows/{workflow_name}/versions/{version_id}":
    worDescribeWorkflowVersions,
  "GET /accounts/{account_id}/zerotrust/connectivity_settings":
    zeroTrustAccountsGetConnectivitySettings,
  "PATCH /accounts/{account_id}/zerotrust/connectivity_settings":
    zeroTrustAccountsPatchConnectivitySettings,
  "GET /accounts/{account_id}/zerotrust/routes/hostname":
    zeroTrustNetworksRouteHostnameList,
  "POST /accounts/{account_id}/zerotrust/routes/hostname":
    zeroTrustNetworksRouteHostnameCreate,
  "DELETE /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}":
    zeroTrustNetworksRouteHostnameDelete,
  "GET /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}":
    zeroTrustNetworksRouteHostnameGet,
  "PATCH /accounts/{account_id}/zerotrust/routes/hostname/{hostname_route_id}":
    zeroTrustNetworksRouteHostnameUpdate,
  "GET /accounts/{account_id}/zerotrust/subnets": zeroTrustNetworksSubnetsList,
  "PATCH /accounts/{account_id}/zerotrust/subnets/cloudflare_source/{address_family}":
    zeroTrustNetworksSubnetUpdateCloudflareSource,
  "GET /accounts/{account_id}/zt_risk_scoring/behaviors":
    dlpRiskScoreBehaviorsGet,
  "PUT /accounts/{account_id}/zt_risk_scoring/behaviors":
    dlpRiskScoreBehaviorsPut,
  "GET /accounts/{account_id}/zt_risk_scoring/integrations":
    dlpZtRiskScoreIntegrationList,
  "POST /accounts/{account_id}/zt_risk_scoring/integrations":
    dlpZtRiskScoreIntegrationCreate,
  "GET /accounts/{account_id}/zt_risk_scoring/integrations/reference_id/{reference_id}":
    dlpZtRiskScoreIntegrationGetByReferenceId,
  "DELETE /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}":
    dlpZtRiskScoreIntegrationDelete,
  "GET /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}":
    dlpZtRiskScoreIntegrationGet,
  "PUT /accounts/{account_id}/zt_risk_scoring/integrations/{integration_id}":
    dlpZtRiskScoreIntegrationUpdate,
  "GET /accounts/{account_id}/zt_risk_scoring/summary": dlpRiskScoreSummaryGet,
  "GET /accounts/{account_id}/zt_risk_scoring/{user_id}":
    dlpRiskScoreSummaryGetForUser,
  "POST /accounts/{account_id}/zt_risk_scoring/{user_id}/reset":
    dlpRiskScoreResetPost,
  "GET /certificates": originCaListCertificates,
  "POST /certificates": originCaCreateCertificate,
  "DELETE /certificates/{certificate_id}": originCaRevokeCertificate,
  "GET /certificates/{certificate_id}": originCaGetCertificate,
  "POST /internal/submit": postInternalSubmit,
  "GET /ips": cloudflareIpsCloudflareIpDetails,
  "GET /live": getLive,
  "GET /memberships": userSAccountMembershipsListMemberships,
  "DELETE /memberships/{membership_id}":
    userSAccountMembershipsDeleteMembership,
  "GET /memberships/{membership_id}": userSAccountMembershipsMembershipDetails,
  "PUT /memberships/{membership_id}": userSAccountMembershipsUpdateMembership,
  "GET /organizations": organizationListOrganizations,
  "POST /organizations": organizationsCreateUserOrganization,
  "DELETE /organizations/{organization_id}": organizationsDelete,
  "GET /organizations/{organization_id}": organizationsRetrieve,
  "PUT /organizations/{organization_id}": organizationsModify,
  "GET /organizations/{organization_id}/accounts": organizationsGetAccounts,
  "GET /organizations/{organization_id}/members": membersList,
  "POST /organizations/{organization_id}/members": membersCreate,
  "DELETE /organizations/{organization_id}/members/{member_id}": membersDelete,
  "GET /organizations/{organization_id}/members/{member_id}": membersRetrieve,
  "POST /organizations/{organization_id}/members:batchCreate":
    membersBatchCreate,
  "GET /organizations/{organization_id}/profile": organizationsGetProfile,
  "PUT /organizations/{organization_id}/profile": organizationsModifyProfile,
  "GET /organizations/{organization_id}/shares": organizationSharesList,
  "GET /radar/ai/bots/summary/user_agent": radarGetAiBotsSummaryByUserAgent,
  "GET /radar/ai/bots/summary/{dimension}": radarGetAiBotsSummary,
  "GET /radar/ai/bots/timeseries": radarGetAiBotsTimeseries,
  "GET /radar/ai/bots/timeseries_groups/user_agent":
    radarGetAiBotsTimeseriesGroupByUserAgent,
  "GET /radar/ai/bots/timeseries_groups/{dimension}":
    radarGetAiBotsTimeseriesGroup,
  "GET /radar/ai/inference/summary/model": radarGetAiInferenceSummaryByModel,
  "GET /radar/ai/inference/summary/task": radarGetAiInferenceSummaryByTask,
  "GET /radar/ai/inference/summary/{dimension}": radarGetAiInferenceSummary,
  "GET /radar/ai/inference/timeseries_groups/model":
    radarGetAiInferenceTimeseriesGroupByModel,
  "GET /radar/ai/inference/timeseries_groups/task":
    radarGetAiInferenceTimeseriesGroupByTask,
  "GET /radar/ai/inference/timeseries_groups/{dimension}":
    radarGetAiInferenceTimeseriesGroup,
  "GET /radar/annotations": radarGetAnnotations,
  "GET /radar/annotations/outages": radarGetAnnotationsOutages,
  "GET /radar/annotations/outages/locations": radarGetAnnotationsOutagesTop,
  "GET /radar/as112/summary/dnssec": radarGetDnsAs112TimeseriesByDnssec,
  "GET /radar/as112/summary/edns": radarGetDnsAs112TimeseriesByEdns,
  "GET /radar/as112/summary/ip_version": radarGetDnsAs112TimeseriesByIpVersion,
  "GET /radar/as112/summary/protocol": radarGetDnsAs112TimeseriesByProtocol,
  "GET /radar/as112/summary/query_type": radarGetDnsAs112TimeseriesByQueryType,
  "GET /radar/as112/summary/response_codes":
    radarGetDnsAs112TimeseriesByResponseCodes,
  "GET /radar/as112/summary/{dimension}": radarGetDnsAs112Summary,
  "GET /radar/as112/timeseries": radarGetDnsAs112Timeseries,
  "GET /radar/as112/timeseries_groups/dnssec":
    radarGetDnsAs112TimeseriesGroupByDnssec,
  "GET /radar/as112/timeseries_groups/edns":
    radarGetDnsAs112TimeseriesGroupByEdns,
  "GET /radar/as112/timeseries_groups/ip_version":
    radarGetDnsAs112TimeseriesGroupByIpVersion,
  "GET /radar/as112/timeseries_groups/protocol":
    radarGetDnsAs112TimeseriesGroupByProtocol,
  "GET /radar/as112/timeseries_groups/query_type":
    radarGetDnsAs112TimeseriesGroupByQueryType,
  "GET /radar/as112/timeseries_groups/response_codes":
    radarGetDnsAs112TimeseriesGroupByResponseCodes,
  "GET /radar/as112/timeseries_groups/{dimension}":
    radarGetDnsAs112TimeseriesGroup,
  "GET /radar/as112/top/locations": radarGetDnsAs112TopLocations,
  "GET /radar/as112/top/locations/dnssec/{dnssec}":
    radarGetDnsAs112TopLocationsByDnssec,
  "GET /radar/as112/top/locations/edns/{edns}":
    radarGetDnsAs112TopLocationsByEdns,
  "GET /radar/as112/top/locations/ip_version/{ip_version}":
    radarGetDnsAs112TopLocationsByIpVersion,
  "GET /radar/attacks/layer3/summary/bitrate":
    radarGetAttacksLayer3SummaryByBitrate,
  "GET /radar/attacks/layer3/summary/duration":
    radarGetAttacksLayer3SummaryByDuration,
  "GET /radar/attacks/layer3/summary/industry":
    radarGetAttacksLayer3SummaryByIndustry,
  "GET /radar/attacks/layer3/summary/ip_version":
    radarGetAttacksLayer3SummaryByIpVersion,
  "GET /radar/attacks/layer3/summary/protocol":
    radarGetAttacksLayer3SummaryByProtocol,
  "GET /radar/attacks/layer3/summary/vector":
    radarGetAttacksLayer3SummaryByVector,
  "GET /radar/attacks/layer3/summary/vertical":
    radarGetAttacksLayer3SummaryByVertical,
  "GET /radar/attacks/layer3/summary/{dimension}": radarGetAttacksLayer3Summary,
  "GET /radar/attacks/layer3/timeseries":
    radarGetAttacksLayer3TimeseriesByBytes,
  "GET /radar/attacks/layer3/timeseries_groups/bitrate":
    radarGetAttacksLayer3TimeseriesGroupByBitrate,
  "GET /radar/attacks/layer3/timeseries_groups/duration":
    radarGetAttacksLayer3TimeseriesGroupByDuration,
  "GET /radar/attacks/layer3/timeseries_groups/industry":
    radarGetAttacksLayer3TimeseriesGroupByIndustry,
  "GET /radar/attacks/layer3/timeseries_groups/ip_version":
    radarGetAttacksLayer3TimeseriesGroupByIpVersion,
  "GET /radar/attacks/layer3/timeseries_groups/protocol":
    radarGetAttacksLayer3TimeseriesGroupByProtocol,
  "GET /radar/attacks/layer3/timeseries_groups/vector":
    radarGetAttacksLayer3TimeseriesGroupByVector,
  "GET /radar/attacks/layer3/timeseries_groups/vertical":
    radarGetAttacksLayer3TimeseriesGroupByVertical,
  "GET /radar/attacks/layer3/timeseries_groups/{dimension}":
    radarGetAttacksLayer3TimeseriesGroup,
  "GET /radar/attacks/layer3/top/attacks": radarGetAttacksLayer3TopAttacks,
  "GET /radar/attacks/layer3/top/industry": radarGetAttacksLayer3TopIndustries,
  "GET /radar/attacks/layer3/top/locations/origin":
    radarGetAttacksLayer3TopOriginLocations,
  "GET /radar/attacks/layer3/top/locations/target":
    radarGetAttacksLayer3TopTargetLocations,
  "GET /radar/attacks/layer3/top/vertical": radarGetAttacksLayer3TopVerticals,
  "GET /radar/attacks/layer7/summary/http_method":
    radarGetAttacksLayer7SummaryByHttpMethod,
  "GET /radar/attacks/layer7/summary/http_version":
    radarGetAttacksLayer7SummaryByHttpVersion,
  "GET /radar/attacks/layer7/summary/industry":
    radarGetAttacksLayer7SummaryByIndustry,
  "GET /radar/attacks/layer7/summary/ip_version":
    radarGetAttacksLayer7SummaryByIpVersion,
  "GET /radar/attacks/layer7/summary/managed_rules":
    radarGetAttacksLayer7SummaryByManagedRules,
  "GET /radar/attacks/layer7/summary/mitigation_product":
    radarGetAttacksLayer7SummaryByMitigationProduct,
  "GET /radar/attacks/layer7/summary/vertical":
    radarGetAttacksLayer7SummaryByVertical,
  "GET /radar/attacks/layer7/summary/{dimension}": radarGetAttacksLayer7Summary,
  "GET /radar/attacks/layer7/timeseries": radarGetAttacksLayer7Timeseries,
  "GET /radar/attacks/layer7/timeseries_groups/http_method":
    radarGetAttacksLayer7TimeseriesGroupByHttpMethod,
  "GET /radar/attacks/layer7/timeseries_groups/http_version":
    radarGetAttacksLayer7TimeseriesGroupByHttpVersion,
  "GET /radar/attacks/layer7/timeseries_groups/industry":
    radarGetAttacksLayer7TimeseriesGroupByIndustry,
  "GET /radar/attacks/layer7/timeseries_groups/ip_version":
    radarGetAttacksLayer7TimeseriesGroupByIpVersion,
  "GET /radar/attacks/layer7/timeseries_groups/managed_rules":
    radarGetAttacksLayer7TimeseriesGroupByManagedRules,
  "GET /radar/attacks/layer7/timeseries_groups/mitigation_product":
    radarGetAttacksLayer7TimeseriesGroupByMitigationProduct,
  "GET /radar/attacks/layer7/timeseries_groups/vertical":
    radarGetAttacksLayer7TimeseriesGroupByVertical,
  "GET /radar/attacks/layer7/timeseries_groups/{dimension}":
    radarGetAttacksLayer7TimeseriesGroup,
  "GET /radar/attacks/layer7/top/ases/origin": radarGetAttacksLayer7TopOriginAs,
  "GET /radar/attacks/layer7/top/attacks": radarGetAttacksLayer7TopAttacks,
  "GET /radar/attacks/layer7/top/industry": radarGetAttacksLayer7TopIndustries,
  "GET /radar/attacks/layer7/top/locations/origin":
    radarGetAttacksLayer7TopOriginLocation,
  "GET /radar/attacks/layer7/top/locations/target":
    radarGetAttacksLayer7TopTargetLocation,
  "GET /radar/attacks/layer7/top/vertical": radarGetAttacksLayer7TopVerticals,
  "GET /radar/bgp/hijacks/events": radarGetBgpHijacksEvents,
  "GET /radar/bgp/ips/timeseries": radarGetBgpIpsTimeseries,
  "GET /radar/bgp/leaks/events": radarGetBgpRouteLeakEvents,
  "GET /radar/bgp/routes/ases": radarGetBgpRoutesAsns,
  "GET /radar/bgp/routes/moas": radarGetBgpPfx2asMoas,
  "GET /radar/bgp/routes/pfx2as": radarGetBgpPfx2as,
  "GET /radar/bgp/routes/realtime": radarGetBgpRoutesRealtime,
  "GET /radar/bgp/routes/stats": radarGetBgpRoutesStats,
  "GET /radar/bgp/timeseries": radarGetBgpTimeseries,
  "GET /radar/bgp/top/ases": radarGetBgpTopAses,
  "GET /radar/bgp/top/ases/prefixes": radarGetBgpTopAsnsByPrefixes,
  "GET /radar/bgp/top/prefixes": radarGetBgpTopPrefixes,
  "GET /radar/bots": radarGetBots,
  "GET /radar/bots/crawlers/summary/{dimension}": radarGetCrawlersSummary,
  "GET /radar/bots/crawlers/timeseries_groups/{dimension}":
    radarGetCrawlersTimeseriesGroup,
  "GET /radar/bots/summary/{dimension}": radarGetBotsSummary,
  "GET /radar/bots/timeseries": radarGetBotsTimeseries,
  "GET /radar/bots/timeseries_groups/{dimension}": radarGetBotsTimeseriesGroup,
  "GET /radar/bots/{bot_slug}": radarGetBotDetails,
  "GET /radar/ct/authorities": radarGetCertificateAuthorities,
  "GET /radar/ct/authorities/{ca_slug}": radarGetCertificateAuthorityDetails,
  "GET /radar/ct/logs": radarGetCertificateLogs,
  "GET /radar/ct/logs/{log_slug}": radarGetCertificateLogDetails,
  "GET /radar/ct/summary/{dimension}": radarGetCtSummary,
  "GET /radar/ct/timeseries": radarGetCtTimeseries,
  "GET /radar/ct/timeseries_groups/{dimension}": radarGetCtTimeseriesGroup,
  "GET /radar/datasets": radarGetReportsDatasets,
  "POST /radar/datasets/download": radarPostReportsDatasetDownloadUrl,
  "GET /radar/datasets/{alias}": radarGetReportsDatasetDownload,
  "GET /radar/dns/summary/cache_hit": radarGetDnsSummaryByCacheHitStatus,
  "GET /radar/dns/summary/dnssec": radarGetDnsSummaryByDnssec,
  "GET /radar/dns/summary/dnssec_aware": radarGetDnsSummaryByDnssecAwareness,
  "GET /radar/dns/summary/dnssec_e2e": radarGetDnsSummaryByDnssecE2eVersion,
  "GET /radar/dns/summary/ip_version": radarGetDnsSummaryByIpVersion,
  "GET /radar/dns/summary/matching_answer":
    radarGetDnsSummaryByMatchingAnswerStatus,
  "GET /radar/dns/summary/protocol": radarGetDnsSummaryByProtocol,
  "GET /radar/dns/summary/query_type": radarGetDnsSummaryByQueryType,
  "GET /radar/dns/summary/response_code": radarGetDnsSummaryByResponseCode,
  "GET /radar/dns/summary/response_ttl": radarGetDnsSummaryByResponseTtl,
  "GET /radar/dns/summary/{dimension}": radarGetDnsSummary,
  "GET /radar/dns/timeseries": radarGetDnsTimeseries,
  "GET /radar/dns/timeseries_groups/cache_hit":
    radarGetDnsTimeseriesGroupByCacheHitStatus,
  "GET /radar/dns/timeseries_groups/dnssec": radarGetDnsTimeseriesGroupByDnssec,
  "GET /radar/dns/timeseries_groups/dnssec_aware":
    radarGetDnsTimeseriesGroupByDnssecAwareness,
  "GET /radar/dns/timeseries_groups/dnssec_e2e":
    radarGetDnsTimeseriesGroupByDnssecE2eVersion,
  "GET /radar/dns/timeseries_groups/ip_version":
    radarGetDnsTimeseriesGroupByIpVersion,
  "GET /radar/dns/timeseries_groups/matching_answer":
    radarGetDnsTimeseriesGroupByMatchingAnswerStatus,
  "GET /radar/dns/timeseries_groups/protocol":
    radarGetDnsTimeseriesGroupByProtocol,
  "GET /radar/dns/timeseries_groups/query_type":
    radarGetDnsTimeseriesGroupByQueryType,
  "GET /radar/dns/timeseries_groups/response_code":
    radarGetDnsTimeseriesGroupByResponseCode,
  "GET /radar/dns/timeseries_groups/response_ttl":
    radarGetDnsTimeseriesGroupByResponseTtl,
  "GET /radar/dns/timeseries_groups/{dimension}": radarGetDnsTimeseriesGroup,
  "GET /radar/dns/top/ases": radarGetDnsTopAses,
  "GET /radar/dns/top/locations": radarGetDnsTopLocations,
  "GET /radar/email/routing/summary/arc": radarGetEmailRoutingSummaryByArc,
  "GET /radar/email/routing/summary/dkim": radarGetEmailRoutingSummaryByDkim,
  "GET /radar/email/routing/summary/dmarc": radarGetEmailRoutingSummaryByDmarc,
  "GET /radar/email/routing/summary/encrypted":
    radarGetEmailRoutingSummaryByEncrypted,
  "GET /radar/email/routing/summary/ip_version":
    radarGetEmailRoutingSummaryByIpVersion,
  "GET /radar/email/routing/summary/spf": radarGetEmailRoutingSummaryBySpf,
  "GET /radar/email/routing/summary/{dimension}": radarGetEmailRoutingSummary,
  "GET /radar/email/routing/timeseries_groups/arc":
    radarGetEmailRoutingTimeseriesGroupByArc,
  "GET /radar/email/routing/timeseries_groups/dkim":
    radarGetEmailRoutingTimeseriesGroupByDkim,
  "GET /radar/email/routing/timeseries_groups/dmarc":
    radarGetEmailRoutingTimeseriesGroupByDmarc,
  "GET /radar/email/routing/timeseries_groups/encrypted":
    radarGetEmailRoutingTimeseriesGroupByEncrypted,
  "GET /radar/email/routing/timeseries_groups/ip_version":
    radarGetEmailRoutingTimeseriesGroupByIpVersion,
  "GET /radar/email/routing/timeseries_groups/spf":
    radarGetEmailRoutingTimeseriesGroupBySpf,
  "GET /radar/email/routing/timeseries_groups/{dimension}":
    radarGetEmailRoutingTimeseriesGroup,
  "GET /radar/email/security/summary/arc": radarGetEmailSecuritySummaryByArc,
  "GET /radar/email/security/summary/dkim": radarGetEmailSecuritySummaryByDkim,
  "GET /radar/email/security/summary/dmarc":
    radarGetEmailSecuritySummaryByDmarc,
  "GET /radar/email/security/summary/malicious":
    radarGetEmailSecuritySummaryByMalicious,
  "GET /radar/email/security/summary/spam": radarGetEmailSecuritySummaryBySpam,
  "GET /radar/email/security/summary/spf": radarGetEmailSecuritySummaryBySpf,
  "GET /radar/email/security/summary/spoof":
    radarGetEmailSecuritySummaryBySpoof,
  "GET /radar/email/security/summary/threat_category":
    radarGetEmailSecuritySummaryByThreatCategory,
  "GET /radar/email/security/summary/tls_version":
    radarGetEmailSecuritySummaryByTlsVersion,
  "GET /radar/email/security/summary/{dimension}": radarGetEmailSecuritySummary,
  "GET /radar/email/security/timeseries_groups/arc":
    radarGetEmailSecurityTimeseriesGroupByArc,
  "GET /radar/email/security/timeseries_groups/dkim":
    radarGetEmailSecurityTimeseriesGroupByDkim,
  "GET /radar/email/security/timeseries_groups/dmarc":
    radarGetEmailSecurityTimeseriesGroupByDmarc,
  "GET /radar/email/security/timeseries_groups/malicious":
    radarGetEmailSecurityTimeseriesGroupByMalicious,
  "GET /radar/email/security/timeseries_groups/spam":
    radarGetEmailSecurityTimeseriesGroupBySpam,
  "GET /radar/email/security/timeseries_groups/spf":
    radarGetEmailSecurityTimeseriesGroupBySpf,
  "GET /radar/email/security/timeseries_groups/spoof":
    radarGetEmailSecurityTimeseriesGroupBySpoof,
  "GET /radar/email/security/timeseries_groups/threat_category":
    radarGetEmailSecurityTimeseriesGroupByThreatCategory,
  "GET /radar/email/security/timeseries_groups/tls_version":
    radarGetEmailSecurityTimeseriesGroupByTlsVersion,
  "GET /radar/email/security/timeseries_groups/{dimension}":
    radarGetEmailSecurityTimeseriesGroup,
  "GET /radar/email/security/top/tlds": radarGetEmailSecurityTopTldsByMessages,
  "GET /radar/email/security/top/tlds/malicious/{malicious}":
    radarGetEmailSecurityTopTldsByMalicious,
  "GET /radar/email/security/top/tlds/spam/{spam}":
    radarGetEmailSecurityTopTldsBySpam,
  "GET /radar/email/security/top/tlds/spoof/{spoof}":
    radarGetEmailSecurityTopTldsBySpoof,
  "GET /radar/entities/asns": radarGetEntitiesAsnList,
  "GET /radar/entities/asns/ip": radarGetEntitiesAsnByIp,
  "GET /radar/entities/asns/{asn}": radarGetEntitiesAsnById,
  "GET /radar/entities/asns/{asn}/as_set": radarGetAsnsAsSet,
  "GET /radar/entities/asns/{asn}/rel": radarGetAsnsRel,
  "GET /radar/entities/ip": radarGetEntitiesIp,
  "GET /radar/entities/locations": radarGetEntitiesLocations,
  "GET /radar/entities/locations/{location}": radarGetEntitiesLocationByAlpha2,
  "GET /radar/geolocations": radarGetGeolocations,
  "GET /radar/geolocations/{geo_id}": radarGetGeolocationDetails,
  "GET /radar/http/summary/bot_class": radarGetHttpSummaryByBotClass,
  "GET /radar/http/summary/device_type": radarGetHttpSummaryByDeviceType,
  "GET /radar/http/summary/http_protocol": radarGetHttpSummaryByHttpProtocol,
  "GET /radar/http/summary/http_version": radarGetHttpSummaryByHttpVersion,
  "GET /radar/http/summary/ip_version": radarGetHttpSummaryByIpVersion,
  "GET /radar/http/summary/os": radarGetHttpSummaryByOperatingSystem,
  "GET /radar/http/summary/post_quantum": radarGetHttpSummaryByPostQuantum,
  "GET /radar/http/summary/tls_version": radarGetHttpSummaryByTlsVersion,
  "GET /radar/http/summary/{dimension}": radarGetHttpSummary,
  "GET /radar/http/timeseries": radarGetHttpTimeseries,
  "GET /radar/http/timeseries_groups/bot_class":
    radarGetHttpTimeseriesGroupByBotClass,
  "GET /radar/http/timeseries_groups/browser":
    radarGetHttpTimeseriesGroupByBrowsers,
  "GET /radar/http/timeseries_groups/browser_family":
    radarGetHttpTimeseriesGroupByBrowserFamilies,
  "GET /radar/http/timeseries_groups/device_type":
    radarGetHttpTimeseriesGroupByDeviceType,
  "GET /radar/http/timeseries_groups/http_protocol":
    radarGetHttpTimeseriesGroupByHttpProtocol,
  "GET /radar/http/timeseries_groups/http_version":
    radarGetHttpTimeseriesGroupByHttpVersion,
  "GET /radar/http/timeseries_groups/ip_version":
    radarGetHttpTimeseriesGroupByIpVersion,
  "GET /radar/http/timeseries_groups/os":
    radarGetHttpTimeseriesGroupByOperatingSystem,
  "GET /radar/http/timeseries_groups/post_quantum":
    radarGetHttpTimeseriesGroupByPostQuantum,
  "GET /radar/http/timeseries_groups/tls_version":
    radarGetHttpTimeseriesGroupByTlsVersion,
  "GET /radar/http/timeseries_groups/{dimension}": radarGetHttpTimeseriesGroup,
  "GET /radar/http/top/ases": radarGetHttpTopAsesByHttpRequests,
  "GET /radar/http/top/ases/bot_class/{bot_class}":
    radarGetHttpTopAsesByBotClass,
  "GET /radar/http/top/ases/browser_family/{browser_family}":
    radarGetHttpTopAsesByBrowserFamily,
  "GET /radar/http/top/ases/device_type/{device_type}":
    radarGetHttpTopAsesByDeviceType,
  "GET /radar/http/top/ases/http_protocol/{http_protocol}":
    radarGetHttpTopAsesByHttpProtocol,
  "GET /radar/http/top/ases/http_version/{http_version}":
    radarGetHttpTopAsesByHttpVersion,
  "GET /radar/http/top/ases/ip_version/{ip_version}":
    radarGetHttpTopAsesByIpVersion,
  "GET /radar/http/top/ases/os/{os}": radarGetHttpTopAsesByOperatingSystem,
  "GET /radar/http/top/ases/tls_version/{tls_version}":
    radarGetHttpTopAsesByTlsVersion,
  "GET /radar/http/top/browser": radarGetHttpTopBrowsers,
  "GET /radar/http/top/browser_family": radarGetHttpTopBrowserFamilies,
  "GET /radar/http/top/locations": radarGetHttpTopLocationsByHttpRequests,
  "GET /radar/http/top/locations/bot_class/{bot_class}":
    radarGetHttpTopLocationsByBotClass,
  "GET /radar/http/top/locations/browser_family/{browser_family}":
    radarGetHttpTopLocationsByBrowserFamily,
  "GET /radar/http/top/locations/device_type/{device_type}":
    radarGetHttpTopLocationsByDeviceType,
  "GET /radar/http/top/locations/http_protocol/{http_protocol}":
    radarGetHttpTopLocationsByHttpProtocol,
  "GET /radar/http/top/locations/http_version/{http_version}":
    radarGetHttpTopLocationsByHttpVersion,
  "GET /radar/http/top/locations/ip_version/{ip_version}":
    radarGetHttpTopLocationsByIpVersion,
  "GET /radar/http/top/locations/os/{os}":
    radarGetHttpTopLocationsByOperatingSystem,
  "GET /radar/http/top/locations/tls_version/{tls_version}":
    radarGetHttpTopLocationsByTlsVersion,
  "GET /radar/leaked_credential_checks/summary/bot_class":
    radarGetLeakedCredentialChecksSummaryByBotClass,
  "GET /radar/leaked_credential_checks/summary/compromised":
    radarGetLeakedCredentialChecksSummaryByCompromised,
  "GET /radar/leaked_credential_checks/summary/{dimension}":
    radarGetLeakedCredentialChecksSummary,
  "GET /radar/leaked_credential_checks/timeseries_groups/bot_class":
    radarGetLeakedCredentialChecksTimeseriesGroupByBotClass,
  "GET /radar/leaked_credential_checks/timeseries_groups/compromised":
    radarGetLeakedCredentialChecksTimeseriesGroupByCompromised,
  "GET /radar/leaked_credential_checks/timeseries_groups/{dimension}":
    radarGetLeakedCredentialChecksTimeseriesGroup,
  "GET /radar/netflows/summary": radarGetNetflowsSummaryDeprecated,
  "GET /radar/netflows/summary/{dimension}": radarGetNetflowsSummary,
  "GET /radar/netflows/timeseries": radarGetNetflowsTimeseries,
  "GET /radar/netflows/timeseries_groups/{dimension}":
    radarGetNetflowsTimeseriesGroup,
  "GET /radar/netflows/top/ases": radarGetNetflowsTopAses,
  "GET /radar/netflows/top/locations": radarGetNetflowsTopLocations,
  "GET /radar/origins": radarGetOrigins,
  "GET /radar/origins/summary/{dimension}": radarGetOriginsSummary,
  "GET /radar/origins/timeseries": radarGetOriginsTimeseries,
  "GET /radar/origins/timeseries_groups/{dimension}":
    radarGetOriginsTimeseriesGroup,
  "GET /radar/origins/{slug}": radarGetOriginDetails,
  "GET /radar/quality/iqi/summary": radarGetQualityIndexSummary,
  "GET /radar/quality/iqi/timeseries_groups":
    radarGetQualityIndexTimeseriesGroup,
  "GET /radar/quality/speed/histogram": radarGetQualitySpeedHistogram,
  "GET /radar/quality/speed/summary": radarGetQualitySpeedSummary,
  "GET /radar/quality/speed/top/ases": radarGetQualitySpeedTopAses,
  "GET /radar/quality/speed/top/locations": radarGetQualitySpeedTopLocations,
  "GET /radar/ranking/domain/{domain}": radarGetRankingDomainDetails,
  "GET /radar/ranking/internet_services/categories":
    radarGetRankingInternetServicesCategories,
  "GET /radar/ranking/internet_services/timeseries_groups":
    radarGetRankingInternetServicesTimeseries,
  "GET /radar/ranking/internet_services/top":
    radarGetRankingTopInternetServices,
  "GET /radar/ranking/timeseries_groups": radarGetRankingDomainTimeseries,
  "GET /radar/ranking/top": radarGetRankingTopDomains,
  "GET /radar/robots_txt/top/domain_categories":
    radarGetRobotsTxtTopDomainCategoriesByFilesParsed,
  "GET /radar/robots_txt/top/user_agents/directive":
    radarGetRobotsTxtTopUserAgentsByDirective,
  "GET /radar/search/global": radarGetSearchGlobal,
  "GET /radar/tcp_resets_timeouts/summary": radarGetTcpResetsTimeoutsSummary,
  "GET /radar/tcp_resets_timeouts/timeseries_groups":
    radarGetTcpResetsTimeoutsTimeseriesGroup,
  "GET /radar/tlds": radarGetTlds,
  "GET /radar/tlds/{tld}": radarGetTldDetails,
  "GET /radar/traffic_anomalies": radarGetTrafficAnomalies,
  "GET /radar/traffic_anomalies/locations": radarGetTrafficAnomaliesTop,
  "GET /radar/verified_bots/top/bots": radarGetVerifiedBotsTopByHttpRequests,
  "GET /radar/verified_bots/top/categories":
    radarGetVerifiedBotsTopCategoriesByHttpRequests,
  "GET /ready": getReady,
  "GET /signed-url": getSignedUrl,
  "GET /tenants/{tenant_id}": tenantsRetrieveTenant,
  "GET /tenants/{tenant_id}/account_types": tenantsValidAccountTypes,
  "GET /tenants/{tenant_id}/accounts": tenantsListAccounts,
  "GET /tenants/{tenant_id}/entitlements": tenantsListEntitlements,
  "GET /tenants/{tenant_id}/memberships": tenantsListMemberships,
  "GET /user": userUserDetails,
  "PATCH /user": userEditUser,
  "GET /user/audit_logs": auditLogsGetUserAuditLogs,
  "GET /user/billing/history":
    userBillingHistoryDeprecatedBillingHistoryDetails,
  "GET /user/billing/profile":
    userBillingProfileDeprecatedBillingProfileDetails,
  "GET /user/firewall/access_rules/rules":
    ipAccessRulesForAUserListIpAccessRules,
  "POST /user/firewall/access_rules/rules":
    ipAccessRulesForAUserCreateAnIpAccessRule,
  "DELETE /user/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAUserDeleteAnIpAccessRule,
  "PATCH /user/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAUserUpdateAnIpAccessRule,
  "GET /user/invites": userSInvitesListInvitations,
  "GET /user/invites/{invite_id}": userSInvitesInvitationDetails,
  "PATCH /user/invites/{invite_id}": userSInvitesRespondToInvitation,
  "GET /user/load_balancers/monitors": loadBalancerMonitorsListMonitors,
  "POST /user/load_balancers/monitors": loadBalancerMonitorsCreateMonitor,
  "DELETE /user/load_balancers/monitors/{monitor_id}":
    loadBalancerMonitorsDeleteMonitor,
  "GET /user/load_balancers/monitors/{monitor_id}":
    loadBalancerMonitorsMonitorDetails,
  "PATCH /user/load_balancers/monitors/{monitor_id}":
    loadBalancerMonitorsPatchMonitor,
  "PUT /user/load_balancers/monitors/{monitor_id}":
    loadBalancerMonitorsUpdateMonitor,
  "POST /user/load_balancers/monitors/{monitor_id}/preview":
    loadBalancerMonitorsPreviewMonitor,
  "GET /user/load_balancers/monitors/{monitor_id}/references":
    loadBalancerMonitorsListMonitorReferences,
  "GET /user/load_balancers/pools": loadBalancerPoolsListPools,
  "PATCH /user/load_balancers/pools": loadBalancerPoolsPatchPools,
  "POST /user/load_balancers/pools": loadBalancerPoolsCreatePool,
  "DELETE /user/load_balancers/pools/{pool_id}": loadBalancerPoolsDeletePool,
  "GET /user/load_balancers/pools/{pool_id}": loadBalancerPoolsPoolDetails,
  "PATCH /user/load_balancers/pools/{pool_id}": loadBalancerPoolsPatchPool,
  "PUT /user/load_balancers/pools/{pool_id}": loadBalancerPoolsUpdatePool,
  "GET /user/load_balancers/pools/{pool_id}/health":
    loadBalancerPoolsPoolHealthDetails,
  "POST /user/load_balancers/pools/{pool_id}/preview":
    loadBalancerPoolsPreviewPool,
  "GET /user/load_balancers/pools/{pool_id}/references":
    loadBalancerPoolsListPoolReferences,
  "GET /user/load_balancers/preview/{preview_id}":
    loadBalancerMonitorsPreviewResult,
  "GET /user/load_balancing_analytics/events":
    loadBalancerHealthcheckEventsListHealthcheckEvents,
  "GET /user/organizations": userSOrganizationsListOrganizations,
  "DELETE /user/organizations/{organization_id}":
    userSOrganizationsLeaveOrganization,
  "GET /user/organizations/{organization_id}":
    userSOrganizationsOrganizationDetails,
  "GET /user/subscriptions": userSubscriptionGetUserSubscriptions,
  "DELETE /user/subscriptions/{identifier}":
    userSubscriptionDeleteUserSubscription,
  "PUT /user/subscriptions/{identifier}":
    userSubscriptionUpdateUserSubscription,
  "GET /user/tokens": userApiTokensListTokens,
  "POST /user/tokens": userApiTokensCreateToken,
  "GET /user/tokens/permission_groups": permissionGroupsListPermissionGroups,
  "GET /user/tokens/verify": userApiTokensVerifyToken,
  "DELETE /user/tokens/{token_id}": userApiTokensDeleteToken,
  "GET /user/tokens/{token_id}": userApiTokensTokenDetails,
  "PUT /user/tokens/{token_id}": userApiTokensUpdateToken,
  "PUT /user/tokens/{token_id}/value": userApiTokensRollToken,
  "GET /users/tenants": userListUserTenants,
  "GET /zones": zonesGet,
  "POST /zones": zonesPost,
  "GET /zones/{zone_identifier}/analytics/colos":
    zoneAnalyticsDeprecatedGetAnalyticsByCoLocations,
  "GET /zones/{zone_identifier}/analytics/dashboard":
    zoneAnalyticsDeprecatedGetDashboard,
  "GET /zones/{zone_identifier}/custom_pages":
    customPagesForAZoneListCustomPages,
  "GET /zones/{zone_identifier}/custom_pages/{identifier}":
    customPagesForAZoneGetACustomPage,
  "PUT /zones/{zone_identifier}/custom_pages/{identifier}":
    customPagesForAZoneUpdateACustomPage,
  "DELETE /zones/{zone_id}": zones0Delete,
  "GET /zones/{zone_id}": zones0Get,
  "PATCH /zones/{zone_id}": zones0Patch,
  "GET /zones/{zone_id}/access/apps":
    zoneLevelAccessApplicationsListAccessApplications,
  "POST /zones/{zone_id}/access/apps":
    zoneLevelAccessApplicationsAddABookmarkApplication,
  "GET /zones/{zone_id}/access/apps/ca":
    zoneLevelAccessShortLivedCertificateCAsListShortLivedCertificateCAs,
  "DELETE /zones/{zone_id}/access/apps/{app_id}":
    zoneLevelAccessApplicationsDeleteAnAccessApplication,
  "GET /zones/{zone_id}/access/apps/{app_id}":
    zoneLevelAccessApplicationsGetAnAccessApplication,
  "PUT /zones/{zone_id}/access/apps/{app_id}":
    zoneLevelAccessApplicationsUpdateABookmarkApplication,
  "DELETE /zones/{zone_id}/access/apps/{app_id}/ca":
    zoneLevelAccessShortLivedCertificateCAsDeleteAShortLivedCertificateCa,
  "GET /zones/{zone_id}/access/apps/{app_id}/ca":
    zoneLevelAccessShortLivedCertificateCAsGetAShortLivedCertificateCa,
  "POST /zones/{zone_id}/access/apps/{app_id}/ca":
    zoneLevelAccessShortLivedCertificateCAsCreateAShortLivedCertificateCa,
  "GET /zones/{zone_id}/access/apps/{app_id}/policies":
    zoneLevelAccessPoliciesListAccessPolicies,
  "POST /zones/{zone_id}/access/apps/{app_id}/policies":
    zoneLevelAccessPoliciesCreateAnAccessPolicy,
  "DELETE /zones/{zone_id}/access/apps/{app_id}/policies/{policy_id}":
    zoneLevelAccessPoliciesDeleteAnAccessPolicy,
  "GET /zones/{zone_id}/access/apps/{app_id}/policies/{policy_id}":
    zoneLevelAccessPoliciesGetAnAccessPolicy,
  "PUT /zones/{zone_id}/access/apps/{app_id}/policies/{policy_id}":
    zoneLevelAccessPoliciesUpdateAnAccessPolicy,
  "POST /zones/{zone_id}/access/apps/{app_id}/revoke_tokens":
    zoneLevelAccessApplicationsRevokeServiceTokens,
  "PATCH /zones/{zone_id}/access/apps/{app_id}/settings":
    zoneLevelAccessApplicationsPatchUpdateAccessApplicationSettings,
  "PUT /zones/{zone_id}/access/apps/{app_id}/settings":
    zoneLevelAccessApplicationsPutUpdateAccessApplicationSettings,
  "GET /zones/{zone_id}/access/apps/{app_id}/user_policy_checks":
    zoneLevelAccessApplicationsTestAccessPolicies,
  "GET /zones/{zone_id}/access/certificates":
    zoneLevelAccessMtlsAuthenticationListMtlsCertificates,
  "POST /zones/{zone_id}/access/certificates":
    zoneLevelAccessMtlsAuthenticationAddAnMtlsCertificate,
  "GET /zones/{zone_id}/access/certificates/settings":
    zoneLevelAccessMtlsAuthenticationListMtlsCertificatesHostnameSettings,
  "PUT /zones/{zone_id}/access/certificates/settings":
    zoneLevelAccessMtlsAuthenticationUpdateAnMtlsCertificateSettings,
  "DELETE /zones/{zone_id}/access/certificates/{certificate_id}":
    zoneLevelAccessMtlsAuthenticationDeleteAnMtlsCertificate,
  "GET /zones/{zone_id}/access/certificates/{certificate_id}":
    zoneLevelAccessMtlsAuthenticationGetAnMtlsCertificate,
  "PUT /zones/{zone_id}/access/certificates/{certificate_id}":
    zoneLevelAccessMtlsAuthenticationUpdateAnMtlsCertificate,
  "GET /zones/{zone_id}/access/groups": zoneLevelAccessGroupsListAccessGroups,
  "POST /zones/{zone_id}/access/groups":
    zoneLevelAccessGroupsCreateAnAccessGroup,
  "DELETE /zones/{zone_id}/access/groups/{group_id}":
    zoneLevelAccessGroupsDeleteAnAccessGroup,
  "GET /zones/{zone_id}/access/groups/{group_id}":
    zoneLevelAccessGroupsGetAnAccessGroup,
  "PUT /zones/{zone_id}/access/groups/{group_id}":
    zoneLevelAccessGroupsUpdateAnAccessGroup,
  "GET /zones/{zone_id}/access/identity_providers":
    zoneLevelAccessIdentityProvidersListAccessIdentityProviders,
  "POST /zones/{zone_id}/access/identity_providers":
    zoneLevelAccessIdentityProvidersAddAnAccessIdentityProvider,
  "DELETE /zones/{zone_id}/access/identity_providers/{identity_provider_id}":
    zoneLevelAccessIdentityProvidersDeleteAnAccessIdentityProvider,
  "GET /zones/{zone_id}/access/identity_providers/{identity_provider_id}":
    zoneLevelAccessIdentityProvidersGetAnAccessIdentityProvider,
  "PUT /zones/{zone_id}/access/identity_providers/{identity_provider_id}":
    zoneLevelAccessIdentityProvidersUpdateAnAccessIdentityProvider,
  "GET /zones/{zone_id}/access/organizations":
    zoneLevelZeroTrustOrganizationGetYourZeroTrustOrganization,
  "POST /zones/{zone_id}/access/organizations":
    zoneLevelZeroTrustOrganizationCreateYourZeroTrustOrganization,
  "PUT /zones/{zone_id}/access/organizations":
    zoneLevelZeroTrustOrganizationUpdateYourZeroTrustOrganization,
  "POST /zones/{zone_id}/access/organizations/revoke_user":
    zoneLevelZeroTrustOrganizationRevokeAllAccessTokensForAUser,
  "GET /zones/{zone_id}/access/service_tokens":
    zoneLevelAccessServiceTokensListServiceTokens,
  "POST /zones/{zone_id}/access/service_tokens":
    zoneLevelAccessServiceTokensCreateAServiceToken,
  "DELETE /zones/{zone_id}/access/service_tokens/{service_token_id}":
    zoneLevelAccessServiceTokensDeleteAServiceToken,
  "GET /zones/{zone_id}/access/service_tokens/{service_token_id}":
    zoneLevelAccessServiceTokensGetAServiceToken,
  "PUT /zones/{zone_id}/access/service_tokens/{service_token_id}":
    zoneLevelAccessServiceTokensUpdateAServiceToken,
  "GET /zones/{zone_id}/acm/custom_trust_store":
    customOriginTrustStoreListDetails,
  "POST /zones/{zone_id}/acm/custom_trust_store": customOriginTrustStoreCreate,
  "DELETE /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}":
    customOriginTrustStoreDelete,
  "GET /zones/{zone_id}/acm/custom_trust_store/{custom_origin_trust_store_id}":
    customOriginTrustStoreDetails,
  "GET /zones/{zone_id}/acm/total_tls": totalTlsTotalTlsSettingsDetails,
  "POST /zones/{zone_id}/acm/total_tls": totalTlsEnableOrDisableTotalTls,
  "PUT /zones/{zone_id}/activation_check": putZonesZoneIdActivationCheck,
  "GET /zones/{zone_id}/addressing/regional_hostnames":
    dlsAccountRegionalHostnamesAccountListHostnames,
  "POST /zones/{zone_id}/addressing/regional_hostnames":
    dlsAccountRegionalHostnamesAccountCreateHostname,
  "DELETE /zones/{zone_id}/addressing/regional_hostnames/{hostname}":
    dlsAccountRegionalHostnamesAccountDeleteHostname,
  "GET /zones/{zone_id}/addressing/regional_hostnames/{hostname}":
    dlsAccountRegionalHostnamesAccountFetchHostname,
  "PATCH /zones/{zone_id}/addressing/regional_hostnames/{hostname}":
    dlsAccountRegionalHostnamesAccountPatchHostname,
  "GET /zones/{zone_id}/analytics/latency":
    argoAnalyticsForZoneArgoAnalyticsForAZone,
  "GET /zones/{zone_id}/analytics/latency/colos":
    argoAnalyticsForGeolocationArgoAnalyticsForAZoneAtDifferentPoPs,
  "GET /zones/{zone_id}/api_gateway/configuration":
    apiShieldSettingsRetrieveInformationAboutSpecificConfigurationProperties,
  "PUT /zones/{zone_id}/api_gateway/configuration":
    apiShieldSettingsSetConfigurationProperties,
  "GET /zones/{zone_id}/api_gateway/discovery":
    apiShieldApiDiscoveryRetrieveDiscoveredOperationsOnAZoneAsOpenapi,
  "GET /zones/{zone_id}/api_gateway/discovery/operations":
    apiShieldApiDiscoveryRetrieveDiscoveredOperationsOnAZone,
  "PATCH /zones/{zone_id}/api_gateway/discovery/operations":
    apiShieldApiPatchDiscoveredOperations,
  "PATCH /zones/{zone_id}/api_gateway/discovery/operations/{operation_id}":
    apiShieldApiPatchDiscoveredOperation,
  "POST /zones/{zone_id}/api_gateway/expression-template/fallthrough":
    apiShieldExpressionTemplatesFallthrough,
  "DELETE /zones/{zone_id}/api_gateway/operations":
    apiShieldEndpointManagementDeleteMultipleOperations,
  "GET /zones/{zone_id}/api_gateway/operations":
    apiShieldEndpointManagementRetrieveInformationAboutAllOperationsOnAZone,
  "POST /zones/{zone_id}/api_gateway/operations":
    apiShieldEndpointManagementAddOperationsToAZone,
  "POST /zones/{zone_id}/api_gateway/operations/item":
    apiShieldEndpointManagementAddOperationToAZone,
  "PATCH /zones/{zone_id}/api_gateway/operations/schema_validation":
    apiShieldSchemaValidationUpdateMultipleOperationLevelSettings,
  "DELETE /zones/{zone_id}/api_gateway/operations/{operation_id}":
    apiShieldEndpointManagementDeleteAnOperation,
  "GET /zones/{zone_id}/api_gateway/operations/{operation_id}":
    apiShieldEndpointManagementRetrieveInformationAboutAnOperation,
  "GET /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation":
    apiShieldSchemaValidationRetrieveOperationLevelSettings,
  "PUT /zones/{zone_id}/api_gateway/operations/{operation_id}/schema_validation":
    apiShieldSchemaValidationUpdateOperationLevelSettings,
  "GET /zones/{zone_id}/api_gateway/schemas":
    apiShieldEndpointManagementRetrieveOperationsAndFeaturesAsOpenApiSchemas,
  "GET /zones/{zone_id}/api_gateway/settings/schema_validation":
    apiShieldSchemaValidationRetrieveZoneLevelSettings,
  "PATCH /zones/{zone_id}/api_gateway/settings/schema_validation":
    apiShieldSchemaValidationPatchZoneLevelSettings,
  "PUT /zones/{zone_id}/api_gateway/settings/schema_validation":
    apiShieldSchemaValidationUpdateZoneLevelSettings,
  "GET /zones/{zone_id}/api_gateway/user_schemas":
    apiShieldSchemaValidationRetrieveInformationAboutAllSchemas,
  "POST /zones/{zone_id}/api_gateway/user_schemas":
    apiShieldSchemaValidationPostSchema,
  "GET /zones/{zone_id}/api_gateway/user_schemas/hosts":
    apiShieldSchemaValidationRetrieveUserSchemaHosts,
  "DELETE /zones/{zone_id}/api_gateway/user_schemas/{schema_id}":
    apiShieldSchemaDeleteASchema,
  "GET /zones/{zone_id}/api_gateway/user_schemas/{schema_id}":
    apiShieldSchemaValidationRetrieveInformationAboutSpecificSchema,
  "PATCH /zones/{zone_id}/api_gateway/user_schemas/{schema_id}":
    apiShieldSchemaValidationEnableValidationForASchema,
  "GET /zones/{zone_id}/api_gateway/user_schemas/{schema_id}/operations":
    apiShieldSchemaValidationExtractOperationsFromSchema,
  "GET /zones/{zone_id}/argo/smart_routing":
    argoSmartRoutingGetArgoSmartRoutingSetting,
  "PATCH /zones/{zone_id}/argo/smart_routing":
    argoSmartRoutingPatchArgoSmartRoutingSetting,
  "GET /zones/{zone_id}/argo/tiered_caching":
    tieredCachingGetTieredCachingSetting,
  "PATCH /zones/{zone_id}/argo/tiered_caching":
    tieredCachingPatchTieredCachingSetting,
  "GET /zones/{zone_id}/available_plans": zoneRatePlanListAvailablePlans,
  "GET /zones/{zone_id}/available_plans/{plan_identifier}":
    zoneRatePlanAvailablePlanDetails,
  "GET /zones/{zone_id}/available_rate_plans":
    zoneRatePlanListAvailableRatePlans,
  "GET /zones/{zone_id}/bot_management": botManagementForAZoneGetConfig,
  "PUT /zones/{zone_id}/bot_management": botManagementForAZoneUpdateConfig,
  "GET /zones/{zone_id}/bot_management/feedback": botManagementZoneFeedbackList,
  "POST /zones/{zone_id}/bot_management/feedback":
    botManagementZoneFeedbackCreate,
  "GET /zones/{zone_id}/cache/cache_reserve":
    zoneCacheSettingsGetCacheReserveSetting,
  "PATCH /zones/{zone_id}/cache/cache_reserve":
    zoneCacheSettingsChangeCacheReserveSetting,
  "GET /zones/{zone_id}/cache/cache_reserve_clear":
    zoneCacheSettingsGetCacheReserveClear,
  "POST /zones/{zone_id}/cache/cache_reserve_clear":
    zoneCacheSettingsStartCacheReserveClear,
  "GET /zones/{zone_id}/cache/origin_post_quantum_encryption":
    zoneCacheSettingsGetOriginPostQuantumEncryptionSetting,
  "PUT /zones/{zone_id}/cache/origin_post_quantum_encryption":
    zoneCacheSettingsChangeOriginPostQuantumEncryptionSetting,
  "GET /zones/{zone_id}/cache/regional_tiered_cache":
    zoneCacheSettingsGetRegionalTieredCacheSetting,
  "PATCH /zones/{zone_id}/cache/regional_tiered_cache":
    zoneCacheSettingsChangeRegionalTieredCacheSetting,
  "DELETE /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":
    smartTieredCacheDeleteSmartTieredCacheSetting,
  "GET /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":
    smartTieredCacheGetSmartTieredCacheSetting,
  "PATCH /zones/{zone_id}/cache/tiered_cache_smart_topology_enable":
    smartTieredCachePatchSmartTieredCacheSetting,
  "DELETE /zones/{zone_id}/cache/variants":
    zoneCacheSettingsDeleteVariantsSetting,
  "GET /zones/{zone_id}/cache/variants": zoneCacheSettingsGetVariantsSetting,
  "PATCH /zones/{zone_id}/cache/variants":
    zoneCacheSettingsChangeVariantsSetting,
  "GET /zones/{zone_id}/certificate_authorities/hostname_associations":
    clientCertificateForAZoneListHostnameAssociations,
  "PUT /zones/{zone_id}/certificate_authorities/hostname_associations":
    clientCertificateForAZonePutHostnameAssociations,
  "GET /zones/{zone_id}/client_certificates":
    clientCertificateForAZoneListClientCertificates,
  "POST /zones/{zone_id}/client_certificates":
    clientCertificateForAZoneCreateClientCertificate,
  "DELETE /zones/{zone_id}/client_certificates/{client_certificate_id}":
    clientCertificateForAZoneDeleteClientCertificate,
  "GET /zones/{zone_id}/client_certificates/{client_certificate_id}":
    clientCertificateForAZoneClientCertificateDetails,
  "PATCH /zones/{zone_id}/client_certificates/{client_certificate_id}":
    clientCertificateForAZoneEditClientCertificate,
  "GET /zones/{zone_id}/cloud_connector/rules": zoneCloudConnectorRules,
  "PUT /zones/{zone_id}/cloud_connector/rules": zoneCloudConenctorRulesPut,
  "POST /zones/{zone_id}/content-upload-scan/disable":
    wafContentScanningDisable,
  "POST /zones/{zone_id}/content-upload-scan/enable": wafContentScanningEnable,
  "GET /zones/{zone_id}/content-upload-scan/payloads":
    wafContentScanningListCustomScanExpressions,
  "POST /zones/{zone_id}/content-upload-scan/payloads":
    wafContentScanningAddCustomScanExpressions,
  "DELETE /zones/{zone_id}/content-upload-scan/payloads/{expression_id}":
    wafContentScanningDeleteCustomScanExpressions,
  "GET /zones/{zone_id}/content-upload-scan/settings":
    wafContentScanningGetStatus,
  "PUT /zones/{zone_id}/content-upload-scan/settings":
    wafContentScanningUpdateSettings,
  "GET /zones/{zone_id}/custom_certificates":
    customSslForAZoneListSslConfigurations,
  "POST /zones/{zone_id}/custom_certificates":
    customSslForAZoneCreateSslConfiguration,
  "PUT /zones/{zone_id}/custom_certificates/prioritize":
    customSslForAZoneRePrioritizeSslCertificates,
  "DELETE /zones/{zone_id}/custom_certificates/{custom_certificate_id}":
    customSslForAZoneDeleteSslConfiguration,
  "GET /zones/{zone_id}/custom_certificates/{custom_certificate_id}":
    customSslForAZoneSslConfigurationDetails,
  "PATCH /zones/{zone_id}/custom_certificates/{custom_certificate_id}":
    customSslForAZoneEditSslConfiguration,
  "GET /zones/{zone_id}/custom_hostnames":
    customHostnameForAZoneListCustomHostnames,
  "POST /zones/{zone_id}/custom_hostnames":
    customHostnameForAZoneCreateCustomHostname,
  "DELETE /zones/{zone_id}/custom_hostnames/fallback_origin":
    customHostnameFallbackOriginForAZoneDeleteFallbackOriginForCustomHostnames,
  "GET /zones/{zone_id}/custom_hostnames/fallback_origin":
    customHostnameFallbackOriginForAZoneGetFallbackOriginForCustomHostnames,
  "PUT /zones/{zone_id}/custom_hostnames/fallback_origin":
    customHostnameFallbackOriginForAZoneUpdateFallbackOriginForCustomHostnames,
  "DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}":
    customHostnameForAZoneDeleteCustomHostnameAndAnyIssuedSslCertificates,
  "GET /zones/{zone_id}/custom_hostnames/{custom_hostname_id}":
    customHostnameForAZoneCustomHostnameDetails,
  "PATCH /zones/{zone_id}/custom_hostnames/{custom_hostname_id}":
    customHostnameForAZoneEditCustomHostname,
  "DELETE /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}":
    customHostnameForAZoneDeleteSingleCertificateAndKeyInACustomHostname,
  "PUT /zones/{zone_id}/custom_hostnames/{custom_hostname_id}/certificate_pack/{certificate_pack_id}/certificates/{certificate_id}":
    customHostnameForAZoneEditCustomCertificateCustomHostname,
  "GET /zones/{zone_id}/custom_ns":
    accountLevelCustomNameserversUsageForAZoneGetAccountCustomNameserverRelatedZoneMetadata,
  "PUT /zones/{zone_id}/custom_ns":
    accountLevelCustomNameserversUsageForAZoneSetAccountCustomNameserverRelatedZoneMetadata,
  "GET /zones/{zone_id}/dcv_delegation/uuid": dcvDelegationUuidGet,
  "GET /zones/{zone_id}/devices/policy/certificates":
    devicesGetPolicyCertificates,
  "PATCH /zones/{zone_id}/devices/policy/certificates":
    devicesUpdatePolicyCertificates,
  "GET /zones/{zone_id}/dns_analytics/report": dnsAnalyticsTable,
  "GET /zones/{zone_id}/dns_analytics/report/bytime": dnsAnalyticsByTime,
  "GET /zones/{zone_id}/dns_records": dnsRecordsForAZoneListDnsRecords,
  "POST /zones/{zone_id}/dns_records": dnsRecordsForAZoneCreateDnsRecord,
  "POST /zones/{zone_id}/dns_records/batch": dnsRecordsForAZoneBatchDnsRecords,
  "GET /zones/{zone_id}/dns_records/export": dnsRecordsForAZoneExportDnsRecords,
  "POST /zones/{zone_id}/dns_records/import":
    dnsRecordsForAZoneImportDnsRecords,
  "POST /zones/{zone_id}/dns_records/scan": dnsRecordsForAZoneScanDnsRecords,
  "GET /zones/{zone_id}/dns_records/scan/review":
    dnsRecordsForAZoneReviewDnsScan,
  "POST /zones/{zone_id}/dns_records/scan/review":
    dnsRecordsForAZoneApplyDnsScanResults,
  "POST /zones/{zone_id}/dns_records/scan/trigger":
    dnsRecordsForAZoneTriggerDnsScan,
  "GET /zones/{zone_id}/dns_records/usage": dnsRecordsForAZoneGetUsage,
  "DELETE /zones/{zone_id}/dns_records/{dns_record_id}":
    dnsRecordsForAZoneDeleteDnsRecord,
  "GET /zones/{zone_id}/dns_records/{dns_record_id}":
    dnsRecordsForAZoneDnsRecordDetails,
  "PATCH /zones/{zone_id}/dns_records/{dns_record_id}":
    dnsRecordsForAZonePatchDnsRecord,
  "PUT /zones/{zone_id}/dns_records/{dns_record_id}":
    dnsRecordsForAZoneUpdateDnsRecord,
  "GET /zones/{zone_id}/dns_settings": dnsSettingsForAZoneListDnsSettings,
  "PATCH /zones/{zone_id}/dns_settings": dnsSettingsForAZoneUpdateDnsSettings,
  "DELETE /zones/{zone_id}/dnssec": dnssecDeleteDnssecRecords,
  "GET /zones/{zone_id}/dnssec": dnssecDnssecDetails,
  "PATCH /zones/{zone_id}/dnssec": dnssecEditDnssecStatus,
  "GET /zones/{zone_id}/email/routing":
    emailRoutingSettingsGetEmailRoutingSettings,
  "POST /zones/{zone_id}/email/routing/disable":
    emailRoutingSettingsDisableEmailRouting,
  "DELETE /zones/{zone_id}/email/routing/dns":
    emailRoutingSettingsDisableEmailRoutingDns,
  "GET /zones/{zone_id}/email/routing/dns":
    emailRoutingSettingsEmailRoutingDnsSettings,
  "PATCH /zones/{zone_id}/email/routing/dns":
    emailRoutingSettingsUnlockEmailRoutingDns,
  "POST /zones/{zone_id}/email/routing/dns":
    emailRoutingSettingsEnableEmailRoutingDns,
  "POST /zones/{zone_id}/email/routing/enable":
    emailRoutingSettingsEnableEmailRouting,
  "GET /zones/{zone_id}/email/routing/rules":
    emailRoutingRoutingRulesListRoutingRules,
  "POST /zones/{zone_id}/email/routing/rules":
    emailRoutingRoutingRulesCreateRoutingRule,
  "GET /zones/{zone_id}/email/routing/rules/catch_all":
    emailRoutingRoutingRulesGetCatchAllRule,
  "PUT /zones/{zone_id}/email/routing/rules/catch_all":
    emailRoutingRoutingRulesUpdateCatchAllRule,
  "DELETE /zones/{zone_id}/email/routing/rules/{rule_identifier}":
    emailRoutingRoutingRulesDeleteRoutingRule,
  "GET /zones/{zone_id}/email/routing/rules/{rule_identifier}":
    emailRoutingRoutingRulesGetRoutingRule,
  "PUT /zones/{zone_id}/email/routing/rules/{rule_identifier}":
    emailRoutingRoutingRulesUpdateRoutingRule,
  "DELETE /zones/{zone_id}/filters": filtersDeleteFilters,
  "GET /zones/{zone_id}/filters": filtersListFilters,
  "POST /zones/{zone_id}/filters": filtersCreateFilters,
  "PUT /zones/{zone_id}/filters": filtersUpdateFilters,
  "DELETE /zones/{zone_id}/filters/{filter_id}": filtersDeleteAFilter,
  "GET /zones/{zone_id}/filters/{filter_id}": filtersGetAFilter,
  "PUT /zones/{zone_id}/filters/{filter_id}": filtersUpdateAFilter,
  "GET /zones/{zone_id}/firewall/access_rules/rules":
    ipAccessRulesForAZoneListIpAccessRules,
  "POST /zones/{zone_id}/firewall/access_rules/rules":
    ipAccessRulesForAZoneCreateAnIpAccessRule,
  "DELETE /zones/{zone_id}/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAZoneDeleteAnIpAccessRule,
  "PATCH /zones/{zone_id}/firewall/access_rules/rules/{rule_id}":
    ipAccessRulesForAZoneUpdateAnIpAccessRule,
  "GET /zones/{zone_id}/firewall/lockdowns": zoneLockdownListZoneLockdownRules,
  "POST /zones/{zone_id}/firewall/lockdowns":
    zoneLockdownCreateAZoneLockdownRule,
  "DELETE /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}":
    zoneLockdownDeleteAZoneLockdownRule,
  "GET /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}":
    zoneLockdownGetAZoneLockdownRule,
  "PUT /zones/{zone_id}/firewall/lockdowns/{lock_downs_id}":
    zoneLockdownUpdateAZoneLockdownRule,
  "DELETE /zones/{zone_id}/firewall/rules": firewallRulesDeleteFirewallRules,
  "GET /zones/{zone_id}/firewall/rules": firewallRulesListFirewallRules,
  "PATCH /zones/{zone_id}/firewall/rules":
    firewallRulesUpdatePriorityOfFirewallRules,
  "POST /zones/{zone_id}/firewall/rules": firewallRulesCreateFirewallRules,
  "PUT /zones/{zone_id}/firewall/rules": firewallRulesUpdateFirewallRules,
  "DELETE /zones/{zone_id}/firewall/rules/{rule_id}":
    firewallRulesDeleteAFirewallRule,
  "GET /zones/{zone_id}/firewall/rules/{rule_id}":
    firewallRulesGetAFirewallRule,
  "PATCH /zones/{zone_id}/firewall/rules/{rule_id}":
    firewallRulesUpdatePriorityOfAFirewallRule,
  "PUT /zones/{zone_id}/firewall/rules/{rule_id}":
    firewallRulesUpdateAFirewallRule,
  "GET /zones/{zone_id}/firewall/ua_rules":
    userAgentBlockingRulesListUserAgentBlockingRules,
  "POST /zones/{zone_id}/firewall/ua_rules":
    userAgentBlockingRulesCreateAUserAgentBlockingRule,
  "DELETE /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}":
    userAgentBlockingRulesDeleteAUserAgentBlockingRule,
  "GET /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}":
    userAgentBlockingRulesGetAUserAgentBlockingRule,
  "PUT /zones/{zone_id}/firewall/ua_rules/{ua_rule_id}":
    userAgentBlockingRulesUpdateAUserAgentBlockingRule,
  "GET /zones/{zone_id}/firewall/waf/overrides": wafOverridesListWafOverrides,
  "POST /zones/{zone_id}/firewall/waf/overrides":
    wafOverridesCreateAWafOverride,
  "DELETE /zones/{zone_id}/firewall/waf/overrides/{overrides_id}":
    wafOverridesDeleteAWafOverride,
  "GET /zones/{zone_id}/firewall/waf/overrides/{overrides_id}":
    wafOverridesGetAWafOverride,
  "PUT /zones/{zone_id}/firewall/waf/overrides/{overrides_id}":
    wafOverridesUpdateWafOverride,
  "GET /zones/{zone_id}/firewall/waf/packages": wafPackagesListWafPackages,
  "GET /zones/{zone_id}/firewall/waf/packages/{package_id}":
    wafPackagesGetAWafPackage,
  "PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}":
    wafPackagesUpdateAWafPackage,
  "GET /zones/{zone_id}/firewall/waf/packages/{package_id}/groups":
    wafRuleGroupsListWafRuleGroups,
  "GET /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}":
    wafRuleGroupsGetAWafRuleGroup,
  "PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}/groups/{group_id}":
    wafRuleGroupsUpdateAWafRuleGroup,
  "GET /zones/{zone_id}/firewall/waf/packages/{package_id}/rules":
    wafRulesListWafRules,
  "GET /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}":
    wafRulesGetAWafRule,
  "PATCH /zones/{zone_id}/firewall/waf/packages/{package_id}/rules/{rule_id}":
    wafRulesUpdateAWafRule,
  "GET /zones/{zone_id}/healthchecks": healthChecksListHealthChecks,
  "POST /zones/{zone_id}/healthchecks": healthChecksCreateHealthCheck,
  "POST /zones/{zone_id}/healthchecks/preview":
    healthChecksCreatePreviewHealthCheck,
  "DELETE /zones/{zone_id}/healthchecks/preview/{healthcheck_id}":
    healthChecksDeletePreviewHealthCheck,
  "GET /zones/{zone_id}/healthchecks/preview/{healthcheck_id}":
    healthChecksHealthCheckPreviewDetails,
  "DELETE /zones/{zone_id}/healthchecks/{healthcheck_id}":
    healthChecksDeleteHealthCheck,
  "GET /zones/{zone_id}/healthchecks/{healthcheck_id}":
    healthChecksHealthCheckDetails,
  "PATCH /zones/{zone_id}/healthchecks/{healthcheck_id}":
    healthChecksPatchHealthCheck,
  "PUT /zones/{zone_id}/healthchecks/{healthcheck_id}":
    healthChecksUpdateHealthCheck,
  "DELETE /zones/{zone_id}/hold": zones0HoldDelete,
  "GET /zones/{zone_id}/hold": zones0HoldGet,
  "PATCH /zones/{zone_id}/hold": zones0HoldPatch,
  "POST /zones/{zone_id}/hold": zones0HoldPost,
  "GET /zones/{zone_id}/hostnames/settings/{setting_id}":
    perHostnameTlsSettingsList,
  "DELETE /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}":
    perHostnameTlsSettingsDelete,
  "GET /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}":
    perHostnameTlsSettingsGet,
  "PUT /zones/{zone_id}/hostnames/settings/{setting_id}/{hostname}":
    perHostnameTlsSettingsPut,
  "GET /zones/{zone_id}/keyless_certificates":
    keylessSslForAZoneListKeylessSslConfigurations,
  "POST /zones/{zone_id}/keyless_certificates":
    keylessSslForAZoneCreateKeylessSslConfiguration,
  "DELETE /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}":
    keylessSslForAZoneDeleteKeylessSslConfiguration,
  "GET /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}":
    keylessSslForAZoneGetKeylessSslConfiguration,
  "PATCH /zones/{zone_id}/keyless_certificates/{keyless_certificate_id}":
    keylessSslForAZoneEditKeylessSslConfiguration,
  "GET /zones/{zone_id}/leaked-credential-checks":
    wafProductApiLeakedCredentialsGetStatus,
  "POST /zones/{zone_id}/leaked-credential-checks":
    wafProductApiLeakedCredentialsSetStatus,
  "GET /zones/{zone_id}/leaked-credential-checks/detections":
    wafProductApiLeakedCredentialsListDetections,
  "POST /zones/{zone_id}/leaked-credential-checks/detections":
    wafProductApiLeakedCredentialsCreateDetection,
  "DELETE /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}":
    wafProductApiLeakedCredentialsDeleteDetection,
  "GET /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}":
    wafProductApiLeakedCredentialsGetDetection,
  "PUT /zones/{zone_id}/leaked-credential-checks/detections/{detection_id}":
    wafProductApiLeakedCredentialsUpdateDetection,
  "GET /zones/{zone_id}/load_balancers": loadBalancersListLoadBalancers,
  "POST /zones/{zone_id}/load_balancers": loadBalancersCreateLoadBalancer,
  "DELETE /zones/{zone_id}/load_balancers/{load_balancer_id}":
    loadBalancersDeleteLoadBalancer,
  "GET /zones/{zone_id}/load_balancers/{load_balancer_id}":
    loadBalancersLoadBalancerDetails,
  "PATCH /zones/{zone_id}/load_balancers/{load_balancer_id}":
    loadBalancersPatchLoadBalancer,
  "PUT /zones/{zone_id}/load_balancers/{load_balancer_id}":
    loadBalancersUpdateLoadBalancer,
  "GET /zones/{zone_id}/logpush/datasets/{dataset_id}/fields":
    getZonesZoneIdLogpushDatasetsDatasetIdFields,
  "GET /zones/{zone_id}/logpush/datasets/{dataset_id}/jobs":
    getZonesZoneIdLogpushDatasetsDatasetIdJobs,
  "GET /zones/{zone_id}/logpush/edge/jobs": getZonesZoneIdLogpushEdgeJobs,
  "POST /zones/{zone_id}/logpush/edge/jobs": postZonesZoneIdLogpushEdgeJobs,
  "GET /zones/{zone_id}/logpush/jobs": getZonesZoneIdLogpushJobs,
  "POST /zones/{zone_id}/logpush/jobs": postZonesZoneIdLogpushJobs,
  "DELETE /zones/{zone_id}/logpush/jobs/{job_id}":
    deleteZonesZoneIdLogpushJobsJobId,
  "GET /zones/{zone_id}/logpush/jobs/{job_id}": getZonesZoneIdLogpushJobsJobId,
  "PUT /zones/{zone_id}/logpush/jobs/{job_id}": putZonesZoneIdLogpushJobsJobId,
  "POST /zones/{zone_id}/logpush/ownership": postZonesZoneIdLogpushOwnership,
  "POST /zones/{zone_id}/logpush/ownership/validate":
    postZonesZoneIdLogpushOwnershipValidate,
  "POST /zones/{zone_id}/logpush/validate/destination":
    postZonesZoneIdLogpushValidateDestination,
  "POST /zones/{zone_id}/logpush/validate/destination/exists":
    postZonesZoneIdLogpushValidateDestinationExists,
  "POST /zones/{zone_id}/logpush/validate/origin":
    postZonesZoneIdLogpushValidateOrigin,
  "GET /zones/{zone_id}/logs/control/retention/flag":
    getZonesZoneIdLogsControlRetentionFlag,
  "POST /zones/{zone_id}/logs/control/retention/flag":
    postZonesZoneIdLogsControlRetentionFlag,
  "GET /zones/{zone_id}/logs/rayids/{ray_id}": getZonesZoneIdLogsRayidsRayId,
  "GET /zones/{zone_id}/logs/received": getZonesZoneIdLogsReceived,
  "GET /zones/{zone_id}/logs/received/fields": getZonesZoneIdLogsReceivedFields,
  "DELETE /zones/{zone_id}/managed_headers": deleteManagedTransforms,
  "GET /zones/{zone_id}/managed_headers": listManagedTransforms,
  "PATCH /zones/{zone_id}/managed_headers": updateManagedTransforms,
  "GET /zones/{zone_id}/origin_tls_client_auth":
    zoneLevelAuthenticatedOriginPullsListCertificates,
  "POST /zones/{zone_id}/origin_tls_client_auth":
    zoneLevelAuthenticatedOriginPullsUploadCertificate,
  "PUT /zones/{zone_id}/origin_tls_client_auth/hostnames":
    perHostnameAuthenticatedOriginPullEnableOrDisableAHostnameForClientAuthentication,
  "GET /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates":
    perHostnameAuthenticatedOriginPullListCertificates,
  "POST /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates":
    perHostnameAuthenticatedOriginPullUploadAHostnameClientCertificate,
  "DELETE /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}":
    perHostnameAuthenticatedOriginPullDeleteHostnameClientCertificate,
  "GET /zones/{zone_id}/origin_tls_client_auth/hostnames/certificates/{certificate_id}":
    perHostnameAuthenticatedOriginPullGetTheHostnameClientCertificate,
  "GET /zones/{zone_id}/origin_tls_client_auth/hostnames/{hostname}":
    perHostnameAuthenticatedOriginPullGetTheHostnameStatusForClientAuthentication,
  "GET /zones/{zone_id}/origin_tls_client_auth/settings":
    zoneLevelAuthenticatedOriginPullsGetEnablementSettingForZone,
  "PUT /zones/{zone_id}/origin_tls_client_auth/settings":
    zoneLevelAuthenticatedOriginPullsSetEnablementForZone,
  "DELETE /zones/{zone_id}/origin_tls_client_auth/{certificate_id}":
    zoneLevelAuthenticatedOriginPullsDeleteCertificate,
  "GET /zones/{zone_id}/origin_tls_client_auth/{certificate_id}":
    zoneLevelAuthenticatedOriginPullsGetCertificateDetails,
  "GET /zones/{zone_id}/page_shield": pageShieldGetSettings,
  "PUT /zones/{zone_id}/page_shield": pageShieldUpdateSettings,
  "GET /zones/{zone_id}/page_shield/connections": pageShieldListConnections,
  "GET /zones/{zone_id}/page_shield/connections/{connection_id}":
    pageShieldGetConnection,
  "GET /zones/{zone_id}/page_shield/cookies": pageShieldListCookies,
  "GET /zones/{zone_id}/page_shield/cookies/{cookie_id}": pageShieldGetCookie,
  "GET /zones/{zone_id}/page_shield/policies": pageShieldListPolicies,
  "POST /zones/{zone_id}/page_shield/policies": pageShieldCreatePolicy,
  "DELETE /zones/{zone_id}/page_shield/policies/{policy_id}":
    pageShieldDeletePolicy,
  "GET /zones/{zone_id}/page_shield/policies/{policy_id}": pageShieldGetPolicy,
  "PUT /zones/{zone_id}/page_shield/policies/{policy_id}":
    pageShieldUpdatePolicy,
  "GET /zones/{zone_id}/page_shield/scripts": pageShieldListScripts,
  "GET /zones/{zone_id}/page_shield/scripts/{script_id}": pageShieldGetScript,
  "GET /zones/{zone_id}/pagerules": pageRulesListPageRules,
  "POST /zones/{zone_id}/pagerules": pageRulesCreateAPageRule,
  "GET /zones/{zone_id}/pagerules/settings":
    availablePageRulesSettingsListAvailablePageRulesSettings,
  "DELETE /zones/{zone_id}/pagerules/{pagerule_id}": pageRulesDeleteAPageRule,
  "GET /zones/{zone_id}/pagerules/{pagerule_id}": pageRulesGetAPageRule,
  "PATCH /zones/{zone_id}/pagerules/{pagerule_id}": pageRulesEditAPageRule,
  "PUT /zones/{zone_id}/pagerules/{pagerule_id}": pageRulesUpdateAPageRule,
  "GET /zones/{zone_id}/pay-per-crawl/configuration": payPerCrawlGetConfig,
  "PATCH /zones/{zone_id}/pay-per-crawl/configuration": payPerCrawlPatchConfig,
  "POST /zones/{zone_id}/pay-per-crawl/configuration": payPerCrawlCreateConfig,
  "POST /zones/{zone_id}/purge_cache": zonePurge,
  "GET /zones/{zone_id}/rate_limits": rateLimitsForAZoneListRateLimits,
  "POST /zones/{zone_id}/rate_limits": rateLimitsForAZoneCreateARateLimit,
  "DELETE /zones/{zone_id}/rate_limits/{rate_limit_id}":
    rateLimitsForAZoneDeleteARateLimit,
  "GET /zones/{zone_id}/rate_limits/{rate_limit_id}":
    rateLimitsForAZoneGetARateLimit,
  "PUT /zones/{zone_id}/rate_limits/{rate_limit_id}":
    rateLimitsForAZoneUpdateARateLimit,
  "GET /zones/{zone_id}/rulesets": listZoneRulesets,
  "POST /zones/{zone_id}/rulesets": createZoneRuleset,
  "GET /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint":
    getZoneEntrypointRuleset,
  "PUT /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint":
    updateZoneEntrypointRuleset,
  "GET /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions":
    listZoneEntrypointRulesetVersions,
  "GET /zones/{zone_id}/rulesets/phases/{ruleset_phase}/entrypoint/versions/{ruleset_version}":
    getZoneEntrypointRulesetVersion,
  "DELETE /zones/{zone_id}/rulesets/{ruleset_id}": deleteZoneRuleset,
  "GET /zones/{zone_id}/rulesets/{ruleset_id}": getZoneRuleset,
  "PUT /zones/{zone_id}/rulesets/{ruleset_id}": updateZoneRuleset,
  "POST /zones/{zone_id}/rulesets/{ruleset_id}/rules": createZoneRulesetRule,
  "DELETE /zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}":
    deleteZoneRulesetRule,
  "PATCH /zones/{zone_id}/rulesets/{ruleset_id}/rules/{rule_id}":
    updateZoneRulesetRule,
  "GET /zones/{zone_id}/rulesets/{ruleset_id}/versions":
    listZoneRulesetVersions,
  "DELETE /zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}":
    deleteZoneRulesetVersion,
  "GET /zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}":
    getZoneRulesetVersion,
  "GET /zones/{zone_id}/rulesets/{ruleset_id}/versions/{ruleset_version}/by_tag/{rule_tag}":
    listZoneRulesetVersionRulesByTag,
  "GET /zones/{zone_id}/schema_validation/schemas":
    schemaValidationListSchemasPaginated,
  "POST /zones/{zone_id}/schema_validation/schemas":
    schemaValidationCreateSchema,
  "GET /zones/{zone_id}/schema_validation/schemas/hosts":
    schemaValidationListSchemaHosts,
  "DELETE /zones/{zone_id}/schema_validation/schemas/{schema_id}":
    schemaValidationDeleteSchema,
  "GET /zones/{zone_id}/schema_validation/schemas/{schema_id}":
    schemaValidationGetSchema,
  "PATCH /zones/{zone_id}/schema_validation/schemas/{schema_id}":
    schemaValidationEditSchema,
  "GET /zones/{zone_id}/schema_validation/schemas/{schema_id}/operations":
    schemaValidationExtractOperationsFromSchema,
  "GET /zones/{zone_id}/schema_validation/settings":
    schemaValidationGetSettings,
  "PATCH /zones/{zone_id}/schema_validation/settings":
    schemaValidationEditSettings,
  "PUT /zones/{zone_id}/schema_validation/settings":
    schemaValidationUpdateSettings,
  "GET /zones/{zone_id}/schema_validation/settings/operations":
    schemaValidationListPerOperationSettings,
  "PATCH /zones/{zone_id}/schema_validation/settings/operations":
    schemaValidationBulkEditPerOperationSettings,
  "DELETE /zones/{zone_id}/schema_validation/settings/operations/{operation_id}":
    schemaValidationDeletePerOperationSetting,
  "GET /zones/{zone_id}/schema_validation/settings/operations/{operation_id}":
    schemaValidationGetPerOperationSetting,
  "PUT /zones/{zone_id}/schema_validation/settings/operations/{operation_id}":
    schemaValidationUpdatePerOperationSetting,
  "POST /zones/{zone_id}/secondary_dns/force_axfr":
    secondaryDnsSecondaryZoneForceAxfr,
  "DELETE /zones/{zone_id}/secondary_dns/incoming":
    secondaryDnsSecondaryZoneDeleteSecondaryZoneConfiguration,
  "GET /zones/{zone_id}/secondary_dns/incoming":
    secondaryDnsSecondaryZoneSecondaryZoneConfigurationDetails,
  "POST /zones/{zone_id}/secondary_dns/incoming":
    secondaryDnsSecondaryZoneCreateSecondaryZoneConfiguration,
  "PUT /zones/{zone_id}/secondary_dns/incoming":
    secondaryDnsSecondaryZoneUpdateSecondaryZoneConfiguration,
  "DELETE /zones/{zone_id}/secondary_dns/outgoing":
    secondaryDnsPrimaryZoneDeletePrimaryZoneConfiguration,
  "GET /zones/{zone_id}/secondary_dns/outgoing":
    secondaryDnsPrimaryZonePrimaryZoneConfigurationDetails,
  "POST /zones/{zone_id}/secondary_dns/outgoing":
    secondaryDnsPrimaryZoneCreatePrimaryZoneConfiguration,
  "PUT /zones/{zone_id}/secondary_dns/outgoing":
    secondaryDnsPrimaryZoneUpdatePrimaryZoneConfiguration,
  "POST /zones/{zone_id}/secondary_dns/outgoing/disable":
    secondaryDnsPrimaryZoneDisableOutgoingZoneTransfers,
  "POST /zones/{zone_id}/secondary_dns/outgoing/enable":
    secondaryDnsPrimaryZoneEnableOutgoingZoneTransfers,
  "POST /zones/{zone_id}/secondary_dns/outgoing/force_notify":
    secondaryDnsPrimaryZoneForceDnsNotify,
  "GET /zones/{zone_id}/secondary_dns/outgoing/status":
    secondaryDnsPrimaryZoneGetOutgoingZoneTransferStatus,
  "GET /zones/{zone_id}/security-center/insights":
    getZoneSecurityCenterInsights,
  "GET /zones/{zone_id}/security-center/insights/class":
    getZoneSecurityCenterInsightCountsByClass,
  "GET /zones/{zone_id}/security-center/insights/severity":
    getZoneSecurityCenterInsightCountsBySeverity,
  "GET /zones/{zone_id}/security-center/insights/type":
    getZoneSecurityCenterInsightCountsByType,
  "PUT /zones/{zone_id}/security-center/insights/{issue_id}/dismiss":
    archiveZoneSecurityCenterInsight,
  "DELETE /zones/{zone_id}/security-center/securitytxt": deleteSecurityTxt,
  "GET /zones/{zone_id}/security-center/securitytxt": getSecurityTxt,
  "PUT /zones/{zone_id}/security-center/securitytxt": updateSecurityTxt,
  "GET /zones/{zone_id}/settings": zoneSettingsGetAllZoneSettings,
  "PATCH /zones/{zone_id}/settings": zoneSettingsEditZoneSettingsInfo,
  "GET /zones/{zone_id}/settings/aegis": zoneCacheSettingsGetAegisSetting,
  "PATCH /zones/{zone_id}/settings/aegis": zoneCacheSettingsChangeAegisSetting,
  "GET /zones/{zone_id}/settings/fonts": zoneSettingsGetFontsSetting,
  "PATCH /zones/{zone_id}/settings/fonts": zoneSettingsChangeFontsSetting,
  "GET /zones/{zone_id}/settings/origin_h2_max_streams":
    zoneCacheSettingsGetOriginH2MaxStreamsSetting,
  "PATCH /zones/{zone_id}/settings/origin_h2_max_streams":
    zoneCacheSettingsChangeOriginH2MaxStreamsSetting,
  "GET /zones/{zone_id}/settings/origin_max_http_version":
    zoneCacheSettingsGetOriginMaxHttpVersionSetting,
  "PATCH /zones/{zone_id}/settings/origin_max_http_version":
    zoneCacheSettingsChangeOriginMaxHttpVersionSetting,
  "GET /zones/{zone_id}/settings/rum": webAnalyticsGetRumStatus,
  "PATCH /zones/{zone_id}/settings/rum": webAnalyticsToggleRum,
  "GET /zones/{zone_id}/settings/speed_brain": zoneSettingsGetSpeedBrainSetting,
  "PATCH /zones/{zone_id}/settings/speed_brain":
    zoneSettingsChangeSpeedBrainSetting,
  "GET /zones/{zone_id}/settings/ssl_automatic_mode":
    sslDetectorAutomaticModeGetEnrollment,
  "PATCH /zones/{zone_id}/settings/ssl_automatic_mode":
    sslDetectorAutomaticModePatchEnrollment,
  "GET /zones/{zone_id}/settings/zaraz/config":
    getZonesZoneIdentifierZarazConfig,
  "PUT /zones/{zone_id}/settings/zaraz/config":
    putZonesZoneIdentifierZarazConfig,
  "GET /zones/{zone_id}/settings/zaraz/default":
    getZonesZoneIdentifierZarazDefault,
  "GET /zones/{zone_id}/settings/zaraz/export":
    getZonesZoneIdentifierZarazExport,
  "GET /zones/{zone_id}/settings/zaraz/history":
    getZonesZoneIdentifierZarazHistory,
  "PUT /zones/{zone_id}/settings/zaraz/history":
    putZonesZoneIdentifierZarazHistory,
  "GET /zones/{zone_id}/settings/zaraz/history/configs":
    getZonesZoneIdentifierZarazConfigHistory,
  "POST /zones/{zone_id}/settings/zaraz/publish":
    postZonesZoneIdentifierZarazPublish,
  "GET /zones/{zone_id}/settings/zaraz/workflow":
    getZonesZoneIdentifierZarazWorkflow,
  "PUT /zones/{zone_id}/settings/zaraz/workflow":
    putZonesZoneIdentifierZarazWorkflow,
  "GET /zones/{zone_id}/settings/{setting_id}": zoneSettingsGetSingleSetting,
  "PATCH /zones/{zone_id}/settings/{setting_id}": zoneSettingsEditSingleSetting,
  "GET /zones/{zone_id}/smart_shield": smartShieldGetSettings,
  "PATCH /zones/{zone_id}/smart_shield": smartShieldPatchSettings,
  "GET /zones/{zone_id}/smart_shield/cache_reserve_clear":
    smartShieldSettingsGetCacheReserveClear,
  "POST /zones/{zone_id}/smart_shield/cache_reserve_clear":
    smartShieldSettingsStartCacheReserveClear,
  "GET /zones/{zone_id}/smart_shield/healthchecks": smartShieldListHealthChecks,
  "POST /zones/{zone_id}/smart_shield/healthchecks":
    smartShieldCreateHealthCheck,
  "DELETE /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}":
    smartShieldDeleteHealthCheck,
  "GET /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}":
    smartShieldHealthCheckDetails,
  "PATCH /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}":
    smartShieldPatchHealthCheck,
  "PUT /zones/{zone_id}/smart_shield/healthchecks/{healthcheck_id}":
    smartShieldUpdateHealthCheck,
  "GET /zones/{zone_id}/snippets": listZoneSnippets,
  "DELETE /zones/{zone_id}/snippets/snippet_rules": deleteZoneSnippetRules,
  "GET /zones/{zone_id}/snippets/snippet_rules": listZoneSnippetRules,
  "PUT /zones/{zone_id}/snippets/snippet_rules": updateZoneSnippetRules,
  "DELETE /zones/{zone_id}/snippets/{snippet_name}": deleteZoneSnippet,
  "GET /zones/{zone_id}/snippets/{snippet_name}": getZoneSnippet,
  "PUT /zones/{zone_id}/snippets/{snippet_name}": updateZoneSnippet,
  "GET /zones/{zone_id}/snippets/{snippet_name}/content": getZoneSnippetContent,
  "GET /zones/{zone_id}/spectrum/analytics/aggregate/current":
    spectrumAggregateAnalyticsGetCurrentAggregatedAnalytics,
  "GET /zones/{zone_id}/spectrum/analytics/events/bytime":
    spectrumAnalyticsByTimeGetAnalyticsByTime,
  "GET /zones/{zone_id}/spectrum/analytics/events/summary":
    spectrumAnalyticsSummaryGetAnalyticsSummary,
  "GET /zones/{zone_id}/spectrum/apps":
    spectrumApplicationsListSpectrumApplications,
  "POST /zones/{zone_id}/spectrum/apps":
    spectrumApplicationsCreateSpectrumApplicationUsingANameForTheOrigin,
  "DELETE /zones/{zone_id}/spectrum/apps/{app_id}":
    spectrumApplicationsDeleteSpectrumApplication,
  "GET /zones/{zone_id}/spectrum/apps/{app_id}":
    spectrumApplicationsGetSpectrumApplicationConfiguration,
  "PUT /zones/{zone_id}/spectrum/apps/{app_id}":
    spectrumApplicationsUpdateSpectrumApplicationConfigurationUsingANameForTheOrigin,
  "GET /zones/{zone_id}/speed_api/availabilities": speedGetAvailabilities,
  "GET /zones/{zone_id}/speed_api/pages": speedListPages,
  "DELETE /zones/{zone_id}/speed_api/pages/{url}/tests": speedDeleteTests,
  "GET /zones/{zone_id}/speed_api/pages/{url}/tests": speedListTestHistory,
  "POST /zones/{zone_id}/speed_api/pages/{url}/tests": speedCreateTest,
  "GET /zones/{zone_id}/speed_api/pages/{url}/tests/{test_id}": speedGetTest,
  "GET /zones/{zone_id}/speed_api/pages/{url}/trend": speedListPageTrend,
  "DELETE /zones/{zone_id}/speed_api/schedule/{url}": speedDeleteTestSchedule,
  "GET /zones/{zone_id}/speed_api/schedule/{url}": speedGetScheduledTest,
  "POST /zones/{zone_id}/speed_api/schedule/{url}": speedCreateScheduledTest,
  "POST /zones/{zone_id}/ssl/analyze": analyzeCertificateAnalyzeCertificate,
  "GET /zones/{zone_id}/ssl/certificate_packs":
    certificatePacksListCertificatePacks,
  "POST /zones/{zone_id}/ssl/certificate_packs/order":
    certificatePacksOrderAdvancedCertificateManagerCertificatePack,
  "GET /zones/{zone_id}/ssl/certificate_packs/quota":
    certificatePacksGetCertificatePackQuotas,
  "DELETE /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}":
    certificatePacksDeleteAdvancedCertificateManagerCertificatePack,
  "GET /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}":
    certificatePacksGetCertificatePack,
  "PATCH /zones/{zone_id}/ssl/certificate_packs/{certificate_pack_id}":
    certificatePacksRestartValidationForAdvancedCertificateManagerCertificatePack,
  "GET /zones/{zone_id}/ssl/recommendation":
    sslTlsModeRecommendationSslTlsRecommendation,
  "GET /zones/{zone_id}/ssl/universal/settings":
    universalSslSettingsForAZoneUniversalSslSettingsDetails,
  "PATCH /zones/{zone_id}/ssl/universal/settings":
    universalSslSettingsForAZoneEditUniversalSslSettings,
  "GET /zones/{zone_id}/ssl/verification":
    sslVerificationSslVerificationDetails,
  "PATCH /zones/{zone_id}/ssl/verification/{certificate_pack_id}":
    sslVerificationEditSslCertificatePackValidationMethod,
  "GET /zones/{zone_id}/subscription": zoneSubscriptionZoneSubscriptionDetails,
  "POST /zones/{zone_id}/subscription": zoneSubscriptionCreateZoneSubscription,
  "PUT /zones/{zone_id}/subscription": zoneSubscriptionUpdateZoneSubscription,
  "GET /zones/{zone_id}/token_validation/config": tokenValidationConfigList,
  "POST /zones/{zone_id}/token_validation/config": tokenValidationConfigCreate,
  "DELETE /zones/{zone_id}/token_validation/config/{config_id}":
    tokenValidationConfigDelete,
  "GET /zones/{zone_id}/token_validation/config/{config_id}":
    tokenValidationConfigGet,
  "PATCH /zones/{zone_id}/token_validation/config/{config_id}":
    tokenValidationConfigEdit,
  "PUT /zones/{zone_id}/token_validation/config/{config_id}/credentials":
    tokenValidationConfigCredentialsUpdate,
  "GET /zones/{zone_id}/token_validation/rules": tokenValidationRulesList,
  "POST /zones/{zone_id}/token_validation/rules": tokenValidationRulesCreate,
  "PATCH /zones/{zone_id}/token_validation/rules/bulk":
    tokenValidationRulesBulkEdit,
  "POST /zones/{zone_id}/token_validation/rules/bulk":
    tokenValidationRulesBulkCreate,
  "POST /zones/{zone_id}/token_validation/rules/preview":
    tokenValidationRulesPreview,
  "DELETE /zones/{zone_id}/token_validation/rules/{rule_id}":
    tokenValidationRulesDelete,
  "GET /zones/{zone_id}/token_validation/rules/{rule_id}":
    tokenValidationRulesGet,
  "PATCH /zones/{zone_id}/token_validation/rules/{rule_id}":
    tokenValidationRulesEdit,
  "DELETE /zones/{zone_id}/url_normalization": deleteUrlNormalization,
  "GET /zones/{zone_id}/url_normalization": getUrlNormalization,
  "PUT /zones/{zone_id}/url_normalization": updateUrlNormalization,
  "GET /zones/{zone_id}/waiting_rooms": waitingRoomListWaitingRooms,
  "POST /zones/{zone_id}/waiting_rooms": waitingRoomCreateWaitingRoom,
  "POST /zones/{zone_id}/waiting_rooms/preview":
    waitingRoomCreateACustomWaitingRoomPagePreview,
  "GET /zones/{zone_id}/waiting_rooms/settings": waitingRoomGetZoneSettings,
  "PATCH /zones/{zone_id}/waiting_rooms/settings": waitingRoomPatchZoneSettings,
  "PUT /zones/{zone_id}/waiting_rooms/settings": waitingRoomUpdateZoneSettings,
  "DELETE /zones/{zone_id}/waiting_rooms/{waiting_room_id}":
    waitingRoomDeleteWaitingRoom,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}":
    waitingRoomWaitingRoomDetails,
  "PATCH /zones/{zone_id}/waiting_rooms/{waiting_room_id}":
    waitingRoomPatchWaitingRoom,
  "PUT /zones/{zone_id}/waiting_rooms/{waiting_room_id}":
    waitingRoomUpdateWaitingRoom,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events":
    waitingRoomListEvents,
  "POST /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events":
    waitingRoomCreateEvent,
  "DELETE /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}":
    waitingRoomDeleteEvent,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}":
    waitingRoomEventDetails,
  "PATCH /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}":
    waitingRoomPatchEvent,
  "PUT /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}":
    waitingRoomUpdateEvent,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}/events/{event_id}/details":
    waitingRoomPreviewActiveEventDetails,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules":
    waitingRoomListWaitingRoomRules,
  "POST /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules":
    waitingRoomCreateWaitingRoomRule,
  "PUT /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules":
    waitingRoomReplaceWaitingRoomRules,
  "DELETE /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}":
    waitingRoomDeleteWaitingRoomRule,
  "PATCH /zones/{zone_id}/waiting_rooms/{waiting_room_id}/rules/{rule_id}":
    waitingRoomPatchWaitingRoomRule,
  "GET /zones/{zone_id}/waiting_rooms/{waiting_room_id}/status":
    waitingRoomGetWaitingRoomStatus,
  "GET /zones/{zone_id}/web3/hostnames": web3HostnameListWeb3Hostnames,
  "POST /zones/{zone_id}/web3/hostnames": web3HostnameCreateWeb3Hostname,
  "DELETE /zones/{zone_id}/web3/hostnames/{identifier}":
    web3HostnameDeleteWeb3Hostname,
  "GET /zones/{zone_id}/web3/hostnames/{identifier}":
    web3HostnameWeb3HostnameDetails,
  "PATCH /zones/{zone_id}/web3/hostnames/{identifier}":
    web3HostnameEditWeb3Hostname,
  "GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list":
    web3HostnameIpfsUniversalPathGatewayContentListDetails,
  "PUT /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list":
    web3HostnameUpdateIpfsUniversalPathGatewayContentList,
  "GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries":
    web3HostnameListIpfsUniversalPathGatewayContentListEntries,
  "POST /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries":
    web3HostnameCreateIpfsUniversalPathGatewayContentListEntry,
  "DELETE /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}":
    web3HostnameDeleteIpfsUniversalPathGatewayContentListEntry,
  "GET /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}":
    web3HostnameIpfsUniversalPathGatewayContentListEntryDetails,
  "PUT /zones/{zone_id}/web3/hostnames/{identifier}/ipfs_universal_path/content_list/entries/{content_list_entry_identifier}":
    web3HostnameEditIpfsUniversalPathGatewayContentListEntry,
  "GET /zones/{zone_id}/workers/routes": workerRoutesListRoutes,
  "POST /zones/{zone_id}/workers/routes": workerRoutesCreateRoute,
  "DELETE /zones/{zone_id}/workers/routes/{route_id}": workerRoutesDeleteRoute,
  "GET /zones/{zone_id}/workers/routes/{route_id}": workerRoutesGetRoute,
  "PUT /zones/{zone_id}/workers/routes/{route_id}": workerRoutesUpdateRoute,
};
