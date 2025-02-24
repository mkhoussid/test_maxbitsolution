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
exports.CocktailInfo = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
exports.CocktailInfo = React.memo(function (_a) {
    var strDrink = _a.strDrink, strCategory = _a.strCategory, strAlcoholic = _a.strAlcoholic, strGlass = _a.strGlass;
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1["default"])(styles_module_css_1["default"].infoElement, styles_module_css_1["default"].gutterBottom) }, { children: strDrink }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1["default"].infoElement }, { children: strCategory }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1["default"].infoElement }, { children: strAlcoholic }), void 0), (0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1["default"])(styles_module_css_1["default"].infoElement, styles_module_css_1["default"].gutterBottom) }, { children: strGlass }), void 0)] }, void 0));
});
