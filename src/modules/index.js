import Vue from "vue";
import Vuex from "vuex";

import WishlistModule from "./modules/WishlistModule";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    WishlistModule,
  },
});
