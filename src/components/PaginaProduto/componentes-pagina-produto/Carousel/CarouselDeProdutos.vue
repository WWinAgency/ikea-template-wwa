<template>
  <div class="carouselDeProdutos">
    <div class="titulo">
      <h1>{{ tituloCarousel }}</h1>
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
            <Product
              productImage="src\assets\images\vase.jpg"
              name="FEJKA"
              type="Planta Artificial em vaso, 9cm"
              imageSrc="https://picsum.photos/300?random=1"
              normalPrice="4,50"
              currentPrice="4"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\window-blinds.jpg"
              name="SKOGSKLÖVER"
              type="Estore de correr 120x195 cm"
              imageSrc="https://picsum.photos/300?random=2"
              normalPrice="35"
              currentPrice="29"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\chair.jpg"
              name="HUSARÖ"
              type="Poltrona, exterior"
              imageSrc="https://picsum.photos/300?random=3"
              normalPrice="99"
              currentPrice="85"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\storage.jpg"
              name="HAUGA"
              type="Roupeiro aberto c/3 gavetas 70x199 cm"
              imageSrc="https://picsum.photos/300?random=4"
              normalPrice="149"
              currentPrice="119"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\storage.jpg"
              name="BODARP"
              type="Porta, verde acinzentado 60x80 cm"
              imageSrc="https://picsum.photos/300?random=5"
              normalPrice="50"
              currentPrice="30"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\storage.jpg"
              name="SKYMNINGEN"
              type="Candeeiro suspenso, branco"
              imageSrc="https://picsum.photos/300?random=6"
              normalPrice="79"
              currentPrice="59"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\storage.jpg"
              name="TRANGET"
              type="Tapete, tecelagem plana, feito à mão várias tonalidades azul 170x240 cm"
              imageSrc="https://picsum.photos/300?random=7"
              normalPrice="249"
              currentPrice="199"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              productImage="src\assets\images\storage.jpg"
              name="PELARBOJ"
              type="Candeeiro LED de mesa, multicor"
              imageSrc="https://picsum.photos/300?random=4"
              normalPrice="20"
              currentPrice="15"
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
import Product from "../../../ComponentesGlobais/Showcases/Product.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, Product },
  props: { tituloCarousel: String },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: 5,
        slidesToShow: 4,
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
              slidesToShow: 3,
              slidesToScroll: 2,
              initialSlide: 1,
              dots: false,
              arrows: true,
            },
          },

          {
            breakpoint: 1300,
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
            breakpoint: 820,
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
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.carouselDeProdutos {
  width: 100% !important;
  margin: 2rem 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .titulo {
    margin-bottom: 2rem;

    & h1 {
      font-size: 1.375rem;
      font-weight: 700;
      line-height: 1.4545454545;
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
        width: 350px;
        height: 550px;

        & .imagem {
          width: 350px;
          height: 600px;

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
