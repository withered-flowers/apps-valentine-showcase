# Project Valentine Apps

## Demo Website

- https://wybm-valentine.netlify.app

## Description

A website for your valentine ~

Inspired from this [website](https://valentine.mewtru.com/)

## Tech Stack

- Astro
- Typescript
- Tailwind

## How to modify?

- [CONTENT] Just read `src/content/loves/main.md` to change the text / image
- [COLOR] Just modify it directly on `tailwind.config.mjs`
- [FONT] Just modify it directly on `font.css` and `tailwind.config.mjs`

## How to develop?

- Using `nodejs`
- Don't forget to `npm install`
- Just run `npm run dev`

## How to deploy?

- Vercel [difficulty: EASY]
  - Forked this repo to your own account
  - Using your [Vercel](https://vercel.com) Account which already bind to Git(hub/lab)
  - next next next finish, and deployed !
- Netlify [difficulty: EASY]
  - Fork this repo to your own account
  - Using your [Netlify](https://netlify.com) Account which already bind to Git(hub/lab)
  - next next next finish and deployed
- Github Pages [difficulty: NOT-SO-EASY]
  - Absolutely needed: Github Account
  - Fork This Repo to your github account
  - Go to Repository `Settings` -> `Pages` -> `Build and Deployment (Source)` and choose `Github Actions (Beta)`
  - Modify file `astro.config.mjs` (`base` and `site`)
    ```js
    import { defineConfig } from 'astro/config';

    import tailwind from "@astrojs/tailwind";

    // https://astro.build/config
    export default defineConfig({
      integrations: [tailwind()],
      // 'https://<your-github-account>.github.io'
      site: 'https://myaccount-github.io'
      // this will refer to the name of the repository, don't forget the slash
      base: '/apps-valentine-showcase'
    });
    ```
  - Commit and Push, Actions will be triggered, just wait for the deployment done
  - You can access it via `https://my-account.github.io/apps-valentine-showcase
  - Based on [This Documentation](https://docs.astro.build/en/guides/deploy/github/)
  