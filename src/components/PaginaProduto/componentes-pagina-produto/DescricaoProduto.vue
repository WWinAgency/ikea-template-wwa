<template>
  <div class="descricao-produto">
    <div class="product-inner-col">
      <div class="product-description-row-1">
        <div class="product-description-col-1">
          {{ textoDescritivo }}
        </div>
        <div class="product-description-col-2">
          <div class="numero-artigo">Número de artigo</div>
          <div class="codigo-artigo">{{ codigoProduto }}</div>
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="product-description-row-2">
        <SidebarDescriptionDetalhesProduto
          tituloSidebar="Detalhes do Produto"
        />
      </div>
      <hr class="costum-hr" />
      <div class="product-description-row-3">
        <SidebarDescriptionDimensoesProduto
          tituloSidebar="Dimensões do produto"
        />
      </div>
      <hr class="costum-hr" />
      <div class="product-description-row-4">
        <div class="inner-col">
          <div class="inner-row-1">
            <SidebarDescriptionAvaliacoesProduto tituloSidebar="Avaliações" />
          </div>
          <div class="inner-row-2">
            <div class="rating-stars">
              <div class="rating-col">
                <div class="rating-row">
                  <star-rating
                    v-bind:increment="0.5"
                    v-bind:max-rating="5"
                    inactive-color="white"
                    active-color="black"
                    v-bind:star-size="15"
                    :rating="rating"
                    :show-rating="false"
                    read-only="true"
                  >
                  </star-rating>
                </div>
                <div class="rating-row">
                  <h4>( {{ avaliacoes }} )</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import SidebarDescriptionDetalhesProduto from "../../Sidebars/SidebarDescriptionDetalhesProduto.vue";
import SidebarDescriptionDimensoesProduto from "../../Sidebars/SidebarDescriptionDimensoesProduto.vue";
import SidebarDescriptionAvaliacoesProduto from "../../Sidebars/SidebarDescriptionAvaliacoesProduto.vue";
export default {
  components: {
    SidebarDescriptionDetalhesProduto,
    SidebarDescriptionDimensoesProduto,
    SidebarDescriptionAvaliacoesProduto,
    StarRating,
  },
  props: {
    textoDescritivo: String,
    codigoProduto: String,
    avaliacoes: Number,
    rating: Number,
  },
};
</script>

<style lang="scss">
.descricao-produto {
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
    & .product-description-row-4 {
      & .inner-col {
        display: flex;
        flex-direction: column;

        & .inner-row-2 {
          & .rating-stars {
            margin-bottom: 0.5rem;
            & .rating-col {
              display: ruby;
              list-style: none;
              padding-left: 0;
              & .rating-row {
                & h4 {
                  font-size: 0.8rem !important;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
