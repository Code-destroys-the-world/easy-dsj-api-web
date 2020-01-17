import 'babel-polyfill';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import ElementUI from 'element-ui';
import easyDjs from 'easy-dsj';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai-sublime.css';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/common/result.less';
import './assets/css/common/common.less';
import './components/common/index.ts';

Vue.directive('highlight', (el: any) => {
  const highlight = el.querySelectorAll('pre code');
  highlight.forEach((block: any) => {
      hljs.highlightBlock(block);
  });
});

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(easyDjs);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
