<template>
  <div class="profileHeader">
    <div class="col-1">
      <div class="inner-col">
        <div class="inner-row-1">
          <span class="text-dark"
            >Hej e bem-vindo à sua
            <span class="texto-ikea-family">IKEA Family</span>
          </span>
        </div>
        <div class="inner-row-2">
          É bom tê-lo aqui. Descubra num único lugar todos os benefícios por ser
          membro IKEA Family.
        </div>
        <div class="inner-row-3">
          Quer editar o seu nome, morada ou definições?
          <a href="">Gerir a sua conta </a>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="card-container">
        <div class="profile-card">
          <div class="row-1">
            <div class="inner-row-1">Aqui tem o seu número IKEA Family</div>
            <div class="inner-row-2">{{ clientName }} {{ clientSurname }}</div>
          </div>
          <div class="row-2"></div>
          <div class="row-3">
            <div class="row-3-col-1">{{ ikeaFamilyNumber }}</div>
            <div class="row-3-col-2">
              <qr-code :size="96" :text="'cliente-page/' + clientId"></qr-code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ikeaFamilyNumber: "6275 9802 3303 6033 069",
      clientName: "Ricardo",
      clientSurname: "Silva",
      clientId: "001",
    };
  },
};
</script>

<style lang="scss">
.profileHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column;
  }
  & .col-1 {
    display: flex;
    flex-direction: column;
    width: 50%;
    @media (max-width: 900px) {
      width: 100%;
      margin-bottom: 2rem;
    }
    & .inner-col {
      & .inner-row-1 {
        line-height: 1.3333333333;
        letter-spacing: -0.039375rem;
        font-size: 2.25rem;
        font-weight: 700;
        & .texto-ikea-family {
          color: #0077c1;
        }
      }
      & .inner-row-2 {
        font-size: 0.875rem;
        line-height: 1.57;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
      }
      & .inner-row-3 {
        color: #484848;
        font-size: 0.875rem;
        line-height: 1.57;
        margin-top: 1rem;

        & a {
          color: #484848;
          text-decoration: none;

          &:hover {
            color: black;
            text-decoration: underline;
          }
        }
      }
    }
  }
  & .col-2 {
    width: 50%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 900px) {
      width: 100%;
      justify-content: flex-start;
    }

    & .card-container {
      display: flex;
      justify-content: flex-end;
      @media (max-width: 500px) {
        justify-content: center;
      }
      & .profile-card {
        border-radius: 0.625rem;
        min-width: 400px;
        box-shadow: 0 0.3125rem 1.25rem rgba(0, 0, 0, 0.15);

        @media (max-width: 500px) {
          width: 100%;
        }

        & .row-1 {
          border-top-left-radius: 0.625rem;
          border-top-right-radius: 0.625rem;
          width: 100%;
          display: flex;
          flex-direction: column;
          background-color: #0077c1;
          padding: 1rem 1.5625rem;
          color: white;
          font-weight: 700;
          & .inner-row-1 {
            width: 100%;
            font-size: 1rem;
          }
          & .inner-row-2 {
            width: 100%;
            font-size: 1.375rem;
          }
        }
        & .row-2 {
          background-color: #ffdb00;
          padding: 0.3rem 1.5625rem;
          margin: 0;
        }
        & .row-3 {
          margin: 0;
          padding: 1rem;
          width: 100%;
          display: flex;
          align-items: baseline;

          & .row-3-col-1 {
            width: 70%;
          }
          & .row-3-col-2 {
            width: 30%;
          }
        }
      }
    }
  }
}
</style>
