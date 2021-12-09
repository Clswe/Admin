import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@pages/Login.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@pages/Login.vue')
  },
  {
    path: '/dashboard',
    component: () => import('@pages/Dashboard.vue'),
    children: [
      {
        path: '/',
        name: 'Dashboard',
        component: () => import('@pages/Index.vue')
      },
     
      {
        path: '/pacientes',
        name: 'Pacientes',
        component: () => import('@pages/Pacientes.vue')
      },
      {
        path: '/cadpaciente',
        name: 'CadPaciente',
        component: () => import('@pages/CadPaciente.vue')
      },

    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
