<template>
  <div class="paginaProduto">
    <!-- PATH -->
    <div class="path">
      <div class="path-row">
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">Produtos</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ categoriaGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ subCategoriaGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ tipoGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          <div class="path-col-inner-row">
            <div class="path-col-inner-col-1">
              <a href="">{{ subTipoGeralProduto }}</a>
            </div>
            <div class="path-col-inner-col-2">
              <b-icon
                class="icon"
                icon="caret-right"
                scale="0.9"
                variant="dark"
              ></b-icon>
            </div>
          </div>
        </div>
        <div class="path-col">
          {{ nomeProdutoPath }} {{ tipoProdutoPath }} {{ utilidadeProdutoPath }}
        </div>
      </div>
    </div>
    <!-- PATH -->

    <hr class="costum-hr" />

    <div class="paginaProduto-col">
      <div class="product-outter-row-1">
        <!-- IMAGENS EM DISPLAY -->
        <div class="product-outter-col-1">
          <div class="product-inner-row">
            <div class="grid">
              <div class="product-grid-col-1">
                <div class="product-grid-row-1">
                  <img src="https://picsum.photos/960/960?random=5" />
                </div>
                <div class="product-grid-row-2">
                  <img src="https://picsum.photos/960/960?random=6" />
                </div>
              </div>
              <div class="product-grid-col-2">
                <div class="product-grid-row-3">
                  <img src="https://picsum.photos/960/960?random=7" />
                </div>
                <div class="product-grid-row-4">
                  <img src="https://picsum.photos/960/960?random=8" />
                </div>
              </div>
            </div>
          </div>
          <div class="product-inner-row">
            <div class="carousel">
              <b-carousel
                id="carousel-1"
                v-model="slide"
                :interval="0"
                controls="false"
                indicators="false"
                background="#ababab"
                img-width="480px"
                img-height="480px"
                style="text-shadow: 1px 1px 2px #333;"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd"
              >
                <b-carousel-slide
                  img-src="https://picsum.photos/2000/2000?random=5"
                />
                <b-carousel-slide
                  img-src="https://picsum.photos/2000/2000?random=6"
                />
                <b-carousel-slide
                  img-src="https://picsum.photos/2000/2000?random=7"
                />
                <b-carousel-slide
                  img-src="https://picsum.photos/2000/2000?random=8"
                />
              </b-carousel>
            </div>
          </div>
          <div class="product-inner-row">
            <div class="product-inner-col">
              <div class="product-description-row-1">
                <div class="product-description-col-1">
                  Cada lado é diferente, para proporcionar o apoio necessário
                  para dormir de lado e de costas. Graças à espuma memory, com
                  um conforto acolchoado que ajuda a manter a mesma temperatura
                  durante toda a noite, vai ter a sensação de dormir numa nuvem.
                </div>
                <div class="product-description-col-2">
                  <div class="numero-artigo">Número de artigo</div>
                  <div class="codigo-artigo">304.509.54</div>
                </div>
              </div>
              <hr class="costum-hr" />
              <div class="product-description-row-2">
                <SidebarDescription tituloSidebar="Detalhes do Produto" />
              </div>
              <hr class="costum-hr" />
              <div class="product-description-row-3">
                <SidebarDescription tituloSidebar="Dimensões do produto" />
              </div>
              <hr class="costum-hr" />
              <div class="product-description-row-4">
                <SidebarDescription tituloSidebar="Avaliações" />
              </div>
              <hr class="costum-hr" />
            </div>
          </div>
          <div class="product-inner-row">
            <div class="produtos-semelhantes">
              <div class="inner-col-1">Produtos Semelhantes</div>
              <div class="inner-col-2">
                <ProductShowcasePP />
              </div>
            </div>
          </div>
          <div class="product-inner-row">
            <div class="col-texto-informativo">
              <div class="row-texto-informativo">
                <div class="inner-row-1">
                  <div class="titulo-texto-informativo">Solução de Função</div>
                </div>
                <div class="inner-row-2">
                  <div class="inner-col-1">
                    Um melhor conforto durante o sono com almofadas ergonómicas
                  </div>
                  <div class="inner-col-2">
                    Estar confortável durante o sono é fundamental para poder
                    desfrutar ao máximo das horas em que está acordado.
                    Acreditamos no poder do sono. E, quando a sua cabeça e o seu
                    pescoço estão bem apoiados por uma almofada, dorme ainda
                    melhor. Mas as pessoas dormem de maneiras diferentes.
                    Algumas dormem de costas, outras de lado ou mudam de posição
                    muitas vezes durante a noite. É por isso que as nossas
                    almofadas ergonómicas estão disponíveis em muitas formas e
                    tamanhos, para que possamos todos dormir como um bebé e
                    acordar revigorados.
                  </div>
                </div>
              </div>
              <hr class="costum-hr" />
              <div class="row-texto-informativo">
                <div class="inner-row-1">
                  <div class="titulo-texto-informativo">Processo de design</div>
                </div>
                <div class="inner-row-2">
                  <div class="inner-col-1">
                    Uma forma única para diferentes tipos de sono
                  </div>
                  <div class="inner-col-2">
                    A almofada ergonómica MJÖLKKLOCKA tem um lado maior, ideal
                    para quem dorme de lado, pois tem um espaço que dá à cabeça
                    e ao pescoço um bom apoio, reduzindo a tensão nos ombros. Ao
                    virar para o lado menor, a inclinação permite que os
                    músculos do pescoço descontraiam quando dorme de costas.
                    Embora cada lado esteja pensado especificamente para dormir
                    de lado ou de costas, a espuma memory adapta-se a quem muda
                    entre ambas as posições durante a noite.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- IMAGENS EM DISPLAY -->

        <!-- COLUNA DESCRITIVA -->
        <div class="product-outter-col-2">
          <ProductDescription
            nomeProduto="MJÖLKKLOCKA"
            precoProduto="25"
            moedaProduto="€"
            tipoProduto="Almofada ergonómica"
            ratingProduto="4.5"
            avaliacoesProduto="10"
            utilidadeProduto="costas/lado"
            dimensoesProdutoCm="41x71"
            precoHabitual="29"
            promocaoInicioMes="Julho"
            promocaoInicioDia="01"
            promocaoFimMes="Julho"
            promocaoFimDia="31"
          />
        </div>
        <!-- COLUNA DESCRITIVA -->
      </div>
      <hr class="costum-hr" />
      <div class="carouselPP">
        <CarouselPP />
      </div>
    </div>
  </div>
