<template>
  <div class="carousel-produto">
    <b-carousel
      id="carousel-1"
      :interval="0"
      controls: false
      indicators: true
      background="#ababab"
      img-width="480px"
      img-height="480px"
      style="text-shadow: 1px 1px 2px #333;"
    >
      <b-carousel-slide :img-src="image1" />
      <b-carousel-slide :img-src="image2" />
      <b-carousel-slide :img-src="image3" />
      <b-carousel-slide :img-src="image4" />
    </b-carousel>
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
.carousel-produto {
  display: none;

  @media (max-width: 800px) {
    display: flex;
  }

  & .carousel-control-prev {
    & .sr-only {
      display: none;
    }
  }
  & .carousel-control-next {
    & .sr-only {
      display: none;
    }
  }

  & .carousel-caption {
    display: none;
  }
}
</style>
