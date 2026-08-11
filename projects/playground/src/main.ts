import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { createCoreUi } from '@YOUR_GITHUB_ORG/ui-kit';
import '@YOUR_GITHUB_ORG/ui-kit/styles';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(createCoreUi());
app.mount('#app');
