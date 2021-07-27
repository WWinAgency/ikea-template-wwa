<template>
  <div class="produto">
    <div class="tag-container">
      <a class="show-button" href="/pagina-produto">
        <div class="inner-button"></div>
      </a>
      <a href="/pagina-produto" class="tag">
        <div class="tag-inner-container">
          <div class="tag-outter-col">
            <div class="tag-row-1">
              <div class="tag-inner-col-1">Novidade</div>
              <div class="tag-inner-col-2">
                <b-icon
                  class="icon"
                  icon="caret-right"
                  scale="1.3"
                  variant="dark"
                ></b-icon>
              </div>
            </div>
            <div class="tag-row-2">
              <a class="tag-product-link" href="/pagina-produto">Mjukplister</a>
            </div>
            <div class="tag-row-3">Colcha</div>
            <div class="tag-row-4">
              <div class="tag-inner-col-3">39</div>
              <div class="tag-inner-col-4">€/ud</div>
            </div>
          </div>
        </div>
      </a>
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

    & .tag {
      margin-top: 1rem;
      padding: 1rem;
      background-color: white;
      border: 1px solid rgba(0, 0, 0, 0.4);
      text-decoration: none;
      opacity: 0;

      & .tag-inner-container {
        & .tag-outter-col {
          display: flex;
          flex-direction: column;

          & .tag-row-1 {
            display: inline-block;

            & .tag-inner-col-1 {
              float: left;
              margin-right: 2rem;
              color: #ca5008;
              font-weight: 700;
              font-size: 0.875rem;
              line-height: 1.42857;
              margin-bottom: 0.25rem;
            }
            & .tag-inner-col-2 {
              float: right;
            }
          }

          & .tag-row-2 {
            & .tag-product-link {
              color: black;
              font-size: 0.875rem;
              margin-bottom: 0;
              line-height: 1.42857;
              font-weight: 700;
              text-transform: uppercase;
              text-decoration: none;

              &:hover {
                text-decoration: underline;
              }
            }
          }
          & .tag-row-3 {
            color: black;
            font-size: 0.875rem;
            line-height: 1.42857;
            margin-bottom: 1rem;
          }
          & .tag-row-4 {
            display: flex;
            flex-direction: row;
            align-items: center;
            & .tag-inner-col-3 {
              flex-direction: column;
              color: black;
              font-weight: 700;
              font-size: 0.875rem;
              line-height: 1.42857;
            }
            & .tag-inner-col-4 {
              color: black;
              font-size: 0.625rem;
              margin-left: 0.3rem;
              flex-direction: column;
            }
          }
        }
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
