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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_useClock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/useClock */ "./lib/useClock.ts");
var _jsxFileName = "C:\\Users\\1\\Desktop\\nextmovie\\pages\\clock.tsx",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Clock() {
  _s();

  var time = Object(_lib_useClock__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date());
  var dayObj = {
    1: '星期一',
    2: '星期二',
    3: '星期三',
    4: '星期四',
    5: '星期五',
    6: '星期六',
    0: '星期天'
  };
  return __jsx("div", {
    className: "jsx-3033268396",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3033268396" + " " + "result",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3033268396",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, (dayObj[time.getDay()] || '') + time.toLocaleTimeString())), __jsx("div", {
    className: "jsx-3033268396" + " " + 'code',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("code", {
    className: "jsx-3033268396",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "\n          const useClock = (initTime) => {\n          const [time, setTime] = useState(initTime)\n\n          useEffect(() => {\n            const id = setInterval(() => {\n              setTime(new Date())\n              }, 1000)\n            return () => clearInterval(id)\n            }, [])\n\n        return time\n          }\n         ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3033268396",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMVxcRGVza3RvcFxcbmV4dG1vdmllXFxwYWdlc1xcY2xvY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyIsImZpbGUiOiJDOlxcVXNlcnNcXDFcXERlc2t0b3BcXG5leHRtb3ZpZVxccGFnZXNcXGNsb2NrLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydMKgUmVhY3TCoGZyb23CoCdyZWFjdCdcclxuaW1wb3J0IHVzZUNsb2NrIGZyb20gJy4uL2xpYi91c2VDbG9jayc7XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoGZ1bmN0aW9uwqBDbG9jaygpwqB7XHJcbiAgY29uc3QgdGltZSA9IHVzZUNsb2NrKG5ldyBEYXRlKCkpXHJcblxyXG7CoMKgY29uc3TCoGRheU9iasKgPcKge1xyXG7CoMKgwqDCoDE6wqAn5pif5pyf5LiAJyxcclxuwqDCoMKgwqAyOsKgJ+aYn+acn+S6jCcsXHJcbsKgwqDCoMKgMzrCoCfmmJ/mnJ/kuIknLFxyXG7CoMKgwqDCoDQ6wqAn5pif5pyf5ZubJyxcclxuwqDCoMKgwqA1OsKgJ+aYn+acn+S6lCcsXHJcbsKgwqDCoMKgNjrCoCfmmJ/mnJ/lha0nLFxyXG7CoMKgwqDCoDA6wqAn5pif5pyf5aSpJ1xyXG7CoMKgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cclxuICAgICAgICA8cD57KGRheU9ialt0aW1lLmdldERheSgpXSB8fCAnJykgKyB0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2RlJz5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICBjb25zdCB1c2VDbG9jayA9IChpbml0VGltZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoaW5pdFRpbWUpXHJcblxyXG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKVxyXG4gICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKVxyXG4gICAgICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgYH1cclxuICAgICAgICA8L2NvZGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\1\\\\Desktop\\\\nextmovie\\\\pages\\\\clock.tsx */"));
}

_s(Clock, "R+PESSTxWxrvs4b8p2D6glLz8eQ=", false, function () {
  return [_lib_useClock__WEBPACK_IMPORTED_MODULE_2__["default"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbG9jay50c3giXSwibmFtZXMiOlsiQ2xvY2siLCJ0aW1lIiwidXNlQ2xvY2siLCJEYXRlIiwiZGF5T2JqIiwiZ2V0RGF5IiwidG9Mb2NhbGVUaW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyw2REFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiLE9BQUcsS0FEVTtBQUViLE9BQUcsS0FGVTtBQUdiLE9BQUcsS0FIVTtBQUliLE9BQUcsS0FKVTtBQUtiLE9BQUcsS0FMVTtBQU1iLE9BQUcsS0FOVTtBQU9iLE9BQUc7QUFQVSxHQUFmO0FBVUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLFFBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFJLENBQUNBLE1BQU0sQ0FBQ0gsSUFBSSxDQUFDSSxNQUFMLEVBQUQsQ0FBTixJQUF5QixFQUExQixJQUFnQ0osSUFBSSxDQUFDSyxrQkFBTCxFQUFwQyxDQURGLENBREYsRUFJRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrVkFERixDQUpGO0FBQUE7QUFBQTtBQUFBLCszREFERjtBQThCRDs7R0EzQ3VCTixLO1VBQ1RFLHFEOzs7S0FEU0YsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcY2xvY2suanMuYTNiMzU4ZDAzYjk3YWU0MDUzZDEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydMKgUmVhY3TCoGZyb23CoCdyZWFjdCdcclxuaW1wb3J0IHVzZUNsb2NrIGZyb20gJy4uL2xpYi91c2VDbG9jayc7XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoGZ1bmN0aW9uwqBDbG9jaygpwqB7XHJcbiAgY29uc3QgdGltZSA9IHVzZUNsb2NrKG5ldyBEYXRlKCkpXHJcblxyXG7CoMKgY29uc3TCoGRheU9iasKgPcKge1xyXG7CoMKgwqDCoDE6wqAn5pif5pyf5LiAJyxcclxuwqDCoMKgwqAyOsKgJ+aYn+acn+S6jCcsXHJcbsKgwqDCoMKgMzrCoCfmmJ/mnJ/kuIknLFxyXG7CoMKgwqDCoDQ6wqAn5pif5pyf5ZubJyxcclxuwqDCoMKgwqA1OsKgJ+aYn+acn+S6lCcsXHJcbsKgwqDCoMKgNjrCoCfmmJ/mnJ/lha0nLFxyXG7CoMKgwqDCoDA6wqAn5pif5pyf5aSpJ1xyXG7CoMKgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cclxuICAgICAgICA8cD57KGRheU9ialt0aW1lLmdldERheSgpXSB8fCAnJykgKyB0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2RlJz5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtgXHJcbiAgICAgICAgICBjb25zdCB1c2VDbG9jayA9IChpbml0VGltZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoaW5pdFRpbWUpXHJcblxyXG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKVxyXG4gICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKVxyXG4gICAgICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgYH1cclxuICAgICAgICA8L2NvZGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgXHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=