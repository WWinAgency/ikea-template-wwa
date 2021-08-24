const state = () => ({
  wishlist: [],
});

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("wishlist")) {
      const _wishlist = JSON.parse(localStorage.getItem("wishlist"));
      state.wishlist = Array.isArray(_wishlist) ? _wishlist : [];
    }
  },
  updateWishlist(state, wishlist) {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    state.wishlist = wishlist;
  },
};
const actions = {
  addWishlistItem({ commit, state }, id) {
    let products = state.wishlist ?? [];

    if (!products.find((i) => i == id)) products.push(id);

    commit("updateWishlist", products);
  },
  removeWishlistItem({ commit, state }, id) {
    let products = state.wishlist ?? [];

    products = products.filter((i) => i !== id);

    commit("updateWishlist", products);
  },
  clearWishlist({ commit }) {
    commit("updateWishlist", []);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
