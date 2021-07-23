<template>
  <div class="grid-elements">
    <b-container class="products-row">
      <!-- Stack the columns on mobile by making one full-width and the other half-width -->
      <b-row class="outter-grid-row">
        <b-col class="grid-xl" cols="3" md="6">
          <b-row class="row-1">
            <div class="tag">1</div>
            <img src="@/assets/images/vase.jpg" />
          </b-row>
        </b-col>
        <b-col class="grid-md-1" cols="3" md="3">
          <b-row class="row-1">
            <div class="tag">1</div>
            <img src="@/assets/images/vase.jpg" />
          </b-row>
          <b-row class="row-2">
            <div class="tag">2</div>
            <img src="@/assets/images/vase.jpg" />
          </b-row>
        </b-col>
        <b-col class="grid-md-2" cols="3" md="3">
          <b-row class="row-1">
            <div class="tag">2</div>
            <img src="@/assets/images/vase.jpg" />
          </b-row>
          <b-row class="row-2">
            <div class="tag">2</div>
            <img src="@/assets/images/vase.jpg" />
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {},
};
</script>

<style lang="scss">
.grid-elements {
  min-height: 40rem;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: auto;
  & .products-row {
    padding: 0 !important;
    margin: 0 !important;
    width: 100%;
    border: 2px solid aqua;

    & .outter-grid-row {
      height: 100%;
      width: 100%;
      display: inline-flex;
      flex-direction: row;
      border: 1px solid orange;

      @media (max-width: 600px) {
        flex-direction: column;
      }

      & .grid-xl {
        padding: 0 !important;
        margin: 0 !important;
        width: 50%;
        display: flex;
        flex-direction: column;
        @media (max-width: 600px) {
          width: 100%;
          height: 33%;
          margin-bottom: 0.3rem;
        }

        & .row-1 {
          display: flex;
          margin: none;
          padding: none;
          border: 1px solid black;
          background-color: red;
          align-self: stretch;

          & img {
            display: flex;
            height: 100% !important;
          }

          & .tag {
            float: left;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: #92ad40;
            padding: 5px;
            color: #ffffff;
            font-weight: bold;
          }
        }
      }
      & .grid-md-1 {
        padding: 0;
        margin: auto;
        width: 25%;
        display: flex;
        flex-direction: column;

        @media (max-width: 600px) {
          width: 100%;
          height: 33%;
          margin-bottom: 0.3rem;
        }

        & .row-1 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: none;
          padding: none;
          border: 1px solid black;
          height: 100%;
          background-color: blue;

          & img {
            width: 100%;
            height: 100%;
          }

          & .tag {
            float: left;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: #92ad40;
            padding: 5px;
            color: #ffffff;
            font-weight: bold;
          }
        }
        & .row-2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: none;
          padding: none;
          border: 1px solid black;
          height: 100%;
          background-color: blue;

          & img {
            width: 100%;
            height: 100%;
          }

          & .tag {
            float: left;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: #92ad40;
            padding: 5px;
            color: #ffffff;
            font-weight: bold;
          }
        }
      }
      & .grid-md-2 {
        padding: 0;
        margin: auto;
        width: 25%;
        display: flex;
        flex-direction: column;

        @media (max-width: 600px) {
          width: 100%;
          height: 33%;
          margin-bottom: 0.3rem;
        }

        & .row-1 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: none;
          padding: none;
          border: 1px solid black;
          height: 100%;
          background-color: green;

          & img {
            width: 100%;
            height: 100%;
          }

          & .tag {
            float: left;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: #92ad40;
            padding: 5px;
            color: #ffffff;
            font-weight: bold;
          }
        }
        & .row-2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
          margin: none;
          padding: none;
          border: 1px solid black;
          height: 100%;
          background-color: green;

          & img {
            width: 100%;
            height: 100%;
          }

          & .tag {
            float: left;
            position: relative;
            left: 0px;
            top: 0px;
            z-index: 1000;
            background-color: #92ad40;
            padding: 5px;
            color: #ffffff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
