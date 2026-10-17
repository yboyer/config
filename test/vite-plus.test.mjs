import assert from 'node:assert/strict'
import { execFileSync, spawnSync } from 'node:child_process'
import {
  existsSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  symlinkSync,
  writeFileSync,
} from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { after, test } from 'node:test'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const fixture = mkdtempSync(join(tmpdir(), 'yboyer-config-'))
after(() => rmSync(fixture, { recursive: true, force: true }))
const [{ filename }] = JSON.parse(
  execFileSync('npm', ['pack', '--json', '--pack-destination', fixture], {
    cwd: root,
    encoding: 'utf8',
  })
)
execFileSync('tar', ['-xzf', join(fixture, filename), '-C', fixture])
mkdirSync(join(fixture, 'node_modules/@yboyer'), { recursive: true })
symlinkSync(join(fixture, 'package'), join(fixture, 'node_modules/@yboyer/config'))
symlinkSync(resolve(root, 'node_modules/vite-plus'), join(fixture, 'node_modules/vite-plus'))
writeFileSync(join(fixture, 'package.json'), '{"type":"module"}')
writeFileSync(
  join(fixture, 'vite.config.ts'),
  `import { defineConfig } from 'vite-plus'
import config from '@yboyer/config/vite-plus'
export default defineConfig(config)
`
)
writeFileSync(
  join(fixture, 'tsconfig.json'),
  JSON.stringify({
    compilerOptions: { target: 'ES2022', module: 'NodeNext', strict: true, skipLibCheck: true },
    include: ['src'],
  })
)
mkdirSync(join(fixture, 'src'))
const vp = resolve(root, 'node_modules/vite-plus/bin/vp')

function run(...args) {
  return spawnSync(process.execPath, [vp, ...args], {
    cwd: fixture,
    encoding: 'utf8',
  })
}

test('published preset loads through the public package path', () => {
  const result = run('lint', '--print-config')
  assert.equal(result.status, 0, result.stdout + result.stderr)
  const config = JSON.parse(result.stdout)
  assert.equal(config.options.typeAware, true)
  assert.equal(config.options.typeCheck, true)
  assert.equal(existsSync(join(fixture, 'package/tsconfig.json')), false)
  const manifest = JSON.parse(readFileSync(join(fixture, 'package/package.json'), 'utf8'))
  assert.equal(manifest.exports['./tsconfig.json'], undefined)
  for (const name of ['biome.json']) {
    assert.doesNotThrow(() => JSON.parse(readFileSync(join(fixture, 'package', name), 'utf8')))
  }
})

test('published format preset preserves conventions and import groups', () => {
  const source = join(fixture, 'src/format.ts')
  writeFileSync(
    source,
    `import { local } from './local'\nimport type { Stats } from 'node:fs'\nimport { readFile } from 'node:fs'\nimport { alias } from '@/alias'\nimport { external } from 'external'\nexport const fn = (x: Stats) => { console.log("hello", local, alias, external, readFile, x); };\n`
  )
  const result = run('fmt', 'src/format.ts')
  assert.equal(result.status, 0, result.stdout + result.stderr)
  const output = readFileSync(source, 'utf8')
  assert.match(
    output,
    /import type \{ Stats \} from 'node:fs'\nimport \{ readFile \} from 'node:fs'\n\n/
  )
  assert.ok(output.indexOf("from 'external'") < output.indexOf("from '@/alias'"))
  assert.ok(output.indexOf("from '@/alias'") < output.indexOf("from './local'"))
  assert.match(output, /console\.log\('hello'/)
  assert.ok(!output.includes(';'))
  rmSync(source)
})

test('published lint preset rejects floating promises and TypeScript errors', () => {
  const source = join(fixture, 'src/invalid.ts')
  writeFileSync(source, 'Promise.resolve(1)\nexport const value: number = "wrong"\n')
  const result = run('lint', 'src/invalid.ts')
  assert.notEqual(result.status, 0)
  assert.match(result.stdout + result.stderr, /no-floating-promises/)
  assert.match(result.stdout + result.stderr, /TS2322|not assignable to type/)
  rmSync(source)
})

test('published declarations work in a typed Vite+ configuration', () => {
  const source = join(fixture, 'src/config.ts')
  writeFileSync(
    source,
    `import preset, { lint, fmt } from '@yboyer/config/vite-plus'
import type { UserConfig } from 'vite-plus'
export const config = { lint, fmt } satisfies UserConfig
export const defaultConfig = preset satisfies UserConfig
`
  )
  const result = run('lint', 'src/config.ts')
  assert.equal(result.status, 0, result.stdout + result.stderr)
  rmSync(source)
})

test('Biome-compatible code is not rejected by unrelated category restrictions', () => {
  const source = join(fixture, 'src/conventions.ts')
  writeFileSync(
    source,
    `export const values = { z: 1, a: undefined }
export default function sum(input: number[]) {
  let total = 0
  for (const value of input) {
    if (value < 0) continue
    total += value
  }
  return total
}
`
  )
  const result = run('lint', 'src/conventions.ts')
  assert.equal(result.status, 0, result.stdout + result.stderr)
  assert.doesNotMatch(result.stdout + result.stderr, /error /)
  rmSync(source)
})

test('Biome recommended diagnostics preserve warning and error severities', () => {
  const source = join(fixture, 'src/recommended.ts')
  writeFileSync(source, 'export const value: any = 1\ndebugger\n')
  const result = run('lint', 'src/recommended.ts')
  assert.notEqual(result.status, 0)
  assert.match(result.stdout + result.stderr, /warning typescript\(no-explicit-any\)/)
  assert.match(result.stdout + result.stderr, /error eslint\(no-debugger\)/)
  rmSync(source)
})
