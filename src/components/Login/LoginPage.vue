<template>
  <div class="loginPage">
    <div class="col-1">
      <div class="inner-col">
        <div class="row-1">
          <div class="row-1-col-1">
            <a @click="$router.go(-1)">
              <b-icon icon="arrow-left" scale="1.6" variant="light"></b-icon>
            </a>
          </div>
          <div class="row-1-col-2">
            <div class="inner-square">
              <div class="inner-circle"><div class="inner-text">IKEA</div></div>
            </div>
          </div>
        </div>
        <div class="row-2">
          <div class="row-2-col">
            <div class="row-1">
              <span class="normal-text">
                Hej!
                <span class="entre-text"> Entre </span>
                na sua conta IKEA</span
              >
            </div>
            <div class="row-2">Demasiadas palavras-passe?</div>
            <div class="row-3">
              Pode agora iniciar sessão com um código único e temporário que
              vamos enviar para o seu endereço de e-mail ou para o número de
              telemóvel confirmado que tenha registado na sua conta IKEA.
            </div>
            <div class="row-4">
              Aceda à sua conta IKEA com o seu endereço de e-mail para adicionar
              e confirmar o seu número de telemóvel.
            </div>
          </div>
        </div>
        <div class="row-3">
          <div class="row-3-col">
            <div class="row-1">
              <span class="row-1-text">
                IKEA.pt -
                <a class="link-cookies" href="/politica-cookies">
                  Política de Cookies
                </a>
                e
                <a class="link-privacidade" href="/politica-privacidade">
                  Política de Privacidade</a
                >
              </span>
            </div>

            <div class="row-2">© Inter IKEA Systems B.V. 1999-2021</div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="col-2-inner-container">
        <div class="container-email">
          <input class="input" type="text" placeholder="E-mail ou Telemóvel" />
          <span class="bottom-input">
            <span class="alternativa">Alternativa: </span>
            <a class="codigo-unico" href="/codigo-unico"
              >Início de sessão com um código único</a
            ></span
          >
          <span v-if="inputSubmit == false" class="warning-input"
            >A IKEA.pt não o conhece... por enquanto. Pedimos-lhe que se
            identifique.
          </span>
        </div>
        <div class="container-password">
          <input class="input" type="text" placeholder="Palavra-passe" />
          <span class="bottom-input">
            <a class="esqueceu-password" href="/esqueceu-password"
              >Esqueceu-se da sua palavra passe?</a
            ></span
          >
          <span v-if="inputSubmit == false" class="warning-input"
            >Não é possível iniciar sessão sem palavra-passe
          </span>
        </div>
        <div class="continuar">
          <button class="btn-continuar">Continuar</button>
        </div>
        <div class="criar-conta">
          <button class="btn-criar-conta">Criar conta</button>
        </div>

        <div class="politicas">
          <div class="row-1">
            <span class="row-1-text">
              IKEA.pt -
              <a class="link-cookies" href="/politica-cookies">
                Política de Cookies
              </a>
              e
              <a class="link-privacidade" href="/politica-privacidade">
                Política de Privacidade</a
              >
            </span>
          </div>

          <div class="row-2">© Inter IKEA Systems B.V. 1999-2021</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputSubmit: false,
    };
  },
};
</script>

<style lang="scss">
input:focus,
textarea:focus,
select:focus {
  outline: none;
}

