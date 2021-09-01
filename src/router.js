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
import ConfirmacaoRegisto from "./components/Login/ConfirmacaoRegisto";
import PaginaCliente from "./components/PaginaCliente/PaginaCliente";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Home,
      name: "home",
      meta: { title: "Home" },
      children: [
        {
          path: "/",
          component: MainPage,
          name: "main-page",
          meta: { title: "Main Page" },
        },
        {
          path: "/pagina-produto",
          component: PaginaProduto,
          name: "pagina-produto",
          meta: { title: "Página de Produto" },
        },
        {
          path: "/pagina-de-loja",
          component: PaginaLoja,
          name: "pagina-de-loja",
          meta: { title: "Página de Loja" },
        },
        {
          path: "/pagina-politica-privacidade",
          component: PoliticaPrivacidade,
          name: "pagina-politica-privacidade",
          meta: { title: "Página de Política de Privacidade" },
        },
        {
          path: "/favourites",
          component: Favoritos,
          name: "pagina-favoritos",
          meta: { title: "Página de Favoritos" },
        },
        {
          path: "/comparacao-produtos",
          component: ComparacaoProdutos,
          name: "comparacao-produtos",
          meta: { title: "Página de Comparação de Produtos" },
        },
        {
          path: "/basket",
          component: ShoppingCartPage,
          name: "carrinho",
          meta: { title: "Carrinho de compras" },
        },
        {
          path: "/register-form-page",
          component: LoginFormPage,
          name: "register-form-page",
          meta: { title: "Formulário de Registo" },
        },
        {
          path: "/client-page",
          component: PaginaCliente,
          name: "client-page",
          meta: { title: "Página de Cliente" },
        },
      ],
    },
    {
      path: "/login-page",
      component: LoginPage,
      name: "login-page",
      meta: { title: "Página de Login" },
    },
    {
      path: "/register-confirm",
      component: ConfirmacaoRegisto,
      name: "register-confirm",
      meta: { title: "Página de Confirmação de Registo" },
    },
  ],
});
