<template>
  <div class="produto">
    <div class="product-tag">
      <div class="tag-container">
        <div class="positioning-container">
          <div
            v-show="tagsVisible"
            v-for="(product, index) in products"
            :key="index"
            class="tag-position"
            :style="[
              { top: product.topPercentage + '%' },
              { left: product.leftPercentage + '%' },
            ]"
          >
            <a @click="showCard(product)" id="button" class="show-button">
              <div class="inner-button"></div>
            </a>
            <a :id="product.id" href="/pagina-produto" class="tag">
              <div class="tag-inner-container">
                <div class="tag-outter-col">
                  <div class="tag-row-1">
                    <div class="tag-inner-col-1">Novidade</div>
                    <div class="tag-inner-col-2">
                      <b-icon
                        class="icon"
                        icon="caret-right"
                        scale="1.3"
                        variant="dark"
                      ></b-icon>
                    </div>
                  </div>
                  <div class="tag-row-2">
                    <a class="tag-product-link" href="/pagina-produto">{{
                      product.name
                    }}</a>
                  </div>
                  <div class="tag-row-3">{{ product.type }}</div>
                  <div class="tag-row-4">
                    <div class="tag-inner-col-3">
                      {{ product.currentPrice }}
                    </div>
                    <div class="tag-inner-col-4">€/ud</div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <img :src="imageSrc" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagsVisible: true,
      cardVisible: false,
      winWidth: window.innerWidth,
    };
  },
  methods: {
    showCard(product) {
      console.log("in-card");
      this.cardVisible = !this.cardVisible;
      var cardName = product.id;
      if (this.cardVisible == true) {
        document.getElementById(cardName).style.opacity = "1";
      } else {
        document.getElementById(cardName).style.opacity = "0";
      }
    },
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.produto {
  width: 100%;
  height: 100% !important;
  position: relative;
  padding: 0 !important;

  & .product-tag {
    width: auto;
    height: auto;
    & .tag-container {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      & .positioning-container {
        height: 100%;
        position: relative;
        & .tag-position {
          position: absolute;
          width: auto;
          height: auto;
          & .show-button {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: auto;
            width: 2rem;
            height: 2rem;
            border: 1px solid white;
            background: rgba(black, 0.5);
            border-radius: 64px;

            &:hover {
              background: rgba(black, 0.7);

              & + .tag {
              }
            }

            & .inner-button {
              width: 0.5rem;
              height: 0.5rem;
              background-color: white;
              border-radius: 64px;
            }
          }

          & .tag {
            text-decoration: none;
            opacity: 0;
            & .tag-inner-container {
              background-color: white;
              border: 1px solid rgba(0, 0, 0, 0.4);
              text-decoration: none;
              padding: 1rem;
              width: 10rem;
              height: auto;
              margin-top: 1rem;
              & .tag-outter-col {
                display: flex;
                flex-direction: column;

                & .tag-row-1 {
                  display: inline-block;

                  & .tag-inner-col-1 {
                    float: left;
                    margin-right: 2rem;
                    color: #ca5008;
                    font-weight: 700;
                    font-size: 0.875rem;
                    line-height: 1.42857;
                    margin-bottom: 0.25rem;
                  }
                  & .tag-inner-col-2 {
                    float: right;
                  }
                }

                & .tag-row-2 {
                  & .tag-product-link {
                    color: black;
                    font-size: 0.875rem;
                    margin-bottom: 0;
                    line-height: 1.42857;
                    font-weight: 700;
                    text-transform: uppercase;
                    text-decoration: none;

                    &:hover {
                      text-decoration: underline;
                    }
                  }
                }
                & .tag-row-3 {
                  color: black;
                  font-size: 0.875rem;
                  line-height: 1.42857;
                  margin-bottom: 1rem;
                }
                & .tag-row-4 {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  & .tag-inner-col-3 {
                    flex-direction: column;
                    color: black;
                    font-weight: 700;
                    font-size: 0.875rem;
                    line-height: 1.42857;
                  }
                  & .tag-inner-col-4 {
                    color: black;
                    font-size: 0.625rem;
                    margin-left: 0.3rem;
                    flex-direction: column;
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  & img {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    width: 100%;
  }
}
</style>
