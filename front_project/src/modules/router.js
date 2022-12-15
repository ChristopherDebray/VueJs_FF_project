import { createRouter } from 'vue-router'
import { setupLayouts } from 'virtual:generated-layouts'
import generatedRoutes from 'virtual:generated-pages'
import { createWebHistory } from 'vue-router';

const routes = setupLayouts(generatedRoutes)
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;