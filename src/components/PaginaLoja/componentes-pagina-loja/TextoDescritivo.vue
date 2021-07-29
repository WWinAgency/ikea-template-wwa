<template>
  <div class="textoDescritivo">
    <div class="texto-descritivo-outter-col">
      <div class="texto-descritivo-inner-row-1">{{ titulo }}</div>
      <div class="texto-descritivo-inner-row-2">{{ texto }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextoDescritivo",
  props: {
    titulo: String,
    texto: String,
  },
};
</script>

<style lang="scss">
.textoDescritivo {
  width: 60%;
  @media (max-width: 1000px) {
    width: 100%;
  }
  & .texto-descritivo-outter-col {
    width: 100%;
    display: flex;
    flex-direction: column;
    & .texto-descritivo-inner-row-1 {
      width: 100%;
      display: flex;
      flex-direction: row;
      margin-bottom: 1.875rem;
      font-size: 1.875rem;
      line-height: 1.3334;
      font-weight: 700;
      letter-spacing: -0.53px;
      overflow-wrap: break-word;
      color: black;
    }
    & .texto-descritivo-inner-row-2 {
      width: 100%;
      display: flex;
      flex-direction: row;
      font-size: 16px;
      line-height: 26px;
      word-break: break-word;
    }
  }
}
</style>
