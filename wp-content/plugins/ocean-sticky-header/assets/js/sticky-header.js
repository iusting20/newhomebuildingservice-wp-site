(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DOM = _interopRequireDefault(require("../Utils/DOM"));
var _Utility = _interopRequireDefault(require("../Utils/Utility"));
var _Helpers = _interopRequireDefault(require("../Utils/Helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _lastScrolBarPosition = /*#__PURE__*/new WeakMap();
var _noSticky = /*#__PURE__*/new WeakMap();
var Header = /*#__PURE__*/_createClass(function Header() {
  var _this = this;
  _classCallCheck(this, Header);
  _classPrivateFieldInitSpec(this, _lastScrolBarPosition, {
    writable: true,
    value: 0
  });
  _defineProperty(this, "sticky", function () {
    var _DOM$siteHeader;
    if (_classPrivateFieldGet(_this, _noSticky).call(_this)) {
      return;
    }
    if (!(_DOM["default"].headerWrapper || _DOM["default"].siteHeader || _DOM["default"].header)) {
      return;
    }
    var currentPosition = _Utility["default"].elemOffset(_DOM["default"].headerWrapper).top - Header.getOffset();
    var slideStickyCurrentPosition = currentPosition;

    // If slide effect
    if (_Helpers["default"].slideStickyEffect() && !((_DOM$siteHeader = _DOM["default"].siteHeader) !== null && _DOM$siteHeader !== void 0 && _DOM$siteHeader.classList.contains("vertical-header"))) {
      currentPosition = currentPosition + _DOM["default"].headerWrapper.offsetHeight;
    }

    // When scrolling
    if (_Utility["default"].scrollBarTopPosition() !== 0 && _Utility["default"].scrollBarTopPosition() >= currentPosition) {
      _DOM["default"].headerWrapper.classList.add("is-sticky");
      _DOM["default"].header.style.top = Header.getOffset() + "px";
      _DOM["default"].header.style.width = _DOM["default"].headerWrapper.offsetWidth + "px";

      // If slide effect
      if (_Helpers["default"].slideStickyEffect() && !_DOM["default"].siteHeader.classList.contains("vertical-header")) {
        _DOM["default"].siteHeader.classList.add("show");
      }
    } else {
      // If is not slide effect
      if (!_Helpers["default"].slideStickyEffect()) {
        // Remove sticky wrap class
        _DOM["default"].headerWrapper.classList.remove("is-sticky");
        _DOM["default"].header.style.top = "";
        _DOM["default"].header.style.width = "";
      }
    }

    // If slide effect
    if (_Helpers["default"].slideStickyEffect() && !_DOM["default"].siteHeader.classList.contains("vertical-header")) {
      // Remove sticky class when window top
      if (_Utility["default"].scrollBarTopPosition() <= slideStickyCurrentPosition) {
        // Remove sticky wrap class
        _DOM["default"].headerWrapper.classList.remove("is-sticky");
        _DOM["default"].header.style.top = "";
        _DOM["default"].header.style.width = "";

        // Remove slide effect class
        _DOM["default"].siteHeader.classList.remove("show");
      }
    }
  });
  _defineProperty(this, "updateSticky", function () {
    var _DOM$siteHeader2, _DOM$headerWrapper;
    // Return if is vertical header style
    if (window.innerWidth > 960 && (_DOM$siteHeader2 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader2 !== void 0 && _DOM$siteHeader2.classList.contains("vertical-header")) {
      return;
    }
    if (!((_DOM$headerWrapper = _DOM["default"].headerWrapper) !== null && _DOM$headerWrapper !== void 0 && _DOM$headerWrapper.classList.contains("is-sticky")) && !!_DOM["default"].header) {
      if (_DOM["default"].headerWrapper) {
        _DOM["default"].headerWrapper.style.height = _DOM["default"].header.offsetHeight + "px";
      }
    }
    if (_Utility["default"].scrollBarTopPosition() !== 0) {
      if (!!_DOM["default"].header && !!_DOM["default"].headerWrapper) {
        _DOM["default"].header.style.top = Header.getOffset() + "px";
        _DOM["default"].header.style.width = _DOM["default"].headerWrapper.offsetWidth + "px";
      }
    }
  });
  _defineProperty(this, "addVerticalHeaderSticky", function () {
    var _DOM$verticalHeader;
    // Return if is not vertical header style and transparent
    if (!((_DOM$verticalHeader = _DOM["default"].verticalHeader) !== null && _DOM$verticalHeader !== void 0 && _DOM$verticalHeader.classList.contains("is-transparent"))) {
      return;
    }

    // Return if no header wrapper
    if (!_DOM["default"].headerWrapper) {
      return;
    }
    var currentPosition = _Utility["default"].elemOffset(_DOM["default"].headerWrapper).top;

    // When scrolling
    if (_Utility["default"].scrollBarTopPosition() !== 0 && _Utility["default"].scrollBarTopPosition() >= currentPosition) {
      _DOM["default"].headerWrapper.classList.add("is-sticky");
    } else {
      _DOM["default"].headerWrapper.classList.remove("is-sticky");
    }
  });
  _defineProperty(this, "stickyEffects", function () {
    var _DOM$siteHeader3;
    // Return if is vertical header style
    if ((_DOM$siteHeader3 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader3 !== void 0 && _DOM$siteHeader3.classList.contains("vertical-header")) {
      return;
    }

    // Return if no header wrapper
    if (!_DOM["default"].headerWrapper) {
      return;
    }

    // If show up effect
    if (_Helpers["default"].upStickyEffect()) {
      var currentPosition = _Utility["default"].elemOffset(_DOM["default"].headerWrapper).top + _DOM["default"].headerWrapper.offsetHeight;
      var scrollBarTopPosition = document.documentElement.scrollTop;
      if (scrollBarTopPosition >= _classPrivateFieldGet(_this, _lastScrolBarPosition) && scrollBarTopPosition >= currentPosition) {
        _DOM["default"].siteHeader.classList.remove("header-down");
        _DOM["default"].siteHeader.classList.add("header-up");
      } else {
        _DOM["default"].siteHeader.classList.remove("header-up");
        _DOM["default"].siteHeader.classList.add("header-down");
      }
      _classPrivateFieldSet(_this, _lastScrolBarPosition, scrollBarTopPosition);
    }
  });
  _defineProperty(this, "createStickyWrapper", function () {
    var _DOM$siteHeader4;
    // Create header sticky wrapper element
    _DOM["default"].headerWrapper = document.createElement("div");
    _DOM["default"].headerWrapper.setAttribute("id", "site-header-sticky-wrapper");
    _DOM["default"].headerWrapper.setAttribute("class", "oceanwp-sticky-header-holder");

    // Wrap header sticky wrapper around header
    if (!!_DOM["default"].header) {
      var _DOM$headerWrapper2;
      (_DOM$headerWrapper2 = _DOM["default"].headerWrapper) === null || _DOM$headerWrapper2 === void 0 ? void 0 : _DOM$headerWrapper2.oceanWrapAll(_DOM["default"].header);
    }

    // Set header sticky wrapper height
    if (!((_DOM$siteHeader4 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader4 !== void 0 && _DOM$siteHeader4.classList.contains("vertical-header"))) {
      if (!!_DOM["default"].headerWrapper && !!_DOM["default"].header) {
        _DOM["default"].headerWrapper.style.height = _DOM["default"].header.offsetHeight + "px";
      }
    }
  });
  _classPrivateFieldInitSpec(this, _noSticky, {
    writable: true,
    value: function value() {
      var _DOM$siteHeader5, _DOM$siteHeader6;
      if ((_DOM$siteHeader5 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader5 !== void 0 && _DOM$siteHeader5.classList.contains("vertical-header")) {
        if (window.innerWidth <= 960) {
          return !_DOM["default"].headerWrapper || _Helpers["default"].isMobileStickyDisabled();
        }
      }
      return !_DOM["default"].headerWrapper || _Helpers["default"].isMobileStickyDisabled() || !((_DOM$siteHeader6 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader6 !== void 0 && _DOM$siteHeader6.classList.contains("fixed-scroll"));
    }
  });
});
exports["default"] = Header;
_defineProperty(Header, "getOffset", function () {
  var offset = 0;

  // Add WP Adminbar offset
  if (_Utility["default"].isWPAdminbarVisible()) {
    if (!!_DOM["default"].WPAdminbar) {
      offset = offset + _DOM["default"].WPAdminbar.offsetHeight;
    }
  }

  // Offset topbar sticky
  if (_Helpers["default"].isTopbarStickyEnabled()) {
    if (!!_DOM["default"].topbar) {
      offset = offset + _DOM["default"].topbar.offsetHeight;
    }
  }
  return offset;
});

},{"../Utils/DOM":4,"../Utils/Helpers":6,"../Utils/Utility":7}],2:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DOM = _interopRequireDefault(require("../Utils/DOM"));
var _Helpers = _interopRequireDefault(require("../Utils/Helpers"));
var _Utility = _interopRequireDefault(require("../Utils/Utility"));
var _Header = _interopRequireDefault(require("./Header"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _logo = /*#__PURE__*/new WeakMap();
var _customLogo = /*#__PURE__*/new WeakMap();
var _returnOnSomeHeaderStyles = /*#__PURE__*/new WeakMap();
var Logo = /*#__PURE__*/_createClass(function Logo() {
  var _this = this;
  _classCallCheck(this, Logo);
  _classPrivateFieldInitSpec(this, _logo, {
    writable: true,
    value: void 0
  });
  _classPrivateFieldInitSpec(this, _customLogo, {
    writable: true,
    value: void 0
  });
  _defineProperty(this, "setMaxHeight", function () {
    var _DOM$siteHeader, _DOM$logoWrapper;
    // If header style is center
    if ((_DOM$siteHeader = _DOM["default"].siteHeader) !== null && _DOM$siteHeader !== void 0 && _DOM$siteHeader.classList.contains("center-header")) {
      _classPrivateFieldSet(_this, _logo, _DOM["default"].middleLogo);
      _classPrivateFieldSet(_this, _customLogo, _DOM["default"].customMiddleLogo);
    }

    // Return if not shrink style and on some header styles
    if (_classPrivateFieldGet(_this, _returnOnSomeHeaderStyles).call(_this)) {
      return;
    }

    // If mobile logo exists
    if ((_DOM$logoWrapper = _DOM["default"].logoWrapper) !== null && _DOM$logoWrapper !== void 0 && _DOM$logoWrapper.classList.contains("has-responsive-logo") && _Utility["default"].elemVisible(_DOM["default"].mobileLogo)) {
      _classPrivateFieldSet(_this, _customLogo, _DOM["default"].mobileLogo);
    }

    // Get logo position
    var initialLogoHeight;
    if (_classPrivateFieldGet(_this, _customLogo)) {
      initialLogoHeight = _classPrivateFieldGet(_this, _customLogo).offsetHeight;
    }
    var currentPosition = _Utility["default"].elemOffset(_DOM["default"].headerWrapper).top - _Header["default"].getOffset();
    window.addEventListener("scroll", function () {
      // When scrolling
      if (_Utility["default"].scrollBarTopPosition() !== 0 && _Utility["default"].scrollBarTopPosition() >= currentPosition) {
        Array.from(_classPrivateFieldGet(_this, _logo)).forEach(function (elem) {
          return elem.style.maxHeight = _Helpers["default"].getShrinkLogoHeight() + "px";
        });
      } else if (!!initialLogoHeight) {
        Array.from(_classPrivateFieldGet(_this, _logo)).forEach(function (elem) {
          return elem.style.maxHeight = initialLogoHeight + "px";
        });
      }
    });
  });
  _classPrivateFieldInitSpec(this, _returnOnSomeHeaderStyles, {
    writable: true,
    value: function value() {
      var _DOM$siteHeader2, _DOM$siteHeader3, _DOM$siteHeader4, _DOM$siteHeader5;
      return !_Helpers["default"].shrinkStickyStyle() || !_classPrivateFieldGet(_this, _logo) || !_DOM["default"].headerWrapper || _Helpers["default"].isMobileStickyDisabled() || _Helpers["default"].manualSticky() || !((_DOM$siteHeader2 = _DOM["default"].siteHeader) !== null && _DOM$siteHeader2 !== void 0 && _DOM$siteHeader2.classList.contains("fixed-scroll")) || ((_DOM$siteHeader3 = _DOM["default"].siteHeader) === null || _DOM$siteHeader3 === void 0 ? void 0 : _DOM$siteHeader3.classList.contains("top-header")) || ((_DOM$siteHeader4 = _DOM["default"].siteHeader) === null || _DOM$siteHeader4 === void 0 ? void 0 : _DOM$siteHeader4.classList.contains("vertical-header")) || ((_DOM$siteHeader5 = _DOM["default"].siteHeader) === null || _DOM$siteHeader5 === void 0 ? void 0 : _DOM$siteHeader5.classList.contains("medium-header")) && _DOM["default"].bottomHeader.classList.contains("fixed-scroll");
    }
  });
  _classPrivateFieldSet(this, _logo, _DOM["default"].logo);
  _classPrivateFieldSet(this, _customLogo, _DOM["default"].customLogo);
});
exports["default"] = Logo;

},{"../Utils/DOM":4,"../Utils/Helpers":6,"../Utils/Utility":7,"./Header":1}],3:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DOM = _interopRequireDefault(require("../Utils/DOM"));
var _Utility = _interopRequireDefault(require("../Utils/Utility"));
var _Helpers = _interopRequireDefault(require("../Utils/Helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
var _noSticky = /*#__PURE__*/new WeakMap();
var Topbar = /*#__PURE__*/_createClass(function Topbar() {
  var _this = this;
  _classCallCheck(this, Topbar);
  _defineProperty(this, "sticky", function () {
    if (_classPrivateFieldGet(_this, _noSticky).call(_this)) {
      return;
    }
    var currentPosition = 0;
    if (!!_DOM["default"].topbarWrapper) {
      currentPosition = _Utility["default"].elemOffset(_DOM["default"].topbarWrapper).top - _this.getOffset();
    }

    // When scrolling
    if (_Utility["default"].scrollBarTopPosition() !== 0 && _Utility["default"].scrollBarTopPosition() >= currentPosition) {
      var _DOM$topbarWrapper, _DOM$topbarWrapper2;
      (_DOM$topbarWrapper = _DOM["default"].topbarWrapper) === null || _DOM$topbarWrapper === void 0 ? void 0 : _DOM$topbarWrapper.classList.add("is-sticky");
      _DOM["default"].topbar.style.top = _this.getOffset() + "px";
      _DOM["default"].topbar.style.width = ((_DOM$topbarWrapper2 = _DOM["default"].topbarWrapper) === null || _DOM$topbarWrapper2 === void 0 ? void 0 : _DOM$topbarWrapper2.offsetWidth) + "px";
    } else {
      var _DOM$topbarWrapper3;
      (_DOM$topbarWrapper3 = _DOM["default"].topbarWrapper) === null || _DOM$topbarWrapper3 === void 0 ? void 0 : _DOM$topbarWrapper3.classList.remove("is-sticky");
      _DOM["default"].topbar.style.top = "";
      _DOM["default"].topbar.style.width = "";
    }
  });
  _defineProperty(this, "updateSticky", function () {
    if (!_DOM["default"].topbar || !_DOM["default"].topbarWrapper || !_Helpers["default"].isTopbarStickyEnabled()) {
      return;
    }
    if (!_DOM["default"].topbarWrapper.classList.contains("is-sticky")) {
      _DOM["default"].topbarWrapper.style.height = _DOM["default"].topbar.offsetHeight + "px";
    }
    if (_Utility["default"].scrollBarTopPosition() !== 0) {
      var _DOM$topbarWrapper4;
      _DOM["default"].topbar.style.top = _this.getOffset() + "px";
      _DOM["default"].topbar.style.width = ((_DOM$topbarWrapper4 = _DOM["default"].topbarWrapper) === null || _DOM$topbarWrapper4 === void 0 ? void 0 : _DOM$topbarWrapper4.offsetWidth) + "px";
    }
  });
  _defineProperty(this, "createStickyWrapper", function () {
    if (!_Helpers["default"].isTopbarStickyEnabled()) {
      return;
    }

    // Create topbar sticky wrapper element
    _DOM["default"].topbarWrapper = document.createElement("div");
    _DOM["default"].topbarWrapper.setAttribute("id", "top-bar-sticky-wrapper");
    _DOM["default"].topbarWrapper.setAttribute("class", "oceanwp-sticky-top-bar-holder");

    // Wrap topbar sticky wrapper around topbar
    if (!!_DOM["default"].topbar) {
      var _DOM$topbarWrapper5;
      (_DOM$topbarWrapper5 = _DOM["default"].topbarWrapper) === null || _DOM$topbarWrapper5 === void 0 ? void 0 : _DOM$topbarWrapper5.oceanWrapAll(_DOM["default"].topbar);

      // Set topbar sticky wrapper height
      _DOM["default"].topbarWrapper.style.height = _DOM["default"].topbar.offsetHeight + "px";
    }
  });
  _defineProperty(this, "getOffset", function () {
    var offset = 0;

    // Add WP Adminbar offset
    if (_Utility["default"].isWPAdminbarVisible()) {
      var _DOM$WPAdminbar;
      offset = offset + ((_DOM$WPAdminbar = _DOM["default"].WPAdminbar) === null || _DOM$WPAdminbar === void 0 ? void 0 : _DOM$WPAdminbar.offsetHeight);
    }
    return offset;
  });
  _classPrivateFieldInitSpec(this, _noSticky, {
    writable: true,
    value: function value() {
      return !_Helpers["default"].isTopbarStickyEnabled() || !_DOM["default"].topbar || _Helpers["default"].isMobileStickyDisabled();
    }
  });
});
exports["default"] = Topbar;

},{"../Utils/DOM":4,"../Utils/Helpers":6,"../Utils/Utility":7}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Helpers = _interopRequireDefault(require("./Helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var DOM = {
  WPAdminbar: document.querySelector("#wpadminbar"),
  topbar: document.querySelector("#top-bar-wrap"),
  siteHeader: document.querySelector("#site-header"),
  verticalHeader: document.querySelector("#site-header.vertical-header"),
  bottomHeader: document.querySelector(".bottom-header-wrap"),
  logoWrapper: document.querySelector("#site-logo"),
  logo: document.querySelectorAll("#site-logo img"),
  customLogo: document.querySelector("#site-logo .custom-logo"),
  middleLogo: document.querySelectorAll(".middle-site-logo img"),
  customMiddleLogo: document.querySelector(".middle-site-logo .custom-logo"),
  mobileLogo: document.querySelector("#site-logo .responsive-logo")
};
DOM.getHeader = function () {
  var _DOM$siteHeader, _DOM$siteHeader2, _DOM$bottomHeader;
  var headerClass;

  // If manual sticky
  if (_Helpers["default"].manualSticky()) {
    headerClass = ".owp-sticky";
  } else {
    headerClass = "#site-header";
  }

  // If top header style
  if ((_DOM$siteHeader = DOM.siteHeader) !== null && _DOM$siteHeader !== void 0 && _DOM$siteHeader.classList.contains("top-header")) {
    headerClass = "#site-header .header-top";
  }

  // Medium header style
  if ((_DOM$siteHeader2 = DOM.siteHeader) !== null && _DOM$siteHeader2 !== void 0 && _DOM$siteHeader2.classList.contains("medium-header") && (_DOM$bottomHeader = DOM.bottomHeader) !== null && _DOM$bottomHeader !== void 0 && _DOM$bottomHeader.classList.contains("fixed-scroll")) {
    headerClass = ".bottom-header-wrap";
  }
  return document.querySelector(headerClass);
};
DOM.header = DOM.getHeader();
var _default = DOM;
exports["default"] = _default;

},{"./Helpers":6}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = function () {
  // Wrap an HTMLElement around each element in an HTMLElement array.
  HTMLElement.prototype.oceanWrap = function (elms) {
    // Convert `elms` to an array, if necessary.
    if (!elms.length) elms = [elms];

    // Loops backwards to prevent having to clone the wrapper on the
    // first element (see `child` below).
    for (var i = elms.length - 1; i >= 0; i--) {
      var child = i > 0 ? this.cloneNode(true) : this;
      var el = elms[i];

      // Cache the current parent and sibling.
      var parent = el.parentNode;
      var sibling = el.nextSibling;

      // Wrap the element (is automatically removed from its current
      // parent).
      child.appendChild(el);

      // If the element had a sibling, insert the wrapper before
      // the sibling to maintain the HTML structure; otherwise, just
      // append it to the parent.
      if (sibling) {
        parent.insertBefore(child, sibling);
      } else {
        parent.appendChild(child);
      }
    }
  };

  // Wrap an HTMLElement around another HTMLElement or an array of them.
  HTMLElement.prototype.oceanWrapAll = function (elms) {
    var el = !!elms && elms.length ? elms[0] : elms;

    // Cache the current parent and sibling of the first element.
    var parent = el.parentNode;
    var sibling = el.nextSibling;

    // Wrap the first element (is automatically removed from its
    // current parent).
    this.appendChild(el);

    // Wrap all other elements (if applicable). Each element is
    // automatically removed from its current parent and from the elms
    // array.
    while (elms.length) {
      this.appendChild(elms[0]);
    }

    // If the first element had a sibling, insert the wrapper before the
    // sibling to maintain the HTML structure; otherwise, just append it
    // to the parent.
    if (sibling) {
      parent.insertBefore(this, sibling);
    } else {
      parent.appendChild(this);
    }
  };
}();
exports["default"] = _default;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Helpers = /*#__PURE__*/_createClass(function Helpers() {
  _classCallCheck(this, Helpers);
});
exports["default"] = Helpers;
_defineProperty(Helpers, "isTopbarStickyEnabled", function () {
  return oceanwpLocalize.hasStickyTopBar == true;
});
_defineProperty(Helpers, "isMobileStickyDisabled", function () {
  return window.innerWidth <= 960 && oceanwpLocalize.hasStickyMobile != true;
});
_defineProperty(Helpers, "slideStickyEffect", function () {
  return oceanwpLocalize.stickyEffect == "slide";
});
_defineProperty(Helpers, "upStickyEffect", function () {
  return oceanwpLocalize.stickyEffect == "up";
});
_defineProperty(Helpers, "manualSticky", function () {
  return oceanwpLocalize.stickyChoose == "manual";
});
_defineProperty(Helpers, "shrinkStickyStyle", function () {
  return oceanwpLocalize.stickyStyle == "shrink";
});
_defineProperty(Helpers, "getShrinkLogoHeight", function () {
  var shrinkLogoHeight = parseInt(oceanwpLocalize.shrinkLogoHeight);
  return shrinkLogoHeight ? shrinkLogoHeight : 30;
});

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _DOM = _interopRequireDefault(require("./DOM"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Utility = /*#__PURE__*/_createClass(function Utility() {
  _classCallCheck(this, Utility);
});
exports["default"] = Utility;
_defineProperty(Utility, "scrollBarTopPosition", function () {
  return window.pageYOffset;
});
_defineProperty(Utility, "elemExists", function (elem) {
  return elem && elem !== null;
});
_defineProperty(Utility, "elemVisible", function (elem) {
  return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
});
_defineProperty(Utility, "elemOffset", function (elem) {
  if (!elem.getClientRects().length) {
    return {
      top: 0,
      left: 0
    };
  }

  // Get document-relative position by adding viewport scroll to viewport-relative gBCR
  var rect = elem.getBoundingClientRect();
  var win = elem.ownerDocument.defaultView;
  return {
    top: rect.top + win.pageYOffset,
    left: rect.left + win.pageXOffset
  };
});
_defineProperty(Utility, "isWPAdminbarVisible", function () {
  return Utility.elemExists(_DOM["default"].WPAdminbar) && window.innerWidth > 600;
});

},{"./DOM":4}],8:[function(require,module,exports){
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
require("./Utils/DOMMethods");
var _Utility = _interopRequireDefault(require("./Utils/Utility"));
var _Topbar = _interopRequireDefault(require("./Components/Topbar"));
var _Header = _interopRequireDefault(require("./Components/Header"));
var _Logo = _interopRequireDefault(require("./Components/Logo"));
var _DOM = _interopRequireDefault(require("./Utils/DOM"));
var _Helpers = _interopRequireDefault(require("./Utils/Helpers"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }
function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }
function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }
function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }
function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }
var _scrollBarlatestTopPosition = /*#__PURE__*/new WeakMap();
var _setupEventListeners = /*#__PURE__*/new WeakMap();
var _onClickScrollOffset = /*#__PURE__*/new WeakMap();
var _onWindowLoad = /*#__PURE__*/new WeakMap();
var _onClickLoad = /*#__PURE__*/new WeakMap();
var _onWindowScroll = /*#__PURE__*/new WeakMap();
var _onWindowResize = /*#__PURE__*/new WeakMap();
var OW_StickyHeader = /*#__PURE__*/_createClass(function OW_StickyHeader() {
  var _this = this;
  _classCallCheck(this, OW_StickyHeader);
  _classPrivateFieldInitSpec(this, _scrollBarlatestTopPosition, {
    writable: true,
    value: void 0
  });
  _defineProperty(this, "start", function () {
    _classPrivateFieldSet(_this, _scrollBarlatestTopPosition, _Utility["default"].scrollBarTopPosition());
    _classPrivateFieldGet(_this, _setupEventListeners).call(_this);
  });
  _classPrivateFieldInitSpec(this, _setupEventListeners, {
    writable: true,
    value: function value() {
      window.addEventListener("load", _classPrivateFieldGet(_this, _onWindowLoad));
      window.addEventListener("hashchange", _classPrivateFieldGet(_this, _onClickLoad));
      window.addEventListener("scroll", _classPrivateFieldGet(_this, _onWindowScroll));
      window.addEventListener("resize", _classPrivateFieldGet(_this, _onWindowResize));
      window.addEventListener("orientationchange", _classPrivateFieldGet(_this, _onWindowResize));
    }
  });
  _classPrivateFieldInitSpec(this, _onClickScrollOffset, {
    writable: true,
    value: function value(event) {
      event.preventDefault();
      event.stopPropagation();
      if (_Helpers["default"].upStickyEffect()) {
        return;
      }
      var stickyOffset = _DOM["default"].headerWrapper.offsetHeight;
      var target = document.querySelector(':target');
      if (target) {
        target.style["scroll-margin-top"] = stickyOffset + 'px';
        target.scrollIntoView({
          top: stickyOffset,
          behavior: 'smooth'
        });
      }
      document.querySelectorAll('a.local[href*="#"]:not([href="#"]), .local a[href*="#"]:not([href="#"]), a.menu-link[href*="#"]:not([href="#"]), a.sidr-class-menu-link[href*="#"]:not([href="#"]), #mobile-dropdown a[href*="#"]:not([href="#"])').forEach(function (navLink) {
        if (!navLink.classList.contains("omw-open-modal") && !navLink.closest(".omw-open-modal") && !navLink.classList.contains("oew-modal-button") && !navLink.closest(".oew-modal-button") && !navLink.classList.contains("opl-link") && !navLink.parentNode.classList.contains("opl-link")) {
          return;
        }
        navLink.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();
          var href = navLink.getAttribute("href");
          var anchorId = '';
          if (href) {
            anchorId = document.querySelector(href);
          }
          if (anchorId) {
            anchorId.style["scroll-margin-top"] = stickyOffset + 'px';
            anchorId.scrollIntoView({
              top: stickyOffset,
              behavior: 'smooth'
            });
          }
        });
      });
    }
  });
  _classPrivateFieldInitSpec(this, _onWindowLoad, {
    writable: true,
    value: function value(e) {
      _this.topbar.createStickyWrapper();
      _this.header.createStickyWrapper();
      _this.header.addVerticalHeaderSticky();
      _this.logo.setMaxHeight();
      _classPrivateFieldGet(_this, _onClickScrollOffset).call(_this, e);
    }
  });
  _classPrivateFieldInitSpec(this, _onClickLoad, {
    writable: true,
    value: function value(e) {
      _classPrivateFieldGet(_this, _onClickScrollOffset).call(_this, e);
    }
  });
  _classPrivateFieldInitSpec(this, _onWindowScroll, {
    writable: true,
    value: function value() {
      if (_Utility["default"].scrollBarTopPosition() != _classPrivateFieldGet(_this, _scrollBarlatestTopPosition)) {
        _this.topbar.sticky();
        _this.header.sticky();
        _this.header.stickyEffects();
        _this.header.addVerticalHeaderSticky();
        _classPrivateFieldSet(_this, _scrollBarlatestTopPosition, _Utility["default"].scrollBarTopPosition());
      }
    }
  });
  _classPrivateFieldInitSpec(this, _onWindowResize, {
    writable: true,
    value: function value() {
      _this.topbar.updateSticky();
      _this.header.updateSticky();
    }
  });
  this.topbar = new _Topbar["default"]();
  this.header = new _Header["default"]();
  this.logo = new _Logo["default"]();
});
"use strict";
var stickyHeader = new OW_StickyHeader();
stickyHeader.start();

},{"./Components/Header":1,"./Components/Logo":2,"./Components/Topbar":3,"./Utils/DOM":4,"./Utils/DOMMethods":5,"./Utils/Helpers":6,"./Utils/Utility":7}]},{},[8])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvc3JjL2pzL0NvbXBvbmVudHMvSGVhZGVyLmpzIiwiYXNzZXRzL3NyYy9qcy9Db21wb25lbnRzL0xvZ28uanMiLCJhc3NldHMvc3JjL2pzL0NvbXBvbmVudHMvVG9wYmFyLmpzIiwiYXNzZXRzL3NyYy9qcy9VdGlscy9ET00uanMiLCJhc3NldHMvc3JjL2pzL1V0aWxzL0RPTU1ldGhvZHMuanMiLCJhc3NldHMvc3JjL2pzL1V0aWxzL0hlbHBlcnMuanMiLCJhc3NldHMvc3JjL2pzL1V0aWxzL1V0aWxpdHkuanMiLCJhc3NldHMvc3JjL2pzL3N0aWNreS1oZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUEsSUFBQSxJQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxRQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQ0EsSUFBQSxRQUFBLEdBQUEsc0JBQUEsQ0FBQSxPQUFBO0FBQXVDLFNBQUEsdUJBQUEsR0FBQSxXQUFBLEdBQUEsSUFBQSxHQUFBLENBQUEsVUFBQSxHQUFBLEdBQUEsZ0JBQUEsR0FBQTtBQUFBLFNBQUEsa0JBQUEsTUFBQSxFQUFBLEtBQUEsYUFBQSxDQUFBLE1BQUEsQ0FBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLEVBQUEsQ0FBQSxVQUFBLFVBQUEsR0FBQSxLQUFBLENBQUEsQ0FBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsV0FBQSxVQUFBLENBQUEsWUFBQSx3QkFBQSxVQUFBLEVBQUEsVUFBQSxDQUFBLFFBQUEsU0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLE1BQUEsRUFBQSxjQUFBLENBQUEsVUFBQSxDQUFBLEdBQUEsR0FBQSxVQUFBO0FBQUEsU0FBQSxhQUFBLFdBQUEsRUFBQSxVQUFBLEVBQUEsV0FBQSxRQUFBLFVBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsQ0FBQSxTQUFBLEVBQUEsVUFBQSxPQUFBLFdBQUEsRUFBQSxpQkFBQSxDQUFBLFdBQUEsRUFBQSxXQUFBLEdBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxXQUFBLGlCQUFBLFFBQUEsbUJBQUEsV0FBQTtBQUFBLFNBQUEsZ0JBQUEsUUFBQSxFQUFBLFdBQUEsVUFBQSxRQUFBLFlBQUEsV0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLGdCQUFBLEdBQUEsRUFBQSxHQUFBLEVBQUEsS0FBQSxJQUFBLEdBQUEsR0FBQSxjQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsSUFBQSxHQUFBLElBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxHQUFBLEVBQUEsR0FBQSxJQUFBLEtBQUEsRUFBQSxLQUFBLEVBQUEsVUFBQSxRQUFBLFlBQUEsUUFBQSxRQUFBLG9CQUFBLEdBQUEsQ0FBQSxHQUFBLElBQUEsS0FBQSxXQUFBLEdBQUE7QUFBQSxTQUFBLGVBQUEsR0FBQSxRQUFBLEdBQUEsR0FBQSxZQUFBLENBQUEsR0FBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSxpQkFBQSxHQUFBLEdBQUEsTUFBQSxDQUFBLEdBQUE7QUFBQSxTQUFBLGFBQUEsS0FBQSxFQUFBLElBQUEsUUFBQSxPQUFBLENBQUEsS0FBQSxrQkFBQSxLQUFBLGtCQUFBLEtBQUEsTUFBQSxJQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxXQUFBLE9BQUEsSUFBQSxLQUFBLFNBQUEsUUFBQSxHQUFBLEdBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxLQUFBLEVBQUEsSUFBQSxvQkFBQSxPQUFBLENBQUEsR0FBQSx1QkFBQSxHQUFBLFlBQUEsU0FBQSw0REFBQSxJQUFBLGdCQUFBLE1BQUEsR0FBQSxNQUFBLEVBQUEsS0FBQTtBQUFBLFNBQUEsMkJBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLElBQUEsMEJBQUEsQ0FBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEtBQUE7QUFBQSxTQUFBLDJCQUFBLEdBQUEsRUFBQSxp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T0FBQTtBQUNBLElBQUEsT0FBQSxHQUFBLHNCQUFBLENBQUEsT0FBQTtBQUE4QixTQUFBLHVCQUFBLEdBQUEsV0FBQSxHQUFBLElBQUEsR0FBQSxDQUFBLFVBQUEsR0FBQSxHQUFBLGdCQUFBLEdBQUE7QUFBQSxTQUFBLGtCQUFBLE1BQUEsRUFBQSxLQUFBLGFBQUEsQ0FBQSxNQUFBLENBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxFQUFBLENBQUEsVUFBQSxVQUFBLEdBQUEsS0FBQSxDQUFBLENBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxVQUFBLFdBQUEsVUFBQSxDQUFBLFlBQUEsd0JBQUEsVUFBQSxFQUFBLFVBQUEsQ0FBQSxRQUFBLFNBQUEsTUFBQSxDQUFBLGNBQUEsQ0FBQSxNQUFBLEVBQUEsY0FBQSxDQUFBLFVBQUEsQ0FBQSxHQUFBLEdBQUEsVUFBQTtBQUFBLFNBQUEsYUFBQSxXQUFBLEVBQUEsVUFBQSxFQUFBLFdBQUEsUUFBQSxVQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLENBQUEsU0FBQSxFQUFBLFVBQUEsT0FBQSxXQUFBLEVBQUEsaUJBQUEsQ0FBQSxXQUFBLEVBQUEsV0FBQSxHQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsV0FBQSxpQkFBQSxRQUFBLG1CQUFBLFdBQUE7QUFBQSxTQUFBLGdCQUFBLFFBQUEsRUFBQSxXQUFBLFVBQUEsUUFBQSxZQUFBLFdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLEdBQUEsUUFBQSxHQUFBLEdBQUEsWUFBQSxDQUFBLEdB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Ozs7Ozs7Ozs7QUNaTCxJQUFBLElBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLFFBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFDQSxJQUFBLFFBQUEsR0FBQSxzQkFBQSxDQUFBLE9BQUE7QUFBdUMsU0FBQSx1QkFBQSxHQUFBLFdBQUEsR0FBQSxJQUFBLEdBQUEsQ0FBQSxVQUFBLEdBQUEsR0FBQSxnQkFBQSxHQUFBO0FBQUEsU0FBQSxrQkFBQSxNQUFBLEVBQUEsS0FBQSxhQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsS0FBQSxDQUFBLE1BQUEsRUFBQSxDQUFBLFVBQUEsVUFBQSxHQUFBLEtBQUEsQ0FBQSxDQUFBLEdBQUEsVUFBQSxDQUFBLFVBQUEsR0FBQSxVQUFBLENBQUEsVUFBQSxXQUFBLFVBQUEsQ0FBQSxZQUFBLHdCQUFBLFVBQUEsRUFBQSxVQUFBLENBQUEsUUFBQSxTQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsTUFBQSxFQUFBLGNBQUEsQ0FBQSxVQUFBLENBQUEsR0FBQSxHQUFBLFVBQUE7QUFBQSxTQUFBLGFBQUEsV0FBQSxFQUFBLFVBQUEsRUFBQSxXQUFBLFFBQUEsVUFBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxDQUFBLFNBQUEsRUFBQSxVQUFBLE9BQUEsV0FBQSxFQUFBLGlCQUFBLENBQUEsV0FBQSxFQUFBLFdBQUEsR0FBQSxNQUFBLENBQUEsY0FBQSxDQUFBLFdBQUEsaUJBQUEsUUFBQSxtQkFBQSxXQUFBO0FBQUEsU0FBQSxnQkFBQSxRQUFBLEVBQUEsV0FBQSxVQUFBLFFBQUEsWUFBQSxXQUFBLGVBQUEsU0FBQTtBQUFBLFNBQUEsMkJBQUEsR0FBQSxFQUFBLFVBQUEsRUFBQSxLQUFBLElBQUEsMEJBQUEsQ0FBQSxHQUFBLEVBQUEsVUFBQSxHQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxFQUFBLEtBQUE7QUFBQSxTQUFBLDJCQUFBLEdBQUEsRUFBQSxpQkFBQSxRQUFBLGlCQUFBLENBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxTQUFBO0FBQUEsU0FBQSxnQkFBQSxHQUFBLEVBQUEsR0FBQSxFQUFBLEtBQUEsSUFBQSxHQUFBLEdBQUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLElBQUEsR0FBQSxJQUFBLE1BQUEsQ0FBQSxjQUFBLENBQUEsR0FBQSxFQUFBLEdBQUEsSUFBQSxLQUFBLEVBQUEsS0FBQSxFQUFBLFVBQUEsUUFBQSxZQUFBLFFBQUEsUUFBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxJQUFBLEtBQUEsV0FBQSxHQUFBO0FBQUEsU0FBQSxlQUFBLEdBQUEsUUFBQSxHQUFBLEdBQUEsWUFBQSxDQUFBLEdBQUEsb0JBQUEsT0FBQSxDQUFBLEdBQUEsaUJBQUEsR0FBQSxHQUFBLE1BQUEsQ0FBQSxHQUFBO0FBQUEsU0FBQSxhQUFBLEtBQUEsRUFBQSxJQUFBLFFBQUEsT0FBQSxDQUFBLEtBQUEsa0JBQUEsS0FBQSxrQkFBQSxLQUFBLE1BQUEsSUFBQSxHQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsV0FBQSxPQUFBLElBQUEsS0FBQSxTQUFBLFFBQUEsR0FBQSxHQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsS0FBQSxFQUFBLElBQUEsb0JBQUEsT0FBQSxDQUFBLEdBQUEsdUJBQUEsR0FBQSxZQUFBLFNBQUEsNERBQUEsSUFBQSxnQkFBQSxNQUFBLEdBQUEsTUFBQSxFQUFBLEtBQUE7QUFBQSxTQUFBLHNCQUFBLFFBQUEsRUFBQSxVQUFBLFFBQUEsVUFBQSxHQUFBLDRCQUFBLENBQUEsUUFBQSxFQUFBLFVBQUEsaUJBQUEsd0JBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEsNkJBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxNQUFBLFNBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxRQUFBLGVBQUEsU0FBQSxtQkFBQSxNQUFBLCtDQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQTtBQUFBLFNBQUEseUJBQUEsUUFBQSxFQUFBLFVBQUEsUUFBQSxVQUFBLENBQUEsR0FBQSxXQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFBLFFBQUEs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QSxHQUFBLE9BQUEsR0FBQSxJQUFBLEdBQUEsSUFBQSxNQUFBLENBQUEsY0FBQSxDQUFBLEdBQUEsRUFBQSxHQUFBLElBQUEsS0FBQSxFQUFBLEtBQUEsRUFBQSxVQUFBLFFBQUEsWUFBQSxRQUFBLFFBQUEsb0JBQUEsR0FBQSxDQUFBLEdBQUEsSUFBQSxLQUFBLFdBQUEsR0FBQTtBQUFBLFNBQUEsZUFBQSxHQUFBLFFBQUEsR0FBQSxHQUFBLFlBQUEsQ0FBQSxHQUFBLG9CQUFBLE9BQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsR0FBQSxNQUFBLENBQUEsR0FBQTtBQUFBLFNBQUEsYUFBQSxLQUFBLEVBQUEsSUFBQSxRQUFBLE9BQUEsQ0FBQSxLQUFBLGtCQUFBLEtBQUEsa0JBQUEsS0FBQSxNQUFBLElBQUEsR0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLFdBQUEsT0FBQSxJQUFBLEtBQUEsU0FBQSxRQUFBLEdBQUEsR0FBQSxJQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsRUFBQSxJQUFBLG9CQUFBLE9BQUEsQ0FBQSxHQUFBLHVCQUFBLEdBQUEsWUFBQSxTQUFBLDREQUFBLElBQUEsZ0JBQUEsTUFBQSxHQUFBLE1BQUEsRUFBQSxLQUFBO0FBQUEsU0FBQSwyQkFBQSxHQUFBLEVBQUEsVUFBQSxFQUFBLEtBQUEsSUFBQSwwQkFBQSxDQUFBLEdBQUEsRUFBQSxVQUFBLEdBQUEsVUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLEVBQUEsS0FBQTtBQUFBLFNBQUEsMkJBQUEsR0FBQSxFQUFBLGlCQUFBLFFBQUEsaUJBQUEsQ0FBQSxHQUFBLENBQUEsR0FBQSxlQUFBLFNBQUE7QUFBQSxTQUFBLHNCQUFBLFFBQUEsRUFBQSxVQUFBLFFBQUEsVUFBQSxHQUFBLDRCQUFBLENBQUEsUUFBQSxFQUFBLFVBQUEsaUJBQUEsd0JBQUEsQ0FBQSxRQUFBLEVBQUEsVUFBQTtBQUFBLFNBQUEseUJBQUEsUUFBQSxFQUFBLFVBQUEsUUFBQSxVQUFBLENBQUEsR0FBQSxXQUFBLFVBQUEsQ0FBQSxHQUFBLENBQUEsSUFBQSxDQUFB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LFlBQVksQ0FBQyxDQUFDO01BQzFCLEtBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUI7RUFBQztFQXBHRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksa0JBQU0sQ0FBQyxDQUFDO0VBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxrQkFBTSxDQUFDLENBQUM7RUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGdCQUFJLENBQUMsQ0FBQztBQUMxQixDQUFDO0FBb0dKLFlBQVk7QUFFYixJQUFNLFlBQVksR0FBRyxJQUFJLGVBQWUsQ0FBQyxDQUFDO0FBQzFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBET00gZnJvbSBcIi4uL1V0aWxzL0RPTVwiO1xuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL1V0aWxzL1V0aWxpdHlcIjtcbmltcG9ydCBIZWxwZXJzIGZyb20gXCIuLi9VdGlscy9IZWxwZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciB7XG4gICAgI2xhc3RTY3JvbEJhclBvc2l0aW9uID0gMDtcblxuICAgIHN0aWNreSA9ICgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuI25vU3RpY2t5KCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKERPTS5oZWFkZXJXcmFwcGVyIHx8IERPTS5zaXRlSGVhZGVyIHx8IERPTS5oZWFkZXIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gVXRpbGl0eS5lbGVtT2Zmc2V0KERPTS5oZWFkZXJXcmFwcGVyKS50b3AgLSBIZWFkZXIuZ2V0T2Zmc2V0KCk7XG4gICAgICAgIGxldCBzbGlkZVN0aWNreUN1cnJlbnRQb3NpdGlvbiA9IGN1cnJlbnRQb3NpdGlvbjtcblxuICAgICAgICAvLyBJZiBzbGlkZSBlZmZlY3RcbiAgICAgICAgaWYgKEhlbHBlcnMuc2xpZGVTdGlja3lFZmZlY3QoKSAmJiAhRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlclwiKSkge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gY3VycmVudFBvc2l0aW9uICsgRE9NLmhlYWRlcldyYXBwZXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBzY3JvbGxpbmdcbiAgICAgICAgaWYgKFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKSAhPT0gMCAmJiBVdGlsaXR5LnNjcm9sbEJhclRvcFBvc2l0aW9uKCkgPj0gY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xuXG4gICAgICAgICAgICBET00uaGVhZGVyLnN0eWxlLnRvcCA9IEhlYWRlci5nZXRPZmZzZXQoKSArIFwicHhcIjtcbiAgICAgICAgICAgIERPTS5oZWFkZXIuc3R5bGUud2lkdGggPSBET00uaGVhZGVyV3JhcHBlci5vZmZzZXRXaWR0aCArIFwicHhcIjtcblxuICAgICAgICAgICAgLy8gSWYgc2xpZGUgZWZmZWN0XG4gICAgICAgICAgICBpZiAoSGVscGVycy5zbGlkZVN0aWNreUVmZmVjdCgpICYmICFET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikpIHtcbiAgICAgICAgICAgICAgICBET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIElmIGlzIG5vdCBzbGlkZSBlZmZlY3RcbiAgICAgICAgICAgIGlmICghSGVscGVycy5zbGlkZVN0aWNreUVmZmVjdCgpKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHN0aWNreSB3cmFwIGNsYXNzXG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcblxuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIElmIHNsaWRlIGVmZmVjdFxuICAgICAgICBpZiAoSGVscGVycy5zbGlkZVN0aWNreUVmZmVjdCgpICYmICFET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikpIHtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBzdGlja3kgY2xhc3Mgd2hlbiB3aW5kb3cgdG9wXG4gICAgICAgICAgICBpZiAoVXRpbGl0eS5zY3JvbGxCYXJUb3BQb3NpdGlvbigpIDw9IHNsaWRlU3RpY2t5Q3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHN0aWNreSB3cmFwIGNsYXNzXG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcblxuICAgICAgICAgICAgICAgIERPTS5oZWFkZXIuc3R5bGUudG9wID0gXCJcIjtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnN0eWxlLndpZHRoID0gXCJcIjtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBzbGlkZSBlZmZlY3QgY2xhc3NcbiAgICAgICAgICAgICAgICBET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVTdGlja3kgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJldHVybiBpZiBpcyB2ZXJ0aWNhbCBoZWFkZXIgc3R5bGVcbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTYwICYmIERPTS5zaXRlSGVhZGVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLmhlYWRlcldyYXBwZXI/LmNsYXNzTGlzdC5jb250YWlucyhcImlzLXN0aWNreVwiKSAmJiAhIURPTS5oZWFkZXIpIHtcbiAgICAgICAgICAgIGlmICggRE9NLmhlYWRlcldyYXBwZXIgKSB7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gRE9NLmhlYWRlci5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoVXRpbGl0eS5zY3JvbGxCYXJUb3BQb3NpdGlvbigpICE9PSAwKSB7XG4gICAgICAgICAgICBpZiAoISFET00uaGVhZGVyICYmICEhRE9NLmhlYWRlcldyYXBwZXIpIHtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnN0eWxlLnRvcCA9IEhlYWRlci5nZXRPZmZzZXQoKSArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBET00uaGVhZGVyLnN0eWxlLndpZHRoID0gRE9NLmhlYWRlcldyYXBwZXIub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYWRkVmVydGljYWxIZWFkZXJTdGlja3kgPSAoKSA9PiB7XG4gICAgICAgIC8vIFJldHVybiBpZiBpcyBub3QgdmVydGljYWwgaGVhZGVyIHN0eWxlIGFuZCB0cmFuc3BhcmVudFxuICAgICAgICBpZiAoIURPTS52ZXJ0aWNhbEhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtdHJhbnNwYXJlbnRcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBpZiBubyBoZWFkZXIgd3JhcHBlclxuICAgICAgICBpZiAoIURPTS5oZWFkZXJXcmFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gVXRpbGl0eS5lbGVtT2Zmc2V0KERPTS5oZWFkZXJXcmFwcGVyKS50b3A7XG5cbiAgICAgICAgLy8gV2hlbiBzY3JvbGxpbmdcbiAgICAgICAgaWYgKFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKSAhPT0gMCAmJiBVdGlsaXR5LnNjcm9sbEJhclRvcFBvc2l0aW9uKCkgPj0gY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBET00uaGVhZGVyV3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiaXMtc3RpY2t5XCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZShcImlzLXN0aWNreVwiKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBzdGlja3lFZmZlY3RzID0gKCkgPT4ge1xuICAgICAgICAvLyBSZXR1cm4gaWYgaXMgdmVydGljYWwgaGVhZGVyIHN0eWxlXG4gICAgICAgIGlmIChET00uc2l0ZUhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwidmVydGljYWwtaGVhZGVyXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZXR1cm4gaWYgbm8gaGVhZGVyIHdyYXBwZXJcbiAgICAgICAgaWYgKCFET00uaGVhZGVyV3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgc2hvdyB1cCBlZmZlY3RcbiAgICAgICAgaWYgKEhlbHBlcnMudXBTdGlja3lFZmZlY3QoKSkge1xuICAgICAgICAgICAgY29uc3QgY3VycmVudFBvc2l0aW9uID0gVXRpbGl0eS5lbGVtT2Zmc2V0KERPTS5oZWFkZXJXcmFwcGVyKS50b3AgKyBET00uaGVhZGVyV3JhcHBlci5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBjb25zdCBzY3JvbGxCYXJUb3BQb3NpdGlvbiA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3A7XG5cbiAgICAgICAgICAgIGlmIChzY3JvbGxCYXJUb3BQb3NpdGlvbiA+PSB0aGlzLiNsYXN0U2Nyb2xCYXJQb3NpdGlvbiAmJiBzY3JvbGxCYXJUb3BQb3NpdGlvbiA+PSBjdXJyZW50UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiaGVhZGVyLWRvd25cIik7XG4gICAgICAgICAgICAgICAgRE9NLnNpdGVIZWFkZXIuY2xhc3NMaXN0LmFkZChcImhlYWRlci11cFwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgRE9NLnNpdGVIZWFkZXIuY2xhc3NMaXN0LnJlbW92ZShcImhlYWRlci11cFwiKTtcbiAgICAgICAgICAgICAgICBET00uc2l0ZUhlYWRlci5jbGFzc0xpc3QuYWRkKFwiaGVhZGVyLWRvd25cIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuI2xhc3RTY3JvbEJhclBvc2l0aW9uID0gc2Nyb2xsQmFyVG9wUG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3JlYXRlU3RpY2t5V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgLy8gQ3JlYXRlIGhlYWRlciBzdGlja3kgd3JhcHBlciBlbGVtZW50XG4gICAgICAgIERPTS5oZWFkZXJXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzaXRlLWhlYWRlci1zdGlja3ktd3JhcHBlclwiKTtcbiAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJvY2VhbndwLXN0aWNreS1oZWFkZXItaG9sZGVyXCIpO1xuXG4gICAgICAgIC8vIFdyYXAgaGVhZGVyIHN0aWNreSB3cmFwcGVyIGFyb3VuZCBoZWFkZXJcbiAgICAgICAgaWYgKCEhRE9NLmhlYWRlcikge1xuICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXI/Lm9jZWFuV3JhcEFsbChET00uaGVhZGVyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBoZWFkZXIgc3RpY2t5IHdyYXBwZXIgaGVpZ2h0XG4gICAgICAgIGlmICghRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcInZlcnRpY2FsLWhlYWRlclwiKSkge1xuICAgICAgICAgICAgaWYgKCEhRE9NLmhlYWRlcldyYXBwZXIgJiYgISFET00uaGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgRE9NLmhlYWRlcldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gRE9NLmhlYWRlci5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgc3RhdGljIGdldE9mZnNldCA9ICgpID0+IHtcbiAgICAgICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICAgICAgLy8gQWRkIFdQIEFkbWluYmFyIG9mZnNldFxuICAgICAgICBpZiAoVXRpbGl0eS5pc1dQQWRtaW5iYXJWaXNpYmxlKCkpIHtcbiAgICAgICAgICAgIGlmICghIURPTS5XUEFkbWluYmFyKSB7XG4gICAgICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgRE9NLldQQWRtaW5iYXIub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT2Zmc2V0IHRvcGJhciBzdGlja3lcbiAgICAgICAgaWYgKEhlbHBlcnMuaXNUb3BiYXJTdGlja3lFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIGlmICghIURPTS50b3BiYXIpIHtcbiAgICAgICAgICAgICAgICBvZmZzZXQgPSBvZmZzZXQgKyBET00udG9wYmFyLm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfTtcblxuICAgICNub1N0aWNreSA9ICgpID0+IHtcbiAgICAgICAgaWYgKERPTS5zaXRlSGVhZGVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA8PSA5NjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIURPTS5oZWFkZXJXcmFwcGVyIHx8IEhlbHBlcnMuaXNNb2JpbGVTdGlja3lEaXNhYmxlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICFET00uaGVhZGVyV3JhcHBlciB8fCBIZWxwZXJzLmlzTW9iaWxlU3RpY2t5RGlzYWJsZWQoKSB8fCAhRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IERPTSBmcm9tIFwiLi4vVXRpbHMvRE9NXCI7XG5pbXBvcnQgSGVscGVycyBmcm9tIFwiLi4vVXRpbHMvSGVscGVyc1wiO1xuaW1wb3J0IFV0aWxpdHkgZnJvbSBcIi4uL1V0aWxzL1V0aWxpdHlcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vSGVhZGVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ28ge1xuICAgICNsb2dvO1xuICAgICNjdXN0b21Mb2dvO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2xvZ28gPSBET00ubG9nbztcbiAgICAgICAgdGhpcy4jY3VzdG9tTG9nbyA9IERPTS5jdXN0b21Mb2dvO1xuICAgIH1cblxuICAgIHNldE1heEhlaWdodCA9ICgpID0+IHtcbiAgICAgICAgLy8gSWYgaGVhZGVyIHN0eWxlIGlzIGNlbnRlclxuICAgICAgICBpZiAoRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcImNlbnRlci1oZWFkZXJcIikpIHtcbiAgICAgICAgICAgIHRoaXMuI2xvZ28gPSBET00ubWlkZGxlTG9nbztcbiAgICAgICAgICAgIHRoaXMuI2N1c3RvbUxvZ28gPSBET00uY3VzdG9tTWlkZGxlTG9nbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJldHVybiBpZiBub3Qgc2hyaW5rIHN0eWxlIGFuZCBvbiBzb21lIGhlYWRlciBzdHlsZXNcbiAgICAgICAgaWYgKHRoaXMuI3JldHVybk9uU29tZUhlYWRlclN0eWxlcygpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBtb2JpbGUgbG9nbyBleGlzdHNcbiAgICAgICAgaWYgKERPTS5sb2dvV3JhcHBlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGFzLXJlc3BvbnNpdmUtbG9nb1wiKSAmJiBVdGlsaXR5LmVsZW1WaXNpYmxlKERPTS5tb2JpbGVMb2dvKSkge1xuICAgICAgICAgICAgdGhpcy4jY3VzdG9tTG9nbyA9IERPTS5tb2JpbGVMb2dvO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gR2V0IGxvZ28gcG9zaXRpb25cbiAgICAgICAgbGV0IGluaXRpYWxMb2dvSGVpZ2h0O1xuICAgICAgICBpZiAodGhpcy4jY3VzdG9tTG9nbykge1xuICAgICAgICAgICAgaW5pdGlhbExvZ29IZWlnaHQgPSB0aGlzLiNjdXN0b21Mb2dvLm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBjdXJyZW50UG9zaXRpb24gPSBVdGlsaXR5LmVsZW1PZmZzZXQoRE9NLmhlYWRlcldyYXBwZXIpLnRvcCAtIEhlYWRlci5nZXRPZmZzZXQoKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBXaGVuIHNjcm9sbGluZ1xuICAgICAgICAgICAgaWYgKFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKSAhPT0gMCAmJiBVdGlsaXR5LnNjcm9sbEJhclRvcFBvc2l0aW9uKCkgPj0gY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiNsb2dvKS5mb3JFYWNoKChlbGVtKSA9PiAoZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBIZWxwZXJzLmdldFNocmlua0xvZ29IZWlnaHQoKSArIFwicHhcIikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghIWluaXRpYWxMb2dvSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbSh0aGlzLiNsb2dvKS5mb3JFYWNoKChlbGVtKSA9PiAoZWxlbS5zdHlsZS5tYXhIZWlnaHQgPSBpbml0aWFsTG9nb0hlaWdodCArIFwicHhcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgI3JldHVybk9uU29tZUhlYWRlclN0eWxlcyA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICFIZWxwZXJzLnNocmlua1N0aWNreVN0eWxlKCkgfHxcbiAgICAgICAgICAgICF0aGlzLiNsb2dvIHx8XG4gICAgICAgICAgICAhRE9NLmhlYWRlcldyYXBwZXIgfHxcbiAgICAgICAgICAgIEhlbHBlcnMuaXNNb2JpbGVTdGlja3lEaXNhYmxlZCgpIHx8XG4gICAgICAgICAgICBIZWxwZXJzLm1hbnVhbFN0aWNreSgpIHx8XG4gICAgICAgICAgICAhRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSB8fFxuICAgICAgICAgICAgRE9NLnNpdGVIZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcInRvcC1oZWFkZXJcIikgfHxcbiAgICAgICAgICAgIERPTS5zaXRlSGVhZGVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ2ZXJ0aWNhbC1oZWFkZXJcIikgfHxcbiAgICAgICAgICAgIChET00uc2l0ZUhlYWRlcj8uY2xhc3NMaXN0LmNvbnRhaW5zKFwibWVkaXVtLWhlYWRlclwiKSAmJiBET00uYm90dG9tSGVhZGVyLmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSlcbiAgICAgICAgKTtcbiAgICB9O1xufVxuIiwiaW1wb3J0IERPTSBmcm9tIFwiLi4vVXRpbHMvRE9NXCI7XG5pbXBvcnQgVXRpbGl0eSBmcm9tIFwiLi4vVXRpbHMvVXRpbGl0eVwiO1xuaW1wb3J0IEhlbHBlcnMgZnJvbSBcIi4uL1V0aWxzL0hlbHBlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9wYmFyIHtcbiAgICBzdGlja3kgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLiNub1N0aWNreSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY3VycmVudFBvc2l0aW9uID0gMDtcblxuICAgICAgICBpZiAoISFET00udG9wYmFyV3JhcHBlcikge1xuICAgICAgICAgICAgY3VycmVudFBvc2l0aW9uID0gVXRpbGl0eS5lbGVtT2Zmc2V0KERPTS50b3BiYXJXcmFwcGVyKS50b3AgLSB0aGlzLmdldE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hlbiBzY3JvbGxpbmdcbiAgICAgICAgaWYgKFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKSAhPT0gMCAmJiBVdGlsaXR5LnNjcm9sbEJhclRvcFBvc2l0aW9uKCkgPj0gY3VycmVudFBvc2l0aW9uKSB7XG4gICAgICAgICAgICBET00udG9wYmFyV3JhcHBlcj8uY2xhc3NMaXN0LmFkZChcImlzLXN0aWNreVwiKTtcblxuICAgICAgICAgICAgRE9NLnRvcGJhci5zdHlsZS50b3AgPSB0aGlzLmdldE9mZnNldCgpICsgXCJweFwiO1xuICAgICAgICAgICAgRE9NLnRvcGJhci5zdHlsZS53aWR0aCA9IERPTS50b3BiYXJXcmFwcGVyPy5vZmZzZXRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIERPTS50b3BiYXJXcmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKFwiaXMtc3RpY2t5XCIpO1xuXG4gICAgICAgICAgICBET00udG9wYmFyLnN0eWxlLnRvcCA9IFwiXCI7XG4gICAgICAgICAgICBET00udG9wYmFyLnN0eWxlLndpZHRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1cGRhdGVTdGlja3kgPSAoKSA9PiB7XG4gICAgICAgIGlmICghRE9NLnRvcGJhciB8fCAhRE9NLnRvcGJhcldyYXBwZXIgfHwgIUhlbHBlcnMuaXNUb3BiYXJTdGlja3lFbmFibGVkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghRE9NLnRvcGJhcldyYXBwZXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaXMtc3RpY2t5XCIpKSB7XG4gICAgICAgICAgICBET00udG9wYmFyV3JhcHBlci5zdHlsZS5oZWlnaHQgPSBET00udG9wYmFyLm9mZnNldEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChVdGlsaXR5LnNjcm9sbEJhclRvcFBvc2l0aW9uKCkgIT09IDApIHtcbiAgICAgICAgICAgIERPTS50b3BiYXIuc3R5bGUudG9wID0gdGhpcy5nZXRPZmZzZXQoKSArIFwicHhcIjtcbiAgICAgICAgICAgIERPTS50b3BiYXIuc3R5bGUud2lkdGggPSBET00udG9wYmFyV3JhcHBlcj8ub2Zmc2V0V2lkdGggKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3JlYXRlU3RpY2t5V3JhcHBlciA9ICgpID0+IHtcbiAgICAgICAgaWYgKCFIZWxwZXJzLmlzVG9wYmFyU3RpY2t5RW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgdG9wYmFyIHN0aWNreSB3cmFwcGVyIGVsZW1lbnRcbiAgICAgICAgRE9NLnRvcGJhcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBET00udG9wYmFyV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvcC1iYXItc3RpY2t5LXdyYXBwZXJcIik7XG4gICAgICAgIERPTS50b3BiYXJXcmFwcGVyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwib2NlYW53cC1zdGlja3ktdG9wLWJhci1ob2xkZXJcIik7XG5cbiAgICAgICAgLy8gV3JhcCB0b3BiYXIgc3RpY2t5IHdyYXBwZXIgYXJvdW5kIHRvcGJhclxuICAgICAgICBpZiAoISFET00udG9wYmFyKSB7XG4gICAgICAgICAgICBET00udG9wYmFyV3JhcHBlcj8ub2NlYW5XcmFwQWxsKERPTS50b3BiYXIpO1xuXG4gICAgICAgICAgICAvLyBTZXQgdG9wYmFyIHN0aWNreSB3cmFwcGVyIGhlaWdodFxuICAgICAgICAgICAgRE9NLnRvcGJhcldyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gRE9NLnRvcGJhci5vZmZzZXRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgZ2V0T2Zmc2V0ID0gKCkgPT4ge1xuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcblxuICAgICAgICAvLyBBZGQgV1AgQWRtaW5iYXIgb2Zmc2V0XG4gICAgICAgIGlmIChVdGlsaXR5LmlzV1BBZG1pbmJhclZpc2libGUoKSkge1xuICAgICAgICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgRE9NLldQQWRtaW5iYXI/Lm9mZnNldEhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XG4gICAgfTtcblxuICAgICNub1N0aWNreSA9ICgpID0+ICFIZWxwZXJzLmlzVG9wYmFyU3RpY2t5RW5hYmxlZCgpIHx8ICFET00udG9wYmFyIHx8IEhlbHBlcnMuaXNNb2JpbGVTdGlja3lEaXNhYmxlZCgpO1xufVxuIiwiaW1wb3J0IEhlbHBlcnMgZnJvbSBcIi4vSGVscGVyc1wiO1xuXG5jb25zdCBET00gPSB7XG4gICAgV1BBZG1pbmJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN3cGFkbWluYmFyXCIpLFxuICAgIHRvcGJhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b3AtYmFyLXdyYXBcIiksXG4gICAgc2l0ZUhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlclwiKSxcbiAgICB2ZXJ0aWNhbEhlYWRlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWhlYWRlci52ZXJ0aWNhbC1oZWFkZXJcIiksXG4gICAgYm90dG9tSGVhZGVyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJvdHRvbS1oZWFkZXItd3JhcFwiKSxcbiAgICBsb2dvV3JhcHBlcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWxvZ29cIiksXG4gICAgbG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiNzaXRlLWxvZ28gaW1nXCIpLFxuICAgIGN1c3RvbUxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2l0ZS1sb2dvIC5jdXN0b20tbG9nb1wiKSxcbiAgICBtaWRkbGVMb2dvOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1pZGRsZS1zaXRlLWxvZ28gaW1nXCIpLFxuICAgIGN1c3RvbU1pZGRsZUxvZ286IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWlkZGxlLXNpdGUtbG9nbyAuY3VzdG9tLWxvZ29cIiksXG4gICAgbW9iaWxlTG9nbzogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaXRlLWxvZ28gLnJlc3BvbnNpdmUtbG9nb1wiKSxcbn07XG5cbkRPTS5nZXRIZWFkZXIgPSAoKSA9PiB7XG4gICAgbGV0IGhlYWRlckNsYXNzO1xuXG4gICAgLy8gSWYgbWFudWFsIHN0aWNreVxuICAgIGlmIChIZWxwZXJzLm1hbnVhbFN0aWNreSgpKSB7XG4gICAgICAgIGhlYWRlckNsYXNzID0gXCIub3dwLXN0aWNreVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlckNsYXNzID0gXCIjc2l0ZS1oZWFkZXJcIjtcbiAgICB9XG5cbiAgICAvLyBJZiB0b3AgaGVhZGVyIHN0eWxlXG4gICAgaWYgKERPTS5zaXRlSGVhZGVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b3AtaGVhZGVyXCIpKSB7XG4gICAgICAgIGhlYWRlckNsYXNzID0gXCIjc2l0ZS1oZWFkZXIgLmhlYWRlci10b3BcIjtcbiAgICB9XG5cbiAgICAvLyBNZWRpdW0gaGVhZGVyIHN0eWxlXG4gICAgaWYgKERPTS5zaXRlSGVhZGVyPy5jbGFzc0xpc3QuY29udGFpbnMoXCJtZWRpdW0taGVhZGVyXCIpICYmIERPTS5ib3R0b21IZWFkZXI/LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkLXNjcm9sbFwiKSkge1xuICAgICAgICBoZWFkZXJDbGFzcyA9IFwiLmJvdHRvbS1oZWFkZXItd3JhcFwiO1xuICAgIH1cblxuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGhlYWRlckNsYXNzKTtcbn07XG5cbkRPTS5oZWFkZXIgPSBET00uZ2V0SGVhZGVyKCk7XG5cbmV4cG9ydCBkZWZhdWx0IERPTTtcbiIsImV4cG9ydCBkZWZhdWx0ICgoKSA9PiB7XG4gICAgLy8gV3JhcCBhbiBIVE1MRWxlbWVudCBhcm91bmQgZWFjaCBlbGVtZW50IGluIGFuIEhUTUxFbGVtZW50IGFycmF5LlxuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5vY2VhbldyYXAgPSBmdW5jdGlvbiAoZWxtcykge1xuICAgICAgICAvLyBDb252ZXJ0IGBlbG1zYCB0byBhbiBhcnJheSwgaWYgbmVjZXNzYXJ5LlxuICAgICAgICBpZiAoIWVsbXMubGVuZ3RoKSBlbG1zID0gW2VsbXNdO1xuXG4gICAgICAgIC8vIExvb3BzIGJhY2t3YXJkcyB0byBwcmV2ZW50IGhhdmluZyB0byBjbG9uZSB0aGUgd3JhcHBlciBvbiB0aGVcbiAgICAgICAgLy8gZmlyc3QgZWxlbWVudCAoc2VlIGBjaGlsZGAgYmVsb3cpLlxuICAgICAgICBmb3IgKGxldCBpID0gZWxtcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBpID4gMCA/IHRoaXMuY2xvbmVOb2RlKHRydWUpIDogdGhpcztcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZWxtc1tpXTtcblxuICAgICAgICAgICAgLy8gQ2FjaGUgdGhlIGN1cnJlbnQgcGFyZW50IGFuZCBzaWJsaW5nLlxuICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgICAgIGNvbnN0IHNpYmxpbmcgPSBlbC5uZXh0U2libGluZztcblxuICAgICAgICAgICAgLy8gV3JhcCB0aGUgZWxlbWVudCAoaXMgYXV0b21hdGljYWxseSByZW1vdmVkIGZyb20gaXRzIGN1cnJlbnRcbiAgICAgICAgICAgIC8vIHBhcmVudCkuXG4gICAgICAgICAgICBjaGlsZC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBlbGVtZW50IGhhZCBhIHNpYmxpbmcsIGluc2VydCB0aGUgd3JhcHBlciBiZWZvcmVcbiAgICAgICAgICAgIC8vIHRoZSBzaWJsaW5nIHRvIG1haW50YWluIHRoZSBIVE1MIHN0cnVjdHVyZTsgb3RoZXJ3aXNlLCBqdXN0XG4gICAgICAgICAgICAvLyBhcHBlbmQgaXQgdG8gdGhlIHBhcmVudC5cbiAgICAgICAgICAgIGlmIChzaWJsaW5nKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Lmluc2VydEJlZm9yZShjaGlsZCwgc2libGluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gV3JhcCBhbiBIVE1MRWxlbWVudCBhcm91bmQgYW5vdGhlciBIVE1MRWxlbWVudCBvciBhbiBhcnJheSBvZiB0aGVtLlxuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5vY2VhbldyYXBBbGwgPSBmdW5jdGlvbiAoZWxtcykge1xuICAgICAgICBjb25zdCBlbCA9ICEhZWxtcyAmJiBlbG1zLmxlbmd0aCA/IGVsbXNbMF0gOiBlbG1zO1xuXG4gICAgICAgIC8vIENhY2hlIHRoZSBjdXJyZW50IHBhcmVudCBhbmQgc2libGluZyBvZiB0aGUgZmlyc3QgZWxlbWVudC5cbiAgICAgICAgY29uc3QgcGFyZW50ID0gZWwucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3Qgc2libGluZyA9IGVsLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIC8vIFdyYXAgdGhlIGZpcnN0IGVsZW1lbnQgKGlzIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGl0c1xuICAgICAgICAvLyBjdXJyZW50IHBhcmVudCkuXG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgICAgIC8vIFdyYXAgYWxsIG90aGVyIGVsZW1lbnRzIChpZiBhcHBsaWNhYmxlKS4gRWFjaCBlbGVtZW50IGlzXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIGl0cyBjdXJyZW50IHBhcmVudCBhbmQgZnJvbSB0aGUgZWxtc1xuICAgICAgICAvLyBhcnJheS5cbiAgICAgICAgd2hpbGUgKGVsbXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGVsbXNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgdGhlIGZpcnN0IGVsZW1lbnQgaGFkIGEgc2libGluZywgaW5zZXJ0IHRoZSB3cmFwcGVyIGJlZm9yZSB0aGVcbiAgICAgICAgLy8gc2libGluZyB0byBtYWludGFpbiB0aGUgSFRNTCBzdHJ1Y3R1cmU7IG90aGVyd2lzZSwganVzdCBhcHBlbmQgaXRcbiAgICAgICAgLy8gdG8gdGhlIHBhcmVudC5cbiAgICAgICAgaWYgKHNpYmxpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudC5pbnNlcnRCZWZvcmUodGhpcywgc2libGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlbHBlcnMge1xuICAgIHN0YXRpYyBpc1RvcGJhclN0aWNreUVuYWJsZWQgPSAoKSA9PiBvY2VhbndwTG9jYWxpemUuaGFzU3RpY2t5VG9wQmFyID09IHRydWU7XG5cbiAgICBzdGF0aWMgaXNNb2JpbGVTdGlja3lEaXNhYmxlZCA9ICgpID0+IHdpbmRvdy5pbm5lcldpZHRoIDw9IDk2MCAmJiBvY2VhbndwTG9jYWxpemUuaGFzU3RpY2t5TW9iaWxlICE9IHRydWU7XG5cbiAgICBzdGF0aWMgc2xpZGVTdGlja3lFZmZlY3QgPSAoKSA9PiBvY2VhbndwTG9jYWxpemUuc3RpY2t5RWZmZWN0ID09IFwic2xpZGVcIjtcblxuICAgIHN0YXRpYyB1cFN0aWNreUVmZmVjdCA9ICgpID0+IG9jZWFud3BMb2NhbGl6ZS5zdGlja3lFZmZlY3QgPT0gXCJ1cFwiO1xuXG4gICAgc3RhdGljIG1hbnVhbFN0aWNreSA9ICgpID0+IG9jZWFud3BMb2NhbGl6ZS5zdGlja3lDaG9vc2UgPT0gXCJtYW51YWxcIjtcblxuICAgIHN0YXRpYyBzaHJpbmtTdGlja3lTdHlsZSA9ICgpID0+IG9jZWFud3BMb2NhbGl6ZS5zdGlja3lTdHlsZSA9PSBcInNocmlua1wiO1xuXG4gICAgc3RhdGljIGdldFNocmlua0xvZ29IZWlnaHQgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNocmlua0xvZ29IZWlnaHQgPSBwYXJzZUludChvY2VhbndwTG9jYWxpemUuc2hyaW5rTG9nb0hlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIHNocmlua0xvZ29IZWlnaHQgPyBzaHJpbmtMb2dvSGVpZ2h0IDogMzA7XG4gICAgfTtcbn1cbiIsImltcG9ydCBET00gZnJvbSBcIi4vRE9NXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxpdHkge1xuICAgIHN0YXRpYyBzY3JvbGxCYXJUb3BQb3NpdGlvbiA9ICgpID0+IHdpbmRvdy5wYWdlWU9mZnNldDtcblxuICAgIHN0YXRpYyBlbGVtRXhpc3RzID0gKGVsZW0pID0+IHtcbiAgICAgICAgcmV0dXJuIGVsZW0gJiYgZWxlbSAhPT0gbnVsbDtcbiAgICB9O1xuXG4gICAgc3RhdGljIGVsZW1WaXNpYmxlID0gKGVsZW0pID0+ICEhKGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCk7XG5cbiAgICBzdGF0aWMgZWxlbU9mZnNldCA9IChlbGVtKSA9PiB7XG4gICAgICAgIGlmICghZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZXQgZG9jdW1lbnQtcmVsYXRpdmUgcG9zaXRpb24gYnkgYWRkaW5nIHZpZXdwb3J0IHNjcm9sbCB0byB2aWV3cG9ydC1yZWxhdGl2ZSBnQkNSXG4gICAgICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICBjb25zdCB3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0b3A6IHJlY3QudG9wICsgd2luLnBhZ2VZT2Zmc2V0LFxuICAgICAgICAgICAgbGVmdDogcmVjdC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0LFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBzdGF0aWMgaXNXUEFkbWluYmFyVmlzaWJsZSA9ICgpID0+IHRoaXMuZWxlbUV4aXN0cyhET00uV1BBZG1pbmJhcikgJiYgd2luZG93LmlubmVyV2lkdGggPiA2MDA7XG59XG4iLCJpbXBvcnQgXCIuL1V0aWxzL0RPTU1ldGhvZHNcIjtcbmltcG9ydCBVdGlsaXR5IGZyb20gXCIuL1V0aWxzL1V0aWxpdHlcIjtcbmltcG9ydCBUb3BiYXIgZnJvbSBcIi4vQ29tcG9uZW50cy9Ub3BiYXJcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4vQ29tcG9uZW50cy9IZWFkZXJcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuL0NvbXBvbmVudHMvTG9nb1wiO1xuaW1wb3J0IERPTSBmcm9tIFwiLi9VdGlscy9ET01cIjtcbmltcG9ydCBIZWxwZXJzIGZyb20gXCIuL1V0aWxzL0hlbHBlcnNcIjtcblxuY2xhc3MgT1dfU3RpY2t5SGVhZGVyIHtcbiAgICAjc2Nyb2xsQmFybGF0ZXN0VG9wUG9zaXRpb247XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50b3BiYXIgPSBuZXcgVG9wYmFyKCk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gbmV3IEhlYWRlcigpO1xuICAgICAgICB0aGlzLmxvZ28gPSBuZXcgTG9nbygpO1xuICAgIH1cblxuICAgIHN0YXJ0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLiNzY3JvbGxCYXJsYXRlc3RUb3BQb3NpdGlvbiA9IFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKTtcblxuICAgICAgICB0aGlzLiNzZXR1cEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfTtcblxuICAgICNzZXR1cEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgdGhpcy4jb25XaW5kb3dMb2FkKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsIHRoaXMuI29uQ2xpY2tMb2FkKTtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy4jb25XaW5kb3dTY3JvbGwpO1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCB0aGlzLiNvbldpbmRvd1Jlc2l6ZSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib3JpZW50YXRpb25jaGFuZ2VcIiwgdGhpcy4jb25XaW5kb3dSZXNpemUpO1xuICAgIH07XG5cbiAgICAjb25DbGlja1Njcm9sbE9mZnNldCA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKEhlbHBlcnMudXBTdGlja3lFZmZlY3QoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0aWNreU9mZnNldCA9IERPTS5oZWFkZXJXcmFwcGVyLm9mZnNldEhlaWdodDtcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJzp0YXJnZXQnICk7XG5cbiAgICAgICAgaWYgKCB0YXJnZXQgKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3R5bGVbXCJzY3JvbGwtbWFyZ2luLXRvcFwiXSA9IHN0aWNreU9mZnNldCArICdweCc7XG5cbiAgICAgICAgICAgIHRhcmdldC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgdG9wOiBzdGlja3lPZmZzZXQsXG4gICAgICAgICAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnRcbiAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EubG9jYWxbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pLCAubG9jYWwgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksIGEubWVudS1saW5rW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKSwgYS5zaWRyLWNsYXNzLW1lbnUtbGlua1tocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSksICNtb2JpbGUtZHJvcGRvd24gYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKVxuICAgICAgICAuZm9yRWFjaChuYXZMaW5rID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAhbmF2TGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJvbXctb3Blbi1tb2RhbFwiKSAmJlxuICAgICAgICAgICAgICAgICFuYXZMaW5rLmNsb3Nlc3QoXCIub213LW9wZW4tbW9kYWxcIikgJiZcbiAgICAgICAgICAgICAgICAhbmF2TGluay5jbGFzc0xpc3QuY29udGFpbnMoXCJvZXctbW9kYWwtYnV0dG9uXCIpICYmXG4gICAgICAgICAgICAgICAgIW5hdkxpbmsuY2xvc2VzdChcIi5vZXctbW9kYWwtYnV0dG9uXCIpICYmXG4gICAgICAgICAgICAgICAgIW5hdkxpbmsuY2xhc3NMaXN0LmNvbnRhaW5zKFwib3BsLWxpbmtcIikgJiZcbiAgICAgICAgICAgICAgICAhbmF2TGluay5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm9wbC1saW5rXCIpXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5hdkxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBuYXZMaW5rLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgICAgICAgICAgICAgbGV0IGFuY2hvcklkID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKCBocmVmICkge1xuICAgICAgICAgICAgICAgICAgICBhbmNob3JJZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaHJlZik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICggYW5jaG9ySWQgKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuY2hvcklkLnN0eWxlW1wic2Nyb2xsLW1hcmdpbi10b3BcIl0gPSBzdGlja3lPZmZzZXQgKyAncHgnO1xuICAgICAgICAgICAgICAgICAgICBhbmNob3JJZC5zY3JvbGxJbnRvVmlldyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IHN0aWNreU9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuXG4gICAgfTtcblxuICAgICNvbldpbmRvd0xvYWQgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLnRvcGJhci5jcmVhdGVTdGlja3lXcmFwcGVyKCk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNyZWF0ZVN0aWNreVdyYXBwZXIoKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuYWRkVmVydGljYWxIZWFkZXJTdGlja3koKTtcbiAgICAgICAgdGhpcy5sb2dvLnNldE1heEhlaWdodCgpO1xuICAgICAgICB0aGlzLiNvbkNsaWNrU2Nyb2xsT2Zmc2V0KGUpO1xuICAgIH07XG5cbiAgICAjb25DbGlja0xvYWQgPSAoZSkgPT4ge1xuICAgICAgICB0aGlzLiNvbkNsaWNrU2Nyb2xsT2Zmc2V0KGUpO1xuICAgIH07XG5cblxuICAgICNvbldpbmRvd1Njcm9sbCA9ICgpID0+IHtcbiAgICAgICAgaWYgKFV0aWxpdHkuc2Nyb2xsQmFyVG9wUG9zaXRpb24oKSAhPSB0aGlzLiNzY3JvbGxCYXJsYXRlc3RUb3BQb3NpdGlvbikge1xuICAgICAgICAgICAgdGhpcy50b3BiYXIuc3RpY2t5KCk7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5zdGlja3koKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLnN0aWNreUVmZmVjdHMoKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmFkZFZlcnRpY2FsSGVhZGVyU3RpY2t5KCk7XG5cbiAgICAgICAgICAgIHRoaXMuI3Njcm9sbEJhcmxhdGVzdFRvcFBvc2l0aW9uID0gVXRpbGl0eS5zY3JvbGxCYXJUb3BQb3NpdGlvbigpO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgI29uV2luZG93UmVzaXplID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnRvcGJhci51cGRhdGVTdGlja3koKTtcbiAgICAgICAgdGhpcy5oZWFkZXIudXBkYXRlU3RpY2t5KCk7XG4gICAgfTtcbn1cblxuKFwidXNlIHN0cmljdFwiKTtcblxuY29uc3Qgc3RpY2t5SGVhZGVyID0gbmV3IE9XX1N0aWNreUhlYWRlcigpO1xuc3RpY2t5SGVhZGVyLnN0YXJ0KCk7XG4iXX0=
