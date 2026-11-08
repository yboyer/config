# @yboyer/config

> Shared Biome and Vite+ configurations for JS/TS projects.

## Usage with Biome

### 1. Installation

Install Biome and the configuration as development dependencies:

```sh
npm i -D @biomejs/biome@^2.6.5 @yboyer/config
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

#### Node.js ESM

For ES modules executed directly by Node.js, use the ESM configuration:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@yboyer/config/biome-esm.json"]
}
```

It extends the shared configuration and requires file extensions in relative
imports and `with { type: 'json' }` for JSON imports. It also disallows CommonJS
in `.js` files. Explicit CommonJS files (`.cjs` and `.cts`) remain supported.
Existing checks for import cycles, deprecated imports and the `node:` protocol
are inherited from the shared configuration.

This preset does not force `.js` extensions for TypeScript imports. Use extensions
that match your execution or compilation setup. It does not configure Node.js or
TypeScript; configure the consuming package for ESM separately.

### 3. Commands

To check code conformance:

```sh
npx biome check .
```

To apply automatic fixes (formatting and imports):

```sh
npx biome check --write .
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

The repository uses standalone tsdown for builds, Biome for formatting and lint,
and TypeScript for type checking. Use the Node.js version in `.node-version`
and npm with the committed `package-lock.json`.

The public `@yboyer/config/vite-plus` preset remains supported. Its source is
`src/vite-plus.ts`; its named exports, default export and Vite+ types are unchanged.
Vite+ remains a development dependency only to resolve these public types, and an
optional peer dependency for consumers of this preset. Its transitive tools may
therefore remain in the lockfile, but no repository command uses Vite+.
`eslint-plugin-perfectionist` remains a runtime dependency of the public preset.
Existing consumers do not need to migrate or wait for a new package release.

The internal Biome configuration is `biome.internal.json`. It extends the
existing ESM preset without changing either public Biome configuration. Commands
and the editor select this internal configuration explicitly.

- `npm ci`: install the committed dependency tree with lifecycle scripts disabled.
- `npm run lint`: check formatting, lint and imports with Biome, then check types.
- `npm run typecheck`: run TypeScript with `--noEmit`.
- `npm run check:biome`: validate both public Biome configurations with the pinned Biome version, with formatting, lint and assists disabled.
- `npm run format`: apply formatting with Biome.
- `npm run build`: generate `dist/vite-plus.mjs`, `dist/vite-plus.d.mts` and the declaration map with tsdown.
- `npm pack --dry-run`: inspect the package after building.

There are no existing tests or active Git hooks in this repository. No test runner
or hook manager is added. Projects with tests can use standalone Vitest, as in
asphalia-backend; this repository does not require it.

Biome and Oxlint do not provide identical rules or fixes. Internal checks now use
the published Biome ESM rules, including explicit relative import extensions.
The Vite+-specific import rule, Perfectionist rules and Oxlint type-aware rules no
longer run internally. Biome assists cover import and member sorting; TypeScript
checks types but does not replace every type-aware lint rule. See
[BIOME-COVERAGE.md](./BIOME-COVERAGE.md) for the historical rule comparison.
Biome formatting may differ from Oxfmt, and does not replace its Markdown or
Tailwind function formatting in all cases. `format` formats files only; safe lint
and import fixes can be applied with
`npx biome check --config-path=biome.internal.json --write .`.
The public Vite+ preset retains all its existing rules and formatting options.

The build explicitly selects ESM and fixed extensions to preserve the public
paths, including the existing ESM target of the `require` export. This does not
introduce a CommonJS build. See the official
[tsdown output documentation](https://tsdown.dev/options/output-format),
[declaration documentation](https://tsdown.dev/options/dts), and
[Biome CLI documentation](https://biomejs.dev/reference/cli/).

The repository sets `ignore-scripts=true`, so build explicitly before packing or
publishing. Both validation and release workflows run the checks and build before
packing or semantic-release. Generated files are published but are not committed.
