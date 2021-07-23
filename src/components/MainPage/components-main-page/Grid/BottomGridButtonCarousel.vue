<template>
  <div class="bottomGridButtonCarousel">
    <VueSlickCarousel
      class="bottom-grid-carousel-component"
      v-bind="settings"
      :arrows="true"
      :dots="false"
    >
      <div><b-button class="btn" variant="light">Quarto</b-button></div>
      <div><b-button class="btn" variant="light">Sala</b-button></div>
      <div><b-button class="btn" variant="light">Cozinha</b-button></div>
      <div><b-button class="btn" variant="light">Escritório</b-button></div>
      <div><b-button class="btn" variant="light">Exterior</b-button></div>
      <div><b-button class="btn" variant="light">Casa de banho</b-button></div>
      <div>
        <b-button class="btn" variant="light"
          >Quarto de Criança e Bebé</b-button
        >
      </div>
      <div>
        <b-button class="btn" variant="light">Espaço de refeição</b-button>
      </div>
      <div><b-button class="btn" variant="light">Entrada</b-button></div>
      <div><b-button class="btn" variant="light">Acessórios</b-button></div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel },
  data: function() {
    return {
      settings: {
        infinite: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 2,
        initialSlide: 0,
        dots: true,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              initialSlide: 0,
              infinite: false,
              dots: false,
              arrows: true,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
              dots: false,
              arrows: true,
            },
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
.bottomGridButtonCarousel {
  & .bottom-grid-carousel-component {
    & .btn {
      border-radius: 64px;
      font-size: 0.55rem;
      font-weight: bold;
      height: 2.5rem;
      width: 9rem;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      &:hover {
        background-color: #e0e0e0;
        border: 1px solid #e0e0e0;
      }
    }
    & .slick-prev {
      left: 0;
      z-index: 1;
      &::before {
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
        color: black !important;
        position: absolute;
        right: 0;
        top: 0;
      }
    }
  }
}
</style>
