import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Private from '../views/Private.vue';
import NotAuthorized from '../views/NotAuthorized.vue';
import Callback from '../views/Callback.vue';

import { isLogged } from '../utils/auth';

Vue.use(VueRouter);

function authCheck(to, from, next) {
  if (!isLogged()) {
    next({
      path: '/notauthorized'
    });
  } else {
    next();
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/private',
    name: 'Private',
    beforeEnter: authCheck,
    component: Private
  },
  {
    path: '/callback',
    name: 'Callback',
    component: Callback
  },
  {
    path: '/notauthorized',
    name: 'NotAuthorized',
    component: NotAuthorized
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
