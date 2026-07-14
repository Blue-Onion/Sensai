"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-has-property";
exports.ids = ["vendor-chunks/hast-util-has-property"];
exports.modules = {

/***/ "(ssr)/./node_modules/hast-util-has-property/lib/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/hast-util-has-property/lib/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   hasProperty: () => (/* binding */ hasProperty)\n/* harmony export */ });\n/**\n * @typedef {import('hast').Element} Element\n * @typedef {import('hast').Nodes} Nodes\n */\n\nconst own = {}.hasOwnProperty\n\n/**\n * Check if `node` is an element and has a `name` property.\n *\n * @template {string} Key\n *   Type of key.\n * @param {Nodes} node\n *   Node to check (typically `Element`).\n * @param {Key} name\n *   Property name to check.\n * @returns {node is Element & {properties: Record<Key, Array<number | string> | number | string | true>}}}\n *   Whether `node` is an element that has a `name` property.\n *\n *   Note: see <https://github.com/DefinitelyTyped/DefinitelyTyped/blob/27c9274/types/hast/index.d.ts#L37C29-L37C98>.\n */\nfunction hasProperty(node, name) {\n  const value =\n    node.type === 'element' &&\n    own.call(node.properties, name) &&\n    node.properties[name]\n\n  return value !== null && value !== undefined && value !== false\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9saWIvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0EsYUFBYSx3QkFBd0I7QUFDckMsYUFBYSxzQkFBc0I7QUFDbkM7O0FBRUEsY0FBYzs7QUFFZDtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEI7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQSxXQUFXLEtBQUs7QUFDaEI7QUFDQSxhQUFhLG1CQUFtQjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsiL1VzZXJzL2FkaXR5YXNpbmdocmF3YXQvd29yay9wcm9qZWN0L1NlbnNhaS9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWhhcy1wcm9wZXJ0eS9saWIvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCdoYXN0JykuRWxlbWVudH0gRWxlbWVudFxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLk5vZGVzfSBOb2Rlc1xuICovXG5cbmNvbnN0IG93biA9IHt9Lmhhc093blByb3BlcnR5XG5cbi8qKlxuICogQ2hlY2sgaWYgYG5vZGVgIGlzIGFuIGVsZW1lbnQgYW5kIGhhcyBhIGBuYW1lYCBwcm9wZXJ0eS5cbiAqXG4gKiBAdGVtcGxhdGUge3N0cmluZ30gS2V5XG4gKiAgIFR5cGUgb2Yga2V5LlxuICogQHBhcmFtIHtOb2Rlc30gbm9kZVxuICogICBOb2RlIHRvIGNoZWNrICh0eXBpY2FsbHkgYEVsZW1lbnRgKS5cbiAqIEBwYXJhbSB7S2V5fSBuYW1lXG4gKiAgIFByb3BlcnR5IG5hbWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7bm9kZSBpcyBFbGVtZW50ICYge3Byb3BlcnRpZXM6IFJlY29yZDxLZXksIEFycmF5PG51bWJlciB8IHN0cmluZz4gfCBudW1iZXIgfCBzdHJpbmcgfCB0cnVlPn19fVxuICogICBXaGV0aGVyIGBub2RlYCBpcyBhbiBlbGVtZW50IHRoYXQgaGFzIGEgYG5hbWVgIHByb3BlcnR5LlxuICpcbiAqICAgTm90ZTogc2VlIDxodHRwczovL2dpdGh1Yi5jb20vRGVmaW5pdGVseVR5cGVkL0RlZmluaXRlbHlUeXBlZC9ibG9iLzI3YzkyNzQvdHlwZXMvaGFzdC9pbmRleC5kLnRzI0wzN0MyOS1MMzdDOTg+LlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzUHJvcGVydHkobm9kZSwgbmFtZSkge1xuICBjb25zdCB2YWx1ZSA9XG4gICAgbm9kZS50eXBlID09PSAnZWxlbWVudCcgJiZcbiAgICBvd24uY2FsbChub2RlLnByb3BlcnRpZXMsIG5hbWUpICYmXG4gICAgbm9kZS5wcm9wZXJ0aWVzW25hbWVdXG5cbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB1bmRlZmluZWQgJiYgdmFsdWUgIT09IGZhbHNlXG59XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hast-util-has-property/lib/index.js\n");

/***/ })

};
;