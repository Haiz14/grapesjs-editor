import {
  __commonJS
} from "./chunk-76J2PTFD.js";

// node_modules/.pnpm/grapesjs-blocks-basic@1.0.2/node_modules/grapesjs-blocks-basic/dist/index.js
var require_dist = __commonJS({
  "node_modules/.pnpm/grapesjs-blocks-basic@1.0.2/node_modules/grapesjs-blocks-basic/dist/index.js"(exports, module) {
    !function(n, a) {
      "object" == typeof exports && "object" == typeof module ? module.exports = a() : "function" == typeof define && define.amd ? define([], a) : "object" == typeof exports ? exports["gjs-blocks-basic"] = a() : n["gjs-blocks-basic"] = a();
    }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : exports, () => (() => {
      "use strict";
      var n = { d: (a2, e2) => {
        for (var t2 in e2)
          n.o(e2, t2) && !n.o(a2, t2) && Object.defineProperty(a2, t2, { enumerable: true, get: e2[t2] });
      }, o: (n2, a2) => Object.prototype.hasOwnProperty.call(n2, a2), r: (n2) => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(n2, "__esModule", { value: true });
      } }, a = {};
      n.r(a), n.d(a, { default: () => l });
      var e = function() {
        return e = Object.assign || function(n2) {
          for (var a2, e2 = 1, t2 = arguments.length; e2 < t2; e2++)
            for (var l2 in a2 = arguments[e2])
              Object.prototype.hasOwnProperty.call(a2, l2) && (n2[l2] = a2[l2]);
          return n2;
        }, e.apply(this, arguments);
      };
      var t = function() {
        return t = Object.assign || function(n2) {
          for (var a2, e2 = 1, t2 = arguments.length; e2 < t2; e2++)
            for (var l2 in a2 = arguments[e2])
              Object.prototype.hasOwnProperty.call(a2, l2) && (n2[l2] = a2[l2]);
          return n2;
        }, t.apply(this, arguments);
      };
      const l = function(n2, a2) {
        void 0 === a2 && (a2 = {}), function(n3, a3) {
          var t2 = n3.BlockManager, l2 = a3.category, o = a3.blocks, c = a3.stylePrefix, i = a3.flexGrid, d = a3.rowHeight, r = a3.addBasicStyle, s = "".concat(c, "row"), v = "".concat(c, "cell"), m = i ? "\n    .".concat(s, " {\n      display: flex;\n      justify-content: flex-start;\n      align-items: stretch;\n      flex-wrap: nowrap;\n      padding: 10px;\n    }\n    @media (max-width: 768px) {\n      .").concat(s, " {\n        flex-wrap: wrap;\n      }\n    }") : "\n    .".concat(s, " {\n      display: table;\n      padding: 10px;\n      width: 100%;\n    }\n    @media (max-width: 768px) {\n      .").concat(c, "cell, .").concat(c, "cell30, .").concat(c, "cell70 {\n        width: 100%;\n        display: block;\n      }\n    }"), p = i ? "\n    .".concat(v, " {\n      min-height: ").concat(d, "px;\n      flex-grow: 1;\n      flex-basis: 100%;\n    }") : "\n    .".concat(v, " {\n      width: 8%;\n      display: table-cell;\n      height: ").concat(d, "px;\n    }"), u = "\n  .".concat(c, "cell30 {\n    width: 30%;\n  }"), b = "\n  .".concat(c, "cell70 {\n    width: 70%;\n  }"), g = 1, h = { tl: 0, tc: 0, tr: 0, cl: 0, cr: 0, bl: 0, br: 0, minDim: g }, f = e(e({}, h), { cr: 1, bc: 0, currentUnit: 1, minDim: g, step: 0.2 });
          i && (f.keyWidth = "flex-basis");
          var y = { class: s, "data-gjs-droppable": ".".concat(v), "data-gjs-resizable": h, "data-gjs-name": "Row" }, C = { class: v, "data-gjs-draggable": ".".concat(s), "data-gjs-resizable": f, "data-gjs-name": "Cell" };
          i && (C["data-gjs-unstylable"] = ["width"], C["data-gjs-stylable-require"] = ["flex-basis"]);
          var x = [".".concat(s), ".".concat(v)];
          n3.on("selector:add", function(n4) {
            return x.indexOf(n4.getFullName()) >= 0 && n4.set("private", 1);
          });
          var V = function(n4) {
            var a4 = [];
            for (var e2 in n4) {
              var t3 = n4[e2];
              t3 = t3 instanceof Array || t3 instanceof Object ? JSON.stringify(t3) : t3, a4.push("".concat(e2, "=").concat("'".concat(t3, "'")));
            }
            return a4.length ? " ".concat(a4.join(" ")) : "";
          }, w = function(n4) {
            return o.indexOf(n4) >= 0;
          }, L = V(y), H = V(C), M = { category: l2, select: true };
          w("column1") && t2.add("column1", e(e({}, M), { label: a3.labelColumn1, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M2 20h20V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1Z"/>\n      </svg>', content: "<div ".concat(L, ">\n        <div ").concat(H, "></div>\n      </div>\n      ").concat(r ? "<style>\n          ".concat(m, "\n          ").concat(p, "\n        </style>") : "") })), w("column2") && t2.add("column2", e(e({}, M), { label: a3.labelColumn2, media: '<svg viewBox="0 0 23 24">\n        <path fill="currentColor" d="M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z"/>\n      </svg>', content: "<div ".concat(L, ">\n        <div ").concat(H, "></div>\n        <div ").concat(H, "></div>\n      </div>\n      ").concat(r ? "<style>\n          ".concat(m, "\n          ").concat(p, "\n        </style>") : "") })), w("column3") && t2.add("column3", e(e({}, M), { label: a3.labelColumn3, media: '<svg viewBox="0 0 23 24">\n        <path fill="currentColor" d="M2 20h4V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM17 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1ZM9.5 20h4V4h-4v16Zm-1 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1Z"/>\n      </svg>', content: "<div ".concat(L, ">\n        <div ").concat(H, "></div>\n        <div ").concat(H, "></div>\n        <div ").concat(H, "></div>\n      </div>\n      ").concat(r ? "<style>\n          ".concat(m, "\n          ").concat(p, "\n        </style>") : "") })), w("column3-7") && t2.add("column3-7", e(e({}, M), { label: a3.labelColumn37, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M2 20h5V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM10 20h12V4H10v16Zm-1 0V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1Z"/>\n      </svg>', content: "<div ".concat(L, ">\n        <div ").concat(H, " style='").concat(i ? "flex-basis" : "width", ": 30%;'></div>\n        <div ").concat(H, " style='").concat(i ? "flex-basis" : "width", ": 70%;'></div>\n      </div>\n      ").concat(r ? "<style>\n          ".concat(m, "\n          ").concat(p, "\n          ").concat(u, "\n          ").concat(b, "\n        </style>") : "") })), w("text") && t2.add("text", e(e({}, M), { activate: true, label: a3.labelText, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M18.5,4L19.66,8.35L18.7,8.61C18.25,7.74 17.79,6.87 17.26,6.43C16.73,6 16.11,6 15.5,6H13V16.5C13,17 13,17.5 13.33,17.75C13.67,18 14.33,18 15,18V19H9V18C9.67,18 10.33,18 10.67,17.75C11,17.5 11,17 11,16.5V6H8.5C7.89,6 7.27,6 6.74,6.43C6.21,6.87 5.75,7.74 5.3,8.61L4.34,8.35L5.5,4H18.5Z" />\n      </svg>', content: { type: "text", content: "Insert your text here", style: { padding: "10px" } } })), w("link") && t2.add("link", e(e({}, M), { label: a3.labelLink, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M3.9,12C3.9,10.29 5.29,8.9 7,8.9H11V7H7A5,5 0 0,0 2,12A5,5 0 0,0 7,17H11V15.1H7C5.29,15.1 3.9,13.71 3.9,12M8,13H16V11H8V13M17,7H13V8.9H17C18.71,8.9 20.1,10.29 20.1,12C20.1,13.71 18.71,15.1 17,15.1H13V17H17A5,5 0 0,0 22,12A5,5 0 0,0 17,7Z" />\n      </svg>', content: { type: "link", content: "Link", style: { color: "#d983a6" } } })), w("image") && t2.add("image", e(e({}, M), { activate: true, label: a3.labelImage, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M21,3H3C2,3 1,4 1,5V19A2,2 0 0,0 3,21H21C22,21 23,20 23,19V5C23,4 22,3 21,3M5,17L8.5,12.5L11,15.5L14.5,11L19,17H5Z" />\n      </svg>', content: { style: { color: "black" }, type: "image" } })), w("video") && t2.add("video", e(e({}, M), { label: a3.labelVideo, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />\n      </svg>', content: { type: "video", src: "img/video2.webm", style: { height: "350px", width: "615px" } } })), w("map") && t2.add("map", e(e({}, M), { label: a3.labelMap, media: '<svg viewBox="0 0 24 24">\n        <path fill="currentColor" d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z" />\n      </svg>', content: { type: "map", style: { height: "350px" } } }));
        }(n2, t({ blocks: ["column1", "column2", "column3", "column3-7", "text", "link", "image", "video", "map"], flexGrid: false, stylePrefix: "gjs-", addBasicStyle: true, category: "Basic", labelColumn1: "1 Column", labelColumn2: "2 Columns", labelColumn3: "3 Columns", labelColumn37: "2 Columns 3/7", labelText: "Text", labelLink: "Link", labelImage: "Image", labelVideo: "Video", labelMap: "Map", rowHeight: 75 }, a2));
      };
      return a;
    })());
  }
});
export default require_dist();
/*! Bundled license information:

grapesjs-blocks-basic/dist/index.js:
  (*! grapesjs-blocks-basic - 1.0.2 *)
*/
//# sourceMappingURL=grapesjs-blocks-basic.js.map
