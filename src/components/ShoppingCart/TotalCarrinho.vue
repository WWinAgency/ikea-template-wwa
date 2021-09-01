<template>
  <div class="totalCarrinho">
    <div class="outter-col">
      <div class="row-1">Resumo da encomenda</div>
      <div class="row-2">
        <div class="row-2-col-1">Custo total da entrega</div>
        <div class="row-2-col-2">
          Este subtotal ainda não inclui o cesto de entrega
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-3">
        <div class="row-3-col-1">Subtotal excl. IVA</div>
        <div class="row-3-col-2">subtotal{{ subtotal }}</div>
      </div>
      <div class="row-4">
        <div class="row-4-col-1">IVA</div>
        <div class="row-4-col-2">IVA {{ iva }}</div>
      </div>
      <div class="row-5">
        <div class="row-5-col-1">Subtotal</div>
        <div class="row-5-col-2">subtotalPosIva{{ subtotalPosIva }}</div>
      </div>

      <div class="row-6">
        <div class="info-registo">
          <div class="registo-col-1">
            <div class="registo-row-1">Tem uma conta IKEA?</div>
            <div class="registo-row-2">
              <a>Registe-se ou inicie sessão</a> para uma compra mais rápida e
              ter acesso aos benefícios IKEA Family
            </div>
          </div>
          <div class="registo-col-2">
            <b-icon icon="person" scale="2" variant="dark"></b-icon>
          </div>
        </div>
      </div>
      <div class="row-7">
        <button class="continuar">
          <div class="continuar-col-1">Continuar</div>
          <div class="continuar-col-2">
            <b-icon
              icon="arrow-right-circle-fill"
              variant="light"
              scale="2"
            ></b-icon>
          </div>
        </button>
      </div>
      <hr class="costum-hr-2" />
      <div class="row-8">
        <button
          @click="openCollapseDiscount()"
          class="use-discount"
          v-b-toggle.collapse-1
          variant="light"
        >
          <div class="button-col-1">Use o código de desconto</div>
          <div class="button-col-2">
            <b-icon
              id="caret-down"
              class="caret-down"
              icon="caret-down"
              scale="1"
              variant="dark"
            ></b-icon>
          </div>
        </button>
        <b-collapse id="collapse-1" class="discount-collapse mt-2">
          <b-card
            ><div class="card-inner-col">
              <div class="card-row-1">
                <div class="row-1-col-1">
                  <b-icon
                    icon="info-circle"
                    class="info-circle"
                    variant="primary"
                    scale="1.3s"
                  ></b-icon>
                </div>
                <div class="row-1-col-2">
                  Só pode usar um código de desconto por encomenda
                </div>
              </div>
              <div class="card-row-2">
                <input
                  class="discount"
                  type="text"
                  placeholder="Código de desconto"
                />
                <hr class="costum-hr" />
                <div class="col-exemplo">
                  <div class="exemplo-top">
                    É necessário um códido de desconto
                  </div>
                </div>
              </div>
              <div class="card-row-3">
                <button
                  @mousedown="applyDiscount()"
                  class="obter-desconto"
                  type="submit"
                >
                  Obter este desconto
                </button>
              </div>
            </div></b-card
          >
        </b-collapse>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      discount: false,
      discountCollapseOpen: false,
    };
  },
  methods: {
    openCollapseDiscount() {
      this.discountCollapseOpen = !this.discountCollapseOpen;
      if (this.discountCollapseOpen == true) {
        document.getElementById("caret-down").style.transform =
          "rotate(180deg)";
      } else {
        document.getElementById("caret-down").style.transform = "rotate(0)";
      }
    },
    applyDiscount() {
      this.discount = !this.discount;
      if (this.discount == true) {
        document.getElementsByClassName("obter-desconto").style.width = "15rem";
        document.getElementsByClassName("obter-desconto").style.height = "3rem";
      } else {
        document.getElementsByClassName("obter-desconto").style.width = "16rem";
        document.getElementsByClassName("obter-desconto").style.height =
          "3.5rem";
      }
    },
  },
};
</script>

