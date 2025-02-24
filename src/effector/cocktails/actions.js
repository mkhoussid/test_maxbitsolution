"use strict";
exports.__esModule = true;
exports.setIsInvalidCocktailCode = exports.resetCurrentCocktailCode = exports.setCurrentCocktailCode = exports.resetCocktailInfo = exports.fetchCocktailInfo = void 0;
var effector_1 = require("effector");
var cocktails_1 = require("../../utils/cocktails");
var makeRequest_1 = require("../../utils/makeRequest");
var models_1 = require("../core/models");
var models_2 = require("./models");
exports.fetchCocktailInfo = (0, effector_1.createEvent)();
var fetchCocktailInfoFx = (0, effector_1.createEffect)(function (_a) {
    var cocktailUrl = _a.cocktailUrl;
    return (0, makeRequest_1.makeRequest)({
        requestUrl: cocktailUrl
    });
});
(0, effector_1.sample)({
    clock: exports.fetchCocktailInfo,
    source: models_1.$isRequestLoading,
    filter: function (isRequestLoading) { return !isRequestLoading; },
    fn: function (_, _a) {
        var cocktailCode = _a.cocktailCode;
        return ({
            cocktailUrl: (0, cocktails_1.generateCocktailApiUrl)({ cocktailCode: cocktailCode })
        });
    },
    target: fetchCocktailInfoFx
});
(0, effector_1.sample)({
    clock: fetchCocktailInfoFx.doneData,
    fn: function (_a) {
        var drinks = _a.drinks;
        return drinks;
    },
    target: models_2.$cocktailInfo
});
(0, effector_1.sample)({
    clock: fetchCocktailInfoFx.failData,
    fn: function (err) { var _a; return (_a = err.message) !== null && _a !== void 0 ? _a : ""; },
    target: models_1.$requestError
});
exports.resetCocktailInfo = (0, effector_1.createEvent)();
models_2.$cocktailInfo.reset([exports.resetCocktailInfo, fetchCocktailInfoFx]);
models_1.$isRequestLoading.on(fetchCocktailInfoFx, function () { return true; });
models_1.$isRequestLoading.reset(fetchCocktailInfoFx["finally"]);
models_1.$requestError.reset(fetchCocktailInfoFx);
exports.setCurrentCocktailCode = (0, effector_1.createEvent)();
exports.resetCurrentCocktailCode = (0, effector_1.createEvent)();
models_2.$currentCocktailCode.on(exports.setCurrentCocktailCode, function (_, _a) {
    var cocktailCode = _a.cocktailCode;
    return cocktailCode;
});
models_2.$currentCocktailCode.reset(exports.resetCurrentCocktailCode);
exports.setIsInvalidCocktailCode = (0, effector_1.createEvent)();
models_2.$isInvalidCocktailCode.on(exports.setIsInvalidCocktailCode, function (_, _a) {
    var isInvalidCocktailCode = _a.isInvalidCocktailCode;
    return isInvalidCocktailCode;
});
