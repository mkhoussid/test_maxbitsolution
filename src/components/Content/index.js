"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Content = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var ErrorSegment_1 = require("../ErrorSegment");
var InvalidCocktailSegment_1 = require("../InvalidCocktailSegment");
var clsx_1 = __importDefault(require("clsx"));
var effector_react_1 = require("effector-react");
var models_1 = require("../../effector/core/models");
var LoadingSegment_1 = require("../LoadingSegment");
var models_2 = require("../../effector/cocktails/models");
var Cocktail_1 = require("./Cocktail");
exports.Content = React.memo(function () {
    var isRequestLoading = (0, effector_react_1.useUnit)(models_1.$isRequestLoading);
    var requestError = (0, effector_react_1.useUnit)(models_1.$requestError);
    var isInvalidCocktailCode = (0, effector_react_1.useUnit)(models_2.$isInvalidCocktailCode);
    var cocktailInfo = (0, effector_react_1.useUnit)(models_2.$cocktailInfo);
    var handleRenderCocktailInfo = React.useCallback(function (cocktail, index) {
        return ((0, jsx_runtime_1.jsx)(Cocktail_1.Cocktail, __assign({ className: (0, clsx_1["default"])(!index && styles_module_css_1["default"].gutterTop) }, cocktail), ["cocktail", index].join("_")));
    }, []);
    var content = React.useMemo(function () {
        if (isRequestLoading) {
            return (0, jsx_runtime_1.jsx)(LoadingSegment_1.LoadingSegment, {}, void 0);
        }
        if (requestError) {
            return (0, jsx_runtime_1.jsx)(ErrorSegment_1.ErrorSegment, { requestError: requestError }, void 0);
        }
        if (isInvalidCocktailCode) {
            return (0, jsx_runtime_1.jsx)(InvalidCocktailSegment_1.InvalidCocktailSegment, {}, void 0);
        }
        if (Array.isArray(cocktailInfo)) {
            if (!cocktailInfo.length) {
                return (0, jsx_runtime_1.jsx)("div", { children: "No cocktail info" }, void 0);
            }
            return cocktailInfo.map(handleRenderCocktailInfo);
        }
        return (0, jsx_runtime_1.jsx)("div", { children: "Choose a cocktail" }, void 0);
    }, [isRequestLoading, requestError, cocktailInfo, isInvalidCocktailCode]);
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1["default"].content }, { children: content }), void 0);
});
