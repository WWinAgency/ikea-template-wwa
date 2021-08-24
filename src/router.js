import Vue from "vue";
import Router from "vue-router";
import MainPage from "./components/MainPage/MainPage";
import PaginaProduto from "./components/PaginaProduto/PaginaProduto";
import PaginaLoja from "./components/PaginaLoja/PaginaLoja";
import PoliticaPrivacidade from "./components/PoliticaDePrivacidade/PoliticaPrivacidade";
import Favoritos from "./components/Favoritos/Favoritos";
import ComparacaoProdutos from "./components/Favoritos/ComparacaoProdutos";
import ShoppingCartPage from "./components/ShoppingCart/ShoppingCartPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: MainPage },
    { path: "/pagina-produto", component: PaginaProduto },
    { path: "/pagina-de-loja", component: PaginaLoja },
    {
      path: "/pagina-politica-privacidade",
      component: PoliticaPrivacidade,
    },
    {
      path: "/favourites",
      component: Favoritos,
    },
    {
      path: "/comparacao-produtos",
      component: ComparacaoProdutos,
    },
    {
      path: "/basket",
      component: ShoppingCartPage,
    },
  ],
});
