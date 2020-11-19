var arr32 = [],
	arr31 = [],
	arr41 = [],
	arr42 = [];
var oModelccd, oModelJson, seamoModelccd4, seamoModelccd42, seamoModelccd41;
var array1 = [],
	array2 = [],
	array3 = [],
	array4 = [],
	array5 = [];
var oModelssd, ofilters;
// var descrip1;
sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageBox",
		"sap/ui/model/json/JSONModel",
		"sap/m/MessageToast",
		"./Dialog4",
		"./Dialog5",
		"sap/m/UploadCollectionParameter",
		"./utilities",
		"./Dialog3",
		"./Dialog2",
		"sap/base/Log",
		"com/sap/build/ba293bd41-us_1/manageWorkOrder/utils/formatter",
		"sap/ui/core/routing/History",
		"sap/ui/model/odata/ODataModel"

	], function (BaseController, MessageBox, JSONModel, MessageToast, Dialog4, Dialog5, UploadCollectionParameter, Utilities, Dialog3,
		Dialog2, Log, formatter,
		History, ODataModel) {
		"use strict";
		var oModel11;
		return BaseController.extend("com.sap.build.ba293bd41-us_1.manageWorkOrder.controller.Page2_1", {
			formatter: formatter,
			handleRouteMatched: function (oEvent) { //start of function for handleRouteMatched
				var oArgs;
				oArgs = oEvent.getParameter("arguments");
				this.workOrd = oArgs["WorkOrder"]; //in detail screen while reloading page value remains same
				// this.workOrd = this.getView().getModel("oGlobalModel").getProperty("/work");
				this.getView().byId("objPageH").setObjectTitle(this.workOrd);
				this.WorkOrd_SRV = "/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/";
				this.stat = this.getView().getModel("oGlobalModel").getProperty("/SystStatusDes");
				console.log("this.stat", this.stat)

				this.funlocation = this.getView().getModel("oGlobalModel").getProperty("/functionallocation");
				console.log("this.funlocation", this.funlocation);
				//	alert(this.funlocation);

				this.Plant = this.getView().getModel("oGlobalModel").getProperty("/Plant");
				console.log("this.Plant", this.Plant);

				this.ordStatus = this.getView().getModel("oGlobalModel").getProperty("/SystStatu");
				//alert(this.ordStatus);
				var oView;
				var descrip1;
				this.globalInitial();
				this.descrip1 = descrip1;
				this.baseval = [];
				this.ci_att1 = [];
				this.uploadfilearray =[];
				this.ci_att1Post = [];
				this.arr142 = [];
				this.arrp = [];
				this.operaPostItems = [];
				this.compoPostItems = [];
				this.semhotelarray = [];
				this.semhotelarray1 = [];
				this.semhotelarray2 = [];
				this.arrTechObj = [];
				this.operationsPostFinal = [];
				this.componentPostFinal = [];

				this.bindItems();
				this.operation();
				this.workNewBind();
				this.personRespMoreBind();

				this.component();
				//this.techObjHis();
				this.operationsBind();
				this.componentsBind();
				// this.planPlantChange();
				// this.planPlantChangeInit();
				this.getView().byId("editButton").setVisible(true);
                 	this.getView().byId("saveButton").setVisible(false);
				this.getView().byId("cancelButton").setVisible(false);
                 
				// this.addMoreFrag(); /////////For More Fragment Resource Planning
				this.addbtnmore2(); /////////For More Fragment Material required

				this.matreq();
				this.cancelPress1();

				this.newArray1 = [];
				this.newArray2 = [];

				var oModel1, oModel3;
				this.getView().getModel("oGlobalModel").setProperty("/oModel1", oModel1);
				this.getView().getModel("oGlobalModel").setProperty("/oModel3", oModel3);
				this._listout = " ";
				this.getView().getModel("oGlobalModel").setProperty("/listpress", "");

				// var el = document.getElementById('__layout18-spacer');
				// el.remove();
				var that = this;
				if (that.stat === "Created") {
					that.getView().byId("pind").setPercentValue(17);
					that.getView().byId("pind").setDisplayValue("17%");

					// that.getView().byId("releaseButton").setVisible(true);
					// that.getView().byId("tecoButton").setVisible(false);
					// that.getView().byId("closeButton").setVisible(false);
					// that.getView().byId("editButton").setVisible(true);
					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");
						this.getView().byId("Av2").setBackgroundColor("Accent1");
						this.getView().byId("Av3").setBackgroundColor("Accent1");
						this.getView().byId("Av4").setBackgroundColor("Accent1");
						this.getView().byId("Av5").setBackgroundColor("Accent1");
						this.getView().byId("Av6").setBackgroundColor("Accent1");*/
				} else if (that.stat === "Released") { //if it released it should fill upto confirmed released<->confirmed
					that.getView().byId("pind").setPercentValue(30);
					that.getView().byId("pind").setDisplayValue("30%");

					// that.getView().byId("releaseButton").setVisible(false);
					// that.getView().byId("tecoButton").setVisible(true);
					// that.getView().byId("closeButton").setVisible(true);
					// that.getView().byId("editButton").setVisible(true);
					// that.getView().byId("tecoCloseButton").setVisible(true);
					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");       
						this.getView().byId("Av2").setBackgroundColor("Accent8");
						this.getView().byId("Av3").setBackgroundColor("Accent1");
						this.getView().byId("Av4").setBackgroundColor("Accent1");
						this.getView().byId("Av5").setBackgroundColor("Accent1");
						this.getView().byId("Av6").setBackgroundColor("Accent1");*/
				} else if (that.stat === "Partially confirmed") {
					that.getView().byId("pind").setPercentValue(50);
					that.getView().byId("pind").setDisplayValue("50%");
					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");
						this.getView().byId("Av2").setBackgroundColor("Accent8");
						this.getView().byId("Av3").setBackgroundColor("Accent8");
						this.getView().byId("Av4").setBackgroundColor("Accent1");
						this.getView().byId("Av5").setBackgroundColor("Accent1");
						this.getView().byId("Av6").setBackgroundColor("Accent1");*/
				} else if (that.stat === "Confirmed") {
					that.getView().byId("pind").setPercentValue(68);
					that.getView().byId("pind").setDisplayValue("68%");

					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");
						this.getView().byId("Av2").setBackgroundColor("Accent8");
						this.getView().byId("Av3").setBackgroundColor("Accent8");
						this.getView().byId("Av4").setBackgroundColor("Accent8");
						this.getView().byId("Av5").setBackgroundColor("Accent1");
						this.getView().byId("Av6").setBackgroundColor("Accent1");*/
				} else if (that.stat === "Technically completed") {
					that.getView().byId("pind").setPercentValue(85);
					that.getView().byId("pind").setDisplayValue("85%");

					// that.getView().byId("releaseButton").setVisible(false);
					// that.getView().byId("tecoButton").setVisible(false);
					// that.getView().byId("closeButton").setVisible(true);
					// that.getView().byId("editButton").setVisible(true);
					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");
						this.getView().byId("Av2").setBackgroundColor("Accent8");
						this.getView().byId("Av3").setBackgroundColor("Accent8");
						this.getView().byId("Av4").setBackgroundColor("Accent8");
						this.getView().byId("Av5").setBackgroundColor("Accent8");
						this.getView().byId("Av6").setBackgroundColor("Accent1");*/
				} else if (that.stat === "Closed") {
					that.getView().byId("pind").setPercentValue(100);
					that.getView().byId("pind").setDisplayValue("100%");

					that.getView().byId("releaseButton").setVisible(false);
					that.getView().byId("tecoButton").setVisible(false);
					that.getView().byId("closeButton").setVisible(false);
					that.getView().byId("editButton").setVisible(false);
					/*	this.getView().byId("Av1").setBackgroundColor("Accent8");
						this.getView().byId("Av2").setBackgroundColor("Accent8");
						this.getView().byId("Av3").setBackgroundColor("Accent8");
						this.getView().byId("Av4").setBackgroundColor("Accent8");
						this.getView().byId("Av5").setBackgroundColor("Accent8");
						this.getView().byId("Av6").setBackgroundColor("Accent8");*/
				}

			}, //end of function for handleRouteMatched
			globalInitial: function () {

			},

			onRelPress: function () {
				var that = this;
				that.busyDialogFun();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Release Work Order  " + that.workOrd + " ? ", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								that.busyDialogFun();
								var mess;
								that.oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

								var orderdata = {
									"Order": that.workOrd,
									"StatusType": that.ordStatus, //"CRTD"
									"close_notif": "",
									"Type": "",
									"Message": ""
								};
								// debugger;
								console.log(orderdata);
								var sPath = "/OrderStatusChangeSet";
								// debugger;
								that.oModel3.create(sPath, orderdata, {
									success: function (oData, oResponse) {
										// that.busyDialogFun();
										var msg1 = oData.Message;
										var typ = oData.Type;
										// debugger;

										if (typ == "S") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {
														that._onCloseButtonPress();
														// that.cancelP();
														// that.newArray1 = [];
														window.location.reload();
													}
												}.bind(this)
											});

										} else if (typ == "E") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "Error",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														// that.newArray1 = [];
														// that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										} else {

											sap.m.MessageBox.confirm("ERROR", {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "ERROR",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										}

									},
									error: function (oData, oResponse) {

										sap.m.MessageBox.confirm("Service URL Error", {
											icon: sap.m.MessageBox.Icon.ERROR,
											title: "Error",
											actions: [sap.m.MessageBox.Action.OK],

											onClose: function (oAction) {

												if (oAction == "OK") {
													that._onCloseButtonPress();
													// that.cancelPress1();
													window.location.reload();
												}
											}.bind(this)
										});

									}

								});

							} else if (oAction == "NO") {

							}
						}
					});
			},
			onTECOPress: function () {

				this.TECO.open();
			},

			tecoCancel: function () {

				this.TECO.close();
			},
			tecOk: function () {

				this.TECO.close();
				var closeSelected = sap.ui.core.Fragment.byId("TECOfragment", "complete").getSelected();

				// debugger;
				var that = this;
				if (closeSelected === true) {
					that.closeNotif = "X";
				} else if (closeSelected === false) {
					that.closeNotif = "";
				} else {

				}

				that.busyDialogFun();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want complete technically " + that.workOrd + " ?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",

						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								// that.busyDialogFun();
								var mess;
								that.oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

								var orderdata = {
									"Order": that.workOrd,
									"StatusType": that.ordStatus, //"REL"
									"close_notif": that.closeNotif,
									"Type": "",
									"Message": ""
								};
								// debugger;
								console.log(orderdata);
								var sPath = "/OrderStatusChangeSet";
								// debugger;
								that.oModel3.create(sPath, orderdata, {
									success: function (oData, oResponse) {
										that.busyDialogFun();
										var msg1 = oData.Message;
										var typ = oData.Type;
										// debugger;

										if (typ == "S") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {
														that._onCloseButtonPress();
														// that.cancelP();
														// that.newArray1 = [];
														window.location.reload();
													}
												}.bind(this)
											});

										} else if (typ == "E") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "Error",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														// that.newArray1 = [];
														// that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										} else {

											sap.m.MessageBox.confirm("ERROR", {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "ERROR",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										}

									},
									error: function (oData, oResponse) {

										sap.m.MessageBox.confirm("Service URL Error", {
											icon: sap.m.MessageBox.Icon.ERROR,
											title: "Error",
											actions: [sap.m.MessageBox.Action.OK],

											onClose: function (oAction) {

												if (oAction == "OK") {
													that._onCloseButtonPress();
													// that.cancelPress1();
													window.location.reload();
												}
											}.bind(this)
										});

									}

								});

							} else if (oAction == "NO") {

							}
						}
					});

			},
			onClosePress: function () {
				var that = this;
				that.busyDialogFun();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want complete Work Order " + that.workOrd + " ? ", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",

						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								that.busyDialogFun();
								var mess;
								that.oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

								var orderdata = {
									"Order": that.workOrd,
									"StatusType": that.ordStatus, //"TECO"
									"close_notif": "",
									"Type": "",
									"Message": ""
								};
								// debugger;
								console.log(orderdata);
								var sPath = "/OrderStatusChangeSet";
								// debugger;
								that.oModel3.create(sPath, orderdata, {
									success: function (oData, oResponse) {
										// that.busyDialogFun();
										var msg1 = oData.Message;
										var typ = oData.Type;
										// debugger;

										if (typ == "S") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {
														that._onCloseButtonPress();
														// that.cancelP();
														// that.newArray1 = [];
														window.location.reload();
													}
												}.bind(this)
											});

										} else if (typ == "E") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "Error",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														// that.newArray1 = [];
														// that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										} else {

											sap.m.MessageBox.confirm("ERROR", {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "ERROR",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										}

									},
									error: function (oData, oResponse) {

										sap.m.MessageBox.confirm("Service URL Error", {
											icon: sap.m.MessageBox.Icon.ERROR,
											title: "Error",
											actions: [sap.m.MessageBox.Action.OK],

											onClose: function (oAction) {

												if (oAction == "OK") {
													that._onCloseButtonPress();
													// that.cancelPress1();
													window.location.reload();
												}
											}.bind(this)
										});

									}

								});

							} else if (oAction == "NO") {

							}
						}
					});
			},

			// onAfterRendering: function () {
			// 	var element = document.getElementById("__layout18-spacer");
			// 	element.parentNode.removeChild(element);
			// },

			matreq: function () { //start of function for matreq

				var moretab = sap.ui.core.Fragment.byId("morefragment", "tab5");
				// debugger;
			},

			/*View Table Operation binding in Display mode*/
			operation: function () {

				var that = this;
				that.arrOpera = [];
				var table = that.getView().byId("optabBind");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				var oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/WOperationSet";

				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, that.workOrd)], //"K1-B01-1")],
					success: function (oData, oResponse) {
						var count = oData.results.length;

						for (var i = 0; i < count; i++) {

							var Operation = oData.results[i].Operation;

							var Description = oData.results[i].Description;
							var WorkCenter = oData.results[i].WorkCenter;
							var Plant = oData.results[i].Plant;
							var ControlKey = oData.results[i].ControlKey;
							var Duration = oData.results[i].Duration;
							var DeleteFlag = oData.results[i].DeleteFlag;
							var RespPerson = oData.results[i].Respperson;

							var obj1 = {

								Operation: Operation,
								description: Description,
								WorkCenter: WorkCenter,
								Plant: Plant,
								ControlKey: ControlKey,
								Duration: Duration,
								DeleteFlag: DeleteFlag,
								RespPerson: RespPerson
							};
							that.arrOpera.push(obj1);
							that.copyOfArrOpera = that.arrOpera.concat();
							// debugger;

						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: that.arrOpera

						});
						table.setModel(oModelccd);

					},
					error: function (oData, oResponse) {

					}

				});

			},
			shortDesLC: function (oEvent) { //LC means LiveChange Event for short description field
				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 40) {
					that.l = that.len.slice(0, 40);
					that.getView().byId("textArea").setValue(that.l);
				} else {

				}
			}, //LC means LiveChange Event for short description field
			lngTextLC: function (oEvent) { //LC means LiveChange Event for long text field
				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 72) {
					that.l = that.len.slice(0, 72);
					that.getView().byId("lngText").setValue(that.l);
				} else {

				}
			}, //LC means LiveChange Event for long text field
			pmActLC: function (oEvent) {
				var that = this;
				var _oInput = oEvent.getSource();
				that.len = _oInput.getValue();
				that.val = _oInput.getValue().length;
				if (that.val > 3) {
					that.l = that.len.slice(0, 3);
					that.getView().byId("pmActype").setValue(that.l);
				} else {

				}
			},
			busyDialogDownloadFun: function () { //start of function for busyDialogFragment loading box while downloading
				// var busyDialog = this.byId("BusyDialog");

				this.busyDialogDownload.open();

				jQuery.sap.delayedCall(5000, this, function () {
					this.busyDialogDownload.close();
				});
			}, //end of function for busyDialogFragment loading box while downloading
			downListPress1: function (oEvent) {
				var that = this;
				that.fle1 = oEvent.getParameter("listItem").getBindingContext().getProperty().Name;
				that.ext2 = oEvent.getParameter("listItem").getBindingContext().getProperty().Ext;
				that.docnum = oEvent.getParameter("listItem").getBindingContext().getProperty().Doc;

				sap.m.MessageBox.show(
					"Do you want to download the Attachment ?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Confirmation Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {
								that.busyDialogDownloadFun();
								that.fle = that.fle1.toUpperCase();
								that.ext = that.ext2.toUpperCase();
								var oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
								var sPath = "/DMS_Base64Set?$filter=DocumentNum eq '" + that.docnum + "'and IFilename eq '" + that.fle + "." + that.ext +
									"'";
								oModel3.read(sPath, {
									success: function (oData, oResponse) {
										// debugger;

										var length = oData.results.length;
										//	that.getView().getModel("oviewModel").setProperty("/busy", true);
										for (var i = 0; i < length; i++) {
											that.base64 = oData.results[i].LvBase64;
											that.doctype = oData.results[i].DocumentNum;
											that.downloads();
										}
									},

								});

							} else {

							}
						}
					});

			},
			downloads: function () {

				var that = this;
				// var download;
				//that.getView().getModel("oviewModel").setProperty("/busy", false);
				download("data:application/+ that.FileExt;base64," + that.base64, that.fle + "." + that.ext, "application");
				MessageToast.show("Attachment has been downloaded Successfully!!");
			},
			/*downListPress1: function () {
				// debugger;
				var canvas = this.getView().byId("UploadCollection1");

				var link = document.createElement('a');
				link.href = canvas.toDataURL('image/jpeg');
				var res = link.href.replace("data:image/png;base64,", "");
				// link.download = filename;
				link.download = 'sign.jpeg';
				link.click();

			},*/

			funLocChange: function () { // selectionChange for Function Location field

				//alert("techobjHist1selchange");

				var that = this;
				that.arrTechObj = [];
				var funLoc1 = that.getView().byId("functech").getSelectedKey();

				var table = that.getView().byId("objHisTable");
				var oModel = new ODataModel("/sap/opu/odata/sap/zpm_f4_srv/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/NotificationListSet";

				ofilters = [new sap.ui.model.Filter("FunctionalLocation", sap.ui.model.FilterOperator.EQ, funLoc1),
					new sap.ui.model.Filter("Last5Records", sap.ui.model.FilterOperator.EQ, "X")
				];

				// debugger;
				oModel.read(sPath, {
					filters: ofilters,
					success: function (oData, oResponse) {

						var count = oData.results.length;
						// debugger;
						for (var i = 0; i < count; i++) {
							var NotifNo = oData.results[i].Notification;

							var NotifDate = oData.results[i].createdDate;

							var year = NotifDate.slice(0, 4);
							var month = NotifDate.slice(4, 6);
							var date = NotifDate.slice(6, 8);
							var NotifDateTech = date + '.' + month + '.' + year;

							var Description = oData.results[i].NotificationDes;
							var FunctionLoc = oData.results[i].FunctionalLocation;
							var OrderNo = oData.results[i].Order;
							var Equipm = oData.results[i].EquipmentNumber;
							var Equipment = Equipm.slice(8, 18);
							var PriorityText = oData.results[i].PriorityText;

							var priority11 = "Success";

							var priority22 = "Warning";

							var priority33 = "Error";
							var priorityState;
							if (PriorityText === 'Very High') {

								priorityState = priority33;
							} else if (PriorityText === 'High') {
								priorityState = priority33;
							} else if (PriorityText === 'Medium') {
								priorityState = priority22;
							} else if (PriorityText === 'Low') {
								priorityState = priority11;
							}

							var obj1 = {
								notifNo: NotifNo,
								OrderNo: OrderNo,
								notifDateTech: NotifDateTech,
								description: Description,
								functionLoc: FunctionLoc,
								Equipment: Equipment,
								priorityText: PriorityText,
								priorityState: priorityState

							};
							that.arrTechObj.push(obj1);

						}
						var oModelccd1 = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd1.setData({ // Set the data to the model using the JSON object defined already  
							listdata: that.arrTechObj

						});
						table.setModel(oModelccd1);

					}
				});
				that.functionalLocChange();

				that.getView().byId("equip").setValue(""); ///code added for clearing the equipment

			}, //end of Function Location selectionChange
			functionalLocChange: function () {

				var func = this.getView().byId("functech").getSelectedKey();
				// debugger;
				var that = this;
				var sPath = "/FunctionalDataPullSet('" + func + "')";
				var oModeli = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				oModeli.read(sPath, {
					success: function (oData, oResponse) {
						// var grp = oData.PlannerGroup;
						// var plt = oData.PlanningPlant;
						// debugger;
						var FunctionalLocation = oData.FunctionalLocation;
						var PlanningPlant = oData.PlanningPlant;
						var plngrp = oData.PlannerGroup;
						var wrkctr = oData.MainWorkCenter;
						var work = oData.PPWorkName;
						var pltsec = oData.PlantSection;
						var Room = oData.Room;
						var abci = oData.ABCIndicator;

						// that.getView().byId("functech").setSelectedKey(FunctionalLocation);
						that.getView().byId("plnGrp").setSelectedKey(plngrp);

						that.getView().byId("mWrkctr").setValue(wrkctr);

						that.getView().byId("combo4").setSelectedKey(PlanningPlant);

					}
				});

				/*	that.getView().byId("functech").setEditable(false);
					that.getView().byId("plnGrp").setEditable(false);
					that.getView().byId("mWrkctr").setEditable(false);
					that.getView().byId("combo4").setEditable(false);*/
			},
			equipmentChange: function () {

				var equipment1 = this.getView().byId("equip").getValue();
				// debugger;
				var SplitTotalFoot = equipment1.split(" ");
				var equipment = SplitTotalFoot[0];

				var that = this;
				var sPath = "/EquipPullSet('" + equipment + "')";
				var oModeli = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				oModeli.read(sPath, {
					success: function (oData, oResponse) {

						var PlanningPlant = oData.PlanningPlant;
						var plngrp = oData.PlannerGroup;
						var wrkctr = oData.MainWorkCenter;

						var FunctionalLocation = oData.FunctionalLocation;

						that.getView().byId("functech").setSelectedKey(FunctionalLocation);

						that.getView().byId("plnGrp").setSelectedKey(plngrp);

						that.getView().byId("mWrkctr").setSelectedKey(wrkctr);

						that.getView().byId("combo4").setSelectedKey(PlanningPlant);

					}

				});
				/*that.getView().byId("functech").setEditable(false);
				that.getView().byId("plnGrp").setEditable(false);
				that.getView().byId("mWrkctr").setEditable(false);
				that.getView().byId("combo4").setEditable(false);*/

			},

			/*View Table Component binding in Display mode*/
			component: function () {

				var that = this;
				that.arrComp = [];

				var compsTable = that.getView().byId("compsTabBIND8");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

				/*	var Plant = that.getView().byId("planPlantBind5").getValue();
					alert("Plant");*/

				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/WComponentSet";

				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, that.workOrd),
						new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, that.Plant)
					], //"K1-B01-1") that.planplt],

					//new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, "PL01")
					success: function (oData, oResponse) {
						var Count = oData.results.length;

						for (var i = 0; i < Count; i++) {
							var item = oData.results[i].Item;
							var operation = oData.results[i].Operation;
							var MatNum = oData.results[i].MaterialNo;
							var MatDesc = oData.results[i].MatDesc;
							var storLoc = oData.results[i].StorageLoc;
							var ItemCat = oData.results[i].ItemCat;
							var ReqQty = oData.results[i].ReqQty;
							var uom = oData.results[i].uom;
							var AvailableQuantity = oData.results[i].AvailableQuantity;

							//this.prnum = oData.results[i].PRNumber;

							var DeleteFlag = oData.results[i].DeleteFlag;

							var obj1 = {
								Item: item,
								Operation: operation, //"0020",
								MaterialNo: MatNum, //"TEST",
								MatDesc: MatDesc, //"TEST",
								ReqQty: ReqQty, //"250",
								uom: uom,
								StorageLoc: storLoc,
								Number: that.workOrd,
								ItemCat: ItemCat,
								AvailableQuantity: AvailableQuantity,
								//prnum : this.prnum,
								DeleteFlag: ""

							};
							/*if (ItemCat === 'N'){
					
					that.getView().byId("StockButton").setVisible(true);
					alert(ItemCat);
					
				} else if (ItemCat === 'L'){
					
					that.getView().byId("StockButton").setVisible(false);
						alert(ItemCat);
				}*/

							that.arrComp.push(obj1);
							that.copyOfArrComp = that.arrComp.concat();

						}
						var oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd.setData({ // Set the data to the model using the JSON object defined already  
							listdata: that.arrComp
						});

						compsTable.setModel(oModelccd);

					},

					error: function (oData, oResponse) {

					}
				});

			},

			newmaterial2: function (oEvent) {

				var valuestrom = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = valuestrom.split("/");
				this.indexzl = valueind[2];
				//console.log("this.indexzl", this.indexzl);

				var tableyzl = this.getView().byId("compsTabBIND8");

				var countwww = tableyzl.getItems().length;

				this.materialnum = tableyzl.getItems()[this.indexzl].getCells()[2].getValue();
				this.Nstock = tableyzl.getItems()[this.indexzl].getCells()[5].getValue();
				// console.log("this.Nstock", this.Nstock);
				this.ReqQty = tableyzl.getItems()[this.indexzl].getCells()[6].getValue();
				//	alert(this.ReqQty);
				this.unitReqQty = tableyzl.getItems()[this.indexzl].getCells()[7].getValue();
				//	alert(this.unitReqQty);

				var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var sPath = "/ComponentListSet(Component='" + this.materialnum + "',Plant='" + this.Plant + "')";
				oModel123.read(sPath, {
					success: function (oData, oResp) {
						console.log(oData);
						/*	sap.ui.core.Fragment.byId("Displayfragment", "perunit").setValue(oData.Currency);
							sap.ui.core.Fragment.byId("Displayfragment", "combo16").setValue(oData.GLAccount);*/

						sap.ui.core.Fragment.byId("Displayfragment", "Price").setValue(oData.Price);
						sap.ui.core.Fragment.byId("Displayfragment", "combo15").setValue(oData.Currency);
						sap.ui.core.Fragment.byId("Displayfragment", "combo8").setValue(oData.MaterialGroup);
						//sap.ui.core.Fragment.byId("Displayfragment", "combo9").setValue(oData.PurchaseGroup);
						sap.ui.core.Fragment.byId("Displayfragment", "val4").setValue(oData.Priceunit);
						sap.ui.core.Fragment.byId("Displayfragment", "combo16").setValue(oData.GLAccount);

					},
				});

				sap.ui.core.Fragment.byId("Displayfragment", "val0").setValue(this.ReqQty);
				sap.ui.core.Fragment.byId("Displayfragment", "val1").setValue(this.unitReqQty);
				sap.ui.core.Fragment.byId("Displayfragment", "perunit").setValue(this.unitReqQty);

				//console.log("this.indexzl", this.indexzl);
				var oModel321 = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath2 = "/WComponentSet";

				//console.log("this.indexzl", this.indexzl);	

				oModel321.read(sPath2, {
					filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, this.workOrd)],

					success: function (oData, oResponse) {
						console.log("odata", oData);

						var count = oData.results.length;

						console.log("count", count)

						for (var i = this.indexzl; i < count; i++) {

							var componPR = oData.results[this.indexzl].PRNumber;
							//console.log("componPR", componPR);
							var check = oData.results[this.indexzl].POExists;
							var PRitem = oData.results[this.indexzl].PRItem;
							var PRorg = oData.results[this.indexzl].PurchaseOrg;
							var PRgrp = oData.results[this.indexzl].Purchasegroup;
							var gdsrec = oData.results[this.indexzl].GoodsReceipt;
							var requi = oData.results[this.indexzl].Requisitioner;
							var trackNo = oData.results[this.indexzl].TrackingNo;
							var vend = oData.results[this.indexzl].Vendor;
							var inforec = oData.results[this.indexzl].Inforecord;

						}

						sap.ui.core.Fragment.byId("Displayfragment", "Prnum3").setValue(componPR);
						sap.ui.core.Fragment.byId("Displayfragment", "PRitemNo").setValue(PRitem);
						sap.ui.core.Fragment.byId("Displayfragment", "val3").setValue(PRorg);
						sap.ui.core.Fragment.byId("Displayfragment", "combo9").setValue(PRgrp);
						sap.ui.core.Fragment.byId("Displayfragment", "Nongoodsrece").setValue(gdsrec);
						sap.ui.core.Fragment.byId("Displayfragment", "NonRequi").setValue(requi);
						sap.ui.core.Fragment.byId("Displayfragment", "trackNo").setValue(trackNo);
						sap.ui.core.Fragment.byId("Displayfragment", "combo10").setValue(vend);
						sap.ui.core.Fragment.byId("Displayfragment", "combo14").setValue(inforec);

						if (check === "") {

							sap.ui.core.Fragment.byId("Displayfragment", "check1").setSelected(false);

						} else {

							sap.ui.core.Fragment.byId("Displayfragment", "check1").setSelected(true);
						}

					}.bind(this)

				});

				//	sap.ui.core.Fragment.byId("Displayfragment","Prnum33333").setValue(this.operation);

				this.purchasingdata.open();

				//	});

			},

			DisplayOK: function () {

				this.purchasingdata.close();

			},

			/*	addRowOperationsEdit: function () {
					this.getView().byId("optab").setVisible(false);
					// this.getView().byId("operAddButton").setVisible(true);
					this.getView().byId("tableAdd").setVisible(true);
					this.addRowOperations();
				},*/
			/*adding Rows to Operations table in Edit mode*/
			addRowOperations: function () { //start of function add row in Operations table
				// debugger;
				var that = this;
				var workCen = that.getView().byId("mWrkctr").getValue();
				var SplitTotalFoot = workCen.split(" ");
				that.workCenForTable = SplitTotalFoot[0];

				that.orderTypeForTable = that.getView().byId("orderType").getValue();
				that.planPlantForTable = that.getView().byId("combo4").getValue();
				that.pmActype = that.getView().byId("pmActype").getValue();
				// itemInc1 = itemInc1 + 10;
				arr31 = [];

				var itemTab1 = this.getView().byId("optab");
				var rowlen = itemTab1.getItems().length;

				// if (rowlen === 0) {

				// 	var rowlength = rowlen + "0";
				// 	var rowMinus = rowlen - 1;
				// 	// var rowlength = "00" + rowlen + "0";
				// 	// rowlength.pad('0', 6);
				// 	// ('0000' + rowlength).slice(-4);
				// 	// debugger;
				// 	var rowl = Number(rowlength);

				// 	var rowLe = rowl + 10;
				// 	rowLe = "" + rowLe + "";
				// 	rowLe = rowLe.padStart(4, '0');

				// 	// this.rowLen = rowLe;
				// 	// this.rowLen = "00" + rowLe;
				// 	// itemNo = that.Itemkey + 1;

				// 	console.log(rowlen);
				// 	// var that = this;
				// 	for (var i = 0; i < rowlen; i++) {

				// 		var operation = itemTab1.getItems()[i].getCells()[0].getValue();
				// 		var descrip = itemTab1.getItems()[i].getCells()[1].getValue();
				// 		var workcen = itemTab1.getItems()[i].getCells()[2].getValue();
				// 		var plant = itemTab1.getItems()[i].getCells()[3].getValue();
				// 		var controlkey = itemTab1.getItems()[i].getCells()[4].getValue();
				// 		var duration = itemTab1.getItems()[i].getCells()[5].getValue();
				// 		// var plant = itemTab1.getItems()[i].getCells()[3].getText();
				// 		var operation1 = itemTab1.getItems()[rowMinus].getCells()[0].getValue();
				// 		var respPer = itemTab1.getItems()[i].getCells()[8].getValue();
				// 		var operation11 = Number(operation1);
				// 		that.operaMin = operation11 + 10;
				// 		debugger;
				// 		var operaMinp = "" + that.operaMin + "";
				// 		that.operaMin = operaMinp.padStart(4, '0');
				// 		that.operaMinus = that.operaMin;

				// 		var obj3 = {
				// 			Number: that.workOrd, // "821610",
				// 			Operation: operation, //"0020",
				// 			Description: descrip, //"Maintanence Part",
				// 			WorkCenter: workcen, //"MECHANIK",
				// 			ControlKey: controlkey,
				// 			ActType: that.pmActype, //"1410",
				// 			Respperson: respPer,
				// 			Plant: plant, //"1000",
				// 			Duration: duration,
				// 			DeleteFlag: ""

				// 		};

				// 		arr31.push(obj3);
				// 	}

				// 	var obj = {
				// 		Number: that.workOrd,
				// 		Operation: that.operaMinus,
				// 		Description: "",
				// 		WorkCenter: "",
				// 		ControlKey: that.orderTypeForTable,
				// 		ActType: "",
				// 		Respperson: "",
				// 		Plant: that.planPlantForTable,
				// 		Duration: "",
				// 		DeleteFlag: ""

				// 		/*	Operation: that.operaMinus, //"0020",
				// 		Description: "", //"Maintanence Part",
				// 		WorkCenter: "", //that.workCenForTable,
				// 		ControlKey: that.orderTypeForTable,
				// 		Plant: that.planPlantForTable,
				// 		Duration: " "*/

				// 	};

				// 	arr31.push(obj);
				// 	arr32 = {
				// 		arr32: arr31
				// 	};

				// 	// var that = this;

				// 	that.oModel3 = this.getView().getModel("oGlobalModel").getProperty("/oModel3");

				// 	that.oModel3 = new sap.ui.model.json.JSONModel(arr32);
				// 	// var taskTab1 = that.getView().byId("optab");
				// 	var taskTab1 = that.getView().byId("optab");
				// 	taskTab1.setModel(that.oModel3);
				// 	that.workNewBind();

				// } else {

				var rowlength = rowlen + "0";
				var rowMinus = rowlen - 1;
				// var rowlength = "00" + rowlen + "0";
				// rowlength.pad('0', 6);
				// ('0000' + rowlength).slice(-4);
				// debugger;
				var rowl = Number(rowlength);

				var rowLe = rowl + 10;
				rowLe = "" + rowLe + "";
				rowLe = rowLe.padStart(4, '0');

				// this.rowLen = rowLe;
				// this.rowLen = "00" + rowLe;
				// itemNo = that.Itemkey + 1;

				console.log(rowlen);
				// var that = this;
				for (var i = 0; i < rowlen; i++) {

					var operation = itemTab1.getItems()[i].getCells()[0].getValue();
					var descrip = itemTab1.getItems()[i].getCells()[1].getValue();
					var workcen = itemTab1.getItems()[i].getCells()[2].getValue();
					var plant = itemTab1.getItems()[i].getCells()[3].getValue();
					var controlkey = itemTab1.getItems()[i].getCells()[4].getValue();
					var duration = itemTab1.getItems()[i].getCells()[5].getValue();
					// var plant = itemTab1.getItems()[i].getCells()[3].getText();
					var operation1 = itemTab1.getItems()[rowMinus].getCells()[0].getValue();
					var respPer = itemTab1.getItems()[i].getCells()[8].getValue();
					var operation11 = Number(operation1);
					that.operaMin = operation11 + 10;
					// debugger;
					var operaMinp = "" + that.operaMin + "";
					that.operaMin = operaMinp.padStart(4, '0');
					that.operaMinus = that.operaMin;

					var obj3 = {
						Number: that.workOrd, // "821610",
						Operation: operation, //"0020",
						Description: descrip, //"Maintanence Part",
						WorkCenter: workcen, //"MECHANIK",
						ControlKey: controlkey,
						ActType: that.pmActype, //"1410",
						Respperson: respPer,
						Plant: plant, //"1000",
						Duration: duration,
						DeleteFlag: ""

					};

					arr31.push(obj3);
				}

				var obj = {
					Number: that.workOrd,
					Operation: that.operaMinus,
					Description: "",
					WorkCenter: "",
					ControlKey: that.orderTypeForTable,
					ActType: "",
					Respperson: "",
					Plant: that.planPlantForTable,
					Duration: "",
					DeleteFlag: ""

					/*	Operation: that.operaMinus, //"0020",
					Description: "", //"Maintanence Part",
					WorkCenter: "", //that.workCenForTable,
					ControlKey: that.orderTypeForTable,
					Plant: that.planPlantForTable,
					Duration: " "*/

				};

				arr31.push(obj);
				arr32 = {
					arr32: arr31
				};

				// var that = this;

				that.oModel3 = this.getView().getModel("oGlobalModel").getProperty("/oModel3");

				that.oModel3 = new sap.ui.model.json.JSONModel(arr32);
				// var taskTab1 = that.getView().byId("optab");
				var taskTab1 = that.getView().byId("optab");
				taskTab1.setModel(that.oModel3);
				that.workNewBind();

				// }

			}, //end of function add row in Operations table
			// operaItemLC: function (oArg) {
			// 	var that = this;
			// 	debugger;
			// 	var inpId = oArg.getParameters();
			// 	var inpIdd = inpId.id;
			// 	var _oInput = oArg.getSource();
			// 	that.len = _oInput.getValue();
			// 	that.val = _oInput.getValue().length;
			// 	if (that.val > 4) {
			// 		that.l = that.len.slice(0, 4);
			// 		that.getView().byId(inpIdd).setValue(that.l);
			// 	} else {

			// 	}

			// },
			subRowOperations: function (oArg) {

				var obj = {};
				// debugger;
				var that = this;
				var pmActyp = this.getView().byId("pmActype").getValue();
				var operaTab = that.getView().byId("optab");
				var opRowlen = operaTab.getItems().length;
				opRowlen = opRowlen - 1;
				// for (var i = rowlen; i < rowlen; i++) {

				that.index = '' + opRowlen + '';
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();
				d.arr32.splice(that.index, 1);
				Data.setData(d);

				// obj = d.arr32.slice(that.index);
				// obj[0].DeleteFlag = "X";
				// obj[0].Number = that.workOrd;
				// obj[0].ActType = pmActyp;
				// var objArray = Object.assign({}, obj);
				// that.newArray1.push(objArray[0]);
				// console.log(that.newArray1);
				// d.arr32.splice(that.index, 1);
				// Data.setData(d);
				// that.taskNumber();

				// }

			},
			subRowCompo: function (oArg) {

				// debugger;
				var that = this;
				var pmActyp = this.getView().byId("pmActype").getValue();
				var compsTab = that.getView().byId("compsTab");
				var opRowlen = compsTab.getItems().length;
				opRowlen = opRowlen - 1;
				// for (var i = rowlen; i < rowlen; i++) {

				that.index = '' + opRowlen + '';
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();
				d.arr42.splice(that.index, 1);
				Data.setData(d);

			},
			operaDelTable: function (oArg) {

				// this.newArray1 = [];
				var obj = {};
				var deleArray1 = [];
				var that = this;
				// debugger;
				var tabellength = that.getView().byId("optab").getItems().length;
				var cTab = this.getView().byId("compsTab");
				var leng = cTab.getItems().length;
				if (tabellength === 1) {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Last active operation cannot be deleted", {
						title: "Information",
						onClose: null
					});
				} else {
					var value = oArg.getSource().getParent().getBindingContext().getPath();
					var valueind = value.split("/");
					that.index = valueind[2];
					var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
					var Data = list_ID.getModel();
					var d = Data.getData();

					var d = Data.getData();
					obj = d.arr32.slice(that.index);
					var oper = obj[0].Operation;

					for (var i = 0; i < leng; i++) {
						var odelComp = cTab.getItems()[i].getCells()[1].getValue();
						if (odelComp == oper) {
							deleArray1.push(odelComp);
							var length12 = deleArray1.length;
						}

					}

					if (length12 == undefined) {

						var lenOfOpera = that.copyOfArrOpera.length;
						for (var i = 0; i < lenOfOpera; i++) {
							var operation = that.copyOfArrOpera[i].Operation;

							if (operation === oper) {
								obj[0].DeleteFlag = "X";
								obj[0].Number = that.workOrd;
								obj[0].ActType = that.pmActype;
								var objArray = Object.assign({}, obj);
								that.newArray1.push(objArray[0]);
								d.arr32.splice(that.index, 1);
								Data.setData(d);

							} else if (operation != oper) {
								d.arr32.splice(that.index, 1);
								Data.setData(d);
							}

						}

					} else {
						var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
						MessageBox.warning(
							"Delete " + oper + " operation in component table", {
								styleClass: bCompact ? "sapUiSizeCompact" : ""
							}
						);
					}
				}
			},

			/*adding Rows to table for more fragment in Edit mode*/ //Button Visiblity false
			// addMoreFrag: function () {

			// 	//	this.handleRouteMatched();

			// 	this.HotelBooking1 = {

			// 		Empty1: "",
			// 		Empty2: ""

			// 	};

			// 	//debugger;

			// 	this.semhotelarray1.push(this.HotelBooking1);

			// 	this.HotelBooking1 = sap.ui.core.Fragment.byId("morefragment", "tab4");

			// 	seamoModelccd41 = new sap.ui.model.json.JSONModel(); // created a JSON model   
			// 	seamoModelccd41.setData({ // Set the data to the model using the JSON object defined already  
			// 		seamtrans1: this.semhotelarray1

			// 	});
			// 	this.HotelBooking1.setModel(seamoModelccd41);

			// },

			/*adding Rows to table for more fragment in Edit mode*/ //Button Visiblity false
			addbtnmore2: function () {

				this.HotelBooking2 = {

					Empty1: "",
					Empty2: "",
					Empty3: "",
					Empty4: "",
					Empty5: ""

				};

				//debugger;

				this.semhotelarray2.push(this.HotelBooking2);

				this.HotelBooking2 = sap.ui.core.Fragment.byId("morefragment", "tab5");

				seamoModelccd42 = new sap.ui.model.json.JSONModel(); // created a JSON model   
				seamoModelccd42.setData({ // Set the data to the model using the JSON object defined already  
					seamtrans2: this.semhotelarray2

				});
				this.HotelBooking2.setModel(seamoModelccd42);

			},

			/*adding Rows to table for Operations fragment in Edit mode*/
			openfrG: function () { /////////////// for component button in operation tab
				//debugger;
				var that = this;
				var compsTab = that.getView().byId("compsTab");
				that.compRowLength = compsTab.getItems().length;
				if (that.compRowLength === 0) {

					var compLen = that.compRowLength + 1;
					// this.itemInc = compLen;
					var itemNo = "" + compLen + "";
					compLen = itemNo.padStart(4, '0');

					that.itemInc = compLen;

					var HotelBooking = {

						Empty1: that.itemInc,
						Empty2: "",
						pass12: "",
						Empty4: "",
						Empty5: "",
						Empty6: "",
						Empty7: "",
						Empty8: "",
						Empty9: ""

					};

					//debugger;

					that.semhotelarray.push(HotelBooking);

					HotelBooking = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

					seamoModelccd4 = new sap.ui.model.json.JSONModel(); // created a JSON model   
					seamoModelccd4.setData({ // Set the data to the model using the JSON object defined already  
						seamtrans: this.semhotelarray

					});
					HotelBooking.setModel(seamoModelccd4);
					seamoModelccd4.refresh();

				} else {
					this.compRowLen = this.compRowLength - 1;

					for (var indix = 0; indix < that.compRowLength; indix++) {

						if (indix === that.compRowLen) {
							var itemN = compsTab.getItems()[indix].getCells()[0].getValue();
							itemN = Number(itemN);
						}

					}
					var compLen = itemN + 1;
					// this.itemInc = compLen;
					var itemNo = "" + compLen + "";
					compLen = itemNo.padStart(4, '0');

					that.itemInc = compLen;

					var HotelBooking = {

						Empty1: that.itemInc,
						Empty2: "",
						pass12: "",
						Empty4: "",
						Empty5: "",
						Empty6: "",
						Empty7: "",
						Empty8: "",
						Empty9: ""

					};

					//debugger;

					that.semhotelarray.push(HotelBooking);

					HotelBooking = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

					seamoModelccd4 = new sap.ui.model.json.JSONModel(); // created a JSON model   
					seamoModelccd4.setData({ // Set the data to the model using the JSON object defined already  
						seamtrans: this.semhotelarray

					});
					HotelBooking.setModel(seamoModelccd4);
					seamoModelccd4.refresh();
				}
			},

			/*adding Rows to Component table in Edit mode*/
			compo_btn: function () {
				//alert("pressed");

				this.planPlantChange();

				this.semhotelarray = [];
				var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

				var lengthconfirmcart = rowItems.length;
				// debugger;
				this.taskNumber();

				var itemTab1 = this.getView().byId("compsTab");
				var rowlen = itemTab1.getItems().length;

				// this.itemInc = lengthconfirmcart + 1;
				//	alert(lengthconfirmcart);
				var that = this;

				/*	for (var i = 0; i < rowItems.length; i++) {

						var item = rowItems[i];
						var Cells = item.getCells();

						// var itemNo = Cells[0].setValue(that.itemInc);
						// var operation = Cells[1].setSelectedKey("");
						// var Material = Cells[2].setSelectedKey("");
						var Description = Cells[3].setValue("");
						var UOM = Cells[4].setValue("");
						var storLoc = Cells[5].setValue("");
						var itemCategory = Cells[6].setValue("");
						var ReqQty = Cells[7].setValue("");
						var avail = Cells[8].setValue("");
					}*/
				// that.openfrG();
				if (that.tabmodel) {
					that.taskNumber();
					that.compobtn.open();
					//	that.planPlantChange();
					//	that.planPlantChangeInit();

				} else {

					that.semhotelarray = [];

					that.itemInc = 0;

					that.compobtn.open();
					that.taskNumber();
					//	that.planPlantChange();
					//	that.planPlantChangeInit();

					// that.addbtncp();
				}

			},

			addbtncp2: function () {
				this.openfrG();
				this.fraguom();
				this.fragItmcat();
				var button = sap.ui.core.Fragment.byId("Operationsfragment", "firstTime").setVisible(false);
				var button1 = sap.ui.core.Fragment.byId("Operationsfragment", "secondTime").setVisible(true);
			},

			/*adding Rows to Operations fragment table in Edit mode*/
			addbtncp: function () {
				// this.compRowLen;
				// this.semhotelarray = [];
				// debugger;
				var operaLen = this.itemInc;
				this.itemInc = Number(operaLen);

				this.itemInc = this.itemInc + 1;

				var itemNo = "" + this.itemInc + "";
				this.itemInc = itemNo.padStart(4, '0');

				// this.itemInc = "000" + this.itemInc;

				this.semhotelarray.push({

					Empty1: this.itemInc,
					Empty2: "",
					pass12: this.planplt,
					Empty4: "",
					Empty5: "",
					Empty6: "",
					Empty7: "",
					Empty8: "",
					Empty9: ""

				});
				seamoModelccd4.refresh(); //which will add the new record

				var oCont = this; ///// Purchase data Button to be invisible after the Add button will be pressed

				var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

				form.setVisible(false);

			},
			deleteFragTable: function (oArgs) {

				// var that = this;
				// var path = oEvent.getParameter('listItem').getBindingContext().getPath();
				// debugger;
				/*	var path = oArgs.getSource().getBindingContext().getObject();
					var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
					var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

					var Data = list_ID.getModel();
					var semhotelarrayP = this.semhotelarray;
					var d = Data.getData();
					d.semhotelarrayP.splice(idx, 1);
					Data.setData(d);*/

				/*	that.value1 = oArgs.getSource().getBindingContext().getObject();

					// debugger;

					for (var i = 0; i < that.semhotelarray.length; i++) {

						//this.array1z = [];

						if (that.semhotelarray[i] == this.value1) {

							//this.array1z = [];

							that.semhotelarray.splice(i, 1); //removing 1 record from i th index.

							seamoModelccd4.refresh();

							break; //quit the loop

							//this.deleteTab();
						}
					}*/
			},
			// c1: function () {

			// 	this.plangrp = this.getView().byId("combo3").getSelectedKey(); //// to post Planner Group
			// 	//alert(this.plangrp);

			// },

			// planPlantChangeInit: function () {

			// 	var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

			// 	var SplitTotalFoot = plant.split(" ");
			// 	this.planplt = SplitTotalFoot[0];
			// 	// debugger;
			// 	// alert(this.planplt);

			// 	var sPath = "/MaterialF4Set?$filter=Plant eq '" + this.planplt + "'";
			// 	var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
			// 	oModel.read(sPath, {
			// 		success: function (oData, oResponse) {

			// 			var plntcnt = oData.results.length;
			// 			// debugger;
			// 			console.log("countable:", plntcnt);

			// 			var c4model = new sap.ui.model.json.JSONModel();
			// 			c4model.setSizeLimit(5300);
			// 			c4model.setData(oData);
			// 			var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

			// 			mat.setModel(c4model);
			// 			var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

			// 			var oItems = new sap.ui.core.ListItem({
			// 				key: "{Material}",
			// 				text: "{Material} - {Description}"
			// 			});
			// 			comboven.bindAggregation("items", {
			// 				path: "/results",
			// 				template: oItems
			// 			});

			// 		}
			// 	});

			// },
			/*planning plant selection change for materials in table in operations fragment */
			planPlantChange: function () {

				var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

				var SplitTotalFoot = plant.split(" ");
				this.planplt = SplitTotalFoot[0];
				// debugger;
				// alert(this.planplt);

				var sPath = "/MaterialF4Set?$filter=Plant eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						// debugger;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						// c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

						mat.setModel(c4model);
						var comboven = sap.ui.core.Fragment.byId("Operationsfragment", "matcombo");

						var oItems = new sap.ui.core.ListItem({
							key: "{Material}",
							text: "{Material}"
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

				this.plGRPLat();
				this.equipLat();
				this.funLocLat();
				this.mainWKLat();

			},
			plGRPLat: function () {
				var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

				var SplitTotalFoot = plant.split(" ");
				this.planplt = SplitTotalFoot[0];
				// debugger;
				// alert(this.planplt);

				var sPath = "/PlannerGroupF4Set?$filter=PlanningPlant eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						// debugger;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						// c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = this.getView().byId("plnGrp");

						mat.setModel(c4model);
						var comboven = this.getView().byId("plnGrp");

						var oItems = new sap.ui.core.ListItem({
							key: "{PlannerGroup}",
							text: "{PlannerGroup} {NamePlannerGroup}"
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});
			},
			funLocLat: function () {
				var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

				var SplitTotalFoot = plant.split(" ");
				this.planplt = SplitTotalFoot[0];
				// debugger;
				// alert(this.planplt);

				var sPath = "/FunctionalLocF4Set?$filter=Plant eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						// debugger;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						// c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = this.getView().byId("functech");

						mat.setModel(c4model);
						var comboven = this.getView().byId("functech");

						var oItems = new sap.ui.core.ListItem({
							key: "{FuncLoc}",
							text: "{FuncLoc} {FuncText}"
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});
			},
			mainWKLat: function () {

				var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

				var SplitTotalFoot = plant.split(" ");
				this.planplt = SplitTotalFoot[0];
				// debugger;
				// alert(this.planplt);

				var sPath = "/WorkCenterF4Set?$filter=Key eq '" + this.planplt + "'";
				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						// debugger;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						// c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = this.getView().byId("mWrkctr");

						mat.setModel(c4model);
						var comboven = this.getView().byId("mWrkctr");

						var oItems = new sap.ui.core.ListItem({
							key: "{WrkCtrID}",
							text: "{WrkCtrID} {Text}"
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

			},
			equipLat: function () {

				var plant = this.getView().byId("combo4").getValue(); //// to post Planning plant

				var SplitTotalFoot = plant.split(" ");
				this.planplt = SplitTotalFoot[0];
				// debugger;
				// alert(this.planplt);
				var that = this;
				var sPath = "/EquipmentSet?$filter=Plant eq '" + that.planplt + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_F4_SRV/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						console.log("EquipmentData : ", oData);
						var plntcnt = oData.results.length;
						// debugger;
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						// c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var mat = that.getView().byId("equip");

						mat.setModel(c4model);
						var comboven = that.getView().byId("equip");

						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNumber}",
							text: "{EquipmentNumber} {EquipmentDes}"
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

			},
			/*Material selection change to auto populate for table fields in operation fragment*/
			OperaFragMatChange: function (oEvent) {

				var cc_oTable = oEvent.getSource().getParent().getParent();

				var oSrc = oEvent.getSource();
				var aItems = oSrc.getSelectedKey();

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				var indexi = valueind[2];
				console.log(indexi);

				var ocont = this;

				var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);

				var sPath = "/ComponentListSet(Component='" + aItems + "',Plant='" + this.planplt + "')";

				oModel123.read(sPath, {
					success: function (oData, oResp) {

						cc_oTable.getItems()[indexi].getCells()[3].setValue(oData.Description);
						// cc_oTable.getItems()[indexi].getCells()[1].setValue(oData.OpActivity);
						cc_oTable.getItems()[indexi].getCells()[4].setValue(oData.UOM);
						cc_oTable.getItems()[indexi].getCells()[5].setValue(oData.StorageLoc);
						cc_oTable.getItems()[indexi].getCells()[8].setValue(oData.AvailQty);

					}
				});

			},
			taskNumber: function () {
				// debugger;
				var causeNoCom = sap.ui.core.Fragment.byId("Operationsfragment", "operaCount");
				var operaTable = this.getView().byId("optab");
				var rowlen = operaTable.getItems().length;
				var itemNo = 0;
				var itArr = [];
				for (var i = 0; i < rowlen; i++) {
					var operaNumber = operaTable.getItems()[i].getCells()[0].getValue();
					// itemNo = itemNo + 10;
					// itemNo = "00" + itemNo;
					var obj = {
						"item": operaNumber
					};

					itArr.push(obj);

				} //for loop close
				//var arr1 = arr1.push(itArr);

				var oItems = new sap.ui.core.ListItem({
					key: "{item}",
					text: "{item}"
				});
				var oModel12 = new sap.ui.model.json.JSONModel(itArr);
				oModel12.setData({
					results: itArr
				});

				causeNoCom.bindItems("/results", oItems);
				causeNoCom.setModel(oModel12);
			},
			plannplnt: function () {

				var oCont = this;

				var plant = oCont.getView().byId("combo4");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/PlannerGroupF4Set', {

					success: function (oData, oResponse) {
						var PlanningPlant = oData.results[0].PlanningPlant;

						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.PlanningPlant) == -1) {
								dups.push(el.PlanningPlant);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						console.log("arr6:" + arr7);
						var oItems = new sap.ui.core.ListItem({
							key: "{PlanningPlant}",
							text: "{PlanningPlant} {NamePlanningPlant}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						plant.setModel(oModel);
						plant.bindItems("/arr7", oItems);
					}
				});

			},
			newmaterial: function (oEvent) {

				this.fragacc();
				this.fragpurgrp();
				this.fragvend();
				this.fraginfo();
				this.fragCurr();

				var valuestrom = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = valuestrom.split("/");
				this.indexz = valueind[2];

				var oCont = this;
				var tableyz = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var reqqtyform = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

				var countwww = tableyz.getItems().length;

				this.ops1890 = tableyz.getItems()[this.indexz].getCells()[2].getValue();

				this.newreqqty = tableyz.getItems()[this.indexz].getCells()[7].getValue();
				//console.log("this.newreqqty", this.newreqqty);

				this.NSuom = tableyz.getItems()[this.indexz].getCells()[4].getValue();

				/*	var plant123 = oCont.getView().byId("cmpplanplt").getValue();

					var SplitTotalFoot = plant123.split(" ");
					this.plantFet2 = SplitTotalFoot[0];*/

				var oModel123 = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				var sPath = "/ComponentListSet(Component='" + this.ops1890 + "',Plant='" + this.Plant + "')";
				oModel123.read(sPath, {
					success: function (oData, oResp) {
						console.log(oData);

						sap.ui.core.Fragment.byId("Operationsfragment", "Price").setValue(oData.Price);
						sap.ui.core.Fragment.byId("Operationsfragment", "combo15").setValue(oData.Currency);
						sap.ui.core.Fragment.byId("Operationsfragment", "combo8").setValue(oData.MaterialGroup);
						sap.ui.core.Fragment.byId("Operationsfragment", "combo9").setValue(oData.PurchaseGroup);
						sap.ui.core.Fragment.byId("Operationsfragment", "val4").setValue(oData.Priceunit);
						sap.ui.core.Fragment.byId("Operationsfragment", "perunit").setValue(oData.UOM);
						sap.ui.core.Fragment.byId("Operationsfragment", "combo16").setValue(oData.GLAccount);

					},
				});

				var stardum = sap.ui.core.Fragment.byId("Operationsfragment", "val0").setValue(this.newreqqty);
				var stardum2 = sap.ui.core.Fragment.byId("Operationsfragment", "val1").setValue(this.NSuom);
				//alert(stardum);

				MessageToast.show("Purchase data enabled");

				var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");
				form.setVisible(true);

				/*	MessageToast.show("Purchase data enabled");

					var oCont = this;

					var form = sap.ui.core.Fragment.byId("Operationsfragment", "purdata");

					form.setVisible(true);*/

				/*	sap.ui.core.Fragment.byId("Operationsfragment", "combo15").setValue(oCont.z2);
					sap.ui.core.Fragment.byId("Operationsfragment", "combo8").setValue(oCont.z3);
					sap.ui.core.Fragment.byId("Operationsfragment", "combo9").setValue(oCont.z4);
					sap.ui.core.Fragment.byId("Operationsfragment", "val3").setValue(this.planplt);
					sap.ui.core.Fragment.byId("Operationsfragment", "val4").setValue(oCont.z5);
					sap.ui.core.Fragment.byId("Operationsfragment", "combo16").setValue(oCont.z6);*/

			},

			globalqty: function (oEvent) {

				var ls = oEvent.getSource().getValue();
				//alert(ls);
				sap.ui.core.Fragment.byId("Operationsfragment", "purdata");
				var tablew = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var count1 = tablew.getItems().length;
				var opsz = tablew.getItems()[this.indexz].getCells()[7].setValue(ls);

			},

			handleIconMainTabBarSelect22: function (oEvent) {

				var icon = sap.ui.core.Fragment.byId("Operationfragment", "idIconTabBar22");
				var mkey22 = oEvent.getParameters().key;

				if (mkey22 === "general") {

					sap.ui.core.Fragment.byId("Operationsfragment", "purdata").setVisible(false);

				} else {

					// var plant = sap.ui.core.Fragment.byId("functionalfragment", "main").setValue("");
				}

			},

			/*	purdoc: function () {
					/////Icon Tab Bar inside the fragment

					var oCont = this;

					var sPath = "/PurchDataSet(Plant='1000',PurGroup='100',Quom='ST')"; //('TEQ-00')
					var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
					oModel.read(sPath, {
						success: function (oData, oResponse) {

							//oCont.z1 = oData.Quom;

							oCont.z2 = oData.PriceUom;
							oCont.z3 = oData.MatGroup;
							oCont.z4 = oData.PurGroup;
							oCont.z5 = oData.PriceUnit;
							oCont.z6 = oData.GLAccount;

						}

					});

				},*/

			OK: function () {

				this.opsTable = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				this.tabmodel = this.opsTable.getModel();

				////////////////////////////////////Table binding for more table for MAterial Required Table	
				//array1 = [];
				// array2 = [];
				// array3 = [];
				// array4 = [];
				// array5 = [];

				var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

				var lengthconfirmcart = rowItems.length;
				var that = this;
				for (var i = 0; i < rowItems.length; i++) {

					var item = rowItems[i];
					var Cells = item.getCells();
					that.operaComp = Cells[1].getValue();
					that.Material = Cells[2].getValue();
					that.Description = Cells[3].getValue();
					that.UoM = Cells[4].getValue();
					that.Storage = Cells[5].getValue();
					that.itemCat = Cells[6].getValue();
					that.ReqQty = Cells[7].getValue();
					that.AvailQty = Cells[8].getValue();

					var obj = {
						mat: that.Material,
						dec: that.Description,
						uom: that.UoM,
						Storage: that.Storage,
						ReqQty: that.ReqQty,
						AvailQty: that.AvailQty
					};

					array1.push(obj);
					// debugger;
				}
				if (that.operaComp === "") {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Please enter the operation", {
						title: "Error",
						onClose: null
					});
				}
				// else if (that.Material === "") {
				// 	jQuery.sap.require("sap.m.MessageBox");
				// 	sap.m.MessageBox.alert("Please enter the material", {
				// 		title: "Error",
				// 		onClose: null
				// 	});
				// }
				/*else if (that.itemCat === "") {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Please enter the Item category", {
						title: "Error",
						onClose: null
					});
				}*/
				/*else if (that.ReqQty === "") {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Please enter the Required quantity", {
						title: "Error",
						onClose: null
					});
				}*/
				else {
					oModelssd = new sap.ui.model.json.JSONModel();
					oModelssd.setData({

						moretab: array1

					});
					this.HotelBooking2.setModel(oModelssd);

					this.itemTableClose();
					this.compobtn.close();
					var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();
					for (var i = 0; i < rowItems.length; i++) {

						var item = rowItems[i];
						var Cells = item.getCells();

						// var itemNo = Cells[0].setValue(that.itemInc);
						var operation = Cells[1].setSelectedKey("");
						var Material = Cells[2].setSelectedKey("");
						var Description = Cells[3].setValue("");
						var UOM = Cells[4].setValue("");
						var storLoc = Cells[5].setValue("");
						var itemCategory = Cells[6].setValue("");
						var ReqQty = Cells[7].setValue("");
						var avail = Cells[8].setValue("");
					}

					var button = sap.ui.core.Fragment.byId("Operationsfragment", "firstTime").setVisible(true);
					var button1 = sap.ui.core.Fragment.byId("Operationsfragment", "secondTime").setVisible(false);

					var tableDel = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
					tableDel.destroyItems();
				}
			},
			itemTableClose: function () { /*Function for the Tab close Edit: bharath*/
				// console.log("array 11", arr41);
				var that = this;
				arr41 = [];

				var compsTab = this.getView().byId("compsTab");
				var rowlen = compsTab.getItems().length;
				console.log(rowlen);
				for (var i = 0; i < rowlen; i++) {
					var item = compsTab.getItems()[i].getCells()[0].getValue();
					var operation = compsTab.getItems()[i].getCells()[1].getValue();
					var matNum = compsTab.getItems()[i].getCells()[2].getValue();
					var matDesc = compsTab.getItems()[i].getCells()[3].getValue();
					var storLoc = compsTab.getItems()[i].getCells()[4].getValue();
					var itemCat = compsTab.getItems()[i].getCells()[5].getValue();
					var reqQty = compsTab.getItems()[i].getCells()[6].getValue();
					var unitM = compsTab.getItems()[i].getCells()[7].getValue();
					var avail = compsTab.getItems()[i].getCells()[8].getValue();

					var obj1 = {
						Item: item,
						Operation: operation, //"0020",
						MaterialNo: matNum, //"TEST",
						MatDesc: matDesc, //"TEST",
						ReqQty: reqQty, //"250",
						uom: unitM,
						StorageLoc: storLoc,
						Number: that.workOrd,
						ItemCat: itemCat,
						avail: avail,
						DeleteFlag: ""

						/*						item: item,
												opera: operation,
												MatNum: matNum,
												MatDesc: matDesc,
												storLoc: storLoc,
												ItemCat: itemCat,
												ReqQty: reqQty,
												uom: unitM,
												avail: avail*/

					};

					arr41.push(obj1);
				}

				var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();

				var lengthconfirmcart = rowItems.length;

				//	alert(lengthconfirmcart);

				for (var i = 0; i < rowItems.length; i++) {

					var item = rowItems[i];
					var Cells = item.getCells();

					var itemNo = Cells[0].getValue();
					var operation = Cells[1].getSelectedKey();
					var Material = Cells[2].getSelectedKey();
					var Description = Cells[3].getValue();
					var UOM = Cells[4].getValue();
					var storLoc = Cells[5].getValue();
					var itemCategory = Cells[6].getValue();
					var itemCateg = itemCategory.split("-");
					var itemCat = itemCateg[0];
					var ReqQty = Cells[7].getValue();
					var avail = Cells[8].getValue();
					// itemNo = "000" + itemNo;
					var obj = {

						Item: itemNo,
						Operation: operation, //"0020",
						MaterialNo: Material, //"TEST",
						MatDesc: Description, //"TEST",
						ReqQty: ReqQty, //"250",
						uom: UOM,
						StorageLoc: storLoc,
						Number: that.workOrd,
						ItemCat: itemCat,
						DeleteFlag: "",
						avail: avail

						/*	item: itemNo,
						opera: operation,
						MatNum: Material,
						MatDesc: Description,
						storLoc: storLoc,
						ItemCat: itemCat,
						ReqQty: ReqQty,
						uom: UOM,
						avail: avail*/

					};

					arr41.push(obj);
				}

				arr42 = {
					"arr42": arr41
				};
				var that = this;
				that.oModel1 = this.getView().getModel("oGlobalModel").getProperty("/oModel1");
				that.oModel1 = new sap.ui.model.json.JSONModel(arr42);
				var compTab = that.getView().byId("compsTab");
				compTab.setModel(that.oModel1);
				var titems1 = new sap.m.ColumnListItem({
					cells: [
						new sap.m.Input({
							value: "{Item}",
							maxLength: 4,
							editable: false
						}), new sap.m.Input({
							value: "{Operation}",
							maxLength: 4,
							editable: false
						}), new sap.m.Input({
							value: "{MaterialNo}"
						}), new sap.m.Input({
							value: "{MatDesc}"
						}), new sap.m.Input({
							value: "{StorageLoc}",
							maxLength: 4
						}), new sap.m.Input({
							value: "{ItemCat}",
							maxLength: 1
						}), new sap.m.Input({
							value: "{ReqQty}",
							maxLength: 4
						}), new sap.m.Input({
							value: "{uom}",
							maxLength: 3
						}), new sap.m.Input({
							value: "{avail}",
							maxLength: 4
						}), new sap.m.Button({
							icon: "sap-icon://delete",
							text: "",
							type: sap.m.ButtonType.Transparent,
							press: function (oArg) {
								that.compDelTable(oArg);
							}
						})

						/*	new sap.m.Button({
								icon: "sap-icon://create-form",
								text: "",
								type: sap.m.ButtonType.Emphasized,
								press: function (oArg) {

									that.handleResponsivePopoverPress(oArg);

								},
								width: "auto"
							})*/

					]
				});

				compTab.bindItems("/arr42", titems1);

			},

			compDelTable: function (oArg) {

				var obj = {};
				var that = this;
				// debugger;
				// var tabellength = that.getView().byId("optab").getItems();
				var value = oArg.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				that.index = valueind[2];
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();

				obj = d.arr42.slice(that.index);
				var itemComp = obj[0].Item;
				var lenOfOpera = that.copyOfArrComp;

				if (lenOfOpera != undefined) {

					var lenga = lenOfOpera.length;

					for (var i = 0; i < lenga; i++) {
						var Item = that.copyOfArrComp[i].Item;
						if (itemComp === Item) {
							obj[0].DeleteFlag = "X";
							obj[0].Number = that.workOrd;

							var objArray = Object.assign({}, obj);
							that.newArray2.push(objArray[0]);
							d.arr42.splice(that.index, 1);
							Data.setData(d);
						}

					}
					if (itemComp != Item) {
						d.arr42.splice(that.index, 1);
						Data.setData(d);
					}

				} else {

					d.arr42.splice(that.index, 1);
					Data.setData(d);
					// var cTab = this.getView().byId("compsTab");
					// var leng = cTab.getItems().length;

				}

			},

			Cancel: function () {

				this.compobtn.close();

				var rowItems = sap.ui.core.Fragment.byId("Operationsfragment", "tab2").getItems();
				for (var i = 0; i < rowItems.length; i++) {

					var item = rowItems[i];
					var Cells = item.getCells();

					// var itemNo = Cells[0].setValue(that.itemInc);
					var operation = Cells[1].setSelectedKey("");
					var Material = Cells[2].setSelectedKey("");
					var Description = Cells[3].setValue("");
					var UOM = Cells[4].setValue("");
					var storLoc = Cells[5].setValue("");
					var itemCategory = Cells[6].setValue("");
					var ReqQty = Cells[7].setValue("");
					var avail = Cells[8].setValue("");
				}
				var button = sap.ui.core.Fragment.byId("Operationsfragment", "firstTime").setVisible(true);
				var button1 = sap.ui.core.Fragment.byId("Operationsfragment", "secondTime").setVisible(false);

				// var tableDel = this.getView().byId("tab1"); //Destroys the table line item
				var tableDel = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				tableDel.destroyItems();
			},
			bindItems: function () {

				this.funlocation1 = this.getView().getModel("oGlobalModel").getProperty("/functionallocation");
				console.log("this.funlocation1", this.funlocation1);

				var that = this;
				var oPath = "/WorkOrderHeaderSet('" + this.workOrd + "')";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(oPath, {

					success: function (oData, oResponse) {
						console.log(oData);
						// Log.error("oData ",oData);
						// debugger;
						var text = oData.ShortText;
						var lngText = oData.LongText;
						var funcloc = oData.FunctLoc;
						var plnGrp = oData.Plangroup;
						var mWrkctr = oData.MnWkCtr;
						var pmActype = oData.Pmacttype;
						var equip = oData.Equipment;
						var prio = oData.PriorityText;
						var orderType = oData.OrderType;
						var funLocDesc = oData.FunctLocDes;
						var equipDesc = oData.EquipmentDes;
						var planGrpDesc = oData.PlangroupDes;
						var mainwkDesc = oData.MnWkCtrDes;
						var orderTypeDesc = oData.OrderTypeDes;

						var plantDesc = oData.PlanplantDes;
						var pmActypeDesc = oData.PmacttypeDes;

						var plant = oData.Plant;
						var Start = oData.StartDate;
						var year = Start.slice(0, 4);
						var month = Start.slice(4, 6);
						var date = Start.slice(6, 8);
						var StartDate = date + '.' + month + '.' + year;

						var Finish = oData.FinishDate;
						var year = Finish.slice(0, 4);
						var month = Finish.slice(4, 6);
						var date = Finish.slice(6, 8);
						var FinishDate = date + '.' + month + '.' + year;

						//	var startDate = oData.StartDate;

						/*	var mydate = new Date(oData.StartDate);
							var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][mydate.getMonth()];
							var StartDate = mydate.getDate() + '.' + month + '.' + mydate.getFullYear();

							var mydate = new Date(oData.FinishDate);
							var month = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][mydate.getMonth()];
							var FinishDate = mydate.getDate() + '.' + month + '.' + mydate.getFullYear();*/

						var UserSt = oData.UserSt; //field name changed from 'X'

						// var SplitTotalFoot2 = UserSt.split(" ");		//Code added for the crrd,rele etc in this funct
						// var userstat = SplitTotalFoot2[0];

						//	var NotifNo = oData.NotifNo;
						that.getView().byId("objPageH").setObjectSubtitle(text);

						that.getView().byId("textAreaBind2").setValue(text);
						that.getView().byId("lngTextBind2").setValue(lngText); //funcloc

						that.getView().byId("functechBind1").setValue(funcloc + " " + funLocDesc);
						that.getView().byId("equipBind1").setValue(equip + "  " + equipDesc);
						that.getView().byId("priorityBind4").setValue(prio);
						that.getView().byId("startDateBind4").setValue(StartDate);
						that.getView().byId("finishDateBind4").setValue(FinishDate);
						that.getView().byId("userstatBind5").setValue(UserSt);
						//		that.getView().byId("NotifNo").setValue(NotifNo);

						that.getView().byId("orderTypeBind5").setValue(orderType + " " + orderTypeDesc); // );
						that.getView().byId("planPlantBind5").setValue(plant + " " + plantDesc); // + " " + plantDesc);

						that.getView().byId("plnGrpBind3").setValue(plnGrp + "  " + planGrpDesc);
						that.getView().byId("mWrkctrBind3").setValue(mWrkctr + " " + mainwkDesc); //funcloc
						// that.getView().byId("mWrkctrBind3").setValue(mWrkctr + "  " + mainwkDesc); //funcloc
						that.getView().byId("pmActypeBind3").setValue(pmActype + " " + pmActypeDesc); // + " " + pmActypeDesc);
						that.getView().byId("personResBind5").setValue(oData.Resperson + " " + oData.PersonResponsibleDes); // + " " + pmActypeDesc);
						that.show();

						that.techObjHis();

					}

				});

				/*	var that = this;
					that.arrTechObj = [];
					var funLocDetails = this.getView().byId("functechBind1").getValue();

					var SplitTotalFoot = funLocDetails.split(" ");
					var functionallocationload = SplitTotalFoot[0];
					alert(functionallocationload);
					// debugger;
					var table = that.getView().byId("objHisTable");
					var oModel = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
					oModelJson = new sap.ui.model.json.JSONModel();
					var sPath = "/ManageNotifTechnicalObjHistorySet";

					oModel.read(sPath, {
						filters: [new sap.ui.model.Filter("FunctionLoc", sap.ui.model.FilterOperator.EQ, 'PL01-FSF-SD-01')],
						success: function (oData, oResponse) {
							
						alert("success");

							var count = oData.results.length;
							// debugger;
							for (var i = 0; i < count; i++) {
								var NotifNo = oData.results[i].NotifNo;

								var NotifDate = oData.results[i].NotifDate;

								var year = NotifDate.slice(0, 4);
								var month = NotifDate.slice(4, 6);
								var date = NotifDate.slice(6, 8);
								var NotifDateTech = date + '.' + month + '.' + year;

								var Description = oData.results[i].Description;
								var FunctionLoc = oData.results[i].FunctionLoc;
								var OrderNo = oData.results[i].OrderNo;
								var Equipm = oData.results[i].Equipment;
								var Equipment = Equipm.slice(8, 18);
								var PriorityText = oData.results[i].Prioritytext;

								var priority11 = "Success";

								var priority22 = "Warning";

								var priority33 = "Error";
								var priorityState;
								if (PriorityText === 'Very High') {

									priorityState = priority33;
								} else if (PriorityText === 'High') {
									priorityState = priority33;
								} else if (PriorityText === 'Medium') {
									priorityState = priority22;
								} else if (PriorityText === 'Low') {
									priorityState = priority11;
								}

								var obj1 = {
									notifNo: NotifNo,
									OrderNo: OrderNo,
									notifDateTech: NotifDateTech,
									description: Description,
									functionLoc: FunctionLoc,
									Equipment: Equipm,
									priorityText: PriorityText,
									priorityState: priorityState

								};
								that.arrTechObj.push(obj1);

							}
							var oModelccd2 = new sap.ui.model.json.JSONModel(); // created a JSON model        
							oModelccd2.setData({ // Set the data to the model using the JSON object defined already  
								listdata: that.arrTechObj

							});
							table.setModel(oModelccd2);

						}

					});*/

			},
			_onSegmentedButtonItemPress: function (oArg) {

				var sDialogName = "Dialog3";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog3(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.open();

			},
			_onSegmentedButtonItemPress1: function () {

				var sDialogName = "Dialog2";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog2(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				oDialog.open();

			},
			functionalDetails: function (oEvent) {
				var sDialogName = "Dialog4";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog4(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}
				var oSource = oEvent.getSource();
				// debugger;
				var funLocDetails = this.getView().byId("functechBind1").getValue();

				var SplitTotalFoot = funLocDetails.split(" ");
				var act_valu = SplitTotalFoot[0];
				// console.log("act_valu :", act_valu)
				//var typ1e = this._oParentView.byId("prio").getValue();
				//	this.startbind();
				var sPath = "/FunctionalDataPullSet('" + act_valu + "')";

				// console.log("PP", sPath);
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// console.log("oData", oData);

						oController.byId("funLocDesc").setText(oData.Description);
						oController.byId("funLocObjectType").setText(oData.ObjectType);
						oController.byId("funLocPlanSection").setText(oData.PlantSection);
						oController.byId("funLocLocation").setText(oData.Location);
						/*	oController.byId("funLocRoom").setText(oData.Room);*/
						oController.byId("funLocSyStatus").setText(oData.SystemStatus); //SyStatus
						oController.byId("funLocUserStatus").setText(oData.UserStatus); //UserStatus

						oModel = oController.getView().getModel();
						oModel.setProperty(sPath, oData);

					}
				});
				oDialog.open(oSource);

			},
			// functionalDetails1: function (oEvent) {
			// 	var sDialogName = "Dialog4";
			// 	this.mDialogs = this.mDialogs || {};
			// 	var oDialog = this.mDialogs[sDialogName];

			// 	if (!oDialog) {
			// 		oDialog = new Dialog4(this.getView());
			// 		this.mDialogs[sDialogName] = oDialog;

			// 		// For navigation.
			// 		oDialog.setRouter(this.oRouter);
			// 	}
			// 	var oSource = oEvent.getSource();
			// 	// debugger;
			// 	var funLocDetails = this.getView().byId("functech").getSelectedKey();
			// 	// debugger;
			// 	var SplitTotalFoot = funLocDetails.split("/");
			// 	var act_valu = SplitTotalFoot[0];
			// 	// console.log("act_valu :", act_valu)
			// 	//var typ1e = this._oParentView.byId("prio").getValue();
			// 	//	this.startbind();
			// 	var sPath = "/FunctionalDataPullSet('" + act_valu + "')";

			// 	// console.log("PP", sPath);
			// 	var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			// 	var oController = this;
			// 	oModel.read(sPath, {
			// 		success: function (oData, oResponse) {
			// 			// console.log("oData", oData);

			// 			oController.byId("funLocDesc").setText(oData.Description);
			// 			oController.byId("funLocObjectType").setText(oData.ObjectType);
			// 			oController.byId("funLocPlanSection").setText(oData.PlantSection);
			// 			oController.byId("funLocLocation").setText(oData.Location);
			// 			oController.byId("funLocRoom").setText(oData.MaintRoom);
			// 			oController.byId("funLocSyStatus").setText(oData.PpWkctr); //SyStatus
			// 			oController.byId("funLocUserStatus").setText(oData.ReadChnam); //UserStatus

			// 			oModel = oController.getView().getModel();
			// 			oModel.setProperty(sPath, oData);

			// 		}
			// 	});
			// 	oDialog.open(oSource);

			// },

			equipmentDetails: function (oEvent) {

				var sDialogName = "Dialog5";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];

				if (!oDialog) {
					oDialog = new Dialog5(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}

				var source = oEvent.getParameters();
				var equipmentDetails = this.getView().byId("equipBind1").getValue();

				var SplitTotalFoot = equipmentDetails.split(" ");
				var act_valu = SplitTotalFoot[0];
				// console.log("act_valu :", act_valu)
				//var typ1e = this._oParentView.byId("prio").getValue();
				//	this.startbind();
				var sPath = "/EquipPullSet('" + act_valu + "')";
				// console.log("PP", sPath);
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// console.log("oData", oData);

						oController.byId("equipDescription").setText(oData.Description);
						oController.byId("equipCat").setText(oData.EquipmentCatagory);
						oController.byId("objectType").setText(oData.ObjectType);
						oController.byId("modelNo").setText(oData.ModelNumber);
						oController.byId("manufacture").setText(oData.Manufacturer);
						/*	oController.byId("locat").setText(oData.Location);
							oController.byId("room3").setText(oData.Room);
							oController.byId("wkCen1").setText(oData.PPWorkName);*/

						oModel = oController.getView().getModel();
						oModel.setProperty(sPath, oData);

					}
				});

				oDialog.open(source);

			},
			/*	equipmentDetails1: function (oEvent) {

					var sDialogName = "Dialog5";
					this.mDialogs = this.mDialogs || {};
					var oDialog = this.mDialogs[sDialogName];

					if (!oDialog) {
						oDialog = new Dialog5(this.getView());
						this.mDialogs[sDialogName] = oDialog;

						// For navigation.
						oDialog.setRouter(this.oRouter);
					}

					var source = oEvent.getParameters();
					var equipmentDetails = this.getView().byId("equip").getValue();

					var SplitTotalFoot = equipmentDetails.split("/");
					var act_valu = SplitTotalFoot[0];

					var sPath = "/EuipQuickViewSet(Equipment='" + act_valu + "')";

					var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
					var oController = this;
					oModel.read(sPath, {
						success: function (oData, oResponse) {

							oController.byId("equipDescription").setText(oData.Description);
							oController.byId("equipCat").setText(oData.Category);
							oController.byId("objectType").setText(oData.ObjType);
							oController.byId("modelNo").setText(oData.Model);
							oController.byId("manufacture").setText(oData.Manufacturer);

							oController.byId("locat").setText(oData.Location);
							oController.byId("room3").setText(oData.Room);
							oController.byId("wkCen").setText(oData.WorkCenter);

							oModel = oController.getView().getModel();
							oModel.setProperty(sPath, oData);

						}
					});

					oDialog.open(source);

				},*/

			editPress: function () {
				// debugger;

				this.PlannerGrp();
				this.workCenter();
				this.existNotification();
				this.functionLocation();

				this.plannplnt();
				this.tasklist();
				this.setuser();
				this.personRespMoreBind();

				this.personResp();
				this.workNewBind();

				this._listout = "X";
				this.getView().getModel("oGlobalModel").setProperty("/listpress", this._listout);

				var del = "Delete";
				this.getView().getModel("oGlobalModel").setProperty("/modeDelete", del);

				// this.getView().byId("tableEdit").setVisible(true);
				// this.getView().byId("tableAdd").setVisible(false);
				this.getView().byId("two").setVisible(false);
				this.getView().byId("one").setVisible(true);

				this.getView().byId("BIND1").setVisible(false);
				this.getView().byId("WITHOUTBIND1").setVisible(true);

				this.getView().byId("BIND2").setVisible(false);
				this.getView().byId("WITHOUTBIND2").setVisible(true);

				this.getView().byId("BIND3").setVisible(false);
				this.getView().byId("WITHOUTBIND3").setVisible(true);

				this.getView().byId("BIND4").setVisible(false);
				this.getView().byId("WITHOUTBIND4").setVisible(true);

				this.getView().byId("BIND5").setVisible(false);
				this.getView().byId("WITHOUTBIND5").setVisible(true);

				// this.getView().byId("BIND6").setVisible(false);
				// this.getView().byId("WITHOUTBIND6").setVisible(true);

				this.getView().byId("BIND7").setVisible(false);
				this.getView().byId("WITHOUTBIND7").setVisible(true);

				this.getView().byId("BIND8").setVisible(false);
				this.getView().byId("WITHOUTBIND8").setVisible(true);

			//	this.getView().byId("UploadCollection").setVisible(true);
			this.getView().byId("UploadCollection1").setMode("Delete");

				var functech = this.getView().byId("functechBind1").getValue();
				this.getView().byId("functech").setValue(functech);

				var equip = this.getView().byId("equipBind1").getValue();
				this.getView().byId("equip").setValue(equip);

				var textArea = this.getView().byId("textAreaBind2").getValue();
				this.getView().byId("textArea").setValue(textArea);

				var lngText = this.getView().byId("lngTextBind2").getValue();
				this.getView().byId("lngText").setValue(lngText);

				var plnGrp = this.getView().byId("plnGrpBind3").getValue();
				this.getView().byId("plnGrp").setValue(plnGrp);

				var mWrkctr = this.getView().byId("mWrkctrBind3").getValue();
				this.getView().byId("mWrkctr").setValue(mWrkctr);

				var pmActype = this.getView().byId("pmActypeBind3").getValue();

				this.getView().byId("pmActype").setValue(pmActype);

				var priority = this.getView().byId("priorityBind4").getValue();
				this.getView().byId("priority").setValue(priority);

				var startDate = this.getView().byId("startDateBind4").getValue();
				this.getView().byId("startDate").setValue(startDate);

				var finishDate = this.getView().byId("finishDateBind4").getValue();
				this.getView().byId("finishDate").setValue(finishDate);

				this.priorityChange();

				var orderType = this.getView().byId("orderTypeBind5").getValue();
				this.getView().byId("orderType").setValue(orderType);

				var planPlant = this.getView().byId("planPlantBind5").getValue();
				this.getView().byId("combo4").setValue(planPlant);

				var userstat = this.getView().byId("userstatBind5").getValue();
				this.getView().byId("userstat").setValue(userstat);

				var personResp = this.getView().byId("personResBind5").getValue();
				this.getView().byId("personRes").setValue(personResp);

				this.getView().byId("editButton").setVisible(false);
				this.getView().byId("createButton").setVisible(false);

				this.getView().byId("saveButton").setVisible(true);
				this.getView().byId("cancelButton").setVisible(true);
				this.getView().byId("ci_fileUploader1").setVisible(true);
				this.getView().byId("operAddButton").setEnabled(true);
				this.getView().byId("compAddButton").setEnabled(true);

				this.workNewBind();
				this.personResp();

				var that = this;
				if (that.stat === "Created") {
					// that.getView().byId("editButton").setVisible(true);
					that.getView().byId("releaseButton").setVisible(true);
					// that.getView().byId("cancelButton").setVisible(false);
				} else if (that.stat === "Released") {
					// that.getView().byId("editButton").setVisible(true);
					that.getView().byId("tecoButton").setVisible(true);
					// that.getView().byId("cancelButton").setVisible(false);
				} else if (that.stat === "Technically completed") {
					// that.getView().byId("editButton").setVisible(true);
					that.getView().byId("closeButton").setVisible(true);
					// that.getView().byId("cancelButton").setVisible(false);

					this.getView().byId("BIND1").setVisible(true);
					this.getView().byId("WITHOUTBIND1").setVisible(false);

					this.getView().byId("BIND2").setVisible(true);
					this.getView().byId("WITHOUTBIND2").setVisible(false);

					this.getView().byId("BIND3").setVisible(true);
					this.getView().byId("WITHOUTBIND3").setVisible(false);

					this.getView().byId("BIND4").setVisible(true);
					this.getView().byId("WITHOUTBIND4").setVisible(false);

					this.getView().byId("BIND5").setVisible(true);
					this.getView().byId("WITHOUTBIND5").setVisible(false);

					this.getView().byId("BIND7").setVisible(true);
					this.getView().byId("WITHOUTBIND7").setVisible(false);

					this.getView().byId("BIND8").setVisible(true);
					this.getView().byId("WITHOUTBIND8").setVisible(false);

				} else if (that.stat === "Closed") {
					that.getView().byId("editButton").setVisible(false);
					that.getView().byId("saveButton").setVisible(false);
					that.getView().byId("cancelButton").setVisible(false);

				} else {

					var none = "None";
					that.getView().getModel("oGlobalModel").setProperty("/modeDelete", none);

				}

			},
			workNewBind: function () {

				var that = this;
				var workCenter = that.getView().byId("wkCombo");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				oModel.read('/WorkCenterF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						// debugger;
						var PersonListModel = new JSONModel(oData);
						that.getView().byId("wkCombo").setModel(PersonListModel, "PersonListModel");

					}

				});

			},
			// priorFun: function () {

			// 	var priorChange = this.getView().byId("priority").getValue();
			// 	debugger;
			// 	var priority;

			// 	if (priorChange === 'Very High') {
			// 		priority = 'VERY_HIGH';

			// 	} else if (priorChange === 'High') {
			// 		priority = 'HIGH';
			// 	} else if (priorChange === 'Meduim') {
			// 		priority = 'MEDIUM';
			// 	} else if (priorChange === 'Low') {
			// 		priority = 'LOW';
			// 	}

			// 	var sPath = "/PriorityF4Set?$filter=PriorityText eq '" + priority + "'";
			// 	var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
			// 	var oController = this
			// 	oModel.read(sPath, {
			// 		success: function (oData, oResponse) {
			// 			// console.log("oData", oData)
			// 			var count = oData.results.length();
			// 			debugger;
			// 			oController.getView().byId("startDate").setValue(oData.results[0].RequiredStartDate);
			// 			oController.getView().byId("finishDate").setValue(oData.results[0].RequiredEndDate);

			// 			var oModel = oController.getView().getModel();
			// 			oModel.setProperty(sPath, oData);

			// 		},
			// 	});

			// },
			busyDialogFun: function () {
				// var busyDialog = this.byId("BusyDialog");
				// debugger;
				this.busyDialog.open();

				jQuery.sap.delayedCall(3000, this, function () {
					this.busyDialog.close();
				});
			},
			DMS: function () {

				this.ci_att1Post = this.getView().getModel("oGlobalModel").getProperty("/ci_att1");

				var oUploadCollection = this.getView().byId("UploadCollection");

				

				var that = this;
				that.arr142 = [];
				that.arrp = [];
				if(that.ci_att1Post === undefined){
					window.location.reload();
				}
				else{
				var count = that.ci_att1Post.length;
				
				

				for (var i = 0; i < count; i++) {
					var dmsdata = {
						"DocType": that.ci_att1Post[i].Ext,
						"FileName": that.ci_att1Post[i].Name,
						"Base64": that.ci_att1Post[i].Base64

					};
					that.arr142.push(dmsdata);
				}
				var obj = {
					"d": {
						"ProcessName": "Create Work Order", //WorkOrder
						"Description": that.descrip1,
						"Username": "", //Login User
						"NotificationNo": that.workOrd,
						"To_DMSItems": that.arr142
					}
				};
				that.arrp.push(obj);
				// debugger;

				var oModel142 = new ODataModel("/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/", true);
				var sPath = "/DMS_HeaderSet";

				oModel142.create(sPath, obj, {
					success: function (oData, oResponse) {

						var msg = oData.ReturnMessage;
						// debugger;
						var typ = oData.ReturnType;

						if (typ == "S") {

							MessageToast.show(msg);
						} else {
							MessageToast.show(msg);
						}

					},
					error: function (oData, oResponse) {
						MessageToast.show("Service URL Error");
					}

				});
				window.location.reload();
				}

			},

			priorityChange: function () {

				var priorChange = this.getView().byId("priority").getValue();

				var priority;

				if (priorChange == 'Very High') {
					priority = 'VERY_HIGH';

				} else if (priorChange == 'High') {
					priority = 'HIGH';
				} else if (priorChange == 'Medium') {
					priority = 'MEDIUM';
				} else if (priorChange == 'Low') {
					priority = 'LOW';
				}

				var sPath = "/PriorityF4Set?$filter=PriorityText eq '" + priority + "'";
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV/', true);
				var oController = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						console.log("oData", oData)

						// oController.getView().byId("startDate").setValue(oData.results[0].RequiredStartDate);
						// oController.getView().byId("finishDate").setValue(oData.results[0].RequiredEndDate);

						var oModel = oController.getView().getModel();
						oModel.setProperty(sPath, oData);

					}
				});

			},

			savePress: function (oEvent) {

				var that = this;
				that.operaPostItems = [];
				that.compoPostItems = [];
				that.operationsPostFinal = [];
				that.componentPostFinal = [];
				var func = that.getView().byId("functech").getValue();
				var SplitTotal = func.split(" ");
				var functech = SplitTotal[0];

				var equipm = that.getView().byId("equip").getValue();
				var SplitTotal = equipm.split(" ");
				var equip = SplitTotal[0];

				var textArea = that.getView().byId("textArea").getValue();
				var lngText = that.getView().byId("lngText").getValue();
				// alert(lngText);
				var plnGrp = that.getView().byId("plnGrp").getValue();
				var SplitTotal = plnGrp.split(" ");
				var plnGrp1 = SplitTotal[0];

				var mWrk = that.getView().byId("mWrkctr").getValue();
				var SplitTotalFoot = mWrk.split(" ");
				var mWrkctr = SplitTotalFoot[0];

				var priority = that.getView().byId("priority").getValue();

				if (priority === "Very High") {
					var prityPost = "1";
				} else if (priority === "High") {
					prityPost = "2";
				} else if (priority === "Medium") {
					prityPost = "3";
				} else if (priority === "Low") {
					prityPost = "4";
				}

				var startDate = that.getView().byId("startDate").getValue();

				var finishDate = that.getView().byId("finishDate").getValue();

				var yy1 = startDate.slice(6, 10);

				var mm1 = startDate.slice(3, 5);

				var dat1 = startDate.slice(0, 2);

				var startDatePost = yy1 + mm1 + dat1;

				var yy1 = finishDate.slice(6, 10);

				var mm1 = finishDate.slice(3, 5);

				var dat1 = finishDate.slice(0, 2);

				var finishDatePost = yy1 + mm1 + dat1;

				var planPlant = that.getView().byId("combo4").getValue();
				var split = planPlant.split(" ");
				var plant = split[0];

				var pmActypePost = that.getView().byId("pmActype").getValue();
				var pmacty = pmActypePost.split(" ");
				var pmac = pmacty[0];

				var orderType = that.getView().byId("orderType").getValue();
				var SplitTotalFoot = orderType.split(" ");
				var orderType = SplitTotalFoot[0];

				var assignTask = that.getView().byId("assignTask").getValue();
				var existNotification = that.getView().byId("existNotification").getSelectedKey();
				var user = that.getView().byId("userstat").getValue();
				var SplitTotal = user.split("-");
				var userstat = SplitTotal[0];
				//	alert(userstat);

				var personRes = that.getView().byId("personRes").getValue();
				var SplitTotal = personRes.split("-");
				var personResp = SplitTotal[0];

				var optab = this.getView().byId("optab");
				var rowlen = optab.getItems().length;

				// debugger;
				for (var i = 0; i < rowlen; i++) {

					var operation = optab.getItems()[i].getCells()[0].getValue();
					var descrip = optab.getItems()[i].getCells()[1].getValue();
					var workcen = optab.getItems()[i].getCells()[2].getValue();
					var plantOper = optab.getItems()[i].getCells()[3].getValue();
					var controlKey = optab.getItems()[i].getCells()[4].getValue();
					var duration = optab.getItems()[i].getCells()[5].getValue();
					var respPerson = optab.getItems()[i].getCells()[8].getValue();

					var obj1 = {

						Number: that.workOrd, // "821610",
						Operation: operation, //"0020",
						Description: descrip, //"Maintanence Part",
						WorkCenter: workcen, //"MECHANIK",
						ControlKey: controlKey,
						ActType: pmac, //"1410",
						Respperson: respPerson,
						Plant: plantOper, //"1000",
						Duration: duration,
						DeleteFlag: ""
					};
					that.operaPostItems.push(obj1);
					// that.newArray1.push(obj1);

				}

				that.operationsPostFinal = that.operaPostItems.concat(that.newArray1);

				// debugger;
				var compsTab = this.getView().byId("compsTab");
				var rowlen = compsTab.getItems().length;

				for (var i = 0; i < rowlen; i++) {

					var itemno = compsTab.getItems()[i].getCells()[0].getValue();
					var operationCompo = compsTab.getItems()[i].getCells()[1].getValue();
					var matNum = compsTab.getItems()[i].getCells()[2].getValue();
					var matDesc = compsTab.getItems()[i].getCells()[3].getValue();
					var storLoc = compsTab.getItems()[i].getCells()[4].getValue();
					var itemCat = compsTab.getItems()[i].getCells()[5].getValue();
					var reqQty = compsTab.getItems()[i].getCells()[6].getValue();
					var unitM = compsTab.getItems()[i].getCells()[7].getValue();
					var avail = compsTab.getItems()[i].getCells()[8].getValue();
					// var deleteFlag = compsTab.getItems()[i].getCells()[9].getValue();

					var objz = {

						Item: itemno,
						Operation: operationCompo, //"0020",
						MaterialNo: matNum, //"TEST",
						MatDesc: matDesc, //"TEST",
						ReqQty: reqQty, //"250",
						uom: unitM,
						StorageLoc: storLoc,
						Number: that.workOrd,
						ItemCat: itemCat,
						DeleteFlag: ""
					};

					that.compoPostItems.push(objz);
				} // For loop Closed

				that.componentPostFinal = that.compoPostItems.concat(that.newArray2);

				that.busyDialogFun();
				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want to save the changes?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information Message",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								that.busyDialogFun();
								var mess;
								that.oModel3 = new sap.ui.model.odata.ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);

								var postdata = {

									Number: that.workOrd, //"821610",
									OrderType: orderType, //"PM01",
									Planplant: plant, //"1000",
									MnWkCtr: mWrkctr, //"MECHANIK",
									Plant: plant, //"1000",
									Pmacttype: pmac,
									Plangroup: plnGrp1, //"100",
									FunctLoc: functech,
									Equipment: equip,
									Assembly: "",
									Plsectn: "",
									StartDate: startDatePost, // "2019-08-14T00:00:00",
									FinishDate: finishDatePost, // "2019-08-14T00:00:00",
									UserSt: userstat,
									ShortText: textArea, // "Maintanence Part",
									LongText: lngText,
									NotifNo: existNotification,
									Type: "",
									Message: "",
									Priority: prityPost, //"",
									PriorityText: "",
									Resperson: personResp,
									CHToOperation: that.operationsPostFinal, // that.operaPostItems, //that.newArray1, //
									CHToComponent: that.componentPostFinal
								};

								console.log(postdata);
								var sPath = "/WorkOrderHeaderSet";
								// debugger;
								that.oModel3.create(sPath, postdata, {
									success: function (oData, oResponse) {
										that.busyDialogFun();
										var msg1 = oData.Message;
										var typ = oData.Type;
										// debugger;
										that.descrip1 = postdata.ShortText;
										/*that.ci_att1 = that.getView().byId("UploadCollection1").getItems().length;

										if (that.ci_att1 == '0') {

											// window.location.reload();
										} else {

											that.DMS();
											// window.location.reload();
										}*/
										if (typ == "S") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {
														
														that.ci_att1 = that.getView().byId("UploadCollection1").getItems().length;
														
														if(that.ci_att1 === '0'){
														that._onCloseButtonPress();
														// that.cancelP();
														that.newArray1 = [];
														window.location.reload();
														}
														else{
															that.ci_att1 = that.getView().byId("UploadCollection1").getItems().length;

															if (that.ci_att1 === undefined) {
																window.location.reload();
															} else {
																that.DMS();
															}
														}
													}
												}.bind(this)
											});
											console.log("oResponse", oResponse)
										} else if (typ == "E") {

											sap.m.MessageBox.confirm(msg1, {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "Error",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that.newArray1 = [];
														// that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										} else {

											sap.m.MessageBox.confirm("ERROR", {
												icon: sap.m.MessageBox.Icon.ERROR,
												title: "ERROR",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {
													//
													if (oAction == "OK") {
														that._onCloseButtonPress();
														// window.location.reload();
													}
												}.bind(this)
											});

										}

									},
									error: function (oData, oResponse) {

										/*sap.m.MessageBox.confirm("Service URL Error", {
											icon: sap.m.MessageBox.Icon.ERROR,
											title: "Error",
											actions: [sap.m.MessageBox.Action.OK],

											onClose: function (oAction) {

												if (oAction == "OK") {
													that._onCloseButtonPress();
													that.cancelPress1();
													window.location.reload();
												}
											}.bind(this)
										});*/

									}

								});
								//console.log("oResponse2", oResponse)
							} else if (oAction == "NO") {

							}
						}
					});

				/*	this.getView().byId("editButton").setVisible(true);
			this.getView().byId("createButton").setVisible(true);

			this.getView().byId("saveButton").setVisible(false);
			this.getView().byId("cancelButton").setVisible(false);
*/
				// }

			},

			cancelPress1: function () {
				var that = this;

				// this.getView().byId("tableEdit").setVisible(false);
				// this.getView().byId("tableAdd").setVisible(false);
				// debugger;
				that._listout = "X";
				that.getView().getModel("oGlobalModel").setProperty("/listpress", this._listout);

				that.getView().byId("BIND1").setVisible(true);
				that.getView().byId("WITHOUTBIND1").setVisible(false);

				that.getView().byId("BIND2").setVisible(true);
				that.getView().byId("WITHOUTBIND2").setVisible(false);

				that.getView().byId("BIND3").setVisible(true);
				that.getView().byId("WITHOUTBIND3").setVisible(false);

				that.getView().byId("BIND4").setVisible(true);
				that.getView().byId("WITHOUTBIND4").setVisible(false);
				that.getView().byId("BIND5").setVisible(true);
				that.getView().byId("WITHOUTBIND5").setVisible(false);

			/*	that.getView().byId("BIND6").setVisible(true);
				that.getView().byId("WITHOUTBIND6").setVisible(false);*/

				that.getView().byId("BIND7").setVisible(true);
				that.getView().byId("WITHOUTBIND7").setVisible(false);

				that.getView().byId("BIND8").setVisible(true);
				that.getView().byId("WITHOUTBIND8").setVisible(false);

				that.getView().byId("editButton").setVisible(true);
				// oCont.getView().byId("createButton").setVisible(true);

				that.getView().byId("saveButton").setVisible(false);
				that.getView().byId("cancelButton").setVisible(false);

				that.getView().byId("ci_fileUploader1").setVisible(false);
				that.getView().byId("operAddButton").setEnabled(false);
				that.getView().byId("compAddButton").setEnabled(false);

				// if (that.stat === "Closed") {
				// that.getView().byId("editButton").setVisible(false);
				// that.getView().byId("saveButton").setVisible(false);
				// that.getView().byId("cancelButton").setVisible(false);

				that.getView().byId("createButton").setVisible(false);
				that.getView().byId("releaseButton").setVisible(false);
				that.getView().byId("tecoButton").setVisible(false);
				that.getView().byId("closeButton").setVisible(false);
				// } else {
				// 	that.getView().byId("editButton").setVisible(true);
				// 	that.getView().byId("saveButton").setVisible(false);
				// 	that.getView().byId("cancelButton").setVisible(false);
				// }
			},
			createPress: function () {

				sap.m.URLHelper.redirect(
					"https://createworkorderv2-ba293bd41.dispatcher.us1.hana.ondemand.com/webapp/test/testFLPService.html?hc_reset#BUILD-prototype"
				);

			},
			cancelPress: function () {

				var that = this;

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want to cancel the changes?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {
									that.getView().byId("editButton").setVisible(true);
								that.getView().byId("saveButton").setVisible(false);
								that.getView().byId("cancelButton").setVisible(false);
								that._listout = "X";
								that.getView().getModel("oGlobalModel").setProperty("/listpress", this._listout);

								var none = "None";
								that.getView().getModel("oGlobalModel").setProperty("/modeDelete", none);

								that.getView().byId("BIND1").setVisible(true);
								that.getView().byId("WITHOUTBIND1").setVisible(false);

								that.getView().byId("BIND2").setVisible(true);
								that.getView().byId("WITHOUTBIND2").setVisible(false);

								that.getView().byId("BIND3").setVisible(true);
								that.getView().byId("WITHOUTBIND3").setVisible(false);

								that.getView().byId("BIND4").setVisible(true);
								that.getView().byId("WITHOUTBIND4").setVisible(false);
								that.getView().byId("BIND5").setVisible(true);
								that.getView().byId("WITHOUTBIND5").setVisible(false);

							/*	that.getView().byId("BIND6").setVisible(true);
								that.getView().byId("WITHOUTBIND6").setVisible(false);*/

								that.getView().byId("BIND7").setVisible(true);
								that.getView().byId("WITHOUTBIND7").setVisible(false);

								that.getView().byId("BIND8").setVisible(true);
								that.getView().byId("WITHOUTBIND8").setVisible(false);

							

								that.getView().byId("ci_fileUploader1").setVisible(false);
								that.getView().byId("operAddButton").setEnabled(false);
								that.getView().byId("compAddButton").setEnabled(false);
								that.resetValues();
								that.operationsBind();
								that.componentsBind();

								var uploadList = that.getView().byId("UploadCollection");

								uploadList.destroyItems();
								uploadList.setVisible(false);
								that.baseval = [];
								that.ci_att1 = [];
								that.ci_att1Post = [];
								that.arr142 = [];
								that.arrp = [];

								if (that.stat === "Created") {
									// that.getView().byId("editButton").setVisible(true);
									that.getView().byId("releaseButton").setVisible(false);
									// that.getView().byId("cancelButton").setVisible(false);
								} else if (that.stat === "Released") {
									// that.getView().byId("editButton").setVisible(true);
									that.getView().byId("tecoButton").setVisible(false);
									// that.getView().byId("cancelButton").setVisible(false);
								} else if (that.stat === "Technically completed") {
									// that.getView().byId("editButton").setVisible(true);
									that.getView().byId("closeButton").setVisible(false);
									// that.getView().byId("cancelButton").setVisible(false);

								} else {

								}
							} else if (oAction == "NO") {

								var del = "Delete";
								that.getView().getModel("oGlobalModel").setProperty("/modeDelete", del);

							}
						}
					});

			},
			resetValues: function () {
				var that = this;
				that.getView().byId("functech").setEditable(true);
				that.getView().byId("plnGrp").setEditable(true);
				that.getView().byId("mWrkctr").setEditable(true);
				that.getView().byId("combo4").setEditable(true);
			},
			show: function () { //start of function for reading DMS data from BE & display in list

				this.ci_att11 = [];
				this.showatt = this.getView().byId("UploadCollection1");
				var sPath = "/DMSListSet?$filter=ILoginUser eq ' ' and IProcess eq 'Create Work Order' and IMaintId eq '" + this.workOrd +
					"'"; //" + this.workOrd	"
				// debugger;

				var oModeli = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', this);

				var that = this;
				oModeli.read(sPath, {
					success: function (oData, oResponse) {
						// debugger;
						var len1 = oData.results.length;
						console.log("Documents Odata: ", oData);
						for (var i = 0; i < len1; i++) {
							/*	that.FileName = oData.results[i].FileName;
								that.FileExt = oData.results[i].FileExt;
								that.docnum = oData.results[i].DocNumber;*/
							// var DocDesc = oData.results[i].DocNumber;
							/*	var login = oData.results[i].ILoginUser;
								var process = oData.results[i].IProcess;*/
							that.FileName = oData.results[i].FileName;
							that.FileExt = oData.results[i].FileExt;
							that.docnum = oData.results[i].DocNumber;
							that.doctyp = oData.results[i].DocType;
							that.docversion = oData.results[i].DocVersion;
							that.docpart = oData.results[i].DocumentPart;

							that.logical = oData.results[i].LogicalDocument;
							that.physical = oData.results[i].PhysicalDocument;

							var ci_obj1 = {

								Name: that.FileName,
								Ext: that.FileExt,
								Doc: that.docnum,
								Typ: that.doctyp,
								Version: that.docversion,
								Part: that.docpart,
								Logical: that.logical,
								Physical: that.physical
							};
							that.ci_att11.push(ci_obj1);

						} //For Loop End
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active"
						});
						that.showatt.bindItems("/", oItems);
						var aModel = new sap.ui.model.json.JSONModel(that.ci_att11);
						console.log(that.ci_att11);

						that.showatt.setModel(aModel);

					}
				});
			}, //end of function for reading DMS data from BE & display in list
			operationsBind: function () {

				var that = this;
				arr31 = [];
				var taskTable = this.getView().byId("optab");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/WOperationSet";
				// debugger;
				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, this.workOrd)], //"K1-B01-1")],

					success: function (oData, oResponse) {
						var count = oData.results.length;

						for (var i = 0; i < count; i++) {
							// debugger;

							var operation = oData.results[i].Operation;

							var description = oData.results[i].Description;
							var workcenter = oData.results[i].WorkCenter;
							var Plant = oData.results[i].Plant;
							var ControlKey = oData.results[i].ControlKey;
							var Duration = oData.results[i].Duration;
							var DeleteFlag = oData.results[i].DeleteFlag;
							var RespPerson = oData.results[i].Respperson;
							var obj1 = {
								// opera: operation,
								// descrp: description,
								// workcen: workcenter,
								// Plant: Plant,
								// controlKey: ControlKey,
								// duration: Duration,
								// DeleteFlag: DeleteFlag

								// Number: that.workOrd, // "821610",
								Operation: operation, //"0020",
								Description: description, //"Maintanence Part",
								WorkCenter: workcenter, //"MECHANIK",
								ControlKey: ControlKey,
								ActType: that.pmActype, //"1410",
								Respperson: RespPerson,
								Plant: Plant, //"1000",
								Duration: Duration,
								DeleteFlag: ""

							};

							arr31.push(obj1);

							oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
							oModelccd.setData({ // Set the data to the model using the JSON object defined already  
								arr32: arr31

							});
						}
						// var that = this;
						taskTable.setModel(oModelccd);
						// var titems1 = new sap.m.ColumnListItem({
						// 	press: function (oArg) {
						// 		that._onRowPress(oArg);
						// 	},
						// 	cells: [
						// 		new sap.m.Input({
						// 			value: "{Operation}",
						// 			maxLength: 4,
						// 			editable: false
						// 		}),
						// 		new sap.m.Input({
						// 			value: "{Description}",
						// 			maxLength: 30
						// 		}),
						// 		new sap.m.Input({
						// 			value: "{WorkCenter}",
						// 			maxLength: 18
						// 		}),
						// 		/*	new sap.m.ComboBox("wkCombo", {
						// 				value: "{WorkCenter}",
						// 				maxLength: 18
						// 			}),*/
						// 		new sap.m.Input({
						// 			value: "{Plant}",
						// 			maxLength: 4
						// 		}),
						// 		new sap.m.Input({
						// 			value: "{ControlKey}",
						// 			maxLength: 4
						// 		}),
						// 		new sap.m.Input({
						// 			value: "{Duration}",
						// 			maxLength: 5
						// 		}),
						// 		// new sap.m.Input({
						// 		// 	value: {
						// 		// 		type: 'sap.ui.model.type.Number',
						// 		// 		path: "Duration",
						// 		// 		constraints: {
						// 		// 			maxLength: 2,
						// 		// 			minLength: 1
						// 		// 		}
						// 		// 	}
						// 		// }),
						// 		new sap.m.Input({
						// 			value: "{DeleteFlag}",
						// 			visible: false
						// 		}),

						// 		new sap.m.Button({
						// 			icon: "sap-icon://delete",
						// 			text: "",
						// 			type: sap.m.ButtonType.Transparent,
						// 			press: function (oArg) {
						// 				that.operaDelEdit(oArg);
						// 			}
						// 		})
						// 	]
						// });

						// taskTable.bindItems("/arr32", titems1);
						that.workNewBind();
					},

					error: function (oData, oResponse) {

					}
				});

			},

			operaDelEdit: function (oArg) {

				var obj = {};
				var that = this;
				var deleArray = [];
				var oTab = this.getView().byId("optab");
				var oleng = oTab.getItems().length;
				if (oleng == 1) {
					jQuery.sap.require("sap.m.MessageBox");
					sap.m.MessageBox.alert("Last active operation cannot be deleted", {
						title: "Information",
						onClose: null
					});
				} else {
					var cTab = this.getView().byId("compsTab");
					var value = oArg.getSource().getParent().getBindingContext().getPath();
					var valueind = value.split("/");
					that.index = valueind[2];

					var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);

					var Data = list_ID.getModel();

					var d = Data.getData();

					obj = d.arr32.slice(that.index);

					var oper = obj[0].Operation;

					var leng = cTab.getItems().length;
					// debugger;

					for (var i = 0; i < leng; i++) {
						var odelComp = cTab.getItems()[i].getCells()[1].getValue();
						// var odelComp = that.arrComp[i].Operation;
						if (odelComp == oper) {
							deleArray.push(odelComp);
							var length12 = deleArray.length;
						}

					}

					if (length12 == undefined) {
						// that.value = oArg.getSource().getBindingContext().getObject();
						var pmActyp = that.getView().byId("pmActype").getValue();
						obj[0].DeleteFlag = "X";
						obj[0].Number = that.workOrd;
						obj[0].ActType = pmActyp;
						var objArray = Object.assign({}, obj);
						that.newArray1.push(objArray[0]);
						console.log(that.newArray1);
						d.arr32.splice(that.index, 1);
						Data.setData(d);
						that.taskNumber();
					} else {
						var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
						MessageBox.warning(
							"Delete " + oper + " operation in component table", {
								styleClass: bCompact ? "sapUiSizeCompact" : ""
							}
						);
					}
				}
			},

			deleteFun: function (oEvent) {
				// debugger;
				// var m = oEvent.getSource().getParent();
				var tbl = this.getView().byId("compsTab");

				// var idx = m.getBindingContextPath();
				var that = this;
				if (that.deleteInd !== -1) {
					var a = tbl.getModel();
					var data = a.getData();
					var removed = data.arr42.splice(that.deleteInd, 1);
					a.setData(data);

				}

			},

			componentsBind: function () {
				var that = this;
				var arr41 = [];
				var compsTable = this.getView().byId("compsTab");
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/", true);
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/WComponentSet";

				oModel.read(sPath, {
					filters: [new sap.ui.model.Filter("Number", sap.ui.model.FilterOperator.EQ, this.workOrd),
						new sap.ui.model.Filter("Plant", sap.ui.model.FilterOperator.EQ, that.Plant)
					], //"K1-B01-1")],

					success: function (oData, oResponse) {
						var Count = oData.results.length;

						for (var i = 0; i < Count; i++) {
							var item = oData.results[i].Item;
							var operation = oData.results[i].Operation;

							var MatDesc = oData.results[i].MatDesc;
							var ItemCat = oData.results[i].ItemCat;

							var ReqQty = oData.results[i].ReqQty;
							var uom = oData.results[i].uom;
							var MatNum = oData.results[i].MaterialNo;
							var storLoc = oData.results[i].StorageLoc;
							var AvailableQuantity = oData.results[i].AvailableQuantity;
							var DeleteFlag = oData.results[i].DeleteFlag;

							var obj1 = {
								Item: item,
								Operation: operation,
								MaterialNo: MatNum,
								MatDesc: MatDesc,
								StorageLoc: storLoc,
								ItemCat: ItemCat,
								ReqQty: ReqQty,
								uom: uom,
								AvailableQuantity: AvailableQuantity,
								DeleteFlag: DeleteFlag

							};

							/*	if (ItemCat==='N'){
					
					that.getView().byId("StockButton").setVisible(true);
					alert("success2")
					
				} else if (ItemCat==='L'){
					
					that.getView().byId("StockButton").setVisible(false);
						alert("error2")
				}*/

							arr41.push(obj1);

							oModelccd = new sap.ui.model.json.JSONModel(); // created a JSON model        
							oModelccd.setData({ // Set the data to the model using the JSON object defined already  
								arr42: arr41

							});
						}

						compsTable.setModel(oModelccd);
						var titems1 = new sap.m.ColumnListItem({

							cells: [new sap.m.Input({
									value: "{Item}",
									maxLength: 4,
									editable: false
								}), new sap.m.Input({
									value: "{Operation}",
									maxLength: 4,
									editable: false
								}), new sap.m.Input({
									value: "{MaterialNo}",
									width: "120%"
								}), new sap.m.Input({
									value: "{MatDesc}",
									width: "120%"
								}), new sap.m.Input({
									value: "{StorageLoc}",
									maxLength: 4
								}), new sap.m.Input({
									value: "{ItemCat}",
									maxLength: 1
								}), new sap.m.Input({
									value: "{ReqQty}"
								}), new sap.m.Input({
									value: "{uom}",
									maxLength: 3
								}), new sap.m.Input({
									value: "{AvailableQuantity}",
									width: "120%"
								}),
								new sap.m.Input({
									value: "{DeleteFlag}",
									visible: false
								}),
								new sap.m.Button({
									icon: "sap-icon://delete",
									text: "",
									type: sap.m.ButtonType.Transparent,
									press: function (oArg) {
										that.compDelEdit(oArg);
									}
								})
								/*	new sap.m.Button({
										icon: "sap-icon://create-form",
										text: "",
										type: sap.m.ButtonType.Emphasized,
										press: function (oArg) {

											that.handleResponsivePopoverPress2(oArg);

										},
										width: "auto"
									})*/

							]
						});

						compsTable.bindItems("/arr42", titems1);

					},

					error: function (oData, oResponse) {

					}
				});

			},

			compDelEdit: function (oArg) {

				var obj = {};
				var that = this;
				// debugger;
				// var tabellength = that.getView().byId("optab").getItems();
				var value = oArg.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				that.index = valueind[2];
				var list_ID = sap.ui.getCore().byId(oArg.getSource().sId);
				var Data = list_ID.getModel();
				var d = Data.getData();

				var d = Data.getData();
				obj = d.arr42.slice(that.index);
				obj[0].DeleteFlag = "X";
				obj[0].Number = that.workOrd;
				var objArray = Object.assign({}, obj);
				that.newArray2.push(objArray[0]);

				d.arr42.splice(that.index, 1);
				Data.setData(d);

			},
			planGrpChange: function () {

			},

			techObjHis: function () {
				//alert("techobjHist2");

				var that = this;
				that.arrTechObj = [];

				that.funlocation1 = this.getView().getModel("oGlobalModel").getProperty("/functionallocation");
				console.log("that.funlocation1", that.funlocation1);

				// var funLoc1 = that.getView().byId("functechBind1").getValue();
				// alert(funLoc1);
				// var funLo = funLoc1.split(" ");
				// var FunLoc = funLo[0];
				// alert(FunLoc);
				// debugger;

				var table = that.getView().byId("objHisTable");
				var oModel = new ODataModel("/sap/opu/odata/sap/zpm_f4_srv/", true);
				// ofilters = [new sap.ui.model.Filter("FunctionLoc", sap.ui.model.FilterOperator.EQ, that.funlocation1)];
				oModelJson = new sap.ui.model.json.JSONModel();
				var sPath = "/NotificationListSet";
				ofilters = [new sap.ui.model.Filter("FunctionalLocation", sap.ui.model.FilterOperator.EQ, that.funlocation1),
					new sap.ui.model.Filter("Last5Records", sap.ui.model.FilterOperator.EQ, "X")
				];

				oModel.read(sPath, {

					filters: ofilters,

					success: function (oData, oResponse) {

						//alert("success");

						var count = oData.results.length;
						console.log("count", count);
						// debugger;

						for (var i = 0; i < count; i++) {
							//alert("forloop");

							var Notification = oData.results[i].Notification;
							var createdDate = oData.results[i].createdDate;

							var year = createdDate.slice(0, 4);
							var month = createdDate.slice(4, 6);
							var date = createdDate.slice(6, 8);
							var NotifDateTech = date + '.' + month + '.' + year;

							var NotificationDes = oData.results[i].NotificationDes;
							var FunctionalLocation = oData.results[i].FunctionalLocation;
							var Order = oData.results[i].Order;
							var EquipmentNumber = oData.results[i].EquipmentNumber;
							var Equipment = EquipmentNumber.slice(8, 18);
							var PriorityText = oData.results[i].PriorityText;

							var priority11 = "Success";

							var priority22 = "Warning";

							var priority33 = "Error";
							var priorityState;
							if (PriorityText === 'Very High') {

								priorityState = priority33;
							} else if (PriorityText === 'High') {
								priorityState = priority33;
							} else if (PriorityText === 'Medium') {
								priorityState = priority22;
							} else if (PriorityText === 'Low') {
								priorityState = priority11;
							}

							var obj1 = {
								notifNo: Notification,
								OrderNo: Order,
								notifDateTech: NotifDateTech,
								description: NotificationDes,
								functionLoc: FunctionalLocation,
								Equipment: Equipment,
								priorityText: PriorityText,
								priorityState: priorityState

							};
							that.arrTechObj.push(obj1);
							console.log("that.arrTechObj", that.arrTechObj)

						}
						var oModelccd2 = new sap.ui.model.json.JSONModel(); // created a JSON model        
						oModelccd2.setData({ // Set the data to the model using the JSON object defined already  
							listdata: that.arrTechObj

						});
						table.setModel(oModelccd2);
						// table.bindItems("/results", oModelJson);

					}.bind(this),

				});

			},

			render: function () {

				var tableLength = this.getView().byId("objHisTable");
				var oFirstItem = tableLength.getItems().length;

				// console.log("oFirstItem :", oFirstItem1);
				this.byId("counttable").setText("Items (" + oFirstItem + ")");

			},

			ci_handleDelete: function (oEvent) { //start of function for deleting fileAttachment from array
				this.docnumber = oEvent.getParameter("listItem").getBindingContext().getProperty().Doc;
				this.doctyp = oEvent.getParameter("listItem").getBindingContext().getProperty().Typ;
				this.docversion = oEvent.getParameter("listItem").getBindingContext().getProperty().Version;
				this.docpart = oEvent.getParameter("listItem").getBindingContext().getProperty().Part;
				this.logdoc = oEvent.getParameter("listItem").getBindingContext().getProperty().Logical;
				this.phydoc = oEvent.getParameter("listItem").getBindingContext().getProperty().Physical;
				this.filename1 = oEvent.getParameter("listItem").getBindingContext().getProperty().Name;
				this.fileext = oEvent.getParameter("listItem").getBindingContext().getProperty().Ext;
				this.Original = this.filename1 + "." + this.fileext;

				var path = oEvent.getParameter('listItem').getBindingContext().getPath();
				var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
				var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want to delete the attachment?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								var Data = list_ID.getModel();

								var d = Data.getData();
								d.splice(idx, 1);
								Data.setData(d);

								var postdata = {
									"DocumentNumber": this.docnumber,
									"DocumentType": this.doctyp,
									"DocumentPart": this.docpart,
									"DocumentVersion": this.docversion,
									"ToOrignalDoc": [{
										"Application": "",
										"OriginalOfDocument": this.Original,
										"LogicalDocument": this.logdoc,
										"PhysicalDocument": this.phydoc,
										"DeleteFlag": "X"
									}],
									"ToReturn": [{
										"Type": "",
										"Message": "",
										"OutputNumber": "",
									}]
								};

								var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZDMS_ATTACHEMENT_SRV', true);
								var sPath = "/DMSHeaderSet";
								oModel.create(sPath, postdata, {
									success: function (oData, oResponse) {
										var mess = oData.ToReturn.results[0].Message;
										var type = oData.ToReturn.results[0].Type;
										if (type === "S") {

											sap.m.MessageBox.confirm(mess, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(this)
											});

										}
									}
								});
							} else if (oAction == "NO") {

							}
						}.bind(this)
					});

			}, //end of function for deleting fileAttachment from arr
			ci_handleDelete: function (oEvent) {

				/*	var path = oEvent.getParameter('listItem').getBindingContext().getPath();
					var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
					var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

					var Data = list_ID.getModel();

					var d = Data.getData();
					d.splice(idx, 1);
					Data.setData(d);*/

				this.docnumber = oEvent.getParameter("listItem").getBindingContext().getProperty().Doc;
				this.doctyp = oEvent.getParameter("listItem").getBindingContext().getProperty().Typ;
				this.docversion = oEvent.getParameter("listItem").getBindingContext().getProperty().Version;
				this.docpart = oEvent.getParameter("listItem").getBindingContext().getProperty().Part;
				this.logdoc = oEvent.getParameter("listItem").getBindingContext().getProperty().Logical;
				this.phydoc = oEvent.getParameter("listItem").getBindingContext().getProperty().Physical;

				var path = oEvent.getParameter('listItem').getBindingContext().getPath();
				var idx = parseInt(path.substring(path.lastIndexOf('/') + 1));
				var list_ID = sap.ui.getCore().byId(oEvent.getSource().sId);

				jQuery.sap.require("sap.m.MessageBox");
				sap.m.MessageBox.show(
					"Do you want to delete the attachment?", {
						icon: sap.m.MessageBox.Icon.INFORMATION,
						title: "Information",
						actions: [sap.m.MessageBox.Action.YES, sap.m.MessageBox.Action.NO],
						onClose: function (oAction) {
							// notify user
							if (oAction == "YES") {

								var Data = list_ID.getModel();

								var d = Data.getData();
								d.splice(idx, 1);
								Data.setData(d);

								var postdata = {
									"DocumentNumber": this.docnumber,
									"DocumentType": this.doctyp,
									"DocumentPart": this.docpart,
									"DocumentVersion": this.docversion,
									"ToOrignalDoc": [{
										"Application": "",
										"OriginalOfDocument": this.Original,
										"LogicalDocument": this.logdoc,
										"PhysicalDocument": this.phydoc,
										"DeleteFlag": "X"
									}],
									"ToReturn": [{
										"Type": "",
										"Message": "",
										"OutputNumber": "",
									}]
								};

								var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZDMS_ATTACHEMENT_SRV', true);
								var sPath = "/DMSHeaderSet";
								oModel.create(sPath, postdata, {
									success: function (oData, oResponse) {
										var mess = oData.ToReturn.results[0].Message;
										var type = oData.ToReturn.results[0].Type;
										if (type === "S") {

											sap.m.MessageBox.confirm(mess, {
												icon: sap.m.MessageBox.Icon.SUCCESS,
												title: "Success",
												actions: [sap.m.MessageBox.Action.OK],

												onClose: function (oAction) {

													if (oAction == "OK") {

													}
												}.bind(this)
											});

										}
									}
								});
							} else if (oAction == "NO") {

							}
						}.bind(this)
					});
			},

			onUploadComplete: function (oEvent) {

				var sUploadedFileName = oEvent.getParameter("files")[0].fileName;
				setTimeout(function () {
					var oUploadCollection = this.byId("UploadCollection");

					for (var i = 0; i < oUploadCollection.getItems().length; i++) {
						if (oUploadCollection.getItems()[i].getFileName() === sUploadedFileName) {
							oUploadCollection.removeItem(oUploadCollection.getItems()[i]);
							break;
						}
					}

					// delay the success message in order to see other messages before
					MessageToast.show("Event uploadComplete triggered");
				}.bind(this), 8000);
			},
			onChange: function (oEvent) {
				// debugger;
				var oUploadCollection = oEvent.getSource();
				// Header Token
				var oCustomerHeaderToken = new UploadCollectionParameter({
					name: "x-csrf-token",
					value: "securityTokenFromModel"
				});
				oUploadCollection.addHeaderParameter(oCustomerHeaderToken);
				// MessageToast.show("Event change triggered");
			},

			/*Function for Button Visibility for non stock material*/
			descrChange: function (oEvent) {

				//	alert("pressed");

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				this.indexk = valueind[2];

				var tabley = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");
				var count = tabley.getItems().length;

				//this.ops12 = tabley.getItems()[this.indexk].getCells()[9].setVisible(true); /////for Material button to be Visible

			},

			/*Function while changing item category*/

			Itemcatchange: function (oEvent) {

				var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var valueind = value.split("/");
				this.indexkv = valueind[2];

				var tabley = sap.ui.core.Fragment.byId("Operationsfragment", "tab2");

				var count = tabley.getItems().length;

				this.itemcat = tabley.getItems()[this.indexkv].getCells()[6].getSelectedKey();
				//alert("this.itemcat", this.itemcat);
				//console.log("this.itemcat", this.itemcat);

				if (this.itemcat === "N") {

					//alert("If");

					this.ops188 = tabley.getItems()[this.indexkv].getCells()[9].setVisible(true);

				} else if (this.itemcat === "L") {

					//alert("else");

					this.ops188 = tabley.getItems()[this.indexkv].getCells()[9].setVisible(false);

					sap.ui.core.Fragment.byId("Operationsfragment", "purdata").setVisible(false);

				}

			},

			_onFileUploaderChange: function () {
				var array =[];
				var oFileuploader = this.getView().byId("ci_fileUploader1");
				var ci_attach1 = this.getView().byId("UploadCollection1");
				var len = oFileuploader.length;
				var sFilename = oFileuploader.getValue();

				//	baseval = [" "," "," "," "," "];
				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				var that = this;
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						oFileuploader.setValue();
						that.baseval.push(base64);
						console.log(that.baseval);
						var ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64
						};
						that.uploadfilearray.push(ci_obj1);
						array = that.uploadfilearray.concat(that.ci_att11);

						console.log(that.uploadfilearray.length);
						var oModel = new sap.ui.model.json.JSONModel(array);
						console.log(that.uploadfilearray);
						console.log(that.uploadfilearray[0].Base64);
						ci_attach1.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						ci_attach1.bindItems("/", oItems);
						that.getView().getModel("oGlobalModel").setProperty("/ci_att1", that.uploadfilearray);

					};

				};

				reader.readAsBinaryString(file);

			},
			_onFileUploaderChange1: function () {
				var oFileuploader = sap.ui.core.Fragment.byId("morefragment", "ci_fileUploader1");
				var ci_attach1 = this.getView().byId("UploadCollection");
				var len = oFileuploader.length;
				var sFilename = oFileuploader.getValue();

				//	baseval = [" "," "," "," "," "];
				var file = jQuery.sap.domById(oFileuploader.getId() + "-fu").files[0];

				var base64_marker = 'data:' + file.type + ';base64,';

				var filename = sFilename.replace(/(\.[^/.]+)+$/, ""); // File Name
				console.log("filename : " + filename);
				var fileext = sFilename.slice((sFilename.lastIndexOf(".") - 1 >>> 0) + 2); // File Extension
				console.log("fileext : " + fileext);
				var sfileext = fileext.substring(0, 3);
				console.log("sfileext : " + sfileext);
				var tsfileext = sfileext.toUpperCase();
				console.log("tsfileext : " + tsfileext);
				var that = this;
				if (file) {
					var reader = new FileReader();

					reader.onload = function (readerEvt) {
						var binaryString = readerEvt.target.result;
						var base64 = btoa(binaryString);
						console.log("base64 : " + base64);

						oFileuploader.setValue();
						that.baseval.push(base64);
						console.log(that.baseval);
						var ci_obj1 = {
							Name: filename,
							Ext: tsfileext,
							Base64: base64
						};
						that.ci_att1.push(ci_obj1);

						console.log(that.ci_att1.length);
						var oModel = new sap.ui.model.json.JSONModel(that.ci_att1);
						console.log(that.ci_att1);
						console.log(that.ci_att1[0].Base64);
						ci_attach1.setModel(oModel);
						var oItems = new sap.m.ObjectListItem({
							icon: {
								path: "Ext",
								formatter: function (subject) {
									var lv = subject;
									if (lv === 'TXT') {
										return "sap-icon://document-text";
									} else if (lv === 'JPG' || lv === 'PNG' || lv === 'BMP') {
										return "sap-icon://attachment-photo";
									} else if (lv === 'PDF') {
										return "sap-icon://pdf-attachment";
									} else if (lv === 'DOC') {
										return "sap-icon://doc-attachment";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'MP3') {
										return "sap-icon://attachment-audio";
									} else if (lv === 'XLS') {
										return "sap-icon://excel-attachment";
									} else if (lv === 'PPT') {
										return "sap-icon://ppt-attachment";
									} else {
										return "sap-icon://document";
									}

								}
							},
							title: "{Name}.{Ext}",
							type: "Active",
						});
						ci_attach1.bindItems("/", oItems);
						that.getView().getModel("oGlobalModel").setProperty("/ci_att1", that.ci_att1);

					};

				};

				reader.readAsBinaryString(file);

			},
			_onUploadCollectionFileSizeExceed: function () {
				return new Promise(function (fnResolve) {
					sap.m.MessageBox.warning("The file you are trying to upload is too large (10MB max).", {
						title: "File Too Large",
						onClose: function () {
							fnResolve();
						}
					});
				}).catch(function (err) {
					if (err !== undefined) {
						MessageBox.error(err);
					}
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

				this.getView().getModel("oGlobalModel").setProperty("/filterBarVisible", true);
				this.getView().getModel("oGlobalModel").setProperty("/flag", true);

			},
			_onRowPress: function (oEvent) {

				this.more.open();
				// this.changPersonResp(oArg);
				this.personRespMoreBind();

				var that = this;
				// debugger;
				var oBindingContext = oEvent.getParameter("listItem").getBindingContext();

				// var value = oEvent.getSource().getParent().getBindingContext().getPath();
				var ind = oBindingContext.getPath();
				var valueind = ind.split("/");
				var index = valueind[2];

				var pressTable = that.getView().byId("optab");
				that.pressTableLength = pressTable.getItems().length;
				that.indexRow = Number(index);

				for (var indi = 0; indi < that.pressTableLength; indi++) {
					// debugger;
					if (indi === that.indexRow) {
						that.rowItem = pressTable.getItems()[indi].getCells()[8].getValue();
						sap.ui.core.Fragment.byId("morefragment", "personRespMore").setValue(that.rowItem);
					}
				}

			},
			// changPersonResp: function (oArg) {},
			personRespMoreBind: function () {

				// debugger;
				var work = this.getView().byId("mWrkctrBind3").getValue();
				var split = work.split(" ");
				var workCenter = split[0];
				// var Plant = this.getView().getModel("oGlobalModel").getProperty("/plantKey");
				var Plant = this.getView().byId("planPlantBind5").getValue();
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/");
				var sPath = "/PersonResponsibleF4Set?$filter=Arbpl eq '" + workCenter + "' and Werks eq '" + Plant + "'";
				//	var sPath = "/PersonResponsibleF4Set?$filter=Arbpl eq 'MECHANIK' and Werks eq '1000'";
				var oCont = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var PersonListModel = new JSONModel(oData);
						sap.ui.core.Fragment.byId("morefragment", "personRespMore").setModel(PersonListModel, "PersonListModel");
						// var count = oData.results.length;
						// console.log("codefinal", count);
						// var c4Model = new sap.ui.model.json.JSONModel();
						// c4Model.setData(oData);
						// var t5 = sap.ui.core.Fragment.byId("morefragment", "personRespMore");
						// t5.setModel(c4Model);
						// var vescombo = sap.ui.core.Fragment.byId("morefragment", "personRespMore");
						// // var workloc1 = sap.ui.core.Fragment.byId("morefragment", "personRespMore");
						// var oItems = new sap.ui.core.ListItem({
						// 	key: "{Pernr}",
						// 	text: "{Pernr} {Pernr}"
						// });
						// vescombo.bindAggregation("items", {
						// 	path: '/results',
						// 	template: oItems
						// });

					}

				});

			},
			_onRowPress1: function (oEvent) {

				var sDialogName = "";
				this.mDialogs = this.mDialogs || {};
				var oDialog = this.mDialogs[sDialogName];
				if (!oDialog) {
					oDialog = new(this.getView());
					this.mDialogs[sDialogName] = oDialog;

					// For navigation.
					oDialog.setRouter(this.oRouter);
				}

				var context = oEvent.getSource().getBindingContext();
				oDialog._oControl.setBindingContext(context);

				oDialog.open();

			},
			PlannerGrp: function () {

				var planGrpCombo = this.getView().byId("plnGrp");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
				oModel.read('/PlannerGroupF4Set', {

					success: function (oData, oResponse) {
						var PlannerGroup = oData.results[0].PlannerGroup;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.PlannerGroup) == -1) {
								dups.push(el.PlannerGroup);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{PlannerGroup}",
							text: "{PlannerGroup} - {NamePlannerGroup}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						planGrpCombo.setModel(oModel);
						planGrpCombo.bindItems("/arr6", oItems);
					}
				});

			},
			workCenter: function () {

				var workCenter = this.getView().byId("mWrkctr");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
				oModel.read('/WorkCenterF4Set', {

					success: function (oData, oResponse) {
						var Text = oData.results[0].Text;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.Text) == -1) {
								dups.push(el.Text);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{Text}",
							text: "{Text} {WrkCtrDes}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						oModel.setSizeLimit(3590);
						workCenter.setModel(oModel);
						workCenter.bindItems("/arr6", oItems);
					}
				});

			},
			existNotification: function () {

				var existNotification = this.getView().byId("existNotification");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01', true);
				oModel.read('/NotificationF4Set', {

					success: function (oData, oResponse) {
						var NotificationNo = oData.results[0].NotificationNo;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.NotificationNo) == -1) {
								dups.push(el.NotificationNo);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{NotificationNo}",
							text: "{NotificationNo} - {Description}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						oModel.setSizeLimit(1700);
						existNotification.setModel(oModel);
						existNotification.bindItems("/arr6", oItems);
					}
				});

			},
			functionLocation: function () {

				var functionLocation = this.getView().byId("functech");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_F4_SRV', true);
				oModel.read('/FunctionalLocAllDataSet', {

					success: function (oData, oResponse) {
						var FuncLoc = oData.results[0].FunctionalLocation;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.FunctionalLocation) == -1) {
								dups.push(el.FunctionalLocation);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{FunctionalLocation}",
							text: "{FunctionalLocation} {FunctionalLocationDesc}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						oModel.setSizeLimit(5242);
						functionLocation.setModel(oModel);
						functionLocation.bindItems("/arr6", oItems);
					}
				});
				this.equipment();
			},
			equipment: function () {

				var equipment = this.getView().byId("equip");
				var oModel = new ODataModel('/sap/opu/odata/sap/ZPRJ_PM_APPS_IH_SRV', true);
				oModel.read('/EquipmentF4Set', {

					success: function (oData, oResponse) {
						var EquipmentNo = oData.results[0].EquipmentNo;

						var dups = [];
						var arr = oData.results.filter(function (el) {
							if (dups.indexOf(el.EquipmentNo) == -1) {
								dups.push(el.EquipmentNo);
								return true;
							}
							return false;
						});
						var arr6 = {
							"arr6": arr
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{EquipmentNo}",
							text: "{EquipmentNo} {Text}" //-{Text}
						});
						var oModel = new sap.ui.model.json.JSONModel(arr6);
						// oModel.setSizeLimit(8000);
						equipment.setModel(oModel);
						equipment.bindItems("/arr6", oItems);
					}
				});

			},
			tasklist: function () {

				var oCont = this;

				var assignTask = oCont.getView().byId("assignTask");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/TaskListSet', {

					success: function (oData, oResponse) {
						var leng = oData.results.length;

						var TaskType = oData.results[0].TaskType;
						var TaskText = oData.results[0].TaskText;

						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.TaskType) == -1) {
								dups.push(el.TaskType);
								return true;
							} else if (dups.indexOf(el.TaskText) == -1) {
								dups.push(el.TaskText);
								return true;
							}
							return false;
						});
						var arr11 = {
							"arr11": arr3
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{TaskType}",
							text: "{TaskType}-{TaskText}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						assignTask.setModel(oModel);
						assignTask.bindItems("/arr11", oItems);

					}

				});

			},
			setuser: function () {

				var oCont = this;

				var usersta = oCont.getView().byId("userstat");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/UserStatusSet', {

					success: function (oData, oResponse) {
						var leng = oData.results.length;
						console.log("length", leng);

						var Status = oData.results[0].Status;
						var Text = oData.results[0].Text;

						var dups = [];
						var arr3 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Status) == -1) {
								dups.push(el.Status);
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

						var oItems = new sap.ui.core.ListItem({
							key: "{Status}",
							text: "{Status}-{StatusText}"
						});

						var oModel = new sap.ui.model.json.JSONModel(arr11);
						oModel.setSizeLimit(5300);
						usersta.setModel(oModel);
						usersta.bindItems("/arr11", oItems);

					}

				});

			},
			fraguom: function () {

				var unit = sap.ui.core.Fragment.byId("Operationsfragment", "combo17");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/UOMF4Set', {

					success: function (oData, oResponse) {

						var unitt = oData.results.length;
						for (var i = 0; i < unitt; i++) {
							var UOM = oData.results[i].UOM;

							var dups = [];
							var arr1 = oData.results.filter(function (el) {
								if (dups.indexOf(el.UOM) == -1) {
									dups.push(el.UOM);
									return true;
								}
								return false;
							});
							var arr7 = {
								"arr7": arr1
							};
						}

						var oItems = new sap.ui.core.ListItem({
							key: "{Text}",
							text: "{Text}"

						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						oModel.setSizeLimit(900);
						unit.setModel(oModel);
						unit.bindItems("/arr7", oItems);
					}
				});

			},

			fragItmcat: function () {

				var oCont = this;

				var icat = sap.ui.core.Fragment.byId("Operationsfragment", "combo19");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/ItemCategoryF4Set', {

					success: function (oData, oResponse) {
						var ItemCat = oData.results[0].ItemCat;
						console.log("ItemCat" + ItemCat)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.ItemCat) == -1) {
								dups.push(el.ItemCat);
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
							key: "{ItemCat}",
							text: "{ItemCat}-{ItemCatText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						icat.setModel(oModel);
						icat.bindItems("/arr7", oItems);
					}
				});

			},
			fragCurr: function () {

				var oCont = this;

				var curr = sap.ui.core.Fragment.byId("Operationsfragment", "combo15");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/CurrencyF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Currency = oData.results[0].Currency;
						console.log("Currency" + Currency)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Currency) == -1) {
								dups.push(el.Currency);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{Currency}",
							text: "{Currency}-{CurrencyText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						curr.setModel(oModel);
						curr.bindItems("/arr7", oItems);
					}
				});
			},
			fragmatgrp: function () {

				var oCont = this;

				var matgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo8");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/MaterialGroupF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var MaterialGroup = oData.results[0].MaterialGroup;

						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.MaterialGroup) == -1) {
								dups.push(el.MaterialGroup);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{MaterialGroup}",
							text: "{MaterialGroup}-{MatGrpText}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						matgrp.setModel(oModel);
						matgrp.bindItems("/arr7", oItems);
					}
				});

			},

			fragpurgrp: function () {

				var oCont = this;

				var purgrp = sap.ui.core.Fragment.byId("Operationsfragment", "combo9");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/POGrpSet', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var PurGrp = oData.results[0].PurGrp;
						console.log("PurGrp" + PurGrp)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.PurGrp) == -1) {
								dups.push(el.PurGrp);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{PurGrp}",
							text: "{PurGrp}-{PurGrpDesc}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						purgrp.setModel(oModel);
						purgrp.bindItems("/arr7", oItems);
					}
				});

			},

			fragvend: function () {

				var oCont = this;

				var vend = sap.ui.core.Fragment.byId("Operationsfragment", "combo10");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/VendorF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Vendor = oData.results[0].Vendor;
						console.log("Vendor" + Vendor)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Vendor) == -1) {
								dups.push(el.Vendor);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{Vendor}",
							text: "{Vendor}-{Name}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						vend.setModel(oModel);
						vend.bindItems("/arr7", oItems);
					}
				});

			},

			fragagree: function () {

				var oCont = this;

				var agree = sap.ui.core.Fragment.byId("Operationsfragment", "combo12");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/AgreementF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var DocumentNo = oData.results[0].DocumentNo;
						console.log("DocumentNo" + DocumentNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.DocumentNo) == -1) {
								dups.push(el.DocumentNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{DocumentNo}",
							text: "{DocumentNo}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						agree.setModel(oModel);
						agree.bindItems("/arr7", oItems);
					}
				});
			},

			fragItem: function () {

				var oCont = this;

				var item = sap.ui.core.Fragment.byId("Operationsfragment", "combo13");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/AgreementF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var Item = oData.results[0].Item;
						console.log("Item" + Item)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.Item) == -1) {
								dups.push(el.Item);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{Item}",
							text: "{Item}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						item.setModel(oModel);
						item.bindItems("/arr7", oItems);
					}
				});

			},

			fragacc: function () {

				var oCont = this;

				var acc = sap.ui.core.Fragment.byId("Operationsfragment", "combo16");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/GLAccountF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var AccNo = oData.results[0].AccNo;
						console.log("AccNo" + AccNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.AccNo) == -1) {
								dups.push(el.AccNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{AccNo}",
							text: "{AccNo}-{AccGroup}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						acc.setModel(oModel);
						acc.bindItems("/arr7", oItems);
					}
				});

			},

			fraginfo: function () {

				var oCont = this;

				var info = sap.ui.core.Fragment.byId("Operationsfragment", "combo14");

				var oModel = new ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read('/InfoRecordF4Set', {
					// filters: ofilters,
					success: function (oData, oResponse) {
						var DocNo = oData.results[0].DocNo;
						console.log("DocNo" + DocNo)
						var dups = [];
						var arr1 = oData.results.filter(function (el) {
							if (dups.indexOf(el.DocNo) == -1) {
								dups.push(el.DocNo);
								return true;
							}
							return false;
						});
						var arr7 = {
							"arr7": arr1
						};

						var oItems = new sap.ui.core.ListItem({
							key: "{DocNo}",
							text: "{DocNo}"
						});
						var oModel = new sap.ui.model.json.JSONModel(arr7);
						info.setModel(oModel);
						info.bindItems("/arr7", oItems);
					}
				});
			},
			moreok: function () {

				this.more.close();
				// debugger;
				var respPerso = sap.ui.core.Fragment.byId("morefragment", "personRespMore").getValue();
				var SplitTotal = respPerso.split("-");
				var respPerson = SplitTotal[0];
				var that = this;
				var pressTable = that.getView().byId("optab");
				var pressTableLength = pressTable.getItems().length;
				for (var indi = 0; indi < pressTableLength; indi++) {
					// debugger;
					if (indi === that.indexRow) {
						pressTable.getItems()[indi].getCells()[8].setValue(respPerson);
						// sap.ui.core.Fragment.byId("morefragment", "personRespMore").setValue(that.rowItem);
					}
				}
			},
			moreclose: function () {

				this.more.close();

			},
			workCentChange: function () {

				// debugger;
				var work = this.getView().byId("mWrkctr").getValue();
				var split = work.split(" ");
				var workCenter = split[0];
				// var Plant = this.getView().getModel("oGlobalModel").getProperty("/plantKey");
				var Plant = this.getView().byId("planPlantBind5").getValue();
				var oModel = new ODataModel("/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/");
				var sPath = "/PersonResponsibleF4Set?$filter=Arbpl eq '" + workCenter + "' and Werks eq '" + Plant + "'";
				//	var sPath = "/PersonResponsibleF4Set?$filter=Arbpl eq 'MECHANIK' and Werks eq '1000'";
				var oCont = this;
				oModel.read(sPath, {
					success: function (oData, oResponse) {
						// debugger;
						var PersonListModel = new JSONModel(oData);
						oCont.getView().byId("personRes").setModel(PersonListModel, "PersonListModel");
					},
					error: function () {
						// alert("Person Responsible data not fetched");
					}
				});
			},
			personResp: function () {

				var mWrkctr = this.getView().byId("mWrkctr").getValue();
				var SplitTotalFoot = mWrkctr.split(" ");
				this.mWrkctr = SplitTotalFoot[0];

				var planPlant = this.getView().byId("combo4").getValue();

				var that = this;
				var sPath = "/PersonResponsibleF4Set?$filter= Arbpl eq '" + this.mWrkctr + "' and Werks eq '" + planPlant + "'";

				var oModel = new sap.ui.model.odata.ODataModel('/sap/opu/odata/sap/ZPM_WORKORDER_SRV_01/', true);
				oModel.read(sPath, {
					success: function (oData, oResponse) {

						var plntcnt = oData.results.length;
						//alert(plntcnt);
						console.log("countable:", plntcnt);

						var c4model = new sap.ui.model.json.JSONModel();
						c4model.setSizeLimit(5300);
						c4model.setData(oData);
						var presp = that.getView().byId("personRes");
						//alert(presp);
						presp.setModel(c4model);
						var comboven = that.getView().byId("personRes");

						var oItems = new sap.ui.core.ListItem({
							key: "{Pernr}",
							text: "{Pernr} {Short}" //- {Description}
						});
						comboven.bindAggregation("items", {
							path: "/results",
							template: oItems
						});

					}
				});

			},

			onInit: function () {
				/*Array Declarations*/
				// this.arr32 = [];
				// this.arr31 = [];

				/*var funLoc2 = this.getView().byId("functechBind1").getValue();
				alert(funLoc2);
				var funLo = funLoc2.split("");
				var FunLoc12 = funLo[0];
				alert(FunLoc12);*/

				//this.techObjHis();

				this.oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				this.oRouter.attachRouteMatched(this.handleRouteMatched, this);
				this.oFclModel = this.getOwnerComponent().getModel("FclRouter");
				this.oFclModel.setProperty('/targetAggregation', 'midColumnPages');
				this.oFclModel.setProperty('/expandIcon', {});
				this.oView.setModel(new sap.ui.model.json.JSONModel({}), 'fclButton');

				this.more = sap.ui.xmlfragment("morefragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.more", this);
				this.getView().addDependent(this.more);
				this.TECO = sap.ui.xmlfragment("TECOfragment",
					"com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.TECO",
					this);
				this.getView().addDependent(this.TECO);

				this.compobtn = sap.ui.xmlfragment("Operationsfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.Operations",
					this);
				this.getView().addDependent(this.compobtn);

				this.purchasingdata = sap.ui.xmlfragment("Displayfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.Display",
					this);
				this.getView().addDependent(this.purchasingdata);

				this.busyDialog = sap.ui.xmlfragment("busyDialogfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.busyDialog1",
					this);
				this.getView().addDependent(this.busyDialog);

				// this.popover = sap.ui.xmlfragment("Popoverfragment", "com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.Popover",
				// 	this);
				// this.getView().addDependent(this.popover);

				this.busyDialogDownload = sap.ui.xmlfragment("busyDialogDownloadfragment",
					"com.sap.build.ba293bd41-us_1.manageWorkOrder.fragments.busyDialogDownload",
					this);
				this.getView().addDependent(this.busyDialogDownload);

				// this.PlannerGrp();
				// this.workCenter();
				// this.existNotification();
				// this.functionLocation();

				// this.plannplnt();
				// this.tasklist();
				// this.setuser();
				// this.personRespMoreBind();

				// this.personResp();
				// this.workNewBind();

				/*For the Purchase Data Fragment code Starts*/
				// this.fraguom();
				this.fragItmcat();
				// this.fragCurr();
				// this.fragmatgrp();
				// this.fragpurgrp();
				// this.fragvend();
				// this.fragagree();
				// this.fragItem();
				// this.fraginfo();

				/*For the Purchase data Fragment code ends*/

				//this.purdoc();
				this.newArray1 = [];
				this.newArray2 = [];
			}
		});
	},
	/* bExport= */
	true);