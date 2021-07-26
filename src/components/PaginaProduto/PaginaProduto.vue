<template>
  <div class="paginaProduto">
    <div class="path">
      <div class="path-row">
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">Produtos</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ categoriaGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ subCategoriaGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ tipoGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ subTipoGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          {{ nomeProdutoPath }} {{ tipoProdutoPath }} {{ utilidadeProdutoPath }}
        </div>
      </div>
    </div>

    <hr class="costum-hr" />

    <div class="paginaProduto-col">
      <div class="product-outter-row">
        <div class="product-outter-col-1">
          <div class="product-inner-row">
            <div class="product-grid-col-1">
              <div class="product-grid-row-1">
                <img src="@/assets/images/vase.jpg" />
              </div>
              <div class="product-grid-row-2">
                <img src="@/assets/images/vase.jpg" />
              </div>
              <div class="product-grid-row-3">
                <img src="@/assets/images/vase.jpg" />
              </div>
            </div>
            <div class="product-grid-col-2">
              <div class="product-grid-row-4">
                <img src="@/assets/images/vase.jpg" />
              </div>
              <div class="product-grid-row-5">
                <img src="@/assets/images/vase.jpg" />
              </div>
              <div class="product-grid-row-6">
                <img src="@/assets/images/vase.jpg" />
              </div>
            </div>
          </div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
          <div class="product-inner-row"></div>
        </div>
        <div class="product-outter-col-2">
          <ProductDescription
            nomeProduto="MJÖLKKLOCKA"
            precoProduto="25"
            moedaProduto="€"
            tipoProduto="Almofada ergonómica"
            ratingProduto="4.5"
            avaliacoesProduto="10"
            utilidadeProduto="costas/lado"
            dimensoesProdutoCm="41x71"
            precoHabitual="29"
            promocaoInicioMes="Julho"
            promocaoInicioDia="01"
            promocaoFimMes="Julho"
            promocaoFimDia="31"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductDescription from "./componentes-pagina-produto/ProductDescription.vue";
export default {
  components: { ProductDescription },
  // props: {
  //   categoriaGeralProduto: String,
  //   subCategoriaGeralProduto: String,
  //   tipoGeralProduto: String,
  //   subTipoGeralProduto: String,
  //   nomeProduto: String,
  //   tipoProduto: String,
  //   utilidadeProduto: String,
  // },
  data: function() {
    return {
      categoriaGeralProduto: "Camas e colchões",
      subCategoriaGeralProduto: "Têxteis para quarto",
      tipoGeralProduto: "Almofadas",
      subTipoGeralProduto: "Almofadas de espuma e espuma memory",
      nomeProdutoPath: "MJÖLKKLOCKA",
      tipoProdutoPath: "Almofada ergonómica",
      utilidadeProdutoPath: "costas/lado",
    };
  },
};
</script>

<style lang="scss">
.paginaProduto {
  margin: 0 0 4rem 0;
  & .costum-hr {
    width: 100%;
    margin-bottom: 4rem;
  }
  & .path {
    margin: 1rem 0 1rem 0;
    width: 100%;
    & .path-row {
      display: flex;
      flex-direction: row !important;
      align-items: center;

      & .path-col {
        display: flex;
        flex-direction: column;

        & .path-col-inner-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          & .path-col-inner-col-1 {
            display: flex;
            flex-direction: column;
            & a {
              font-size: 0.9rem;
              line-height: 1.5;
              font-weight: 400;
              text-decoration: none;
              color: black;

              &:hover {
                text-decoration: underline;
              }
            }
          }
          & .path-col-inner-col-2 {
            display: flex;
            flex-direction: column;
            margin: 0 0.5rem 0 0.5rem;
          }
        }
      }
    }
  }
  & .paginaProduto-col {
    display: flex !important;

    & .product-outter-row {
      display: inline-block;
      width: 100%;

      & .product-outter-col-1 {
        float: left;
        width: 70%;

        & .product-inner-row {
          display: flex;
          flex-direction: row;

          & .product-grid-col-1 {
            & .product-grid-row-1 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0 0.5rem 0.5rem 0;
              }
            }
            & .product-grid-row-2 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0.5rem 0.5rem 0.5rem 0;
              }
            }
            & .product-grid-row-3 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0.5rem 0 0.5rem 0;
              }
            }
          }
          & .product-grid-col-2 {
            & .product-grid-row-4 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0 0.5rem 0.5rem 0.5rem;
              }
            }
            & .product-grid-row-5 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0.5rem 0 0.5rem 0.5rem;
              }
            }
            & .product-grid-row-6 {
              & img {
                width: 30rem;
                height: 30rem;
                margin: 0.5rem 0 0 0.5rem;
              }
            }
          }
        }
      }
      & .product-outter-col-2 {
        float: right;
        width: 30%;
      }
    }
  }
}
</style>
