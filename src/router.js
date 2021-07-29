import Vue from "vue";
import Router from "vue-router";
import MainPage from "./components/MainPage/MainPage";
import PaginaProduto from "./components/PaginaProduto/PaginaProduto";
import PaginaLoja from "./components/PaginaLoja/PaginaLoja";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: MainPage },
    { path: "/pagina-produto", component: PaginaProduto },
    { path: "/pagina-loja", component: PaginaLoja },
  ],
});
