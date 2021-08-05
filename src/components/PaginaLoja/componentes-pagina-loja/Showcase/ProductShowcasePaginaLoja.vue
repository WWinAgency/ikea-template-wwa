<template>
  <div class="product-showcase">
    <div class="product-grid-row-1">
      <div class="product-grid-col-1">
        <div class="product-grid-inner-col">
          <!-- CHECKBOX ROW -->
          <div class="product-grid-inner-row-1">
            <div class="product-grid-inner-col-1">
              <!-- TESTE INPUT 1 -->
              <h1 v-if="produto1Selected">Produto 1</h1>
              <!-- TESTE INPUT 1 -->
              <b-form-checkbox
                class="product-checkbox"
                id="checkbox-produto-1"
                size="lg"
                v-model="statusProduto1"
                name="checkbox-produto-1"
                @input="produto1Selected = !produto1Selected"
              >
                <h1>Comparar</h1>
              </b-form-checkbox>
            </div>
            <div class="product-grid-inner-col-2"></div>
            <div class="product-grid-inner-col-3"></div>
          </div>
          <!-- CHECKBOX ROW -->
          <!-- PRODUCT ROW -->
          <div class="product-grid-inner-row-2">
            <Product
              :name="showcase[0].nome"
              :type="showcase[0].tipo"
              :imageSrc="showcase[0].imagem"
              :normalPrice="showcase[0].precoNormal"
              :currentPrice="showcase[0].precoAtual"
              :rating="showcase[0].rating"
              :avaliacoes="showcase[0].avaliacoes"
            />
          </div>
          <!-- PRODUCT ROW -->
        </div>
      </div>
      <div class="product-grid-col-2">
        <div class="product-grid-inner-col">
          <!-- CHECKBOX ROW -->
          <div class="product-grid-inner-row-1">
            <div class="product-grid-inner-col-1">
              <!-- TESTE INPUT 2 -->
              <h1 v-if="produto2Selected">Produto 2</h1>
              <!-- TESTE INPUT 2 -->
              <b-form-checkbox
                class="product-checkbox"
                id="checkbox-produto-2"
                size="lg"
                v-model="statusProduto2"
                name="checkbox-produto-2"
                @input="produto2Selected = !produto2Selected"
              >
                <h1>Comparar</h1>
              </b-form-checkbox>
            </div>
            <div class="product-grid-inner-col-2"></div>
            <div class="product-grid-inner-col-3"></div>
          </div>
          <!-- CHECKBOX ROW -->
          <!-- PRODUCT ROW -->
          <div class="product-grid-inner-row-2">
            <Product
              :name="showcase[1].nome"
              :type="showcase[1].tipo"
              :imageSrc="showcase[1].imagem"
              :normalPrice="showcase[1].precoNormal"
              :currentPrice="showcase[1].precoAtual"
              :rating="showcase[1].rating"
              :avaliacoes="showcase[1].avaliacoes"
            />
          </div>
          <!-- PRODUCT ROW -->
        </div>
      </div>
      <div class="product-grid-col-3">
        <div class="product-grid-inner-col">
          <!-- CHECKBOX ROW -->
          <div class="product-grid-inner-row-1">
            <div class="product-grid-inner-col-1">
              <!-- TESTE INPUT 3 -->
              <h1 v-if="produto3Selected">Produto 3</h1>
              <!-- TESTE INPUT 3 -->
              <b-form-checkbox
                class="product-checkbox"
                id="checkbox-produto-3"
                size="lg"
                v-model="statusProduto3"
                name="checkbox-produto-3"
                @input="produto3Selected = !produto3Selected"
              >
                <h1>Comparar</h1>
              </b-form-checkbox>
            </div>
            <div class="product-grid-inner-col-2"></div>
            <div class="product-grid-inner-col-3"></div>
          </div>
          <!-- CHECKBOX ROW -->
          <!-- PRODUCT ROW -->
          <div class="product-grid-inner-row-2">
            <Product
              :name="showcase[2].nome"
              :type="showcase[2].tipo"
              :imageSrc="showcase[2].imagem"
              :normalPrice="showcase[2].precoNormal"
              :currentPrice="showcase[2].precoAtual"
              :rating="showcase[2].rating"
              :avaliacoes="showcase[2].avaliacoes"
            />
          </div>
          <!-- PRODUCT ROW -->
        </div>
      </div>
      <div class="product-grid-col-4">
        <div class="product-grid-inner-col">
          <!-- CHECKBOX ROW -->
          <div class="product-grid-inner-row-1">
            <div class="product-grid-inner-col-1">
              <!-- TESTE INPUT 4 -->
              <h1 v-if="produto4Selected">Produto 4</h1>
              <!-- TESTE INPUT 4 -->
              <b-form-checkbox
                class="product-checkbox"
                id="checkbox-1"
                size="lg"
                v-model="statusProduto4"
                name="checkbox-1"
                @input="produto4Selected = !produto4Selected"
              >
                <h1>Comparar</h1>
              </b-form-checkbox>
            </div>
            <div class="product-grid-inner-col-2"></div>
            <div class="product-grid-inner-col-3"></div>
          </div>
          <!-- CHECKBOX ROW -->
          <!-- PRODUCT ROW -->
          <div class="product-grid-inner-row-2">
            <Product
              :name="showcase[3].nome"
              :type="showcase[3].tipo"
              :imageSrc="showcase[3].imagem"
              :normalPrice="showcase[3].precoNormal"
              :currentPrice="showcase[3].precoAtual"
              :rating="showcase[3].rating"
              :avaliacoes="showcase[3].avaliacoes"
            />
          </div>
          <!-- PRODUCT ROW -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "../../../ComponentesGlobais/Showcases/Product.vue";

