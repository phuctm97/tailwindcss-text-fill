# 🎨 tailwindcss-text-fill

[![npm version][npm badge]][npm url]
[![GitHub license][license badge]][license url]

TailwindCSS utility to override foreground fill color of text content, is especially useful to style autocompleted form fields with [tailwindcss-autofill] because `color` won't work.

## Requirements

- Node.js 12+

- TailwindCSS 2+

## Install

```bash
yarn add tailwindcss-text-fill
```

Or if you use `npm`:

```bash
npm i --save tailwindcss-text-fill
```

## Usage

Add to `plugins` in your **tailwind.config.js**:

```js
module.exports = {
  // ...
  plugins: [
    require("tailwindcss-text-fill"),
    // ...other plugins.
  ],
};
```

Style your components using `text-fill-{color}`, e.g. `text-fill-gray-100`, `text-fill-gray-200`, `text-fill-red-500`, etc.

```jsx
<input className="text-fill-gray-900 dark:text-fill-gray-100" />
```

## Author

- [Minh-Phuc Tran][@phuctm97]

<!-- Badges -->

[npm badge]: https://img.shields.io/npm/v/tailwindcss-text-fill?logo=npm
[license badge]: https://img.shields.io/github/license/phuctm97/tailwindcss-text-fill
[npm url]: https://www.npmjs.com/package/tailwindcss-text-fill
[license url]: /LICENSE

<!-- Links -->

[@phuctm97]: https://phuctm97.com
[tailwindcss-autofill]: https://github.com/phuctm97/tailwindcss-autofill
