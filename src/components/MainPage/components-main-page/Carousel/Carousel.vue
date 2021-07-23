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
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              infinite: false,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              infinite: false,
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
.carousel {
  width: 100% !important;
  margin: 4rem 0 4rem 0 !important;
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

        & .imagem {
          padding: 0.5rem;
          height: 250px;

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
