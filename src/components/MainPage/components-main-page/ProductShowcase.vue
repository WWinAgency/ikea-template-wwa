<template>
  <div class="product-showcase">
    <ul class="product-list">
      <li class="list-item-1">
        <Product
          productImage="src\assets\images\vase.jpg"
          name="FEJKA"
          type="Planta Artificial em vaso, 9cm"
          normalPrice="4,50"
          currentPrice="4"
          rating="4.5"
          avaliacoes="8"
        />
      </li>
      <li class="list-item-2">
        <Product
          productImage="src\assets\images\window-blinds.jpg"
          name="SKOGSKLÖVER"
          type="Estore de correr 120x195 cm"
          normalPrice="35"
          currentPrice="29"
          rating="4"
          avaliacoes="148"
        />
      </li>
      <li class="list-item-3">
        <Product
          productImage="src\assets\images\chair.jpg"
          name="HUSARÖ"
          type="Poltrona, exterior"
          normalPrice="99"
          currentPrice="85"
          rating="4.5"
          avaliacoes="10"
        />
      </li>
      <li class="list-item-4">
        <Product
          productImage="src\assets\images\storage.jpg"
          name="HAUGA"
          type="Roupeiro aberto c/3 gavetas 70x199 cm"
          normalPrice="149"
          currentPrice="119"
          rating="4"
          avaliacoes="5"
        />
      </li>
    </ul>

    <div class="promocoes-ikea-family">
      <b-button class="ikea-family-btn" variant="dark"
        >Ver promoções IKEA Family</b-button
      >
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
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;

  & .product-list {
    width: 100%;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-evenly;
    padding-left: 0 !important;

    @media (max-width: 400px) {
      width: 100%;
    }

    & .list-item-1 {
      @media (max-width: 768px) {
        margin: 0 0.5rem 0 0;
      }

      @media (max-width: 400px) {
        margin: 0 0 1rem 0 !important;
      }
    }

    & .list-item-2 {
      margin: 0 1rem 0 1rem;

      @media (max-width: 768px) {
        margin: 0 0 0 0.5rem;
      }
      @media (max-width: 400px) {
        margin: 0 0 1rem 0 !important;
      }
    }

    & .list-item-3 {
      margin: 0 1rem 0 0;

      @media (max-width: 768px) {
        margin: 0 0.5rem 0 0;
      }

      @media (max-width: 400px) {
        margin: 0 0 1rem 0 !important;
      }
    }

    & .list-item-4 {
      @media (max-width: 768px) {
        margin: 0 0 0 0.5rem;
      }

      @media (max-width: 400px) {
        margin: 0 !important;
      }
    }
  }

  & .promocoes-ikea-family {
    & .ikea-family-btn {
      border-radius: 20px !important;
      font-size: 0.75rem !important;
      font-weight: 700 !important;

      &:hover {
        background-color: #303030;
      }
    }
  }
}
</style>
