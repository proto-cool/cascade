/**
 * index.ts
 *
 * This module exports a single function, `enable`, which scans the document
 * for any elements using our custom data attribute (e.g. `data-cascade`) and
 * applies the corresponding animation to each one.
 * It merges three levels of configuration, in order of increasing priority:
 *   1. Built-in defaults
 *   2. Global overrides passed to `enable()`
 *   3. Per-element overrides via `data-<prefix>-<option>` attributes
 */

import { animations } from "./animations";
import type { CascadeConfig } from "./config";
import config from "./config";
import type { AnimationOptions } from "./types";
import generateNoscript from "./noscript";

/**
 * Scans the document for elements marked with `data-<prefix>` and runs the
 * chosen animation on each one, using defaults + globalOpts + elementAttrs.
 *
 * @param globalOpts
 *   Optional configuration that applies to *every* element. These values
 *   override the built-in defaults but are themselves overridden by any
 *   per-element `data-<prefix>-<option>` attributes.
 */
function enable(
    globalOpts?: Omit<AnimationOptions, "type"> & { type?: "tween" | "spring" },
): void {
    // Extract our configured attribute prefix (typically "cascade") and the
    // bundle of default animation settings (duration, ease, spring params, etc.).
    const { attributePrefix, defaults } = config as CascadeConfig;

    // Build a CSS selector for elements that have the bare `data-<prefix>` key.
    // e.g. if prefix = "cascade", selector = "[data-cascade]"
    const baseSelector = `[data-${attributePrefix}]`;

    // Find and loop through every such element in the DOM.
    document.querySelectorAll<HTMLElement>(baseSelector).forEach((el) => {
        // 1) Read the animation name (e.g. "fade", "slide") from data-<prefix>
        const animationName = el.getAttribute(`data-${attributePrefix}`)!;
        const animFn = animations[animationName];

        // If we don’t recognize that animation name, warn and skip this element.
        if (!animFn) {
            console.warn(
                `Unknown animation: "${animationName}". ` +
                    `Valid names are: ${Object.keys(animations).join(", ")}.`,
            );
            return;
        }

        // 2) Build per-element overrides by scanning for any attributes of the
        //    form `data-<prefix>-<optionName>`. For instance:
        //      - data-cascade-delay="0.3"
        //      - data-cascade-ease="easeOut"
        //      - data-cascade-bounce="0.5"
        //
        //    We extract <optionName>, convert it to camelCase if needed,
        //    parse it into the right type (number, boolean, or string),
        //    and stash it in elementOverrides.
        const elementOverrides: Partial<AnimationOptions> = {};
        const attrStart = `data-${attributePrefix}-`;
        for (const fullAttrName of el.getAttributeNames()) {
            if (!fullAttrName.startsWith(attrStart)) {
                continue; // skip irrelevant attributes
            }

            // Extract the option key from the attribute name
            // e.g. "data-cascade-delay"  → optionKeyRaw = "delay"
            const optionKeyRaw = fullAttrName.slice(attrStart.length);

            // Convert hyphenated option keys to camelCase property names
            // e.g. "repeat-delay" → "repeatDelay"
            const propKey = optionKeyRaw.replace(/-([a-z])/g, (_, char) =>
                char.toUpperCase(),
            ) as keyof AnimationOptions;

            // Only proceed if this prop actually exists in our default settings
            if (!(propKey in defaults)) {
                continue;
            }

            // Read the raw string value from the attribute
            const rawValue = el.getAttribute(fullAttrName)!;
            const defaultValue = defaults[propKey] as unknown;

            // Parse the string into the correct type
            let parsedValue: any = rawValue;
            if (typeof defaultValue === "number") {
                parsedValue = Number(rawValue);
            } else if (typeof defaultValue === "boolean") {
                parsedValue = rawValue === "true";
            }

            // Store it as a per-element override
            elementOverrides[propKey] = parsedValue;
        }

        // 3) Merge everything: built-in defaults ← globalOpts ← per-element overrides
        //    Later spreads overwrite earlier keys, so HTML attributes win over
        //    JS global overrides, which in turn win over the defaults.
        const finalOpts: AnimationOptions = {
            ...defaults,
            ...globalOpts,
            ...elementOverrides,
        };

        // 4) Finally, call the animation function with its element + resolved options.
        animFn(el, finalOpts);
    });
}

const cascade = {
    enable,
    noscript: generateNoscript(),
};

export default cascade;
