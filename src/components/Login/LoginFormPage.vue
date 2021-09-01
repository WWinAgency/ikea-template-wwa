<template>
  <div class="loginFormPage">
    <div class="outter-col-1">
      <div class="inner-col">
        <div class="row-1">
          <span class="titulo text-dark"
            >Criar um perfil <span class="text-primary">IKEA Family</span></span
          >
        </div>
        <div class="row-2">
          Já tem conta?
          <a class="text-dark px-2" href="/login-page"> Iniciar sessão</a>
        </div>
        <div class="row-3">
          <div class="grid-container">
            <div class="container-left">
              <div class="grid-row-1">
                <img src="https://picsum.photos/1000/960?random=1" />
              </div>
              <div class="grid-row-2">
                <img src="https://picsum.photos/1000/960?random=2" />
              </div>
              <div class="grid-row-3">
                <img src="https://picsum.photos/1000/960?random=3" />
              </div>
              <div class="grid-row-4">
                <img src="https://picsum.photos/1000/960?random=4" />
              </div>
            </div>
            <div class="container-right">
              <div class="grid-row-5">
                <img src="https://picsum.photos/1000/960?random=5" />
              </div>
              <div class="grid-row-6">
                <img src="https://picsum.photos/1000/960?random=6" />
              </div>
              <div class="grid-row-7">
                <img src="https://picsum.photos/1000/960?random=7" />
              </div>
              <div class="grid-row-8">
                <img src="https://picsum.photos/1000/960?random=8" />
              </div>
              <div class="grid-row-9">
                <img src="https://picsum.photos/1000/960?random=9" />
              </div>
            </div>
          </div>
          <div class="mobileImage">
            <img src="https://picsum.photos/1000/450?random=1" />
          </div>
        </div>
      </div>
    </div>
    <div class="outter-col-2">
      <div class="inner-col">
        <div class="row-1">
          <div class="inner-col">
            <div class="inner-row-1">
              Quer aderir a IKEA Family gratuitamente?
            </div>
            <div class="inner-row-2">
              <div class="row-2-col-1">
                <a class="input1" @click="checkIkeaFamily()">
                  <b-icon
                    v-if="ikeaFamily === true"
                    icon="circle-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="circle"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="row-2-col-2">
                Sim, quero aproveitar ofertas, descontos e muito mais!
                <a class="text-dark" href="/mais-informacoes"
                  >Mais informações</a
                >
              </div>
            </div>
            <div class="inner-row-3">
              <div class="row-3-col-1">
                <a class="input1" @click="checkIkeaFamily()">
                  <b-icon
                    v-if="ikeaFamily === false"
                    icon="circle-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="circle"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="row-3-col-2">
                Não, eu só quero criar um perfil e não receber nenhum benefício
                adicional.
                <a class="text-dark" href="/mais-informacoes"
                  >Mais informações</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="row-2">
          <div class="inner-col">
            <div class="row">
              <input class="input" type="text" placeholder="Nome" />
            </div>
            <div class="row">
              <input class="input" type="text" placeholder="Apelido" />
            </div>
            <div class="row">
              <input class="input" type="text" placeholder="Telemóvel" />
            </div>
            <div class="row">
              <input
                class="input"
                type="text"
                placeholder="Data de nascimento"
              />
            </div>
            <div class="row">
              <input
                class="input"
                type="text"
                placeholder="Número de identificação fiscal (opcional)"
              />
            </div>
            <div class="row">
              <input class="input" type="text" placeholder="Endereço" />
            </div>
            <div class="row">
              <input class="input" type="text" placeholder="Localidade" />
            </div>
            <div class="row">
              <input class="input" type="text" placeholder="Código postal" />
            </div>
            <div class="row">
              <select class="select">
                <option value="" disabled selected>Loja preferida</option>
                <option value="alfragide">Alfragide</option>
                <option value="braga">Braga</option>
                <option value="loule">Loulé</option>
                <option value="loures">Loures</option>
                <option value="matosinhos">Matosinhos</option>
              </select>
            </div>
            <div class="row">
              <input
                class="input"
                type="text"
                placeholder="Email (nome de utilizador)"
              />
            </div>
            <div class="row">
              <input
                class="input"
                type="password"
                placeholder="Palavra-passe"
              />
            </div>
          </div>
        </div>
        <div class="row-3">
          <div class="inner-col">
            <div class="row-1">
              <div class="col-1">
                <a class="input1" @click="checkGlobal()">
                  <b-icon
                    v-if="email === false && sms === false"
                    icon="square"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="check-square-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="col-2">
                Gostaria de receber notícias, sugestões e ofertas de marketing
                da IKEA
              </div>
            </div>
            <div class="row-2">
              <div class="col-1">
                <a class="input1" @click="checkEmail()">
                  <b-icon
                    v-if="email === false"
                    icon="square"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="check-square-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="col-2">Via e-mail</div>
            </div>
            <div class="row-3">
              <div class="col-1">
                <a class="input1" @click="checkSMS()">
                  <b-icon
                    v-if="sms === false"
                    icon="square"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="check-square-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="col-2">Via Via SMS</div>
            </div>
            <div class="row-4">
              <div class="col-1">
                <a class="input1" @click="checkTerms()">
                  <b-icon
                    v-if="terms === false"
                    icon="square"
                    scale="1.6"
                    variant="dark"
                  ></b-icon>
                  <b-icon
                    v-else
                    icon="check-square-fill"
                    scale="1.6"
                    variant="dark"
                  ></b-icon
                ></a>
              </div>
              <div class="col-2">
                Li e entendi a Termos e Condições e Política de privacidade.
              </div>
            </div>
          </div>
        </div>
        <div class="row-4">
          <button class="submit" type="submit">Criar Perfil</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import detectMobileMixin from "../../mixins/detectMobileMixin";
