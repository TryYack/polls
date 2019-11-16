module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @weekday/elements */ "@weekday/elements");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_6__);


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/form.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




function FormComponent(props) {
  const today = moment__WEBPACK_IMPORTED_MODULE_5___default()();
  const months = [{
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
  const years = [{
    option: today.year(),
    value: today.year()
  }, {
    option: today.year() + 1,
    value: today.year() + 1
  }];
  const {
    0: days,
    1: setDays
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: id,
    1: setId
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null);
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])('');
  const {
    0: questions,
    1: setQuestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([{
    id: 0,
    text: ''
  }]); // These all set the index

  const {
    0: day,
    1: setDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('D') - 1);
  const {
    0: month,
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(today.format('M') - 1);
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0);

  const addQuestion = () => setQuestions([...questions, {
    id: questions.length + 1,
    text: ''
  }]);

  const removeQuestion = index => {
    let mutableQuestions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()([], questions);

    mutableQuestions.splice(index, 1);
    setQuestions(mutableQuestions);
  };

  const updateQuestion = (text, id) => {
    setQuestions(questions.map(question => {
      if (id != question.id) return question;
      return {
        id: question.id,
        text
      };
    }));
  };

  const save = () => {
    const expiry = moment__WEBPACK_IMPORTED_MODULE_5___default()(`${day}/${month}/${year}`, 'DD/MM/YYYY').toDate(); // If we are updating

    if (id) props.onSubmit(id, title, description, questions, expiry); // If we are creating

    if (!id) props.onSubmit(title, description, questions, expiry);
  };

  const updateMonthDays = () => {
    const daysInMonth = moment__WEBPACK_IMPORTED_MODULE_5___default()(`${day}/${month}/${year}`, 'DD/MM/YYYY').daysInMonth();
    const daysArray = [];

    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push({
        option: day,
        value: day
      });
    }

    setDays(daysArray);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (!props.id) return updateMonthDays();
    if (!props.expiry) return updateMonthDays();
    const date = moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry);
    const yearIndex = years.map(y => y.value).indexOf(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(date.format('YYYY')));
    setId(props.id);
    setTitle(props.title);
    setDescription(props.description);
    setQuestions(props.questions);
    setDay(date.format('D') - 1);
    setMonth(date.format('M') - 1);
    setYear(yearIndex == -1 ? 0 : yearIndex);
    updateMonthDays();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrR2tCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSwgU2VsZWN0IH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IFRyYXNoIH0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybUNvbXBvbmVudChwcm9wcykge1xuICBjb25zdCB0b2RheSA9IG1vbWVudCgpXG4gIGNvbnN0IG1vbnRocyA9IFtcbiAgICB7IG9wdGlvbjogJ0phbnVhcnknLCB2YWx1ZTogMSB9LFxuICAgIHsgb3B0aW9uOiAnRmVicnVhcnknLCB2YWx1ZTogMiB9LFxuICAgIHsgb3B0aW9uOiAnTWFyY2gnLCB2YWx1ZTogMyB9LFxuICAgIHsgb3B0aW9uOiAnQXByaWwnLCB2YWx1ZTogNCB9LFxuICAgIHsgb3B0aW9uOiAnTWF5JywgdmFsdWU6IDUgfSxcbiAgICB7IG9wdGlvbjogJ0p1bmUnLCB2YWx1ZTogNiB9LFxuICAgIHsgb3B0aW9uOiAnSnVseScsIHZhbHVlOiA3IH0sXG4gICAgeyBvcHRpb246ICdBdWd1c3QnLCB2YWx1ZTogOCB9LFxuICAgIHsgb3B0aW9uOiAnU2VwdGVtYmVyJywgdmFsdWU6IDkgfSxcbiAgICB7IG9wdGlvbjogJ09jdG9iZXInLCB2YWx1ZTogMTAgfSxcbiAgICB7IG9wdGlvbjogJ05vdmVtYmVyJywgdmFsdWU6IDExIH0sXG4gICAgeyBvcHRpb246ICdEZWNlbWJlcicsIHZhbHVlOiAxMiB9LFxuICBdXG4gIGNvbnN0IHllYXJzID0gW1xuICAgIHsgb3B0aW9uOiB0b2RheS55ZWFyKCksIHZhbHVlOiB0b2RheS55ZWFyKCkgfSxcbiAgICB7IG9wdGlvbjogdG9kYXkueWVhcigpICsgMSwgdmFsdWU6IHRvZGF5LnllYXIoKSArIDEgfSxcbiAgXVxuICBjb25zdCBbZGF5cywgc2V0RGF5c10gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtpZCwgc2V0SWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFt7aWQ6IDAsIHRleHQ6ICcnfV0pXG5cbiAgLy8gVGhlc2UgYWxsIHNldCB0aGUgaW5kZXhcbiAgY29uc3QgW2RheSwgc2V0RGF5XSA9IHVzZVN0YXRlKHRvZGF5LmZvcm1hdCgnRCcpIC0gMSlcbiAgY29uc3QgW21vbnRoLCBzZXRNb250aF0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ00nKSAtIDEpXG4gIGNvbnN0IFt5ZWFyLCBzZXRZZWFyXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiBzZXRRdWVzdGlvbnMoWy4uLnF1ZXN0aW9ucywge1xuICAgIGlkOiBxdWVzdGlvbnMubGVuZ3RoICsgMSxcbiAgICB0ZXh0OiAnJyxcbiAgfV0pXG5cbiAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbXV0YWJsZVF1ZXN0aW9ucyA9IE9iamVjdC5hc3NpZ24oW10sIHF1ZXN0aW9ucylcbiAgICBtdXRhYmxlUXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRRdWVzdGlvbnMobXV0YWJsZVF1ZXN0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucy5tYXAocXVlc3Rpb24gPT4ge1xuICAgICAgaWYgKGlkICE9IHF1ZXN0aW9uLmlkKSByZXR1cm4gcXVlc3Rpb25cblxuICAgICAgcmV0dXJuIHsgaWQ6IHF1ZXN0aW9uLmlkLCB0ZXh0IH1cbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHNhdmUgPSAoKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gbW9tZW50KGAke2RheX0vJHttb250aH0vJHt5ZWFyfWAsICdERC9NTS9ZWVlZJykudG9EYXRlKClcblxuICAgIC8vIElmIHdlIGFyZSB1cGRhdGluZ1xuICAgIGlmIChpZCkgcHJvcHMub25TdWJtaXQoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVlc3Rpb25zLCBleHBpcnkpXG5cbiAgICAvLyBJZiB3ZSBhcmUgY3JlYXRpbmdcbiAgICBpZiAoIWlkKSBwcm9wcy5vblN1Ym1pdCh0aXRsZSwgZGVzY3JpcHRpb24sIHF1ZXN0aW9ucywgZXhwaXJ5KVxuICB9XG5cbiAgY29uc3QgdXBkYXRlTW9udGhEYXlzID0gKCkgPT4ge1xuICAgIGNvbnN0IGRheXNJbk1vbnRoID0gbW9tZW50KGAke2RheX0vJHttb250aH0vJHt5ZWFyfWAsICdERC9NTS9ZWVlZJykuZGF5c0luTW9udGgoKVxuICAgIGNvbnN0IGRheXNBcnJheSA9IFtdXG5cbiAgICBmb3IgKGxldCBkYXk9MTsgZGF5IDw9IGRheXNJbk1vbnRoOyBkYXkrKykge1xuICAgICAgZGF5c0FycmF5LnB1c2goeyBvcHRpb246IGRheSwgdmFsdWU6IGRheSB9KVxuICAgIH1cblxuICAgIHNldERheXMoZGF5c0FycmF5KVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIXByb3BzLmlkKSByZXR1cm4gdXBkYXRlTW9udGhEYXlzKClcbiAgICBpZiAoIXByb3BzLmV4cGlyeSkgcmV0dXJuIHVwZGF0ZU1vbnRoRGF5cygpXG5cbiAgICBjb25zdCBkYXRlID0gbW9tZW50KHByb3BzLmV4cGlyeSlcbiAgICBjb25zdCB5ZWFySW5kZXggPSB5ZWFycy5tYXAoeSA9PiB5LnZhbHVlKS5pbmRleE9mKHBhcnNlSW50KGRhdGUuZm9ybWF0KCdZWVlZJykpKVxuXG4gICAgc2V0SWQocHJvcHMuaWQpXG4gICAgc2V0VGl0bGUocHJvcHMudGl0bGUpXG4gICAgc2V0RGVzY3JpcHRpb24ocHJvcHMuZGVzY3JpcHRpb24pXG4gICAgc2V0UXVlc3Rpb25zKHByb3BzLnF1ZXN0aW9ucylcblxuICAgIHNldERheShkYXRlLmZvcm1hdCgnRCcpIC0gMSlcbiAgICBzZXRNb250aChkYXRlLmZvcm1hdCgnTScpIC0gMSlcbiAgICBzZXRZZWFyKHllYXJJbmRleCA9PSAtMSA/IDAgOiB5ZWFySW5kZXgpXG5cbiAgICB1cGRhdGVNb250aERheXMoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGwtaW5uZXIge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTIwXCI+Q3JlYXRlIGEgbmV3IHBvbGw8L2Rpdj5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgaW5wdXRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQb2xsIHRpdGxlXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPFRleHRhcmVhXG4gICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICB0ZXh0YXJlYVNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgcm93cz17M31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldERlc2NyaXB0aW9uKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5RdWVzdGlvbnM8L2Rpdj5cblxuICAgICAgICAgIHtxdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHctMTAwIG1iLTVcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJPcHRpb24gdGV4dFwiXG4gICAgICAgICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB1cGRhdGVRdWVzdGlvbihlLnRhcmdldC52YWx1ZSwgcXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxUcmFzaFxuICAgICAgICAgICAgICAgICAgY29sb3I9XCIjQUNCNUJEXCJcbiAgICAgICAgICAgICAgICAgIHNpemU9XCIyMFwiXG4gICAgICAgICAgICAgICAgICB0aGlja25lc3M9XCIxLjVcIlxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtMjAgYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2UgPT4gcmVtb3ZlUXVlc3Rpb24oaW5kZXgpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTAgbXQtMjBcIj5FeHBpcnk8L2Rpdj5cblxuICAgICAgICAgIHtkYXlzICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3LTEwMFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlciBjb2x1bW4gcHItMTBcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtYWxsIGNvbG9yLWQwIHRleHQtbGVmdCBib2xkIG1iLTVcIj5EYXk8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17ZGF5fVxuICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXsoaW5kZXgpID0+IHNldERheShpbmRleCl9XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtkYXlzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyIGNvbHVtbiBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbCBjb2xvci1kMCB0ZXh0LWxlZnQgYm9sZCBtYi01XCI+TW9udGg8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17bW9udGh9XG4gICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9eyhpbmRleCkgPT4gc2V0TW9udGgoaW5kZXgpfVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17bW9udGhzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyIGNvbHVtbiBwbC0xMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGwgY29sb3ItZDAgdGV4dC1sZWZ0IGJvbGQgbWItNVwiPlllYXI8L2Rpdj5cbiAgICAgICAgICAgICAgICA8U2VsZWN0XG4gICAgICAgICAgICAgICAgICBzZWxlY3RlZD17eWVhcn1cbiAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICBvblNlbGVjdD17KGluZGV4KSA9PiBzZXRZZWFyKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM9e3llYXJzfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbXQtMjBcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgIHRleHQ9XCJBZGQgYSBuZXcgcXVlc3Rpb25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXthZGRRdWVzdGlvbn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhlclwiIC8+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZVwiXG4gICAgICAgICAgICAgIHRleHQ9eyFwcm9wcy5pZCA/IFwiQ3JlYXRlIHBvbGxcIiA6IFwiVXBkYXRlIHBvbGxcIn1cbiAgICAgICAgICAgICAgb25DbGljaz17c2F2ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
    className: "jsx-674474010" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "h4 color-d3 text-left w-100 mb-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Create a new poll"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Input"], {
    value: title,
    inputSize: "large",
    placeholder: "Poll title",
    onChange: e => setTitle(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Textarea"], {
    value: description,
    textareaSize: "large",
    placeholder: "Poll description",
    rows: 3,
    onChange: e => setDescription(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Questions"), questions.map((question, index) => {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      value: question.text,
      placeholder: "Option text",
      inputSize: "large",
      onChange: e => updateQuestion(e.target.value, question.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147
      },
      __self: this
    }), __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Trash"], {
      color: "#ACB5BD",
      size: "20",
      thickness: "1.5",
      className: "ml-20 button",
      onClick: e => removeQuestion(index),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153
      },
      __self: this
    }));
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "h5 color-d0 text-left w-100 mb-10 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Expiry"), days && __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, "Day"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: day,
    size: "large",
    onSelect: index => setDay(index),
    options: days,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column p-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Month"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: month,
    size: "large",
    onSelect: index => setMonth(index),
    options: months,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer column pl-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-674474010" + " " + "small color-d0 text-left bold mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  }, "Year"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Select"], {
    selected: year,
    size: "large",
    onSelect: index => setYear(index),
    options: years,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }))), __jsx("div", {
    className: "jsx-674474010" + " " + "row w-100 mt-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Add a new question",
    onClick: addQuestion,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-674474010" + " " + "flexer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    size: "small",
    theme: "blue",
    text: !props.id ? "Create poll" : "Update poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })))));
}

/***/ }),

