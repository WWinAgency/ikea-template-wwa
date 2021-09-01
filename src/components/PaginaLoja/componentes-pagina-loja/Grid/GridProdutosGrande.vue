<template>
  <div class="gridProdutosGrandes">
    <div class="col">
      <div class="row">
        <div class="seccao-dinamica">
          <!-- BUTTON CAROUSEL -->
          <ButtonCarousel :buttons="filterButtons" />
          <!-- BUTTON CAROUSEL -->
          <!-- LISTA COMPARATIVA -->
          <div class="lista-comparativa">
            <div class="container-lista" v-if="this.comparisonList.length > 0">
              <hr class="costum-hr" />
              <div class="row">
                <div class="col-1">
                  <button class="close-btn" @click="closeComparison()">
                    Fechar
                  </button>
                </div>
                <div class="col-2">
                  {{ comparisonList.length }}
                  Selecionado
                </div>
                <div class="col-3">
                  <div
                    v-for="(items, index) in this.comparisonList"
                    :key="index"
                    class="lista"
                  >
                    <div class="row">
                      <div class="col">
                        <div class="imagemSelecionada">
                          <img :src="items.imageSrc" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <a href="/comparacao-produtos" class="comparar-produtos"
                    >Comparar Produtos</a
                  >
                </div>
              </div>
            </div>
          </div>
          <hr class="costum-hr" />

          <!-- LISTA COMPARATIVA -->
        </div>
      </div>
      <div class="row">
        <ListaProdutos
          :comparisonList="comparisonList"
          :produtos="products"
        ></ListaProdutos>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProdutos from "./ListaProdutos.vue";
import ButtonCarousel from "../../../MainPage/components-main-page/Carousel/ButtonCarousel.vue";
import produtos from "../../../../assets/data/mainPage/products";

export default {
  components: {
    ButtonCarousel,
    ListaProdutos,
  },
  beforeDestroy() {
    this.comparisonList = [];
  },
  data() {
    return {
      comparisonList: [],
      products: produtos,
    };
  },

  methods: {
    closeComparison() {
      this.comparison = [];
    },
  },

  props: {
    filterButtons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.gridProdutosGrandes {
  & .costum-hr {
    margin: 0.5rem 0 0.5rem 0;
  }
  & .col {
    & .row {
      & .seccao-dinamica {
        & .lista-comparativa {
          margin: 2rem 0 0 0;
          width: 100%;

          & .container-lista {
            & .row {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              position: sticky;
              & .col-1 {
                width: auto;
                height: 4rem;
                display: flex;
                align-items: center;
                width: 20%;

                & .close-btn {
                  border: none;
                  font-size: 0.8rem;
                  line-height: 1.33333;
                  font-weight: 700;
                  background-color: white;
                }
              }
              & .col-2 {
                width: auto;
              }
              & .col-3 {
                width: auto;
                display: flex;

                & .imagemSelecionada {
                  margin-right: 0.5rem;
                  & img {
                    max-width: 2.5rem;
                  }
                }
              }
              & .col-4 {
                width: auto;
                height: 4rem;
                display: flex;
                align-items: center;

                & .comparar-produtos {
                  border-radius: 64px;
                  height: 2.5rem;
                  padding: 0 1.5rem;
                  background-color: white;
                  border: 1px solid #dfdfdf;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 0.75rem;
                  line-height: 1.33333;
                  font-weight: 700;
                  color: black;
                  text-decoration: none;

                  &:hover {
                    border: 1px solid darkgrey;
                  }
                }
              }
            }
          }
        }

        & .hr-dinamico {
          display: none;
        }
      }

      .produto {
        & .comparisonSelection {
          display: flex;
          width: 40%;
          margin-bottom: 0.5rem;
          align-items: center;

          & .col-1 {
            & input[type="checkbox"] {
              width: 20px;
              height: 20px;
            }
          }
          & .col-2 {
            height: 20px;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-bottom: 0.3rem;
            font-size: 0.875rem;
            color: #484848;
            line-height: 1.57;
          }
        }
        & .product-body {
          width: 100%;
          & .product-image {
            & img {
              width: 100%;
            }
          }

          & .product-description {
            width: 100%;
            padding: 1rem 0 1rem 0;
            & .nome {
              color: black;
              font-size: 1.1rem;
              line-height: 1.42857;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: 700;

              &:hover {
                text-decoration: underline;
              }
            }

            & .tipo {
              font-size: 1rem;
              line-height: 1.42857;
              margin-bottom: 0.1rem;
            }

            & .utilidade {
              font-size: 1rem;
              line-height: 1.42857;
              margin-bottom: 0.5rem;
            }

            & .precoAtual {
              display: flex;
              flex-direction: row;

              & h1 {
                font-size: 1.5rem;
                margin-right: 0.25rem;
                font-weight: 700;
              }

              & h2 {
                font-size: 0.6875rem;
                margin-right: 0.2rem !important;
                font-weight: 700;
              }
            }

            & .precoNormal {
              font-size: 0.85rem !important;
              margin-bottom: 0.25rem;
            }

            & .row {
              display: inline-block;
              width: 100%;
              margin: 0;
              align-items: center;

              & .col-1 {
                float: left;
                width: 80%;
                padding-left: 0;
                & .rating {
                  margin-bottom: 0.5rem;
                  display: inline-flex;
                  width: 100% !important;

                  & .rating-col {
                    display: ruby;
                    list-style: none;
                    padding-left: 0;
                    width: 50%;
                    & .rating-row {
                      & h4 {
                        margin-left: 1rem;
                        font-size: 0.8rem !important;
                      }
                    }
                  }
                }
              }
              & .col-2 {
                float: right;
                padding-right: 0;
                & .basket-button {
                  width: 100%;

                  & .btn-basket {
                    width: 100%;
                    height: auto;
                    border: none;
                    z-index: 1;
                    outline: none;
                    cursor: pointer;
                    background-color: transparent;
                    text-align: right;

                    & .basket-icon {
                      & :hover {
                        color: darkblue !important;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
