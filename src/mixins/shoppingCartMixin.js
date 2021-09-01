import axios from "axios";

export default {
  mounted() {
    const productIdsCart = this.$store.state.ShopcartModule.cart;
    const productIdsStringCart = productIdsCart.join();

    axios
      .get("/api/products", { params: { id: productIdsStringCart } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    async handleAddToCart(id) {
      await this.$store.dispatch("ShopcartModule/addCartItem", {
        id,
        qty: 1,
      });
      // this.$store.dispatch("ShopcartModule/clearCart");
    },
    handleRemoveFromCart(id) {
      this.$store.dispatch("ShopcartModule/removeCartItem", id);
    },
    cartExists(id) {
      return (
        this.$store.state.ShopcartModule.cart.find((i) => i === id) != null
      );
    },
  },
};
