import Vue from "vue";
import Vuex from "vuex";

import WishlistModule from "./store/WishlistModule";
import ComparisonListModule from "./store/ComparisonListModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    WishlistModule,
    ComparisonListModule,
  },
});
