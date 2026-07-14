"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/direction";
exports.ids = ["vendor-chunks/direction"];
exports.modules = {

/***/ "(ssr)/./node_modules/direction/index.js":
/*!*****************************************!*\
  !*** ./node_modules/direction/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   direction: () => (/* binding */ direction)\n/* harmony export */ });\nconst rtlRange = '\\u0591-\\u07FF\\uFB1D-\\uFDFD\\uFE70-\\uFEFC'\nconst ltrRange =\n  'A-Za-z\\u00C0-\\u00D6\\u00D8-\\u00F6' +\n  '\\u00F8-\\u02B8\\u0300-\\u0590\\u0800-\\u1FFF\\u200E\\u2C00-\\uFB1C' +\n  '\\uFE00-\\uFE6F\\uFEFD-\\uFFFF'\n\n/* eslint-disable no-misleading-character-class */\nconst rtl = new RegExp('^[^' + ltrRange + ']*[' + rtlRange + ']')\nconst ltr = new RegExp('^[^' + rtlRange + ']*[' + ltrRange + ']')\n/* eslint-enable no-misleading-character-class */\n\n/**\n * Detect the direction of text: left-to-right, right-to-left, or neutral\n *\n * @param {string} value\n * @returns {'rtl'|'ltr'|'neutral'}\n */\nfunction direction(value) {\n  const source = String(value || '')\n  return rtl.test(source) ? 'rtl' : ltr.test(source) ? 'ltr' : 'neutral'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkaXR5YXNpbmdocmF3YXQvd29yay9wcm9qZWN0L1NlbnNhaS9ub2RlX21vZHVsZXMvZGlyZWN0aW9uL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJ0bFJhbmdlID0gJ1xcdTA1OTEtXFx1MDdGRlxcdUZCMUQtXFx1RkRGRFxcdUZFNzAtXFx1RkVGQydcbmNvbnN0IGx0clJhbmdlID1cbiAgJ0EtWmEtelxcdTAwQzAtXFx1MDBENlxcdTAwRDgtXFx1MDBGNicgK1xuICAnXFx1MDBGOC1cXHUwMkI4XFx1MDMwMC1cXHUwNTkwXFx1MDgwMC1cXHUxRkZGXFx1MjAwRVxcdTJDMDAtXFx1RkIxQycgK1xuICAnXFx1RkUwMC1cXHVGRTZGXFx1RkVGRC1cXHVGRkZGJ1xuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1taXNsZWFkaW5nLWNoYXJhY3Rlci1jbGFzcyAqL1xuY29uc3QgcnRsID0gbmV3IFJlZ0V4cCgnXlteJyArIGx0clJhbmdlICsgJ10qWycgKyBydGxSYW5nZSArICddJylcbmNvbnN0IGx0ciA9IG5ldyBSZWdFeHAoJ15bXicgKyBydGxSYW5nZSArICddKlsnICsgbHRyUmFuZ2UgKyAnXScpXG4vKiBlc2xpbnQtZW5hYmxlIG5vLW1pc2xlYWRpbmctY2hhcmFjdGVyLWNsYXNzICovXG5cbi8qKlxuICogRGV0ZWN0IHRoZSBkaXJlY3Rpb24gb2YgdGV4dDogbGVmdC10by1yaWdodCwgcmlnaHQtdG8tbGVmdCwgb3IgbmV1dHJhbFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybnMgeydydGwnfCdsdHInfCduZXV0cmFsJ31cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGlvbih2YWx1ZSkge1xuICBjb25zdCBzb3VyY2UgPSBTdHJpbmcodmFsdWUgfHwgJycpXG4gIHJldHVybiBydGwudGVzdChzb3VyY2UpID8gJ3J0bCcgOiBsdHIudGVzdChzb3VyY2UpID8gJ2x0cicgOiAnbmV1dHJhbCdcbn1cbiJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOlswXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/direction/index.js\n");

/***/ })

};
;