<template>
  <a class="favoritos">
    <div class="row">
      <div class="top-col col-sm-12 pb-5">
        <h1>As suas listas de favoritos</h1>
        <div class="info-favoritos">
          <div class="row">
            <h1>Mantenham as vossas listas de favoritos!</h1>
          </div>
          <div class="row">
            <h2>
              Estas listas de favoritos são apenas temporárias.
              <a href="/">Entrar ou Iniciar Sessão</a> para garantir que as
              listas de favoritos ainda estão aqui quando voltar
            </h2>
          </div>
        </div>
      </div>
    </div>
    <div v-for="(lista, index) in wishlists" :key="index" class="row">
      <ListaDeFavoritos
        :listName="lista.name"
        :selected="lista.selected"
        :products="lista.array"
      />
      <div class="row">
        <b-button
          variant="dark"
          type="button"
          class="addListButton"
          @click="showForm(showInput)"
        >
          <b-icon icon="plus-circle-fill" scale="1.2" variant="light"></b-icon>
          <h1>Adicionar Lista</h1>
        </b-button>
      </div>
      <div class="row">
        <b-form-input
          v-if="showInput"
          type="text"
          class="form-control"
          v-model="list.name"
          placeholder="Escola o nome da lista"
          v-on:keydown.enter="inputAction(list)"
        >
        </b-form-input>
      </div>
    </div>
  </a>
</template>

<script>
import ListaDeFavoritos from "./ListaDeFavoritos.vue";
export default {
  components: {
    ListaDeFavoritos,
  },

  data() {
    return {
      showInput: false,
      wishlists: [
        {
          name: "Lista 1",
          selected: true,
          array: [
            {
              id: 1,
              name: "FEJKA",
              type: "Planta Artificial em vaso",
              utility: "9cm",
              imageSrc: "https://picsum.photos/360?random=1",
              normalPrice: 4.5,
              currentPrice: 4,
              rating: 4.5,
              ratingCount: 8,
              link: "fejka",
            },
            {
              id: 2,
              name: "SKOGSKLÖVER",
              type: "Estore de correr",
              utility: "120x195 cm",
              imageSrc: "https://picsum.photos/360?random=2",
              normalPrice: 35,
              currentPrice: 29,
              rating: 4,
              ratingCount: 148,
              link: "skogsklover",
            },
            {
              id: 3,
              name: "HUSARÖ",
              type: "Poltrona",
              utility: "exterior",
              imageSrc: "https://picsum.photos/360?random=3",
              normalPrice: 149,
              currentPrice: 119,
              rating: 4.5,
              ratingCount: 10,
              link: "husaro",
            },
            {
              id: 4,
              name: "HAUGA",
              type: "Roupeiro aberto",
              utility: "c/3 gavetas 70 x 199 cm",
              imageSrc: "https://picsum.photos/360?random=4",
              normalPrice: 135,
              currentPrice: 112,
              rating: 3,
              ratingCount: 24,
              link: "hauga",
            },
          ],
        },
      ],
      list: {
        name: "",
        selected: false,
        array: [],
      },
    };
  },
  methods: {
    addLista(list) {
      this.wishlists.push(list);
    },
    showForm(showInput) {
      this.showInput = !showInput;
    },
    inputAction(list) {
      this.addLista(list);
      this.showInput = false;
    },
  },
};
</script>

<style lang="scss">
.favoritos {
  color: black;
  text-decoration: none;

  & .form-control {
    margin-left: 0.75rem;
    width: auto;
    height: 100%;

    @media (max-width: 1100px) {
      margin: auto;
    }
  }
  & .row {
    display: flex;
    & .top-col {
      & h1 {
        color: black;
        font-weight: 700;
        font-size: 2.25rem;
        line-height: 1.3333333333;
        letter-spacing: -0.039375rem;
      }
      & .info-favoritos {
        border: 1px solid #dfdfdf;
        padding: 2rem 1.25rem;
        border-radius: 4px;
        margin: 2.5rem 0;
        & .row {
          & h1 {
            color: #0077c1;
            font-size: 1rem;
            line-height: 1.5;
            font-weight: 700;
          }

          & h2 {
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;

            & a {
              color: #484848;

              &:hover {
                color: black;
              }
            }
          }
        }
      }
    }
    & .addListButton {
      margin-bottom: 1rem;
      margin-left: 0.75rem;
      background-color: black;
      display: flex;
      align-items: center;
      width: auto;
      border-radius: 64px;
      text-align: center;
      font-weight: 700;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 1rem 1.5rem 1rem 1.5rem;

      @media (max-width: 1100px) {
        margin: 1rem auto 1rem auto;
        justify-content: center;
      }

      & h1 {
        padding-left: 1rem;
        font-size: 0.875rem;
        line-height: 1.4285714286;
        font-weight: 700;
        text-align: center;
        margin: 0;
      }
    }
  }
}
</style>
