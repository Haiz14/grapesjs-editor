import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-typed@2.0.1/node_modules/grapesjs-typed/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-typed@2.0.1/node_modules/grapesjs-typed/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-typed"] = t() : e["grapesjs-typed"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var e = { d: (t2, n2) => {
        for (var o2 in n2)
          e.o(n2, o2) && !e.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: n2[o2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => c });
      var n = "typed", o = "typed-strings", r = function() {
        return r = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var r2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
          return e2;
        }, r.apply(this, arguments);
      }, a = function(e2, t2, n2) {
        if (n2 || 2 === arguments.length)
          for (var o2, r2 = 0, a2 = t2.length; r2 < a2; r2++)
            !o2 && r2 in t2 || (o2 || (o2 = Array.prototype.slice.call(t2, 0, r2)), o2[r2] = t2[r2]);
        return e2.concat(o2 || Array.prototype.slice.call(t2));
      };
      var s = function() {
        return s = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var r2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
          return e2;
        }, s.apply(this, arguments);
      };
      var p = function() {
        return p = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var r2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
          return e2;
        }, p.apply(this, arguments);
      };
      const c = function(e2, t2) {
        void 0 === t2 && (t2 = {});
        var c2 = p({ script: "https://cdn.jsdelivr.net/npm/typed.js@2.0.11", block: {}, props: function(e3) {
          return e3;
        } }, t2);
        !function(e3, t3) {
          var s2 = e3.DomComponents, p2 = Object.keys, c3 = { strings: [], "type-speed": 0, "start-delay": 0, "back-speed": 0, "smart-backspace": true, "back-delay": 700, "fade-out": false, "fade-out-class": "typed-fade-out", "fade-out-delay": 500, "show-cursor": true, "cursor-char": "|", "auto-insert-css": true, "bind-input-focus-events": false, "content-type": "html", loop: false, "loop-count": 1 / 0, shuffle: false, attr: "" }, i = p2(c3), d = i.filter(function(e4) {
            return ["strings"].indexOf(e4) < 0;
          }).map(function(e4) {
            return { changeProp: true, type: (t4 = c3[e4], "number" == typeof t4 ? "number" : "boolean" == typeof t4 ? "checkbox" : "text"), min: 0, name: e4 };
            var t4;
          });
          d.unshift({ changeProp: true, name: "strings", type: o }), s2.addType(n, { model: { defaults: t3.props(r(r({}, c3), { typedsrc: t3.script, droppable: 0, traits: d, "script-props": a(a([], i, true), ["typedsrc"], false), script: function(e4) {
            var t4, n2 = this, o2 = (t4 = e4.strings, Array.isArray(t4) ? t4 : t4.indexOf("\n") >= 0 ? t4.split("\n") : []), r2 = function(e5) {
              return parseInt(e5, 10) || 0;
            }, a2 = function(e5) {
              return !!e5;
            }, s3 = function() {
              var t5 = n2;
              t5.innerHTML = "<span></span>";
              var s4 = parseInt("".concat(e4["loop-count"]), 10);
              "".concat(e4["type-speed"]);
              var p4 = { typeSpeed: r2(e4["type-speed"]), startDelay: r2(e4["start-delay"]), backDelay: r2(e4["back-delay"]), backSpeed: r2(e4["back-speed"]), smartBackspace: a2(e4["smart-backspace"]), fadeOut: a2(e4["fade-out"]), fadeOutClass: e4["fade-out-class"], fadeOutDelay: r2(e4["fade-out-delay"]), shuffle: a2(e4.shuffle), loop: a2(e4.loop), loopCount: isNaN(s4) ? 1 / 0 : s4, showCursor: a2(e4["show-cursor"]), cursorChar: e4["cursor-char"], autoInsertCss: a2(e4["auto-insert-css"]), bindInputFocusEvents: a2(e4["bind-input-focus-events"]), attr: e4.attr, contentType: e4["content-type"] };
              o2 && o2.length && (p4.strings = o2), new window.Typed(t5.children[0], p4);
            };
            if (window.Typed)
              s3();
            else {
              var p3 = document.createElement("script");
              p3.src = e4.typedsrc, p3.onload = s3, document.head.appendChild(p3);
            }
          } })) } });
        }(e2, c2), function(e3, t3) {
          var o2 = e3.BlockManager, r2 = t3.block;
          r2 && o2.add(n, s({ label: "Typed", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"><path d="M212.3 44l2.3 49.6h-6A60 60 0 00204 75c-3.2-6-7.5-10.5-12.9-13.3a44.9 44.9 0 00-21.1-4.3h-29.8V219c0 13 1.4 21 4.2 24.3 4 4.4 10 6.6 18.2 6.6h7.4v5.7H80.2V250h7.5c9 0 15.3-2.7 19-8.2 2.4-3.3 3.5-10.9 3.5-22.7V57.3H84.8a71 71 0 00-21.1 2.2 29 29 0 00-13.9 11.3 46.1 46.1 0 00-6.9 22.8H37L39.5 44h172.8zM245 22h18v256h-18z"/></svg>', content: { type: n }, select: true }, r2));
        }(e2, c2), function(e3) {
          e3.TraitManager.addType(o, { createInput: function(e4) {
            var t3 = e4.component;
            return "<textarea>".concat(t3.get("strings").join("\n"), "</textarea>");
          }, onUpdate: function(e4) {
            var t3 = e4.component;
            e4.elInput.value = t3.get("strings").join("\n");
          }, onEvent: function(e4) {
            var t3 = e4.component, n2 = (e4.elInput.value || "").split("\n");
            t3.set("strings", n2);
          } });
        }(e2);
      };
      return t;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-typed/dist/index.js:
  (*! grapesjs-typed - 2.0.1 *)
*/
//# sourceMappingURL=grapesjs-typed.js.map
