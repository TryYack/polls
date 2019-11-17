webpackHotUpdate("static/development/pages/message.js",{

/***/ "./pages/message.js":
/*!**************************!*\
  !*** ./pages/message.js ***!
  \**************************/
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


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/message.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n    subscription {\n      polls(where: { id: { _eq: ", " } }) {\n        id\n        title\n        description\n        user_id\n        channel_id\n        expiry\n        options\n        poll_votes {\n          user_id\n          option_id\n        }\n      }\n    }\n  "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation add_vote($objects: [poll_votes_insert_input!]!) {\n    insert_poll_votes(objects: $objects) {\n      returning {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}











var ADD_VOTE = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function Message(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068
  var query = props.router.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.userId),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.channelId),
      channelId = _useState2[0],
      setChannelId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.pollId),
      pollId = _useState3[0],
      setPollId = _useState3[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useMutation"])(ADD_VOTE),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addVote = _useMutation2[0],
      addVoteData = _useMutation2[1];

  var _useSubscription = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_12__["useSubscription"])(graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject2(), pollId)),
      loading = _useSubscription.loading,
      error = _useSubscription.error,
      data = _useSubscription.data;

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1390389061",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RHlCLEFBR3NCLEFBS00sQUFJQSxBQWFDLEFBT1gsV0E1QkssTUFLZCxBQUlhLENBYUgsS0FyQlYsR0FzQlcsRUFiRyxLQW1CQyxFQUxGLEtBYk8sTUFjcEIsWUFiVyxTQUNELFFBQ0ssZ0NBZ0JTLDBDQWZGLG9DQWdCRCw2REFmRSxnQ0FnQkEsNENBZkUsZ0NBZ0JJLG1FQWY3QixzQ0FnQmUsYUFDZiIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL3BhZ2VzL21lc3NhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgQnV0dG9uLCBFcnJvciwgTG9hZGluZywgTm90aWZpY2F0aW9uLCBTcGlubmVyIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHsgUXVlcnkgfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5pbXBvcnQgd2l0aERhdGEgZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IFBvbGxDb21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudCdcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuXG5jb25zdCBBRERfVk9URSA9IGdxbGBcbiAgbXV0YXRpb24gYWRkX3ZvdGUoJG9iamVjdHM6IFtwb2xsX3ZvdGVzX2luc2VydF9pbnB1dCFdISkge1xuICAgIGluc2VydF9wb2xsX3ZvdGVzKG9iamVjdHM6ICRvYmplY3RzKSB7XG4gICAgICByZXR1cm5pbmcge1xuICAgICAgICBpZFxuICAgICAgfVxuICAgIH1cbiAgfVxuYDtcblxuZnVuY3Rpb24gTWVzc2FnZShwcm9wcykge1xuICAvLyA/dXNlcklkPTVkYjdlM2M5ODQ3NjI0MjE1NGQ0MzE4MSZjaGFubmVsSWQ9NWRiODdmMDRkYjA1OWE2ZDhkYzhkMDY4XG4gIGNvbnN0IHsgcm91dGVyOiB7IHF1ZXJ5IH19ID0gcHJvcHNcbiAgY29uc3QgW3VzZXJJZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKHF1ZXJ5LnVzZXJJZClcbiAgY29uc3QgW2NoYW5uZWxJZCwgc2V0Q2hhbm5lbElkXSA9IHVzZVN0YXRlKHF1ZXJ5LmNoYW5uZWxJZClcbiAgY29uc3QgW3BvbGxJZCwgc2V0UG9sbElkXSA9IHVzZVN0YXRlKHF1ZXJ5LnBvbGxJZClcbiAgY29uc3QgW2FkZFZvdGUsIGFkZFZvdGVEYXRhXSA9IHVzZU11dGF0aW9uKEFERF9WT1RFKVxuICBjb25zdCB7IGxvYWRpbmcsIGVycm9yLCBkYXRhIH0gPSB1c2VTdWJzY3JpcHRpb24oZ3FsYFxuICAgIHN1YnNjcmlwdGlvbiB7XG4gICAgICBwb2xscyh3aGVyZTogeyBpZDogeyBfZXE6ICR7cG9sbElkfSB9IH0pIHtcbiAgICAgICAgaWRcbiAgICAgICAgdGl0bGVcbiAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgdXNlcl9pZFxuICAgICAgICBjaGFubmVsX2lkXG4gICAgICAgIGV4cGlyeVxuICAgICAgICBvcHRpb25zXG4gICAgICAgIHBvbGxfdm90ZXMge1xuICAgICAgICAgIHVzZXJfaWRcbiAgICAgICAgICBvcHRpb25faWRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYClcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnBvbGxzLWxpc3RpbmctY29udGFpbmVyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbHVtblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGxzLWxpc3RpbmctY29udGFpbmVyXCIgPlxuICAgICAgICAgIHsobG9hZGluZyB8fCAhZGF0YSkgJiYgPFNwaW5uZXIgLz59XG4gICAgICAgICAgeyhlcnJvciB8fCAhZGF0YSkgJiYgPGRpdiBjbGFzc05hbWU9XCJlcnJvclwiPjxFcnJvciBtZXNzYWdlPVwiRXJyb3IgbG9hZGluZyBwb2xsc1wiIC8+PC9kaXY+fVxuICAgICAgICAgIHtkYXRhICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtkYXRhLnBvbGxzLm1hcCgocG9sbCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPFBvbGxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgZXhwaXJ5PXtwb2xsLmV4cGlyeX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3BvbGwudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZD17cG9sbC51c2VyX2lkfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17cG9sbC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cG9sbC5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgICBwb2xsVm90ZXM9e3BvbGwucG9sbF92b3Rlc31cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZD17dXNlcklkfVxuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KG9wdGlvbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgYWRkVm90ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbl9pZDogb3B0aW9uSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsX2lkOiBwb2xsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyX2lkOiB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoUm91dGVyKE1lc3NhZ2UpKVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/message.js */"), __jsx("div", {
    className: "jsx-1390389061" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1390389061" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, (loading || !data) && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), (error || !data) && __jsx("div", {
    className: "jsx-1390389061" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, data.polls.map(function (poll, index) {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: index,
      expiry: poll.expiry,
      title: poll.title,
      userId: poll.user_id,
      description: poll.description,
      options: poll.options,
      pollVotes: poll.poll_votes,
      currentUserId: userId,
      onSubmit: function onSubmit(optionId) {
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
        lineNumber: 106
      },
      __self: this
    });
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Message)));

/***/ })

})
//# sourceMappingURL=message.js.cae587e7a5409e799afb.hot-update.js.map