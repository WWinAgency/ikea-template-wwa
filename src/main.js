import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Raters from "vue-star-rating";

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("star-rating", Raters.StarRating);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
