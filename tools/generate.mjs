#!/usr/bin/env node
/**
 * Component generator.
 *
 * Usage:
 *   node tools/generate.mjs <layer> <ComponentName>
 *
 * Example:
 *   node tools/generate.mjs atoms Tooltip
 *   node tools/generate.mjs molecules DateRangePicker
 *
 * Creates:
 *   - src/lib/<layer>/<Name>.vue
 *   - src/lib/<layer>/<Name>.stories.ts
 *   - adds an export line to src/lib/<layer>/index.ts
 */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const [, , layerArg, nameArg] = process.argv;
const validLayers = ['atoms', 'molecules', 'organisms'];

if (!layerArg || !nameArg || !validLayers.includes(layerArg)) {
  console.error('Usage: node tools/generate.mjs <atoms|molecules|organisms> <ComponentName>');
  process.exit(1);
}

const name = nameArg[0].toUpperCase() + nameArg.slice(1);
const dir = resolve(process.cwd(), 'projects/ui-kit/src/lib', layerArg);

if (!existsSync(dir)) mkdirSync(dir, { recursive: true });

const vuePath = resolve(dir, `${name}.vue`);
const storyPath = resolve(dir, `${name}.stories.ts`);
const indexPath = resolve(dir, 'index.ts');

if (existsSync(vuePath)) {
  console.error(`${name}.vue already exists in ${layerArg}`);
  process.exit(1);
}

const vueTemplate = `<script setup lang="ts">
withDefaults(defineProps<{ /* add props here */ }>(), {});
</script>

<template>
  <div class="cu-${toKebab(name)}">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.cu-${toKebab(name)} {
  // component styles
}
</style>
`;

const storyTemplate = `import type { Meta, StoryObj } from '@storybook/vue3';
import ${name} from './${name}.vue';

const meta: Meta<typeof ${name}> = {
  title: '${capitalize(layerArg)}/${name}',
  component: ${name},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ${name}>;

export const Default: Story = {
  render: () => ({
    components: { ${name} },
    template: '<${name} />',
  }),
};
`;

writeFileSync(vuePath, vueTemplate);
writeFileSync(storyPath, storyTemplate);

// Add / create the barrel export
const exportLine = `export { default as ${name} } from './${name}.vue';\n`;
if (existsSync(indexPath)) {
  const current = readFileSync(indexPath, 'utf-8');
  if (!current.includes(exportLine)) {
    writeFileSync(indexPath, current + exportLine);
  }
} else {
  writeFileSync(indexPath, exportLine);
}

console.log(`Created ${layerArg}/${name}.vue, ${name}.stories.ts, and updated index.ts`);

function toKebab(str) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
