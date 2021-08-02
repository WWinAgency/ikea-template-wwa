<template>
  <div class="politicaPrivacidadeAccordion">
    <div class="accordion-outter-col">
      <div class="accordion-inner-row-1">{{ tituloAccordion }}</div>
      <div class="accordion-inner-row-2">{{ subTituloAccordion }}</div>
      <hr class="costum-hr" />
      <div class="accordion-inner-row-3">
        <div class="accordion" role="tablist">
          <!-- DIREITO DE ACESSO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow12 = !rotatedArrow12"
              v-b-toggle.accordion-12
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito de acesso</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow12 = !rotatedArrow12"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow12"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-12"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoDeAcesso.p1 }}</p>
                  <p>{{ textDireitoDeAcesso.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DIREITO DE ACESSO -->

          <hr class="costum-hr" />

          <!-- DIREITO DE RETIFICAÇÃO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow13 = !rotatedArrow13"
              v-b-toggle.accordion-13
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito de retificação</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow13 = !rotatedArrow13"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow13"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-13"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoDeRetificação.p1 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DIREITO DE RETIFICAÇÃO -->

          <hr class="costum-hr" />

          <!-- DIREITO DE APAGAMENTO DOS DADOS -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow14 = !rotatedArrow14"
              v-b-toggle.accordion-14
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito de apagamento dos dados ("direito a ser
                    esquecido")</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow14 = !rotatedArrow14"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow14"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-14"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoApagamentoDados.p1 }}</p>
                  <p>{{ textDireitoApagamentoDados.p2 }}</p>
                  <p>{{ textDireitoApagamentoDados.p3 }}</p>
                  <p>{{ textDireitoApagamentoDados.p4 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DIREITO DE APAGAMENTO DOS DADOS -->

          <hr class="costum-hr" />

          <!-- DIRIETO À LIMITAÇÃO DO TRATAMENTO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow15 = !rotatedArrow15"
              v-b-toggle.accordion-15
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito à limitação do tratamento</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow15 = !rotatedArrow15"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow15"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-15"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoLimitacaoTratamento.p1 }}</p>
                  <p>{{ textDireitoLimitacaoTratamento.p2 }}</p>
                  <p>{{ textDireitoLimitacaoTratamento.p3 }}</p>
                  <p>{{ textDireitoLimitacaoTratamento.p4 }}</p>
                  <p>{{ textDireitoLimitacaoTratamento.p5 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DIRIETO À LIMITAÇÃO DO TRATAMENTO -->

          <hr class="costum-hr" />

          <!-- DIREITO DA PORTABILIDADE DOS DADOS -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow16 = !rotatedArrow16"
              v-b-toggle.accordion-16
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito de portabilidade dos dados</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow16 = !rotatedArrow16"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow16"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-16"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoPortabilidade.p1 }}</p>
                  <p>{{ textDireitoPortabilidade.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DIREITO DA PORTABILIDADE DOS DADOS -->

          <hr class="costum-hr" />

          <!-- DIREITO DE OPOSIÇÃO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow17 = !rotatedArrow17"
              v-b-toggle.accordion-17
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Direito de oposição</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow17 = !rotatedArrow17"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow17"
                      class="icon"
                      icon="caret-down"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                    <b-icon
                      v-else
                      class="icon"
                      icon="caret-up"
                      scale="1.2"
                      variant="dark"
                    ></b-icon>
                  </button>
                </div>
              </div>
            </b-card-header>
            <b-collapse
              id="accordion-17"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDireitoOposicao.p1 }}</p>
                  <p>{{ textDireitoOposicao.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- DIREITO DE OPOSIÇÃO -->
        </div>
      </div>

      <hr class="costum-hr" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rotatedArrow12: true,
      rotatedArrow13: true,
      rotatedArrow14: true,
      rotatedArrow15: true,
      rotatedArrow16: true,
      rotatedArrow17: true,

      tituloAccordion: "Porque precisamos da sua informação?",
      subTituloAccordion:
        "A IKEA tratará os seus dados pessoais com as seguintes finalidades: ",

      textDireitoDeAcesso: {
        p1:
          "O titular dos dados pessoais tem o direito a obter da IKEA a confirmação de que os dados que lhe digam respeito são ou não objeto de tratamento e, se for o caso, de aceder aos seus dados pessoais e aceder às informações previstas na lei.",
        p2:
          "Caso pretenda mais do que uma cópia dos seus dados pessoais em fase de tratamento, a IKEA poderá sujeitar esse serviço a um pagamento de uma taxa pelos custos administrativos.",
      },
      textDireitoDeRetificação: {
        p1:
          "O titular dos dados pessoais tem o direito de obter da IKEA, sem demora injustificada, a retificação dos dados inexatos ou incompletos que lhe digam respeito.",
      },
      textDireitoApagamentoDados: {
        p1:
          "O titular dos dados pessoais tem o direito pedir à IKEA para apagar os seus dados, sem demora injustificada, e a IKEA tem a obrigação de apagar os dados pessoais quando se aplique, designadamente, um dos seguintes motivos:",
        p2:
          "a) Os dados pessoais deixaram de ser necessários para a finalidade que motivou a sua recolha ou tratamento;",
        p3:
          "b) O titular retirou o seu consentimento para o tratamento de dados (nos casos em que o tratamento é baseado no consentimento) e não existir outro fundamento para o referido tratamento;",
        p4:
          "c) O titular opõe-se ao tratamento e não existem interesses legítimos prevalecentes que justifiquem o tratamento;",
      },
      textDireitoLimitacaoTratamento: {
        p1:
          "O titular dos dados tem o direito de obter da IKEA a limitação do tratamento, se se aplicar, designadamente, uma das seguintes situações:",
        p2:
          "a) Contestar a exatidão dos dados pessoais, durante um período que permita à IKEA verificar a sua exatidão;",
        p3:
          "b) O tratamento de dados for lícito e o titular dos dados se opuser a que se apaguem os seus dados pessoais e solicitar, em contrapartida, a limitação da sua utilização;",
        p4:
          "c) A IKEA já não precisar dos dados pessoais para fins de tratamento, mas esses dados são requeridos pelo titular para efeitos de declaração, exercício ou defesa de um direito num processo judicial;",
        p5:
          "d) Se tiver oposto ao tratamento, até se verificar que os motivos legítimos do responsável pelo tratamento prevalecem sobre os do titular dos dados.",
      },
      textDireitoPortabilidade: {
        p1:
          "Se o tratamento depender do consentimento do titular dos dados e esse consentimento tiver sido prestado por meios automatizados, o titular dos dados tem o direito a receber os dados pessoais que lhe digam respeito e que tenha fornecido à IKEA num formato estruturado, de uso corrente e de leitura automática.",
      },
      textDireitoOposicao: {
        p1:
          "Nos casos em que o tratamento de dados for efetuado para efeito dos interesses legítimos prosseguidos pela IKEA; ou 2) o tratamento de dados for efetuado para efeitos de marketing direto; ou 3) definição de perfis, o titular dos dados pode ainda, a qualquer altura, opor-se ao tratamento dos seus dados pessoais.",
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss">
.politicaPrivacidadeAccordion {
  margin-top: 2rem;
  & .accordion-outter-col {
    display: flex;
    flex-direction: column;
    & .accordion-inner-row-1 {
      font-size: 16px;
      line-height: 26px;
      font-weight: 700;
      margin-bottom: 0.75rem;
    }
    & .accordion-inner-row-2 {
      margin-bottom: 3rem;
      font-size: 16px;
      line-height: 26px;
      color: #484848;
    }
    & .accordion-inner-row-3 {
      & .accordion {
        & .accordion-privacidade {
          border: none;
          background-color: white;
          & .card-header {
            display: flex;
            height: 8rem;
            position: relative;
            border: none;
            background-color: white;
            border: none;

            &:focus {
              outline: none !important;
            }
            & .card-header-inner-row {
              display: inline-block;
              border: none;

              & .card-header-inner-col-1 {
                position: absolute;
                left: 0;
                top: 20%;
                border: none;

                & .card-name {
                  font-size: 1rem;
                  line-height: 1.5;
                  font-weight: 700;
                  color: #484848;
                  text-decoration: none;
                  border: none;

                  &:hover {
                    color: black;
                    text-decoration: underline;
                  }
                }
              }
              & .card-header-inner-col-2 {
                position: absolute;
                top: 20%;
                right: 0;
                border: none;

                & .card-arrow {
                  border: none;
                  background-color: white;
                }
              }
            }
          }

          & .card-body {
            padding-left: 0;
            padding-top: 0;
            padding-bottom: 4rem;
            margin-bottom: 0.75rem;
            font-size: 16px;
            line-height: 26px;
          }
        }
      }
    }
  }
}
</style>
