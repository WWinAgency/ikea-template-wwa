<template>
  <div class="advert">
    <h1>Quem é da casa merece um desconto</h1>
    <h2>
      É por isso que todos os meses há descontos para os membros IKEA Family.
      Descubra artigos a preços ainda mais acessíveis para toda a casa, só de 1
      a 31 de julho
    </h2>
    <div class="image-advert">
      <img :src="imageLounge" />
    </div>
    <div class="description">
      <h3>
        <a href="/ikea-family">Promoção IKEA Family</a>
        <strong
          ><a class="product" href="/product-advert"> BONDHOLMEN </a></strong
        >
        Mesa de centro, exterior <strong>69€ /ud</strong> Preço válido até Julho
        31 Preço Habitual
        <strong>80€ /ud</strong>
      </h3>
    </div>
  </div>
</template>

<script>
import imageLounge from "@/assets/images/outside-lounge.jpg";

export default {
  data: function() {
    return {
      imageLounge: imageLounge,
    };
  },
};
</script>

<style lang="scss">
.advert {
  width: 100%;
  margin: 4rem auto;

  @media (max-width: 768) {
    width: 100%;
    margin: 3rem auto;
  }
  @media (max-width: 380px) {
    width: 100%;
    margin: 3rem auto;
  }

  & h1 {
    font-size: 1.5625rem;
    font-weight: bold;
    text-align: left;
  }

  & h2 {
    font-size: 0.875rem;
    margin-top: 2rem;
  }

  & h3 {
    font-size: 0.875rem;
    margin: -1.5rem auto;

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

  & .image-advert img {
    margin: 2rem auto;
    width: 100%;
  }
}
</style>
