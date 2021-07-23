<template>
  <div class="produto">
    <div class="tag-container">
      <a class="show-button" href="/produto">
        <div class="inner-button"></div>
      </a>
      <div class="tag" aria-hidden="true">
        <div class="tag-col">
          <div class="tag-row-top">
            <div class="col-row-1">Nome Produto</div>
            <div class="col-row-2">Seta</div>
          </div>
          <div class="tag-row">Tipo Produto</div>
          <div class="tag-row">Preço</div>
        </div>
      </div>
    </div>
    <img src="@/assets/images/vase.jpg" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.produto {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 !important;

  & .tag-container {
    position: absolute;
    top: 60%;
    left: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .tag {
      opacity: 0;
      border: 1px solid black;
      background-color: white;
      margin-top: 1rem;

      & .tag-col {
        padding: 0.5rem !important;

        & .tag-row-top {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;

          & .col-row-1 {
            margin-right: 1.5rem;
          }
          & .col-row-2 {
          }
        }
      }
    }

    & .show-button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: auto;
      width: 2rem;
      height: 2rem;
      border: 1px solid white;
      background: rgba(black, 0.5);
      border-radius: 64px;

      &:hover {
        background: rgba(black, 0.7);

        & + .tag {
          opacity: 1;
        }
      }

      & .inner-button {
        width: 0.5rem;
        height: 0.5rem;
        background-color: white;
        border-radius: 64px;
      }
    }
  }

  & img {
    padding: 0 !important;
    margin: 0 !important;
    height: 100%;
    width: 100%;
  }
}
</style>
