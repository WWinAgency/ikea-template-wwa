import axios from "axios";

export default {
  mounted() {
    const productIds = this.$store.state.ComparisonListModule.comparison;
    console.log("comparisonList " + productIds);
    const productIdsString = productIds.join();
    axios
      .get("/api/products", { params: { id: productIdsString } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    async handleAddToComparisonList(id) {
      await this.$store.dispatch(
        "ComparisonListModule/addComparisonListItem",
        id
      );
    },
    handleRemoveFromComparisonList(id) {
      this.$store.dispatch("ComparisonListModule/removeComparisonListItem", id);
    },
    comparisonListExists(id) {
      return (
        this.$store.state.ComparisonListModule.comparison.find(
          (i) => i === id
        ) != null
      );
    },
  },
};
