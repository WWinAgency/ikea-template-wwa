<template>
  <div class="mainPageBottomGrid">
    <div class="row-1">
      <div class="text-row-1">
        <h1>
          <strong>{{ titulo }}</strong>
        </h1>
      </div>
      <div class="text-row-2">
        <ButtonCarousel :buttons="buttonsGrid" />
      </div>
    </div>
    <div class="row-2">
      <div class="grid-container">
        <div class="grid-container-left">
          <div class="grid-col-1">
            <div class="grid-row-1">
              <Produto :products="col1Products" :imageSrc="imageSrc1" />
            </div>
          </div>
        </div>
        <div class="grid-container-right">
          <div class="grid-col-2">
            <div class="grid-row-2">
              <Produto :products="col2Products" :imageSrc="imageSrc2" />
            </div>
            <div class="grid-row-3">
              <Produto :products="col3Products" :imageSrc="imageSrc3" />
            </div>
          </div>
          <div class="grid-col-3">
            <div class="grid-row-4">
              <ProdutoMobile :products="col4Products" :imageSrc="imageSrc4" />
            </div>
            <div class="grid-row-5">
              <ProdutoMobile :products="col5Products" :imageSrc="imageSrc5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";
import ProdutoMobile from "./ProdutoMobile.vue";
import ButtonCarousel from "../Carousel/ButtonCarousel.vue";

export default {
  data() {
    return {
      imageSrc1: "https://picsum.photos/1000/960?random=1",
      imageSrc2: "https://picsum.photos/1000/960?random=2",
      imageSrc3: "https://picsum.photos/1000/960?random=3",
      imageSrc4: "https://picsum.photos/1000/960?random=4",
      imageSrc5: "https://picsum.photos/1000/960?random=5",

      col1Products: [
        {
          name: "KRUX",
          id: "krux2",
          type: "Candeeiro LED de secretária",
          currentPrice: 35,
          leftPercentage: 10,
          topPercentage: 10,
        },
        {
          name: "MÅLA",
          id: "mala2",
          type: "Conj. modelo cidade cartão",
          currentPrice: 4,
          leftPercentage: 60,
          topPercentage: 40,
        },
        {
          name: "FLISAT",
          id: "flisat2",
          type: "Banco p/criança",
          currentPrice: 15,
          leftPercentage: 30,
          topPercentage: 70,
        },
      ],
      col2Products: [
        {
          name: "HAUGA",
          type: "Roupeiro aberto",
          id: "hauga2",
          currentPrice: 112,
          leftPercentage: 10,
          topPercentage: 10,
        },
        {
          name: "HUSARÖ",
          id: "husaro2",
          type: "Poltrona",
          currentPrice: 119,
          leftPercentage: 60,
          topPercentage: 40,
        },
      ],
      col3Products: [
        {
          name: "LINNEBÄCK",
          id: "linneback2",
          type: "Poltrona",
          currentPrice: 39,
          leftPercentage: 60,
          topPercentage: 10,
        },
        {
          name: "SKOGSKLÖVER",
          id: "skogsklover2",
          type: "Estore de correr",
          currentPrice: 4,
          leftPercentage: 5,
          topPercentage: 60,
        },
      ],
      col4Products: [
        {
          name: "FEJKA",
          id: "fejka2",
          type: "Planta Artificial em vaso",
          currentPrice: 4,
          leftPercentage: 10,
          topPercentage: 10,
        },
        {
          name: "BODARP",
          id: "bodarp2",
          type: "Porta",
          currentPrice: 30,
          leftPercentage: 60,
          topPercentage: 40,
        },
        {
          name: "TRANGET",
          id: "tranget2",
          type: "Tapete, tecelagem plana",
          currentPrice: 199,
          leftPercentage: 30,
          topPercentage: 70,
        },
      ],
      col5Products: [
        {
          name: "PELARBOJ",
          id: "pelarjob2",
          type: "Candeeiro LED de mesa",
          currentPrice: 15,
          leftPercentage: 60,
          topPercentage: 10,
        },
        {
          name: "BJÖRKÅSEN",
          id: "bjorkasen2",
          type: "Suporte p/portátil",
          currentPrice: 19.99,
          leftPercentage: 5,
          topPercentage: 60,
        },
      ],
    };
  },
  props: {
    titulo: {
      type: String,
      required: true,
    },
    buttonsGrid: {
      type: Array,
      required: true,
    },
  },

  components: { Produto, ProdutoMobile, ButtonCarousel },
};
</script>

