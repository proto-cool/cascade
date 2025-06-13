import type {
    AnimationOptions,
    TweenOptions,
    SpringOptions,
} from "../types.js";
export interface AnimConfig {
    initial: Record<string, string>;
    keyframes: Record<string, unknown>;
    settings: Partial<TweenOptions & SpringOptions & AnimationOptions>;
}
export declare const animConfigs: Record<string, AnimConfig>;
