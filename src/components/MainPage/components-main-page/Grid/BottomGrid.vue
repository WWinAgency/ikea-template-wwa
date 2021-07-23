<template>
  <div class="bottomGrid">
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
export default {
  components: { Produto },
};
</script>

<style lang="scss">
.bottomGrid {
  width: 100%;
  display: flex;
  flex-direction: column;
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
    padding: 0;

    & .bv-product-row {
      display: flex;
      flex-direction: row;
      justify-content: center;
      width: 100% !important;
      min-height: 60rem;
      padding: 0 !important;

      & .col-6 {
        display: flex;
        flex-direction: column;
        width: 33% !important;
        & .row-5 {
          height: 30%;
          margin-bottom: 0.5rem !important;

          display: flex;
          justify-content: center;

          & .produto {
            background-color: red;
            width: 100%;
            height: 100%;
          }
        }
        & .row-6 {
          height: 70%;

          display: flex;
          justify-content: center;

          & .produto {
            background-color: blue;
            width: 100%;
            height: 100%;
          }
        }
      }
      & .col-7 {
        margin: 0 0.5rem 0 0.5rem;
        display: flex;
        flex-direction: column;
        width: 33% !important;
        & .row-7 {
          height: 60%;
          margin-bottom: 0.5rem !important;

          display: flex;
          justify-content: center;

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
        & .row-9 {
          height: 100%;
          display: flex;
          justify-content: center;

          & .produto {
            background-color: magenta;
            width: 100%;
            height: 100%;
          }
        }
        & .row-12 {
          height: 100%;
          display: flex;
          justify-content: center;

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
