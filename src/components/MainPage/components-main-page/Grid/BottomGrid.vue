<template>
  <div class="bottomGrid">
    <div class="row-1">
      <div class="row-3">
        <h1><strong>Mais ideias e inspiração</strong></h1>
      </div>
      <div class="row-4">
        <BottomGridButtonCarousel />
      </div>
    </div>
    <div class="row-2">
      <b-container class="bv-product-row">
        <b-col class="col-6">
          <b-row class="row-5"><Produto /></b-row>
          <b-row class="row-6"><Produto /></b-row>
        </b-col>
        <b-col class="col-7">
          <b-row class="row-7"><Produto /></b-row>
          <b-row class="row-8"><Produto /></b-row>
        </b-col>
        <b-col class="col-8">
          <b-row class="row-9"><Produto /></b-row>
          <b-row class="row-12"><Produto /></b-row>
        </b-col>
      </b-container>
    </div>
    <div class="row-11">
      <b-button class="expand-grid" variant="dark">Aderir agora</b-button>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";
import BottomGridButtonCarousel from "./BottomGridButtonCarousel.vue";
export default {
  components: { Produto, BottomGridButtonCarousel },
};
</script>

<style lang="scss">
.bottomGrid {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 !important;
  & .row-1 {
    & .row-3 {
      justify-content: flex-start;
      margin-bottom: 1rem;

      & h1 {
        font-size: 1.125rem;
        text-align: left;
      }
    }

    & .row-4 {
      width: 100%;
    }
  }

  & .row-2 {
    padding: 0;

    & .bv-product-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100% !important;
      min-height: 60rem;
      padding: 0 !important;

      @media (max-width: 768px) {
        flex-direction: column !important;
        width: 100% !important;
      }

      & .col-6 {
        display: flex;
        flex-direction: column;
        width: 33% !important;
        height: 70rem !important;

        @media (max-width: 768px) {
          height: 80rem !important;
          margin-bottom: 1rem !important;
          width: 100% !important;
        }
        @media (max-width: 380px) {
          width: 100% !important;
          height: 40rem !important;
          margin-bottom: 1rem !important;
        }

        & .row-5 {
          height: 40%;
          margin-bottom: 1rem !important;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 1rem !important;
          }

          & .produto {
            background-color: red;
            width: 100%;
            height: 100%;
          }
        }
        & .row-6 {
          height: 60%;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50%;
          }

          & .produto {
            background-color: blue;
            width: 100%;
            height: 100%;
          }
        }
      }
      & .col-7 {
        margin: 0 1rem 0 1rem;
        display: flex;
        flex-direction: column;
        width: 33% !important;
        height: 70rem !important;

        @media (max-width: 768px) {
          width: 100% !important;
          height: 80rem !important;
          margin: 0 0 1rem 0 !important;
        }
        @media (max-width: 380px) {
          width: 100% !important;
          height: 40rem !important;
          margin-bottom: 1rem !important;
        }

        & .row-7 {
          height: 60%;
          margin-bottom: 1rem !important;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 1rem !important;
          }

          & .produto {
            background-color: green;
            width: 100%;
            height: 100%;
          }
        }
        & .row-8 {
          height: 40%;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50%;
          }

          & .produto {
            background-color: yellow;
            width: 100%;
            height: 100%;
          }
        }
      }
      & .col-8 {
        display: flex;
        flex-direction: column;
        width: 33% !important;
        height: 70rem !important;

        @media (max-width: 768px) {
          width: 100% !important;
          height: 80rem !important;
          margin-bottom: 0.5rem !important;
        }
        @media (max-width: 380px) {
          width: 100% !important;
          height: 40rem !important;
          margin-bottom: 1rem !important;
        }

        & .row-9 {
          height: 50%;
          display: flex;
          justify-content: center;
          margin-bottom: 1rem !important;

          @media (max-width: 768px) {
            height: 50%;
            margin-bottom: 1rem !important;
          }

          & .produto {
            background-color: magenta;
            width: 100%;
            height: 100%;
          }
        }
        & .row-12 {
          height: 50%;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50%;
          }

          & .produto {
            background-color: aqua;
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }

  & .row-11 {
    display: flex;
    justify-content: center;
    align-items: center;
    & .expand-grid {
      border-radius: 20px !important;
      font-size: 0.75rem !important;
      font-weight: 700 !important;
      margin: 1rem auto 1rem auto;

      &:hover {
        background-color: #303030;
      }
    }
  }
}
</style>
