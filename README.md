This project was bootstrapped with [Vite.js](https://vitejs.dev).

## ⚙️ Setup

1. Install [Node.js](https://nodejs.org);
    > Require [Node.js](https://nodejs.org) >=v20
2. Install the NPM dependencies by running `npm ci`;
3. Create `.env.local` and add variables. You can look at the `.env.local.example` file;

## 🤖 Commands

- Runs the local dev server at `localhost:3000`:
    ```
    npm run dev:vite
    ```
- Runs tsc in watch mode:
    ```
    npm run dev:tsc
    ```
- Runs all `dev:*` scripts in parallel:
    ```
    npm run dev
    ```
- Builds your production site to `./dist/`:
    ```
    npm run build
    ```
- Previews your build locally, before deploying at `localhost:4173`:
    ```
    npm run preview
    ```
- Checks your JavaScript/TypeScript for errors and warnings:
    ```
    npm run lint:eslint
    ```
- Checks your CSS for errors and warnings:
    ```
    npm run lint:stylelint
    ```
- Checks your code formatting:
    ```
    npm run lint:prettier
    ```
- Checks your code all together:
    ```
    npm run lint
    ```
- Fixes your code formatting:
    ```
    npm run fix:prettier
    ```
