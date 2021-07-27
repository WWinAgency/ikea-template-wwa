<template>
  <div id="app">
    <div class="content">
      <div class="header"><Header /></div>
      <div class="mainPage"><router-view></router-view></div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";

import Footer from "./components/Footer/Footer.vue";

export default {
  name: "App",
  components: { Header, Footer },
};
</script>

<style lang="scss">
#app {
  display: block;
  width: 100%;
  margin: 1rem auto;
  transition: 0.3s ease-in-out;

  & .content {
    width: 80%;
    margin: auto;
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
      margin-top: 2rem;
      margin-bottom: 4rem;

      @media (max-width: 950px) {
        margin-bottom: 6rem;
      }
    }

    & .mainPage {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
