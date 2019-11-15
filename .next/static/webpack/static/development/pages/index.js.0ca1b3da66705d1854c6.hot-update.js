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

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    \tquery {\n    \t  polls {\n    \t    id\n    \t    title\n          description\n          user_id\n          channel_id\n          expiry\n          questions\n          answers {\n            question_id\n            user_id\n          }\n    \t  }\n    \t}\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    subscription {\n      polls(where: { channel_id: { _eq: \"5db87f04db059a6d8dc8d068\" } }) {\n        id\n        title\n        description\n        user_id\n        channel_id\n        expiry\n        questions\n        answers {\n          question_id\n          user_id\n        }\n      }\n    }\n  "]);

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
  var payload = props.router.query.payload;

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

  var _useSubscription = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject4())),
      loading = _useSubscription.loading,
      error = _useSubscription.error,
      data = _useSubscription.data;

  console.log(payload);
  if (data) console.log(data.polls);
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // const { router: { query: { payload } }} = props;
    var payload = btoa(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()({
      userId: '5db7e3c98476242154d43181',
      channelId: '5db87f04db059a6d8dc8d068'
    }));
    var parsedPayload = JSON.parse(atob(payload));
    setUserId(parsedPayload.userId);
    setChannelId(parsedPayload.channelId);
    setQuery(graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject5()));
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUh5QixBQUdzQixBQUtNLEFBSUEsQUFhQyxBQU9YLFdBNUJLLE1BS2QsQUFJYSxDQWFILEtBckJWLEdBc0JXLEVBYkcsS0FtQkMsRUFMRixLQWJPLE1BY3BCLFlBYlcsU0FDRCxRQUNLLGdDQWdCUywwQ0FmRixvQ0FnQkQsNkRBZkUsZ0NBZ0JBLDRDQWZFLGdDQWdCSSxtRUFmN0Isc0NBZ0JlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5cbmNvbnN0IERFTEVURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVfcG9sbHMoJGlkOiBJbnQpIHtcbiAgICBkZWxldGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fVxuICAgICkge1xuICAgICAgYWZmZWN0ZWRfcm93c1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BPTEwgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZV9wb2xscygkaWQ6IEludCwgJGNoYW5nZXM6IHBvbGxzX3NldF9pbnB1dCkge1xuICAgIHVwZGF0ZV9wb2xscyhcbiAgICAgIHdoZXJlOiB7aWQ6IHtfZXE6ICRpZH19LFxuICAgICAgX3NldDogJGNoYW5nZXNcbiAgICApIHtcbiAgICAgIGFmZmVjdGVkX3Jvd3NcbiAgICAgIHJldHVybmluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBRERfUE9MTCA9IGdxbGBcbiAgbXV0YXRpb24gYWRkX3BvbGwoJG9iamVjdHM6IFtwb2xsc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbHMob2JqZWN0czogJG9iamVjdHMpIHtcbiAgICAgIHJldHVybmluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBjb25zdCB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9ID0gcHJvcHMucm91dGVyXG4gIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKVxuICBjb25zdCBbY2hhbm5lbElkLCBzZXRDaGFubmVsSWRdID0gdXNlU3RhdGUoJycpXG4gIGNvbnN0IFthZGRQb2xsLCBhZGREYXRhXSA9IHVzZU11dGF0aW9uKEFERF9QT0xMKVxuICBjb25zdCBbdXBkYXRlUG9sbCwgdXBkYXRlRGF0YV0gPSB1c2VNdXRhdGlvbihVUERBVEVfUE9MTClcbiAgY29uc3QgW2RlbGV0ZVBvbGwsIGRlbGV0ZURhdGFdID0gdXNlTXV0YXRpb24oREVMRVRFX1BPTEwpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVN1YnNjcmlwdGlvbihncWxgXG4gICAgc3Vic2NyaXB0aW9uIHtcbiAgICAgIHBvbGxzKHdoZXJlOiB7IGNoYW5uZWxfaWQ6IHsgX2VxOiBcIjVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFwiIH0gfSkge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1c2VyX2lkXG4gICAgICAgIGNoYW5uZWxfaWRcbiAgICAgICAgZXhwaXJ5XG4gICAgICAgIHF1ZXN0aW9uc1xuICAgICAgICBhbnN3ZXJzIHtcbiAgICAgICAgICBxdWVzdGlvbl9pZFxuICAgICAgICAgIHVzZXJfaWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYClcblxuICBjb25zb2xlLmxvZyhwYXlsb2FkKVxuXG4gIGlmIChkYXRhKSBjb25zb2xlLmxvZyhkYXRhLnBvbGxzKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gY29uc3QgeyByb3V0ZXI6IHsgcXVlcnk6IHsgcGF5bG9hZCB9IH19ID0gcHJvcHM7XG4gICAgY29uc3QgcGF5bG9hZCA9IGJ0b2EoSlNPTi5zdHJpbmdpZnkoeyB1c2VySWQ6ICc1ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEnLCBjaGFubmVsSWQ6ICc1ZGI4N2YwNGRiMDU5YTZkOGRjOGQwNjgnIH0pKVxuICAgIGNvbnN0IHBhcnNlZFBheWxvYWQgPSBKU09OLnBhcnNlKGF0b2IocGF5bG9hZCkpXG5cbiAgICBzZXRVc2VySWQocGFyc2VkUGF5bG9hZC51c2VySWQpXG4gICAgc2V0Q2hhbm5lbElkKHBhcnNlZFBheWxvYWQuY2hhbm5lbElkKVxuICAgIHNldFF1ZXJ5KGdxbGBcbiAgICBcdHF1ZXJ5IHtcbiAgICBcdCAgcG9sbHMge1xuICAgIFx0ICAgIGlkXG4gICAgXHQgICAgdGl0bGVcbiAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgIHVzZXJfaWRcbiAgICAgICAgICBjaGFubmVsX2lkXG4gICAgICAgICAgZXhwaXJ5XG4gICAgICAgICAgcXVlc3Rpb25zXG4gICAgICAgICAgYW5zd2VycyB7XG4gICAgICAgICAgICBxdWVzdGlvbl9pZFxuICAgICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgIH1cbiAgICBcdCAgfVxuICAgIFx0fVxuICAgIGApXG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2xsczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbHMtbGlzdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIHtxdWVyeSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2x1bW5cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGxzLWxpc3RpbmctY29udGFpbmVyXCI+XG5cbiAgICAgICAgICAgIDxRdWVyeVxuICAgICAgICAgICAgICBxdWVyeT17cXVlcnl9XG4gICAgICAgICAgICAgIGZldGNoUG9saWN5PXsnY2FjaGUtYW5kLW5ldHdvcmsnfT5cbiAgICAgICAgICAgICAgeyh7IGxvYWRpbmcsIGRhdGEsIGVycm9yIH0pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAobG9hZGluZykgcmV0dXJuIDxTcGlubmVyIC8+XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+XG5cblxuICAgICAgICAgICAgICAgIC8vIElmIG5vIHBvbGxzIGV4aXN0XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucG9sbHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0zMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgzIG1iLTIwIHBsLTIwIHByLTIwIGNvbG9yLWQyIHRleHQtY2VudGVyXCI+VGhlcmUgYXJlIG5vIHBvbGxzPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMCB0ZXh0LWNlbnRlclwiPlRoZXJlIGFyZSBubyBwb2xscyBmb3IgdGhpcyBjaGFubmVsLiBDbGljayBvbiB0aGUgYnV0dG9uIGJlbG93IHRvIGNyZWF0ZSB5b3VyIGZpcnN0IHBvbGwuPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlcmUgYXJlXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEucG9sbHMubWFwKChwb2xsLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPFBvbGxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgIGV4cGlyeT17cG9sbC5leHBpcnl9XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BvbGwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgdXNlcklkPXtwb2xsLnVzZXJfaWR9XG4gICAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb2xsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cG9sbC5xdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2Vycz17cG9sbC5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA8L1F1ZXJ5PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwIHctMTAwXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICAgIHRleHQ9XCJDcmVhdGUgYSBwb2xsXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhZGRQb2xsKHsgdmFyaWFibGVzOiB7IG9iamVjdHM6IFt7IHRpdGxlOiAnY29vbCcsIGRlc2NyaXB0aW9uOiAnTmljZScsIGNoYW5uZWxfaWQ6ICcwMDcnIH1dIH0gfSl9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMTBcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICB0ZXh0PVwiRGVsZXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9sbCh7IHZhcmlhYmxlczogeyBpZDogMyB9IH0pfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTEwXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgdGV4dD1cIlVwZGF0ZSBhIHBvbGxcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVBvbGwoeyB2YXJpYWJsZXM6IHsgaWQ6IDEsIGNoYW5nZXM6IHsgdGl0bGU6ICdVcGRhdGVkLi4uLicgfSB9IH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBxdWVyeTogeyBwYXlsb2FkIH0gfSA9IGNvbnRleHQ7XG5cbiAgcmV0dXJuIHtcbiAgICBjb29sOiB0cnVlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEod2l0aFJvdXRlcihJbmRleCkpXG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), query && __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_10__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        data = _ref.data,
        error = _ref.error;
    if (loading) return __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Spinner"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    });
    if (error) return __jsx("div", {
      className: "jsx-1390389061" + " " + "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_8__["Error"], {
      message: "Error loading polls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    })); // If no polls exist

    if (data.polls.length == 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, __jsx("img", {
        src: "../static/images/no-polls.png",
        width: "60%",
        className: "jsx-1390389061" + " " + "mb-30",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, "There are no polls"), __jsx("div", {
        className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
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
          lineNumber: 181
        },
        __self: this
      });
    });
  }), __jsx("div", {
    className: "jsx-1390389061" + " " + "row justify-content-center mt-30 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
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
      lineNumber: 197
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
      lineNumber: 204
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
            title: 'Updated....'
          }
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
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
//# sourceMappingURL=index.js.0ca1b3da66705d1854c6.hot-update.js.map