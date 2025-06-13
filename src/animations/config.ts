import type { AnimationOptions, TweenOptions, SpringOptions } from "../types";

export interface AnimConfig {
    initial: Record<string, string>;
    keyframes: Record<string, unknown>;
    settings: Partial<TweenOptions & SpringOptions & AnimationOptions>;
}

export const animConfigs: Record<string, AnimConfig> = {
    fadeIn: {
        initial: { opacity: "0" },
        keyframes: { opacity: [0, 1] },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeInZoom: {
        initial: { opacity: "0", transform: "scale(0.8)" },
        keyframes: { opacity: [0, 1], transform: ["scale(0.7)", "scale(1)"] },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeInUp: {
        initial: { opacity: "0", transform: "translateY(1rem)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["translateY(1rem)", "translateY(0)"],
        },
        settings: { duration: 1, ease: "easeOut", offset: "1rem" },
    },
    fadeInDown: {
        initial: { opacity: "0", transform: "translateY(-1rem)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["translateY(-1rem)", "translateY(0)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeInLeft: {
        initial: { opacity: "0", transform: "translateX(1rem)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["translateX(1rem)", "translateX(0)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeInRight: {
        initial: { opacity: "0", transform: "translateX(-1rem)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["translateX(-1rem)", "translateX(0)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOut: {
        initial: { opacity: "1" },
        keyframes: { opacity: [1, 0] },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOutZoom: {
        initial: { opacity: "1", transform: "scale(1)" },
        keyframes: { opacity: [1, 0], transform: ["scale(1)", "scale(0.7)"] },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOutUp: {
        initial: { opacity: "1", transform: "translateY(0)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["translateY(0)", "translateY(1rem)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOutDown: {
        initial: { opacity: "1", transform: "translateY(0)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["translateY(0)", "translateY(-1rem)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOutLeft: {
        initial: { opacity: "1", transform: "translateX(0)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["translateX(0)", "translateX(1rem)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    fadeOutRight: {
        initial: { opacity: "1", transform: "translateX(0)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["translateX(0)", "translateX(-1rem)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    bounceIn: {
        initial: { opacity: "0", transform: "scale(0.7)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["scale(0.7)", "scale(1.05)", "scale(0.95)", "scale(1)"],
        },
        settings: { duration: 0.8, ease: "easeOut" },
    },
    bounceOut: {
        initial: { opacity: "1", transform: "scale(1)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["scale(1)", "scale(1.05)", "scale(0.7)"],
        },
        settings: { duration: 0.8, ease: "easeIn" },
    },
    flipIn: {
        initial: { opacity: "0", transform: "rotateY(90deg)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["rotateY(90deg)", "rotateY(0deg)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    flipOut: {
        initial: { opacity: "1", transform: "rotateY(0deg)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["rotateY(0deg)", "rotateY(90deg)"],
        },
        settings: { duration: 1, ease: "easeIn" },
    },
    rotateIn: {
        initial: { opacity: "0", transform: "rotate(-180deg)" },
        keyframes: {
            opacity: [0, 1],
            transform: ["rotate(-180deg)", "rotate(0deg)"],
        },
        settings: { duration: 1, ease: "easeOut" },
    },
    rotateOut: {
        initial: { opacity: "1", transform: "rotate(0deg)" },
        keyframes: {
            opacity: [1, 0],
            transform: ["rotate(0deg)", "rotate(180deg)"],
        },
        settings: { duration: 1, ease: "easeIn" },
    },
};
