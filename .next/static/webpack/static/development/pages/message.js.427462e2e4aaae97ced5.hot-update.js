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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util */ "./util.js");




var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/poll.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_3__["default"])(["\n  mutation delete_polls($id: Int) {\n    delete_polls(\n      where: {id: {_eq: $id}}\n    ) {\n      affected_rows\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var DELETE_POLL = graphql_tag__WEBPACK_IMPORTED_MODULE_9___default()(_templateObject());
function PollComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      complete = _useState[0],
      setComplete = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      total = _useState2[0],
      setTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      highest = _useState3[0],
      setHighest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      expired = _useState4[0],
      setExpired = _useState4[1];

  var _useMutation = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_8__["useMutation"])(DELETE_POLL),
      _useMutation2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useMutation, 2),
      deletePoll = _useMutation2[0],
      deleteData = _useMutation2[1];

  var sharePoll =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sharePoll() {
      return _ref.apply(this, arguments);
    };
  }();

  var updatePoll =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              Object(_util__WEBPACK_IMPORTED_MODULE_10__["openAppModal"])({
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
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
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

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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
    setExpired(moment__WEBPACK_IMPORTED_MODULE_7___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_7___default()()));
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
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
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, props.options.map(function (option, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-4211460005" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
        lineNumber: 104
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
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
        lineNumber: 129
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_6__["Progress"], {
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
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_7___default()(props.expiry).fromNow()), !expired && props.expiry && __jsx("span", {
    className: "jsx-4211460005" + " " + "mr-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, "This poll expires on ", moment__WEBPACK_IMPORTED_MODULE_7___default()(props.expiry).format('LL')), !expired && !props.expiry && __jsx("span", {
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

/***/ })

})
//# sourceMappingURL=message.js.427462e2e4aaae97ced5.hot-update.js.map