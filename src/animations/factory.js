"use strict";
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s)
                        if (Object.prototype.hasOwnProperty.call(s, p))
                            t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
var __rest =
    (this && this.__rest) ||
    function (s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (
                var i = 0, p = Object.getOwnPropertySymbols(s);
                i < p.length;
                i++
            ) {
                if (
                    e.indexOf(p[i]) < 0 &&
                    Object.prototype.propertyIsEnumerable.call(s, p[i])
                )
                    t[p[i]] = s[p[i]];
            }
        return t;
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.animations = void 0;
var motion_1 = require("motion");
var config_js_1 = require("./config.js");
function createAnimations(config) {
    return function (el, opts) {
        if (opts === void 0) {
            opts = {};
        }
        // 1) merge defaults + user overrides
        var _a = __assign(__assign({}, config.settings), opts),
            root = _a.root,
            margin = _a.margin,
            amount = _a.amount,
            _b = _a.type,
            type = _b === void 0 ? "tween" : _b,
            rest = __rest(_a, ["root", "margin", "amount", "type"]);
        // 2) apply initial styles
        Object.assign(el.style, config.initial);
        // 3) observe & animate
        motion_1.inView(
            el,
            function () {
                var motionOpts =
                    type === "spring"
                        ? {
                              type: "spring",
                              stiffness: rest.stiffness,
                              damping: rest.damping,
                              mass: rest.mass,
                              velocity: rest.velocity,
                          }
                        : {
                              type: "tween",
                              duration: rest.duration,
                              ease: rest.ease,
                          };
                motion_1.animate(el, config.keyframes, motionOpts);
            },
            { root: root, margin: margin, amount: amount },
        );
    };
}
exports.animations = Object.fromEntries(
    Object.entries(config_js_1.animConfigs).map(function (_a) {
        var name = _a[0],
            cfg = _a[1];
        return [name, createAnimations(cfg)];
    }),
);
