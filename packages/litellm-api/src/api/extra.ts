import {
  modelListModelsGet,
  modelListV1ModelsGet,
  chatCompletionOpenaiDeploymentsModelChatCompletionsPost,
  chatCompletionEnginesModelChatCompletionsPost,
  chatCompletionChatCompletionsPost,
  chatCompletionV1ChatCompletionsPost,
  completionOpenaiDeploymentsModelCompletionsPost,
  completionEnginesModelCompletionsPost,
  completionCompletionsPost,
  completionV1CompletionsPost,
  embeddingsOpenaiDeploymentsModelEmbeddingsPost,
  embeddingsEnginesModelEmbeddingsPost,
  embeddingsEmbeddingsPost,
  embeddingsV1EmbeddingsPost,
  imageGenerationImagesGenerationsPost,
  imageGenerationV1ImagesGenerationsPost,
  audioSpeechAudioSpeechPost,
  audioSpeechV1AudioSpeechPost,
  audioTranscriptionsAudioTranscriptionsPost,
  audioTranscriptionsV1AudioTranscriptionsPost,
  getAssistantsAssistantsGet,
  createAssistantAssistantsPost,
  getAssistantsV1AssistantsGet,
  createAssistantV1AssistantsPost,
  deleteAssistantAssistantsAssistantIdDelete,
  deleteAssistantV1AssistantsAssistantIdDelete,
  createThreadsThreadsPost,
  createThreadsV1ThreadsPost,
  getThreadThreadsThreadIdGet,
  getThreadV1ThreadsThreadIdGet,
  addMessagesThreadsThreadIdMessagesPost,
  getMessagesThreadsThreadIdMessagesGet,
  addMessagesV1ThreadsThreadIdMessagesPost,
  getMessagesV1ThreadsThreadIdMessagesGet,
  runThreadThreadsThreadIdRunsPost,
  runThreadV1ThreadsThreadIdRunsPost,
  moderationsModerationsPost,
  moderationsV1ModerationsPost,
  tokenCounterUtilsTokenCounterPost,
  supportedOpenaiParamsUtilsSupportedOpenaiParamsGet,
  transformRequestUtilsTransformRequestPost,
  modelInfoV1V1ModelInfoGet,
  modelInfoV1ModelInfoGet,
  modelGroupInfoModelGroupInfoGet,
  homeGet,
  getRoutesRoutesGet,
  responsesApiResponsesPost,
  responsesApiV1ResponsesPost,
  getResponseResponsesResponseIdGet,
  deleteResponseResponsesResponseIdDelete,
  getResponseV1ResponsesResponseIdGet,
  deleteResponseV1ResponsesResponseIdDelete,
  getResponseInputItemsResponsesResponseIdInputItemsGet,
  getResponseInputItemsV1ResponsesResponseIdInputItemsGet,
  createBatchBatchesPost,
  listBatchesBatchesGet,
  createBatchV1BatchesPost,
  listBatchesV1BatchesGet,
  createBatchProviderV1BatchesPost,
  listBatchesProviderV1BatchesGet,
  retrieveBatchBatchesBatchIdGet,
  retrieveBatchV1BatchesBatchIdGet,
  retrieveBatchProviderV1BatchesBatchIdGet,
  cancelBatchBatchesBatchIdCancelPost,
  cancelBatchV1BatchesBatchIdCancelPost,
  cancelBatchProviderV1BatchesBatchIdCancelPost,
  rerankRerankPost,
  rerankV1RerankPost,
  rerankV2RerankPost,
  createFineTuningJobFineTuningJobsPost,
  listFineTuningJobsFineTuningJobsGet,
  createFineTuningJobV1FineTuningJobsPost,
  listFineTuningJobsV1FineTuningJobsGet,
  retrieveFineTuningJobFineTuningJobsFineTuningJobIdGet,
  retrieveFineTuningJobV1FineTuningJobsFineTuningJobIdGet,
  cancelFineTuningJobFineTuningJobsFineTuningJobIdCancelPost,
  cancelFineTuningJobV1FineTuningJobsFineTuningJobIdCancelPost,
  getCredentialsCredentialsGet,
  createCredentialCredentialsPost,
  getCredentialCredentialsByModelModelIdGet,
  getCredentialCredentialsByNameCredentialNameGet,
  deleteCredentialCredentialsCredentialNameDelete,
  updateCredentialCredentialsCredentialNamePatch,
  handleSseMcpGet,
  handleMessagesMcpSseMessagesPost,
  listToolRestApiMcpToolsListGet,
  callToolRestApiMcpToolsCallPost,
  getPassThroughEndpointsConfigPassThroughEndpointGet,
  createPassThroughEndpointsConfigPassThroughEndpointPost,
  deletePassThroughEndpointsConfigPassThroughEndpointDelete,
  updatePassThroughEndpointsConfigPassThroughEndpointEndpointIdPost,
  testEndpointTestGet,
  healthServicesEndpointHealthServicesGet,
  healthEndpointHealthGet,
  activeCallbacksActiveCallbacksGet,
  activeCallbacksSettingsGet,
  healthReadinessHealthReadinessGet,
  healthLivelinessHealthLivenessGet,
  healthLivelinessHealthLivelinessGet,
  testModelConnectionHealthTestConnectionPost,
  generateKeyFnKeyGeneratePost,
  updateKeyFnKeyUpdatePost,
  deleteKeyFnKeyDeletePost,
  infoKeyFnKeyInfoGet,
  regenerateKeyFnKeyRegeneratePost,
  regenerateKeyFnKeyKeyRegeneratePost,
  listKeysKeyListGet,
  blockKeyKeyBlockPost,
  unblockKeyKeyUnblockPost,
  keyHealthKeyHealthPost,
  newUserUserNewPost,
  userInfoUserInfoGet,
  userUpdateUserUpdatePost,
  getUsersUserListGet,
  getUsersUserGetUsersGet,
  deleteUserUserDeletePost,
  getUserDailyActivityUserDailyActivityGet,
  newTeamTeamNewPost,
  updateTeamTeamUpdatePost,
  teamMemberAddTeamMemberAddPost,
  teamMemberDeleteTeamMemberDeletePost,
  teamMemberUpdateTeamMemberUpdatePost,
  deleteTeamTeamDeletePost,
  teamInfoTeamInfoGet,
  blockTeamTeamBlockPost,
  unblockTeamTeamUnblockPost,
  listAvailableTeamsTeamAvailableGet,
  listTeamTeamListGet,
  teamModelAddTeamModelAddPost,
  teamModelDeleteTeamModelDeletePost,
  newOrganizationOrganizationNewPost,
  updateOrganizationOrganizationUpdatePatch,
  deleteOrganizationOrganizationDeleteDelete,
  listOrganizationOrganizationListGet,
  infoOrganizationOrganizationInfoGet,
  deprecatedInfoOrganizationOrganizationInfoPost,
  organizationMemberAddOrganizationMemberAddPost,
  organizationMemberUpdateOrganizationMemberUpdatePatch,
  organizationMemberDeleteOrganizationMemberDeleteDelete,
  blockUserCustomerBlockPost,
  unblockUserCustomerUnblockPost,
  newEndUserCustomerNewPost,
  endUserInfoCustomerInfoGet,
  updateEndUserCustomerUpdatePost,
  deleteEndUserCustomerDeletePost,
  listEndUserCustomerListGet,
  viewSpendTagsSpendTagsGet,
  getGlobalSpendReportGlobalSpendReportGet,
  globalViewSpendTagsGlobalSpendTagsGet,
  calculateSpendSpendCalculatePost,
  viewSpendLogsSpendLogsGet,
  globalSpendResetGlobalSpendResetPost,
  providerBudgetsProviderBudgetsGet,
  cachePingCachePingGet,
  cacheDeleteCacheDeletePost,
  cacheRedisInfoCacheRedisInfoGet,
  cacheFlushallCacheFlushallPost,
  listGuardrailsGuardrailsListGet,
  addAllowedIpAddAllowedIpPost,
  deleteAllowedIpDeleteAllowedIpPost,
  getSsoSettingsGetInternalUserSettingsGet,
  updateInternalUserSettingsUpdateInternalUserSettingsPatch,
  createFileFilesPost,
  listFilesFilesGet,
  createFileV1FilesPost,
  listFilesV1FilesGet,
  createFileProviderV1FilesPost,
  listFilesProviderV1FilesGet,
  getFileContentFilesFileIdContentGet,
  getFileContentV1FilesFileIdContentGet,
  getFileContentProviderV1FilesFileIdContentGet,
  getFileFilesFileIdGet,
  deleteFileFilesFileIdDelete,
  getFileV1FilesFileIdGet,
  deleteFileV1FilesFileIdDelete,
  getFileProviderV1FilesFileIdGet,
  deleteFileProviderV1FilesFileIdDelete,
  addTeamCallbacksTeamTeamIdCallbackPost,
  getTeamCallbacksTeamTeamIdCallbackGet,
  disableTeamLoggingTeamTeamIdDisableLoggingPost,
  newBudgetBudgetNewPost,
  updateBudgetBudgetUpdatePost,
  infoBudgetBudgetInfoPost,
  budgetSettingsBudgetSettingsGet,
  listBudgetBudgetListGet,
  deleteBudgetBudgetDeletePost,
  patchModelModelModelIdUpdatePatch,
  deleteModelModelDeletePost,
  addNewModelModelNewPost,
  updateModelModelUpdatePost
} from './components';

