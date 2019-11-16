webpackHotUpdate("static/development/pages/create.js",{

/***/ "./pages/create.js":
/*!*************************!*\
  !*** ./pages/create.js ***!
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


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/pages/create.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  mutation add_poll($objects: [polls_insert_input!]!) {\n    insert_polls(objects: $objects) {\n      returning {\n        id\n        title\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}












var ADD_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_8___default()(_templateObject());

function Create(props) {
  // ?userId=5db7e3c98476242154d43181&channelId=5db87f04db059a6d8dc8d068
  var query = props.router.query;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.userId),
      userId = _useState[0],
      setUserId = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.channelId),
      channelId = _useState2[0],
      setChannelId = _useState2[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_13__["useMutation"])(ADD_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useMutation, 2),
      addPoll = _useMutation2[0],
      data = _useMutation2[1].data;

  console.log(channelId, userId);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-325209493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-325209493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-325209493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-325209493",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "325209493",
    __self: this
  }, "*{margin:0px;padding:0px;}html,body{background:white;height:100%;}.complete-container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.error{position:absolute;top:0px;left:0px;width:100%;}.polls-listing-container{-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvY3JlYXRlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDeUIsQUFHc0IsQUFLTSxBQUtBLEFBY0EsQUFhQyxBQU9YLFdBM0NLLE1BS0EsQUFLRCxBQWNBLENBYUgsS0FwQ1YsR0FxQ1csRUEzQkcsQUFjQSxDQW5CZCxJQXNDZSxFQUxGLEtBM0JPLEFBY0EsTUFjcEIsWUEzQlcsQUFjQSxTQWJELEFBY0EsUUFiSyxBQWNBLGdDQWdCUywwQ0E3QkgsQUFjQyxvQ0FnQkQseURBN0JHLElBY0QsZ0NBZ0JBLDBDQTdCQSxFQWNFLGdDQWdCSSwwQ0E3QkoseUJBY3pCLHNDQWdCZSxhQUNmLHVCQTlCQSIsImZpbGUiOiIvVXNlcnMvam9kdXBsZXNzaXMvV29yay9XZWVrZGF5L3BvbGxzL3BhZ2VzL2NyZWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIsIHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyBCdXR0b24sIEVycm9yLCBMb2FkaW5nLCBOb3RpZmljYXRpb24sIFNwaW5uZXIgfSBmcm9tICdAd2Vla2RheS9lbGVtZW50cydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBRdWVyeSB9IGZyb20gJ3JlYWN0LWFwb2xsbydcbmltcG9ydCB3aXRoRGF0YSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgUG9sbENvbXBvbmVudCBmcm9tICcuLi9jb21wb25lbnRzL3BvbGwuY29tcG9uZW50J1xuaW1wb3J0IEZvcm1Db21wb25lbnQgZnJvbSAnLi4vY29tcG9uZW50cy9mb3JtLmNvbXBvbmVudCdcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VTdWJzY3JpcHRpb24gfSBmcm9tICdAYXBvbGxvL3JlYWN0LWhvb2tzJ1xuXG5jb25zdCBBRERfUE9MTCA9IGdxbGBcbiAgbXV0YXRpb24gYWRkX3BvbGwoJG9iamVjdHM6IFtwb2xsc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbHMob2JqZWN0czogJG9iamVjdHMpIHtcbiAgICAgIHJldHVybmluZyB7XG4gICAgICAgIGlkXG4gICAgICAgIHRpdGxlXG4gICAgICB9XG4gICAgfVxuICB9XG5gO1xuXG5mdW5jdGlvbiBDcmVhdGUocHJvcHMpIHtcbiAgLy8gP3VzZXJJZD01ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEmY2hhbm5lbElkPTVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFxuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeSB9fSA9IHByb3BzXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShxdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShxdWVyeS5jaGFubmVsSWQpXG4gIGNvbnN0IFthZGRQb2xsLCB7IGRhdGEgfV0gPSB1c2VNdXRhdGlvbihBRERfUE9MTClcblxuICBjb25zb2xlLmxvZyhjaGFubmVsSWQsIHVzZXJJZClcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tcGxldGUtY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xscy1saXN0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAge2RhdGEgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb21wbGV0ZS1jb250YWluZXJcIj5cbiAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvbm8tcG9sbHMucG5nXCIgd2lkdGg9XCI2MCVcIiBjbGFzc05hbWU9XCJtYi0wXCIvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbWItMjAgY29sb3ItZDIgdGV4dC1jZW50ZXJcIj5TdWNjZXNzPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWNlbnRlclwiPllvdSBoYXZlIGNyZWF0ZWQgYSBuZXcgcG9sbCE8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG5cbiAgICAgIHshZGF0YSAmJlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGxzLWxpc3RpbmctY29udGFpbmVyXCI+XG4gICAgICAgICAgPEZvcm1Db21wb25lbnRcbiAgICAgICAgICAgIGlkPXtudWxsfVxuICAgICAgICAgICAgdXNlcklkPXtudWxsfVxuICAgICAgICAgICAgZXhwaXJ5PXtudWxsfVxuICAgICAgICAgICAgdGl0bGU9e251bGx9XG4gICAgICAgICAgICBjdXJyZW50VXNlcklkPXt1c2VySWR9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17bnVsbH1cbiAgICAgICAgICAgIHF1ZXN0aW9ucz17bnVsbH1cbiAgICAgICAgICAgIG9uU3VibWl0PXsodGl0bGUsIGRlc2NyaXB0aW9uLCBxdWVzdGlvbnMsIGV4cGlyeSkgPT4ge1xuICAgICAgICAgICAgICBhZGRQb2xsKHtcbiAgICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgICAgIG9iamVjdHM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBleHBpcnksXG4gICAgICAgICAgICAgICAgICAgICAgY2hhbm5lbF9pZDogY2hhbm5lbElkLFxuICAgICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJJZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbkNyZWF0ZS5nZXRJbml0aWFsUHJvcHMgPSAoY29udGV4dCkgPT4ge1xuICBjb25zdCB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9ID0gY29udGV4dDtcblxuICByZXR1cm4ge1xuICAgIGNvb2w6IHRydWVcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoRGF0YSh3aXRoUm91dGVyKENyZWF0ZSkpXG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/create.js */"), data && __jsx("div", {
    className: "jsx-325209493" + " " + "complete-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/no-polls.png",
    width: "60%",
    className: "jsx-325209493" + " " + "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-325209493" + " " + "h3 mb-20 color-d2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "Success"), __jsx("div", {
    className: "jsx-325209493" + " " + "h5 color-d0 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, "You have created a new poll!")), !data && __jsx("div", {
    className: "jsx-325209493" + " " + "polls-listing-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, __jsx(_components_form_component__WEBPACK_IMPORTED_MODULE_12__["default"], {
    id: null,
    userId: null,
    expiry: null,
    title: null,
    currentUserId: userId,
    description: null,
    questions: null,
    onSubmit: function onSubmit(title, description, questions, expiry) {
      addPoll({
        variables: {
          objects: [{
            title: title,
            description: description,
            questions: questions,
            expiry: expiry,
            channel_id: channelId,
            user_id: userId
          }]
        }
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  })));
}

Create.getInitialProps = function (context) {
  var payload = context.query.payload;
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Create)));

/***/ })

})
//# sourceMappingURL=create.js.21798040f2429a7c4d15.hot-update.js.map