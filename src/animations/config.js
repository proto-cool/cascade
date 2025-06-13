"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animConfigs = void 0;
exports.animConfigs = {
    fadeIn: {
        initial: { opacity: "0" },
        keyframes: { opacity: [0, 1] },
        settings: { duration: 600, ease: "easeOut" },
    },
    fadeInUp: {
        initial: { opacity: "0", transform: "translateY(1rem)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["translateY(1rem)", "translateY(0)"],
        },
        settings: { duration: 600, ease: "easeOut", offset: "1rem" },
    },
    fadeInScale: {
        initial: { opacity: "0", transform: "scale(0.8)" },
        keyframes: { opacity: [0, 1], transform: ["scale(0.8)", "scale(1)"] },
        settings: { duration: 600, ease: "easeOut" },
    },
};
