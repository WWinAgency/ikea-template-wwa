const state = () => ({
  wishlist: [],
});

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("wishlist")) {
      state.wishlist = JSON.parse(localStorage.getItem("wishlist"));
    }
  },
  updateWishlist(state, wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    state.wishlist = wishlist;
  },
};
const actions = {
  setWishlistItems({ commit }, products) {
    commit("updateWishlist", { products: products });
  },
  addWishlistItem({ commit, state }, product) {
    let products = state.wishlist.products ?? [];

    /*const index = products.findIndex(function(_product) {
      if (product.variant_id === null) return product.id === _product.id;
      return product.variant_id === _product.variant_id;
    });*/
    products.push(product);

    commit("updateWishlist", { products: products });
  },
  removeWishlistItem({ commit, state }, index) {
    const products = state.wishlist.products ?? [];
    const wishlist = {
      products: products.filter((_product, _index) => _index !== index),
    };
    commit("updateWishlist", wishlist);
  },
  clearWishlist({ commit }) {
    commit("updateWishlist", { products: [] });
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
