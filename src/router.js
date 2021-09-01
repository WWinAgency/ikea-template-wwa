import Vue from "vue";
import Router from "vue-router";

import Home from "./components/ComponentesGlobais/Paginas/Home";
import MainPage from "./components/MainPage/MainPage";
import PaginaProduto from "./components/PaginaProduto/PaginaProduto";
import PaginaLoja from "./components/PaginaLoja/PaginaLoja";
import PoliticaPrivacidade from "./components/PoliticaDePrivacidade/PoliticaPrivacidade";
import Favoritos from "./components/Favoritos/Favoritos";
import ComparacaoProdutos from "./components/Favoritos/ComparacaoProdutos";
import ShoppingCartPage from "./components/ShoppingCart/ShoppingCartPage";
import LoginPage from "./components/Login/LoginPage";
import LoginFormPage from "./components/Login/LoginFormPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      children: [
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
        {
          path: "/login-form-page",
          component: LoginFormPage,
        },
      ],
    },
    { path: "/login-page", component: LoginPage },
  ],
});
