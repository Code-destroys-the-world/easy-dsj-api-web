import Vue from 'vue';
import Vuex from 'vuex';
import publics from './modules/public';
Vue.use(Vuex);


export default new Vuex.Store({
  modules: {
    publics,
  },
});
