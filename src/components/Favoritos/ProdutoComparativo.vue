d<template>
  <div class="produtoComparativo">
    <div class="col">
      <div class="row">
        <div class="col-comparacao">
          <div class="row-comparacao-1"><h1>Comparação Favoritos</h1></div>
          <div class="row-comparacao-2">
            <h2>A comparar {{ produtos.length }} produtos</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-buttons">
          <div class="button-col">
            <div class="button-row">
              <div class="button-col-1">
                <a href="/pagina-de-loja" class="editar-selecao">
                  <div class="row">
                    <div class="col-1">
                      <b-icon
                        class="arrow-left"
                        icon="arrow-left"
                        scale="1.5"
                        variant="dark"
                      ></b-icon>
                    </div>
                    <div class="col-2">
                      Editar Seleção
                    </div>
                  </div>
                </a>
              </div>
              <div class="button-col-2">
                <button class="mostrar-diferencas">
                  Mostrar apenas diferenças
                </button>
              </div>
            </div>
          </div>
          <div class="content-col">
            <div class="content-row">
              <div class="button-col-1">{{ produtos.length }} Produtos</div>
              <div class="button-col-2">
                <div class="row">
                  <div class="col-1">
                    <button class="produto">
                      Produto
                    </button>
                  </div>
                  <div class="col-2">
                    <button class="conteudo">
                      Contéudo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="(product, index) in produtos"
          :key="index"
          class="lista col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
        >
          <div class="buttons-row">
            <div class="col-1">
              <button @click="removeComparison(index)" class="remove-button">
                <b-icon
                  class="remove"
                  icon="x"
                  scale="2"
                  variant="dark"
                ></b-icon>
              </button>
            </div>
            <div class="col-2">
              <button @click="checkFavourite(product)" class="favourite-button">
                <b-icon
                  v-if="product.favSelected == false"
                  class="heart"
                  icon="heart"
                  scale="1.3"
                  variant="dark"
                ></b-icon>
                <b-icon
                  v-else
                  class="heart-fill"
                  icon="heart-fill"
                  scale="1.3"
                  variant="dark"
                ></b-icon>
              </button>
            </div>
          </div>

          <ProdutoListaComparativa
            :id="product.id"
            :name="product.name"
            :type="product.type"
            :utility="product.utility"
            :code="product.code"
            :imageSrc="product.imageSrc"
            :link="product.link"
            :rating="product.rating"
            :ratingCount="product.ratingCount"
            :valueAssembly="product.valueAssembly"
            :valuePrice="product.valuePrice"
            :valueQuality="product.valueQuality"
            :valueLooks="product.valueLooks"
            :valueExpectations="product.valueExpectations"
            :currentPrice="product.currentPrice"
            :variantStock="product.variantStock"
            :medidas="product.medidas"
            :evaluations="product.evaluations"
            :comprimento="product.packageLength"
            :altura="product.packageHeight"
            :largura="product.packageWidth"
            :peso="product.packageWeight"
            :qntEmbalagens="product.packageQnt"
            :productHiddenText="product.productHiddenText"
            :productShowingText="product.productShowingText"
            :showcaseRatingName="product.showcaseRatingName"
            :showcaseRatingDay="product.showcaseRatingDay"
            :showcaseRatingMonth="product.showcaseRatingMonth"
            :showcaseRatingYear="product.showcaseRatingYear"
            :showcaseRatingComment="product.showcaseRatingComment"
            :showcaseRatingRating="product.showcaseRatingRating"
          />
        </div>
      </div>
      <div class="row">
        <div class="similar-products">
          <CarouselSimilarProducts :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSimilarProducts from "./CarouselSimiliarProducts.vue";
import ProdutoListaComparativa from "./ProdutoListaComparativa.vue";

export default {
  components: {
    CarouselSimilarProducts,
    ProdutoListaComparativa,
  },
  props: ["products"],
  data() {
    return {
      accordionOpen: false,
      produtos: [...this.products],
      clicked: false,
    };
  },
  methods: {
    removeComparison(index) {
      this.produtos.splice(index, 1);
    },
    checkFavourite(product) {
      product.favSelected = !product.favSelected;
    },
  },
};
</script>

