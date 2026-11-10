sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"cppbpapprovalusersconfig/test/integration/pages/BpApprovalReminAllList.gen",
	"cppbpapprovalusersconfig/test/integration/pages/BpApprovalReminAllObjectPage.gen",
	"cppbpapprovalusersconfig/test/integration/pages/BpApprovalReminObjectPage.gen"
], function (JourneyRunner, BpApprovalReminAllListGenerated, BpApprovalReminAllObjectPageGenerated, BpApprovalReminObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('cppbpapprovalusersconfig') + '/test/flp.html#app-preview',
        pages: {
			onTheBpApprovalReminAllListGenerated: BpApprovalReminAllListGenerated,
			onTheBpApprovalReminAllObjectPageGenerated: BpApprovalReminAllObjectPageGenerated,
			onTheBpApprovalReminObjectPageGenerated: BpApprovalReminObjectPageGenerated
        },
        async: true
    });

    return runner;
});

