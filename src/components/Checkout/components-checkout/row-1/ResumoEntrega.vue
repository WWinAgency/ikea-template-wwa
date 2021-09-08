<template>
  <div class="resumoEntrega">
    <div class="row-resumo-1">
      <div class="row-1-col-1">Informação sobre a entrega</div>
      <div class="row-1-col-2">
        <a @click="editarCodigoPostal" class="editar">Editar</a>
      </div>
    </div>
    <div class="row-resumo-2">
      <div class="row-2-row-1">Entregue via</div>
      <div class="row-2-row-2">Entrega por transportadora</div>
    </div>
    <div class="row-resumo-3">
      <div class="row-3-row-1">Entrega para</div>
      <div class="row-3-row-2">-</div>
    </div>
    <div class="row-resumo-4">
      <div class="row-4-row-1">Data de entrega</div>
      <div class="row-4-row-2">15.9.2021 17:00 - 21:00</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    editarCodigoPostal: { type: Function },
  },
};
</script>

<style lang="scss">
.resumoEntrega {
  width: 100%;
  & .row-resumo-1 {
    display: flex;
    flex-direction: row !important;
    margin-bottom: 1.25rem !important;
    align-items: center;

    & .row-1-col-1 {
      width: 80% !important;
      font-weight: 700;
      font-size: 1rem;
      line-height: 32px;
      margin: 0 !important;
    }
    & .row-1-col-2 {
      width: 20% !important;
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

  & .row-resumo-2 {
    margin-bottom: 1.25rem !important;
    display: flex;
    flex-direction: column !important;

    & .row-2-row-1 {
      width: 100% !important;
      font-size: 0.875rem;
      line-height: 1.57143;
      font-weight: 700;
    }
    & .row-2-row-2 {
      width: 100% !important;
      font-size: 0.875rem;
      line-height: 1.57143;
    }
  }
  & .row-resumo-3 {
    margin-bottom: 1.25rem !important;
    display: flex;
    flex-direction: column;
    & .row-3-row-1 {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.57143;
      font-weight: 700;
    }
    & .row-3-row-2 {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.57143;
    }
  }
  & .row-resumo-4 {
    display: flex;
    flex-direction: column;

    & .row-4-row-1 {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.57143;
      font-weight: 700;
    }
    & .row-4-row-2 {
      width: 100%;
      font-size: 0.875rem;
      line-height: 1.57143;
    }
  }
}
</style>
