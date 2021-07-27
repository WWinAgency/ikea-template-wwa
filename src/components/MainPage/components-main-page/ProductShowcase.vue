<template>
  <div class="product-showcase">
    <div class="product-grid-row-1">
      <div class="product-grid-col-1">
        <Product
          productImage="src\assets\images\vase.jpg"
          name="FEJKA"
          type="Planta Artificial em vaso, 9cm"
          normalPrice="4,50"
          currentPrice="4"
          rating="4.5"
          avaliacoes="8"
        />
      </div>
      <div class="product-grid-col-2">
        <Product
          productImage="src\assets\images\window-blinds.jpg"
          name="SKOGSKLÖVER"
          type="Estore de correr 120x195 cm"
          normalPrice="35"
          currentPrice="29"
          rating="4"
          avaliacoes="148"
        />
      </div>
      <div class="product-grid-col-3">
        <Product
          productImage="src\assets\images\chair.jpg"
          name="HUSARÖ"
          type="Poltrona, exterior"
          normalPrice="99"
          currentPrice="85"
          rating="4.5"
          avaliacoes="10"
        />
      </div>
      <div class="product-grid-col-4">
        <Product
          productImage="src\assets\images\storage.jpg"
          name="HAUGA"
          type="Roupeiro aberto c/3 gavetas 70x199 cm"
          normalPrice="149"
          currentPrice="119"
          rating="4"
          avaliacoes="5"
        />
      </div>
    </div>
    <div class="product-grid-row-2">
      <div class="promocoes-ikea-family">
        <b-button class="ikea-family-btn" variant="dark"
          >Ver promoções IKEA Family</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product/Product";

export default {
  components: { Product },
  data: function() {
    return {};
  },
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
    & .promocoes-ikea-family {
      & .ikea-family-btn {
        border-radius: 64px !important;
        font-size: 0.75rem !important;
        font-weight: 700 !important;
        height: 2.5rem;
        width: 13rem;

        &:hover {
          background-color: #303030;
        }
      }
    }
  }
}
</style>
