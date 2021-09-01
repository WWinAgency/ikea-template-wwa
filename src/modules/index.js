import Vue from "vue";
import Vuex from "vuex";

import WishlistModule from "./store/WishlistModule";
import ComparisonListModule from "./store/ComparisonListModule";
import ShopcartModule from "./store/ShopcartModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    WishlistModule,
    ComparisonListModule,
    ShopcartModule,
  },
});
