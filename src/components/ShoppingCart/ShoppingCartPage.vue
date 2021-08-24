<template>
  <div class="shoppingCart">
    <template>
      <!-- v-if="this.$store.state.ShoppingCartModule.cart.length > 0" -->

      <div class="outter-row">
        <div class="outter-col-1">
          <div class="row-1">
            <div class="inner-col-1">
              <div class="title">Cesto das compras</div>
            </div>
            <div class="inner-col-2">
              <a>
                <b-icon
                  class="dots"
                  icon="three-dots"
                  scale="1.3"
                  variant="dark"
                ></b-icon
              ></a>
            </div>
          </div>
          <div class="row-2">
            <b-collapse class="collapseMontagem" id="collapse-3">
              <b-card>
                <div class="outter-col">
                  <div class="row-1">
                    Indique-nos qual a sua localização para verificarmos se o
                    serviço de montagem está disponível
                  </div>
                  <div class="row-2">
                    <div class="inner-row-1"><a>Saiba mais</a></div>
                    <div class="inner-row-2">
                      <input
                        class="zipcode"
                        type="text"
                        placeholder="Código Postal"
                      />
                      <hr class="costum-hr" />
                      <div class="col-exemplo">
                        <div class="exemplo-top">por ex. 1000-001</div>
                        <div class="exemplo-bottom">
                          Insira o seu código postal para envio
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row-3">
                    <button
                      id="disponibilidade"
                      class="verificaDisponibilidade"
                      @mousedown="something()"
                      type="submit"
                    >
                      Verificar disponibilidade
                    </button>
                  </div>
                </div>
              </b-card>
            </b-collapse>
            <a
              @click="changeTitle()"
              v-b-toggle.collapse-3
              class="montagemCollapse"
              >{{ tituloAccordion }}</a
            >
          </div>
        </div>
        <div class="outter-col-2">Fatura Carrinho</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accordionOpen: false,
      tituloAccordion: "Pretende o serviço de montagem?",
      verificaDisponibilidade: false,
    };
  },
  methods: {
    changeTitle() {
      this.accordionOpen = !this.accordionOpen;
      if (this.accordionOpen == true) {
        this.tituloAccordion = "Fechar";
      } else {
        this.tituloAccordion = "Pretende o serviço de montagem?";
      }
    },
    something() {
      this.verificaDisponibilidade = !this.verificaDisponibilidade;
      if (this.verificaDisponibilidade == true) {
        document.getElementById("disponibilidade").style.width = "15rem";
        document.getElementById("disponibilidade").style.height = "3rem";
      } else {
        document.getElementById("disponibilidade").style.width = "16rem";
        document.getElementById("disponibilidade").style.height = "3.5rem";
      }
    },
  },
};
</script>

<style lang="scss">
.shoppingCart {
  width: 100%;
  & .outter-row {
    width: 100%;
    display: flex;
    & .outter-col-1 {
      width: 60%;
      & .row-1 {
        width: 100%;
        display: flex;
        align-items: center;
        & .inner-col-1 {
          width: 80%;
          & .title {
            font-size: 2.25rem;
            line-height: 1.3333333333;
            letter-spacing: -0.039375rem;
            font-weight: 700;
          }
        }
        & .inner-col-2 {
          width: 20%;
          text-align: right;
        }
      }
      & .row-2 {
        margin: 2.5rem 0;

        & .montagemCollapse {
          color: black;
          font-size: 0.875rem;
          line-height: 1.571;
          font-weight: 700;
          margin: 0;
        }

        & .costum-hr {
          margin-top: 0;

          opacity: 1;
        }

        & .collapseMontagem {
          & .card {
            border: none;
            & .card-body {
              border: none;
              padding-left: 0 !important;

              & .outter-col {
                & .row-1 {
                  margin-bottom: 1rem;
                  color: #333;
                  font-size: 0.875rem;
                  line-height: 1.57;
                }
                & .row-2 {
                  margin: 0;

                  & .inner-row-1 {
                    & a {
                      text-decoration: underline;
                      color: #484848;
                      font-weight: 400;
                      font-size: 0.875rem;
                      line-height: 1.57;
                    }
                  }
                  & .inner-row-2 {
                    margin-top: 1rem;

                    & .zipcode {
                      border: none;
                      padding: 0;
                      margin-bottom: 0.5rem;
                      &:focus,
                      textarea:focus,
                      select:focus {
                        outline: none;
                      }
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
                }
                & .row-3 {
                  & .verificaDisponibilidade {
                    border-radius: 64px;
                    height: 3.5rem;
                    align-items: center;
                    padding: 0 2rem;
                    width: auto;
                    border: 1px solid #f5f5f5;
                    background-color: #f5f5f5;
                    font-weight: 700;
                    font-size: 0.875rem;
                    line-height: 1.7142857143;
                    color: black;
                    transition: 0.3s;

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

    & .outter-col-2 {
      width: 40%;
      text-align: center;
    }
  }
}
</style>
