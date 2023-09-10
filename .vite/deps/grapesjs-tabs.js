import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-tabs@1.0.6/node_modules/grapesjs-tabs/dist/grapesjs-tabs.min.js
var require_grapesjs_tabs_min = __commonJS({
  "node_modules/.pnpm/grapesjs-tabs@1.0.6/node_modules/grapesjs-tabs/dist/grapesjs-tabs.min.js"(exports, module) {
    !function(t, e) {
      "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports["grapesjs-tabs"] = e() : t["grapesjs-tabs"] = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(r) {
          if (e[r])
            return e[r].exports;
          var o = e[r] = { i: r, l: false, exports: {} };
          return t[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, r) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2)
            return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
            return t2;
          var r = /* @__PURE__ */ Object.create(null);
          if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
            for (var o in t2)
              n.d(r, o, (function(e3) {
                return t2[e3];
              }).bind(null, o));
          return r;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "", n(n.s = 3);
      }([function(t, e) {
        t.exports = function(t2, e2, n) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: n, enumerable: true, configurable: true, writable: true }) : t2[e2] = n, t2;
        };
      }, function(t, e, n) {
        var r = n(2);
        t.exports = function(t2, e2) {
          if (null == t2)
            return {};
          var n2, o, a = r(t2, e2);
          if (Object.getOwnPropertySymbols) {
            var c = Object.getOwnPropertySymbols(t2);
            for (o = 0; o < c.length; o++)
              n2 = c[o], e2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, n2) && (a[n2] = t2[n2]);
          }
          return a;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          if (null == t2)
            return {};
          var n, r, o = {}, a = Object.keys(t2);
          for (r = 0; r < a.length; r++)
            n = a[r], e2.indexOf(n) >= 0 || (o[n] = t2[n]);
          return o;
        };
      }, function(t, e, n) {
        "use strict";
        n.r(e);
        var r = n(0), o = n.n(r), a = n(1), c = n.n(a);
        function i(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function s(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? i(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : i(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var b = function(t2, e2) {
          var n2 = e2.defaultModel, r2 = e2.typeTabs, a2 = e2.selectorTab, i2 = (e2.editor, c()(e2, ["defaultModel", "typeTabs", "selectorTab", "editor"])), b2 = [{ full: 1, type: "button", label: false, text: "Style Active", command: function(t3) {
            var e3 = t3.Panels.getButton("views", "open-sm");
            e3 && e3.set("active", 1);
            var n3 = ".".concat(i2.classTab, ".").concat(i2.classTabActive);
            t3.StyleManager.setTarget(n3, { targetIsClass: 1 });
          } }];
          t2.addType(i2.typeTab, { model: { defaults: s({ name: "Tab", draggable: '[data-gjs-type="'.concat(i2.typeTabContainer, '"]'), attributes: { role: "tab" }, components: i2.templateTab, classes: i2.classTab, traits: b2 }, i2.tabProps), init: function() {
            this.on("removed", this.__onRemove);
          }, __initTab: function() {
            if (!this.tabContent) {
              var t3 = this.getTabContent();
              if (!t3) {
                var e3, n3 = (t3 = this.getTabsType().getContentsType().append({ type: i2.typeTabContent, components: i2.templateTabContent(this) })[0]).getId(), r3 = this.getId();
                t3.addAttributes({ id: n3, "aria-labelledby": r3, hidden: true }), this.addAttributes((e3 = {}, o()(e3, a2, n3), o()(e3, "id", r3), e3)), this.tabContent = t3;
              }
              this.tabContent = t3;
            }
          }, __onRemove: function() {
            var t3 = this.getTabContent();
            t3 && t3.remove(), this.getTabsType().trigger("rerender");
          }, getTabsType: function() {
            return this.closestType(r2);
          }, getTabContent: function() {
            var t3 = this.getAttributes()[a2], e3 = this.getTabsType();
            if (e3 && t3)
              return e3.findContents().filter(function(e4) {
                return e4.getId() == t3;
              })[0];
          }, clone: function() {
            var t3 = n2.prototype.clone.apply(this, arguments);
            return t3.addAttributes(o()({}, a2, "")), t3;
          } } });
        };
        function p(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function l(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? p(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : p(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var u = function(t2, e2) {
          var n2 = e2.typeTab, r2 = e2.typeTabContent, o2 = e2.typeTabContents, a2 = e2.typeTabContainer, i2 = e2.style, s2 = c()(e2, ["typeTab", "typeTabContent", "typeTabContents", "typeTabContainer", "style"]), b2 = s2.typeTabs, p2 = [1, 2, 3].map(function(t3) {
            return { type: n2 };
          });
          t2.addType(b2, { model: { defaults: l({ name: "Tabs", classactive: s2.classTabActive, selectortab: s2.selectorTab, "script-props": ["classactive", "selectortab"], script: function(t3) {
            var e3, n3, r3 = this, o3 = t3.classactive, a3 = t3.selectortab, c2 = window, i3 = c2.history, s3 = c2._isEditor, b3 = "[role=tab]", p3 = document, l2 = p3.body, u2 = p3.location, f2 = l2.matchesSelector || l2.webkitMatchesSelector || l2.mozMatchesSelector || l2.msMatchesSelector, y2 = function(t4, e4) {
              for (var n4 = t4 || [], r4 = 0; r4 < n4.length; r4++)
                e4(n4[r4], r4);
            }, d2 = function(t4) {
              return t4.getAttribute(a3);
            }, O2 = function(t4, e4) {
              return t4.querySelector(e4);
            }, g2 = function() {
              return r3.querySelectorAll(b3);
            }, j2 = function(t4, e4) {
              return !s3 && (t4.tabIndex = e4);
            }, h2 = function(t4) {
              y2(g2(), function(t5) {
                t5.className = t5.className.replace(o3, "").trim(), t5.ariaSelected = "false", j2(t5, "-1");
              }), y2(r3.querySelectorAll("[role=tabpanel]"), function(t5) {
                return t5.hidden = true;
              }), t4.className += " " + o3, t4.ariaSelected = "true", j2(t4, "0");
              var e4 = d2(t4), n4 = e4 && O2(r3, "#".concat(e4));
              n4 && (n4.hidden = false);
            }, v2 = O2(r3, ".".concat(o3).concat(b3));
            (v2 = v2 || (n3 = (u2.hash || "").replace("#", "")) && O2(r3, (e3 = a3, "".concat(b3, "[").concat(e3, "=").concat(n3, "]"))) || O2(r3, b3)) && h2(v2), r3.addEventListener("click", function(t4) {
              var e4 = t4.target, n4 = f2.call(e4, b3);
              if (n4 || (e4 = function(t5) {
                var e5;
                return y2(g2(), function(n5) {
                  e5 || n5.contains(t5) && (e5 = n5);
                }), e5;
              }(e4)) && (n4 = 1), n4 && !t4.__trg && e4.className.indexOf(o3) < 0) {
                t4.preventDefault(), t4.__trg = 1, h2(e4);
                var r4 = d2(e4);
                try {
                  i3 && i3.pushState(null, null, "#".concat(r4));
                } catch (t5) {
                }
              }
            });
          }, traits: [{ full: 1, type: "button", label: false, text: "Add Tab", command: function(t3) {
            var e3 = t3.getSelected();
            e3 && e3.addTab();
          } }], components: [{ type: a2, components: p2 }, { type: o2 }, i2 && "<style>".concat(i2(s2), "</style>")] }, s2.tabsProps), init: function() {
            this.findTabs().map(this.__onTab), this.listenTo(this.getTabContainerType().components(), "add", this.__onTab);
          }, __onTab: function(t3, e3) {
            var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            !n3.avoidStore && !n3.temporary && t3.__initTab && t3.__initTab();
          }, getTabContainerType: function() {
            return this.findType(a2)[0];
          }, getContentsType: function() {
            return this.findType(o2)[0] || this;
          }, findTabs: function() {
            return this.findType(n2);
          }, findContents: function() {
            return this.findType(r2);
          }, addTab: function(t3) {
            this.getTabContainerType().append({ type: n2, components: t3 });
          } } });
        };
        function f(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function y(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? f(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : f(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var d = function(t2, e2) {
          t2.addType(e2.typeTabContent, { model: { defaults: y({ name: "Tab Content", draggable: false, copyable: false, removable: false, highlightable: false, attributes: { role: "tabpanel" }, classes: e2.classTabContent, traits: [] }, e2.tabContentProps) } });
        };
        function O(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function g(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? O(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : O(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var j = function(t2, e2) {
          t2.addType(e2.typeTabContents, { model: { defaults: g({ name: "Tab Contents", draggable: false, droppable: false, copyable: false, removable: false, classes: e2.classTabContents }, e2.tabContentsProps) } });
        };
        function h(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function v(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? h(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : h(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var T = function(t2, e2) {
          t2.addType(e2.typeTabContainer, { model: { defaults: v({ name: "Tab Container", draggable: '[data-gjs-type="'.concat(e2.typeTabs, '"]'), droppable: '[data-gjs-type="'.concat(e2.typeTab, '"]'), copyable: false, removable: false, highlightable: false, attributes: { role: "tablist" }, classes: e2.classTabContainer }, e2.tabContainerProps) } });
        };
        function m(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function P(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? m(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : m(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        var w = function(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.DomComponents, r2 = P(P({}, e2), {}, { defaultModel: n2.getType("default").model, editor: t2 });
          [b, u, d, j, T].map(function(t3) {
            return t3(n2, r2);
          });
        };
        function C(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        var S = function(t2, e2) {
          var n2 = e2.tabsBlock, r2 = e2.typeTabs, a2 = t2.BlockManager;
          n2 && a2.add(r2, function(t3) {
            for (var e3 = 1; e3 < arguments.length; e3++) {
              var n3 = null != arguments[e3] ? arguments[e3] : {};
              e3 % 2 ? C(Object(n3), true).forEach(function(e4) {
                o()(t3, e4, n3[e4]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t3, Object.getOwnPropertyDescriptors(n3)) : C(Object(n3)).forEach(function(e4) {
                Object.defineProperty(t3, e4, Object.getOwnPropertyDescriptor(n3, e4));
              });
            }
            return t3;
          }({ media: '\n      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\n        <path d="M22 9.3c0-.8-.5-1.3-1.3-1.3H3.4C2.5 8 2 8.5 2 9.3v7.4c0 .8.5 1.3 1.3 1.3h17.4c.8 0 1.3-.5 1.3-1.3V9.3zM21 17H3V9h18v8z" fill-rule="nonzero"/><rect x="3" y="5" width="4" height="2" rx=".5"/><rect x="8" y="5" width="4" height="2" rx=".5"/><rect x="13" y="5" width="4" height="2" rx=".5"/>\n      </svg>\n    ', label: "Tabs", content: { type: r2 } }, n2));
        }, D = { tabsBlock: {}, tabsProps: {}, tabContainerProps: {}, tabProps: {}, tabContentProps: {}, tabContentsProps: {}, classTab: "tab", classTabContainer: "tab-container", classTabActive: "tab-active", classTabContent: "tab-content", classTabContents: "tab-contents", selectorTab: "aria-controls", typeTabs: "tabs", typeTabContainer: "tab-container", typeTab: "tab", typeTabContent: "tab-content", typeTabContents: "tab-contents", templateTab: function(t2) {
          return '<span data-gjs-highlightable="false">Tab</span>';
        }, templateTabContent: function(t2) {
          return "<div>Tab Content</div>";
        }, style: function(t2) {
          return "\n        .".concat(t2.classTab, " {\n            padding: 7px 14px;\n            display: inline-block;\n            border-radius: 3px;\n            margin-right: 10px;\n        }\n\n        .").concat(t2.classTab, ":focus {\n            outline: none;\n        }\n\n        .").concat(t2.classTab, ".").concat(t2.classTabActive, " {\n            background-color: #0d94e6;\n            color: white;\n        }\n\n        .").concat(t2.classTabContainer, " {\n            display: inline-block;\n        }\n\n        .").concat(t2.classTabContent, " {\n            animation: fadeEffect 1s;\n        }\n\n        .").concat(t2.classTabContents, " {\n            min-height: 100px;\n            padding: 10px;\n        }\n\n        @keyframes fadeEffect {\n            from {opacity: 0;}\n            to {opacity: 1;}\n        }\n    ");
        } };
        function x(t2, e2) {
          var n2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var r2 = Object.getOwnPropertySymbols(t2);
            e2 && (r2 = r2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), n2.push.apply(n2, r2);
          }
          return n2;
        }
        function _(t2) {
          for (var e2 = 1; e2 < arguments.length; e2++) {
            var n2 = null != arguments[e2] ? arguments[e2] : {};
            e2 % 2 ? x(Object(n2), true).forEach(function(e3) {
              o()(t2, e3, n2[e3]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(n2)) : x(Object(n2)).forEach(function(e3) {
              Object.defineProperty(t2, e3, Object.getOwnPropertyDescriptor(n2, e3));
            });
          }
          return t2;
        }
        e.default = function(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = _(_({}, D), e2);
          w(t2, n2), S(t2, n2);
        };
      }]);
    });
  }
});
export default require_grapesjs_tabs_min();
/*! Bundled license information:

grapesjs-tabs/dist/grapesjs-tabs.min.js:
  (*! grapesjs-tabs - 1.0.6 *)
*/
//# sourceMappingURL=grapesjs-tabs.js.map
