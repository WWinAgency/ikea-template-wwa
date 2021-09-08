<template>
  <div class="metodoPagamento">
    <div class="row-1">
      <div class="row-1-col">
        <div class="col-row">
          <a class="cartao-presente" href=""
            >Utilizar um cartão presente/devolução</a
          >
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="cartaoBancario" type="radio" />
          </div>
          <div class="col-2">Cartão bancário</div>
          <div class="col-3"></div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="paypal" type="radio" />
          </div>
          <div class="col-2">Paypal</div>
          <div class="col-3"></div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input
              class="input-radio"
              value="referenciaMultibanco"
              type="radio"
            />
          </div>
          <div class="col-2">Referência Multibanco</div>
          <div class="col-3"></div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input
              class="input-radio"
              value="cartao-linhaDeCredito"
              type="radio"
            />
          </div>
          <div class="col-2">Cartão / Linha de Crédito IKEA</div>
          <div class="col-3"></div>
        </div>
      </div>
    </div>
    <div class="row-2">
      <div class="info">
        Depois de clicar no botão "Pagar", dispõe de 2 horas para se dirigir ao
        Multibanco ou Homebanking de modo a finalizar o pagamento
      </div>
      <div class="termos-e-condicoes">
        <input class="input-checkbox" type="checkbox" />
        <span class="texto-input"
          >Li e compreendi os
          <a href="/termos-e-condicoes">Termos e condições</a>.</span
        >
      </div>
    </div>
    <div class="row-3">
      <div class="row-3-col">
        <div class="col-row">
          <b-button class="button-pagar"
            ><div class="button-col-1">Pagar {{ subtotal }} €</div>
            <div class="button-col-2">
              <b-icon
                class="arrow-right-circle-fill"
                icon="arrow-right-circle-fill"
                scale="2"
                variant="dark"
              ></b-icon></div
          ></b-button>
        </div>
        <div class="col-row">
          <div class="secure-container">
            <div class="row-1">
              <img
                class="img"
                src="../../../../assets/images/visa-secure.png"
              /><img
                class="img"
                src="../../../../assets/images/mastercard.png"
              /><img
                class="img"
                src="../../../../assets/images/americanexpress.png"
              />
            </div>
            <div class="row-2">
              <a href="/3DSECURE">Saber mais sobre 3D Secure</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    subtotal: Number,
  },
};
</script>

<style lang="scss">
.metodoPagamento {
  & .row-1 {
    margin-top: 2rem;
    & .row-1-col {
      & .col-row {
        margin-bottom: 2rem !important;
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        & .cartao-presente {
          color: black;
        }

        & .col-1 {
          width: 10% !important;
          & .input-radio {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
        & .col-2 {
          width: 90% !important;
        }
      }
    }
  }

  & .row-2 {
    display: flex;
    flex-direction: column;
    & .info {
    }

    & .termos-e-condicoes {
      margin-top: 2rem !important;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      & .input-checkbox {
        height: 1.5rem;
        width: 1.5rem;
      }

      & .texto-input {
        margin-left: 0.5rem;
        width: 100%;

        & a {
          color: black;
        }
      }
    }
  }

  & .row-3 {
    margin-top: 2rem !important;
    width: 100%;
    & .row-3-col {
      width: 100%;
      & .col-row {
        width: 100%;
        margin-bottom: 2rem !important;
        & .secure-container {
          background-color: #e8e8e8;
          padding: 2rem;
          display: flex;
          flex-direction: column;

          & .row-1 {
            margin: 0 0 1rem 0 !important;
            display: flex !important;
            flex-direction: row !important;
            & .img {
              height: 2.5rem !important;
              margin-right: 0.2rem !important;
            }
          }
          & .row-2 {
            & a {
              color: #929292;
            }
          }
        }
        & .button-pagar {
          height: 6rem;
          width: 100%;
          display: flex;
          align-items: center;
          padding: 2rem;
          background-color: #d8d8d8;
          border: 1px solid #d8d8d8;

          & .button-col-1 {
            width: 50%;
            display: flex;
            font-size: 1.2rem;
            font-weight: 700;
            color: #929292;
          }
          & .button-col-2 {
            width: 50%;
            text-align: right;

            & .arrow-right-circle-fill {
              color: grey !important;
            }
          }
        }
      }
    }
  }
}
</style>
