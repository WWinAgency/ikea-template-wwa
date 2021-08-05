<template>
  <div class="gridImagensProduto">
    <div class="grid">
      <div class="product-grid-col-1">
        <div class="product-grid-row-1">
          <img :src="image1" />
        </div>
        <div class="product-grid-row-2">
          <img :src="image2" />
        </div>
      </div>
      <div class="product-grid-col-2">
        <div class="product-grid-row-3">
          <img :src="image3" />
        </div>
        <div class="product-grid-row-4">
          <img :src="image4" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image1: String,
    image2: String,
    image3: String,
    image4: String,
  },
};
</script>

<style lang="scss">
.gridImagensProduto {
  & .grid {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;

    @media (max-width: 800px) {
      display: none;
    }
    & .product-grid-col-1 {
      height: 50%;

      & .product-grid-row-1 {
        @media (max-width: 1750px) {
          width: 100%;
          height: 100%;
        }
        & img {
          width: 520px;
          height: 520px;
          margin: 0 0.5rem 0.5rem 0;

          @media (max-width: 1750px) {
            width: 100%;
            height: 100%;
            padding: 0 0.5rem 0.5rem 0;
            margin: 0;
          }
        }
      }
      & .product-grid-row-2 {
        @media (max-width: 1750px) {
          width: 100%;
          height: 100% !important;
        }
        & img {
          width: 520px;
          height: 520px;
          margin: 0.5rem 0.5rem 0.5rem 0;

          @media (max-width: 1750px) {
            width: 100%;
            height: 100%;
            padding: 0.5rem 0.5rem 0 0;
            margin: 0;
          }
        }
      }
    }

    & .product-grid-col-2 {
      height: 50%;
      & .product-grid-row-3 {
        @media (max-width: 1750px) {
          width: 100%;
          height: 100%;
        }
        & img {
          width: 520px;
          height: 520px;
          margin: 0 0 0.5rem 0.5rem;

          @media (max-width: 1750px) {
            width: 100%;
            height: 100%;
            padding: 0 0 0.5rem 0.5rem;
            margin: 0;
          }
        }
      }
      & .product-grid-row-4 {
        @media (max-width: 1750px) {
          width: 100%;
          height: 100%;
        }
        & img {
          width: 520px;
          height: 520px;
          margin: 0.5rem 0 0 0.5rem;

          @media (max-width: 1750px) {
            width: 100%;
            height: 100%;
            padding: 0.5rem 0 0 0.5rem;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
