<template>
  <div class="row">
    <div class="personal-projetct col-sm-12 pt-3 pb-5 px-0">
      <div class="row">
        <div
          v-for="projeto in projetosPessoais"
          :key="projeto.link"
          class="projetoItem"
        >
          <div class="projeto-item">
            <div class="product-body">
              <div class="product-description">
                <div class="icon">
                  <b-icon
                    class="icon-projeto"
                    :icon="projeto.icon"
                    scale="1.3"
                    variant="dark"
                  ></b-icon>
                </div>
                <a class="title" :href="'/' + projeto.link">{{
                  projeto.title
                }}</a>
                <p class="text">{{ projeto.text }}</p>
              </div>
              <div class="icon-arrow">
                <a :href="'/' + projeto.link">
                  <b-icon
                    class="arrow-right"
                    icon="arrow-right-circle-fill"
                    scale="3"
                    variant="dark"
                  ></b-icon>
                </a>
              </div>
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
      projetosPessoais: [
        {
          icon: "list-check",
          link: "",
          title: "Veja os seus talões digitais",
          text:
            "O seu histórico de compras de momento não se encontra disponível. Se possuir um número de encomenda relativo à sua compra, pode fazer a gestão da mesma aqui.",
        },
        {
          icon: "heart",
          link: "favourites",
          title: "Criar listas de favoritos",
          text:
            "Planeie a sua compra e crie listas para que não se esqueça de nada",
        },
        {
          icon: "pencil",
          link: "",
          title: "Utilize os nossos planificadores",
          text:
            "Planeie a sua cozinha, casa de banho, sofá ou quarto de sonho com as nossas ferramentas de planificação ",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.row {
  padding-left: 0;
  padding-right: 0;
  margin: 0 !important;
  & .personal-projects {
    margin: 0 !important;

    & .row {
      margin: 0 !important;
    }
  }
}
.projetoItem {
  width: 33% !important;

  @media (max-width: 1100px) {
    width: 50% !important;
  }
  @media (max-width: 700px) {
    width: 100% !important;
  }

  & .projeto-item {
    background-color: rgb(245, 245, 245);
    padding: 2rem 2rem;
    height: auto;
    @media (max-width: 1100px) {
      margin-bottom: 1.5rem;
    }
    & .product-body {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 18rem;
      & .product-description {
        width: 100%;
        height: 100%;
        padding: 1rem 0 1rem 0;

        & .icon {
          margin-bottom: 0.5rem;
        }
        & .title {
          margin-top: 0.5rem;
          color: black;
          font-size: 1rem;
          line-height: 1.36;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 700;

          &:hover {
            text-decoration: underline;
          }
        }

        & .text {
          margin-top: 1rem;
          color: #484848;
          font-size: 0.875rem;
          line-height: 1.57;
        }
      }
      & .icon-arrow {
        padding-bottom: 2rem;
        margin-left: 2rem;
      }
    }
  }
}
</style>
