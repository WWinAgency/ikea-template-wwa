<template>
  <div class="listaProdutos">
    <div class="col-sm-12 pt-3 pb-5 my-4">
      <div class="row">
        <div
          v-for="(product, index) in produtos"
          :key="index"
          class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
        >
          <div class="produto">
            <div class="comparisonSelection">
              <div class="col-1">
                <a
                  class="icon float-right m-0 cursor-pointer"
                  v-if="comparisonListExists(product) === false"
                  @click="
                    handleAddToComparisonList(product);
                    pushComparisonList(product);
                  "
                  ><b-icon-square></b-icon-square
                ></a>
                <a
                  class="icon heart float-right m-0 cursor-pointer"
                  v-else
                  @click="
                    handleRemoveFromComparisonList(product);
                    removeComparisonList(product);
                  "
                  ><b-icon-x-square></b-icon-x-square
                ></a>
              </div>
              <div class="col-2">Comparar</div>
            </div>
            <div class="product-body">
              <div class="product-image">
                <img :src="product.imageSrc" />
              </div>
              <div class="product-description">
                <a class="nome" :href="'pagina-de-produto/' + product.link">{{
                  product.name
                }}</a>
                <p class="tipo">{{ product.type }}</p>
                <p class="utilidade">{{ product.utility }}</p>
                <div class="precoAtual">
                  <h1>{{ product.currentPrice }}</h1>
                  <h2>€ /ud</h2>
                </div>
                <p class="precoNormal">
                  Preço Habitual: {{ product.normalPrice }} € /ud
                </p>
                <div class="row">
                  <div class="col-1">
                    <div class="rating">
                      <div class="rating-col">
                        <div class="rating-row">
                          <star-rating
                            v-bind:increment="0.5"
                            v-bind:max-rating="5"
                            inactive-color="white"
                            active-color="black"
                            v-bind:star-size="15"
                            :rating="product.rating"
                            :show-rating="false"
                            :read-only="true"
                          >
                          </star-rating>
                        </div>
                        <div class="rating-row">
                          <h4>( {{ product.ratingCount }} )</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-2">
                    <div class="basket-button">
                      <a
                        @click="handleAddToCart(product)"
                        v-if="cartExists(product) === false"
                        class="btn-basket"
                      >
                        <b-icon
                          class="basket-icon"
                          icon="bag-plus-fill"
                          scale="1.5"
                          variant="primary"
                        ></b-icon>
                      </a>
                      <a
                        @click="handleRemoveFromCart(product)"
                        v-else
                        class="btn-basket"
                      >
                        <b-icon
                          class="basket-icon"
                          icon="bag-check-fill"
                          scale="1.5"
                          variant="danger"
                        ></b-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr class="costum-hr" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-star-rating";
import shoppingCartMixin from "../../../../mixins/shoppingCartMixin";
import comparisonListMixin from "../../../../mixins/comparisonListMixin";
import produtos from "../../../../assets/data/mainPage/products";

export default {
  mixins: [shoppingCartMixin, comparisonListMixin, produtos],
  props: ["comparisonList"],
  components: { StarRating },
  data() {
    return {};
  },

  methods: {
    pushComparisonList(product) {
      this.comparisonList.push(product);
    },
    removeComparisonList(product) {
      this.comparisonList.pop(product);
    },
  },
};
</script>

<style lang="scss">
.basket-col {
  text-align: right;
  margin-right: 0.5rem;
}
</style>
