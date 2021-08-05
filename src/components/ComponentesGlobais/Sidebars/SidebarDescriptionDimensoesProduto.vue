<template>
  <div class="descriptionSidebarDimensoes">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a class="tituloSidebar" v-b-toggle.sidebar-dimensoes-produto-right>{{
          tituloSidebar
        }}</a>
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle.sidebar-dimensoes-produto-right
        >
          <b-icon icon="arrow-right" scale="1.6" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar id="sidebar-dimensoes-produto-right" right shadow>
      <div class="detalhes-produto-outter-col">
        <div class="detalhes-produto-row-1">
          <strong>Dimensão do produto</strong>
        </div>
        <div class="detalhes-produto-row-2">
          <div class="row-2-inner-col">
            <div class="row-2-inner-row-1">
              <strong>Diâmetro: </strong>27 cm
            </div>
          </div>
        </div>
        <div class="detalhes-produto-row-3">
          <img src="https://picsum.photos/384/384?random=15" />
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    tituloSidebar: String,
  },
};
</script>

<style lang="scss">
.descriptionSidebarDimensoes {
  position: relative;
  & .b-sidebar {
    width: 500px !important;

    @media (max-width: 500px) {
      width: 100% !important;
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
