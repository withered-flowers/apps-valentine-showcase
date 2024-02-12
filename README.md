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

## How to deploy?
- Vercel [difficulty: EASY]
  - Using your own git repo
  - Using your Vercel Account which already bind to Git(hub/lab)
  - next next next finish, and deployed !
- Netlify [difficulty: EASY]
  - Using your own git repo, 
  - Using your Netlify Account which already bind to Git(hub/lab)
  - next next next finish and deployed
- Github Pages [difficulty: NOT-SO-EASY]
  - Before you deploy to Github Pages, please read [This Website](https://docs.astro.build/en/guides/deploy/github/)
  - `workflows/deploy.yml` is already configured, you just need to modify `astro.config.mjs`