# Core UI — Design System

A Vue 3 component library, built as a monorepo with a **Storybook** for isolated
component docs and a **Playground** app for testing components together in real
pages. Structured so it can be published as a private npm package via
**GitHub Packages**.

## Structure

```
core-ds/
├── projects/
│   ├── ui-kit/           # the publishable component library
│   │   ├── .storybook/   # Storybook config
│   │   └── src/
│   │       ├── lib/
│   │       │   ├── atoms/       # Button, Input, Card, Badge, Avatar
│   │       │   ├── molecules/   # FormField, Modal, SearchInput
│   │       │   └── organisms/   # Header, Footer
│   │       ├── styles/          # design tokens (_tokens.scss) + base styles
│   │       ├── plugin.ts        # Vue plugin: app.use(createCoreUi())
│   │       └── index.ts         # public API — what gets exported to consumers
│   └── playground/       # a small Vue app that imports ui-kit and renders pages
├── tools/
│   └── generate.mjs      # scaffolds new components (see below)
└── .github/workflows/    # CI: publish to GitHub Packages, deploy Storybook
```

## Getting started

```bash
npm install

# Storybook — isolated component docs, live reload
npm run storybook          # → http://localhost:6006

# Playground — a real app importing the library, for testing components together
npm run dev                # → http://localhost:5173

# Build the publishable library (dist/)
npm run build

```

## Adding a new component

Instead of hand-writing boilerplate every time, use the generator:

```bash
npm run generate atoms Tooltip
npm run generate molecules DateRangePicker
npm run generate organisms Sidebar
```

This creates `Component.vue` + `Component.stories.ts` in the right layer folder
and adds the export to that layer's `index.ts` automatically. Then:
1. Fill in the template/props/styles in the `.vue` file
2. Add real story variants in the `.stories.ts` file
3. Add a page/section to `projects/playground/src/pages/*Page.vue` if you want
   to see it alongside other components

## Publishing to GitHub Packages

**Before your first publish, replace every `YOUR_GITHUB_ORG` placeholder** in
this repo with your actual GitHub username or org name. It appears in:
- `projects/ui-kit/package.json` (`"name"`)
- `.npmrc`
- `projects/playground/vite.config.ts` and `src/main.ts` / pages (import path)
- `.github/workflows/publish.yml` (`scope`)

```bash
grep -rl "YOUR_GITHUB_ORG" . --include="*.ts" --include="*.json" --include=".npmrc"
```

### One-time setup

1. Create a GitHub Personal Access Token (classic) with `write:packages` and
   `read:packages` scopes (Settings → Developer settings → Personal access tokens).
2. Log in locally:
   ```bash
   npm login --registry=https://npm.pkg.github.com
   # username: your GitHub username
   # password: the token you just created
   ```

### Publish manually

```bash
npm run build
cd projects/ui-kit
npm version patch   # bumps version, creates a git tag
npm publish
```

### Publish automatically (recommended)

`.github/workflows/publish.yml` is already set up to publish whenever you push
a git tag starting with `v` (e.g. `v0.1.1`):

```bash
git tag v0.1.1
git push origin v0.1.1
```

GitHub Actions handles the rest — no local token needed, it uses the
automatically provided `GITHUB_TOKEN`.

### Installing it in another project

In the consuming project, add a `.npmrc`:
```
@YOUR_GITHUB_ORG:registry=https://npm.pkg.github.com
```
Then:
```bash
npm install @YOUR_GITHUB_ORG/ui-kit
```
```ts
import { Button, createCoreUi } from '@YOUR_GITHUB_ORG/ui-kit';
import '@YOUR_GITHUB_ORG/ui-kit/styles';

app.use(createCoreUi());
```

## Publishing Storybook 

`.github/workflows/storybook.yml` builds Storybook and deploys it to GitHub
Pages on every push to `main`, so your team has a live, browsable component
catalog without hosting anything yourselves.

## Design tokens

All colors, spacing, radii, and typography live in
`projects/ui-kit/src/styles/_tokens.scss` as CSS custom properties. Change
values there and every component updates — this is the single place to apply
your brand.
