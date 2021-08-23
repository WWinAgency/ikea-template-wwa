<template>
  <div class="buttonCarousel">
    <VueSlickCarousel
      class="bottom-grid-carousel-component"
      v-bind="settings"
      :arrows="false"
      :dots="false"
    >
      <div>
        <b-button class="btn-1" variant="light">{{
          buttons[0].label
        }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[1].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[2].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[3].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[4].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[5].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[6].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[7].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[8].label }}</b-button>
      </div>
      <div>
        <b-button class="btn" variant="light">{{ buttons[9].label }}</b-button>
      </div>
    </VueSlickCarousel>
  </div>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "ButtonCarousel",
  components: { VueSlickCarousel },
  props: ["buttons"],
  data: function() {
    return {
      settings: {
        infinite: false,
        centerMode: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
          {
            breakpoint: 770,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
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
.buttonCarousel {
  margin: 0 !important;
  padding: 0 !important;
  width: 100%;
  & .bottom-grid-carousel-component {
    & .btn {
      border-radius: 64px;
      font-size: 100%;
      font-weight: bold;
      height: 2.5rem;
      line-height: 1.5;
      min-width: 5rem;
      margin-left: 0.75rem !important;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      &:hover {
        background-color: #e0e0e0;
        border: 1px solid #e0e0e0;
      }
    }

    & .btn-1 {
      border-radius: 64px;
      font-size: 100%;
      font-weight: bold;
      height: 2.5rem;
      line-height: 1.5;
      min-width: 5rem;
      margin-left: 0.75rem !important;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
      &:hover {
        background-color: #e0e0e0;
        border: 1px solid #e0e0e0;
      }
      margin-left: 0 !important;

      @media (max-width: 768px) {
        margin-left: 1rem !important;
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
