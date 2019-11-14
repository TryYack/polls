webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/lib/react-apollo.esm.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _components_poll_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/poll.component */ "./components/poll.component.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");



var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    \tsubscription {\n    \t  polls {\n    \t    id\n    \t    title\n          description\n          user_id\n          channel_id\n          expiry\n          questions\n          answers {\n            question_id\n            user_id\n          }\n    \t  }\n    \t}\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation add_poll($objects: [polls_insert_input!]!) {\n    insert_polls(objects: $objects) {\n      returning {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation update_polls($id: Int, $changes: polls_set_input) {\n    update_polls(\n      where: {id: {_eq: $id}},\n      _set: $changes\n    ) {\n      affected_rows\n      returning {\n        id\n        title\n        description\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n  mutation delete_polls($id: Int) {\n    delete_polls(\n      where: {id: {_eq: $id}}\n    ) {\n      affected_rows\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var DELETE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());
var UPDATE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject2());
var ADD_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject3());

function Index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(null),
      query = _useState[0],
      setQuery = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(''),
      channelId = _useState3[0],
      setChannelId = _useState3[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(ADD_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation, 2),
      addPoll = _useMutation2[0],
      addData = _useMutation2[1];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(UPDATE_POLL),
      _useMutation4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation3, 2),
      updatePoll = _useMutation4[0],
      updateData = _useMutation4[1];

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(DELETE_POLL),
      _useMutation6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useMutation5, 2),
      deletePoll = _useMutation6[0],
      deleteData = _useMutation6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // const { router: { query: { payload } }} = props;
    var payload = btoa(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      userId: '5db7e3c98476242154d43181',
      channelId: '5db87f04db059a6d8dc8d068'
    }));
    var parsedPayload = JSON.parse(atob(payload));
    setUserId(parsedPayload.userId);
    setChannelId(parsedPayload.channelId);
    setQuery(graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject4()));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZ5QixBQUdzQixBQUtNLEFBSUEsQUFhQyxBQU9YLFdBNUJLLE1BS2QsQUFJYSxDQWFILEtBckJWLEdBc0JXLEVBYkcsS0FtQkMsRUFMRixLQWJPLE1BY3BCLFlBYlcsU0FDRCxRQUNLLGdDQWdCUywwQ0FmRixvQ0FnQkQsNkRBZkUsZ0NBZ0JBLDRDQWZFLGdDQWdCSSxtRUFmN0Isc0NBZ0JlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuXG5jb25zdCBERUxFVEVfUE9MTCA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlX3BvbGxzKCRpZDogSW50KSB7XG4gICAgZGVsZXRlX3BvbGxzKFxuICAgICAgd2hlcmU6IHtpZDoge19lcTogJGlkfX1cbiAgICApIHtcbiAgICAgIGFmZmVjdGVkX3Jvd3NcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IFVQREFURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVfcG9sbHMoJGlkOiBJbnQsICRjaGFuZ2VzOiBwb2xsc19zZXRfaW5wdXQpIHtcbiAgICB1cGRhdGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fSxcbiAgICAgIF9zZXQ6ICRjaGFuZ2VzXG4gICAgKSB7XG4gICAgICBhZmZlY3RlZF9yb3dzXG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgQUREX1BPTEwgPSBncWxgXG4gIG11dGF0aW9uIGFkZF9wb2xsKCRvYmplY3RzOiBbcG9sbHNfaW5zZXJ0X2lucHV0IV0hKSB7XG4gICAgaW5zZXJ0X3BvbGxzKG9iamVjdHM6ICRvYmplY3RzKSB7XG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gSW5kZXgocHJvcHMpIHtcbiAgY29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZSgnJylcbiAgY29uc3QgW2FkZFBvbGwsIGFkZERhdGFdID0gdXNlTXV0YXRpb24oQUREX1BPTEwpXG4gIGNvbnN0IFt1cGRhdGVQb2xsLCB1cGRhdGVEYXRhXSA9IHVzZU11dGF0aW9uKFVQREFURV9QT0xMKVxuICBjb25zdCBbZGVsZXRlUG9sbCwgZGVsZXRlRGF0YV0gPSB1c2VNdXRhdGlvbihERUxFVEVfUE9MTClcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGNvbnN0IHsgcm91dGVyOiB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9fSA9IHByb3BzO1xuICAgIGNvbnN0IHBheWxvYWQgPSBidG9hKEpTT04uc3RyaW5naWZ5KHsgdXNlcklkOiAnNWRiN2UzYzk4NDc2MjQyMTU0ZDQzMTgxJywgY2hhbm5lbElkOiAnNWRiODdmMDRkYjA1OWE2ZDhkYzhkMDY4JyB9KSlcbiAgICBjb25zdCBwYXJzZWRQYXlsb2FkID0gSlNPTi5wYXJzZShhdG9iKHBheWxvYWQpKVxuXG4gICAgc2V0VXNlcklkKHBhcnNlZFBheWxvYWQudXNlcklkKVxuICAgIHNldENoYW5uZWxJZChwYXJzZWRQYXlsb2FkLmNoYW5uZWxJZClcbiAgICBzZXRRdWVyeShncWxgXG4gICAgXHRzdWJzY3JpcHRpb24ge1xuICAgIFx0ICBwb2xscyB7XG4gICAgXHQgICAgaWRcbiAgICBcdCAgICB0aXRsZVxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgIGNoYW5uZWxfaWRcbiAgICAgICAgICBleHBpcnlcbiAgICAgICAgICBxdWVzdGlvbnNcbiAgICAgICAgICBhbnN3ZXJzIHtcbiAgICAgICAgICAgIHF1ZXN0aW9uX2lkXG4gICAgICAgICAgICB1c2VyX2lkXG4gICAgICAgICAgfVxuICAgIFx0ICB9XG4gICAgXHR9XG4gICAgYClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlBvbGxzPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9jc3Mvc3R5bGVzLmNzc1wiIHJlbD1cInN0eWxlc2hlZXRcIiAvPlxuICAgICAgICA8bGluayBocmVmPVwiL3N0YXRpYy9pbWFnZXMvZmF2aWNvbi5wbmdcIiByZWw9XCJzaG9ydGN1dCBpY29uXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgKiB7XG4gICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xscy1saXN0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAge3F1ZXJ5ICYmXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbHVtblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbHMtbGlzdGluZy1jb250YWluZXJcIj5cblxuICAgICAgICAgICAgPFF1ZXJ5XG4gICAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgICAgZmV0Y2hQb2xpY3k9eydjYWNoZS1hbmQtbmV0d29yayd9PlxuICAgICAgICAgICAgICB7KHsgbG9hZGluZywgZGF0YSwgZXJyb3IsIHN1YnNjcmliZVRvTW9yZSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGxvYWRpbmcpIHJldHVybiA8U3Bpbm5lciAvPlxuICAgICAgICAgICAgICAgIGlmIChlcnJvcikgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj48RXJyb3IgbWVzc2FnZT1cIkVycm9yIGxvYWRpbmcgcG9sbHNcIiAvPjwvZGl2PlxuXG5cbiAgICAgICAgICAgICAgICAvLyBJZiBubyBwb2xscyBleGlzdFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnBvbGxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL25vLXBvbGxzLnBuZ1wiIHdpZHRoPVwiNjAlXCIgY2xhc3NOYW1lPVwibWItMzBcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMiB0ZXh0LWNlbnRlclwiPlRoZXJlIGFyZSBubyBwb2xsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDAgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHMgZm9yIHRoaXMgY2hhbm5lbC4gQ2xpY2sgb24gdGhlIGJ1dHRvbiBiZWxvdyB0byBjcmVhdGUgeW91ciBmaXJzdCBwb2xsLjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnBvbGxzLm1hcCgocG9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxQb2xsQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICBleHBpcnk9e3BvbGwuZXhwaXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb2xsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3BvbGwucXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlcnM9e3BvbGwuYW5zd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPC9RdWVyeT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zMCB3LTEwMFwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWRkUG9sbCh7IHZhcmlhYmxlczogeyBvYmplY3RzOiBbeyB0aXRsZTogJ2Nvb2wnLCBkZXNjcmlwdGlvbjogJ05pY2UnLCBjaGFubmVsX2lkOiAnMDA3JyB9XSB9IH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgdGV4dD1cIkRlbGV0ZSBhIHBvbGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVBvbGwoeyB2YXJpYWJsZXM6IHsgaWQ6IDMgfSB9KX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xMFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgIHRleHQ9XCJVcGRhdGUgYSBwb2xsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb2xsKHsgdmFyaWFibGVzOiB7IGlkOiAxLCBjaGFuZ2VzOiB7IHRpdGxlOiAnVXBkYXRlZC4uLi4nK25ldyBEYXRlKCkuZ2V0VGltZSgpIH0gfSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH0gPSBjb250ZXh0O1xuXG4gIHJldHVybiB7XG4gICAgY29vbDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoSW5kZXgpKVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), query && __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_10__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        data = _ref.data,
        error = _ref.error,
        subscribeToMore = _ref.subscribeToMore;
    if (loading) return __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141
      },
      __self: this
    });
    if (error) return __jsx("div", {
      className: "jsx-1390389061" + " " + "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Error"], {
      message: "Error loading polls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    })); // If no polls exist

    if (data.polls.length == 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/no-polls.png",
        width: "60%",
        className: "jsx-1390389061" + " " + "mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "There are no polls"), __jsx("div", {
        className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, "There are no polls for this channel. Click on the button below to create your first poll."));
    } // If there are


    return data.polls.map(function (poll, index) {
      return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_12__["default"], {
        key: index,
        expiry: poll.expiry,
        title: poll.title,
        userId: poll.user_id,
        currentUserId: userId,
        description: poll.description,
        questions: poll.questions,
        answers: poll.answers,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      });
    });
  }), __jsx("div", {
    className: "jsx-1390389061" + " " + "row justify-content-center mt-30 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Create a poll",
    onClick: function onClick() {
      return addPoll({
        variables: {
          objects: [{
            title: 'cool',
            description: 'Nice',
            channel_id: '007'
          }]
        }
      });
    },
    className: "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Delete a poll",
    onClick: function onClick() {
      return deletePoll({
        variables: {
          id: 3
        }
      });
    },
    className: "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Update a poll",
    onClick: function onClick() {
      return updatePoll({
        variables: {
          id: 1,
          changes: {
            title: 'Updated....' + new Date().getTime()
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
  })))));
}

Index.getInitialProps = function (context) {
  var payload = context.query.payload;
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Index)));

/***/ })

})
//# sourceMappingURL=index.js.ae6db45338f3bf2ec584.hot-update.js.map