# Next.js + Carbon with TypeScript template

This is a really simple project that shows the usage of [Next.js](https://nextjs.org/docs/basic-features/typescript) and [Carbon React components](https://www.carbondesignsystem.com/developing/frameworks/react/) with TypeScript.

## How to run?

Basically run the following command in the main directory:

```
npm run dev
```

## What is Carbon Design System?

A [Carbon Design System](https://www.carbondesignsystem.com/) variant that's as easy to use as native HTML elements, with no framework tax, no framework silo. Carbon is an open-source design system built by IBM. With the [IBM](https://www.ibm.com/us-en/) Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.

If you have [Sass](https://sass-lang.com/) setup in your project, you can use the sass files that Carbon ships to include styles in a similar way to the unpkg CDN. To start off [read more...](https://www.carbondesignsystem.com/developing/react-tutorial/step-1)

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript:

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React:

```
npm install --save-dev @types/react @types/react-dom
```

Also we need to install types for Carbon React components:

```
npm install --save-dev @types/carbon-components-react
```

When we run `npm run dev` next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
