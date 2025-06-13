import type { Easing } from "motion";

type MarginValue = `${number}${"px" | "%"}`;
export type MarginType =
    | MarginValue
    | `${MarginValue} ${MarginValue}`
    | `${MarginValue} ${MarginValue} ${MarginValue}`
    | `${MarginValue} ${MarginValue} ${MarginValue} ${MarginValue}`;

export interface CoreAnimationOptions {
    root?: Element | Document;
    margin?: MarginType;
    amount?: number | "some" | "all";
}

export type AnimType = "decay" | "spring" | "keyframes" | "tween" | "inertia";

export interface SpringOptions {
    bounce?: number;
    damping?: number;
    mass?: number;
    stiffness?: number;
    velocity?: number;
    restSpeed?: number;
    restDelta?: number;
}

export interface TweenOptions {
    ease?: Easing;
}

export interface InertiaOptions {
    power?: number;
    timeConstant?: number;
    min?: number;
    max?: number;
    bounceStiffness?: number;
    bounceDamping?: number;
}

export interface AnimationOptions
    extends CoreAnimationOptions,
        SpringOptions,
        TweenOptions,
        InertiaOptions {
    offset?: string; // e.g. "1rem" or "0.8rem"
    type?: AnimType;
    duration?: number;
    delay?: number;
    repeat?: number;
    repeatType?: "loop" | "reverse" | "mirror";
    repeatDelay?: number;
}

export type AnimationFn = (
    el: HTMLElement,
    opts?: CoreAnimationOptions & Partial<AnimationOptions>,
) => void;
