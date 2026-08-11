import type { Preview } from '@storybook/vue3';
import { setup } from '@storybook/vue3';
import { createMemoryHistory, createRouter } from 'vue-router';
import { createCoreUi } from '../src/plugin';

import '../src/styles/main.scss';

const router = createRouter({
  history: createMemoryHistory(),
  routes: [{ path: '/:catchAll(.*)', component: { template: '<div />' } }],
});

setup((app) => {
  app.use(router);
  app.use(createCoreUi());
});

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Getting Started', 'Design System', 'Atoms', 'Molecules', 'Organisms'],
      },
    },
    backgrounds: {
      options: {
        light: { name: 'Light', value: 'var(--color-bg-light)' },
        dark: { name: 'Dark', value: 'var(--color-bg-dark)' },
      },
    },
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
    },
  },
  initialGlobals: {
    backgrounds: { value: 'light' },
  },
};

export default preview;
