<template>
  <div class="info">
    <ul class="info-text">
      <li class="info-title">
        <h1><strong>Recebeu uma mensagem em nome do IKEA?</strong></h1>
      </li>
      <li class="info-body">
        <h2>
          Se recebeu comunicação em nome da IKEA Portugal anunciando uma
          campanha de aniversário e a oferta de Cartão Presente, por favor não
          clique no link. Trata-se de uma campanha fraudulenta sem qualquer
          ligação à marca. Relembramos que todas as nossas comunicações são
          efetuadas nos canais oficiais.
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info {
  width: 100%;
  background-color: #f5f5f5;

  margin: 4rem 0 4rem 0 !important;

  & .info-text {
    list-style: none;
    width: 100%;
    padding: 2rem;

    & .info-title {
      & h1 {
        font-size: 1.5625rem;
        line-height: 1.36rem;
        letter-spacing: -0.02625rem;
      }
    }

    & .info-body {
      & h2 {
        font-size: 0.875rem;
        line-height: 1.571rem;
      }
    }
  }
}
</style>
