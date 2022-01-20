# Next.js + Carbon with TypeScript template

This is a really simple project that shows the usage of [Next.js](https://nextjs.org/docs/basic-features/typescript) and [Carbon React components](https://www.carbondesignsystem.com/developing/frameworks/react/) with TypeScript.

## How to run?

Basically run the following command in the main directory:
```
npm run dev
```

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React.

```
npm install --save-dev @types/react @types/react-dom
```

When we run `npm run dev` next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.

