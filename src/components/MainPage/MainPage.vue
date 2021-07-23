<template>
  <div class="mainPage">
    <Advert />
    <ProductShowcase />
    <MidAdvert />
    <Carousel />
    <Info />
    <TopGrid />
    <InfoEntregas />
    <BottomCarousel />
    <BottomGrid />
    <InfoImportanteCarousel />
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

<style lang="scss"></style>
