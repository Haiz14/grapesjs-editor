import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-parser-postcss@1.0.1/node_modules/grapesjs-parser-postcss/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-parser-postcss@1.0.1/node_modules/grapesjs-parser-postcss/dist/index.js"(exports, module) {
    !function(e, t) {
      "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports["grapesjs-parser-postcss"] = t() : e["grapesjs-parser-postcss"] = t();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      var e = { 241: (e2) => {
        var t2 = String, s2 = function() {
          return { isColorSupported: false, reset: t2, bold: t2, dim: t2, italic: t2, underline: t2, inverse: t2, hidden: t2, strikethrough: t2, black: t2, red: t2, green: t2, yellow: t2, blue: t2, magenta: t2, cyan: t2, white: t2, gray: t2, bgBlack: t2, bgRed: t2, bgGreen: t2, bgYellow: t2, bgBlue: t2, bgMagenta: t2, bgCyan: t2, bgWhite: t2 };
        };
        e2.exports = s2(), e2.exports.createColors = s2;
      }, 353: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(19);
        class i extends r2 {
          constructor(e3) {
            super(e3), this.type = "atrule";
          }
          append(...e3) {
            return this.proxyOf.nodes || (this.nodes = []), super.append(...e3);
          }
          prepend(...e3) {
            return this.proxyOf.nodes || (this.nodes = []), super.prepend(...e3);
          }
        }
        e2.exports = i, i.default = i, r2.registerAtRule(i);
      }, 932: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(631);
        class i extends r2 {
          constructor(e3) {
            super(e3), this.type = "comment";
          }
        }
        e2.exports = i, i.default = i;
      }, 19: (e2, t2, s2) => {
        "use strict";
        let r2, i, n, { isClean: o, my: l } = s2(513), a = s2(258), h = s2(932), u = s2(631);
        function c(e3) {
          return e3.map((e4) => (e4.nodes && (e4.nodes = c(e4.nodes)), delete e4.source, e4));
        }
        function p(e3) {
          if (e3[o] = false, e3.proxyOf.nodes)
            for (let t3 of e3.proxyOf.nodes)
              p(t3);
        }
        class f extends u {
          push(e3) {
            return e3.parent = this, this.proxyOf.nodes.push(e3), this;
          }
          each(e3) {
            if (!this.proxyOf.nodes)
              return;
            let t3, s3, r3 = this.getIterator();
            for (; this.indexes[r3] < this.proxyOf.nodes.length && (t3 = this.indexes[r3], s3 = e3(this.proxyOf.nodes[t3], t3), false !== s3); )
              this.indexes[r3] += 1;
            return delete this.indexes[r3], s3;
          }
          walk(e3) {
            return this.each((t3, s3) => {
              let r3;
              try {
                r3 = e3(t3, s3);
              } catch (e4) {
                throw t3.addToError(e4);
              }
              return false !== r3 && t3.walk && (r3 = t3.walk(e3)), r3;
            });
          }
          walkDecls(e3, t3) {
            return t3 ? e3 instanceof RegExp ? this.walk((s3, r3) => {
              if ("decl" === s3.type && e3.test(s3.prop))
                return t3(s3, r3);
            }) : this.walk((s3, r3) => {
              if ("decl" === s3.type && s3.prop === e3)
                return t3(s3, r3);
            }) : (t3 = e3, this.walk((e4, s3) => {
              if ("decl" === e4.type)
                return t3(e4, s3);
            }));
          }
          walkRules(e3, t3) {
            return t3 ? e3 instanceof RegExp ? this.walk((s3, r3) => {
              if ("rule" === s3.type && e3.test(s3.selector))
                return t3(s3, r3);
            }) : this.walk((s3, r3) => {
              if ("rule" === s3.type && s3.selector === e3)
                return t3(s3, r3);
            }) : (t3 = e3, this.walk((e4, s3) => {
              if ("rule" === e4.type)
                return t3(e4, s3);
            }));
          }
          walkAtRules(e3, t3) {
            return t3 ? e3 instanceof RegExp ? this.walk((s3, r3) => {
              if ("atrule" === s3.type && e3.test(s3.name))
                return t3(s3, r3);
            }) : this.walk((s3, r3) => {
              if ("atrule" === s3.type && s3.name === e3)
                return t3(s3, r3);
            }) : (t3 = e3, this.walk((e4, s3) => {
              if ("atrule" === e4.type)
                return t3(e4, s3);
            }));
          }
          walkComments(e3) {
            return this.walk((t3, s3) => {
              if ("comment" === t3.type)
                return e3(t3, s3);
            });
          }
          append(...e3) {
            for (let t3 of e3) {
              let e4 = this.normalize(t3, this.last);
              for (let t4 of e4)
                this.proxyOf.nodes.push(t4);
            }
            return this.markDirty(), this;
          }
          prepend(...e3) {
            e3 = e3.reverse();
            for (let t3 of e3) {
              let e4 = this.normalize(t3, this.first, "prepend").reverse();
              for (let t4 of e4)
                this.proxyOf.nodes.unshift(t4);
              for (let t4 in this.indexes)
                this.indexes[t4] = this.indexes[t4] + e4.length;
            }
            return this.markDirty(), this;
          }
          cleanRaws(e3) {
            if (super.cleanRaws(e3), this.nodes)
              for (let t3 of this.nodes)
                t3.cleanRaws(e3);
          }
          insertBefore(e3, t3) {
            let s3, r3 = 0 === (e3 = this.index(e3)) && "prepend", i2 = this.normalize(t3, this.proxyOf.nodes[e3], r3).reverse();
            for (let t4 of i2)
              this.proxyOf.nodes.splice(e3, 0, t4);
            for (let t4 in this.indexes)
              s3 = this.indexes[t4], e3 <= s3 && (this.indexes[t4] = s3 + i2.length);
            return this.markDirty(), this;
          }
          insertAfter(e3, t3) {
            e3 = this.index(e3);
            let s3, r3 = this.normalize(t3, this.proxyOf.nodes[e3]).reverse();
            for (let t4 of r3)
              this.proxyOf.nodes.splice(e3 + 1, 0, t4);
            for (let t4 in this.indexes)
              s3 = this.indexes[t4], e3 < s3 && (this.indexes[t4] = s3 + r3.length);
            return this.markDirty(), this;
          }
          removeChild(e3) {
            let t3;
            e3 = this.index(e3), this.proxyOf.nodes[e3].parent = void 0, this.proxyOf.nodes.splice(e3, 1);
            for (let s3 in this.indexes)
              t3 = this.indexes[s3], t3 >= e3 && (this.indexes[s3] = t3 - 1);
            return this.markDirty(), this;
          }
          removeAll() {
            for (let e3 of this.proxyOf.nodes)
              e3.parent = void 0;
            return this.proxyOf.nodes = [], this.markDirty(), this;
          }
          replaceValues(e3, t3, s3) {
            return s3 || (s3 = t3, t3 = {}), this.walkDecls((r3) => {
              t3.props && !t3.props.includes(r3.prop) || t3.fast && !r3.value.includes(t3.fast) || (r3.value = r3.value.replace(e3, s3));
            }), this.markDirty(), this;
          }
          every(e3) {
            return this.nodes.every(e3);
          }
          some(e3) {
            return this.nodes.some(e3);
          }
          index(e3) {
            return "number" == typeof e3 ? e3 : (e3.proxyOf && (e3 = e3.proxyOf), this.proxyOf.nodes.indexOf(e3));
          }
          get first() {
            if (this.proxyOf.nodes)
              return this.proxyOf.nodes[0];
          }
          get last() {
            if (this.proxyOf.nodes)
              return this.proxyOf.nodes[this.proxyOf.nodes.length - 1];
          }
          normalize(e3, t3) {
            if ("string" == typeof e3)
              e3 = c(r2(e3).nodes);
            else if (Array.isArray(e3)) {
              e3 = e3.slice(0);
              for (let t4 of e3)
                t4.parent && t4.parent.removeChild(t4, "ignore");
            } else if ("root" === e3.type && "document" !== this.type) {
              e3 = e3.nodes.slice(0);
              for (let t4 of e3)
                t4.parent && t4.parent.removeChild(t4, "ignore");
            } else if (e3.type)
              e3 = [e3];
            else if (e3.prop) {
              if (void 0 === e3.value)
                throw new Error("Value field is missed in node creation");
              "string" != typeof e3.value && (e3.value = String(e3.value)), e3 = [new a(e3)];
            } else if (e3.selector)
              e3 = [new i(e3)];
            else if (e3.name)
              e3 = [new n(e3)];
            else {
              if (!e3.text)
                throw new Error("Unknown node type in node creation");
              e3 = [new h(e3)];
            }
            return e3.map((e4) => (e4[l] || f.rebuild(e4), (e4 = e4.proxyOf).parent && e4.parent.removeChild(e4), e4[o] && p(e4), void 0 === e4.raws.before && t3 && void 0 !== t3.raws.before && (e4.raws.before = t3.raws.before.replace(/\S/g, "")), e4.parent = this.proxyOf, e4));
          }
          getProxyProcessor() {
            return { set: (e3, t3, s3) => (e3[t3] === s3 || (e3[t3] = s3, "name" !== t3 && "params" !== t3 && "selector" !== t3 || e3.markDirty()), true), get: (e3, t3) => "proxyOf" === t3 ? e3 : e3[t3] ? "each" === t3 || "string" == typeof t3 && t3.startsWith("walk") ? (...s3) => e3[t3](...s3.map((e4) => "function" == typeof e4 ? (t4, s4) => e4(t4.toProxy(), s4) : e4)) : "every" === t3 || "some" === t3 ? (s3) => e3[t3]((e4, ...t4) => s3(e4.toProxy(), ...t4)) : "root" === t3 ? () => e3.root().toProxy() : "nodes" === t3 ? e3.nodes.map((e4) => e4.toProxy()) : "first" === t3 || "last" === t3 ? e3[t3].toProxy() : e3[t3] : e3[t3] };
          }
          getIterator() {
            this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
            let e3 = this.lastEach;
            return this.indexes[e3] = 0, e3;
          }
        }
        f.registerParse = (e3) => {
          r2 = e3;
        }, f.registerRule = (e3) => {
          i = e3;
        }, f.registerAtRule = (e3) => {
          n = e3;
        }, e2.exports = f, f.default = f, f.rebuild = (e3) => {
          "atrule" === e3.type ? Object.setPrototypeOf(e3, n.prototype) : "rule" === e3.type ? Object.setPrototypeOf(e3, i.prototype) : "decl" === e3.type ? Object.setPrototypeOf(e3, a.prototype) : "comment" === e3.type && Object.setPrototypeOf(e3, h.prototype), e3[l] = true, e3.nodes && e3.nodes.forEach((e4) => {
            f.rebuild(e4);
          });
        };
      }, 671: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(241), i = s2(868);
        class n extends Error {
          constructor(e3, t3, s3, r3, i2, o) {
            super(e3), this.name = "CssSyntaxError", this.reason = e3, i2 && (this.file = i2), r3 && (this.source = r3), o && (this.plugin = o), void 0 !== t3 && void 0 !== s3 && ("number" == typeof t3 ? (this.line = t3, this.column = s3) : (this.line = t3.line, this.column = t3.column, this.endLine = s3.line, this.endColumn = s3.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, n);
          }
          setMessage() {
            this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", void 0 !== this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason;
          }
          showSourceCode(e3) {
            if (!this.source)
              return "";
            let t3 = this.source;
            null == e3 && (e3 = r2.isColorSupported), i && e3 && (t3 = i(t3));
            let s3, n2, o = t3.split(/\r?\n/), l = Math.max(this.line - 3, 0), a = Math.min(this.line + 2, o.length), h = String(a).length;
            if (e3) {
              let { bold: e4, red: t4, gray: i2 } = r2.createColors(true);
              s3 = (s4) => e4(t4(s4)), n2 = (e5) => i2(e5);
            } else
              s3 = n2 = (e4) => e4;
            return o.slice(l, a).map((e4, t4) => {
              let r3 = l + 1 + t4, i2 = " " + (" " + r3).slice(-h) + " | ";
              if (r3 === this.line) {
                let t5 = n2(i2.replace(/\d/g, " ")) + e4.slice(0, this.column - 1).replace(/[^\t]/g, " ");
                return s3(">") + n2(i2) + e4 + "\n " + t5 + s3("^");
              }
              return " " + n2(i2) + e4;
            }).join("\n");
          }
          toString() {
            let e3 = this.showSourceCode();
            return e3 && (e3 = "\n\n" + e3 + "\n"), this.name + ": " + this.message + e3;
          }
        }
        e2.exports = n, n.default = n;
      }, 258: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(631);
        class i extends r2 {
          constructor(e3) {
            e3 && void 0 !== e3.value && "string" != typeof e3.value && (e3 = { ...e3, value: String(e3.value) }), super(e3), this.type = "decl";
          }
          get variable() {
            return this.prop.startsWith("--") || "$" === this.prop[0];
          }
        }
        e2.exports = i, i.default = i;
      }, 461: (e2, t2, s2) => {
        "use strict";
        let r2, i, n = s2(19);
        class o extends n {
          constructor(e3) {
            super({ type: "document", ...e3 }), this.nodes || (this.nodes = []);
          }
          toResult(e3 = {}) {
            return new r2(new i(), this, e3).stringify();
          }
        }
        o.registerLazyResult = (e3) => {
          r2 = e3;
        }, o.registerProcessor = (e3) => {
          i = e3;
        }, e2.exports = o, o.default = o;
      }, 250: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(258), i = s2(981), n = s2(932), o = s2(353), l = s2(995), a = s2(25), h = s2(675);
        function u(e3, t3) {
          if (Array.isArray(e3))
            return e3.map((e4) => u(e4));
          let { inputs: s3, ...c } = e3;
          if (s3) {
            t3 = [];
            for (let e4 of s3) {
              let s4 = { ...e4, __proto__: l.prototype };
              s4.map && (s4.map = { ...s4.map, __proto__: i.prototype }), t3.push(s4);
            }
          }
          if (c.nodes && (c.nodes = e3.nodes.map((e4) => u(e4, t3))), c.source) {
            let { inputId: e4, ...s4 } = c.source;
            c.source = s4, null != e4 && (c.source.input = t3[e4]);
          }
          if ("root" === c.type)
            return new a(c);
          if ("decl" === c.type)
            return new r2(c);
          if ("rule" === c.type)
            return new h(c);
          if ("comment" === c.type)
            return new n(c);
          if ("atrule" === c.type)
            return new o(c);
          throw new Error("Unknown node type: " + e3.type);
        }
        e2.exports = u, u.default = u;
      }, 995: (e2, t2, s2) => {
        "use strict";
        let { SourceMapConsumer: r2, SourceMapGenerator: i } = s2(209), { fileURLToPath: n, pathToFileURL: o } = s2(414), { resolve: l, isAbsolute: a } = s2(830), { nanoid: h } = s2(961), u = s2(868), c = s2(671), p = s2(981), f = Symbol("fromOffsetCache"), d = Boolean(r2 && i), m = Boolean(l && a);
        class g {
          constructor(e3, t3 = {}) {
            if (null == e3 || "object" == typeof e3 && !e3.toString)
              throw new Error(`PostCSS received ${e3} instead of CSS string`);
            if (this.css = e3.toString(), "\uFEFF" === this.css[0] || "￾" === this.css[0] ? (this.hasBOM = true, this.css = this.css.slice(1)) : this.hasBOM = false, t3.from && (!m || /^\w+:\/\//.test(t3.from) || a(t3.from) ? this.file = t3.from : this.file = l(t3.from)), m && d) {
              let e4 = new p(this.css, t3);
              if (e4.text) {
                this.map = e4;
                let t4 = e4.consumer().file;
                !this.file && t4 && (this.file = this.mapResolve(t4));
              }
            }
            this.file || (this.id = "<input css " + h(6) + ">"), this.map && (this.map.file = this.from);
          }
          fromOffset(e3) {
            let t3, s3;
            if (this[f])
              s3 = this[f];
            else {
              let e4 = this.css.split("\n");
              s3 = new Array(e4.length);
              let t4 = 0;
              for (let r4 = 0, i2 = e4.length; r4 < i2; r4++)
                s3[r4] = t4, t4 += e4[r4].length + 1;
              this[f] = s3;
            }
            t3 = s3[s3.length - 1];
            let r3 = 0;
            if (e3 >= t3)
              r3 = s3.length - 1;
            else {
              let t4, i2 = s3.length - 2;
              for (; r3 < i2; )
                if (t4 = r3 + (i2 - r3 >> 1), e3 < s3[t4])
                  i2 = t4 - 1;
                else {
                  if (!(e3 >= s3[t4 + 1])) {
                    r3 = t4;
                    break;
                  }
                  r3 = t4 + 1;
                }
            }
            return { line: r3 + 1, col: e3 - s3[r3] + 1 };
          }
          error(e3, t3, s3, r3 = {}) {
            let i2, n2, l2;
            if (t3 && "object" == typeof t3) {
              let e4 = t3, r4 = s3;
              if ("number" == typeof t3.offset) {
                let r5 = this.fromOffset(e4.offset);
                t3 = r5.line, s3 = r5.col;
              } else
                t3 = e4.line, s3 = e4.column;
              if ("number" == typeof r4.offset) {
                let e5 = this.fromOffset(r4.offset);
                n2 = e5.line, l2 = e5.col;
              } else
                n2 = r4.line, l2 = r4.column;
            } else if (!s3) {
              let e4 = this.fromOffset(t3);
              t3 = e4.line, s3 = e4.col;
            }
            let a2 = this.origin(t3, s3, n2, l2);
            return i2 = a2 ? new c(e3, void 0 === a2.endLine ? a2.line : { line: a2.line, column: a2.column }, void 0 === a2.endLine ? a2.column : { line: a2.endLine, column: a2.endColumn }, a2.source, a2.file, r3.plugin) : new c(e3, void 0 === n2 ? t3 : { line: t3, column: s3 }, void 0 === n2 ? s3 : { line: n2, column: l2 }, this.css, this.file, r3.plugin), i2.input = { line: t3, column: s3, endLine: n2, endColumn: l2, source: this.css }, this.file && (o && (i2.input.url = o(this.file).toString()), i2.input.file = this.file), i2;
          }
          origin(e3, t3, s3, r3) {
            if (!this.map)
              return false;
            let i2, l2, h2 = this.map.consumer(), u2 = h2.originalPositionFor({ line: e3, column: t3 });
            if (!u2.source)
              return false;
            "number" == typeof s3 && (i2 = h2.originalPositionFor({ line: s3, column: r3 })), l2 = a(u2.source) ? o(u2.source) : new URL(u2.source, this.map.consumer().sourceRoot || o(this.map.mapFile));
            let c2 = { url: l2.toString(), line: u2.line, column: u2.column, endLine: i2 && i2.line, endColumn: i2 && i2.column };
            if ("file:" === l2.protocol) {
              if (!n)
                throw new Error(`file: protocol is not available in this PostCSS build`);
              c2.file = n(l2);
            }
            let p2 = h2.sourceContentFor(u2.source);
            return p2 && (c2.source = p2), c2;
          }
          mapResolve(e3) {
            return /^\w+:\/\//.test(e3) ? e3 : l(this.map.consumer().sourceRoot || this.map.root || ".", e3);
          }
          get from() {
            return this.file || this.id;
          }
          toJSON() {
            let e3 = {};
            for (let t3 of ["hasBOM", "css", "file", "id"])
              null != this[t3] && (e3[t3] = this[t3]);
            return this.map && (e3.map = { ...this.map }, e3.map.consumerCache && (e3.map.consumerCache = void 0)), e3;
          }
        }
        e2.exports = g, g.default = g, u && u.registerInput && u.registerInput(g);
      }, 939: (e2, t2, s2) => {
        "use strict";
        let { isClean: r2, my: i } = s2(513), n = s2(505), o = s2(88), l = s2(19), a = s2(461), h = (s2(448), s2(632)), u = s2(964), c = s2(25);
        const p = { document: "Document", root: "Root", atrule: "AtRule", rule: "Rule", decl: "Declaration", comment: "Comment" }, f = { postcssPlugin: true, prepare: true, Once: true, Document: true, Root: true, Declaration: true, Rule: true, AtRule: true, Comment: true, DeclarationExit: true, RuleExit: true, AtRuleExit: true, CommentExit: true, RootExit: true, DocumentExit: true, OnceExit: true }, d = { postcssPlugin: true, prepare: true, Once: true }, m = 0;
        function g(e3) {
          return "object" == typeof e3 && "function" == typeof e3.then;
        }
        function w(e3) {
          let t3 = false, s3 = p[e3.type];
          return "decl" === e3.type ? t3 = e3.prop.toLowerCase() : "atrule" === e3.type && (t3 = e3.name.toLowerCase()), t3 && e3.append ? [s3, s3 + "-" + t3, m, s3 + "Exit", s3 + "Exit-" + t3] : t3 ? [s3, s3 + "-" + t3, s3 + "Exit", s3 + "Exit-" + t3] : e3.append ? [s3, m, s3 + "Exit"] : [s3, s3 + "Exit"];
        }
        function y(e3) {
          let t3;
          return t3 = "document" === e3.type ? ["Document", m, "DocumentExit"] : "root" === e3.type ? ["Root", m, "RootExit"] : w(e3), { node: e3, events: t3, eventIndex: 0, visitors: [], visitorIndex: 0, iterator: 0 };
        }
        function x(e3) {
          return e3[r2] = false, e3.nodes && e3.nodes.forEach((e4) => x(e4)), e3;
        }
        let b = {};
        class v {
          constructor(e3, t3, s3) {
            let r3;
            if (this.stringified = false, this.processed = false, "object" != typeof t3 || null === t3 || "root" !== t3.type && "document" !== t3.type)
              if (t3 instanceof v || t3 instanceof h)
                r3 = x(t3.root), t3.map && (void 0 === s3.map && (s3.map = {}), s3.map.inline || (s3.map.inline = false), s3.map.prev = t3.map);
              else {
                let e4 = u;
                s3.syntax && (e4 = s3.syntax.parse), s3.parser && (e4 = s3.parser), e4.parse && (e4 = e4.parse);
                try {
                  r3 = e4(t3, s3);
                } catch (e5) {
                  this.processed = true, this.error = e5;
                }
                r3 && !r3[i] && l.rebuild(r3);
              }
            else
              r3 = x(t3);
            this.result = new h(e3, r3, s3), this.helpers = { ...b, result: this.result, postcss: b }, this.plugins = this.processor.plugins.map((e4) => "object" == typeof e4 && e4.prepare ? { ...e4, ...e4.prepare(this.result) } : e4);
          }
          get [Symbol.toStringTag]() {
            return "LazyResult";
          }
          get processor() {
            return this.result.processor;
          }
          get opts() {
            return this.result.opts;
          }
          get css() {
            return this.stringify().css;
          }
          get content() {
            return this.stringify().content;
          }
          get map() {
            return this.stringify().map;
          }
          get root() {
            return this.sync().root;
          }
          get messages() {
            return this.sync().messages;
          }
          warnings() {
            return this.sync().warnings();
          }
          toString() {
            return this.css;
          }
          then(e3, t3) {
            return this.async().then(e3, t3);
          }
          catch(e3) {
            return this.async().catch(e3);
          }
          finally(e3) {
            return this.async().then(e3, e3);
          }
          async() {
            return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing);
          }
          sync() {
            if (this.error)
              throw this.error;
            if (this.processed)
              return this.result;
            if (this.processed = true, this.processing)
              throw this.getAsyncError();
            for (let e3 of this.plugins) {
              if (g(this.runOnRoot(e3)))
                throw this.getAsyncError();
            }
            if (this.prepareVisitors(), this.hasListener) {
              let e3 = this.result.root;
              for (; !e3[r2]; )
                e3[r2] = true, this.walkSync(e3);
              if (this.listeners.OnceExit)
                if ("document" === e3.type)
                  for (let t3 of e3.nodes)
                    this.visitSync(this.listeners.OnceExit, t3);
                else
                  this.visitSync(this.listeners.OnceExit, e3);
            }
            return this.result;
          }
          stringify() {
            if (this.error)
              throw this.error;
            if (this.stringified)
              return this.result;
            this.stringified = true, this.sync();
            let e3 = this.result.opts, t3 = o;
            e3.syntax && (t3 = e3.syntax.stringify), e3.stringifier && (t3 = e3.stringifier), t3.stringify && (t3 = t3.stringify);
            let s3 = new n(t3, this.result.root, this.result.opts).generate();
            return this.result.css = s3[0], this.result.map = s3[1], this.result;
          }
          walkSync(e3) {
            e3[r2] = true;
            let t3 = w(e3);
            for (let s3 of t3)
              if (s3 === m)
                e3.nodes && e3.each((e4) => {
                  e4[r2] || this.walkSync(e4);
                });
              else {
                let t4 = this.listeners[s3];
                if (t4 && this.visitSync(t4, e3.toProxy()))
                  return;
              }
          }
          visitSync(e3, t3) {
            for (let [s3, r3] of e3) {
              let e4;
              this.result.lastPlugin = s3;
              try {
                e4 = r3(t3, this.helpers);
              } catch (e5) {
                throw this.handleError(e5, t3.proxyOf);
              }
              if ("root" !== t3.type && "document" !== t3.type && !t3.parent)
                return true;
              if (g(e4))
                throw this.getAsyncError();
            }
          }
          runOnRoot(e3) {
            this.result.lastPlugin = e3;
            try {
              if ("object" == typeof e3 && e3.Once) {
                if ("document" === this.result.root.type) {
                  let t3 = this.result.root.nodes.map((t4) => e3.Once(t4, this.helpers));
                  return g(t3[0]) ? Promise.all(t3) : t3;
                }
                return e3.Once(this.result.root, this.helpers);
              }
              if ("function" == typeof e3)
                return e3(this.result.root, this.result);
            } catch (e4) {
              throw this.handleError(e4);
            }
          }
          getAsyncError() {
            throw new Error("Use process(css).then(cb) to work with async plugins");
          }
          handleError(e3, t3) {
            let s3 = this.result.lastPlugin;
            try {
              t3 && t3.addToError(e3), this.error = e3, "CssSyntaxError" !== e3.name || e3.plugin ? s3.postcssVersion : (e3.plugin = s3.postcssPlugin, e3.setMessage());
            } catch (e4) {
              console && console.error && console.error(e4);
            }
            return e3;
          }
          async runAsync() {
            this.plugin = 0;
            for (let e3 = 0; e3 < this.plugins.length; e3++) {
              let t3 = this.plugins[e3], s3 = this.runOnRoot(t3);
              if (g(s3))
                try {
                  await s3;
                } catch (e4) {
                  throw this.handleError(e4);
                }
            }
            if (this.prepareVisitors(), this.hasListener) {
              let e3 = this.result.root;
              for (; !e3[r2]; ) {
                e3[r2] = true;
                let t3 = [y(e3)];
                for (; t3.length > 0; ) {
                  let e4 = this.visitTick(t3);
                  if (g(e4))
                    try {
                      await e4;
                    } catch (e5) {
                      let s3 = t3[t3.length - 1].node;
                      throw this.handleError(e5, s3);
                    }
                }
              }
              if (this.listeners.OnceExit)
                for (let [t3, s3] of this.listeners.OnceExit) {
                  this.result.lastPlugin = t3;
                  try {
                    if ("document" === e3.type) {
                      let t4 = e3.nodes.map((e4) => s3(e4, this.helpers));
                      await Promise.all(t4);
                    } else
                      await s3(e3, this.helpers);
                  } catch (e4) {
                    throw this.handleError(e4);
                  }
                }
            }
            return this.processed = true, this.stringify();
          }
          prepareVisitors() {
            this.listeners = {};
            let e3 = (e4, t3, s3) => {
              this.listeners[t3] || (this.listeners[t3] = []), this.listeners[t3].push([e4, s3]);
            };
            for (let t3 of this.plugins)
              if ("object" == typeof t3)
                for (let s3 in t3) {
                  if (!f[s3] && /^[A-Z]/.test(s3))
                    throw new Error(`Unknown event ${s3} in ${t3.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                  if (!d[s3])
                    if ("object" == typeof t3[s3])
                      for (let r3 in t3[s3])
                        e3(t3, "*" === r3 ? s3 : s3 + "-" + r3.toLowerCase(), t3[s3][r3]);
                    else
                      "function" == typeof t3[s3] && e3(t3, s3, t3[s3]);
                }
            this.hasListener = Object.keys(this.listeners).length > 0;
          }
          visitTick(e3) {
            let t3 = e3[e3.length - 1], { node: s3, visitors: i2 } = t3;
            if ("root" !== s3.type && "document" !== s3.type && !s3.parent)
              return void e3.pop();
            if (i2.length > 0 && t3.visitorIndex < i2.length) {
              let [e4, r3] = i2[t3.visitorIndex];
              t3.visitorIndex += 1, t3.visitorIndex === i2.length && (t3.visitors = [], t3.visitorIndex = 0), this.result.lastPlugin = e4;
              try {
                return r3(s3.toProxy(), this.helpers);
              } catch (e5) {
                throw this.handleError(e5, s3);
              }
            }
            if (0 !== t3.iterator) {
              let i3, n3 = t3.iterator;
              for (; i3 = s3.nodes[s3.indexes[n3]]; )
                if (s3.indexes[n3] += 1, !i3[r2])
                  return i3[r2] = true, void e3.push(y(i3));
              t3.iterator = 0, delete s3.indexes[n3];
            }
            let n2 = t3.events;
            for (; t3.eventIndex < n2.length; ) {
              let e4 = n2[t3.eventIndex];
              if (t3.eventIndex += 1, e4 === m)
                return void (s3.nodes && s3.nodes.length && (s3[r2] = true, t3.iterator = s3.getIterator()));
              if (this.listeners[e4])
                return void (t3.visitors = this.listeners[e4]);
            }
            e3.pop();
          }
        }
        v.registerPostcss = (e3) => {
          b = e3;
        }, e2.exports = v, v.default = v, c.registerLazyResult(v), a.registerLazyResult(v);
      }, 715: (e2) => {
        "use strict";
        let t2 = { split(e3, t3, s2) {
          let r2 = [], i = "", n = false, o = 0, l = false, a = false;
          for (let s3 of e3)
            a ? a = false : "\\" === s3 ? a = true : l ? s3 === l && (l = false) : '"' === s3 || "'" === s3 ? l = s3 : "(" === s3 ? o += 1 : ")" === s3 ? o > 0 && (o -= 1) : 0 === o && t3.includes(s3) && (n = true), n ? ("" !== i && r2.push(i.trim()), i = "", n = false) : i += s3;
          return (s2 || "" !== i) && r2.push(i.trim()), r2;
        }, space: (e3) => t2.split(e3, [" ", "\n", "	"]), comma: (e3) => t2.split(e3, [","], true) };
        e2.exports = t2, t2.default = t2;
      }, 505: (e2, t2, s2) => {
        "use strict";
        let { SourceMapConsumer: r2, SourceMapGenerator: i } = s2(209), { dirname: n, resolve: o, relative: l, sep: a } = s2(830), { pathToFileURL: h } = s2(414), u = s2(995), c = Boolean(r2 && i), p = Boolean(n && o && l && a);
        e2.exports = class {
          constructor(e3, t3, s3, r3) {
            this.stringify = e3, this.mapOpts = s3.map || {}, this.root = t3, this.opts = s3, this.css = r3;
          }
          isMap() {
            return void 0 !== this.opts.map ? !!this.opts.map : this.previous().length > 0;
          }
          previous() {
            if (!this.previousMaps)
              if (this.previousMaps = [], this.root)
                this.root.walk((e3) => {
                  if (e3.source && e3.source.input.map) {
                    let t3 = e3.source.input.map;
                    this.previousMaps.includes(t3) || this.previousMaps.push(t3);
                  }
                });
              else {
                let e3 = new u(this.css, this.opts);
                e3.map && this.previousMaps.push(e3.map);
              }
            return this.previousMaps;
          }
          isInline() {
            if (void 0 !== this.mapOpts.inline)
              return this.mapOpts.inline;
            let e3 = this.mapOpts.annotation;
            return (void 0 === e3 || true === e3) && (!this.previous().length || this.previous().some((e4) => e4.inline));
          }
          isSourcesContent() {
            return void 0 !== this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((e3) => e3.withContent());
          }
          clearAnnotation() {
            if (false !== this.mapOpts.annotation)
              if (this.root) {
                let e3;
                for (let t3 = this.root.nodes.length - 1; t3 >= 0; t3--)
                  e3 = this.root.nodes[t3], "comment" === e3.type && 0 === e3.text.indexOf("# sourceMappingURL=") && this.root.removeChild(t3);
              } else
                this.css && (this.css = this.css.replace(/(\n)?\/\*#[\S\s]*?\*\/$/gm, ""));
          }
          setSourcesContent() {
            let e3 = {};
            if (this.root)
              this.root.walk((t3) => {
                if (t3.source) {
                  let s3 = t3.source.input.from;
                  s3 && !e3[s3] && (e3[s3] = true, this.map.setSourceContent(this.toUrl(this.path(s3)), t3.source.input.css));
                }
              });
            else if (this.css) {
              let e4 = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
              this.map.setSourceContent(e4, this.css);
            }
          }
          applyPrevMaps() {
            for (let e3 of this.previous()) {
              let t3, s3 = this.toUrl(this.path(e3.file)), i2 = e3.root || n(e3.file);
              false === this.mapOpts.sourcesContent ? (t3 = new r2(e3.text), t3.sourcesContent && (t3.sourcesContent = t3.sourcesContent.map(() => null))) : t3 = e3.consumer(), this.map.applySourceMap(t3, s3, this.toUrl(this.path(i2)));
            }
          }
          isAnnotation() {
            return !!this.isInline() || (void 0 !== this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((e3) => e3.annotation));
          }
          toBase64(e3) {
            return Buffer ? Buffer.from(e3).toString("base64") : window.btoa(unescape(encodeURIComponent(e3)));
          }
          addAnnotation() {
            let e3;
            e3 = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" == typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" == typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
            let t3 = "\n";
            this.css.includes("\r\n") && (t3 = "\r\n"), this.css += t3 + "/*# sourceMappingURL=" + e3 + " */";
          }
          outputFile() {
            return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css";
          }
          generateMap() {
            if (this.root)
              this.generateString();
            else if (1 === this.previous().length) {
              let e3 = this.previous()[0].consumer();
              e3.file = this.outputFile(), this.map = i.fromSourceMap(e3);
            } else
              this.map = new i({ file: this.outputFile() }), this.map.addMapping({ source: this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>", generated: { line: 1, column: 0 }, original: { line: 1, column: 0 } });
            return this.isSourcesContent() && this.setSourcesContent(), this.root && this.previous().length > 0 && this.applyPrevMaps(), this.isAnnotation() && this.addAnnotation(), this.isInline() ? [this.css] : [this.css, this.map];
          }
          path(e3) {
            if (0 === e3.indexOf("<"))
              return e3;
            if (/^\w+:\/\//.test(e3))
              return e3;
            if (this.mapOpts.absolute)
              return e3;
            let t3 = this.opts.to ? n(this.opts.to) : ".";
            return "string" == typeof this.mapOpts.annotation && (t3 = n(o(t3, this.mapOpts.annotation))), e3 = l(t3, e3);
          }
          toUrl(e3) {
            return "\\" === a && (e3 = e3.replace(/\\/g, "/")), encodeURI(e3).replace(/[#?]/g, encodeURIComponent);
          }
          sourcePath(e3) {
            if (this.mapOpts.from)
              return this.toUrl(this.mapOpts.from);
            if (this.mapOpts.absolute) {
              if (h)
                return h(e3.source.input.from).toString();
              throw new Error("`map.absolute` option is not available in this PostCSS build");
            }
            return this.toUrl(this.path(e3.source.input.from));
          }
          generateString() {
            this.css = "", this.map = new i({ file: this.outputFile() });
            let e3, t3, s3 = 1, r3 = 1, n2 = "<no source>", o2 = { source: "", generated: { line: 0, column: 0 }, original: { line: 0, column: 0 } };
            this.stringify(this.root, (i2, l2, a2) => {
              if (this.css += i2, l2 && "end" !== a2 && (o2.generated.line = s3, o2.generated.column = r3 - 1, l2.source && l2.source.start ? (o2.source = this.sourcePath(l2), o2.original.line = l2.source.start.line, o2.original.column = l2.source.start.column - 1, this.map.addMapping(o2)) : (o2.source = n2, o2.original.line = 1, o2.original.column = 0, this.map.addMapping(o2))), e3 = i2.match(/\n/g), e3 ? (s3 += e3.length, t3 = i2.lastIndexOf("\n"), r3 = i2.length - t3) : r3 += i2.length, l2 && "start" !== a2) {
                let e4 = l2.parent || { raws: {} };
                ("decl" !== l2.type || l2 !== e4.last || e4.raws.semicolon) && (l2.source && l2.source.end ? (o2.source = this.sourcePath(l2), o2.original.line = l2.source.end.line, o2.original.column = l2.source.end.column - 1, o2.generated.line = s3, o2.generated.column = r3 - 2, this.map.addMapping(o2)) : (o2.source = n2, o2.original.line = 1, o2.original.column = 0, o2.generated.line = s3, o2.generated.column = r3 - 1, this.map.addMapping(o2)));
              }
            });
          }
          generate() {
            if (this.clearAnnotation(), p && c && this.isMap())
              return this.generateMap();
            {
              let e3 = "";
              return this.stringify(this.root, (t3) => {
                e3 += t3;
              }), [e3];
            }
          }
        };
      }, 647: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(505), i = s2(88), n = (s2(448), s2(964));
        const o = s2(632);
        class l {
          constructor(e3, t3, s3) {
            let n2;
            t3 = t3.toString(), this.stringified = false, this._processor = e3, this._css = t3, this._opts = s3, this._map = void 0;
            let l2 = i;
            this.result = new o(this._processor, n2, this._opts), this.result.css = t3;
            let a = this;
            Object.defineProperty(this.result, "root", { get: () => a.root });
            let h = new r2(l2, n2, this._opts, t3);
            if (h.isMap()) {
              let [e4, t4] = h.generate();
              e4 && (this.result.css = e4), t4 && (this.result.map = t4);
            }
          }
          get [Symbol.toStringTag]() {
            return "NoWorkResult";
          }
          get processor() {
            return this.result.processor;
          }
          get opts() {
            return this.result.opts;
          }
          get css() {
            return this.result.css;
          }
          get content() {
            return this.result.css;
          }
          get map() {
            return this.result.map;
          }
          get root() {
            if (this._root)
              return this._root;
            let e3, t3 = n;
            try {
              e3 = t3(this._css, this._opts);
            } catch (e4) {
              this.error = e4;
            }
            if (this.error)
              throw this.error;
            return this._root = e3, e3;
          }
          get messages() {
            return [];
          }
          warnings() {
            return [];
          }
          toString() {
            return this._css;
          }
          then(e3, t3) {
            return this.async().then(e3, t3);
          }
          catch(e3) {
            return this.async().catch(e3);
          }
          finally(e3) {
            return this.async().then(e3, e3);
          }
          async() {
            return this.error ? Promise.reject(this.error) : Promise.resolve(this.result);
          }
          sync() {
            if (this.error)
              throw this.error;
            return this.result;
          }
        }
        e2.exports = l, l.default = l;
      }, 631: (e2, t2, s2) => {
        "use strict";
        let { isClean: r2, my: i } = s2(513), n = s2(671), o = s2(62), l = s2(88);
        function a(e3, t3) {
          let s3 = new e3.constructor();
          for (let r3 in e3) {
            if (!Object.prototype.hasOwnProperty.call(e3, r3))
              continue;
            if ("proxyCache" === r3)
              continue;
            let i2 = e3[r3], n2 = typeof i2;
            "parent" === r3 && "object" === n2 ? t3 && (s3[r3] = t3) : "source" === r3 ? s3[r3] = i2 : Array.isArray(i2) ? s3[r3] = i2.map((e4) => a(e4, s3)) : ("object" === n2 && null !== i2 && (i2 = a(i2)), s3[r3] = i2);
          }
          return s3;
        }
        class h {
          constructor(e3 = {}) {
            this.raws = {}, this[r2] = false, this[i] = true;
            for (let t3 in e3)
              if ("nodes" === t3) {
                this.nodes = [];
                for (let s3 of e3[t3])
                  "function" == typeof s3.clone ? this.append(s3.clone()) : this.append(s3);
              } else
                this[t3] = e3[t3];
          }
          error(e3, t3 = {}) {
            if (this.source) {
              let { start: s3, end: r3 } = this.rangeBy(t3);
              return this.source.input.error(e3, { line: s3.line, column: s3.column }, { line: r3.line, column: r3.column }, t3);
            }
            return new n(e3);
          }
          warn(e3, t3, s3) {
            let r3 = { node: this };
            for (let e4 in s3)
              r3[e4] = s3[e4];
            return e3.warn(t3, r3);
          }
          remove() {
            return this.parent && this.parent.removeChild(this), this.parent = void 0, this;
          }
          toString(e3 = l) {
            e3.stringify && (e3 = e3.stringify);
            let t3 = "";
            return e3(this, (e4) => {
              t3 += e4;
            }), t3;
          }
          assign(e3 = {}) {
            for (let t3 in e3)
              this[t3] = e3[t3];
            return this;
          }
          clone(e3 = {}) {
            let t3 = a(this);
            for (let s3 in e3)
              t3[s3] = e3[s3];
            return t3;
          }
          cloneBefore(e3 = {}) {
            let t3 = this.clone(e3);
            return this.parent.insertBefore(this, t3), t3;
          }
          cloneAfter(e3 = {}) {
            let t3 = this.clone(e3);
            return this.parent.insertAfter(this, t3), t3;
          }
          replaceWith(...e3) {
            if (this.parent) {
              let t3 = this, s3 = false;
              for (let r3 of e3)
                r3 === this ? s3 = true : s3 ? (this.parent.insertAfter(t3, r3), t3 = r3) : this.parent.insertBefore(t3, r3);
              s3 || this.remove();
            }
            return this;
          }
          next() {
            if (!this.parent)
              return;
            let e3 = this.parent.index(this);
            return this.parent.nodes[e3 + 1];
          }
          prev() {
            if (!this.parent)
              return;
            let e3 = this.parent.index(this);
            return this.parent.nodes[e3 - 1];
          }
          before(e3) {
            return this.parent.insertBefore(this, e3), this;
          }
          after(e3) {
            return this.parent.insertAfter(this, e3), this;
          }
          root() {
            let e3 = this;
            for (; e3.parent && "document" !== e3.parent.type; )
              e3 = e3.parent;
            return e3;
          }
          raw(e3, t3) {
            return new o().raw(this, e3, t3);
          }
          cleanRaws(e3) {
            delete this.raws.before, delete this.raws.after, e3 || delete this.raws.between;
          }
          toJSON(e3, t3) {
            let s3 = {}, r3 = null == t3;
            t3 = t3 || /* @__PURE__ */ new Map();
            let i2 = 0;
            for (let e4 in this) {
              if (!Object.prototype.hasOwnProperty.call(this, e4))
                continue;
              if ("parent" === e4 || "proxyCache" === e4)
                continue;
              let r4 = this[e4];
              if (Array.isArray(r4))
                s3[e4] = r4.map((e5) => "object" == typeof e5 && e5.toJSON ? e5.toJSON(null, t3) : e5);
              else if ("object" == typeof r4 && r4.toJSON)
                s3[e4] = r4.toJSON(null, t3);
              else if ("source" === e4) {
                let n2 = t3.get(r4.input);
                null == n2 && (n2 = i2, t3.set(r4.input, i2), i2++), s3[e4] = { inputId: n2, start: r4.start, end: r4.end };
              } else
                s3[e4] = r4;
            }
            return r3 && (s3.inputs = [...t3.keys()].map((e4) => e4.toJSON())), s3;
          }
          positionInside(e3) {
            let t3 = this.toString(), s3 = this.source.start.column, r3 = this.source.start.line;
            for (let i2 = 0; i2 < e3; i2++)
              "\n" === t3[i2] ? (s3 = 1, r3 += 1) : s3 += 1;
            return { line: r3, column: s3 };
          }
          positionBy(e3) {
            let t3 = this.source.start;
            if (e3.index)
              t3 = this.positionInside(e3.index);
            else if (e3.word) {
              let s3 = this.toString().indexOf(e3.word);
              -1 !== s3 && (t3 = this.positionInside(s3));
            }
            return t3;
          }
          rangeBy(e3) {
            let t3 = { line: this.source.start.line, column: this.source.start.column }, s3 = this.source.end ? { line: this.source.end.line, column: this.source.end.column + 1 } : { line: t3.line, column: t3.column + 1 };
            if (e3.word) {
              let r3 = this.toString().indexOf(e3.word);
              -1 !== r3 && (t3 = this.positionInside(r3), s3 = this.positionInside(r3 + e3.word.length));
            } else
              e3.start ? t3 = { line: e3.start.line, column: e3.start.column } : e3.index && (t3 = this.positionInside(e3.index)), e3.end ? s3 = { line: e3.end.line, column: e3.end.column } : e3.endIndex ? s3 = this.positionInside(e3.endIndex) : e3.index && (s3 = this.positionInside(e3.index + 1));
            return (s3.line < t3.line || s3.line === t3.line && s3.column <= t3.column) && (s3 = { line: t3.line, column: t3.column + 1 }), { start: t3, end: s3 };
          }
          getProxyProcessor() {
            return { set: (e3, t3, s3) => (e3[t3] === s3 || (e3[t3] = s3, "prop" !== t3 && "value" !== t3 && "name" !== t3 && "params" !== t3 && "important" !== t3 && "text" !== t3 || e3.markDirty()), true), get: (e3, t3) => "proxyOf" === t3 ? e3 : "root" === t3 ? () => e3.root().toProxy() : e3[t3] };
          }
          toProxy() {
            return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache;
          }
          addToError(e3) {
            if (e3.postcssNode = this, e3.stack && this.source && /\n\s{4}at /.test(e3.stack)) {
              let t3 = this.source;
              e3.stack = e3.stack.replace(/\n\s{4}at /, `$&${t3.input.from}:${t3.start.line}:${t3.start.column}$&`);
            }
            return e3;
          }
          markDirty() {
            if (this[r2]) {
              this[r2] = false;
              let e3 = this;
              for (; e3 = e3.parent; )
                e3[r2] = false;
            }
          }
          get proxyOf() {
            return this;
          }
        }
        e2.exports = h, h.default = h;
      }, 964: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(19), i = s2(867), n = s2(995);
        function o(e3, t3) {
          let s3 = new n(e3, t3), r3 = new i(s3);
          try {
            r3.parse();
          } catch (e4) {
            throw e4;
          }
          return r3.root;
        }
        e2.exports = o, o.default = o, r2.registerParse(o);
      }, 867: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(258), i = s2(852), n = s2(932), o = s2(353), l = s2(25), a = s2(675);
        const h = { empty: true, space: true };
        e2.exports = class {
          constructor(e3) {
            this.input = e3, this.root = new l(), this.current = this.root, this.spaces = "", this.semicolon = false, this.customProperty = false, this.createTokenizer(), this.root.source = { input: e3, start: { offset: 0, line: 1, column: 1 } };
          }
          createTokenizer() {
            this.tokenizer = i(this.input);
          }
          parse() {
            let e3;
            for (; !this.tokenizer.endOfFile(); )
              switch (e3 = this.tokenizer.nextToken(), e3[0]) {
                case "space":
                  this.spaces += e3[1];
                  break;
                case ";":
                  this.freeSemicolon(e3);
                  break;
                case "}":
                  this.end(e3);
                  break;
                case "comment":
                  this.comment(e3);
                  break;
                case "at-word":
                  this.atrule(e3);
                  break;
                case "{":
                  this.emptyRule(e3);
                  break;
                default:
                  this.other(e3);
              }
            this.endFile();
          }
          comment(e3) {
            let t3 = new n();
            this.init(t3, e3[2]), t3.source.end = this.getPosition(e3[3] || e3[2]);
            let s3 = e3[1].slice(2, -2);
            if (/^\s*$/.test(s3))
              t3.text = "", t3.raws.left = s3, t3.raws.right = "";
            else {
              let e4 = s3.match(/^(\s*)([^]*\S)(\s*)$/);
              t3.text = e4[2], t3.raws.left = e4[1], t3.raws.right = e4[3];
            }
          }
          emptyRule(e3) {
            let t3 = new a();
            this.init(t3, e3[2]), t3.selector = "", t3.raws.between = "", this.current = t3;
          }
          other(e3) {
            let t3 = false, s3 = null, r3 = false, i2 = null, n2 = [], o2 = e3[1].startsWith("--"), l2 = [], a2 = e3;
            for (; a2; ) {
              if (s3 = a2[0], l2.push(a2), "(" === s3 || "[" === s3)
                i2 || (i2 = a2), n2.push("(" === s3 ? ")" : "]");
              else if (o2 && r3 && "{" === s3)
                i2 || (i2 = a2), n2.push("}");
              else if (0 === n2.length) {
                if (";" === s3) {
                  if (r3)
                    return void this.decl(l2, o2);
                  break;
                }
                if ("{" === s3)
                  return void this.rule(l2);
                if ("}" === s3) {
                  this.tokenizer.back(l2.pop()), t3 = true;
                  break;
                }
                ":" === s3 && (r3 = true);
              } else
                s3 === n2[n2.length - 1] && (n2.pop(), 0 === n2.length && (i2 = null));
              a2 = this.tokenizer.nextToken();
            }
            if (this.tokenizer.endOfFile() && (t3 = true), n2.length > 0 && this.unclosedBracket(i2), t3 && r3) {
              if (!o2)
                for (; l2.length && (a2 = l2[l2.length - 1][0], "space" === a2 || "comment" === a2); )
                  this.tokenizer.back(l2.pop());
              this.decl(l2, o2);
            } else
              this.unknownWord(l2);
          }
          rule(e3) {
            e3.pop();
            let t3 = new a();
            this.init(t3, e3[0][2]), t3.raws.between = this.spacesAndCommentsFromEnd(e3), this.raw(t3, "selector", e3), this.current = t3;
          }
          decl(e3, t3) {
            let s3 = new r2();
            this.init(s3, e3[0][2]);
            let i2, n2 = e3[e3.length - 1];
            for (";" === n2[0] && (this.semicolon = true, e3.pop()), s3.source.end = this.getPosition(n2[3] || n2[2] || function(e4) {
              for (let t4 = e4.length - 1; t4 >= 0; t4--) {
                let s4 = e4[t4], r3 = s4[3] || s4[2];
                if (r3)
                  return r3;
              }
            }(e3)); "word" !== e3[0][0]; )
              1 === e3.length && this.unknownWord(e3), s3.raws.before += e3.shift()[1];
            for (s3.source.start = this.getPosition(e3[0][2]), s3.prop = ""; e3.length; ) {
              let t4 = e3[0][0];
              if (":" === t4 || "space" === t4 || "comment" === t4)
                break;
              s3.prop += e3.shift()[1];
            }
            for (s3.raws.between = ""; e3.length; ) {
              if (i2 = e3.shift(), ":" === i2[0]) {
                s3.raws.between += i2[1];
                break;
              }
              "word" === i2[0] && /\w/.test(i2[1]) && this.unknownWord([i2]), s3.raws.between += i2[1];
            }
            "_" !== s3.prop[0] && "*" !== s3.prop[0] || (s3.raws.before += s3.prop[0], s3.prop = s3.prop.slice(1));
            let o2, l2 = [];
            for (; e3.length && (o2 = e3[0][0], "space" === o2 || "comment" === o2); )
              l2.push(e3.shift());
            this.precheckMissedSemicolon(e3);
            for (let t4 = e3.length - 1; t4 >= 0; t4--) {
              if (i2 = e3[t4], "!important" === i2[1].toLowerCase()) {
                s3.important = true;
                let r3 = this.stringFrom(e3, t4);
                r3 = this.spacesFromEnd(e3) + r3, " !important" !== r3 && (s3.raws.important = r3);
                break;
              }
              if ("important" === i2[1].toLowerCase()) {
                let r3 = e3.slice(0), i3 = "";
                for (let e4 = t4; e4 > 0; e4--) {
                  let t5 = r3[e4][0];
                  if (0 === i3.trim().indexOf("!") && "space" !== t5)
                    break;
                  i3 = r3.pop()[1] + i3;
                }
                0 === i3.trim().indexOf("!") && (s3.important = true, s3.raws.important = i3, e3 = r3);
              }
              if ("space" !== i2[0] && "comment" !== i2[0])
                break;
            }
            e3.some((e4) => "space" !== e4[0] && "comment" !== e4[0]) && (s3.raws.between += l2.map((e4) => e4[1]).join(""), l2 = []), this.raw(s3, "value", l2.concat(e3), t3), s3.value.includes(":") && !t3 && this.checkMissedSemicolon(e3);
          }
          atrule(e3) {
            let t3, s3, r3, i2 = new o();
            i2.name = e3[1].slice(1), "" === i2.name && this.unnamedAtrule(i2, e3), this.init(i2, e3[2]);
            let n2 = false, l2 = false, a2 = [], h2 = [];
            for (; !this.tokenizer.endOfFile(); ) {
              if (t3 = (e3 = this.tokenizer.nextToken())[0], "(" === t3 || "[" === t3 ? h2.push("(" === t3 ? ")" : "]") : "{" === t3 && h2.length > 0 ? h2.push("}") : t3 === h2[h2.length - 1] && h2.pop(), 0 === h2.length) {
                if (";" === t3) {
                  i2.source.end = this.getPosition(e3[2]), this.semicolon = true;
                  break;
                }
                if ("{" === t3) {
                  l2 = true;
                  break;
                }
                if ("}" === t3) {
                  if (a2.length > 0) {
                    for (r3 = a2.length - 1, s3 = a2[r3]; s3 && "space" === s3[0]; )
                      s3 = a2[--r3];
                    s3 && (i2.source.end = this.getPosition(s3[3] || s3[2]));
                  }
                  this.end(e3);
                  break;
                }
                a2.push(e3);
              } else
                a2.push(e3);
              if (this.tokenizer.endOfFile()) {
                n2 = true;
                break;
              }
            }
            i2.raws.between = this.spacesAndCommentsFromEnd(a2), a2.length ? (i2.raws.afterName = this.spacesAndCommentsFromStart(a2), this.raw(i2, "params", a2), n2 && (e3 = a2[a2.length - 1], i2.source.end = this.getPosition(e3[3] || e3[2]), this.spaces = i2.raws.between, i2.raws.between = "")) : (i2.raws.afterName = "", i2.params = ""), l2 && (i2.nodes = [], this.current = i2);
          }
          end(e3) {
            this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = false, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.getPosition(e3[2]), this.current = this.current.parent) : this.unexpectedClose(e3);
          }
          endFile() {
            this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces;
          }
          freeSemicolon(e3) {
            if (this.spaces += e3[1], this.current.nodes) {
              let e4 = this.current.nodes[this.current.nodes.length - 1];
              e4 && "rule" === e4.type && !e4.raws.ownSemicolon && (e4.raws.ownSemicolon = this.spaces, this.spaces = "");
            }
          }
          getPosition(e3) {
            let t3 = this.input.fromOffset(e3);
            return { offset: e3, line: t3.line, column: t3.col };
          }
          init(e3, t3) {
            this.current.push(e3), e3.source = { start: this.getPosition(t3), input: this.input }, e3.raws.before = this.spaces, this.spaces = "", "comment" !== e3.type && (this.semicolon = false);
          }
          raw(e3, t3, s3, r3) {
            let i2, n2, o2, l2, a2 = s3.length, u = "", c = true;
            for (let e4 = 0; e4 < a2; e4 += 1)
              i2 = s3[e4], n2 = i2[0], "space" !== n2 || e4 !== a2 - 1 || r3 ? "comment" === n2 ? (l2 = s3[e4 - 1] ? s3[e4 - 1][0] : "empty", o2 = s3[e4 + 1] ? s3[e4 + 1][0] : "empty", h[l2] || h[o2] || "," === u.slice(-1) ? c = false : u += i2[1]) : u += i2[1] : c = false;
            if (!c) {
              let r4 = s3.reduce((e4, t4) => e4 + t4[1], "");
              e3.raws[t3] = { value: u, raw: r4 };
            }
            e3[t3] = u;
          }
          spacesAndCommentsFromEnd(e3) {
            let t3, s3 = "";
            for (; e3.length && (t3 = e3[e3.length - 1][0], "space" === t3 || "comment" === t3); )
              s3 = e3.pop()[1] + s3;
            return s3;
          }
          spacesAndCommentsFromStart(e3) {
            let t3, s3 = "";
            for (; e3.length && (t3 = e3[0][0], "space" === t3 || "comment" === t3); )
              s3 += e3.shift()[1];
            return s3;
          }
          spacesFromEnd(e3) {
            let t3, s3 = "";
            for (; e3.length && (t3 = e3[e3.length - 1][0], "space" === t3); )
              s3 = e3.pop()[1] + s3;
            return s3;
          }
          stringFrom(e3, t3) {
            let s3 = "";
            for (let r3 = t3; r3 < e3.length; r3++)
              s3 += e3[r3][1];
            return e3.splice(t3, e3.length - t3), s3;
          }
          colon(e3) {
            let t3, s3, r3, i2 = 0;
            for (let [n2, o2] of e3.entries()) {
              if (t3 = o2, s3 = t3[0], "(" === s3 && (i2 += 1), ")" === s3 && (i2 -= 1), 0 === i2 && ":" === s3) {
                if (r3) {
                  if ("word" === r3[0] && "progid" === r3[1])
                    continue;
                  return n2;
                }
                this.doubleColon(t3);
              }
              r3 = t3;
            }
            return false;
          }
          unclosedBracket(e3) {
            throw this.input.error("Unclosed bracket", { offset: e3[2] }, { offset: e3[2] + 1 });
          }
          unknownWord(e3) {
            throw this.input.error("Unknown word", { offset: e3[0][2] }, { offset: e3[0][2] + e3[0][1].length });
          }
          unexpectedClose(e3) {
            throw this.input.error("Unexpected }", { offset: e3[2] }, { offset: e3[2] + 1 });
          }
          unclosedBlock() {
            let e3 = this.current.source.start;
            throw this.input.error("Unclosed block", e3.line, e3.column);
          }
          doubleColon(e3) {
            throw this.input.error("Double colon", { offset: e3[2] }, { offset: e3[2] + e3[1].length });
          }
          unnamedAtrule(e3, t3) {
            throw this.input.error("At-rule without name", { offset: t3[2] }, { offset: t3[2] + t3[1].length });
          }
          precheckMissedSemicolon() {
          }
          checkMissedSemicolon(e3) {
            let t3 = this.colon(e3);
            if (false === t3)
              return;
            let s3, r3 = 0;
            for (let i2 = t3 - 1; i2 >= 0 && (s3 = e3[i2], "space" === s3[0] || (r3 += 1, 2 !== r3)); i2--)
              ;
            throw this.input.error("Missed semicolon", "word" === s3[0] ? s3[3] + 1 : s3[2]);
          }
        };
      }, 20: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(671), i = s2(258), n = s2(939), o = s2(19), l = s2(723), a = s2(88), h = s2(250), u = s2(461), c = s2(728), p = s2(932), f = s2(353), d = s2(632), m = s2(995), g = s2(964), w = s2(715), y = s2(675), x = s2(25), b = s2(631);
        function v(...e3) {
          return 1 === e3.length && Array.isArray(e3[0]) && (e3 = e3[0]), new l(e3);
        }
        v.plugin = function(e3, t3) {
          let s3, r3 = false;
          function i2(...s4) {
            console && console.warn && !r3 && (r3 = true, console.warn(e3 + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), process.env.LANG && process.env.LANG.startsWith("cn") && console.warn(e3 + ": 里面 postcss.plugin 被弃用. 迁移指南:\nhttps://www.w3ctech.com/topic/2226"));
            let i3 = t3(...s4);
            return i3.postcssPlugin = e3, i3.postcssVersion = new l().version, i3;
          }
          return Object.defineProperty(i2, "postcss", { get: () => (s3 || (s3 = i2()), s3) }), i2.process = function(e4, t4, s4) {
            return v([i2(s4)]).process(e4, t4);
          }, i2;
        }, v.stringify = a, v.parse = g, v.fromJSON = h, v.list = w, v.comment = (e3) => new p(e3), v.atRule = (e3) => new f(e3), v.decl = (e3) => new i(e3), v.rule = (e3) => new y(e3), v.root = (e3) => new x(e3), v.document = (e3) => new u(e3), v.CssSyntaxError = r2, v.Declaration = i, v.Container = o, v.Processor = l, v.Document = u, v.Comment = p, v.Warning = c, v.AtRule = f, v.Result = d, v.Input = m, v.Rule = y, v.Root = x, v.Node = b, n.registerPostcss(v), e2.exports = v, v.default = v;
      }, 981: (e2, t2, s2) => {
        "use strict";
        let { SourceMapConsumer: r2, SourceMapGenerator: i } = s2(209), { existsSync: n, readFileSync: o } = s2(777), { dirname: l, join: a } = s2(830);
        class h {
          constructor(e3, t3) {
            if (false === t3.map)
              return;
            this.loadAnnotation(e3), this.inline = this.startWith(this.annotation, "data:");
            let s3 = t3.map ? t3.map.prev : void 0, r3 = this.loadMap(t3.from, s3);
            !this.mapFile && t3.from && (this.mapFile = t3.from), this.mapFile && (this.root = l(this.mapFile)), r3 && (this.text = r3);
          }
          consumer() {
            return this.consumerCache || (this.consumerCache = new r2(this.text)), this.consumerCache;
          }
          withContent() {
            return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0);
          }
          startWith(e3, t3) {
            return !!e3 && e3.substr(0, t3.length) === t3;
          }
          getAnnotationURL(e3) {
            return e3.replace(/^\/\*\s*# sourceMappingURL=/, "").trim();
          }
          loadAnnotation(e3) {
            let t3 = e3.match(/\/\*\s*# sourceMappingURL=/gm);
            if (!t3)
              return;
            let s3 = e3.lastIndexOf(t3.pop()), r3 = e3.indexOf("*/", s3);
            s3 > -1 && r3 > -1 && (this.annotation = this.getAnnotationURL(e3.substring(s3, r3)));
          }
          decodeInline(e3) {
            if (/^data:application\/json;charset=utf-?8,/.test(e3) || /^data:application\/json,/.test(e3))
              return decodeURIComponent(e3.substr(RegExp.lastMatch.length));
            if (/^data:application\/json;charset=utf-?8;base64,/.test(e3) || /^data:application\/json;base64,/.test(e3))
              return t3 = e3.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(t3, "base64").toString() : window.atob(t3);
            var t3;
            let s3 = e3.match(/data:application\/json;([^,]+),/)[1];
            throw new Error("Unsupported source map encoding " + s3);
          }
          loadFile(e3) {
            if (this.root = l(e3), n(e3))
              return this.mapFile = e3, o(e3, "utf-8").toString().trim();
          }
          loadMap(e3, t3) {
            if (false === t3)
              return false;
            if (t3) {
              if ("string" == typeof t3)
                return t3;
              if ("function" != typeof t3) {
                if (t3 instanceof r2)
                  return i.fromSourceMap(t3).toString();
                if (t3 instanceof i)
                  return t3.toString();
                if (this.isMap(t3))
                  return JSON.stringify(t3);
                throw new Error("Unsupported previous source map format: " + t3.toString());
              }
              {
                let s3 = t3(e3);
                if (s3) {
                  let e4 = this.loadFile(s3);
                  if (!e4)
                    throw new Error("Unable to load previous source map: " + s3.toString());
                  return e4;
                }
              }
            } else {
              if (this.inline)
                return this.decodeInline(this.annotation);
              if (this.annotation) {
                let t4 = this.annotation;
                return e3 && (t4 = a(l(e3), t4)), this.loadFile(t4);
              }
            }
          }
          isMap(e3) {
            return "object" == typeof e3 && ("string" == typeof e3.mappings || "string" == typeof e3._mappings || Array.isArray(e3.sections));
          }
        }
        e2.exports = h, h.default = h;
      }, 723: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(647), i = s2(939), n = s2(461), o = s2(25);
        class l {
          constructor(e3 = []) {
            this.version = "8.4.14", this.plugins = this.normalize(e3);
          }
          use(e3) {
            return this.plugins = this.plugins.concat(this.normalize([e3])), this;
          }
          process(e3, t3 = {}) {
            return 0 === this.plugins.length && void 0 === t3.parser && void 0 === t3.stringifier && void 0 === t3.syntax ? new r2(this, e3, t3) : new i(this, e3, t3);
          }
          normalize(e3) {
            let t3 = [];
            for (let s3 of e3)
              if (true === s3.postcss ? s3 = s3() : s3.postcss && (s3 = s3.postcss), "object" == typeof s3 && Array.isArray(s3.plugins))
                t3 = t3.concat(s3.plugins);
              else if ("object" == typeof s3 && s3.postcssPlugin)
                t3.push(s3);
              else if ("function" == typeof s3)
                t3.push(s3);
              else if ("object" != typeof s3 || !s3.parse && !s3.stringify)
                throw new Error(s3 + " is not a PostCSS plugin");
            return t3;
          }
        }
        e2.exports = l, l.default = l, o.registerProcessor(l), n.registerProcessor(l);
      }, 632: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(728);
        class i {
          constructor(e3, t3, s3) {
            this.processor = e3, this.messages = [], this.root = t3, this.opts = s3, this.css = void 0, this.map = void 0;
          }
          toString() {
            return this.css;
          }
          warn(e3, t3 = {}) {
            t3.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (t3.plugin = this.lastPlugin.postcssPlugin);
            let s3 = new r2(e3, t3);
            return this.messages.push(s3), s3;
          }
          warnings() {
            return this.messages.filter((e3) => "warning" === e3.type);
          }
          get content() {
            return this.css;
          }
        }
        e2.exports = i, i.default = i;
      }, 25: (e2, t2, s2) => {
        "use strict";
        let r2, i, n = s2(19);
        class o extends n {
          constructor(e3) {
            super(e3), this.type = "root", this.nodes || (this.nodes = []);
          }
          removeChild(e3, t3) {
            let s3 = this.index(e3);
            return !t3 && 0 === s3 && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[s3].raws.before), super.removeChild(e3);
          }
          normalize(e3, t3, s3) {
            let r3 = super.normalize(e3);
            if (t3) {
              if ("prepend" === s3)
                this.nodes.length > 1 ? t3.raws.before = this.nodes[1].raws.before : delete t3.raws.before;
              else if (this.first !== t3)
                for (let e4 of r3)
                  e4.raws.before = t3.raws.before;
            }
            return r3;
          }
          toResult(e3 = {}) {
            return new r2(new i(), this, e3).stringify();
          }
        }
        o.registerLazyResult = (e3) => {
          r2 = e3;
        }, o.registerProcessor = (e3) => {
          i = e3;
        }, e2.exports = o, o.default = o;
      }, 675: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(19), i = s2(715);
        class n extends r2 {
          constructor(e3) {
            super(e3), this.type = "rule", this.nodes || (this.nodes = []);
          }
          get selectors() {
            return i.comma(this.selector);
          }
          set selectors(e3) {
            let t3 = this.selector ? this.selector.match(/,\s*/) : null, s3 = t3 ? t3[0] : "," + this.raw("between", "beforeOpen");
            this.selector = e3.join(s3);
          }
        }
        e2.exports = n, n.default = n, r2.registerRule(n);
      }, 62: (e2) => {
        "use strict";
        const t2 = { colon: ": ", indent: "    ", beforeDecl: "\n", beforeRule: "\n", beforeOpen: " ", beforeClose: "\n", beforeComment: "\n", after: "\n", emptyBody: "", commentLeft: " ", commentRight: " ", semicolon: false };
        class s2 {
          constructor(e3) {
            this.builder = e3;
          }
          stringify(e3, t3) {
            if (!this[e3.type])
              throw new Error("Unknown AST node type " + e3.type + ". Maybe you need to change PostCSS stringifier.");
            this[e3.type](e3, t3);
          }
          document(e3) {
            this.body(e3);
          }
          root(e3) {
            this.body(e3), e3.raws.after && this.builder(e3.raws.after);
          }
          comment(e3) {
            let t3 = this.raw(e3, "left", "commentLeft"), s3 = this.raw(e3, "right", "commentRight");
            this.builder("/*" + t3 + e3.text + s3 + "*/", e3);
          }
          decl(e3, t3) {
            let s3 = this.raw(e3, "between", "colon"), r2 = e3.prop + s3 + this.rawValue(e3, "value");
            e3.important && (r2 += e3.raws.important || " !important"), t3 && (r2 += ";"), this.builder(r2, e3);
          }
          rule(e3) {
            this.block(e3, this.rawValue(e3, "selector")), e3.raws.ownSemicolon && this.builder(e3.raws.ownSemicolon, e3, "end");
          }
          atrule(e3, t3) {
            let s3 = "@" + e3.name, r2 = e3.params ? this.rawValue(e3, "params") : "";
            if (void 0 !== e3.raws.afterName ? s3 += e3.raws.afterName : r2 && (s3 += " "), e3.nodes)
              this.block(e3, s3 + r2);
            else {
              let i = (e3.raws.between || "") + (t3 ? ";" : "");
              this.builder(s3 + r2 + i, e3);
            }
          }
          body(e3) {
            let t3 = e3.nodes.length - 1;
            for (; t3 > 0 && "comment" === e3.nodes[t3].type; )
              t3 -= 1;
            let s3 = this.raw(e3, "semicolon");
            for (let r2 = 0; r2 < e3.nodes.length; r2++) {
              let i = e3.nodes[r2], n = this.raw(i, "before");
              n && this.builder(n), this.stringify(i, t3 !== r2 || s3);
            }
          }
          block(e3, t3) {
            let s3, r2 = this.raw(e3, "between", "beforeOpen");
            this.builder(t3 + r2 + "{", e3, "start"), e3.nodes && e3.nodes.length ? (this.body(e3), s3 = this.raw(e3, "after")) : s3 = this.raw(e3, "after", "emptyBody"), s3 && this.builder(s3), this.builder("}", e3, "end");
          }
          raw(e3, s3, r2) {
            let i;
            if (r2 || (r2 = s3), s3 && (i = e3.raws[s3], void 0 !== i))
              return i;
            let n = e3.parent;
            if ("before" === r2) {
              if (!n || "root" === n.type && n.first === e3)
                return "";
              if (n && "document" === n.type)
                return "";
            }
            if (!n)
              return t2[r2];
            let o = e3.root();
            if (o.rawCache || (o.rawCache = {}), void 0 !== o.rawCache[r2])
              return o.rawCache[r2];
            if ("before" === r2 || "after" === r2)
              return this.beforeAfter(e3, r2);
            {
              let t3 = "raw" + ((l = r2)[0].toUpperCase() + l.slice(1));
              this[t3] ? i = this[t3](o, e3) : o.walk((e4) => {
                if (i = e4.raws[s3], void 0 !== i)
                  return false;
              });
            }
            var l;
            return void 0 === i && (i = t2[r2]), o.rawCache[r2] = i, i;
          }
          rawSemicolon(e3) {
            let t3;
            return e3.walk((e4) => {
              if (e4.nodes && e4.nodes.length && "decl" === e4.last.type && (t3 = e4.raws.semicolon, void 0 !== t3))
                return false;
            }), t3;
          }
          rawEmptyBody(e3) {
            let t3;
            return e3.walk((e4) => {
              if (e4.nodes && 0 === e4.nodes.length && (t3 = e4.raws.after, void 0 !== t3))
                return false;
            }), t3;
          }
          rawIndent(e3) {
            if (e3.raws.indent)
              return e3.raws.indent;
            let t3;
            return e3.walk((s3) => {
              let r2 = s3.parent;
              if (r2 && r2 !== e3 && r2.parent && r2.parent === e3 && void 0 !== s3.raws.before) {
                let e4 = s3.raws.before.split("\n");
                return t3 = e4[e4.length - 1], t3 = t3.replace(/\S/g, ""), false;
              }
            }), t3;
          }
          rawBeforeComment(e3, t3) {
            let s3;
            return e3.walkComments((e4) => {
              if (void 0 !== e4.raws.before)
                return s3 = e4.raws.before, s3.includes("\n") && (s3 = s3.replace(/[^\n]+$/, "")), false;
            }), void 0 === s3 ? s3 = this.raw(t3, null, "beforeDecl") : s3 && (s3 = s3.replace(/\S/g, "")), s3;
          }
          rawBeforeDecl(e3, t3) {
            let s3;
            return e3.walkDecls((e4) => {
              if (void 0 !== e4.raws.before)
                return s3 = e4.raws.before, s3.includes("\n") && (s3 = s3.replace(/[^\n]+$/, "")), false;
            }), void 0 === s3 ? s3 = this.raw(t3, null, "beforeRule") : s3 && (s3 = s3.replace(/\S/g, "")), s3;
          }
          rawBeforeRule(e3) {
            let t3;
            return e3.walk((s3) => {
              if (s3.nodes && (s3.parent !== e3 || e3.first !== s3) && void 0 !== s3.raws.before)
                return t3 = s3.raws.before, t3.includes("\n") && (t3 = t3.replace(/[^\n]+$/, "")), false;
            }), t3 && (t3 = t3.replace(/\S/g, "")), t3;
          }
          rawBeforeClose(e3) {
            let t3;
            return e3.walk((e4) => {
              if (e4.nodes && e4.nodes.length > 0 && void 0 !== e4.raws.after)
                return t3 = e4.raws.after, t3.includes("\n") && (t3 = t3.replace(/[^\n]+$/, "")), false;
            }), t3 && (t3 = t3.replace(/\S/g, "")), t3;
          }
          rawBeforeOpen(e3) {
            let t3;
            return e3.walk((e4) => {
              if ("decl" !== e4.type && (t3 = e4.raws.between, void 0 !== t3))
                return false;
            }), t3;
          }
          rawColon(e3) {
            let t3;
            return e3.walkDecls((e4) => {
              if (void 0 !== e4.raws.between)
                return t3 = e4.raws.between.replace(/[^\s:]/g, ""), false;
            }), t3;
          }
          beforeAfter(e3, t3) {
            let s3;
            s3 = "decl" === e3.type ? this.raw(e3, null, "beforeDecl") : "comment" === e3.type ? this.raw(e3, null, "beforeComment") : "before" === t3 ? this.raw(e3, null, "beforeRule") : this.raw(e3, null, "beforeClose");
            let r2 = e3.parent, i = 0;
            for (; r2 && "root" !== r2.type; )
              i += 1, r2 = r2.parent;
            if (s3.includes("\n")) {
              let t4 = this.raw(e3, null, "indent");
              if (t4.length)
                for (let e4 = 0; e4 < i; e4++)
                  s3 += t4;
            }
            return s3;
          }
          rawValue(e3, t3) {
            let s3 = e3[t3], r2 = e3.raws[t3];
            return r2 && r2.value === s3 ? r2.raw : s3;
          }
        }
        e2.exports = s2, s2.default = s2;
      }, 88: (e2, t2, s2) => {
        "use strict";
        let r2 = s2(62);
        function i(e3, t3) {
          new r2(t3).stringify(e3);
        }
        e2.exports = i, i.default = i;
      }, 513: (e2) => {
        "use strict";
        e2.exports.isClean = Symbol("isClean"), e2.exports.my = Symbol("my");
      }, 852: (e2) => {
        "use strict";
        const t2 = "'".charCodeAt(0), s2 = '"'.charCodeAt(0), r2 = "\\".charCodeAt(0), i = "/".charCodeAt(0), n = "\n".charCodeAt(0), o = " ".charCodeAt(0), l = "\f".charCodeAt(0), a = "	".charCodeAt(0), h = "\r".charCodeAt(0), u = "[".charCodeAt(0), c = "]".charCodeAt(0), p = "(".charCodeAt(0), f = ")".charCodeAt(0), d = "{".charCodeAt(0), m = "}".charCodeAt(0), g = ";".charCodeAt(0), w = "*".charCodeAt(0), y = ":".charCodeAt(0), x = "@".charCodeAt(0), b = /[\t\n\f\r "#'()/;[\\\]{}]/g, v = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g, C = /.[\n"'(/\\]/, O = /[\da-f]/i;
        e2.exports = function(e3, k = {}) {
          let S, A, P, R, E, M, I, j, U, B, F = e3.css.valueOf(), L = k.ignoreErrors, D = F.length, z = 0, _ = [], T = [];
          function N(t3) {
            throw e3.error("Unclosed " + t3, z);
          }
          return { back: function(e4) {
            T.push(e4);
          }, nextToken: function(e4) {
            if (T.length)
              return T.pop();
            if (z >= D)
              return;
            let k2 = !!e4 && e4.ignoreUnclosed;
            switch (S = F.charCodeAt(z), S) {
              case n:
              case o:
              case a:
              case h:
              case l:
                A = z;
                do {
                  A += 1, S = F.charCodeAt(A);
                } while (S === o || S === n || S === a || S === h || S === l);
                B = ["space", F.slice(z, A)], z = A - 1;
                break;
              case u:
              case c:
              case d:
              case m:
              case y:
              case g:
              case f: {
                let e5 = String.fromCharCode(S);
                B = [e5, e5, z];
                break;
              }
              case p:
                if (j = _.length ? _.pop()[1] : "", U = F.charCodeAt(z + 1), "url" === j && U !== t2 && U !== s2 && U !== o && U !== n && U !== a && U !== l && U !== h) {
                  A = z;
                  do {
                    if (M = false, A = F.indexOf(")", A + 1), -1 === A) {
                      if (L || k2) {
                        A = z;
                        break;
                      }
                      N("bracket");
                    }
                    for (I = A; F.charCodeAt(I - 1) === r2; )
                      I -= 1, M = !M;
                  } while (M);
                  B = ["brackets", F.slice(z, A + 1), z, A], z = A;
                } else
                  A = F.indexOf(")", z + 1), R = F.slice(z, A + 1), -1 === A || C.test(R) ? B = ["(", "(", z] : (B = ["brackets", R, z, A], z = A);
                break;
              case t2:
              case s2:
                P = S === t2 ? "'" : '"', A = z;
                do {
                  if (M = false, A = F.indexOf(P, A + 1), -1 === A) {
                    if (L || k2) {
                      A = z + 1;
                      break;
                    }
                    N("string");
                  }
                  for (I = A; F.charCodeAt(I - 1) === r2; )
                    I -= 1, M = !M;
                } while (M);
                B = ["string", F.slice(z, A + 1), z, A], z = A;
                break;
              case x:
                b.lastIndex = z + 1, b.test(F), A = 0 === b.lastIndex ? F.length - 1 : b.lastIndex - 2, B = ["at-word", F.slice(z, A + 1), z, A], z = A;
                break;
              case r2:
                for (A = z, E = true; F.charCodeAt(A + 1) === r2; )
                  A += 1, E = !E;
                if (S = F.charCodeAt(A + 1), E && S !== i && S !== o && S !== n && S !== a && S !== h && S !== l && (A += 1, O.test(F.charAt(A)))) {
                  for (; O.test(F.charAt(A + 1)); )
                    A += 1;
                  F.charCodeAt(A + 1) === o && (A += 1);
                }
                B = ["word", F.slice(z, A + 1), z, A], z = A;
                break;
              default:
                S === i && F.charCodeAt(z + 1) === w ? (A = F.indexOf("*/", z + 2) + 1, 0 === A && (L || k2 ? A = F.length : N("comment")), B = ["comment", F.slice(z, A + 1), z, A], z = A) : (v.lastIndex = z + 1, v.test(F), A = 0 === v.lastIndex ? F.length - 1 : v.lastIndex - 2, B = ["word", F.slice(z, A + 1), z, A], _.push(B), z = A);
            }
            return z++, B;
          }, endOfFile: function() {
            return 0 === T.length && z >= D;
          }, position: function() {
            return z;
          } };
        };
      }, 448: (e2) => {
        "use strict";
        let t2 = {};
        e2.exports = function(e3) {
          t2[e3] || (t2[e3] = true, "undefined" != typeof console && console.warn && console.warn(e3));
        };
      }, 728: (e2) => {
        "use strict";
        class t2 {
          constructor(e3, t3 = {}) {
            if (this.type = "warning", this.text = e3, t3.node && t3.node.source) {
              let e4 = t3.node.rangeBy(t3);
              this.line = e4.start.line, this.column = e4.start.column, this.endLine = e4.end.line, this.endColumn = e4.end.column;
            }
            for (let e4 in t3)
              this[e4] = t3[e4];
          }
          toString() {
            return this.node ? this.node.error(this.text, { plugin: this.plugin, index: this.index, word: this.word }).message : this.plugin ? this.plugin + ": " + this.text : this.text;
          }
        }
        e2.exports = t2, t2.default = t2;
      }, 868: () => {
      }, 777: () => {
      }, 830: () => {
      }, 209: () => {
      }, 414: () => {
      }, 961: (e2) => {
        let t2 = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
        e2.exports = { nanoid: (e3 = 21) => {
          let s2 = "", r2 = e3;
          for (; r2--; )
            s2 += t2[64 * Math.random() | 0];
          return s2;
        }, customAlphabet: (e3, t3 = 21) => (s2 = t3) => {
          let r2 = "", i = s2;
          for (; i--; )
            r2 += e3[Math.random() * e3.length | 0];
          return r2;
        } };
      } }, t = {};
      function s(r2) {
        var i = t[r2];
        if (void 0 !== i)
          return i.exports;
        var n = t[r2] = { exports: {} };
        return e[r2](n, n.exports, s), n.exports;
      }
      s.d = (e2, t2) => {
        for (var r2 in t2)
          s.o(t2, r2) && !s.o(e2, r2) && Object.defineProperty(e2, r2, { enumerable: true, get: t2[r2] });
      }, s.o = (e2, t2) => Object.prototype.hasOwnProperty.call(e2, t2), s.r = (e2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
      };
      var r = {};
      return (() => {
        "use strict";
        s.r(r), s.d(r, { default: () => a });
        var e2 = s(20);
        const t2 = e2;
        e2.stringify, e2.fromJSON, e2.plugin, e2.parse, e2.list, e2.document, e2.comment, e2.atRule, e2.rule, e2.decl, e2.root, e2.CssSyntaxError, e2.Declaration, e2.Container, e2.Processor, e2.Document, e2.Comment, e2.Warning, e2.AtRule, e2.Result, e2.Input, e2.Rule, e2.Root, e2.Node;
        var i = function() {
          return i = Object.assign || function(e3) {
            for (var t3, s2 = 1, r2 = arguments.length; s2 < r2; s2++)
              for (var i2 in t3 = arguments[s2])
                Object.prototype.hasOwnProperty.call(t3, i2) && (e3[i2] = t3[i2]);
            return e3;
          }, i.apply(this, arguments);
        }, n = function(e3, t3) {
          return e3 && e3.log(t3, { ns: "parser-poscss" });
        }, o = function(e3) {
          var t3 = e3.nodes || [], s2 = {};
          return t3.forEach(function(e4) {
            var t4 = e4.prop, r2 = e4.value, i2 = e4.important;
            s2[t4] = r2 + (i2 ? " !important" : "");
          }), { selectors: e3.selector || "", style: s2 };
        };
        const l = function(e3, s2) {
          var r2 = [];
          n(s2, ["Input CSS", e3]);
          var l2 = t2().process(e3).sync().root;
          return n(s2, ["PostCSS AST", l2]), l2.nodes.forEach(function(e4) {
            switch (e4.type) {
              case "rule":
                r2.push(o(e4));
                break;
              case "atrule":
                !function(e5, t3) {
                  var s3 = e5.name, r3 = e5.params;
                  ["media", "keyframes"].indexOf(s3) >= 0 ? e5.nodes.forEach(function(e6) {
                    t3.push(i(i({}, o(e6)), { atRule: s3, params: r3 }));
                  }) : t3.push(i(i({}, o(e5)), { atRule: s3 }));
                }(e4, r2);
            }
          }), n(s2, ["Output", r2]), r2;
        };
        const a = function(e3) {
          e3.setCustomParserCss(l);
        };
      })(), r;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-parser-postcss/dist/index.js:
  (*! grapesjs-parser-postcss - 1.0.1 *)
*/
//# sourceMappingURL=grapesjs-parser-postcss.js.map
