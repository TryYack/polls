webpackHotUpdate("static/development/pages/update.js",{

/***/ "./pages/update.js":
/*!*************************!*\
  !*** ./pages/update.js ***!
  \*************************/
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
/* harmony import */ var _components_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/form.component */ "./components/form.component.js");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/update.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    query {\n      polls(where: { id: { _eq: ", " } }) {\n        id\n        title\n        description\n        user_id\n        channel_id\n        expiry\n        questions\n        answers {\n          user_id\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation update_polls($id: Int, $changes: polls_set_input) {\n    update_polls(\n      where: {id: {_eq: $id}},\n      _set: $changes\n    ) {\n      affected_rows\n      returning {\n        id\n        title\n        description\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var UPDATE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function Update(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068&pollId=1
  var router = props.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])("Cool"),
      notification = _useState[0],
      setNotification = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(router.query.userId),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(router.query.channelId),
      channelId = _useState3[0],
      setChannelId = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(router.query.pollId),
      pollId = _useState4[0],
      setPollId = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(UPDATE_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      updatePoll = _useMutation2[0],
      data = _useMutation2[1].data;

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2(), pollId)),
      query = _useState5[0],
      setQuery = _useState5[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvdXBkYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThEeUIsQUFHc0IsQUFLTSxBQUlBLEFBYUMsQUFPWCxXQTVCSyxNQUtkLEFBSWEsQ0FhSCxLQXJCVixHQXNCVyxFQWJHLEtBbUJDLEVBTEYsS0FiTyxNQWNwQixZQWJXLFNBQ0QsUUFDSyxnQ0FnQlMsMENBZkYsb0NBZ0JELDZEQWZFLGdDQWdCQSw0Q0FmRSxnQ0FnQkksbUVBZjdCLHNDQWdCZSxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgRm9ybUNvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0uY29tcG9uZW50J1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVN1YnNjcmlwdGlvbiB9IGZyb20gJ0BhcG9sbG8vcmVhY3QtaG9va3MnXG5cbmNvbnN0IFVQREFURV9QT0xMID0gZ3FsYFxuICBtdXRhdGlvbiB1cGRhdGVfcG9sbHMoJGlkOiBJbnQsICRjaGFuZ2VzOiBwb2xsc19zZXRfaW5wdXQpIHtcbiAgICB1cGRhdGVfcG9sbHMoXG4gICAgICB3aGVyZToge2lkOiB7X2VxOiAkaWR9fSxcbiAgICAgIF9zZXQ6ICRjaGFuZ2VzXG4gICAgKSB7XG4gICAgICBhZmZlY3RlZF9yb3dzXG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gVXBkYXRlKHByb3BzKSB7XG4gIC8vID91c2VySWQ9NWRiN2UzYzk4NDc2MjQyMTU0ZDQzMTgxJmNoYW5uZWxJZD01ZGI4N2YwNGRiMDU5YTZkOGRjOGQwNjgmcG9sbElkPTFcbiAgY29uc3QgeyByb3V0ZXIgfSA9IHByb3BzXG4gIGNvbnN0IFtub3RpZmljYXRpb24sIHNldE5vdGlmaWNhdGlvbl0gPSB1c2VTdGF0ZShcIkNvb2xcIilcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHJvdXRlci5xdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuY2hhbm5lbElkKVxuICBjb25zdCBbcG9sbElkLCBzZXRQb2xsSWRdID0gdXNlU3RhdGUocm91dGVyLnF1ZXJ5LnBvbGxJZClcbiAgY29uc3QgW3VwZGF0ZVBvbGwsIHsgZGF0YSB9XSA9IHVzZU11dGF0aW9uKFVQREFURV9QT0xMKVxuICBjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBwb2xscyh3aGVyZTogeyBpZDogeyBfZXE6ICR7cG9sbElkfSB9IH0pIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgdXNlcl9pZFxuICAgICAgICBjaGFubmVsX2lkXG4gICAgICAgIGV4cGlyeVxuICAgICAgICBxdWVzdGlvbnNcbiAgICAgICAgYW5zd2VycyB7XG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Qb2xsczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvY3NzL3N0eWxlcy5jc3NcIiByZWw9XCJzdHlsZXNoZWV0XCIgLz5cbiAgICAgICAgPGxpbmsgaHJlZj1cIi9zdGF0aWMvaW1hZ2VzL2Zhdmljb24ucG5nXCIgcmVsPVwic2hvcnRjdXQgaWNvblwiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxzdHlsZSBnbG9iYWwganN4PntgXG4gICAgICAgICoge1xuICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbHMtbGlzdGluZy1jb250YWluZXIge1xuICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIHtxdWVyeSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb2x1bW5cIj5cbiAgXG5cbiAgICAgICAgICA8UXVlcnlcbiAgICAgICAgICAgIHF1ZXJ5PXtxdWVyeX1cbiAgICAgICAgICAgIGZldGNoUG9saWN5PXsnY2FjaGUtYW5kLW5ldHdvcmsnfT5cbiAgICAgICAgICAgIHsoeyBsb2FkaW5nLCBkYXRhLCBlcnJvciB9KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChsb2FkaW5nKSByZXR1cm4gPFNwaW5uZXIgLz5cbiAgICAgICAgICAgICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+XG5cbiAgICAgICAgICAgICAgLy8gSWYgbm8gcG9sbHMgZXhpc3RcbiAgICAgICAgICAgICAgaWYgKGRhdGEucG9sbHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0zMFwiLz5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoMyBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMiB0ZXh0LWNlbnRlclwiPlRoZXJlIGFyZSBubyBwb2xsczwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg1IG1iLTIwIHBsLTIwIHByLTIwIGNvbG9yLWQwIHRleHQtY2VudGVyXCI+VGhlcmUgYXJlIG5vIHBvbGxzIGZvciB0aGlzIGNoYW5uZWwuIENsaWNrIG9uIHRoZSBidXR0b24gYmVsb3cgdG8gY3JlYXRlIHlvdXIgZmlyc3QgcG9sbC48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PVwiQ3JlYXRlIGEgcG9sbFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC8vIElmIHRoZXJlIGFyZVxuICAgICAgICAgICAgICByZXR1cm4gZGF0YS5wb2xscy5tYXAoKHBvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbHMtbGlzdGluZy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm1Db21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZD17cG9sbC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICB1c2VySWQ9e3BvbGwudXNlcl9pZH1cbiAgICAgICAgICAgICAgICAgICAgICBleHBpcnk9e3BvbGwuZXhwaXJ5fVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwb2xsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRVc2VySWQ9e3VzZXJJZH1cbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3BvbGwucXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXsocG9sbElkLCB0aXRsZSwgZGVzY3JpcHRpb24sIHF1ZXN0aW9ucywgZXhwaXJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXROb3RpZmljYXRpb24oJ1NhdmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVBvbGwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogcG9sbElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBpcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIDwvUXVlcnk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aERhdGEod2l0aFJvdXRlcihVcGRhdGUpKVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/update.js */"), query && __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["Query"], {
    query: query,
    fetchPolicy: 'cache-and-network',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, function (_ref) {
    var loading = _ref.loading,
        data = _ref.data,
        error = _ref.error;
    if (loading) return __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
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
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
      message: "Error loading polls",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    })); // If no polls exist

    if (data.polls.length == 0) {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
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
      }, "There are no polls for this channel. Click on the button below to create your first poll."), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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


    return data.polls.map(function (poll, index) {
      return __jsx("div", {
        key: index,
        className: "jsx-1390389061" + " " + "polls-listing-container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, __jsx(_components_form_component__WEBPACK_IMPORTED_MODULE_12__["default"], {
        id: poll.id,
        userId: poll.user_id,
        expiry: poll.expiry,
        title: poll.title,
        currentUserId: userId,
        description: poll.description,
        questions: poll.questions,
        onSubmit: function onSubmit(pollId, title, description, questions, expiry) {
          setNotification('Saved');
          updatePoll({
            variables: {
              id: pollId,
              changes: {
                title: title,
                description: description,
                questions: questions,
                expiry: expiry
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Update)));

/***/ })

})
//# sourceMappingURL=update.js.3e178a5863034816727f.hot-update.js.map