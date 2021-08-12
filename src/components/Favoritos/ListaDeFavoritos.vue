<template>
  <div class="listaDeFavoritos">
    <div class="listHeader">
      <div class="row">
        <div class="col-1">
          <a href="">{{ listName }}</a>
        </div>
        <div v-if="selected == true" class="col-2">
          LISTA SELECIONADA
        </div>
        <div class="col-3">
          <b-button
            variant="primary"
            type="button"
            class="addButton"
            @favourited="addItem(produto)"
          >
            <b-icon
              icon="plus-circle-fill"
              scale="1.5"
              variant="primary"
            ></b-icon>
          </b-button>
        </div>
      </div>
      <div class="row">
        <div class="col">{{ products.length }} produtos</div>
      </div>
    </div>
    <template v-if="products.length > 0">
      <div class="row">
        <div class="col-sm-12 pt-3 pb-5">
          <div class="row">
            <div
              v-for="(product, index) in products"
              :key="product.name"
              class="wishlist-product"
            >
              <b-button
                v-if="products.length > 0"
                variant="danger"
                type="button"
                class="removeButton"
                @click="removeItem(index)"
              >
                <b-icon
                  icon="dash-circle-fill"
                  scale="1.5"
                  variant="danger"
                ></b-icon>
              </b-button>
              <div class="product">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="row">
        <div class="emptyList col-sm-12 pt-3 pb-5">
          <div class="row">
            <div class="empty-list-container">
              <a class="label" href="">Esta lista parece vazia</a>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ListaDeFavoritos",
  components: { StarRating },
  props: {
    productId: {
      type: Array,
      required: true,
    },
    listName: {
      type: String,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      produto: {
        id: 5,
        name: "Teste",
        type: "Roupeiro aberto teste",
        utility: "9cm teste",
        imageSrc: "https://picsum.photos/350?random=5",
        normalPrice: 135,
        currentPrice: 112,
        rating: 3,
        ratingCount: 24,
        link: "hauga",
      },
    };
  },
};
</script>

<style lang="scss">
.emptyList {
  & .row {
    & .empty-list-container {
      width: 100%;
      min-height: 20rem;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      align-items: center;
      border: 3px solid #f5f5f5;
      background-color: #f5f5f5;
      & .label {
        color: #484848;
        text-decoration: none;

        &:hover {
          color: black;
          text-decoration: underline;
        }
      }
    }
  }
}
.listaDeFavoritos {
  width: 100%;

  & .listHeader {
    margin-bottom: 1rem;
    & .row {
      color: #484848;
      font-size: 0.75rem;
      align-items: center;
      & .col-1 {
        width: auto;
        & a {
          color: #484848;
          font-weight: 700;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.875rem;
          line-height: 1.57;
          padding: 0.25rem 0.25rem 0.25rem 0;

          &:hover {
            text-decoration: underline;
            color: black;
          }
        }
      }

      & .col-2 {
        width: auto;
        color: #0058a3;
        font-weight: 700;
        padding: 0.25rem 0.5rem;
        background-color: #ebf2f8;
        font-size: 0.875rem;
        line-height: 1.57;
      }

      & .col-3 {
        & .addButton {
          background-color: white;
          width: 2rem;
          height: 2rem;
          border-radius: 64px;
          text-align: center;
          font-weight: 700;
          display: flex;
          justify-content: center;
          align-items: center;
          border: none;
        }
      }
    }
  }
  .wishlist-product {
    width: 25%;
    @media (max-width: 1600px) {
      width: 33%;
    }
    @media (max-width: 1100px) {
      width: 50%;
    }
    @media (max-width: 700px) {
      width: 100%;
    }
    & .removeButton {
      background-color: white;
      width: 2rem;
      height: 2rem;
      border-radius: 64px;
      text-align: center;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      margin-bottom: 1rem;
    }

    .product {
      width: auto;
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
      }
    }
  }
}
</style>
