<template>
  <div class="carousel-produto">
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls="false"
      indicators="false"
      background="#ababab"
      img-width="480px"
      img-height="480px"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide img-src="https://picsum.photos/2000/2000?random=5" />
      <b-carousel-slide img-src="https://picsum.photos/2000/2000?random=6" />
      <b-carousel-slide img-src="https://picsum.photos/2000/2000?random=7" />
      <b-carousel-slide img-src="https://picsum.photos/2000/2000?random=8" />
    </b-carousel>
  </div>
</template>

<script>
export default {};
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
