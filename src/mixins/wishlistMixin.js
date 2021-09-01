import axios from "axios";

export default {
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
