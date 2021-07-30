<template>
  <div class="homePageRight">
    <div class="content">
      <div class="header"><HeaderRight /></div>
      <div class="mainPage">
        <PaginaProduto />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import HeaderRight from "../../Header/HeaderRight.vue";
import Footer from "../../Footer/Footer.vue";
import PaginaProduto from "../../PaginaProduto/PaginaProduto.vue";

export default {
  components: { HeaderRight, Footer, PaginaProduto },
};
</script>

<style></style>
