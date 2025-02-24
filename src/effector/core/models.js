"use strict";
exports.__esModule = true;
exports.$requestError = exports.$isRequestLoading = void 0;
var effector_1 = require("effector");
exports.$isRequestLoading = (0, effector_1.createStore)(false);
exports.$requestError = (0, effector_1.createStore)(null);
