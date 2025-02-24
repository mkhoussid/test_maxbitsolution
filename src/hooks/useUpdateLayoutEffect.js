"use strict";
exports.__esModule = true;
exports.useUpdateLayoutEffect = void 0;
var react_1 = require("react");
function useUpdateLayoutEffect(effect, dependencies) {
    if (dependencies === void 0) { dependencies = []; }
    var isInitialMount = (0, react_1.useRef)(true);
    (0, react_1.useLayoutEffect)(function () {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        }
        else {
            effect();
        }
    }, dependencies);
}
exports.useUpdateLayoutEffect = useUpdateLayoutEffect;
