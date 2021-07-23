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
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
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
      font-size: 1.325rem;
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
        width: 200px;
        height: 250px;

        @media (max-width: 768px) {
          height: 350px !important;
        }

        & .imagem {
          padding: 0.5rem;
          height: 250px;

          @media (max-width: 768px) {
            height: 350px !important;
          }

          & img {
            width: 100%;
            height: 100%;
          }
        }
        & .carousel-info {
          padding: 0.5rem;
          height: 250px;

          @media (max-width: 768px) {
            height: 350px !important;
          }

          & .carouselInfo {
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
