<template>
  <div class="info1PPoliticaPrivacidade">
    <div class="row-4-col">
      <div class="col-4-inner-row-1">
        <div class="row-inner-col">
          <div class="row-inner-row-title">
            A minha informação será partilhada com outros?
          </div>
          <div class="row-inner-row">
            A sua informação pessoal pode ser divulgada:
          </div>
          <div class="row-inner-row">
            - No âmbito do Grupo Empresarial IKEA.
          </div>
          <div class="row-inner-row">
            - Terceiros prestadores de serviços da IKEA
          </div>
          <div class="row-inner-row">
            Os seus dados pessoais poderão ser tratados por empresas
            subcontratadas pela IKEA, nomeadamente para gestão de perdidos e
            achados, alojamento de página web, correio eletrónico, envio de
            informações sobre novos serviços e produtos, ofertas especiais. São
            fornecidas a estas empresas apenas os dados pessoais necessários
            para a prestação do serviço em causa.
          </div>
          <div class="row-inner-row">
            Os seus dados serão tratados dentro do espaço da União Europeia.
          </div>
        </div>
      </div>
      <div class="col-4-inner-row-2">
        <div class="row-inner-col">
          <div class="row-inner-row-title">
            Quais são os meus direitos?
          </div>
          <div class="row-inner-row">
            <div class="list-title">
              A qualquer momento, pode solicitar-nos:
            </div>
            <ul class="list">
              <li>O acesso à informação que temos sobre si;</li>
              <li>
                A retificação da informação caso esteja incorreta ou incompleta;
              </li>
              <li>
                Para apagar ou limitar o tratamento dos seus dados pessoais;
              </li>
              <li>
                Se o tratamento depender do seu consentimento ou acordo e esse
                for efetuado por meios automatizados, tem direito ao envio dos
                dados pessoais anteriormente fornecidos, de forma estruturada,
                comummente utilizada e num formato informaticamente legível.
              </li>
            </ul>
          </div>
          <div class="row-inner-row">
            Os seus pedidos serão tratados com especial cuidado de forma a que
            possamos assegurar a eficácia dos seus direitos. Poderá ser-lhe
            pedido que faça prova da sua identidade de modo a assegurar que a
            partilha dos dados pessoais é apenas feita com o seu titular.
          </div>
          <div class="row-inner-row">
            Deve ter presente que em certos casos (por exemplo, devido a
            requisitos legais) o seu pedido poderá não ser imediatamente
            satisfeito.
          </div>
          <div class="row-inner-row">
            De qualquer modo, será informado das medidas tomadas nesse sentido,
            no prazo máximo de um mês a partir do momento em que o pedido for
            efetuado.
          </div>
          <div class="row-inner-row">
            Tem ainda o direito de apresentar uma reclamação à
            <a>Comissão Nacional de Proteção de Dados</a>.
          </div>
        </div>
      </div>
      <div class="col-4-inner-row-1"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.info1PPoliticaPrivacidade {
  display: flex;
  flex-direction: row;
  margin: 2rem 0 2rem 0;
  & .row-4-col {
    display: flex;
    flex-direction: column;

    & .col-4-inner-row-1 {
      display: flex;
      flex-direction: row;
      & .row-inner-col {
        display: flex;
        flex-direction: column;
        & .row-inner-row-title {
          font-size: 16px;
          line-height: 26px;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        & .row-inner-row {
          font-size: 16px;
          line-height: 26px;
          margin-bottom: 0.75rem;
        }
      }
    }
    & .col-4-inner-row-2 {
      display: flex;
      flex-direction: row;
      & .row-inner-col {
        display: flex;
        flex-direction: column;

        & .row-inner-row-title {
          font-size: 16px;
          line-height: 26px;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }

        & .row-inner-row {
          font-size: 16px;
          line-height: 26px;
          margin-bottom: 0.75rem;

          & .list-title {
            font-size: 16px;
            line-height: 26px;
            margin-bottom: 0.75rem;
          }

          & .list {
            padding-left: 1rem;
          }
        }
      }
    }
  }
}
</style>
