
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';
import pages from './self-motion';
import constitute from './constitute';
Vue.use(VueRouter);
const routers = constitute(pages);
const routes: any = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: routers,
  },
];
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
