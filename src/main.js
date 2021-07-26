import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from "vuex";
import Raters from "vue-star-rating";
import router from "./router";

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("star-rating", Raters.StarRating);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
