<template>
  <div class="carousel-pp">
    <div class="titulo">
      <h1>Outros também viram</h1>
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
              productImage="src\assets\images\storage.jpg"
              name="HAUGA"
              type="Roupeiro aberto c/3 gavetas 70x199 cm"
              imageSrc="https://picsum.photos/300?random=4"
              normalPrice="149"
              currentPrice="119"
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
              rating="4"
              avaliacoes="5"
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
import Product from "../../MainPage/components-main-page/Product/Product.vue";

export default {
  name: "MyComponent",
  components: { VueSlickCarousel, Product },
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
            breakpoint: 800,
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
.carousel-pp {
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
        width: 350px;
        height: 550px;

        @media (max-width: 800px) {
          height: 400px !important;
          width: 320px !important;
        }
        @media (max-width: 750px) {
          height: 400px !important;
          width: 300px !important;
        }
        @media (max-width: 670px) {
          height: 400px !important;
          width: 400px !important;
        }
        @media (max-width: 500px) {
          height: 350px !important;
          width: 310px !important;
        }

        @media (max-width: 440px) {
          height: 400px !important;
          width: 370px !important;
        }
        @media (max-width: 430px) {
          height: 400px !important;
          width: 360px !important;
        }
        @media (max-width: 420px) {
          height: 400px !important;
          width: 350px !important;
        }
        @media (max-width: 410px) {
          height: 400px !important;
          width: 340px !important;
        }
        @media (max-width: 400px) {
          height: 350px !important;
          width: 310px !important;
          padding: 0;
        }
        @media (max-width: 360px) {
          height: 350px !important;
          width: 300px !important;
        }
        @media (max-width: 350px) {
          height: 350px !important;
          width: 290px !important;
        }
        @media (max-width: 340px) {
          height: 350px !important;
          width: 280px !important;
        }
        @media (max-width: 330px) {
          height: 350px !important;
          width: 270px !important;
        }
        @media (max-width: 320px) {
          height: 350px !important;
          width: 260px !important;
        }
        @media (max-width: 310px) {
          height: 350px !important;
          width: 250px !important;
        }
        @media (max-width: 300px) {
          height: 350px !important;
          width: 240px !important;
        }

        & .imagem {
          width: 350px;
          height: 600px;

          @media (max-width: 800px) {
            height: 400px;
            width: 320px;
            padding: 0;
          }

          @media (max-width: 750px) {
            height: 400px !important;
            width: 300px !important;
          }
          @media (max-width: 670px) {
            height: 400px !important;
            width: 400px !important;
          }
          @media (max-width: 440px) {
            height: 400px !important;
            width: 370px !important;
          }
          @media (max-width: 430px) {
            height: 400px !important;
            width: 360px !important;
          }
          @media (max-width: 420px) {
            height: 400px !important;
            width: 350px !important;
          }
          @media (max-width: 410px) {
            height: 400px !important;
            width: 340px !important;
          }
          @media (max-width: 400px) {
            height: 350px !important;
            width: 310px !important;
            padding: 0;
          }
          @media (max-width: 380px) {
            height: 350px !important;
            width: 310px !important;
          }
          @media (max-width: 360px) {
            height: 350px !important;
            width: 300px !important;
          }
          @media (max-width: 350px) {
            height: 350px !important;
            width: 290px !important;
          }
          @media (max-width: 340px) {
            height: 350px !important;
            width: 280px !important;
          }
          @media (max-width: 330px) {
            height: 350px !important;
            width: 270px !important;
          }
          @media (max-width: 320px) {
            height: 350px !important;
            width: 260px !important;
          }
          @media (max-width: 310px) {
            height: 350px !important;
            width: 250px !important;
          }
          @media (max-width: 300px) {
            height: 350px !important;
            width: 240px !important;
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
