/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kangit.bun./project8888/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
