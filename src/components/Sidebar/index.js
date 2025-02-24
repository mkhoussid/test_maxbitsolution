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
exports.Sidebar = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var React = __importStar(require("react"));
var clsx_1 = __importDefault(require("clsx"));
// @ts-expect-error
var styles_module_css_1 = __importDefault(require("./styles.module.css"));
var useUpdateLayoutEffect_1 = require("../../hooks/useUpdateLayoutEffect");
var actions_1 = require("../../effector/cocktails/actions");
var CocktailCode_1 = require("../../enums/CocktailCode");
var effector_react_1 = require("effector-react");
var models_1 = require("../../effector/core/models");
var models_2 = require("../../effector/cocktails/models");
var react_router_1 = require("react-router");
var cocktails_1 = require("../../constants/cocktails");
var options = [
    {
        label: "Margarita",
        code: CocktailCode_1.CocktailCode.Margarita
    },
    {
        label: "Mojito",
        code: CocktailCode_1.CocktailCode.Mojito
    },
    {
        label: "A1",
        code: CocktailCode_1.CocktailCode.A1
    },
    {
        label: "Kir",
        code: CocktailCode_1.CocktailCode.Kir
    },
];
exports.Sidebar = React.memo(function () {
    var currentCocktailCode = (0, effector_react_1.useUnit)(models_2.$currentCocktailCode);
    var isRequestLoading = (0, effector_react_1.useUnit)(models_1.$isRequestLoading);
    var _a = (0, react_router_1.useSearchParams)(), searchParams = _a[0], setSearchParams = _a[1];
    var handleClick = React.useCallback(function (cocktailCode) { return function () {
        if (!isRequestLoading) {
            setSearchParams(function (params) {
                params.set(cocktails_1.cocktailCodeSearchParam, cocktailCode);
                return params;
            });
        }
    }; }, [isRequestLoading]);
    var handleSetCurrentCocktailCode = React.useCallback(function () {
        if (isRequestLoading) {
            return;
        }
        (0, actions_1.setIsInvalidCocktailCode)({ isInvalidCocktailCode: false });
        var currentCocktailCode = searchParams.get(cocktails_1.cocktailCodeSearchParam);
        console.log("currentCocktailCode", currentCocktailCode);
        if (!currentCocktailCode) {
            var firstCode_1 = options[0].code;
            (0, actions_1.setCurrentCocktailCode)({
                cocktailCode: firstCode_1
            });
            setSearchParams(function (searchParams) {
                searchParams.set(cocktails_1.cocktailCodeSearchParam, firstCode_1);
                return searchParams;
            });
            return;
        }
        if (currentCocktailCode) {
            if (Object.values(CocktailCode_1.CocktailCode).includes(currentCocktailCode)) {
                (0, actions_1.setCurrentCocktailCode)({
                    cocktailCode: currentCocktailCode
                });
                return;
            }
            (0, actions_1.setIsInvalidCocktailCode)({ isInvalidCocktailCode: true });
            return;
        }
        (0, actions_1.resetCurrentCocktailCode)();
        setSearchParams(function (searchParams) {
            searchParams["delete"](cocktails_1.cocktailCodeSearchParam);
            return searchParams;
        });
    }, [searchParams, isRequestLoading]);
    React.useLayoutEffect(function () {
        handleSetCurrentCocktailCode();
    }, [handleSetCurrentCocktailCode]);
    (0, useUpdateLayoutEffect_1.useUpdateLayoutEffect)(function () {
        if (!currentCocktailCode) {
            (0, actions_1.resetCocktailInfo)();
            return;
        }
        (0, actions_1.fetchCocktailInfo)({ cocktailCode: currentCocktailCode });
    }, [currentCocktailCode]);
    var mappedOptions = React.useMemo(function () {
        return options.map(function (_a, index) {
            var _b;
            var label = _a.label, code = _a.code;
            var isActive = currentCocktailCode === code;
            return ((0, jsx_runtime_1.jsx)("div", __assign({ className: (0, clsx_1["default"])(styles_module_css_1["default"].sidebarOption, (_b = {},
                    _b[styles_module_css_1["default"].active] = isActive,
                    _b[styles_module_css_1["default"].loading] = isRequestLoading,
                    _b)), onClick: handleClick(code) }, { children: label }), [code, index].join("_")));
        });
    }, [currentCocktailCode, isRequestLoading]);
    return (0, jsx_runtime_1.jsx)("div", __assign({ className: styles_module_css_1["default"].sidebar }, { children: mappedOptions }), void 0);
});
