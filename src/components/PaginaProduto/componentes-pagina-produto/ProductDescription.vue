<template>
  <div class="productDescription">
    <div class="product-col">
      <div class="product-row-1">
        <h3><strong>Promoção IKEA Family</strong></h3>
      </div>
      <div class="product-row-2">
        <div class="inner-col-1">
          <h4>
            <strong>{{ nomeProduto }}</strong>
          </h4>
        </div>
        <div class="inner-col-2">
          <h1>
            <strong>{{ precoProduto }}</strong>
          </h1>
          <h2>
            <strong>{{ moedaProduto }}/ud</strong>
          </h2>
        </div>
      </div>
      <div class="product-row-3">
        {{ tipoProduto }}, {{ utilidadeProduto }}, {{ dimensoesProdutoCm }} cm
      </div>
      <div class="product-row-4">IVA incluído no preço</div>
      <div class="product-row-5">
        Preço Habitual {{ precoHabitual }}{{ moedaProduto }}/ ud
      </div>
      <div class="product-row-6">
        <div class="col-row-6"></div>
        <div class="row-col-6">
          Promoção válida de {{ promocaoInicioMes }} {{ promocaoInicioDia }} até
          {{ promocaoFimMes }} {{ promocaoFimDia }}.
        </div>
        <div class="row-col-6">Limitado ao stock existente</div>
      </div>
      <div class="product-row-7">
        <div class="rating-stars">
          <div class="rating-row">
            <div class="rating-col-1">
              <star-rating
                v-bind:increment="0.5"
                v-bind:max-rating="5"
                inactive-color="white"
                active-color="black"
                v-bind:star-size="15"
                :rating="ratingProduto"
                :show-rating="false"
                read-only="true"
              >
              </star-rating>
            </div>
            <div class="rating-col-2">
              <h4>( {{ avaliacoesProduto }} )</h4>
            </div>
          </div>
        </div>
      </div>
      <div class="product-row-8">
        <div class="inner-col-3">
          <b-button class="product-button">Adicionar ao cesto</b-button>
        </div>
        <div class="inner-col-4">
          <b-button class="favorite-button"
            ><b-icon icon="heart" scale="0.9" variant="dark"></b-icon
          ></b-button>
        </div>
      </div>
      <div class="product-row-9">
        <div class="inner-col-5">
          <b-icon icon="truck" scale="1.5" variant="dark"></b-icon>
        </div>
        <div class="inner-col-6">
          Confirme a disponibilidade e as opções de entrega do checkout
        </div>
      </div>

      <hr class="costum-hr" />

      <div class="product-row-10">
        <div class="inner-col-7">
          <b-icon icon="basket3" scale="1.5" variant="dark"></b-icon>
        </div>
        <div class="inner-col-8">Verificar stock na loja</div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  name: "ProductDescription",
  components: { StarRating },
  props: {
    nomeProduto: String,
    precoProduto: Number,
    moedaProduto: String,
    tipoProduto: String,
    ratingProduto: Number,
    avaliacoesProduto: Number,
    utilidadeProduto: String,
    dimensoesProdutoCm: String,
    precoHabitual: Number,
    promocaoInicioMes: String,
    promocaoInicioDia: Number,
    promocaoFimMes: String,
    promocaoFimDia: Number,
  },
};
</script>

<style lang="scss">
.productDescription {
  width: 100%;
  position: sticky;
  & .product-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 2.5rem;

    & .costum-hr {
      width: 100%;
      margin: 1.5rem 0 1.5rem 0 !important;
    }

    & .product-row-1 {
      margin-bottom: 0.25rem;
      & h3 {
        color: #0077c1;
        font-size: 0.875rem;
        line-height: 1.42857;
      }
    }
    & .product-row-2 {
      display: inline-block;
      & .inner-col-1 {
        float: left;
        & h4 {
          font-size: 1.375rem;
          line-height: 1.45455;
          text-transform: uppercase;
        }
      }
      & .inner-col-2 {
        float: right;
        display: inline-block;
        & h1 {
          float: left;
          font-size: 1.375rem;
          line-height: 1.45455;
          text-transform: uppercase;
        }
        & h2 {
          float: right;
          font-size: 0.6875rem;
          line-height: 0.9;
          margin-left: 0.0625rem;
        }
      }
    }
    & .product-row-3 {
      margin-bottom: 0.5rem;
    }
    & .product-row-4 {
    }
    & .product-row-5 {
    }
    & .product-row-6 {
      font-size: 0.75rem;
    }
    & .product-row-7 {
      & .rating-stars {
        & .rating-row {
          display: ruby;
          list-style: none;
          padding-left: 0;
          & .rating-col-1 {
            margin-right: 1rem;
          }
          & .rating-col-2 {
            & h4 {
              font-size: 0.875rem;
            }
          }
        }
      }
    }
    & .product-row-8 {
      display: inline-block;
      margin-top: 2.5rem;
      margin-bottom: 1.25rem;
      width: 100%;
      align-items: center;

      & .inner-col-3 {
        width: 90%;
        float: left;

        & .product-button {
          width: 90%;
          height: 3.5rem;
          border-radius: 64px;
          background-color: #004f93;
          font-size: 0.875rem;
          font-weight: 700;
          line-height: 1.71429;
          border: 0;
          padding: 0;
          text-align: center;
        }
      }
      & .inner-col-4 {
        width: 10%;
        float: right;

        & .favorite-button {
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 64px;
          background-color: white;
          border: 1px solid #dfdfdf;

          &:hover {
            border: 1px solid grey;
          }
        }
      }
    }
    & .product-row-9 {
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 1.5rem;

      & .inner-col-5 {
        float: left;
        width: 10%;
      }
      & .inner-col-6 {
        float: right;
        width: 90%;
      }
    }
    & .product-row-10 {
      display: flex;
      width: 100%;
      align-items: center;

      & .inner-col-7 {
        float: left;
        width: 10%;
      }
      & .inner-col-8 {
        float: right;
        width: 90%;
      }
    }
  }
}
</style>
