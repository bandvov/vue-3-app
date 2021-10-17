import { createStore } from "vuex";
import postModule from "./postModule";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { post: postModule },
});
