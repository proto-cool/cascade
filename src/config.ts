import type { AnimationOptions, MarginType } from "./types";

export interface CascadeConfig {
    attributePrefix: string;
    rootMargin: MarginType;
    defaults: AnimationOptions;
}

const defaultConfig: CascadeConfig = {
    attributePrefix: "cascade",
    rootMargin: "0px 0px -10% 0px",
    defaults: {
        // Basic transition settings
        duration: 0.7,
        delay: 0,
        type: "tween",
        repeat: 0,
        repeatType: "loop",
        repeatDelay: 0,

        // Tween transition type
        ease: "easeInOut",

        // Spring-specific settings
        bounce: 0.25,
        damping: 10,
        mass: 1,
        stiffness: 1,
        velocity: 0,
        restSpeed: 0.1,
        restDelta: 0.01,

        // Inertia specific settings
        power: 0.8,
        timeConstant: 700,
        min: undefined,
        max: undefined,
        bounceStiffness: 500,
        bounceDamping: 10,
    },
};

export default defaultConfig;
