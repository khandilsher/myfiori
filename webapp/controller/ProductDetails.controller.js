sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"myfiori/myFiori/model/formatter"
	], function(Controller, formatter) {
		"use strict";
		
		return Controller.extend("myfiori.myFiori.controller.ProductDetails", {
			
			formatter: formatter,
		
			onInit: function() {
				// this.byId("categoryLabel").setVisible(false);
				// this.byId("category").setVisible(false);
			}
		});
			
});
