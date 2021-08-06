<template>
  <div class="advert">
    <div class="advert-column">
      <div class="advert-row">
        <h1>{{ advert[0].titulo }}</h1>
        <h2>
          {{ advert[0].body }} {{ advert[0].diaInicioPromocao }}
          {{ advert[0].mesInicioPromocao }} a {{ advert[0].diaFimPromocao }} de
          {{ advert[0].mesFimPromocao }}
        </h2>
      </div>

      <div class="advert-row">
        <img :src="advert[0].imagem" />
      </div>
      <div class="advert-row">
        <h3>
          <a href="/ikea-family">Promoção IKEA Family</a>
          <strong
            ><a class="product" href="/product-advert">
              {{ advert[0].nome }}
            </a></strong
          >
          {{ advert[0].tipo }}
          <strong>{{ advert[0].precoAtual }}€ /ud</strong> Preço válido até
          {{ advert[0].mesFimPromocao }} {{ advert[0].diaFimPromocao }} Preço
          Habitual
          <strong>{{ advert[0].precoNormal }}€ /ud</strong>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    advert: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.advert {
  width: 100%;
  margin: 0 !important;

  @media (max-width: 768) {
    width: 100%;
    margin: 3rem auto;
  }
  @media (max-width: 380px) {
    width: 100%;
    margin: 3rem auto;
  }

  & .advert-column {
    width: 100%;
    & .advert-row {
      display: flex;
      flex-direction: column;
      margin-bottom: 2rem;
      & h1 {
        font-size: 1.5625rem;
        line-height: 1.36rem;
        font-weight: bold;
        text-align: left;
      }

      & h2 {
        font-size: 0.875rem !important;
        line-height: 1.36rem;
        margin-top: 0.5rem !important;
      }

      & h3 {
        font-size: 0.875rem;
        line-height: 1.36rem;
        text-align: left;

        & a {
          text-decoration: none;
        }

        & .product {
          color: black;

          &:hover {
            text-decoration: underline;
          }
        }
      }

      & img {
        margin: 2rem auto;
        width: 100%;
        height: 880px;

        @media (max-width: 1800px) {
          height: 100%;
        }
      }
    }
  }
}
</style>
