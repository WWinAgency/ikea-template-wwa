<template>
  <div class="col-texto-informativo">
    <div class="row-texto-informativo">
      <div class="inner-row-1">
        <div class="titulo-texto-informativo">Solução de Função</div>
      </div>
      <div class="inner-row-2">
        <div class="inner-col-1">
          {{ solucaoFuncaoTitle }}
        </div>
        <div class="inner-col-2">
          {{ solucaoFuncaoText }}
        </div>
      </div>
    </div>
    <hr class="costum-hr" />
    <div class="row-texto-informativo">
      <div class="inner-row-1">
        <div class="titulo-texto-informativo">Processo de design</div>
      </div>
      <div class="inner-row-2">
        <div class="inner-col-1">
          {{ processoDesignTitle }}
        </div>
        <div class="inner-col-2">
          {{ processoDesignText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    solucaoFuncaoTitle: String,
    solucaoFuncaoText: String,
    processoDesignTitle: String,
    processoDesignText: String,
  },
};
</script>

<style lang="scss">
.col-texto-informativo {
  margin-top: 4rem;
  & .row-texto-informativo {
    display: flex;
    flex-direction: column;

    & .inner-row-1 {
      width: 100%;
      & .titulo-texto-informativo {
        display: flex;
        color: #767676;
        font-weight: 700;
        font-size: 0.75rem;
        padding-bottom: 0.75rem;
        line-height: 1.36;
        flex-wrap: wrap;
      }
    }
    & .inner-row-2 {
      display: flex;
      flex-direction: row;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
      }
      & .inner-col-1 {
        display: flex;
        flex-direction: column;
        width: 50%;
        font-size: 1.5625rem;
        color: #111;
        line-height: 1.5;
        font-weight: 700;
        padding-right: 0.5rem;

        @media (max-width: 768px) {
          width: 100%;
          flex-direction: row;
          padding-bottom: 0.75rem;
        }
      }
      & .inner-col-2 {
        display: flex;
        flex-direction: column;
        width: 50%;
        color: #484848;
        font-size: 0.875rem;
        line-height: 1.57;

        @media (max-width: 768px) {
          width: 100%;
          flex-direction: row;
        }
      }
    }
  }
}
</style>
