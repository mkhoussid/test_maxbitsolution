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
exports.CocktailIngredients = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var IngredientElement = React.memo(function (_a) {
    var measure = _a.measure, ingredient = _a.ingredient;
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: styles_module_css_1["default"].ingredientElementContainer }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1["default"].measureContainer }, { children: measure.padEnd(20) }), void 0), (0, jsx_runtime_1.jsx)("div", { children: ingredient }, void 0)] }), void 0));
});
exports.CocktailIngredients = React.memo(function (props) {
    var ingredientElements = React.useMemo(function () {
        var strMeasure1 = props.strMeasure1, strMeasure2 = props.strMeasure2, strMeasure3 = props.strMeasure3, strIngredient1 = props.strIngredient1, strIngredient2 = props.strIngredient2, strIngredient3 = props.strIngredient3;
        return [
            { measure: strMeasure1, ingredient: strIngredient1 },
            { measure: strMeasure2, ingredient: strIngredient2 },
            { measure: strMeasure3, ingredient: strIngredient3 },
        ].map(function (_a, index) {
            var measure = _a.measure, ingredient = _a.ingredient;
            return ((0, jsx_runtime_1.jsx)(IngredientElement, { measure: measure || "\u2014", ingredient: ingredient || "\u2014" }, ["ingredient_element", index].join("_")));
        });
    }, [props]);
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { children: "List of ingredients:" }, void 0), ingredientElements] }, void 0));
});
