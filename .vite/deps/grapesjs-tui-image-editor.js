import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-tui-image-editor@1.0.2/node_modules/grapesjs-tui-image-editor/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-tui-image-editor@1.0.2/node_modules/grapesjs-tui-image-editor/dist/index.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["grapesjs-tui-image-editor"] = e() : t["grapesjs-tui-image-editor"] = e();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var t = { d: (e2, o2) => {
        for (var n2 in o2)
          t.o(o2, n2) && !t.o(e2, n2) && Object.defineProperty(e2, n2, { enumerable: true, get: o2[n2] });
      }, o: (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), r: (t2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      } }, e = {};
      t.r(e), t.d(e, { default: () => i });
      var o = function() {
        return o = Object.assign || function(t2) {
          for (var e2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i2 in e2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(e2, i2) && (t2[i2] = e2[i2]);
          return t2;
        }, o.apply(this, arguments);
      }, n = function(t2, e2, o2) {
        if (o2 || 2 === arguments.length)
          for (var n2, i2 = 0, r = e2.length; i2 < r; i2++)
            !n2 && i2 in e2 || (n2 || (n2 = Array.prototype.slice.call(e2, 0, i2)), n2[i2] = e2[i2]);
        return t2.concat(n2 || Array.prototype.slice.call(e2));
      };
      const i = function(t2, e2) {
        void 0 === e2 && (e2 = {});
        var i2 = o({ config: {}, constructor: "", labelImageEditor: "Image Editor", labelApply: "Apply", height: "650px", width: "100%", commandId: "tui-image-editor", toolbarIcon: '<svg viewBox="0 0 24 24">\n                    <path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z">\n                    </path>\n                  </svg>', hideHeader: true, addToAssets: true, upload: false, onApplyButton: function() {
        }, onApply: null, script: ["https://uicdn.toast.com/tui.code-snippet/v1.5.2/tui-code-snippet.min.js", "https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.js", "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.js"], style: ["https://uicdn.toast.com/tui-color-picker/v2.2.7/tui-color-picker.min.css", "https://uicdn.toast.com/tui-image-editor/v3.15.2/tui-image-editor.min.css"] }, e2), r = i2.script, a = i2.style, l = i2.height, d = i2.width, s = i2.hideHeader, c = i2.onApply, p = i2.upload, u = i2.addToAssets, g = i2.commandId, f = "undefined" != typeof window, m = function() {
          var t3;
          return i2.constructor || f && (null === (t3 = window.tui) || void 0 === t3 ? void 0 : t3.ImageEditor);
        }, h = m();
        if (!h && (null == r ? void 0 : r.length) && f) {
          var y = document.head, v = Array.isArray(r) ? n([], r, true) : [r], b = Array.isArray(a) ? n([], a, true) : [a], T = function(t3) {
            if (t3.length) {
              var e3 = document.createElement("link");
              e3.href = t3.shift(), e3.rel = "stylesheet", y.appendChild(e3), T(t3);
            }
          }, w = function(t3) {
            if (t3.length) {
              var e3 = document.createElement("script");
              e3.src = t3.shift(), e3.onerror = e3.onload = w.bind(null, t3), y.appendChild(e3);
            } else
              h = m();
          };
          T(b), w(v);
        }
        i2.toolbarIcon && t2.Components.addType("image", { extendFn: ["initToolbar"], model: { initToolbar: function() {
          var t3 = this.get("toolbar");
          (null == t3 ? void 0 : t3.some(function(t4) {
            return t4.command === g;
          })) || (null == t3 || t3.unshift({ command: g, label: i2.toolbarIcon }), this.set("toolbar", t3));
        } } });
        var A = { level: "error", ns: g };
        t2.Commands.add(g, { imageEditor: null, run: function(t3, e3, o2) {
          var n2 = this;
          if (void 0 === o2 && (o2 = {}), !h)
            return t3.log("TOAST UI Image editor not found", A), t3.stopCommand(g);
          var r2 = o2.target || t3.getSelected();
          if (!r2)
            return t3.log("Target not available", A), t3.stopCommand(g);
          var a2 = this.createContent(), l2 = i2.labelImageEditor, d2 = a2.children[1];
          t3.Modal.open({ title: l2, content: a2 }).onceClose(function() {
            return t3.stopCommand(g);
          });
          var s2 = this.getEditorConfig(r2.get("src"));
          this.imageEditor = new h(a2.children[0], s2), t3.getModel().setEditing(true), d2.onclick = function() {
            return n2.applyChanges(r2);
          }, i2.onApplyButton(d2);
        }, stop: function(t3) {
          var e3;
          null === (e3 = this.imageEditor) || void 0 === e3 || e3.destroy(), t3.getModel().setEditing(false);
        }, getEditorConfig: function(t3) {
          var e3 = o({}, i2.config);
          return e3.includeUI || (e3.includeUI = {}), e3.includeUI = o(o({ theme: {} }, e3.includeUI), { loadImage: { path: t3, name: "1" }, uiSize: { height: l, width: d } }), s && (e3.includeUI.theme["header.display"] = "none"), e3;
        }, createContent: function() {
          var t3 = document.createElement("div");
          return t3.style.position = "relative", t3.innerHTML = '\n        <div></div>\n        <button class="tui-image-editor__apply-btn" style="\n          position: absolute;\n          top: 0; right: 0;\n          margin: 10px;\n          background-color: #fff;\n          font-size: 1rem;\n          border-radius: 3px;\n          border: none;\n          padding: 10px 20px;\n          cursor: pointer\n        ">\n          '.concat(i2.labelApply, "\n        </botton>\n      "), t3;
        }, applyChanges: function(t3) {
          var e3 = this, o2 = this.imageEditor;
          c ? c(o2, t3) : "CROPPER" === o2.getDrawingMode() ? o2.crop(o2.getCropzoneRect()).then(function() {
            e3.uploadImage(o2, t3);
          }) : this.uploadImage(o2, t3);
        }, uploadImage: function(e3, o2) {
          var n2 = this, i3 = t2.Assets, r2 = e3.toDataURL();
          if (p) {
            var a2 = this.dataUrlToBlob(r2);
            i3.FileUploader().uploadFile({ dataTransfer: { files: [a2] } }, function(t3) {
              var e4 = t3 && t3.data && t3.data[0], i4 = e4 && ("string" == typeof e4 ? e4 : e4.src);
              i4 && n2.applyToTarget(i4, o2);
            });
          } else
            u && i3.add({ src: r2, name: (o2.get("src") || "").split("/").pop() }), this.applyToTarget(r2, o2);
        }, applyToTarget: function(e3, o2) {
          o2.set("src", e3), t2.Modal.close();
        }, dataUrlToBlob: function(t3) {
          for (var e3 = t3.split(","), o2 = window.atob(e3[1]), n2 = e3[0].split(":")[1].split(";")[0], i3 = new ArrayBuffer(o2.length), r2 = new Uint8Array(i3), a2 = 0; a2 < o2.length; a2++)
            r2[a2] = o2.charCodeAt(a2);
          return new Blob([i3], { type: n2 });
        } });
      };
      return e;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-tui-image-editor/dist/index.js:
  (*! grapesjs-tui-image-editor - 1.0.2 *)
*/
//# sourceMappingURL=grapesjs-tui-image-editor.js.map
