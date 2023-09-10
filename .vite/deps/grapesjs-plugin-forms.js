import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-plugin-forms@2.0.6/node_modules/grapesjs-plugin-forms/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-plugin-forms@2.0.6/node_modules/grapesjs-plugin-forms/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-plugin-forms"] = t() : e["grapesjs-plugin-forms"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var e = { d: (t2, n2) => {
        for (var o2 in n2)
          e.o(n2, o2) && !e.o(t2, o2) && Object.defineProperty(t2, o2, { enumerable: true, get: n2[o2] });
      }, o: (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), r: (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      } }, t = {};
      e.r(t), e.d(t, { default: () => m });
      var n = "form", o = "input", a = "textarea", i = "select", s = "checkbox", r = "radio", p = "button", c = "label", l = "option";
      var d = function() {
        return d = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var a2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
          return e2;
        }, d.apply(this, arguments);
      };
      var u = function() {
        return u = Object.assign || function(e2) {
          for (var t2, n2 = 1, o2 = arguments.length; n2 < o2; n2++)
            for (var a2 in t2 = arguments[n2])
              Object.prototype.hasOwnProperty.call(t2, a2) && (e2[a2] = t2[a2]);
          return e2;
        }, u.apply(this, arguments);
      };
      const m = function(e2, t2) {
        void 0 === t2 && (t2 = {});
        var m2 = u({ blocks: ["form", "input", "textarea", "select", "button", "label", "checkbox", "radio"], category: { id: "forms", label: "Forms" }, block: function() {
          return {};
        } }, t2);
        !function(e3) {
          var t3 = e3.Components, d2 = { name: "name" }, u2 = { name: "placeholder" }, m3 = { type: "checkbox", name: "required" }, h = function(e4, t4) {
            return { type: l, content: t4, attributes: { value: e4 } };
          }, v = function(t4) {
            e3.Commands.isActive("preview") || t4.preventDefault();
          };
          t3.addType(n, { isComponent: function(e4) {
            return "FORM" == e4.tagName;
          }, model: { defaults: { tagName: "form", droppable: ":not(form)", draggable: ":not(form)", attributes: { method: "get" }, traits: [{ type: "select", name: "method", options: [{ value: "get", name: "GET" }, { value: "post", name: "POST" }] }, { name: "action" }] } }, view: { events: { submit: function(e4) {
            return e4.preventDefault();
          } } } }), t3.addType(o, { isComponent: function(e4) {
            return "INPUT" == e4.tagName;
          }, model: { defaults: { tagName: "input", droppable: false, highlightable: false, attributes: { type: "text" }, traits: [d2, u2, { type: "select", name: "type", options: [{ value: "text" }, { value: "email" }, { value: "password" }, { value: "number" }] }, m3] } }, extendFnView: ["updateAttributes"], view: { updateAttributes: function() {
            this.el.setAttribute("autocomplete", "off");
          } } }), t3.addType(a, { extend: o, isComponent: function(e4) {
            return "TEXTAREA" == e4.tagName;
          }, model: { defaults: { tagName: "textarea", attributes: {}, traits: [d2, u2, m3] } } }), t3.addType(l, { isComponent: function(e4) {
            return "OPTION" == e4.tagName;
          }, model: { defaults: { tagName: "option", layerable: false, droppable: false, draggable: false, highlightable: false } } }), t3.addType(i, { isComponent: function(e4) {
            return "SELECT" == e4.tagName;
          }, model: { defaults: { tagName: "select", droppable: false, highlightable: false, components: [h("opt1", "Option 1"), h("opt2", "Option 2")], traits: [d2, { name: "options", type: "select-options" }, m3] } }, view: { events: { mousedown: v } } }), t3.addType(s, { extend: o, isComponent: function(e4) {
            return "INPUT" == e4.tagName && "checkbox" == e4.type;
          }, model: { defaults: { copyable: false, attributes: { type: "checkbox" }, traits: [{ name: "id" }, d2, { name: "value" }, m3, { type: "checkbox", name: "checked" }] } }, view: { events: { click: v }, init: function() {
            this.listenTo(this.model, "change:attributes:checked", this.handleChecked);
          }, handleChecked: function() {
            var e4;
            this.el.checked = !!(null === (e4 = this.model.get("attributes")) || void 0 === e4 ? void 0 : e4.checked);
          } } }), t3.addType(r, { extend: s, isComponent: function(e4) {
            return "INPUT" == e4.tagName && "radio" == e4.type;
          }, model: { defaults: { attributes: { type: "radio" } } } }), t3.addType(p, { extend: o, isComponent: function(e4) {
            return "BUTTON" == e4.tagName;
          }, model: { defaults: { tagName: "button", attributes: { type: "button" }, text: "Send", traits: [{ name: "text", changeProp: true }, { type: "select", name: "type", options: [{ value: "button" }, { value: "submit" }, { value: "reset" }] }] }, init: function() {
            var e4 = this.components(), t4 = 1 === e4.length && e4.models[0], n2 = t4 && t4.is("textnode") && t4.get("content") || "", o2 = n2 || this.get("text");
            this.set("text", o2), this.on("change:text", this.__onTextChange), o2 !== n2 && this.__onTextChange();
          }, __onTextChange: function() {
            this.components(this.get("text"));
          } }, view: { events: { click: v } } }), t3.addType(c, { extend: "text", isComponent: function(e4) {
            return "LABEL" == e4.tagName;
          }, model: { defaults: { tagName: "label", components: "Label", traits: [{ name: "for" }] } } });
        }(e2), function(e3) {
          e3.TraitManager.addType("select-options", { events: { keyup: "onChange" }, onValueChange: function() {
            for (var e4, t3 = this.model, n2 = this.target, o2 = t3.get("value").trim().split("\n"), a2 = [], i2 = 0; i2 < o2.length; i2++) {
              var s2 = o2[i2].split("::");
              a2.push({ type: l, components: s2[1] || s2[0], attributes: { value: s2[0] } });
            }
            n2.components().reset(a2), null === (e4 = n2.view) || void 0 === e4 || e4.render();
          }, getInputEl: function() {
            if (!this.$input) {
              for (var e4 = [], t3 = this.target.components(), n2 = 0; n2 < t3.length; n2++) {
                var o2 = t3.models[n2], a2 = o2.get("attributes"), i2 = (null == a2 ? void 0 : a2.value) || "", s2 = o2.components().models[0], r2 = s2 && s2.get("content") || "";
                e4.push("".concat(i2, "::").concat(r2));
              }
              var p2 = document.createElement("textarea");
              p2.value = e4.join("\n"), this.$input = p2;
            }
            return this.$input;
          } });
        }(e2), function(e3, t3) {
          var l2 = t3, u2 = e3.BlockManager, m3 = function(e4, n2) {
            var o2;
            (null === (o2 = l2.blocks) || void 0 === o2 ? void 0 : o2.indexOf(e4)) >= 0 && u2.add(e4, d(d(d({}, n2), { category: l2.category, select: true }), t3.block(e4)));
          };
          m3(n, { label: "Form", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 5.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 8H3V6h18v2zM22 10.5c0-.3-.5-.5-1.3-.5H3.4c-.8 0-1.3.2-1.3.5v3c0 .3.5.5 1.3.5h17.4c.8 0 1.3-.2 1.3-.5v-3zM21 13H3v-2h18v2z"/><rect width="10" height="3" x="2" y="15" rx=".5"/></svg>', content: { type: n, components: [{ components: [{ type: c, components: "Name" }, { type: o }] }, { components: [{ type: c, components: "Email" }, { type: o, attributes: { type: "email" } }] }, { components: [{ type: c, components: "Gender" }, { type: s, attributes: { value: "M" } }, { type: c, components: "M" }, { type: s, attributes: { value: "F" } }, { type: c, components: "F" }] }, { components: [{ type: c, components: "Message" }, { type: a }] }, { components: [{ type: p }] }] } }), m3(o, { label: "Input", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 10h1v4H4z"/></svg>', content: { type: o } }), m3(a, { label: "Textarea", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 7.5c0-.9-.5-1.5-1.3-1.5H3.4C2.5 6 2 6.6 2 7.5v9c0 .9.5 1.5 1.3 1.5h17.4c.8 0 1.3-.6 1.3-1.5v-9zM21 17H3V7h18v10z"/><path d="M4 8h1v4H4zM19 7h1v10h-1zM20 8h1v1h-1zM20 15h1v1h-1z"/></svg>', content: { type: a } }), m3(i, { label: "Select", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M18.5 13l1.5-2h-3zM4 11.5h11v1H4z"/></svg>', content: { type: i } }), m3(p, { label: "Button", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z"/><path d="M4 11.5h16v1H4z"/></svg>', content: { type: p } }), m3(c, { label: "Label", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22 11.9c0-.6-.5-.9-1.3-.9H3.4c-.8 0-1.3.3-1.3.9V17c0 .5.5.9 1.3.9h17.4c.8 0 1.3-.4 1.3-.9V12zM21 17H3v-5h18v5z"/><rect width="14" height="5" x="2" y="5" rx=".5"/><path d="M4 13h1v3H4z"/></svg>', content: { type: c } }), m3(s, { label: "Checkbox", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10 17l-5-5 1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2z"></path></svg>', content: { type: s } }), m3(r, { label: "Radio", media: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8m0-18C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 5c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"></path></svg>', content: { type: r } });
        }(e2, m2);
      };
      return t;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-plugin-forms/dist/index.js:
  (*! grapesjs-plugin-forms - 2.0.6 *)
*/
//# sourceMappingURL=grapesjs-plugin-forms.js.map
