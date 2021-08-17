<template>
  <div class="produto">
    <div class="row">
      <div class="col-1">
        <button class="remove-button">
          <b-icon class="remove" icon="x" scale="2" variant="dark"></b-icon>
        </button>
      </div>
      <div class="col-2">
        <button class="favourite-button">
          <b-icon
            class="heart"
            icon="heart"
            scale="1.3"
            variant="dark"
          ></b-icon>
        </button>
      </div>
    </div>
    <div class="product-body">
      <div class="product-image">
        <img :src="imageSrc" />
      </div>
      <div class="product-description">
        <a class="nome" :href="'pagina-de-produto/' + link">{{ name }}</a>
        <p class="tipo">{{ type }}</p>
        <p class="utilidade">{{ utility }}</p>
        <div class="precoAtual">
          <h1>{{ currentPrice }}</h1>
          <h2>€ /ud</h2>
        </div>
        <div class="adicionar-ao-cesto">
          <button class="add-basket">Adicionar ao cesto</button>
        </div>
      </div>
    </div>
    <hr class="costum-hr" />
    <div class="ver-imagens">
      <div class="col-1"><a href="">Veja todas as imagens</a></div>
      <div class="col-2">
        <b-icon
          class="arrow-right"
          icon="arrow-right"
          scale="1.5"
          variant="dark"
        ></b-icon>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageSrc: String,
    link: String,
    name: String,
    type: String,
    utility: String,
    currentPrice: Number,
  },
};
</script>

<style lang="scss">
.produto {
  height: auto;
  width: 100%;

  & .row {
    margin: 0 0 0.2rem 0;
    display: inline-block;
    width: 100%;
    align-items: center;
    & .col-1 {
      float: left;
      padding-left: 0;
      width: auto;
      & .remove-button {
        background-color: white;
        border: none;
        padding: 0 0.5rem;
        height: 2rem;
        width: 2rem;
        border-radius: 64px;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
          background-color: #e8e8e8;
        }
      }
    }
    & .col-2 {
      float: right;
      padding-right: 0;
      width: auto;
      & .favourite-button {
        background-color: white;
        border: none;

        &:hover {
        }

        & .heart {
          color: #989898 !important;

          &:hover {
            color: black !important;
          }
        }
      }
    }
  }

  & .product-body {
    width: 100%;
    & .product-image {
      & img {
        width: 100%;
      }
    }

    & .product-description {
      width: 100%;
      padding: 1rem 0 1rem 0;
      & .nome {
        color: black;
        font-size: 1.1rem;
        line-height: 1.42857;
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 700;

        &:hover {
          text-decoration: underline;
        }
      }

      & .tipo {
        font-size: 1rem;
        line-height: 1.42857;
        margin-bottom: 0.1rem;
      }

      & .utilidade {
        font-size: 1rem;
        line-height: 1.42857;
        margin-bottom: 0.5rem;
      }

      & .precoAtual {
        display: flex;
        flex-direction: row;

        & h1 {
          font-size: 1.5rem;
          margin-right: 0.25rem;
          font-weight: 700;
        }

        & h2 {
          font-size: 0.6875rem;
          margin-right: 0.2rem !important;
          font-weight: 700;
        }
      }

      & .adicionar-ao-cesto {
        & .add-basket {
          width: 100%;
          background-color: #0058a3;
          border: 1px solid #0058a3;
          color: white;
          font-weight: 700;
          height: 2.5rem;
          padding: 0 1.5rem;
          border-radius: 64px;
          font-size: 1rem;
          line-height: 1.33333;
          text-align: center;
          text-transform: none;
        }
      }
    }
  }
}
</style>
