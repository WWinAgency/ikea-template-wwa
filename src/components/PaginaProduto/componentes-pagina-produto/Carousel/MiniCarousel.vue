<template>
  <div class="miniCarousel">
    <div class="titulo">
      <h1>{{ tituloMiniCarousel }}</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=1" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=2" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=3" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=4" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=5" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=6" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=7" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=8" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=9" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=10" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=11" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=12" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=13" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=14" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=15" />
          </a>
        </div>
        <div class="carousel-item">
          <a href="/pagina-produto" class="imagem">
            <img src="https://picsum.photos/105/105?random=16" />
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
  props: { tituloMiniCarousel: String },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: 5,
        slidesToShow: 11,
        slidesToScroll: 1,
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
              slidesToShow: 10,
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
              slidesToShow: 9,
              slidesToScroll: 2,
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
              centerPadding: 5,
              slidesToShow: 8,
              slidesToScroll: 2,
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
              centerPadding: 5,
              slidesToShow: 7,
              slidesToScroll: 2,
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
              centerPadding: 5,
              slidesToShow: 6,
              slidesToScroll: 2,
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
              centerPadding: 5,
              slidesToShow: 5,
              slidesToScroll: 2,
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
              centerPadding: 5,
              slidesToShow: 4,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },
          {
            breakpoint: 510,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: true,
              arrows: true,
            },
          },

          {
            breakpoint: 370,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 0,
              dots: true,
              arrows: false,
            },
          },
          {
            breakpoint: 250,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
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
