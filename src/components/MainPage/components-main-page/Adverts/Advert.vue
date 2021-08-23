<template>
  <div class="advert">
    <div class="advert-column">
      <div class="advert-row">
        <h1>{{ title }}</h1>
        <h2>
          {{ body }} {{ beginDay }} {{ beginMonth }} a {{ endDay }} de
          {{ endMonth }}
        </h2>
      </div>

      <div class="advert-row">
        <img :src="imageSrc" />
      </div>
      <div class="advert-row">
        <h3>
          <a href="/ikea-family">Promoção IKEA Family</a>
          <strong
            ><a class="product" :href="'/pagina-produto/' + link">
              {{ name }}
            </a></strong
          >
          {{ type }}
          <strong>{{ currentPrice }}€ /ud</strong> Preço válido até
          {{ endMonth }} {{ endDay }} Preço Habitual
          <strong>{{ normalPrice }}€ /ud</strong>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    currentPrice: Number,
    normalPrice: String,
    imageSrc: String,
    beginDay: Number,
    beginMonth: Number,
    endDay: Number,
    endMonth: Number,
    link: String,
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
