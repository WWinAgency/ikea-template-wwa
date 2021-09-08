<template>
  <div class="paginaCliente">
    <div class="row-pagina-cliente"><ProfileHeader /></div>
    <div class="row-pagina-cliente"><ProjetosPessoais /></div>
    <div class="row-pagina-cliente"><Parcerias /></div>
    <div class="row-pagina-cliente"><ServiceAdvert /></div>
    <div class="row-pagina-cliente">
      <div class="row-col">
        <div class="col-row-1">Precisa de mudar de conta?</div>
        <div class="col-row-2">
          <a class="terminar-sessao">Terminar sessão</a>
        </div>
      </div>
    </div>
    <div class="row-pagina-cliente"><SidebarPartilhaRight /></div>
  </div>
</template>

<script>
import ProfileHeader from "./components-pagina-cliente/ProfileHeader.vue";
import ProjetosPessoais from "./components-pagina-cliente/ProjetosPessoais.vue";
import Parcerias from "./components-pagina-cliente/Parcerias.vue";
import ServiceAdvert from "./components-pagina-cliente/ServiceAdvert.vue";
import SidebarPartilhaRight from "../ComponentesGlobais/Sidebars/SidebarPartilhaRight.vue";
export default {
  components: {
    ProfileHeader,
    ProjetosPessoais,
    Parcerias,
    ServiceAdvert,
    SidebarPartilhaRight,
  },
};
</script>

<style lang="scss">
.paginaCliente {
  & .row-pagina-cliente {
    width: 100%;
    margin: 2.5rem 0 !important;

    & .row-col {
      margin-top: 5rem;
      & .col-row-1 {
        color: #484848;
        font-size: 0.875rem;
        line-height: 1.57;
      }
      & .col-row-2 {
        & .terminar-sessao {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
          cursor: pointer;

          &:hover {
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>
