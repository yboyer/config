# @yboyer/config

> Configurations Biome et Typescript partagées pour les projets JS/TS.

## Utilisation

### 1. Installation

Installer le paquet en tant que dépendance de développement :

```sh
npm i -D @yboyer/config
```

### 2. Configuration

#### Biome

Créer un fichier `biome.json` à la racine du projet avec le contenu suivant pour hériter de la configuration :

```json
{
   "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
   "extends": ["@yboyer/config/biome.json"]
}
```

#### TypeScript

Étendre le tsconfig.json avec le fichier de configuration partagé :

```json
{
  "extends": "@yboyer/config/tsconfig.json",
  …
  "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["./src"]
}
```

### 3. Commandes

Pour vérifier la conformité du code :

```sh
npx biome check .
```

Pour appliquer les correctifs automatiques (formatage et imports) :

```sh
npx biome check --apply .
```
