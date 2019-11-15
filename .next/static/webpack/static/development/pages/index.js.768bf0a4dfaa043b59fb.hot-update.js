webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
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
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    subscription {\n      polls(where: { channel_id: { _eq: \"", "\" } }) {\n        id\n        title\n        description\n        user_id\n        channel_id\n        expiry\n        questions\n        answers {\n          question_id\n          user_id\n        }\n      }\n    }\n  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation add_poll($objects: [polls_insert_input!]!) {\n    insert_polls(objects: $objects) {\n      returning {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation update_polls($id: Int, $changes: polls_set_input) {\n    update_polls(\n      where: {id: {_eq: $id}},\n      _set: $changes\n    ) {\n      affected_rows\n      returning {\n        id\n        title\n        description\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation delete_polls($id: Int) {\n    delete_polls(\n      where: {id: {_eq: $id}}\n    ) {\n      affected_rows\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var DELETE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());
var UPDATE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2());
var ADD_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject3());

function Index(props) {
  var payload = props.router.query.payload;
  var decodedPayload = decodeURI(payload);
  var jsonPayload = JSON.parse(decodedPayload);
  /*
  console.log(jsonPayload)
  console.log(
    encodeURI(
        JSON.stringify(
          { userId: '5db7e3c98476242154d43181', channelId: '5db87f04db059a6d8dc8d068' }
        )
      )
  )
  */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(jsonPayload.userId),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(jsonPayload.channelId),
      channelId = _useState2[0],
      setChannelId = _useState2[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(ADD_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addPoll = _useMutation2[0],
      addData = _useMutation2[1];

  var _useMutation3 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(UPDATE_POLL),
      _useMutation4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation3, 2),
      updatePoll = _useMutation4[0],
      updateData = _useMutation4[1];

  var _useMutation5 = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(DELETE_POLL),
      _useMutation6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation5, 2),
      deletePoll = _useMutation6[0],
      deleteData = _useMutation6[1];

  var _useSubscription = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject4(), channelId)),
      loading = _useSubscription.loading,
      error = _useSubscription.error,
      data = _useSubscription.data;

  console.log(data);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1390389061",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0d5QixBQUdzQixBQUtNLEFBSUEsQUFhQyxBQU9YLFdBNUJLLE1BS2QsQUFJYSxDQWFILEtBckJWLEdBc0JXLEVBYkcsS0FtQkMsRUFMRixLQWJPLE1BY3BCLFlBYlcsU0FDRCxRQUNLLGdDQWdCUywwQ0FmRixvQ0FnQkQsNkRBZkUsZ0NBZ0JBLDRDQWZFLGdDQWdCSSxtRUFmN0Isc0NBZ0JlLGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5cbmNvbnN0IERFTEVURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiBkZWxldGVfcG9sbHMoJGlkOiBJbnQpIHtcbiAgICBkZWxldGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fVxuICAgICkge1xuICAgICAgYWZmZWN0ZWRfcm93c1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgVVBEQVRFX1BPTEwgPSBncWxgXG4gIG11dGF0aW9uIHVwZGF0ZV9wb2xscygkaWQ6IEludCwgJGNoYW5nZXM6IHBvbGxzX3NldF9pbnB1dCkge1xuICAgIHVwZGF0ZV9wb2xscyhcbiAgICAgIHdoZXJlOiB7aWQ6IHtfZXE6ICRpZH19LFxuICAgICAgX3NldDogJGNoYW5nZXNcbiAgICApIHtcbiAgICAgIGFmZmVjdGVkX3Jvd3NcbiAgICAgIHJldHVybmluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBBRERfUE9MTCA9IGdxbGBcbiAgbXV0YXRpb24gYWRkX3BvbGwoJG9iamVjdHM6IFtwb2xsc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbHMob2JqZWN0czogJG9iamVjdHMpIHtcbiAgICAgIHJldHVybmluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBJbmRleChwcm9wcykge1xuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeTogeyBwYXlsb2FkIH0gfX0gPSBwcm9wc1xuICBjb25zdCBkZWNvZGVkUGF5bG9hZCA9IGRlY29kZVVSSShwYXlsb2FkKVxuICBjb25zdCBqc29uUGF5bG9hZCA9IEpTT04ucGFyc2UoZGVjb2RlZFBheWxvYWQpXG4gIC8qXG4gIGNvbnNvbGUubG9nKGpzb25QYXlsb2FkKVxuICBjb25zb2xlLmxvZyhcbiAgICBlbmNvZGVVUkkoXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHsgdXNlcklkOiAnNWRiN2UzYzk4NDc2MjQyMTU0ZDQzMTgxJywgY2hhbm5lbElkOiAnNWRiODdmMDRkYjA1OWE2ZDhkYzhkMDY4JyB9XG4gICAgICAgIClcbiAgICAgIClcbiAgKVxuICAqL1xuICBjb25zdCBbdXNlcklkLCBzZXRVc2VySWRdID0gdXNlU3RhdGUoanNvblBheWxvYWQudXNlcklkKVxuICBjb25zdCBbY2hhbm5lbElkLCBzZXRDaGFubmVsSWRdID0gdXNlU3RhdGUoanNvblBheWxvYWQuY2hhbm5lbElkKVxuICBjb25zdCBbYWRkUG9sbCwgYWRkRGF0YV0gPSB1c2VNdXRhdGlvbihBRERfUE9MTClcbiAgY29uc3QgW3VwZGF0ZVBvbGwsIHVwZGF0ZURhdGFdID0gdXNlTXV0YXRpb24oVVBEQVRFX1BPTEwpXG4gIGNvbnN0IFtkZWxldGVQb2xsLCBkZWxldGVEYXRhXSA9IHVzZU11dGF0aW9uKERFTEVURV9QT0xMKVxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VTdWJzY3JpcHRpb24oZ3FsYFxuICAgIHN1YnNjcmlwdGlvbiB7XG4gICAgICBwb2xscyh3aGVyZTogeyBjaGFubmVsX2lkOiB7IF9lcTogXCIke2NoYW5uZWxJZH1cIiB9IH0pIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgdXNlcl9pZFxuICAgICAgICBjaGFubmVsX2lkXG4gICAgICAgIGV4cGlyeVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgICAgYW5zd2VycyB7XG4gICAgICAgICAgcXVlc3Rpb25faWRcbiAgICAgICAgICB1c2VyX2lkXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIGApXG5cbiAgY29uc29sZS5sb2coZGF0YSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGxzLWxpc3RpbmctY29udGFpbmVyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2x1bW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xscy1saXN0aW5nLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHtsb2FkaW5nICYmIDxTcGlubmVyIC8+fVxuICAgICAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+PEVycm9yIG1lc3NhZ2U9XCJFcnJvciBsb2FkaW5nIHBvbGxzXCIgLz48L2Rpdj59XG4gICAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge2RhdGEucG9sbHMubGVuZ3RoID09IDAgJiZcbiAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0zMFwiLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDIgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHM8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDAgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHMgZm9yIHRoaXMgY2hhbm5lbC4gQ2xpY2sgb24gdGhlIGJ1dHRvbiBiZWxvdyB0byBjcmVhdGUgeW91ciBmaXJzdCBwb2xsLjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICB7ZGF0YS5wb2xscy5tYXAoKHBvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxQb2xsQ29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGV4cGlyeT17cG9sbC5leHBpcnl9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb2xsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ9e3BvbGwudXNlcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtwb2xsLnF1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgYW5zd2Vycz17cG9sbC5hbnN3ZXJzfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMwIHctMTAwXCI+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgICAgIHRoZW1lPVwiYmx1ZS1ib3JkZXJcIlxuICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGFkZFBvbGwoeyB2YXJpYWJsZXM6IHsgb2JqZWN0czogW3sgdGl0bGU6ICdjb29sJywgZGVzY3JpcHRpb246ICdOaWNlJywgY2hhbm5lbF9pZDogJzVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OCcgfV0gfSB9KX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMTBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgIHRleHQ9XCJEZWxldGUgYSBwb2xsXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlUG9sbCh7IHZhcmlhYmxlczogeyBpZDogMyB9IH0pfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0xMFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxuICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgdGV4dD1cIlVwZGF0ZSBhIHBvbGxcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVQb2xsKHsgdmFyaWFibGVzOiB7IGlkOiAxLCBjaGFuZ2VzOiB7IHRpdGxlOiAnVXBkYXRlZC4uLi4nIH0gfSB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9ID0gY29udGV4dDtcblxuICByZXR1cm4ge1xuICAgIGNvb2w6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoUm91dGVyKEluZGV4KSlcbiJdfQ== */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/index.js */"), __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, loading && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), error && __jsx("div", {
    className: "jsx-1390389061" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, data.polls.length == 0 && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/no-polls.png",
    width: "60%",
    className: "jsx-1390389061" + " " + "mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1390389061" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "There are no polls"), __jsx("div", {
    className: "jsx-1390389061" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "There are no polls for this channel. Click on the button below to create your first poll.")), data.polls.map(function (poll, index) {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
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
        lineNumber: 154
      },
      __self: this
    });
  })), __jsx("div", {
    className: "jsx-1390389061" + " " + "row justify-content-center mt-30 w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Create a poll",
    onClick: function onClick() {
      return addPoll({
        variables: {
          objects: [{
            title: 'cool',
            description: 'Nice',
            channel_id: '5db87f04db059a6d8dc8d068'
          }]
        }
      });
    },
    className: "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      lineNumber: 177
    },
    __self: this
  }), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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
      lineNumber: 184
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Index)));

/***/ })

})
//# sourceMappingURL=index.js.768bf0a4dfaa043b59fb.hot-update.js.map