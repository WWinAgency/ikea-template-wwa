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

<style></style>