/***/ "./components/poll.component.js":
/*!**************************************!*\
  !*** ./components/poll.component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PollComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @weekday/elements */ "@weekday/elements");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/poll.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PollComponent(props) {
  const {
    0: complete,
    1: setComplete
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: total,
    1: setTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: highest,
    1: setHighest
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);
  const {
    0: expired,
    1: setExpired
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0);

  const updatePoll = async () => {
    console.log('Updating');
  };

  const deletePoll = async () => {
    if (confirm("Are you sure?")) {
      console.log('Deleting');
    } else {
      console.log('Not deleting');
    }
  };

  const answerQuestion = async questionId => {
    console.log(questionId);
    setComplete(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let answerCountHighest = 0;
    props.questions.map(question => {
      // See if this user has completed the poll
      props.answers.map(answer => {
        if (answer.user_id == props.currentUserId) setComplete(true);
      }); // Set the score for the highest amount of votes

      answerCountHighest = props.answers.filter(answer => answer.question_id == question.id).length;
    });
    setTotal(props.answers.length);
    setHighest(answerCountHighest);
    setExpired(moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_3___default()()));
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3660888933",
    __self: this
  }, ".poll-container.jsx-3660888933{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.poll-inner.jsx-3660888933{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-3660888933{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBR3NCLEFBVUosQUFTVyxXQWxCTCxPQW1CRixXQUNiLElBVndCLG9EQVRBLDBCQVVULG9EQVRPLHNCQVVELDJFQVRFLGtCQVVBLDBEQVRFLGtCQVVBLGlGQVRKLGtCQVVyQixDQVRBIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9sbENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtoaWdoZXN0LCBzZXRIaWdoZXN0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtleHBpcmVkLCBzZXRFeHBpcmVkXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc3QgdXBkYXRlUG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcnKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlUG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZWxldGluZycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgZGVsZXRpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFuc3dlclF1ZXN0aW9uID0gYXN5bmMgKHF1ZXN0aW9uSWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbklkKVxuICAgIHNldENvbXBsZXRlKHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhbnN3ZXJDb3VudEhpZ2hlc3QgPSAwXG5cbiAgICBwcm9wcy5xdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcbiAgICAgIC8vIFNlZSBpZiB0aGlzIHVzZXIgaGFzIGNvbXBsZXRlZCB0aGUgcG9sbFxuICAgICAgcHJvcHMuYW5zd2Vycy5tYXAoYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKGFuc3dlci51c2VyX2lkID09IHByb3BzLmN1cnJlbnRVc2VySWQpIHNldENvbXBsZXRlKHRydWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBTZXQgdGhlIHNjb3JlIGZvciB0aGUgaGlnaGVzdCBhbW91bnQgb2Ygdm90ZXNcbiAgICAgIGFuc3dlckNvdW50SGlnaGVzdCA9IHByb3BzLmFuc3dlcnMuZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIucXVlc3Rpb25faWQgPT0gcXVlc3Rpb24uaWQpLmxlbmd0aFxuICAgIH0pXG5cbiAgICBzZXRUb3RhbChwcm9wcy5hbnN3ZXJzLmxlbmd0aClcbiAgICBzZXRIaWdoZXN0KGFuc3dlckNvdW50SGlnaGVzdClcbiAgICBzZXRFeHBpcmVkKG1vbWVudChwcm9wcy5leHBpcnkpLmlzQmVmb3JlKG1vbWVudCgpKSlcbiAgfSwgW3Byb3BzXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0IGNvbG9yLWQzIHRleHQtbGVmdCB3LTEwMCBtYi0wXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgY29sb3ItZDAgdGV4dC1sZWZ0IHctMTAwIG1iLTEwXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgICAgeyghY29tcGxldGUgJiYgIWV4cGlyZWQpICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzUgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbnN3ZXJRdWVzdGlvbihxdWVzdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7KGNvbXBsZXRlIHx8IGV4cGlyZWQpICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXJzID0gcHJvcHMuYW5zd2Vycy5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5xdWVzdGlvbl9pZCA9PSBxdWVzdGlvbi5pZClcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gYW5zd2VycyA/IDAgOiBNYXRoLmZsb29yKChhbnN3ZXJzLmxlbmd0aCAvIHRvdGFsKSAqIDEwMClcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IGFuc3dlcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2YwZjJmNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhbnN3ZXJzLmxlbmd0aCA+PSBoaWdoZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2U5ZWRmMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcjZjBmMmY1J1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwIGNvbG9yLWQxIHRleHQtbGVmdCB3LTEwMCBtdC01XCI+XG4gICAgICAgICAgICB7KGV4cGlyZWQgJiYgcHJvcHMuZXhwaXJ5KSAmJlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMFwiPlRoaXMgcG9sbCBleHBpcmVkIHttb21lbnQocHJvcHMuZXhwaXJ5KS5mcm9tTm93KCl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyghZXhwaXJlZCAmJiBwcm9wcy5leHBpcnkpICYmXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTEwXCI+VGhpcyBwb2xsIGV4cGlyZXMgYXQge21vbWVudChwcm9wcy5leHBpcnkpLmZvcm1hdCgnTEwnKX08L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KCFleHBpcmVkICYmICFwcm9wcy5leHBpcnkpICYmXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTEwXCI+VGhpcyBwb2xsIGRvZXMgbm90IGV4cGlyZTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCAmJlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtci0xMCBjb2xvci1ibHVlXCIgb25DbGljaz17dXBkYXRlUG9sbH0+VXBkYXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7cHJvcHMuY3VycmVudFVzZXJJZCA9PSBwcm9wcy51c2VySWQgJiZcbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gY29sb3ItcmVkXCIgb25DbGljaz17ZGVsZXRlUG9sbH0+RGVsZXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/poll.component.js */"), __jsx("div", {
    className: "jsx-3660888933" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3660888933" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3660888933" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-3660888933" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, props.questions.map((question, index) => {
    return __jsx("div", {
      key: index,
      className: "jsx-3660888933" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      text: question.text,
      theme: "blue-border",
      size: "full-width",
      style: {
        height: 35
      },
      onClick: () => answerQuestion(question.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, props.questions.map((question, index) => {
    const answers = props.answers.filter(answer => answer.question_id == question.id);
    const percentage = answers ? 0 : Math.floor(answers.length / total * 100);
    const color = answers ? '#f0f2f5' : answers.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-3660888933" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      percentage: percentage,
      color: color,
      text: question.text,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-3660888933" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, expired && props.expiry && __jsx("span", {
    className: "jsx-3660888933" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).fromNow()), !expired && props.expiry && __jsx("span", {
    className: "jsx-3660888933" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "This poll expires at ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).format('LL')), !expired && !props.expiry && __jsx("span", {
    className: "jsx-3660888933" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "This poll does not expire"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: updatePoll,
    className: "jsx-3660888933" + " " + "button mr-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: deletePoll,
    className: "jsx-3660888933" + " " + "button color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "Delete")))));
}

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-apollo */ "next-apollo");
/* harmony import */ var next_apollo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_apollo__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-link-http */ "apollo-link-http");
/* harmony import */ var apollo_link_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(apollo_link_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-link-ws */ "apollo-link-ws");
/* harmony import */ var apollo_link_ws__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apollo_link_ws__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-link */ "apollo-link");
/* harmony import */ var apollo_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-utilities */ "apollo-utilities");
/* harmony import */ var apollo_utilities__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ws */ "ws");
/* harmony import */ var ws__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ws__WEBPACK_IMPORTED_MODULE_5__);







