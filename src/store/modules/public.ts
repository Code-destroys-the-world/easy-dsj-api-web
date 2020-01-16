import { Commit } from 'vuex';
import * as types from '../mutation-types';

export interface State {
  version: string;
  activeIndex: number | string;
}

const initState: State = {
  version: '0.0.1',
  activeIndex: 'module',
};

const getters = {
  getVersion: (state: State) => state.version,
};

const actions = {
  getActive(context: { commit: Commit; state: State }, activeIndex: string | number) {
    context.commit('SET_ACTIVE', activeIndex);
  },
};

const mutations = {
  [types.SET_ACTIVE](state: State, activeIndex: string | number) {
    state.activeIndex = activeIndex;
  },
};

export default {
  namespaced: true,
  state: initState,
  getters,
  actions,
  mutations,
};
