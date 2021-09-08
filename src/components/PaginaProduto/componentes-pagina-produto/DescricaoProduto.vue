<template>
  <div class="descricao-produto">
    <div class="product-inner-col">
      <div class="product-description-row-1">
        <div class="product-description-col-2">
          <div class="numero-artigo">Número de artigo</div>
          <div class="codigo-artigo">{{ codigoProduto }}</div>
        </div>
      </div>
      <hr class="costum-hr" />

      <div class="product-description-row-2">
        <SidebarDescriptionDetalhesProduto
          :nomeProduto="nomeProduto"
          :tipoProduto="tipoProduto"
          :utilidadeProduto="utilidadeProduto"
          :codigoProduto="codigoProduto"
          tituloSidebar="Detalhes do Produto"
          generalDescription="Se dormir de lado, coloque o lado maior virado para
        cima. O espaço proporcionado pela clivagem proporciona um bom apoio à
        cabeça e ao pescoço e reduz a tensão nos ombros."
          specificDescription="e
        dormir de costas, coloque o lado menor virado para cima. A inclinação
        proporciona apoio ao pescoço e aos músculos do pescoço, para que possa
        descontrair."
          :materiais="{
            productInsideTitle: 'Revestimento:',
            productInside: '99% poliéster, 1% elastano',
            productContainsTitle: 'Estofo:',
            productContains: 'Espuma memory de poliuretano',
            productProtectionTitle: 'Rebordo/ Forro:',
            productProtection: '100% poliéster',
            productBacksideTitle: '',
            productBackside: '',
            productCleaningTitle: 'Almofada',
            productCleaning:
              'Não lavar.Não usar lixívia.Não é próprio para a máquina de secar.Não engomar.Não limpar a seco.',
            productCleaningTitle2: 'Capa de almofada',
            productCleaning2:
              'Lavar à máquina (máx. 60°C, ciclo normal).Não usar lixívia.Secar na máquina, a baixa temperatura (máx 60°C).Não engomar.Não limpar a seco.',
          }"
          :sustentabilidade="{
            description:
              'O produto pode ser reciclado ou usado para aproveitamento energético, se disponível na sua zona. ',
          }"
          :pesoMedidas="{
            largura: 42,
            altura: 14,
            comprimento: 72,
            peso: 1.88,
            embalagens: 1,
          }"
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
            <SidebarDescriptionAvaliacoesProduto
              :evaluations="produtos[0].evaluations"
              :productId="produtos[0].productId"
              :rating="produtos[0].rating"
              :ratingCount="produtos[0].ratingCount"
              :valueAssembly="produtos[0].valueAssembly"
              :valuePrice="produtos[0].valuePrice"
              :valueQuality="produtos[0].valueQuality"
              :valueLooks="produtos[0].valueLooks"
              :valueExpectations="produtos[0].valueExpectations"
            />
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
                    :rating="produtos[0].rating"
                    :show-rating="false"
                    :read-only="true"
                  >
                  </star-rating>
                </div>
                <div class="rating-row">
                  <h4>( {{ produtos[0].ratingCount }} )</h4>
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
import SidebarDescriptionDetalhesProduto from "../../ComponentesGlobais/Sidebars/SidebarDescriptionDetalhesProduto.vue";
import SidebarDescriptionDimensoesProduto from "../../ComponentesGlobais/Sidebars/SidebarDescriptionDimensoesProduto.vue";
import SidebarDescriptionAvaliacoesProduto from "../../ComponentesGlobais/Sidebars/SidebarDescriptionAvaliacoesProduto.vue";
import produtos from "../../../assets/data/mainPage/products";
export default {
  mixins: [produtos],
  components: {
    SidebarDescriptionDetalhesProduto,
    SidebarDescriptionDimensoesProduto,
    SidebarDescriptionAvaliacoesProduto,
    StarRating,
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
