<template>
  <div class="carouselDeProdutos">
    <div class="titulo">
      <h1>{{ titulo }}</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
        v-for="(product, index) in products"
        :key="index"
      >
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[0].name"
              :type="carousel[0].type"
              :utility="carousel[0].utility"
              :imageSrc="carousel[0].imageSrc"
              :normalPrice="carousel[0].normalPrice"
              :currentPrice="carousel[0].currentPrice"
              :rating="carousel[0].rating"
              :avaliacoes="carousel[0].avaliacoes"
              :link="carousel[0].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[1].name"
              :type="carousel[1].type"
              :utility="carousel[1].utility"
              :imageSrc="carousel[1].imageSrc"
              :normalPrice="carousel[1].normalPrice"
              :currentPrice="carousel[1].currentPrice"
              :rating="carousel[1].rating"
              :avaliacoes="carousel[1].avaliacoes"
              :link="carousel[1].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[2].name"
              :type="carousel[2].type"
              :utility="carousel[2].utility"
              :imageSrc="carousel[2].imageSrc"
              :normalPrice="carousel[2].normalPrice"
              :currentPrice="carousel[2].currentPrice"
              :rating="carousel[2].rating"
              :avaliacoes="carousel[2].avaliacoes"
              :link="carousel[2].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[3].name"
              :type="carousel[3].type"
              :utility="carousel[3].utility"
              :imageSrc="carousel[3].imageSrc"
              :normalPrice="carousel[3].normalPrice"
              :currentPrice="carousel[3].currentPrice"
              :rating="carousel[3].rating"
              :avaliacoes="carousel[3].avaliacoes"
              :link="carousel[3].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[4].name"
              :type="carousel[4].type"
              :utility="carousel[4].utility"
              :imageSrc="carousel[4].imageSrc"
              :normalPrice="carousel[4].normalPrice"
              :currentPrice="carousel[4].currentPrice"
              :rating="carousel[4].rating"
              :avaliacoes="carousel[4].avaliacoes"
              :link="carousel[4].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[5].name"
              :type="carousel[5].type"
              :utility="carousel[5].utility"
              :imageSrc="carousel[5].imageSrc"
              :normalPrice="carousel[5].normalPrice"
              :currentPrice="carousel[5].currentPrice"
              :rating="carousel[5].rating"
              :avaliacoes="carousel[5].avaliacoes"
              :link="carousel[5].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[6].name"
              :type="carousel[6].type"
              :utility="carousel[6].utility"
              :imageSrc="carousel[6].imageSrc"
              :normalPrice="carousel[6].normalPrice"
              :currentPrice="carousel[6].currentPrice"
              :rating="carousel[6].rating"
              :avaliacoes="carousel[6].avaliacoes"
              :link="carousel[6].link"
            />
          </div>
        </div>
        <div class="carousel-item">
          <div class="imagem">
            <Product
              :name="carousel[7].name"
              :type="carousel[7].type"
              :utility="carousel[7].utility"
              :imageSrc="carousel[7].imageSrc"
              :normalPrice="carousel[7].normalPrice"
              :currentPrice="carousel[7].currentPrice"
              :rating="carousel[7].rating"
              :avaliacoes="carousel[7].avaliacoes"
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
import Product from "../../../ComponentesGlobais/Showcases/Product.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, Product },
  props: {
    carousel: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
  },
  titulo: String,
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
          {
            breakpoint: 750,
            settings: {
              infinite: true,
              centerMode: true,
              centerPadding: 5,
              slidesToShow: 1,
              slidesToScroll: 2,
              initialSlide: 1,
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
        height: 600px;

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
