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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util */ "./util.js");
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/poll.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const DELETE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default.a`
  mutation delete_polls($id: Int) {
    delete_polls(
      where: {id: {_eq: $id}}
    ) {
      affected_rows
    }
  }
`;
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
  const [deletePoll, deleteData] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(DELETE_POLL);

  const sharePoll = async () => {};

  const updatePoll = async () => {
    Object(_util__WEBPACK_IMPORTED_MODULE_6__["openAppModal"])({
      name: 'Update poll',
      url: 'http://localhost:3000/update?pollId=' + props.id
    });
  };

  const confirmDeletePoll = async () => {
    if (confirm("Are you sure?")) {
      deletePoll({
        variables: {
          id: props.id
        }
      });
    }
  };

  const voteOption = async optionId => {
    props.onSubmit(optionId);
    setComplete(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    let voteCountHighest = 0;
    props.options.map(option => {
      // See if this user has completed the poll
      props.pollVotes.map(vote => {
        if (vote.user_id == props.currentUserId) setComplete(true);
      }); // Set the score for the highest amount of votes

      voteCountHighest = props.pollVotes.filter(vote => vote.option_id == option.id).length;
    });
    setTotal(props.pollVotes.length);
    setHighest(voteCountHighest);
    setExpired(moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_3___default()()));
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4211460005",
    __self: this
  }, ".poll-container.jsx-4211460005{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.poll-inner.jsx-4211460005{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-4211460005{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRWtCLEFBR3NCLEFBV0osQUFTVyxXQW5CQyxPQW9CUixXQUNiLElBVndCLGdEQVZULDhCQVdBLDRDQVZTLDhCQVdILGdEQVZDLDZDQVdDLG9EQVZBLHdCQVdFLG9EQVZBLCtDQVd6QixvREFWcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IG9wZW5BcHBNb2RhbCB9IGZyb20gJy4uL3V0aWwnXG5cbmNvbnN0IERFTEVURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVfcG9sbHMoJGlkOiBJbnQpIHtcbiAgICBkZWxldGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fVxuICAgICkge1xuICAgICAgYWZmZWN0ZWRfcm93c1xuICAgIH1cbiAgfVxuYDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9sbENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtoaWdoZXN0LCBzZXRIaWdoZXN0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtleHBpcmVkLCBzZXRFeHBpcmVkXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtkZWxldGVQb2xsLCBkZWxldGVEYXRhXSA9IHVzZU11dGF0aW9uKERFTEVURV9QT0xMKVxuXG4gIGNvbnN0IHNoYXJlUG9sbCA9IGFzeW5jICgpID0+IHtcblxuICB9XG5cbiAgY29uc3QgdXBkYXRlUG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICBvcGVuQXBwTW9kYWwoe1xuICAgICAgbmFtZTogJ1VwZGF0ZSBwb2xsJyxcbiAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC91cGRhdGU/cG9sbElkPScgKyBwcm9wcy5pZCxcbiAgICB9KVxuICB9XG5cbiAgY29uc3QgY29uZmlybURlbGV0ZVBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKGNvbmZpcm0oXCJBcmUgeW91IHN1cmU/XCIpKSB7XG4gICAgICBkZWxldGVQb2xsKHsgdmFyaWFibGVzOiB7IGlkOiBwcm9wcy5pZCB9IH0pXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgdm90ZU9wdGlvbiA9IGFzeW5jIChvcHRpb25JZCkgPT4ge1xuICAgIHByb3BzLm9uU3VibWl0KG9wdGlvbklkKVxuICAgIHNldENvbXBsZXRlKHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCB2b3RlQ291bnRIaWdoZXN0ID0gMFxuXG4gICAgcHJvcHMub3B0aW9ucy5tYXAob3B0aW9uID0+IHtcbiAgICAgIC8vIFNlZSBpZiB0aGlzIHVzZXIgaGFzIGNvbXBsZXRlZCB0aGUgcG9sbFxuICAgICAgcHJvcHMucG9sbFZvdGVzLm1hcCh2b3RlID0+IHtcbiAgICAgICAgaWYgKHZvdGUudXNlcl9pZCA9PSBwcm9wcy5jdXJyZW50VXNlcklkKSBzZXRDb21wbGV0ZSh0cnVlKVxuICAgICAgfSlcblxuICAgICAgLy8gU2V0IHRoZSBzY29yZSBmb3IgdGhlIGhpZ2hlc3QgYW1vdW50IG9mIHZvdGVzXG4gICAgICB2b3RlQ291bnRIaWdoZXN0ID0gcHJvcHMucG9sbFZvdGVzLmZpbHRlcih2b3RlID0+IHZvdGUub3B0aW9uX2lkID09IG9wdGlvbi5pZCkubGVuZ3RoXG4gICAgfSlcblxuICAgIHNldFRvdGFsKHByb3BzLnBvbGxWb3Rlcy5sZW5ndGgpXG4gICAgc2V0SGlnaGVzdCh2b3RlQ291bnRIaWdoZXN0KVxuICAgIHNldEV4cGlyZWQobW9tZW50KHByb3BzLmV4cGlyeSkuaXNCZWZvcmUobW9tZW50KCkpKVxuICB9LCBbcHJvcHNdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucG9sbC1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGwtaW5uZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWlubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNCBjb2xvci1kMyB0ZXh0LWxlZnQgdy0xMDAgbWItMFwiPntwcm9wcy50aXRsZX08L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IGNvbG9yLWQwIHRleHQtbGVmdCB3LTEwMCBtYi0xMFwiPntwcm9wcy5kZXNjcmlwdGlvbn08L2Rpdj5cblxuICAgICAgICAgIHsoIWNvbXBsZXRlICYmICFleHBpcmVkKSAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJmdWxsLXdpZHRoXCJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDM1IH19XG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdm90ZU9wdGlvbihvcHRpb24uaWQpfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgeyhjb21wbGV0ZSB8fCBleHBpcmVkKSAmJlxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICB7cHJvcHMub3B0aW9ucy5tYXAoKG9wdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBwb2xsX3ZvdGVzID0gcHJvcHMucG9sbFZvdGVzLmZpbHRlcih2b3RlID0+IHZvdGUub3B0aW9uX2lkID09IG9wdGlvbi5pZClcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gcG9sbF92b3Rlcy5sZW5ndGggPT0gMCA/IDAgOiBNYXRoLmZsb29yKChwb2xsX3ZvdGVzLmxlbmd0aCAvIHRvdGFsKSAqIDEwMClcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvciA9IHBvbGxfdm90ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2YwZjJmNSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBwb2xsX3ZvdGVzLmxlbmd0aCA+PSBoaWdoZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnI2U5ZWRmMidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcjZjBmMmY1J1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9ncmVzc1xuICAgICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U9e3BlcmNlbnRhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e29wdGlvbi50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVscz17dHJ1ZX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicCBjb2xvci1kMSB0ZXh0LWxlZnQgdy0xMDAgbXQtNVwiPlxuICAgICAgICAgICAgeyhleHBpcmVkICYmIHByb3BzLmV4cGlyeSkgJiZcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMTBcIj5UaGlzIHBvbGwgZXhwaXJlZCB7bW9tZW50KHByb3BzLmV4cGlyeSkuZnJvbU5vdygpfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsoIWV4cGlyZWQgJiYgcHJvcHMuZXhwaXJ5KSAmJlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMFwiPlRoaXMgcG9sbCBleHBpcmVzIG9uIHttb21lbnQocHJvcHMuZXhwaXJ5KS5mb3JtYXQoJ0xMJyl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyghZXhwaXJlZCAmJiAhcHJvcHMuZXhwaXJ5KSAmJlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0xMFwiPlRoaXMgcG9sbCBkb2VzIG5vdCBleHBpcmU8L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7cHJvcHMudG9vbHMgJiZcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicCBjb2xvci1kMSB0ZXh0LWxlZnQgdy0xMDAgbXQtNVwiPlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBjb2xvci1ibHVlXCIgb25DbGljaz17c2hhcmVQb2xsfT5TaGFyZSB0byBjaGFubmVsPC9zdHJvbmc+XG5cbiAgICAgICAgICAgICAgeyhwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCkgJiZcbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1ibHVlXCIgb25DbGljaz17dXBkYXRlUG9sbH0+VXBkYXRlPC9zdHJvbmc+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgeyhwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCkgJiZcbiAgICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1yZWRcIiBvbkNsaWNrPXtjb25maXJtRGVsZXRlUG9sbH0+RGVsZXRlPC9zdHJvbmc+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/poll.component.js */"), __jsx("div", {
    className: "jsx-4211460005" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4211460005" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4211460005" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-4211460005" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, props.options.map((option, index) => {
    return __jsx("div", {
      key: index,
      className: "jsx-4211460005" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      text: option.text,
      theme: "blue-border",
      size: "full-width",
      style: {
        height: 35
      },
      onClick: () => voteOption(option.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, props.options.map((option, index) => {
    const poll_votes = props.pollVotes.filter(vote => vote.option_id == option.id);
    const percentage = poll_votes.length == 0 ? 0 : Math.floor(poll_votes.length / total * 100);
    const color = poll_votes ? '#f0f2f5' : poll_votes.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-4211460005" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_2__["Progress"], {
      percentage: percentage,
      color: color,
      text: option.text,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-4211460005" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, expired && props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).fromNow()), !expired && props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "This poll expires on ", moment__WEBPACK_IMPORTED_MODULE_3___default()(props.expiry).format('LL')), !expired && !props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, "This poll does not expire")), props.tools && __jsx("div", {
    className: "jsx-4211460005" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx("strong", {
    onClick: sharePoll,
    className: "jsx-4211460005" + " " + "button color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "Share to channel"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: updatePoll,
    className: "jsx-4211460005" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: confirmDeletePoll,
    className: "jsx-4211460005" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
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
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util */ "./util.js");
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











const ADD_VOTE = graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
  mutation add_vote($objects: [poll_votes_insert_input!]!) {
    insert_poll_votes(objects: $objects) {
      returning {
        id
      }
    }
  }
`;

function Index(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068
  const {
    router: {
      query
    }
  } = props;
  const {
    0: userId,
    1: setUserId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(query.userId);
  const {
    0: channelId,
    1: setChannelId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(query.channelId);
  const [addVote, addVoteData] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(ADD_VOTE);
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
    subscription {
      polls(where: { channel_id: { _eq: "${channelId}" } }) {
        id
        title
        description
        user_id
        channel_id
        expiry
        options
        poll_votes {
          option_id
          user_id
        }
      }
    }
  `);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUR5QixBQUdzQixBQUtNLEFBSUEsQUFhQyxBQU9YLFdBNUJLLE1BS2QsQUFJYSxDQWFILEtBckJWLEdBc0JXLEVBYkcsS0FtQkMsRUFMRixLQWJPLE1BY3BCLFlBYlcsU0FDRCxRQUNLLGdDQWdCUywwQ0FmRixvQ0FnQkQsNkRBZkUsZ0NBZ0JBLDRDQWZFLGdDQWdCSSxtRUFmN0Isc0NBZ0JlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5pbXBvcnQgeyBvcGVuQXBwTW9kYWwgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBBRERfVk9URSA9IGdxbGBcbiAgbXV0YXRpb24gYWRkX3ZvdGUoJG9iamVjdHM6IFtwb2xsX3ZvdGVzX2luc2VydF9pbnB1dCFdISkge1xuICAgIGluc2VydF9wb2xsX3ZvdGVzKG9iamVjdHM6ICRvYmplY3RzKSB7XG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgLy8gP3VzZXJJZD01ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEmY2hhbm5lbElkPTVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFxuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeSB9fSA9IHByb3BzXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShxdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShxdWVyeS5jaGFubmVsSWQpXG4gIGNvbnN0IFthZGRWb3RlLCBhZGRWb3RlRGF0YV0gPSB1c2VNdXRhdGlvbihBRERfVk9URSlcbiAgY29uc3QgeyBsb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlU3Vic2NyaXB0aW9uKGdxbGBcbiAgICBzdWJzY3JpcHRpb24ge1xuICAgICAgcG9sbHMod2hlcmU6IHsgY2hhbm5lbF9pZDogeyBfZXE6IFwiJHtjaGFubmVsSWR9XCIgfSB9KSB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgIHVzZXJfaWRcbiAgICAgICAgY2hhbm5lbF9pZFxuICAgICAgICBleHBpcnlcbiAgICAgICAgb3B0aW9uc1xuICAgICAgICBwb2xsX3ZvdGVzIHtcbiAgICAgICAgICBvcHRpb25faWRcbiAgICAgICAgICB1c2VyX2lkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvbGxzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xscy1saXN0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sdW1uXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbHMtbGlzdGluZy1jb250YWluZXJcIj5cbiAgICAgICAgICB7KGxvYWRpbmcgfHwgIWRhdGEpICYmIDxTcGlubmVyIC8+fVxuICAgICAgICAgIHsoKGVycm9yIHx8ICFkYXRhKSAmJiAhbG9hZGluZykgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+fVxuICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHsoZGF0YS5wb2xscy5sZW5ndGggPT0gMCkgJiZcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0zMFwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDIgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDAgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHMgZm9yIHRoaXMgY2hhbm5lbC4gQ2xpY2sgb24gdGhlIGJ1dHRvbiBiZWxvdyB0byBjcmVhdGUgeW91ciBmaXJzdCBwb2xsLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB7ZGF0YS5wb2xscy5tYXAoKHBvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxQb2xsQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIHRvb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICBpZD17cG9sbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgZXhwaXJ5PXtwb2xsLmV4cGlyeX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BvbGwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cG9sbC5vcHRpb25zIHx8IFtdfVxuICAgICAgICAgICAgICAgICAgICBwb2xsVm90ZXM9e3BvbGwucG9sbF92b3RlcyB8fCBbXX1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KG9wdGlvbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWRkVm90ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl9pZDogb3B0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsX2lkOiBwb2xsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zMCB3LTEwMFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgdGV4dD1cIkNyZWF0ZSBhIG5ldyBwb2xsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3BlbkFwcE1vZGFsKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnQ3JlYXRlIGEgcG9sbCcsXG4gICAgICAgICAgICAgICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2NyZWF0ZScsXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoSW5kZXgpKVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, (loading || !data) && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), (error || !data) && !loading && __jsx("div", {
    className: "jsx-1390389061" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, data.polls.length == 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/no-polls.png",
    width: "60%",
    className: "jsx-1390389061" + " " + "mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "There are no polls"), __jsx("div", {
    className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "There are no polls for this channel. Click on the button below to create your first poll.")), data.polls.map((poll, index) => {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
      tools: true,
      key: index,
      id: poll.id,
      expiry: poll.expiry,
      title: poll.title,
      userId: poll.user_id,
      description: poll.description,
      options: poll.options || [],
      pollVotes: poll.poll_votes || [],
      currentUserId: userId,
      onSubmit: optionId => {
        addVote({
          variables: {
            objects: [{
              option_id: optionId,
              poll_id: pollId,
              user_id: userId
            }]
          }
        });
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    });
  })), __jsx("div", {
    className: "jsx-1390389061" + " " + "row justify-content-center mt-30 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Create a new poll",
    onClick: () => Object(_util__WEBPACK_IMPORTED_MODULE_11__["openAppModal"])({
      name: 'Create a poll',
      url: 'http://localhost:3000/create'
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Index)));

/***/ }),

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! exports provided: autoAdjustMessageHeight, closeAppModal, closeAppPanel, openAppPanel, openAppModal, postAppMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAdjustMessageHeight", function() { return autoAdjustMessageHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAppModal", function() { return closeAppModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeAppPanel", function() { return closeAppPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAppPanel", function() { return openAppPanel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAppModal", function() { return openAppModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAppMessage", function() { return postAppMessage; });
const autoAdjustMessageHeight = () => {
  let currentHeight = 0;
  setInterval(() => {
    const {
      scrollHeight
    } = document.documentElement;

    if (scrollHeight != currentHeight) {
      currentHeight = scrollHeight;
      window.location.search.split('&').map(query => {
        const parts = query.split('=');

        if (parts[0] == 'weekdayId' && parts.length == 2) {
          const weekdayId = parts[1];
          postAppMessage({
            type: 'AUTO_ADJUST_MESSAGE_HEIGHT',
            weekdayId,
            scrollHeight
          });
        }
      });
    }
  }, 1000);
};
const closeAppModal = () => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'modal-close'
    }
  });
};
const closeAppPanel = () => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'panel-close'
    }
  });
};
const openAppPanel = ({
  name,
  url
}) => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'panel',
      name,
      url
    }
  });
};
const openAppModal = ({
  name,
  url
}) => {
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'modal',
      name,
      url
    }
  });
};
const postAppMessage = payload => {
  window.top.postMessage({
    type: 'weekday',
    payload
  }, '*');
};

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Weekday/polls/pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map