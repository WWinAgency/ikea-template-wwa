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
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4rem auto 4rem auto;
  & .row-1 {
    & .row-3 {
      justify-content: flex-start;
      margin-bottom: 1rem;
      & h1 {
        font-size: 1.125rem;
      }
    }

    & .row-4 {
      display: flex;
      flex-direction: row;
      align-items: center;
      width: 100%;
      & .col-1 {
        width: 80%;
        padding: 1rem 1rem 1rem auto;
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

        & .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
          height: 2.5rem;
          border: 1px solid #929292;
          border-radius: 64px;
          font-size: 0.75rem;
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

      @media (max-width: 968px) {
        flex-direction: column !important;
        width: 100% !important;
      }

      & .col-3 {
        display: flex;
        flex-direction: column;
        width: 50% !important;

        @media (min-width: 1200px) {
          height: 700px;
        }

        @media (max-width: 968px) {
          width: 100% !important;
          margin-bottom: 0.5rem !important;
        }

        @media (max-width: 968px) {
          width: 730px !important;
        }

        & .row-5 {
          height: 100% !important;
          display: flex;
          justify-content: center;
        }
      }
      & .col-4 {
        margin: 0 0.5rem 0 0.5rem;
        display: flex;
        flex-direction: column;
        width: 25% !important;

        @media (max-width: 968px) {
          width: 100% !important;
          margin: 0 0 0.5rem 0 !important;
        }

        @media (max-width: 968px) {
          width: 730px !important;
        }
        & .row-6 {
          height: 60%;
          margin-bottom: 0.5rem !important;

          @media (max-width: 968px) {
            margin: 0 0 0.5rem 0 !important;
          }

          display: flex;
          justify-content: center;
        }
        & .row-7 {
          height: 40%;

          display: flex;
          justify-content: center;
        }
      }
      & .col-5 {
        display: flex;
        flex-direction: column;
        width: 25% !important;

        @media (max-width: 968px) {
          width: 100% !important;
          margin: 0 0 0.5rem 0 !important;
        }

        @media (max-width: 968px) {
          width: 730px !important;
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
