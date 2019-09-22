import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    count: "wu",
    isShowSearchTool: true
  },
  mutations: {
    setCurrentBar(state, isShow) {
      state.isShowSearchTool = isShow;
    }
  },
  actions: {
    getShowHeader(context, isShow) {
      context.commit("setCurrentBar", isShow);
    }
  }
});
export default store;
