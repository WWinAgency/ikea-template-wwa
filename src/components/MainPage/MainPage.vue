<template>
  <div class="mainPage">
    <div class="mainPage-col">
      <div class="mainPage-row">
        <Advert
          :title="advert.title"
          :body="advert.body"
          :currentPrice="advert.currentPrice"
          :normalPrice="advert.normalPrice"
          :imageSrc="advert.imageSrc"
          :beginDay="advert.beginDay"
          :beginMonth="advert.beginMonth"
          :endDay="advert.endDay"
          :endMonth="advert.endMonth"
          :link="advert.link"
        />
      </div>
      <div class="mainPage-row">
        <div class="product-showcase-col">
          <div class="product-showcase-row-1">
            <ProductShowcase :products="products" />
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
        <MidAdvert :advert="produtoMidAdvert" />
      </div>
      <div class="mainPage-row">
        <TopCarousel :carousel="topCarousel" titulo="Os mais vistos" />
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
          :produtos="topGrid"
          titulo="As novidades esperam por si"
          body="Depois dos piqueniques no jardim, dos passeios na natureza e dos
            mergulhos na praia, é tempo de voltar a casa e descobrir a nova
            coleção de outono da IKEA."
          gridButton="Ver artigos de verão"
        />
      </div>
      <div class="mainPage-row">
        <InfoEntregas :infoEntregas="infoEntregas" />
      </div>
      <div class="mainPage-row">
        <BottomCarousel
          :carousel="bottomCarousel"
          titulo="Um Mundo melho começa em casa"
        />
      </div>
      <div class="mainPage-row">
        <MainPageBottomGrid
          :produtos="produtosBottomGrid"
          :buttonsGrid="buttonsBottomGrid"
          titulo="Mais ideias e inspiração"
        />
      </div>
      <div class="mainPage-row">
        <InfoImportanteCarousel :carousel="infoImpCarousel" />
      </div>
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
      advert: {
        title: "Quem é da casa merece um desconto",
        name: "BONDHOLMEN",
        type: "Mesa de centro, exterior",
        body:
          "É por isso que todos os meses há descontos para os membros IKEA Family. Descubra artigos a preços ainda mais acessiveis para toda a casa, só de",
        imageSrc: "https://picsum.photos/1600/960?random=1",
        link: "pagina-de-produto",
        currentPrice: "69",
        normalPrice: "80",
        beginDay: "1",
        beginMonth: "",
        endDay: "31",
        endMonth: "Julho",
      },
      products: [
        {
          id: "fejka",
          name: "FEJKA",
          type: "Planta Artificial em vaso",
          utility: "9cm",
          imageSrc: "https://picsum.photos/360?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
          rating: 4.5,
          ratingCount: 8,
          link: "fejka",
          favSelected: false,
        },
        {
          id: "skogsklover",
          name: "SKOGSKLÖVER",
          type: "Estore de correr",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/360?random=2",
          normalPrice: 35,
          currentPrice: 29,
          rating: 4,
          ratingCount: 148,
          link: "skogsklover",
          favSelected: false,
        },
        {
          id: "husaro",
          name: "HUSARÖ",
          type: "Poltrona",
          utility: "exterior",
          imageSrc: "https://picsum.photos/360?random=3",
          normalPrice: 149,
          currentPrice: 119,
          rating: 4.5,
          ratingCount: 10,
          link: "husaro",
          favSelected: false,
        },
        {
          id: "hauga",
          name: "HAUGA",
          type: "Roupeiro aberto",
          utility: "c/3 gavetas 70 x 199 cm",
          imageSrc: "https://picsum.photos/360?random=4",
          normalPrice: 135,
          currentPrice: 112,
          rating: 3,
          ratingCount: 24,
          link: "hauga",
          favSelected: false,
        },
      ],
      produtoMidAdvert: [
        {
          nome: "LINNEBÄCK",
          tipo: "Poltrona",
          preco: 39,
          link: "pagina-de-produto",
          tituloLink: "Ver homemade Jingle by Noiserv",
          titulo: "O Design é para ser tocado",
          imagem: "https://picsum.photos/1600/960?random=6",
          body:
            "Para a IKEA, o design vai muito além da estética. Vai onde a nossa imaginação quiser. Para o provarmos, desafiámos o Noiserv, um dos músicos portugueses mais inventivos e versáteis, a compor um tema usando apenas os móevis e acessórios IKEA. Assim surge o Homemade Jingle, uma melodia original e divertida que nos evoca os sons da vida em casa",
          bodyStrong: "Porque o design é para ser vivido",
        },
      ],
      topCarousel: [
        {
          textoBotao: "Móveis",
          productImageSrc: "https://picsum.photos/400/480?random=1",
          link: "moveis",
        },
        {
          textoBotao: "Arrumação e organização",
          productImageSrc: "https://picsum.photos/400/480?random=2",
          link: "arrumacao-e-organizacao",
        },
        {
          textoBotao: "Exterior",
          productImageSrc: "https://picsum.photos/400/480?random=3",
          link: "exterior",
        },
        {
          textoBotao: "Verão",
          productImageSrc: "https://picsum.photos/400/480?random=4",
          link: "verao",
        },
        {
          textoBotao: "Colchões",
          productImageSrc: "https://picsum.photos/400/480?random=5",
          link: "colchoes",
        },
        {
          textoBotao: "Camas",
          productImageSrc: "https://picsum.photos/400/480?random=6",
          link: "camas",
        },
        {
          textoBotao: "Sofás",
          productImageSrc: "https://picsum.photos/400/480?random=7",
          link: "sofas",
        },
        {
          textoBotao: "Cozinhas e eletrodomésticos",
          productImageSrc: "https://picsum.photos/400/480?random=8",
          link: "cozinhas-e-eletrodomesticos",
        },
      ],
      topGrid: [
        {
          gridImageSrc: "https://picsum.photos/1000/960?random=1",
          nome: "KRUX",
          tipo: "Candeeiro LED de secretária",
          preco: "35",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1500/960?random=1",
          nome: "MÅLA",
          tipo: "Conj. modelo cidade cartão",
          preco: "4",
          left: 20,
          top: 40,
        },
        {
          gridImageSrc: "https://picsum.photos/1100/1100?random=2",
          nome: "FLISAT",
          tipo: "Banco p/criança",
          preco: "15",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1100/960?random=3",
          nome: "MOSSLANDA",
          tipo: "Prateleira p/molduras",
          preco: "9.99",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1100/960?random=4",
          nome: "BAGGEBO",
          tipo: "Armário c/portas em vidro",
          preco: "35",
          left: 2,
          top: 40,
        },
      ],
      infoEntregas: [
        {
          titulo: "Click and collect",
          texto: "Numa loja IKEA, ponto de recolha ou ponto CTT",
          tituloLink: "Saiba mais",
          link: "click-and-collect",
        },
        {
          titulo: "Entregas",
          texto: "Compre online e receba em casa a partir de 7€",
          tituloLink: "Saiba mais",
          link: "delivery",
        },
        {
          titulo: "Siga a sua encomenda",
          texto: "Está a pergunta-se onde estará a sua encomenda?",
          tituloLink: "Acompanhe o estado",
          link: "track-my-package",
        },
        {
          titulo: "Tem dúvidas?",
          texto: "Encontre aqui respostas às suas perguntas mais frequentes",
          tituloLink: "Saiba mais",
          link: "faq",
        },
      ],
      bottomCarousel: [
        {
          textoBotao: "Escola da casa",
          productImageSrc: "https://picsum.photos/400/480?random=9",
          link: "escola-da-casa",
        },
        {
          textoBotao: "Painéis Solares SOLTRALE",
          productImageSrc: "https://picsum.photos/400/480?random=10",
          link: "paineis-solares",
        },
        {
          textoBotao: "Ver casas sustentáveis",
          productImageSrc: "https://picsum.photos/400/480?random=11",
          link: "casas-sustentaveis",
        },
        {
          textoBotao: "Ver alimentos sustentáveis",
          productImageSrc: "https://picsum.photos/400/480?random=12",
          link: "alimmentos-sustentaveis",
        },
        {
          textoBotao: "Ver materiais sustentáveis",
          productImageSrc: "https://picsum.photos/400/480?random=13",
          link: "materiais-sustentaveis",
        },
        {
          textoBotao: "Ver como poupar água e energia",
          productImageSrc: "https://picsum.photos/400/480?random=14",
          link: "como-poupar-agua-e-energia",
        },
        {
          textoBotao: "A nossa casa sustentável",
          productImageSrc: "https://picsum.photos/400/480?random=15",
          link: "casa-sustentavel",
        },
      ],
      buttonsBottomGrid: [
        {
          label: "Quarto",
        },
        {
          label: "Sala",
        },
        {
          label: "Cozinha",
        },
        {
          label: "Escritório",
        },
        {
          label: "Exterior",
        },
        {
          label: "Casa de banho",
        },
        {
          label: "Quarto de Criança e Bebé",
        },
        {
          label: "Espaço de refeição",
        },
        {
          label: "Entrada",
        },
        {
          label: "Acessórios",
        },
      ],
      produtosBottomGrid: [
        {
          gridImageSrc: "https://picsum.photos/1000/1200?random=8",
          nome: "KRUX",
          tipo: "Candeeiro LED de secretária",
          preco: "35",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1000/900?random=1",
          nome: "MÅLA",
          tipo: "Conj. modelo cidade cartão",
          preco: "4",
          left: 30,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1000/1000?random=1",
          nome: "FLISAT",
          tipo: "Banco p/criança",
          preco: "15",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1000/1000?random=2",
          nome: "MOSSLANDA",
          tipo: "Prateleira p/molduras",
          preco: "9.99",
          left: 20,
          top: 50,
        },
        {
          gridImageSrc: "https://picsum.photos/1000/800?random=1",
          nome: "BAGGEBO",
          tipo: "Armário c/portas em vidro",
          preco: "35",
          left: 50,
          top: 50,
        },
      ],

      infoImpCarousel: [
        {
          title: "Medidas de segurança",
          body:
            "Saiba mais sobre as nossas precauções e como pode fazer a sua parte",
          infoUrl: "medidas-de-segurança",
          imgCarouselImpSrc: "https://picsum.photos/960/960?random=1",
        },
        {
          title: "Comprou algum prato, taça ou caneca HEROISK ou TALKIRA?",
          body:
            "A IKEA pede a todos os clientes que tenham comprado pratos, taças ou canecas HEROISK e/ou TALKIRA para pararem de os utilizar e os devolveverem numa loja IKEA, onde serão reembolsados na totalidade",
          infoUrl: "heroisk-talkira-devolucao",
          imgCarouselImpSrc: "https://picsum.photos/960/960?random=2",
        },
        {
          title: "Bem seguro! Juntos, criamos casas mais seguras",
          body: "",
          infoUrl: "casas-mais-seguras",
          imgCarouselImpSrc: "https://picsum.photos/960/960?random=3",
        },
        {
          title: "Modulo Teste",
          body: "Este modulo serve apenas para teste",
          infoUrl: "casas-mais-seguras",
          imgCarouselImpSrc: "https://picsum.photos/960/960?random=4",
        },
      ],
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
