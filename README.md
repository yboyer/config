# @yboyer/config

> Shared Biome and Vite+ configurations for JS/TS projects.

## Biome

### Installation

Install Biome and the configuration as development dependencies:

```sh
npm i -D @biomejs/biome@^2.6.9 @yboyer/config
```

### Configuration

#### Biome

Create `biome.json` at the project root:

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

This preset requires file extensions for relative imports and `with { type: 'json' }`
for JSON imports. It disallows CommonJS in `.js` files; `.cjs` and `.cts` remain
supported. Checks for import cycles, deprecated imports and the `node:` protocol
come from the base preset.

Use import extensions that match your execution or compilation setup. Configure
Node.js and TypeScript for ESM separately; this preset only configures Biome.

### Commands

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

The default export bundles `lint` and `fmt`. Use it with `mergeConfig` for
project-specific adjustments. Nested objects are merged and arrays are appended:

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

## Development

Use the Node.js version in `.node-version` and npm with `package-lock.json`.
The repository uses tsdown for builds, Biome for formatting and lint, and
TypeScript for type checking.

Commands and VS Code use `biome.internal.json`, which extends the public ESM preset.

- `npm ci`: install the locked dependencies with lifecycle scripts disabled.
- `npm run lint`: check formatting, lint and imports, then check types.
- `npm run typecheck`: run `tsc --noEmit`.
- `npm run check:biome`: validate both public Biome configurations.
- `npm run format`: apply formatting.
- `npm run build`: compile the Vite+ preset from `src/vite-plus.ts` into `dist/`.
- `npm pack --dry-run`: inspect the package after building.

To apply safe lint fixes and organize imports, run
`npx biome check --config-path=biome.internal.json --write .`.

Build explicitly before packing or publishing: `.npmrc` disables lifecycle scripts.
CI runs checks and builds before packing or releasing. Generated files are
published but are not committed.

### Compatibility

Both public Biome presets and `@yboyer/config/vite-plus` remain supported.
Vite+ stays as a development dependency for its public types and as an optional
peer for consumers. Perfectionist remains a dependency of the Vite+ preset.
Repository commands use the standalone tools.

The build preserves `dist/vite-plus.mjs`, `dist/vite-plus.d.mts`, declaration maps,
and the named and default exports. The `require` export still targets ESM;
there is no separate CommonJS build.

Internal checks use Biome rules and assists instead of Oxlint and Perfectionist.
TypeScript checks types but does not replace every type-aware lint rule.
Formatting and fixes can differ from Oxfmt, including Markdown and Tailwind
function formatting. The public Vite+ preset keeps its own rules and options.
See [BIOME-COVERAGE.md](./BIOME-COVERAGE.md) for the historical rule comparison.