var WebSocketClient = __webpack_require__(/*! websocket */ "websocket").client;

const wsLink = new apollo_link_ws__WEBPACK_IMPORTED_MODULE_2__["WebSocketLink"]({
  uri: `ws://localhost:8080/v1/graphql`,
  options: {
    reconnect: true
  },
  webSocketImpl: WebSocketClient
});
const httpLink = new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
  uri: 'http://localhost:8080/v1/graphql'
});
const link = Object(apollo_link__WEBPACK_IMPORTED_MODULE_3__["split"])(({
  query
}) => {
  const {
    kind,
    operation
  } = Object(apollo_utilities__WEBPACK_IMPORTED_MODULE_4__["getMainDefinition"])(query);
  return kind === 'OperationDefinition' && operation === 'subscription';
}, wsLink, httpLink);
const config = {
  link
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @weekday/elements */ "@weekday/elements");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");
/* harmony import */ var _components_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/form.component */ "./components/form.component.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/update.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const UPDATE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
  mutation update_polls($id: Int, $changes: polls_set_input) {
    update_polls(
      where: {id: {_eq: $id}},
      _set: $changes
    ) {
      affected_rows
      returning {
        id
        title
        description
      }
    }
  }
`;

function Update(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068&pollId=1
  const {
    router
  } = props;
  const {
    0: notification,
    1: setNotification
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null);
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.query.userId);
  const {
    0: channelId,
    1: setChannelId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.query.channelId);
  const {
    0: pollId,
    1: setPollId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.query.pollId);
  const [updatePoll, {
    data
  }] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_11__["useMutation"])(UPDATE_POLL);
  const {
    0: query,
    1: setQuery
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
    query {
      polls(where: { id: { _eq: ${pollId} } }) {
        id
        title
        description
        user_id
        channel_id
        expiry
        questions
        answers {
          user_id
        }
      }
    }
  `);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvdXBkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEeUIsQUFHc0IsQUFLTSxBQUlBLEFBYUMsQUFPWCxXQTVCSyxNQUtkLEFBSWEsQ0FhSCxLQXJCVixHQXNCVyxFQWJHLEtBbUJDLEVBTEYsS0FiTyxNQWNwQixZQWJXLFNBQ0QsUUFDSyxnQ0FnQlMsMENBZkYsb0NBZ0JELDZEQWZFLGdDQWdCQSw0Q0FmRSxnQ0FnQkksbUVBZjdCLHNDQWdCZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5cbmNvbnN0IFVQREFURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVfcG9sbHMoJGlkOiBJbnQsICRjaGFuZ2VzOiBwb2xsc19zZXRfaW5wdXQpIHtcbiAgICB1cGRhdGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fSxcbiAgICAgIF9zZXQ6ICRjaGFuZ2VzXG4gICAgKSB7XG4gICAgICBhZmZlY3RlZF9yb3dzXG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gVXBkYXRlKHByb3BzKSB7XG4gIC8vID91c2VySWQ9NWRiN2UzYzk4NDc2MjQyMTU0ZDQzMTgxJmNoYW5uZWxJZD01ZGI4N2YwNGRiMDU5YTZkOGRjOGQwNjgmcG9sbElkPTFcbiAgY29uc3QgeyByb3V0ZXIgfSA9IHByb3BzXG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShudWxsIClcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuY2hhbm5lbElkKVxuICBjb25zdCBbcG9sbElkLCBzZXRQb2xsSWRdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LnBvbGxJZClcbiAgY29uc3QgW3VwZGF0ZVBvbGwsIHsgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFVQREFURV9QT0xMKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBwb2xscyh3aGVyZTogeyBpZDogeyBfZXE6ICR7cG9sbElkfSB9IH0pIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgdXNlcl9pZFxuICAgICAgICBjaGFubmVsX2lkXG4gICAgICAgIGV4cGlyeVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgICAgYW5zd2VycyB7XG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2xsczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbHMtbGlzdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIHtxdWVyeSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2x1bW5cIj5cbiAgICAgICAgICB7bm90aWZpY2F0aW9uICYmIDxOb3RpZmljYXRpb24gdGV4dD17bm90aWZpY2F0aW9ufSAvPn1cblxuICAgICAgICAgIDxRdWVyeVxuICAgICAgICAgICAgcXVlcnk9e3F1ZXJ5fVxuICAgICAgICAgICAgZmV0Y2hQb2xpY3k9eydjYWNoZS1hbmQtbmV0d29yayd9PlxuICAgICAgICAgICAgeyh7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+PEVycm9yIG1lc3NhZ2U9XCJFcnJvciBsb2FkaW5nIHBvbGxzXCIgLz48L2Rpdj5cblxuICAgICAgICAgICAgICAvLyBJZiBubyBwb2xscyBleGlzdFxuICAgICAgICAgICAgICBpZiAoZGF0YS5wb2xscy5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9uby1wb2xscy5wbmdcIiB3aWR0aD1cIjYwJVwiIGNsYXNzTmFtZT1cIm1iLTMwXCIvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG1iLTIwIHBsLTIwIHByLTIwIGNvbG9yLWQyIHRleHQtY2VudGVyXCI+VGhlcmUgYXJlIG5vIHBvbGxzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDAgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHMgZm9yIHRoaXMgY2hhbm5lbC4gQ2xpY2sgb24gdGhlIGJ1dHRvbiBiZWxvdyB0byBjcmVhdGUgeW91ciBmaXJzdCBwb2xsLjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgYSBwb2xsXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlXG4gICAgICAgICAgICAgIHJldHVybiBkYXRhLnBvbGxzLm1hcCgocG9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xscy1saXN0aW5nLWNvbnRhaW5lclwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlkPXtwb2xsLmlkfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeT17cG9sbC5leHBpcnl9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BvbGwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb2xsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cG9sbC5xdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhwb2xsSWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgcXVlc3Rpb25zLCBleHBpcnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldE5vdGlmaWNhdGlvbignU2F2ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUG9sbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBwb2xsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoUm91dGVyKFVwZGF0ZSkpXG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/update.js */"), query && __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, notification && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Notification"], {
    text: notification,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, ({
    loading,
    data,
    error
  }) => {
    if (loading) return __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    });
    if (error) return __jsx("div", {
      className: "jsx-1390389061" + " " + "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Error"], {
      message: "Error loading polls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })); // If no polls exist

    if (data.polls.length == 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/no-polls.png",
        width: "60%",
        className: "jsx-1390389061" + " " + "mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "There are no polls"), __jsx("div", {
        className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, "There are no polls for this channel. Click on the button below to create your first poll."), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        size: "small",
        theme: "blue-border",
        text: "Create a poll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    } // If there are


    return data.polls.map((poll, index) => {
      return __jsx("div", {
        key: index,
        className: "jsx-1390389061" + " " + "polls-listing-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(_components_form_component__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: poll.id,
        userId: poll.user_id,
        expiry: poll.expiry,
        title: poll.title,
        currentUserId: userId,
        description: poll.description,
        questions: poll.questions,
        onSubmit: (pollId, title, description, questions, expiry) => {
          setNotification('Saved');
          updatePoll({
            variables: {
              id: pollId,
              changes: {
                title,
                description,
                questions,
                expiry
              }
            }
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }));
    });
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Update)));

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/update.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Weekday/polls/pages/update.js */"./pages/update.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@weekday/elements":
/*!************************************!*\
  !*** external "@weekday/elements" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@weekday/elements");

/***/ }),

/***/ "apollo-link":
/*!******************************!*\
  !*** external "apollo-link" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "apollo-link-ws":
/*!*********************************!*\
  !*** external "apollo-link-ws" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-ws");

/***/ }),

/***/ "apollo-utilities":
/*!***********************************!*\
  !*** external "apollo-utilities" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-utilities");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-apollo":
/*!******************************!*\
  !*** external "next-apollo" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-apollo");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "react-feather":
/*!********************************!*\
  !*** external "react-feather" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-feather");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "websocket":
/*!****************************!*\
  !*** external "websocket" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("websocket");

/***/ }),

/***/ "ws":
/*!*********************!*\
  !*** external "ws" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ws");

/***/ })

/******/ });
//# sourceMappingURL=update.js.map