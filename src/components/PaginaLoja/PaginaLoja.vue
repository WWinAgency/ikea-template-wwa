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
        <GridProdutosGrande :filterButtons="buttons" />
      </div>
      <div class="inner-row-4">
        <CarouselDeProdutos :products="produtos" titulo="Recomendado para si" />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselDeProdutos from "../PaginaProduto/componentes-pagina-produto/Carousel/CarouselDeProdutos.vue";
import GridProdutosGrande from "./componentes-pagina-loja/Grid/GridProdutosGrande.vue";
import TextoDescritivo from "./componentes-pagina-loja/TextoDescritivo.vue";
import PathPaginaLoja from "./componentes-pagina-loja/PathPaginaLoja.vue";

//mixins
import produtos from "../../assets/data/mainPage/products";
import buttons from "../../assets/data/paginaLoja/filterButtons";

export default {
  mixins: [produtos, buttons],
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
    & .inner-row-3 {
      margin-top: 1rem;
    }
  }
}
</style>
