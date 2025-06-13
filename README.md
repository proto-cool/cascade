# @proto-cool/cascade

A lightweight TypeScript library for creating smooth, performant animations when elements enter the viewport.

[![npm version](https://img.shields.io/npm/v/@proto-cool/cascade.svg)](https://www.npmjs.com/package/@proto-cool/cascade)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Features

- 🚀 **Zero Configuration** - Add a single data attribute to any element and it animates when scrolled into view
- ⚡ **Performant** - Built on the Motion animation library with optimized viewport detection
- 🎨 **Versatile** - Multiple animation types including fade, slide, scale, and custom spring physics
- 🔧 **Customizable** - Configure animations globally or per-element using data attributes
- 📱 **Responsive** - Works perfectly across all device sizes
- ♿ **Accessible** - Includes fallbacks for users with JavaScript disabled
- 🧩 **Modular** - Use only what you need, minimal bundle size

## Installation

```bash
# Using pnpm (recommended)
pnpm add @proto-cool/cascade

# Using npm
npm install @proto-cool/cascade

# Using yarn
yarn add @proto-cool/cascade
```

## Quick Start

1. **Import and enable the library:**

```javascript
import cascade from "@proto-cool/cascade";

// Initialize with default settings
cascade.enable();
```

2. **Add the data attribute to any HTML element:**

```html
<!-- Basic fade animation when element enters viewport -->
<div data-cascade="fade">I'll fade in when visible</div>

<!-- Slide animation with custom delay -->
<div data-cascade="slide" data-cascade-delay="0.5">
    I'll slide in after a delay
</div>
```

3. **Add noscript fallback for accessibility:**

Add this to your HTML `<head>` for users with JavaScript disabled:

```html
<!-- Copy this noscript tag to your head section -->
<noscript>
    <style>
        /* Show all elements with data-cascade attribute when JS is disabled */
        [data-cascade] {
            opacity: 1 !important;
        }
    </style>
</noscript>

<!-- Or use the provided noscript string: -->
<head>
    <!-- your other head content -->
    <script>
        document.write(cascade.noscript);
    </script>
</head>
```

## Configuration

### Global Configuration

Customize the default behavior for all animations:

```javascript
cascade.enable({
    // Animation timing defaults
    duration: 0.8, // Animation duration in seconds
    delay: 0, // Delay before animation starts

    // Animation type default
    type: "spring", // 'spring' | 'tween' | 'keyframes' | 'decay' | 'inertia'

    // Intersection observer defaults
    margin: "0px", // Root margin (e.g. '50px' or '10% 20px')
    amount: 0.2, // Trigger when 20% visible (0-1, 'some', or 'all')

    // Spring physics defaults (when type = 'spring')
    bounce: 0.25, // Spring bounciness
    damping: 10, // Spring damping
    stiffness: 100, // Spring stiffness

    // Tween easing defaults (when type = 'tween')
    ease: "easeInOut", // Easing function

    // Animation repeat defaults
    repeat: 0, // Number of repeats (0 = no repeat)
    repeatType: "loop", // 'loop' | 'reverse' | 'mirror'
    repeatDelay: 0, // Delay between repeats
});
```

### Per-Element Configuration

Override settings on individual elements using data attributes:

```html
<div
    data-cascade="bounceIn"
    data-cascade-duration="1.2"
    data-cascade-delay="0.3"
    data-cascade-bounce="0.4"
    data-cascade-ease="easeInOut"
>
    Customized animation
</div>
```

## Available Animations

This package offers a variety of ready-to-use animation presets designed for common UI effects.  
Below is a summary of each animation and what it does:

| Name         | Description                                             |
| ------------ | ------------------------------------------------------- |
| fadeIn       | Fades in an element from transparent to visible.        |
| fadeInZoom   | Fades in while zooming in from 80% to full size.        |
| fadeInUp     | Fades in while moving upward into place.                |
| fadeInDown   | Fades in while moving downward into place.              |
| fadeInLeft   | Fades in while moving in from the right.                |
| fadeInRight  | Fades in while moving in from the left.                 |
| fadeOut      | Fades out an element from visible to transparent.       |
| fadeOutZoom  | Fades out while shrinking (zooming out to 70%).         |
| fadeOutUp    | Fades out while moving upward out of view.              |
| fadeOutDown  | Fades out while moving downward out of view.            |
| fadeOutLeft  | Fades out while moving leftward out of view.            |
| fadeOutRight | Fades out while moving rightward out of view.           |
| bounceIn     | Bounces in, scaling up and settling to full size.       |
| bounceOut    | Bounces out, expanding slightly then shrinking away.    |
| flipIn       | Flips in along the Y axis, rotating from 90° to 0°.     |
| flipOut      | Flips out along the Y axis, rotating from 0° to 90°.    |
| rotateIn     | Rotates in, spinning from -180° to 0° while fading in.  |
| rotateOut    | Rotates out, spinning from 0° to 180° while fading out. |

Example usage:

```html
<div data-cascade="fadeIn">Fade in</div>
<div data-cascade="fadeInZoom">Zoom in</div>
<div data-cascade="FadeInUp">Slide up in</div>
<div data-cascade="flipIn">Flip in</div>
<div data-cascade="bounceIn">Bounce in</div>
```

## Advanced Usage

### Custom Intersection Margins

Adjust when animations trigger relative to the viewport:

```html
<!-- Animation starts when element is 100px away from entering viewport -->
<div data-cascade="fadeIn" data-cascade-margin="100px"></div>

<!-- Different margins for each side (top, right, bottom, left) -->
<div data-cascade="fadeIn" data-cascade-margin="50px 0px 0px 0px"></div>
```

### Animation Amount Threshold

Control how much of the element must be visible to trigger the animation:

```html
<!-- Trigger when 50% of element is visible -->
<div data-cascade="fadeIn" data-cascade-amount="0.5"></div>

<!-- Trigger when any part of element is visible -->
<div data-cascade="fadeIn" data-cascade-amount="some"></div>

<!-- Trigger when element is fully visible -->
<div data-cascade="FadeIn" data-cascade-amount="all"></div>
```

### Custom Animation Physics

Fine-tune spring animations with custom physics parameters:

```html
<!-- Extra bouncy spring animation -->
<div
    data-cascade="bounceIn"
    data-cascade-bounce="0.8"
    data-cascade-stiffness="200"
    data-cascade-damping="5"
>
    Bouncy content
</div>
```

## Browser Support

Cascade works in all modern browsers that support the Intersection Observer API (Chrome, Firefox, Safari, Edge).

## Development

```bash
# Install dependencies
pnpm install

# Build the library
pnpm run build

# Format code with Prettier
pnpm run format
```

## TypeScript Support

Cascade is written in TypeScript and includes full type definitions:

```typescript
import cascade from "@proto-cool/cascade";
import type { AnimationOptions } from "@proto-cool/cascade";

const options: Partial<AnimationOptions> = {
    duration: 1.2,
    type: "spring",
    bounce: 0.3,
};

cascade.enable(options);
```

## License

MIT © [protocol7](https://github.com/proto-cool)
