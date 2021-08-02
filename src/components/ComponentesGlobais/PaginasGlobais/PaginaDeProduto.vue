<template>
  <div class="paginaDeProduto">
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

<style lang="scss">
.paginaDeProduto {
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
