<template>
  <div class="product">
    <ul class="product-container">
      <li class="product-showcase-item">
        <img src="@/assets/images/vase.jpg" class="product-image" />
      </li>
      <li class="product-showcase-item">{{ discount }}</li>
      <li class="product-showcase-item">
        <a class="product-name" href=""
          ><strong>{{ name }}</strong></a
        >
      </li>
      <li class="product-showcase-item">
        <h1>{{ type }}</h1>
      </li>
      <li class="product-showcase-item">
        <h2>Preço habitual {{ normalPrice }} € /ud</h2>
      </li>
      <li class="product-price">
        <h1>
          <strong>{{ currentPrice }}</strong>
        </h1>
        <h2><strong>€</strong></h2>
        <h3><strong>/ud</strong></h3>
      </li>
      <li class="product-showcase-item">
        <div class="rating-stars">
          <ul class="rating-list">
            <li class="rating-item">
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
            </li>
            <li class="rating-item">
              <h4>( {{ avaliacoes }} )</h4>
            </li>
          </ul>
        </div>
      </li>
    </ul>
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
  & .product-container {
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

    & .product-showcase-item {
      width: 100% !important;
      display: flex;
      flex-direction: column;
      margin-bottom: 0.5rem;

      & img {
        width: 320px !important;
        height: 320px !important;
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
          width: 348px !important;
          height: 348px !important;
        }

        @media (max-width: 400px) {
          width: 340px !important;
        }
      }

      & .rating-stars {
        & .rating-list {
          display: ruby;
          list-style: none;
          padding-left: 0;
          & .rating-item {
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
