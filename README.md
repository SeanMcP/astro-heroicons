# astro-heroicons

[![npm](https://img.shields.io/npm/v/astro-emoji.svg)](https://npmjs.com/package/astro-emoji) [![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/astro-emoji.svg)](https://npmjs.com/package/astro-emoji) [![npm](https://img.shields.io/npm/dt/astro-emoji.svg)](https://npmjs.com/package/astro-emoji)

👩‍🚀 Heroicons as Astro components

## Installation

Add `astro-heroicons` to your project:

```sh
npm install astro-heroicons
# or
yarn add astro-heroicons
```

## Use

Import the icons from `astro-hericons` and add it to your code:

```jsx
---
import RocketLaunch from 'astro-heroicons/24/solid/RocketLaunch.astro':
import ArrowLongRight from 'astro-heroicons/20/solid/ArrowLongRight.astro':
import Sparkles from 'astro-heroicons/24/outline/Sparkles.astro':
---

<p>
  <RocketLaunch />
  <ArrowLongRight />
  <Sparkles />
</p>
```

## Astro components

The components exported from `astro-heroicons` are the raw `svg` elements from Hericons with `{...Astro.props}` added to the root element. This should enable you to customize the element as you see fit.

```jsx
// 20/solid/Bolt.astro
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
  {...Astro.props}
>
  <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
</svg>
```

## License

[MIT](/LICENSE)
