import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-style-bg@2.0.2/node_modules/grapesjs-style-bg/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-style-bg@2.0.2/node_modules/grapesjs-style-bg/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-style-bg"] = t() : e["grapesjs-style-bg"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      var e = { 180: function(e2) {
        var t2;
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window && window, t2 = () => (() => {
          var e3 = { 9: function(e4) {
            "undefined" != typeof self && self, e4.exports = function(e5) {
              function t4(r3) {
                if (n3[r3])
                  return n3[r3].exports;
                var o = n3[r3] = { i: r3, l: false, exports: {} };
                return e5[r3].call(o.exports, o, o.exports, t4), o.l = true, o.exports;
              }
              var n3 = {};
              return t4.m = e5, t4.c = n3, t4.d = function(e6, n4, r3) {
                t4.o(e6, n4) || Object.defineProperty(e6, n4, { configurable: false, enumerable: true, get: r3 });
              }, t4.n = function(e6) {
                var n4 = e6 && e6.__esModule ? function() {
                  return e6.default;
                } : function() {
                  return e6;
                };
                return t4.d(n4, "a", n4), n4;
              }, t4.o = function(e6, t5) {
                return Object.prototype.hasOwnProperty.call(e6, t5);
              }, t4.p = "", t4(t4.s = 1);
            }([function(e5, t4, n3) {
              "use strict";
              Object.defineProperty(t4, "__esModule", { value: true }), t4.on = function(e6, t5, n4) {
                t5 = t5.split(/\s+/);
                for (var r3 = 0; r3 < t5.length; ++r3)
                  e6.addEventListener(t5[r3], n4);
              }, t4.off = function(e6, t5, n4) {
                t5 = t5.split(/\s+/);
                for (var r3 = 0; r3 < t5.length; ++r3)
                  e6.removeEventListener(t5[r3], n4);
              }, t4.isFunction = function(e6) {
                return "function" == typeof e6;
              }, t4.isDef = function(e6) {
                return void 0 !== e6;
              }, t4.getPointerEvent = function(e6) {
                return e6.touches && e6.touches[0] || e6;
              };
            }, function(e5, t4, n3) {
              "use strict";
              var r3 = function(e6) {
                return e6 && e6.__esModule ? e6 : { default: e6 };
              }(n3(2));
              e5.exports = function(e6) {
                return new r3.default(e6);
              };
            }, function(e5, t4, n3) {
              "use strict";
              function r3(e6) {
                return e6 && e6.__esModule ? e6 : { default: e6 };
              }
              Object.defineProperty(t4, "__esModule", { value: true });
              var o = function() {
                function e6(e7, t5) {
                  for (var n4 = 0; n4 < t5.length; n4++) {
                    var r4 = t5[n4];
                    r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e7, r4.key, r4);
                  }
                }
                return function(t5, n4, r4) {
                  return n4 && e6(t5.prototype, n4), r4 && e6(t5, r4), t5;
                };
              }(), i = r3(n3(3)), a = r3(n3(4)), l = n3(0), c = function(e6, t5) {
                return e6.position - t5.position;
              }, u = function(e6) {
                function t5() {
                  var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                  !function(e8, t6) {
                    if (!(e8 instanceof t6))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, t5);
                  var n4 = function(e8, t6) {
                    if (!e8)
                      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return !t6 || "object" != typeof t6 && "function" != typeof t6 ? e8 : t6;
                  }(this, (t5.__proto__ || Object.getPrototypeOf(t5)).call(this));
                  e7 = Object.assign({}, e7);
                  var r4 = { pfx: "grp", el: ".grp", colorEl: "", min: 0, max: 100, direction: "90deg", type: "linear", height: "30px", width: "100%", emptyColor: "#000", onValuePos: function(e8) {
                    return parseInt(e8);
                  } };
                  for (var o2 in r4)
                    o2 in e7 || (e7[o2] = r4[o2]);
                  var i2 = e7.el;
                  if (!((i2 = "string" == typeof i2 ? document.querySelector(i2) : i2) instanceof HTMLElement))
                    throw "Element not found, given " + i2;
                  return n4.el = i2, n4.handlers = [], n4.options = e7, n4.on("handler:color:change", function(e8, t6) {
                    return n4.change(t6);
                  }), n4.on("handler:position:change", function(e8, t6) {
                    return n4.change(t6);
                  }), n4.on("handler:remove", function(e8) {
                    return n4.change(1);
                  }), n4.on("handler:add", function(e8) {
                    return n4.change(1);
                  }), n4.render(), n4;
                }
                return function(e7, t6) {
                  if ("function" != typeof t6 && null !== t6)
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t6);
                  e7.prototype = Object.create(t6 && t6.prototype, { constructor: { value: e7, enumerable: false, writable: true, configurable: true } }), t6 && (Object.setPrototypeOf ? Object.setPrototypeOf(e7, t6) : e7.__proto__ = t6);
                }(t5, e6), o(t5, [{ key: "destroy", value: function() {
                  var e7 = this;
                  this.clear(), this.e = {}, ["el", "handlers", "options", "colorPicker"].forEach(function(t6) {
                    return e7[t6] = 0;
                  }), ["previewEl", "wrapperEl", "sandEl"].forEach(function(t6) {
                    var n4 = e7[t6];
                    n4 && n4.parentNode && n4.parentNode.removeChild(n4), delete e7[t6];
                  });
                } }, { key: "setColorPicker", value: function(e7) {
                  this.colorPicker = e7;
                } }, { key: "getValue", value: function(e7, t6) {
                  var n4 = this.getColorValue(), r4 = e7 || this.getType(), o2 = ["top", "left", "bottom", "right", "center"], i2 = t6 || this.getDirection();
                  return ["linear", "repeating-linear"].indexOf(r4) >= 0 && o2.indexOf(i2) >= 0 && (i2 = "center" === i2 ? "to right" : "to " + i2), ["radial", "repeating-radial"].indexOf(r4) >= 0 && o2.indexOf(i2) >= 0 && (i2 = "circle at " + i2), n4 ? r4 + "-gradient(" + i2 + ", " + n4 + ")" : "";
                } }, { key: "getSafeValue", value: function(e7, t6) {
                  var n4 = this.previewEl, r4 = this.getValue(e7, t6);
                  if (!this.sandEl && (this.sandEl = document.createElement("div")), !n4 || !r4)
                    return "";
                  for (var o2 = this.sandEl.style, i2 = [r4].concat(function(e8) {
                    if (Array.isArray(e8)) {
                      for (var t7 = 0, n5 = Array(e8.length); t7 < e8.length; t7++)
                        n5[t7] = e8[t7];
                      return n5;
                    }
                    return Array.from(e8);
                  }(this.getPrefixedValues(e7, t6))), a2 = void 0, l2 = 0; l2 < i2.length && (a2 = i2[l2], o2.backgroundImage = a2, o2.backgroundImage != a2); l2++)
                    ;
                  return o2.backgroundImage;
                } }, { key: "setValue", value: function() {
                  var e7 = this, t6 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r4 = this.type, o2 = this.direction, i2 = t6.indexOf("(") + 1, a2 = t6.lastIndexOf(")"), l2 = t6.substring(i2, a2), c2 = l2.split(/,(?![^(]*\)) /);
                  if (this.clear(n4), l2) {
                    c2.length > 2 && (o2 = c2.shift());
                    var u2 = void 0;
                    ["repeating-linear", "repeating-radial", "linear", "radial"].forEach(function(e8) {
                      t6.indexOf(function(e9) {
                        return e9 + "-gradient(";
                      }(e8)) > -1 && !u2 && (u2 = 1, r4 = e8);
                    }), this.setDirection(o2, n4), this.setType(r4, n4), c2.forEach(function(t7) {
                      var r5 = t7.split(" "), o3 = parseFloat(r5.pop()), i3 = r5.join("");
                      e7.addHandler(o3, i3, 0, n4);
                    }), this.updatePreview();
                  } else
                    this.updatePreview();
                } }, { key: "getColorValue", value: function() {
                  var e7 = this.handlers;
                  return e7.sort(c), (e7 = 1 == e7.length ? [e7[0], e7[0]] : e7).map(function(e8) {
                    return e8.getValue();
                  }).join(", ");
                } }, { key: "getPrefixedValues", value: function(e7, t6) {
                  var n4 = this.getValue(e7, t6);
                  return ["-moz-", "-webkit-", "-o-", "-ms-"].map(function(e8) {
                    return "" + e8 + n4;
                  });
                } }, { key: "change", value: function() {
                  var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1, t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.updatePreview(), !t6.silent && this.emit("change", e7);
                } }, { key: "setDirection", value: function(e7) {
                  var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.options.direction = e7;
                  var n4 = t6.complete, r4 = void 0 === n4 ? 1 : n4;
                  this.change(r4, t6);
                } }, { key: "getDirection", value: function() {
                  return this.options.direction;
                } }, { key: "setType", value: function(e7) {
                  var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                  this.options.type = e7;
                  var n4 = t6.complete, r4 = void 0 === n4 ? 1 : n4;
                  this.change(r4, t6);
                } }, { key: "getType", value: function() {
                  return this.options.type;
                } }, { key: "addHandler", value: function(e7, t6) {
                  var n4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1, r4 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = new a.default(this, e7, t6, n4, r4);
                  return !r4.silent && this.emit("handler:add", o2), o2;
                } }, { key: "getHandler", value: function(e7) {
                  return this.handlers[e7];
                } }, { key: "getHandlers", value: function() {
                  return this.handlers;
                } }, { key: "clear", value: function() {
                  for (var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t6 = this.handlers, n4 = t6.length - 1; n4 >= 0; n4--)
                    t6[n4].remove(e7);
                } }, { key: "getSelected", value: function() {
                  for (var e7 = this.getHandlers(), t6 = 0; t6 < e7.length; t6++) {
                    var n4 = e7[t6];
                    if (n4.isSelected())
                      return n4;
                  }
                  return null;
                } }, { key: "updatePreview", value: function() {
                  var e7 = this.previewEl;
                  e7 && (e7.style.backgroundImage = this.getValue("linear", "to right"));
                } }, { key: "initEvents", value: function() {
                  var e7 = this, t6 = this.previewEl;
                  t6 && (0, l.on)(t6, "click", function(n4) {
                    var r4 = e7.options, o2 = r4.min, i2 = r4.max, a2 = { w: t6.clientWidth, h: t6.clientHeight }, l2 = n4.offsetX - t6.clientLeft, c2 = n4.offsetY - t6.clientTop, u2 = l2 / a2.w * 100;
                    if (!(u2 > i2 || u2 < o2 || c2 > a2.h || c2 < 0)) {
                      var s = document.createElement("canvas"), d = s.getContext("2d");
                      s.width = a2.w, s.height = a2.h;
                      var p = d.createLinearGradient(0, 0, a2.w, a2.h);
                      e7.getHandlers().forEach(function(e8) {
                        return p.addColorStop(e8.position / 100, e8.color);
                      }), d.fillStyle = p, d.fillRect(0, 0, s.width, s.height), s.style.background = "black";
                      var f = s.getContext("2d").getImageData(l2, c2, 1, 1).data, h = "rgba(" + f[0] + ", " + f[1] + ", " + f[2] + ", " + f[3] + ")", v = "rgba(0, 0, 0, 0)" == h ? r4.emptyColor : h;
                      e7.addHandler(u2, v);
                    }
                  });
                } }, { key: "render", value: function() {
                  var e7 = this.options, t6 = this.el, n4 = e7.pfx, r4 = e7.height, o2 = e7.width;
                  if (t6) {
                    var i2 = n4 + "-wrapper", a2 = n4 + "-preview";
                    t6.innerHTML = '\n      <div class="' + i2 + '">\n        <div class="' + a2 + '"></div>\n      </div>\n    ';
                    var l2 = t6.querySelector("." + i2), c2 = t6.querySelector("." + a2), u2 = l2.style;
                    u2.position = "relative", this.wrapperEl = l2, this.previewEl = c2, r4 && (u2.height = r4), o2 && (u2.width = o2), this.initEvents(), this.updatePreview();
                  }
                } }]), t5;
              }(i.default);
              t4.default = u;
            }, function(e5, t4, n3) {
              "use strict";
              Object.defineProperty(t4, "__esModule", { value: true });
              var r3 = function() {
                function e6(e7, t5) {
                  for (var n4 = 0; n4 < t5.length; n4++) {
                    var r4 = t5[n4];
                    r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e7, r4.key, r4);
                  }
                }
                return function(t5, n4, r4) {
                  return n4 && e6(t5.prototype, n4), r4 && e6(t5, r4), t5;
                };
              }(), o = function() {
                function e6() {
                  !function(e7, t5) {
                    if (!(e7 instanceof t5))
                      throw new TypeError("Cannot call a class as a function");
                  }(this, e6);
                }
                return r3(e6, [{ key: "on", value: function(e7, t5, n4) {
                  var r4 = this.e || (this.e = {});
                  return (r4[e7] || (r4[e7] = [])).push({ fn: t5, ctx: n4 }), this;
                } }, { key: "once", value: function(e7, t5, n4) {
                  function r4() {
                    o2.off(e7, r4), t5.apply(n4, arguments);
                  }
                  var o2 = this;
                  return r4._ = t5, this.on(e7, r4, n4);
                } }, { key: "emit", value: function(e7) {
                  for (var t5 = [].slice.call(arguments, 1), n4 = ((this.e || (this.e = {}))[e7] || []).slice(), r4 = 0, o2 = n4.length; r4 < o2; r4++)
                    n4[r4].fn.apply(n4[r4].ctx, t5);
                  return this;
                } }, { key: "off", value: function(e7, t5) {
                  var n4 = this.e || (this.e = {}), r4 = n4[e7], o2 = [];
                  if (r4 && t5)
                    for (var i = 0, a = r4.length; i < a; i++)
                      r4[i].fn !== t5 && r4[i].fn._ !== t5 && o2.push(r4[i]);
                  return o2.length ? n4[e7] = o2 : delete n4[e7], this;
                } }]), e6;
              }();
              t4.default = o;
            }, function(e5, t4, n3) {
              "use strict";
              Object.defineProperty(t4, "__esModule", { value: true });
              var r3 = function() {
                function e6(e7, t5) {
                  for (var n4 = 0; n4 < t5.length; n4++) {
                    var r4 = t5[n4];
                    r4.enumerable = r4.enumerable || false, r4.configurable = true, "value" in r4 && (r4.writable = true), Object.defineProperty(e7, r4.key, r4);
                  }
                }
                return function(t5, n4, r4) {
                  return n4 && e6(t5.prototype, n4), r4 && e6(t5, r4), t5;
                };
              }(), o = n3(0), i = function() {
                function e6(t5) {
                  var n4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0, r4 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "black", o2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, i2 = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {};
                  (function(e7, t6) {
                    if (!(e7 instanceof t6))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, e6), t5.getHandlers().push(this), this.gp = t5, this.position = n4, this.color = r4, this.selected = 0, this.render(), o2 && this.select(i2);
                }
                return r3(e6, [{ key: "toJSON", value: function() {
                  return { position: this.position, selected: this.selected, color: this.color };
                } }, { key: "setColor", value: function(e7) {
                  var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                  this.color = e7, this.emit("handler:color:change", this, t5);
                } }, { key: "setPosition", value: function(e7) {
                  var t5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n4 = this.getEl();
                  this.position = e7, n4 && (n4.style.left = e7 + "%"), this.emit("handler:position:change", this, t5);
                } }, { key: "getColor", value: function() {
                  return this.color;
                } }, { key: "getPosition", value: function() {
                  var e7 = this.position, t5 = this.gp.options.onValuePos;
                  return (0, o.isFunction)(t5) ? t5(e7) : e7;
                } }, { key: "isSelected", value: function() {
                  return !!this.selected;
                } }, { key: "getValue", value: function() {
                  return this.getColor() + " " + this.getPosition() + "%";
                } }, { key: "select", value: function() {
                  var e7 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t5 = this.getEl(), n4 = this.gp.getHandlers();
                  !e7.keepSelect && n4.forEach(function(e8) {
                    return e8.deselect();
                  }), this.selected = 1;
                  var r4 = this.getSelectedCls();
                  t5 && (t5.className += " " + r4), this.emit("handler:select", this);
                } }, { key: "deselect", value: function() {
                  var e7 = this.getEl();
                  this.selected = 0;
                  var t5 = this.getSelectedCls();
                  e7 && (e7.className = e7.className.replace(t5, "").trim()), this.emit("handler:deselect", this);
                } }, { key: "getSelectedCls", value: function() {
                  return this.gp.options.pfx + "-handler-selected";
                } }, { key: "remove", value: function() {
                  var e7 = this, t5 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n4 = this.cpFn, r4 = this.getEl(), i2 = this.gp.getHandlers(), a = i2.splice(i2.indexOf(this), 1)[0];
                  return r4 && r4.parentNode.removeChild(r4), !t5.silent && this.emit("handler:remove", a), (0, o.isFunction)(n4) && n4(this), ["el", "gp"].forEach(function(t6) {
                    return e7[t6] = 0;
                  }), a;
                } }, { key: "getEl", value: function() {
                  return this.el;
                } }, { key: "initEvents", value: function() {
                  var e7 = this, t5 = this.getEl(), n4 = this.gp.previewEl, r4 = this.gp.options, i2 = r4.min, a = r4.max, l = t5.querySelector("[data-toggle=handler-close]"), c = t5.querySelector("[data-toggle=handler-color-c]"), u = t5.querySelector("[data-toggle=handler-color-wrap]"), s = t5.querySelector("[data-toggle=handler-color]"), d = t5.querySelector("[data-toggle=handler-drag]"), p = function(t6) {
                    var n5 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, r5 = t6.target.value;
                    e7.setColor(r5, n5), u && (u.style.backgroundColor = r5);
                  };
                  if (c && (0, o.on)(c, "click", function(e8) {
                    return e8.stopPropagation();
                  }), l && (0, o.on)(l, "click", function(t6) {
                    t6.stopPropagation(), e7.remove();
                  }), s && ((0, o.on)(s, "change", p), (0, o.on)(s, "input", function(e8) {
                    return p(e8, 0);
                  })), d) {
                    var f = 0, h = 0, v = 0, g = {}, y = {}, m = {}, b = function(t6) {
                      var n5 = (0, o.getPointerEvent)(t6);
                      v = 1, m.x = n5.clientX - y.x, m.y = n5.clientY - y.y, f = 100 * m.x, f /= g.w, f = (f = (f = h + f) < i2 ? i2 : f) > a ? a : f, e7.setPosition(f, 0), e7.emit("handler:drag", e7, f), (0, o.isDef)(t6.button) && 0 === t6.which && k(t6);
                    }, k = function t6(n5) {
                      (0, o.off)(document, "touchmove mousemove", b), (0, o.off)(document, "touchend mouseup", t6), v && (v = 0, e7.setPosition(f), e7.emit("handler:drag:end", e7, f));
                    };
                    (0, o.on)(d, "touchstart mousedown", function(t6) {
                      if (!(0, o.isDef)(t6.button) || 0 === t6.button) {
                        e7.select();
                        var r5 = (0, o.getPointerEvent)(t6);
                        h = e7.position, g.w = n4.clientWidth, g.h = n4.clientHeight, y.x = r5.clientX, y.y = r5.clientY, (0, o.on)(document, "touchmove mousemove", b), (0, o.on)(document, "touchend mouseup", k), e7.emit("handler:drag:start", e7);
                      }
                    }), (0, o.on)(d, "click", function(e8) {
                      return e8.stopPropagation();
                    });
                  }
                } }, { key: "emit", value: function() {
                  var e7;
                  (e7 = this.gp).emit.apply(e7, arguments);
                } }, { key: "render", value: function() {
                  var e7 = this.gp, t5 = e7.options, n4 = e7.previewEl, r4 = e7.colorPicker, o2 = t5.pfx, i2 = t5.colorEl, a = this.getColor();
                  if (n4) {
                    var l = document.createElement("div"), c = l.style, u = o2 + "-handler";
                    return l.className = u, l.innerHTML = '\n      <div class="' + u + '-close-c">\n        <div class="' + u + '-close" data-toggle="handler-close">&Cross;</div>\n      </div>\n      <div class="' + u + '-drag" data-toggle="handler-drag"></div>\n      <div class="' + u + '-cp-c" data-toggle="handler-color-c">\n        ' + (i2 || '\n          <div class="' + u + '-cp-wrap" data-toggle="handler-color-wrap" style="background-color: ' + a + '">\n            <input type="color" data-toggle="handler-color" value="' + a + '">\n          </div>') + "\n      </div>\n    ", c.position = "absolute", c.top = 0, c.left = this.position + "%", n4.appendChild(l), this.el = l, this.initEvents(), this.cpFn = r4 && r4(this), l;
                  }
                } }]), e6;
              }();
              t4.default = i;
            }]);
          } }, t3 = {};
          function n2(r3) {
            var o = t3[r3];
            if (void 0 !== o)
              return o.exports;
            var i = t3[r3] = { exports: {} };
            return e3[r3].call(i.exports, i, i.exports, n2), i.exports;
          }
          n2.n = (e4) => {
            var t4 = e4 && e4.__esModule ? () => e4["default"] : () => e4;
            return n2.d(t4, { a: t4 }), t4;
          }, n2.d = (e4, t4) => {
            for (var r3 in t4)
              n2.o(t4, r3) && !n2.o(e4, r3) && Object.defineProperty(e4, r3, { enumerable: true, get: t4[r3] });
          }, n2.o = (e4, t4) => Object.prototype.hasOwnProperty.call(e4, t4), n2.r = (e4) => {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e4, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e4, "__esModule", { value: true });
          };
          var r2 = {};
          return (() => {
            "use strict";
            n2.r(r2), n2.d(r2, { GRAD_DIRS: () => u, GRAD_TYPES: () => s, default: () => g, getValidDir: () => c, parseGradient: () => a, toGradient: () => l });
            var e4 = n2(9), t4 = n2.n(e4), o = function() {
              return o = Object.assign || function(e5) {
                for (var t5, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
                  for (var o2 in t5 = arguments[n3])
                    Object.prototype.hasOwnProperty.call(t5, o2) && (e5[o2] = t5[o2]);
                return e5;
              }, o.apply(this, arguments);
            }, i = function(e5, t5, n3) {
              if (n3 || 2 === arguments.length)
                for (var r3, o2 = 0, i2 = t5.length; o2 < i2; o2++)
                  !r3 && o2 in t5 || (r3 || (r3 = Array.prototype.slice.call(t5, 0, o2)), r3[o2] = t5[o2]);
              return e5.concat(r3 || Array.prototype.slice.call(t5));
            }, a = function(e5) {
              var t5 = e5.indexOf("(") + 1, n3 = e5.lastIndexOf(")"), r3 = e5.substring(t5, n3), o2 = r3.split(/,(?![^(]*\))/), i2 = { direction: "left", type: "linear", content: r3, colors: r3, stops: [] };
              if (!r3)
                return i2;
              o2.length > 2 && (i2.direction = o2.shift(), i2.colors = o2.join(",").trim());
              var a2 = false;
              return ["repeating-linear", "repeating-radial", "linear", "radial"].forEach(function(t6) {
                e5.indexOf(function(e6) {
                  return "".concat(e6, "-gradient(");
                }(t6)) > -1 && !a2 && (a2 = true, i2.type = t6);
              }), i2.stops = o2.map(function(e6) {
                var t6 = e6.split(" "), n4 = (t6.length > 1 ? t6.pop() : "").trim();
                return { color: t6.join(" ").trim(), position: n4 };
              }), i2;
            }, l = function(e5, t5, n3) {
              var r3 = i(i([], u, true), ["center"], false), o2 = t5;
              return ["linear", "repeating-linear"].indexOf(e5) >= 0 && r3.indexOf(o2) >= 0 && (o2 = "center" === o2 ? "to right" : "to ".concat(o2)), ["radial", "repeating-radial"].indexOf(e5) >= 0 && r3.indexOf(o2) >= 0 && (o2 = "circle at ".concat(o2)), n3 ? "".concat(e5, "-gradient(").concat(o2, ", ").concat(n3, ")") : "";
            }, c = function(e5) {
              return u.filter(function(t5) {
                return e5.indexOf(t5) > -1;
              })[0];
            }, u = ["right", "bottom", "left", "top"], s = ["linear", "radial", "repeating-linear", "repeating-radial"], d = '[data-toggle="handler-color-wrap"]', p = "background-image-gradient", f = "".concat(p, "-dir"), h = "".concat(p, "-type"), v = function() {
              return v = Object.assign || function(e5) {
                for (var t5, n3 = 1, r3 = arguments.length; n3 < r3; n3++)
                  for (var o2 in t5 = arguments[n3])
                    Object.prototype.hasOwnProperty.call(t5, o2) && (e5[o2] = t5[o2]);
                return e5;
              }, v.apply(this, arguments);
            };
            const g = function(e5, n3) {
              void 0 === n3 && (n3 = {}), function(e6, n4) {
                void 0 === n4 && (n4 = {});
                var r3 = e6.getModel(), i2 = e6.Styles, v2 = n4.colorPicker, g2 = n4.builtInType, y = n4.styleType, m = function(t5) {
                  var n5 = t5.getEl().querySelector(d), r4 = e6.$(n5);
                  r4.spectrum && r4.spectrum("destroy");
                };
                y && i2.addType(y, { create: function(e7) {
                  var i3 = e7.change, a2 = document.createElement("div");
                  a2.className = "gp-container", a2.style.width = "100%";
                  var l2 = new (t4())(o({ el: a2 }, n4.grapickOpts));
                  return l2.on("change", function(e8) {
                    return i3({ value: l2.getValue(), partial: !e8 });
                  }), this.gp = l2, "default" === v2 && (v2 = function(e8) {
                    var t5 = e8.getEl(), n5 = t5.querySelector(d), o2 = t5.querySelector("input");
                    null == o2 || o2.parentNode.removeChild(o2);
                    var i4 = n5.style;
                    i4.backgroundColor = e8.getColor();
                    var a3 = function(t6, n6) {
                      void 0 === n6 && (n6 = 1);
                      var r4 = function(e9) {
                        return (1 == e9.getAlpha() ? e9.toHexString() : e9.toRgbString()).replace(/ /g, "");
                      }(t6);
                      i4.backgroundColor = r4, e8.setColor(r4, n6);
                    };
                    r3.initBaseColorPicker(n5, { color: e8.getColor(), change: function(e9) {
                      a3(e9);
                    }, move: function(e9) {
                      a3(e9, 0);
                    } });
                  }, l2.on("handler:remove", m)), v2 && l2.setColorPicker(v2), a2;
                }, emit: function(e7, t5) {
                  var n5 = e7.updateStyle, r4 = t5.partial;
                  n5(t5.value, { partial: r4 });
                }, update: function(e7) {
                  var t5 = e7.value, r4 = this.gp;
                  if (r4.getValue() !== t5) {
                    var o2 = r4.getHandlers();
                    o2.map(m), r4.setValue(t5, { silent: true }), n4.selectEdgeStops && [o2[0], o2[o2.length - 1]].filter(Boolean).map(function(e8) {
                      return e8.select({ keepSelect: true });
                    });
                  }
                }, destroy: function() {
                  var e7;
                  null === (e7 = this.gp) || void 0 === e7 || e7.destroy();
                } }), g2 && i2.addBuiltIn(g2, { type: "composite", fromStyle: function(e7, t5) {
                  var n5, r4 = t5.name, o2 = a(e7[r4] || ""), i3 = o2.type || s[0], d2 = c(o2.direction) || u[0];
                  return (n5 = {})[p] = l(i3, d2, o2.colors), n5[h] = i3, n5[f] = d2, n5;
                }, toStyle: function(e7, t5) {
                  var n5, r4 = t5.name, o2 = e7[p] || "", i3 = e7[h] || s[0], c2 = e7[f] || u[0], d2 = a(o2), v3 = l(i3, c2, d2.colors);
                  return (n5 = {})[r4] = v3, n5;
                }, properties: [{ name: " ", full: true, defaults: "none", type: y, property: p }, { name: "Direction", type: "select", defaults: "right", property: f, options: u.map(function(e7) {
                  return { value: e7 };
                }) }, { name: "Type", type: "select", defaults: "linear", property: h, options: s.map(function(e7) {
                  return { value: e7 };
                }) }] });
              }(e5, v({ grapickOpts: {}, selectEdgeStops: true, styleType: "gradient", builtInType: "background-image" }, n3));
            };
          })(), r2;
        })(), e2.exports = t2();
      } }, t = {};
      function n(r2) {
        var o = t[r2];
        if (void 0 !== o)
          return o.exports;
        var i = t[r2] = { exports: {} };
        return e[r2].call(i.exports, i, i.exports, n), i.exports;
      }
      n.n = (e2) => {
        var t2 = e2 && e2.__esModule ? () => e2["default"] : () => e2;
        return n.d(t2, { a: t2 }), t2;
      }, n.d = (e2, t2) => {
        for (var r2 in t2)
          n.o(t2, r2) && !n.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, n.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), n.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        "use strict";
        n.r(r), n.d(r, { BackgroundType: () => e2, default: () => y });
        var e2, t2 = n(180), o = n.n(t2), i = function() {
          return i = Object.assign || function(e3) {
            for (var t3, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t3 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t3, o2) && (e3[o2] = t3[o2]);
            return e3;
          }, i.apply(this, arguments);
        };
        !function(e3) {
          e3["Image"] = "image", e3["Color"] = "color", e3["Grad"] = "grad";
        }(e2 || (e2 = {}));
        var a = function(e3) {
          return e3.map(function(e4) {
            return { id: e4 };
          });
        }, l = function(n2) {
          var r2, o2 = ((r2 = {})[s] = e2.Image, r2);
          if (n2.indexOf("url(") > -1)
            o2[d] = n2;
          else if (n2.indexOf("gradient(") > -1) {
            var i2 = (0, t2.parseGradient)(n2), a2 = i2.stops;
            if (2 === a2.length && "linear" === i2.type && a2[0].color === a2[1].color)
              o2[s] = e2.Color, o2[p] = a2[0].color;
            else {
              var l2 = (0, t2.getValidDir)(i2.direction) || t2.GRAD_DIRS[0], c2 = i2.type || t2.GRAD_TYPES[0];
              o2[s] = e2.Grad, o2[f] = (0, t2.toGradient)(c2, l2, i2.colors), o2[v] = c2, o2[h] = l2;
            }
          }
          return o2;
        }, c = 'style="max-height: 16px; display: block; margin: 0 auto" viewBox="0 0 24 24"', u = "background-image", s = "__background-type", d = u, p = "".concat(d, "-color"), f = "".concat(d, "-gradient"), h = "".concat(f, "-dir"), v = "".concat(f, "-type"), g = "none";
        const y = function(n2, r2) {
          void 0 === r2 && (r2 = {});
          var y2 = i({ styleGradientOpts: {}, propExtender: function(e3) {
            return e3;
          } }, r2);
          o()(n2, i({ colorPicker: "default" }, y2.styleGradientOpts));
          n2.Styles.addBuiltIn("background", { type: "stack", layerSeparator: new RegExp("(?<!\\(.*[^)]),(?![^(]*\\))"), layerJoin: ", ", detached: true, layerLabel: function(e3, t3) {
            var n3, r3 = t3.values, o2 = t3.property.getProperty(s).getOption(r3[s]);
            return (null == o2 ? void 0 : o2.title) ? "".concat((n3 = o2.title) && n3.charAt(0).toUpperCase() + n3.substring(1)) : "";
          }, fromStyle: function(e3, t3) {
            var n3 = t3.property, r3 = t3.name, o2 = n3.getLayerSeparator(), a2 = n3.getProperties(), c2 = [];
            return e3[u] ? (c2 = n3.__splitStyleName(e3, u, o2).map(l), a2.forEach(function(t4) {
              var r4 = t4.getId(), a3 = t4.getName();
              a3 !== u && n3.__splitStyleName(e3, a3, o2).map(function(e4) {
                var n4;
                return (n4 = {})[r4] = e4 || t4.getDefaultValue(), n4;
              }).forEach(function(e4, t5) {
                c2[t5] = c2[t5] ? i(i({}, c2[t5]), e4) : e4;
              });
            })) : e3[r3] && (c2 = n3.__splitStyleName(e3, r3, /(?![^)(]*\([^)(]*?\)\)),(?![^\(]*\))/).map(function(e4) {
              return e4.substring(0, e4.lastIndexOf(")") + 1);
            }).map(l)), c2;
          }, toStyle: function(n3) {
            var r3 = i({}, n3), o2 = r3[s], a2 = r3[d];
            if (o2 === e2.Color) {
              var l2 = r3[p];
              a2 = l2 === g ? g : "linear-gradient(".concat(l2, " 0%, ").concat(l2, " 100%)");
            } else if (o2 === e2.Grad) {
              var c2 = (0, t2.parseGradient)(r3[f] || "");
              a2 = (0, t2.toGradient)(r3[v] || t2.GRAD_TYPES[0], r3[h] || t2.GRAD_DIRS[0], c2.colors);
            }
            return delete r3[d], delete r3[p], delete r3[f], delete r3[h], delete r3[v], i(i({}, r3), { "background-image": a2 || g });
          }, properties: [{ label: " ", property: s, type: "radio", default: e2.Image, onChange: function(t3) {
            var n3 = t3.property, r3 = t3.to.value;
            r3 && n3.getParent().getProperties().forEach(function(t4) {
              var n4 = t4.getName(), o2 = false;
              n4 !== s && ((r3 === e2.Image && [p, f, h, v].indexOf(n4) < 0 || r3 === e2.Color && n4 === p || r3 === e2.Grad && [f, h, v].indexOf(n4) >= 0) && (o2 = true), t4.up({ visible: o2 }));
            });
          }, options: [{ id: e2.Image, title: "Image", label: "<svg ".concat(c, '><path fill="currentColor" d="M8.5 13.5l2.5 3 3.5-4.5 4.5 6H5m16 1V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2z"/></svg>') }, { id: e2.Color, title: "Color", label: "<svg ".concat(c, '><path fill="currentColor" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2z"/></svg>') }, { id: e2.Grad, title: "Gradient", label: "<svg ".concat(c, '><path fill="currentColor" d="M11 9h2v2h-2V9m-2 2h2v2H9v-2m4 0h2v2h-2v-2m2-2h2v2h-2V9M7 9h2v2H7V9m12-6H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2M9 18H7v-2h2v2m4 0h-2v-2h2v2m4 0h-2v-2h2v2m2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14v6z"/></svg>') }] }, { label: "Image", property: d, default: "none", functionName: "url", type: "file", full: true }, { property: "background-repeat", default: "repeat", type: "select", options: [{ id: "repeat", label: "Repeat" }, { id: "repeat-x", label: "Repeat x" }, { id: "repeat-y", label: "Repeat y" }, { id: "no-repeat", label: "No repeat" }, { id: "space", label: "Space" }, { id: "round", label: "Round" }] }, { property: "background-position", default: "left top", type: "select", options: a(["left top", "left center", "left bottom", "right top", "right center", "right bottom", "center top", "center center", "center bottom"]) }, { property: "background-attachment", default: "scroll", type: "select", options: a(["scroll", "fixed", "local"]) }, { type: "select", default: "auto", property: "background-size", options: a(["auto", "cover", "contain"]) }, { label: "Color", property: p, default: "none", type: "color", full: true }, { label: "Gradient", property: f, default: "linear-gradient(right, black 0%, white 100%)", type: "gradient", full: true }, { name: "Direction", property: h, type: "select", default: "right", options: a(t2.GRAD_DIRS) }, { name: "Type", property: v, default: "linear", type: "select", options: a(t2.GRAD_TYPES) }].map(function(e3) {
            var t3;
            return (null === (t3 = y2.propExtender) || void 0 === t3 ? void 0 : t3.call(y2, e3)) || e3;
          }) });
        };
      })(), r;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-style-bg/dist/index.js:
  (*! grapesjs-style-bg - 2.0.2 *)
*/
//# sourceMappingURL=grapesjs-style-bg.js.map
