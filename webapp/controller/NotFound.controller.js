sap.ui.define([
		"myfiori/myFiori/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("myfiori.myFiori.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);