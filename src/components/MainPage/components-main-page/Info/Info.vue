<template>
  <div class="info">
    <div class="info-col">
      <li class="info-row">
        <h1><strong>Recebeu uma mensagem em nome do IKEA?</strong></h1>
      </li>
      <li class="info-row">
        <h2>
          Se recebeu comunicação em nome da IKEA Portugal anunciando uma
          campanha de aniversário e a oferta de Cartão Presente, por favor não
          clique no link. Trata-se de uma campanha fraudulenta sem qualquer
          ligação à marca. Relembramos que todas as nossas comunicações são
          efetuadas nos canais oficiais.
        </h2>
      </li>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info {
  width: 100%;
  background-color: #f5f5f5;
  margin: 0 !important;

  & .info-col {
    list-style: none;
    width: 100%;
    padding: 2rem;

    @media (max-width: 380px) {
      padding: 1rem;
    }

    & .info-row {
      @media (max-width: 380px) {
        margin-bottom: 2rem;
      }
      & h1 {
        font-size: 1.5625rem;
        line-height: 1.9rem;
        letter-spacing: -0.02625rem;
      }

      & h2 {
        font-size: 0.875rem;
        line-height: 1.36rem;
        line-height: 1.571rem;
      }
    }
  }
}
</style>
