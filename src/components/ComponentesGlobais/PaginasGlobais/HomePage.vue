<template>
  <div class="homePage">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage">
        <MainPage />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "../../Header/Header.vue";
import Footer from "../../Footer/Footer.vue";
import MainPage from "../../MainPage/MainPage.vue";

export default {
  components: { Header, Footer, MainPage },
};
</script>

<style></style>
