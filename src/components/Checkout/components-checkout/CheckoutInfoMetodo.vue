<template>
  <div class="checkoutInfo">
    <div class="outter-col">
      <div class="row-1">
        <div class="row-1-col-1">
          <span class="outter-circle"><span>1</span></span>
        </div>
        <div class="row-1-col-2">
          <div class="col-2-row-1">
            Como gostaria de receber a sua encomenda?
          </div>
          <div class="col-2-row-2">
            É necessário o seu código postal para verificarmos as opções de
            entrega e de recolha disponíveis. As opções de disponibilidade,
            entrega e recolha de produtos são baseadas no mesmo.
          </div>
          <div class="col-2-row-3">
            <div class="row-3-col">
              <div class="row-3-row-1">
                <input type="text" placeholder="Código postal" />
              </div>
              <div class="row-3-row-2">por ex: 1000-001</div>
            </div>
          </div>

          <div class="col-2-row-4">
            <button class="disponibilidade">
              Calcular o custo e disponibilidade da entrega
            </button>
          </div>
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-2">
        <div class="row-2-col-1">
          <span class="outter-circle"><span>2</span></span>
        </div>
        <div class="row-2-col-2">
          <div class="titulo">Informações pessoais</div>
        </div>
      </div>
      <hr class="costum-hr" />
      <div class="row-3">
        <div class="row-3-col-1">
          <span class="outter-circle"><span>3</span></span>
        </div>
        <div class="row-3-col-2">
          <div class="titulo">Como gostaria de pagar ?</div>
        </div>
      </div>
      <hr class="costum-hr" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.checkoutInfo {
  margin-bottom: 8rem;
  & .outter-col {
    width: 90%;

    @media (max-width: 1200px) {
      width: 100%;
    }
    & .costum-hr {
      margin: 2rem 0 2rem 0;
      width: 100%;
    }
    & .row-1 {
      display: flex;
      flex-direction: row;

      @media (max-width: 1000px) {
        flex-direction: column !important;
      }

      & .row-1-col-1 {
        width: 10%;
        margin-right: 2rem;

        @media (max-width: 1000px) {
          width: 100%;
          margin-bottom: 1rem;
        }
        & .outter-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: black;
          border-radius: 64px;
          border: 2px solid black;
          & span {
            color: white;
            font-weight: 700;
          }
        }
      }
      & .row-1-col-2 {
        width: 90%;
        @media (max-width: 1000px) {
          width: 100%;
        }
        & .col-2-row-1 {
          font-size: 2.25rem;
          letter-spacing: -0.03938rem;
          line-height: 1.33333;
          font-weight: 700;
          margin-bottom: 40px;
        }
        & .col-2-row-2 {
          font-size: 1rem;
          letter-spacing: -0.03938rem;
          line-height: 1.33333;
          margin-bottom: 1.5rem;
        }
        & .col-2-row-3 {
          & .row-3-row-1 {
            & input {
              width: 100%;
              border: none;
              padding: 0.2rem;
              border-bottom: 1px solid black;
            }
          }
          & .row-3-row-2 {
            font-size: 0.75rem;
            line-height: 1.5;
            color: #484848;
          }
        }

        & .col-2-row-4 {
          margin-top: 2rem;
          & .disponibilidade {
            height: 3.5rem;
            padding: 0 2rem;
            border-radius: 40px;
            color: #929292;
            border: 1px solid #dfdfdf;
            background-color: #dfdfdf;
            width: 100%;
          }
        }
      }
    }

    & .row-2 {
      display: flex;
      align-items: center;
      margin: 0;
      & .row-2-col-1 {
        width: 10%;
        margin-right: 2rem;

        & .outter-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          border-radius: 64px;
          border: 2px solid #929292;
          & span {
            color: #929292;
            font-weight: 700;
          }
        }
      }
      & .row-2-col-2 {
        width: 90%;

        & .titulo {
          width: 100%;
          color: #929292;
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: 700;
        }
      }
    }
    & .row-3 {
      display: flex;
      align-items: center;
      margin: 0;
      & .row-3-col-1 {
        width: 10%;
        margin-right: 2rem;

        & .outter-circle {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 2rem;
          height: 2rem;
          background-color: white;
          border-radius: 64px;
          border: 2px solid #929292;
          & span {
            color: #929292;
            font-weight: 700;
          }
        }
      }
      & .row-3-col-2 {
        width: 90%;

        & .titulo {
          width: 100%;
          color: #929292;
          font-size: 1.2rem;
          line-height: 1.5;
          font-weight: 700;
        }
      }
    }
  }
}
</style>
