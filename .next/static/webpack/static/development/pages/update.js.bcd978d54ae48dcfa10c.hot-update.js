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
    var expiry = moment__WEBPACK_IMPORTED_MODULE_6___default()("".concat(day, "/").concat(month, "/").concat(year), 'DD/MM/YYYY').toDate(); // If we are updating

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
    console.log(moment__WEBPACK_IMPORTED_MODULE_6___default()(props.expiry).isValid());
    var date = moment__WEBPACK_IMPORTED_MODULE_6___default()(props.expiry) ? moment__WEBPACK_IMPORTED_MODULE_6___default()(props.expiry) : moment__WEBPACK_IMPORTED_MODULE_6___default()();
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
      lineNumber: 100
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvR2tCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRyYXNoIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICB7IG9wdGlvbjogJ0phbnVhcnknLCB2YWx1ZTogMSB9LFxuICAgIHsgb3B0aW9uOiAnRmVicnVhcnknLCB2YWx1ZTogMiB9LFxuICAgIHsgb3B0aW9uOiAnTWFyY2gnLCB2YWx1ZTogMyB9LFxuICAgIHsgb3B0aW9uOiAnQXByaWwnLCB2YWx1ZTogNCB9LFxuICAgIHsgb3B0aW9uOiAnTWF5JywgdmFsdWU6IDUgfSxcbiAgICB7IG9wdGlvbjogJ0p1bmUnLCB2YWx1ZTogNiB9LFxuICAgIHsgb3B0aW9uOiAnSnVseScsIHZhbHVlOiA3IH0sXG4gICAgeyBvcHRpb246ICdBdWd1c3QnLCB2YWx1ZTogOCB9LFxuICAgIHsgb3B0aW9uOiAnU2VwdGVtYmVyJywgdmFsdWU6IDkgfSxcbiAgICB7IG9wdGlvbjogJ09jdG9iZXInLCB2YWx1ZTogMTAgfSxcbiAgICB7IG9wdGlvbjogJ05vdmVtYmVyJywgdmFsdWU6IDExIH0sXG4gICAgeyBvcHRpb246ICdEZWNlbWJlcicsIHZhbHVlOiAxMiB9LFxuICBdXG4gIGNvbnN0IHllYXJzID0gW1xuICAgIHsgb3B0aW9uOiB0b2RheS55ZWFyKCksIHZhbHVlOiB0b2RheS55ZWFyKCkgfSxcbiAgICB7IG9wdGlvbjogdG9kYXkueWVhcigpICsgMSwgdmFsdWU6IHRvZGF5LnllYXIoKSArIDEgfSxcbiAgXVxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW29wdGlvbnMsIHNldE9wdGlvbnNdID0gdXNlU3RhdGUoW3tpZDogMCwgdGV4dDogJyd9XSlcblxuICAvLyBUaGVzZSBhbGwgc2V0IHRoZSBpbmRleFxuICBjb25zdCBbZGF5LCBzZXREYXldID0gdXNlU3RhdGUodG9kYXkuZm9ybWF0KCdEJykgLSAxKVxuICBjb25zdCBbbW9udGgsIHNldE1vbnRoXSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnTScpIC0gMSlcbiAgY29uc3QgW3llYXIsIHNldFllYXJdID0gdXNlU3RhdGUoMClcblxuICBjb25zdCBhZGRPcHRpb24gPSAoKSA9PiBzZXRPcHRpb25zKFsuLi5vcHRpb25zLCB7XG4gICAgaWQ6IG9wdGlvbnMubGVuZ3RoICsgMSxcbiAgICB0ZXh0OiAnJyxcbiAgfV0pXG5cbiAgY29uc3QgcmVtb3ZlT3B0aW9uID0gKGluZGV4KSA9PiB7XG4gICAgbGV0IG11dGFibGVPcHRpb25zID0gT2JqZWN0LmFzc2lnbihbXSwgb3B0aW9ucylcbiAgICBtdXRhYmxlT3B0aW9ucy5zcGxpY2UoaW5kZXgsIDEpXG4gICAgc2V0T3B0aW9ucyhtdXRhYmxlT3B0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZU9wdGlvbiA9ICh0ZXh0LCBpZCkgPT4ge1xuICAgIHNldE9wdGlvbnMob3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgIGlmIChpZCAhPSBvcHRpb24uaWQpIHJldHVybiBvcHRpb25cblxuICAgICAgcmV0dXJuIHsgaWQ6IG9wdGlvbi5pZCwgdGV4dCB9XG4gICAgfSkpXG4gIH1cblxuICBjb25zdCBzYXZlID0gKCkgPT4ge1xuICAgIGNvbnN0IGV4cGlyeSA9IG1vbWVudChgJHtkYXl9LyR7bW9udGh9LyR7eWVhcn1gLCAnREQvTU0vWVlZWScpLnRvRGF0ZSgpXG5cbiAgICAvLyBJZiB3ZSBhcmUgdXBkYXRpbmdcbiAgICBpZiAoaWQpIHByb3BzLm9uU3VibWl0KGlkLCB0aXRsZSwgZGVzY3JpcHRpb24sIG9wdGlvbnMsIGV4cGlyeSlcblxuICAgIC8vIElmIHdlIGFyZSBjcmVhdGluZ1xuICAgIGlmICghaWQpIHByb3BzLm9uU3VibWl0KHRpdGxlLCBkZXNjcmlwdGlvbiwgb3B0aW9ucywgZXhwaXJ5KVxuICB9XG5cbiAgY29uc3QgdXBkYXRlTW9udGhEYXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbW9tZW50KGAke2RheX0vJHttb250aH0vJHt5ZWFyfWAsICdERC9NTS9ZWVlZJykuZGF5c0luTW9udGgoKVxuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdXG5cbiAgICBmb3IgKGxldCBkYXk9MTsgZGF5IDw9IGRheXNJbk1vbnRoOyBkYXkrKykge1xuICAgICAgZGF5c0FycmF5LnB1c2goeyBvcHRpb246IGRheSwgdmFsdWU6IGRheSB9KVxuICAgIH1cblxuICAgIHNldERheXMoZGF5c0FycmF5KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBEb24ndCBkbyBhbnl0aGluZyBpZiBpdCdzIGEgY3JlYXRlXG4gICAgaWYgKCFwcm9wcy5pZCkgcmV0dXJuIHVwZGF0ZU1vbnRoRGF5cygpXG5cbiAgICBjb25zb2xlLmxvZyhtb21lbnQocHJvcHMuZXhwaXJ5KS5pc1ZhbGlkKCkpXG5cbiAgICBjb25zdCBkYXRlID0gbW9tZW50KHByb3BzLmV4cGlyeSkgPyBtb21lbnQocHJvcHMuZXhwaXJ5KSA6IG1vbWVudCgpXG4gICAgY29uc3QgeWVhckluZGV4ID0geWVhcnMubWFwKHkgPT4geS52YWx1ZSkuaW5kZXhPZihwYXJzZUludChkYXRlLmZvcm1hdCgnWVlZWScpKSlcblxuICAgIHNldElkKHByb3BzLmlkKVxuICAgIHNldFRpdGxlKHByb3BzLnRpdGxlKVxuICAgIHNldERlc2NyaXB0aW9uKHByb3BzLmRlc2NyaXB0aW9uKVxuICAgIHNldE9wdGlvbnMocHJvcHMub3B0aW9ucylcblxuICAgIHNldERheShkYXRlLmZvcm1hdCgnRCcpIC0gMSlcbiAgICBzZXRNb250aChkYXRlLmZvcm1hdCgnTScpIC0gMSlcbiAgICBzZXRZZWFyKHllYXJJbmRleCA9PSAtMSA/IDAgOiB5ZWFySW5kZXgpXG5cbiAgICB1cGRhdGVNb250aERheXMoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGwtaW5uZXIge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTIwXCI+Q3JlYXRlIGEgbmV3IHBvbGw8L2Rpdj5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgaW5wdXRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb2xsIHRpdGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICB0ZXh0YXJlYVNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5PcHRpb25zPC9kaXY+XG5cbiAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiT3B0aW9uIHRleHRcIlxuICAgICAgICAgICAgICAgICAgaW5wdXRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdXBkYXRlT3B0aW9uKGUudGFyZ2V0LnZhbHVlLCBvcHRpb24uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUcmFzaFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQUNCNUJEXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyMFwiXG4gICAgICAgICAgICAgICAgICB0aGlja25lc3M9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMjAgYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcmVtb3ZlT3B0aW9uKGluZGV4KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KX1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgY29sb3ItZDAgdGV4dC1sZWZ0IHctMTAwIG1iLTEwIG10LTIwXCI+RXhwaXJ5PC9kaXY+XG5cbiAgICAgICAgICB7ZGF5cyAmJlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4ZXIgY29sdW1uIHByLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBjb2xvci1kMCB0ZXh0LWxlZnQgYm9sZCBtYi01XCI+RGF5PC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2RheX1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGluZGV4KSA9PiBzZXREYXkoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17ZGF5c31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlciBjb2x1bW4gcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgY29sb3ItZDAgdGV4dC1sZWZ0IGJvbGQgbWItNVwiPk1vbnRoPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e21vbnRofVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoaW5kZXgpID0+IHNldE1vbnRoKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e21vbnRoc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlciBjb2x1bW4gcGwtMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIGNvbG9yLWQwIHRleHQtbGVmdCBib2xkIG1iLTVcIj5ZZWFyPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlbGVjdFxuICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e3llYXJ9XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbmRleCkgPT4gc2V0WWVhcihpbmRleCl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXt5ZWFyc31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG10LTIwXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICB0ZXh0PVwiQWRkIGEgbmV3IG9wdGlvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZE9wdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlclwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHRleHQ9eyFwcm9wcy5pZCA/IFwiQ3JlYXRlIHBvbGxcIiA6IFwiVXBkYXRlIHBvbGxcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-674474010" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "h4 color-d3 text-left w-100 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
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
      lineNumber: 129
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
      lineNumber: 136
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "Options"), options.map(function (option, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148
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
        lineNumber: 149
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
        lineNumber: 155
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, "Expiry"), days && __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
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
      lineNumber: 172
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
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
      lineNumber: 182
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pl-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
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
      lineNumber: 192
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new option",
    onClick: addOption,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue",
    text: !props.id ? "Create poll" : "Update poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })))));
}

/***/ })

})
//# sourceMappingURL=update.js.bcd978d54ae48dcfa10c.hot-update.js.map