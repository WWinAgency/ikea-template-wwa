<template>
  <div class="mainPage">
    <div class="mainPage-col">
      <div class="mainPage-row"><Advert /></div>
      <div class="mainPage-row"><ProductShowcase /></div>
      <div class="mainPage-row"><MidAdvert /></div>
      <div class="mainPage-row"><Carousel /></div>
      <div class="mainPage-row"><Info /></div>
      <div class="mainPage-row"><TopGrid /></div>
      <div class="mainPage-row"><InfoEntregas /></div>
      <div class="mainPage-row"><BottomCarousel /></div>
      <div class="mainPage-row"><BottomGrid /></div>
      <div class="mainPage-row"><InfoImportanteCarousel /></div>
    </div>
  </div>
</template>

<script>
import Advert from "./components-main-page/Adverts/Advert.vue";
import MidAdvert from "./components-main-page/Adverts/MidAdvert.vue";
import ProductShowcase from "./components-main-page/ProductShowcase.vue";
import Carousel from "./components-main-page/Carousel/Carousel.vue";
import BottomCarousel from "./components-main-page/Carousel/BottomCarousel.vue";
import Info from "./components-main-page/Info/Info.vue";
import InfoEntregas from "./components-main-page/Info/InfoEntregas.vue";
import InfoImportanteCarousel from "./components-main-page/Info/InfoImportanteCarousel.vue";
import TopGrid from "./components-main-page/Grid/TopGrid.vue";
import BottomGrid from "./components-main-page/Grid/BottomGrid.vue";

export default {
  components: {
    Advert,
    MidAdvert,
    ProductShowcase,
    Carousel,
    BottomCarousel,
    Info,
    InfoEntregas,
    TopGrid,
    BottomGrid,

    InfoImportanteCarousel,
  },
};
</script>

<style lang="scss">
.mainPage {
  width: 100%;
  margin-top: 3rem !important;

  & .mainPage-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .mainPage-row {
      width: 100%;
      margin-bottom: 4rem !important;
    }
  }
}
</style>
