<template>
  <div class="sidebar">
    <button class="sidebar-button" v-b-toggle.sidebar-1>
      <b-icon icon="list" scale="1.6" variant="dark"></b-icon>
    </button>
    <b-sidebar id="sidebar-1">
      <transition name="slide-fade-1">
        <div
          class="menu-principal px-3 py-2"
          v-if="
            planeieASuaCompra == false &&
              precosEspeciais == false &&
              inpiracao == false &&
              produtosSustentaveis == false
          "
        >
          <ul class="menu-logo">
            <li>
              <a class="sidebar-logo" href="/">
                <div class="header-logo d-flex align-items-center">
                  <div class="logo align-items-center mb-1">
                    <a class="brand" href="/">IKEA</a>
                  </div>
                </div>
              </a>
            </li>
          </ul>
          <ul class="row-1">
            <li class="menu-item">
              <a class="item" @click="planeieASuaCompra = !planeieASuaCompra">
                <strong> Planeie a sua compra </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" @click="precosEspeciais = !precosEspeciais">
                <strong> Preços Especiais </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" @click="inpiracao = !inpiracao">
                <strong> Inspiração </strong></a
              >
            </li>
            <li class="menu-item">
              <a
                class="item"
                @click="produtosSustentaveis = !produtosSustentaveis"
              >
                <strong> Produtos sustentáveis </strong></a
              >
            </li>
            <li class="menu-item">
              <strong> -------------------------------- </strong>
            </li>
          </ul>
          <ul class="row-1">
            <li class="menu-item">
              <a class="item" href="/pagina-produto"
                ><strong> Página de Produto </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/pagina-de-loja">
                <strong> Página de Loja </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/pagina-politica-privacidade">
                <strong> Política de Privacidade </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/favoritos">
                <strong> Favoritos </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/lista-de-favoritos">
                <strong> Lista De Favoritos </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/comparacao-produtos">
                <strong> Comparação Produtos </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/login-page">
                <strong> Página de Login </strong></a
              >
            </li>
            <li class="menu-item">
              <a class="item" href="/login-form-page">
                <strong> Formulário Login </strong></a
              >
            </li>
          </ul>
          <ul class="row-2">
            <li class="menu-item">
              <a class="item" href="/#novidades"> Novidades </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#moveis"> Móveis </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#arrumacao"> Arrumação </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#camas-e-colchoes"> Camas e colchões </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#sofas"> Sofás </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#exterior"> Exterior </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#verao"> Verão </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#escritorio-em-casa">
                Escritório em casa
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#decoracao"> Decoração </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#texteis"> Têxteis </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#ikea-das-criancas"> IKEA das crianças </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#cozinha-e-eletrodomesticos">
                Cozinha e eletrodomésticos
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#cozinhar-e-mesa"> Cozinhar e à mesa </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#iluminacao"> Iluminação </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#casa-de-banho"> Casa de banho </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#tapetes-e-pavimento">
                Tapetes e pavimento
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#plantas-vasos-e-floreiras">
                Plantas, vasos e floreiras
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#melhorias-em-casa"> Melhorias em casa </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#aparelhos-eletronicos">
                Aparelhos eletrónicos
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#home-smart"> Home smart </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#animais"> Animais </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#lavagem-de-roupa-e-limpeza">
                Lavagem de roupa e limpeza
              </a>
            </li>
            <li class="menu-item">
              <a class="item" href="/#cozinha-sueca"> Cozinha Sueca </a>
            </li>
          </ul>
          <ul class="row-3">
            <li class="menu-item">
              <div class="language-dropdown">
                <select aria-label="Selecione o seu idioma preferido">
                  <option value="#"> Português </option>
                  <option value="#"> English </option>
                </select>
              </div>
            </li>
            <li class="menu-item">
              <div class="change-country">
                <b-button class="button-country"
                  ><b-icon icon="globe" scale="0.9" variant="dark"></b-icon>
                  Mudar de país
                </b-button>
              </div>
            </li>
          </ul>
        </div>
      </transition>

      <!-- --------------------------------- PLANEIE A SUA COMPRA MENU ------------------------------ -->
      <transition name="slide-fade-2">
        <div class="menu-planeie px-3 py-2" v-if="planeieASuaCompra == true">
          <div class="inner-col">
            <div class="row-1">
              <ul class="menu-logo">
                <li>
                  <a class="sidebar-logo" href="/">
                    <div class="header-logo d-flex align-items-center">
                      <div class="logo align-items-center mb-1">
                        <a class="brand" href="/">IKEA</a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row-2">
              <div class="inner-col-1">
                <a @click="planeieASuaCompra = !planeieASuaCompra"
                  ><b-icon icon="arrow-left" scale="1.5" variant="dark"></b-icon
                ></a>
              </div>
              <div class="inner-col-2">
                <div class="inner-row-1">Planeie a sua compra</div>
                <div class="inner-row-2">
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a class="item" href="/right">Comprar na IKEA</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-produto"
                        >Siga a sua encomenda</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja">
                        Perguntas frequentes</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-politica-privacidade">
                        Os nossos serviços</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/favoritos"> IKEA Family</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/lista-de-favoritos">
                        IKEA para Negócios</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- --------------------------------- PLANEIE A SUA COMPRA MENU ------------------------------ -->

      <!-- --------------------------------- PREÇOS ESPECIAIS ------------------------------ -->
      <transition name="slide-fade-2">
        <div
          class="menu-precos-especiais px-3 py-2"
          v-if="precosEspeciais == true"
        >
          <div class="inner-col">
            <div class="row-1">
              <ul class="menu-logo">
                <li>
                  <a class="sidebar-logo" href="/">
                    <div class="header-logo d-flex align-items-center">
                      <div class="logo align-items-center mb-1">
                        <a class="brand" href="/">IKEA</a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row-2">
              <div class="inner-col-1">
                <a @click="precosEspeciais = !precosEspeciais"
                  ><b-icon icon="arrow-left" scale="1.5" variant="dark"></b-icon
                ></a>
              </div>
              <div class="inner-col-2">
                <div class="inner-row-1">Preços especiais</div>
                <div class="inner-row-2">
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a class="item" href="/right">Preço ainda mais baixo</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-produto">Promoções</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"> Essenciais</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- --------------------------------- PREÇOS ESPECIAIS ------------------------------ -->
      <!-- --------------------------------- INSPIRAÇÃO ------------------------------ -->
      <transition name="slide-fade-2">
        <div class="menu-precos-especiais px-3 py-2" v-if="inpiracao == true">
          <div class="inner-col">
            <div class="row-1">
              <ul class="menu-logo">
                <li>
                  <a class="sidebar-logo" href="/">
                    <div class="header-logo d-flex align-items-center">
                      <div class="logo align-items-center mb-1">
                        <a class="brand" href="/">IKEA</a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row-2">
              <div class="inner-col-1">
                <a @click="inpiracao = !inpiracao"
                  ><b-icon icon="arrow-left" scale="1.5" variant="dark"></b-icon
                ></a>
              </div>
              <div class="inner-col-2">
                <div class="inner-row-1">Inspiração</div>
                <div class="inner-row-2">
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a class="item" href="/right">Casa</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-produto">Ideias</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Escola da Casa, temporada 5</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Os dias são para ser vividos. As noites para ser
                        dormidas</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- --------------------------------- INSPIRAÇÃO ------------------------------ -->
      <!-- --------------------------------- PRODUTOS SUSTENTÁVEIS ------------------------------ -->
      <transition name="slide-fade-2">
        <div
          class="menu-precos-especiais px-3 py-2"
          v-if="produtosSustentaveis == true"
        >
          <div class="inner-col">
            <div class="row-1">
              <ul class="menu-logo">
                <li>
                  <a class="sidebar-logo" href="/">
                    <div class="header-logo d-flex align-items-center">
                      <div class="logo align-items-center mb-1">
                        <a class="brand" href="/">IKEA</a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="row-2">
              <div class="inner-col-1">
                <a @click="produtosSustentaveis = !produtosSustentaveis"
                  ><b-icon icon="arrow-left" scale="1.5" variant="dark"></b-icon
                ></a>
              </div>
              <div class="inner-col-2">
                <div class="inner-row-1">Produtos Sustentaveis</div>
                <div class="inner-row-2">
                  <ul class="menu-list">
                    <li class="menu-item">
                      <a class="item" href="/right"
                        >Um mundo melhor começa em casa</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-produto"
                        >Painéis Solares SOLTRALE</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Escola da Casa, temporada 5</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Materiais sustentáveis</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Casas sustentáveis</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Alimentos sustentáveis</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Móveis sustentáveis</a
                      >
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja">Poupar água</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja">Poupar energia</a>
                    </li>
                    <li class="menu-item">
                      <a class="item" href="/pagina-de-loja"
                        >Reduzir o desperdício</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>

      <!-- --------------------------------- PRODUTOS SUSTENTÁVEIS ------------------------------ -->
    </b-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      planeieASuaCompra: false,
      precosEspeciais: false,
      inpiracao: false,
      produtosSustentaveis: false,
    };
  },
};
</script>

