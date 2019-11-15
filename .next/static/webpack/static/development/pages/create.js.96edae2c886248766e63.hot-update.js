webpackHotUpdate("static/development/pages/create.js",{

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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      id = _useState[0],
      setId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      title = _useState2[0],
      setTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      description = _useState3[0],
      setDescription = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('DD')),
      day = _useState4[0],
      setDay = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('MM')),
      month = _useState5[0],
      setMonth = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('YYYY')),
      year = _useState6[0],
      setYear = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: 0,
    text: ''
  }]),
      questions = _useState7[0],
      setQuestions = _useState7[1];

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

  var save = function save() {
    var expiry = moment__WEBPACK_IMPORTED_MODULE_5___default()("".concat(day, "/").concat(month, "/").concat(year), 'DD/MM/YYYY').toDate(); // If we are updating

    if (id) props.onSubmit(id, title, description, questions); // If we are creating

    if (!id) props.onSubmit(title, description, questions);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!props.id) return;
    var date = moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).add(1, 'months');
    setId(props.id);
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
      lineNumber: 60
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RGtCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRyYXNoIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnREQnKSlcbiAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ01NJykpXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnWVlZWScpKVxuICBjb25zdCBbcXVlc3Rpb25zLCBzZXRRdWVzdGlvbnNdID0gdXNlU3RhdGUoW3tpZDogMCwgdGV4dDogJyd9XSlcblxuICBjb25zdCBhZGRRdWVzdGlvbiA9ICgpID0+IHNldFF1ZXN0aW9ucyhbLi4ucXVlc3Rpb25zLCB7XG4gICAgaWQ6IHF1ZXN0aW9ucy5sZW5ndGggKyAxLFxuICAgIHRleHQ6ICcnLFxuICB9XSlcblxuICBjb25zdCByZW1vdmVRdWVzdGlvbiA9IChpbmRleCkgPT4ge1xuICAgIGxldCBtdXRhYmxlUXVlc3Rpb25zID0gT2JqZWN0LmFzc2lnbihbXSwgcXVlc3Rpb25zKVxuICAgIG11dGFibGVRdWVzdGlvbnMuc3BsaWNlKGluZGV4LCAxKVxuICAgIHNldFF1ZXN0aW9ucyhtdXRhYmxlUXVlc3Rpb25zKVxuICB9XG5cbiAgY29uc3QgdXBkYXRlUXVlc3Rpb24gPSAodGV4dCwgaWQpID0+IHtcbiAgICBzZXRRdWVzdGlvbnMocXVlc3Rpb25zLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICBpZiAoaWQgIT0gcXVlc3Rpb24uaWQpIHJldHVybiBxdWVzdGlvblxuXG4gICAgICByZXR1cm4geyBpZDogcXVlc3Rpb24uaWQsIHRleHQgfVxuICAgIH0pKVxuICB9XG5cbiAgY29uc3Qgc2F2ZSA9ICgpID0+IHtcbiAgICBjb25zdCBleHBpcnkgPSBtb21lbnQoYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YCwgJ0REL01NL1lZWVknKS50b0RhdGUoKVxuXG4gICAgLy8gSWYgd2UgYXJlIHVwZGF0aW5nXG4gICAgaWYgKGlkKSBwcm9wcy5vblN1Ym1pdChpZCwgdGl0bGUsIGRlc2NyaXB0aW9uLCBxdWVzdGlvbnMpXG5cbiAgICAvLyBJZiB3ZSBhcmUgY3JlYXRpbmdcbiAgICBpZiAoIWlkKSBwcm9wcy5vblN1Ym1pdCh0aXRsZSwgZGVzY3JpcHRpb24sIHF1ZXN0aW9ucylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFwcm9wcy5pZCkgcmV0dXJuXG5cbiAgICBjb25zdCBkYXRlID0gbW9tZW50KHByb3BzLmV4cGlyeSkuYWRkKDEsICdtb250aHMnKVxuXG4gICAgc2V0SWQocHJvcHMuaWQpXG4gICAgc2V0VGl0bGUocHJvcHMudGl0bGUpXG4gICAgc2V0RGVzY3JpcHRpb24ocHJvcHMuZGVzY3JpcHRpb24pXG4gICAgc2V0RGF5KGRhdGUuZm9ybWF0KCdERCcpKVxuICAgIHNldE1vbnRoKGRhdGUuZm9ybWF0KCdNTScpKVxuICAgIHNldFllYXIoZGF0ZS5mb3JtYXQoJ1lZWVknKSlcbiAgICBzZXRRdWVzdGlvbnMocHJvcHMucXVlc3Rpb25zKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGwtaW5uZXIge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTIwXCI+Q3JlYXRlIGEgbmV3IHBvbGw8L2Rpdj5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgaW5wdXRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb2xsIHRpdGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICB0ZXh0YXJlYVNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5RdWVzdGlvbnM8L2Rpdj5cblxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb24gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVRdWVzdGlvbihlLnRhcmdldC52YWx1ZSwgcXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUcmFzaFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQUNCNUJEXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyMFwiXG4gICAgICAgICAgICAgICAgICB0aGlja25lc3M9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMjAgYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcmVtb3ZlUXVlc3Rpb24oaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5FeHBpcnk8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlciBjb2x1bW4gcC0xMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIGNvbG9yLWhpZ2hsaWdodCB0ZXh0LWxlZnRcIj5EYXk8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXswfVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbmRleCkgPT4gY29uc29sZS5sb2coaW5kZXgpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnT25lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVHdvJywgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVGhyZWUnLCB2YWx1ZTogMyB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdGb3VyJywgdmFsdWU6IDQgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnRml2ZScsIHZhbHVlOiA1IH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ09uZScsIHZhbHVlOiAxIH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ1R3bycsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ1RocmVlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnRm91cicsIHZhbHVlOiA0IH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ0ZpdmUnLCB2YWx1ZTogNSB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ZXIgY29sdW1uIHAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBjb2xvci1oaWdobGlnaHQgdGV4dC1sZWZ0XCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPXswfVxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbmRleCkgPT4gY29uc29sZS5sb2coaW5kZXgpfVxuICAgICAgICAgICAgICAgIG9wdGlvbnM9e1tcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnT25lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVHdvJywgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVGhyZWUnLCB2YWx1ZTogMyB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdGb3VyJywgdmFsdWU6IDQgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnRml2ZScsIHZhbHVlOiA1IH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ09uZScsIHZhbHVlOiAxIH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ1R3bycsIHZhbHVlOiAyIH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ1RocmVlJywgdmFsdWU6IDMgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnRm91cicsIHZhbHVlOiA0IH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ0ZpdmUnLCB2YWx1ZTogNSB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ZXIgY29sdW1uIHAtMTBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBjb2xvci1oaWdobGlnaHQgdGV4dC1sZWZ0XCI+WWVhcjwvZGl2PlxuICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ9ezB9XG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBvblNlbGVjdD17KGluZGV4KSA9PiBjb25zb2xlLmxvZyhpbmRleCl9XG4gICAgICAgICAgICAgICAgb3B0aW9ucz17W1xuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdPbmUnLCB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdUd28nLCB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdUaHJlZScsIHZhbHVlOiAzIH0sXG4gICAgICAgICAgICAgICAgICB7IG9wdGlvbjogJ0ZvdXInLCB2YWx1ZTogNCB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdGaXZlJywgdmFsdWU6IDUgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnT25lJywgdmFsdWU6IDEgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVHdvJywgdmFsdWU6IDIgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnVGhyZWUnLCB2YWx1ZTogMyB9LFxuICAgICAgICAgICAgICAgICAgeyBvcHRpb246ICdGb3VyJywgdmFsdWU6IDQgfSxcbiAgICAgICAgICAgICAgICAgIHsgb3B0aW9uOiAnRml2ZScsIHZhbHVlOiA1IH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbXQtMjBcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgIHRleHQ9XCJBZGQgYSBuZXcgcXVlc3Rpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRRdWVzdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlclwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHRleHQ9eyFwcm9wcy5pZCA/IFwiQ3JlYXRlIHBvbGxcIiA6IFwiVXBkYXRlIHBvbGxcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-674474010" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "h4 color-d3 text-left w-100 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
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
      lineNumber: 89
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
      lineNumber: 96
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, "Questions"), questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
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
        lineNumber: 109
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
        lineNumber: 115
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, "Expiry"), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-highlight text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "Day"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: 0,
    size: "large",
    onSelect: function onSelect(index) {
      return console.log(index);
    },
    options: [{
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }, {
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-highlight text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "Month"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: 0,
    size: "large",
    onSelect: function onSelect(index) {
      return console.log(index);
    },
    options: [{
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }, {
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-highlight text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Year"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: 0,
    size: "large",
    onSelect: function onSelect(index) {
      return console.log(index);
    },
    options: [{
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }, {
      option: 'One',
      value: 1
    }, {
      option: 'Two',
      value: 2
    }, {
      option: 'Three',
      value: 3
    }, {
      option: 'Four',
      value: 4
    }, {
      option: 'Five',
      value: 5
    }],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new question",
    onClick: addQuestion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue",
    text: !props.id ? "Create poll" : "Update poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=create.js.96edae2c886248766e63.hot-update.js.map