webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/joduplessis/Work/Weekday/polls/components/poll.component.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;



function PollComponent(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      complete = _useState[0],
      setComplete = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      total = _useState2[0],
      setTotal = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      highest = _useState3[0],
      setHighest = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      expired = _useState4[0],
      setExpired = _useState4[1];

  console.log(props);

  var updatePoll =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log('Updating');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updatePoll() {
      return _ref.apply(this, arguments);
    };
  }();

  var deletePoll =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (confirm("Are you sure?")) {
                console.log('Deleting');
              } else {
                console.log('Not deleting');
              }

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function deletePoll() {
      return _ref2.apply(this, arguments);
    };
  }();

  var answerQuestion =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(questionId) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(questionId);
              setComplete(true);

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function answerQuestion(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var answerCountHighest = 0;
    props.questions.map(function (question) {
      // See if this user has completed the poll
      props.answers.map(function (answer) {
        if (answer.user_id == props.currentUserId) setComplete(true);
      }); // Set the score for the highest amount of votes

      answerCountHighest = props.answers.filter(function (answer) {
        return answer.question_id == question.id;
      }).length;
    });
    setTotal(props.answers.length);
    setHighest(answerCountHighest);
    setExpired(moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).isBefore(moment__WEBPACK_IMPORTED_MODULE_5___default()()));
  }, [props]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "3660888933",
    __self: this
  }, ".poll-container.jsx-3660888933{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:stretch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-bottom:20px;}.poll-inner.jsx-3660888933{-webkit-flex:1;-ms-flex:1;flex:1;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.progress-container.jsx-3660888933{margin-bottom:5px;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRGtCLEFBR3NCLEFBVUosQUFTVyxXQWxCTCxPQW1CRixXQUNiLElBVndCLG9EQVRBLDBCQVVULG9EQVRPLHNCQVVELDJFQVRFLGtCQVVBLDBEQVRFLGtCQVVBLGlGQVRKLGtCQVVyQixDQVRBIiwiZmlsZSI6Ii9Vc2Vycy9qb2R1cGxlc3Npcy9Xb3JrL1dlZWtkYXkvcG9sbHMvY29tcG9uZW50cy9wb2xsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBQcm9ncmVzcywgQnV0dG9uIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9sbENvbXBvbmVudChwcm9wcykge1xuICBjb25zdCBbY29tcGxldGUsIHNldENvbXBsZXRlXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbdG90YWwsIHNldFRvdGFsXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtoaWdoZXN0LCBzZXRIaWdoZXN0XSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtleHBpcmVkLCBzZXRFeHBpcmVkXSA9IHVzZVN0YXRlKDApXG5cbiAgY29uc29sZS5sb2cocHJvcHMpXG5cbiAgY29uc3QgdXBkYXRlUG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcnKVxuICB9XG5cbiAgY29uc3QgZGVsZXRlUG9sbCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoY29uZmlybShcIkFyZSB5b3Ugc3VyZT9cIikpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdEZWxldGluZycpXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdOb3QgZGVsZXRpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGFuc3dlclF1ZXN0aW9uID0gYXN5bmMgKHF1ZXN0aW9uSWQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhxdWVzdGlvbklkKVxuICAgIHNldENvbXBsZXRlKHRydWUpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxldCBhbnN3ZXJDb3VudEhpZ2hlc3QgPSAwXG5cbiAgICBwcm9wcy5xdWVzdGlvbnMubWFwKHF1ZXN0aW9uID0+IHtcbiAgICAgIC8vIFNlZSBpZiB0aGlzIHVzZXIgaGFzIGNvbXBsZXRlZCB0aGUgcG9sbFxuICAgICAgcHJvcHMuYW5zd2Vycy5tYXAoYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKGFuc3dlci51c2VyX2lkID09IHByb3BzLmN1cnJlbnRVc2VySWQpIHNldENvbXBsZXRlKHRydWUpXG4gICAgICB9KVxuXG4gICAgICAvLyBTZXQgdGhlIHNjb3JlIGZvciB0aGUgaGlnaGVzdCBhbW91bnQgb2Ygdm90ZXNcbiAgICAgIGFuc3dlckNvdW50SGlnaGVzdCA9IHByb3BzLmFuc3dlcnMuZmlsdGVyKGFuc3dlciA9PiBhbnN3ZXIucXVlc3Rpb25faWQgPT0gcXVlc3Rpb24uaWQpLmxlbmd0aFxuICAgIH0pXG5cbiAgICBzZXRUb3RhbChwcm9wcy5hbnN3ZXJzLmxlbmd0aClcbiAgICBzZXRIaWdoZXN0KGFuc3dlckNvdW50SGlnaGVzdClcbiAgICBzZXRFeHBpcmVkKG1vbWVudChwcm9wcy5leHBpcnkpLmlzQmVmb3JlKG1vbWVudCgpKSlcbiAgfSwgW3Byb3BzXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnBvbGwtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAucG9sbC1pbm5lciB7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb2xsLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvbGwtaW5uZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImg0IGNvbG9yLWQzIHRleHQtbGVmdCB3LTEwMCBtYi0wXCI+e3Byb3BzLnRpdGxlfTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDUgY29sb3ItZDAgdGV4dC1sZWZ0IHctMTAwIG1iLTEwXCI+e3Byb3BzLmRlc2NyaXB0aW9ufTwvZGl2PlxuXG4gICAgICAgICAgeyghY29tcGxldGUgJiYgIWV4cGlyZWQpICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e3F1ZXN0aW9uLnRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImZ1bGwtd2lkdGhcIlxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogMzUgfX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhbnN3ZXJRdWVzdGlvbihxdWVzdGlvbi5pZCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB7KGNvbXBsZXRlIHx8IGV4cGlyZWQpICYmXG4gICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgIHtwcm9wcy5xdWVzdGlvbnMubWFwKChxdWVzdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBhbnN3ZXJzID0gcHJvcHMuYW5zd2Vycy5maWx0ZXIoYW5zd2VyID0+IGFuc3dlci5xdWVzdGlvbl9pZCA9PSBxdWVzdGlvbi5pZClcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJjZW50YWdlID0gTWF0aC5mbG9vcigoYW5zd2Vycy5sZW5ndGggLyB0b3RhbCkgKiAxMDApXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3IgPSBhbnN3ZXJzLmxlbmd0aCA+PSBoaWdoZXN0ID8gJyNlOWVkZjInIDogJyNmMGYyZjUnXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgPFByb2dyZXNzXG4gICAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZT17cGVyY2VudGFnZX1cbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XG4gICAgICAgICAgICAgICAgICAgICAgdGV4dD17cXVlc3Rpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAgY29sb3ItZDEgdGV4dC1sZWZ0IHctMTAwIG10LTVcIj5cbiAgICAgICAgICAgIHtleHBpcmVkICYmXG4gICAgICAgICAgICAgIDxzcGFuPlRoaXMgcG9sbCBleHBpcmVkIHttb21lbnQocHJvcHMuZXhwaXJ5KS5mcm9tTm93KCl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyFleHBpcmVkICYmXG4gICAgICAgICAgICAgIDxzcGFuPlRoaXMgcG9sbCBleHBpcmVzIGF0IHttb21lbnQocHJvcHMuZXhwaXJ5KS5mb3JtYXQoJ0xMJyl9PC9zcGFuPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAge3Byb3BzLmN1cnJlbnRVc2VySWQgPT0gcHJvcHMudXNlcklkICYmXG4gICAgICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPVwiYnV0dG9uIG1sLTEwIGNvbG9yLWJsdWVcIiBvbkNsaWNrPXt1cGRhdGVQb2xsfT5VcGRhdGU8L3N0cm9uZz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHtwcm9wcy5jdXJyZW50VXNlcklkID09IHByb3BzLnVzZXJJZCAmJlxuICAgICAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cImJ1dHRvbiBtbC0xMCBjb2xvci1yZWRcIiBvbkNsaWNrPXtkZWxldGVQb2xsfT5EZWxldGU8L3N0cm9uZz5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Work/Weekday/polls/components/poll.component.js */"), __jsx("div", {
    className: "jsx-3660888933" + " " + "poll-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3660888933" + " " + "poll-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-3660888933" + " " + "h4 color-d3 text-left w-100 mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, props.title), __jsx("div", {
    className: "jsx-3660888933" + " " + "h5 color-d0 text-left w-100 mb-10",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, props.description), !complete && !expired && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, props.questions.map(function (question, index) {
    return __jsx("div", {
      key: index,
      className: "jsx-3660888933" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      text: question.text,
      theme: "blue-border",
      size: "full-width",
      style: {
        height: 35
      },
      onClick: function onClick() {
        return answerQuestion(question.id);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }));
  })), (complete || expired) && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, props.questions.map(function (question, index) {
    var answers = props.answers.filter(function (answer) {
      return answer.question_id == question.id;
    });
    var percentage = Math.floor(answers.length / total * 100);
    var color = answers.length >= highest ? '#e9edf2' : '#f0f2f5';
    return __jsx("div", {
      key: index,
      className: "jsx-3660888933" + " " + "progress-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_4__["Progress"], {
      percentage: percentage,
      color: color,
      text: question.text,
      labels: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }));
  })), __jsx("div", {
    className: "jsx-3660888933" + " " + "p color-d1 text-left w-100 mt-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, expired && __jsx("span", {
    className: "jsx-3660888933",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, "This poll expired ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).fromNow()), !expired && __jsx("span", {
    className: "jsx-3660888933",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "This poll expires at ", moment__WEBPACK_IMPORTED_MODULE_5___default()(props.expiry).format('LL')), props.currentUserId == props.userId && __jsx("strong", {
    onClick: updatePoll,
    className: "jsx-3660888933" + " " + "button ml-10 color-blue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Update"), props.currentUserId == props.userId && __jsx("strong", {
    onClick: deletePoll,
    className: "jsx-3660888933" + " " + "button ml-10 color-red",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "Delete")))));
}

/***/ })

})
//# sourceMappingURL=index.js.7796ae133740f7ef46d9.hot-update.js.map