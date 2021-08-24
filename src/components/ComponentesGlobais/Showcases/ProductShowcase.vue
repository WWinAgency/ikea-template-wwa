<template>
  <div class="row">
    <div class="col-sm-12 pt-3 pb-5">
      <div class="row">
        <div v-for="product in products" :key="product.id" class="productItem">
          <div class="favorite-button">
            <a
              class="icon float-right m-0 cursor-pointer"
              @click="handleAddToWishlist(product)"
              v-if="wishlistExists(product) === false"
              ><b-icon-heart></b-icon-heart
            ></a>
            <a
              class="icon heart float-right m-0 cursor-pointer"
              v-else
              @click="handleRemoveToWishlist(product)"
              ><b-icon-heart-fill></b-icon-heart-fill
            ></a>
          </div>
          <div class="product-item">
            <div class="product-body">
              <div class="product-image">
                <img :src="product.imageSrc" />
              </div>
              <div class="product-description">
                <a class="nome" :href="'pagina-de-produto/' + product.link">{{
                  product.name
                }}</a>
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

<script>
import StarRating from "vue-star-rating";
import axios from "axios";
export default {
  components: { StarRating },
  props: ["products"],
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
.productItem {
  width: 25% !important;
  @media (max-width: 1600px) {
    width: 33% !important;
  }
  @media (max-width: 1100px) {
    width: 50% !important;
  }
  @media (max-width: 700px) {
    width: 100% !important;
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
  .favorite-button {
    display: inline-block;
    width: 100%;
    margin-bottom: 0.5rem;

    & a.icon {
      font-size: 20px !important;
    }
    & .button {
      float: right;
      margin-right: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none !important;
      width: 1rem;
      height: 1.5rem;

      & .favorite-icon {
        color: #c8c8c8 !important;

        &:hover {
          color: black !important;
        }
      }
    }
  }

  .product-item {
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
</style>
