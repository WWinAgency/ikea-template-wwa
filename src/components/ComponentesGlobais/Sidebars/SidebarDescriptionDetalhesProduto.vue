<template>
  <div class="descriptionSidebarDetalhes">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">
        <a class="tituloSidebar" v-b-toggle.sidebar-detalhes-produto-right>{{
          tituloSidebar
        }}</a>
      </div>
      <div class="sidebar-text-col-2">
        <button
          class="sidebar-button"
          v-b-toggle.sidebar-detalhes-produto-right
        >
          <b-icon icon="arrow-right" scale="1.6" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar id="sidebar-detalhes-produto-right" right shadow>
      <div class="detalhes-produto-outter-col">
        <div class="detalhes-produto-row-1">
          <strong>Detalhes Produto</strong>
        </div>
        <div class="detalhes-produto-row-2">
          <div class="row-2-inner-col">
            <div class="row-2-inner-row-1">
              {{ produtos[0].generalDescription }}
              {{ produtos[0].specificDescription }}
            </div>

            <div class="row-2-inner-row-3">
              <a href="#">Saiba mais</a>
            </div>
          </div>
        </div>
        <div class="detalhes-produto-row-3">
          <div class="row-3-inner-col">
            <div class="row-3-inner-row-1">Número do artigo</div>
            <div class="row-3-inner-row-2">{{ produtos[0].code }}</div>
          </div>
        </div>
        <!-- ACCORDION -->
        <div class="detalhes-produto-row-4">
          <div class="accordion-detalhes" role="tablist">
            <b-card @click="rotateArrow1()" v-b-toggle.accordion-1 no-body>
              <b-card-header
                header-tag="header"
                class="card-materiais-header"
                role="tab"
              >
                <div class="card-header-inner-row">
                  <div class="card-header-inner-col-1">
                    <a class="card-name" variant="info">Materiais e cuidados</a>
                  </div>
                  <div class="card-header-inner-col-2">
                    <button
                      class="card-arrow"
                      @click="rotateArrow1()"
                      variant="info"
                    >
                      <b-icon
                        id="arrow-1"
                        class="arrow-1"
                        icon="caret-down"
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
                    <div class="materiais-text-col">
                      <div class="materiais-text-row-1">
                        <div class="row-1-inner-col">
                          <div class="row-1-inner-row-1">
                            <strong>{{ materiais.productInsideTitle }}</strong>
                          </div>
                          <div class="row-1-inner-row-2">
                            {{ materiais.productInside }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-2">
                        <div class="row-2-inner-col">
                          <div class="row-2-inner-row-1">
                            <strong>{{
                              materiais.productContainsTitle
                            }}</strong>
                          </div>
                          <div class="row-2-inner-row-2">
                            {{ materiais.productContains }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-3">
                        <div class="row-3-inner-col">
                          <div class="row-3-inner-row-1">
                            <strong>{{
                              materiais.productProtectionTitle
                            }}</strong>
                          </div>
                          <div class="row-3-inner-row-2">
                            {{ materiais.productProtection }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-4">
                        <div class="row-4-inner-col">
                          <div class="row-4-inner-row-1">
                            <strong>{{
                              materiais.productBacksideTitle
                            }}</strong>
                          </div>
                          <div class="row-4-inner-row-2">
                            {{ materiais.productBackside }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-5">
                        <div class="row-5-inner-col">
                          <div class="row-5-inner-row-1">
                            {{ materiais.productCleaningTitle }}
                          </div>
                          <div class="row-5-inner-row-2">
                            {{ materiais.productCleaning }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-6">
                        <div class="row-6-inner-col">
                          <div class="row-6-inner-row-1">
                            {{ materiais.productCleaningTitle2 }}
                          </div>
                          <div class="row-6-inner-row-2">
                            {{ materiais.productCleaning2 }}
                          </div>
                        </div>
                      </div>
                    </div>
                  </b-card-text>
                </b-card-body>
              </b-collapse>
              <hr class="costum-hr" />
            </b-card>

            <b-card @click="rotateArrow2()" v-b-toggle.accordion-2 no-body>
              <b-card-header
                header-tag="header"
                class="card-sust-header"
                role="tab"
              >
                <div class="card-header-inner-row">
                  <div class="card-header-inner-col-1">
                    <a class="card-name" variant="info"
                      >Sustentabilidade e ambiente</a
                    >
                  </div>
                  <div class="card-header-inner-col-2">
                    <button
                      class="card-arrow"
                      @click="rotateArrow2()"
                      variant="info"
                    >
                      <b-icon
                        id="arrow-2"
                        class="icon"
                        icon="caret-down"
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
                  <b-card-text
                    ><div class="sust-text-col">
                      <div class="sust-text-row">
                        {{ sustentabilidade.description }}
                      </div>
                    </div></b-card-text
                  >
                </b-card-body>
              </b-collapse>
              <hr class="costum-hr" />
            </b-card>

            <b-card @click="rotateArrow3()" v-b-toggle.accordion-3 no-body>
              <b-card-header
                header-tag="header"
                class="card-peso-header"
                role="tab"
              >
                <div class="card-header-inner-row">
                  <div class="card-header-inner-col-1">
                    <a class="card-name" variant="info"
                      >Peso e medidas da embalagem</a
                    >
                  </div>
                  <div class="card-header-inner-col-2">
                    <button
                      class="card-arrow"
                      @click="rotateArrow3()"
                      variant="info"
                    >
                      <b-icon
                        id="arrow-3"
                        class="icon"
                        icon="caret-down"
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
                  <b-card-text
                    ><div class="peso-text-col">
                      <div class="peso-text-row-1">
                        <div class="row-1-inner-col">
                          <div class="row-1-inner-row-1">
                            <strong>{{ produtos[0].name }}</strong>
                          </div>
                          <div class="row-1-inner-row-2">
                            {{ produtos[0].type }}, {{ produtos[0].utility }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-2">
                        <div class="row-2-inner-col">
                          <div class="row-2-inner-row-1">
                            Artigo número
                          </div>
                          <div class="row-2-inner-row-2">
                            {{ produtos[0].code }}
                          </div>
                        </div>
                      </div>
                      <div class="materiais-text-row-3">
                        <ul class="spec-list">
                          <li class="spec-item">
                            <strong>Largura: </strong
                            >{{ pesoMedidas.largura }} cm
                          </li>
                          <li class="spec-item">
                            <strong>Altura: </strong>{{ pesoMedidas.altura }} cm
                          </li>
                          <li class="spec-item">
                            <strong>Comprimento: </strong
                            >{{ pesoMedidas.comprimento }} cm
                          </li>
                          <li class="spec-item">
                            <strong>Peso: </strong>{{ pesoMedidas.peso }} kg
                          </li>
                          <li class="spec-item">
                            <strong>Embalagens: </strong
                            >{{ pesoMedidas.embalagens }}
                          </li>
                        </ul>
                      </div>
                    </div></b-card-text
                  >
                </b-card-body>
              </b-collapse>
              <hr class="costum-hr" />
            </b-card>

            <b-card v-b-toggle.accordion-4 @click="rotateArrow4()" no-body>
              <b-card-header
                header-tag="header"
                class="card-montagem-header"
                role="tab"
              >
                <div class="card-header-inner-row">
                  <div class="card-header-inner-col-1">
                    <a class="card-name" variant="info"
                      >Instruções de montagem e outros documentos</a
                    >
                  </div>
                  <div class="card-header-inner-col-2">
                    <button
                      class="card-arrow"
                      @click="rotateArrow4()"
                      variant="info"
                    >
                      <b-icon
                        id="arrow-4"
                        class="icon"
                        icon="caret-down"
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
                  <b-card-text
                    ><div class="montagem-text-col">
                      <div class="montagem-text-row-1">
                        <div class="row-1-inner-col-1">
                          <b-icon
                            icon="tools"
                            scale="1.2"
                            variant="dark"
                          ></b-icon>
                        </div>
                        <div class="row-1-inner-col-2">
                          <strong>Instruções de montagem</strong>
                        </div>
                      </div>
                      <hr class="costum-hr" />
                      <div class="montagem-text-row-2">
                        <div class="row-2-inner-col-1">
                          <div class="row-2-inner-row-1">
                            {{ produtos[0].name }} {{ produtos[0].type }},
                            {{ produtos[0].utility }}
                          </div>
                          <div class="row-2-inner-row-2">
                            {{ produtos[0].code }}
                          </div>
                        </div>
                        <div class="row-2-inner-col-2">
                          <a href=""
                            ><b-icon
                              icon="box-arrow-up"
                              scale="1.4"
                              variant="dark"
                            ></b-icon
                          ></a>
                        </div>
                      </div></div
                  ></b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </div>
        <!-- ACCORDION -->
      </div>
    </b-sidebar>
  </div>
</template>

<script>
import produtos from "../../../assets/data/mainPage/products";
export default {
  mixins: [produtos],
  data() {
    return {
      rotatedArrow1: false,
      rotatedArrow2: false,
      rotatedArrow3: false,
      rotatedArrow4: false,
    };
  },
  methods: {
    rotateArrow1() {
      this.rotatedArrow1 = !this.rotatedArrow1;
      if (this.rotatedArrow1 == true) {
        document.getElementById("arrow-1").style.transform = "rotate(180deg)";
      } else {
        document.getElementById("arrow-1").style.transform = "rotate(0)";
      }
    },
    rotateArrow2() {
      this.rotatedArrow2 = !this.rotatedArrow2;
      if (this.rotatedArrow2 == true) {
        document.getElementById("arrow-2").style.transform = "rotate(180deg)";
      } else {
        document.getElementById("arrow-2").style.transform = "rotate(0)";
      }
    },
    rotateArrow3() {
      this.rotatedArrow3 = !this.rotatedArrow3;
      if (this.rotatedArrow3 == true) {
        document.getElementById("arrow-3").style.transform = "rotate(180deg)";
      } else {
        document.getElementById("arrow-3").style.transform = "rotate(0)";
      }
    },
    rotateArrow4() {
      this.rotatedArrow4 = !this.rotatedArrow4;
      if (this.rotatedArrow4 == true) {
        document.getElementById("arrow-4").style.transform = "rotate(180deg)";
      } else {
        document.getElementById("arrow-4").style.transform = "rotate(0)";
      }
    },
  },
  props: {
    tituloSidebar: String,
    nomeProduto: String,
    tipoProduto: String,
    utilidadeProduto: String,
    codigoProduto: String,
    generalDescription: String,
    specificDescription: String,
    materiais: {
      productInsideTitle: String,
      productInside: String,
      productContainsTitle: String,
      productContains: String,
      productProtectionTitle: String,
      productProtection: String,
      productBacksideTitle: String,
      productBackside: String,
      productCleaningTitle: String,
      productCleaning: String,
      productCleaningTitle2: String,
      productCleaning2: String,
    },
    sustentabilidade: {
      description: String,
    },
    pesoMedidas: {
      altura: Number,
      largura: Number,
      comprimento: Number,
      peso: Number,
      embalagens: Number,
    },
  },
};
</script>

<style lang="scss">
.descriptionSidebarDetalhes {
  position: relative;

  & .b-sidebar {
    width: 500px !important;

    @media (max-width: 500px) {
      width: 100% !important;
    }
  }
  & .sidebar-text-row {
    display: inline-block;
    & .sidebar-text-col-1 {
      & .tituloSidebar {
        font-size: 1.5625rem;
        line-height: 1.36;
        letter-spacing: -0.02625rem;
        color: black;
        font-weight: 700;
        float: left;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          font-size: 1.2rem;
        }
      }
    }
    & .sidebar-text-col-2 {
      position: absolute;
      right: 0;
      float: right;
      & .sidebar-button {
        border: none;
        background-color: white !important;

        @media (max-width: 950px) {
          margin-top: 0.2rem;
          margin-right: 0;
        }
      }
    }
  }

  & .b-sidebar-body {
    scrollbar-width: none;
    background-color: #f5f5f5;
  }

  & .detalhes-produto-outter-col {
    padding: 4rem 3rem 4rem 3rem;

    & .detalhes-produto-row-1 {
      font-size: 1.5625rem;
    }
    & .detalhes-produto-row-2 {
      & .row-2-inner-col {
        display: flex;
        flex-direction: column;
        margin: 2rem 0 2rem 0;
        & .row-2-inner-row-1 {
          font-size: 0.875rem;
          line-height: 1.57;
          margin-bottom: 2rem;
        }
        & .row-2-inner-row-2 {
          font-size: 0.875rem;
          line-height: 1.57;
          margin-bottom: 2rem;
        }
        & .row-2-inner-row-3 {
          & a {
            font-size: 0.875rem;
            line-height: 1.57;
            margin-bottom: 2rem;
            color: #484848;

            &:hover {
              color: black;
            }
          }
        }
      }
    }
    & .detalhes-produto-row-3 {
      & .row-3-inner-col {
        & .row-3-inner-row-1 {
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
          color: #484848;
          line-height: 1.5;
        }
        & .row-3-inner-row-2 {
          background-color: black;
          color: white;
          width: auto;
          font-weight: 700;
          line-height: 1.25;
          padding: 0.25rem 0.75rem;
          font-size: 1rem;
          max-width: 7rem;
          text-align: center;
        }
      }
    }

    & .detalhes-produto-row-4 {
      margin-top: 2rem;
      & .accordion-detalhes {
        & .card {
          margin: 2rem 0 2rem;
          border: none;

          & .costum-hr {
            margin: 0;
          }
          & .card-header {
            display: inline-block;
            border: none;
            padding: 1rem 0 1rem 0;
            border: none;
            position: relative;

            &:focus {
              outline: none !important;
            }
            & .card-header-inner-row {
              display: inline-block;
              border: none;

              & .card-header-inner-col-1 {
                position: absolute;
                top: 0;
                left: 0;
                border: none;
                padding-right: 4rem;

                & .card-name {
                  font-size: 1rem;
                  line-height: 1.5;
                  font-weight: 700;
                  color: #484848;
                  text-decoration: none;
                  border: none;
                  word-wrap: break-word;

                  &:hover {
                    color: black;
                    text-decoration: underline;
                  }
                }
              }
              & .card-header-inner-col-2 {
                position: absolute;
                top: 0;
                right: 0;
                border: none;

                & .card-arrow {
                  border: none;
                  background-color: #f5f5f5;
                }
              }
            }
          }

          & .card-body {
            background-color: #f5f5f5;
            padding-left: 0;
            padding-top: 0;
            & .card-text {
              & .materiais-text-col {
                & .materiais-text-row-1 {
                  padding-bottom: 2rem;
                  & .row-1-inner-col {
                    & .row-1-inner-row-1 {
                      font-size: 0.875rem;
                    }
                    & .row-1-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-2 {
                  padding-bottom: 2rem;
                  & .row-2-inner-col {
                    & .row-2-inner-row-1 {
                      font-size: 0.875rem;
                    }
                    & .row-2-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-3 {
                  padding-bottom: 2rem;
                  & .row-3-inner-col {
                    & .row-3-inner-row-1 {
                      font-size: 0.875rem;
                    }
                    & .row-3-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-4 {
                  padding-bottom: 2rem;
                  & .row-4-inner-col {
                    & .row-4-inner-row-1 {
                      font-size: 0.875rem;
                    }
                    & .row-4-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-5 {
                  & .row-5-inner-col {
                    display: flex;
                    flex-direction: column;
                    & .row-5-inner-row-1 {
                      font-size: 0.875rem;
                      font-weight: 700;
                    }
                    & .row-5-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-6 {
                  margin: 2.5rem 0 2.5rem 0;

                  & .row-6-inner-col {
                    display: flex;
                    flex-direction: column;
                    & .row-6-inner-row-1 {
                      font-size: 0.875rem;
                      font-weight: 700;
                    }
                    & .row-6-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
              }

              & .sust-text-col {
                & .sust-text-row {
                  font-size: 0.875rem;
                }
              }

              & .peso-text-col {
                & .peso-text-row-1 {
                  padding-bottom: 2rem;
                  & .row-1-inner-col {
                    & .row-1-inner-row-1 {
                      font-size: 0.875rem;
                    }
                    & .row-1-inner-row-2 {
                      font-size: 0.875rem;
                    }
                  }
                }
                & .materiais-text-row-2 {
                  padding-bottom: 2rem;
                  & .row-2-inner-col {
                    & .row-2-inner-row-1 {
                      font-size: 0.75rem;
                      margin-bottom: 0.5rem;
                    }
                    & .row-2-inner-row-2 {
                      background-color: black;
                      color: #f5f5f5;
                      width: auto;
                      font-weight: 700;
                      font-size: 0.75rem;
                      line-height: 1.25;
                      padding: 0.25rem 0.5rem 0.25rem 0.5rem;
                      max-width: 5rem;
                      text-align: center;
                    }
                  }
                }
                & .materiais-text-row-3 {
                  padding-bottom: 2rem;

                  & .spec-list {
                    list-style: none;
                    padding-left: 0;
                    & .spec-item {
                      font-size: 0.875rem;
                      line-height: 1.57;
                    }
                  }
                }
              }

              & .montagem-text-col {
                & .montagem-text-row-1 {
                  display: flex;
                  flex-direction: row;
                  padding: 1rem 0 1rem 0;
                  align-items: center;

                  & .row-1-inner-col-1 {
                    display: flex;
                    flex-direction: column;
                    padding-right: 1rem;
                  }
                  & .row-1-inner-col-2 {
                    display: flex;
                    flex-direction: column;
                  }
                }
                & .montagem-text-row-2 {
                  display: inline-block;
                  padding: 1rem 0 1rem 0;
                  position: relative;
                  width: 100%;
                  align-items: center;

                  & .row-2-inner-col-1 {
                    float: left;

                    & .row-2-inner-row-1 {
                      font-size: 0.875rem;
                      line-height: 1.57;
                    }
                    & .row-2-inner-row-2 {
                      font-size: 0.875rem;
                      line-height: 1.57;
                      background-color: black;
                      color: #f5f5f5;
                      font-weight: 700;
                      padding: 0.25rem 0.5rem 0.25rem 0.5rem;
                      width: 7rem;
                      text-align: center;
                      margin: 0.75rem 0 1.5rem;
                    }
                  }
                  & .row-2-inner-col-2 {
                    position: absolute;
                    right: 0;
                    top: 20%;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
