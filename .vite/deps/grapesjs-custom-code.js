import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-custom-code@1.0.2/node_modules/grapesjs-custom-code/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-custom-code@1.0.2/node_modules/grapesjs-custom-code/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-custom-code"] = t() : e["grapesjs-custom-code"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var e = { d: (t2, o2) => {
        for (var n2 in o2)
          e.o(o2, n2) && !e.o(t2, n2) && Object.defineProperty(t2, n2, { enumerable: true, get: o2[n2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => d });
      var o = "custom-code-plugin__code", n = "custom-code", i = "custom-code:open-modal", r = function() {
        return r = Object.assign || function(e2) {
          for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i2 in t2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        }, r.apply(this, arguments);
      };
      var s = function() {
        return s = Object.assign || function(e2) {
          for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i2 in t2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        }, s.apply(this, arguments);
      };
      var a = function() {
        return a = Object.assign || function(e2) {
          for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i2 in t2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        }, a.apply(this, arguments);
      };
      var c = function() {
        return c = Object.assign || function(e2) {
          for (var t2, o2 = 1, n2 = arguments.length; o2 < n2; o2++)
            for (var i2 in t2 = arguments[o2])
              Object.prototype.hasOwnProperty.call(t2, i2) && (e2[i2] = t2[i2]);
          return e2;
        }, c.apply(this, arguments);
      };
      const d = function(e2, t2) {
        void 0 === t2 && (t2 = {});
        var d2 = c({ blockCustomCode: {}, propsCustomCode: {}, toolbarBtnCustomCode: {}, placeholderScript: `<div style="pointer-events: none; padding: 10px;">
      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
        </svg>
      Custom code with <i>&lt;script&gt;</i> can't be rendered on the canvas
    </div>`, modalTitle: "Insert your code", codeViewOptions: {}, buttonLabel: "Save", commandCustomCode: {} }, t2);
        !function(e3, t3) {
          void 0 === t3 && (t3 = {});
          var r2, s2 = e3.Components, c2 = t3.toolbarBtnCustomCode;
          s2.addType("script", { view: { onRender: function() {
            var e4 = this.model, t4 = this.el;
            e4.closestType(n) && (t4.innerHTML = "");
          } } }), s2.addType(n, { model: { defaults: a({ name: "Custom Code", editable: true, components: { tagName: "span", components: { type: "textnode", content: "Insert here your custom code" } } }, t3.propsCustomCode), init: function() {
            this.on("change:".concat(o), this.onCustomCodeChange);
            var e4 = this.get(o);
            !this.components().length && this.components(e4);
            var t4 = this.get("toolbar"), n2 = "custom-code";
            c2 && !t4.filter(function(e5) {
              return e5.id === n2;
            }).length && t4.unshift(a({ id: n2, command: i, label: '<svg viewBox="0 0 24 24">\n              <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>\n            </svg>' }, c2));
          }, onCustomCodeChange: function() {
            this.components(this.get(o));
          } }, view: { events: { dblclick: "onActive" }, init: function() {
            this.listenTo(this.model.components(), "add remove reset", this.onComponentsChange), this.onComponentsChange();
          }, onComponentsChange: function() {
            var e4 = this;
            r2 && clearInterval(r2), r2 = setTimeout(function() {
              var n2 = e4, i2 = n2.model, r3 = n2.el, s3 = true;
              (i2.get(o) || "").indexOf("<script") >= 0 && t3.placeholderScript && (r3.innerHTML = t3.placeholderScript, s3 = false), i2.set({ droppable: s3 });
            }, 0);
          }, onActive: function() {
            var e4 = this.model;
            this.em.get("Commands").run(i, { target: e4 });
          } } });
        }(e2, d2), function(e3, t3) {
          var o2 = (void 0 === t3 ? {} : t3).blockCustomCode, i2 = e3.Blocks;
          o2 && i2.add(n, r({ label: "Custom Code", media: '\n      <svg viewBox="0 0 24 24">\n        <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>\n      </svg>\n    ', category: "Extra", activate: true, select: true, content: { type: n } }, o2));
        }(e2, d2), function(e3, t3) {
          void 0 === t3 && (t3 = {});
          var n2 = t3.modalTitle, r2 = t3.codeViewOptions, a2 = t3.commandCustomCode, c2 = function(e4, t4) {
            t4 instanceof HTMLElement ? e4.appendChild(t4) : t4 && e4.insertAdjacentHTML("beforeend", t4);
          };
          e3.Commands.add(i, s({ keyCustomCode: o, target: null, codeViewer: null, run: function(e4, t4, o2) {
            void 0 === o2 && (o2 = {});
            var n3 = o2.target || e4.getSelected();
            this.target = n3, (null == n3 ? void 0 : n3.get("editable")) && this.showCustomCode(n3, o2);
          }, stop: function(e4) {
            e4.Modal.close();
          }, showCustomCode: function(t4, r3) {
            var s2 = r3.title || n2, a3 = t4.get(o) || "", c3 = this.getContent();
            e3.Modal.open({ title: s2, content: c3 }).onceClose(function() {
              return e3.stopCommand(i);
            }), this.getCodeViewer().setContent(a3);
          }, getPreContent: function() {
          }, getPostContent: function() {
          }, getContent: function() {
            var t4 = this.getCodeViewer(), o2 = document.createElement("div"), n3 = e3.getConfig("stylePrefix");
            return o2.className = "".concat(n3, "custom-code"), c2(o2, this.getPreContent()), o2.appendChild(t4.getElement()), c2(o2, this.getPostContent()), c2(o2, this.getContentActions()), t4.refresh(), setTimeout(function() {
              return t4.focus();
            }, 0), o2;
          }, getContentActions: function() {
            var o2 = this, n3 = document.createElement("button");
            n3.setAttribute("type", "button");
            var i2 = e3.getConfig("stylePrefix");
            return n3.innerHTML = t3.buttonLabel, n3.className = "".concat(i2, "btn-prim ").concat(i2, "btn-import__custom-code"), n3.onclick = function() {
              return o2.handleSave();
            }, n3;
          }, handleSave: function() {
            var t4 = this.target, n3 = this.getCodeViewer().getContent();
            null == t4 || t4.set(o, n3), e3.Modal.close();
          }, getCodeViewer: function() {
            return this.codeViewer || (this.codeViewer = e3.CodeManager.createViewer(s({ codeName: "htmlmixed", theme: "hopscotch", readOnly: 0 }, r2))), this.codeViewer;
          } }, a2));
        }(e2, d2);
      };
      return t;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-custom-code/dist/index.js:
  (*! grapesjs-custom-code - 1.0.2 *)
*/
//# sourceMappingURL=grapesjs-custom-code.js.map
