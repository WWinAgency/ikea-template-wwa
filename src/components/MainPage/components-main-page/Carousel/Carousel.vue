<template>
  <div class="carousel">
    <div class="titulo">
      <h1>Os mais vistos</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
        <div class="carousel-item">
          <div class="imagem"><img :src="imageCarousel3" /></div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import imageCarousel3 from "../../../../assets/images/vase.jpg";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: function() {
    return {
      imageCarousel3: imageCarousel3,

      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: 5,
        slidesToShow: 6,
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
              centerPadding: 5,
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
            breakpoint: 670,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },

          {
            breakpoint: 480,
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
.carousel {
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
        width: 230px !important;
        height: 310px !important;

        @media (max-width: 800px) {
          height: 400px !important;
          width: 320px !important;
        }
        @media (max-width: 670px) {
          height: 500px !important;
          width: 500px !important;
        }
        @media (max-width: 560px) {
          height: 400px !important;
          width: 400px !important;
        }
        @media (max-width: 500px) {
          height: 350px !important;
          width: 310px !important;
        }

        & .imagem {
          width: 230px;
          height: 310px;

          @media (max-width: 800px) {
            height: 400px;
            width: 320px;
            padding: 0;
          }
          @media (max-width: 670px) {
            height: 100%;
            width: 100%;
          }
          @media (max-width: 380px) {
            height: 350px !important;
            width: 310px !important;
          }

          & img {
            width: 100%;
            height: 100%;
          }
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
