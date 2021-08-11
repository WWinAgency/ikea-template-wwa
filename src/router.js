import Vue from "vue";
import Router from "vue-router";
import HomePage from "./components/ComponentesGlobais/PaginasGlobais/HomePage";
import HomePageRight from "./components/ComponentesGlobais/PaginasGlobais/HomePageRight";
import PaginaDeProduto from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeProduto";
import PaginaDeProdutoRight from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeProdutoRight";
import PaginaDeLoja from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeLoja";
import PaginaDeLojaRight from "./components/ComponentesGlobais/PaginasGlobais/PaginaDeLojaRight";
import PaginaPoliticaDePrivacidade from "./components/ComponentesGlobais/PaginasGlobais/PaginaPoliticaDePrivacidade";
import PaginaPoliticaDePrivacidadeRight from "./components/ComponentesGlobais/PaginasGlobais/PaginaPoliticaDePrivacidadeRight";
import PaginaFavoritos from "./components/ComponentesGlobais/PaginasGlobais/PaginaFavoritos";
import PaginaFavoritosRight from "./components/ComponentesGlobais/PaginasGlobais/PaginaFavoritosRight";
import PaginaListaDeFavoritos from "./components/ComponentesGlobais/PaginasGlobais/PaginaListaDeFavoritos";
import PaginaListaDeFavoritosRight from "./components/ComponentesGlobais/PaginasGlobais/PaginaListaDeFavoritosRight";
// import Wishlist from "./components/Wishlist/Wishlist";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/right", component: HomePageRight },
    { path: "/pagina-produto", component: PaginaDeProduto },
    { path: "/pagina-produto-right", component: PaginaDeProdutoRight },
    { path: "/pagina-de-loja", component: PaginaDeLoja },
    { path: "/pagina-de-loja-right", component: PaginaDeLojaRight },
    {
      path: "/pagina-politica-privacidade",
      component: PaginaPoliticaDePrivacidade,
    },
    {
      path: "/pagina-politica-privacidade-right",
      component: PaginaPoliticaDePrivacidadeRight,
    },
    {
      path: "/favoritos",
      component: PaginaFavoritos,
    },
    {
      path: "/favoritos-right",
      component: PaginaFavoritosRight,
    },
    {
      path: "/lista-de-favoritos",
      component: PaginaListaDeFavoritos,
    },
    {
      path: "/lista-de-favoritos-right",
      component: PaginaListaDeFavoritosRight,
    },
  ],
});
