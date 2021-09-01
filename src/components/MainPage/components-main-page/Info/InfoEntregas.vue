<template>
  <div class="infoEntregas">
    <div class="infoContainer">
      <div class="info-a">
        <div class="inner-row">
          <b-icon icon="shop" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row">
          <h1>{{ infoEntregas[0].title }}</h1>
        </div>
        <div class="inner-row">
          <h2>{{ infoEntregas[0].text }}</h2>
        </div>
        <div class="inner-row">
          <a :href="'/' + infoEntregas[0].link">{{
            infoEntregas[0].linkTitle
          }}</a>
        </div>
      </div>

      <div class="info-b">
        <div class="inner-row">
          <b-icon icon="truck" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row">
          <h1>{{ infoEntregas[1].title }}</h1>
        </div>
        <div class="inner-row">
          <h2>{{ infoEntregas[1].text }}</h2>
        </div>
        <div class="inner-row">
          <a :href="'/' + infoEntregas[1].link">{{
            infoEntregas[1].linkTitle
          }}</a>
        </div>
      </div>

      <div class="info-c">
        <div class="inner-row">
          <b-icon icon="truck" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row">
          <h1>{{ infoEntregas[2].title }}</h1>
        </div>
        <div class="inner-row">
          <h2>{{ infoEntregas[2].text }}</h2>
        </div>
        <div class="inner-row">
          <a :href="'/' + infoEntregas[2].link">{{
            infoEntregas[2].linkTitle
          }}</a>
        </div>
      </div>

      <div class="info-d">
        <div class="inner-row">
          <b-icon icon="chat-left-text" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row">
          <h1>{{ infoEntregas[3].title }}</h1>
        </div>
        <div class="inner-row">
          <h2>{{ infoEntregas[3].text }}</h2>
        </div>
        <div class="inner-row">
          <a :href="'/' + infoEntregas[3].link">{{
            infoEntregas[3].linkTitle
          }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["infoEntregas"],
};
</script>

<style lang="scss">
.infoEntregas {
  width: 100%;

  & .infoContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;

    @media (max-width: 900px) {
      margin: 4rem 0 4rem 0 !important;
      display: inline-grid;
      justify-content: center;
      grid-template-columns: repeat(2 200px);
      grid-template-rows: repeat(2, 200px);
      grid-auto-rows: 365px;
      grid-auto-columns: 365px;
      grid-gap: 5px;
    }
    @media (max-width: 786px) {
      display: flex;
      flex-direction: column !important;
    }

    & .info {
      width: 100%;
      padding: 0 !important;

      &-a {
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f5f5f5;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        width: 25%;
        margin-right: 0.125rem !important;
        padding: 2rem;

        @media (max-width: 900px) {
          width: 100%;
          margin: 0 0.125rem 0 0;
        }

        @media (max-width: 400px) {
          width: 100% !important;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            line-height: 1.36rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
            line-height: 1.36rem;
            line-height: 1.571;
          }

          & a {
            font-size: 0.875rem;
            color: #484848;

            &:hover {
              color: black;
            }
          }
        }
      }
      &-b {
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f5f5f5;
        grid-row: 1 / 2;
        grid-column: 2 / 2;
        width: 25%;
        margin-left: 0.125rem !important;
        margin-right: 0.125rem !important;
        padding: 2rem;

        @media (max-width: 900px) {
          width: 100%;
          margin: 0 0 0 0.125rem;
        }

        @media (max-width: 400px) {
          width: 100% !important;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            line-height: 1.36rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
            line-height: 1.36rem;
            line-height: 1.571;
          }

          & a {
            font-size: 0.875rem;
            color: #484848;

            &:hover {
              color: black;
            }
          }
        }
      }
      &-c {
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f5f5f5;
        grid-row: 2 / 2;
        grid-column: 1 / 2;
        width: 25%;
        margin-left: 0.125rem !important;
        margin-right: 0.125rem !important;
        padding: 2rem;

        @media (max-width: 900px) {
          width: 100%;
          margin: 0 0.125rem 0 0;
        }

        @media (max-width: 400px) {
          width: 100% !important;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            line-height: 1.36rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
            line-height: 1.36rem;
            line-height: 1.571;
          }

          & a {
            font-size: 0.875rem;
            color: #484848;

            &:hover {
              color: black;
            }
          }
        }
      }
      &-d {
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f5f5f5;
        grid-row: 2 / 2;
        grid-column: 2 / 2;
        width: 25%;
        margin-left: 0.125rem !important;
        padding: 2rem;

        @media (max-width: 900px) {
          width: 100%;
          margin: 0 0 0 0.125rem;
        }

        @media (max-width: 400px) {
          width: 100% !important;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            line-height: 1.36rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
            line-height: 1.36rem;
            line-height: 1.571;
          }

          & a {
            font-size: 0.875rem;
            color: #484848;

            &:hover {
              color: black;
            }
          }
        }
      }
    }
  }
}
</style>
