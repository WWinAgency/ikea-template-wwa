<template>
  <div class="politicaPrivacidadeAccordion">
    <div class="accordion-outter-col">
      <div class="accordion-inner-row-1">{{ tituloAccordion }}</div>
      <div class="accordion-inner-row-2">{{ subTituloAccordion }}</div>
      <hr class="costum-hr" />
      <div class="accordion-inner-row-3">
        <div class="accordion" role="tablist">
          <!-- GESTAO DE CLIENTES -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow1 = !rotatedArrow1"
              v-b-toggle.accordion-1
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Gestão de clientes</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow1 = !rotatedArrow1"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow1"
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
              id="accordion-1"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textGestaoCliente.p1 }}</p>
                  <p>{{ textGestaoCliente.p2 }}</p>
                  <p>{{ textGestaoCliente.p3 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- GESTAO DE CLIENTES -->

          <hr class="costum-hr" />

          <!-- GESTAO DE CHAMADAS DE VOZ, EMAIL E CHAT -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow2 = !rotatedArrow2"
              v-b-toggle.accordion-2
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Gestão de chamadas de voz</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow2 = !rotatedArrow2"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow2"
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
              id="accordion-2"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textGestaoChamadaVoz.p1 }}</p>
                  <p>{{ textGestaoChamadaVoz.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- GESTAO DE CHAMADAS DE VOZ, EMAIL E CHAT -->

          <hr class="costum-hr" />

          <!-- MARKETING -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow3 = !rotatedArrow3"
              v-b-toggle.accordion-3
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info">Marketing</a>
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow3 = !rotatedArrow3"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow3"
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
              id="accordion-3"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textMarketing.p1 }}</p>
                  <p>{{ textMarketing.p2 }}</p>
                  <p>{{ textMarketing.p3 }}</p>
                  <p>{{ textMarketing.p4 }}</p>
                  <p>{{ textMarketing.p5 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- MARKETING -->

          <hr class="costum-hr" />

          <!-- INQUÉRITO DE SATISFAÇÃO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow4 = !rotatedArrow4"
              v-b-toggle.accordion-4
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Inquérito de satisfação</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow4 = !rotatedArrow4"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow4"
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
              id="accordion-4"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textInqueritoSatisfacao.p1 }}</p>
                  <p>{{ textInqueritoSatisfacao.p2 }}</p>
                  <p>{{ textInqueritoSatisfacao.p3 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- INQUÉRITO DE SATISFAÇÃO -->

          <hr class="costum-hr" />

          <!-- DEFINIÇÃO DE PERFIS -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow5 = !rotatedArrow5"
              v-b-toggle.accordion-5
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Definição de Perfis</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow5 = !rotatedArrow5"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow5"
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
              id="accordion-5"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textDefinicaoPerfis.p1 }}</p>
                  <p>{{ textDefinicaoPerfis.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- DEFINIÇÃO DE PERFIS -->

          <hr class="costum-hr" />

          <!-- VIDEO VIGILANCIA -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow6 = !rotatedArrow6"
              v-b-toggle.accordion-6
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Vídeovigilância nas lojas</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow6 = !rotatedArrow6"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow6"
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
              id="accordion-6"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textVideoVigilancia.p1 }}</p>
                  <p>{{ textVideoVigilancia.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- VIDEO VIGILANCIA -->

          <hr class="costum-hr" />

          <!-- GESTAO DE PASSATEMPOS -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow7 = !rotatedArrow7"
              v-b-toggle.accordion-7
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Gestão de passatempos</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow7 = !rotatedArrow7"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow7"
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
              id="accordion-7"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textGestaoPassatempos.p1 }}</p>
                  <p>{{ textGestaoPassatempos.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- GESTAO DE PASSATEMPOS -->

          <hr class="costum-hr" />

          <!-- GESTAO DE ESPAÇOS -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow8 = !rotatedArrow8"
              v-b-toggle.accordion-8
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Gestão de espaços "Smaland"
                  </a>
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow8 = !rotatedArrow8"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow8"
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
              id="accordion-8"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textGestaoEspacos.p1 }}</p>
                  <p>{{ textGestaoEspacos.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- GESTAO DE ESPAÇOS -->

          <hr class="costum-hr" />

          <!-- GESTAO DO PROGRAMA -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              @click="rotatedArrow9 = !rotatedArrow9"
              v-b-toggle.accordion-9
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Gestão do programa "IKEA para Negócios"
                  </a>
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow9 = !rotatedArrow9"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow9"
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
              id="accordion-9"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textGestaoPrograma.p1 }}</p>
                  <p>{{ textGestaoPrograma.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- GESTAO DO PROGRAMA -->

          <hr class="costum-hr" />

          <!-- COSTUMER TRACKING -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              v-b-toggle.accordion-10
              @click="rotatedArrow10 = !rotatedArrow10"
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info"
                    >Costumer Tracking</a
                  >
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow10 = !rotatedArrow10"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow10"
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
              id="accordion-10"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textCostumerTracking.p1 }}</p>
                  <p>{{ textCostumerTracking.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>
          <!-- COSTUMER TRACKING -->

          <hr class="costum-hr" />

          <!-- RECRUTAMENTO -->
          <b-card no-body class="accordion-privacidade">
            <b-card-header
              v-b-toggle.accordion-11
              @click="rotatedArrow11 = !rotatedArrow11"
              header-tag="header"
              role="tab"
            >
              <div class="card-header-inner-row">
                <div class="card-header-inner-col-1">
                  <a class="card-name" block variant="info">Recrutamento</a>
                </div>
                <div class="card-header-inner-col-2">
                  <button
                    class="card-arrow"
                    @click="rotatedArrow11 = !rotatedArrow11"
                    block
                    variant="info"
                  >
                    <b-icon
                      v-if="rotatedArrow11"
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
              id="accordion-11"
              accordion="my-accordion"
              role="tabpanel"
            >
              <b-card-body>
                <b-card-text>
                  <p>{{ textRecrutamento.p1 }}</p>
                  <p>{{ textRecrutamento.p2 }}</p>
                </b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <!-- RECRUTAMENTO -->
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
      rotatedArrow1: true,
      rotatedArrow2: true,
      rotatedArrow3: true,
      rotatedArrow4: true,
      rotatedArrow5: true,
      rotatedArrow6: true,
      rotatedArrow7: true,
      rotatedArrow8: true,
      rotatedArrow9: true,
      rotatedArrow10: true,
      rotatedArrow11: true,

      tituloAccordion: "Porque precisamos da sua informação?",
      subTituloAccordion:
        "A IKEA tratará os seus dados pessoais com as seguintes finalidades: ",

      textGestaoCliente: {
        p1:
          "A IKEA dedica-se à venda de móveis, artigos de decoração e à prestação de serviços acessórios, tal como o transporte e a montagem, através de lojas físicas e da loja online. A IKEA presta ainda serviços de restauração e venda de produtos alimentares. O tratamento dos seus dados é necessário para o cumprimento do contrato de compra e venda ou de prestação de serviços a celebrar entre si e a IKEA, ou para a realização de diligências pré-contratuais a seu pedido. ",
        p2:
          "Caso pretenda aderir ao Cartão “IKEA Family” ser-lhe-ão solicitados dados pessoais no formulário de adesão, bem como a aceitação das Condições Gerais do Cartão. A disponibilização dos seus dados pessoais é essencial para que possa usufruir das vantagens do Cartão, ou seja, o tratamento é necessário para a execução do contrato celebrado com a IKEA, nos campos assinalados como “obrigatórios”.",
        p3:
          "Os seus dados serão conservados para esta finalidade durante 3 anos de inatividade.",
      },
      textGestaoChamadaVoz: {
        p1:
          "A IKEA guardará as chamadas telefónicas por um período de 6 meses para efeitos de avaliação da qualidade do serviço, resolução de reclamações e comprovação de transações comerciais. Caso não o consinta, poderá contactar-nos pelos canais alternativos disponíveis em Contactos.",
        p2:
          "Os emails, chats de conversação e conversações através de redes sociais serão conservados com a finalidade de suporte administrativo durante um ano e um mês.",
      },
      textMarketing: {
        p1:
          "A IKEA poderá tratar os seus dados para lhe enviar informações sobre os seus produtos e serviços.",
        p2:
          "Este tratamento de dados será realizado apenas com o seu consentimento, prestado no momento da adesão ao Cartão “IKEA Family” através do formulário de adesão. Caso consinta, receberá comunicações de marketing através de e-mail e SMS. A IKEA poderá ainda partilhar os seus dados com parceiros que gerem redes sociais, como por exemplo o Facebook, para efeitos de realização de campanhas de marketing através das redes sociais.",
        p3:
          "O consentimento para o tratamento de dados pessoais para efeitos de marketing direto pode ser revogado em qualquer altura.",
        p4:
          "Os seus dados serão conservados para esta finalidade durante 3 anos de inatividade.",
        p5:
          "Facebook Pixel, mInsights e AppNexus: Servem para direcionar anúncios ao utilizador sobre páginas visitadas, serviços ou produtos adquiridos. Limita também o número de vezes que um anúncio é exibido, para que não seja mostrado ao mesmo utilizador demasiadas vezes. Esses cookies também são usados para medir o desempenho de campanhas de publicidade e para efeitos de remarketing.",
      },
      textInqueritoSatisfacao: {
        p1:
          "Com vista a melhorar a qualidade dos seus serviços, a IKEA contacta o Cliente através de chamada telefónica ou e-mail, e solicita que este responda a um inquérito de qualidade e satisfação.",
        p2:
          "O fundamento de licitude para contactar os Clientes e solicitar a sua participação no inquérito de satisfação, baseia-se nos interesses legítimos da IKEA em melhorar a qualidade dos seus serviços.",
        p3:
          "Este inquérito apenas será dirigido aos Clientes da IKEA (que tenham adquirido produtos e/ou serviços anteriormente), e será anónimo, utilizado e analisado para fins estatísticos, não sendo recolhidos dados pessoais do Cliente no decurso do mesmo.",
      },
      textDefinicaoPerfis: {
        p1:
          "A IKEA realiza a definição de perfis com base na informação relacionada com as suas compras. Sempre que utilizar o Cartão “IKEA Family” a IKEA regista os produtos adquiridos, valores pagos, data e hora, assim como o local de aquisição. ",
        p2:
          "Esta informação é analisada para identificar o seu perfil de consumo. Esta análise permite à IKEA enviar-lhe informação personalizada e adequada ao seu perfil. A IKEA utiliza informação estatística relacionada com os perfis dos membros do Cartão “IKEA Family” para melhorar a sua oferta, planear a sua comunicação e gerir este programa de fidelização. Este consentimento pode ser revogado a qualquer momento no seu perfil IKEA Family ou através do email privacidade@ikea.com",
      },
      textVideoVigilancia: {
        p1:
          "As lojas da IKEA dispõem de um sistema de videovigilância, devidamente sinalizado. A instalação deste sistema é uma obrigação legal da IKEA, de acordo com a Lei da Segurança Privada (Lei n.º 34/2013, de 16 de maio, art. 8.º n.º 2).",
        p2:
          "As gravações de imagem obtidas pelos sistemas videovigilância são conservadas, em registo codificado, pelo prazo de 30 dias contados desde a respetiva captação, findo o qual são destruídas (sem prejuízo da conservação por período superior em caso de processo judicial).",
      },
      textGestaoPassatempos: {
        p1:
          "A IKEA promove a realização de passatempos. O tratamento de dados pessoais é efetuado com a finalidade de permitir a gestão da participação do cliente, ou seja, a execução do contrato celebrado entre si e a IKEA (cujas regras constam do regulamento aplicável a cada passatempo).",
        p2:
          "Os seus dados serão apenas conservados para esta finalidade durante o período necessário à gestão do passatempo.",
      },
      textGestaoEspacos: {
        p1:
          "Caso utilize o espaço infantil disponível nas nossas lojas, trataremos os dados dos responsáveis pela criança e da criança necessários à prestação desse serviço.",
        p2: "Os dados serão conservados para esta finalidade durante 1 ano.",
      },
      textGestaoPrograma: {
        p1:
          "A IKEA tratará os seus dados para efeitos de gestão do Programa “IKEA para Negócios”. Este tratamento é necessário para a execução do contrato com a IKEA, conforme descrito nas respetivas Condições Gerais. Caso o consinta, esses dados poderão também ser usados para o envio de informações sobre atividades promocionais.",
        p2:
          "Os dados serão conservados para esta finalidade durante 10 anos de inatividade.",
      },
      textCostumerTracking: {
        p1:
          "Os dados fornecidos ao serviço de Consumer Tracking são usados para ajudá-lo na compra da sua cozinha, informando sobre novas ofertas, novas sugestões na sua planificação ou pesquisas. O processamento dos dados é feito com o seu consentimento, que é fornecido quando os dados são recolhidos.",
        p2: "Os dados serão conservados para esta finalidade 12 meses.",
      },
      textRecrutamento: {
        p1: "Por favor consulte a nossa Política de Recrutamento.",
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

            &:focus {
              outline: none !important;
            }
            & .card-header-inner-row {
              display: inline-block;

              & .card-header-inner-col-1 {
                position: absolute;
                left: 0;
                top: 20%;

                & .card-name {
                  font-size: 1rem;
                  line-height: 1.5;
                  font-weight: 700;
                  color: #484848;
                  text-decoration: none;

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
