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
      <div class="politica-privacidade-inner-row-4"></div>
      <div class="politica-privacidade-inner-row-5"></div>
      <div class="politica-privacidade-inner-row-6"></div>
      <div class="politica-privacidade-inner-row-7"></div>
    </div>
  </div>
</template>

<script>
import InfoPoliticaPrivacidade from "./componentes-politica-privacidade/InfoPoliticaPrivacidade.vue";
import PathPrivacidade from "./componentes-politica-privacidade/PathPrivacidade.vue";
import PoliticaPrivacidadeAccordion from "./componentes-politica-privacidade/PoliticaPrivacidadeAccordion.vue";
export default {
  components: {
    PathPrivacidade,
    InfoPoliticaPrivacidade,
    PoliticaPrivacidadeAccordion,
  },
};
</script>

<style></style>
