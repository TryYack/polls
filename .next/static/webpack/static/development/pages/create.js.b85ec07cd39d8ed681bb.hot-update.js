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
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");



var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/form.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




function FormComponent(props) {
  var today = moment__WEBPACK_IMPORTED_MODULE_6___default()();
  var months = [{
    option: 'January',
    value: 1
  }, {
    option: 'February',
    value: 2
  }, {
    option: 'March',
    value: 3
  }, {
    option: 'April',
    value: 4
  }, {
    option: 'May',
    value: 5
  }, {
    option: 'June',
    value: 6
  }, {
    option: 'July',
    value: 7
  }, {
    option: 'August',
    value: 8
  }, {
    option: 'September',
    value: 9
  }, {
    option: 'October',
    value: 10
  }, {
    option: 'November',
    value: 11
  }, {
    option: 'December',
    value: 12
  }];
  var years = [{
    option: today.year(),
    value: today.year()
  }, {
    option: today.year() + 1,
    value: today.year() + 1
  }];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      days = _useState[0],
      setDays = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      id = _useState2[0],
      setId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      title = _useState3[0],
      setTitle = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      description = _useState4[0],
      setDescription = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([{
    id: 0,
    text: ''
  }]),
      options = _useState5[0],
      setOptions = _useState5[1]; // These all set the index


  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(today.format('D') - 1),
      day = _useState6[0],
      setDay = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(today.format('M') - 1),
      month = _useState7[0],
      setMonth = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      year = _useState8[0],
      setYear = _useState8[1];

  var addOption = function addOption() {
    return setOptions([].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(options), [{
      id: options.length + 1,
      text: ''
    }]));
  };

  var removeOption = function removeOption(index) {
    var mutableOptions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()([], options);

    mutableOptions.splice(index, 1);
    setOptions(mutableOptions);
  };

  var updateOption = function updateOption(text, id) {
    setOptions(options.map(function (option) {
      if (id != option.id) return option;
      return {
        id: option.id,
        text: text
      };
    }));
  };

  var save = function save() {
    var expiry = moment__WEBPACK_IMPORTED_MODULE_6___default()("".concat(days[day].value, "/").concat(months[month].value, "/").concat(years[year].value), 'DD/MM/YYYY').format("YYYY-MM-DD HH:mm:ss"); // If we are updating

    if (id) props.onSubmit(id, title, description, options, expiry); // If we are creating

    if (!id) props.onSubmit(title, description, options, expiry);
  };

  var updateMonthDays = function updateMonthDays() {
    var daysInMonth = moment__WEBPACK_IMPORTED_MODULE_6___default()("".concat(day, "/").concat(month, "/").concat(year), 'DD/MM/YYYY').daysInMonth();
    var daysArray = [];

    for (var _day = 1; _day <= daysInMonth; _day++) {
      daysArray.push({
        option: _day,
        value: _day
      });
    }

    setDays(daysArray);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Don't do anything if it's a create
    if (!props.id) return updateMonthDays();
    var date = moment__WEBPACK_IMPORTED_MODULE_6___default()(props.expiry).isValid() ? moment__WEBPACK_IMPORTED_MODULE_6___default()(props.expiry) : moment__WEBPACK_IMPORTED_MODULE_6___default()();
    var yearIndex = years.map(function (y) {
      return y.value;
    }).indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(date.format('YYYY')));
    setId(props.id);
    setTitle(props.title);
    setDescription(props.description);
    setOptions(props.options);
    setDay(date.format('D') - 1);
    setMonth(date.format('M') - 1);
    setYear(yearIndex == -1 ? 0 : yearIndex);
    updateMonthDays();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnR2tCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRyYXNoIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICB7IG9wdGlvbjogJ0phbnVhcnknLCB2YWx1ZTogMSB9LFxuICAgIHsgb3B0aW9uOiAnRmVicnVhcnknLCB2YWx1ZTogMiB9LFxuICAgIHsgb3B0aW9uOiAnTWFyY2gnLCB2YWx1ZTogMyB9LFxuICAgIHsgb3B0aW9uOiAnQXByaWwnLCB2YWx1ZTogNCB9LFxuICAgIHsgb3B0aW9uOiAnTWF5JywgdmFsdWU6IDUgfSxcbiAgICB7IG9wdGlvbjogJ0p1bmUnLCB2YWx1ZTogNiB9LFxuICAgIHsgb3B0aW9uOiAnSnVseScsIHZhbHVlOiA3IH0sXG4gICAgeyBvcHRpb246ICdBdWd1c3QnLCB2YWx1ZTogOCB9LFxuICAgIHsgb3B0aW9uOiAnU2VwdGVtYmVyJywgdmFsdWU6IDkgfSxcbiAgICB7IG9wdGlvbjogJ09jdG9iZXInLCB2YWx1ZTogMTAgfSxcbiAgICB7IG9wdGlvbjogJ05vdmVtYmVyJywgdmFsdWU6IDExIH0sXG4gICAgeyBvcHRpb246ICdEZWNlbWJlcicsIHZhbHVlOiAxMiB9LFxuICBdXG4gIGNvbnN0IHllYXJzID0gW1xuICAgIHsgb3B0aW9uOiB0b2RheS55ZWFyKCksIHZhbHVlOiB0b2RheS55ZWFyKCkgfSxcbiAgICB7IG9wdGlvbjogdG9kYXkueWVhcigpICsgMSwgdmFsdWU6IHRvZGF5LnllYXIoKSArIDEgfSxcbiAgXVxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW3tpZDogMCwgdGV4dDogJyd9XSlcblxuICAvLyBUaGVzZSBhbGwgc2V0IHRoZSBpbmRleFxuICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUodG9kYXkuZm9ybWF0KCdEJykgLSAxKVxuICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnTScpIC0gMSlcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBhZGRPcHRpb24gPSAoKSA9PiBzZXRPcHRpb25zKFsuLi5vcHRpb25zLCB7XG4gICAgaWQ6IG9wdGlvbnMubGVuZ3RoICsgMSxcbiAgICB0ZXh0OiAnJyxcbiAgfV0pXG5cbiAgY29uc3QgcmVtb3ZlT3B0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG11dGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihbXSwgb3B0aW9ucylcbiAgICBtdXRhYmxlT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgc2V0T3B0aW9ucyhtdXRhYmxlT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbiA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE9wdGlvbnMob3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgIGlmIChpZCAhPSBvcHRpb24uaWQpIHJldHVybiBvcHRpb25cblxuICAgICAgcmV0dXJuIHsgaWQ6IG9wdGlvbi5pZCwgdGV4dCB9XG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IG1vbWVudChgJHtkYXlzW2RheV0udmFsdWV9LyR7bW9udGhzW21vbnRoXS52YWx1ZX0vJHt5ZWFyc1t5ZWFyXS52YWx1ZX1gLCAnREQvTU0vWVlZWScpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3NcIilcblxuICAgIC8vIElmIHdlIGFyZSB1cGRhdGluZ1xuICAgIGlmIChpZCkgcHJvcHMub25TdWJtaXQoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgb3B0aW9ucywgZXhwaXJ5KVxuXG4gICAgLy8gSWYgd2UgYXJlIGNyZWF0aW5nXG4gICAgaWYgKCFpZCkgcHJvcHMub25TdWJtaXQodGl0bGUsIGRlc2NyaXB0aW9uLCBvcHRpb25zLCBleHBpcnkpXG4gIH1cblxuICBjb25zdCB1cGRhdGVNb250aERheXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGF5c0luTW9udGggPSBtb21lbnQoYCR7ZGF5fS8ke21vbnRofS8ke3llYXJ9YCwgJ0REL01NL1lZWVknKS5kYXlzSW5Nb250aCgpXG4gICAgY29uc3QgZGF5c0FycmF5ID0gW11cblxuICAgIGZvciAobGV0IGRheT0xOyBkYXkgPD0gZGF5c0luTW9udGg7IGRheSsrKSB7XG4gICAgICBkYXlzQXJyYXkucHVzaCh7IG9wdGlvbjogZGF5LCB2YWx1ZTogZGF5IH0pXG4gICAgfVxuXG4gICAgc2V0RGF5cyhkYXlzQXJyYXkpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIERvbid0IGRvIGFueXRoaW5nIGlmIGl0J3MgYSBjcmVhdGVcbiAgICBpZiAoIXByb3BzLmlkKSByZXR1cm4gdXBkYXRlTW9udGhEYXlzKClcblxuICAgIGNvbnN0IGRhdGUgPSBtb21lbnQocHJvcHMuZXhwaXJ5KS5pc1ZhbGlkKCkgPyBtb21lbnQocHJvcHMuZXhwaXJ5KSA6IG1vbWVudCgpXG4gICAgY29uc3QgeWVhckluZGV4ID0geWVhcnMubWFwKHkgPT4geS52YWx1ZSkuaW5kZXhPZihwYXJzZUludChkYXRlLmZvcm1hdCgnWVlZWScpKSlcblxuICAgIHNldElkKHByb3BzLmlkKVxuICAgIHNldFRpdGxlKHByb3BzLnRpdGxlKVxuICAgIHNldERlc2NyaXB0aW9uKHByb3BzLmRlc2NyaXB0aW9uKVxuICAgIHNldE9wdGlvbnMocHJvcHMub3B0aW9ucylcbiAgICBzZXREYXkoZGF0ZS5mb3JtYXQoJ0QnKSAtIDEpXG4gICAgc2V0TW9udGgoZGF0ZS5mb3JtYXQoJ00nKSAtIDEpXG4gICAgc2V0WWVhcih5ZWFySW5kZXggPT0gLTEgPyAwIDogeWVhckluZGV4KVxuICAgIHVwZGF0ZU1vbnRoRGF5cygpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCBjb2xvci1kMyB0ZXh0LWxlZnQgdy0xMDAgbWItMjBcIj5DcmVhdGUgYSBuZXcgcG9sbDwvZGl2PlxuXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgdGl0bGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHRleHRhcmVhU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9sbCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IGNvbG9yLWQwIHRleHQtbGVmdCB3LTEwMCBtYi0xMCBtdC0yMFwiPk9wdGlvbnM8L2Rpdj5cblxuICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbWItNVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb24gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVPcHRpb24oZS50YXJnZXQudmFsdWUsIG9wdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRyYXNoXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiNBQ0I1QkRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcz1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yMCBidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiByZW1vdmVPcHRpb24oaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5FeHBpcnk8L2Rpdj5cblxuICAgICAgICAgIHtkYXlzICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlciBjb2x1bW4gcHItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIGNvbG9yLWQwIHRleHQtbGVmdCBib2xkIG1iLTVcIj5EYXk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF5fVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoaW5kZXgpID0+IHNldERheShpbmRleCl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXlzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyIGNvbHVtbiBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBjb2xvci1kMCB0ZXh0LWxlZnQgYm9sZCBtYi01XCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17bW9udGh9XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbmRleCkgPT4gc2V0TW9udGgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyIGNvbHVtbiBwbC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgY29sb3ItZDAgdGV4dC1sZWZ0IGJvbGQgbWItNVwiPlllYXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17eWVhcn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGluZGV4KSA9PiBzZXRZZWFyKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbXQtMjBcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgIHRleHQ9XCJBZGQgYSBuZXcgb3B0aW9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17YWRkT3B0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlXCJcbiAgICAgICAgICAgICAgdGV4dD17IXByb3BzLmlkID8gXCJDcmVhdGUgcG9sbFwiIDogXCJVcGRhdGUgcG9sbFwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-674474010" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "h4 color-d3 text-left w-100 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Create a new poll"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    value: title,
    inputSize: "large",
    placeholder: "Poll title",
    onChange: function onChange(e) {
      return setTitle(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Textarea"], {
    value: description,
    textareaSize: "large",
    placeholder: "Poll description",
    rows: 3,
    onChange: function onChange(e) {
      return setDescription(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Options"), options.map(function (option, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Input"], {
      value: option.text,
      placeholder: "Option text",
      inputSize: "large",
      onChange: function onChange(e) {
        return updateOption(e.target.value, option.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }), __jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__["Trash"], {
      color: "#ACB5BD",
      size: "20",
      thickness: "1.5",
      className: "ml-20 button",
      onClick: function onClick(e) {
        return removeOption(index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, "Expiry"), days && __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Day"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    selected: day,
    size: "large",
    onSelect: function onSelect(index) {
      return setDay(index);
    },
    options: days,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Month"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    selected: month,
    size: "large",
    onSelect: function onSelect(index) {
      return setMonth(index);
    },
    options: months,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pl-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Year"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Select"], {
    selected: year,
    size: "large",
    onSelect: function onSelect(index) {
      return setYear(index);
    },
    options: years,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new option",
    onClick: addOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue",
    text: !props.id ? "Create poll" : "Update poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=create.js.b85ec07cd39d8ed681bb.hot-update.js.map