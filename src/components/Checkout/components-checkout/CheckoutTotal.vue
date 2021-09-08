<template>
  <div class="checkoutTotal">
    <div class="outter-row">
      <div class="row-1">
        <div class="row-1-col-1">A sua encomenda</div>
        <div class="row-1-col-2"><a href="">Editar</a></div>
      </div>
      <div class="row-2">
        <div class="row-2-col-1">
          <div class="list-container">
            <div
              v-for="(item, index) in cart"
              :key="index"
              class="product-checkout"
            >
              <div class="imagem-checkout">
                <img class="img" :src="item.imgSrc" />
                <div class="description">
                  <div class="text-dark row">
                    <strong class="px-0">{{ item.name }}</strong>
                  </div>
                  <div class="row">{{ item.type }}</div>
                  <div class="row">{{ item.utility }}</div>
                  <div class="row">{{ item.code }}</div>
                  <div class="row">Qtd.{{ item.qnty }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-2-col-2">
          <div class="button-container">
            <a class="button" href="">
              <b-icon
                class="remove-icon"
                icon="arrow-right"
                scale="1.2"
                variant="dark"
              ></b-icon
            ></a>
          </div>
        </div>
      </div>
      <div class="row-3">
        <div class="row-3-col">
          <div class="row-3-row-1">Resumo da encomenda</div>
          <div class="row-3-row-2">
            <div class="row-2-col-1">Custo total da entrega</div>
            <div class="row-2-col-2">
              Este subtotal ainda não inclui o custo de entrega
            </div>
          </div>
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-4">
        <div class="row-4-row-1">
          <div class="row-1-col-1">Subtotal excl. IVA</div>
          <div class="row-1-col-2">{{ subtotalSIVA }} €</div>
        </div>
        <div class="row-4-row-2">
          <div class="row-2-col-1">IVA</div>
          <div class="row-2-col-2">{{ iva }} €</div>
        </div>
        <div class="row-4-row-3">
          <div class="row-3-col-1">Subtotal</div>
          <div class="row-3-col-2">{{ subtotal }} €</div>
        </div>
        <div class="row-4-row-4">
          <div class="row-4-col-1">
            <b-icon
              class="lock-icon"
              icon="bootstrap-reboot"
              scale="1.2"
              variant="dark"
            ></b-icon>
          </div>
          <div class="row-4-col-2">365 dias para mudar as ideias</div>
        </div>
        <div class="row-4-row-5">
          <div class="row-5-col-1">
            <b-icon
              class="lock-icon"
              icon="shield-lock"
              scale="1.2"
              variant="dark"
            ></b-icon>
          </div>
          <div class="row-5-col-2">
            Compra segura com encriptação de dados SSL
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtotalSIVA: Number,
    iva: Number,
    subtotal: Number,
  },
  data() {
    return {
      cart: [
        {
          imgSrc: "https://picsum.photos/500/500?random=1",
          name: "BYGGLEK",
          type: "Conj.201 peças LEGO®",
          utility: "várias cores",
          code: "204.368.88",
          qnty: 1,
        },
        {
          imgSrc: "https://picsum.photos/500/500?random=2",
          name: "TRÅDFRI",
          type: "botão de atalho",
          utility: "branco",
          code: "403.563.81",
          qnty: 1,
        },
        {
          imgSrc: "https://picsum.photos/500/500?random=3",
          name: "MALVIK",
          type: "colchão de espuma",
          utility: "firme/branco",
          code: "502.722.63",
          qnty: 1,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.checkoutTotal {
  width: 90%;

  @media (max-width: 1000px) {
    width: 100%;
  }
  & .outter-row {
    & .costum-hr {
      height: 0.15rem;
      opacity: 1;
    }
    & .row-1 {
      display: flex;
      flex-direction: row;

      & .row-1-col-1 {
        width: 50%;
        display: flex;
        flex-direction: column;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.5;
      }
      & .row-1-col-2 {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: right;
        & a {
          color: #333;
          text-decoration: none;
          font-size: 1rem;
          line-height: 1.5;

          &:hover {
            color: black;
            text-decoration: underline;
          }
        }
      }
    }

    & .row-2 {
      display: flex;
      width: 100%;
      flex-direction: row;
      align-items: center;

      & .row-2-col-1 {
        width: 90%;
        display: flex;
        flex-direction: column;

        & .list-container {
          width: auto;
          display: flex;

          @media (max-width: 1000px) {
            flex-direction: column;
          }

          & .product-checkout {
            @media (max-width: 1000px) {
              margin-bottom: 1rem;
            }
            & .imagem-checkout {
              margin-right: 0.5rem;

              @media (max-width: 1000px) {
                display: flex;
                align-items: center;
              }
              & .img {
                max-width: 70px !important;

                @media (max-width: 1000px) {
                  margin-right: 1rem;
                }
              }

              & .description {
                display: none;
                @media (max-width: 1000px) {
                  display: flex;
                  flex-direction: column;
                }
                & .row {
                  color: #666;
                  font-size: 0.75rem;
                  line-height: 1.57;
                  padding: 0;
                }
              }
            }
          }
        }
      }
      & .row-2-col-2 {
        width: 10%;
        display: flex;
        flex-direction: column;

        @media (max-width: 1000px) {
          display: none;
        }

        & .button-container {
          width: 100%;
          display: flex;

          & .button {
            width: 2.5rem;
            height: 2.5rem;
            padding: 0 0.5rem;
            border: 1px solid #dfdfdf;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 64px;

            &:hover {
              border: 1px solid darkgrey;
            }
          }
        }
      }
    }

    & .row-3 {
      & .row-3-col {
        width: 100%;
        & .row-3-row-1 {
          margin-bottom: 1.25rem;
          color: #333;
          line-height: 1.57;
          font-size: 0.875rem;
          font-weight: 700;
        }
        & .row-3-row-2 {
          display: flex;
          width: 100%;
          align-items: top;
          & .row-2-col-1 {
            width: 50%;
            text-align: left;
            color: #333;
            font-size: 0.875rem;
            line-height: 1.57;
          }
          & .row-2-col-2 {
            width: 50%;
            text-align: right;
            color: #333;
            font-size: 0.875rem;
            line-height: 1.57;
          }
        }
      }
    }
    & .row-4 {
      & .row-4-row-1 {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1.25rem;
        & .row-1-col-1 {
          width: 50%;
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.57;
          color: #949494;
          font-weight: 400;
        }
        & .row-1-col-2 {
          width: 50%;
          text-align: right;
          font-size: 0.875rem;
          line-height: 1.57;
          color: #949494;
          font-weight: 400;
        }
      }
      & .row-4-row-2 {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1.25rem;
        & .row-2-col-1 {
          width: 50%;
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.57;
          color: #949494;
          font-weight: 400;
        }
        & .row-2-col-2 {
          width: 50%;
          text-align: right;
          font-size: 0.875rem;
          line-height: 1.57;
          color: #949494;
          font-weight: 400;
        }
      }
      & .row-4-row-3 {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1.25rem;
        & .row-3-col-1 {
          width: 50%;
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.57;
          color: #333;
          font-weight: 700;
        }
        & .row-3-col-2 {
          width: 50%;
          text-align: right;
          font-size: 1.375rem;
          line-height: 1;
        }
      }
      & .row-4-row-4 {
        display: flex;
        width: 100%;
        align-items: center;
        margin-bottom: 1.25rem;
        padding: 0 0.1rem 0 0.1rem;
        & .row-4-col-1 {
          width: 10%;
          text-align: left;
        }
        & .row-4-col-2 {
          width: 90%;
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.571;
          font-weight: 700;
        }
      }
      & .row-4-row-5 {
        display: flex;
        width: 100%;
        align-items: top;
        margin-bottom: 1.25rem;
        padding: 0 0.1rem 0 0.1rem;
        & .row-5-col-1 {
          width: 10%;
          text-align: left;
        }
        & .row-5-col-2 {
          width: 90%;
          text-align: left;
          font-size: 0.875rem;
          line-height: 1.571;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
