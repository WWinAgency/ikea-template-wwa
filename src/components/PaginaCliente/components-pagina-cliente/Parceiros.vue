<template>
  <div class="parceiros"></div>
</template>

<script>
export default {
  props: {
    name: String,
    imgSrc: String,
    text: String,
    endDay: Number,
    endMonth: Number,
    endYear: Number,
    link: String,
  },
};
</script>

<style lang="scss">
.parceiros {
  & .card {
    & .body {
      & .image {
        & img {
        }
      }
    }
  }
}
</style>
