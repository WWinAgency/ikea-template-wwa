<template>
  <div class="product-showcase">
    <div class="container">
      <div class="row">
        <div
          v-for="(product, index) in products"
          :key="index"
          class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12 px-2 py-0"
        >
          <Product
            :id="product.id"
            :name="product.name"
            :type="product.type"
            :utility="product.utility"
            :imageSrc="product.imageSrc"
            :normalPrice="product.normalPrice"
            :currentPrice="product.currentPrice"
            :rating="product.rating"
            :ratingCount="product.ratingCount"
            :link="product.link"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: { Product },
  props: ["products"],
};
</script>

<style lang="scss">
.product-showcase {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;

  & .container {
    display: flex;
    padding: 0;
    margin: 0;
    max-width: 100%;

    & .row {
      display: flex;
      flex-direction: row;
      width: 100% !important;

      margin: 0;

      & .teste {
        display: flex;
        flex-wrap: wrap;
      }
    }
  }
}
</style>