<style lang="scss">
.mainPageBottomGrid {
  flex-direction: column;
  width: 100%;
  margin: 0 !important;
  & .row-1 {
    margin-bottom: 2rem !important;
    @media (max-with: 400px) {
      margin-left: 1rem !important;
    }
    & .text-row-1 {
      justify-content: flex-start;
      margin-bottom: 0.5rem;

      & h1 {
        font-size: 1.5625rem;
        line-height: 1.36rem;
        text-align: left;
      }
    }

    & .text-row-2 {
      display: flex;
      flex-direction: row;
      width: 100%;

      @media (max-width: 800px) {
        flex-direction: column;
      }

      & .col-1 {
        width: 80%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 400px) {
          margin-bottom: 1.5rem;
        }
        & h2 {
          font-size: 0.875rem;
          line-height: 1.36rem;
          margin: 0;
        }
      }

      & .col-2 {
        display: flex;
        justify-content: flex-end;
        width: 20%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 800px) {
          margin-top: 1rem;
          padding: 0 !important;
          justify-content: flex-start;
          width: 20rem;
        }

        @media (max-width: 400px) {
          width: 100%;
          justify-content: flex-start;
        }

        & .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          height: 2.5rem;
          background-color: #f5f5f5;
          border: 1px solid #f5f5f5;
          border-radius: 64px;
          font-size: 0.75rem;

          &:hover {
            background-color: #e0e0e0;
            border: 1px solid #e0e0e0;
          }
        }
      }
    }
  }

  & .row-2 {
    height: 100%;
    width: 100% !important;
    margin: 0 !important;

    & .grid-container {
      display: flex;
      flex-direction: row;
      height: 70rem;

      @media (max-width: 1050px) {
        flex-direction: column;
        width: 100%;
        height: 90rem;
      }

      & .grid-container-left {
        height: 100%;
        width: 33%;

        @media (max-width: 1050px) {
          height: 40%;
          width: 100%;
        }
        & .grid-col-1 {
          display: flex;
          flex-direction: column;
          height: 100%;

          @media (max-width: 1050px) {
            flex-direction: row;
            width: 100%;
          }
          & .grid-row-1 {
            height: 100%;
            padding: 0 0.5rem 0 0;

            @media (max-width: 1500px) {
              padding: 0 0.5rem 0 0;
            }
            @media (max-width: 1050px) {
              padding: 0;
              width: 100%;
            }
            @media (max-width: 400px) {
            }
          }
        }
      }

      & .grid-container-right {
        display: flex;
        flex-direction: row;
        width: 66%;

        @media (max-width: 1050px) {
          flex-direction: row;
          height: 60%;
          width: 100%;
        }
        & .grid-col-2 {
          display: flex;
          flex-direction: column;
          width: 50%;

          @media (max-width: 1050px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-2 {
            padding: 0 0.5rem 0.5rem 0.5rem;
            height: 40%;

            @media (max-width: 1500px) {
              padding: 0 0.5rem 0.5rem 0.5rem;
            }
            @media (max-width: 1050px) {
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 400px) {
            }
          }
          & .grid-row-3 {
            padding: 0.5rem 0.5rem 0 0.5rem;
            height: 60%;

            @media (max-width: 1500px) {
              padding: 0.5 0.5rem 0 0.5rem;
            }
            @media (max-width: 1050px) {
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 400px) {
            }
          }
        }
        & .grid-col-3 {
          display: flex;
          flex-direction: column;
          width: 50%;

          @media (max-width: 1050px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-4 {
            padding: 0 0 0.5rem 0.5rem;
            height: 60%;

            @media (max-width: 1500px) {
              padding: 0 0 0.5rem 0.5rem;
            }
            @media (max-width: 1050px) {
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 400px) {
            }
          }
          & .grid-row-5 {
            height: 40%;
            padding: 0.5rem 0 0 0.5rem;

            @media (max-width: 1500px) {
              padding: 0.5rem 0 0 0.5rem;
            }

            @media (max-width: 1050px) {
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 400px) {
            }
          }
        }
      }
    }
  }
}
</style>
