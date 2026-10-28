# @yboyer/config

> Shared Biome and Vite+ configurations for JS/TS projects.

## Usage with Biome

### 1. Installation

Install Biome and the configuration as development dependencies:

```sh
npm i -D @biomejs/biome@^2.6.3 @yboyer/config
```

### 2. Configuration

#### Biome

Create a `biome.json` file at the project root with the following content to extend the shared configuration:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@yboyer/config/biome.json"]
}
```

### 3. Commands

To check code conformance:

```sh
npx biome check .
```

To apply automatic fixes (formatting and imports):

```sh
npx biome check --apply .
```

## Vite+

Requires Vite+ 1.1 or newer in the 1.x series and a Node.js version supported by Vite+.
Install `vite-plus` and `@yboyer/config` as development dependencies using your package manager.
Biome is optional; existing Biome consumers can keep their current configuration.

Add the shared conventions to your root `vite.config.ts`:

```ts
import { lint, fmt } from '@yboyer/config/vite-plus'
import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint,
  fmt,
  // Keep your project's plugins, build and test configuration here.
})
```

The preset enables both type-aware linting and TypeScript checking. Each project
must provide its own compatible `tsconfig.json`. This package does not export a
TypeScript configuration. Resolve TypeScript errors before enabling this in CI.
Vite+'s type checker does not support `compilerOptions.baseUrl`; use `paths` instead.

Run `vp check` to check formatting, lint and types, or `vp check --fix` to apply
supported fixes. Standalone `vp lint` and `vp fmt` are also available.
Configure your editor to use Vite+'s Oxc integration for migrated projects.

A default export bundles both blocks:

```ts
import config from '@yboyer/config/vite-plus'

export default defineConfig(config)
```

Use `mergeConfig` for project-specific adjustments. It merges nested objects and
appends arrays to preserve the shared configuration:

```ts
import config from '@yboyer/config/vite-plus'
import { defineConfig, mergeConfig } from 'vite-plus'

export default defineConfig(
  mergeConfig(config, {
    lint: {
      rules: { 'no-console': 'off' },
      overrides: [
        {
          files: ['scripts/**/*.ts'],
          rules: { 'import/no-commonjs': 'off' },
        },
      ],
    },
    fmt: { printWidth: 120 },
  })
)
```

Keep the shared blocks in the workspace-root config, including in monorepos.
`vp check` uses the root blocks; use their `overrides` for package-specific rules.

## Items that cause errors

### Rules

- noUnnecessaryConditions

### Domains

- types

## Development

The Vite+ preset is written in `src/vite-plus.ts`. Run `npm run build` (`vp pack`)
to generate its JavaScript and declarations in `dist/`. Named exports and the
default export are generated from the same TypeScript source.

The repository configuration loads the source directly, so linting and building
do not depend on an existing `dist/` directory. The `@/` alias points to `src/`
for source imports in TypeScript and the package build. Its TypeScript
mapping lives in the root `tsconfig.json`, which is only used to develop this
repository and is not published.

- `npm run lint`: check formatting, lint and types with `vp check`.
- `npm run check:biome`: validate `biome.json` with pinned Biome 2.6.2, with formatting, lint and assists disabled.
- `npm run format`: apply formatting with `vp fmt`.
- `npm run build` followed by `npm pack --dry-run`: inspect the publishable package.

The repository sets `ignore-scripts=true`, so build explicitly before packing or
publishing. The release workflow runs `npm ci` and `npm run build` before
semantic-release. Generated files are published but are not committed.
