<template>
  <div class="product-showcase">
    <div class="product-grid-row-1">
      <div class="product-grid-col-1">
        <Product
          :name="showcase[0].nome"
          :type="showcase[0].tipo"
          :utility="showcase[0].utilidade"
          :imageSrc="showcase[0].imagem"
          :normalPrice="showcase[0].precoNormal"
          :currentPrice="showcase[0].precoAtual"
          :rating="showcase[0].rating"
          :avaliacoes="showcase[0].avaliacoes"
          :link="showcase[0].link"
        />
      </div>
      <div class="product-grid-col-2">
        <Product
          :name="showcase[1].nome"
          :type="showcase[1].tipo"
          :utility="showcase[1].utilidade"
          :imageSrc="showcase[1].imagem"
          :normalPrice="showcase[1].precoNormal"
          :currentPrice="showcase[1].precoAtual"
          :rating="showcase[1].rating"
          :avaliacoes="showcase[1].avaliacoes"
          :link="showcase[1].link"
        />
      </div>
      <div class="product-grid-col-3">
        <Product
          :name="showcase[2].nome"
          :type="showcase[2].tipo"
          :utility="showcase[2].utilidade"
          :imageSrc="showcase[2].imagem"
          :normalPrice="showcase[2].precoNormal"
          :currentPrice="showcase[2].precoAtual"
          :rating="showcase[2].rating"
          :avaliacoes="showcase[2].avaliacoes"
          :link="showcase[2].link"
        />
      </div>
      <div class="product-grid-col-4">
        <Product
          :name="showcase[3].nome"
          :type="showcase[3].tipo"
          :utility="showcase[3].utilidade"
          :imageSrc="showcase[3].imagem"
          :normalPrice="showcase[3].precoNormal"
          :currentPrice="showcase[3].precoAtual"
          :rating="showcase[3].rating"
          :avaliacoes="showcase[3].avaliacoes"
          :link="showcase[3].link"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: { Product },
  props: ["showcase"],
};
</script>

<style lang="scss">
.product-showcase {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;

  & .product-grid-row-1 {
    display: flex;
    flex-direction: row;
    width: 100% !important;

    @media (max-width: 1500px) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      height: 100%;
      width: 100%;
    }
    @media (max-width: 700px) {
      height: 150rem;
      display: grid;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: repeat(4, 25%);
    }

    & .product-grid-col-1 {
      width: 25% !important;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
      }
      @media (max-width: 700px) {
        grid-row: 1 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-2 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }

      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }

      @media (max-width: 700px) {
        grid-row: 2 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-3 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
        padding-left: 0;
      }
      @media (max-width: 700px) {
        grid-row: 3 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-4 {
      width: 25% !important;
      padding-left: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }
      @media (max-width: 700px) {
        grid-row: 4 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
  }

  & .product-grid-row-2 {
    margin-top: 4rem;

    @media (max-width: 800px) {
      margin-top: 2rem;
    }
    @media (max-width: 400px) {
      margin-top: 0;
    }
  }
}
</style>
