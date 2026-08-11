import AtomsPage from './pages/AtomsPage.vue';
import MoleculesPage from './pages/MoleculesPage.vue';
import OrganismsPage from './pages/OrganismsPage.vue';

export const routes = [
  { path: '/', redirect: '/atoms' },
  { path: '/atoms', component: AtomsPage },
  { path: '/molecules', component: MoleculesPage },
  { path: '/organisms', component: OrganismsPage },
];