export default {
  mixins: [detectMobileMixin],
  data() {
    return {
      ikeaFamily: true,
      email: false,
      sms: false,
      terms: false,
    };
  },
  methods: {
    checkIkeaFamily() {
      this.ikeaFamily = !this.ikeaFamily;
      console.log(this.ikeaFamily);
    },
    checkGlobal() {
      this.email = !this.email;
      this.sms = !this.sms;
    },
    checkEmail() {
      this.email = !this.email;
    },
    checkSMS() {
      this.sms = !this.sms;
    },
    checkTerms() {
      this.terms = !this.terms;
    },
  },
};
</script>

<style lang="scss">
.loginFormPage {
  display: flex;
  flex-direction: row;
  height: 100%;
  margin-top: 4rem;
  margin-bottom: 6rem;

  @media (max-width: 800px) {
    flex-direction: column;
  }

  & .outter-col-1 {
    display: flex;
    width: 40%;
    height: 100% !important;
    @media (max-width: 800px) {
      width: 100%;
    }
    & .inner-col {
      display: flex;
      height: auto;
      flex-direction: column;

      width: 100%;
      & .row-1 {
        display: flex;
        font-size: 2.25rem;
        font-weight: 700;
      }
      & .row-2 {
        display: flex;
        margin: 0;
      }
      & .row-3 {
        display: flex;
        height: 100%;
        & .grid-container {
          display: flex;
          flex-direction: row;
          height: max-content;
          width: 100%;

          @media (max-width: 800px) {
            display: none;
          }
          & .container-left {
            height: 100%;
            width: 50%;
            display: flex;
            flex-direction: column;
            padding-right: 0.25rem;
            margin-bottom: 5rem;
            & .grid-row-1 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                border-radius: 8px;
                width: 100%;
                height: 100%;
              }
            }
            & .grid-row-2 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-3 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-4 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
          }

          & .container-right {
            height: 110%;
            width: 50%;
            display: flex;
            flex-direction: column;
            padding-left: 0.25rem;
            & .grid-row-5 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-6 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-7 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-8 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
            & .grid-row-9 {
              width: 100%;
              padding-bottom: 0.5rem;
              & img {
                width: 100%;
                height: 100%;
                border-radius: 8px;
              }
            }
          }
        }
        & .mobileImage {
          display: none;

          @media (max-width: 800px) {
            display: flex;
          }
        }
      }
    }
  }
  & .outter-col-2 {
    width: 60%;
    padding: 0 4rem 0 4rem;
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
      width: 100%;
      padding: 3rem 0 0 0.3rem;
    }
    & .inner-col {
      & .row-1 {
        & .inner-col {
          & .inner-row-1 {
            margin-bottom: 2rem;
            font-weight: 700;
            font-size: 0.975rem;
            line-height: 1.71429;
            height: auto;
            width: 100%;
          }
          & .inner-row-2 {
            align-items: center;
            margin-bottom: 1.25rem;
            display: flex;
            flex-direction: row;
            width: 100%;

            & .row-2-col-1 {
              width: 10%;
              padding-right: 3rem;
              & .input1 {
                font-size: 15px;
              }
            }
            & .row-2-col-2 {
            }
          }
          & .inner-row-3 {
            align-items: center;
            margin-bottom: 2.5rem;
            display: flex;
            flex-direction: row;
            height: auto;
            width: 100%;

            & .row-3-col-1 {
              width: 10%;
              padding-right: 3rem;
              & .input1 {
                font-size: 15px;
              }
            }
            & .row-3-col-2 {
            }
          }
        }
      }
      & .row-2 {
        & .inner-col {
          & .row {
            margin-bottom: 2.5rem;
            & .input {
              font-size: 15px;
              border: none;
              border-bottom: 1px solid black;

              &::placeholder {
                opacity: 1;
                color: black;
              }
            }

            & .select {
              font-size: 15px;
              color: black;
              border: none;
              border-bottom: 1px solid #212529;
              border-color: black;
            }
          }
        }
      }
      & .row-3 {
        & .inner-col {
          width: 100%;
          & .row-1 {
            display: flex;
            width: 100%;
            align-items: center;
            margin: 0 0 1.25rem 0;
            & .col-1 {
              width: 10%;
              & input {
              }
            }
            & .col-2 {
              width: 90%;
            }
          }
          & .row-2 {
            display: flex;
            width: 100%;
            align-items: center;
            margin: 0 0 1.25rem 3rem;
            & .col-1 {
              width: 10%;
              & input {
              }
            }
            & .col-2 {
              width: 90%;
            }
          }
          & .row-3 {
            display: flex;
            width: 100%;
            align-items: center;
            margin: 0 0 3rem 3rem;
            & .col-1 {
              width: 10%;
              & input {
              }
            }
            & .col-2 {
              width: 90%;
            }
          }
          & .row-4 {
            display: flex;
            width: 100%;
            align-items: center;
            & .col-1 {
              width: 10%;
              & input {
              }
            }
            & .col-2 {
              width: 90%;
            }
          }
        }
      }

      & .row-4 {
        margin-top: 3rem !important;
        & .submit {
          height: 3.5rem;
          padding: 0 2.5rem;
          width: 100%;
          color: white;
          background-color: black;
          border: 1px solid black;
          border-radius: 40px;
          font-weight: 700;
          font-size: 0.875rem;
          line-height: 1.42857;
          text-align: center;

          &:hover {
            background-color: #212529;
            border: 1px solid #212529;
          }
        }
      }
    }
  }
}
</style>
