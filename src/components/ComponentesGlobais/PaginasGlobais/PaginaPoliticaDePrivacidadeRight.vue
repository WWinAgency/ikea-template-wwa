<template>
  <div class="paginaPoliticaDePrivacidadeRight">
    <div class="content">
      <div class="header"><HeaderRight /></div>
      <div class="mainPage">
        <PoliticaPrivacidade />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import HeaderRight from "../../Header/HeaderRight.vue";
import Footer from "../../Footer/Footer.vue";
import PoliticaPrivacidade from "../../PoliticaDePrivacidade/PoliticaPrivacidade.vue";

export default {
  components: { HeaderRight, Footer, PoliticaPrivacidade },
};
</script>

<style lang="scss">
.paginaPoliticaDePrivacidadeRight {
  & .content {
    width: 80%;
    margin: 1rem auto;
    transition: 0.3s ease-in-out;

    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 980px) {
      width: 90%;
      overflow: hidden;
    }
    @media (max-width: 768px) {
      width: 90%;
      overflow: hidden;
    }
  }
}
</style>
