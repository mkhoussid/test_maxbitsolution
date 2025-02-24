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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Cocktail = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var CocktailInfo_1 = require("./CocktailInfo");
var CocktailInstructions_1 = require("./CocktailInstructions");
var CocktailIngredients_1 = require("./CocktailIngredients");
var CocktailThumb_1 = require("./CocktailThumb");
exports.Cocktail = React.memo(function (_a) {
    var className = _a.className, cocktail = __rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1["default"])(styles_module_css_1["default"].cocktailWrapper, styles_module_css_1["default"].gutterBottom, className) }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ className: (0, clsx_1["default"])(styles_module_css_1["default"].infoContainer, styles_module_css_1["default"].gutterBottom) }, { children: [(0, jsx_runtime_1.jsx)(CocktailInfo_1.CocktailInfo, __assign({}, cocktail), void 0), (0, jsx_runtime_1.jsx)(CocktailInstructions_1.CocktailInstructions, { instructions: cocktail.strInstructions || "/u2014" }, void 0), (0, jsx_runtime_1.jsx)(CocktailIngredients_1.CocktailIngredients, __assign({}, cocktail), void 0)] }), void 0), (0, jsx_runtime_1.jsx)(CocktailThumb_1.CocktailThumb, { thumbUrl: cocktail.strDrinkThumb }, void 0)] }), void 0));
});
