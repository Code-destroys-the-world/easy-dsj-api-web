import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app';
console.log(App, "App");
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    app: App,
  },
});
