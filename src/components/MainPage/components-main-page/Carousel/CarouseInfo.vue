<template>
  <div class="carouselInfo">
    <div class="text-row">
      <h1>Guias para uma vida mais sustentável</h1>
    </div>
    <div class="button-row">
      <b-button class="button-info-carousel" type="button" :href="infoUrl"
        ><span class="inner-button"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
            /></svg></span
      ></b-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.carouselInfo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: green;
  width: 200px;
  height: 250px;
  padding: 3rem;
  position: relative;

  & .text-row {
    padding: 2rem;
    top: 0;
    left: 0;
    position: absolute;
    display: flex;
    color: white;

    & h1 {
      font-size: 1rem;
      line-height: 1.5rem;
      font-weight: bold;
    }
  }

  & .button-row {
    padding: 2rem;
    position: absolute;
    bottom: 0;
    left: 0;
    & .button-info-carousel {
      border-radius: 64px;
      width: 2.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      border: none;

      & .inner-button {
        color: black;
      }
    }
  }
}
</style>
