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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(query.payload),
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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    document.addEventListener('readystatechange', function (event) {
      if (event.target.readyState === "complete") {
        window.location.search.split('&').map(function (q) {
          var parts = q.split('=');

          if (parts[0] == 'weekdayId') {
            window.top.postMessage({
              type: 'weekday',
              payload: {
                weekdayId: parts[1],
                scrollHeight: document.documentElement.scrollHeight
              }
            }, '*');
          }
        });
      } // your code here

    }, false);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-1590883482",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1590883482",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;overflow:scroll;}.container{background:white;padding:20px;}.error{position:absolute;top:0px;left:0px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvcGFnZXMvbWVzc2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRnlCLEFBR3NCLEFBS00sQUFLQSxBQUtDLFdBZE4sTUFLSSxBQUtILENBS0wsS0FkVixHQWVXLElBTFgsR0FMQSxFQVdhLFdBQ2IiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL1dvcmsvV2Vla2RheS9wb2xscy9wYWdlcy9tZXNzYWdlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciwgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCB7IEJ1dHRvbiwgRXJyb3IsIExvYWRpbmcsIE5vdGlmaWNhdGlvbiwgU3Bpbm5lciB9IGZyb20gJ0B3ZWVrZGF5L2VsZW1lbnRzJ1xuaW1wb3J0IGdxbCBmcm9tICdncmFwaHFsLXRhZydcbmltcG9ydCB7IFF1ZXJ5IH0gZnJvbSAncmVhY3QtYXBvbGxvJ1xuaW1wb3J0IHdpdGhEYXRhIGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBQb2xsQ29tcG9uZW50IGZyb20gJy4uL2NvbXBvbmVudHMvcG9sbC5jb21wb25lbnQnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcblxuY29uc3QgQUREX1ZPVEUgPSBncWxgXG4gIG11dGF0aW9uIGFkZF92b3RlKCRvYmplY3RzOiBbcG9sbF92b3Rlc19pbnNlcnRfaW5wdXQhXSEpIHtcbiAgICBpbnNlcnRfcG9sbF92b3RlcyhvYmplY3RzOiAkb2JqZWN0cykge1xuICAgICAgcmV0dXJuaW5nIHtcbiAgICAgICAgaWRcbiAgICAgIH1cbiAgICB9XG4gIH1cbmA7XG5cbmZ1bmN0aW9uIE1lc3NhZ2UocHJvcHMpIHtcbiAgLy8gP3VzZXJJZD01ZGI3ZTNjOTg0NzYyNDIxNTRkNDMxODEmY2hhbm5lbElkPTVkYjg3ZjA0ZGIwNTlhNmQ4ZGM4ZDA2OFxuICBjb25zdCB7IHJvdXRlcjogeyBxdWVyeSB9fSA9IHByb3BzXG4gIGNvbnN0IFt1c2VySWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZShxdWVyeS51c2VySWQpXG4gIGNvbnN0IFtjaGFubmVsSWQsIHNldENoYW5uZWxJZF0gPSB1c2VTdGF0ZShxdWVyeS5jaGFubmVsSWQpXG4gIGNvbnN0IFtwb2xsSWQsIHNldFBvbGxJZF0gPSB1c2VTdGF0ZShxdWVyeS5wYXlsb2FkKVxuICBjb25zdCBbYWRkVm90ZSwgYWRkVm90ZURhdGFdID0gdXNlTXV0YXRpb24oQUREX1ZPVEUpXG4gIGNvbnN0IHsgbG9hZGluZywgZXJyb3IsIGRhdGEgfSA9IHVzZVN1YnNjcmlwdGlvbihncWxgXG4gICAgc3Vic2NyaXB0aW9uIHtcbiAgICAgIHBvbGxzKHdoZXJlOiB7IGlkOiB7IF9lcTogJHtwb2xsSWR9IH0gfSkge1xuICAgICAgICBpZFxuICAgICAgICB0aXRsZVxuICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICB1c2VyX2lkXG4gICAgICAgIGNoYW5uZWxfaWRcbiAgICAgICAgZXhwaXJ5XG4gICAgICAgIG9wdGlvbnNcbiAgICAgICAgcG9sbF92b3RlcyB7XG4gICAgICAgICAgdXNlcl9pZFxuICAgICAgICAgIG9wdGlvbl9pZFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIGV2ZW50ID0+IHtcblxuXG5pZiAoZXZlbnQudGFyZ2V0LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIikge1xuXG5cblxuICAgICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdCgnJicpLm1hcChxID0+IHtcbiAgICAgICAgY29uc3QgcGFydHMgPSBxLnNwbGl0KCc9JylcblxuICAgICAgICBpZiAocGFydHNbMF0gPT0gJ3dlZWtkYXlJZCcpIHtcbiAgICAgICAgICB3aW5kb3cudG9wLnBvc3RNZXNzYWdlKHtcbiAgICAgICAgICAgIHR5cGU6ICd3ZWVrZGF5JyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgd2Vla2RheUlkOiBwYXJ0c1sxXSxcbiAgICAgICAgICAgICAgc2Nyb2xsSGVpZ2h0OiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sICcqJylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIFxufVxuXG5cblxuICAgICAgLy8geW91ciBjb2RlIGhlcmVcbiAgICB9LCBmYWxzZSlcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIHsobG9hZGluZyB8fCAhZGF0YSkgJiYgPFNwaW5uZXIgLz59XG4gICAgICAgIHsoZXJyb3IgfHwgIWRhdGEpICYmIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj48RXJyb3IgbWVzc2FnZT1cIkVycm9yIGxvYWRpbmcgcG9sbHNcIiAvPjwvZGl2Pn1cbiAgICAgICAge2RhdGEgJiZcbiAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICB7ZGF0YS5wb2xscy5tYXAoKHBvbGwsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFBvbGxDb21wb25lbnRcbiAgICAgICAgICAgICAgICAgIHRvb2xzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICBleHBpcnk9e3BvbGwuZXhwaXJ5fVxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3BvbGwudGl0bGV9XG4gICAgICAgICAgICAgICAgICB1c2VySWQ9e3BvbGwudXNlcl9pZH1cbiAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwb2xsLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgb3B0aW9ucz17cG9sbC5vcHRpb25zfVxuICAgICAgICAgICAgICAgICAgcG9sbFZvdGVzPXtwb2xsLnBvbGxfdm90ZXN9XG4gICAgICAgICAgICAgICAgICBjdXJyZW50VXNlcklkPXt1c2VySWR9XG4gICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KG9wdGlvbklkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFZvdGUoe1xuICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uX2lkOiBvcHRpb25JZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2xsX2lkOiBwb2xsSWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcl9pZDogdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhEYXRhKHdpdGhSb3V0ZXIoTWVzc2FnZSkpXG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/pages/message.js */"), __jsx("div", {
    className: "jsx-1590883482" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, (loading || !data) && __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Spinner"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }), (error || !data) && __jsx("div", {
    className: "jsx-1590883482" + " " + "error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Error"], {
    message: "Error loading polls",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), data && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, data.polls.map(function (poll, index) {
    return __jsx(_components_poll_component__WEBPACK_IMPORTED_MODULE_11__["default"], {
      tools: false,
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
        lineNumber: 119
      },
      __self: this
    });
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Object(_config__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Message)));

/***/ })

})
//# sourceMappingURL=message.js.90b59f8885202efdfdb3.hot-update.js.map