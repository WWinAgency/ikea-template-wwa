<template>
  <div class="descriptionSidebarAvaliacoes">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a class="tituloSidebar" v-b-toggle.sidebar-avaliacoes-produto-right>{{
          produto.tituloSidebar
        }}</a>
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle.sidebar-avaliacoes-produto-right
        >
          <b-icon icon="arrow-right" scale="1.6" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar id="sidebar-avaliacoes-produto-right" right shadow>
      <div class="detalhes-produto-outter-col">
        <div class="detalhes-produto-row-1">
          <strong>Avaliações</strong>
        </div>

        <div class="detalhes-produto-row-2">
          <Avaliacoes
            :rating="produto.rating"
            :avaliacoes="produto.avaliacoes"
            :valueAssembly="produto.valueAssembly"
            :valuePrice="produto.valuePrice"
            :valueQuality="produto.valueQuality"
            :valueLooks="produto.valueLooks"
            :valueExpectations="produto.valueExpectations"
          />
        </div>
        <hr class="costum-hr" />

        <div class="detalhes-produto-row-3">
          <AvaliacoesPessoal
            rating="4"
            clientName="Maria"
            day="02"
            month="03"
            year="2021"
            generalEvaluation="Vaso Bonito"
            specificEvaluation="Muito bom para por em salas ou entradas"
            valueAssembly="5"
            valuePrice="4"
            valueQuality="5"
            valueLooks="5"
            valueExpectations="4"
          />
        </div>
        <hr class="costum-hr" />
        <div class="detalhes-produto-row-4">
          <AvaliacoesPessoal
            rating="3"
            clientName="João"
            day="20"
            month="06"
            year="2021"
            generalEvaluation="Vaso decente"
            specificEvaluation="Dificil de montar mas com aspeto bom"
            valueAssembly="2"
            valuePrice="4"
            valueQuality="5"
            valueLooks="5"
            valueExpectations="3"
          />
        </div>
        <hr class="costum-hr" />
        <div class="detalhes-produto-row-5">
          <AvaliacoesPessoal
            rating="2"
            clientName="Idete"
            day="26"
            month="12"
            year="2020"
            generalEvaluation="Vaso feio"
            specificEvaluation="Muito feio e dificil de montar"
            valueAssembly="1"
            valuePrice="2"
            valueQuality="4"
            valueLooks="1"
            valueExpectations="1"
          />
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import Avaliacoes from "../../PaginaProduto/componentes-pagina-produto/Avaliacoes.vue";
import AvaliacoesPessoal from "../../PaginaProduto/componentes-pagina-produto/AvaliacoesPessoal.vue";
export default {
  props: {
    produto: {
      rating: Number,
      avaliacoes: Number,
      valueAssembly: Number,
      valuePrice: Number,
      valueQuality: Number,
      valueLooks: Number,
      valueExpectations: Number,
      tituloSidebar: String,
    },
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
        font-size: 1.5625rem;
        line-height: 1.36;
        letter-spacing: -0.02625rem;
        color: black;
        font-weight: 700;
        float: left;
        text-decoration: none;

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
