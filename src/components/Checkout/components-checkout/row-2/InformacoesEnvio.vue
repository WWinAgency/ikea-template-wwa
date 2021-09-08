<template>
  <div class="informacoesEnvio">
    <div class="container">
      <div class="row-1">
        <h1>Para onde devemos enviar a sua encomenda</h1>
      </div>
      <div class="row-2">
        <div class="mb-3 form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="privado"
            checked
          />
          <label class="form-check-label" for="exampleRadios1">
            Cliente Privado
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="empresa"
          />
          <label class="form-check-label" for="exampleRadios2">
            Empresa
          </label>
        </div>
      </div>
      <div class="row-3">
        <div class="row-3-row-1">Informações fiscais</div>
        <div class="row-3-row-2">Tipo de documento</div>
        <div class="row-3-row-3">
          <select class="select">
            <option value="nif" selected>NIF</option>
            <option value="passaporte">Passaporte / Outro documento</option>
          </select>
        </div>
        <div class="row-3-row-4">
          <input class="input" type="text" placeholder="Número de documento" />
        </div>
      </div>
      <div class="row-4">
        <div class="titulo text-dark">Informações Pessoais</div>
        <input class="input" type="text" placeholder="Nome" />
        <input class="input" type="text" placeholder="Apelido" />
        <input class="input" type="text" placeholder="Endereço de e-mail" />
        <input
          class="input-end"
          type="text"
          placeholder="Número de telemóvel"
        />
        <div class="info">
          <div class="col-1">
            <b-icon
              class="info-circle"
              icon="info-circle"
              variant="primary"
              scale="1.2"
            ></b-icon>
          </div>
          <div class="col-2">
            O número que inserir terá de estar disponível para contacto por
            parte da empresa de entrega
          </div>
        </div>
      </div>
      <div class="row-5">
        <div class="titulo text-dark">
          Informações de entrega
        </div>
        <input class="mt-3 input" type="text" placeholder="Endereço" />
        <input
          v-if="endereco2 === true"
          class="input"
          type="text"
          placeholder="Linha de endereço 2"
        />
        <button @click="endereco2 = !endereco2" class="addEndereco">
          <div class="button-col-1">
            <b-icon
              v-if="endereco2 === false"
              class="plus"
              icon="plus"
              variant="dark"
              scale="1.2"
            ></b-icon>
            <b-icon
              v-else
              class="dash"
              icon="dash"
              variant="dark"
              scale="1.2"
            ></b-icon>
          </div>
          <div v-if="endereco2 === false" class="button-col-2">
            <strong>Adicione outra linha de endereço</strong>
          </div>
          <div v-else class="button-col-2">
            <strong>Remover 2ª linha de endereço</strong>
          </div>
        </button>
        <div class="localidade">
          <div class="row-1">
            <div class="col-1">
              <b-icon
                class="geo-alt"
                icon="geo-alt"
                variant="dark"
                scale="1.2"
              ></b-icon>
            </div>
            <div class="col-2">
              <div class="col-2-row-1">Código postal</div>
              <div class="col-2-row-2">1000-001</div>
            </div>
            <div class="col-3">
              <a class="text-dark" href="">Editar</a>
            </div>
          </div>
          <div class="row-2">
            <input class="input" type="text" placeholder="Localidade" />
          </div>
        </div>
      </div>
      <div class="row-6">
        <div class="enderecoFaturacao">
          <div class="row-1">
            <div class="col-1">
              <input class="form-check-input" type="checkbox" />
            </div>
            <div class="col-2">Adicionar endereço de faturação</div>
            <div class="col-3"><a href="">Saiba mais</a></div>
          </div>
          <div class="row-2">
            <div class="col-1">
              <input
                class="input"
                type="text"
                placeholder="Adicione o seu número de membro IKEA Family"
              />
            </div>
            <div class="col-2">
              <div class="row-1">IKEA</div>
              <div class="row-2">Family</div>
              <div class="row-3"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="row-7">
        <div class="row-1">
          <div class="col-1">
            <input class="form-check-input" type="checkbox" />
          </div>
          <div class="col-2">
            Ao clicar Continuar concorda com a nossa
            <a href="/pagina-politica-privacidade">Política de privacidade</a>
          </div>
        </div>
        <div class="row-2">
          <button @click="activateEntregaEspecifica" class="continuar">
            Continuar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      endereco2: false,
    };
  },
  props: {
    activateEntregaEspecifica: { type: Function },
  },
};
</script>