export const operationsByPath = {
  'GET /models': modelListModelsGet,
  'GET /v1/models': modelListV1ModelsGet,
  'POST /openai/deployments/{model}/chat/completions': chatCompletionOpenaiDeploymentsModelChatCompletionsPost,
  'POST /engines/{model}/chat/completions': chatCompletionEnginesModelChatCompletionsPost,
  'POST /chat/completions': chatCompletionChatCompletionsPost,
  'POST /v1/chat/completions': chatCompletionV1ChatCompletionsPost,
  'POST /openai/deployments/{model}/completions': completionOpenaiDeploymentsModelCompletionsPost,
  'POST /engines/{model}/completions': completionEnginesModelCompletionsPost,
  'POST /completions': completionCompletionsPost,
  'POST /v1/completions': completionV1CompletionsPost,
  'POST /openai/deployments/{model}/embeddings': embeddingsOpenaiDeploymentsModelEmbeddingsPost,
  'POST /engines/{model}/embeddings': embeddingsEnginesModelEmbeddingsPost,
  'POST /embeddings': embeddingsEmbeddingsPost,
  'POST /v1/embeddings': embeddingsV1EmbeddingsPost,
  'POST /images/generations': imageGenerationImagesGenerationsPost,
  'POST /v1/images/generations': imageGenerationV1ImagesGenerationsPost,
  'POST /audio/speech': audioSpeechAudioSpeechPost,
  'POST /v1/audio/speech': audioSpeechV1AudioSpeechPost,
  'POST /audio/transcriptions': audioTranscriptionsAudioTranscriptionsPost,
  'POST /v1/audio/transcriptions': audioTranscriptionsV1AudioTranscriptionsPost,
  'GET /assistants': getAssistantsAssistantsGet,
  'POST /assistants': createAssistantAssistantsPost,
  'GET /v1/assistants': getAssistantsV1AssistantsGet,
  'POST /v1/assistants': createAssistantV1AssistantsPost,
  'DELETE /assistants/{assistant_id}': deleteAssistantAssistantsAssistantIdDelete,
  'DELETE /v1/assistants/{assistant_id}': deleteAssistantV1AssistantsAssistantIdDelete,
  'POST /threads': createThreadsThreadsPost,
  'POST /v1/threads': createThreadsV1ThreadsPost,
  'GET /threads/{thread_id}': getThreadThreadsThreadIdGet,
  'GET /v1/threads/{thread_id}': getThreadV1ThreadsThreadIdGet,
  'POST /threads/{thread_id}/messages': addMessagesThreadsThreadIdMessagesPost,
  'GET /threads/{thread_id}/messages': getMessagesThreadsThreadIdMessagesGet,
  'POST /v1/threads/{thread_id}/messages': addMessagesV1ThreadsThreadIdMessagesPost,
  'GET /v1/threads/{thread_id}/messages': getMessagesV1ThreadsThreadIdMessagesGet,
  'POST /threads/{thread_id}/runs': runThreadThreadsThreadIdRunsPost,
  'POST /v1/threads/{thread_id}/runs': runThreadV1ThreadsThreadIdRunsPost,
  'POST /moderations': moderationsModerationsPost,
  'POST /v1/moderations': moderationsV1ModerationsPost,
  'POST /utils/token_counter': tokenCounterUtilsTokenCounterPost,
  'GET /utils/supported_openai_params': supportedOpenaiParamsUtilsSupportedOpenaiParamsGet,
  'POST /utils/transform_request': transformRequestUtilsTransformRequestPost,
  'GET /v1/model/info': modelInfoV1V1ModelInfoGet,
  'GET /model/info': modelInfoV1ModelInfoGet,
  'GET /model_group/info': modelGroupInfoModelGroupInfoGet,
  'GET /': homeGet,
  'GET /routes': getRoutesRoutesGet,
  'POST /responses': responsesApiResponsesPost,
  'POST /v1/responses': responsesApiV1ResponsesPost,
  'GET /responses/{response_id}': getResponseResponsesResponseIdGet,
  'DELETE /responses/{response_id}': deleteResponseResponsesResponseIdDelete,
  'GET /v1/responses/{response_id}': getResponseV1ResponsesResponseIdGet,
  'DELETE /v1/responses/{response_id}': deleteResponseV1ResponsesResponseIdDelete,
  'GET /responses/{response_id}/input_items': getResponseInputItemsResponsesResponseIdInputItemsGet,
  'GET /v1/responses/{response_id}/input_items': getResponseInputItemsV1ResponsesResponseIdInputItemsGet,
  'POST /batches': createBatchBatchesPost,
  'GET /batches': listBatchesBatchesGet,
  'POST /v1/batches': createBatchV1BatchesPost,
  'GET /v1/batches': listBatchesV1BatchesGet,
  'POST /{provider}/v1/batches': createBatchProviderV1BatchesPost,
  'GET /{provider}/v1/batches': listBatchesProviderV1BatchesGet,
  'GET /batches/{batch_id}': retrieveBatchBatchesBatchIdGet,
  'GET /v1/batches/{batch_id}': retrieveBatchV1BatchesBatchIdGet,
  'GET /{provider}/v1/batches/{batch_id}': retrieveBatchProviderV1BatchesBatchIdGet,
  'POST /batches/{batch_id}/cancel': cancelBatchBatchesBatchIdCancelPost,
  'POST /v1/batches/{batch_id}/cancel': cancelBatchV1BatchesBatchIdCancelPost,
  'POST /{provider}/v1/batches/{batch_id}/cancel': cancelBatchProviderV1BatchesBatchIdCancelPost,
  'POST /rerank': rerankRerankPost,
  'POST /v1/rerank': rerankV1RerankPost,
  'POST /v2/rerank': rerankV2RerankPost,
  'POST /fine_tuning/jobs': createFineTuningJobFineTuningJobsPost,
  'GET /fine_tuning/jobs': listFineTuningJobsFineTuningJobsGet,
  'POST /v1/fine_tuning/jobs': createFineTuningJobV1FineTuningJobsPost,
  'GET /v1/fine_tuning/jobs': listFineTuningJobsV1FineTuningJobsGet,
  'GET /fine_tuning/jobs/{fine_tuning_job_id}': retrieveFineTuningJobFineTuningJobsFineTuningJobIdGet,
  'GET /v1/fine_tuning/jobs/{fine_tuning_job_id}': retrieveFineTuningJobV1FineTuningJobsFineTuningJobIdGet,
  'POST /fine_tuning/jobs/{fine_tuning_job_id}/cancel': cancelFineTuningJobFineTuningJobsFineTuningJobIdCancelPost,
  'POST /v1/fine_tuning/jobs/{fine_tuning_job_id}/cancel': cancelFineTuningJobV1FineTuningJobsFineTuningJobIdCancelPost,
  'GET /credentials': getCredentialsCredentialsGet,
  'POST /credentials': createCredentialCredentialsPost,
  'GET /credentials/by_model/{model_id}': getCredentialCredentialsByModelModelIdGet,
  'GET /credentials/by_name/{credential_name}': getCredentialCredentialsByNameCredentialNameGet,
  'DELETE /credentials/{credential_name}': deleteCredentialCredentialsCredentialNameDelete,
  'PATCH /credentials/{credential_name}': updateCredentialCredentialsCredentialNamePatch,
  'GET /mcp/': handleSseMcpGet,
  'POST /mcp/sse/messages': handleMessagesMcpSseMessagesPost,
  'GET /mcp/tools/list': listToolRestApiMcpToolsListGet,
  'POST /mcp/tools/call': callToolRestApiMcpToolsCallPost,
  'GET /config/pass_through_endpoint': getPassThroughEndpointsConfigPassThroughEndpointGet,
  'POST /config/pass_through_endpoint': createPassThroughEndpointsConfigPassThroughEndpointPost,
  'DELETE /config/pass_through_endpoint': deletePassThroughEndpointsConfigPassThroughEndpointDelete,
  'POST /config/pass_through_endpoint/{endpoint_id}': updatePassThroughEndpointsConfigPassThroughEndpointEndpointIdPost,
  'GET /test': testEndpointTestGet,
  'GET /health/services': healthServicesEndpointHealthServicesGet,
  'GET /health': healthEndpointHealthGet,
  'GET /active/callbacks': activeCallbacksActiveCallbacksGet,
  'GET /settings': activeCallbacksSettingsGet,
  'GET /health/readiness': healthReadinessHealthReadinessGet,
  'GET /health/liveness': healthLivelinessHealthLivenessGet,
  'GET /health/liveliness': healthLivelinessHealthLivelinessGet,
  'POST /health/test_connection': testModelConnectionHealthTestConnectionPost,
  'POST /key/generate': generateKeyFnKeyGeneratePost,
  'POST /key/update': updateKeyFnKeyUpdatePost,
  'POST /key/delete': deleteKeyFnKeyDeletePost,
  'GET /key/info': infoKeyFnKeyInfoGet,
  'POST /key/regenerate': regenerateKeyFnKeyRegeneratePost,
  'POST /key/{key}/regenerate': regenerateKeyFnKeyKeyRegeneratePost,
  'GET /key/list': listKeysKeyListGet,
  'POST /key/block': blockKeyKeyBlockPost,
  'POST /key/unblock': unblockKeyKeyUnblockPost,
  'POST /key/health': keyHealthKeyHealthPost,
  'POST /user/new': newUserUserNewPost,
  'GET /user/info': userInfoUserInfoGet,
  'POST /user/update': userUpdateUserUpdatePost,
  'GET /user/list': getUsersUserListGet,
  'GET /user/get_users': getUsersUserGetUsersGet,
  'POST /user/delete': deleteUserUserDeletePost,
  'GET /user/daily/activity': getUserDailyActivityUserDailyActivityGet,
  'POST /team/new': newTeamTeamNewPost,
  'POST /team/update': updateTeamTeamUpdatePost,
  'POST /team/member_add': teamMemberAddTeamMemberAddPost,
  'POST /team/member_delete': teamMemberDeleteTeamMemberDeletePost,
  'POST /team/member_update': teamMemberUpdateTeamMemberUpdatePost,
  'POST /team/delete': deleteTeamTeamDeletePost,
  'GET /team/info': teamInfoTeamInfoGet,
  'POST /team/block': blockTeamTeamBlockPost,
  'POST /team/unblock': unblockTeamTeamUnblockPost,
  'GET /team/available': listAvailableTeamsTeamAvailableGet,
  'GET /team/list': listTeamTeamListGet,
  'POST /team/model/add': teamModelAddTeamModelAddPost,
  'POST /team/model/delete': teamModelDeleteTeamModelDeletePost,
  'POST /organization/new': newOrganizationOrganizationNewPost,
  'PATCH /organization/update': updateOrganizationOrganizationUpdatePatch,
  'DELETE /organization/delete': deleteOrganizationOrganizationDeleteDelete,
  'GET /organization/list': listOrganizationOrganizationListGet,
  'GET /organization/info': infoOrganizationOrganizationInfoGet,
  'POST /organization/info': deprecatedInfoOrganizationOrganizationInfoPost,
  'POST /organization/member_add': organizationMemberAddOrganizationMemberAddPost,
  'PATCH /organization/member_update': organizationMemberUpdateOrganizationMemberUpdatePatch,
  'DELETE /organization/member_delete': organizationMemberDeleteOrganizationMemberDeleteDelete,
  'POST /customer/block': blockUserCustomerBlockPost,
  'POST /customer/unblock': unblockUserCustomerUnblockPost,
  'POST /customer/new': newEndUserCustomerNewPost,
  'GET /customer/info': endUserInfoCustomerInfoGet,
  'POST /customer/update': updateEndUserCustomerUpdatePost,
  'POST /customer/delete': deleteEndUserCustomerDeletePost,
  'GET /customer/list': listEndUserCustomerListGet,
  'GET /spend/tags': viewSpendTagsSpendTagsGet,
  'GET /global/spend/report': getGlobalSpendReportGlobalSpendReportGet,
  'GET /global/spend/tags': globalViewSpendTagsGlobalSpendTagsGet,
  'POST /spend/calculate': calculateSpendSpendCalculatePost,
  'GET /spend/logs': viewSpendLogsSpendLogsGet,
  'POST /global/spend/reset': globalSpendResetGlobalSpendResetPost,
  'GET /provider/budgets': providerBudgetsProviderBudgetsGet,
  'GET /cache/ping': cachePingCachePingGet,
  'POST /cache/delete': cacheDeleteCacheDeletePost,
  'GET /cache/redis/info': cacheRedisInfoCacheRedisInfoGet,
  'POST /cache/flushall': cacheFlushallCacheFlushallPost,
  'GET /guardrails/list': listGuardrailsGuardrailsListGet,
  'POST /add/allowed_ip': addAllowedIpAddAllowedIpPost,
  'POST /delete/allowed_ip': deleteAllowedIpDeleteAllowedIpPost,
  'GET /get/internal_user_settings': getSsoSettingsGetInternalUserSettingsGet,
  'PATCH /update/internal_user_settings': updateInternalUserSettingsUpdateInternalUserSettingsPatch,
  'POST /files': createFileFilesPost,
  'GET /files': listFilesFilesGet,
  'POST /v1/files': createFileV1FilesPost,
  'GET /v1/files': listFilesV1FilesGet,
  'POST /{provider}/v1/files': createFileProviderV1FilesPost,
  'GET /{provider}/v1/files': listFilesProviderV1FilesGet,
  'GET /files/{file_id}/content': getFileContentFilesFileIdContentGet,
  'GET /v1/files/{file_id}/content': getFileContentV1FilesFileIdContentGet,
  'GET /{provider}/v1/files/{file_id}/content': getFileContentProviderV1FilesFileIdContentGet,
  'GET /files/{file_id}': getFileFilesFileIdGet,
  'DELETE /files/{file_id}': deleteFileFilesFileIdDelete,
  'GET /v1/files/{file_id}': getFileV1FilesFileIdGet,
  'DELETE /v1/files/{file_id}': deleteFileV1FilesFileIdDelete,
  'GET /{provider}/v1/files/{file_id}': getFileProviderV1FilesFileIdGet,
  'DELETE /{provider}/v1/files/{file_id}': deleteFileProviderV1FilesFileIdDelete,
  'POST /team/{team_id}/callback': addTeamCallbacksTeamTeamIdCallbackPost,
  'GET /team/{team_id}/callback': getTeamCallbacksTeamTeamIdCallbackGet,
  'POST /team/{team_id}/disable_logging': disableTeamLoggingTeamTeamIdDisableLoggingPost,
  'POST /budget/new': newBudgetBudgetNewPost,
  'POST /budget/update': updateBudgetBudgetUpdatePost,
  'POST /budget/info': infoBudgetBudgetInfoPost,
  'GET /budget/settings': budgetSettingsBudgetSettingsGet,
  'GET /budget/list': listBudgetBudgetListGet,
  'POST /budget/delete': deleteBudgetBudgetDeletePost,
  'PATCH /model/{model_id}/update': patchModelModelModelIdUpdatePatch,
  'POST /model/delete': deleteModelModelDeletePost,
  'POST /model/new': addNewModelModelNewPost,
  'POST /model/update': updateModelModelUpdatePost
};
