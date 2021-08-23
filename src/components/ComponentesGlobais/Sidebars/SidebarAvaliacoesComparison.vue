<template>
  <div class="sidebarAvaliacoesComparison">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a
          class="tituloSidebar"
          v-b-toggle="'sidebar-avaliacoes-' + productCode"
          >Ler mais</a
        >
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle="'sidebar-avaliacoes-' + productCode"
        >
          <b-icon icon="arrow-right" scale="1.3" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar :id="'sidebar-avaliacoes-' + productCode" right shadow>
      <div class="detalhes-produto-outter-col">
        <div class="detalhes-produto-row-1">
          <strong>Avaliações</strong>
        </div>

        <div class="detalhes-produto-row-2">
          <Avaliacoes
            :rating="rating"
            :ratingCount="ratingCount"
            :valueAssembly="Math.round(valueAssembly)"
            :valuePrice="Math.round(valuePrice)"
            :valueQuality="Math.round(valueQuality)"
            :valueLooks="Math.round(valueLooks)"
            :valueExpectations="Math.round(valueExpectations)"
          />
        </div>
        <hr class="costum-hr" />

        <div
          v-for="(evaluation, index) in evaluations"
          :key="index"
          class="detalhes-produto-row-3"
        >
          <AvaliacoesPessoal
            :rating="evaluation.rating"
            :clientName="evaluation.clientName"
            :day="evaluation.day"
            :month="evaluation.month"
            :year="evaluation.year"
            :generalEvaluation="evaluation.generalEvaluation"
            :specificEvaluation="evaluation.specificEvaluation"
            :valueAssembly="Math.round(evaluation.valueAssembly)"
            :valuePrice="Math.round(evaluation.valuePrice)"
            :valueQuality="Math.round(evaluation.valueQuality)"
            :valueLooks="Math.round(evaluation.valueLooks)"
            :valueExpectations="Math.round(evaluation.valueExpectations)"
          />
        </div>
        <hr class="costum-hr" />
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Avaliacoes from "../../PaginaProduto/componentes-pagina-produto/Avaliacoes.vue";
import AvaliacoesPessoal from "../../PaginaProduto/componentes-pagina-produto/AvaliacoesPessoal.vue";
export default {
  props: {
    evaluations: Array,
    productCode: Number,
    rating: Number,
    ratingCount: Number,
    valueAssembly: Number,
    valuePrice: Number,
    valueQuality: Number,
    valueLooks: Number,
    valueExpectations: Number,
  },
  components: { Avaliacoes, AvaliacoesPessoal },
};
</script>

<style lang="scss">
.sidebarAvaliacoesComparison {
  position: relative;
  & .b-sidebar {
    width: 500px !important;

    @media (max-width: 500px) {
      width: 100% !important;
    }

    & .costum-hr {
      margin: 0;
    }
  }
  & .sidebar-text-row {
    display: flex;
    height: 100%;
    align-items: center;
    & .sidebar-text-col-1 {
      height: 100%;
      width: 50%;
      & .tituloSidebar {
        font-size: 0.875rem;
        line-height: 1.36;
        letter-spacing: -0.02625rem;
        color: black;
        font-weight: 700;
        float: left;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
    & .sidebar-text-col-2 {
      width: 50%;
      height: auto;
      text-align: right;
      float: right;
      & .sidebar-button {
        border: none;
        background-color: white !important;

        @media (max-width: 950px) {
          margin-top: 0.2rem;
          margin-right: 0;
        }
      }
    }
  }

  & .b-sidebar-body {
    scrollbar-width: none;
  }

  & .detalhes-produto-outter-col {
    padding: 4rem 3rem 4rem 3rem;

    & .detalhes-produto-row-1 {
      font-size: 1.5625rem;
    }
    & .detalhes-produto-row-2 {
      & .row-2-inner-col {
        display: flex;
        flex-direction: column;
        margin: 2rem 0 2rem 0;
        & .row-2-inner-row-1 {
          font-size: 0.875rem;
          line-height: 1.57;
          margin-bottom: 2rem;
        }
      }
    }
  }
}
</style>
