<template>
  <div class="infoImpComponent">
    <div class="infoImpComponent-col">
      <div class="image-row"><img src="@/assets/images/vase.jpg" /></div>
      <div class="body-row">
        <div class="text-row">
          <h1>{{ title }}</h1>
          <h2>{{ body }}</h2>
        </div>
        <div class="button-row">
          <b-button type="button" :href="infoUrl"
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
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
    imgSrc: String,
    infoUrl: String,
  },
};
</script>

<style lang="scss">
.infoImpComponent {
  width: 100%;

  & .infoImpComponent-col {
    display: flex;
    flex-direction: column;
    height: 50rem;

    @media (max-width: 1500px) {
      height: 50rem;
    }
    @media (max-width: 800px) {
      height: 50rem;
    }
    @media (max-width: 400px) {
      height: 35rem;
    }
    & .image-row {
      height: 60%;

      @media (max-width: 800px) {
        height: 30rem !important;
      }

      & img {
        width: 100% !important;
        height: 100% !important;
        border: none;
      }
    }

    & .body-row {
      position: relative;
      height: 40%;
      width: 100%;
      background-color: #f5f5f5;
      padding: 2rem;
      padding-bottom: 4rem;

      @media (max-width: 1500px) {
        height: 30rem !important;
      }
      @media (max-width: 800px) {
        height: 20rem !important;
      }

      & .text-row {
        & h1 {
          font-weight: bold;
          font-size: 1.125rem;
        }
        & h2 {
          font-size: 0.85rem;
        }
      }

      & .button-row {
        position: absolute;
        bottom: 0;
        padding: 2rem 0 2rem 0;
        & .btn {
          height: 3rem;
          width: 3rem;
          border-radius: 64px;
          border: 1px solid black;
          background-color: black;

          & .inner-button {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: inherit;

            & .bi-arrow-right {
              color: white !important;
            }
          }

          &:hover {
            border: 1px solid #303030;
            background-color: #303030;
          }
        }
      }
    }
  }
}
</style>
