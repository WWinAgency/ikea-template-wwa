<template>
  <div class="favoritos">
    <template v-if="this.$store.state.WishlistModule.wishlist.length > 0">
      <div class="row">
        <div class="col-sm-12">
          <h1>Lista de Favoritos</h1>
          <div class="infoFavoritos">
            <div class="row">
              <h2>Mantenham as vossas listas de favoritos!</h2>
            </div>
            <div class="row">
              <h3>
                Estas listas de favoritos são apenas temporárias.
                <a href="">Entrar ou Iniciar Sessão</a> para garantir que as
                listas de favoritos ainda estão aqui quando voltar
              </h3>
            </div>
          </div>
        </div>
        <!-- <div class="col-sm-5 d-flex justify-content-end">
          <button @click="clearWishlist" class="btn btn-hero-light">Limpar</button>
        </div> -->
      </div>
      <div class="row">
        <div class="col-sm-12 pt-3 pb-5 my-4">
          <div class="row">
            <div
              v-for="(product, index) in this.$store.state.WishlistModule
                .wishlist"
              :key="index"
              class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
            >
              <button
                type="button"
                class="btn-remove mb-2"
                @click="handleRemoveToWishlist(product)"
              >
                <b-icon
                  class="remove-icon"
                  icon="dash-circle-fill"
                  scale="1.3"
                  variant="danger"
                ></b-icon>
              </button>
              <div class="wishlist-product">
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
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <!--
          Margin bottom: 200px is a hack to push footer down so it doesn't unalign the page.
          Need to get a better solution for this.
        -->
        <div class="container" style="margin-bottom: 200px">
          <div class="row">
            <div class="col-sm-12 pt-5">
              A wishlist encontra-se vazia.
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  name: "Favoritos",
  components: {
    StarRating,
  },
  data() {
    return {};
  },
  mounted() {
    const productIds = this.$store.state.WishlistModule.wishlist;
    const productIdsString = productIds.join();
    axios
      .get("/api/products", { params: { id: productIdsString } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    clearWishlist() {
      this.products = {};
      this.$store.dispatch("WishlistModule/clearWishlist");
    },
    async handleAddToWishlist(id) {
      await this.$store.dispatch("WishlistModule/addWishlistItem", id);
    },
    handleRemoveToWishlist(id) {
      this.$store.dispatch("WishlistModule/removeWishlistItem", id);
    },
    wishlistExists(id) {
      return (
        this.$store.state.WishlistModule.wishlist.find((i) => i === id) != null
      );
    },
  },
};
</script>

<style lang="scss">
.btn-remove {
  width: 100%;
  height: auto;
  border: none;
  z-index: 1;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: right;

  & .remove-icon {
    &:hover {
      color: darkred !important;
    }
  }
}

.favoritos {
  width: 100%;
  & .row {
    width: auto;

    & h1 {
      font-weight: 700;
      font-size: 2.25rem;
      line-height: 1.3333333333;
      letter-spacing: -0.039375rem;
    }

    & .infoFavoritos {
      border: 1px solid #dfdfdf;
      padding: 2rem 1.25rem;
      border-radius: 4px;
      margin: 2.5rem 0;
      & .row {
        & h2 {
          color: #0077c1;
          font-size: 1rem;
          line-height: 1.5;
          font-weight: 700;
        }

        & h3 {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;

          & a {
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;

            &:hover {
              color: black;
            }
          }
        }
      }
    }

    & .wishlist-product {
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
</style>
