<template>
  <div class="carouselSimilarProducts">
    <div class="titulo">
      <h1>Similar Products</h1>
    </div>
    <div class="carousel-container">
      <VueSlickCarousel
        class="carousel-component"
        v-bind="settings"
        :arrows="true"
        :dots="false"
      >
        <div
          class="produto-carousel"
          v-for="(product, index) in products"
          :key="index"
        >
          <div class="produtoSimilar">
            <div class="product-body">
              <div class="product-image">
                <img :src="product.imageSrc" />
              </div>
              <div class="product-description">
                <a class="nome" :href="'pagina-de-produto/' + product.link">{{
                  product.name
                }}</a>
                <p class="tipo">{{ product.type }}</p>
                <p class="utilidade">{{ product.utility }}</p>
                <div class="precoAtual">
                  <h1>{{ product.currentPrice }}</h1>
                  <h2>€ /ud</h2>
                </div>
                <div class="rating-stars">
                  <div class="rating-row">
                    <div class="rating-col-1">
                      <star-rating
                        v-bind:increment="0.5"
                        v-bind:max-rating="5"
                        inactive-color="white"
                        active-color="black"
                        v-bind:star-size="15"
                        :rating="product.rating"
                        :show-rating="false"
                        read-only="true"
                      >
                      </star-rating>
                    </div>
                    <div class="rating-col-2">
                      <h4>( {{ product.ratingCount }} )</h4>
                    </div>
                  </div>
                </div>
                <div class="adicionar-comparacao">
                  <button
                    @click="handleAddToComparisonList(product)"
                    class="addComparison"
                  >
                    Add to comparison
                  </button>
                </div>
              </div>
            </div>
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
import StarRating from "vue-star-rating";
import axios from "axios";

export default {
  name: "CarouselSimilarProducts",
  components: { VueSlickCarousel, StarRating },
  props: ["products"],
  mounted() {
    const productIds = this.$store.state.ComparisonListModule.comparison;
    const productIdsString = productIds.join();
    axios
      .get("/api/products", { params: { id: productIdsString } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    async handleAddToComparisonList(id) {
      await this.$store.dispatch(
        "ComparisonListModule/addComparisonListItem",
        id
      );
    },
  },
  data: function() {
    return {
      settings: {
        infinite: true,
        centerMode: true,
        centerPadding: 5,
        slidesToShow: 6,
        slidesToScroll: 3,
        speed: 500,
        initialSlide: 3,
        dots: true,
        arrows: true,
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
.carouselSimilarProducts {
  width: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & .titulo {
    & h1 {
      font-size: 1.5625rem;
      line-height: 1.36;
      letter-spacing: -0.02625rem;
      font-weight: 700;
      margin-bottom: 2rem;
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
      &:hover .slick-prev::before {
        opacity: 1 !important;
      }
      & .slick-prev::before {
        opacity: 0 !important;
      }

      & .produto-carousel {
        width: 230px !important;
        height: 600px !important;

        @media (max-width: 550px) {
          width: 400px !important;
        }
        @media (max-width: 480px) {
          width: 350px !important;
        }
        @media (max-width: 420px) {
          width: 320px !important;
        }

        @media (max-width: 380px) {
          width: 300px !important;
        }
        @media (max-width: 350px) {
          width: 280px !important;
        }
        @media (max-width: 330px) {
          width: 260px !important;
        }

        .produtoSimilar {
          height: auto;
          width: 100%;

          & .row {
            margin: 0 0 0.2rem 0;
            display: inline-block;
            width: 100%;
            align-items: center;
            & .col-1 {
              float: left;
              padding-left: 0;
              width: auto;
              & .remove-button {
                background-color: white;
                border: none;
                padding: 0 0.5rem;
                height: 2rem;
                width: 2rem;
                border-radius: 64px;
                display: flex;
                justify-content: center;
                align-items: center;

                &:hover {
                  background-color: #e8e8e8;
                }
              }
            }
            & .col-2 {
              float: right;
              padding-right: 0;
              width: auto;
              & .favourite-button {
                background-color: white;
                border: none;

                &:hover {
                }

                & .heart {
                  color: #989898 !important;

                  &:hover {
                    color: black !important;
                  }
                }
              }
            }
          }

          & .product-body {
            width: 100%;
            & .product-image {
              & img {
                width: 100%;
              }
            }

            & .product-description {
              width: 100%;
              padding: 1rem 0 1rem 0;
              & .nome {
                color: black;
                font-size: 1.1rem;
                line-height: 1.42857;
                text-decoration: none;
                text-transform: uppercase;
                font-weight: 700;

                &:hover {
                  text-decoration: underline;
                }
              }

              & .tipo {
                font-size: 1rem;
                line-height: 1.42857;
                margin-bottom: 0.1rem;
              }

              & .utilidade {
                font-size: 1rem;
                line-height: 1.42857;
                margin-bottom: 0.5rem;
              }

              & .precoAtual {
                display: flex;
                flex-direction: row;

                & h1 {
                  font-size: 1.5rem;
                  margin-right: 0.25rem;
                  font-weight: 700;
                }

                & h2 {
                  font-size: 0.6875rem;
                  margin-right: 0.2rem !important;
                  font-weight: 700;
                }
              }

              & .rating-stars {
                & .rating-row {
                  display: ruby;
                  list-style: none;
                  padding-left: 0;
                  & .rating-col-1 {
                    margin-right: 1rem;
                  }
                  & .rating-col-2 {
                    & h4 {
                      font-size: 0.875rem;
                    }
                  }
                }
              }

              & .adicionar-comparacao {
                margin-top: 2rem;
                & .addComparison {
                  width: 100%;
                  background-color: black;
                  color: white;
                  font-size: 0.875rem;
                  line-height: 1.42857;
                  font-weight: 700;
                  border-radius: 64px;
                  text-align: center;
                  height: 3.5rem;
                  padding: 0 2rem;
                  border: 1px solid black;
                }
              }
            }
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
