<template>
  <div class="carouselComparativo">
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div
          class="produto-carousel"
          v-for="(product, index) in products"
          :key="index"
        >
          <ProdutoListaComparativa
            :name="product.name"
            :type="product.type"
            :utility="product.utility"
            :code="product.code"
            :imageSrc="product.imageSrc"
            :link="product.link"
            :rating="product.rating"
            :ratingCount="product.ratingCount"
            :currentPrice="product.currentPrice"
            :variantStock="product.variantStock"
            :medidas="product.medidas"
          />
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import ProdutoListaComparativa from "./ProdutoListaComparativa.vue";

export default {
  name: "CarouselSimilarProducts",
  components: { VueSlickCarousel, ProdutoListaComparativa },
  props: ["products"],
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: 5,
        slidesToShow: 6,
        slidesToScroll: 3,
        speed: 500,
        initialSlide: 0,
        dots: true,
        arrows: true,
        dotsClass: "slick-dots costum-dot-class",
        responsive: [
          {
            breakpoint: 1800,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
              slidesToShow: 4,
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
              centerPadding: 5,
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
              centerPadding: 5,
              slidesToShow: 4,
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
              centerPadding: 5,
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
              centerPadding: 5,
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
              centerPadding: 5,
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
.carouselComparativo {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .titulo {
    & h1 {
      font-size: 1.5625rem;
      line-height: 1.36;
      letter-spacing: -0.02625rem;
      font-weight: 700;
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
      &:hover .slick-prev::before {
        opacity: 1 !important;
      }
      & .slick-prev::before {
        opacity: 0 !important;
      }

      & .produto-carousel {
        width: 230px !important;
        height: 100% !important;

        @media (max-width: 550px) {
          width: 400px !important;
        }
        @media (max-width: 480px) {
          width: 350px !important;
        }
        @media (max-width: 420px) {
          width: 320px !important;
        }

        @media (max-width: 380px) {
          width: 300px !important;
        }
        @media (max-width: 350px) {
          width: 280px !important;
        }
        @media (max-width: 330px) {
          width: 260px !important;
        }
      }

      & .slick-prev {
        height: 100%;
        left: 0;
        z-index: 1;
        &::before {
          font-size: 30px;
          color: black !important;
          position: absolute;
          left: 0;
          top: 10%;
        }
      }
      & .slick-next {
        height: 100%;
        right: 0;
        z-index: 0;
        &::before {
          font-size: 30px;
          color: black !important;
          position: absolute;
          right: 0;
          top: 10%;
        }
      }
    }
  }
}
</style>
