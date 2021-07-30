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
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/", component: HomePage },
    { path: "/right", component: HomePageRight },
    { path: "/pagina-de-produto", component: PaginaDeProduto },
    { path: "/pagina-de-produto-right", component: PaginaDeProdutoRight },
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
  ],
});
