<template>
  <div class="homePageRight">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage">
        <PaginaProduto />
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "../../Header/HeaderRight.vue";
import Footer from "../../Footer/Footer.vue";
import PaginaProduto from "../../PaginaProduto/PaginaProduto.vue";

export default {
  components: { Header, Footer, PaginaProduto },
};
</script>

<style></style>
