<template>
  <div>
    <div class="col-2-row-1">
      Como gostaria de receber a sua encomenda?
    </div>
    <div class="col-2-row-2">
      <div class="row-2-col">
        <div class="col-row-1">Disponibilidade de entrega/recolha para:</div>
        <div class="col-row-2">
          <strong>
            2780-272{{ codigoPostal }}
            <a class="editar" @click="activateCodigoPostal">Editar</a></strong
          >
        </div>
      </div>
    </div>
    <div class="col-2-row-3">
      <a id="buttonDelivery" @click="setDelivery" class="row-3-col-1">
        <div class="col-1-col-1">
          <b-icon
            class="truck"
            icon="truck"
            scale="1.2"
            variant="dark"
          ></b-icon>
        </div>
        <div class="col-1-col-2">Serviço de entrega</div>
      </a>
      <a id="buttonCollect" @click="setCollect" class="row-3-col-2">
        <div class="col-2-col-1">
          <b-icon class="shop" icon="shop" scale="1.2" variant="dark"></b-icon>
        </div>
        <div class="col-2-col-2">Click and collect</div>
      </a>
    </div>
    <div class="col-2-row-4">
      <div class="delivery">
        <div class="tipoEntrega1">
          <div
            @click="setDelivery"
            id="containerDelivery"
            class="containerDelivery"
          >
            <div class="col-1">
              <div class="row-1"><strong>Entrega no passeio</strong></div>
              <div class="row-2">Entregue no exterior ou à porta do prédio</div>
            </div>
            <div class="col-2">
              <div class="row-1"><strong>29€</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2-row-5">
      <div class="collect">
        <div class="tipoEntrega1">
          <div
            @click="setCollect"
            id="containerCollect"
            class="containerCollect"
          >
            <div class="col-1">
              <div class="row-1"><strong>Entrega no passeio</strong></div>
              <div class="row-2">Entregue no exterior ou à porta do prédio</div>
              <div class="row-3"><strong>Data de entrega</strong></div>
              <div class="row-4">9.9.2021 13:00 - 17:00</div>
              <div class="row-5"><a href="#">Editar</a></div>
            </div>
            <div class="col-2">
              <div class="row-1"><strong>39€</strong></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2-row-6">
      <div class="inputMontagem">
        <div class="input-row-1">Interessado no Serviço de montagem?</div>
        <div class="input-row-2">
          <div class="row-2-col-1"><input type="checkbox" /></div>
          <div class="row-2-col-2">
            Pretendo receber um orçamento para o Serviço montagem.
          </div>
        </div>
      </div>
    </div>
    <div class="col-2-row-7">
      <div class="buttonSeguinte">
        <button @click="activateInformacoesPessoais" class="seguinte">
          Seguinte
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      delivery: true,
    };
  },
  props: {
    activateCodigoPostal: { type: Function },
    activateInformacoesPessoais: { type: Function },
  },
  computed: {},

  methods: {
    setDelivery() {
      this.delivery = true;

      var containerDelivery = document.getElementById("containerDelivery");
      var containerCollect = document.getElementById("containerCollect");

      var deliveryButton = document.getElementById("buttonDelivery");
      var collectButton = document.getElementById("buttonCollect");

      containerDelivery.style.border = "2px solid #0000FF";
      containerCollect.style.border = "1px solid #c8c8c8";

      deliveryButton.style.borderBottom = "2px solid #0000FF";
      collectButton.style.border = "none";
    },

    setCollect() {
      this.delivery = false;
      var containerDelivery = document.getElementById("containerDelivery");
      var containerCollect = document.getElementById("containerCollect");

      var deliveryButton = document.getElementById("buttonDelivery");
      var collectButton = document.getElementById("buttonCollect");

      containerDelivery.style.border = "1px solid #c8c8c8";
      containerCollect.style.border = "2px solid #0000FF";

      deliveryButton.style.border = "none";
      collectButton.style.borderBottom = "2px solid #0000FF";
    },
  },
};
</script>

