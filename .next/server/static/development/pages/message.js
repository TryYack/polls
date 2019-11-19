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

/***/ "./pages/message.js":
/*!**************************!*\
  !*** ./pages/message.js ***!
  \**************************/
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
var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/message.js";

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

function Message(props) {
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
  const {
    0: pollId,
    1: setPollId
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(query.payload);
  const [addVote, addVoteData] = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(ADD_VOTE);
  const {
    loading,
    error,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_6___default.a`
    subscription {
      polls(where: { id: { _eq: ${pollId} } }) {
        id
        title
        description
        user_id
        channel_id
        expiry
        options
        poll_votes {
          user_id
          option_id
        }
      }
    }
  `);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    Object(_util__WEBPACK_IMPORTED_MODULE_11__["autoAdjustMessageHeight"])();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1590883482",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;overflow:scroll;}.container{background:white;padding:20px;}.error{position:absolute;top:0px;left:0px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RHlCLEFBR3NCLEFBS00sQUFLQSxBQUtDLFdBZE4sTUFLSSxBQUtILENBS0wsS0FkVixHQWVXLElBTFgsR0FMQSxFQVdhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCB7IGF1dG9BZGp1c3RNZXNzYWdlSGVpZ2h0IH0gZnJvbSAnLi4vdXRpbCdcblxuY29uc3QgQUREX1ZPVEUgPSBncWxgXG4gIG11dGF0aW9uIGFkZF92b3RlKCRvYmplY3RzOiBbcG9sbF92b3Rlc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbF92b3RlcyhvYmplY3RzOiAkb2JqZWN0cykge1xuICAgICAgcmV0dXJuaW5nIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcbiAgLy8gP3VzZXJJZD01ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEmY2hhbm5lbElkPTVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFxuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeSB9fSA9IHByb3BzXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShxdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShxdWVyeS5jaGFubmVsSWQpXG4gIGNvbnN0IFtwb2xsSWQsIHNldFBvbGxJZF0gPSB1c2VTdGF0ZShxdWVyeS5wYXlsb2FkKVxuICBjb25zdCBbYWRkVm90ZSwgYWRkVm90ZURhdGFdID0gdXNlTXV0YXRpb24oQUREX1ZPVEUpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVN1YnNjcmlwdGlvbihncWxgXG4gICAgc3Vic2NyaXB0aW9uIHtcbiAgICAgIHBvbGxzKHdoZXJlOiB7IGlkOiB7IF9lcTogJHtwb2xsSWR9IH0gfSkge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1c2VyX2lkXG4gICAgICAgIGNoYW5uZWxfaWRcbiAgICAgICAgZXhwaXJ5XG4gICAgICAgIG9wdGlvbnNcbiAgICAgICAgcG9sbF92b3RlcyB7XG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgIG9wdGlvbl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXV0b0FkanVzdE1lc3NhZ2VIZWlnaHQoKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHsobG9hZGluZyB8fCAhZGF0YSkgJiYgPFNwaW5uZXIgLz59XG4gICAgICAgIHsoKGVycm9yIHx8ICFkYXRhKSAmJiAhbG9hZGluZykgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+fVxuICAgICAgICB7ZGF0YSAmJlxuICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIHtkYXRhLnBvbGxzLm1hcCgocG9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8UG9sbENvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgdG9vbHM9e2ZhbHNlfVxuICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgIGV4cGlyeT17cG9sbC5leHBpcnl9XG4gICAgICAgICAgICAgICAgICB0aXRsZT17cG9sbC50aXRsZX1cbiAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e3BvbGwuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICBvcHRpb25zPXtwb2xsLm9wdGlvbnN9XG4gICAgICAgICAgICAgICAgICBwb2xsVm90ZXM9e3BvbGwucG9sbF92b3Rlc31cbiAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsob3B0aW9uSWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkVm90ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25faWQ6IG9wdGlvbklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvbGxfaWQ6IHBvbGxJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEod2l0aFJvdXRlcihNZXNzYWdlKSlcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/message.js */"), __jsx("div", {
    className: "jsx-1590883482" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, (loading || !data) && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), (error || !data) && !loading && __jsx("div", {
    className: "jsx-1590883482" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, data.polls.map((poll, index) => {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_9__["default"], {
      tools: false,
      key: index,
      expiry: poll.expiry,
      title: poll.title,
      userId: poll.user_id,
      description: poll.description,
      options: poll.options,
      pollVotes: poll.poll_votes,
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
        lineNumber: 93
      },
      __self: this
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Message)));

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

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/message.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/joduplessis/Work/Weekday/polls/pages/message.js */"./pages/message.js");


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
//# sourceMappingURL=message.js.map