"use strict";
exports.__esModule = true;
exports.resetRequestError = exports.setRequestError = exports.setIsRequestLoading = void 0;
var effector_1 = require("effector");
var models_1 = require("./models");
exports.setIsRequestLoading = (0, effector_1.createEvent)();
(0, effector_1.sample)({
    clock: exports.setIsRequestLoading,
    fn: function (_a) {
        var isRequestLoading = _a.isRequestLoading;
        return isRequestLoading;
    },
    target: models_1.$isRequestLoading
});
exports.setRequestError = (0, effector_1.createEvent)();
exports.resetRequestError = (0, effector_1.createEvent)();
models_1.$requestError.on(exports.setRequestError, function (_, _a) {
    var message = _a.message;
    return message;
});
models_1.$requestError.reset(exports.resetRequestError);
