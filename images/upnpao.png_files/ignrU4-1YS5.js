;/*FB_PKG_DELIM*/

__d("LSComputeParticipantCapabilities",["LSGetViewerFBID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(f){return c.seq([function(a){return c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],d[0]]]]),function(b){return c.i64.eq(b.threadKey,a[1])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,d[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[1]=c[0],d[2]=c[1],c):(b=a.item,c=[b.isAdmin==null?!1:b.isAdmin,b.isModerator],d[1]=c[0],d[2]=c[1],c)})},function(b){return c.ftr(c.db.table(14).fetch([[[a[1],a[0]]]]),function(b){return c.i64.eq(b.threadKey,a[1])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[0])}).next().then(function(a,b){var c=a.done;a=a.value;return c?(c=[!1,!1],d[4]=c[0],d[5]=c[1],c):(b=a.item,c=[b.isAdmin==null?!1:b.isAdmin,b.isModerator],d[4]=c[0],d[5]=c[1],c)})},function(b){return c.ftr(c.db.table(7).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.id,a[0])&&c.i64.eq(c.i64.cast([0,1]),c.i64.cast([0,1]))}).next().then(function(a,b){var e=a.done;a=a.value;return e?(e=[c.i64.cast([0,1073741823]),c.i64.cast([0,0]),!1],d[7]=e[0],d[8]=e[1],d[9]=e[2],e):(b=a.item,e=[b.capabilities==null?c.i64.cast([0,1073741823]):b.capabilities,b.contactTypeExact==null?c.i64.cast([0,0]):b.contactTypeExact,b.isManagedByViewer==null?!1:b.isManagedByViewer],d[7]=e[0],d[8]=e[1],d[9]=e[2],e)})},function(a){return d[12]=c.i64.eq(d[8],c.i64.cast([0,4]))?d[9]?c.i64.cast([0,2612119]):c.i64.or_(c.i64.cast([0,2612119]),c.i64.lsl_(c.i64.cast([0,1]),c.i64.to_int32(c.i64.cast([0,3])))):d[7],c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[11]=a[0],a})},function(e){return d[13]=c.i64.lsl_(c.i64.cast([0,1]),c.i64.to_int32(c.i64.cast([0,20]))),d[15]=d[1]&&!d[4]&&c.i64.neq(d[11],a[0])?d[12]:c.i64.eq(c.i64.and_(d[12],d[13]),c.i64.cast([0,0]))?d[12]:c.i64.sub(d[12],d[13]),c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[14]=a[0],a})},function(e){return d[16]=c.i64.lsl_(c.i64.cast([0,1]),c.i64.to_int32(c.i64.cast([0,22]))),d[19]=d[4]&&d[1]&&c.i64.neq(d[14],a[0])?d[15]:c.i64.eq(c.i64.and_(d[15],d[16]),c.i64.cast([0,0]))?d[15]:c.i64.sub(d[15],d[16]),d[2]?d[17]=!(d[4]||d[5]):d[17]=!0,c.sp(b("LSGetViewerFBID")).then(function(a){return a=a,d[18]=a[0],a})},function(b){return d[20]=c.i64.lsl_(c.i64.cast([0,1]),c.i64.to_int32(c.i64.cast([0,21]))),e[0]=(d[1]||d[2])&&d[17]&&c.i64.neq(a[0],d[18])?d[19]:c.i64.eq(c.i64.and_(d[19],d[20]),c.i64.cast([0,0]))?d[19]:c.i64.sub(d[19],d[20])}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSAddParticipantIdToGroupThread",["LSComputeParticipantCapabilities"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[];return c.seq([function(e){return c.seq([function(e){return c.sp(b("LSComputeParticipantCapabilities"),a[1],a[0]).then(function(a){return a=a,d[0]=a[0],a})},function(b){return c.ftr(c.db.table(14).fetch([[[a[0],a[1]]]]),function(b){return c.i64.eq(b.threadKey,a[0])&&c.i64.eq(c.i64.cast([0,0]),c.i64.cast([0,0]))&&c.i64.eq(b.contactId,a[1])&&c.i64.gt(b.authorityLevel,a[9])}).next().then(function(b){var e=b.done;b.value;return e?c.db.table(14).put({threadKey:a[0],contactId:a[1],readWatermarkTimestampMs:a[2],readActionTimestampMs:a[3],deliveredWatermarkTimestampMs:a[4],nickname:a[5],normalizedSearchTerms:a[10],isAdmin:a[6],isSuperAdmin:a[11],subscribeSource:a[7],authorityLevel:a[9],participantCapabilities:d[0],groupParticipantJoinState:c.i64.cast([0,0]),isModerator:!1,threadRoles:a[12]}):0})}])},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSClearPinnedMessages",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(205).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSDeleteExistingMessageRanges",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.db.table(13).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSDeleteThenInsertIgThreadInfo",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(194).put({threadKey:a[0],igThreadId:a[1]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSFilteredThreadsRangesQuery",["LSGetCursor","LSIssueNewTaskAndGetTaskID"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.i64.neq(a[10],f)?d[0]=a[10]:d[0]=c.i64.cast([0,0]),a[11]!==f?d[1]=a[11]:d[1]="",(a[2]&&c.i64.neq(a[7],f)&&c.i64.neq(a[4],f)||a[3]&&c.i64.neq(a[6],f)&&c.i64.neq(a[5],f))&&!(a[2]&&c.i64.neq(a[7],f)&&c.i64.neq(a[4],f)&&a[3]&&c.i64.neq(a[6],f)&&c.i64.neq(a[5],f))?c.seq([function(e){return d[3]=a[4]==null?c.i64.cast([-2147483648,0]):a[4],d[4]=a[7]==null?c.i64.cast([0,1]):a[7],d[10]=c.i64.gt(d[4],c.i64.cast([0,1]))&&c.i64.gt(d[3],c.i64.cast([-2147483648,0])),c.sp(b("LSGetCursor"),c.i64.cast([0,1])).then(function(a){return a=a,d[2]=a[0],a})},function(e){return d[5]=new c.Map(),d[5].set("cursor",d[2]),d[5].set("filter",a[1]),d[5].set("is_after",a[3]),d[5].set("parent_thread_key",a[0]),d[5].set("reference_activity_timestamp",a[3]?a[6]:a[7]),d[5].set("reference_thread_key",a[3]?a[5]:a[4]),d[5].set("secondary_filter",d[0]),d[5].set("filter_value",d[1]),d[5].set("sync_group",c.i64.cast([0,1])),c.i64.gt(c.i64.cast([0,0]),c.i64.cast([0,0]))?(d[11]=c.i64.of_float(Date.now()),d[6]=c.i64.add(d[11],c.i64.cast([0,0]))):d[6]=c.i64.cast([0,0]),d[7]=c.toJSON(d[5]),c.sp(b("LSIssueNewTaskAndGetTaskID"),"trq",c.i64.cast([0,313]),d[7],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,d[6],c.i64.cast([0,0])).then(function(a){return a=a,d[8]=a[0],a})},function(b){return c.ftr(c.db.table(247).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.parentThreadKey,a[0])&&c.i64.eq(b.threadRangeFilter,a[1])&&c.i64.eq(b.secondaryThreadRangeFilter,d[0])&&b.threadRangeFilterValue===d[1]}).next().then(function(b,e){e=b.done;b=b.value;return e?c.db.table(247).add({folderName:"",parentThreadKey:a[0],minThreadKey:d[3]==null?c.i64.cast([-2147483648,0]):d[3],minLastActivityTimestampMs:d[4]==null?c.i64.cast([0,1]):d[4],threadRangeFilter:a[1],secondaryThreadRangeFilter:d[0],threadRangeFilterValue:d[1],maxLastActivityTimestampMs:c.i64.cast([0,1]),maxThreadKey:c.i64.cast([-2147483648,0]),isLoadingBefore:!0,isLoadingAfter:!1,hasMoreBefore:d[10],hasMoreAfter:!1}):(b.item,c.fe(c.ftr(c.db.table(247).fetch([[[a[0]]]]),function(b){return c.i64.eq(b.parentThreadKey,a[0])&&c.i64.eq(b.threadRangeFilter,a[1])&&c.i64.eq(b.secondaryThreadRangeFilter,d[0])&&b.threadRangeFilterValue===d[1]}),function(a){var b=a.update;a.item;return b({isLoadingBefore:!0,isLoadingAfter:!1,hasMoreBefore:d[10],hasMoreAfter:!1})}))})}]):c.resolve()},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSHasMatchingAttachmentCTA",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(e){return b.seq([function(d){return b.ct(b.ftr(b.db.table(19).fetch([[[a[0]]],"fk_attachments"]),function(c){return b.i64.eq(c.threadKey,a[0])&&c.attachmentFbid===a[1]})).then(function(a){return c[0]=a})},function(a){return d[0]=b.i64.gt(c[0],b.i64.cast([0,0]))}])},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("LSInsertAttachmentCta",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(19).add({ctaId:a[0],attachmentFbid:a[1],attachmentIndex:a[2],threadKey:a[3],messageId:a[5],title:a[6],type_:a[7],platformToken:a[8],actionUrl:a[9],nativeUrl:a[10],urlWebviewType:a[11],actionContentBlob:a[12],enableExtensions:a[13],extensionHeightType:a[14],targetId:a[15]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSInsertAttachmentItem",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(18).add({attachmentFbid:a[0],attachmentIndex:a[1],threadKey:a[2],messageId:a[4],defaultActionEnableExtensions:a[30],originalPageSenderId:a[7],titleText:a[8],subtitleText:a[9],playableUrl:a[12],playableUrlFallback:a[13],playableUrlExpirationTimestampMs:a[14],playableUrlMimeType:a[15],dashManifest:a[16],previewUrl:a[17],previewUrlFallback:a[18],previewUrlExpirationTimestampMs:a[19],previewUrlMimeType:a[20],previewWidth:a[21],previewHeight:a[22],imageUrl:a[23],defaultCtaId:a[24],defaultCtaTitle:a[25],defaultCtaType:a[26],defaultButtonType:a[28],defaultActionUrl:a[29],defaultWebviewHeightRatio:a[32],attachmentCta1Id:a[34],cta1Title:a[35],cta1IconType:a[36],cta1Type:a[37],attachmentCta2Id:a[39],cta2Title:a[40],cta2IconType:a[41],cta2Type:a[42],attachmentCta3Id:a[44],cta3Title:a[45],cta3IconType:a[46],cta3Type:a[47],faviconUrl:a[48],faviconUrlFallback:a[49],faviconUrlExpirationTimestampMs:a[50],previewUrlLarge:a[51]})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSInsertXmaAttachment",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.seq([function(c){return b.fe(b.ftr(b.db.table(16).fetch([[[a[25],a[30],a[32]]]]),function(c){return b.i64.eq(c.threadKey,a[25])&&b.i64.eq(b.i64.cast([0,0]),a[26])&&c.messageId===a[30]&&c.attachmentFbid===a[32]&&b.i64.lt(c.authorityLevel,a[124])&&(b.i64.eq(c.attachmentType,b.i64.cast([0,7]))||b.i64.eq(c.attachmentType,b.i64.cast([0,0])))&&c.hasMedia===!1&&c.hasXma===!0&&b.i64.eq(c.ephemeralMediaState,d)}),function(a){return a["delete"]()})},function(c){return b.db.table(16).add({threadKey:a[25],messageId:a[30],attachmentFbid:a[32],filename:a[1],filesize:a[2],hasMedia:!1,isSharable:a[3],playableUrl:a[4],playableUrlFallback:a[5],playableUrlExpirationTimestampMs:a[6],playableUrlMimeType:a[7],previewUrl:a[8],previewUrlFallback:a[9],previewUrlExpirationTimestampMs:a[10],previewUrlMimeType:a[11],previewWidth:a[13],previewHeight:a[14],attributionAppId:a[15],attributionAppName:a[16],attributionAppIcon:a[17],attributionAppIconFallback:a[18],attributionAppIconUrlExpirationTimestampMs:a[19],attachmentIndex:a[20],accessibilitySummaryText:a[21],shouldRespectServerPreviewSize:a[22],subtitleIconUrl:a[23],shouldAutoplayVideo:a[24],attachmentType:a[27],timestampMs:a[29],offlineAttachmentId:a[31],hasXma:!0,xmaLayoutType:a[33],xmasTemplateType:a[34],collapsibleId:a[35],defaultCtaId:a[36],defaultCtaTitle:a[37],defaultCtaType:a[38],attachmentCta1Id:a[40],cta1Title:a[41],cta1IconType:a[42],cta1Type:a[43],attachmentCta2Id:a[45],cta2Title:a[46],cta2IconType:a[47],cta2Type:a[48],attachmentCta3Id:a[50],cta3Title:a[51],cta3IconType:a[52],cta3Type:a[53],imageUrl:a[54],imageUrlFallback:a[55],imageUrlExpirationTimestampMs:a[56],actionUrl:a[57],titleText:a[58],subtitleText:a[59],subtitleDecorationType:a[60],maxTitleNumOfLines:a[61],maxSubtitleNumOfLines:a[62],descriptionText:a[63],sourceText:a[64],faviconUrl:a[65],faviconUrlFallback:a[66],faviconUrlExpirationTimestampMs:a[67],listItemsId:a[69],listItemsDescriptionText:a[70],listItemsDescriptionSubtitleText:a[71],listItemsSecondaryDescriptionText:a[72],listItemId1:a[73],listItemTitleText1:a[74],listItemContactUrlList1:a[75],listItemProgressBarFilledPercentage1:a[76],listItemContactUrlExpirationTimestampList1:a[77],listItemContactUrlFallbackList1:a[78],listItemAccessibilityText1:a[79],listItemTotalCount1:a[80],listItemId2:a[81],listItemTitleText2:a[82],listItemContactUrlList2:a[83],listItemProgressBarFilledPercentage2:a[84],listItemContactUrlExpirationTimestampList2:a[85],listItemContactUrlFallbackList2:a[86],listItemAccessibilityText2:a[87],listItemTotalCount2:a[88],listItemId3:a[89],listItemTitleText3:a[90],listItemContactUrlList3:a[91],listItemProgressBarFilledPercentage3:a[92],listItemContactUrlExpirationTimestampList3:a[93],listItemContactUrlFallbackList3:a[94],listItemAccessibilityText3:a[95],listItemTotalCount3:a[96],isBorderless:a[100],headerImageUrlMimeType:a[101],headerTitle:a[102],headerSubtitleText:a[103],headerImageUrl:a[104],headerImageUrlFallback:a[105],headerImageUrlExpirationTimestampMs:a[106],previewImageDecorationType:a[107],shouldHighlightHeaderTitleInTitle:a[108],targetId:a[109],attachmentLoggingType:a[112],previewUrlLarge:a[114],gatingType:a[115],gatingTitle:a[116],targetExpiryTimestampMs:a[117],countdownTimestampMs:a[118],shouldBlurSubattachments:a[119],verifiedType:a[120],captionBodyText:a[121],isPublicXma:a[122],replyCount:a[123],authorityLevel:a[124]})}])},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSQueryAdditionalGroupThreads",["LSFilteredThreadsRangesQuery","LSIssueNewTask"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e=[],f;return c.seq([function(e){return c.islc(c.db.table(9).fetch([[[c.i64.cast([0,0])]],"parentThreadKeyLastActivityTimestampMs"]),0,c.i64.to_float(c.i64.cast([0,1]))).next().then(function(e,g){var h=e.done;e=e.value;return h?0:(g=e.item,c.seq([function(e){return d[2]=g.lastActivityTimestampMs,d[3]=g.threadKey,c.sp(b("LSFilteredThreadsRangesQuery"),c.i64.cast([0,0]),c.i64.cast([0,2]),!0,!1,d[3],f,f,d[2],a[0],a[1],c.i64.cast([0,0]),"")},function(e){return d[0]=new c.Map(),d[0].set("cursor",f),d[0].set("filter",c.i64.cast([0,2])),d[0].set("is_after",!1),d[0].set("parent_thread_key",c.i64.cast([0,0])),d[0].set("reference_activity_timestamp",d[2]),d[0].set("reference_thread_key",d[3]),d[0].set("num_threads",a[0]),d[0].set("num_messages",a[1]),d[0].set("additional_pages_to_fetch",a[2]),d[1]=c.toJSON(d[0]),c.sp(b("LSIssueNewTask"),"trq",c.i64.cast([0,313]),d[1],f,f,c.i64.cast([0,0]),c.i64.cast([0,0]),f,f,c.i64.cast([0,0]),c.i64.cast([0,0]))}]))})},function(a){return c.resolve(e)}])}c=a;f["default"]=c}),66);
__d("LSSetForwardScore",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0],a[2],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.timestampMs,a[2])&&c.messageId===a[1]}),function(b){var c=b.update;b.item;return c({forwardScore:a[3]})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSSetHMPSStatus",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.resolve(c)}b=a;f["default"]=b}),66);
__d("LSSetMessageDisplayedContentTypes",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[],e;return b.seq([function(d){return b.seq([function(d){return b.db.table(16).fetch([[[a[0],a[1]]]]).next().then(function(a,b){var d=a.done;a=a.value;return d?(d=[e,e],c[0]=d[0],c[1]=d[1],d):(b=a.item,d=[b.attachmentType,b.xmaLayoutType],c[0]=d[0],c[1]=d[1],d)})},function(d){return b.ftr(b.db.table(12).fetch([[[a[0],a[2],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.timestampMs,a[2])&&c.messageId===a[1]}).next().then(function(a,d){var f=a.done;a=a.value;return f?(f=[b.i64.cast([0,0]),e,e],c[3]=f[0],c[4]=f[1],c[5]=f[2],f):(d=a.item,f=[d.replySourceTypeV2,d.replySourceId,d.text],c[3]=f[0],c[4]=f[1],c[5]=f[2],f)})},function(d){return b.db.table(9).fetch([[[a[0]]]]).next().then(function(a,b){var d=a.done;a=a.value;return d?c[7]=e:(b=a.item,c[7]=b.customEmoji)})},function(d){return b.i64.eq(c[0],b.i64.cast([0,6]))?c[9]=b.i64.cast([0,64]):(b.i64.eq(c[0],b.i64.cast([0,5]))?c[15]=b.i64.cast([0,4]):(b.i64.eq(c[0],b.i64.cast([0,3]))?c[16]=b.i64.cast([0,16384]):(b.i64.eq(c[0],b.i64.cast([0,2]))?c[17]=b.i64.cast([0,2]):(b.i64.eq(c[0],b.i64.cast([0,4]))?c[18]=b.i64.cast([0,2]):c[18]=a[5]?b.i64.cast([0,4096]):b.i64.cast([0,0]),c[17]=c[18]),c[16]=c[17]),c[15]=c[16]),c[9]=c[15]),c[10]=c[5]!==e&&c[5]!==""&&c[5]!==c[7]?b.i64.or_(c[9],b.i64.cast([0,1])):c[9],c[11]=c[7]!==e&&c[7]===c[5]?b.i64.or_(c[10],b.i64.cast([0,128])):c[10],c[12]=b.i64.eq(c[0],b.i64.cast([0,7]))?b.i64.or_(c[11],b.i64.cast([0,8])):c[11],c[13]=b.i64.eq(c[1],b.i64.cast([0,0]))?b.i64.or_(c[12],b.i64.cast([0,1024])):b.i64.eq(c[1],b.i64.cast([0,1]))?b.i64.or_(c[12],b.i64.cast([0,2048])):c[12],c[14]=b.i64.eq(c[3],b.i64.cast([0,2]))&&c[4]!==e?b.i64.or_(c[13],b.i64.cast([0,512])):c[13],b.fe(b.ftr(b.db.table(12).fetch([[[a[0],a[2],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.timestampMs,a[2])&&c.messageId===a[1]}),function(d){var e=d.update;d.item;return e({displayedContentTypes:a[4]?b.i64.cast([0,32]):b.i64.eq(c[3],b.i64.cast([0,3]))?b.i64.or_(c[14],b.i64.cast([0,8192])):c[14]})})}])},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("LSSetMessageTextHasLinks",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(12).fetch([[[a[0],a[2],a[1]]]]),function(c){return b.i64.eq(c.threadKey,a[0])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.timestampMs,a[2])&&c.messageId===a[1]}),function(a){var b=a.update;a.item;return b({textHasLinks:!0})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSTruncateThreadRangeTablesForSyncGroup",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.seq([function(c){return b.i64.eq(a[0],b.i64.cast([0,1]))?b.fe(b.ftr(b.db.table(10).fetch(),function(a){return b.i64.eq(b.i64.cast([0,1])==null?b.i64.cast([0,1]):b.i64.cast([0,1]),b.i64.cast([0,1]))}),function(a){return a["delete"]()}):b.i64.eq(a[0],b.i64.cast([0,95]))?b.fe(b.ftr(b.db.table(10).fetch([[[b.i64.cast([0,0])],[b.i64.cast([-1,4294967295])]]]),function(a){return b.i64.eq(b.i64.cast([0,1])==null?b.i64.cast([0,1]):b.i64.cast([0,1]),b.i64.cast([0,1]))&&(b.i64.eq(a.parentThreadKey,b.i64.cast([0,0]))||b.i64.eq(a.parentThreadKey,b.i64.cast([-1,4294967295])))}),function(a){return a["delete"]()}):b.resolve(0)},function(c){return b.i64.eq(a[0],b.i64.cast([0,1]))?b.fe(b.ftr(b.db.table(247).fetch(),function(a){return b.i64.eq(b.i64.cast([0,1])==null?b.i64.cast([0,1]):b.i64.cast([0,1]),b.i64.cast([0,1]))}),function(a){return a["delete"]()}):b.resolve()},function(c){return b.fe(b.db.table(198).fetch([[[a[0]]]]),function(a){return a["delete"]()})},function(c){return b.fe(b.db.table(220).fetch([[[a[0]]]]),function(a){return a["delete"]()})}])},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSTruncateTablesForSyncGroup",["LSTruncateThreadRangeTablesForSyncGroup"],(function(a,b,c,d,e,f){function a(){var a=arguments,c=a[a.length-1];c.n;var d=[],e;return c.seq([function(d){return c.seq([function(b){return c.fe(c.ftr(c.db.table(9).fetch(),function(b){return(c.i64.eq(b.syncGroup,a[0])||c.i64.eq(b.syncGroup,e)&&c.i64.eq(c.i64.cast([0,1]),a[0]))&&![c.i64.cast([0,17]),c.i64.cast([0,18]),c.i64.cast([0,19]),c.i64.cast([0,20]),c.i64.cast([0,21]),c.i64.cast([0,22]),c.i64.cast([0,23]),c.i64.cast([0,24]),c.i64.cast([0,25]),c.i64.cast([0,26])].some(function(a){return c.i64.eq(b.threadType,a)})}),function(a){return a["delete"]()})},function(d){return c.sp(b("LSTruncateThreadRangeTablesForSyncGroup"),a[0])}])},function(a){return c.resolve(d)}])}c=a;f["default"]=c}),66);
__d("LSUpdateAttachmentCtaAtIndexIgnoringAuthority",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.i64.eq(a[6],b.i64.cast([0,0]))?b.fe(b.db.table(16).fetch([[[a[0],a[1],a[2]]]]),function(b){var c=b.update;b.item;return c({defaultCtaId:a[3],defaultCtaTitle:a[4],defaultCtaType:a[5]})}):b.i64.eq(a[6],b.i64.cast([0,1]))?b.fe(b.db.table(16).fetch([[[a[0],a[1],a[2]]]]),function(b){var c=b.update;b.item;return c({attachmentCta1Id:a[3],cta1Title:a[4],cta1Type:a[5],cta1IconType:d})}):b.i64.eq(a[6],b.i64.cast([0,2]))?b.fe(b.db.table(16).fetch([[[a[0],a[1],a[2]]]]),function(b){var c=b.update;b.item;return c({attachmentCta2Id:a[3],cta2Title:a[4],cta2Type:a[5],cta2IconType:d})}):b.i64.eq(a[6],b.i64.cast([0,3]))?b.fe(b.db.table(16).fetch([[[a[0],a[1],a[2]]]]),function(b){var c=b.update;b.item;return c({attachmentCta3Id:a[3],cta3Title:a[4],cta3Type:a[5],cta3IconType:d})}):b.resolve(function(a){b.logger(a).warn(a)}("Unexpected CTA index"))},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateAttachmentItemCtaAtIndex",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d;return b.seq([function(c){return b.i64.eq(a[5],b.i64.cast([0,0]))?b.fe(b.db.table(18).fetch([[[a[0],a[1]]]]),function(b){var c=b.update;b.item;return c({defaultCtaId:a[2],defaultCtaTitle:a[3],defaultCtaType:a[4]})}):b.i64.eq(a[5],b.i64.cast([0,1]))?b.fe(b.db.table(18).fetch([[[a[0],a[1]]]]),function(b){var c=b.update;b.item;return c({attachmentCta1Id:a[2],cta1Title:a[3],cta1Type:a[4],cta1IconType:d})}):b.i64.eq(a[5],b.i64.cast([0,2]))?b.fe(b.db.table(18).fetch([[[a[0],a[1]]]]),function(b){var c=b.update;b.item;return c({attachmentCta2Id:a[2],cta2Title:a[3],cta2Type:a[4],cta2IconType:d})}):b.i64.eq(a[5],b.i64.cast([0,3]))?b.fe(b.db.table(18).fetch([[[a[0],a[1]]]]),function(b){var c=b.update;b.item;return c({attachmentCta3Id:a[2],cta3Title:a[3],cta3Type:a[4],cta3IconType:d})}):b.resolve(function(a){b.logger(a).warn(a)}("Unexpected CTA index"))},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateReadReceipt",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.fe(b.ftr(b.db.table(14).fetch([[[a[1],a[2]]]]),function(c){return b.i64.eq(c.threadKey,a[1])&&b.i64.eq(b.i64.cast([0,0]),b.i64.cast([0,0]))&&b.i64.eq(c.contactId,a[2])&&b.i64.lt(c.readWatermarkTimestampMs,a[0])}),function(c){var d=c.update;c=c.item;return d({readWatermarkTimestampMs:a[0],readActionTimestampMs:b.i64.gt(a[3],b.i64.cast([0,0]))?a[3]:c.readActionTimestampMs})})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpdateThreadsRangesV2",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return b.seq([function(c){return b.fe(b.db.table(10).fetch([[[a[1]]]]),function(a){return a["delete"]()})},function(d){return c[8]=b.i64.gt(a[2],b.i64.cast([0,1]))&&b.i64.gt(a[3],b.i64.cast([-2147483648,0])),a[0]==="inbox"&&b.i64.eq(a[1],b.i64.cast([0,0]))&&b.i64.eq(a[4],b.i64.cast([0,1]))?b.seq([function(d){return c[9]=a[2],c[10]=a[3],c[11]=!1,c[12]=c[8],b.fe(b.db.table(198).fetch(),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],b.i64.cast([0,1]))&&b.i64.gt(c[15],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[9],c[10],c[11],c[12]],c[0]=a[0],c[1]=a[1],c[2]=a[2],c[3]=a[3],a}]):b.resolve((d=[a[2],a[3],!1,c[8]],c[0]=d[0],c[1]=d[1],c[2]=d[2],c[3]=d[3],d))},function(d){return b.i64.eq(a[4],b.i64.cast([0,1]))?b.seq([function(d){return c[9]=c[0],c[10]=c[1],c[11]=c[2],c[12]=c[3],b.fe(b.ftr(b.db.table(220).fetch(),function(c){return b.i64.eq(c.parentThreadKey,a[1])}),function(a){a=a.item;return c[13]=a.minLastActivityTimestampMs,c[15]=a.minThreadKey,c[14]=b.i64.lt(c[9]==null?c[13]:c[9],c[13]),c[9]=c[14]?c[13]:c[9],c[10]=c[14]?c[15]:c[10],c[11]=c[11]||a.isLoadingBefore,c[12]=c[12]||b.i64.gt(c[13],b.i64.cast([0,1]))&&b.i64.gt(c[15],b.i64.cast([-2147483648,0]))})},function(a){return a=[c[9],c[10],c[11],c[12]],c[4]=a[0],c[5]=a[1],c[6]=a[2],c[7]=a[3],a}]):b.resolve((d=[c[0],c[1],c[2],c[3]],c[4]=d[0],c[5]=d[1],c[6]=d[2],c[7]=d[3],d))},function(d){return b.db.table(10).add({parentThreadKey:a[1],minThreadKey:c[5]==null?b.i64.cast([-2147483648,0]):c[5],minLastActivityTimestampMs:c[4]==null?b.i64.cast([0,1]):c[4],maxLastActivityTimestampMs:b.i64.cast([0,1]),maxThreadKey:b.i64.cast([-2147483648,0]),isLoadingBefore:c[6],isLoadingAfter:!1,hasMoreBefore:c[7],hasMoreAfter:!1})}])},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);
__d("LSUpsertFolderSeenTimestamp",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.i64.gt(a[1],b.i64.cast([0,0]))?b.db.table(35).fetch([[[a[0]]]]).next().then(function(c,d){var e=c.done;c=c.value;return e?b.db.table(35).add({parentThreadKey:a[0],lastSeenRequestTimestampMs:a[1]}):(d=c.item,b.i64.lt(d.lastSeenRequestTimestampMs,a[1])?b.fe(b.db.table(35).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({lastSeenRequestTimestampMs:a[1]})}):b.resolve())}):b.resolve()},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSUpsertMessage",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[];return b.seq([function(c){return b.db.table(12).fetch([[[a[9]]],"optimistic"]).next().then(function(c,d){var e=c.done;c=c.value;return e?b.db.table(12).add({threadKey:a[3],timestampMs:a[5],messageId:a[8],offlineThreadingId:a[9],authorityLevel:a[2],primarySortKey:a[6],senderId:a[10],isAdminMessage:a[12],sendStatus:a[15],sendStatusV2:a[16],text:a[0],subscriptErrorMessage:a[1],secondarySortKey:a[7],stickerId:a[11],messageRenderingType:a[13],isUnsent:a[17],unsentTimestampMs:a[18],mentionOffsets:a[19],mentionLengths:a[20],mentionIds:a[21],mentionTypes:a[22],replySourceId:a[23],replySourceType:a[24],replySourceTypeV2:a[25],replyStatus:a[26],replySnippet:a[27],replyMessageText:a[28],replyToUserId:a[29],replyMediaExpirationTimestampMs:a[30],replyMediaUrl:a[31],replyMediaPreviewWidth:a[33],replyMediaPreviewHeight:a[34],replyMediaUrlMimeType:a[35],replyMediaUrlFallback:a[36],replyCtaId:a[37],replyCtaTitle:a[38],replyAttachmentType:a[39],replyAttachmentId:a[40],replyAttachmentExtra:a[41],replyType:a[42],isForwarded:a[43],forwardScore:a[44],hasQuickReplies:a[45],adminMsgCtaId:a[46],adminMsgCtaTitle:a[47],adminMsgCtaType:a[48],cannotUnsendReason:a[49],textHasLinks:a[50],viewFlags:a[51],displayedContentTypes:a[52],viewedPluginKey:a[53],viewedPluginContext:a[54],quickReplyType:a[55],hotEmojiSize:a[56],replySourceTimestampMs:a[57],ephemeralDurationInSec:a[58],msUntilExpirationTs:a[59],ephemeralExpirationTs:a[60],takedownState:a[61],isCollapsed:a[62],subthreadKey:a[63],botResponseId:a[64],editCount:a[65],isPaidPartnership:a[66]}):(d=c.item,b.i64.le(d.authorityLevel,a[2])?b.db.table(12).put({threadKey:a[3],timestampMs:a[5],messageId:a[8],offlineThreadingId:a[9],authorityLevel:a[2],primarySortKey:d.primarySortKey,senderId:a[10],isAdminMessage:a[12],sendStatus:a[15],sendStatusV2:a[16],text:a[0],subscriptErrorMessage:a[1],secondarySortKey:d.secondarySortKey,stickerId:a[11],messageRenderingType:a[13],isUnsent:a[17],unsentTimestampMs:a[18],mentionOffsets:a[19],mentionLengths:a[20],mentionIds:a[21],mentionTypes:a[22],replySourceId:a[23],replySourceType:a[24],replySourceTypeV2:a[25],replyStatus:a[26],replySnippet:a[27],replyMessageText:a[28],replyToUserId:a[29],replyMediaExpirationTimestampMs:a[30],replyMediaUrl:a[31],replyMediaPreviewWidth:a[33],replyMediaPreviewHeight:a[34],replyMediaUrlMimeType:a[35],replyMediaUrlFallback:a[36],replyCtaId:a[37],replyCtaTitle:a[38],replyAttachmentType:a[39],replyAttachmentId:a[40],replyAttachmentExtra:a[41],replyType:a[42],isForwarded:a[43],forwardScore:a[44],hasQuickReplies:a[45],adminMsgCtaId:a[46],adminMsgCtaTitle:a[47],adminMsgCtaType:a[48],cannotUnsendReason:a[49],textHasLinks:a[50],viewFlags:a[51],displayedContentTypes:a[52],viewedPluginKey:a[53],viewedPluginContext:a[54],quickReplyType:a[55],hotEmojiSize:a[56],replySourceTimestampMs:a[57],ephemeralDurationInSec:a[58],msUntilExpirationTs:a[59],ephemeralExpirationTs:a[60],takedownState:a[61],isCollapsed:a[62],subthreadKey:a[63],botResponseId:a[64],editCount:a[65],isPaidPartnership:a[66]}):b.resolve())})},function(a){return b.resolve(c)}])}b=a;f["default"]=b}),66);
__d("LSWriteThreadCapabilities",[],(function(a,b,c,d,e,f){function a(){var a=arguments,b=a[a.length-1];b.n;var c=[],d=[];return b.seq([function(d){return c[0]=b.i64.of_float(Date.now()),b.fe(b.db.table(9).fetch([[[a[0]]]]),function(b){var c=b.update;b.item;return c({capabilities:a[1],capabilities2:a[2],capabilities3:a[3],capabilities4:a[4]})})},function(a){return b.resolve(d)}])}b=a;f["default"]=b}),66);