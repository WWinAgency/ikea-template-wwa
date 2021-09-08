<template>
  <div class="questionarioEntrega">
    <div class="row">
      <div class="title">Em que tipo de habitação vive</div>
      <div class="row-col">
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="escritorio" type="radio" />
          </div>
          <div class="col-2">Escritório</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="casa" type="radio" />
          </div>
          <div class="col-2">Casa</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="apartamento" type="radio" />
          </div>
          <div class="col-2">Apartamento</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="title">
        A morada de entrega está numa zona restrita ao trânsito?
      </div>
      <div class="row-col">
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="no" type="radio" />
          </div>
          <div class="col-2">Não</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="yes" type="radio" />
          </div>
          <div class="col-2">Sim</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="title">
        Existe elevador para a Entrega?
      </div>
      <div class="row-col">
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="no" type="radio" />
          </div>
          <div class="col-2">Não</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="n/a" type="radio" />
          </div>
          <div class="col-2">N/A</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="yes" type="radio" />
          </div>
          <div class="col-2">Sim</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="title-slim">
        <div class="title-row-1">Informação adicional ao transportador</div>
        <div class="title-row-2">Forneça alguns pormenores</div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend"></div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="title">
        Na morada de entrega existem limitações ao acesso de uma carrinha de
        entregas/camião?
      </div>
      <div class="row-col">
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="no" type="radio" />
          </div>
          <div class="col-2">Não</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="yes" type="radio" />
          </div>
          <div class="col-2">Sim</div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="title-slim">
        <div class="title-row-1">Piso?</div>
        <div class="title-row-2">Forneça alguns pormenores</div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend"></div>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <div class="title">
        A escadaria é suficientemente larga para a entrega dos artigos
        adquiridos?
      </div>
      <div class="row-col">
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="no" type="radio" />
          </div>
          <div class="col-2">Não</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="n/a" type="radio" />
          </div>
          <div class="col-2">N/A</div>
        </div>
        <div class="col-row">
          <div class="col-1">
            <input class="input-radio" value="yes" type="radio" />
          </div>
          <div class="col-2">Sim</div>
        </div>
      </div>
    </div>
    <div class="row">
      <b-button
        @click="activateMetodoPagamento"
        variant="primary"
        class="guardar-respostas"
        >Guardar Respostas</b-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activateMetodoPagamento: { type: Function },
  },
};
</script>

<style lang="scss">
.questionarioEntrega {
  & .row {
    margin-top: 2rem !important;
    display: flex;
    flex-direction: column !important;

    & .guardar-respostas {
      height: 3.5rem;
      width: 100%;
      border-radius: 64px;
      font-weight: 700;
      background-color: #004f93;
      border: 1px solid #004f93;
    }
    & .title {
      width: auto !important;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    & .title-slim {
      width: auto !important;
      margin-bottom: 1rem;
    }

    & .input-group {
      margin-bottom: 1rem;
    }

    & .row-col {
      display: flex;
      flex-direction: column;
      width: auto !important;

      & .col-row {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        & .col-1 {
          width: 10% !important;
          & .input-radio {
            width: 1.3rem;
            height: 1.3rem;
          }
        }
        & .col-2 {
          width: 90% !important;
        }
      }
    }
  }
}
</style>
