<template>
  <div class="carousel">
    <div class="titulo">
      <h1>Informação importante</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div class="carousel-item-1">
          <InfoImpComponent
            :title="carousel[0].title"
            :body="carousel[0].body"
            :infoUrl="carousel[0].infoUrl"
            :imgCarouselImpSrc="carousel[0].imgCarouselImpSrc"
          />
        </div>
        <div class="carousel-item-2">
          <InfoImpComponent
            :title="carousel[1].title"
            :body="carousel[1].body"
            :infoUrl="carousel[1].infoUrl"
            :imgCarouselImpSrc="carousel[1].imgCarouselImpSrc"
          />
        </div>
        <div class="carousel-item-3">
          <InfoImpComponent
            :title="carousel[2].title"
            :body="carousel[2].body"
            :infoUrl="carousel[2].infoUrl"
            :imgCarouselImpSrc="carousel[2].imgCarouselImpSrc"
          />
        </div>
        <div class="carousel-item-4">
          <InfoImpComponent
            :title="carousel[3].title"
            :body="carousel[3].body"
            :infoUrl="carousel[3].infoUrl"
            :imgCarouselImpSrc="carousel[3].imgCarouselImpSrc"
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
import InfoImpComponent from "../Info/InfoImpComponent.vue";

export default {
  name: "MyComponent",
  props: ["carousel"],
  components: { VueSlickCarousel, InfoImpComponent },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: "5",
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 500,
        initialSlide: 1,
        dots: true,
        arrows: true,
        dotsClass: "slick-dots costum-dot-class",
        responsive: [
          {
            breakpoint: 1450,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 2,
              slidesToScroll: 3,
              initialSlide: 0,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 800,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 1,
              slidesToScroll: 3,
              initialSlide: 0,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 650,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: "5",
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
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
      padding: 0 !important;

      & .slick-track.slick-center[data-v-e4caeaf8] {
        margin: 0 !important;
      }
      & .carousel-item {
        height: 100% !important;
        width: 100% !important;

        &-1 {
          padding-right: 1rem !important;
        }
        &-2 {
          padding-right: 1rem !important;
        }
        &-3 {
          padding-right: 1rem !important;
        }
        &-4 {
          padding-right: 1rem !important;
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
