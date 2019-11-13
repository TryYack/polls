webpackHotUpdate("static/development/pages/polls.js",{

/***/ "./pages/polls.js":
/*!************************!*\
  !*** ./pages/polls.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @weekday/elements */ "./node_modules/@weekday/elements/lib/index.js");
/* harmony import */ var _weekday_elements__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/joduplessis/Desktop/polls/pages/polls.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function Polls(props) {
  /*
  useEffect(() => {
    setLoading(true)
    setError(false)
     try {
      const { router: { query: { email, token } }} = props;
       if (!email || !token) return
       fetch('https://api.weekday.sh/api/v1/auth/confirm', {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
        referrer: 'no-referrer',
        body: JSON.stringify({ email, token }),
      })
      .then(res => res.json())
      .then(data => {
        setLoading(false)
         if (!data.success) setError(true)
      })
      .catch(e => {
        setLoading(false)
        setError(true)
      })
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }, [props.router.query.email])
  */
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var payload = props.router.query.payload;
    console.log(payload);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("title", {
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Polls"), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("link", {
    href: "/static/images/favicon.png",
    rel: "shortcut icon",
    className: "jsx-469798477",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "469798477",
    __self: this
  }, "*{margin:0px;padding:0px;}body{background:white;}.container{background:white;width:100%;height:100%;position:absolute;left:0px;top:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qb2R1cGxlc3Npcy9EZXNrdG9wL3BvbGxzL3BhZ2VzL3BvbGxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZEeUIsQUFHc0IsQUFLTSxBQUlBLFdBUkwsTUFLZCxBQUlhLE1BUmIsS0FTYyxZQUNNLGtCQUNULFNBQ0QsUUFDSywwRUFDTSw2RkFDRSw0RUFDRSxtR0FDekIiLCJmaWxlIjoiL1VzZXJzL2pvZHVwbGVzc2lzL0Rlc2t0b3AvcG9sbHMvcGFnZXMvcG9sbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyLCB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy11bmZldGNoJ1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQHdlZWtkYXkvZWxlbWVudHMnXG5cbmZ1bmN0aW9uIFBvbGxzKHByb3BzKSB7XG5cbiAgLypcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgc2V0RXJyb3IoZmFsc2UpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyByb3V0ZXI6IHsgcXVlcnk6IHsgZW1haWwsIHRva2VuIH0gfX0gPSBwcm9wcztcblxuICAgICAgaWYgKCFlbWFpbCB8fCAhdG9rZW4pIHJldHVyblxuXG4gICAgICBmZXRjaCgnaHR0cHM6Ly9hcGkud2Vla2RheS5zaC9hcGkvdjEvYXV0aC9jb25maXJtJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgbW9kZTogJ2NvcnMnLFxuICAgICAgICBjYWNoZTogJ25vLWNhY2hlJyxcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxuICAgICAgICByZWRpcmVjdDogJ2ZvbGxvdycsXG4gICAgICAgIHJlZmVycmVyOiAnbm8tcmVmZXJyZXInLFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGVtYWlsLCB0b2tlbiB9KSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuXG4gICAgICAgIGlmICghZGF0YS5zdWNjZXNzKSBzZXRFcnJvcih0cnVlKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgICAgc2V0RXJyb3IodHJ1ZSlcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICAgIHNldEVycm9yKHRydWUpXG4gICAgfVxuICB9LCBbcHJvcHMucm91dGVyLnF1ZXJ5LmVtYWlsXSlcbiAgKi9cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHsgcm91dGVyOiB7IHF1ZXJ5OiB7IHBheWxvYWQgfSB9fSA9IHByb3BzO1xuXG4gICAgY29uc29sZS5sb2cocGF5bG9hZClcblxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+UG9sbHM8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZXMuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCIvc3RhdGljL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHJlbD1cInNob3J0Y3V0IGljb25cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxuICAgICAgICAqIHtcbiAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgIHRvcDogMHB4O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29sdW1uXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9uby1wb2xscy5wbmdcIiB3aWR0aD1cIjYwJVwiIGNsYXNzTmFtZT1cIm1iLTMwXCIvPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaDMgbWItMjAgcGwtMjAgcHItMjAgY29sb3ItZDIgdGV4dC1jZW50ZXJcIj5UaGVyZSBhcmUgbm8gcG9sbHM8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoNSBtYi0yMCBwbC0yMCBwci0yMCBjb2xvci1kMCB0ZXh0LWNlbnRlclwiPllvdSBoYXZlbid0IGNyZWF0ZWQgYW55IHBvbGxzLiBDbGljayBvbiB0aGUgYnV0dG9uIGJlbG93IHRvIGNyZWF0ZSB5b3VyIGZpcnN0IHBvbGwuPC9kaXY+XG5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIHNpemU9XCJzbWFsbFwiXG4gICAgICAgICAgdGhlbWU9XCJibHVlLWJvcmRlclwiXG4gICAgICAgICAgdGV4dD1cIkNyZWF0ZSBhIHBvbGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufVxuXG5Qb2xscy5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29vbDogdHJ1ZVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoUG9sbHMpXG4iXX0= */\n/*@ sourceURL=/Users/joduplessis/Desktop/polls/pages/polls.js */"), __jsx("div", {
    className: "jsx-469798477" + " " + "container column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, __jsx("img", {
    src: "../static/images/no-polls.png",
    width: "60%",
    className: "jsx-469798477" + " " + "mb-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-469798477" + " " + "h3 mb-20 pl-20 pr-20 color-d2 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "There are no polls"), __jsx("div", {
    className: "jsx-469798477" + " " + "h5 mb-20 pl-20 pr-20 color-d0 text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "You haven't created any polls. Click on the button below to create your first poll."), __jsx(_weekday_elements__WEBPACK_IMPORTED_MODULE_5__["Button"], {
    size: "small",
    theme: "blue-border",
    text: "Create a poll",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })));
}

Polls.getInitialProps = function () {
  return {
    cool: true
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Polls));

/***/ })

})
//# sourceMappingURL=polls.js.4d499d7dbb6c3fb9839d.hot-update.js.map