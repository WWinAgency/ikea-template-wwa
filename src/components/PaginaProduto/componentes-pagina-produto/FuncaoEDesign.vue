<template>
  <div class="col-texto-informativo">
    <div class="row-texto-informativo">
      <div class="inner-row-1">
        <div class="titulo-texto-informativo">Solução de Função</div>
      </div>
      <div class="inner-row-2">
        <div class="inner-col-1">
          Um melhor conforto durante o sono com almofadas ergonómicas
        </div>
        <div class="inner-col-2">
          Estar confortável durante o sono é fundamental para poder desfrutar ao
          máximo das horas em que está acordado. Acreditamos no poder do sono.
          E, quando a sua cabeça e o seu pescoço estão bem apoiados por uma
          almofada, dorme ainda melhor. Mas as pessoas dormem de maneiras
          diferentes. Algumas dormem de costas, outras de lado ou mudam de
          posição muitas vezes durante a noite. É por isso que as nossas
          almofadas ergonómicas estão disponíveis em muitas formas e tamanhos,
          para que possamos todos dormir como um bebé e acordar revigorados.
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
          Uma forma única para diferentes tipos de sono
        </div>
        <div class="inner-col-2">
          A almofada ergonómica MJÖLKKLOCKA tem um lado maior, ideal para quem
          dorme de lado, pois tem um espaço que dá à cabeça e ao pescoço um bom
          apoio, reduzindo a tensão nos ombros. Ao virar para o lado menor, a
          inclinação permite que os músculos do pescoço descontraiam quando
          dorme de costas. Embora cada lado esteja pensado especificamente para
          dormir de lado ou de costas, a espuma memory adapta-se a quem muda
          entre ambas as posições durante a noite.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
