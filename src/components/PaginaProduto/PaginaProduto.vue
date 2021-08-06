<template>
  <div class="paginaProduto">
    <!-- PATH -->
    <PathProduto
      :categoriaGeralProduto="produto.categoriaGeral"
      :subCategoriaGeralProduto="produto.subCategoriaGeral"
      :tipoGeralProduto="produto.tipoGeral"
      :subTipoGeralProduto="produto.subTipoGeral"
      :nomeProdutoPath="produto.nome"
      :tipoProdutoPath="produto.tipo"
      :utilidadeProdutoPath="produto.utilidade"
    />
    <!-- PATH -->

    <hr class="costum-hr" />

    <div class="paginaProduto-col">
      <div class="product-outter-row-1">
        <div class="product-outter-col-1">
          <div class="product-inner-row">
            <div class="product-top-row">
              <div class="top-col-1">
                <!-- Grid de Imagens do Produto -->
                <div class="product-show-1">
                  <GridImagensProduto
                    :image1="produto.image1"
                    :image2="produto.image2"
                    :image3="produto.image3"
                    :image4="produto.image4"
                  />
                </div>
                <!-- Grid de Imagens do Produto -->
                <!-- Carousel de Imagens do Produto -->
                <div class="product-show-2">
                  <CarouselProduto
                    :image1="produto.image1"
                    :image2="produto.image2"
                    :image3="produto.image3"
                    :image4="produto.image4"
                  />
                </div>
                <!-- Carousel de Imagens do Produto -->
              </div>
              <div class="top-col-2">
                <TagProduto
                  :nomeProduto="produto.nome"
                  :tipoProduto="produto.tipo"
                  :utilidadeProduto="produto.utilidade"
                  :precoProduto="produto.precoAtivo"
                  :precoHabitual="produto.precoHabitual"
                  :moedaProduto="produto.moeda"
                  :ratingProduto="produto.rating"
                  :avaliacoesProduto="produto.avaliacoes"
                  :dimensoesProdutoCm="produto.dimensoes"
                  :promocaoInicioMes="produto.mesInicioPromocao"
                  :promocaoInicioDia="produto.diaInicioPromocao"
                  :promocaoFimMes="produto.mesFimPromocao"
                  :promocaoFimDia="produto.diaFimPromocao"
                  :variantStock="produto.disponibilidadeStock"
                  :variantLoja="produto.disponibilidadeLoja"
                />
              </div>
            </div>
          </div>
          <!-- Descrição Informativa do Produto -->
          <div class="product-inner-row">
            <DescricaoProduto
              :nomeProduto="produto.nome"
              :tipoProduto="produto.tipo"
              :utilidadeProduto="produto.utilidade"
              :textoDescritivo="produto.textoDescritivo"
              :codigoProduto="produto.codigoProduto"
              :rating="produto.rating"
              :avaliacoes="produto.avaliacoes"
            />
          </div>
          <!-- Descrição Informativa do Produto -->

          <!-- Produtos Semelhantes -->
          <div class="product-inner-row">
            <div class="produtos-semelhantes">
              <div class="inner-col-1">Produtos Semelhantes</div>
              <div class="inner-col-2">
                <ProductShowcase :showcase="showcase" />
              </div>
            </div>
          </div>
          <!-- Produtos Semelhantes -->
          <!-- Funcao e Design do Produto -->
          <div class="product-inner-row">
            <FuncaoEDesign
              :solucaoFuncaoTitle="produto.solucaoFuncaoTitle"
              :solucaoFuncaoText="produto.solucaoFuncaoText"
              :processoDesignTitle="produto.processoDesignTitle"
              :processoDesignText="produto.processoDesignText"
            />
          </div>
          <!-- Funcao e Design do Produto -->
        </div>

        <!-- Tag Produto -->
        <!-- Tag Produto -->
      </div>
      <hr class="costum-hr" />
      <!-- Carousel 1 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos
          :carousel="carousel1"
          titulo="Outros também viram"
        />
      </div>
      <!-- Carousel 1 Página Produto -->
      <!-- Carousel 2 Página Produto -->
      <div class="carousel-de-produtos">
        <CarouselDeProdutos :carousel="carousel2" titulo="Combina com" />
      </div>
      <!-- Carousel 2 Página Produto -->
      <!-- Mini Carousel -->
      <div class="carousel-de-produtos">
        <MiniCarousel
          :carousel="miniCarousel"
          titulo="Últimos produtos visualizados"
        />
      </div>
      <!-- Mini Carousel -->
    </div>
  </div>
</template>

