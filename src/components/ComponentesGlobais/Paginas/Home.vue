<template>
  <div class="home">
    <div class="content">
      <div class="header">
        <Header />
      </div>
      <router-view></router-view>
    </div>
    <Footer />
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
.home {
  & .content {
    width: 80%;
    height: 100% !important;
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
