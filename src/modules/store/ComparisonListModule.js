const state = () => ({
  comparison: [],
});

const mutations = {
  initialiseStore(state) {
    if (localStorage.getItem("comparison")) {
      const _comparison = JSON.parse(localStorage.getItem("comparison"));
      state.wishlist = Array.isArray(_comparison) ? _comparison : [];
    }
  },
  updateComparisonList(state, comparison) {
    localStorage.setItem("comparison", JSON.stringify(comparison));
    state.comparison = comparison;
  },
};
const actions = {
  addComparisonListItem({ commit, state }, id) {
    let products = state.comparison ?? [];

    if (!products.find((i) => i == id)) products.push(id);

    commit("updateComparisonList", products);
  },
  removeComparisonListItem({ commit, state }, id) {
    let products = state.comparison ?? [];

    products = products.filter((i) => i !== id);

    commit("updateComparisonList", products);
  },
  clearComparisonList({ commit }) {
    commit("updateComparisonList", []);
  },
};
export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