<script>
import PathProduto from "./componentes-pagina-produto/PathProduto.vue";
import TagProduto from "./componentes-pagina-produto/TagProduto.vue";
import ProductShowcase from "../ComponentesGlobais/Showcases/ProductShowcase.vue";
import CarouselDeProdutos from "./componentes-pagina-produto/Carousel/CarouselDeProdutos.vue";
import CarouselProduto from "./componentes-pagina-produto/Carousel/CarouselProduto.vue";
import FuncaoEDesign from "./componentes-pagina-produto/FuncaoEDesign.vue";
import DescricaoProduto from "./componentes-pagina-produto/DescricaoProduto.vue";
import GridImagensProduto from "./componentes-pagina-produto/Grid/GridImagensProduto.vue";
import MiniCarousel from "./componentes-pagina-produto/Carousel/MiniCarousel.vue";
export default {
  components: {
    PathProduto,
    TagProduto,
    DescricaoProduto,
    ProductShowcase,
    CarouselDeProdutos,
    CarouselProduto,
    FuncaoEDesign,
    GridImagensProduto,
    MiniCarousel,
  },
  data() {
    return {
      produto: {
        nome: "MJÖLKKLOCKA",
        tipo: "Almofada ergonómica",
        utilidade: "costas/lado",
        precoAtivo: "25",
        precoHabitual: "29",
        moeda: "€",
        rating: "4.5",
        image1: "https://picsum.photos/960/960?random=5",
        image2: "https://picsum.photos/960/960?random=6",
        image3: "https://picsum.photos/960/960?random=7",
        image4: "https://picsum.photos/960/960?random=8",
        avaliacoes: "10",
        dimensoes: "41 x 71",
        mesInicioPromocao: "Julho",
        diaInicioPromocao: "01",
        mesFimPromocao: "Julho",
        diaFimPromocao: "31",
        codigoProduto: "304.509.54",
        disponibilidadeStock: "success",
        disponibilidadeLoja: "danger",
        textoDescritivo:
          "Cada lado é diferente, para proporcionar o apoio necessário para dormir de lado e de costas. Graças à espuma memory, com um conforto acolchoado que ajuda a manter a mesma temperatura durante toda a noite, vai ter a sensação de dormir numa nuvem. ",
        categoriaGeral: "Camas e colchões",
        subCategoriaGeral: "Têxteis para quarto",
        tipoGeral: "Almofadas",
        subTipoGeral: "Almofadas de espuma e espuma memory",
        solucaoFuncaoTitle:
          "Um melhor conforto durante o sono com almofadas ergonómicas",
        solucaoFuncaoText:
          "Estar confortável durante o sono é fundamental para poder desfrutar ao máximo das horas em que está acordado. Acreditamos no poder do sono. E, quando a sua cabeça e o seu pescoço estão bem apoiados por uma almofada, dorme ainda melhor. Mas as pessoas dormem de maneiras diferentes. Algumas dormem de costas, outras de lado ou mudam de posição muitas vezes durante a noite. É por isso que as nossas almofadas ergonómicas estão disponíveis em muitas formas e tamanhos, para que possamos todos dormir como um bebé e acordar revigorados.",
        processoDesignTitle: "Uma forma única para diferentes tipos de sono",
        processoDesignText:
          "A almofada ergonómica MJÖLKKLOCKA tem um lado maior, ideal para quem dorme de lado, pois tem um espaço que dá à cabeça e ao pescoço um bom apoio, reduzindo a tensão nos ombros. Ao virar para o lado menor, a inclinação permite que os músculos do pescoço descontraiam quando dorme de costas. Embora cada lado esteja pensado especificamente para dormir de lado ou de costas, a espuma memory adapta-se a quem muda entre ambas as posições durante a noite.",
      },

      showcase: [
        {
          nome: "FEJKA",
          tipo: "Planta Artificial em vaso",
          utilidade: "9cm",
          imagem: "https://picsum.photos/300?random=1",
          precoNormal: 4.5,
          precoAtual: 4,
          rating: 4.5,
          avaliacoes: 8,
          link: "fejka",
        },
        {
          nome: "SKOGSKLÖVER",
          tipo: "Estore de correr",
          utilidade: "120x195 cm",
          imagem: "https://picsum.photos/300?random=2",
          precoNormal: 35,
          precoAtual: 29,
          rating: 4,
          avaliacoes: 148,
          link: "skogslover",
        },
        {
          nome: "HUSARÖ",
          tipo: "Poltrona",
          utilidade: "exterior",
          imagem: "https://picsum.photos/300?random=3",
          precoNormal: 149,
          precoAtual: 119,
          rating: 4.5,
          avaliacoes: 10,
          link: "husaro",
        },
        {
          nome: "HAUGA",
          tipo: "Roupeiro aberto",
          utilidade: "c/3 gavetas 70 x 199 cm",
          imagem: "https://picsum.photos/300?random=4",
          precoNormal: 135,
          precoAtual: 112,
          rating: 3,
          avaliacoes: 24,
          link: "hauga",
        },
      ],

      carousel1: [
        {
          name: "FEJKA",
          type: "Planta Artificial em vaso,",
          utility: "9cm",
          imageSrc: "https://picsum.photos/300?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
          rating: 4.5,
          avaliacoes: 8,
          link: "fejka",
        },
        {
          name: "SKOGSKLÖVER",
          type: "Estore de correr,",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/300?random=2",
          normalPrice: 35,
          currentPrice: 29,
          rating: 4,
          avaliacoes: 148,
          link: "skogsklover",
        },
        {
          name: "HUSARÖ",
          type: "Poltrona,",
          utility: "exterior",
          imageSrc: "https://picsum.photos/300?random=3",
          normalPrice: 99,
          currentPrice: 85,
          rating: 4.5,
          avaliacoes: 10,
          link: "husaro",
        },
        {
          name: "HAUGA",
          type: "Roupeiro aberto",
          utility: "c/3 gavetas, 70x199 cm",
          imageSrc: "https://picsum.photos/300?random=4",
          normalPrice: 149,
          currentPrice: 119,
          rating: 3,
          avaliacoes: 24,
          link: "hauga",
        },
        {
          name: "BODARP",
          type: "Porta,",
          utility: "verde acinzentado, 60x80 cm",
          imageSrc: "https://picsum.photos/300?random=5",
          normalPrice: 50,
          currentPrice: 30,
          rating: 5,
          avaliacoes: 7,
          link: "bodarp",
        },
        {
          name: "SKYMNINGEN",
          type: "Candeeiro suspenso,",
          utility: "branco",
          imageSrc: "https://picsum.photos/300?random=6",
          normalPrice: 79,
          currentPrice: 59,
          rating: 5,
          avaliacoes: 3,
          link: "smymningen",
        },
        {
          name: "TRANGET",
          type: "Tapete, tecelagem plana,",
          utility: "feito à mão várias tonalidades azul 170x240 cm",
          imageSrc: "https://picsum.photos/300?random=7",
          normalPrice: 249,
          currentPrice: 199,
          rating: 4,
          avaliacoes: 10,
          link: "tangret",
        },
        {
          name: "PELARBOJ",
          type: "Candeeiro LED de mesa,",
          utility: "multicor",
          imageSrc: "https://picsum.photos/300?random=8",
          normalPrice: 20,
          currentPrice: 15,
          rating: 4.5,
          avaliacoes: 18,
          link: "pelarboj",
        },
      ],

      carousel2: [
        {
          name: "BJÖRKÅSEN",
          type: "Suporte p/portátil,",
          utility: "bege",
          imageSrc: "https://picsum.photos/300?random=9",
          normalPrice: 25,
          currentPrice: 19.99,
          rating: 4.5,
          avaliacoes: 3,
          link: "bjorkasen",
        },
        {
          name: "ÄNGSLILJA",
          type: "Capa de edredão + fronha,",
          utility: "cinz, 150x200/50x60 cm",
          imageSrc: "https://picsum.photos/300?random=10",
          normalPrice: 19,
          currentPrice: 15,
          rating: 4,
          avaliacoes: 31,
          link: "angslilja",
        },
        {
          name: "LISABO",
          type: "Mesa, chapa de freixo,",
          utility: "140x78 cm",
          imageSrc: "https://picsum.photos/300?random=11",
          normalPrice: 129,
          currentPrice: 99,
          rating: 4.5,
          avaliacoes: 27,
          link: "lisabo",
        },
        {
          name: "SLATORP",
          type: "Roupeiro aberto,",
          utility: "c/3 gavetas, 70x199 cm",
          imageSrc: "https://picsum.photos/300?random=12",
          normalPrice: 799,
          currentPrice: 699,
          rating: 5,
          avaliacoes: 8,
          link: "slatorp",
        },
        {
          name: "IKEA 365+",
          type: "Garrafa de mesa c/tampa,",
          utility: "vidro transparente/cortiça 1l",
          imageSrc: "https://picsum.photos/300?random=13",
          normalPrice: 4.5,
          currentPrice: 3.5,
          rating: 4.5,
          avaliacoes: 105,
          link: "ikea-365+",
        },
        {
          name: "KURA",
          type: "Cama reversível,",
          utility: "branco/pinho, 90x200 cm",
          imageSrc: "https://picsum.photos/300?random=14",
          normalPrice: 149,
          currentPrice: 129,
          rating: 4.5,
          avaliacoes: 72,
          link: "kura",
        },
        {
          name: "ÄNGSLILJA",
          type: "Capa de edredão+2 fronhas,",
          utility: "verde-bege claro, 240x220/50x60 cm",
          imageSrc: "https://picsum.photos/300?random=15",
          normalPrice: 29,
          currentPrice: 25,
          rating: 4,
          avaliacoes: 31,
          link: "angslilja",
        },
        {
          name: "SILVERLÖNN",
          type: "Cortinados transparentes,",
          utility: "par, bege145x300 cm",
          imageSrc: "https://picsum.photos/300?random=16",
          normalPrice: 19.99,
          currentPrice: 15,
          rating: 4,
          avaliacoes: 8,
          link: "silvertlonn",
        },
      ],

      miniCarousel: [
        {
          imagem: "https://picsum.photos/105/105?random=1",
          link: "1",
        },
        {
          imagem: "https://picsum.photos/105/105?random=2",
          link: "2",
        },
        {
          imagem: "https://picsum.photos/105/105?random=3",
          link: "3",
        },
        {
          imagem: "https://picsum.photos/105/105?random=4",
          link: "4",
        },
        {
          imagem: "https://picsum.photos/105/105?random=5",
          link: "5",
        },
        {
          imagem: "https://picsum.photos/105/105?random=6",
          link: "6",
        },
        {
          imagem: "https://picsum.photos/105/105?random=7",
          link: "7",
        },
        {
          imagem: "https://picsum.photos/105/105?random=8",
          link: "8",
        },
        {
          imagem: "https://picsum.photos/105/105?random=9",
          link: "9",
        },
        {
          imagem: "https://picsum.photos/105/105?random=10",
          link: "10",
        },
        {
          imagem: "https://picsum.photos/105/105?random=11",
          link: "11",
        },
        {
          imagem: "https://picsum.photos/105/105?random=12",
          link: "12",
        },
        {
          imagem: "https://picsum.photos/105/105?random=13",
          link: "13",
        },
        {
          imagem: "https://picsum.photos/105/105?random=14",
          link: "14",
        },
        {
          imagem: "https://picsum.photos/105/105?random=15",
          link: "15",
        },
        {
          imagem: "https://picsum.photos/105/105?random=16",
          link: "16",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.paginaProduto {
  margin: 0 0 4rem 0;
  height: 100%;

  & .costum-hr {
    width: 100%;
    margin: 2rem 0 2rem 0;
  }

  & .paginaProduto-col {
    display: flex !important;
    flex-direction: column;
    width: 100%;
    height: 100%;

    & .product-outter-row-1 {
      display: inline-block;
      width: 100%;
      height: 100%;
      position: relative;

      @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
      }

      & .product-outter-col-1 {
        float: left;
        width: 100%;
        height: 100%;

        @media (max-width: 1200px) {
          width: 100%;
          height: 100%;
        }

        & .product-inner-row {
          width: 100%;
          & .product-top-row {
            display: flex;
            flex-direction: row;
            width: 100%;

            @media (max-width: 1200px) {
              flex-direction: column;
            }
            & .top-col-1 {
              display: flex;
              flex-direction: column;
              width: 70%;

              @media (max-width: 1200px) {
                flex-direction: row;
                width: 100%;
              }
            }
            & .top-col-2 {
              display: flex;
              flex-direction: column;
              width: 30%;

              @media (max-width: 1200px) {
                flex-direction: row;
                width: 100%;
              }
            }
          }

          & .produtos-semelhantes {
            display: flex;
            flex-direction: column;
            margin-top: 4rem;

            & .inner-col-1 {
              font-size: 1.375rem;
              line-height: 1.4545454545;
              color: black;
              font-weight: 700;
              display: flex;
              flex-direction: row;
              margin-bottom: 2rem;
            }
            & .inner-col-2 {
              display: flex;
              flex-direction: row;
            }
          }
        }
      }
      & .product-outter-col-2 {
        float: right;
        width: 30%;
        height: 100%;
        position: sticky;

        @media (max-width: 1200px) {
          width: 100%;
        }

        & .productDescription {
          & .product-col {
            padding-top: 0;
            padding-left: 2.5;

            @media (max-width: 1200px) {
              padding-left: 0;
              padding-top: 2.5rem;
            }

            & .product-row-9 {
              @media (max-width: 1200px) {
                padding-left: 0.3rem;
              }
            }
            & .product-row-10 {
              @media (max-width: 1200px) {
                padding-left: 0.3rem;
              }
            }
          }
        }
      }
    }
  }
}
</style>
