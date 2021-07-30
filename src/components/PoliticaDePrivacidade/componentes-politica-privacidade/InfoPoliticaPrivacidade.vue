<template>
  <div class="infoPoliticaPrivacidade">
    <div class="info-politica-privacidade-outter-col">
      <div class="info-politica-privacidade-inner-row-1">
        {{ titulo }}
      </div>
      <div class="info-politica-privacidade-inner-row-2">
        {{ paragrafo1 }}
      </div>
      <div class="info-politica-privacidade-inner-row-3">
        <h3>
          {{ paragrafo2pt1 }} <strong>{{ empresa }}</strong> {{ paragrafo2pt2 }}
        </h3>
      </div>
      <div class="info-politica-privacidade-inner-row-4">
        {{ paragrafo3 }}
      </div>
      <div class="info-politica-privacidade-inner-row-5">
        Telefone:
        <h1>+351 {{ telefone }}</h1>
      </div>
      <div class="info-politica-privacidade-inner-row-6">
        Morada: {{ morada }}, {{ numeroPorta }}, {{ andar }},
        {{ codigoPostal }}, {{ localidade }}
      </div>
      <div class="info-politica-privacidade-inner-row-7">
        Email:
        <h2>{{ email }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: String,
    paragrafo1: String,
    paragrafo2pt1: String,
    empresa: String,
    paragrafo2pt2: String,
    paragrafo3: String,
    telefone: Number,
    morada: String,
    numeroPorta: Number,
    andar: String,
    codigoPostal: String,
    localidade: String,
    email: String,
  },
};
</script>

<style lang="scss">
.infoPoliticaPrivacidade {
  width: 60%;

  @media (max-width: 1200px) {
    width: 100%;
  }
  & .info-politica-privacidade-outter-col {
    display: flex;
    flex-direction: column;
    & .info-politica-privacidade-inner-row-1 {
      display: flex;
      flex-direction: row;
      margin-bottom: 2.5rem;
      font-size: 2.25rem;
      font-weight: 700;
      line-height: 1.33333;
      word-break: break-word;
      letter-spacing: -0.03938rem;
      color: black;
    }
    & .info-politica-privacidade-inner-row-2 {
      display: flex;
      flex-direction: row;
      margin-bottom: 0.75rem;
      font-size: 16px;
      line-height: 26px;
      color: #484848;
    }
    & .info-politica-privacidade-inner-row-3 {
      display: flex;
      flex-direction: row;
      margin-bottom: 0.75rem;

      & h3 {
        font-size: 16px;
        line-height: 26px;
        color: #484848;
      }
    }
    & .info-politica-privacidade-inner-row-4 {
      display: flex;
      flex-direction: row;
      margin-bottom: 0.75rem;
      font-size: 16px;
      line-height: 26px;
      color: #484848;
    }
    & .info-politica-privacidade-inner-row-5 {
      display: flex;
      flex-direction: row;
      font-size: 16px;
      line-height: 26px;
      color: #484848;

      & h1 {
        font-weight: bold;
        color: black;
        font-size: 16px;
        line-height: 26px;
        margin-left: 0.3rem;
      }
    }
    & .info-politica-privacidade-inner-row-6 {
      display: flex;
      flex-direction: row;
      font-size: 16px;
      line-height: 26px;
      color: #484848;
    }
    & .info-politica-privacidade-inner-row-7 {
      display: flex;
      flex-direction: row;
      font-size: 16px;
      line-height: 26px;
      color: #484848;

      & h2 {
        font-size: 16px;
        line-height: 26px;
        text-decoration: underline;
        color: #484848;
        margin-left: 0.3rem;

        &:hover {
          color: black;
        }
      }
    }
  }
}
</style>
