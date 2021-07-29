<template>
  <div class="paginaProduto">
    <!-- PATH -->
    <PathProduto
      :categoriaGeralProduto="produto.categoriaGeral"
      :subCategoriaGeralProduto="produto.subCategoriaGeral"
      :tipoGeralProduto="produto.tipoGeral"
      :subTipoGeralProduto="produto.subTipoGeral"
      :nomeProdutoPath="produto.nome"
      :tipoProdutoPath="produto.tipo"
      :utilidadeProdutoPath="produto.utilidade"
    />
    <!-- PATH -->

    <hr class="costum-hr" />

    <div class="paginaProduto-col">
      <div class="product-outter-row-1">
        <div class="product-outter-col-1">
          <div class="product-inner-row">
            <div class="product-top-row">
              <div class="top-col-1">
                <!-- Grid de Imagens do Produto -->
                <div class="product-show-1">
                  <GridImagensProduto />
                </div>
                <!-- Grid de Imagens do Produto -->
                <!-- Carousel de Imagens do Produto -->
                <div class="product-show-2">
                  <CarouselProduto />
                </div>
                <!-- Carousel de Imagens do Produto -->
              </div>
              <div class="top-col-2">
                <TagProduto
                  :nomeProduto="produto.nome"
                  :tipoProduto="produto.tipo"
                  :utilidadeProduto="produto.utilidade"
                  :precoProduto="produto.precoAtivo"
                  :precoHabitual="produto.precoHabitual"
                  :moedaProduto="produto.moeda"
                  :ratingProduto="produto.rating"
                  :avaliacoesProduto="produto.avaliacoes"
                  :dimensoesProdutoCm="produto.dimensoes"
                  :promocaoInicioMes="produto.mesInicioPromocao"
                  :promocaoInicioDia="produto.diaInicioPromocao"
                  :promocaoFimMes="produto.mesFimPromocao"
                  :promocaoFimDia="produto.diaFimPromocao"
                />
              </div>
            </div>
          </div>
          <!-- Descrição Informativa do Produto -->
          <div class="product-inner-row">
            <DescricaoProduto
              :textoDescritivo="produto.textoDescritivo"
              :codigoProduto="produto.codigoProduto"
              :rating="produto.rating"
              :avaliacoes="produto.avaliacoes"
            />
          </div>
          <!-- Descrição Informativa do Produto -->

          <!-- Produtos Semelhantes -->
          <div class="product-inner-row">
            <div class="produtos-semelhantes">
              <div class="inner-col-1">Produtos Semelhantes</div>
              <div class="inner-col-2">
                <ProductShowcase />
              </div>
            </div>
          </div>
          <!-- Produtos Semelhantes -->
          <!-- Funcao e Design do Produto -->
          <div class="product-inner-row">
            <FuncaoEDesign />
          </div>
          <!-- Funcao e Design do Produto -->
        </div>

        <!-- Tag Produto -->
        <!-- Tag Produto -->
      </div>
      <hr class="costum-hr" />
      <!-- Carousel 1 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos tituloCarousel="Outros também viram" />
      </div>
      <!-- Carousel 1 Página Produto -->
      <!-- Carousel 2 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos tituloCarousel="Combina com" />
      </div>
      <!-- Carousel 2 Página Produto -->
      <!-- Mini Carousel -->
      <div class="carousel-de-produtos">
        <MiniCarousel tituloMiniCarousel="Últimos produtos visualizados" />
      </div>
      <!-- Mini Carousel -->
    </div>
  </div>
</template>

