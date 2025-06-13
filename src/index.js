"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enable = void 0;
require("./init.js");
var index_js_1 = require("./animations/index.js");
function enable(opts) {
    document.querySelectorAll("[data-cascade]").forEach(function (el) {
        var name = el.dataset.cascade;
        var anim = index_js_1.animations[name];
        if (!anim) {
            console.warn("Unknown animation: " + name);
            return;
        }
        anim(el, opts);
    });
}
exports.enable = enable;
