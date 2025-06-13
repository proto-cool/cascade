import "./init.js";
import type { AnimationOptions } from "./types.js";
export declare function enable(
    opts?: Omit<AnimationOptions, "type"> & {
        type?: "tween" | "spring";
    },
): void;
