import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common/result.less';
import './assets/css/common/common.less';
import easyDjs from 'easy-dsj';
import './components/common/index.ts';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(easyDjs);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
