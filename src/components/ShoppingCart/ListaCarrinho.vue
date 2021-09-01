<template>
  <div class="listaCarrinho">
    <template v-if="this.$store.state.ShopcartModule.cart.length > 0">
      <div
        class="product-card"
        v-for="(product, index) in this.$store.state.ShopcartModule.cart"
        :key="index"
      >
        <b-card :img-src="product.imageSrc" img-left>
          <b-card-text>
            <div v-if="product.sale == true" class="promocao">
              Preço ainda mais baixo
            </div>
            <div class="row-1">
              <div class="row-1-col-1">{{ product.name }}</div>
              <div class="row-1-col-2">{{ product.currentPrice }} €</div>
            </div>
            <div class="row-2">{{ product.type }}, {{ product.utility }}</div>
            <div v-if="product.sale == true" class="preco-promocao">
              Preço Habitual: {{ product.normalPrice }} €
            </div>
            <div class="row-3">
              <div class="row-3-col-1">
                <select class="form-select" aria-label="Default select example">
                  <option v-for="n in 1000" :key="n">{{ n }}</option>
                </select>
              </div>
              <div class="row-3-col-2">
                <button @click="handleRemoveFromCart(product)">
                  Remover produto
                </button>
              </div>
              <div class="row-3-col-3"><a>Guardar nos favoritos</a></div>
            </div>
          </b-card-text>
        </b-card>
        <hr class="costum-hr" />
      </div>
    </template>
    <template v-else>
      <div class="row">
        <!--
          Margin bottom: 200px is a hack to push footer down so it doesn't unalign the page.
          Need to get a better solution for this.
        -->
        <div class="container" style="margin-bottom: 200px">
          <div class="row">
            <div class="col-sm-12 pt-5">
              O Carrinho encontra-se vazio
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import shoppingCartMixin from "../../mixins/shoppingCartMixin";

export default {
  mixins: [shoppingCartMixin],
};
</script>

<style lang="scss">
.listaCarrinho {
  width: 100%;
  & .product-card {
    width: 100%;
    height: auto;

    & .card {
      & .card-img-left {
        width: 30%;
      }

      & .card-body {
        height: 100%;
        & .card-text {
          & .promocao {
            color: #ed022a;
            font-weight: 700;
            line-height: 1.57;
            font-size: 0.875rem;
          }
          & .row-1 {
            display: flex;
            width: 100%;
            & .row-1-col-1 {
              width: 50%;
              text-align: left;
              font-size: 1.3rem;
              line-height: 1.63;
              font-weight: 700;
            }
            & .row-1-col-2 {
              width: 50%;
              text-align: right;
              font-size: 1.3rem;
              line-height: 1.63;
              font-weight: 700;
            }
          }

          & .row-2 {
            margin: 0.5rem 0 0 0;
            color: #484848;
            line-height: 1.57;
            font-size: 0.875rem;
          }
          & .preco-promocao {
            margin: 0.2rem 0 0 0;
            color: #484848;
            line-height: 1.57;
            font-size: 0.875rem;
          }
          & .row-3 {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0 0 0;
            & .row-3-col-1 {
              text-align: center;

              & .form-select {
                width: 5rem;
                border-radius: 50px;
              }
            }
            & .row-3-col-2 {
              text-align: center;
              color: #484848;
              font-size: 0.875rem;
              font-weight: 400;
            }
            & .row-3-col-3 {
              text-align: center;
              color: #484848;
              font-size: 0.875rem;
              font-weight: 400;
            }
          }
        }
      }
    }
  }
}
</style>
