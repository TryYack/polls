webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util.js":
/*!*****************!*\
  !*** ./util.js ***!
  \*****************/
/*! exports provided: autoAdjustMessageHeight, openAppPanel, openAppModal, postAppMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "autoAdjustMessageHeight", function() { return autoAdjustMessageHeight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openAppPanel", function() { return openAppPanel; });
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
            type: 'AUTO_ADJUST_MESSAGE_HEIGHT',
            weekdayId: weekdayId,
            scrollHeight: scrollHeight
          });
        }
      });
    }
  }, 1000);
};
var openAppPanel = function openAppPanel(_ref) {
  var name = _ref.name,
      url = _ref.url;
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'panel',
      name: name,
      url: url
    }
  });
};
var openAppModal = function openAppModal(_ref2) {
  var name = _ref2.name,
      url = _ref2.url;
  postAppMessage({
    type: 'DISPATCH_APP_ACTION',
    action: {
      type: 'modal',
      name: name,
      url: url
    }
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
//# sourceMappingURL=index.js.3dd6874f70c6c1c41f02.hot-update.js.map