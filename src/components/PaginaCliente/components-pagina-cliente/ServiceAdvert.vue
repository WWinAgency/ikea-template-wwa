<template>
  <div class="serviceAdvert">
    <div class="titulo">
      Pode decorar a sua casa sozinho. Mas não precisa
    </div>
    <a class="card-container" :href="'/' + link">
      <b-card
        :img-src="imageSrc"
        img-alt="Card image"
        img-right
        class="image-card"
      >
        <b-card-text class="text-card d-flex">
          <div class="text-col">
            <div class="text-row">
              <a :href="'/' + link">
                <h1>
                  <strong>{{ title }}</strong>
                </h1>
              </a>
            </div>
            <div class="text-row">
              <h2>
                {{ body }}
              </h2>
            </div>
          </div>
          <div class="button-row">
            <a :href="'/' + link" class="button-service-advert" variant="light">
              <b-icon
                class="arrow-right"
                icon="arrow-right-circle-fill"
                scale="3"
                variant="dark"
              ></b-icon
            ></a>
          </div>
        </b-card-text>
      </b-card>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "Serviço de Design de Interiores",
      imageSrc: "https://picsum.photos/1000/500?random=4",
      body:
        "Precisa de uma solução, mas falta-lhe a inspiração? Conte com o Serviço de Design de Interiores para desenhar, projetar ou (re)decorar qualquer espaço. Com preços especiais para membros IKEA Family.",
      link: "servico-design-interiores",
    };
  },
  props: {},
};
</script>

<style lang="scss">
.serviceAdvert {
  width: 100%;
  margin: 0 !important;

  & .titulo {
    font-size: 1.5625rem;
    line-height: 1.36;
    letter-spacing: -0.02625rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  & .card-container {
    text-decoration: none;
  }
  & .card {
    margin-top: 2.5rem;
    border-radius: 12px;
    border: none;
    box-shadow: 0 0.3125rem 1.25rem rgba(0, 0, 0, 0.15);
  }

  & .image-card {
    & img {
      width: 75%;

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
      background-color: #f5f5f5;
      width: 35%;

      @media (max-width: 1400px) {
        width: 100%;
      }

      & .text-card {
        text-align: left;
        height: 100%;
        display: flex;
        flex-direction: column;

        & .text-col {
          display: flex;
          flex-direction: column;
          list-style: none;
          padding: 1rem !important;
          height: 80%;

          @media (max-width: 380px) {
            padding: 0.5rem !important;
          }

          & .text-row {
            margin-bottom: 0.7rem;

            & a {
              text-decoration: none;

              &:hover {
                text-decoration: underline;
                text-decoration-color: white;
              }
              & h1 {
                font-size: 1.5625rem;
                line-height: 1.36;
                color: black;
              }
            }

            & h2 {
              font-size: 1rem;
              line-height: 1.36rem;
              color: #484848;
            }
          }
        }

        & .button-row {
          padding-bottom: 2rem;
          padding-left: 2rem;
          height: 20%;
          & .button-service-advert {
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
