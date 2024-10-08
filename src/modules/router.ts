import { setupLayouts } from 'virtual:generated-layouts';
import generatedRoutes from 'virtual:generated-pages';
import { createRouter, createWebHistory } from 'vue-router';

const history = createWebHistory();

const routes = setupLayouts(generatedRoutes);

export const router = createRouter({
  history,
  routes,
});

router.beforeEach((to, from, next) => {
  useHead({
    title: to.meta.title || 'demanage',
  });

  next();
});
