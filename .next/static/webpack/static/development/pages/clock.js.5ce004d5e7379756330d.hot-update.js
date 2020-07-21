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
    className: "jsx-3800963051" + " " + 'main',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "jsx-3800963051" + " " + 'code',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("code", {
    className: "jsx-3800963051",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, " \n          const useClock = (initTime) => {\n          const [time, setTime] = useState(initTime)\n\n          useEffect(() => {\n            const id = setInterval(() => {\n              setTime(new Date())\n              }, 1000)\n            return () => clearInterval(id)\n            }, [])\n\n        return time\n          }\n         ")), __jsx("div", {
    className: "jsx-3800963051" + " " + "result",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: "jsx-3800963051",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, (dayObj[time.getDay()] || '') + time.toLocaleTimeString())), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3800963051",
    __self: this
  }, ".main.jsx-3800963051{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:5rem;margin-left:10vw;width:80vw;}.code.jsx-3800963051{width:40vw;background:yellow;}.result.jsx-3800963051{width:40vw;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcMVxcRGVza3RvcFxcbmV4dG1vdmllXFxwYWdlc1xcY2xvY2sudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDUyxBQUcwQixBQVFGLEFBS0EsV0FIZCxBQUlDLGtCQUpBLDZDQVJrQixnQkFDQyxpQkFDTixXQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xcMVxcRGVza3RvcFxcbmV4dG1vdmllXFxwYWdlc1xcY2xvY2sudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0wqBSZWFjdMKgZnJvbcKgJ3JlYWN0J1xyXG5pbXBvcnQgdXNlQ2xvY2sgZnJvbSAnLi4vbGliL3VzZUNsb2NrJztcclxuXHJcbmV4cG9ydMKgZGVmYXVsdMKgZnVuY3Rpb27CoENsb2NrKCnCoHtcclxuICBjb25zdCB0aW1lID0gdXNlQ2xvY2sobmV3IERhdGUoKSlcclxuXHJcbsKgwqBjb25zdMKgZGF5T2JqwqA9wqB7XHJcbsKgwqDCoMKgMTrCoCfmmJ/mnJ/kuIAnLFxyXG7CoMKgwqDCoDI6wqAn5pif5pyf5LqMJyxcclxuwqDCoMKgwqAzOsKgJ+aYn+acn+S4iScsXHJcbsKgwqDCoMKgNDrCoCfmmJ/mnJ/lm5snLFxyXG7CoMKgwqDCoDU6wqAn5pif5pyf5LqUJyxcclxuwqDCoMKgwqA2OsKgJ+aYn+acn+WFrScsXHJcbsKgwqDCoMKgMDrCoCfmmJ/mnJ/lpKknXHJcbsKgwqB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2RlJz5cclxuICAgICAgICA8Y29kZT5cclxuICAgICAgICAgIHtgIFxyXG4gICAgICAgICAgY29uc3QgdXNlQ2xvY2sgPSAoaW5pdFRpbWUpID0+IHtcclxuICAgICAgICAgIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKGluaXRUaW1lKVxyXG5cclxuICAgICAgICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgIHNldFRpbWUobmV3IERhdGUoKSlcclxuICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpZClcclxuICAgICAgICAgICAgfSwgW10pXHJcblxyXG4gICAgICAgIHJldHVybiB0aW1lXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgIGB9XHJcbiAgICAgICAgPC9jb2RlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRcIj5cclxuICAgICAgICA8cD57KGRheU9ialt0aW1lLmdldERheSgpXSB8fCAnJykgKyB0aW1lLnRvTG9jYWxlVGltZVN0cmluZygpfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAge2BcclxuICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgLyogZmxleC13cmFwOiB3cmFwOyAqL1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTB2dztcclxuICAgICAgICAgICAgd2lkdGg6IDgwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmNvZGUge1xyXG4gICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgICAgYmFja2dyb3VuZDp5ZWxsb3dcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAucmVzdWx0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDQwdnc7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgIGB9XHJcbiAgICAgIDwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\1\\\\Desktop\\\\nextmovie\\\\pages\\\\clock.tsx */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jbG9jay50c3giXSwibmFtZXMiOlsiQ2xvY2siLCJ0aW1lIiwidXNlQ2xvY2siLCJEYXRlIiwiZGF5T2JqIiwiZ2V0RGF5IiwidG9Mb2NhbGVUaW1lU3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLEtBQVQsR0FBaUI7QUFBQTs7QUFDOUIsTUFBTUMsSUFBSSxHQUFHQyw2REFBUSxDQUFDLElBQUlDLElBQUosRUFBRCxDQUFyQjtBQUVBLE1BQU1DLE1BQU0sR0FBRztBQUNiLE9BQUcsS0FEVTtBQUViLE9BQUcsS0FGVTtBQUdiLE9BQUcsS0FIVTtBQUliLE9BQUcsS0FKVTtBQUtiLE9BQUcsS0FMVTtBQU1iLE9BQUcsS0FOVTtBQU9iLE9BQUc7QUFQVSxHQUFmO0FBVUEsU0FDRTtBQUFBLHdDQUFlLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUEsd0NBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdXQURGLENBREYsRUFtQkU7QUFBQSx3Q0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSSxDQUFDQSxNQUFNLENBQUNILElBQUksQ0FBQ0ksTUFBTCxFQUFELENBQU4sSUFBeUIsRUFBMUIsSUFBZ0NKLElBQUksQ0FBQ0ssa0JBQUwsRUFBcEMsQ0FERixDQW5CRjtBQUFBO0FBQUE7QUFBQSxxcUZBREY7QUE4Q0Q7O0dBM0R1Qk4sSztVQUNURSxxRDs7O0tBRFNGLEsiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGNsb2NrLmpzLjVjZTAwNGQ1ZTczNzk3NTYzMzBkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnTCoFJlYWN0wqBmcm9twqAncmVhY3QnXHJcbmltcG9ydCB1c2VDbG9jayBmcm9tICcuLi9saWIvdXNlQ2xvY2snO1xyXG5cclxuZXhwb3J0wqBkZWZhdWx0wqBmdW5jdGlvbsKgQ2xvY2soKcKge1xyXG4gIGNvbnN0IHRpbWUgPSB1c2VDbG9jayhuZXcgRGF0ZSgpKVxyXG5cclxuwqDCoGNvbnN0wqBkYXlPYmrCoD3CoHtcclxuwqDCoMKgwqAxOsKgJ+aYn+acn+S4gCcsXHJcbsKgwqDCoMKgMjrCoCfmmJ/mnJ/kuownLFxyXG7CoMKgwqDCoDM6wqAn5pif5pyf5LiJJyxcclxuwqDCoMKgwqA0OsKgJ+aYn+acn+WbmycsXHJcbsKgwqDCoMKgNTrCoCfmmJ/mnJ/kupQnLFxyXG7CoMKgwqDCoDY6wqAn5pif5pyf5YWtJyxcclxuwqDCoMKgwqAwOsKgJ+aYn+acn+WkqSdcclxuwqDCoH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYWluJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvZGUnPlxyXG4gICAgICAgIDxjb2RlPlxyXG4gICAgICAgICAge2AgXHJcbiAgICAgICAgICBjb25zdCB1c2VDbG9jayA9IChpbml0VGltZSkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgW3RpbWUsIHNldFRpbWVdID0gdXNlU3RhdGUoaW5pdFRpbWUpXHJcblxyXG4gICAgICAgICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgc2V0VGltZShuZXcgRGF0ZSgpKVxyXG4gICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIHJldHVybiAoKSA9PiBjbGVhckludGVydmFsKGlkKVxyXG4gICAgICAgICAgICB9LCBbXSlcclxuXHJcbiAgICAgICAgcmV0dXJuIHRpbWVcclxuICAgICAgICAgIH1cclxuICAgICAgICAgYH1cclxuICAgICAgICA8L2NvZGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdFwiPlxyXG4gICAgICAgIDxwPnsoZGF5T2JqW3RpbWUuZ2V0RGF5KCldIHx8ICcnKSArIHRpbWUudG9Mb2NhbGVUaW1lU3RyaW5nKCl9PC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICB7YFxyXG4gICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHZ3O1xyXG4gICAgICAgICAgICB3aWR0aDogODB2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAuY29kZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOnllbGxvd1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5yZXN1bHQge1xyXG4gICAgICAgICAgICB3aWR0aDogNDB2dztcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgYH1cclxuICAgICAgPC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=