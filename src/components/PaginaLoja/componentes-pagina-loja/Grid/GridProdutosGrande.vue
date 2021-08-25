<template>
  <div class="gridProdutosGrandes">
    <div class="col">
      <div class="row">
        <div class="seccao-dinamica">
          <!-- BUTTON CAROUSEL -->
          <ButtonCarousel :buttons="filterButtons" />
          <!-- BUTTON CAROUSEL -->
          <!-- LISTA COMPARATIVA -->
          <div class="lista-comparativa">
            <div class="container-lista" v-if="this.comparisonList.length > 0">
              <hr class="costum-hr" />
              <div class="row">
                <div class="col-1">
                  <button class="close-btn" @click="closeComparison()">
                    Fechar
                  </button>
                </div>
                <div class="col-2">
                  {{ comparisonList.length }}
                  Selecionado
                </div>
                <div class="col-3">
                  <div
                    v-for="(items, index) in this.comparisonList"
                    :key="index"
                    class="lista"
                  >
                    <div class="row">
                      <div class="col">
                        <div class="imagemSelecionada">
                          <img :src="items.imageSrc" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <a href="/comparacao-produtos" class="comparar-produtos"
                    >Comparar Produtos</a
                  >
                </div>
              </div>
            </div>
          </div>
          <hr class="costum-hr" />

          <!-- LISTA COMPARATIVA -->
        </div>
      </div>
      <div class="row">
        <ListaProdutos
          :comparisonList="comparisonList"
          :produtos="products"
        ></ListaProdutos>
      </div>
    </div>
  </div>
</template>

<script>
import ListaProdutos from "./ListaProdutos.vue";
import ButtonCarousel from "../../../MainPage/components-main-page/Carousel/ButtonCarousel.vue";

export default {
  components: {
    ButtonCarousel,
    ListaProdutos,
  },
  beforeDestroy() {
    this.comparisonList = [];
  },
  data() {
    return {
      comparisonList: [],
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

  methods: {
    closeComparison() {
      this.comparison = [];
    },
  },

  props: {
    filterButtons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.gridProdutosGrandes {
  & .costum-hr {
    margin: 0.5rem 0 0.5rem 0;
  }
  & .col {
    & .row {
      & .seccao-dinamica {
        & .lista-comparativa {
          margin: 2rem 0 0 0;
          width: 100%;

          & .container-lista {
            & .row {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              flex-wrap: wrap;
              position: sticky;
              & .col-1 {
                width: auto;
                height: 4rem;
                display: flex;
                align-items: center;
                width: 20%;

                & .close-btn {
                  border: none;
                  font-size: 0.8rem;
                  line-height: 1.33333;
                  font-weight: 700;
                  background-color: white;
                }
              }
              & .col-2 {
                width: auto;
              }
              & .col-3 {
                width: auto;
                display: flex;

                & .imagemSelecionada {
                  margin-right: 0.5rem;
                  & img {
                    max-width: 2.5rem;
                  }
                }
              }
              & .col-4 {
                width: auto;
                height: 4rem;
                display: flex;
                align-items: center;

                & .comparar-produtos {
                  border-radius: 64px;
                  height: 2.5rem;
                  padding: 0 1.5rem;
                  background-color: white;
                  border: 1px solid #dfdfdf;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 0.75rem;
                  line-height: 1.33333;
                  font-weight: 700;
                  color: black;
                  text-decoration: none;

                  &:hover {
                    border: 1px solid darkgrey;
                  }
                }
              }
            }
          }
        }

        & .hr-dinamico {
          display: none;
        }
      }

      .produto {
        & .comparisonSelection {
          display: flex;
          width: 40%;
          margin-bottom: 0.5rem;
          align-items: center;

          & .col-1 {
            & input[type="checkbox"] {
              width: 20px;
              height: 20px;
            }
          }
          & .col-2 {
            height: 20px;
            display: flex;
            align-items: center;
            margin-left: 1rem;
            margin-bottom: 0.3rem;
            font-size: 0.875rem;
            color: #484848;
            line-height: 1.57;
          }
        }
        & .product-body {
          width: 100%;
          & .product-image {
            & img {
              width: 100%;
            }
          }

          & .product-description {
            width: 100%;
            padding: 1rem 0 1rem 0;
            & .nome {
              color: black;
              font-size: 1.1rem;
              line-height: 1.42857;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: 700;

              &:hover {
                text-decoration: underline;
              }
            }

            & .tipo {
              font-size: 1rem;
              line-height: 1.42857;
              margin-bottom: 0.1rem;
            }

            & .utilidade {
              font-size: 1rem;
              line-height: 1.42857;
              margin-bottom: 0.5rem;
            }

            & .precoAtual {
              display: flex;
              flex-direction: row;

              & h1 {
                font-size: 1.5rem;
                margin-right: 0.25rem;
                font-weight: 700;
              }

              & h2 {
                font-size: 0.6875rem;
                margin-right: 0.2rem !important;
                font-weight: 700;
              }
            }

            & .precoNormal {
              font-size: 0.85rem !important;
              margin-bottom: 0.25rem;
            }

            & .row {
              display: inline-block;
              width: 100%;
              margin: 0;
              align-items: center;

              & .col-1 {
                float: left;
                width: 80%;
                padding-left: 0;
                & .rating {
                  margin-bottom: 0.5rem;
                  display: inline-flex;
                  width: 100% !important;

                  & .rating-col {
                    display: ruby;
                    list-style: none;
                    padding-left: 0;
                    width: 50%;
                    & .rating-row {
                      & h4 {
                        margin-left: 1rem;
                        font-size: 0.8rem !important;
                      }
                    }
                  }
                }
              }
              & .col-2 {
                float: right;
                padding-right: 0;
                & .basket-button {
                  width: 100%;

                  & .btn-basket {
                    width: 100%;
                    height: auto;
                    border: none;
                    z-index: 1;
                    outline: none;
                    cursor: pointer;
                    background-color: transparent;
                    text-align: right;

                    & .basket-icon {
                      & :hover {
                        color: darkblue !important;
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
}
</style>
