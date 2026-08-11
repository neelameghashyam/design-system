import type { App, Plugin } from 'vue';

export interface CoreUiConfig {
  // Extend this with global config (icon registry, theme overrides, etc.)
  theme?: 'light' | 'dark';
}

export function createCoreUi(config: CoreUiConfig = {}): Plugin {
  return {
    install(app: App) {
      app.provide('core-ui-config', config);
    },
  };
}
