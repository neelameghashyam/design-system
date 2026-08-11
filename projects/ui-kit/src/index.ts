/**
 * Core UI — Vue 3 Design System
 * Public API surface — everything exported here is what consumers get
 * via `import { X } from '@YOUR_GITHUB_ORG/ui-kit'`
 */

// Base styles (bundled into dist/ui-kit.css)
import './styles/main.scss';

// Plugin
export { createCoreUi } from './plugin';
export type { CoreUiConfig } from './plugin';

// Utilities
export * from './lib/utils';

// Components — Atoms
export * from './lib/atoms';

// Components — Molecules
export * from './lib/molecules';

// Components — Organisms
export * from './lib/organisms';
