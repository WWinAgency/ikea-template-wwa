<template>
  <div class="bottomGrid">
    <div class="row-1">
      <div class="text-row-1">
        <h1><strong>Mais ideias e inspiração</strong></h1>
      </div>
      <div class="text-row-2">
        <BottomGridButtonCarousel />
      </div>
    </div>
    <div class="row-2">
      <div class="grid-container">
        <div class="grid-container-left">
          <div class="grid-col-1">
            <div class="grid-row-1"><Produto /></div>
          </div>
        </div>
        <div class="grid-container-right">
          <div class="grid-col-2">
            <div class="grid-row-2"><Produto /></div>
            <div class="grid-row-3"><Produto /></div>
          </div>
          <div class="grid-col-3">
            <div class="grid-row-4"><Produto /></div>
            <div class="grid-row-5"><Produto /></div>
          </div>
        </div>
      </div>
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
  flex-direction: column;
  width: 100%;
  margin: 0 !important;
  & .row-1 {
    margin-bottom: 2rem !important;
    @media (max-with: 380px) {
      margin-left: 1rem !important;
    }
    & .text-row-1 {
      justify-content: flex-start;
      margin-bottom: 1rem;

      & h1 {
        font-size: 1.5625rem;
        text-align: left;
      }
    }

    & .text-row-2 {
      width: 100%;
      padding: 0 !important;
      margin: 0 !important;
    }
  }

  & .row-2 {
    width: 100% !important;
    margin: 0 !important;

    & .grid-container {
      display: flex;
      flex-direction: row;

      @media (max-width: 768px) {
        flex-direction: column;
      }

      & .grid-container-left {
        & .grid-col-1 {
          display: flex;
          flex-direction: column;

          @media (max-width: 768px) {
            flex-direction: row;
          }
          & .grid-row-1 {
            height: 60rem;
            padding: 0 0.5rem 0 0;

            @media (max-width: 768px) {
              height: 50rem;
              padding: 0;
            }
            @media (max-width: 380px) {
              height: 30rem;
            }
          }
        }
      }

      & .grid-container-right {
        display: flex;
        flex-direction: row;
        width: 100%;

        @media (max-width: 768px) {
          flex-direction: row;
        }
        & .grid-col-2 {
          display: flex;
          flex-direction: column;

          @media (max-width: 768px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-2 {
            padding: 0 0.5rem 0.5rem 0.5rem;
            height: 24rem;

            @media (max-width: 768px) {
              height: 20rem;
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 380px) {
              height: 12rem;
            }
          }
          & .grid-row-3 {
            padding: 0.5rem 0.5rem 0 0.5rem;
            height: 36rem;

            @media (max-width: 768px) {
              height: 30rem;
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 380px) {
              height: 18rem;
            }
          }
        }
        & .grid-col-3 {
          display: flex;
          flex-direction: column;

          @media (max-width: 768px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-4 {
            height: 36rem;
            padding: 0 0 0.5rem 0.5rem;

            @media (max-width: 768px) {
              height: 30rem;
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 380px) {
              height: 18rem;
            }
          }
          & .grid-row-5 {
            height: 24rem;
            padding: 0.5rem 0 0 0.5rem;

            @media (max-width: 768px) {
              height: 20rem;
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 380px) {
              height: 12rem;
            }
          }
        }
      }
    }
  }
}
</style>
