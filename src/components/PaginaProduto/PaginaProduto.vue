<template>
  <div class="paginaProduto">
    <!-- PATH -->
    <PathProduto
      :categoriaGeralProduto="produtos[0].generalCategory"
      :subCategoriaGeralProduto="produtos[0].subGeneralCategory"
      :tipoGeralProduto="produtos[0].generalType"
      :subTipoGeralProduto="produtos[0].subGeneralType"
      :nomeProdutoPath="produtos[0].name"
      :tipoProdutoPath="produtos[0].type"
      :utilidadeProdutoPath="produtos[0].utility"
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
                  <GridImagensProduto
                    :image1="produtos[0].imageSrc"
                    :image2="produtos[0].imageSrc2"
                    :image3="produtos[0].imageSrc3"
                    :image4="produtos[0].imageSrc4"
                  />
                </div>
                <!-- Grid de Imagens do Produto -->
                <!-- Carousel de Imagens do Produto -->
                <div class="product-show-2">
                  <CarouselProduto
                    :image1="produtos[0].imageSrc"
                    :image2="produtos[0].imageSrc2"
                    :image3="produtos[0].imageSrc3"
                    :image4="produtos[0].imageSrc4"
                  />
                </div>
                <!-- Carousel de Imagens do Produto -->
              </div>
              <div class="top-col-2">
                <TagProduto
                  :nomeProduto="produtos[0].name"
                  :tipoProduto="produtos[0].type"
                  :utilidadeProduto="produtos[0].utility"
                  :precoProduto="produtos[0].currentPrice"
                  :precoHabitual="produtos[0].normalPrice"
                  :ratingProduto="produtos[0].rating"
                  :avaliacoesProduto="produtos[0].ratingCount"
                  :dimensoesProdutoCm="produtos[0].dimensions"
                  :sale="produtos[0].sale"
                  :promocaoInicioMes="produtos[0].saleInitialMonth"
                  :promocaoInicioDia="produtos[0].saleInitialDate"
                  :promocaoFimMes="produtos[0].saleEndMonth"
                  :promocaoFimDia="produtos[0].saleEndDay"
                  :variantStock="produtos[0].variantStock"
                  :variantLoja="produtos[0].variantStore"
                />
              </div>
            </div>
          </div>
          <!-- Descrição Informativa do Produto -->
          <div class="product-inner-row">
            <DescricaoProduto />
          </div>
          <!-- Descrição Informativa do Produto -->

          <!-- Produtos Semelhantes -->
          <div class="product-inner-row">
            <div class="produtos-semelhantes">
              <div class="inner-col-1">Produtos Semelhantes</div>
              <div class="inner-col-2">
                <ProductShowcase :products="produtos.slice(0, 4)" />
              </div>
            </div>
          </div>
          <!-- Produtos Semelhantes -->
          <!-- Funcao e Design do Produto -->
          <div class="product-inner-row">
            <FuncaoEDesign
              :solucaoFuncaoTitle="produtos[0].functionSolutionTitle"
              :solucaoFuncaoText="produtos[0].functionSolutionText"
              :processoDesignTitle="produtos[0].designProcessTitle"
              :processoDesignText="produtos[0].designProcessText"
            />
          </div>
          <!-- Funcao e Design do Produto -->
        </div>

        <!-- Tag Produto -->
        <!-- Tag Produto -->
      </div>
      <hr class="costum-hr" />
      <!-- Carousel 1 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos :products="produtos" titulo="Outros também viram" />
      </div>
      <!-- Carousel 1 Página Produto -->
      <!-- Carousel 2 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos :products="produtos" titulo="Combina com" />
      </div>
      <!-- Carousel 2 Página Produto -->
      <!-- Mini Carousel -->
      <div class="carousel-de-produtos">
        <MiniCarousel :carousel="mini" titulo="Últimos produtos visualizados" />
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
import produtos from "../../assets/data/mainPage/products";
import first_carousel from "../../assets/data/paginaProduto/carousel1";
import second_carousel from "../../assets/data/paginaProduto/carousel2";
import mini from "../../assets/data/paginaProduto/miniCarousel";

export default {
  mixins: [produtos, first_carousel, second_carousel, mini],
  components: {
    PathProduto,
    TagProduto,
    DescricaoProduto,
    ProductShowcase,
    CarouselDeProdutos,
    FuncaoEDesign,
    GridImagensProduto,
    MiniCarousel,
    CarouselProduto,
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

              & .product-show-1 {
                display: flex;
                width: 100%;

                @media (max-width: 800px) {
                  display: none;
                }
              }

              & .product-show-2 {
                display: none;
                width: 100%;

                @media (max-width: 800px) {
                  display: flex;
                }
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
            margin-top: 4rem;

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
