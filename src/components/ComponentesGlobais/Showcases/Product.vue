<template>
  <div class="product">
    <div class="product-col">
      <div class="product-image-row">
        <img :src="imageSrc" class="product-image" />
      </div>
      <div class="text-row">
        <div class="text-col">
          <div class="ikea-family"><strong>Promoção IKEA Family</strong></div>

          <a class="product-name" href=""
            ><strong>{{ name }}</strong></a
          >

          <div class="product-type">{{ type }}, {{ utility }}</div>
          <div class="product-preco-habitual">
            Preço habitual {{ normalPrice }} € /ud
          </div>
          <div class="product-price">
            <div class="price-col-1">
              <strong>{{ currentPrice }}</strong>
            </div>
            <div class="price-col-2"><strong> € </strong></div>
            <div class="price-col-3">
              <strong> / ud </strong>
            </div>
          </div>
          <div class="rating-stars">
            <div class="rating-col">
              <div class="rating-row">
                <star-rating
                  v-bind:increment="0.5"
                  v-bind:max-rating="5"
                  inactive-color="white"
                  active-color="black"
                  v-bind:star-size="15"
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
    imageSrc: String,
    name: String,
    type: String,
    utility: String,
    normalPrice: Number,
    currentPrice: Number,
    rating: Number,
    avaliacoes: Number,
    link: String,
  },
};
</script>

<style lang="scss">
.product {
  & .product-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem !important;

    & .product-image-row {
      display: flex;
      flex-direction: row;
      height: 60%;
      & img {
        width: 100%;
        height: 100%;
      }
    }

    & .text-row {
      display: flex;
      flex-direction: row;
      height: 40%;
      margin-top: 1rem;
      & .text-col {
        display: flex;
        flex-direction: column;

        & .ikea-family {
          font-size: 1rem;
          line-height: 1.42857;
          color: #0077c1;
          margin-bottom: 0.25rem;
        }

        & .product-name {
          color: black;
          font-size: 1.1rem;
          line-height: 1.42857;
          text-decoration: none;
          text-transform: uppercase;

          &:hover {
            text-decoration: underline;
          }
        }

        & .product-type {
          font-size: 1rem;
          line-height: 1.42857;
          margin-bottom: 0.5rem;
        }

        & .product-preco-habitual {
          font-size: 0.85rem !important;
          margin-bottom: 0.25rem;
        }

        & .product-price {
          display: flex !important;
          flex-direction: row !important;
          align-items: center;
          margin-bottom: 0.5rem;

          & .price-col-1 {
            font-size: 1.5rem;
            margin-right: 0.25rem;
          }
          & .price-col-2 {
            font-size: 0.6875rem;
            margin-right: 0.2rem !important;
          }
          & .price-col-3 {
            font-size: 0.6875rem;
          }
        }

        & .rating-stars {
          margin-bottom: 0.5rem;
          & .rating-col {
            display: ruby;
            list-style: none;
            padding-left: 0;
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
