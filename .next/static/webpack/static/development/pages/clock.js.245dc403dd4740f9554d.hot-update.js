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
    className: "jsx-2170358054",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-2170358054" + " " + 'code',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("code", {
    className: "jsx-2170358054",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\n          const useClock = (initTime) => {\n          const [time, setTime] = useState(initTime)\n\n          useEffect(() => {\n            const id = setInterval(() => {\n              setTime(new Date())\n              }, 1000)\n            return () => clearInterval(id)\n            }, [])\n\n        return time\n          }\n         ")), __jsx("div", {
    className: "jsx-2170358054" + " " + "result",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-2170358054",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, (dayObj[time.getDay()] || '') + time.toLocaleTimeString())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2170358054",
    __self: this
  }, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMVxcRGVza3RvcFxcbmV4dG1vdmllXFxwYWdlc1xcY2xvY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyIsImZpbGUiOiJDOlxcVXNlcnNcXDFcXERlc2t0b3BcXG5leHRtb3ZpZVxccGFnZXNcXGNsb2NrLnRzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydMKgUmVhY3TCoGZyb23CoCdyZWFjdCdcclxuaW1wb3J0IHVzZUNsb2NrIGZyb20gJy4uL2xpYi91c2VDbG9jayc7XHJcblxyXG5leHBvcnTCoGRlZmF1bHTCoGZ1bmN0aW9uwqBDbG9jaygpwqB7XHJcbiAgY29uc3QgdGltZSA9IHVzZUNsb2NrKG5ldyBEYXRlKCkpXHJcblxyXG7CoMKgY29uc3TCoGRheU9iasKgPcKge1xyXG7CoMKgwqDCoDE6wqAn5pif5pyf5LiAJyxcclxuwqDCoMKgwqAyOsKgJ+aYn+acn+S6jCcsXHJcbsKgwqDCoMKgMzrCoCfmmJ/mnJ/kuIknLFxyXG7CoMKgwqDCoDQ6wqAn5pif5pyf5ZubJyxcclxuwqDCoMKgwqA1OsKgJ+aYn+acn+S6lCcsXHJcbsKgwqDCoMKgNjrCoCfmmJ/mnJ/lha0nLFxyXG7CoMKgwqDCoDA6wqAn5pif5pyf5aSpJ1xyXG7CoMKgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge2BcclxuICAgICAgICAgIGNvbnN0IHVzZUNsb2NrID0gKGluaXRUaW1lKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShpbml0VGltZSlcclxuXHJcbiAgICAgICAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICBzZXRUaW1lKG5ldyBEYXRlKCkpXHJcbiAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaWQpXHJcbiAgICAgICAgICAgIH0sIFtdKVxyXG5cclxuICAgICAgICByZXR1cm4gdGltZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICBgfVxyXG4gICAgICAgIDwvY29kZT5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0XCI+XHJcbiAgICAgICAgPHA+eyhkYXlPYmpbdGltZS5nZXREYXkoKV0gfHwgJycpICsgdGltZS50b0xvY2FsZVRpbWVTdHJpbmcoKX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgIHtgXHJcbiAgICAgICAgICBcclxuICAgICAgICBgfVxyXG4gICAgICA8L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il19 */\n/*@ sourceURL=C:\\\\Users\\\\1\\\\Desktop\\\\nextmovie\\\\pages\\\\clock.tsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbG9jay50c3giXSwibmFtZXMiOlsiQ2xvY2siLCJ0aW1lIiwidXNlQ2xvY2siLCJEYXRlIiwiZGF5T2JqIiwiZ2V0RGF5IiwidG9Mb2NhbGVUaW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyw2REFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiLE9BQUcsS0FEVTtBQUViLE9BQUcsS0FGVTtBQUdiLE9BQUcsS0FIVTtBQUliLE9BQUcsS0FKVTtBQUtiLE9BQUcsS0FMVTtBQU1iLE9BQUcsS0FOVTtBQU9iLE9BQUc7QUFQVSxHQUFmO0FBVUEsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrVkFERixDQURGLEVBbUJFO0FBQUEsd0NBQWUsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUksQ0FBQ0EsTUFBTSxDQUFDSCxJQUFJLENBQUNJLE1BQUwsRUFBRCxDQUFOLElBQXlCLEVBQTFCLElBQWdDSixJQUFJLENBQUNLLGtCQUFMLEVBQXBDLENBREYsQ0FuQkY7QUFBQTtBQUFBO0FBQUEsKzNEQURGO0FBOEJEOztHQTNDdUJOLEs7VUFDVEUscUQ7OztLQURTRixLIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxjbG9jay5qcy4yNDVkYzQwM2RkNDc0MGY5NTU0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0wqBSZWFjdMKgZnJvbcKgJ3JlYWN0J1xyXG5pbXBvcnQgdXNlQ2xvY2sgZnJvbSAnLi4vbGliL3VzZUNsb2NrJztcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgZnVuY3Rpb27CoENsb2NrKCnCoHtcclxuICBjb25zdCB0aW1lID0gdXNlQ2xvY2sobmV3IERhdGUoKSlcclxuXHJcbsKgwqBjb25zdMKgZGF5T2JqwqA9wqB7XHJcbsKgwqDCoMKgMTrCoCfmmJ/mnJ/kuIAnLFxyXG7CoMKgwqDCoDI6wqAn5pif5pyf5LqMJyxcclxuwqDCoMKgwqAzOsKgJ+aYn+acn+S4iScsXHJcbsKgwqDCoMKgNDrCoCfmmJ/mnJ/lm5snLFxyXG7CoMKgwqDCoDU6wqAn5pif5pyf5LqUJyxcclxuwqDCoMKgwqA2OsKgJ+aYn+acn+WFrScsXHJcbsKgwqDCoMKgMDrCoCfmmJ/mnJ/lpKknXHJcbsKgwqB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29kZSc+XHJcbiAgICAgICAgPGNvZGU+XHJcbiAgICAgICAgICB7YFxyXG4gICAgICAgICAgY29uc3QgdXNlQ2xvY2sgPSAoaW5pdFRpbWUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKGluaXRUaW1lKVxyXG5cclxuICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRpbWUobmV3IERhdGUoKSlcclxuICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZClcclxuICAgICAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgIHJldHVybiB0aW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIGB9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cclxuICAgICAgICA8cD57KGRheU9ialt0aW1lLmdldERheSgpXSB8fCAnJykgKyB0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIFxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9