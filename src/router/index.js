import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: ()=>
      import("../views/Inicio.vue"),
  },
  {
    path: '/acerca-de',
    name: 'Acerca-De',
    component: ()=>
      import("../views/about.vue"),
  },
  {
    path: '/beneficio-comunidad',
    name: 'Beneficio-C',
    component: ()=>
      import("../views/Beneficios.vue"),
  },

  // ... otras rutas
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
