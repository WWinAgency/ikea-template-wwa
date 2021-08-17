<template>
  <div class="comparacaoFavoritos">
    <div class="row-1">
      <div class="col">
        <div class="row"><h1>Comparação Favoritos</h1></div>
        <div class="row">
          <h2>A comparar 3 produtos</h2>
        </div>
      </div>
    </div>
    <div class="row-2">
      <div class="button-col">
        <div class="button-row">
          <div class="button-col-1">
            <a href="/pagina-de-loja" class="editar-selecao">
              <div class="row">
                <div class="col-1">
                  <b-icon
                    class="arrow-left"
                    icon="arrow-left"
                    scale="1.5"
                    variant="dark"
                  ></b-icon>
                </div>
                <div class="col-2">
                  Editar Seleção
                </div>
              </div>
            </a>
          </div>
          <div class="button-col-2">
            <button class="mostrar-diferencas">
              Mostrar apenas diferenças
            </button>
          </div>
        </div>
      </div>
      <div class="content-col">
        <div class="content-row">
          <div class="button-col-1">
            3 Produtos
          </div>
          <div class="button-col-2">
            <div class="row">
              <div class="col-1">
                <button class="produto" @click="toggleStateProduto">
                  Produto
                </button>
              </div>
              <div class="col-2">
                <button class="conteudo" @click="toggleStateConteudo">
                  Contéudo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row-3">
      <ProdutoComparativo :products="products" />
    </div>
  </div>
</template>

<script>
import ProdutoComparativo from "./ProdutoComparativo.vue";
export default {
  components: { ProdutoComparativo },
  props: ["comparison"],
  data() {
    return {
      isActiveProduto: true,
      isActiveConteudo: false,

      products: [
        {
          id: 1,
          name: "FEJKA",
          type: "Planta Artificial em vaso",
          code: "104.678.04",
          utility: "9cm",
          imageSrc: "https://picsum.photos/360?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
          rating: 4.5,
          ratingCount: 8,
          link: "fejka",
          variantStock: "success",
          accordionOpen: false,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          favSelected: false,
        },
        {
          id: 2,
          name: "SKOGSKLÖVER",
          type: "Estore de correr",
          code: "104.678.04",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/360?random=2",
          normalPrice: 35,
          currentPrice: 29,
          rating: 4,
          ratingCount: 148,
          link: "skogsklover",
          variantStock: "danger",
          accordionOpen: false,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          favSelected: false,
        },
        {
          id: 3,
          name: "HUSARÖ",
          type: "Poltrona",
          code: "104.678.04",
          utility: "exterior",
          imageSrc: "https://picsum.photos/360?random=3",
          normalPrice: 149,
          currentPrice: 119,
          rating: 4.5,
          ratingCount: 10,
          link: "husaro",
          variantStock: "success",
          accordionOpen: false,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          favSelected: false,
        },
        {
          id: 4,
          name: "HAUGA",
          type: "Roupeiro aberto",
          code: "104.678.04",
          utility: "c/3 gavetas 70 x 199 cm",
          imageSrc: "https://picsum.photos/360?random=4",
          normalPrice: 135,
          currentPrice: 112,
          rating: 3,
          ratingCount: 24,
          link: "hauga",
          variantStock: "danger",
          accordionOpen: false,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          favSelected: false,
        },
      ],
    };
  },
  methods: {
    toggleStateProduto() {
      this.isActiveProduto = !this.isActiveProduto;
    },
    toggleStateConteudo() {
      this.isActiveConteudo = !this.isActiveConteudo;
    },
  },
};
</script>

<style lang="scss">
.selected {
  text-decoration: underline;
}
.comparacaoFavoritos {
  width: 100%;
  & .row-1 {
    & .col {
      & .row {
        & h1 {
          margin: 3.75rem 0 0.8rem 0;
          font-size: 1.875rem;
          line-height: 1.3334;
          letter-spacing: -0.53px;
          font-weight: 700;
          color: black;
        }

        & h2 {
          margin-bottom: 2.5rem;
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
      }
    }
  }
  & .row-2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 1000px) {
      flex-direction: column;
    }

    & .button-col {
      @media (max-width: 1000px) {
        width: 100%;
      }
      & .button-row {
        display: flex;

        & .button-col-1 {
          width: auto;
          margin-right: 1rem;

          & .editar-selecao {
            margin: 0.5rem 0.625rem 0 0;
            width: auto;
            display: flex;
            justify-content: space-between !important;
            align-items: center;
            padding: 0 1.5rem;
            height: 2.5rem;
            border-radius: 64px;
            border: 1px solid #f5f5f5;
            background-color: #f5f5f5;
            text-decoration: none;

            &:hover {
              background-color: #c8c8c8;
              border: 1px solid #c8c8c8;
            }

            & .row {
              width: auto;
              display: flex;
              align-items: center;
              & .col-1 {
                width: auto;
                margin: auto;
              }
              & .col-2 {
                display: flex;
                width: auto;
                font-size: 0.75rem;
                line-height: 1.33333;
                text-align: center;
                font-weight: 700;
                color: black;
              }
            }
          }
        }
        & .button-col-2 {
          width: auto;
          & .mostrar-diferencas {
            margin: 0.5rem 0 0 0;
            width: auto;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 1.5rem;
            height: 2.5rem;
            border-radius: 64px;
            border: 1px solid #f5f5f5;
            background-color: #f5f5f5;
            font-size: 0.75rem;
            line-height: 1.33333;
            font-weight: 700;
            color: black;

            &:hover {
              background-color: #c8c8c8;
              border: 1px solid #c8c8c8;
            }
          }
        }
      }
    }
    & .content-col {
      display: inline-flex;
      width: 30%;
      align-items: center;
      position: relative;

      @media (max-width: 1000px) {
        width: 100%;
        margin-top: 2rem;
      }
      & .content-row {
        display: flex;
        width: auto;
        position: absolute;
        right: 0;

        @media (max-width: 1000px) {
          width: 100%;
          position: relative;
        }

        & .button-col-1 {
          display: flex;
          justify-content: center;
          width: auto;

          font-size: 0.75rem;

          @media (max-width: 900px) {
            float: left;
            width: 20%;
          }
        }
        & .button-col-2 {
          display: flex;
          width: auto;
          margin-left: 1rem;
          align-items: center;

          @media (max-width: 1000px) {
            position: absolute;
            right: 0;
          }

          & .row {
            padding: 0;
            margin: 0;
            align-items: center;
            @media (max-width: 900px) {
              display: flex;
              justify-content: flex-end;
              margin: auto;
            }
            & .col-1 {
              width: auto;
              display: flex;
              justify-content: center;
              @media (max-width: 900px) {
                float: left;
              }
              @media (max-width: 600px) {
                margin-right: 1rem;
              }

              & .produto {
                background-color: white;
                border: none;
                font-size: 0.75rem;
                font-weight: 700;
              }
            }
            & .col-2 {
              width: auto;
              display: flex;
              justify-content: center;
              padding-right: 0;
              @media (max-width: 900px) {
                float: left;
              }

              & .conteudo {
                background-color: white;
                border: none;
                font-size: 0.75rem;
                font-weight: 700;
              }
            }
          }
        }
      }
    }
  }
}
</style>
