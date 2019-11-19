webpackHotUpdate("static/development/pages/message.js",{

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! exports provided: autoAdjustMessageHeight, openAppModal, postAppMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAdjustMessageHeight", function() { return autoAdjustMessageHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAppModal", function() { return openAppModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postAppMessage", function() { return postAppMessage; });
var autoAdjustMessageHeight = function autoAdjustMessageHeight() {
  var currentHeight = 0;
  setInterval(function () {
    var scrollHeight = document.documentElement.scrollHeight;

    if (scrollHeight != currentHeight) {
      currentHeight = scrollHeight;
      window.location.search.split('&').map(function (query) {
        var parts = query.split('=');

        if (parts[0] == 'weekdayId' && parts.length == 2) {
          var weekdayId = parts[1];
          postAppMessage({
            weekdayId: weekdayId,
            scrollHeight: scrollHeight
          });
        }
      });
    }
  }, 1000);
};
var openAppModal = function openAppModal(_ref) {
  var title = _ref.title,
      url = _ref.url;
  postAppMessage({
    type: 'action',
    title: title,
    url: url
  });
};
var postAppMessage = function postAppMessage(payload) {
  window.top.postMessage({
    type: 'weekday',
    payload: payload
  }, '*');
};

/***/ })

})
//# sourceMappingURL=message.js.4c9c77767c3156258515.hot-update.js.map