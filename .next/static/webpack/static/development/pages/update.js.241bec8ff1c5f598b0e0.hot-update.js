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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/form.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function FormComponent(props) {
  var today = moment__WEBPACK_IMPORTED_MODULE_5___default()();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('DD')),
      day = _useState3[0],
      setDay = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('MM')),
      month = _useState4[0],
      setMonth = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('YYYY')),
      year = _useState5[0],
      setYear = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      questions = _useState6[0],
      setQuestions = _useState6[1];

  var addQuestion = function addQuestion() {
    return setQuestions([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(questions), [{
      id: questions.length + 1,
      text: ''
    }]));
  };

  var removeQuestion = function removeQuestion(index) {
    var mutableQuestions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], questions);

    mutableQuestions.splice(index, 1);
    setQuestions(mutableQuestions);
  };

  var updateQuestion = function updateQuestion(text, id) {
    setQuestions(questions.map(function (question) {
      if (id != question.id) return question;
      return {
        id: question.id,
        text: text
      };
    }));
  };

  var save = function save() {};

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!props.id) return;
    var date = moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry);
    setTitle(props.title);
    setDescription(props.description);
    setDay(date.format('DD'));
    setMonth(date.format('MM'));
    setYear(date.format('YYYY'));
    setQuestions(props.questions);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBYIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG5cbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnREQnKSlcbiAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ01NJykpXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnWVlZWScpKVxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW10pXG5cbiAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiBzZXRRdWVzdGlvbnMoWy4uLnF1ZXN0aW9ucywge1xuICAgIGlkOiBxdWVzdGlvbnMubGVuZ3RoICsgMSxcbiAgICB0ZXh0OiAnJyxcbiAgfV0pXG5cbiAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbXV0YWJsZVF1ZXN0aW9ucyA9IE9iamVjdC5hc3NpZ24oW10sIHF1ZXN0aW9ucylcbiAgICBtdXRhYmxlUXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRRdWVzdGlvbnMobXV0YWJsZVF1ZXN0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucy5tYXAocXVlc3Rpb24gPT4ge1xuICAgICAgaWYgKGlkICE9IHF1ZXN0aW9uLmlkKSByZXR1cm4gcXVlc3Rpb25cblxuICAgICAgcmV0dXJuIHsgaWQ6IHF1ZXN0aW9uLmlkLCB0ZXh0IH1cbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHNhdmUgPSAoKSA9PiB7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJvcHMuaWQpIHJldHVyblxuXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudChwcm9wcy5leHBpcnkpXG5cbiAgICBzZXRUaXRsZShwcm9wcy50aXRsZSlcbiAgICBzZXREZXNjcmlwdGlvbihwcm9wcy5kZXNjcmlwdGlvbilcbiAgICBzZXREYXkoZGF0ZS5mb3JtYXQoJ0REJykpXG4gICAgc2V0TW9udGgoZGF0ZS5mb3JtYXQoJ01NJykpXG4gICAgc2V0WWVhcihkYXRlLmZvcm1hdCgnWVlZWScpKVxuICAgIHNldFF1ZXN0aW9ucyhwcm9wcy5xdWVzdGlvbnMpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCBjb2xvci1kMyB0ZXh0LWxlZnQgdy0xMDAgbWItMjBcIj5DcmVhdGUgYSBuZXcgcG9sbDwvZGl2PlxuXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxUZXh0YXJlYVxuICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxuICAgICAgICAgICAgdGV4dGFyZWFTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTBcIj5RdWVzdGlvbnM8L2Rpdj5cblxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb24gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVRdWVzdGlvbihlLnRhcmdldC52YWx1ZSwgcXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPFhcbiAgICAgICAgICAgICAgICAgIGNvbG9yPVwiIzUyNDE1MFwiXG4gICAgICAgICAgICAgICAgICBzaXplPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgdGhpY2tuZXNzPVwiMS41XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLTIwIGJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtlID0+IHJlbW92ZVF1ZXN0aW9uKGluZGV4KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG10LTIwXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICB0ZXh0PVwiQWRkIGEgbmV3IHF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkUXVlc3Rpb259XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ZXJcIiAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICB0aGVtZT1cImJsdWVcIlxuICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIHBvbGxcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-674474010" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "h4 color-d3 text-left w-100 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Create a new poll"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: title,
    inputSize: "large",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    value: description,
    textareaSize: "large",
    rows: 3,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "Questions"), questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: question.text,
      placeholder: "Option text",
      inputSize: "large",
      onChange: function onChange(e) {
        return updateQuestion(e.target.value, question.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }), __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["X"], {
      color: "#524150",
      size: "30",
      thickness: "1.5",
      className: "ml-20 button",
      onClick: function onClick(e) {
        return removeQuestion(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new question",
    onClick: addQuestion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue",
    text: "Create poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=update.js.241bec8ff1c5f598b0e0.hot-update.js.map