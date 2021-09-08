<template>
  <div class="resumoInformacoes">
    <div class="row-1-resumo-info">
      <div class="col-1">
        <div class="titulo text-dark">As suas informações</div>
      </div>
      <div class="col-2">
        <a class="editar" @click="activateEntregaEspecifica">Editar</a>
      </div>
    </div>

    <div class="container">
      <div class="row-2-resumo-info">
        <div class="col-1">
          <b-icon
            class="file-earmark-text"
            icon="file-earmark-text"
            variant="dark"
            scale="1.2"
          ></b-icon>
        </div>
        <div class="col-2">
          <div class="row-1">NIF</div>
          <div class="row-2">270125817</div>
        </div>
      </div>
      <div class="row-3-resumo-info">{{ clientName }}Ricardo Silva</div>
      <div class="row-4-resumo-info">
        {{ clientEmail }}ricardomrbs1998@gmail.com
      </div>
      <div class="row-5-resumo-info">
        +{{ countryCode }}351 {{ clientPhone }}964270700
      </div>
      <div class="row-6-resumo-info">{{ clientAdress }}Rua Neves de Sousa</div>
      <div class="row-7-resumo-info">
        {{ clientZipCode }}1000-001{{ clientCity }}Oeiras
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: { activateEntregaEspecifica: { type: Function } },
};
</script>

<style lang="scss">
.resumoInformacoes {
  width: 100%;
  & .row-1-resumo-info {
    display: flex;
    justify-content: row;
    width: 100%;
    margin-bottom: 2rem;
    & .col-1 {
      width: 50% !important;
    }
    & .col-2 {
      width: 50% !important;
      text-align: right;

      & .editar {
        color: black;
        text-decoration: none;
        font-size: 0.875rem;
        line-height: 1.57143;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  & .container {
    padding: 0;
    margin: 0;
    max-width: 100%;
    & .row-2-resumo-info {
      display: flex !important;
      flex-direction: row !important;
      width: 100%;
      justify-content: center;
      align-items: center;

      & .col-1 {
        width: 5% !important;
        @media (max-width: 1000px) {
          width: 10% !important;
        }
      }
      & .col-2 {
        width: 95% !important;

        @media (max-width: 1000px) {
          width: 90% !important;
        }
        & .row-1 {
          width: 100%;
          margin: 0;
        }

        & .row-2 {
          width: 100%;
        }
      }
    }
    & .row-3-resumo-info {
      width: 100%;
      align-items: flex-start;
      justify-content: flex-start;
      margin-top: 1rem !important;
    }
    & .row-4-resumo-info {
      width: 100%;
      margin-top: 0.2rem !important;
    }
    & .row-5-resumo-info {
      width: 100%;
      margin-top: 0.2rem !important;
    }
    & .row-6-resumo-info {
      width: 100%;
      margin-top: 0.2rem !important;
    }
    & .row-7-resumo-info {
      width: 100%;
      margin-top: 0.2rem !important;
    }
  }
}
</style>
