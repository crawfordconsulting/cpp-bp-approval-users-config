sap.ui.define(
    ["sap/fe/core/AppComponent"],
    function (Component) {
        "use strict";

        return Component.extend("cppbpapprovalusersconfig.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
            Component.prototype.init.apply(this, arguments);
            this.getRouter().navTo("BpApprovalReminAllObjectPage",{ key: "(1)"}, true);
            } 

        });
    }
);