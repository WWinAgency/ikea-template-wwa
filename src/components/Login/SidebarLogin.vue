<template>
  <div class="sidebarLogin">
    <button class="sidebar-button" v-b-toggle.sidebar-share>
      <span class="button-icon">
        <b-icon icon="person" scale="1.2" variant="dark"></b-icon
      ></span>
    </button>
    <b-sidebar right id="sidebar-share">
      <div class="sidebar-col-1">
        <div class="row-1">
          <div class="row-1-col-1">Hej!</div>
          <div class="row-1-col-2">
            <li class="menu-item">
              <a href="/login-page" class="text-light item"
                ><strong> Login </strong></a
              >
            </li>
          </div>
        </div>
        <hr class="costum-hr" />
        <div class="row-2">
          <a class="login-hyperlink" href="/login-page">
            <div class="inner-row-1">Criar uma conta IKEA</div>
            <div class="inner-row-2">
              <div class="inner-col-1">
                Crie uma conta ou torne-se membro do IKEA Family. Aderir é fácil
                e gratuito
              </div>
              <div class="inner-col-2">
                <b-icon
                  icon="arrow-right-circle-fill"
                  scale="1.5"
                  variant="light"
                ></b-icon>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="sidebar-col-2">
        <div class="row-1"><a href="/favourites">Favoritos</a></div>
        <div class="row-2"><a href="/planificadores">Planificadores</a></div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sidebarLogin {
  .b-sidebar > .b-sidebar-header {
    position: relative;
    padding: 0;

    & .close {
      position: absolute;
      top: 2rem;
      right: 2rem;
      background-color: #0058a3 !important;
      border: none !important;
      transition: width 2s, height 2s, transform 2s;
      color: white !important;

      &:hover {
        transform: rotate(180deg);
      }
    }
  }
  .b-sidebar {
    width: 450px !important;

    @media (max-width: 380px) {
      width: 100% !important;
    }

    & .sidebar-col-1 {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 6rem 3rem 2rem 3rem;
      background-color: #0058a3;

      & .row-1 {
        display: flex;
        align-items: center;
        & .row-1-col-1 {
          width: 50%;
          text-align: left;
          font-size: 2.25rem;
          line-height: 1.3333333333;
          letter-spacing: -0.039375rem;
          font-weight: 700;
          color: white;
        }
        & .row-1-col-2 {
          text-align: right;
          width: 50%;
          height: 100%;

          & .btn-login {
            height: 2.5rem;
            width: 8rem;
            justify-content: center;
            align-items: center;
            padding: 0 1.5rem;
            font-size: 0.75rem;
            line-height: 1.3333333333;
            color: #111111;
            font-weight: 700;
            border-radius: 64px;
            background-color: #ffffff;
            border: 1px solid #ffffff;

            & .inner-button {
              display: flex;
              width: auto;
              height: 2.5rem;
              align-items: center;
              justify-content: center;
              text-decoration: none;
              color: #111111;
            }
          }
        }
      }

      & .costum-hr {
        color: white;
      }

      & .row-2 {
        margin: 0;
        & .login-hyperlink {
          color: white;
          text-decoration: none;

          &:hover {
            text-decoration: underline;
          }

          & .inner-row-1 {
            font-size: 0.875rem;
            line-height: 1.7142857143;
            font-weight: 700;
          }

          & .inner-row-2 {
            display: flex;
            align-items: center;
            & .inner-col-1 {
              width: 80%;
              text-align: left;
              font-size: 0.75rem;
            }
            & .inner-col-2 {
              width: 20%;
              text-align: right;
            }
          }
        }
      }
    }

    & .sidebar-col-2 {
      padding: 2.5rem 3rem 0 3rem;

      & .row-1 {
        margin: 0 0 1.25rem 0;
        & a {
          color: #111111;
          text-decoration: none;
          font-size: 0.875rem;
          line-height: 1.7142857143;

          &:hover {
            text-decoration: underline;
          }
        }
      }
      & .row-2 {
        margin: 0 0 1.25rem 0;
        & a {
          color: #111111;
          text-decoration: none;
          font-size: 0.875rem;
          line-height: 1.7142857143;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
  & .sidebar-button {
    color: black;
    text-decoration: none;
    background-color: white;
    border: none;
    width: 40px;
    height: 40px;

    & .button-icon {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0.7rem;
      border-radius: 64px;
      justify-content: center;
    }
  }
}
</style>
