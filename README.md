# astro-heroicons

[![npm](https://img.shields.io/npm/v/astro-heroicons.svg)](https://npmjs.com/package/astro-heroicons) [![npm](https://img.shields.io/npm/dt/astro-heroicons.svg)](https://npmjs.com/package/astro-heroicons)

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
import RocketLaunch from 'astro-heroicons/solid/RocketLaunch.astro';
import ArrowLongRight from 'astro-heroicons/mini/ArrowLongRight.astro';
import Sparkles from 'astro-heroicons/outline/Sparkles.astro';
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
// mini/Bolt.astro
<svg
  {...Astro.props}
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 20 20"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M11.983 1.907a.75.75 0 00-1.292-.657l-8.5 9.5A.75.75 0 002.75 12h6.572l-1.305 6.093a.75.75 0 001.292.657l8.5-9.5A.75.75 0 0017.25 8h-6.572l1.305-6.093z" />
</svg>
```

Any prop that you pass to the component will be added to the top-level `svg` element:

```jsx
<Heart class="a few classes" data-favorite="true" id="id" />
```

### `aria-hidden`

Heroicons adds `aria-hidden="true"` to its top-level `svg` elements by default. If you want those elements to be accessible to screenreaders, you need to manually pass `aria-hidden="false"` to the component:

```jsx
<Bolt aria-hidden="false" aria-label="Live" />
```

## License

[MIT](/LICENSE)
