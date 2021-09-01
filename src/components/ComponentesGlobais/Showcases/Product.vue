<template>
  <div class="product">
    <a :href="'/pagina-de-produto/' + link" class="product-col">
      <div class="product-image-row">
        <img :src="imageSrc" class="product-image" />
      </div>
      <div class="text-row">
        <div class="text-col">
          <div v-if="promocao == true" class="ikea-family">
            <strong>Promoção IKEA Family</strong>
          </div>

          <a class="product-name" href=""
            ><strong>{{ name }}</strong></a
          >

          <div class="product-type">{{ type }}</div>
          <div class="product-utility">{{ utility }}</div>
          <div v-if="promocao == true" class="product-preco-habitual">
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
                  :read-only="true"
                >
                </star-rating>
              </div>
              <div class="rating-row">
                <h4>( {{ ratingCount }} )</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
  name: "Product",
  components: { StarRating },
  props: {
    id: Number,
    name: String,
    type: String,
    utility: String,
    imageSrc: String,
    normalPrice: Number,
    currentPrice: Number,
    rating: Number,
    ratingCount: Number,
    link: String,
    promocao: Boolean,
  },
};
</script>

<style lang="scss">
.product {
  text-decoration: none;
  color: black;
  width: 100% !important;
  height: 100% !important;

  & .product-col {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40rem !important;
    text-decoration: none;
    color: black;

    & .product-image-row {
      display: flex;
      flex-direction: row;
      height: 50%;
      & img {
        width: 100%;
        height: 100%;
      }
    }

    & .text-row {
      display: flex;
      flex-direction: row;
      height: 50%;
      margin-top: 1rem;
      text-decoration: none;
      color: black;

      & .text-col {
        width: 100%;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: black;

        & .ikea-family {
          font-size: 1rem;
          line-height: 1.42857;
          color: #0077c1;
          margin-bottom: 0.25rem;
          text-decoration: none;
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
          margin-bottom: 0.1rem;
        }

        & .product-utility {
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

          & .basket-col {
            height: 70%;
            width: 50%;
            display: flex;
            flex-direction: column;
            position: relative;
            float: right;

            & .button-basket {
              width: 2rem;
              height: 2rem;
              font-size: 0.8rem;
              position: absolute;
              bottom: 0;
              right: 0;
              margin-bottom: 0;
              border-radius: 64px;
              display: flex;
              justify-content: center;
            }
          }
        }
      }
    }
  }
}
</style>
