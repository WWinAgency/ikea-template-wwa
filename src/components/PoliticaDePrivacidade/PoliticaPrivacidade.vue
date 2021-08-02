<template>
  <div class="politicaPrivacidade">
    <div class="politica-privacidade-outter-col">
      <div class="politica-privacidade-inner-row-1"><PathPrivacidade /></div>
      <hr class="costum-hr" />
      <div class="politica-privacidade-inner-row-2">
        <InfoPoliticaPrivacidade
          titulo="Política de Privacidade"
          paragrafo1="Na
        IKEA respeitamos a sua privacidade e agradecemos a confiança que
        deposita em nós. Nesta Política de Privacidade explicamos quem somos,
        para que finalidades podemos usar os seus dados, como os tratamos, com
        quem os partilhamos, durante quanto tempo os conservamos, bem como as
        formas de entrar em contacto connosco e de exercer os seus direitos."
          paragrafo2pt1="Os seus dados serão tratados pela"
          empresa="IKEA PORTUGAL - MÓVEIS E
        DECORAÇÃO, LDA."
          paragrafo2pt2=", pessoa coletiva número 505416654, com sede na Rua 28 de
        Setembro, EN 250, 2660 - 001 Frielas, doravante IKEA ou “nós”. Esta
        sociedade é a responsável pelo tratamento de dados pessoais na aceção do
        Regulamento Geral sobre a Proteção de Dados."
          paragrafo3="Para as questões relacionadas com o tratamento dos seus dados pessoais deverá contactar-nos através dos seguintes meios:"
          telefone="21 989 99 45"
          morada="Rua 28 de Setembro"
          numeroPorta="EN 250"
          codigoPostal="2660 - 001"
          localidade="Frielas"
          email="privacidade@IKEA.com"
        />
      </div>
      <div class="politica-privacidade-inner-row-3">
        <PoliticaPrivacidadeAccordion />
      </div>
      <div class="politica-privacidade-inner-row-4">
        <Info1PPoliticaPrivacidade />
      </div>
      <div class="politica-privacidade-inner-row-5">
        <PoliticaPrivacidadeAccordion2 />
      </div>
      <div class="politica-privacidade-inner-row-6">
        <Info2PPoliticaPrivacidade />
      </div>
      <div class="politica-privacidade-inner-row-7">
        <button class="goTop" @click="scrollToTop">
          <span class="button-icon">
            <b-icon icon="caret-up" scale="1.9" variant="dark"></b-icon>
          </span>
          <span class="button-text">Voltar ao topo</span>
        </button>
        <div class="share">
          <SidebarPartilhaRight />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SidebarPartilhaRight from "../ComponentesGlobais/Sidebars/SidebarPartilhaRight.vue";
import InfoPoliticaPrivacidade from "./componentes-politica-privacidade/InfoPoliticaPrivacidade.vue";
import Info1PPoliticaPrivacidade from "./componentes-politica-privacidade/Info1PPoliticaPrivacidade.vue";
import Info2PPoliticaPrivacidade from "./componentes-politica-privacidade/Info2PPoliticaPrivacidade.vue";
import PathPrivacidade from "./componentes-politica-privacidade/PathPrivacidade.vue";
import PoliticaPrivacidadeAccordion from "./componentes-politica-privacidade/PoliticaPrivacidadeAccordion.vue";
import PoliticaPrivacidadeAccordion2 from "./componentes-politica-privacidade/PoliticaPrivacidadeAccordion2.vue";
export default {
  components: {
    PathPrivacidade,
    InfoPoliticaPrivacidade,
    PoliticaPrivacidadeAccordion,
    PoliticaPrivacidadeAccordion2,
    Info1PPoliticaPrivacidade,
    Info2PPoliticaPrivacidade,
    SidebarPartilhaRight,
  },
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
};
</script>

<style lang="scss">
.html {
  scroll-behavior: smooth;
}
.politicaPrivacidade {
  margin-top: 2rem !important;

  & .politica-privacidade-outter-col {
    & .politica-privacidade-inner-row-7 {
      display: flex;
      flex-direction: row;
      align-items: center;
      @media (max-width: 1200px) {
        display: flex;
        justify-content: center;
      }

      & .share {
      }

      & .goTop {
        display: inline-flex;
        align-items: center;
        overflow: hidden;
        width: auto;
        max-width: 2.5rem;
        height: 2.5rem;
        padding: 0rem;
        margin-right: 0.5rem;
        border-radius: 64px;
        background-color: #f5f5f5;
        border: 1px solid #f5f5f5;
        color: black;
        -webkit-transition: max-width 0.5s;
        transition: max-width 0.5s;

        @media (max-width: 1200px) {
          overflow: inherit;
          max-width: 320px;
          padding: 0 1rem 0 1rem;
          background-color: #f5f5f5;
          border: 1px solid #f5f5f5;
        }

        &:hover {
          max-width: 320px;
          height: 2.5rem;
          background-color: #c8c8c8;
          border: 1px solid #c8c8c8;
          padding: 0 1rem 0 1rem;
        }

        & .button-icon {
          padding-left: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        & .button-text {
          padding: 0 1rem 0 1rem;
          font-size: 0.8rem;
          line-height: 1.3333333333;
          font-weight: 700;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
