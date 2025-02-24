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
exports.__esModule = true;
var jsx_runtime_1 = require("react/jsx-runtime");
var Content_1 = require("./components/Content");
var Sidebar_1 = require("./components/Sidebar");
require("./styles.css");
var react_router_1 = require("react-router");
function App() {
    return ((0, jsx_runtime_1.jsx)(react_router_1.BrowserRouter, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ className: 'wrapper' }, { children: [(0, jsx_runtime_1.jsx)(Sidebar_1.Sidebar, {}, void 0), (0, jsx_runtime_1.jsx)(Content_1.Content, {}, void 0)] }), void 0) }, void 0));
}
exports["default"] = App;
