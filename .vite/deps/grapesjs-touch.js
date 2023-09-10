import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-touch@0.1.1/node_modules/grapesjs-touch/dist/grapesjs-touch.min.js
var require_grapesjs_touch_min = __commonJS({
  "node_modules/.pnpm/grapesjs-touch@0.1.1/node_modules/grapesjs-touch/dist/grapesjs-touch.min.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-touch"] = t() : e["grapesjs-touch"] = t();
    }(window, function() {
      return function(e) {
        var t = {};
        function n(o) {
          if (t[o])
            return t[o].exports;
          var i = t[o] = { i: o, l: false, exports: {} };
          return e[o].call(i.exports, i, i.exports, n), i.l = true, i.exports;
        }
        return n.m = e, n.c = t, n.d = function(e2, t2, o) {
          n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: o });
        }, n.r = function(e2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
        }, n.t = function(e2, t2) {
          if (1 & t2 && (e2 = n(e2)), 8 & t2)
            return e2;
          if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
            return e2;
          var o = /* @__PURE__ */ Object.create(null);
          if (n.r(o), Object.defineProperty(o, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
            for (var i in e2)
              n.d(o, i, (function(t3) {
                return e2[t3];
              }).bind(null, i));
          return o;
        }, n.n = function(e2) {
          var t2 = e2 && e2.__esModule ? function() {
            return e2.default;
          } : function() {
            return e2;
          };
          return n.d(t2, "a", t2), t2;
        }, n.o = function(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }, n.p = "", n(n.s = 0);
      }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var o = r(n(1)), i = r(n(2));
        function r(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }
        t.default = function(e2) {
          (0, i.default)(), (0, o.default)();
        };
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true }), t.default = function() {
          var e2;
          !function(e3) {
            var t2 = function() {
              function e4() {
                this._dropEffect = "move", this._effectAllowed = "all", this._data = {};
              }
              return Object.defineProperty(e4.prototype, "dropEffect", { get: function() {
                return this._dropEffect;
              }, set: function(e5) {
                this._dropEffect = e5;
              }, enumerable: true, configurable: true }), Object.defineProperty(e4.prototype, "effectAllowed", { get: function() {
                return this._effectAllowed;
              }, set: function(e5) {
                this._effectAllowed = e5;
              }, enumerable: true, configurable: true }), Object.defineProperty(e4.prototype, "types", { get: function() {
                return Object.keys(this._data);
              }, enumerable: true, configurable: true }), e4.prototype.clearData = function(e5) {
                null != e5 ? delete this._data[e5] : this._data = null;
              }, e4.prototype.getData = function(e5) {
                return this._data[e5] || "";
              }, e4.prototype.setData = function(e5, t3) {
                this._data[e5] = t3;
              }, e4.prototype.setDragImage = function(e5, t3, o) {
                var i = n2._instance;
                i._imgCustom = e5, i._imgOffset = { x: t3, y: o };
              }, e4;
            }();
            e3.DataTransfer = t2;
            var n2 = function() {
              function e4() {
                if (this._lastClick = 0, e4._instance)
                  throw "DragDropTouch instance already created.";
                var t3 = false;
                if (document.addEventListener("test", function() {
                }, { get passive() {
                  return t3 = true, true;
                } }), "ontouchstart" in document) {
                  var n3 = document, o = this._touchstart.bind(this), i = this._touchmove.bind(this), r = this._touchend.bind(this), s = !!t3 && { passive: false, capture: false };
                  n3.addEventListener("touchstart", o, s), n3.addEventListener("touchmove", i, s), n3.addEventListener("touchend", r), n3.addEventListener("touchcancel", r);
                }
              }
              return e4.getInstance = function() {
                return e4._instance;
              }, e4.prototype._touchstart = function(t3) {
                var n3 = this;
                if (this._shouldHandle(t3)) {
                  if (Date.now() - this._lastClick < e4._DBLCLICK && this._dispatchEvent(t3, "dblclick", t3.target))
                    return t3.preventDefault(), void this._reset();
                  this._reset();
                  var o = this._closestDraggable(t3.target);
                  o && (this._dispatchEvent(t3, "mousemove", t3.target) || this._dispatchEvent(t3, "mousedown", t3.target) || (this._dragSource = o, this._ptDown = this._getPoint(t3), this._lastTouch = t3, t3.preventDefault(), setTimeout(function() {
                    n3._dragSource == o && null == n3._img && n3._dispatchEvent(t3, "contextmenu", o) && n3._reset();
                  }, e4._CTXMENU)));
                }
              }, e4.prototype._touchmove = function(t3) {
                if (this._shouldHandle(t3)) {
                  var n3 = this._getTarget(t3);
                  if (this._dragSource && !this._img)
                    this._getDelta(t3) > e4._THRESHOLD && (this._dispatchEvent(t3, "dragstart", this._dragSource), this._createImage(t3), this._dispatchEvent(t3, "dragenter", n3));
                  if (this._img && (this._lastTouch = t3, t3.preventDefault(), n3 != this._lastTarget && (this._dispatchEvent(this._lastTouch, "dragleave", this._lastTarget), this._dispatchEvent(t3, "dragenter", n3), this._lastTarget = n3), this._moveImage(t3), this._dispatchEvent(t3, "dragover", n3)), this._dispatchEvent(t3, "mousemove", n3))
                    return this._lastTouch = t3, void t3.preventDefault();
                }
              }, e4.prototype._touchend = function(e5) {
                if (this._shouldHandle(e5)) {
                  if (this._destroyImage(), this._dragSource)
                    return e5.type.indexOf("cancel") < 0 && this._dispatchEvent(this._lastTouch, "drop", this._lastTarget), this._dispatchEvent(this._lastTouch, "dragend", this._dragSource), this._reset(), void e5.preventDefault();
                  if (this._dispatchEvent(this._lastTouch, "mouseup", e5.target))
                    return void e5.preventDefault();
                  this._img || (this._dragSource = null, this._dispatchEvent(this._lastTouch, "click", e5.target), this._lastClick = Date.now());
                }
              }, e4.prototype._shouldHandle = function(e5) {
                return e5 && !e5.defaultPrevented && e5.touches && e5.touches.length < 2;
              }, e4.prototype._reset = function() {
                this._destroyImage(), this._dragSource = null, this._lastTouch = null, this._lastTarget = null, this._ptDown = null, this._dataTransfer = new t2();
              }, e4.prototype._getPoint = function(e5, t3) {
                return e5 && e5.touches && (e5 = e5.touches[0]), { x: t3 ? e5.pageX : e5.clientX, y: t3 ? e5.pageY : e5.clientY };
              }, e4.prototype._getDelta = function(e5) {
                var t3 = this._getPoint(e5);
                return Math.abs(t3.x - this._ptDown.x) + Math.abs(t3.y - this._ptDown.y);
              }, e4.prototype._getTarget = function(e5) {
                var t3 = this._getPoint(e5), n3 = document.elementFromPoint(t3.x, t3.y);
                if (n3 && "IFRAME" === n3.nodeName)
                  try {
                    var o = n3.contentWindow.document, i = { x: 0, y: 0 };
                    do {
                      i.x += n3.offsetLeft || 0, i.y += n3.offsetTop || 0, n3 = n3.offsetParent;
                    } while (n3);
                    var r = t3.x - i.x, s = t3.y - i.y;
                    n3 = o.elementFromPoint(r, s);
                  } catch (e6) {
                  }
                for (; n3 && "none" == getComputedStyle(n3).pointerEvents; )
                  n3 = n3.parentElement;
                return n3;
              }, e4.prototype._createImage = function(t3) {
                this._img && this._destroyImage();
                var n3 = this._imgCustom || this._dragSource;
                if (this._img = n3.cloneNode(true), this._copyStyle(n3, this._img), this._img.style.top = this._img.style.left = "-9999px", !this._imgCustom) {
                  var o = n3.getBoundingClientRect(), i = this._getPoint(t3);
                  this._imgOffset = { x: i.x - o.left, y: i.y - o.top }, this._img.style.opacity = e4._OPACITY.toString();
                }
                this._moveImage(t3), document.body.appendChild(this._img);
              }, e4.prototype._destroyImage = function() {
                this._img && this._img.parentElement && this._img.parentElement.removeChild(this._img), this._img = null, this._imgCustom = null;
              }, e4.prototype._moveImage = function(e5) {
                var t3 = this;
                requestAnimationFrame(function() {
                  if (t3._img) {
                    var n3 = t3._getPoint(e5, true), o = t3._img.style;
                    o.position = "absolute", o.pointerEvents = "none", o.zIndex = "999999", o.left = Math.round(n3.x - t3._imgOffset.x) + "px", o.top = Math.round(n3.y - t3._imgOffset.y) + "px";
                  }
                });
              }, e4.prototype._copyProps = function(e5, t3, n3) {
                for (var o = 0; o < n3.length; o++) {
                  var i = n3[o];
                  e5[i] = t3[i];
                }
              }, e4.prototype._copyStyle = function(t3, n3) {
                if (e4._rmvAtts.forEach(function(e5) {
                  n3.removeAttribute(e5);
                }), t3 instanceof HTMLCanvasElement) {
                  var o = t3, i = n3;
                  i.width = o.width, i.height = o.height, i.getContext("2d").drawImage(o, 0, 0);
                }
                for (var r = getComputedStyle(t3), s = 0; s < r.length; s++) {
                  var a = r[s];
                  a.indexOf("transition") < 0 && (n3.style[a] = r[a]);
                }
                n3.style.pointerEvents = "none";
                for (s = 0; s < t3.children.length; s++)
                  this._copyStyle(t3.children[s], n3.children[s]);
              }, e4.prototype._dispatchEvent = function(t3, n3, o) {
                if (t3 && o) {
                  var i = document.createEvent("Event"), r = t3.touches ? t3.touches[0] : t3;
                  return i.initEvent(n3, true, true), i.button = 0, i.which = i.buttons = 1, this._copyProps(i, t3, e4._kbdProps), this._copyProps(i, r, e4._ptProps), i.dataTransfer = this._dataTransfer, o.dispatchEvent(i), i.defaultPrevented;
                }
                return false;
              }, e4.prototype._closestDraggable = function(e5) {
                for (; e5; e5 = e5.parentElement)
                  if (e5.hasAttribute("draggable") && e5.draggable)
                    return e5;
                return null;
              }, e4;
            }();
            n2._instance = new n2(), n2._THRESHOLD = 5, n2._OPACITY = 0.5, n2._DBLCLICK = 500, n2._CTXMENU = 900, n2._rmvAtts = "id,class,style,draggable".split(","), n2._kbdProps = "altKey,ctrlKey,metaKey,shiftKey".split(","), n2._ptProps = "pageX,pageY,clientX,clientY,screenX,screenY".split(","), e3.DragDropTouch = n2;
          }(e2 || (e2 = {}));
        };
      }, function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: true });
        var o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e2) {
          return typeof e2;
        } : function(e2) {
          return e2 && "function" == typeof Symbol && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
        };
        t.default = function() {
          !function() {
            var e2, t2, n2, i = 0, r = false, s = navigator.userAgent, a = ["touchstart", "touchmove", "touchend", "touchcancel", "touchleave"], c = {};
            function u() {
              var e3 = [];
              this.touchList = e3, this.Touch = function(e4, t3, n3, o2, i2, r2, s2, a2) {
                this.identifier = e4, this.target = t3, this.screenX = n3, this.screenY = o2, this.clientX = i2, this.clientY = r2, this.pageX = s2, this.pageY = a2;
              }, this.getTouch = function(t3) {
                var n3;
                for (n3 = 0; n3 < e3.length; n3 += 1)
                  if (e3[n3].identifier === t3)
                    return e3[n3];
              }, this.addUpdateTouch = function(t3) {
                var n3;
                for (n3 = 0; n3 < e3.length; n3 += 1)
                  if (e3[n3].identifier === t3.identifier)
                    return void (e3[n3] = t3);
                e3.push(t3);
              }, this.removeTouch = function(t3) {
                var n3;
                for (n3 = 0; n3 < e3.length; n3 += 1)
                  e3[n3].identifier === t3 && e3.splice(n3, 1);
              }, this.clearTouches = function() {
                for (; e3.length > 0; )
                  e3.pop();
              }, this.containsTouchAt = function(t3, n3) {
                var o2;
                for (o2 = 0; o2 < e3.length; o2 += 1)
                  if (e3[o2].screenX === t3 && e3[o2].screenY === n3)
                    return true;
                return false;
              };
            }
            function d(e3, t3) {
              return e3.screenX === t3.screenX && e3.screenY === t3.screenY;
            }
            function h(e3, t3) {
              var n3;
              return t3 = t3 || { bubbles: false, cancelable: false, detail: void 0 }, (n3 = document.createEvent("CustomEvent")).initCustomEvent(e3, t3.bubbles, t3.cancelable, t3.detail), n3;
            }
            function l(o2, r2, s2, a2, c2) {
              var u2, l2, p2;
              function f2(e3, t3) {
                var o3, i2;
                for (n2.clearTouches(), o3 = 0; o3 < t3.length; o3++)
                  (i2 = t3[o3]).target.isSameNode(e3) && n2.addUpdateTouch(i2);
              }
              "pointerdown" !== o2.type && (l2 = e2.getTouch(o2.pointerId), p2 = l2.target, o2.target = p2), (u2 = "pointerdown" === o2.type || "pointermove" === o2.type ? function(o3) {
                var r3, s3, a3;
                if (T("touch!"), "pointerdown" === o3.type)
                  r3 = "touchstart";
                else {
                  if ("pointermove" !== o3.type)
                    throw new Error("touchHandler received invalid event type: " + r3 + ". Valid event types are pointerdown and pointermove");
                  r3 = "touchmove";
                }
                return T(r3), s3 = new e2.Touch(o3.pointerId, "pointerdown" === o3.type ? o3.target : p2, o3.screenX, o3.screenY, o3.clientX, o3.clientY, o3.pageX, o3.pageY), o3.hwTimestamp > i && function() {
                  var n3, o4, i2, r4, s4;
                  for (o4 = t2.touchList, n3 = 0; n3 < o4.length; n3 += 1)
                    s4 = (i2 = o4[n3]).identifier, (r4 = e2.getTouch(s4)) && !d(r4, i2) || t2.removeTouch(s4);
                }(), T("generating touch cloned"), e2.addUpdateTouch(s3), t2.addUpdateTouch(s3), f2(s3.target, e2.touchList), o3.type = r3, (a3 = new h(r3, { bubbles: true, cancelable: true })).touches = e2.touchList, a3.changedTouches = t2.touchList, a3.targetTouches = n2.touchList, a3.type = r3, a3;
              }(o2) : function(o3) {
                var r3, s3, a3;
                return T("touchchanged!"), o3.changedTouches = [], o3.changedTouches.length = 1, o3.changedTouches[0] = o3, o3.changedTouches[0].identifier = o3.pointerId, "pointerup" === o3.type ? r3 = "touchend" : "pointercancel" === o3.type ? r3 = "touchcancel" : "pointerleave" === o3.type && (r3 = "touchleave"), s3 = new e2.Touch(o3.pointerId, p2, o3.screenX, o3.screenY, o3.clientX, o3.clientY, o3.pageX, o3.pageY), o3.hwTimestamp > i && t2.clearTouches(), e2.removeTouch(s3.identifier), t2.addUpdateTouch(s3), f2(s3.target, e2.touchList), o3.type = r3, (a3 = new h(r3, { bubbles: true, cancelable: true })).touches = e2.touchList, a3.changedTouches = t2.touchList, a3.targetTouches = n2.touchList, a3.type = r3, a3;
              }(o2)).preventDefault = function() {
                void 0 !== o2.preventDefault && o2.preventDefault();
              }, T("dispatching!"), o2.target.dispatchEvent(u2), i = event.hwTimestamp;
            }
            function p(e3, t3, n3, o2, i2, r2) {
              l(t3);
            }
            function f(e3, t3, n3) {
              var o2, i2;
              if (T("setTouchAware " + n3 + " " + t3), e3.__handJobjsGlobalRegisteredEvents || (e3.__handJobjsGlobalRegisteredEvents = []), n3) {
                if (void 0 !== e3.__handJobjsGlobalRegisteredEvents[t3])
                  return void (e3.__handJobjsGlobalRegisteredEvents[t3] += 1);
                e3.__handJobjsGlobalRegisteredEvents[t3] = 1, T(e3.__handJobjsGlobalRegisteredEvents[t3]);
              } else
                void 0 !== e3.__handJobjsGlobalRegisteredEvents[t3] && (e3.__handJobjsGlobalRegisteredEvents[t3] -= 1, e3.__handJobjsGlobalRegisteredEvents[t3] < 0 && (e3.__handJobjsGlobalRegisteredEvents[t3] = 0));
              o2 = l, void 0 !== e3["on" + (i2 = function(e4) {
                return e4;
              }(t3)).toLowerCase()] && function(e4, t4, n4, o3) {
                if (T("registerOrUnregisterEvent"), void 0 === e4.__handJobjsRegisteredEvents && (e4.__handJobjsRegisteredEvents = []), o3) {
                  if (void 0 !== e4.__handJobjsRegisteredEvents[t4])
                    return void (e4.__handJobjsRegisteredEvents[t4] += 1);
                  e4.__handJobjsRegisteredEvents[t4] = 1, T("adding event " + t4), e4.addEventListener(t4, n4, false);
                } else {
                  if (-1 !== e4.__handJobjsRegisteredEvents.indexOf(t4) && (e4.__handJobjsRegisteredEvents[t4] -= 1, 0 !== e4.__handJobjsRegisteredEvents[t4]))
                    return;
                  T("removing event"), e4.removeEventListener(t4, n4), e4.__handJobjsRegisteredEvents[t4] = 0;
                }
              }(e3, i2, function(e4) {
                o2(e4, t3);
              }, n3);
            }
            function v(e3) {
              var t3 = e3.prototype ? e3.prototype.addEventListener : e3.addEventListener;
              function n3(e4, n4, o2) {
                T("customAddEventListener"), T(e4), -1 !== a.indexOf(e4) && (T("setting touch aware..."), f(this, e4, true)), t3.call(this, e4, n4, o2);
              }
              T("intercepting add event listener!"), T(e3), e3.prototype ? e3.prototype.addEventListener = n3 : e3.addEventListener = n3;
            }
            function g(e3, t3) {
              T("handle other event"), e3.preventManipulation && e3.preventManipulation(), l(touchPoint);
            }
            function _(e3) {
              var t3 = e3.prototype ? e3.prototype.removeEventListener : e3.removeEventListener;
              function n3(e4, n4, o2) {
                -1 !== a.indexOf(e4) && function(e5, t4) {
                  if (void 0 === e5.ontouchdown && void 0 !== e5.ontouchstart)
                    switch (t4.toLowerCase()) {
                      case "touchstart":
                        e5.removeEventListener("pointerdown", function(e6) {
                          g(e6);
                        });
                        break;
                      case "touchmove":
                        e5.removeEventListener("pointermove", function(e6) {
                          g(e6);
                        });
                        break;
                      case "touchend":
                        e5.removeEventListener("pointerup", function(e6) {
                          g(e6);
                        });
                        break;
                      case "touchcancel":
                        e5.removeEventListener("pointercancel", function(e6) {
                          g(e6);
                        });
                    }
                }(this, e4), t3.call(this, e4, n4, o2);
              }
              e3.prototype ? e3.prototype.removeEventListener = n3 : e3.removeEventListener = n3;
            }
            function m(e3, t3) {
              return T("checkEventRegistration"), e3.__handJobjsGlobalRegisteredEvents && e3.__handJobjsGlobalRegisteredEvents[t3];
            }
            function y(e3, t3, n3, o2, i2, r2) {
              T("generateTouchEventProxyIfRegistered"), function(e4, t4) {
                for (T("findEventRegisteredNode"); e4 && !m(e4, t4); )
                  e4 = e4.parentNode;
                return e4 || (m(window, t4) ? window : void 0);
              }(n3, e3) && p(0, t3);
            }
            function E(e3) {
              var t3 = [];
              if (e3)
                for (t3.unshift(e3); e3.parentNode; )
                  t3.unshift(e3.parentNode), e3 = e3.parentNode;
              return t3;
            }
            function b(e3, t3) {
              for (var n3 = E(e3), o2 = E(t3), i2 = null; n3.length > 0 && n3[0] === o2.shift(); )
                i2 = n3.shift();
              return i2;
            }
            function T(e3) {
              r && console.log(e3.toString());
            }
            h.prototype = window.Event.prototype, "object" !== o(window.ontouchstart) && (s.match(/iPad/i) || s.match(/iPhone/i) || s.match(/iPod/i) || s.match(/Android/i) || s.match(/MSIE/i) && !s.match(/Touch/i) || (function() {
              var e3 = "html { -ms-touch-action: none; }", t3 = document.head || document.getElementsByTagName("head")[0], n3 = document.createElement("style");
              n3.type = "text/css", n3.styleSheet ? n3.styleSheet.cssText = e3 : n3.appendChild(document.createTextNode(e3)), t3.appendChild(n3);
            }(), e2 = new u(), t2 = new u(), n2 = new u(), window.CustomEvent = h, v(window), v(window.HTMLElement || window.Element), v(document), v(HTMLBodyElement), v(HTMLDivElement), v(HTMLImageElement), v(HTMLUListElement), v(HTMLAnchorElement), v(HTMLLIElement), v(HTMLTableElement), window.HTMLSpanElement && v(HTMLSpanElement), window.HTMLCanvasElement && v(HTMLCanvasElement), window.SVGElement && v(SVGElement), _(window), _(window.HTMLElement || window.Element), _(document), _(HTMLBodyElement), _(HTMLDivElement), _(HTMLImageElement), _(HTMLUListElement), _(HTMLAnchorElement), _(HTMLLIElement), _(HTMLTableElement), window.HTMLSpanElement && _(HTMLSpanElement), window.HTMLCanvasElement && _(HTMLCanvasElement), window.SVGElement && _(SVGElement), function() {
              function t3(e3) {
                return "mouse" === e3.pointerType || ("pointerdown" === e3.type && 0 === e3.x && 0 === e3.y || "pen" === e3.pointerType && 0 === e3.pressure && "pointermove" === e3.type);
              }
              window.addEventListener("pointerdown", function(e3) {
                T("pointerdownfired");
                var n3 = e3;
                t3(e3) || (c[n3.identifier] = n3.target, y("touchenter", n3, n3.target), function(e4, t4, n4) {
                  T("dispatchPointerEnter");
                  for (var o2 = b(e4, t4), i2 = e4, r2 = []; i2 && i2 !== o2; )
                    m(i2, "touchenter") && r2.push(i2), i2 = i2.parentNode;
                  for (; r2.length > 0; )
                    n4(r2.pop());
                }(n3.target, null, function(e4) {
                  p(0, n3);
                }), y("touchstart", n3, n3.target));
              }), window.addEventListener("pointerup", function(e3) {
                var n3 = e3, o2 = c[n3.identifier];
                T("pointer up fired"), t3(e3) || (y("touchend", n3, o2), y("touchleave", n3, o2), function(e4, t4, n4) {
                  T("dispatchPointerLeave");
                  for (var o3 = b(e4, t4), i2 = e4; i2 && i2 !== o3; )
                    m(i2, "touchleave") && n4(i2), i2 = i2.parentNode;
                }(o2, null, function(e4) {
                  p(0, n3);
                }));
              }), window.addEventListener("pointermove", function(n3) {
                var o2 = n3, i2 = c[o2.identifier];
                T("pointer move fired"), t3(n3) || (T("x: " + n3.screenX + ", y: " + n3.screenY), e2.containsTouchAt(n3.screenX, n3.screenY) || (i2 && true === function(e3) {
                  for (; e3 && !e3.handJobjs_forcePreventDefault; )
                    e3 = e3.parentNode;
                  return !!e3 || window.handJobjs_forcePreventDefault;
                }(i2) && n3.preventDefault(), y("touchmove", o2, i2)));
              });
            }()));
          }();
        };
      }]);
    });
  }
});
export default require_grapesjs_touch_min();
/*! Bundled license information:

grapesjs-touch/dist/grapesjs-touch.min.js:
  (*! grapesjs-touch - 0.1.1 *)
*/
//# sourceMappingURL=grapesjs-touch.js.map
