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
import ButtonCarouselPaginaLoja from "../Carousel/ButtonCarouselPaginaLoja.vue";
import ProductShowcasePaginaLoja from "../Showcase/ProductShowcasePaginaLoja.vue";
export default {
  components: {
    ProductShowcasePaginaLoja,
    ButtonCarouselPaginaLoja,
  },
  data() {
    return {
      showcase1: [
        {
          nome: "FEJKA",
          tipo: "Planta Artificial em vaso",
          utilidade: "9cm",
          imagem: "https://picsum.photos/300?random=1",
          precoNormal: 4.5,
          precoAtual: 4,
          rating: 4.5,
          avaliacoes: 8,
        },
        {
          nome: "SKOGSKLÖVER",
          tipo: "Estore de correr",
          utilidade: "120x195 cm",
          imagem: "https://picsum.photos/300?random=2",
          precoNormal: 35,
          precoAtual: 29,
          rating: 4,
          avaliacoes: 148,
        },
        {
          nome: "HUSARÖ",
          tipo: "Poltrona",
          utilidade: "exterior",
          imagem: "https://picsum.photos/300?random=3",
          precoNormal: 149,
          precoAtual: 119,
          rating: 4.5,
          avaliacoes: 10,
        },
        {
          nome: "HAUGA",
          tipo: "Roupeiro aberto",
          utilidade: "c/3 gavetas 70 x 199 cm",
          imagem: "https://picsum.photos/300?random=4",
          precoNormal: 135,
          precoAtual: 112,
          rating: 3,
          avaliacoes: 24,
        },
      ],
      showcase2: [
        {
          nome: "FEJKA",
          tipo: "Planta Artificial em vaso",
          utilidade: "9cm",
          imagem: "https://picsum.photos/300?random=5",
          precoNormal: 4.5,
          precoAtual: 4,
          rating: 4.5,
          avaliacoes: 8,
        },
        {
          nome: "SKOGSKLÖVER",
          tipo: "Estore de correr",
          utilidade: "120x195 cm",
          imagem: "https://picsum.photos/300?random=6",
          precoNormal: 35,
          precoAtual: 29,
          rating: 4,
          avaliacoes: 148,
        },
        {
          nome: "HUSARÖ",
          tipo: "Poltrona",
          utilidade: "exterior",
          imagem: "https://picsum.photos/300?random=7",
          precoNormal: 149,
          precoAtual: 119,
          rating: 4.5,
          avaliacoes: 10,
        },
        {
          nome: "HAUGA",
          tipo: "Roupeiro aberto",
          utilidade: "c/3 gavetas 70 x 199 cm",
          imagem: "https://picsum.photos/300?random=8",
          precoNormal: 135,
          precoAtual: 112,
          rating: 3,
          avaliacoes: 24,
        },
      ],
      showcase3: [
        {
          nome: "FEJKA",
          tipo: "Planta Artificial em vaso",
          utilidade: "9cm",
          imagem: "https://picsum.photos/300?random=9",
          precoNormal: 4.5,
          precoAtual: 4,
          rating: 4.5,
          avaliacoes: 8,
        },
        {
          nome: "SKOGSKLÖVER",
          tipo: "Estore de correr",
          utilidade: "120x195 cm",
          imagem: "https://picsum.photos/300?random=10",
          precoNormal: 35,
          precoAtual: 29,
          rating: 4,
          avaliacoes: 148,
        },
        {
          nome: "HUSARÖ",
          tipo: "Poltrona",
          utilidade: "exterior",
          imagem: "https://picsum.photos/300?random=11",
          precoNormal: 149,
          precoAtual: 119,
          rating: 4.5,
          avaliacoes: 10,
        },
        {
          nome: "HAUGA",
          tipo: "Roupeiro aberto",
          utilidade: "c/3 gavetas 70 x 199 cm",
          imagem: "https://picsum.photos/300?random=12",
          precoNormal: 135,
          precoAtual: 112,
          rating: 3,
          avaliacoes: 24,
        },
      ],
    };
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
