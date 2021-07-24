<template>
  <div class="infoEntregas">
    <div class="infoContainer">
      <div class="info-a">
        <div class="inner-row">
          <b-icon icon="shop" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row"><h1>Click and collect</h1></div>
        <div class="inner-row">
          <h2>Numa loja IKEA, ponto de recolha ou ponto CTT</h2>
        </div>
        <div class="inner-row"><a href="#">Saiba mais</a></div>
      </div>

      <div class="info-b">
        <div class="inner-row">
          <b-icon icon="truck" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row"><h1>Entregas</h1></div>
        <div class="inner-row">
          <h2>Compre online e receba em casa a partir de 7€</h2>
        </div>
        <div class="inner-row"><a href="#">Saiba mais</a></div>
      </div>

      <div class="info-c">
        <div class="inner-row">
          <b-icon icon="truck" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row"><h1>Siga a sua encomenda</h1></div>
        <div class="inner-row">
          <h2>Está a pergunta-se onde estará a sua encomenda?</h2>
        </div>
        <div class="inner-row"><a href="#">Acompanhe o estado</a></div>
      </div>

      <div class="info-d">
        <div class="inner-row">
          <b-icon icon="chat-left-text" scale="0.9" variant="dark"></b-icon>
        </div>
        <div class="inner-row"><h1>Tem dúvidas?</h1></div>
        <div class="inner-row">
          <h2>Encontre aqui respostas às suas perguntas mais frequentes</h2>
        </div>
        <div class="inner-row"><a href="#">Saiba mais</a></div>
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
  margin: 0 !important;

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
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: #f5f5f5;
        grid-row: 1 / 2;
        grid-column: 1 / 2;
        margin-right: 0.125rem !important;
        padding: 2rem;

        @media (min-width: 768px) {
          width: 100%;
          margin: 0 0.25rem 0.25rem 0 !important;
        }

        @media (min-width: 380px) {
          width: 100%;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
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
        margin-left: 0.125rem !important;
        margin-right: 0.125rem !important;
        padding: 2rem;
        @media (min-width: 768px) {
          width: 100%;
          margin: 0 0rem 0.25rem 0.25rem !important;
        }
        @media (min-width: 380px) {
          width: 100%;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
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
        margin-left: 0.125rem;
        margin-right: 0.125rem;
        padding: 2rem;

        @media (min-width: 768px) {
          width: 100%;
          margin: 0 0.25rem 0.25rem 0 !important;
        }
        @media (min-width: 380px) {
          width: 100%;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
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
        margin-left: 0.125rem;
        padding: 2rem;

        @media (min-width: 768px) {
          width: 100%;
          margin: 0 0 0.25rem 0.25rem !important;
        }
        @media (min-width: 380px) {
          width: 100%;
          margin: 0 !important;
        }

        & .inner-row {
          & h1 {
            font-size: 1rem;
            font-weight: bold;
          }
          & h2 {
            font-size: 0.875rem;
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
