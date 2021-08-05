<template>
  <div class="topCarousel">
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
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[0].textoBotao"
              :productImageSrc="carousel[0].productImageSrc"
              :link="carousel[0].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[1].textoBotao"
              :productImageSrc="carousel[1].productImageSrc"
              :link="carousel[1].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[2].textoBotao"
              :productImageSrc="carousel[2].productImageSrc"
              :link="carousel[2].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[3].textoBotao"
              :productImageSrc="carousel[3].productImageSrc"
              :link="carousel[3].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[4].textoBotao"
              :productImageSrc="carousel[4].productImageSrc"
              :link="carousel[4].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[5].textoBotao"
              :productImageSrc="carousel[5].productImageSrc"
              :link="carousel[5].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[6].textoBotao"
              :productImageSrc="carousel[6].productImageSrc"
              :link="carousel[6].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <CarouselProduto
              :textoBotao="carousel[7].textoBotao"
              :productImageSrc="carousel[7].productImageSrc"
              :link="carousel[7].link"
            />
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
import CarouselProduto from "./CarouselProduto.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, CarouselProduto },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    carousel: {
      type: Array,
      required: true,
    },
  },
  data: function() {
    return {
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
.topCarousel {
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
          width: 230px;
          height: 310px;

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

          & .carouselProduto {
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
