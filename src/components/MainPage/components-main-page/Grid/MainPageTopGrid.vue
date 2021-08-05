<template>
  <div class="mainPageTopGrid">
    <div class="row-1">
      <div class="text-row-1">
        <h1>
          <strong>{{ titulo }}</strong>
        </h1>
      </div>
      <div class="text-row-2">
        <div class="col-1">
          <h2>
            {{ body }}
          </h2>
        </div>
        <div class="col-2">
          <b-button class="btn" variant="light">{{ gridButton }}</b-button>
        </div>
      </div>
    </div>
    <div class="row-2">
      <div class="grid-container">
        <div class="grid-container-left">
          <div class="grid-col-1">
            <div class="grid-row-1">
              <Produto
                :nome="produtos[0].nome"
                :gridImageSrc="produtos[0].gridImageSrc"
                :tipo="produtos[0].tipo"
                :preco="produtos[0].preco"
              />
            </div>
          </div>
        </div>
        <div class="grid-container-right">
          <div class="grid-col-2">
            <div class="grid-row-2">
              <Produto
                :nome="produtos[1].nome"
                :gridImageSrc="produtos[1].gridImageSrc"
                :tipo="produtos[1].tipo"
                :preco="produtos[1].preco"
              />
            </div>
            <div class="grid-row-3">
              <Produto
                :nome="produtos[2].nome"
                :gridImageSrc="produtos[2].gridImageSrc"
                :tipo="produtos[2].tipo"
                :preco="produtos[2].preco"
              />
            </div>
          </div>
          <div class="grid-col-3">
            <div class="grid-row-4">
              <Produto
                :nome="produtos[3].nome"
                :gridImageSrc="produtos[3].gridImageSrc"
                :tipo="produtos[3].tipo"
                :preco="produtos[3].preco"
              />
            </div>
            <div class="grid-row-5">
              <Produto
                :nome="produtos[4].nome"
                :gridImageSrc="produtos[4].gridImageSrc"
                :tipo="produtos[4].tipo"
                :preco="produtos[4].preco"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";

export default {
  props: {
    produtos: {
      type: Array,
      required: true,
    },
    titulo: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    gridButton: {
      type: String,
      required: true,
    },
  },
  components: { Produto },
};
</script>

<style lang="scss">
.mainPageTopGrid {
  flex-direction: column;
  width: 100%;
  margin: 0 !important;
  & .row-1 {
    margin-bottom: 2rem !important;
    @media (max-with: 400px) {
      margin-left: 1rem !important;
    }
    & .text-row-1 {
      justify-content: flex-start;
      margin-bottom: 0.5rem;

      & h1 {
        font-size: 1.5625rem;
        line-height: 1.36rem;
        text-align: left;
      }
    }

    & .text-row-2 {
      display: flex;
      flex-direction: row;
      width: 100%;

      @media (max-width: 800px) {
        flex-direction: column;
      }

      & .col-1 {
        width: 80%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 400px) {
          margin-bottom: 1.5rem;
        }
        & h2 {
          font-size: 0.875rem;
          line-height: 1.36rem;
          margin: 0;
        }
      }

      & .col-2 {
        display: flex;
        justify-content: flex-end;
        width: 20%;
        padding: 1rem 1rem 1rem auto;

        @media (max-width: 800px) {
          margin-top: 1rem;
          padding: 0 !important;
          justify-content: flex-start;
          width: 20rem;
        }

        @media (max-width: 400px) {
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
    margin: 0 !important;

    & .grid-container {
      display: flex;
      flex-direction: row;

      @media (max-width: 1050px) {
        flex-direction: column;
      }

      & .grid-container-left {
        & .grid-col-1 {
          display: flex;
          flex-direction: column;

          @media (max-width: 1050px) {
            flex-direction: row;
          }
          & .grid-row-1 {
            height: 60rem;
            padding: 0 0.5rem 0 0;

            @media (max-width: 1500px) {
              height: 40rem;
              padding: 0 0.5rem 0 0;
            }
            @media (max-width: 1050px) {
              height: 50rem;
              padding: 0;
            }
            @media (max-width: 400px) {
              height: 30rem;
            }
          }
        }
      }

      & .grid-container-right {
        display: flex;
        flex-direction: row;
        width: 100%;

        @media (max-width: 1050px) {
          flex-direction: row;
        }
        & .grid-col-2 {
          display: flex;
          flex-direction: column;

          @media (max-width: 1050px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-2 {
            padding: 0 0.5rem 0.5rem 0.5rem;
            height: 24rem;

            @media (max-width: 1500px) {
              height: 12rem;
              padding: 0 0.5rem 0.5rem 0.5rem;
            }
            @media (max-width: 1050px) {
              height: 20rem;
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 400px) {
              height: 12rem;
            }
          }
          & .grid-row-3 {
            padding: 0.5rem 0.5rem 0 0.5rem;
            height: 36rem;

            @media (max-width: 1500px) {
              height: 28rem;
              padding: 0.5 0.5rem 0 0.5rem;
            }
            @media (max-width: 1050px) {
              height: 30rem;
              padding: 1rem 0.5rem 0 0;
            }
            @media (max-width: 400px) {
              height: 18rem;
            }
          }
        }
        & .grid-col-3 {
          display: flex;
          flex-direction: column;

          @media (max-width: 1050px) {
            flex-direction: column;
            width: 50%;
          }

          & .grid-row-4 {
            height: 36rem;
            padding: 0 0 0.5rem 0.5rem;

            @media (max-width: 1500px) {
              height: 19rem;
              padding: 0 0 0.5rem 0.5rem;
            }
            @media (max-width: 1050px) {
              height: 30rem;
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 400px) {
              height: 18rem;
            }
          }
          & .grid-row-5 {
            height: 24rem;
            padding: 0.5rem 0 0 0.5rem;

            @media (max-width: 1500px) {
              height: 21rem;
              padding: 0.5rem 0 0 0.5rem;
            }

            @media (max-width: 1050px) {
              height: 20rem;
              padding: 1rem 0 0 0.5rem;
            }
            @media (max-width: 400px) {
              height: 12rem;
            }
          }
        }
      }
    }
  }
}
</style>
