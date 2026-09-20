# @yboyer/config

> Shared Biome and TypeScript configurations for JS/TS projects.

## Usage

### 1. Installation

Install Biome and the configuration as development dependencies:

```sh
npm i -D @biomejs/biome@^2.5.14 @yboyer/config
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

#### TypeScript

Extend `tsconfig.json` with the shared configuration file:

```json
{
  "extends": "@yboyer/config/tsconfig.json",
  …
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["./src"]
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

## Items that cause errors

### Rules

- noUnnecessaryConditions

### Domains

- types
