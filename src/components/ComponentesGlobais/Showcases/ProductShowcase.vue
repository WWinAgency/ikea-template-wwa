<template>
  <div class="product-showcase">
    <div class="product-grid-row-1">
      <div class="product-grid-col-1">
        <Product
          :name="produto1.nome"
          :type="produto1.tipo"
          :imageSrc="produto1.imagem"
          :normalPrice="produto1.precoNormal"
          :currentPrice="produto1.precoAtual"
          :rating="produto1.rating"
          :avaliacoes="produto1.avaliacoes"
        />
      </div>
      <div class="product-grid-col-2">
        <Product
          :name="produto2.nome"
          :type="produto2.tipo"
          :imageSrc="produto2.imagem"
          :normalPrice="produto2.precoNormal"
          :currentPrice="produto2.precoAtual"
          :rating="produto2.rating"
          :avaliacoes="produto2.avaliacoes"
        />
      </div>
      <div class="product-grid-col-3">
        <Product
          :name="produto3.nome"
          :type="produto3.tipo"
          :imageSrc="produto3.imagem"
          :normalPrice="produto3.precoNormal"
          :currentPrice="produto3.precoAtual"
          :rating="produto3.rating"
          :avaliacoes="produto3.avaliacoes"
        />
      </div>
      <div class="product-grid-col-4">
        <Product
          :name="produto4.nome"
          :type="produto4.tipo"
          :imageSrc="produto4.imagem"
          :normalPrice="produto4.precoNormal"
          :currentPrice="produto4.precoAtual"
          :rating="produto4.rating"
          :avaliacoes="produto4.avaliacoes"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Product from "./Product.vue";

export default {
  components: { Product },
  data() {
    return {
      produto1: {
        nome: "FEJKA",
        tipo: "Planta Artificial em vaso, 9cm",
        imagem: "https://picsum.photos/300?random=1",
        precoNormal: "4,50",
        precoAtual: "4",
        rating: "4.5",
        avaliacoes: "8",
      },
      produto2: {
        nome: "SKOGSKLÖVER",
        tipo: "Estore de correr 120x195 cm",
        imagem: "https://picsum.photos/300?random=2",
        precoNormal: "35",
        precoAtual: "29",
        rating: "4",
        avaliacoes: "148",
      },
      produto3: {
        nome: "HUSARÖ",
        tipo: "Poltrona, exterior",
        imagem: "https://picsum.photos/300?random=3",
        precoNormal: "149",
        precoAtual: "119",
        rating: "4.5",
        avaliacoes: "10",
      },
      produto4: {
        nome: "HAUGA",
        tipo: "Roupeiro aberto c/3 gavetas 70 x 199 cm",
        imagem: "https://picsum.photos/300?random=4",
        precoNormal: "135",
        precoAtual: "112",
        rating: "3",
        avaliacoes: "24",
      },
    };
  },
};
</script>

<style lang="scss">
.product-showcase {
  width: 100% !important;
  height: 100% !important;
  display: flex;
  flex-direction: column;

  & .product-grid-row-1 {
    display: flex;
    flex-direction: row;
    width: 100% !important;

    @media (max-width: 1500px) {
      display: grid;
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: repeat(2, 50%);
      height: 100%;
      width: 100%;
    }
    @media (max-width: 700px) {
      height: 150rem;
      display: grid;
      grid-template-columns: repeat(1, 100%);
      grid-template-rows: repeat(4, 25%);
    }

    & .product-grid-col-1 {
      width: 25% !important;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
      }
      @media (max-width: 700px) {
        grid-row: 1 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-2 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }

      @media (max-width: 800px) {
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }

      @media (max-width: 700px) {
        grid-row: 2 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-3 {
      width: 25% !important;
      padding-left: 0.5rem;
      padding-right: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 100% !important;
        padding-right: 0.5rem;
        padding-left: 0;
      }
      @media (max-width: 700px) {
        grid-row: 3 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
    & .product-grid-col-4 {
      width: 25% !important;
      padding-left: 0.5rem;

      @media (max-width: 1500px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
      }
      @media (max-width: 800px) {
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0;
      }
      @media (max-width: 700px) {
        grid-row: 4 / 4;
        grid-column: 1 / 1;
        width: 100% !important;
        height: 25% !important;
        padding: 0 !important;
        margin: 0 !important;
      }
    }
  }

  & .product-grid-row-2 {
    margin-top: 4rem;

    @media (max-width: 800px) {
      margin-top: 2rem;
    }
    @media (max-width: 400px) {
      margin-top: 0;
    }
  }
}
</style>
