<template>
  <div class="paginaDeLoja">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage">
        Lista De Favoritos
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "../../Header/Header.vue";
import Footer from "../../Footer/Footer.vue";

export default {
  components: { Header, Footer },
};
</script>

<style lang="scss">
.paginaDeLoja {
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