<style lang="scss">
.informacoesEnvio {
  width: 100% !important;
  & .container {
    max-width: 100%;
    @media (max-width: 1000px) {
      padding: 0;
    }
    & .row-1 {
      margin-bottom: 40px !important;
      & h1 {
        font-size: 2.25rem;
        letter-spacing: -0.03938rem;
        line-height: 1.33333;
        font-weight: 700;
      }
    }

    & .row-2 {
      display: flex;
      flex-direction: column;

      & .form-check {
        display: flex;
        align-items: center;
        & .form-check-input {
          margin-right: 1rem;
          width: 1.4rem;
          height: 1.4rem;
        }
      }
    }

    & .row-3 {
      display: flex;
      flex-direction: column;
      margin-top: 2rem !important;

      & .row-3-row-1 {
        width: 100%;
        margin-bottom: 2px !important;
        font-size: 1rem;
        line-height: 1.5;
        font-weight: 700;
      }
      & .row-3-row-2 {
        width: 100%;
        color: #484848;
        font-size: 0.7rem;
        margin-bottom: 0.5rem;
      }
      & .row-3-row-3 {
        width: 100%;
        margin-bottom: 2.5rem;
        & .select {
          width: 100%;
          font-size: 15px;
          color: black;
          border: none;
          border-bottom: 1px solid #212529;
          border-color: black;
        }
      }

      & .row-3-row-4 {
        width: 100%;
        margin-bottom: 2.5rem;
        & .input {
          width: 100%;
          font-size: 15px;
          border: none;
          border-bottom: 1px solid black;

          &::placeholder {
            opacity: 1;
            color: black;
          }
        }
      }
    }

    & .row-4 {
      & .titulo {
        margin-bottom: 2rem;
      }
      & .input {
        width: 100%;
        margin-bottom: 2.5rem;
        font-size: 15px;
        border: none;
        border-bottom: 1px solid black;

        &::placeholder {
          opacity: 1;
          color: black;
        }
      }
      & .input-end {
        width: 100%;
        margin-bottom: 0.2rem;
        font-size: 15px;
        border: none;
        border-bottom: 1px solid black;

        &::placeholder {
          opacity: 1;
          color: black;
        }
      }

      & .info {
        display: flex;
        align-items: top;
        & .col-1 {
          padding-left: 0.2rem;
          width: 10%;
          color: blue;
          margin-top: 0.3rem;
        }
        & .col-2 {
          width: 90%;
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
      }
    }

    & .row-5 {
      margin-top: 2rem;

      & .titulo {
      }

      & .input {
        width: 100%;
        margin-bottom: 2.5rem;
        font-size: 15px;
        border: none;
        border-bottom: 1px solid black;

        &::placeholder {
          opacity: 1;
          color: black;
        }
      }

      & .addEndereco {
        display: flex;
        background-color: white;
        border: none;
        padding: 0 2rem;
        border-radius: 40px;
        height: 3.5rem;
        align-items: center;

        &:hover {
          background: #e8e8e8;
        }
        & .button-col-1 {
          margin-right: 1rem;
        }
        & .button-col-2 {
        }
      }

      & .localidade {
        margin-top: 2rem;
        & .row-1 {
          display: flex;
          flex-direction: row !important;
          align-items: center !important;
          width: 100%;
          margin-bottom: 1.5rem !important;
          & .col-1 {
            width: 10%;
          }
          & .col-2 {
            width: 80%;
            display: flex;
            flex-direction: column;
            & .col-2-row-1 {
              font-size: 0.875rem !important;
              color: #333;
              line-height: 1.57;
              font-weight: normal;
              margin: 0 0 0.1rem 0;
            }
            & .col-2-row-2 {
              font-size: 0.875rem !important;
              color: #333;
              line-height: 1.57;
              font-weight: 700;
              margin: 0;
            }
          }
          & .col-3 {
            width: 10%;
            & a {
              color: #333;
              text-decoration: none;
              font-weight: 400;
              font-size: 0.875rem;
              line-height: 1.57;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }

    & .row-6 {
      width: 100%;
      & .enderecoFaturacao {
        width: 100%;
        & .row-1 {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          & .col-1 {
            width: 10%;

            & .form-check-input {
              width: 1.3rem;
              height: 1.3rem;
            }
          }

          & .col-2 {
            width: 70%;
            color: #484848;

            font-size: 0.875rem;
            line-height: 1.71429;
          }

          & .col-3 {
            width: 20%;
            text-align: right;

            & a {
              color: black;
              text-decoration: none;
              font-weight: 400;
              font-size: 0.875rem;
              line-height: 1.57;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }

        & .row-2 {
          display: flex !important;
          flex-direction: row !important;

          @media (max-width: 1000px) {
            flex-direction: column !important;
          }
          & .col-1 {
            width: 90% !important;
            margin-right: 0.5rem;
            & .input {
              width: 100%;
              font-size: 15px;
              border: none;
              border-bottom: 1px solid black;

              &::placeholder {
                opacity: 1;
                color: black;
              }
            }
          }

          & .col-2 {
            background-color: blue;
            width: 10% !important;
            margin: 0;
            align-items: right;

            @media (max-width: 1000px) {
              margin-top: 0.5rem;
              min-width: 4rem;
            }
            & .row-1 {
              margin: 0 !important;
              font-size: 0.7rem;
              color: yellow;
              justify-content: center;
              font-weight: 700;
              padding: 0 0.2rem 0 0.2rem;
            }
            & .row-2 {
              margin: 0 !important;
              font-size: 0.7rem;
              font-weight: 700;
              justify-content: center;
              color: yellow;
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            & .row-3 {
              margin: 0 !important;
              height: 0.4rem;
              background-color: yellow;
            }
          }
        }
      }
    }

    & .row-7 {
      margin-top: 2rem;
      & .row-1 {
        display: flex !important;
        flex-direction: row !important;
        & .col-1 {
          width: 10%;
          & .form-check-input {
            width: 1.3rem;
            height: 1.3rem;
          }
        }

        & .col-2 {
          width: 90%;
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.71429;

          & a {
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.71429;
          }
        }
      }

      & .row-2 {
        & .continuar {
          height: 3.5rem;
          padding: 0 2rem;
          color: #929292;
          font-size: 0.875rem;
          line-height: 1.7142857143;
          font-weight: 700;
          background-color: #dfdfdf;
          border: 1px solid #dfdfdf;
          border-radius: 64px;
        }
      }
    }
  }
}
</style>