<style lang="scss">
.col-2-row-1 {
  font-size: 2.25rem;
  letter-spacing: -0.03938rem;
  line-height: 1.33333;
  font-weight: 700;
  margin-bottom: 40px;
}
.col-2-row-2 {
  font-size: 1rem;
  letter-spacing: -0.03938rem;
  line-height: 1.33333;
  margin-bottom: 1.5rem;
  & .row-2-col {
    & .col-row-2 {
      & .editar {
        color: black;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
.col-2-row-3 {
  display: flex;
  width: 100%;
  padding-left: 0.1rem;
  & .row-3-col-1 {
    display: flex;
    margin-right: 2rem;
    align-items: center;
    border: none;
    text-decoration: none;
    padding-bottom: 0.5rem;
    color: black;
    & .col-1-col-1 {
      padding-right: 1rem;
    }
  }
  & .row-3-col-2 {
    display: flex;
    align-items: center;

    padding-bottom: 0.5rem;
    text-decoration: none;
    color: black;
    & .col-2-col-1 {
      padding-right: 1rem;
    }
    & .col-2-col-2 {
      & .col-2-row-2 {
        color: black;
      }
    }
  }
}
.col-2-row-4 {
  & .delivery {
    & .tipoEntrega1 {
      & .containerDelivery {
        display: flex;
        border: 1px solid #c8c8c8;
        padding: 1.25rem 1.5rem;
        min-height: 3.25rem;
        font-size: 0.875rem;
        line-height: 1.57;
        border-radius: 8px;

        &:hover {
          border: 1px solid #888888;
        }
        & .col-1 {
          width: 70%;
          & .row-1 {
          }
          & .row-2 {
          }
        }

        & .col-2 {
          width: 30%;
          display: flex !important;
          flex-direction: column;
          align-items: flex-end !important;
          & .row-1 {
            width: auto !important;
          }
        }
      }
    }
  }
}
.col-2-row-5 {
  margin: 1.5rem 0;
  & .collect {
    & .tipoEntrega1 {
      & .containerCollect {
        display: flex;
        border: 1px solid #c8c8c8;
        padding: 1.25rem 1.5rem;
        min-height: 3.25rem;
        font-size: 0.875rem;
        line-height: 1.57;
        border-radius: 8px;

        &:hover {
          border: 1px solid #888888;
        }
        & .col-1 {
          width: 70%;
          & .row-1 {
            margin-bottom: 0.25rem;
          }
          & .row-2 {
          }
          & .row-3 {
            margin-top: 2rem;
            align-items: flex-start;
            justify-content: flex-start;
            margin-bottom: 0.25rem;
          }
          & .row-4 {
            margin-bottom: 1rem;
          }
          & .row-5 {
            display: flex;
            & a {
              display: flex;
              border: 1px solid #dfdfdf;
              height: 2.5rem;
              padding: 0 1.5rem;
              border-radius: 64px;
              justify-content: center;
              align-items: center;
              width: auto !important;
              color: black;
              font-weight: 700;
              text-decoration: none;
              font-size: 0.75rem;
              line-height: 1.3333333333;

              &:hover {
                border: 1px solid #888888;
              }
            }
          }
        }

        & .col-2 {
          width: 30%;
          display: flex !important;
          flex-direction: column;
          align-items: flex-end !important;
          & .row-1 {
            width: auto !important;
          }
        }
      }
    }
  }
}
.col-2-row-6 {
  margin-bottom: 2rem;
  & .inputMontagem {
    & .input-row-1 {
      color: #111;
      font-size: 1rem;
      line-height: 1.5;
      font-weight: 700;
      margin-bottom: 0.2rem;
    }
    & .input-row-2 {
      display: flex;
      align-items: center;
      padding-left: 0.1rem;

      & .row-2-col-1 {
        margin-right: 1rem;
        display: flex;
        align-items: center;
        & input {
          height: 20px;
          width: 20px;
        }
      }
      & .row-2-col-2 {
        font-size: 0.875rem;
        line-height: 1.71429;
      }
    }
  }
}
.col-2-row-7 {
  & .seguinte {
    background-color: #0058a3;
    border: 1px solid #0058a3;
    height: 3.5rem;
    width: 100%;
    border-radius: 64px;
    color: #fff;
    font-size: 1rem;
    line-height: 1.7142857143;
    font-weight: 700;
  }
}
</style>
