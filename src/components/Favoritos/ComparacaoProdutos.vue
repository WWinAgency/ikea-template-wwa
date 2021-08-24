<template>
  <div class="comparacaoProdutos">
    <div class="col">
      <div class="row">
        <div class="col-comparacao">
          <div class="row-comparacao-1"><h1>Comparação de produtos</h1></div>
          <div class="row-comparacao-2">
            <h2>
              A comparar
              {{ this.$store.state.ComparisonListModule.comparison.length }}
              produtos
            </h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="row-buttons">
          <div class="button-col">
            <div class="button-row">
              <div class="button-col-1">
                <a href="/pagina-de-loja" class="editar-selecao">
                  <div class="row">
                    <div class="col-1">
                      <b-icon
                        class="arrow-left"
                        icon="arrow-left"
                        scale="1.5"
                        variant="dark"
                      ></b-icon>
                    </div>
                    <div class="col-2">
                      Editar Seleção
                    </div>
                  </div>
                </a>
              </div>
              <div class="button-col-2">
                <button class="mostrar-diferencas">
                  Mostrar apenas diferenças
                </button>
              </div>
            </div>
          </div>
          <div class="content-col">
            <div class="content-row">
              <div class="button-col-1">
                {{ this.$store.state.ComparisonListModule.comparison.length }}
                Produtos
              </div>
              <div class="button-col-2">
                <div class="row">
                  <div class="col-1">
                    <button class="produto">
                      Produto
                    </button>
                  </div>
                  <div class="col-2">
                    <button class="conteudo">
                      Contéudo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          v-for="product in this.$store.state.ComparisonListModule.comparison"
          :key="product.id"
          class="lista col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12  mb-5"
        >
          <div class="buttons-row">
            <div class="col-1">
              <button
                @click="handleRemoveFromComparisonList(product)"
                class="remove-button"
              >
                <b-icon
                  class="remove"
                  icon="x"
                  scale="2"
                  variant="dark"
                ></b-icon>
              </button>
            </div>
            <div class="col-2">
              <a
                class="icon float-right m-0 cursor-pointer"
                @click="handleAddToWishlist(product)"
                v-if="wishlistExists(product) === false"
                ><b-icon-heart></b-icon-heart
              ></a>
              <a
                class="icon heart float-right m-0 cursor-pointer"
                v-else
                @click="handleRemoveToWishlist(product)"
                ><b-icon-heart-fill></b-icon-heart-fill
              ></a>
            </div>
          </div>

          <ProdutoListaComparativa
            :id="product.id"
            :name="product.name"
            :type="product.type"
            :utility="product.utility"
            :code="product.code"
            :imageSrc="product.imageSrc"
            :link="product.link"
            :rating="product.rating"
            :ratingCount="product.ratingCount"
            :valueAssembly="product.valueAssembly"
            :valuePrice="product.valuePrice"
            :valueQuality="product.valueQuality"
            :valueLooks="product.valueLooks"
            :valueExpectations="product.valueExpectations"
            :currentPrice="product.currentPrice"
            :variantStock="product.variantStock"
            :medidas="product.medidas"
            :evaluations="product.evaluations"
            :comprimento="product.packageLength"
            :altura="product.packageHeight"
            :largura="product.packageWidth"
            :peso="product.packageWeight"
            :qntEmbalagens="product.packageQnt"
            :productHiddenText="product.productHiddenText"
            :productShowingText="product.productShowingText"
            :showcaseRatingName="product.showcaseRatingName"
            :showcaseRatingDay="product.showcaseRatingDay"
            :showcaseRatingMonth="product.showcaseRatingMonth"
            :showcaseRatingYear="product.showcaseRatingYear"
            :showcaseRatingComment="product.showcaseRatingComment"
            :showcaseRatingRating="product.showcaseRatingRating"
          />
        </div>
      </div>
      <div class="row">
        <div class="similar-products">
          <CarouselSimilarProducts :products="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSimilarProducts from "./CarouselSimiliarProducts.vue";
import ProdutoListaComparativa from "./ProdutoListaComparativa.vue";
import axios from "axios";