<style lang="scss">
.slide-fade-1-enter-active,
.slide-fade-1-leave-active {
  transition: all 1s 0.2s;
}
.slide-fade-1-enter,
.slide-fade-1-leave-active {
  opacity: 0;
}
.slide-fade-1-enter {
  transform: translateX(100px);
}
.slide-fade-1-leave-active {
  transform: translateX(-100px);
}
.slide-fade-2-enter-active,
.slide-fade-2-leave-active {
  transition: all 2s 0.2s;
}
.slide-fade-2-enter,
.slide-fade-2-leave-active {
  opacity: 0;
}
.slide-fade-2-enter {
  transform: translateX(300px);
}
.slide-fade-2-leave-active {
  transform: translateX(-200px);
}

.b-sidebar {
  width: 450px !important;

  @media (max-width: 380px) {
    width: 100% !important;
  }

  &-body {
    scrollbar-width: none;
  }
}

.menu-planeie {
  & .inner-col {
    display: flex;
    flex-direction: column;

    & .row-1 {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 2rem;
      padding-right: 6rem;
      align-items: center;
    }

    & .row-2 {
      display: flex;
      flex-direction: row;
      padding: 0 4rem 0 4rem;
      width: 100%;

      & .inner-col-1 {
        width: 20%;
      }
      & .inner-col-2 {
        width: 80%;

        & .inner-row-1 {
          text-align: left;
          font-size: 1.375rem;
          line-height: 1.36;
          font-weight: 700;
          letter-spacing: -0.0075rem;
          color: black;
        }

        & .inner-row-2 {
          & .menu-list {
            list-style: none;
            padding: 2rem 0 0 0;
          }
        }
      }
    }
  }
}
.menu-precos-especiais {
  & .inner-col {
    display: flex;
    flex-direction: column;

    & .row-1 {
      display: flex;
      flex-direction: row;
      width: 100%;
      padding-left: 2rem;
      padding-right: 6rem;
      align-items: center;
    }

    & .row-2 {
      display: flex;
      flex-direction: row;
      padding: 0 4rem 0 4rem;
      width: 100%;

      & .inner-col-1 {
        width: 20%;
      }
      & .inner-col-2 {
        width: 80%;

        & .inner-row-1 {
          text-align: left;
          font-size: 1.375rem;
          line-height: 1.36;
          font-weight: 700;
          letter-spacing: -0.0075rem;
          color: black;
        }

        & .inner-row-2 {
          & .menu-list {
            list-style: none;
            padding: 2rem 0 0 0;
          }
        }
      }
    }
  }
}

