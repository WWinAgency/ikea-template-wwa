<template>
  <div class="carousel-important">
    <h1>Os mais vistos</h1>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div class="carousel-item-1">
          <div class="componente-carousel">
            <InfoImpComponent
              imgSrc="imageCarousel3"
              title="Medidas de segurança"
              body="Saiba mais sobre as nossas precauções e como pode fazer a sua parte"
            />
          </div>
        </div>
        <div class="carousel-item-2">
          <div class="componente-carousel">
            <InfoImpComponent
              imgSrc="imageCarousel3"
              title="Comprou algum prato, taça ou caneca HEROISK ou TALRIKA? "
              body="A IKEA pede a todos os clientes que tenham comprado pratos, taças ou canecas HEROISK e/ou TALKIRA para pararem de os utilizar e os devolverem numa loja IKEA, onde serão reembolsados na totalidade"
            />
          </div>
        </div>
        <div class="carousel-item-3">
          <div class="componente-carousel">
            <InfoImpComponent
              imgSrc="imageCarousel3"
              title="Bem seguro! Juntos, criamos casas mais seguras"
              body=""
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
import InfoImpComponent from "./InfoImpComponent.vue";

import imageCarousel1 from "../../../../assets/images/outside-lounge.jpg";
import imageCarousel2 from "../../../../assets/images/storage.jpg";
import imageCarousel3 from "../../../../assets/images/vase.jpg";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, InfoImpComponent },
  data: function() {
    return {
      imageCarousel1: imageCarousel1,
      imageCarousel2: imageCarousel2,
      imageCarousel3: imageCarousel3,

      settings: {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: false,
              dots: true,
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
.carousel-important {
  width: 100%;
  margin: 4rem 0 4rem 0 !important;

  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
  margin: 4rem auto;
  & h1 {
    font-size: 1.325rem;
    font-weight: bold;
    line-height: 1.44444rem;
  }
  & .carousel-container {
    width: 100%;

    & .slick-prev::before,
    .slick-next::before {
      color: black !important;
    }
    & .carousel-component {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      margin: auto;
      & .carousel-item-1 {
        padding: 0 0.5rem 0 0;
      }
      & .carousel-item-2 {
        padding: 0 0.5rem 0 0;

        @media (max-width: 768px) {
          padding: 0 0.5rem 0 0;
        }
      }
      & .carousel-item-3 {
        @media (max-width: 768px) {
          padding: 0 0.5rem 0 0;
        }
      }
    }
  }
}
</style>