</template>

<script>
import ProductDescription from "./componentes-pagina-produto/ProductDescription.vue";
import SidebarDescription from "./componentes-pagina-produto/SidebarDescription.vue";
import ProductShowcasePP from "./componentes-pagina-produto/ProductShowcasePP.vue";
import CarouselPP from "./componentes-pagina-produto/CarouselPP.vue";
export default {
  components: {
    ProductDescription,
    SidebarDescription,
    ProductShowcasePP,
    CarouselPP,
  },
  data() {
    return {
      categoriaGeralProduto: "Camas e colchões",
      subCategoriaGeralProduto: "Têxteis para quarto",
      tipoGeralProduto: "Almofadas",
      subTipoGeralProduto: "Almofadas de espuma e espuma memory",
      nomeProdutoPath: "MJÖLKKLOCKA",
      tipoProdutoPath: "Almofada ergonómica",
      utilidadeProdutoPath: "costas/lado",
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
  & .path {
    margin: 1rem 0 1rem 0;
    width: 100%;
    height: auto;
    & .path-row {
      display: flex;
      flex-direction: row !important;
      align-items: center;
      flex-wrap: wrap;

      & .path-col {
        display: flex;
        flex-direction: column;

        & .path-col-inner-row {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          & .path-col-inner-col-1 {
            display: flex;
            flex-direction: column;
            & a {
              font-size: 0.9rem;
              line-height: 1.5;
              font-weight: 400;
              text-decoration: none;
              color: black;

              &:hover {
                text-decoration: underline;
              }
            }
          }
          & .path-col-inner-col-2 {
            display: flex;
            flex-direction: column;
            margin: 0 0.5rem 0 0.5rem;
          }
        }
      }
    }
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
        width: 70%;
        height: 100%;

        @media (max-width: 1200px) {
          width: 100%;
          height: 100%;
        }

        & .product-inner-row {
          width: 100%;
          & .produtos-semelhantes {
            display: flex;
            flex-direction: column;

            & .inner-col-1 {
              font-size: 1.375rem;
              line-height: 1.4545454545;
              color: black;
              font-weight: 700;
              display: flex;
              flex-direction: row;
            }
            & .inner-col-2 {
              display: flex;
              flex-direction: row;
            }
          }
          & .col-texto-informativo {
            margin-top: 4rem;
            & .row-texto-informativo {
              display: flex;
              flex-direction: column;

              & .inner-row-1 {
                width: 100%;
                & .titulo-texto-informativo {
                  display: flex;
                  color: #767676;
                  font-weight: 700;
                  font-size: 0.75rem;
                  padding-bottom: 0.75rem;
                  line-height: 1.36;
                  flex-wrap: wrap;
                }
              }
              & .inner-row-2 {
                display: flex;
                flex-direction: row;
                width: 100%;

                @media (max-width: 768px) {
                  flex-direction: column;
                }
                & .inner-col-1 {
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  font-size: 1.5625rem;
                  color: #111;
                  line-height: 1.5;
                  font-weight: 700;
                  padding-right: 0.5rem;

                  @media (max-width: 768px) {
                    width: 100%;
                    flex-direction: row;
                    padding-bottom: 0.75rem;
                  }
                }
                & .inner-col-2 {
                  display: flex;
                  flex-direction: column;
                  width: 50%;
                  color: #484848;
                  font-size: 0.875rem;
                  line-height: 1.57;

                  @media (max-width: 768px) {
                    width: 100%;
                    flex-direction: row;
                  }
                }
              }
            }
          }
          & .product-inner-col {
            margin-top: 4rem;
            & .product-description-row-1 {
              display: flex;
              flex-direction: column;
              & .product-description-col-1 {
                font-size: 1.25rem;
                line-height: 1.6;
                padding-bottom: 1.5rem;
                color: #484848;
              }
              & .product-description-col-2 {
                display: flex;
                flex-direction: column;

                & .numero-artigo {
                  font-size: 0.75rem;
                  color: #484848;
                  line-height: 1.5;
                  margin-bottom: 0.5rem;
                }
                & .codigo-artigo {
                  background-color: black;
                  color: white;
                  font-weight: 700;
                  padding: 0.3rem;
                  width: 10rem;
                  text-align: center;
                }
              }
            }
            & .product-description-row-2 {
            }
            & .product-description-row-3 {
            }
            & .product-description-row-4 {
            }
          }

          & .grid {
            display: flex;
            flex-direction: row;
            width: 100%;
            height: 100%;

            @media (max-width: 800px) {
              display: none;
            }
            & .product-grid-col-1 {
              height: 50%;

              & .product-grid-row-1 {
                @media (max-width: 1750px) {
                  width: 100%;
                  height: 100%;
                }
                & img {
                  width: 520px;
                  height: 520px;
                  margin: 0 0.5rem 0.5rem 0;

                  @media (max-width: 1750px) {
                    width: 100%;
                    height: 100%;
                    padding: 0 0.5rem 0.5rem 0;
                    margin: 0;
                  }
                }
              }
              & .product-grid-row-2 {
                @media (max-width: 1750px) {
                  width: 100%;
                  height: 100% !important;
                }
                & img {
                  width: 520px;
                  height: 520px;
                  margin: 0.5rem 0.5rem 0.5rem 0;

                  @media (max-width: 1750px) {
                    width: 100%;
                    height: 100%;
                    padding: 0.5rem 0.5rem 0 0;
                    margin: 0;
                  }
                }
              }
            }

            & .product-grid-col-2 {
              height: 50%;
              & .product-grid-row-3 {
                @media (max-width: 1750px) {
                  width: 100%;
                  height: 100%;
                }
                & img {
                  width: 520px;
                  height: 520px;
                  margin: 0 0 0.5rem 0.5rem;

                  @media (max-width: 1750px) {
                    width: 100%;
                    height: 100%;
                    padding: 0 0 0.5rem 0.5rem;
                    margin: 0;
                  }
                }
              }
              & .product-grid-row-4 {
                @media (max-width: 1750px) {
                  width: 100%;
                  height: 100%;
                }
                & img {
                  width: 520px;
                  height: 520px;
                  margin: 0.5rem 0 0 0.5rem;

                  @media (max-width: 1750px) {
                    width: 100%;
                    height: 100%;
                    padding: 0.5rem 0 0 0.5rem;
                    margin: 0;
                  }
                }
              }
            }
          }

          & .carousel {
            display: none;

            @media (max-width: 800px) {
              display: flex;
            }

            & .carousel-control-prev {
              & .sr-only {
                display: none;
              }
            }
            & .carousel-control-next {
              & .sr-only {
                display: none;
              }
            }

            & .carousel-caption {
              display: none;
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
