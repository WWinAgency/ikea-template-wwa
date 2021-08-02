<template>
  <div class="homePageRight">
    <div class="content">
      <div class="header"><HeaderRight /></div>
      <div class="mainPage">
        <MainPage />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import HeaderRight from "../../Header/HeaderRight.vue";
import Footer from "../../Footer/Footer.vue";
import MainPage from "../../MainPage/MainPage.vue";

export default {
  components: { HeaderRight, Footer, MainPage },
};
</script>

<style lang="scss">
.homePageRight {
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
    & .header {
      margin-bottom: 2rem !important;

      @media (max-width: 950px) {
        margin-bottom: 6rem !important;
      }
    }
  }
}
</style>
