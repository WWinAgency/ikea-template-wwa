<template>
  <div class="midAdvert">
    <b-card
      :img-src="advert[0].imagem"
      img-alt="Card image"
      img-left
      class="image-card"
    >
      <b-card-text class="text-card d-flex">
        <div class="text-col">
          <div class="text-row">
            <h1>
              <strong>{{ advert[0].titulo }}</strong>
            </h1>
          </div>
          <div class="text-row">
            <h2>
              {{ body }}
              <strong>{{ advert[0].bodyStrong }}</strong>
            </h2>
          </div>
          <li class="text-bottom">
            <h3>
              {{ advert[0].nome }}
            </h3>
            <h3>{{ advert[0].tipo }}a {{ advert[0].preco }}€/ud</h3>
          </li>
          <a
            :href="'/' + advert[0].link"
            class="button-midAdvert"
            variant="light"
            ><h4>{{ advert[0].tituloLink }}</h4></a
          >
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    advert: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.midAdvert {
  width: 100%;
  margin: 0 !important;

  & .image-card {
    & img {
      width: 70%;

      @media (max-width: 1400px) {
        width: 100%;
      }
    }
    @media (max-width: 1400px) {
      width: 100%;
      flex-direction: column !important;
      margin: auto;
    }

    & .card-body {
      background-color: #046f88;
      width: 30%;

      @media (max-width: 1400px) {
        width: 100%;
      }

      & .text-card {
        text-align: left;

        & .text-col {
          display: flex;
          flex-direction: column;
          margin: 2rem auto 2rem auto;
          list-style: none;
          padding: 1rem !important;

          @media (max-width: 380px) {
            padding: 0.5rem !important;
          }

          & .text-row {
            margin-bottom: 0.7rem;
            & h1 {
              font-size: 1.125rem;
              line-height: 1.36rem;
              color: white;
            }
            & h2 {
              font-size: 0.825rem;
              line-height: 1.36rem;
              color: white;
            }
          }

          & .text-bottom {
            margin-top: 1rem;
            margin-bottom: 1rem;
            & h3 {
              font-size: 0.875rem;
              line-height: 1.36rem;
              color: white;
              font-weight: bold;

              &:hover {
                color: black;
                text-decoration: underline;
              }
            }
          }

          & .button-midAdvert {
            height: 2.5rem;
            width: 18rem;
            padding: 0 1.5rem;
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
            border-radius: 64px;
            border: none;
            text-align: center;
            justify-content: center;
            display: flex;
            text-decoration: none;
            align-items: center;

            & h4 {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: 0.7rem;
              font-weight: bold;
              text-align: center;
              color: black;
              margin-bottom: 0;
            }

            &:hover {
              background-color: #e0e0e0;
              border: 1px solid #e0e0e0;
            }
          }
        }
      }
    }
  }
}
</style>
