
import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/index.vue';
import visualization from '../views/visualization.vue';
import { selfMotion } from './self-motion';
import path from 'path';
const viewPath = path.join(__dirname, 'src/views');
const componentsPath = path.join(__dirname, 'src/components');

selfMotion(viewPath);

Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    children: [],
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
