webpackHotUpdate("static\\development\\pages\\clock.js",{

/***/ "./pages/clock.tsx":
/*!*************************!*\
  !*** ./pages/clock.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Clock; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_useClock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/useClock */ "./lib/useClock.ts");
var _jsxFileName = "C:\\Users\\1\\Desktop\\nextmovie\\pages\\clock.tsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Clock() {
  _s();

  var time = Object(_lib_useClock__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date());
  var timeobj = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期天'
  };
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, "\xA0\xA0\xA0\xA0\xA0\xA0", __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, (timeobj[time.getDay()] || '') + time.toLocaleTimeString()), "\xA0\xA0\xA0\xA0");
}

_s(Clock, "R+PESSTxWxrvs4b8p2D6glLz8eQ=", false, function () {
  return [_lib_useClock__WEBPACK_IMPORTED_MODULE_1__["default"]];
});

_c = Clock;

var _c;

$RefreshReg$(_c, "Clock");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbG9jay50c3giXSwibmFtZXMiOlsiQ2xvY2siLCJ0aW1lIiwidXNlQ2xvY2siLCJEYXRlIiwidGltZW9iaiIsImdldERheSIsInRvTG9jYWxlVGltZVN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxLQUFULEdBQWlCO0FBQUE7O0FBQzlCLE1BQU1DLElBQUksR0FBR0MsNkRBQVEsQ0FBQyxJQUFJQyxJQUFKLEVBQUQsQ0FBckI7QUFFQSxNQUFNQyxPQUFPLEdBQUc7QUFDZCxPQUFHLEtBRFc7QUFFZCxPQUFHLEtBRlc7QUFHZCxPQUFHLEtBSFc7QUFJZCxPQUFHLEtBSlc7QUFLZCxPQUFHLEtBTFc7QUFNZCxPQUFHLEtBTlc7QUFPZCxPQUFHO0FBUFcsR0FBaEI7QUFVQSxTQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFLLENBQUNBLE9BQU8sQ0FBQ0gsSUFBSSxDQUFDSSxNQUFMLEVBQUQsQ0FBUCxJQUEwQixFQUEzQixJQUFpQ0osSUFBSSxDQUFDSyxrQkFBTCxFQUF0QyxDQURGLHFCQURGO0FBS0Q7O0dBbEJ1Qk4sSztVQUNURSxxRDs7O0tBRFNGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNsb2NrLmpzLjA3MzFkMTFkYmQxZjA2ZTdiZWZlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnTCoFJlYWN0wqBmcm9twqAncmVhY3QnXHJcbmltcG9ydCB1c2VDbG9jayBmcm9tICcuLi9saWIvdXNlQ2xvY2snO1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBmdW5jdGlvbsKgQ2xvY2soKcKge1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VDbG9jayhuZXcgRGF0ZSgpKVxyXG5cclxuwqDCoGNvbnN0wqB0aW1lb2JqwqA9wqB7XHJcbsKgwqDCoMKgMTrCoCfmmJ/mnJ/kuIAnLFxyXG7CoMKgwqDCoDI6wqAn5pif5pyf5LqMJyxcclxuwqDCoMKgwqAzOsKgJ+aYn+acn+S4iScsXHJcbsKgwqDCoMKgNDrCoCfmmJ/mnJ/lm5snLFxyXG7CoMKgwqDCoDU6wqAn5pif5pyf5LqUJyxcclxuwqDCoMKgwqA2OsKgJ+aYn+acn+WFrScsXHJcbsKgwqDCoMKgMDrCoCfmmJ/mnJ/lpKknXHJcbsKgwqB9XHJcblxyXG7CoMKgcmV0dXJuKFxyXG7CoMKgwqDCoDxkaXY+XHJcbsKgwqDCoMKgwqDCoDxwPnvCoCh0aW1lb2JqW3RpbWUuZ2V0RGF5KCldwqB8fMKgJycpwqArwqB0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpwqB9PC9wPlxyXG7CoMKgwqDCoDwvZGl2PlxyXG7CoMKgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==