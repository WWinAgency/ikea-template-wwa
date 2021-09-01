<template>
  <div class="miniCarousel">
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
          v-for="(product, index) in carousel"
          :key="index"
        >
          <a :href="'/pagina-de-produto/' + product.link" class="imagem">
            <img :src="product.imagem" />
          </a>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  props: {
    carousel: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    link: {},
  },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: "5",
        slidesToShow: 11,
        slidesToScroll: 5,
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
              slidesToShow: 10,
              slidesToScroll: 6,
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
              slidesToShow: 9,
              slidesToScroll: 7,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 1200,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 8,
              slidesToScroll: 8,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 990,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 7,
              slidesToScroll: 9,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 880,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 6,
              slidesToScroll: 10,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 750,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 5,
              slidesToScroll: 11,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 630,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 4,
              slidesToScroll: 12,
              initialSlide: 1,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 510,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 3,
              slidesToScroll: 13,
              initialSlide: 1,
              dots: false,
              arrows: false,
            },
          },

          {
            breakpoint: 370,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 2,
              slidesToScroll: 14,
              initialSlide: 0,
              dots: false,
              arrows: false,
            },
          },
          {
            breakpoint: 250,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 1,
              slidesToScroll: 15,
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
.miniCarousel {
  width: 100% !important;
  margin: 2rem 0 !important;
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
        width: 105px !important;
        height: 105px !important;

        & .imagem {
          width: 105px;
          height: 105px;
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
