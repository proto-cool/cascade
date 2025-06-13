import { animate, inView, ObjectTarget } from "motion";
import type { AnimationFn, AnimationOptions } from "../types";
import { animConfigs, AnimConfig } from "./config";

function createAnimations(config: AnimConfig): AnimationFn {
    return (el, opts: Partial<AnimationOptions> = {}) => {
        // 1) Merge the per-animation defaults with any overrides
        const merged = {
            ...config.settings,
            ...opts,
        };

        // 2) Pull out inView-specific props (and drop "offset" if present)
        const { root, margin, amount, offset, ...motionOpts } = merged;

        // 3) Apply your initial CSS styles
        Object.assign(el.style, config.initial);

        // 4) Observe and, on enter, fire motion.animate() with the rest of the options
        inView(
            el,
            () => {
                animate(
                    el as HTMLElement,
                    config.keyframes as ObjectTarget<HTMLElement>,
                    motionOpts as AnimationOptions as any,
                );
            },
            { root, margin, amount },
        );
    };
}

export const animations: Record<string, AnimationFn> = Object.fromEntries(
    Object.entries(animConfigs).map(([name, cfg]) => [
        name,
        createAnimations(cfg),
    ]),
);
