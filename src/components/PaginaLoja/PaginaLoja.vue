<template>
  <div class="paginaLoja">
    <div class="outter-col">
      <div class="inner-row-1">
        <PathPaginaLoja
          :categoriaGeralProduto="categoriaProduto.categoriaGeral"
          :subCategoriaGeralProduto="categoriaProduto.subCategoriaGeral"
          :tipoGeralProduto="categoriaProduto.tipoGeral"
          :subTipoGeralProduto="categoriaProduto.subTipoGeral"
        />
        <hr class="costum-hr" />
      </div>

      <div class="inner-row-2">
        <TextoDescritivo
          :titulo="categoriaProduto.tituloDescritivo"
          :texto="categoriaProduto.textoDescritivo"
        />
      </div>
      <div class="inner-row-3">
        <GridProdutosGrande />
      </div>
      <div class="inner-row-4">
        <CarouselDeProdutos
          :carousel="carousel1"
          titulo="Outros também viram"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselDeProdutos from "../PaginaProduto/componentes-pagina-produto/Carousel/CarouselDeProdutos.vue";
import GridProdutosGrande from "./componentes-pagina-loja/Grid/GridProdutosGrande.vue";
import TextoDescritivo from "./componentes-pagina-loja/TextoDescritivo.vue";
import PathPaginaLoja from "./componentes-pagina-loja/PathPaginaLoja.vue";
export default {
  components: {
    PathPaginaLoja,
    TextoDescritivo,
    GridProdutosGrande,
    CarouselDeProdutos,
  },
  data() {
    return {
      categoriaProduto: {
        categoriaGeral: "Camas e colchões",
        subCategoriaGeral: "Têxteis para quarto",
        tipoGeral: "Almofadas",
        subTipoGeral: "Almofadas de espuma e espuma memory",
        tituloDescritivo: "Mesas de refeição para exterior",
        textoDescritivo:
          "Aproveite o prazer de jantar fora, em casa. Na nossa gama de mesas de jardim e mesas de refeição para exterior encontra desde mesas dobráveis mais pequenas a grandes mesas extensíveis. Seja um jantar romântico à luz das velas ou banquete no seu jardim ou terraço, a IKEA tem tudo o que precisa para si e todos os convidados. Com uma ampla escolha de estilos e tamanhos diferentes, incluindo conjuntos de cadeiras e mesas, os nossos móveis de refeição para exterior ajudam a criar o seu lugar preferido para comer fora, mesmo na sua casa. Pode escolher entre materiais artificiais que não precisam de manutenção ou o encanto natural da madeira, que não precisa mais do que alguns cuidados de tempos a tempos.",
      },

      carousel1: [
        {
          name: "FEJKA",
          type: "Planta Artificial em vaso, 9cm",
          imageSrc: "https://picsum.photos/300?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
        },
        {
          name: "SKOGSKLÖVER",
          type: "Estore de correr 120x195 cm",
          imageSrc: "https://picsum.photos/300?random=2",
          normalPrice: 35,
          currentPrice: 29,
        },
        {
          name: "HUSARÖ",
          type: "Poltrona, exterior",
          imageSrc: "https://picsum.photos/300?random=3",
          normalPrice: 99,
          currentPrice: 85,
        },
        {
          name: "HAUGA",
          type: "Roupeiro aberto c/3 gavetas 70x199 cm",
          imageSrc: "https://picsum.photos/300?random=4",
          normalPrice: 149,
          currentPrice: 119,
        },
        {
          name: "BODARP",
          type: "Porta, verde acinzentado 60x80 cm",
          imageSrc: "https://picsum.photos/300?random=5",
          normalPrice: 50,
          currentPrice: 30,
        },
        {
          name: "SKYMNINGEN",
          type: "Candeeiro suspenso, branco",
          imageSrc: "https://picsum.photos/300?random=6",
          normalPrice: 79,
          currentPrice: 59,
        },
        {
          name: "TRANGET",
          type:
            "Tapete, tecelagem plana, feito à mão várias tonalidades azul 170x240 cm",
          imageSrc: "https://picsum.photos/300?random=7",
          normalPrice: 249,
          currentPrice: 199,
        },
        {
          name: "PELARBOJ",
          type: "Candeeiro LED de mesa, multicor",
          imageSrc: "https://picsum.photos/300?random=8",
          normalPrice: 20,
          currentPrice: 15,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.paginaLoja {
  & .outter-col {
    & .inner-row-1 {
      margin-bottom: 4rem;
    }
  }
}
</style>
