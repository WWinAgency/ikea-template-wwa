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
            <div class="container-lista" v-if="comparison.length > 0">
              <hr class="costum-hr" />
              <div class="row">
                <div class="col-1">
                  <button class="close-btn" @click="closeComparison()">
                    Fechar
                  </button>
                </div>
                <div class="col-2">{{ comparison.length }} Selecionado</div>
                <div class="col-3">
                  <div
                    v-for="(items, index) in comparison"
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
                  <button class="comparar-produtos">Comparar Produtos</button>
                </div>
              </div>
            </div>
          </div>
          <hr class="costum-hr" />

          <!-- LISTA COMPARATIVA -->
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 pt-3 pb-5 my-4">
          <div class="row">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
            >
              <div class="produto">
                <div class="comparisonSelection">
                  <div class="col">
                    <input
                      type="checkbox"
                      :value="product"
                      v-model="comparison"
                    />
                  </div>
                  <div class="col">Comparar</div>
                </div>
                <div class="product-body">
                  <div class="product-image">
                    <img :src="product.imageSrc" />
                  </div>
                  <div class="product-description">
                    <a
                      class="nome"
                      :href="'pagina-de-produto/' + product.link"
                      >{{ product.name }}</a
                    >
                    <p class="tipo">{{ product.type }}</p>
                    <p class="utilidade">{{ product.utility }}</p>
                    <div class="precoAtual">
                      <h1>{{ product.currentPrice }}</h1>
                      <h2>€ /ud</h2>
                    </div>
                    <p class="precoNormal">
                      Preço Habitual: {{ product.normalPrice }} € /ud
                    </p>
                    <div class="row">
                      <div class="col-1">
                        <div class="rating">
                          <div class="rating-col">
                            <div class="rating-row">
                              <star-rating
                                v-bind:increment="0.5"
                                v-bind:max-rating="5"
                                inactive-color="white"
                                active-color="black"
                                v-bind:star-size="15"
                                :rating="product.rating"
                                :show-rating="false"
                                :read-only="true"
                              >
                              </star-rating>
                            </div>
                            <div class="rating-row">
                              <h4>( {{ product.ratingCount }} )</h4>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col-2">
                        <div class="basket-button">
                          <button class="btn-basket">
                            <b-icon
                              class="basket-icon"
                              icon="bag-plus-fill"
                              scale="1.5"
                              variant="primary"
                            ></b-icon>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="costum-hr" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import ButtonCarousel from "../../../MainPage/components-main-page/Carousel/ButtonCarousel.vue";
