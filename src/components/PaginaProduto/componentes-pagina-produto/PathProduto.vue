<template>
  <div class="pathProduto">
    <div class="path-row">
      <div class="path-col">
        <div class="path-col-inner-row">
          <div class="path-col-inner-col-1">
            <a href="">Produtos</a>
          </div>
          <div class="path-col-inner-col-2">
            <b-icon
              class="icon"
              icon="caret-right"
              scale="0.9"
              variant="dark"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="path-col">
        <div class="path-col-inner-row">
          <div class="path-col-inner-col-1">
            <a href="">{{ categoriaGeralProduto }}</a>
          </div>
          <div class="path-col-inner-col-2">
            <b-icon
              class="icon"
              icon="caret-right"
              scale="0.9"
              variant="dark"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="path-col">
        <div class="path-col-inner-row">
          <div class="path-col-inner-col-1">
            <a href="">{{ subCategoriaGeralProduto }}</a>
          </div>
          <div class="path-col-inner-col-2">
            <b-icon
              class="icon"
              icon="caret-right"
              scale="0.9"
              variant="dark"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="path-col">
        <div class="path-col-inner-row">
          <div class="path-col-inner-col-1">
            <a href="">{{ tipoGeralProduto }}</a>
          </div>
          <div class="path-col-inner-col-2">
            <b-icon
              class="icon"
              icon="caret-right"
              scale="0.9"
              variant="dark"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="path-col">
        <div class="path-col-inner-row">
          <div class="path-col-inner-col-1">
            <a href="">{{ subTipoGeralProduto }}</a>
          </div>
          <div class="path-col-inner-col-2">
            <b-icon
              class="icon"
              icon="caret-right"
              scale="0.9"
              variant="dark"
            ></b-icon>
          </div>
        </div>
      </div>
      <div class="path-col">
        {{ nomeProdutoPath }} {{ tipoProdutoPath }}
        {{ utilidadeProdutoPath }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PathProduto",
  props: {
    categoriaGeralProduto: String,
    subCategoriaGeralProduto: String,
    tipoGeralProduto: String,
    subTipoGeralProduto: String,
    nomeProdutoPath: String,
    tipoProdutoPath: String,
    utilidadeProdutoPath: String,
  },
};
</script>

<style lang="scss">
.pathProduto {
  margin: 1rem 0 1rem 0;
  width: 100%;
  height: auto;
  & .path-row {
    display: flex;
    flex-direction: row !important;
    align-items: center;
    flex-wrap: wrap;

    & .path-col {
      display: flex;
      flex-direction: column;

      & .path-col-inner-row {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        & .path-col-inner-col-1 {
          display: flex;
          flex-direction: column;
          & a {
            font-size: 0.9rem;
            line-height: 1.5;
            font-weight: 400;
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
        }
        & .path-col-inner-col-2 {
          display: flex;
          flex-direction: column;
          margin: 0 0.5rem 0 0.5rem;
        }
      }
    }
  }
}
</style>
