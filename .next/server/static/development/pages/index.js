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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








const query = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
	query {
	  polls {
	    id
	    title
      description
	  }
	}
`;

function Index(props) {
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const {
      router: {
        query: {
          payload
        }
      }
    } = props;
    console.log(payload);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Index"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "469798477",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUN5QixBQUdzQixBQUtNLEFBSUEsV0FSTCxNQUtkLEFBSWEsTUFSYixLQVNjLFlBQ00sa0JBQ1QsU0FDRCxRQUNLLDBFQUNNLDZGQUNFLDRFQUNFLG1HQUN6QiIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcblxuY29uc3QgcXVlcnkgPSBncWxgXG5cdHF1ZXJ5IHtcblx0ICBwb2xscyB7XG5cdCAgICBpZFxuXHQgICAgdGl0bGVcbiAgICAgIGRlc2NyaXB0aW9uXG5cdCAgfVxuXHR9XG5gXG5cbmZ1bmN0aW9uIEluZGV4KHByb3BzKSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgeyByb3V0ZXI6IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH19ID0gcHJvcHM7XG5cbiAgICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SW5kZXg8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPFF1ZXJ5XG4gICAgICAgIHF1ZXJ5PXsgcXVlcnkgfVxuICAgICAgICBmZXRjaFBvbGljeT17ICdjYWNoZS1hbmQtbmV0d29yaycgfT5cbiAgICAgICAgeyh7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhsb2FkaW5nLCBkYXRhLCBlcnJvcilcblxuICAgICAgICAgIGlmKGVycm9yKSB7XG4gICAgICAgICAgICByZXR1cm4gKDxkaXY+RXJyb3IuLjwvZGl2Pik7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2x1bW5cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL25vLXBvbGxzLnBuZ1wiIHdpZHRoPVwiNjAlXCIgY2xhc3NOYW1lPVwibWItMzBcIi8+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMiB0ZXh0LWNlbnRlclwiPlRoZXJlIGFyZSBubyBwb2xsczwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1iLTIwIHBsLTIwIHByLTIwIGNvbG9yLWQwIHRleHQtY2VudGVyXCI+WW91IGhhdmVuJ3QgY3JlYXRlZCBhbnkgcG9sbHMuIENsaWNrIG9uIHRoZSBidXR0b24gYmVsb3cgdG8gY3JlYXRlIHlvdXIgZmlyc3QgcG9sbC48L2Rpdj5cblxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApO1xuICAgICAgICB9fVxuICAgICAgPC9RdWVyeT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgY29vbDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoSW5kZXgpKVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, ({
    loading,
    data,
    error
  }) => {
    console.log(loading, data, error);

    if (error) {
      return __jsx("div", {
        className: "jsx-469798477",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Error..");
    }

    return __jsx("div", {
      className: "jsx-469798477" + " " + "container column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, __jsx("img", {
      src: "../static/images/no-polls.png",
      width: "60%",
      className: "jsx-469798477" + " " + "mb-30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    }), __jsx("div", {
      className: "jsx-469798477" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, "There are no polls"), __jsx("div", {
      className: "jsx-469798477" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, "You haven't created any polls. Click on the button below to create your first poll."), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      size: "small",
      theme: "blue-border",
      text: "Create a poll",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }));
  }));
}

Index.getInitialProps = context => {
  const {
    query: {
      payload
    }
  } = context;
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Index)));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Weekday/polls/pages/index.js */"./pages/index.js");


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

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map