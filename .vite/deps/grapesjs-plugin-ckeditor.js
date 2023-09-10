import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-plugin-ckeditor@1.0.1/node_modules/grapesjs-plugin-ckeditor/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-plugin-ckeditor@1.0.1/node_modules/grapesjs-plugin-ckeditor/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-plugin-ckeditor"] = t() : e["grapesjs-plugin-ckeditor"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var e = { d: (t2, n2) => {
        for (var o2 in n2)
          e.o(n2, o2) && !e.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: n2[o2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => i });
      var n = function() {
        return n = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var r2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, r2) && (e2[r2] = t2[r2]);
          return e2;
        }, n.apply(this, arguments);
      }, o = function(e2, t2) {
        [].forEach.call(e2, t2);
      }, r = function(e2) {
        return e2.stopPropagation();
      };
      const i = function(e2, t2) {
        void 0 === t2 && (t2 = {});
        var i2, a, c, l = n({ options: {}, customRte: {}, position: "left", ckeditor: "https://cdn.ckeditor.com/4.21.0/standard-all/ckeditor.js", onToolbar: function() {
        } }, t2), u = l.ckeditor, s = "undefined" != typeof window, d = false;
        u ? "string" == typeof u ? s && (d = true, (a = u, (c = document.createElement("script")).src = a, document.head.appendChild(c), c).onload = function() {
          i2 = window.CKEDITOR;
        }) : u.inline && (i2 = u) : s && (i2 = window.CKEDITOR);
        var f = function() {
          return setTimeout(function() {
            return e2.refresh();
          }, 0);
        }, p = function() {
          e2.log("CKEDITOR instance not found", { level: "error" });
        };
        if (!i2 && !d)
          return p();
        var g = function(e3, t3) {
          var n2;
          (null === (n2 = null == t3 ? void 0 : t3.focusManager) || void 0 === n2 ? void 0 : n2.hasFocus) || (e3.contentEditable = "true", null == t3 || t3.focus(), f());
        };
        e2.setCustomRte(n({ getContent: function(e3, t3) {
          return t3.getData();
        }, enable: function(t3, a2) {
          if (a2 && "destroyed" != a2.status)
            return g(t3, a2), a2;
          if (i2) {
            var c2 = e2.RichTextEditor.getToolbarEl();
            o(c2.children, function(e3) {
              e3.style.display = "none";
            });
            var u2 = n({}, l.options), s2 = "sharedspace";
            return u2.extraPlugins ? "string" == typeof u2.extraPlugins ? u2.extraPlugins += ",".concat(s2) : Array.isArray(u2.extraPlugins) && u2.extraPlugins.push(s2) : u2.extraPlugins = s2, u2.sharedSpaces || (u2.sharedSpaces = { top: c2 }), (a2 = i2.inline(t3, u2)).on("contentDom", function() {
              var e3 = a2.editable();
              e3.attachListener(e3, "click", function() {
                return t3.click();
              });
            }), a2.on("instanceReady", function() {
              var t4 = c2.querySelector("#cke_".concat(a2.name));
              t4 && (t4.style.display = "block", l.onToolbar(t4)), e2.refresh(), f();
            }), a2.on("dialogShow", function() {
              var e3 = document.querySelectorAll(".cke_dialog_background_cover, .cke_dialog_container");
              o(e3, function(e4) {
                e4.removeEventListener("mousedown", r), e4.addEventListener("mousedown", r);
              });
            }), a2.on("key", function(e3) {
              13 === e3.data.keyCode && f();
            }), g(t3, a2), a2;
          }
          p();
        }, disable: function(e3, t3) {
          var n2;
          e3.contentEditable = "false", null === (n2 = null == t3 ? void 0 : t3.focusManager) || void 0 === n2 || n2.blur(true);
        } }, l.customRte)), e2.on("rteToolbarPosUpdate", function(e3) {
          var t3 = e3.elRect;
          switch (l.position) {
            case "center":
              e3.left = t3.width / 2 - e3.targetWidth / 2;
              break;
            case "right":
              e3.left = "", e3.right = 0;
          }
        });
      };
      return t;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-plugin-ckeditor/dist/index.js:
  (*! grapesjs-plugin-ckeditor - 1.0.1 *)
*/
//# sourceMappingURL=grapesjs-plugin-ckeditor.js.map