<style lang="scss">
.produtoComparativo {
  width: 100%;
  & .col {
    width: 100%;
    & .row {
      width: 100%;
      margin-left: 0;

      & .row-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;

        @media (max-width: 1000px) {
          flex-direction: column;
        }

        & .button-col {
          @media (max-width: 1000px) {
            width: 100%;
          }
          & .button-row {
            display: flex;

            & .button-col-1 {
              width: auto;
              margin-right: 1rem;

              & .editar-selecao {
                margin: 0.5rem 0.625rem 0 0;
                width: auto;
                display: flex;
                justify-content: space-between !important;
                align-items: center;
                padding: 0 1.5rem;
                height: 2.5rem;
                border-radius: 64px;
                border: 1px solid #f5f5f5;
                background-color: #f5f5f5;
                text-decoration: none;

                &:hover {
                  background-color: #c8c8c8;
                  border: 1px solid #c8c8c8;
                }

                & .row {
                  width: auto;
                  display: flex;
                  align-items: center;
                  & .col-1 {
                    width: auto;
                    margin: auto;
                    padding-left: 0;
                  }
                  & .col-2 {
                    display: flex;
                    width: auto;
                    font-size: 0.75rem;
                    line-height: 1.33333;
                    text-align: center;
                    font-weight: 700;
                    color: black;
                  }
                }
              }
            }
            & .button-col-2 {
              width: auto;
              & .mostrar-diferencas {
                margin: 0.5rem 0 0 0;
                width: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 1.5rem;
                height: 2.5rem;
                border-radius: 64px;
                border: 1px solid #f5f5f5;
                background-color: #f5f5f5;
                font-size: 0.75rem;
                line-height: 1.33333;
                font-weight: 700;
                color: black;

                &:hover {
                  background-color: #c8c8c8;
                  border: 1px solid #c8c8c8;
                }
              }
            }
          }
        }
        & .content-col {
          display: inline-flex;
          width: 30%;
          align-items: center;
          position: relative;

          @media (max-width: 1000px) {
            width: 100%;
            margin-top: 2rem;
          }
          & .content-row {
            display: flex;
            width: auto;
            position: absolute;
            right: 0;

            @media (max-width: 1000px) {
              width: 100%;
              position: relative;
            }

            & .button-col-1 {
              display: flex;
              justify-content: center;
              width: auto;

              font-size: 0.75rem;

              @media (max-width: 900px) {
                float: left;
                width: 20%;
              }
            }
            & .button-col-2 {
              display: flex;
              width: auto;
              margin-left: 1rem;
              align-items: center;

              @media (max-width: 1000px) {
                position: absolute;
                right: 0;
              }

              & .row {
                padding: 0;
                margin: 0;
                align-items: center;
                @media (max-width: 900px) {
                  display: flex;
                  justify-content: flex-end;
                  margin: auto;
                }
                & .col-1 {
                  width: auto;
                  display: flex;
                  justify-content: center;
                  @media (max-width: 900px) {
                    float: left;
                  }
                  @media (max-width: 600px) {
                    margin-right: 1rem;
                  }

                  & .produto {
                    background-color: white;
                    border: none;
                    font-size: 0.75rem;
                    font-weight: 700;
                  }
                }
                & .col-2 {
                  width: auto;
                  display: flex;
                  justify-content: center;
                  padding-right: 0;
                  @media (max-width: 900px) {
                    float: left;
                  }

                  & .conteudo {
                    background-color: white;
                    border: none;
                    font-size: 0.75rem;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }

      & .col-comparacao {
        & .row-comparacao-1 {
          & h1 {
            margin: 3.75rem 0 0.8rem 0;
            font-size: 1.875rem;
            line-height: 1.3334;
            letter-spacing: -0.53px;
            font-weight: 700;
            color: black;
          }
        }
        & .row-comparacao-2 {
          & h2 {
            margin-bottom: 2.5rem;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
        }
      }

      & .lista {
        & .buttons-row {
          display: flex;
          width: 100%;
          margin-bottom: 0.5rem;
          & .col-1 {
            width: 50%;

            & .remove-button {
              background-color: white;
              border: none;
              padding: 0 0.5rem 0 0;
              height: 2rem;
              width: 2rem;
              border-radius: 64px;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                background-color: #e8e8e8;
              }
            }
          }
          & .col-2 {
            text-align: right;
            width: 50%;

            & .favourite-button {
              background-color: white;
              border: none;

              &:hover {
              }

              & .heart {
                color: #989898 !important;

                &:hover {
                  color: black !important;
                }
              }

              & .heart-fill {
                color: black;
              }
            }
          }
        }
      }
      & .similar-products {
        padding: 10rem 0 0 0;
        width: 100%;
        display: flex;
      }
      & .rating-and-reviews {
        padding: 4rem 0 0 0;
        & .header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        & .body {
          & .row-1 {
            margin-bottom: 0.5rem;
          }
          & .row-2 {
            margin: 0 0 0.5rem 0;

            font-weight: 700;
            font-size: 2.25rem;
            line-height: 1.33333;
            letter-spacing: -0.03938rem;
          }
          & .row-3 {
            margin: 0 0 2rem 0;
            & .rating-stars {
              width: 100%;
              & .rating-row {
                display: ruby;
                list-style: none;
                padding-left: 0;
                & .rating-col-1 {
                  margin-right: 1rem;
                }
                & .rating-col-2 {
                  & h4 {
                    text-align: right;
                    font-size: 0.75rem;
                  }
                }
              }
            }
          }
          & .row-4 {
            margin: 0 0 2rem 0;
            width: 80%;
            & .inner-col {
              & .inner-row-1 {
                & .rating-stars {
                  width: 100%;
                  & .rating-row {
                    display: ruby;
                    width: 100%;
                    list-style: none;
                    padding-left: 0;
                    & .rating-col-1 {
                      width: 50%;
                    }
                    & .rating-col-2 {
                      width: 50%;
                      display: flex;
                      & .comentario {
                        width: 100%;

                        & h4 {
                          text-align: right;
                          font-size: 0.75rem;
                        }
                      }
                    }
                  }
                }
              }
              & .inner-row-2 {
                color: #484848;
                font-size: 0.875rem;
                line-height: 1.57;
              }
            }
          }
          & .row-5 {
            & .open-sidebar {
              width: 80%;
              text-decoration: none;
              color: black;
              display: flex;
              & .inner-row {
                display: flex;
                width: 100%;
                & .inner-col-1 {
                  color: black;
                  font-weight: 700;
                  text-decoration: none;
                  font-size: 0.875rem;
                  line-height: 1.57143;
                  width: 50%;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              & .inner-col-2 {
                width: 50%;
                position: relative;
                display: flex;
                align-items: center;

                & .arrow-right {
                  position: absolute;
                  right: 0;
                }
              }
            }
          }
        }
      }
      & .detalhes-embalagem {
        padding: 4rem 0 0 0;
        & .header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        & .body {
          & .row-1 {
            font-weight: 700;
            font-size: 0.875rem;
            color: #484848;
            line-height: 1.57;
            margin-bottom: 1rem;
          }
          & .row-2 {
            margin: 0 0 1rem 0;

            & .inner-col {
              & .inner-row-1 {
                color: #484848;
                font-weight: 700;
                font-size: 0.875rem;
                line-height: 1.57;
              }
              & .inner-row-2 {
                color: #484848;
                font-size: 0.875rem;
              }
            }
          }
          & .row-3 {
            margin: 0 0 1rem 0;
            & .inner-col {
              width: 100%;

              & .inner-row-1 {
                color: #484848;
                line-height: 1.5;
                font-size: 0.75rem;
              }
              & .inner-row-2 {
                margin-top: 0.5rem;
                background-color: black;
                color: white;
                padding: 0.25rem 0.75rem;
                width: 6rem;
                text-align: center;
                font-weight: 700;
                line-height: 1.25;
                font-size: 0.8rem;
              }
            }
          }
          & .row-4 {
            & .open-sidebar {
              width: 80%;
              text-decoration: none;
              color: black;
              display: flex;
              & .inner-row {
                display: flex;
                width: 100%;
                & .inner-col-1 {
                  color: black;
                  font-weight: 700;
                  text-decoration: none;
                  font-size: 0.875rem;
                  line-height: 1.57143;
                  width: 50%;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              & .inner-col-2 {
                width: 50%;
                position: relative;
                display: flex;
                align-items: center;

                & .arrow-right {
                  position: absolute;
                  right: 0;
                }
              }
            }
          }
        }
      }

      & .card {
        border: none;
        background-color: white;
        & .btn-check:focus + .btn-info,
        .btn-info:focus {
          box-shadow: none;
        }
        & .ler-mais {
          border: none;
          background: white;
          text-align: left;
          padding-left: 0;
          text-decoration: underline;
        }

        &-header {
          border: none;
          background-color: white;
          padding: 0 0 1rem 0;

          & .header-text {
            padding: 0;
          }
        }

        &-body {
          padding: 0 0 1rem 0;
        }
      }

      & .medidas {
        padding: 4rem 0 0 0;

        &-header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        &-body {
          padding-top: 1rem;

          & .row {
            & .inner-col {
              & .inner-row-1 {
                font-size: 0.875rem;
                font-weight: 700;
                color: #484848;
                line-height: 1.57;
              }
              & .inner-row-2 {
                font-size: 0.875rem;
                color: #484848;
                line-height: 1.57;
              }
            }
          }
        }
      }

      & .disponibilidade-entrega {
        padding: 4rem 0 0 0;
        & .row-1 {
          & h2 {
            letter-spacing: -0.02625rem;
            line-height: 1.36;
            font-size: 1.5625rem;
            font-weight: 700;
          }
        }
        & .row-2 {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-top: 1.5rem;
          width: 100%;
          & .col-1 {
            display: flex;
            align-items: center;
            height: 100%;
            width: 10%;
          }
          & .col-2 {
            display: flex;
            align-items: center;
            height: 100%;
            margin-top: 0.5rem;
            width: 90%;
            & h3 {
              font-size: 0.875rem;
              color: #484848;
              line-height: 1.57;
            }
          }
        }
      }
      & .ver-imagens {
        display: flex;
        width: 100%;
        & .col-1 {
          width: 80%;
          & a {
            font-size: 1rem;
            line-height: 1.57143;
            font-weight: 700;
            color: black;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
        & .col-2 {
          position: relative;
          width: 20%;

          & .arrow-right {
            position: absolute;
            right: 0;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
