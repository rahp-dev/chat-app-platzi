import { createStore } from "vuex";
import profileModule from "../store/modules/profile";

const store = createStore({
  state() {
    return {};
  },
  getters: {},
  actions: {},
  modules: {
    profileModule,
  },
});

export default store;
