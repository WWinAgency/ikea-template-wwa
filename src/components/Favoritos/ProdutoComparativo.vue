d<template>
  <div class="produtoComparativo">
    <div class="col">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
        >
          <Produto
            :imageSrc="product.imageSrc"
            :link="product.link"
            :name="product.name"
            :type="product.type"
            :utility="product.utility"
            :currentPrice="product.currentPrice"
            :variantStock="product.variantStock"
            :medidas="product.medidas"
          />

          <hr class="costum-hr" />
          <div class="collapsable-text">
            <div class="accordion" role="tablist">
              <b-card no-body class="mb-1">
                <b-card-header
                  header-tag="header"
                  class="header-text"
                  role="tab"
                >
                  <b-card-text
                    >Esta planta artificial conserva o seu aspeto real ano após
                    ano.</b-card-text
                  >
                </b-card-header>
                <b-collapse
                  id="accordion-1"
                  accordion="my-accordion"
                  role="tabpanel"
                >
                  <b-card-body>
                    <b-card-text
                      >Ideal se não puder ter uma planta viva mas quiser
                      desfrutar da beleza da natureza.</b-card-text
                    >
                  </b-card-body>
                </b-collapse>
                <b-button
                  @click="accordionOpen = !accordionOpen"
                  class="ler-mais"
                  block
                  v-b-toggle.accordion-1
                  variant="info"
                >
                  <div>
                    <div v-if="accordionOpen == false">Ler mais</div>
                    <div v-else>Ler menos</div>
                  </div>
                </b-button>
              </b-card>
            </div>
          </div>
          <div class="disponibilidade-entrega">
            <div class="row-1">
              <h2>Disponível para entrega</h2>
            </div>
            <hr class="costum-hr" />
            <div class="row-2">
              <div class="col-1">
                <b-icon
                  class="disponivel-icon"
                  icon="check-circle-fill"
                  scale="1"
                  :variant="product.variantStock"
                ></b-icon>
              </div>
              <div class="col-2">
                <h3>Disponível</h3>
              </div>
            </div>
          </div>
          <div class="medidas">
            <div class="medidas-header">
              Medidas
            </div>
            <hr class="costum-hr" />
            <div
              class="medidas-body"
              v-for="(medida, index) in product.medidas"
              :key="index"
            >
              <div class="row">
                <div class="inner-col">
                  <div class="inner-row-1">{{ medida.tituloMedida }}</div>
                  <div class="inner-row-2">{{ medida.dimensao }} cm</div>
                </div>
              </div>
            </div>
          </div>
          <div class="detalhes-embalagem">
            <div class="header">
              Detalhes da embalagem
            </div>
            <hr class="costum-hr" />
            <div class="body">
              <div class="row-1">
                Este produto é composto por
                {{ product.qntEmbalagens }} embalagens
              </div>
              <div class="row-2">
                <div class="inner-col">
                  <div class="inner-row-1">{{ product.name }}</div>
                  <div class="inner-row-2">{{ product.type }}</div>
                </div>
              </div>
              <div class="row-3">
                <div class="inner-col">
                  <div class="inner-row-1">Número do artigo</div>
                  <div class="inner-row-2">{{ product.code }}</div>
                </div>
              </div>
              <div class="row-4">
                <a class="open-sidebar" href=""
                  ><div class="inner-row">
                    <div class="inner-col-1">Ler Mais</div>
                    <div class="inner-col-2">
                      <b-icon
                        class="arrow-right"
                        icon="arrow-right"
                        scale="1.5"
                        variant="dark"
                      ></b-icon>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="rating-and-reviews">
            <div class="header">Ratings and Reviews</div>
            <hr class="costum-hr" />
            <div class="body">
              <div class="row-1">Pontuação média</div>
              <div class="row-2">{{ product.rating }}</div>
              <div class="row-3">
                <div class="rating-stars">
                  <div class="rating-row">
                    <div class="rating-col-1">
                      <star-rating
                        v-bind:increment="0.5"
                        v-bind:max-rating="5"
                        inactive-color="white"
                        active-color="black"
                        v-bind:star-size="15"
                        :rating="product.rating"
                        :show-rating="false"
                        read-only="true"
                      >
                      </star-rating>
                    </div>
                    <div class="rating-col-2">
                      <h4>( {{ product.ratingCount }} )</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-4">
                <div class="inner-col">
                  <div class="inner-row-1">
                    <div class="rating-stars">
                      <div class="rating-row">
                        <div class="rating-col-1">
                          <star-rating
                            v-bind:increment="0.5"
                            v-bind:max-rating="5"
                            inactive-color="white"
                            active-color="black"
                            v-bind:star-size="15"
                            :rating="product.rating"
                            :show-rating="false"
                            read-only="true"
                          >
                          </star-rating>
                        </div>
                        <div class="rating-col-2">
                          <div class="comentario">
                            <h4>CESAR - 18/05/2021</h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inner-row-2">Bom Produto</div>
                </div>
              </div>
              <div class="row-5">
                <a class="open-sidebar" href=""
                  ><div class="inner-row">
                    <div class="inner-col-1">Ler Mais</div>
                    <div class="inner-col-2">
                      <b-icon
                        class="arrow-right"
                        icon="arrow-right"
                        scale="1.5"
                        variant="dark"
                      ></b-icon>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";
import StarRating from "vue-star-rating";
export default {
  components: { Produto, StarRating },
  props: ["products"],
  data() {
    return {
      accordionOpen: false,
    };
  },
};
</script>

<style lang="scss">
.produtoComparativo {
  & .col {
    & .row {
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
