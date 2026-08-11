import type { StorybookConfig } from '@storybook/vue3-vite';
import { join } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-a11y', '@storybook/addon-docs'],
  framework: '@storybook/vue3-vite',
  viteFinal(config) {
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = [...(config.server.fs.allow || []), join(__dirname, '../../..')];
    return config;
  },
};

export default config;
