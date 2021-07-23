<template>
  <div class="topGrid">
    <div class="row-1">
      <div class="row-3">
        <h1><strong>Há uma vida lá fora</strong></h1>
      </div>
      <div class="row-4">
        <div class="col-1">
          <h2>
            Faça chuva ou faça sol, neste verão desligue do dia a dia e faça uma
            pausa. Os nossos novos produtos vão inspirá-lo a espairecer a mente
            e ligar-se à natureza.
          </h2>
        </div>
        <div class="col-2">
          <b-button class="btn" variant="light">Ver artigos de verão</b-button>
        </div>
      </div>
    </div>
    <div class="row-2">
      <b-container class="bv-product-row-top-grid">
        <b-col class="col-3">
          <b-row class="row-5"><Produto /></b-row>
        </b-col>
        <b-col class="col-4">
          <b-row class="row-6"><Produto /></b-row>
          <b-row class="row-7"><Produto /></b-row>
        </b-col>
        <b-col class="col-5">
          <b-row class="row-8"><Produto /></b-row>
        </b-col>
      </b-container>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";
export default {
  components: { Produto },
};
</script>

<style lang="scss">
.topGrid {
  flex-direction: column;
  width: 100%;
  margin: 0 !important;
  & .row-1 {
    @media (max-with: 380px) {
      margin-left: 1rem !important;
    }
    & .row-3 {
      justify-content: flex-start;
      margin-bottom: 1rem;

      & h1 {
        font-size: 1.125rem;
        text-align: left;
      }
    }

    & .row-4 {
      display: flex;
      flex-direction: row;
      width: 100%;

      & .col-1 {
        width: 80%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 380px) {
          margin-bottom: 1.5rem;
        }
        & h2 {
          font-size: 0.875rem;
          margin: 0;
        }
      }

      & .col-2 {
        display: flex;
        justify-content: flex-end;
        width: 20%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 380px) {
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
    width: 100% !important;

    & .bv-product-row-top-grid {
      margin: 2rem 0 !important;
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100% !important;
      padding: 0 !important;

      @media (max-width: 768px) {
        flex-direction: column !important;
        width: 100% !important;
      }

      & .col-3 {
        display: flex;
        flex-direction: column;
        width: 50% !important;
        height: 50rem !important;

        @media (max-width: 768px) {
          height: 40rem !important;
          margin-bottom: 1rem !important;
          width: 100% !important;
        }

        @media (max-width: 380px) {
          width: 100% !important;
          height: 20rem !important;
          margin-bottom: 1rem !important;
        }

        & .row-5 {
          height: 100% !important;
          display: flex;
          justify-content: center;
        }
      }
      & .col-4 {
        margin: 0 1rem 0 1rem;
        display: flex;
        flex-direction: column;
        width: 25% !important;
        height: 50rem !important;

        @media (max-width: 768px) {
          width: 100% !important;
          height: 80rem !important;
          margin: 0 0 1rem 0 !important;
        }

        @media (max-width: 380px) {
          width: 100% !important;
          height: 40rem !important;
          margin: 0 0 1rem 0 !important;
        }

        & .row-6 {
          height: 60%;
          margin-bottom: 1rem !important;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50% !important;
            margin-bottom: 1rem !important;
          }
        }
        & .row-7 {
          height: 40%;
          display: flex;
          justify-content: center;

          @media (max-width: 768px) {
            height: 50% !important;
          }
        }
      }
      & .col-5 {
        display: flex;
        flex-direction: column;
        width: 25% !important;
        height: 50rem !important;

        @media (max-width: 768px) {
          width: 100% !important;
          height: 40rem !important;
          margin-bottom: 0.5rem !important;
        }
        @media (max-width: 380px) {
          width: 100% !important;
          height: 20rem !important;
          margin-bottom: 0.5rem !important;
        }

        & .row-8 {
          height: 100%;
          display: flex;
          justify-content: center;
        }
      }
    }
  }
}
</style>