export default {
  components: { Product },
  props: {
    produto1Selected: {
      type: Boolean,
      required: true,
    },
    produto2Selected: {
      type: Boolean,
      required: true,
    },
    produto3Selected: {
      type: Boolean,
      required: true,
    },
    produto4Selected: {
      type: Boolean,
      required: true,
    },
    showcase: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      produto1: {
        nome: "FEJKA",
        tipo: "Planta Artificial em vaso, 9cm",
        imagem: "https://picsum.photos/300?random=1",
        precoNormal: "4,50",
        precoAtual: "4",
        rating: "4.5",
        avaliacoes: "8",
        produto1Selected: false,
      },
      produto2: {
        nome: "SKOGSKLÖVER",
        tipo: "Estore de correr 120x195 cm",
        imagem: "https://picsum.photos/300?random=2",
        precoNormal: "35",
        precoAtual: "29",
        rating: "4",
        avaliacoes: "148",
      },
      produto3: {
        nome: "HUSARÖ",
        tipo: "Poltrona, exterior",
        imagem: "https://picsum.photos/300?random=3",
        precoNormal: "149",
        precoAtual: "119",
        rating: "4.5",
        avaliacoes: "10",
      },
      produto4: {
        nome: "HAUGA",
        tipo: "Roupeiro aberto c/3 gavetas 70 x 199 cm",
        imagem: "https://picsum.photos/300?random=4",
        precoNormal: "135",
        precoAtual: "112",
        rating: "3",
        avaliacoes: "24",
      },
    };
  },
};
</script>

<style lang="scss">
.product-showcase {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;

  & .product-grid-row-1 {
    display: flex;
    flex-direction: row;
    width: 100% !important;

    @media (max-width: 1500px) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      height: 100%;
      width: 100%;
    }
    @media (max-width: 700px) {
      height: 150rem;
      display: grid;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: repeat(4, 25%);
    }

    & .product-grid-col-1 {
      width: 25% !important;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
      }
      @media (max-width: 700px) {
        grid-row: 1 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      & .product-grid-inner-col {
        display: flex;
        flex-direction: column;
        & .product-grid-inner-row-1 {
          & .product-grid-inner-col-1 {
            & .custom-checkbox.b-custom-control-lg,
            .input-group-lg .custom-checkbox {
              padding-left: 0 !important;
            }
            & h1 {
              padding-left: 1rem;
              font-size: 0.75rem;
              line-height: 1.5rem;
            }
          }
          & .product-grid-inner-col-2 {
          }
        }
        & .product-grid-inner-row-2 {
        }
      }
    }
    & .product-grid-col-2 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }

      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }

      @media (max-width: 700px) {
        grid-row: 2 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
      & .product-grid-inner-col {
        display: flex;
        flex-direction: column;
        & .product-grid-inner-row-1 {
          & .product-grid-inner-col-1 {
            & .custom-checkbox.b-custom-control-lg,
            .input-group-lg .custom-checkbox {
              padding-left: 0 !important;
            }
            & h1 {
              padding-left: 1rem;
              font-size: 0.75rem;
              line-height: 1.5rem;
            }
          }
          & .product-grid-inner-col-2 {
          }
        }
        & .product-grid-inner-row-2 {
        }
      }
    }
    & .product-grid-col-3 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
        padding-left: 0;
      }
      @media (max-width: 700px) {
        grid-row: 3 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      & .product-grid-inner-col {
        display: flex;
        flex-direction: column;
        & .product-grid-inner-row-1 {
          & .product-grid-inner-col-1 {
            & .custom-checkbox.b-custom-control-lg,
            .input-group-lg .custom-checkbox {
              padding-left: 0 !important;
            }
            & h1 {
              padding-left: 1rem;
              font-size: 0.75rem;
              line-height: 1.5rem;
            }
          }
          & .product-grid-inner-col-2 {
          }
        }
        & .product-grid-inner-row-2 {
        }
      }
    }
    & .product-grid-col-4 {
      width: 25% !important;
      padding-left: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }
      @media (max-width: 700px) {
        grid-row: 4 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }

      & .product-grid-inner-col {
        display: flex;
        flex-direction: column;
        & .product-grid-inner-row-1 {
          & .product-grid-inner-col-1 {
            & .custom-checkbox.b-custom-control-lg,
            .input-group-lg .custom-checkbox {
              padding-left: 0 !important;
            }
            & h1 {
              padding-left: 1rem;
              font-size: 0.75rem;
              line-height: 1.5rem;
            }
          }
          & .product-grid-inner-col-2 {
          }
        }
        & .product-grid-inner-row-2 {
        }
      }
    }
  }

  & .product-grid-row-2 {
    margin-top: 4rem;

    @media (max-width: 800px) {
      margin-top: 2rem;
    }
    @media (max-width: 400px) {
      margin-top: 0;
    }
  }
}
</style>
