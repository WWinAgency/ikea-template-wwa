import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/ComponentesGlobais/PaginasGlobais/HomePage";
import HomePageRight from "./components/ComponentesGlobais/PaginasGlobais/HomePageRight";
import PaginaDeProduto from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeProduto";
import PaginaDeLoja from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeLoja";
import PaginaPoliticaDePrivacidade from "./components/ComponentesGlobais/PaginasGlobais/PaginaPoliticaDePrivacidade";
import PaginaFavoritos from "./components/ComponentesGlobais/PaginasGlobais/PaginaFavoritos";
import PaginaListaDeFavoritos from "./components/ComponentesGlobais/PaginasGlobais/PaginaListaDeFavoritos";
import PaginaComparacaoFavoritos from "./components/ComponentesGlobais/PaginasGlobais/PaginaComparacaoFavoritos";
// import Wishlist from "./components/Wishlist/Wishlist";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/right", component: HomePageRight },
    { path: "/pagina-produto", component: PaginaDeProduto },
    { path: "/pagina-de-loja", component: PaginaDeLoja },
    {
      path: "/pagina-politica-privacidade",
      component: PaginaPoliticaDePrivacidade,
    },
    {
      path: "/favoritos",
      component: PaginaFavoritos,
    },
    {
      path: "/lista-de-favoritos",
      component: PaginaListaDeFavoritos,
    },
    {
      path: "/comparacao-favoritos",
      component: PaginaComparacaoFavoritos,
    },
  ],
});
