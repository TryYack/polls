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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState5[0],
      setTitle = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState6[0],
      setDescription = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(new Date()),
      expiry = _useState7[0],
      setExpiry = _useState7[1];

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
      lineNumber: 45
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "389275926",
    __self: this
  }, ".poll-container.jsx-389275926{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-389275926{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-389275926{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q2tCLEFBR3NCLEFBU0osQUFTVyxXQWpCTCxPQWtCRixXQUNiLElBVndCLG9EQVJBLDBCQVNULG9EQVJPLHNCQVNELDJFQVJFLGtCQVNBLDBEQVJFLGtCQVNBLGlGQVJ6QixrQkFTQSIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL2NvbXBvbmVudHMvZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3MsIEJ1dHRvbiwgSW5wdXQsIFRleHRBcmVhIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtoaWdoZXN0LCBzZXRIaWdoZXN0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtleHBpcmVkLCBzZXRFeHBpcmVkXSA9IHVzZVN0YXRlKDApXG5cblxuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtleHBpcnksIHNldEV4cGlyeV0gPSB1c2VTdGF0ZShuZXcgRGF0ZSgpKVxuXG4gIGNvbnN0IGFuc3dlclF1ZXN0aW9uID0gYXN5bmMgKHF1ZXN0aW9uSWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbklkKVxuICAgIHNldENvbXBsZXRlKHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhbnN3ZXJDb3VudCA9IDBcbiAgICBsZXQgYW5zd2VyQ291bnRIaWdoZXN0ID0gMFxuXG4gICAgcHJvcHMucXVlc3Rpb25zLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICAvLyBTZWUgaWYgdGhpcyB1c2VyIGhhcyBjb21wbGV0ZWQgdGhlIHBvbGxcbiAgICAgIHF1ZXN0aW9uLmFuc3dlcnMubWFwKGFuc3dlciA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIudXNlcl9pZCA9PSBwcm9wcy5jdXJyZW50VXNlcklkKSBzZXRDb21wbGV0ZSh0cnVlKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IHRoZSBzY29yZSBmb3IgdGhlIGhpZ2hlc3QgYW1vdW50IG9mIHZvdGVzXG4gICAgICBpZiAocXVlc3Rpb24uYW5zd2Vycy5sZW5ndGggPiBhbnN3ZXJDb3VudEhpZ2hlc3QpIGFuc3dlckNvdW50SGlnaGVzdCA9IHF1ZXN0aW9uLmFuc3dlcnMubGVuZ3RoXG5cbiAgICAgIC8vIEluY3JlbWVuZXQgdGhlIHRvdGFsIGFtb3VudCBvZiBhbnN3ZXJzL3ZvdGVkXG4gICAgICBhbnN3ZXJDb3VudCArPSBxdWVzdGlvbi5hbnN3ZXJzLmxlbmd0aFxuICAgIH0pXG5cbiAgICBzZXRUb3RhbChhbnN3ZXJDb3VudClcbiAgICBzZXRIaWdoZXN0KGFuc3dlckNvdW50SGlnaGVzdClcbiAgICBzZXRFeHBpcmVkKG1vbWVudChwcm9wcy5leHBpcnkpLmlzQmVmb3JlKG1vbWVudCgpKSlcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wb2xsLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xsLWlubmVyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTBcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTBcIj57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XG5cbiAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgIHZhbHVlPVwiZWRcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7IWNvbXBsZXRlICYmICFleHBpcmVkICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDM1IH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYW5zd2VyUXVlc3Rpb24ocXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeyhjb21wbGV0ZSB8fCBleHBpcmVkKSAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGguZmxvb3IoKHF1ZXN0aW9uLmFuc3dlcnMubGVuZ3RoIC8gdG90YWwpICogMTAwKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gcXVlc3Rpb24uYW5zd2Vycy5sZW5ndGggPj0gaGlnaGVzdCA/ICcjZTllZGYyJyA6ICcjZjBmMmY1J1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnF1ZXN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicCBjb2xvci1kMSB0ZXh0LWxlZnQgdy0xMDAgbXQtNVwiPlxuICAgICAgICAgICAge2V4cGlyZWQgJiZcbiAgICAgICAgICAgICAgPHNwYW4+VGhpcyBwb2xsIGV4cGlyZWQge21vbWVudChwcm9wcy5leHBpcnkpLmZyb21Ob3coKX08L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IWV4cGlyZWQgJiZcbiAgICAgICAgICAgICAgPHNwYW4+VGhpcyBwb2xsIGV4cGlyZXMgYXQge21vbWVudChwcm9wcy5leHBpcnkpLmZvcm1hdCgnTExMJyl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRVc2VySWQgPT0gcHJvcHMudXNlcklkICYmXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiYnV0dG9uIG1sLTEwIGNvbG9yLWJsdWVcIj5VcGRhdGU8L3N0cm9uZz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCAmJlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1yZWRcIj5EZWxldGU8L3N0cm9uZz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-389275926" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-389275926" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, props.description), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: "ed",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, props.questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-389275926" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
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
        lineNumber: 85
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
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
        lineNumber: 105
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Progress"], {
      percentage: percentage,
      color: color,
      text: question.question,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-389275926" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).fromNow()), !expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "This poll expires at ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).format('LLL')), props.currentUserId == props.userId && __jsx("strong", {
    className: "jsx-389275926" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    className: "jsx-389275926" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, "Delete")))));
}

/***/ })

})
//# sourceMappingURL=update.js.a0f28dc0ee89b8ed07fe.hot-update.js.map