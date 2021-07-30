<template>
  <div class="homePageRight">
    <div class="content">
      <div class="header"><HeaderRight /></div>
      <div class="mainPage">
        <PaginaLoja />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import HeaderRight from "../../Header/HeaderRight.vue";
import Footer from "../../Footer/Footer.vue";
import PaginaLoja from "../../PaginaLoja/PaginaLoja.vue";

export default {
  components: { HeaderRight, Footer, PaginaLoja },
};
</script>

<style></style>