export default {
  components: { CarouselSimilarProducts, ProdutoListaComparativa },
  mounted() {
    const productIds = this.$store.state.WishlistModule.wishlist;
    const productIds2 = this.$store.state.ComparisonListModule.comparison;

    const productIdsString = productIds.join();
    const productIdsString2 = productIds2.join();

    axios
      .get("/api/products", { params: { id: productIdsString } })
      .then(({ data }) => {
        this.products = data.data;
      });

    axios
      .get("/api/products", { params: { id: productIdsString2 } })
      .then(({ data }) => {
        this.products = data.data;
      });
  },
  methods: {
    async handleAddToWishlist(id) {
      await this.$store.dispatch("WishlistModule/addWishlistItem", id);
    },
    handleRemoveToWishlist(id) {
      this.$store.dispatch("WishlistModule/removeWishlistItem", id);
    },
    wishlistExists(id) {
      return (
        this.$store.state.WishlistModule.wishlist.find((i) => i === id) != null
      );
    },

    handleRemoveFromComparisonList(id) {
      this.$store.dispatch("ComparisonListModule/removeComparisonListItem", id);
    },
  },

  data() {
    return {
      products: [
        {
          id: 1,
          productId: "fejka",
          name: "FEJKA",
          type: "Planta Artificial em vaso",
          code: "403.495.31",
          utility: "9cm",
          imageSrc: "https://picsum.photos/360?random=1",
          normalPrice: "",
          currentPrice: 5,
          rating: 4.6,
          ratingCount: 4,
          valueAssembly: 4.8,
          valuePrice: 3.9,
          valueQuality: 4.4,
          valueLooks: 4.6,
          valueExpectations: 4.6,
          packageLength: 70,
          packageWeight: 0.35,
          packageHeight: "",
          packageWidth: "",
          packageQnt: 1,
          link: "fejka",
          variantStock: "success",
          productShowingText:
            "Folhas artificiais com aspeto real que permanecem bonitas e com bom aspeto ano após ano.",
          productHiddenText:
            "Próprio para uso interior e exterior. Ideal se não puder ter uma planta viva mas quiser desfrutar da beleza da natureza.",
          showcaseRatingName: "Ana",
          showcaseRatingDay: "17",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment:
            "Gosto! e para o efeito que queria ficou muito bem",
          showcaseRatingRating: 4,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: "-",
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 9,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "70",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 5,
              clientName: "Ana",
              day: 17,
              month: 5,
              year: 2021,
              generalEvaluation: "Gosto! e para o efeito",
              specificEvaluation:
                "Gosto! e para o efeito que queria ficou muito bem",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
            {
              rating: 5,
              clientName: "Katherine",
              day: 25,
              month: 10,
              year: 2020,
              generalEvaluation: "Ótimo",
              specificEvaluation: "Ótimo",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
            {
              rating: 5,
              clientName: "Ana Silva",
              day: 26,
              month: 8,
              year: 2020,
              generalEvaluation: "Parece natural",
              specificEvaluation: "Até parece uma flor de tão bonita que é",
              valueAssembly: 4,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 5,
              clientName: "Eleite96",
              day: 9,
              month: 6,
              year: 2020,
              generalEvaluation: "Em perfeitas condições",
              specificEvaluation:
                "Fiz compra online e todos os artigos vieram conforme medidas e aspecto.",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
          ],
          favSelected: false,
        },
        {
          id: 2,
          productId: "skogsklover",
          name: "SKOGSKLÖVER",
          type: "Estore de correr",
          code: "403.144.66",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/360?random=2",
          normalPrice: "",
          currentPrice: 35,
          rating: 4.2,
          ratingCount: 148,
          valueAssembly: 4.4,
          valuePrice: 4.1,
          valueQuality: 4.1,
          valueLooks: 4.1,
          valueExpectations: 4.3,
          packageLength: 132,
          packageWeight: 1.49,
          packageHeight: 6,
          packageWidth: 7,
          packageQnt: 1,
          link: "skogsklover",
          variantStock: "danger",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Comprimento",
              dimensao: 195,
            },
            {
              tituloMedida: "Superfície",
              dimensao: 23.4,
            },
            {
              tituloMedida: "Largura do rolo",
              dimensao: "123.4",
            },
            {
              tituloMedida: "Largura do tecido",
              dimensao: "120",
            },
          ],
          evaluations: [
            {
              rating: 5,
              clientName: "Maria S",
              day: 21,
              month: 5,
              year: 2021,
              generalEvaluation: "Correspondeu às minhas expectativas",
              specificEvaluation: "Correspondeu às minhas expectativas",
              valueAssembly: 4,
              valuePrice: 5,
              valueQuality: 4,
              valueLooks: 4,
              valueExpectations: 4,
            },
            {
              rating: 5,
              clientName: "Jose",
              day: 1,
              month: 5,
              year: 2021,
              generalEvaluation: "Boa",
              specificEvaluation: "Boa",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
            {
              rating: 5,
              clientName: "Ana",
              day: 30,
              month: 4,
              year: 2021,
              generalEvaluation: "Muito bom",
              specificEvaluation:
                "Artigo melhor do que pensava, deixa passar a luz solar tornando o ambiente da divisão agradável. Semi transparente consegue ver se de dentro para fora mas ao contrário não.",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
            {
              rating: 5,
              clientName: "Ana",
              day: 28,
              month: 4,
              year: 2021,
              generalEvaluation: "Gosto",
              specificEvaluation:
                "Moro num R/C e é importante ter luz e privacidade. Consigo com este produto ter isso tudo, uma vez que não é opaco, mas da rua ninguém vê o interior o que era uma preocupação.",
              valueAssembly: 5,
              valuePrice: 5,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 5,
            },
          ],
          favSelected: false,
        },
        {
          id: 3,
          productId: "husaro",
          name: "HUSARÖ",
          type: "Poltrona",
          code: "104.678.04",
          utility: "exterior",
          imageSrc: "https://picsum.photos/360?random=3",
          normalPrice: 149,
          currentPrice: 119,
          rating: 4.5,
          ratingCount: 10,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "husaro",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 4,
          productId: "hauga",
          name: "HAUGA",
          type: "Roupeiro aberto",
          code: "104.678.04",
          utility: "c/3 gavetas 70 x 199 cm",
          imageSrc: "https://picsum.photos/360?random=4",
          normalPrice: 135,
          currentPrice: 112,
          rating: 3,
          ratingCount: 24,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "hauga",
          variantStock: "danger",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 5,
          productId: "bodarp",
          name: "BODARP",
          type: "Porta,",
          code: "104.678.04",
          utility: "verde acinzentado, 60x80 cm",
          imageSrc: "https://picsum.photos/300?random=5",
          normalPrice: 50,
          currentPrice: 30,
          rating: 5,
          ratingCount: 7,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "bodarp",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 6,
          productId: "bodarp",
          name: "SKYMNINGEN",
          type: "Candeeiro suspenso,",
          code: "104.678.04",
          utility: "branco",
          imageSrc: "https://picsum.photos/300?random=6",
          normalPrice: 79,
          currentPrice: 59,
          rating: 5,
          ratingCount: 3,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "bodarp",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 7,
          productId: "tangret",
          name: "TRANGET",
          type: "Tapete, tecelagem plana,",
          code: "104.678.04",
          utility: "feito à mão 170x240 cm",
          imageSrc: "https://picsum.photos/300?random=7",
          normalPrice: 249,
          currentPrice: 199,
          rating: 4,
          ratingCount: 10,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "tangret",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 8,
          productId: "pelarboj",
          name: "PELARBOJ",
          type: "Candeeiro LED de mesa,",
          code: "104.678.04",
          utility: "multicor",
          imageSrc: "https://picsum.photos/300?random=8",
          normalPrice: 20,
          currentPrice: 15,
          rating: 4.5,
          ratingCount: 18,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "pelarboj",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Maria S",
          showcaseRatingDay: "21",
          showcaseRatingMonth: "5",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Correspondeu às minhas expectativas",
          showcaseRatingRating: 5,
          medidas: [
            {
              tituloMedida: "Altura",
              dimensao: 170,
            },
            {
              tituloMedida: "Diâmetro do vaso",
              dimensao: 23,
            },
            {
              tituloMedida: "Altura da planta",
              dimensao: "-",
            },
            {
              tituloMedida: "Quantidade por embalagem",
              dimensao: "-",
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
        {
          id: 9,
          productId: "bjorkasen",
          name: "BJÖRKÅSEN",
          type: "Suporte p/portátil,",
          code: "204.764.74",
          utility: "bege",
          imageSrc: "https://picsum.photos/300?random=9",
          normalPrice: 19,
          currentPrice: 15,
          rating: 4.7,
          ratingCount: 3,
          valueAssembly: 4,
          valuePrice: 3,
          valueQuality: 5,
          valueLooks: 4,
          valueExpectations: 4,
          packageLength: 170,
          packageWeight: 4.57,
          packageQnt: 1,
          link: "bjorkasen",
          variantStock: "success",
          productShowingText:
            "Os estores reduzem o nível de luz geral e dão privacidade ao impedir que as pessoas no exterior vejam diretamente o interior da divisão.",
          productHiddenText:
            "O estore não tem cordões para maior segurança das crianças. Pode ser montado no interior e no exterior das estruturas da janela ou no teto.",
          showcaseRatingName: "Manuel",
          showcaseRatingDay: "3",
          showcaseRatingMonth: "6",
          showcaseRatingYear: "2021",
          showcaseRatingComment: "Muito bom",
          showcaseRatingRating: 4.7,
          medidas: [
            {
              tituloMedida: "Largura",
              dimensao: 46,
            },
            {
              tituloMedida: "Altura",
              dimensao: 65,
            },
            {
              tituloMedida: "Peso máximo",
              dimensao: 12,
            },
            {
              tituloMedida: "Altura Mínima",
              dimensao: 70,
            },
          ],
          evaluations: [
            {
              rating: 4,
              clientName: "Maria",
              day: 2,
              month: 3,
              year: 2021,
              generalEvaluation: "Vaso Bonito",
              specificEvaluation: "Muito bom para por em salas ou entradas",
              valueAssembly: 5,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 4,
            },
            {
              rating: 2,
              clientName: "Idete",
              day: 26,
              month: 12,
              year: 2020,
              generalEvaluation: "Vaso feio",
              specificEvaluation: "Muito feio e dificil de montar",
              valueAssembly: 1,
              valuePrice: 2,
              valueQuality: 4,
              valueLooks: 1,
              valueExpectations: 1,
            },
            {
              rating: 3,
              clientName: "João",
              day: 20,
              month: 6,
              year: 2021,
              generalEvaluation: "Vaso decente",
              specificEvaluation: "Dificil de montar mas com aspeto bom",
              valueAssembly: 2,
              valuePrice: 4,
              valueQuality: 5,
              valueLooks: 5,
              valueExpectations: 3,
            },
          ],
          favSelected: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.selected {
  text-decoration: underline;
}
.comparacaoProdutos {
  width: 100%;
  & .col {
    width: 100%;
    & .row {
      width: 100%;
      margin-left: 0;

      & .row-buttons {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        margin-bottom: 1rem;

        @media (max-width: 1000px) {
          flex-direction: column;
        }

        & .button-col {
          @media (max-width: 1000px) {
            width: 100%;
          }
          & .button-row {
            display: flex;

            & .button-col-1 {
              width: auto;
              margin-right: 1rem;

              & .editar-selecao {
                margin: 0.5rem 0.625rem 0 0;
                width: auto;
                display: flex;
                justify-content: space-between !important;
                align-items: center;
                padding: 0 1.5rem;
                height: 2.5rem;
                border-radius: 64px;
                border: 1px solid #f5f5f5;
                background-color: #f5f5f5;
                text-decoration: none;

                &:hover {
                  background-color: #c8c8c8;
                  border: 1px solid #c8c8c8;
                }

                & .row {
                  width: auto;
                  display: flex;
                  align-items: center;
                  & .col-1 {
                    width: auto;
                    margin: auto;
                    padding-left: 0;
                  }
                  & .col-2 {
                    display: flex;
                    width: auto;
                    font-size: 0.75rem;
                    line-height: 1.33333;
                    text-align: center;
                    font-weight: 700;
                    color: black;
                  }
                }
              }
            }
            & .button-col-2 {
              width: auto;
              & .mostrar-diferencas {
                margin: 0.5rem 0 0 0;
                width: auto;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 1.5rem;
                height: 2.5rem;
                border-radius: 64px;
                border: 1px solid #f5f5f5;
                background-color: #f5f5f5;
                font-size: 0.75rem;
                line-height: 1.33333;
                font-weight: 700;
                color: black;

                &:hover {
                  background-color: #c8c8c8;
                  border: 1px solid #c8c8c8;
                }
              }
            }
          }
        }
        & .content-col {
          display: inline-flex;
          width: 30%;
          align-items: center;
          position: relative;

          @media (max-width: 1000px) {
            width: 100%;
            margin-top: 2rem;
          }
          & .content-row {
            display: flex;
            width: auto;
            position: absolute;
            right: 0;

            @media (max-width: 1000px) {
              width: 100%;
              position: relative;
            }

            & .button-col-1 {
              display: flex;
              justify-content: center;
              width: auto;

              font-size: 0.75rem;

              @media (max-width: 900px) {
                float: left;
                width: 20%;
              }
            }
            & .button-col-2 {
              display: flex;
              width: auto;
              margin-left: 1rem;
              align-items: center;

              @media (max-width: 1000px) {
                position: absolute;
                right: 0;
              }

              & .row {
                padding: 0;
                margin: 0;
                align-items: center;
                @media (max-width: 900px) {
                  display: flex;
                  justify-content: flex-end;
                  margin: auto;
                }
                & .col-1 {
                  width: auto;
                  display: flex;
                  justify-content: center;
                  @media (max-width: 900px) {
                    float: left;
                  }
                  @media (max-width: 600px) {
                    margin-right: 1rem;
                  }

                  & .produto {
                    background-color: white;
                    border: none;
                    font-size: 0.75rem;
                    font-weight: 700;
                  }
                }
                & .col-2 {
                  width: auto;
                  display: flex;
                  justify-content: center;
                  padding-right: 0;
                  @media (max-width: 900px) {
                    float: left;
                  }

                  & .conteudo {
                    background-color: white;
                    border: none;
                    font-size: 0.75rem;
                    font-weight: 700;
                  }
                }
              }
            }
          }
        }
      }

      & .col-comparacao {
        & .row-comparacao-1 {
          & h1 {
            margin: 3.75rem 0 0.8rem 0;
            font-size: 1.875rem;
            line-height: 1.3334;
            letter-spacing: -0.53px;
            font-weight: 700;
            color: black;
          }
        }
        & .row-comparacao-2 {
          & h2 {
            margin-bottom: 2.5rem;
            color: #484848;
            font-size: 0.875rem;
            line-height: 1.57;
          }
        }
      }

      & .lista {
        & .buttons-row {
          display: flex;
          width: 100%;
          margin-bottom: 0.5rem;
          & .col-1 {
            width: 50%;

            & .remove-button {
              background-color: white;
              border: none;
              padding: 0;
              height: 2rem;
              width: 2rem;
              border-radius: 64px;
              display: flex;
              justify-content: center;
              align-items: center;

              &:hover {
                background-color: #e8e8e8;
              }
            }
          }
          & .col-2 {
            text-align: right;
            width: 50%;

            & a.icon {
              font-size: 20px !important;
            }
          }
        }
      }
      & .similar-products {
        padding: 10rem 0 0 0;
        width: 100%;
        display: flex;
      }
      & .rating-and-reviews {
        padding: 4rem 0 0 0;
        & .header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        & .body {
          & .row-1 {
            margin-bottom: 0.5rem;
          }
          & .row-2 {
            margin: 0 0 0.5rem 0;

            font-weight: 700;
            font-size: 2.25rem;
            line-height: 1.33333;
            letter-spacing: -0.03938rem;
          }
          & .row-3 {
            margin: 0 0 2rem 0;
            & .rating-stars {
              width: 100%;
              & .rating-row {
                display: ruby;
                list-style: none;
                padding-left: 0;
                & .rating-col-1 {
                  margin-right: 1rem;
                }
                & .rating-col-2 {
                  & h4 {
                    text-align: right;
                    font-size: 0.75rem;
                  }
                }
              }
            }
          }
          & .row-4 {
            margin: 0 0 2rem 0;
            width: 80%;
            & .inner-col {
              & .inner-row-1 {
                & .rating-stars {
                  width: 100%;
                  & .rating-row {
                    display: ruby;
                    width: 100%;
                    list-style: none;
                    padding-left: 0;
                    & .rating-col-1 {
                      width: 50%;
                    }
                    & .rating-col-2 {
                      width: 50%;
                      display: flex;
                      & .comentario {
                        width: 100%;

                        & h4 {
                          text-align: right;
                          font-size: 0.75rem;
                        }
                      }
                    }
                  }
                }
              }
              & .inner-row-2 {
                color: #484848;
                font-size: 0.875rem;
                line-height: 1.57;
              }
            }
          }
          & .row-5 {
            & .open-sidebar {
              width: 80%;
              text-decoration: none;
              color: black;
              display: flex;
              & .inner-row {
                display: flex;
                width: 100%;
                & .inner-col-1 {
                  color: black;
                  font-weight: 700;
                  text-decoration: none;
                  font-size: 0.875rem;
                  line-height: 1.57143;
                  width: 50%;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              & .inner-col-2 {
                width: 50%;
                position: relative;
                display: flex;
                align-items: center;

                & .arrow-right {
                  position: absolute;
                  right: 0;
                }
              }
            }
          }
        }
      }
      & .detalhes-embalagem {
        padding: 4rem 0 0 0;
        & .header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        & .body {
          & .row-1 {
            font-weight: 700;
            font-size: 0.875rem;
            color: #484848;
            line-height: 1.57;
            margin-bottom: 1rem;
          }
          & .row-2 {
            margin: 0 0 1rem 0;

            & .inner-col {
              & .inner-row-1 {
                color: #484848;
                font-weight: 700;
                font-size: 0.875rem;
                line-height: 1.57;
              }
              & .inner-row-2 {
                color: #484848;
                font-size: 0.875rem;
              }
            }
          }
          & .row-3 {
            margin: 0 0 1rem 0;
            & .inner-col {
              width: 100%;

              & .inner-row-1 {
                color: #484848;
                line-height: 1.5;
                font-size: 0.75rem;
              }
              & .inner-row-2 {
                margin-top: 0.5rem;
                background-color: black;
                color: white;
                padding: 0.25rem 0.75rem;
                width: 6rem;
                text-align: center;
                font-weight: 700;
                line-height: 1.25;
                font-size: 0.8rem;
              }
            }
          }
          & .row-4 {
            & .open-sidebar {
              width: 80%;
              text-decoration: none;
              color: black;
              display: flex;
              & .inner-row {
                display: flex;
                width: 100%;
                & .inner-col-1 {
                  color: black;
                  font-weight: 700;
                  text-decoration: none;
                  font-size: 0.875rem;
                  line-height: 1.57143;
                  width: 50%;

                  &:hover {
                    text-decoration: underline;
                  }
                }
              }
              & .inner-col-2 {
                width: 50%;
                position: relative;
                display: flex;
                align-items: center;

                & .arrow-right {
                  position: absolute;
                  right: 0;
                }
              }
            }
          }
        }
      }

      & .card {
        border: none;
        background-color: white;
        & .btn-check:focus + .btn-info,
        .btn-info:focus {
          box-shadow: none;
        }
        & .ler-mais {
          border: none;
          background: white;
          text-align: left;
          padding-left: 0;
          text-decoration: underline;
        }

        &-header {
          border: none;
          background-color: white;
          padding: 0 0 1rem 0;

          & .header-text {
            padding: 0;
          }
        }

        &-body {
          padding: 0 0 1rem 0;
        }
      }

      & .medidas {
        padding: 4rem 0 0 0;

        &-header {
          font-size: 1.5625rem;
          line-height: 1.36;
          letter-spacing: -0.02625rem;
          font-weight: 700;
        }

        &-body {
          padding-top: 1rem;

          & .row {
            & .inner-col {
              & .inner-row-1 {
                font-size: 0.875rem;
                font-weight: 700;
                color: #484848;
                line-height: 1.57;
              }
              & .inner-row-2 {
                font-size: 0.875rem;
                color: #484848;
                line-height: 1.57;
              }
            }
          }
        }
      }

      & .disponibilidade-entrega {
        padding: 4rem 0 0 0;
        & .row-1 {
          & h2 {
            letter-spacing: -0.02625rem;
            line-height: 1.36;
            font-size: 1.5625rem;
            font-weight: 700;
          }
        }
        & .row-2 {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          margin-top: 1.5rem;
          width: 100%;
          & .col-1 {
            display: flex;
            align-items: center;
            height: 100%;
            width: 10%;
          }
          & .col-2 {
            display: flex;
            align-items: center;
            height: 100%;
            margin-top: 0.5rem;
            width: 90%;
            & h3 {
              font-size: 0.875rem;
              color: #484848;
              line-height: 1.57;
            }
          }
        }
      }
      & .ver-imagens {
        display: flex;
        width: 100%;
        & .col-1 {
          width: 80%;
          & a {
            font-size: 1rem;
            line-height: 1.57143;
            font-weight: 700;
            color: black;
            text-decoration: none;

            &:hover {
              text-decoration: underline;
            }
          }
        }
        & .col-2 {
          position: relative;
          width: 20%;

          & .arrow-right {
            position: absolute;
            right: 0;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
