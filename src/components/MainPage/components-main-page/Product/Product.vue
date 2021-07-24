<template>
  <div class="product">
    <div class="product-col">
      <div class="product-row">
        <img src="@/assets/images/vase.jpg" class="product-image" />
      </div>
      <div class="product-row">{{ discount }}</div>
      <div class="product-row">
        <a class="product-name" href=""
          ><strong>{{ name }}</strong></a
        >
      </div>
      <div class="product-row">
        <h1>{{ type }}</h1>
      </div>
      <div class="product-row">
        <h2>Preço habitual {{ normalPrice }} € /ud</h2>
      </div>
      <div class="product-price">
        <h1>
          <strong>{{ currentPrice }}</strong>
        </h1>
        <h2><strong>€</strong></h2>
        <h3><strong>/ud</strong></h3>
      </div>
      <div class="product-row">
        <div class="rating-stars">
          <div class="rating-col">
            <div class="rating-row">
              <star-rating
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="white"
                active-color="black"
                v-bind:star-size="12"
                :rating="rating"
                :show-rating="false"
                read-only="true"
              >
              </star-rating>
            </div>
            <div class="rating-row">
              <h4>( {{ avaliacoes }} )</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "Product",
  components: { StarRating },
  props: {
    productImage: String,
    discount: Number,
    name: String,
    type: String,
    normalPrice: Number,
    currentPrice: Number,
    rating: Number,
    avaliacoes: Number,
  },
};
</script>

<style lang="scss">
.product {
  & .product-col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-left: 0 !important;
    list-style: none;

    & .product-price {
      display: flex;
      flex-direction: row;
      justify-content: start;

      & h1 {
        font-size: 1.2rem;
      }
      & h2 {
        margin-left: 3px;
        font-size: 0.575rem;
      }
      & h3 {
        margin-left: 1px;
        font-size: 0.675rem;
      }
    }

    & .product-row {
      width: 100% !important;
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;

      & img {
        width: 365px !important;
        height: 365px !important;

        @media (max-width: 768px) {
          width: 337px !important;
          height: 337px !important;
        }
      }

      & .product-name {
        text-decoration: none;
        color: black;

        &:hover {
          text-decoration: underline;
        }
      }
      & h1 {
        font-size: 0.875rem;
      }
      & h2 {
        font-size: 0.775rem;
      }
      & .product-image {
        width: 250px;
        height: 250px;

        @media (max-width: 768px) {
          width: 337px !important;
          height: 337px !important;
        }

        @media (max-width: 400px) {
          width: 340px !important;
        }
      }

      & .rating-stars {
        & .rating-col {
          display: ruby;
          list-style: none;
          padding-left: 0;
          & .rating-row {
            & h4 {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
  }
}
</style>
