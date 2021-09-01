<template>
  <div class="tagProduto">
    <div class="product-col">
      <div v-if="sale == true" class="product-row-1">
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
      <div v-if="sale == true" class="product-row-5">
        Preço Habitual {{ precoHabitual }}{{ moedaProduto }}/ ud
      </div>
      <div class="product-row-6">
        <div class="col-row-6"></div>
        <div v-if="sale == true" class="row-col-6">
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
                :read-only="true"
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
          <b-button
            @click="handleAddToCart(product)"
            v-if="cartExists(product) === false"
            class="product-button"
            >Adicionar ao cesto</b-button
          >
        </div>
        <div class="inner-col-4">
          <a
            class="icon float-right m-0 cursor-pointer"
            @click="handleAddToWishlist()"
            v-if="wishlistExists() === false"
            ><b-icon-heart></b-icon-heart
          ></a>
          <a
            class="icon check float-right m-0 cursor-pointer"
            v-else
            @click="handleRemoveToWishlist()"
          >
            <b-icon icon="check" scale="1.6" variant="dark"></b-icon
          ></a>
        </div>
      </div>
      <div class="product-row-9">
        <div class="inner-col-5">
          <b-icon icon="truck" scale="1.5" variant="dark"></b-icon>
        </div>
        <div class="inner-col-6">
          <div class="disponivel-stock">
            Confirme a disponibilidade e as opções de entrega do checkout
            <b-icon
              class="disponivel-icon"
              icon="check-circle-fill"
              scale="1"
              :variant="variantStock"
            ></b-icon>
          </div>
        </div>
      </div>

      <hr class="costum-hr" />

      <div class="product-row-10">
        <div class="inner-col-7">
          <b-icon icon="basket3" scale="1.5" variant="dark"></b-icon>
        </div>
        <div class="inner-col-8">
          Verificar stock na loja
          <b-icon
            class="disponivel-icon"
            icon="check-circle-fill"
            scale="1"
            :variant="variantLoja"
          ></b-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import StarRating from "vue-star-rating";
export default {
  name: "TagProduto",
  components: { StarRating },
  props: {
    idProduto: String,
    nomeProduto: String,
    precoProduto: Number,
    moedaProduto: String,
    tipoProduto: String,
    ratingProduto: Number,
    avaliacoesProduto: Number,
    utilidadeProduto: String,
    dimensoesProdutoCm: String,
    precoHabitual: Number,
    sale: Boolean,
    promocaoInicioMes: String,
    promocaoInicioDia: Number,
    promocaoFimMes: String,
    promocaoFimDia: Number,
    variantStock: String,
    variantLoja: String,
  },
  mounted() {
    const productIds = this.$store.state.WishlistModule.wishlist;
    const productIdsString = productIds.join();
    axios
      .get("/api/products", { params: { id: productIdsString } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    async handleAddToWishlist(id) {
      await this.$store.dispatch("WishlistModule/addWishlistItem", id);
    },
    handleRemoveToWishlist(id) {
      this.$store.dispatch("WishlistModule/removeWishlistItem", id);
    },
    wishlistExists(id) {
      return (
        this.$store.state.WishlistModule.wishlist.find((i) => i === id) != null
      );
    },
  },
};
</script>

<style lang="scss">
.tagProduto {
  width: 100%;
  position: sticky;
  & .product-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 2.5rem;

    @media (max-width: 1200px) {
      padding-left: 0;
    }

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

      @media (max-width: 1750px) {
        display: flex;
        flex-direction: column;
      }
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

        @media (max-width: 1750px) {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
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

          @media (max-width: 1750px) {
            float: none;
            margin: 0 0 0 0.5rem;
            text-align: center;
          }
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

        & a.icon {
          & .check {
            font-size: 20px;
          }
          font-size: 20px;
          color: black;
          width: 3.5rem;
          height: 3.5rem;
          border-radius: 64px;
          background-color: white;
          border: 1px solid #dfdfdf;
          justify-content: center;
          align-items: center;
          display: flex;

          &:hover {
            border: 1px solid grey;
          }

          & .b-icon.bi {
            margin-top: 0.2rem;
            display: flex;
            align-items: center;
          }
        }
      }
    }
    & .product-row-9 {
      display: flex;
      width: 100%;
      align-items: center;
      margin-top: 1.5rem;

      @media (max-width: 980px) {
        margin-left: 0.3rem;
      }

      & .inner-col-5 {
        float: left;
        width: 10%;
      }
      & .inner-col-6 {
        float: right;
        width: 90%;
        display: inline-flex;

        & .disponivel-icon {
          margin-left: 1rem;
        }
      }
    }
    & .product-row-10 {
      display: flex;
      width: 100%;
      align-items: center;

      @media (max-width: 980px) {
        margin-left: 0.3rem;
      }

      & .inner-col-7 {
        float: left;
        width: 10%;
      }
      & .inner-col-8 {
        float: right;
        width: 90%;

        & .disponivel-icon {
          margin-left: 1rem;
        }
      }
    }
  }
}
</style>