.loginPage {
  height: 100vh;
  display: flex;
  flex-direction: row;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  & .col-1 {
    display: flex;
    flex-direction: column;
    width: 40%;
    height: auto;
    background-color: rgb(0, 88, 163);
    padding: 2rem 4rem;
    align-items: flex-end;
    @media (max-width: 800px) {
      flex-direction: row;
      width: 100%;
      height: 30%;
      margin: 0;
      padding: 2rem;
    }

    & .inner-col {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      width: auto;

      @media (max-width: 800px) {
        flex-direction: column;
        width: 100%;
        height: 50%;
        margin: auto;
        align-items: center;
      }

      @media (max-width: 800px) {
        justify-content: center;
        width: 100%;
      }

      & .row-1 {
        width: 100%;
        display: flex;
        align-items: center;
        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 0 1rem 0;
          height: auto;
        }
        & .row-1-col-1 {
          width: 10%;
          @media (max-width: 800px) {
            width: 100%;
            align-items: flex-start;
          }
        }
        & .row-1-col-2 {
          width: 90%;
          padding-left: 1rem;

          & .inner-square {
            background-color: white;
            height: 2.5rem;
            width: 6rem;
            display: flex;
            justify-content: center;
            align-items: center;

            @media (max-width: 800px) {
              display: none;
            }
            & .inner-circle {
              background-color: rgb(0, 88, 163);
              width: 6rem;
              height: 2.5rem;
              border-radius: 6rem / 2.5rem;
              display: flex;
              justify-content: center;
              align-items: center;

              & .inner-text {
                display: flex;
                align-items: center;
                padding-bottom: 0.1rem;
                height: 2.5rem;
                text-align: center;
                color: white;
                font-size: 2rem;
                font-weight: 700;
              }
            }
          }
        }
      }

      & .row-2 {
        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 0 0 1rem 0;
          height: auto;
        }
        & .row-2-col {
          @media (max-width: 800px) {
            display: flex;
            flex-direction: column;
          }
          & .row-1 {
            @media (max-width: 800px) {
              width: 100%;
              align-items: flex-start;
              margin: 0;
            }
            & .normal-text {
              font-size: 32px;
              line-height: 1.33333;
              letter-spacing: -0.04rem;
              font-weight: 700;
              color: white;

              @media (max-width: 800px) {
                font-size: 24px;
              }
            }
            & .entre-text {
              font-size: 32px;
              line-height: 1.33333;
              letter-spacing: -0.04rem;
              font-weight: 700;
              color: rgb(251, 217, 20);
              @media (max-width: 800px) {
                font-size: 24px;
              }
            }
          }
          & .row-2 {
            line-height: 20px;
            padding-top: 14px;
            margin-bottom: 0px;
            color: white;
            font-size: 14px;
          }
          & .row-3 {
            line-height: 20px;

            margin: 0;
            color: white;
            font-size: 14px;
          }
          & .row-4 {
            line-height: 20px;
            margin-bottom: 0px;
            color: white;
            font-size: 14px;
          }
        }
      }

      & .row-3 {
        display: flex;
        flex-direction: column;
        @media (max-width: 800px) {
          display: none;
        }
        & .row-3-col {
          & .row-1 {
            color: white;

            & .row-1-text {
              color: white;
              font-size: 11px;
              line-height: 1.71429;
              & .link-cookies {
                color: white;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
              & .link-privacidade {
                color: white;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
          & .row-2 {
            margin: 0;
            color: white;
            font-size: 11px;
            line-height: 1.71429;
          }
        }
      }
    }
  }
  & .col-2 {
    height: 100%;
    width: 60%;
    padding: 2rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      margin-top: 4rem;
      height: 50%;
      width: 100%;
      padding: 2rem;
    }

    & .col-2-inner-container {
      width: 28rem;
      @media (max-width: 800px) {
        width: 100%;
      }

      & .container-email {
        display: flex;
        flex-direction: column;
        margin-bottom: 4rem;

        & .input {
          border: 0;
          border-bottom: 1px solid black !important;
          margin-bottom: 0.3rem;
          padding: 0.2rem;
        }

        & .bottom-input {
          & .alternativa {
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.71429;
          }
          & .codigo-unico {
            color: #484848;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 1.71429;
          }
        }

        & .warning-input {
          color: #e00751;
          font-size: 0.75rem;
          line-height: 1.5;
        }
      }
      & .container-password {
        display: flex;
        flex-direction: column;

        & .input {
          border: 0;
          border-bottom: 1px solid black !important;
          margin-bottom: 0.3rem;
          padding: 0.2rem;
        }

        & .bottom-input {
          & .esqueceu-password {
            color: #484848;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 1.71429;
          }
        }
      }

      & .continuar {
        margin-top: 3rem;
        & .btn-continuar {
          width: 100%;
          background-color: #0058a3;
          border: 1px solid #0058a3;
          border-radius: 40px;
          padding: 0 2.5rem;
          height: 3.5rem;
          color: white;
          font-weight: 700;
        }
      }
      & .criar-conta {
        margin-top: 1rem;
        & .btn-criar-conta {
          width: 100%;
          background-color: #f5f5f5;
          border: 1px solid #f5f5f5;
          border-radius: 40px;
          padding: 0 2.5rem;
          height: 3.5rem;
          color: black;
          font-weight: 700;

          &:hover {
            background-color: #c8c8c8;
            border: 1px solid #c8c8c8;
          }
        }
      }

      & .politicas {
        display: none;
        margin-top: 2rem;

        @media (max-width: 800px) {
          display: flex;
          flex-direction: column;
          width: 100%;
          justify-content: center;
          align-items: center;
        }
        & .row-1 {
          color: black;

          & .row-1-text {
            color: black;
            font-size: 11px;
            line-height: 1.71429;
            & .link-cookies {
              color: black;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
            & .link-privacidade {
              color: black;
              text-decoration: none;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
        & .row-2 {
          margin: 0;
          color: black;
          font-size: 11px;
          line-height: 1.71429;
        }
      }
    }
  }
}
</style>
