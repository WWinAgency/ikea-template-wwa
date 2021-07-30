<template>
  <div class="paginaPoliticaDePrivacidade">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage">
        <PoliticaPrivacidade />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "../../Header/Header.vue";
import Footer from "../../Footer/Footer.vue";
import PoliticaPrivacidade from "../../PoliticaDePrivacidade/PoliticaPrivacidade.vue";

export default {
  components: { Header, Footer, PoliticaPrivacidade },
};
</script>

<style lang="scss">
.paginaPoliticaDePrivacidade {
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
