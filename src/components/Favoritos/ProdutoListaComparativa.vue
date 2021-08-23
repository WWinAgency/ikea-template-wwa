<template>
  <div class="produtoListaComparativa">
    <Produto
      :imageSrc="imageSrc"
      :link="link"
      :name="name"
      :type="type"
      :utility="utility"
      :currentPrice="currentPrice"
      :variantStock="variantStock"
      :medidas="medidas"
    />

    <hr class="costum-hr" />
    <div class="collapsable-text">
      <div class="accordion" role="tablist">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="header-text" role="tab">
            <b-card-text>{{ productShowingText }}</b-card-text>
          </b-card-header>
          <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
            <b-card-body>
              <b-card-text>{{ productHiddenText }}</b-card-text>
            </b-card-body>
          </b-collapse>
          <b-button
            @click="accordionDescriptionOpen = !accordionDescriptionOpen"
            class="ler-mais"
            block
            v-b-toggle.accordion-1
            variant="info"
          >
            <div>
              <div v-if="accordionDescriptionOpen == false">Ler mais</div>
              <div v-else>Ler menos</div>
            </div>
          </b-button>
        </b-card>
      </div>
    </div>
    <div class="disponibilidade-entrega">
      <div class="row-1">
        <h2>Disponível para entrega</h2>
      </div>
      <hr class="costum-hr" />
      <div class="row-2">
        <div class="col-1">
          <b-icon
            class="disponivel-icon"
            icon="check-circle-fill"
            scale="1"
            :variant="variantStock"
          ></b-icon>
        </div>
        <div class="col-2">
          <h3>Disponível</h3>
        </div>
      </div>
    </div>

    <div class="resto-produto">
      <!-- Using modifiers -->
      <b-button
        class="button-ver-mais"
        v-b-toggle.collapse-a.collapse-b.collapse-c
        @click="accordionSeeMoreOpen = !accordionSeeMoreOpen"
        ><div>
          <div v-if="accordionSeeMoreOpen == false">Ler mais</div>
          <div v-else>Ler menos</div>
        </div></b-button
      >

      <b-collapse id="collapse-a" class="mt-2">
        <b-card
          ><div class="medidas">
            <div class="medidas-header">
              Medidas
            </div>
            <hr class="costum-hr" />
            <div
              class="medidas-body"
              v-for="(medida, index) in medidas"
              :key="index"
            >
              <div class="row">
                <div class="inner-col">
                  <div class="inner-row-1">{{ medida.tituloMedida }}</div>
                  <div class="inner-row-2">{{ medida.dimensao }} cm</div>
                </div>
              </div>
            </div>
          </div></b-card
        >
      </b-collapse>
      <b-collapse id="collapse-b" class="mt-2">
        <b-card
          ><div class="detalhes-embalagem">
            <div class="header">
              Detalhes da embalagem
            </div>
            <hr class="costum-hr" />
            <div class="body">
              <div class="row-1">
                Este produto é composto por
                {{ qntEmbalagens }} embalagens
              </div>
              <div class="row-2">
                <div class="inner-col">
                  <div class="inner-row-1">{{ name }}</div>
                  <div class="inner-row-2">{{ type }}</div>
                </div>
              </div>
              <div class="row-3">
                <div class="inner-col">
                  <div class="inner-row-1">Número do artigo</div>
                  <div class="inner-row-2">{{ code }}</div>
                </div>
              </div>
              <div class="row-4">
                <SidebarEmbalagens
                  :productCode="id"
                  :qntEmbalagens="qntEmbalagens"
                  :name="name"
                  :type="type"
                  :code="code"
                  :comprimento="comprimento"
                  :altura="altura"
                  :largura="largura"
                  :peso="peso"
                />
              </div>
            </div></div
        ></b-card>
      </b-collapse>
      <b-collapse id="collapse-c" class="mt-2">
        <b-card>
          <div class="rating-and-reviews">
            <div class="header">Ratings and Reviews</div>
            <hr class="costum-hr" />
            <div class="body">
              <div class="row-1">Pontuação média</div>
              <div class="row-2">{{ rating }}</div>
              <div class="row-3">
                <div class="rating-stars">
                  <div class="rating-row">
                    <div class="rating-col-1">
                      <star-rating
                        v-bind:increment="0.5"
                        v-bind:max-rating="5"
                        inactive-color="white"
                        active-color="black"
                        v-bind:star-size="15"
                        :rating="rating"
                        :show-rating="false"
                      >
                      </star-rating>
                    </div>
                    <div class="rating-col-2">
                      <h4>( {{ ratingCount }} )</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row-4">
                <div class="inner-col">
                  <div class="inner-row-1">
                    <div class="rating-stars">
                      <div class="rating-row">
                        <div class="rating-col-1">
                          <star-rating
                            v-bind:increment="0.5"
                            v-bind:max-rating="5"
                            inactive-color="white"
                            active-color="black"
                            v-bind:star-size="15"
                            :rating="showcaseRatingRating"
                            :show-rating="false"
                          >
                          </star-rating>
                        </div>
                        <div class="rating-col-2">
                          <div class="comentario">
                            <h4>
                              {{ showcaseRatingName }} -
                              {{ showcaseRatingDay }}/{{
                                showcaseRatingMonth
                              }}/{{ showcaseRatingYear }}
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="inner-row-2">{{ showcaseRatingComment }}</div>
                </div>
              </div>
              <div class="row-5">
                <SidebarAvaliacoesComparison
                  :evaluations="evaluations"
                  :productCode="id"
                  :rating="rating"
                  :ratingCount="ratingCount"
                  :valueAssembly="valueAssembly"
                  :valuePrice="valuePrice"
                  :valueQuality="valueQuality"
                  :valueLooks="valueLooks"
                  :valueExpectations="valueExpectations"
                />
              </div>
            </div>
          </div>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>

