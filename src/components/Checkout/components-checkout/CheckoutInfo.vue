<template>
  <div class="checkoutInfo">
    <div class="outter-col">
      <div class="row-1">
        <div class="row-1-col-1">
          <span v-if="postalOn === true" class="outter-circle-active"
            ><span>1</span></span
          >
          <span v-else class="outter-circle-complete"
            ><span class="text-dark">1</span></span
          >
        </div>
        <div class="row-1-col-2">
          <CodigoPostal
            :activateModoEntrega="activateModoEntrega"
            v-if="codigoPostalOn === true"
          />
          <ModoEntrega
            :activateCodigoPostal="activateCodigoPostal"
            :codigoPostalOn="codigoPostalOn"
            :activateInformacoesPessoais="activateInformacoesPessoais"
            v-if="modoEntregaOn === true"
          />
          <ResumoEntrega
            :editarCodigoPostal="editarCodigoPostal"
            v-if="postalOn === false"
          />
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-2">
        <div class="row-2-col-1">
          <span v-if="informacoes === false" class="outter-circle-inactive"
            ><span>2</span></span
          >
          <span
            v-else-if="informacoesPessoaisOn === true && informacoes === true"
            class="outter-circle-active"
            ><span>2</span></span
          >
          <span
            v-else-if="
              informacoesPessoaisOn === false && questionarioEntrega === true
            "
            class="outter-circle-complete"
            ><span class="text-dark">2</span></span
          >
        </div>
        <div class="row-2-col-2">
          <div v-if="informacoes === false" class="titulo">
            Informações pessoais
          </div>

          <div v-if="informacoesPessoaisOn === true && informacoes === true">
            <InformacoesEnvio
              :activateEntregaEspecifica="activateEntregaEspecifica"
            />
          </div>
          <div v-if="informacoesPessoaisOn === false && informacoes === true">
            <ResumoInformacoes
              :activateEntregaEspecifica="activateEntregaEspecifica"
            />
          </div>
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-3">
        <div class="row-3-col-1">
          <span
            v-if="questionarioEntrega === false && metodoPagamento === false"
            class="outter-circle-inactive"
            ><span>3</span></span
          >
          <span
            v-if="questionarioEntrega === true || metodoPagamento === true"
            class="outter-circle-active"
            ><span>3</span></span
          >
        </div>
        <div class="row-3-col-2">
          <div
            v-if="questionarioEntrega === false && metodoPagamento == false"
            class="titulo"
          >
            Como gostaria de pagar ?
          </div>
          <div v-if="questionarioEntrega === true" class="titulo text-dark">
            Ajude-nos a para que a sua entrega corra da melhor forma possível
          </div>
          <div v-if="metodoPagamento === true" class="titulo text-dark">
            Como gostaria de efetuar o pagamento?
          </div>
          <div v-if="questionarioEntrega === true">
            <QuestionarioEntrega
              :activateMetodoPagamento="activateMetodoPagamento"
            />
          </div>
          <div v-if="metodoPagamento === true">
            <MetodoPagamento :subtotal="subtotal" />
          </div>
        </div>
      </div>
      <hr class="costum-hr" />
    </div>
  </div>
</template>

<script>
import CodigoPostal from "./row-1/CodigoPostal.vue";
import ModoEntrega from "./row-1/ModoEntrega.vue";
import ResumoEntrega from "./row-1/ResumoEntrega.vue";
import InformacoesEnvio from "./row-2/InformacoesEnvio.vue";
import ResumoInformacoes from "./row-2/ResumoInformacoes.vue";
import QuestionarioEntrega from "./row-3/QuestionarioEntrega.vue";
import MetodoPagamento from "./row-3/MetodoPagamento.vue";

