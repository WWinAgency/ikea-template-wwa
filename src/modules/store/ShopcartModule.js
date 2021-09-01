import Axios from "axios";

const state = () => ({
  cart: {},
});

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("cart")) {
      state.cart = JSON.parse(localStorage.getItem("cart"));
    }
  },
  updateCart(state, cart) {
    localStorage.setItem("cart", JSON.stringify(cart));
    state.cart = cart;
    Axios.post("/api/cart/updateCart", cart);
  },
};
const actions = {
  setCartItems({ commit }, products) {
    commit("updateCart", { products: products });
  },
  addCartItem({ commit, state }, { id, qty }) {
    let products = state.cart ?? {};

    if (!products[id]) products[id] = 0;
    products[id] += qty;

    commit("updateCart", products);
  },
  updateCartItemQty({ commit, state }, { id, qty }) {
    let products = state.cart;

    products[id] = qty;

    commit("updateCart", products);
  },
  removeCartItem({ commit, state }, id) {
    let products = state.cart;

    delete products[id];

    commit("updateCart", products);
  },
  clearCart({ commit }) {
    commit("updateCart", {});
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
