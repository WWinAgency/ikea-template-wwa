<template>
  <div class="descriptionSidebarAvaliacoes">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a class="tituloSidebar" v-b-toggle="'sidebar-avaliacoes-' + productId"
          >Avaliações</a
        >
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle="'sidebar-avaliacoes-' + productId"
        >
          <b-icon icon="arrow-right" scale="1.6" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar :id="'sidebar-avaliacoes-' + productId" right shadow>
      <div class="detalhes-produto-outter-col">
        <div class="detalhes-produto-row-1">
          <strong>Avaliações</strong>
        </div>

        <div class="detalhes-produto-row-2">
          <Avaliacoes
            :rating="rating"
            :ratingCount="ratingCount"
            :valueAssembly="valueAssembly"
            :valuePrice="valuePrice"
            :valueQuality="valueQuality"
            :valueLooks="valueLooks"
            :valueExpectations="valueExpectations"
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
            :valueAssembly="evaluation.valueAssembly"
            :valuePrice="evaluation.valuePrice"
            :valueQuality="evaluation.valueQuality"
            :valueLooks="evaluation.valueLooks"
            :valueExpectations="evaluation.valueExpectations"
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
    productCode: String,
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
.descriptionSidebarAvaliacoes {
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
    display: inline-block;
    & .sidebar-text-col-1 {
      & .tituloSidebar {
        font-size: 1.5625rem !important;
        line-height: 1.36 !important;
        letter-spacing: -0.02625rem !important;
        color: black !important;
        font-weight: 700 !important;
        float: left !important;
        text-decoration: none !important;

        &:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          font-size: 1.2rem;
        }
      }
    }
    & .sidebar-text-col-2 {
      position: absolute;
      right: 0;
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
