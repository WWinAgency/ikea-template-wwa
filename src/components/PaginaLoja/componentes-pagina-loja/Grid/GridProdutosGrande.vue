<template>
  <div class="gridProdutosGrandes">
    <div class="grid-produtos-col">
      <div class="grid-produtos-row-1">
        <div class="seccao-dinamica">
          <!-- BUTTON CAROUSEL -->
          <ButtonCarousel :buttons="filterButtons" />
          <!-- BUTTON CAROUSEL -->
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
        <ProductShowcasePaginaLoja :showcase="showcase1" />
      </div>
      <hr class="costum-hr" />
      <div class="grid-produtos-row-3">
        <ProductShowcasePaginaLoja :showcase="showcase2" />
      </div>
      <hr class="costum-hr" />
      <div class="grid-produtos-row-4">
        <ProductShowcasePaginaLoja :showcase="showcase3" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductShowcasePaginaLoja from "../Showcase/ProductShowcasePaginaLoja.vue";
import ButtonCarousel from "../../../MainPage/components-main-page/Carousel/ButtonCarousel.vue";
export default {
  components: {
    ProductShowcasePaginaLoja,
    ButtonCarousel,
  },

  props: {
    showcase1: {
      type: Array,
      required: true,
    },
    showcase2: {
      type: Array,
      required: true,
    },
    showcase3: {
      type: Array,
      required: true,
    },
    filterButtons: {
      type: Array,
      required: true,
    },
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
