<template>
  <div class="sidebarPartilha">
    <button class="sidebar-button" v-b-toggle.sidebar-share>
      <span class="button-icon">
        <b-icon icon="box-arrow-up" scale="1.5" variant="dark"></b-icon
      ></span>
      <span class="button-text">
        <strong>Partilhar</strong>
      </span>
    </button>
    <b-sidebar id="sidebar-share">
      <div class="px-3 py-2">
        <ul class="menu-logo">
          <li>
            <a href="#"
              ><b-icon icon="shop" scale="3" variant="dark"></b-icon
            ></a>
          </li>
        </ul>
        <ul class="row-1">
          <li class="menu-item">
            <a class="item" href="/"><strong> HomePage</strong></a>
          </li>
          <li class="menu-item">
            <a class="item" href="/right"><strong> HomePage Right</strong></a>
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-de-produto"
              ><strong> Página de Produto </strong></a
            >
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-de-produto-right"
              ><strong> Página de Produto Right </strong></a
            >
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-de-loja">
              <strong> Página de Loja </strong></a
            >
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-de-loja-right">
              <strong> Página de Loja Right </strong></a
            >
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-politica-privacidade">
              <strong> Política de Privacidade </strong></a
            >
          </li>
          <li class="menu-item">
            <a class="item" href="/pagina-politica-privacidade-right">
              <strong> Política de Privacidade Right </strong></a
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
            <a class="item" href="/#escritorio-em-casa"> Escritório em casa </a>
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
                ><b-icon icon="globe" scale="0.9" variant="dark"></b-icon> Mudar
                de país
              </b-button>
            </div>
          </li>
        </ul>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.b-sidebar {
  width: 450px !important;

  @media (max-width: 380px) {
    width: 100% !important;
  }
}

.sidebarPartilha {
  & .sidebar-button {
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: black;
    text-decoration: none;
    border-radius: 64px;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    width: auto;
    max-width: 2.5rem;
    -webkit-transition: max-width 0.5s;
    transition: max-width 0.5s;

    &:hover {
      max-width: 20rem;
      padding: 0 1rem 0 1rem;
      background-color: #c8c8c8;
      border: 1px solid #c8c8c8;
    }

    @media (max-width: 1200px) {
      overflow: inherit;
      max-width: 20rem;
      padding: 0 1rem 0 1rem;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
    }

    & .button-icon {
      padding-left: 6px;
      display: flex;
      align-items: center;
    }

    & .button-text {
      white-space: nowrap;
      padding-left: 1rem;
      font-size: 0.8rem;
      line-height: 1.3333333333;
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
  margin: auto auto 48px 16px;
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