export default {
  components: {
    ButtonCarousel,
    StarRating,
  },
  data() {
    return {
      check: false,
      arrayOfArrays: [],
      comparison: [],
      products: [
        {
          id: 1,
          name: "FEJKA",
          type: "Planta Artificial em vaso",
          utility: "9cm",
          imageSrc: "https://picsum.photos/360?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
          rating: 4.5,
          ratingCount: 8,
          link: "fejka",
          favSelected: false,
        },
        {
          id: 2,
          name: "SKOGSKLÖVER",
          type: "Estore de correr",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/360?random=2",
          normalPrice: 35,
          currentPrice: 29,
          rating: 4,
          ratingCount: 148,
          link: "skogsklover",
          favSelected: false,
        },
        {
          id: 3,
          name: "HUSARÖ",
          type: "Poltrona",
          utility: "exterior",
          imageSrc: "https://picsum.photos/360?random=3",
          normalPrice: 149,
          currentPrice: 119,
          rating: 4.5,
          ratingCount: 10,
          link: "husaro",
          favSelected: false,
        },
        {
          id: 4,
          name: "HAUGA",
          type: "Roupeiro aberto",
          utility: "c/3 gavetas 70 x 199 cm",
          imageSrc: "https://picsum.photos/360?random=4",
          normalPrice: 135,
          currentPrice: 112,
          rating: 3,
          ratingCount: 24,
          link: "hauga",
          favSelected: false,
        },
        {
          id: 5,
          name: "BODARP",
          type: "Porta,",
          utility: "verde acinzentado, 60x80 cm",
          imageSrc: "https://picsum.photos/300?random=5",
          normalPrice: 50,
          currentPrice: 30,
          rating: 5,
          ratingCount: 7,
          link: "bodarp",
          favSelected: false,
        },
        {
          id: 6,
          name: "SKYMNINGEN",
          type: "Candeeiro suspenso,",
          utility: "branco",
          imageSrc: "https://picsum.photos/300?random=6",
          normalPrice: 79,
          currentPrice: 59,
          rating: 5,
          ratingCount: 3,
          link: "smymningen",
          favSelected: false,
        },
        {
          id: 7,
          name: "TRANGET",
          type: "Tapete, tecelagem plana,",
          utility: "feito à mão várias tonalidades azul 170x240 cm",
          imageSrc: "https://picsum.photos/300?random=7",
          normalPrice: 249,
          currentPrice: 199,
          rating: 4,
          ratingCount: 10,
          link: "tangret",
          favSelected: false,
        },
        {
          id: 8,
          name: "PELARBOJ",
          type: "Candeeiro LED de mesa,",
          utility: "multicor",
          imageSrc: "https://picsum.photos/300?random=8",
          normalPrice: 20,
          currentPrice: 15,
          rating: 4.5,
          ratingCount: 18,
          link: "pelarboj",
          favSelected: false,
        },
        {
          id: 9,
          name: "BJÖRKÅSEN",
          type: "Suporte p/portátil,",
          utility: "bege",
          imageSrc: "https://picsum.photos/300?random=9",
          normalPrice: 25,
          currentPrice: 19.99,
          rating: 4.5,
          ratingCount: 3,
          link: "bjorkasen",
          favSelected: false,
        },
        {
          id: 10,
          name: "ÄNGSLILJA",
          type: "Capa de edredão + fronha,",
          utility: "cinz, 150x200/50x60 cm",
          imageSrc: "https://picsum.photos/300?random=10",
          normalPrice: 19,
          currentPrice: 15,
          rating: 4,
          ratingCount: 31,
          link: "angslilja",
          favSelected: false,
        },
        {
          id: 11,
          name: "LISABO",
          type: "Mesa, chapa de freixo,",
          utility: "140x78 cm",
          imageSrc: "https://picsum.photos/300?random=11",
          normalPrice: 129,
          currentPrice: 99,
          rating: 4.5,
          ratingCount: 27,
          link: "lisabo",
          favSelected: false,
        },
        {
          id: 12,
          name: "SLATORP",
          type: "Roupeiro aberto,",
          utility: "c/3 gavetas, 70x199 cm",
          imageSrc: "https://picsum.photos/300?random=12",
          normalPrice: 799,
          currentPrice: 699,
          rating: 5,
          ratingCount: 8,
          link: "slatorp",
          favSelected: false,
        },
        {
          id: 13,
          name: "IKEA 365+",
          type: "Garrafa de mesa c/tampa,",
          utility: "vidro transparente/cortiça 1l",
          imageSrc: "https://picsum.photos/300?random=13",
          normalPrice: 4.5,
          currentPrice: 3.5,
          rating: 4.5,
          ratingCount: 105,
          link: "ikea-365+",
          favSelected: false,
        },
        {
          id: 14,
          name: "KURA",
          type: "Cama reversível,",
          utility: "branco/pinho, 90x200 cm",
          imageSrc: "https://picsum.photos/300?random=14",
          normalPrice: 149,
          currentPrice: 129,
          rating: 4.5,
          ratingCount: 72,
          link: "kura",
          favSelected: false,
        },
        {
          id: 15,
          name: "ÄNGSLILJA",
          type: "Capa de edredão+2 fronhas,",
          utility: "verde-bege claro, 240x220/50x60 cm",
          imageSrc: "https://picsum.photos/300?random=15",
          normalPrice: 29,
          currentPrice: 25,
          rating: 4,
          ratingCount: 31,
          link: "angslilja",
          favSelected: false,
        },
        {
          id: 16,
          name: "SILVERLÖNN",
          type: "Cortinados transparentes,",
          utility: "par, bege145x300 cm",
          imageSrc: "https://picsum.photos/300?random=16",
          normalPrice: 19.99,
          currentPrice: 15,
          rating: 4,
          ratingCount: 8,
          link: "silvertlonn",
          favSelected: false,
        },
      ],
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
                  background-color: #dfdfdf;
                  border: 1px solid #dfdfdf;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 0.75rem;
                  line-height: 1.33333;
                  font-weight: 700;
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
