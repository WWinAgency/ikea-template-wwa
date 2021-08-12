<template>
  <div>
    <div v-if="wishlistExists === false">
      <a
        class="icon float-right m-0 cursor-pointer"
        @click="handleAddToWishlist"
        ><b-icon-heart></b-icon-heart
      ></a>
    </div>
    <div v-else>
      <a
        class="icon heart float-right m-0 cursor-pointer"
        @click="handleRemoveToWishlist"
        ><b-icon-heart-fill></b-icon-heart-fill
      ></a>
    </div>
  </div>
</template>

<script>
import { BIconHeart } from "bootstrap-vue";
import { BIconHeartFill } from "bootstrap-vue";
export default {
  name: "AddWishlist",
  components: { BIconHeart, BIconHeartFill },
  props: ["productId"],
  methods: {
    async handleAddToWishlist() {
      await this.$store.dispatch(
        "WishlistModule/addWishlistItem",
        this.productId
      );
    },
    handleRemoveToWishlist() {
      this.$store.dispatch("WishlistModule/removeWishlistItem", this.productId);
    },
  },
  computed: {
    wishlistExists() {
      return (
        this.$store.state.WishlistModule.wishlist.find(
          (i) => i === this.productId
        ) != null
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
