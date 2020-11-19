var arr4 = [],
	state, ofilters, SystStatu;

sap.ui.define(["sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"./utilities",
	"com/sap/build/ba293bd41-us_1/manageWorkOrder/utils/formatter",
	"sap/ui/core/routing/History",
	"sap/ui/model/Sorter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/odata/v2/ODataModel",
	"sap/m/MessageToast"

], function (BaseController, MessageBox, Utilities, formatter, History, Sorter, Filter, FilterOperator, ODataModel, MessageToast) {
	"use strict";

	return BaseController.extend("com.sap.build.ba293bd41-us_1.manageWorkOrder.controller.Page1", {

		formatter: formatter,
		handleRouteMatched: function (oEvent) {
			
			
			var a = this.getView().getModel("oGlobalModel").getProperty("/flag");
			//alert(a);
			if (this.getView().getModel("oGlobalModel").getProperty("/flag")) {

			} else {
				this.metadataLoad();
			}
			
				var designation = window.location.origin;
				if (designation === "https://webidetesting4544933-ba293bd41.dispatcher.us1.hana.ondemand.com" || designation ===
					"https://manageworkorderfilter-ba293bd41.dispatcher.us1.hana.ondemand.com") {
					this.getView().byId("Dashboard").setVisible(true);
				} else {
					this.getView().byId("Dashboard").setVisible(false);
				}
			
			
			
			},
		metadataLoad: function () {
			this.plantF4();
			this.mainworkf4();

			this.filplanChange();
			// this.filstat();
			
		
			this.getView().getModel("ViewModel").setProperty("/Segemntbutton", false);
		},

		plantF4: function () {

			// var oCont = this;

			var plantf4 = this.getView().byId("filplant");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read('/PlantF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var ImPlant = oData.results[0].ImPlant;
					console.log("ImPlant:" + ImPlant)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.ImPlant) == -1) {
							dups.push(el.ImPlant);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{ImPlant}",
						text: "{ImPlant} {Descriptions}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					plantf4.setModel(oModel);
					plantf4.bindItems("/arr7", oItems);
				}
			});

		},

		mainworkf4: function () {

			var oCont = this;

			var wkcentf4 = oCont.getView().byId("filwkcent");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read('/WorkCenterF4Set', {
				// filters: ofilters,
				success: function (oData, oResponse) {
					var Text = oData.results[0].Text;
					console.log("Text:" + Text)
					var dups = [];
					var arr1 = oData.results.filter(function (el) {
						if (dups.indexOf(el.Text) == -1) {
							dups.push(el.Text);
							return true;
						}
						return false;
					});
					var arr7 = {
						"arr7": arr1
					};
					//	debugger;
					console.log("arr6:" + arr7);
					var oItems = new sap.ui.core.ListItem({
						key: "{Text}",
						text: "{Text} {WrkCtrDes}"
					});
					var oModel = new sap.ui.model.json.JSONModel(arr7);
					wkcentf4.setModel(oModel);
					wkcentf4.bindItems("/arr7", oItems);
				}
			});

		},

		filplanChange: function () {

			//	this.getView().byId("inpfloc").setEnabled(true);
			// this.getView().byId("filwkcent").setEnabled(true);
			// this.getView().byId("DRS4").setEnabled(true);
			// this.getView().byId("filstatus").setEnabled(true);

			this.plantf4 = this.getView().byId("filplant").getSelectedKey();
			// alert(this.plantf4);

			this.getView().getModel("ViewModel").setProperty("/Segemntbutton", true);

			if (this.plantf4) {
				this.getView().byId("inpfloc").setEnabled(true);
				this.getView().byId("filwkcent").setEnabled(true);
				this.getView().byId("DRS4").setEnabled(true);
				this.getView().byId("filstatus").setEnabled(true);

			} else {

			}

		},
		filwkcentchange: function () {

			this.wkcentf4 = this.getView().byId("filwkcent").getSelectedKey();
			//alert(this.wkcentf4);

		},

		filstat: function () {

			this.sta = this.getView().byId("filstatus").getValue();
			// alert(this.sta);

		},

		techobj: function () {

			var funloc = sap.ui.core.Fragment.byId("filterfragfragment", "functech");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);

			oModel.read('/FunctionalLocAllDataSet', {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var leng = oData.results.length;
					console.log("length", leng);
					var FunctionalLocation = oData.results[0].FunctionalLocation;
					var Text = oData.results[0].Text;

					console.log("FunctionalLocation:" + FunctionalLocation)
					console.log("Description:" + Text)
					var dups = [];
					var arr3 = oData.results.filter(function (el) {
						if (dups.indexOf(el.FunctionalLocation) == -1) {
							dups.push(el.FunctionalLocation);
							return true;
						} else if (dups.indexOf(el.Text) == -1) {
							dups.push(el.Text);
							return true;
						}
						return false;
					});
					var arr11 = {
						"arr11": arr3
					};
					console.log("arr11:" + arr11);
					var oItems = new sap.ui.core.ListItem({
						key: "{FunctionalLocation}",
						text: "{FunctionalLocation} {FunctionalLocationDesc}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr11);
					oModel.setSizeLimit(10000);
					funloc.setModel(oModel);
					funloc.bindItems("/arr11", oItems);

				},

			});

			var funloc1 = sap.ui.core.Fragment.byId("filterfragfragment", "equip");

			var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			oModel.read('/EquipmentF4Set', {
				//	filters: ofilters,
				success: function (oData, oResponse) {
					var leng = oData.results.length;
					console.log("length", leng);
					var EquipmentNo = oData.results[0].EquipmentNo;
					var Text = oData.results[0].Text;

					console.log("EquipmentNo:" + EquipmentNo)
					console.log("Description:" + Text)
					var dups = [];
					var arr3 = oData.results.filter(function (el) {
						if (dups.indexOf(el.EquipmentNo) == -1) {
							dups.push(el.EquipmentNo);
							return true;
						} else if (dups.indexOf(el.Text) == -1) {
							dups.push(el.Text);
							return true;
						}
						return false;
					});
					var arr11 = {
						"arr11": arr3
					};
					console.log("arr11:" + arr11);
					var oItems = new sap.ui.core.ListItem({
						key: "{EquipmentNo}",
						text: "{EquipmentNo} {Text}"
					});

					var oModel = new sap.ui.model.json.JSONModel(arr11);
					oModel.setSizeLimit(10000);
					funloc1.setModel(oModel);
					funloc1.bindItems("/arr11", oItems);

				},

			});

			this.filterfrag.open();

		},

		funloc_change: function () {
			//debugger;

			/*for the Functional Location alone*/
			this.flocal = sap.ui.core.Fragment.byId("filterfragfragment", "functech").getValue();
			// alert(this.flocal);
			this.getView().byId("inpfloc").setValue(this.flocal);

		},

		Clearpress: function () {

			//this.plantf4 = this.getView().byId("filplant").getSelectedKey();
			// alert(this.plantf4);

			var filtplant = this.getView().byId("filplant").setValue("");
			var filttecobj = this.getView().byId("inpfloc").setValue("");
			var filtmainwkcen = this.getView().byId("filwkcent").setValue("");
			var filtstat = this.getView().byId("filstatus").setValue("");
			var filtstat2 = this.getView().byId("DRS4").setValue("");
			var table = this.getView().byId("Table").destroyItems("");
			var button = this.getView().byId("segday").setEnabled(true);

			this.getView().byId("inpfloc").setEnabled(false);
			this.getView().byId("filwkcent").setEnabled(false);
			this.getView().byId("DRS4").setEnabled(false);
			this.getView().byId("filstatus").setEnabled(false);
			this.getView().getModel("ViewModel").setProperty("/Segemntbutton", false);
			this.getView().byId("counttable").setText("Work Order(0/0)");

		},

		equichange: function () {

			this.filequi = sap.ui.core.Fragment.byId("filterfragfragment", "equip").getSelectedKey();
			var equipValue = sap.ui.core.Fragment.byId("filterfragfragment", "equip").getValue();
			// alert(this.filequi);
			this.getView().byId("inpfloc").setValue(equipValue);

		},
		clearfilterfrag: function () {

			var func = sap.ui.core.Fragment.byId("filterfragfragment", "functech").setValue("");
			var sub = sap.ui.core.Fragment.byId("filterfragfragment", "subfunctech").setValue("");

			this.getView().byId("inpfloc").setValue();

		},

		Funcloccancel: function () {
			this.filterfrag.close();
		},
		Funclocok: function () {
			this.filterfrag.close();
		},

		// clearfilpress: function () {

		// 	var filtplant = this.getView().byId("filplant").setValue("");
		// 	var filttecobj = this.getView().byId("inpfloc").setValue("");
		// 	var filtmainwkcen = this.getView().byId("filwkcent").setValue("");
		// 	var filtmat = this.getView().byId("filmaterial").setValue("");
		// 	var filtstat = this.getView().byId("filstatus").setValue("");
		// 	var filtstat = this.getView().byId("DRS4").setValue("");
		// 	var table = this.getView().byId("Table").destroyItems("");

		// },

		SegmentedChange: function (oEvent) {

			var oSegmentedButton = this.byId("segday");
			var oSelectedItemId = oSegmentedButton.getSelectedKey();
			
			MessageToast.show("The data is being loaded", {
				duration: 17500
				//onClose: "Toastcloses"
			});

			if (oSelectedItemId === '1') {

				var oController = this;
				// oController.busyDialogFun();

				oController.getView().getModel("oGlobalModel").setProperty("/deLay", true);

				var table = oController.getView().byId("Table");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var sPath = "/WOListHeaderSet";
				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Type", sap.ui.model.FilterOperator.EQ, oSelectedItemId)],

					success: function (oData, oResponse) {
						oController.getView().getModel("oGlobalModel").setProperty("/deLay", false);

						arr4 = [];

						//	alert("success")
						var count = oData.results.length;
						// console.log("count", count  );

						for (var i = 0; i < count; i++) {
							var WorkOrderNo = oData.results[i].WorkOrderNo;
							// oModel.setProperty(sPath, oData);
							var Description = oData.results[i].Description;
							var CreatedOn = oData.results[i].CreatedOn;
							// debugger;
							var year = CreatedOn.slice(0, 4);
							var month = CreatedOn.slice(4, 6);
							var date = CreatedOn.slice(6, 8);
							var CreatedOnDate = date + '.' + month + '.' + year;
							var OrderType = oData.results[i].OrderType;
							//var SystStatus = oData.results[i].SystStatus;
							var UserStatus = oData.results[i].UserStatus;
							var priority = oData.results[i].Priority;
							var CreatedCnt = oData.results[i].CreatedCnt;
							this.SystStatu = oData.results[i].SystStatu;
							this.functlocate = oData.results[i].FunctLoc;
							this.plannplant = oData.results[i].Plant;
							var SystStatusDes = oData.results[i].SystStatusDes;
							var a = "Success";
							var b = "Warning";
							var c = "Error";
							var d = "Error";
							if (SystStatusDes === 'Created') {
								// oController._oParentView.byId("inpPrity").setText(priority1);

								state = a;
								// var pri = priority.slice(0, 2);
							} else if (SystStatusDes === 'Released') {
								// oController._oParentView.byId("inpPrity").setText(priority2);

								state = b;
								// var pri = priority.slice(0, 5);

							} else if (SystStatusDes === 'Confirmed') {
								// oController._oParentView.byId("inpPrity").setText(priority3);

								state = c;
								// var pri = priority.slice(0, 3);
							} else if (SystStatusDes === 'Closed') {
								// oController._oParentView.byId("inpPrity").setText(priority4);

								state = c;
								// var pri = priority.slice(0, 7);
							}

							var obj1 = {

								WorkOrderNo: WorkOrderNo,
								Description: Description,
								CreatedOn: CreatedOnDate,
								OrderType: OrderType,
								SystStatusDes: SystStatusDes,
								UserStatus: UserStatus,
								priority: priority,
								CreatedCnt: CreatedCnt,
								SystStatu: this.SystStatu,
								functionallocation: this.functlocate,
								Plant: this.plannplant,
								state: state

							};
							arr4.push(obj1);

						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: arr4

						});
						table.setModel(oModelccd);

					},
					error: function (oData, oResponse) {

					}
				});

			} else if (oSelectedItemId === '2') {

				var oController = this;
				// oController.busyDialogFun();
				oController.getView().getModel("oGlobalModel").setProperty("/deLay", true);

				MessageToast.show("The data is being loaded");
				var table = oController.getView().byId("Table");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var sPath = "/WOListHeaderSet";
				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Type", sap.ui.model.FilterOperator.EQ, oSelectedItemId)],

					success: function (oData, oResponse) {

						oController.getView().getModel("oGlobalModel").setProperty("/deLay", false);

						arr4 = [];

						//	alert("success")
						var count = oData.results.length;
						// console.log("count", count  );

						for (var i = 0; i < count; i++) {
							var WorkOrderNo = oData.results[i].WorkOrderNo;
							// oModel.setProperty(sPath, oData);
							var Description = oData.results[i].Description;
							var CreatedOn = oData.results[i].CreatedOn;
							// debugger;
							var year = CreatedOn.slice(0, 4);
							var month = CreatedOn.slice(4, 6);
							var date = CreatedOn.slice(6, 8);
							var CreatedOnDate = date + '.' + month + '.' + year;
							var OrderType = oData.results[i].OrderType;
							//var SystStatus = oData.results[i].SystStatus;
							var UserStatus = oData.results[i].UserStatus;
							var priority = oData.results[i].Priority;
							this.SystStatu = oData.results[i].SystStatu;
							var CreatedCnt = oData.results[i].CreatedCnt;
							this.functlocate = oData.results[i].FunctLoc;
							this.plannplant = oData.results[i].Plant;
							var SystStatusDes = oData.results[i].SystStatusDes;
							var a = "Success";
							var b = "Warning";
							var c = "Error";
							var d = "Error";
							if (SystStatusDes === 'Created') {
								// oController._oParentView.byId("inpPrity").setText(priority1);

								state = a;
								// var pri = priority.slice(0, 2);
							} else if (SystStatusDes === 'Released') {
								// oController._oParentView.byId("inpPrity").setText(priority2);

								state = b;
								// var pri = priority.slice(0, 5);

							} else if (SystStatusDes === 'Confirmed') {
								// oController._oParentView.byId("inpPrity").setText(priority3);

								state = c;
								// var pri = priority.slice(0, 3);
							} else if (SystStatusDes === 'Closed') {
								// oController._oParentView.byId("inpPrity").setText(priority4);

								state = c;
								// var pri = priority.slice(0, 7);
							}

							var obj1 = {

								WorkOrderNo: WorkOrderNo,
								Description: Description,
								CreatedOn: CreatedOnDate,
								OrderType: OrderType,
								SystStatusDes: SystStatusDes,
								UserStatus: UserStatus,
								priority: priority,
								CreatedCnt: CreatedCnt,
								SystStatu: this.SystStatu,
								functionallocation: this.functlocate,
								Plant: this.plannplant,
								state: state

							};
							arr4.push(obj1);

						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: arr4

						});
						table.setModel(oModelccd);

					},
					error: function (oData, oResponse) {

					}
				});
			} else if (oSelectedItemId === '3') {

				var oController = this;
				// oController.busyDialogFun();
				oController.getView().getModel("oGlobalModel").setProperty("/deLay", true);
				MessageToast.show("The data is being loaded");
				var table = oController.getView().byId("Table");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var sPath = "/WOListHeaderSet";
				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Type", sap.ui.model.FilterOperator.EQ, oSelectedItemId)],

					success: function (oData, oResponse) {
						oController.getView().getModel("oGlobalModel").setProperty("/deLay", false);

						arr4 = [];

						//	alert("success")
						var count = oData.results.length;
						// console.log("count", count  );

						for (var i = 0; i < count; i++) {
							var WorkOrderNo = oData.results[i].WorkOrderNo;
							// oModel.setProperty(sPath, oData);
							var Description = oData.results[i].Description;
							var CreatedOn = oData.results[i].CreatedOn;
							// debugger;
							var year = CreatedOn.slice(0, 4);
							var month = CreatedOn.slice(4, 6);
							var date = CreatedOn.slice(6, 8);
							var CreatedOnDate = date + '.' + month + '.' + year;
							var OrderType = oData.results[i].OrderType;
							//var SystStatus = oData.results[i].SystStatus;
							var UserStatus = oData.results[i].UserStatus;
							var priority = oData.results[i].Priority;
							this.SystStatu = oData.results[i].SystStatu;
							var CreatedCnt = oData.results[i].CreatedCnt;
							this.functlocate = oData.results[i].FunctLoc;
							this.plannplant = oData.results[i].Plant;
							var SystStatusDes = oData.results[i].SystStatusDes;
							var a = "Success";
							var b = "Warning";
							var c = "Error";
							var d = "Error";
							if (SystStatusDes === 'Created') {
								// oController._oParentView.byId("inpPrity").setText(priority1);

								state = a;
								// var pri = priority.slice(0, 2);
							} else if (SystStatusDes === 'Released') {
								// oController._oParentView.byId("inpPrity").setText(priority2);

								state = b;
								// var pri = priority.slice(0, 5);

							} else if (SystStatusDes === 'Confirmed') {
								// oController._oParentView.byId("inpPrity").setText(priority3);

								state = c;
								// var pri = priority.slice(0, 3);
							} else if (SystStatusDes === 'Closed') {
								// oController._oParentView.byId("inpPrity").setText(priority4);

								state = c;
								// var pri = priority.slice(0, 7);
							}

							var obj1 = {

								WorkOrderNo: WorkOrderNo,
								Description: Description,
								CreatedOn: CreatedOnDate,
								OrderType: OrderType,
								SystStatusDes: SystStatusDes,
								UserStatus: UserStatus,
								priority: priority,
								SystStatu: this.SystStatu,
								CreatedCnt: CreatedCnt,
								functionallocation: this.functlocate,
								Plant: this.plannplant,
								state: state

							};
							arr4.push(obj1);

						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: arr4

						});
						table.setModel(oModelccd);

					},
					error: function (oData, oResponse) {

					}
				});

			}

		},

		adv: function () {
			this.search.open();

		},
		canceltecch: function () {
			this.search.close();
		},
		backToOvp: function () {
			
				var that = this;
				sap.m.MessageBox.show(
					"Do you want to exit?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction === "YES") {

								window.location.replace(
									"https://dashboarddesign-ba293bd41.dispatcher.us1.hana.ondemand.com/index.html?hc_reset#/PM"
								);
								// location.reload();

							}

						}

					});
			
			
			// sap.m.URLHelper.redirect(
			// 	"https://dashboarddesign-ba293bd41.dispatcher.us1.hana.ondemand.com/index.html?hc_reset#/PM"
			// );
		},

		/*Date Range Function*/

		handleChange: function (oEvent) {

			var Segment = oEvent.getSource().getValue();

			var SplitTotalFoot = Segment.split("-");
			this.date1 = SplitTotalFoot[0];
			// alert(this.date1);
			this.date2 = SplitTotalFoot[1];
			// alert(this.date2);

			// var oText = this.byId("DRS4");
			// var oDP = oEvent.getSource();
			// this.sValue = oEvent.getParameter("value");
			// alert(this.sValue);

			if (Segment !== "") {
				this.getView().getModel("ViewModel").setProperty("/Segemntbutton", false);
			} else {
				this.getView().getModel("ViewModel").setProperty("/Segemntbutton", true);
			}

		},

		onSearch: function () {

		

			this.getView().getModel("oGlobalModel").setProperty("/deLay", true);
			

			var filpla2 = this.getView().byId("filplant").getValue();

			if (filpla2 === "") {
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.error("Please Select Plant", {
					title: "Information",
					onOK: null
				});
				this.getView().getModel("oGlobalModel").setProperty("/deLay", false);

			} else {

				arr4 = [];

				var ofilters = [];

				var plant = this.getView().byId("filplant").getValue();
				var SplitTotalFoot = plant.split(" ");
				var plan = SplitTotalFoot[0];

				var wkcfil = this.getView().byId("filwkcent").getValue();
				var SplitTotalFoot3 = wkcfil.split(" ");
				var wkcen = SplitTotalFoot3[0];

				var sta = this.getView().byId("filstatus").getSelectedKey();
				//alert(sta);

				var filequip = sap.ui.core.Fragment.byId("filterfragfragment", "equip").getSelectedKey();
				var filocat = sap.ui.core.Fragment.byId("filterfragfragment", "functech").getSelectedKey();

				var dat = this.getView().byId("DRS4").getValue();
				if (dat === "") {
					var date1 = "";
					var date2 = "";
				} else {

					var SplitTotalFoot2 = dat.split(" - ");
					var date1 = SplitTotalFoot2[0];
					// var dd = date1.slice(0,2);
					// var mm = date1.slice(3,5);
					// var yy = date1.slice(6,10);
					// var Date1 = yy + mm + dd;

					// alert(this.date1);
					var date2 = SplitTotalFoot2[1];
					// var dd1 = date2.slice(0,2);
					// var mm1 = date2.slice(3,5);
					// var yy1 = date2.slice(6,10);
					// var Date2 = yy1 + mm1 + dd1;

				}

				var oController = this;
				// oController.busyDialogFun();
				
					MessageToast.show("The data is being loaded", {
				duration: 1000
				//onClose: "Toastcloses"
			});
				
				
				var table = oController.getView().byId("Table");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				ofilters = [
					new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.EQ, date2),
					new sap.ui.model.Filter("DateRange", sap.ui.model.FilterOperator.EQ, date1),
					new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, plan),
					new sap.ui.model.Filter("MnWkCtr", sap.ui.model.FilterOperator.EQ, wkcen),
					new sap.ui.model.Filter("Equipment", sap.ui.model.FilterOperator.EQ, filequip),
					new sap.ui.model.Filter("FunctLoc", sap.ui.model.FilterOperator.EQ, filocat),
					new sap.ui.model.Filter("SystStatus", sap.ui.model.FilterOperator.EQ, sta),
					new sap.ui.model.Filter("Type", sap.ui.model.FilterOperator.EQ, "4")
				];

				var sPath = "/WOListHeaderSet";
				oModel.read(sPath, {

					filters: ofilters,

					success: function (oData, oResponse) {

						this.getView().getModel("oGlobalModel").setProperty("/deLay", false);

						arr4 = [];

						//	alert("success")
						var count = oData.results.length;
						// console.log("count", count  );
						//alert(count);

						for (var i = 0; i < count; i++) {
							var WorkOrderNo = oData.results[i].WorkOrderNo;
							// oModel.setProperty(sPath, oData);
							var Description = oData.results[i].Description;
							var CreatedOn = oData.results[i].CreatedOn;
							// debugger;
							var year = CreatedOn.slice(0, 4);
							var month = CreatedOn.slice(4, 6);
							var date = CreatedOn.slice(6, 8);
							var CreatedOnDate = date + '.' + month + '.' + year;
							var OrderType = oData.results[i].OrderType;
							//var SystStatus = oData.results[i].SystStatus;
							var UserStatus = oData.results[i].UserStatus;
							var priority = oData.results[i].Priority;
							var CreatedCnt = oData.results[i].CreatedCnt;
							this.SystStatu = oData.results[i].SystStatu;
							this.functlocate = oData.results[i].FunctLoc;
							this.plannplant = oData.results[i].Plant;
							var SystStatusDes = oData.results[i].SystStatusDes;
							var a = "Success";
							var b = "Warning";
							var c = "Error";
							var d = "Error";
							if (SystStatusDes === 'Created') {
								// oController._oParentView.byId("inpPrity").setText(priority1);

								state = a;
								// var pri = priority.slice(0, 2);
							} else if (SystStatusDes === 'Released') {
								// oController._oParentView.byId("inpPrity").setText(priority2);

								state = b;
								// var pri = priority.slice(0, 5);

							} else if (SystStatusDes === 'Confirmed') {
								// oController._oParentView.byId("inpPrity").setText(priority3);

								state = c;
								// var pri = priority.slice(0, 3);
							} else if (SystStatusDes === 'Closed') {
								// oController._oParentView.byId("inpPrity").setText(priority4);

								state = c;
								// var pri = priority.slice(0, 7);
							}

							var obj1 = {

								WorkOrderNo: WorkOrderNo,
								Description: Description,
								CreatedOn: CreatedOnDate,
								OrderType: OrderType,
								SystStatusDes: SystStatusDes,
								UserStatus: UserStatus,
								priority: priority,
								CreatedCnt: CreatedCnt,
								SystStatu: this.SystStatu,
								functionallocation: this.functlocate,
								Plant: this.plannplant,
								state: state

							};

							arr4.push(obj1);
							console.log("arr4", arr4);
						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: arr4

						});
						table.setModel(oModelccd);
						
						// this.getView().getModel("oGlobalModel").setProperty("/SystStatu", this.SystStatu);

					}.bind(this),
					error: function (oData, oResponse) {

					}
				});
			}

		},
		// Toastcloses: function(){
			
		// 	this.onSearch();
			
			
		// },
		

		radioButtonSelect: function (oEvent) {
			var oSelectedIndex = oEvent.getParameter("selectedIndex");
			var oRadioButtonSrc = oEvent.getSource().getAggregation("buttons");
			var oSelectedRadioText = oRadioButtonSrc[oSelectedIndex].getText();
			var aFilters = [];

			if (oSelectedRadioText === "Low") {
				// alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "Medium") {
				// alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "High") {
				// alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "Very High") {
				// alert(oSelectedRadioText);

			} else if (oSelectedRadioText === "All") {
				// alert(oSelectedRadioText);
			}

		},

		_firstListBinding: function () {
			/*var listSet = this.getView().byId("mainList");
			var oSorter = [new sap.ui.model.Sorter("CreatedOn", {
				descending: 'false'
			})];
			var listTemp = this.getView().byId("itemlist1");

			listSet.bindAggregation("items", {
				path: "/WorkOrderListSet",
				template: listTemp,
				sorter: oSorter

			});*/

		},

		vstatus: function (a) {
			if (a === 'Medium') {

				return "Warning";

			} else if (a === 'Very High') {

				return "Error";
			} else if (a === 'Low') {

				return "Success";
			} else if (a === 'Rejected') {

				return "Error";
			} else {
				return "None";
			}
		},

		doNavigate: function (sRouteName, oBindingContext, fnPromiseResolve, sViaRelation, iNextLevel) {
			this.getView().getModel("oGlobalModel").setProperty("/flag", true);
			var sPath = (oBindingContext) ? oBindingContext.getPath() : null;
			var oModel = (oBindingContext) ? oBindingContext.getModel() : null;

			var routePattern = this.oRouter.getRoute(sRouteName).getPattern().split('/');
			var contextFilter = new RegExp('^:.+:$');
			var pagePattern = routePattern.filter(function (pattern) {
				var contextPattern = pattern.match(contextFilter);
				return contextPattern === null || contextPattern === undefined;
			});
			iNextLevel = iNextLevel !== undefined ? iNextLevel : pagePattern ? pagePattern.length - 1 : 0;
			this.oFclModel = this.oFclModel ? this.oFclModel : this.getOwnerComponent().getModel("FclRouter");

			var sEntityNameSet;
			var oNextUIState = this.getOwnerComponent().getSemanticHelper().getNextUIState(iNextLevel);
			var sBeginContext, sMidContext, sEndContext;
			if (iNextLevel === 0) {
				sBeginContext = sPath;
			}

			if (iNextLevel === 1) {
				sBeginContext = this.oFclModel.getProperty("/beginContext");
				sMidContext = sPath;
			}

			if (iNextLevel === 2) {
				sBeginContext = this.oFclModel.getProperty("/beginContext");
				sMidContext = this.oFclModel.getProperty("/midContext");
				sEndContext = sPath;
			}

			var sNextLayout = oNextUIState.layout;

			if (sPath !== null && sPath !== "") {
				if (sPath.substring(0, 1) === "/") {
					sPath = sPath.substring(1);
					if (iNextLevel === 0) {
						sBeginContext = sPath;
					} else if (iNextLevel === 1) {
						sMidContext = sPath;
					} else {
						sEndContext = sPath;
					}
				}
				sEntityNameSet = sPath.split("(")[0];
			}
			var sNavigationPropertyName;
			if (sEntityNameSet !== null) {
				sNavigationPropertyName = sViaRelation || this.getOwnerComponent().getNavigationPropertyForNavigationWithContext(sEntityNameSet,
					sRouteName);
			}
			if (sNavigationPropertyName !== null && sNavigationPropertyName !== undefined) {
				if (sNavigationPropertyName === "") {
					this.oRouter.navTo(sRouteName, {
						beginContext: sBeginContext,
						midContext: sMidContext,
						endContext: sEndContext,
						layout: sNextLayout
					}, false);
				} else {
					oModel.createBindingContext(sNavigationPropertyName, oBindingContext, null, function (bindingContext) {
						if (bindingContext) {
							sPath = bindingContext.getPath();
							if (sPath.substring(0, 1) === "/") {
								sPath = sPath.substring(1);
							}
						} else {
							sPath = "undefined";
						}
						if (iNextLevel === 0) {
							sBeginContext = sPath;
						} else if (iNextLevel === 1) {
							sMidContext = sPath;
						} else {
							sEndContext = sPath;
						}

						// If the navigation is a 1-n, sPath would be "undefined" as this is not supported in Build
						if (sPath === "undefined") {
							this.oRouter.navTo(sRouteName, {
								layout: sNextLayout
							});
						} else {
							this.oRouter.navTo(sRouteName, {
								beginContext: sBeginContext,
								midContext: sMidContext,
								endContext: sEndContext,
								layout: sNextLayout
							}, false);
						}
					}.bind(this));
				}
			} else {
				this.oRouter.navTo(sRouteName, {
					layout: sNextLayout,
					WorkOrder: this.wno
				});
			}

			if (typeof fnPromiseResolve === "function") {

				fnPromiseResolve();
			}

		},
		_onTableItemPress: function (oEvent) {

			var oBindingContext = oEvent.getParameter("listItem").getBindingContext();

			//this.getView().byId("filterbar").setVisible(false);     ////for the filter bar

			this.getView().getModel("oGlobalModel").setProperty("/filterBarVisible", false);

			this.wno = oEvent.getParameter("listItem").getBindingContext().getProperty("WorkOrderNo");
			var SystStatusDes = oEvent.getParameter("listItem").getBindingContext().getProperty("SystStatusDes");
			var SystStatu = oEvent.getParameter("listItem").getBindingContext().getProperty("SystStatu");
			var functionallocation = oEvent.getParameter("listItem").getBindingContext().getProperty("functionallocation");
			var Plant = oEvent.getParameter("listItem").getBindingContext().getProperty("Plant")
			
			
			var CreatedCnt = oEvent.getParameter("listItem").getBindingContext().getProperty("CreatedCnt");
			// this.getView().getModel("oGlobalModel").setProperty("/work", this.wno);
			this.getView().getModel("oGlobalModel").setProperty("/SystStatusDes", SystStatusDes);
			this.getView().getModel("oGlobalModel").setProperty("/functionallocation", functionallocation);
			this.getView().getModel("oGlobalModel").setProperty("/Plant", Plant);
			this.getView().getModel("oGlobalModel").setProperty("/SystStatu", SystStatu);
				

			//	debugger;
			var that = this;
			that._listout = that.getView().getModel("oGlobalModel").getProperty("/listpress");

			if (that._listout === 'X') {
				sap.m.MessageBox.show(
					"Do you want to cancel Editing ?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {

							if (oAction == "YES") {
								// that.busyDialogListFun();
								return new Promise(function (fnResolve) {

									that.doNavigate("Page2_1", oBindingContext, fnResolve, "", 1);
								}.bind(that)).catch(function (err) {
									if (err !== undefined) {
										MessageBox.error(err.message);
									}
								});
							} else {

							}
						}
					});
			} else {
				//that.busyDialogListFun();
				return new Promise(function (fnResolve) {

					that.doNavigate("Page2_1", oBindingContext, fnResolve, "", 1);
				}.bind(that)).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});
			}

			/*	this.oRouter.navTo("Page2_1", {
					wrk: wno,
					layout: "TwoColumnsMidExpanded",
				});*/

			/*	return new Promise(function (fnResolve) {

					this.doNavigate("Page2_1", oBindingContext, fnResolve, "", 1);
				}.bind(this)).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err.message);
					}
				});*/

		},
		busyDialogListFun: function () {
			// var busyDialog = this.byId("BusyDialog");
			// debugger;

			//this.busyDialogList.open();  //comment on 6/13/2020

			jQuery.sap.delayedCall(3000, this, function () {
				//this.busyDialogList.close();  //comment on 6/13/2020
			});
		},

		_onExpandButtonPress: function () {
			var endColumn = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().columnsVisibility.endColumn;
			var isFullScreen = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().isFullScreen;
			var nextLayout;
			var actionsButtonsInfo = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().actionButtonsInfo;
			if (endColumn && isFullScreen) {
				nextLayout = actionsButtonsInfo.endColumn.exitFullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(2).layout;
			}
			if (!endColumn && isFullScreen) {
				nextLayout = actionsButtonsInfo.midColumn.exitFullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(1).layout;
			}
			if (endColumn && !isFullScreen) {
				nextLayout = actionsButtonsInfo.endColumn.fullScreen;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(3).layout;
			}
			if (!endColumn && !isFullScreen) {
				nextLayout = actionsButtonsInfo.midColumn.fullScreen;
				nextLayout = nextLayout ? nextLayout : 'MidColumnFullScreen';
			}
			var pageName = this.oView.sViewName.split('.');
			pageName = pageName[pageName.length - 1];
			this.oRouter.navTo(pageName, {
				layout: nextLayout
			});

		},
		_onCloseButtonPress: function () {

			var endColumn = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().columnsVisibility.endColumn;
			var nextPage;
			var nextLevel = 0;

			var actionsButtonsInfo = this.getOwnerComponent().getSemanticHelper().getCurrentUIState().actionButtonsInfo;

			var nextLayout = actionsButtonsInfo.midColumn.closeColumn;
			nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(0).layout;

			if (endColumn) {
				nextLevel = 1;
				nextLayout = actionsButtonsInfo.endColumn.closeColumn;
				nextLayout = nextLayout ? nextLayout : this.getOwnerComponent().getSemanticHelper().getNextUIState(1).layout;
			}

			var pageName = this.oView.sViewName.split('.');
			pageName = pageName[pageName.length - 1];
			var routePattern = this.oRouter.getRoute(pageName).getPattern().split('/');
			var contextFilter = new RegExp('^:.+:$');
			var pagePattern = routePattern.filter(function (pattern) {
				var contextPattern = pattern.match(contextFilter);
				return contextPattern === null || contextPattern === undefined;
			});

			var nextPage = pagePattern[nextLevel];
			this.oRouter.navTo(nextPage, {
				layout: nextLayout
			});

		},
		// busyDialogFun: function () {                            //For List Loading Dialog
		// 	// var busyDialog = this.byId("BusyDialog");
		// 	// debugger;
		// 	this.busyDialog.open();

		// 	jQuery.sap.delayedCall(20400, this, function () {    //13500
		// 		this.busyDialog.close();
		// 	});
		// },
		onInit: function () {

			this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRouter.attachRouteMatched(this.handleRouteMatched, this);
			this.oFclModel = this.getOwnerComponent().getModel("FclRouter");
			this.oFclModel.setProperty('/targetAggregation', 'beginColumnPages');
			this.oFclModel.setProperty('/expandIcon', {});
			this.oView.setModel(new sap.ui.model.json.JSONModel({}), 'fclButton');
			this._bDescendingSort = false;
			//this.flag = true;

			this.oViewModel = new sap.ui.model.json.JSONModel({
				Segemntbutton: true
			});
			this.getView().setModel(this.oViewModel, "ViewModel"); //  Viewmodel

			this.busyDialog = sap.ui.xmlfragment("busyDialogfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.busyDialog",
				this);
			this.getView().addDependent(this.busyDialog);
			this.busyDialogList = sap.ui.xmlfragment("busyDialogListfragment",
				"com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.busyDialogList",
				this);
			this.getView().addDependent(this.busyDialogList);
			// this.tableBind();
			this.search = sap.ui.xmlfragment("com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.sea", this);
			this.getView().addDependent(this.search);
			// debugger;
			// this.oDataModel = this.getOwnerComponent().getModel("oDataModelHelpServ");

			this.filterfrag = sap.ui.xmlfragment("filterfragfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.filterfrag",
				this);
			this.getView().addDependent(this.filterfrag);
			
				// var designation = window.location.origin;
				// if (designation === "https://webidetesting4544933-ba293bd41.dispatcher.us1.hana.ondemand.com" || designation ===
				// 	"https://manageworkorderfilter-ba293bd41.dispatcher.us1.hana.ondemand.com") {
				// 	this.getView().byId("Dashboard").setVisible(true);
				// } else {
				// 	this.getView().byId("Dashboard").setVisible(false);
				// }
			
			

		},
		tableBind: function () {
			var oController = this;
			//	oController.busyDialogFun();
			var table = oController.getView().byId("Table");
			var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			var sPath = "/WOListHeaderSet";
			oModel.read(sPath, {
				success: function (oData, oResponse) {
					var count = oData.results.length;
					for (var i = 0; i < count; i++) {
						var WorkOrderNo = oData.results[i].WorkOrderNo;
						// oModel.setProperty(sPath, oData);
						var Description = oData.results[i].Description;
						var CreatedOn = oData.results[i].CreatedOn;
						// debugger;
						var year = CreatedOn.slice(0, 4);
						var month = CreatedOn.slice(4, 6);
						var date = CreatedOn.slice(6, 8);
						var CreatedOnDate = date + '.' + month + '.' + year;
						var OrderType = oData.results[i].OrderType;
						var SystStatusDes = oData.results[i].SystStatusDes;
						var UserStatus = oData.results[i].UserStatus;
						var priority = oData.results[i].Priority;
						var CreatedCnt = oData.results[i].CreatedCnt;
						

						 
						// var a = "Success";
						// var b = "Warning";
						// var c = "Error";
						// var d = "Error";
						// if (SystStatus === 'Created') {
						// 		// oController._oParentView.byId("inpPrity").setText(priority1);

						// 		state = a;
						// 		// var pri = priority.slice(0, 2);
						// 		} else if (SystStatus === 'Released') {
						// 		// oController._oParentView.byId("inpPrity").setText(priority2);

						// 		state = b;
						// 		// var pri = priority.slice(0, 5);

						// 		} else if (SystStatus === 'Confirmed') {
						// 		// oController._oParentView.byId("inpPrity").setText(priority3);

						// 		state = c;
						// 		// var pri = priority.slice(0, 3);
						// 		} else if (SystStatus === 'Closed') {
						// 		// oController._oParentView.byId("inpPrity").setText(priority4);

						// 		state = c;
						// 		// var pri = priority.slice(0, 7);
						// 		}

						var obj1 = {

							WorkOrderNo: WorkOrderNo,
							Description: Description,
							CreatedOn: CreatedOnDate,
							OrderType: OrderType,
							SystStatusDes: SystStatusDes,
							UserStatus: UserStatus,
							priority: priority,
							CreatedCnt: CreatedCnt,
							//	state: state

						};
						arr4.push(obj1);

					}
					var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
					oModelccd.setData({ // Set the data to the model using the JSON object defined already  
						listdata: arr4

					});
					table.setModel(oModelccd);

				},
				error: function (oData, oResponse) {

				}
			});

		},

		onLiveChange: function (oEvent) {
			var searchValue = oEvent.getParameter("newValue");

			var filters = new Array();
			var oFilter = new sap.ui.model.Filter([
					new sap.ui.model.Filter("WorkOrderNo", sap.ui.model.FilterOperator.Contains, searchValue),
					new sap.ui.model.Filter("Description", sap.ui.model.FilterOperator.Contains, searchValue),
					new sap.ui.model.Filter("CreatedOn", sap.ui.model.FilterOperator.Contains, searchValue),
					new sap.ui.model.Filter("OrderType", sap.ui.model.FilterOperator.Contains, searchValue),
					new sap.ui.model.Filter("SystStatusDes", sap.ui.model.FilterOperator.Contains, searchValue),
					new sap.ui.model.Filter("priority", sap.ui.model.FilterOperator.Contains, searchValue)

				],
				false);
			filters = (oFilter);
			var listItem = this.getView().byId("Table");
			var binding = listItem.getBinding("items");
			binding.filter(filters);

		},
		render: function (oEvent) {

			var sTitle = "Work Order",
				oTable = this.getView().byId("Table");

			if (oTable.getBinding("items").isLengthFinal()) {
				var iCount = oEvent.getParameter("total"),
					iItems = oTable.getItems().length;
				sTitle += "(" + iItems + "/" + iCount + ")";
			}
			this.getView().byId("counttable").setText(sTitle);

		},
		onExit: function () {

			// to destroy templates for bound aggregations when templateShareable is true on exit to prevent duplicateId issue
			var aControls = [{
				"controlId": "sap_List_Page_0-content-sap_m_ObjectList-1",
				"groups": ["items"]
			}];
			for (var i = 0; i < aControls.length; i++) {
				var oControl = this.getView().byId(aControls[i].controlId);
				if (oControl) {
					for (var j = 0; j < aControls[i].groups.length; j++) {
						var sAggregationName = aControls[i].groups[j];
						var oBindingInfo = oControl.getBindingInfo(sAggregationName);
						if (oBindingInfo) {
							var oTemplate = oBindingInfo.template;
							oTemplate.destroy();
						}
					}
				}
			}

		}
	});
}, /* bExport= */ true);