<template>
  <div class="infoEntregas">
    <div class="infoContainer">
      <div class="info-a">
        <div class="inner-row">Logo 1</div>
        <div class="inner-row">Click and collect</div>
        <div class="inner-row">Texto</div>
        <div class="inner-row">Link</div>
      </div>

      <div class="info-b">
        <div class="inner-row">Logo 2</div>
        <div class="inner-row">Click and collect</div>
        <div class="inner-row">Texto</div>
        <div class="inner-row">Link</div>
      </div>

      <div class="info-c">
        <div class="inner-row">Logo 3</div>
        <div class="inner-row">Click and collect</div>
        <div class="inner-row">Texto</div>
        <div class="inner-row">Link</div>
      </div>

      <div class="info-d">
        <div class="inner-row">Logo 4</div>
        <div class="inner-row">Click and collect</div>
        <div class="inner-row">Texto</div>
        <div class="inner-row">Link</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.infoEntregas {
  width: 100%;
  & .infoContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

    @media (max-width: 768px) {
      margin: 4rem 0 4rem 0 !important;
      display: inline-grid;
      justify-content: center;
      grid-template-columns: repeat(2 200px);
      grid-template-rows: repeat(2, 200px);
      grid-auto-rows: 365px;
      grid-auto-columns: 365px;
      grid-gap: 5px;
    }
    @media (max-width: 380px) {
      display: flex;
      flex-direction: column !important;
    }

    & .info {
      width: 100%;
      padding: 0 !important;
      margin: 0 !important;

      &-a {
        background-color: #f5f5f5;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        padding: 1rem;

        @media (min-width: 968px) {
          display: flex;
          flex-direction: column;
          width: 25%;
        }
      }
      &-b {
        background-color: #f5f5f5;
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        padding: 1rem;

        @media (min-width: 968px) {
          display: flex;
          flex-direction: column;
          width: 25%;
        }
      }
      &-c {
        background-color: #f5f5f5;
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        padding: 1rem;

        @media (min-width: 968px) {
          display: flex;
          flex-direction: column;
          width: 25%;
        }
      }
      &-d {
        background-color: #f5f5f5;
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        padding: 1rem;

        @media (min-width: 968px) {
          display: flex;
          flex-direction: column;
          width: 25%;
        }
      }
    }
  }
}
</style>
