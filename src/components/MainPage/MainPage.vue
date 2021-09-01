<template>
  <div class="mainPage">
    <div class="mainPage-col">
      <div class="mainPage-row">
        <Advert
          :title="ad.title"
          :body="ad.body"
          :currentPrice="ad.currentPrice"
          :normalPrice="ad.normalPrice"
          :imageSrc="ad.imageSrc"
          :beginDay="ad.beginDay"
          :beginMonth="ad.beginMonth"
          :endDay="ad.endDay"
          :endMonth="ad.endMonth"
          :link="ad.link"
        />
      </div>
      <div class="mainPage-row">
        <div class="product-showcase-col">
          <div class="product-showcase-row-1">
            <ProductShowcase :products="showC" />
          </div>
          <div class="product-showcase-row-2">
            <div class="product-grid-row-2">
              <div class="promocoes-ikea-family">
                <a href="/ikea-family" class="ikea-family-btn" variant="dark"
                  >Ver promoções IKEA Family</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mainPage-row">
        <MidAdvert
          :title="midAd.title"
          :imageSrc="midAd.imageSrc"
          :body="midAd.body"
          :bodyStrong="midAd.bodyStrong"
          :name="midAd.name"
          :type="midAd.type"
          :currentPrice="midAd.currentPrice"
          :link="midAd.link"
          :linkTitle="midAd.linkTitle"
        />
      </div>
      <div class="mainPage-row">
        <TopCarousel :carousel="topC" carouselTitle="Os mais vistos" />
      </div>
      <div class="mainPage-row">
        <Info
          titulo="Recebeu uma mensagem em nome do IKEA?"
          body="Se recebeu comunicação em nome da IKEA Portugal anunciando uma
          campanha de aniversário e a oferta de Cartão Presente, por favor não
          clique no link. Trata-se de uma campanha fraudulenta sem qualquer
          ligação à marca. Relembramos que todas as nossas comunicações são
          efetuadas nos canais oficiais."
        />
      </div>
      <div class="mainPage-row">
        <MainPageTopGrid
          v-if="this.isMobile == false && this.isSmallMobile == false"
          titulo="As novidades esperam por si"
          body="Depois dos piqueniques no jardim, dos passeios na natureza e dos
            mergulhos na praia, é tempo de voltar a casa e descobrir a nova
            coleção de outono da IKEA."
          gridButton="Ver artigos de verão"
        />
        <MainPageTopGridMobile
          v-else-if="this.isMobile == true && this.isSmallMobile == false"
          titulo="As novidades esperam por si"
          body="Depois dos piqueniques no jardim, dos passeios na natureza e dos
            mergulhos na praia, é tempo de voltar a casa e descobrir a nova
            coleção de outono da IKEA."
          gridButton="Ver artigos de verão"
        />
        <MainPageTopGridSmallMobile
          v-else-if="this.isMobile == true && this.isSmallMobile == true"
          titulo="As novidades esperam por si"
          body="Depois dos piqueniques no jardim, dos passeios na natureza e dos
            mergulhos na praia, é tempo de voltar a casa e descobrir a nova
            coleção de outono da IKEA."
          gridButton="Ver artigos de verão"
        />
      </div>
      <div class="mainPage-row">
        <InfoEntregas :infoEntregas="info" />
      </div>
      <div class="mainPage-row">
        <BottomCarousel :carousel="bottomC" carouselTitle="Os mais vistos" />
      </div>
      <div class="mainPage-row">
        <MainPageBottomGrid
          v-if="this.isMobile == false && this.isSmallMobile == false"
          :buttonsGrid="buttons"
          titulo="Mais ideias e inspiração"
        />
        <MainPageBottomGridMobile
          v-else-if="this.isMobile == true && this.isSmallMobile == false"
          :buttonsGrid="buttons"
          titulo="Mais ideias e inspiração"
        />
        <MainPageBottomGridSmallMobile
          v-else-if="this.isMobile == true && this.isSmallMobile == true"
          :buttonsGrid="buttons"
          titulo="Mais ideias e inspiração"
        />
      </div>
      <div class="mainPage-row">
        <InfoImportanteCarousel :carousel="infoImp" />
      </div>
    </div>
  </div>
</template>

<script>
// COMPONENTS
import Advert from "./components-main-page/Adverts/Advert.vue";
import MidAdvert from "./components-main-page/Adverts/MidAdvert.vue";
import ProductShowcase from "../ComponentesGlobais/Showcases/ProductShowcase.vue";
import TopCarousel from "./components-main-page/Carousel/TopCarousel.vue";
import BottomCarousel from "./components-main-page/Carousel/BottomCarousel.vue";
import Info from "./components-main-page/Info/Info.vue";
import InfoEntregas from "./components-main-page/Info/InfoEntregas.vue";
import InfoImportanteCarousel from "./components-main-page/Carousel/InfoImportanteCarousel.vue";
import MainPageTopGrid from "./components-main-page/Grid/MainPageTopGrid.vue";
import MainPageTopGridMobile from "./components-main-page/Grid/MainPageTopGridMobile.vue";
import MainPageTopGridSmallMobile from "./components-main-page/Grid/MainPageTopGridSmallMobile.vue";
import MainPageBottomGrid from "./components-main-page/Grid/MainPageBottomGrid.vue";
import MainPageBottomGridMobile from "./components-main-page/Grid/MainPageBottomGridMobile.vue";
import MainPageBottomGridSmallMobile from "./components-main-page/Grid/MainPageBottomGridSmallMobile.vue";

// MIXINS
import produtos from "../../assets/data/mainPage/products";
import bottomC from "../../assets/data/mainPage/bottomCarousel";
import topC from "../../assets/data/mainPage/topCarousel";
import ad from "../../assets/data/mainPage/advert";
import midAd from "../../assets/data/mainPage/midAdvert";
import showC from "../../assets/data/mainPage/showcase";
import info from "../../assets/data/mainPage/infoEntregas";
import buttons from "../../assets/data/mainPage/buttonsBottomGrid";
import infoImp from "../../assets/data/mainPage/infoImpCarousel";

export default {
  mixins: [produtos, bottomC, topC, ad, midAd, showC, info, buttons, infoImp],
  components: {
    Advert,
    MidAdvert,
    ProductShowcase,
    TopCarousel,
    BottomCarousel,
    Info,
    InfoEntregas,
    MainPageTopGrid,
    MainPageTopGridMobile,
    MainPageTopGridSmallMobile,
    MainPageBottomGrid,
    MainPageBottomGridMobile,
    MainPageBottomGridSmallMobile,
    InfoImportanteCarousel,
  },
  beforeMount() {
    console.log(this.isMobile);
    if (window.innerWidth <= 800) {
      this.isMobile = true;
      console.log(this.isMobile);
    } else {
      this.isMobile = false;
    }
    if (window.innerWidth <= 400) {
      this.isSmallMobile = true;
      console.log(this.isSmallMobile);
    } else {
      this.isSmallMobile = false;
    }
  },

  data() {
    return {
      isMobile: false,
      isSmallMobile: false,
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
              padding: 1rem 1.5rem;
              width: 13rem;
              background-color: #f5f5f5;
              border: 1px solid #f5f5f5;
              text-decoration: none;
              color: black;

              &:hover {
                background-color: #e0e0e0;
                border: 1px solid #e0e0e0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
