webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    \tquery {\n    \t  polls {\n    \t    id\n    \t    title\n          description\n          user_id\n          channel_id\n          expiry\n          questions\n          answers {\n            question_id\n            user_id\n          }\n    \t  }\n    \t}\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      channelId = _useState3[0],
      setChannelId = _useState3[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    // const { router: { query: { payload } }} = props;
    var payload = btoa(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
      userId: '5db7e3c98476242154d43181_',
      channelId: '5db87f04db059a6d8dc8d068'
    }));
    var parsedPayload = JSON.parse(atob(payload));
    setUserId(parsedPayload.userId);
    setChannelId(parsedPayload.channelId);
    setQuery(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject()));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0R5QixBQUdzQixBQUtNLEFBSUEsQUFhQyxBQU9YLFdBNUJLLE1BS2QsQUFJYSxDQWFILEtBckJWLEdBc0JXLEVBYkcsS0FtQkMsRUFMRixLQWJPLE1BY3BCLFlBYlcsU0FDRCxRQUNLLGdDQWdCUywwQ0FmRixvQ0FnQkQsNkRBZkUsZ0NBZ0JBLDRDQWZFLGdDQWdCSSxtRUFmN0Isc0NBZ0JlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2NoYW5uZWxJZCwgc2V0Q2hhbm5lbElkXSA9IHVzZVN0YXRlKCcnKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgeyByb3V0ZXI6IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH19ID0gcHJvcHM7XG4gICAgY29uc3QgcGF5bG9hZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQ6ICc1ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODFfJywgY2hhbm5lbElkOiAnNWRiODdmMDRkYjA1OWE2ZDhkYzhkMDY4JyB9KSlcbiAgICBjb25zdCBwYXJzZWRQYXlsb2FkID0gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKVxuXG4gICAgc2V0VXNlcklkKHBhcnNlZFBheWxvYWQudXNlcklkKVxuICAgIHNldENoYW5uZWxJZChwYXJzZWRQYXlsb2FkLmNoYW5uZWxJZClcbiAgICBzZXRRdWVyeShncWxgXG4gICAgXHRxdWVyeSB7XG4gICAgXHQgIHBvbGxzIHtcbiAgICBcdCAgICBpZFxuICAgIFx0ICAgIHRpdGxlXG4gICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICB1c2VyX2lkXG4gICAgICAgICAgY2hhbm5lbF9pZFxuICAgICAgICAgIGV4cGlyeVxuICAgICAgICAgIHF1ZXN0aW9uc1xuICAgICAgICAgIGFuc3dlcnMge1xuICAgICAgICAgICAgcXVlc3Rpb25faWRcbiAgICAgICAgICAgIHVzZXJfaWRcbiAgICAgICAgICB9XG4gICAgXHQgIH1cbiAgICBcdH1cbiAgICBgKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGxzLWxpc3RpbmctY29udGFpbmVyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICB7cXVlcnkgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sdW1uXCI+XG4gICAgICAgICAgPFF1ZXJ5XG4gICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICBmZXRjaFBvbGljeT17J2NhY2hlLWFuZC1uZXR3b3JrJ30+XG4gICAgICAgICAgICB7KHsgbG9hZGluZywgZGF0YSwgZXJyb3IgfSkgPT4ge1xuICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj48RXJyb3IgbWVzc2FnZT1cIkVycm9yIGxvYWRpbmcgcG9sbHNcIiAvPjwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgLy8gSWYgbm8gcG9sbHMgZXhpc3RcbiAgICAgICAgICAgICAgaWYgKGRhdGEucG9sbHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0zMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMiB0ZXh0LWNlbnRlclwiPlRoZXJlIGFyZSBubyBwb2xsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1iLTIwIHBsLTIwIHByLTIwIGNvbG9yLWQwIHRleHQtY2VudGVyXCI+VGhlcmUgYXJlIG5vIHBvbGxzIGZvciB0aGlzIGNoYW5uZWwuIENsaWNrIG9uIHRoZSBidXR0b24gYmVsb3cgdG8gY3JlYXRlIHlvdXIgZmlyc3QgcG9sbC48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZVxuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5wb2xscy5tYXAoKHBvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbHMtbGlzdGluZy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPFBvbGxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICBleHBpcnk9e3BvbGwuZXhwaXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb2xsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3BvbGwucXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnM9e3BvbGwuYW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPC9RdWVyeT5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9ID0gY29udGV4dDtcblxuICByZXR1cm4ge1xuICAgIGNvb2w6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoUm91dGVyKEluZGV4KSlcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), query && __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        data = _ref.data,
        error = _ref.error;
    if (loading) return __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    });
    if (error) return __jsx("div", {
      className: "jsx-1390389061" + " " + "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
      message: "Error loading polls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    })); // If no polls exist

    if (data.polls.length == 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/no-polls.png",
        width: "60%",
        className: "jsx-1390389061" + " " + "mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "There are no polls"), __jsx("div", {
        className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "There are no polls for this channel. Click on the button below to create your first poll."), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
        size: "small",
        theme: "blue-border",
        text: "Create a poll",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }));
    } // If there are


    return data.polls.map(function (poll, index) {
      return __jsx("div", {
        key: index,
        className: "jsx-1390389061" + " " + "polls-listing-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
        expiry: poll.expiry,
        title: poll.title,
        userId: poll.user_id,
        currentUserId: userId,
        description: poll.description,
        questions: poll.questions,
        answers: poll.answers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }));
    });
  })));
}

Index.getInitialProps = function (context) {
  var payload = context.query.payload;
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Index)));

/***/ })

})
//# sourceMappingURL=index.js.f2f4b831f4b057940e33.hot-update.js.map