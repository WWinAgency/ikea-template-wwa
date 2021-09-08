<template>
  <div>
    <div class="col-2-row-1">
      Como gostaria de receber a sua encomenda?
    </div>
    <div class="col-2-row-2">
      É necessário o seu código postal para verificarmos as opções de entrega e
      de recolha disponíveis. As opções de disponibilidade, entrega e recolha de
      produtos são baseadas no mesmo.
    </div>
    <div class="col-2-row-3">
      <div class="row-3-col">
        <div class="row-3-row-1">
          <input
            type="text"
            v-model="codigoPostal"
            placeholder="Código postal"
          />
        </div>
        <div class="row-3-row-2">por ex: 1000-001</div>
      </div>
    </div>

    <div class="col-2-row-4">
      <button
        id="btnDark"
        type="button"
        @click="activateModoEntrega"
        class="disponibilidadeDark"
      >
        Calcular o custo e disponibilidade da entrega
      </button>
      <!-- <button
        id="btnLight"
        v-else
        type="button"
        @click="submitCodigoPostal"
        class="disponibilidade"
      >
        Calcular o custo e disponibilidade da entrega
      </button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codigoPostalSubmitted: false,
    };
  },
  props: {
    codigoPostal: String,
    activateModoEntrega: { type: Function },
  },
  methods: {
    submitCodigoPostal() {
      if (this.codigoPostal !== "") {
        this.$emit("submitedPostal", this.codigoPostal);
        this.codigoPostalSubmitted = true;
        this.entrega = true;

        var buttonDark = document.getElementById("btnDark");
        buttonDark.style.marginTop = "2px";
        setInterval(function() {
          var buttonDark = document.getElementById("btnDark");
          buttonDark.style.marginTop = "0px";
        }, 400);
      }
    },
  },
};
</script>

<style lang="scss">
.col-2-row-1 {
  font-size: 2.25rem;
  letter-spacing: -0.03938rem;
  line-height: 1.33333;
  font-weight: 700;
  margin-bottom: 40px;
}
.col-2-row-2 {
  font-size: 1rem;
  letter-spacing: -0.03938rem;
  line-height: 1.33333;
  margin-bottom: 1.5rem;
}
.col-2-row-3 {
  & .row-3-row-1 {
    & input {
      width: 100%;
      border: none;
      padding: 0.2rem;
      border-bottom: 1px solid black;
    }
  }
  & .row-3-row-2 {
    font-size: 0.75rem;
    line-height: 1.5;
    color: #484848;
  }
}

.col-2-row-4 {
  margin-top: 2rem;
  & .disponibilidade {
    height: 3.5rem;
    padding: 0 2rem;
    border-radius: 40px;
    color: #929292;
    border: 1px solid #dfdfdf;
    background-color: #dfdfdf;
    width: 100%;
    font-weight: 700;
  }
  & .disponibilidadeDark {
    height: 3.5rem;
    padding: 0 2rem;
    border-radius: 40px;
    color: white;
    border: 1px solid black;
    background-color: black;
    font-weight: 700;
    width: 100%;
  }
}
</style>
