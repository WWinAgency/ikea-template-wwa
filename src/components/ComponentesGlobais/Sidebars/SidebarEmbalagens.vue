<template>
  <div class="sidebarEmbalagens">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a
          class="tituloSidebar"
          v-b-toggle="'sidebar-embalagens-' + productCode"
          >Ler mais
        </a>
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle="'sidebar-embalagens-' + productCode"
        >
          <b-icon icon="arrow-right" scale="1.3" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar :id="'sidebar-embalagens-' + productCode" right shadow>
      <div class="outter-col">
        <div class="row-1">
          Este produto é composto por {{ qntEmbalagens }} embalagens
        </div>
        <div class="row-2">
          <div class="row-2-inner-col">
            <div class="row-2-inner-row-1">
              {{ name }}
            </div>
            <div class="row-2-inner-row-2">
              {{ type }}
            </div>
          </div>
        </div>
        <div class="row-3">
          <div class="row-3-inner-col">
            <div class="row-3-inner-row-1">Número de artigo</div>
            <div class="row-3-inner-row-2">{{ code }}</div>
          </div>
        </div>
        <div class="row-4">
          <div class="row-4-inner-col">
            <div class="row-4-inner-row-1">Largura: {{ largura }} cm</div>
            <div class="row-4-inner-row-1">Altura: {{ altura }} cm</div>
            <div class="row-4-inner-row-1">
              Comprimento: {{ comprimento }} cm
            </div>
            <div class="row-4-inner-row-2">Peso: {{ peso }} kg</div>
            <div class="row-4-inner-row-3">Package(s): {{ qntEmbalagens }}</div>
          </div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    productCode: Number,
    qntEmbalagens: Number,
    name: String,
    type: String,
    code: String,
    comprimento: Number,
    largura: Number,
    altura: Number,
    peso: Number,
  },
};
</script>

<style lang="scss">
.sidebarEmbalagens {
  position: relative;
  & .b-sidebar {
    width: 500px !important;

    @media (max-width: 500px) {
      width: 100% !important;
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

  & .outter-col {
    padding: 4rem 3rem 4rem 3rem;

    & .row-1 {
      font-size: 1.5625rem;
      margin-bottom: 1.5rem !important;
    }
    & .row-2 {
      margin: 0 !important;
      & .row-2-inner-col {
        display: flex;
        flex-direction: column;
        & .row-2-inner-row-1 {
          font-size: 0.875rem;
          line-height: 1.57;
          font-weight: 700;
          color: #484848;
        }
        & .row-2-inner-row-2 {
          font-size: 0.875rem;
          line-height: 1.57;
          margin-bottom: 1rem;
        }
      }
    }
    & .row-3 {
      & .row-3-inner-col {
        width: 100%;
        & .row-3-inner-row-1 {
          margin-bottom: 0.5rem;
          font-size: 0.75rem;
          line-height: 1.5;
          color: #484848;
        }
        & .row-3-inner-row-2 {
          background-color: black;
          color: white;
          width: 6rem;
          font-weight: 700;
          padding: 0.25rem 0.75rem;
          line-height: 1.25;
          font-size: 0.75rem;
          text-align: center;
        }
      }
    }
    & .row-4 {
      & .row-4-inner-col {
        & .row-4-inner-row-1 {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
        & .row-4-inner-row-2 {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
        & .row-4-inner-row-3 {
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
      }
    }
  }
}
</style>