<style lang="scss">
.totalCarrinho {
  padding: 0 0 0 6rem;
  & .outter-col {
    & .row-1 {
      font-size: 0.875rem;
      font-weight: 700;
      color: #333;
      line-height: 1.57;
    }

    & .row-2 {
      display: flex;
      margin: 1.25rem 0 1.25rem 0;
      & .row-2-col-1 {
        text-align: left;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
      }
      & .row-2-col-2 {
        text-align: right;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
      }
    }
    & .costum-hr {
      height: 0.12rem;
      color: black;
      opacity: 1;
    }

    & .row-3 {
      display: flex;
      margin: 0 0 1.25rem 0;
      & .row-3-col-1 {
        text-align: left;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
        width: 50%;
      }
      & .row-3-col-2 {
        text-align: right;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
        width: 50%;
      }
    }

    & .row-4 {
      display: flex;
      margin: 0 0 1.25rem 0;
      & .row-4-col-1 {
        text-align: left;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
        width: 50%;
      }
      & .row-4-col-2 {
        text-align: right;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
        width: 50%;
      }
    }

    & .row-5 {
      display: flex;
      margin: 0 0 1.25rem 0;
      & .row-5-col-1 {
        text-align: left;
        font-size: 0.875rem;
        color: #333;
        line-height: 1.57;
        width: 50%;
        font-weight: 700;
      }
      & .row-5-col-2 {
        text-align: right;
        font-size: 1.375rem;
        color: #333;
        line-height: 1;
        width: 50%;
        font-weight: 700;
      }
    }

    & .row-6 {
      margin: 2.5rem 0;
      & .info-registo {
        border: 1px solid #dfdfdf;
        padding: 2rem 1.25rem;
        align-items: center;
        display: flex;
        & .registo-col-1 {
          width: 80%;
          & .registo-row-1 {
            font-weight: 700;
            font-size: 1rem;
            line-height: 1.5;
          }
          & .registo-row-2 {
            color: #333;
            font-size: 0.875rem;
            line-height: 1.57;
          }
        }
        & .registo-col-2 {
          width: 20%;
          text-align: center;
        }
      }
    }

    & .row-7 {
      margin: 2.5rem 0;
      & .continuar {
        width: 100%;
        color: white;
        background-color: #0058a3;
        border: 1px solid #0058a3;
        padding: 2.5rem 1.5rem;
        display: flex;
        border-radius: 0.5rem;
        & .continuar-col-1 {
          width: 50%;
          font-size: 1rem;
          font-weight: 700;
          text-align: left;
        }
        & .continuar-col-2 {
          width: 50%;
          text-align: right;
        }
      }
    }

    & .row-8 {
      & .use-discount {
        width: 100%;
        display: flex;
        padding: 0;
        align-items: center;
        border: none;
        background-color: white;

        & .button-col-1 {
          width: 80%;
          text-align: left;
          font-size: 0.875rem;
          color: #484848;
          line-height: 1.5;
          font-weight: 700;
        }
        & .button-col-2 {
          width: 20%;
          text-align: right;
        }
      }
    }

    & .discount-collapse {
      & .card {
        border: none;
        & .card-body {
          padding: 1.5rem 0 4rem 0;
          & .card-inner-col {
            width: 100%;
            & .card-row-1 {
              display: flex;
              width: 100%;
              height: 100%;

              & .row-1-col-1 {
                display: flex;
                width: 10%;

                text-align: center;
                justify-content: center;

                & .info-circle {
                  height: 100%;
                }
              }
              & .row-1-col-2 {
                height: 100%;
                width: 90%;
                line-height: 1.57;
                color: #484848;
                font-size: 0.875rem;
                padding-left: 1rem;
              }
            }
            & .card-row-2 {
              padding: 1.125rem 0 0.25rem;
              width: 100%;
              & .discount {
                width: 100%;
                border: none;
                padding: 0;
                margin-bottom: 0.5rem;
                &:focus,
                textarea:focus,
                select:focus {
                  outline: none;
                }
              }

              & .costum-hr {
                margin: 0 0 0.2rem 0;

                height: 1px;
              }

              & .col-exemplo {
                display: flex;
                flex-direction: column;
                & .exemplo-top {
                  color: #484848;
                  font-size: 0.75rem;
                  line-height: 1.5;
                }
                & .exemplo-bottom {
                  color: #484848;
                  font-size: 0.75rem;
                  line-height: 1.5;
                }
              }
            }

            & .card-row-3 {
              display: flex;
              justify-content: center;
              margin: 1.25rem 0;
              & .obter-desconto {
                border: 1px solid #dfdfdf;
                border-radius: 64px;
                height: 3.5rem;
                padding: 0 2rem;
                width: auto;
                font-weight: 700;
                text-align: center;
                line-height: 1.7142857143;
                font-size: 0.875rem;

                &:hover {
                  border: 1px solid #484848;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
