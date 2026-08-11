import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import { routes } from './routes';
import { createCoreUi } from '@neelameghashyam/ui-kit';
import '@neelameghashyam/ui-kit/styles';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.use(createCoreUi());
app.mount('#app');
