import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      addresses: [
      ]
    };
  },
  mutations,
  actions,
  getters
});

export default store;