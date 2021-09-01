<template>
  <div class="carouselProdutos">
    <div class="titulo">
      <h1>{{ titulo }}</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div
          class="carousel-item"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="imagem">
            <Product
              :name="product.name"
              :type="product.type"
              :utility="product.utility"
              :imageSrc="product.imageSrc"
              :normalPrice="product.normalPrice"
              :currentPrice="product.currentPrice"
              :rating="product.rating"
              :ratingCount="product.ratingCount"
              :link="product.link"
            />
          </div>
          <div>
            <a
              @click="handleAddToCart(product)"
              v-if="cartExists(product) === false"
              class="btn-basket"
            >
              <b-icon
                class="basket-icon"
                icon="bag-plus-fill"
                scale="1.5"
                variant="primary"
              ></b-icon>
            </a>
            <a @click="handleRemoveFromCart(index)" v-else class="btn-basket">
              <b-icon
                class="basket-icon"
                icon="bag-plus-fill"
                scale="1.5"
                variant="danger"
              ></b-icon>
            </a>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Product from "../../../ComponentesGlobais/Showcases/Product.vue";
import shoppingCartMixin from "../../../../mixins/shoppingCartMixin";

export default {
  name: "MyComponent",
  mixins: [shoppingCartMixin],
  components: { VueSlickCarousel, Product },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    products: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: "5",
        slidesToShow: 4,
        slidesToScroll: 9,
        speed: 500,
        initialSlide: 3,
        dots: true,
        dotsClass: "slick-dots costum-dot-class",
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 1500,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 5,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 1050,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 800,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },

          {
            breakpoint: 550,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: false,
              arrows: false,
            },
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.carouselProdutos {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .titulo {
    margin-bottom: 2rem;

    & h1 {
      font-size: 1.5625rem;
      font-weight: bold;
      line-height: 1.44444rem;
    }
  }

  & .carousel-container {
    width: 100%;
    margin: 0 !important;

    @media (max-width: 768px) {
      margin: 0 !important;
      width: 100%;
    }

    & .carousel-component {
      & .carousel-item {
        width: 290px !important;
        height: 800px !important;

        @media (max-width: 550px) {
          width: 400px !important;
          height: 480px !important;
        }
        @media (max-width: 480px) {
          width: 350px !important;
          height: 480px !important;
        }
        @media (max-width: 420px) {
          width: 320px !important;
          height: 420px !important;
        }

        @media (max-width: 380px) {
          width: 300px !important;
          height: 420px !important;
        }
        @media (max-width: 350px) {
          width: 280px !important;
          height: 400px !important;
        }
        @media (max-width: 330px) {
          width: 260px !important;
          height: 380px !important;
        }

        & .imagem {
          width: 100%;
          height: 100%;
        }
      }

      & .slick-prev {
        left: 0;
        z-index: 1;
        &::before {
          font-size: 30px;
          color: black !important;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      & .slick-next {
        right: 0;
        z-index: 1;
        &::before {
          font-size: 30px;
          color: black !important;
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
}
</style>