export default {
  components: {
    CodigoPostal,
    ModoEntrega,
    ResumoEntrega,
    InformacoesEnvio,
    ResumoInformacoes,
    QuestionarioEntrega,
    MetodoPagamento,
  },
  props: {
    subtotal: Number,
  },
  data() {
    return {
      codigoPostal: "",
      postalOn: true,
      codigoPostalOn: true,
      modoEntregaOn: false,
      informacoes: false,
      informacoesPessoaisOn: false,
      codigoPostalSubmitted: false,
      questionarioEntrega: false,
      metodoPagamento: false,
    };
  },
  methods: {
    activateCodigoPostal() {
      this.codigoPostalOn = !this.codigoPostalOn;
      this.modoEntregaOn = !this.modoEntregaOn;
    },
    editarCodigoPostal() {
      this.codigoPostalOn = !this.codigoPostalOn;
      this.informacoesPessoaisOn = !this.informacoesPessoaisOn;
      this.postalOn = !this.postalOn;
    },
    activateModoEntrega() {
      this.modoEntregaOn = !this.modoEntregaOn;
      this.codigoPostalOn = !this.codigoPostalOn;
    },
    activateInformacoesPessoais() {
      this.postalOn = !this.postalOn;
      this.informacoes = !this.informacoes;
      this.modoEntregaOn = !this.modoEntregaOn;
      this.informacoesPessoaisOn = !this.informacoesPessoaisOn;
    },
    editarInformacoesPessoais() {
      this.informacoesPessoaisOn = !this.informacoesPessoaisOn;
      this.questionarioEntrega = !this.questionarioEntrega;
    },
    activateEntregaEspecifica() {
      this.informacoesPessoaisOn = !this.informacoesPessoaisOn;
      this.questionarioEntrega = !this.questionarioEntrega;
    },
    activateMetodoPagamento() {
      this.questionarioEntrega = !this.questionarioEntrega;
      this.metodoPagamento = !this.metodoPagamento;
    },
  },
};
</script>

<style lang="scss">
.checkoutInfo {
  margin-bottom: 8rem;
  width: 100%;
  & .outter-col {
    width: 90%;

    @media (max-width: 1200px) {
      width: 100%;
    }
    & .costum-hr {
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
    & .row-1 {
      display: flex;
      flex-direction: row;

      @media (max-width: 1000px) {
        flex-direction: column !important;
      }

      & .row-1-col-1 {
        width: 10%;
        margin-right: 2rem;

        @media (max-width: 1000px) {
          width: 100%;
          margin-bottom: 1rem;
        }

        & .outter-circle-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
        & .outter-circle-inactive {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          border-radius: 64px;
          border: 2px solid #929292;
          & span {
            color: #929292;
            font-weight: 700;
          }
        }
        & .outter-circle-complete {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
      }
      & .row-1-col-2 {
        width: 90%;
        @media (max-width: 1000px) {
          width: 100%;
        }
      }
    }

    & .row-2 {
      display: flex;
      align-items: top;
      margin: 0;

      @media (max-width: 1000px) {
        flex-direction: column !important;
      }

      & .row-2-col-1 {
        width: 10%;
        margin-right: 2rem;

        @media (max-width: 1000px) {
          width: 100%;
          margin-bottom: 1rem;
        }

        & .outter-circle-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
        & .outter-circle-inactive {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          border-radius: 64px;
          border: 2px solid #929292;
          & span {
            color: #929292;
            font-weight: 700;
          }
        }
        & .outter-circle-complete {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
      }
      & .row-2-col-2 {
        width: 90%;

        @media (max-width: 1000px) {
          width: 100%;
          margin: 0;
        }

        & .titulo {
          width: 100%;
          color: #929292;
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: 700;
        }
      }
    }
    & .row-3 {
      display: flex;
      align-items: top;
      margin: 0;

      @media (max-width: 1000px) {
        flex-direction: column !important;
      }

      & .row-3-col-1 {
        width: 10%;
        margin-right: 2rem;

        @media (max-width: 1000px) {
          width: 100%;
          margin-bottom: 1rem;
        }
        & .outter-circle-active {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
        & .outter-circle-inactive {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          border-radius: 64px;
          border: 2px solid #929292;
          & span {
            color: #929292;
            font-weight: 700;
          }
        }
        & .outter-circle-complete {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
      }
      & .row-3-col-2 {
        width: 90%;

        & .titulo {
          width: 100%;
          color: #929292;
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
