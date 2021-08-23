<template>
  <div class="produtoSimilar">
    <div class="product-body">
      <div class="product-image">
        <img :src="imageSrc" />
      </div>
      <div class="product-description">
        <a class="nome" :href="'pagina-de-produto/' + link">{{ name }}</a>
        <p class="tipo">{{ type }}</p>
        <p class="utilidade">{{ utility }}</p>
        <div class="precoAtual">
          <h1>{{ currentPrice }}</h1>
          <h2>€ /ud</h2>
        </div>
        <div class="rating-stars">
          <div class="rating-row">
            <div class="rating-col-1">
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
            <div class="rating-col-2">
              <h4>( {{ ratingCount }} )</h4>
            </div>
          </div>
        </div>
        <div class="adicionar-comparacao">
          <button class="addComparison">Add to comparison</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  components: { StarRating },
  props: {
    imageSrc: String,
    link: String,
    name: String,
    type: String,
    utility: String,
    currentPrice: Number,
    rating: Number,
    ratingCount: Number,
  },
};
</script>

<style lang="scss">
.produtoSimilar {
  height: auto;
  width: 100%;

  & .row {
    margin: 0 0 0.2rem 0;
    display: inline-block;
    width: 100%;
    align-items: center;
    & .col-1 {
      float: left;
      padding-left: 0;
      width: auto;
      & .remove-button {
        background-color: white;
        border: none;
        padding: 0 0.5rem;
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
      float: right;
      padding-right: 0;
      width: auto;
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
      }
    }
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

      & .rating-stars {
        & .rating-row {
          display: ruby;
          list-style: none;
          padding-left: 0;
          & .rating-col-1 {
            margin-right: 1rem;
          }
          & .rating-col-2 {
            & h4 {
              font-size: 0.875rem;
            }
          }
        }
      }

      & .adicionar-comparacao {
        margin-top: 2rem;
        & .addComparison {
          width: 100%;
          background-color: black;
          color: white;
          font-size: 0.875rem;
          line-height: 1.42857;
          font-weight: 700;
          border-radius: 64px;
          text-align: center;
          height: 3.5rem;
          padding: 0 2rem;
          border: 1px solid black;
        }
      }
    }
  }
}
</style>
