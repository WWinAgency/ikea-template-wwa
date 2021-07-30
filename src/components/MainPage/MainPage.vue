<template>
  <div class="mainPage">
    <div class="mainPage-col">
      <div class="mainPage-row"><Advert /></div>
      <div class="mainPage-row">
        <div class="product-showcase-col">
          <div class="product-showcase-row-1"><ProductShowcase /></div>
          <div class="product-showcase-row-2">
            <div class="product-grid-row-2">
              <div class="promocoes-ikea-family">
                <b-button class="ikea-family-btn" variant="dark"
                  >Ver promoções IKEA Family</b-button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainPage-row"><MidAdvert /></div>
      <div class="mainPage-row">
        <TopCarousel tituloTopCarousel="Os mais vistos" />
      </div>
      <div class="mainPage-row"><Info /></div>
      <div class="mainPage-row"><MainPageTopGrid /></div>
      <div class="mainPage-row"><InfoEntregas /></div>
      <div class="mainPage-row">
        <BottomCarousel tituloBottomCarousel="Um Mundo melho começa em casa" />
      </div>
      <div class="mainPage-row"><MainPageBottomGrid /></div>
      <div class="mainPage-row"><InfoImportanteCarousel /></div>
    </div>
  </div>
</template>

<script>
import Advert from "./components-main-page/Adverts/Advert.vue";
import MidAdvert from "./components-main-page/Adverts/MidAdvert.vue";
import ProductShowcase from "../ComponentesGlobais/Showcases/ProductShowcase.vue";
import TopCarousel from "./components-main-page/Carousel/TopCarousel.vue";
import BottomCarousel from "./components-main-page/Carousel/BottomCarousel.vue";
import Info from "./components-main-page/Info/Info.vue";
import InfoEntregas from "./components-main-page/Info/InfoEntregas.vue";
import InfoImportanteCarousel from "./components-main-page/Carousel/InfoImportanteCarousel.vue";
import MainPageTopGrid from "./components-main-page/Grid/MainPageTopGrid.vue";
import MainPageBottomGrid from "./components-main-page/Grid/MainPageBottomGrid.vue";

export default {
  components: {
    Advert,
    MidAdvert,
    ProductShowcase,
    TopCarousel,
    BottomCarousel,
    Info,
    InfoEntregas,
    MainPageTopGrid,
    MainPageBottomGrid,
    InfoImportanteCarousel,
  },
  data() {
    return {
      // produtos: [
      //   {
      //     id: 1,
      //     nome: "FEJKA",
      //     tipo: "Planta Artificial em vaso, 9cm",
      //     imagem: "https://picsum.photos/300?random=1",
      //     precoNormal: "4,50",
      //     precoAtual: "4",
      //     rating: "4.5",
      //     avaliacoes: "8",
      //   },
      //   {
      //     id: 2,
      //     nome: "SKOGSKLÖVER",
      //     tipo: "Estore de correr 120x195 cm",
      //     imagem: "https://picsum.photos/300?random=2",
      //     precoNormal: "35",
      //     precoAtual: "29",
      //     rating: "4",
      //     avaliacoes: "148",
      //   },
      //   {
      //     id: 3,
      //     nome: "HUSARÖ",
      //     tipo: "Poltrona, exterior",
      //     imagem: "https://picsum.photos/300?random=3",
      //     precoNormal: "149",
      //     precoAtual: "119",
      //     rating: "4.5",
      //     avaliacoes: "10",
      //   },
      //   {
      //     id: 4,
      //     nome: "HAUGA",
      //     tipo: "Roupeiro aberto c/3 gavetas 70 x 199 cm",
      //     imagem: "https://picsum.photos/300?random=4",
      //     precoNormal: "135",
      //     precoAtual: "112",
      //     rating: "3",
      //     avaliacoes: "24",
      //   },
      // ],
    };
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

      & .product-showcase-col {
        & .product-showcase-row-1 {
        }
        & .product-showcase-row-2 {
          & .promocoes-ikea-family {
            & .ikea-family-btn {
              border-radius: 64px !important;
              font-size: 0.75rem !important;
              font-weight: 700 !important;
              height: 2.5rem;
              width: 13rem;

              &:hover {
                background-color: #303030;
              }
            }
          }
        }
      }
    }
  }
}
</style>
