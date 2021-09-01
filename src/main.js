import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { BCarousel } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vuex from "vuex";
import store from "../src/modules/index";
import Raters from "vue-star-rating";
import router from "./router";
import VueQRCodeComponent from "vue-qrcode-component";

Vue.use(Vuex);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.component("star-rating", Raters.StarRating);
Vue.component("b-carousel", BCarousel);
Vue.component("qr-code", VueQRCodeComponent);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
  beforeMount() {
    this.$store.commit("WishlistModule/initialiseStore");
    this.$store.commit("ComparisonListModule/initialiseStore");
    this.$store.commit("ShopcartModule/initialiseStore");
  },
}).$mount("#app");
