<template>
  <div>
    <a
      class="icon float-right m-0 cursor-pointer"
      @click="handleAddToWishlist(produto)"
      v-if="wishlistExists(produto.id) === false"
      ><b-icon-heart></b-icon-heart
    ></a>
    <a
      class="icon heart float-right m-0 cursor-pointer"
      @click="handleRemoveToWishlist"
      ><b-icon-heart-fill></b-icon-heart-fill
    ></a>
  </div>
</template>

<script>
import { BIconHeart } from "bootstrap-vue";
import { BIconHeartFill } from "bootstrap-vue";
export default {
  name: "AddWishlist",
  components: { BIconHeart, BIconHeartFill },
  props: ["produto"],
  methods: {
    async handleAddToWishlist() {
      await this.$store.dispatch(
        "WishlistModule/addWishlistItem",
        this.produto
      );
    },
    handleRemoveToWishlist() {
      this.$store.dispatch("WishlistModule/removeWishlistItem", this.produto);
    },
    wishlistExists(id) {
      return (
        this.$store.state.WishlistModule.wishlist.find((i) => i === id) != null
      );
    },
  },
};
</script>
<style scoped>
a.icon {
  font-size: 20px !important;
}
a.icon:hover {
  color: #d59747;
}
a.heart {
  color: #d59747;
}
</style>
