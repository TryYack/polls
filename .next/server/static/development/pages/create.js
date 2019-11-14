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
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @weekday/elements */ "@weekday/elements");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-feather */ "react-feather");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_feather__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/form.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




function FormComponent(props) {
  const today = moment__WEBPACK_IMPORTED_MODULE_4___default()();
  const {
    0: title,
    1: setTitle
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: description,
    1: setDescription
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: day,
    1: setDay
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(today.format('DD'));
  const {
    0: month,
    1: setMonth
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(today.format('MM'));
  const {
    0: year,
    1: setYear
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(today.format('YYYY'));
  const {
    0: questions,
    1: setQuestions
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([{
    id: 0,
    text: ''
  }]);

  const addQuestion = () => setQuestions([...questions, {
    id: questions.length + 1,
    text: ''
  }]);

  const removeQuestion = index => {
    let mutableQuestions = _babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default()([], questions);

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

  const save = () => {};

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (!props.id) return;
    const date = moment__WEBPACK_IMPORTED_MODULE_4___default()(props.expiry);
    setTitle(props.title);
    setDescription(props.description);
    setDay(date.format('DD'));
    setMonth(date.format('MM'));
    setYear(date.format('YYYY'));
    setQuestions(props.questions);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "674474010",
    __self: this
  }, ".poll-container.jsx-674474010{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-674474010{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-674474010{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRGtCLEFBR3NCLEFBU1csQUFRSixXQWhCTCxPQWlCRixXQUNiLGlEQVRlLE9BUlMsbUVBU0gsV0FSQyxrRkFTQyxlQVJBLDZEQVNFLGVBUkEsb0ZBU3pCLGVBUkEiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFByb2dyZXNzLCBCdXR0b24sIElucHV0LCBUZXh0YXJlYSB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5pbXBvcnQgeyBUcmFzaCB9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1Db21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgdG9kYXkgPSBtb21lbnQoKVxuXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtkYXksIHNldERheV0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ0REJykpXG4gIGNvbnN0IFttb250aCwgc2V0TW9udGhdID0gdXNlU3RhdGUodG9kYXkuZm9ybWF0KCdNTScpKVxuICBjb25zdCBbeWVhciwgc2V0WWVhcl0gPSB1c2VTdGF0ZSh0b2RheS5mb3JtYXQoJ1lZWVknKSlcbiAgY29uc3QgW3F1ZXN0aW9ucywgc2V0UXVlc3Rpb25zXSA9IHVzZVN0YXRlKFt7aWQ6IDAsIHRleHQ6ICcnfV0pXG5cbiAgY29uc3QgYWRkUXVlc3Rpb24gPSAoKSA9PiBzZXRRdWVzdGlvbnMoWy4uLnF1ZXN0aW9ucywge1xuICAgIGlkOiBxdWVzdGlvbnMubGVuZ3RoICsgMSxcbiAgICB0ZXh0OiAnJyxcbiAgfV0pXG5cbiAgY29uc3QgcmVtb3ZlUXVlc3Rpb24gPSAoaW5kZXgpID0+IHtcbiAgICBsZXQgbXV0YWJsZVF1ZXN0aW9ucyA9IE9iamVjdC5hc3NpZ24oW10sIHF1ZXN0aW9ucylcbiAgICBtdXRhYmxlUXVlc3Rpb25zLnNwbGljZShpbmRleCwgMSlcbiAgICBzZXRRdWVzdGlvbnMobXV0YWJsZVF1ZXN0aW9ucylcbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVF1ZXN0aW9uID0gKHRleHQsIGlkKSA9PiB7XG4gICAgc2V0UXVlc3Rpb25zKHF1ZXN0aW9ucy5tYXAocXVlc3Rpb24gPT4ge1xuICAgICAgaWYgKGlkICE9IHF1ZXN0aW9uLmlkKSByZXR1cm4gcXVlc3Rpb25cblxuICAgICAgcmV0dXJuIHsgaWQ6IHF1ZXN0aW9uLmlkLCB0ZXh0IH1cbiAgICB9KSlcbiAgfVxuXG4gIGNvbnN0IHNhdmUgPSAoKSA9PiB7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghcHJvcHMuaWQpIHJldHVyblxuXG4gICAgY29uc3QgZGF0ZSA9IG1vbWVudChwcm9wcy5leHBpcnkpXG5cbiAgICBzZXRUaXRsZShwcm9wcy50aXRsZSlcbiAgICBzZXREZXNjcmlwdGlvbihwcm9wcy5kZXNjcmlwdGlvbilcbiAgICBzZXREYXkoZGF0ZS5mb3JtYXQoJ0REJykpXG4gICAgc2V0TW9udGgoZGF0ZS5mb3JtYXQoJ01NJykpXG4gICAgc2V0WWVhcihkYXRlLmZvcm1hdCgnWVlZWScpKVxuICAgIHNldFF1ZXN0aW9ucyhwcm9wcy5xdWVzdGlvbnMpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCBjb2xvci1kMyB0ZXh0LWxlZnQgdy0xMDAgbWItMjBcIj5DcmVhdGUgYSBuZXcgcG9sbDwvZGl2PlxuXG4gICAgICAgICAgPElucHV0XG4gICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICBpbnB1dFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBvbGwgdGl0bGVcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8VGV4dGFyZWFcbiAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIHRleHRhcmVhU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUG9sbCBkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICByb3dzPXszfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0RGVzY3JpcHRpb24oZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IGNvbG9yLWQwIHRleHQtbGVmdCB3LTEwMCBtYi0xMFwiPlF1ZXN0aW9uczwvZGl2PlxuXG4gICAgICAgICAge3F1ZXN0aW9ucy5tYXAoKHF1ZXN0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgdy0xMDAgbWItNVwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3F1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk9wdGlvbiB0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlucHV0U2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHVwZGF0ZVF1ZXN0aW9uKGUudGFyZ2V0LnZhbHVlLCBxdWVzdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPFRyYXNoXG4gICAgICAgICAgICAgICAgICBjb2xvcj1cIiNBQ0I1QkRcIlxuICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwXCJcbiAgICAgICAgICAgICAgICAgIHRoaWNrbmVzcz1cIjEuNVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtbC0yMCBidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZSA9PiByZW1vdmVRdWVzdGlvbihpbmRleCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3LTEwMCBtdC0yMFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgdGV4dD1cIkFkZCBhIG5ldyBxdWVzdGlvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2FkZFF1ZXN0aW9ufVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleGVyXCIgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlXCJcbiAgICAgICAgICAgICAgdGV4dD17IXByb3BzLmlkID8gXCJDcmVhdGUgcG9sbFwiIDogXCJVcGRhdGUgcG9sbFwifVxuICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/form.component.js */"), __jsx("div", {
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
  }, "Create a new poll"), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__["Input"], {
    value: title,
    inputSize: "large",
    placeholder: "Poll title",
    onChange: e => setTitle(e.target.value),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__["Textarea"], {
    value: description,
    textareaSize: "large",
    placeholder: "Poll description",
    rows: 3,
    onChange: e => setDescription(e.target.value),
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
  }, "Questions"), questions.map((question, index) => {
    return __jsx("div", {
      key: index,
      className: "jsx-674474010" + " " + "row w-100 mb-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      value: question.text,
      placeholder: "Option text",
      inputSize: "large",
      onChange: e => updateQuestion(e.target.value, question.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx(react_feather__WEBPACK_IMPORTED_MODULE_5__["Trash"], {
      color: "#ACB5BD",
      size: "20",
      thickness: "1.5",
      className: "ml-20 button",
      onClick: e => removeQuestion(index),
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
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], {
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
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    size: "small",
    theme: "blue",
    text: !props.id ? "Create poll" : "Update poll",
    onClick: save,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
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
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "389275926",
    __self: this
  }, ".poll-container.jsx-389275926{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.poll-inner.jsx-389275926{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-389275926{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErQ2tCLEFBR3NCLEFBU0osQUFTVyxXQWpCTCxPQWtCRixXQUNiLElBVndCLG9EQVJBLDBCQVNULG9EQVJPLHNCQVNELDJFQVJFLGtCQVNBLDBEQVJFLGtCQVNBLGlGQVJ6QixrQkFTQSIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgUHJvZ3Jlc3MsIEJ1dHRvbiB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGxDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgW2NvbXBsZXRlLCBzZXRDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaGlnaGVzdCwgc2V0SGlnaGVzdF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZXhwaXJlZCwgc2V0RXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxuXG4gIGNvbnN0IHVwZGF0ZVBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0aW5nJylcbiAgfVxuXG4gIGNvbnN0IGRlbGV0ZVBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICBjb25zb2xlLmxvZygnRGVsZXRpbmcnKVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnTm90IGRlbGV0aW5nJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBhbnN3ZXJRdWVzdGlvbiA9IGFzeW5jIChxdWVzdGlvbklkKSA9PiB7XG4gICAgY29uc29sZS5sb2cocXVlc3Rpb25JZClcbiAgICBzZXRDb21wbGV0ZSh0cnVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5zd2VyQ291bnRIaWdoZXN0ID0gMFxuXG4gICAgcHJvcHMucXVlc3Rpb25zLm1hcChxdWVzdGlvbiA9PiB7XG4gICAgICAvLyBTZWUgaWYgdGhpcyB1c2VyIGhhcyBjb21wbGV0ZWQgdGhlIHBvbGxcbiAgICAgIHByb3BzLmFuc3dlcnMubWFwKGFuc3dlciA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIudXNlcl9pZCA9PSBwcm9wcy5jdXJyZW50VXNlcklkKSBzZXRDb21wbGV0ZSh0cnVlKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IHRoZSBzY29yZSBmb3IgdGhlIGhpZ2hlc3QgYW1vdW50IG9mIHZvdGVzXG4gICAgICBhbnN3ZXJDb3VudEhpZ2hlc3QgPSBwcm9wcy5hbnN3ZXJzLmZpbHRlcihhbnN3ZXIgPT4gYW5zd2VyLnF1ZXN0aW9uX2lkID09IHF1ZXN0aW9uLmlkKS5sZW5ndGhcbiAgICB9KVxuXG4gICAgc2V0VG90YWwocHJvcHMuYW5zd2Vycy5sZW5ndGgpXG4gICAgc2V0SGlnaGVzdChhbnN3ZXJDb3VudEhpZ2hlc3QpXG4gICAgc2V0RXhwaXJlZChtb21lbnQocHJvcHMuZXhwaXJ5KS5pc0JlZm9yZShtb21lbnQoKSkpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0IGNvbG9yLWQzIHRleHQtbGVmdCB3LTEwMCBtYi0wXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgY29sb3ItZDAgdGV4dC1sZWZ0IHctMTAwIG1iLTEwXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgICAgeyFjb21wbGV0ZSAmJiAhZXhwaXJlZCAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtxdWVzdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDM1IH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYW5zd2VyUXVlc3Rpb24ocXVlc3Rpb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeyhjb21wbGV0ZSB8fCBleHBpcmVkKSAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMucXVlc3Rpb25zLm1hcCgocXVlc3Rpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgYW5zd2VycyA9IHByb3BzLmFuc3dlcnMuZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIucXVlc3Rpb25faWQgPT0gcXVlc3Rpb24uaWQpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IE1hdGguZmxvb3IoKGFuc3dlcnMubGVuZ3RoIC8gdG90YWwpICogMTAwKVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yID0gYW5zd2Vycy5sZW5ndGggPj0gaGlnaGVzdCA/ICcjZTllZGYyJyA6ICcjZjBmMmY1J1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWxzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwIGNvbG9yLWQxIHRleHQtbGVmdCB3LTEwMCBtdC01XCI+XG4gICAgICAgICAgICB7ZXhwaXJlZCAmJlxuICAgICAgICAgICAgICA8c3Bhbj5UaGlzIHBvbGwgZXhwaXJlZCB7bW9tZW50KHByb3BzLmV4cGlyeSkuZnJvbU5vdygpfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHshZXhwaXJlZCAmJlxuICAgICAgICAgICAgICA8c3Bhbj5UaGlzIHBvbGwgZXhwaXJlcyBhdCB7bW9tZW50KHByb3BzLmV4cGlyeSkuZm9ybWF0KCdMTCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCAmJlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1ibHVlXCIgb25DbGljaz17dXBkYXRlUG9sbH0+VXBkYXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7cHJvcHMuY3VycmVudFVzZXJJZCA9PSBwcm9wcy51c2VySWQgJiZcbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gbWwtMTAgY29sb3ItcmVkXCIgb25DbGljaz17ZGVsZXRlUG9sbH0+RGVsZXRlPC9zdHJvbmc+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/poll.component.js */"), __jsx("div", {
    className: "jsx-389275926" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-389275926" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-389275926" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.questions.map((question, index) => {
    return __jsx("div", {
      key: index,
      className: "jsx-389275926" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
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
        lineNumber: 83
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, props.questions.map((question, index) => {
    const answers = props.answers.filter(answer => answer.question_id == question.id);
    const percentage = Math.floor(answers.length / total * 100);
    const color = answers.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-389275926" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      percentage: percentage,
      color: color,
      text: question.text,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-389275926" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).fromNow()), !expired && __jsx("span", {
    className: "jsx-389275926",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "This poll expires at ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).format('LL')), props.currentUserId == props.userId && __jsx("strong", {
    onClick: updatePoll,
    className: "jsx-389275926" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: deletePoll,
    className: "jsx-389275926" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
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


const config = {
  link: new apollo_link_http__WEBPACK_IMPORTED_MODULE_1__["HttpLink"]({
    uri: 'http://localhost:8080/v1/graphql'
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_apollo__WEBPACK_IMPORTED_MODULE_0__["withData"])(config));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @weekday/elements */ "@weekday/elements");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");
/* harmony import */ var _components_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/form.component */ "./components/form.component.js");

var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;











function Create(props) {
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  const {
    0: channelId,
    1: setChannelId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    // const { router: { query: { payload } }} = props;
    const payload = btoa(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      userId: '5db7e3c98476242154d43181',
      channelId: '5db87f04db059a6d8dc8d068'
    }));
    const parsedPayload = JSON.parse(atob(payload));
    setUserId(parsedPayload.userId);
    setChannelId(parsedPayload.channelId);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDeUIsQUFHc0IsQUFLTSxBQUlBLEFBYUMsQUFPWCxXQTVCSyxNQUtkLEFBSWEsQ0FhSCxLQXJCVixHQXNCVyxFQWJHLEtBbUJDLEVBTEYsS0FiTyxNQWNwQixZQWJXLFNBQ0QsUUFDSyxnQ0FnQlMsMENBZkYsb0NBZ0JELDZEQWZFLGdDQWdCQSw0Q0FmRSxnQ0FnQkksbUVBZjdCLHNDQWdCZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvY3JlYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50J1xuXG5mdW5jdGlvbiBDcmVhdGUocHJvcHMpIHtcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY2hhbm5lbElkLCBzZXRDaGFubmVsSWRdID0gdXNlU3RhdGUoJycpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAvLyBjb25zdCB7IHJvdXRlcjogeyBxdWVyeTogeyBwYXlsb2FkIH0gfX0gPSBwcm9wcztcbiAgICBjb25zdCBwYXlsb2FkID0gYnRvYShKU09OLnN0cmluZ2lmeSh7IHVzZXJJZDogJzVkYjdlM2M5ODQ3NjI0MjE1NGQ0MzE4MScsIGNoYW5uZWxJZDogJzVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OCcgfSkpXG4gICAgY29uc3QgcGFyc2VkUGF5bG9hZCA9IEpTT04ucGFyc2UoYXRvYihwYXlsb2FkKSlcblxuICAgIHNldFVzZXJJZChwYXJzZWRQYXlsb2FkLnVzZXJJZClcbiAgICBzZXRDaGFubmVsSWQocGFyc2VkUGF5bG9hZC5jaGFubmVsSWQpXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2xsczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbHMtbGlzdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xscy1saXN0aW5nLWNvbnRhaW5lclwiPlxuICAgICAgICA8Rm9ybUNvbXBvbmVudFxuICAgICAgICAgIGlkPXtudWxsfVxuICAgICAgICAgIHVzZXJJZD17bnVsbH1cbiAgICAgICAgICBleHBpcnk9e251bGx9XG4gICAgICAgICAgdGl0bGU9e251bGx9XG4gICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgIGRlc2NyaXB0aW9uPXtudWxsfVxuICAgICAgICAgIHF1ZXN0aW9ucz17bnVsbH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuQ3JlYXRlLmdldEluaXRpYWxQcm9wcyA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgY29vbDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoQ3JlYXRlKSlcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/create.js */"), __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(_components_form_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
    id: null,
    userId: null,
    expiry: null,
    title: null,
    currentUserId: userId,
    description: null,
    questions: null,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  })));
}

Create.getInitialProps = context => {
  const {
    query: {
      payload
    }
  } = context;
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(Create)));

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/create.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Weekday/polls/pages/create.js */"./pages/create.js");


/***/ }),

/***/ "@weekday/elements":
/*!************************************!*\
  !*** external "@weekday/elements" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@weekday/elements");

/***/ }),

/***/ "apollo-link-http":
/*!***********************************!*\
  !*** external "apollo-link-http" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-link-http");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

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

/***/ })

/******/ });
//# sourceMappingURL=create.js.map