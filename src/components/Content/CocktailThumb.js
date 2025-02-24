"use strict";
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
exports.CocktailThumb = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var react_intersection_observer_1 = require("react-intersection-observer");
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var placeholderUrl = "https://storage.yandexcloud.net/pingcity/assets/images/thumbnail_placeholder.png";
exports.CocktailThumb = React.memo(function (_a) {
    var _thumbUrl = _a.thumbUrl;
    var _b = React.useState(placeholderUrl), thumbUrl = _b[0], setThumbUrl = _b[1];
    var _c = (0, react_intersection_observer_1.useInView)(), ref = _c.ref, inView = _c.inView;
    React.useEffect(function () {
        if (_thumbUrl && inView) {
            var img = new Image();
            img.src = _thumbUrl;
            img.onload = function () {
                setThumbUrl(_thumbUrl);
            };
        }
    }, [inView]);
    return ((0, jsx_runtime_1.jsx)("div", { ref: ref, className: styles_module_css_1["default"].thumb, style: {
            backgroundImage: "url('" + thumbUrl + "')"
        } }, void 0));
});