<script>
import PathProduto from "./componentes-pagina-produto/PathProduto.vue";
import TagProduto from "./componentes-pagina-produto/TagProduto.vue";
import ProductShowcase from "../ComponentesGlobais/Showcases/ProductShowcase.vue";
import CarouselDeProdutos from "./componentes-pagina-produto/Carousel/CarouselDeProdutos.vue";
import CarouselProduto from "./componentes-pagina-produto/Carousel/CarouselProduto.vue";
import FuncaoEDesign from "./componentes-pagina-produto/FuncaoEDesign.vue";
import DescricaoProduto from "./componentes-pagina-produto/DescricaoProduto.vue";
import GridImagensProduto from "./componentes-pagina-produto/Grid/GridImagensProduto.vue";
import MiniCarousel from "./componentes-pagina-produto/Carousel/MiniCarousel.vue";
export default {
  components: {
    PathProduto,
    TagProduto,
    DescricaoProduto,
    ProductShowcase,
    CarouselDeProdutos,
    CarouselProduto,
    FuncaoEDesign,
    GridImagensProduto,
    MiniCarousel,
  },
  data() {
    return {
      produto: {
        nome: "MJÖLKKLOCKA",
        tipo: "Almofada ergonómica",
        utilidade: "costas/lado",
        precoAtivo: "25",
        precoHabitual: "29",
        moeda: "€",
        rating: "4.5",
        avaliacoes: "10",
        dimensoes: "41 x 71",
        mesInicioPromocao: "Julho",
        diaInicioPromocao: "01",
        mesFimPromocao: "Julho",
        diaFimPromocao: "31",
        codigoProduto: "304.509.54",
        textoDescritivo:
          "Cada lado é diferente, para proporcionar o apoio necessário para dormir de lado e de costas. Graças à espuma memory, com um conforto acolchoado que ajuda a manter a mesma temperatura durante toda a noite, vai ter a sensação de dormir numa nuvem. ",
        categoriaGeral: "Camas e colchões",
        subCategoriaGeral: "Têxteis para quarto",
        tipoGeral: "Almofadas",
        subTipoGeral: "Almofadas de espuma e espuma memory",
      },
    };
  },
};
</script>

<style lang="scss">
.paginaProduto {
  margin: 0 0 4rem 0;
  height: 100%;

  & .costum-hr {
    width: 100%;
    margin: 2rem 0 2rem 0;
  }

  & .paginaProduto-col {
    display: flex !important;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & .product-outter-row-1 {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: relative;

      @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
      }

      & .product-outter-col-1 {
        float: left;
        width: 100%;
        height: 100%;

        @media (max-width: 1200px) {
          width: 100%;
          height: 100%;
        }

        & .product-inner-row {
          width: 100%;
          & .product-top-row {
            display: flex;
            flex-direction: row;
            width: 100%;

            @media (max-width: 1200px) {
              flex-direction: column;
            }
            & .top-col-1 {
              display: flex;
              flex-direction: column;
              width: 70%;

              @media (max-width: 1200px) {
                flex-direction: row;
                width: 100%;
              }
            }
            & .top-col-2 {
              display: flex;
              flex-direction: column;
              width: 30%;

              @media (max-width: 1200px) {
                flex-direction: row;
                width: 100%;
              }
            }
          }

          & .produtos-semelhantes {
            display: flex;
            flex-direction: column;
            margin-top: 2rem;

            & .inner-col-1 {
              font-size: 1.375rem;
              line-height: 1.4545454545;
              color: black;
              font-weight: 700;
              display: flex;
              flex-direction: row;
              margin-bottom: 2rem;
            }
            & .inner-col-2 {
              display: flex;
              flex-direction: row;
            }
          }
        }
      }
      & .product-outter-col-2 {
        float: right;
        width: 30%;
        height: 100%;
        position: sticky;

        @media (max-width: 1200px) {
          width: 100%;
        }

        & .productDescription {
          & .product-col {
            padding-top: 0;
            padding-left: 2.5;

            @media (max-width: 1200px) {
              padding-left: 0;
              padding-top: 2.5rem;
            }

            & .product-row-9 {
              @media (max-width: 1200px) {
                padding-left: 0.3rem;
              }
            }
            & .product-row-10 {
              @media (max-width: 1200px) {
                padding-left: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
