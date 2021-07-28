<template>
  <div class="carouselProduto">
    <div class="container-produto">
      <img :src="productImageSrc" />
      <div class="botao-produto">
        <a class="button-produto" href="/pagina-produto">{{ textoBotao }}</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    textoBotao: String,
    productImageSrc: String,
  },
};
</script>

<style lang="scss">
.carouselProduto {
  width: 100%;
  height: 100%;

  & .container-produto {
    width: 100%;
    height: 100%;
    position: relative;

    & img {
      width: 100%;
      height: 100%;
    }

    & .botao-produto {
      position: absolute;
      bottom: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      margin-bottom: 3rem;

      & .button-produto {
        padding: 0.7rem 1rem 0.7rem 1rem;
        min-width: 6rem !important;
        border-radius: 64px;
        border: none;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1.33333;
        text-decoration: none;
        color: black;
        text-align: center;
        background-color: #f5f5f5;
        border: 1px solid #e0e0e0;

        &:hover {
          background-color: #e0e0e0;
          border: 1px solid #e0e0e0;
        }
      }
    }
  }
}
</style>
