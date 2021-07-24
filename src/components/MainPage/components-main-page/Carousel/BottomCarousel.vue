<template>
  <div class="bottomCarousel">
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
          <div class="carousel-info"><CarouselInfo /></div>
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
import CarouselInfo from "./CarouseInfo.vue";

import imageCarousel1 from "../../../../assets/images/outside-lounge.jpg";
import imageCarousel2 from "../../../../assets/images/storage.jpg";
import imageCarousel3 from "../../../../assets/images/vase.jpg";
import imageCarousel4 from "../../../../assets/images/window-blinds.jpg";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, CarouselInfo },
  data: function() {
    return {
      imageCarousel1: imageCarousel1,
      imageCarousel2: imageCarousel2,
      imageCarousel3: imageCarousel3,
      imageCarousel4: imageCarousel4,

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
            breakpoint: 770,
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
.bottomCarousel {
  width: 100% !important;
  margin: 0 !important;
  display: flex;
  flex-direction: column;

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
        width: 235px !important;
        height: 300px !important;

        @media (max-width: 768px) {
          width: 235px !important;
          height: 400px !important;
        }
        @media (max-width: 380px) {
          width: 235px !important;
          height: 350px !important;
        }

        & .carousel-info {
          width: 235px;
          height: 310px;

          @media (max-width: 768px) {
            width: 340px;
            height: 400px;
            padding: 0.5rem 1rem 0.5rem 0;
          }
          @media (max-width: 380px) {
            height: 350px !important;
            width: 300px;
            padding: 0;
          }

          & .carouselInfo {
            width: 100%;
            height: 100%;
          }
        }

        & .imagem {
          height: 300px;

          @media (max-width: 768px) {
            height: 400px;
            width: 340px;
            padding: 0.5rem 1rem 0.5rem 0;
          }
          @media (max-width: 380px) {
            height: 350px;
            padding: 0 0 0 0;
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
