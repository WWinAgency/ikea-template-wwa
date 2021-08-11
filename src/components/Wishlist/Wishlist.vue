<template>
  <div class="container">
    <template v-if="products.length > 0">
      <div class="row">
        <div class="col-sm-12 my-5 pb-1 pt-5">
          <h1 class="text-left h1">Lista de Favoritos</h1>
        </div>
        <!-- <div class="col-sm-5 d-flex justify-content-end">
          <button @click="clearWishlist" class="btn btn-hero-light">Limpar</button>
        </div> -->
      </div>
      <div class="row">
        <div class="col-sm-12 pt-3 pb-5 my-4">
          <div class="row">
            <div
              v-for="(product, index) in products"
              :key="index"
              class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
            >
              <button
                type="button"
                class="btn btn-wishlist"
                @click="removeWishlistItem(index)"
              >
                <i class="fas fa-times"></i>
              </button>
              <img
                class="img-fluid px-5"
                :src="'/images/medium/' + product.image"
              />
              <div class="card">
                <div class="card-body text-center">
                  <div class="product-description">
                    <p class="wishlistItemTitle">{{ product.name }}</p>
                    <h5 class="font-weight-bold">{{ product.price }}€</h5>
                    <a
                      class="btn btn-hero buttoncart mt-3"
                      :href="'/products/show/' + product.slug"
                      >Saber Mais</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
              A wishlist encontra-se vazia.
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Wishlist",
  data() {
    return {
      products: [],
    };
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
    clearWishlist() {
      this.products = {};
      this.$store.dispatch("WishlistModule/clearWishlist");
    },
    removeWishlistItem(index) {
      this.$store.dispatch("WishlistModule/removeWishlistItem", index);
      this.products = this.$store.state.WishlistModule.wishlist.products;
    },
  },
};
</script>

<style scoped>
.btn-wishlist {
  width: 100%;
  height: auto;
  z-index: 1;
  padding: 5px 20px;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  text-align: right;
}
.card {
  border: 1px solid transparent !important;
}
</style>
