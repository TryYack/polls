webpackHotUpdate("static/development/pages/message.js",{

/***/ "./components/poll.component.js":
/*!**************************************!*\
  !*** ./components/poll.component.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PollComponent; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util */ "./util.js");





var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/poll.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_4__["default"])(["\n  mutation delete_polls($id: Int) {\n    delete_polls(\n      where: {id: {_eq: $id}}\n    ) {\n      affected_rows\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}








var DELETE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_11___default()(_templateObject());
function PollComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      complete = _useState[0],
      setComplete = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      total = _useState2[0],
      setTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      highest = _useState3[0],
      setHighest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(0),
      expired = _useState4[0],
      setExpired = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_10__["useMutation"])(DELETE_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useMutation, 2),
      deletePoll = _useMutation2[0],
      deleteData = _useMutation2[1];

  var sharePoll =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var result;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_9___default()('http://localhost:8181/v1/webhook', {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': 'token 31473fc6-fee7-11e9-8f0b-362b9e155667'
                },
                redirect: 'follow',
                referrer: 'no-referrer',
                body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
                  message: 'Yo yo yo',
                  attachments: [],
                  channelId: props.channelId,
                  payload: props.id
                })
              });

            case 3:
              result = _context.sent;
              _context.next = 8;
              break;

            case 6:
              _context.prev = 6;
              _context.t0 = _context["catch"](0);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 6]]);
    }));

    return function sharePoll() {
      return _ref.apply(this, arguments);
    };
  }();

  var updatePoll =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Object(_util__WEBPACK_IMPORTED_MODULE_12__["openAppModal"])({
                name: 'Update poll',
                url: 'http://localhost:3000/update?pollId=' + props.id
              });

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function updatePoll() {
      return _ref2.apply(this, arguments);
    };
  }();

  var confirmDeletePoll =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (confirm("Are you sure?")) {
                deletePoll({
                  variables: {
                    id: props.id
                  }
                });
              }

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function confirmDeletePoll() {
      return _ref3.apply(this, arguments);
    };
  }();

  var voteOption =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(optionId) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              props.onSubmit(optionId);
              setComplete(true);

            case 2:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function voteOption(_x) {
      return _ref4.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
    var voteCountHighest = 0;
    props.options.map(function (option) {
      // See if this user has completed the poll
      props.pollVotes.map(function (vote) {
        if (vote.user_id == props.currentUserId) setComplete(true);
      }); // Set the score for the highest amount of votes

      voteCountHighest = props.pollVotes.filter(function (vote) {
        return vote.option_id == option.id;
      }).length;
    });
    setTotal(props.pollVotes.length);
    setHighest(voteCountHighest);
    setExpired(moment__WEBPACK_IMPORTED_MODULE_8___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_8___default()()));
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "4211460005",
    __self: this
  }, ".poll-container.jsx-4211460005{width:100%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.poll-inner.jsx-4211460005{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-4211460005{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1RmtCLEFBR3NCLEFBV0osQUFTVyxXQW5CQyxPQW9CUixXQUNiLElBVndCLGdEQVZULDhCQVdBLDRDQVZTLDhCQVdILGdEQVZDLDZDQVdDLG9EQVZBLHdCQVdFLG9EQVZBLCtDQVd6QixvREFWcUIsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcbmltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLXVuZmV0Y2gnXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlU3Vic2NyaXB0aW9uIH0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCBncWwgZnJvbSAnZ3JhcGhxbC10YWcnXG5pbXBvcnQgeyBvcGVuQXBwTW9kYWwgfSBmcm9tICcuLi91dGlsJ1xuXG5jb25zdCBERUxFVEVfUE9MTCA9IGdxbGBcbiAgbXV0YXRpb24gZGVsZXRlX3BvbGxzKCRpZDogSW50KSB7XG4gICAgZGVsZXRlX3BvbGxzKFxuICAgICAgd2hlcmU6IHtpZDoge19lcTogJGlkfX1cbiAgICApIHtcbiAgICAgIGFmZmVjdGVkX3Jvd3NcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGxDb21wb25lbnQocHJvcHMpIHtcbiAgY29uc3QgW2NvbXBsZXRlLCBzZXRDb21wbGV0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW3RvdGFsLCBzZXRUb3RhbF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbaGlnaGVzdCwgc2V0SGlnaGVzdF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZXhwaXJlZCwgc2V0RXhwaXJlZF0gPSB1c2VTdGF0ZSgwKVxuICBjb25zdCBbZGVsZXRlUG9sbCwgZGVsZXRlRGF0YV0gPSB1c2VNdXRhdGlvbihERUxFVEVfUE9MTClcblxuICBjb25zdCBzaGFyZVBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgxODEvdjEvd2ViaG9vaycsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgY2FjaGU6ICduby1jYWNoZScsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICdBdXRob3JpemF0aW9uJzogJ3Rva2VuIDMxNDczZmM2LWZlZTctMTFlOS04ZjBiLTM2MmI5ZTE1NTY2NycsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICAgICAgcmVmZXJyZXI6ICduby1yZWZlcnJlcicsXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBtZXNzYWdlOiAnWW8geW8geW8nLFxuICAgICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgICBjaGFubmVsSWQ6IHByb3BzLmNoYW5uZWxJZCxcbiAgICAgICAgICBwYXlsb2FkOiBwcm9wcy5pZCxcbiAgICAgICAgfSksXG4gICAgICB9KVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHVwZGF0ZVBvbGwgPSBhc3luYyAoKSA9PiB7XG4gICAgb3BlbkFwcE1vZGFsKHtcbiAgICAgIG5hbWU6ICdVcGRhdGUgcG9sbCcsXG4gICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvdXBkYXRlP3BvbGxJZD0nICsgcHJvcHMuaWQsXG4gICAgfSlcbiAgfVxuXG4gIGNvbnN0IGNvbmZpcm1EZWxldGVQb2xsID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmIChjb25maXJtKFwiQXJlIHlvdSBzdXJlP1wiKSkge1xuICAgICAgZGVsZXRlUG9sbCh7IHZhcmlhYmxlczogeyBpZDogcHJvcHMuaWQgfSB9KVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZvdGVPcHRpb24gPSBhc3luYyAob3B0aW9uSWQpID0+IHtcbiAgICBwcm9wcy5vblN1Ym1pdChvcHRpb25JZClcbiAgICBzZXRDb21wbGV0ZSh0cnVlKVxuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgdm90ZUNvdW50SGlnaGVzdCA9IDBcblxuICAgIHByb3BzLm9wdGlvbnMubWFwKG9wdGlvbiA9PiB7XG4gICAgICAvLyBTZWUgaWYgdGhpcyB1c2VyIGhhcyBjb21wbGV0ZWQgdGhlIHBvbGxcbiAgICAgIHByb3BzLnBvbGxWb3Rlcy5tYXAodm90ZSA9PiB7XG4gICAgICAgIGlmICh2b3RlLnVzZXJfaWQgPT0gcHJvcHMuY3VycmVudFVzZXJJZCkgc2V0Q29tcGxldGUodHJ1ZSlcbiAgICAgIH0pXG5cbiAgICAgIC8vIFNldCB0aGUgc2NvcmUgZm9yIHRoZSBoaWdoZXN0IGFtb3VudCBvZiB2b3Rlc1xuICAgICAgdm90ZUNvdW50SGlnaGVzdCA9IHByb3BzLnBvbGxWb3Rlcy5maWx0ZXIodm90ZSA9PiB2b3RlLm9wdGlvbl9pZCA9PSBvcHRpb24uaWQpLmxlbmd0aFxuICAgIH0pXG5cbiAgICBzZXRUb3RhbChwcm9wcy5wb2xsVm90ZXMubGVuZ3RoKVxuICAgIHNldEhpZ2hlc3Qodm90ZUNvdW50SGlnaGVzdClcbiAgICBzZXRFeHBpcmVkKG1vbWVudChwcm9wcy5leHBpcnkpLmlzQmVmb3JlKG1vbWVudCgpKSlcbiAgfSwgW3Byb3BzXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wb2xsLWlubmVyIHtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9sbC1pbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDQgY29sb3ItZDMgdGV4dC1sZWZ0IHctMTAwIG1iLTBcIj57cHJvcHMudGl0bGV9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBjb2xvci1kMCB0ZXh0LWxlZnQgdy0xMDAgbWItMTBcIj57cHJvcHMuZGVzY3JpcHRpb259PC9kaXY+XG5cbiAgICAgICAgICB7KCFjb21wbGV0ZSAmJiAhZXhwaXJlZCkgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cImJsdWUtYm9yZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiZnVsbC13aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzNSB9fVxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHZvdGVPcHRpb24ob3B0aW9uLmlkKX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgIH1cblxuICAgICAgICAgIHsoY29tcGxldGUgfHwgZXhwaXJlZCkgJiZcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAge3Byb3BzLm9wdGlvbnMubWFwKChvcHRpb24sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcG9sbF92b3RlcyA9IHByb3BzLnBvbGxWb3Rlcy5maWx0ZXIodm90ZSA9PiB2b3RlLm9wdGlvbl9pZCA9PSBvcHRpb24uaWQpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVyY2VudGFnZSA9IHBvbGxfdm90ZXMubGVuZ3RoID09IDAgPyAwIDogTWF0aC5mbG9vcigocG9sbF92b3Rlcy5sZW5ndGggLyB0b3RhbCkgKiAxMDApXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBwb2xsX3ZvdGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNmMGYyZjUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogcG9sbF92b3Rlcy5sZW5ndGggPj0gaGlnaGVzdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJyNlOWVkZjInXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnI2YwZjJmNSdcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWNvbnRhaW5lclwiIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlPXtwZXJjZW50YWdlfVxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtvcHRpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAgY29sb3ItZDEgdGV4dC1sZWZ0IHctMTAwIG10LTVcIj5cbiAgICAgICAgICAgIHsoZXhwaXJlZCAmJiBwcm9wcy5leHBpcnkpICYmXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTEwXCI+VGhpcyBwb2xsIGV4cGlyZWQge21vbWVudChwcm9wcy5leHBpcnkpLmZyb21Ob3coKX08L3NwYW4+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7KCFleHBpcmVkICYmIHByb3BzLmV4cGlyeSkgJiZcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMTBcIj5UaGlzIHBvbGwgZXhwaXJlcyBvbiB7bW9tZW50KHByb3BzLmV4cGlyeSkuZm9ybWF0KCdMTCcpfTwvc3Bhbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsoIWV4cGlyZWQgJiYgIXByb3BzLmV4cGlyeSkgJiZcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMTBcIj5UaGlzIHBvbGwgZG9lcyBub3QgZXhwaXJlPC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAge3Byb3BzLnRvb2xzICYmXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAgY29sb3ItZDEgdGV4dC1sZWZ0IHctMTAwIG10LTVcIj5cbiAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gY29sb3ItYmx1ZVwiIG9uQ2xpY2s9e3NoYXJlUG9sbH0+U2hhcmUgdG8gY2hhbm5lbDwvc3Ryb25nPlxuXG4gICAgICAgICAgICAgIHsocHJvcHMuY3VycmVudFVzZXJJZCA9PSBwcm9wcy51c2VySWQpICYmXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gbWwtMTAgY29sb3ItYmx1ZVwiIG9uQ2xpY2s9e3VwZGF0ZVBvbGx9PlVwZGF0ZTwvc3Ryb25nPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHsocHJvcHMuY3VycmVudFVzZXJJZCA9PSBwcm9wcy51c2VySWQpICYmXG4gICAgICAgICAgICAgICAgPHN0cm9uZyBjbGFzc05hbWU9XCJidXR0b24gbWwtMTAgY29sb3ItcmVkXCIgb25DbGljaz17Y29uZmlybURlbGV0ZVBvbGx9PkRlbGV0ZTwvc3Ryb25nPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/poll.component.js */"), __jsx("div", {
    className: "jsx-4211460005" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4211460005" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4211460005" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-4211460005" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, props.options.map(function (option, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-4211460005" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      text: option.text,
      theme: "blue-border",
      size: "full-width",
      style: {
        height: 35
      },
      onClick: function onClick() {
        return voteOption(option.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, props.options.map(function (option, index) {
    var poll_votes = props.pollVotes.filter(function (vote) {
      return vote.option_id == option.id;
    });
    var percentage = poll_votes.length == 0 ? 0 : Math.floor(poll_votes.length / total * 100);
    var color = poll_votes ? '#f0f2f5' : poll_votes.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-4211460005" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_7__["Progress"], {
      percentage: percentage,
      color: color,
      text: option.text,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-4211460005" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, expired && props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_8___default()(props.expiry).fromNow()), !expired && props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "This poll expires on ", moment__WEBPACK_IMPORTED_MODULE_8___default()(props.expiry).format('LL')), !expired && !props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "This poll does not expire")), props.tools && __jsx("div", {
    className: "jsx-4211460005" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, __jsx("strong", {
    onClick: sharePoll,
    className: "jsx-4211460005" + " " + "button color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, "Share to channel"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: updatePoll,
    className: "jsx-4211460005" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: confirmDeletePoll,
    className: "jsx-4211460005" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "Delete")))));
}

/***/ })

})
//# sourceMappingURL=message.js.019713be425d937333a3.hot-update.js.map