<script>
import Produto from "./Produto.vue";
import StarRating from "vue-star-rating";
import SidebarEmbalagens from "../ComponentesGlobais/Sidebars/SidebarEmbalagens.vue";
import SidebarAvaliacoesComparison from "../ComponentesGlobais/Sidebars/SidebarAvaliacoesComparison.vue";
export default {
  components: {
    Produto,
    StarRating,
    SidebarEmbalagens,
    SidebarAvaliacoesComparison,
  },

  // methods: {
  //   openDescription() {
  //     accordionDescriptionOpen = !accordionDescriptionOpen;
  //   },
  //   openSeeMore() {
  //     accordionSeeMoreOpen = !accordionSeeMoreOpen;
  //   },
  // },
  props: {
    id: Number,
    name: String,
    type: String,
    utility: String,
    code: String,
    imageSrc: String,
    link: String,
    rating: Number,
    ratingCount: Number,
    currentPrice: Number,
    variantStock: String,
    medidas: Array,
    evaluations: Array,
    qntEmbalagens: Number,
    valueAssembly: Number,
    valuePrice: Number,
    valueQuality: Number,
    valueLooks: Number,
    valueExpectations: Number,
    peso: Number,
    comprimento: Number,
    largura: Number,
    altura: Number,
    accordionDescriptionOpen: Boolean,
    accordionSeeMoreOpen: Boolean,
    productShowingText: String,
    productHiddenText: String,
    showcaseRatingName: String,
    showcaseRatingDay: Number,
    showcaseRatingMonth: Number,
    showcaseRatingYear: Number,
    showcaseRatingComment: String,
    showcaseRatingRating: Number,
  },
};
</script>

<style lang="scss">
.produtoListaComparativa {
  & .btn-check:focus + .btn-secondary,
  .btn-secondary:focus {
    box-shadow: none;
  }
  & .collapsable-text {
  }
  & .disponibilidade-entrega {
  }
  & .resto-produto {
    margin-top: 3rem;
    & .button-ver-mais {
      background-color: white;
      padding: 0;
      border: none;
      color: black;
      text-decoration: underline;
      font-weight: 700;
    }

    & .medidas {
      & .medidas-body {
        & .row {
          & .inner-col {
            padding-left: 0;
          }
        }
      }
    }

    & .detalhes-embalagem {
      & .body {
        & .row-4 {
          width: 80%;
        }
      }
    }
  }
}
</style>
