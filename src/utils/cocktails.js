"use strict";
exports.__esModule = true;
exports.generateCocktailApiUrl = void 0;
var generateCocktailApiUrl = function (_a) {
    var cocktailCode = _a.cocktailCode;
    return "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + cocktailCode;
};
exports.generateCocktailApiUrl = generateCocktailApiUrl;
