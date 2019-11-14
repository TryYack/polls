webpackHotUpdate("static/development/pages/update.js",{

/***/ "./components/form.component.js":
/*!**************************************!*\
  !*** ./components/form.component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FormComponent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/form.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function FormComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      complete = _useState[0],
      setComplete = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      total = _useState2[0],
      setTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      highest = _useState3[0],
      setHighest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      expired = _useState4[0],
      setExpired = _useState4[1];

  var answerQuestion =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(questionId) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(questionId);
              setComplete(true);

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function answerQuestion(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var answerCount = 0;
    var answerCountHighest = 0;
    props.questions.map(function (question) {
      // See if this user has completed the poll
      question.answers.map(function (answer) {
        if (answer.user_id == props.currentUserId) setComplete(true);
      }); // Set the score for the highest amount of votes

      if (question.answers.length > answerCountHighest) answerCountHighest = question.answers.length; // Incremenet the total amount of answers/voted

      answerCount += question.answers.length;
    });
    setTotal(answerCount);
    setHighest(answerCountHighest);
    setExpired(moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_5___default()()));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "389275926",
    __self: this
  }, ".poll-container.jsx-389275926{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-389275926{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-389275926{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Q2tCLEFBR3NCLEFBU0osQUFTVyxXQWpCTCxPQWtCRixXQUNiLElBVndCLG9EQVJBLDBCQVNULG9EQVJPLHNCQVNELDJFQVJFLGtCQVNBLDBEQVJFLGtCQVNBLGlGQVJ6QixrQkFTQSIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3MsIEJ1dHRvbiwgSW5wdXQgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtQ29tcG9uZW50KHByb3BzKSB7XG4gIGNvbnN0IFtjb21wbGV0ZSwgc2V0Q29tcGxldGVdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFt0b3RhbCwgc2V0VG90YWxdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2hpZ2hlc3QsIHNldEhpZ2hlc3RdID0gdXNlU3RhdGUoMClcbiAgY29uc3QgW2V4cGlyZWQsIHNldEV4cGlyZWRdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBhbnN3ZXJRdWVzdGlvbiA9IGFzeW5jIChxdWVzdGlvbklkKSA9PiB7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25JZClcbiAgICBzZXRDb21wbGV0ZSh0cnVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5zd2VyQ291bnQgPSAwXG4gICAgbGV0IGFuc3dlckNvdW50SGlnaGVzdCA9IDBcblxuICAgIHByb3BzLnF1ZXN0aW9ucy5tYXAocXVlc3Rpb24gPT4ge1xuICAgICAgLy8gU2VlIGlmIHRoaXMgdXNlciBoYXMgY29tcGxldGVkIHRoZSBwb2xsXG4gICAgICBxdWVzdGlvbi5hbnN3ZXJzLm1hcChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLnVzZXJfaWQgPT0gcHJvcHMuY3VycmVudFVzZXJJZCkgc2V0Q29tcGxldGUodHJ1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIFNldCB0aGUgc2NvcmUgZm9yIHRoZSBoaWdoZXN0IGFtb3VudCBvZiB2b3Rlc1xuICAgICAgaWYgKHF1ZXN0aW9uLmFuc3dlcnMubGVuZ3RoID4gYW5zd2VyQ291bnRIaWdoZXN0KSBhbnN3ZXJDb3VudEhpZ2hlc3QgPSBxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aFxuXG4gICAgICAvLyBJbmNyZW1lbmV0IHRoZSB0b3RhbCBhbW91bnQgb2YgYW5zd2Vycy92b3RlZFxuICAgICAgYW5zd2VyQ291bnQgKz0gcXVlc3Rpb24uYW5zd2Vycy5sZW5ndGhcbiAgICB9KVxuXG4gICAgc2V0VG90YWwoYW5zd2VyQ291bnQpXG4gICAgc2V0SGlnaGVzdChhbnN3ZXJDb3VudEhpZ2hlc3QpXG4gICAgc2V0RXhwaXJlZChtb21lbnQocHJvcHMuZXhwaXJ5KS5pc0JlZm9yZShtb21lbnQoKSkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0IGNvbG9yLWQzIHRleHQtbGVmdCB3LTEwMCBtYi0wXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgY29sb3ItZDAgdGV4dC1sZWZ0IHctMTAwIG1iLTEwXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgICAgeyFjb21wbGV0ZSAmJiAhZXhwaXJlZCAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtxdWVzdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzNSB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFuc3dlclF1ZXN0aW9uKHF1ZXN0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIHsoY29tcGxldGUgfHwgZXhwaXJlZCkgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3Byb3BzLnF1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBlcmNlbnRhZ2UgPSBNYXRoLmZsb29yKChxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aCAvIHRvdGFsKSAqIDEwMClcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHF1ZXN0aW9uLmFuc3dlcnMubGVuZ3RoID49IGhpZ2hlc3QgPyAnI2U5ZWRmMicgOiAnI2YwZjJmNSdcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWNvbnRhaW5lclwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtxdWVzdGlvbi5xdWVzdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAgY29sb3ItZDEgdGV4dC1sZWZ0IHctMTAwIG10LTVcIj5cbiAgICAgICAgICAgIHtleHBpcmVkICYmXG4gICAgICAgICAgICAgIDxzcGFuPlRoaXMgcG9sbCBleHBpcmVkIHttb21lbnQocHJvcHMuZXhwaXJ5KS5mcm9tTm93KCl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFleHBpcmVkICYmXG4gICAgICAgICAgICAgIDxzcGFuPlRoaXMgcG9sbCBleHBpcmVzIGF0IHttb21lbnQocHJvcHMuZXhwaXJ5KS5mb3JtYXQoJ0xMTCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCAmJlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1ibHVlXCI+VXBkYXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7cHJvcHMuY3VycmVudFVzZXJJZCA9PSBwcm9wcy51c2VySWQgJiZcbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gbWwtMTAgY29sb3ItcmVkXCI+RGVsZXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-389275926" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-389275926" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, props.questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-389275926" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      text: question.question,
      theme: "blue-border",
      size: "full-width",
      style: {
        height: 35
      },
      onClick: function onClick() {
        return answerQuestion(question.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, props.questions.map(function (question, index) {
    var percentage = Math.floor(question.answers.length / total * 100);
    var color = question.answers.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-389275926" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Progress"], {
      percentage: percentage,
      color: color,
      text: question.question,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-389275926" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).fromNow()), !expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, "This poll expires at ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).format('LLL')), props.currentUserId == props.userId && __jsx("strong", {
    className: "jsx-389275926" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    className: "jsx-389275926" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "Delete")))));
}

/***/ })

})
//# sourceMappingURL=update.js.35f538877643a57bf99e.hot-update.js.map