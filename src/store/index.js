import { createStore } from "vuex";

export default createStore({
  state() {
    return {
      EnValue: "",
      DeValue: "",
    };
  },
  getters: {},
  mutations: {
    AddValue(state, payload) {
      state.EnValue = payload.EnValue;
      state.DeValue = payload.DeValue;
    },
  },
  actions: {},
  modules: {},
});
