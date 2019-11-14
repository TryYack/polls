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
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBUcmFzaCB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Db21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoKVxuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ0REJykpXG4gIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUodG9kYXkuZm9ybWF0KCdNTScpKVxuICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ1lZWVknKSlcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFtdKVxuXG4gIGNvbnN0IGFkZFF1ZXN0aW9uID0gKCkgPT4gc2V0UXVlc3Rpb25zKFsuLi5xdWVzdGlvbnMsIHtcbiAgICBpZDogcXVlc3Rpb25zLmxlbmd0aCArIDEsXG4gICAgdGV4dDogJycsXG4gIH1dKVxuXG4gIGNvbnN0IHJlbW92ZVF1ZXN0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG11dGFibGVRdWVzdGlvbnMgPSBPYmplY3QuYXNzaWduKFtdLCBxdWVzdGlvbnMpXG4gICAgbXV0YWJsZVF1ZXN0aW9ucy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgc2V0UXVlc3Rpb25zKG11dGFibGVRdWVzdGlvbnMpXG4gIH1cblxuICBjb25zdCB1cGRhdGVRdWVzdGlvbiA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldFF1ZXN0aW9ucyhxdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcbiAgICAgIGlmIChpZCAhPSBxdWVzdGlvbi5pZCkgcmV0dXJuIHF1ZXN0aW9uXG5cbiAgICAgIHJldHVybiB7IGlkOiBxdWVzdGlvbi5pZCwgdGV4dCB9XG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkKSByZXR1cm5cblxuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocHJvcHMuZXhwaXJ5KVxuXG4gICAgc2V0VGl0bGUocHJvcHMudGl0bGUpXG4gICAgc2V0RGVzY3JpcHRpb24ocHJvcHMuZGVzY3JpcHRpb24pXG4gICAgc2V0RGF5KGRhdGUuZm9ybWF0KCdERCcpKVxuICAgIHNldE1vbnRoKGRhdGUuZm9ybWF0KCdNTScpKVxuICAgIHNldFllYXIoZGF0ZS5mb3JtYXQoJ1lZWVknKSlcbiAgICBzZXRRdWVzdGlvbnMocHJvcHMucXVlc3Rpb25zKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGwtaW5uZXIge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTIwXCI+Q3JlYXRlIGEgbmV3IHBvbGw8L2Rpdj5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgaW5wdXRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb2xsIHRpdGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICB0ZXh0YXJlYVNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTBcIj5RdWVzdGlvbnM8L2Rpdj5cblxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb24gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVRdWVzdGlvbihlLnRhcmdldC52YWx1ZSwgcXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUcmFzaFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQUNCNUJEXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyMFwiXG4gICAgICAgICAgICAgICAgICB0aGlja25lc3M9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMjAgYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcmVtb3ZlUXVlc3Rpb24oaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbXQtMjBcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgIHRleHQ9XCJBZGQgYSBuZXcgcXVlc3Rpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRRdWVzdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlclwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgcG9sbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
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
    placeholder: "Poll title",
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
    placeholder: "Poll description",
    rows: 3,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Questions"), questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
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
        lineNumber: 101
      },
      __self: this
    }), __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Trash"], {
      color: "#ACB5BD",
      size: "20",
      thickness: "1.5",
      className: "ml-20 button",
      onClick: function onClick(e) {
        return removeQuestion(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new question",
    onClick: addQuestion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue",
    text: "Create poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=update.js.cee8d561993686b856c7.hot-update.js.map