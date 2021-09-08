<template>
  <div class="parcerias">
    <div class="row">
      <div class="parcerias-container col-sm-12 pt-3 pb-5">
        <div class="row">
          <div
            v-for="(parceiro, index) in parceiros"
            :key="index"
            class="parceiros"
          >
            <div class="card">
              <div class="body">
                <div class="image">
                  <img :src="parceiro.imgSrc" />
                </div>
                <div class="partner-description">
                  <div class="nome">{{ parceiro.name }}</div>
                  <div class="descricao">{{ parceiro.text }}</div>
                  <div class="validade">
                    Válido até: {{ parceiro.endDay }}/{{ parceiro.endMonth }}/{{
                      parceiro.endYear
                    }}
                    <a :href="'/' + parceiro.link">Saber mais</a>
                  </div>
                  <div class="button">
                    <button class="beneficios">Ver mais benefícios</button>
                  </div>
                </div>
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
      parceiros: [
        {
          name: "Robbilac",
          imgSrc: "https://picsum.photos/1000/960?random=1",
          text:
            "Desconto de 50% em todas as tintas e até 55% em acessórios e complementos",
          endDay: 30,
          endMonth: 9,
          endYear: 2021,
          link: "robbilac",
        },
        {
          name: "Black+Decker",
          imgSrc: "https://picsum.photos/1000/960?random=2",
          text:
            "Desconto de 10% em todas as brocas e até 30% em acessórios e complementos",
          endDay: 25,
          endMonth: 10,
          endYear: 2021,
          link: "black+decker",
        },
        {
          name: "Philips",
          imgSrc: "https://picsum.photos/1000/960?random=3",
          text:
            "Desconto de 25% em todas as lâmpadas RGB e até 50% em lâmpadas LED",
          endDay: 12,
          endMonth: 12,
          endYear: 2021,
          link: "philips",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.parcerias {
  padding-left: 0;
  padding-right: 0;
  & .row {
    & .parcerias-container {
      padding-left: 0;
      padding-right: 0;
      & .row {
        & .parceiros {
          width: 33% !important;
          @media (max-width: 1100px) {
            width: 50% !important;
          }
          @media (max-width: 700px) {
            width: 100% !important;
          }

          & .card {
            border-radius: 12px;
            border: none;
            box-shadow: 0 0.3125rem 1.25rem rgba(0, 0, 0, 0.15);
            @media (max-width: 1100px) {
              margin-bottom: 1.5rem;
            }
            & .body {
              & .image {
                width: 100%;
                & img {
                  width: 100%;
                  border-top-right-radius: 12px;
                  border-top-left-radius: 12px;
                }
              }

              & .partner-description {
                padding: 2rem;

                & .nome {
                  margin-bottom: 0.5rem;
                  font-size: 1.125rem;
                  font-weight: 700;
                }

                & .descricao {
                  font-size: 1rem;
                  line-height: 1.5;
                  font-weight: 700;
                }

                & .validade {
                  font-size: 0.75rem;
                  margin-top: 1rem;

                  & a {
                    color: black;
                  }
                }

                & .button {
                  margin-top: 1rem;
                  width: 100%;

                  & .beneficios {
                    border-radius: 64px;
                    height: 3.5rem;
                    padding: 0 2rem;
                    width: 100%;
                    color: white;
                    border: 1px solid black;
                    background-color: black;
                    font-weight: 700;
                    font-size: 0.875rem;
                    line-height: 1.4285714286;

                    &:hover {
                      background-color: #484848;
                      border: 1px solid #484848;
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
