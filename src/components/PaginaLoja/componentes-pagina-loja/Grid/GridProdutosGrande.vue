<template>
  <div class="gridProdutosGrandes">
    <div class="grid-produtos-col">
      <div class="grid-produtos-row-1">
        <div class="seccao-dinamica">
          <!-- CAROUSEL DE BOTOES -->
          <div class="carousel-de-botoes">
            <ButtonCarouselPaginaLoja />
          </div>
          <!-- CAROUSEL DE BOTOES -->
          <!-- LISTA COMPARATIVA -->
          <div class="lista-comparativa">
            Lista Comparativa
          </div>
          <!-- LISTA COMPARATIVA -->
          <!-- HR DINAMICO -->
          <div class="hr-dinamico">
            <hr class="costum-hr" />
          </div>
          <!-- HR DINAMICO -->
        </div>
      </div>
      <div class="grid-produtos-row-2">
        <ProductShowcasePaginaLoja />
      </div>
      <hr class="costum-hr" />
      <div class="grid-produtos-row-3"><ProductShowcasePaginaLoja /></div>
      <hr class="costum-hr" />
      <div class="grid-produtos-row-4"><ProductShowcasePaginaLoja /></div>
    </div>
  </div>
</template>

<script>
import ButtonCarouselPaginaLoja from "../Carousel/ButtonCarouselPaginaLoja.vue";
import ProductShowcasePaginaLoja from "../Showcase/ProductShowcasePaginaLoja.vue";
export default {
  components: {
    ProductShowcasePaginaLoja,
    ButtonCarouselPaginaLoja,
  },
};
</script>

<style lang="scss">
.gridProdutosGrandes {
  & .grid-produtos-col {
    & .grid-produtos-row-1 {
      & .seccao-dinamica {
        & .lista-comparativa {
          display: none;
        }

        & .hr-dinamico {
          display: none;
        }
      }
    }
  }
}
</style>