.sidebar {
  & .sidebar-button {
    border: none;
    margin-right: 1.5rem;
    transition: width 2s, height 2s, transform 2s;
    background-color: white !important;

    &:hover {
      transform: rotate(180deg);
    }

    @media (max-width: 950px) {
      margin-top: 0.2rem;
      margin-right: 0;
    }
  }
}

.close {
  border: none !important;
  background-color: #f8f9fa !important;
  transition: width 2s, height 2s, transform 2s;

  &:hover {
    transform: rotate(180deg);
  }
}

.menu-logo {
  list-style: none;
  margin: 1rem 0 3rem 0rem !important;
  padding: 0 0 0 2rem !important;
  text-decoration: none;

  & .sidebar-logo {
    text-decoration: none;
    & .header-logo {
      @media (max-width: 950px) {
        margin-left: 0rem;
      }

      & .brand {
        background-color: blue;
        color: yellow;
        text-decoration: none;
        font-weight: 700;
        padding: 0.5rem 2rem 0.5rem 2rem;
        text-align: center;
      }
    }
  }
}

.row-1 {
  list-style: none;

  & .menu-item {
    margin: 8px auto;

    & .item {
      text-decoration: none;
      color: black;
      font-size: 0.875rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.row-2 {
  list-style: none;
  margin-top: 3rem;

  & .menu-item {
    margin: 8px auto;

    & .item {
      text-decoration: none;
      color: black;
      font-size: 0.875rem;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
.row-3 {
  list-style: none;
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;

  & .menu-item {
    & .change-country {
      & .button-country {
        border-radius: 64px;
        font-size: 0.75rem !important;
        border: 1px solid lightgray;
        width: 8rem;
        height: 2.5rem;
        color: black;
        background-color: white;
        margin-left: 10px;

        &:hover {
          border: 1px solid black;
        }
      }
    }
    & select {
      border-radius: 64px;
      width: 7rem;
      height: 2.5rem;
      padding: 0.5rem;
      font-size: 0.75rem !important;
      border: 1px solid lightgray;
      &:hover {
        border: 1px solid black;
      }
    }
  }
}
</style>
