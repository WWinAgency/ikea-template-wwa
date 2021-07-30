<template>
  <div class="homePageRight">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage">
        <PaginaLoja />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "../../Header/Header.vue";
import Footer from "../../Footer/Footer.vue";
import PaginaLoja from "../../PaginaLoja/PaginaLoja.vue";

export default {
  components: { Header, Footer, PaginaLoja },
};
</script>

<style></style>
