<template>
  <div class="paginaCliente">
    <div class="row-1"><ProfileHeader /></div>
    <div class="row-2"><ProjetosPessoais /></div>
  </div>
</template>

<script>
import ProfileHeader from "./components-pagina-cliente/ProfileHeader.vue";
import ProjetosPessoais from "./components-pagina-cliente/ProjetosPessoais.vue";
export default {
  components: { ProfileHeader, ProjetosPessoais },
};
</script>

<style lang="scss">
.paginaCliente {
  & .row-1 {
  }
}
</style>
