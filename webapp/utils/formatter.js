sap.ui.define(
	[],
	function () {
		"use strict";
		return {

			dateFormat: function (date) {
				// debugger;
				if (date) {
					var oDateFormat = sap.ui.core.format.DateFormat.getDateTimeInstance({
						pattern: "yyyy-MM-dd"
					});
					return oDateFormat.format(date);
				} else {
					return date;
				}
			},

				availableColor: function (priority) {
				if (priority === "Very High") {
					return "Error";
				} else if (priority === "High") {
					return "Error";
				} else if (priority === "Medium") {
					return "Warning";
				} else if (priority === "Low") {
					return "Success";
				} else {
					return "Success";
				}
			}

		};

	});