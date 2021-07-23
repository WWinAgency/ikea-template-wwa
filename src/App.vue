<template>
  <div id="app">
    <div class="content">
      <div class="row">
        <div class="col-1">
          <div class="sidebar"><Sidebar /></div>
        </div>
        <div class="col-2">
          <div class="header"><Header /></div>
        </div>
      </div>
      <div class="mainPage"><MainPage /></div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import Sidebar from "./components/Header/Sidebar.vue";
import Footer from "./components/Footer/Footer.vue";
import MainPage from "./components/MainPage/MainPage.vue";

export default {
  name: "App",
  components: { Header, Footer, MainPage, Sidebar },
};
</script>

<style lang="scss">
#app {
  display: block;
  width: 100%;
  margin: 1rem auto;
  transition: 0.3s ease-in-out;

  & .content {
    width: 70%;
    margin: auto;
    transition: 0.3s ease-in-out;

    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 768px) {
      width: 95%;
      overflow: hidden;
    }
    & .row {
      width: 100%;
      margin: auto;
      align-items: center;
      & .col-1 {
        padding: 0;
        width: 5%;

        & .sidebar {
        }
      }
      & .col-2 {
        padding-right: 0;
        width: 95%;
      }
    }

    & .mainPage {
      width: 100%;
      margin: auto;
    }
  }
}
</style>
