import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-component-countdown@1.0.2/node_modules/grapesjs-component-countdown/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-component-countdown@1.0.2/node_modules/grapesjs-component-countdown/dist/index.js"(exports, module) {
    !function(n, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-component-countdown"] = t() : n["grapesjs-component-countdown"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var n = { d: (t2, e2) => {
        for (var o2 in e2)
          n.o(e2, o2) && !n.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: e2[o2] });
      }, o: (n2, t2) => Object.prototype.hasOwnProperty.call(n2, t2), r: (n2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      } }, t = {};
      n.r(t), n.d(t, { default: () => o });
      var e = function() {
        return e = Object.assign || function(n2) {
          for (var t2, e2 = 1, o2 = arguments.length; e2 < o2; e2++)
            for (var a in t2 = arguments[e2])
              Object.prototype.hasOwnProperty.call(t2, a) && (n2[a] = t2[a]);
          return n2;
        }, e.apply(this, arguments);
      };
      const o = function(n2, t2) {
        void 0 === t2 && (t2 = {});
        var o2 = e({ id: "countdown", label: "Countdown", block: {}, props: {}, style: "", styleAdditional: "", startTime: "", endText: "EXPIRED", dateInputType: "date", labelDays: "days", labelHours: "hours", labelMinutes: "minutes", labelSeconds: "seconds", classPrefix: "countdown" }, t2), a = o2.block, c = o2.props, d = o2.style, s = o2.id, l = o2.label, i = o2.classPrefix;
        a && n2.Blocks.add(s, e({ media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M12 20C16.4 20 20 16.4 20 12S16.4 4 12 4 4 7.6 4 12 7.6 20 12 20M12 2C17.5 2 22 6.5 22 12S17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2M17 11.5V13H11V7H12.5V11.5H17Z" />\n      </svg>', label: l, category: "Extra", select: true, content: { type: s } }, a));
        n2.Components.addType(s, { model: { defaults: e({ startfrom: o2.startTime, classes: [i], endText: o2.endText, droppable: false, script: function(n3) {
          var t3 = n3.startfrom, e2 = n3.endText, o3 = this, a2 = new Date(t3).getTime(), c2 = o3.querySelector("[data-js=countdown]"), d2 = o3.querySelector("[data-js=countdown-endtext]"), s2 = o3.querySelector("[data-js=countdown-day]"), l2 = o3.querySelector("[data-js=countdown-hour]"), i2 = o3.querySelector("[data-js=countdown-minute]"), r = o3.querySelector("[data-js=countdown-second]"), u = o3.__gjsCountdownInterval;
          u && clearInterval(u);
          var p = window.__gjsCountdownIntervals || [], v = [];
          p.forEach(function(n4) {
            n4.isConnected || (clearInterval(n4.__gjsCountdownInterval), v.push(n4));
          }), p.indexOf(o3) < 0 && p.push(o3), window.__gjsCountdownIntervals = p.filter(function(n4) {
            return v.indexOf(n4) < 0;
          });
          var y = function(n4, t4, e3, o4) {
            s2.innerHTML = "".concat(n4 < 10 ? "0" + n4 : n4), l2.innerHTML = "".concat(t4 < 10 ? "0" + t4 : t4), i2.innerHTML = "".concat(e3 < 10 ? "0" + e3 : e3), r.innerHTML = "".concat(o4 < 10 ? "0" + o4 : o4);
          }, f = function() {
            var n4 = (/* @__PURE__ */ new Date()).getTime(), t4 = a2 - n4, s3 = Math.floor(t4 / 864e5), l3 = Math.floor(t4 % 864e5 / 36e5), i3 = Math.floor(t4 % 36e5 / 6e4), r2 = Math.floor(t4 % 6e4 / 1e3);
            y(s3, l3, i3, r2), t4 < 0 && (clearInterval(o3.__gjsCountdownInterval), d2.innerHTML = e2, c2.style.display = "none", d2.style.display = "");
          };
          a2 ? (o3.__gjsCountdownInterval = setInterval(f, 1e3), d2.style.display = "none", c2.style.display = "", f()) : y(0, 0, 0, 0);
        }, "script-props": ["startfrom", "endText"], traits: [{ label: "Start", name: "startfrom", changeProp: true, type: o2.dateInputType }, { label: "End text", name: "endText", changeProp: true }], components: '\n          <span data-js="countdown" class="'.concat(i, '-cont">\n            <div class="').concat(i, '-block">\n              <div data-js="countdown-day" class="').concat(i, '-digit"></div>\n              <div class="').concat(i, '-label">').concat(o2.labelDays, '</div>\n            </div>\n            <div class="').concat(i, '-block">\n              <div data-js="countdown-hour" class="').concat(i, '-digit"></div>\n              <div class="').concat(i, '-label">').concat(o2.labelHours, '</div>\n            </div>\n            <div class="').concat(i, '-block">\n              <div data-js="countdown-minute" class="').concat(i, '-digit"></div>\n              <div class="').concat(i, '-label">').concat(o2.labelMinutes, '</div>\n            </div>\n            <div class="').concat(i, '-block">\n              <div data-js="countdown-second" class="').concat(i, '-digit"></div>\n              <div class="').concat(i, '-label">').concat(o2.labelSeconds, '</div>\n            </div>\n          </span>\n          <span data-js="countdown-endtext" class="').concat(i, '-endtext"></span>\n        '), styles: (d || "\n          .".concat(i, " {\n            text-align: center;\n          }\n\n          .").concat(i, "-block {\n            display: inline-block;\n            margin: 0 10px;\n            padding: 10px;\n          }\n\n          .").concat(i, "-digit {\n            font-size: 5rem;\n          }\n\n          .").concat(i, "-endtext {\n            font-size: 5rem;\n          }\n\n          .").concat(i, "-cont {\n            display: inline-block;\n          }\n        ")) + o2.styleAdditional }, c) } });
      };
      return t;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-component-countdown/dist/index.js:
  (*! grapesjs-component-countdown - 1.0.2 *)
*/
//# sourceMappingURL=grapesjs-component-countdown.js.map
