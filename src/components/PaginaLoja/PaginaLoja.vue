<template>
  <div class="paginaLoja">
    <div class="outter-col">
      <div class="inner-row-1">
        <PathPaginaLoja
          :categoriaGeralProduto="categoriaProduto.categoriaGeral"
          :subCategoriaGeralProduto="categoriaProduto.subCategoriaGeral"
          :tipoGeralProduto="categoriaProduto.tipoGeral"
          :subTipoGeralProduto="categoriaProduto.subTipoGeral"
        />
        <hr class="costum-hr" />
      </div>

      <div class="inner-row-2">
        <TextoDescritivo
          :titulo="categoriaProduto.tituloDescritivo"
          :texto="categoriaProduto.textoDescritivo"
        />
      </div>
      <div class="inner-row-3">
        <GridProdutosGrande
          :showcase1="showcase1"
          :showcase2="showcase2"
          :showcase3="showcase3"
          :filterButtons="filterButtons"
        />
      </div>
      <div class="inner-row-4">
        <CarouselDeProdutos
          :carousel="carousel1"
          titulo="Outros também viram"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CarouselDeProdutos from "../PaginaProduto/componentes-pagina-produto/Carousel/CarouselDeProdutos.vue";
import GridProdutosGrande from "./componentes-pagina-loja/Grid/GridProdutosGrande.vue";
import TextoDescritivo from "./componentes-pagina-loja/TextoDescritivo.vue";
import PathPaginaLoja from "./componentes-pagina-loja/PathPaginaLoja.vue";
export default {
  components: {
    PathPaginaLoja,
    TextoDescritivo,
    GridProdutosGrande,
    CarouselDeProdutos,
  },
  data() {
    return {
      categoriaProduto: {
        categoriaGeral: "Camas e colchões",
        subCategoriaGeral: "Têxteis para quarto",
        tipoGeral: "Almofadas",
        subTipoGeral: "Almofadas de espuma e espuma memory",
        tituloDescritivo: "Mesas de refeição para exterior",
        textoDescritivo:
          "Aproveite o prazer de jantar fora, em casa. Na nossa gama de mesas de jardim e mesas de refeição para exterior encontra desde mesas dobráveis mais pequenas a grandes mesas extensíveis. Seja um jantar romântico à luz das velas ou banquete no seu jardim ou terraço, a IKEA tem tudo o que precisa para si e todos os convidados. Com uma ampla escolha de estilos e tamanhos diferentes, incluindo conjuntos de cadeiras e mesas, os nossos móveis de refeição para exterior ajudam a criar o seu lugar preferido para comer fora, mesmo na sua casa. Pode escolher entre materiais artificiais que não precisam de manutenção ou o encanto natural da madeira, que não precisa mais do que alguns cuidados de tempos a tempos.",
      },

      carousel1: [
        {
          name: "FEJKA",
          type: "Planta Artificial em vaso,",
          utility: "9cm",
          imageSrc: "https://picsum.photos/300?random=1",
          normalPrice: 4.5,
          currentPrice: 4,
          rating: 4.5,
          avaliacoes: 8,
          link: "fejka",
        },
        {
          name: "SKOGSKLÖVER",
          type: "Estore de correr,",
          utility: "120x195 cm",
          imageSrc: "https://picsum.photos/300?random=2",
          normalPrice: 35,
          currentPrice: 29,
          rating: 4,
          avaliacoes: 148,
          link: "skogsklover",
        },
        {
          name: "HUSARÖ",
          type: "Poltrona,",
          utility: "exterior",
          imageSrc: "https://picsum.photos/300?random=3",
          normalPrice: 99,
          currentPrice: 85,
          rating: 4.5,
          avaliacoes: 10,
          link: "husaro",
        },
        {
          name: "HAUGA",
          type: "Roupeiro aberto",
          utility: "c/3 gavetas, 70x199 cm",
          imageSrc: "https://picsum.photos/300?random=4",
          normalPrice: 149,
          currentPrice: 119,
          rating: 3,
          avaliacoes: 24,
          link: "hauga",
        },
        {
          name: "BODARP",
          type: "Porta,",
          utility: "verde acinzentado, 60x80 cm",
          imageSrc: "https://picsum.photos/300?random=5",
          normalPrice: 50,
          currentPrice: 30,
          rating: 5,
          avaliacoes: 7,
          link: "bodarp",
        },
        {
          name: "SKYMNINGEN",
          type: "Candeeiro suspenso,",
          utility: "branco",
          imageSrc: "https://picsum.photos/300?random=6",
          normalPrice: 79,
          currentPrice: 59,
          rating: 5,
          avaliacoes: 3,
          link: "smymningen",
        },
        {
          name: "TRANGET",
          type: "Tapete, tecelagem plana,",
          utility: "feito à mão várias tonalidades azul 170x240 cm",
          imageSrc: "https://picsum.photos/300?random=7",
          normalPrice: 249,
          currentPrice: 199,
          rating: 4,
          avaliacoes: 10,
          link: "tangret",
        },
        {
          name: "PELARBOJ",
          type: "Candeeiro LED de mesa,",
          utility: "multicor",
          imageSrc: "https://picsum.photos/300?random=8",
          normalPrice: 20,
          currentPrice: 15,
          rating: 4.5,
          avaliacoes: 18,
          link: "pelarboj",
        },
      ],

      showcase1: [
        {
          nome: "FEJKA",
          tipo: "Planta Artificial em vaso,",
          utilidade: "9cm",
          imagem: "https://picsum.photos/300?random=1",
          precoNormal: 4.5,
          precoAtual: 4,
          rating: 4.5,
          avaliacoes: 8,
          link: "fejka",
        },
        {
          nome: "SKOGSKLÖVER",
          tipo: "Estore de correr,",
          utilidade: "120x195 cm",
          imagem: "https://picsum.photos/300?random=2",
          precoNormal: 35,
          precoAtual: 29,
          rating: 4,
          avaliacoes: 148,
          link: "skogsklover",
        },
        {
          nome: "HUSARÖ",
          tipo: "Poltrona,",
          utilidade: "exterior",
          imagem: "https://picsum.photos/300?random=3",
          precoNormal: 99,
          precoAtual: 85,
          rating: 4.5,
          avaliacoes: 10,
          link: "husaro",
        },
        {
          nome: "HAUGA",
          tipo: "Roupeiro aberto",
          utilidade: "c/3 gavetas, 70x199 cm",
          imagem: "https://picsum.photos/300?random=4",
          precoNormal: 149,
          precoAtual: 119,
          rating: 3,
          avaliacoes: 24,
          link: "hauga",
        },
      ],
      showcase2: [
        {
          nome: "BODARP",
          tipo: "Porta,",
          utilidade: "verde acinzentado, 60x80 cm",
          imagem: "https://picsum.photos/300?random=5",
          precoNormal: 50,
          precoAtual: 30,
          rating: 5,
          avaliacoes: 7,
          link: "bodarp",
        },
        {
          nome: "SKYMNINGEN",
          tipo: "Candeeiro suspenso,",
          utilidade: "branco",
          imagem: "https://picsum.photos/300?random=6",
          precoNormal: 79,
          precoAtual: 59,
          rating: 5,
          avaliacoes: 3,
          link: "smymningen",
        },
        {
          nome: "TRANGET",
          tipo: "Tapete, tecelagem plana,",
          utilidade: "feito à mão várias tonalidades azul 170x240 cm",
          imagem: "https://picsum.photos/300?random=7",
          precoNormal: 249,
          precoAtual: 199,
          rating: 4,
          avaliacoes: 10,
          link: "tangret",
        },
        {
          nome: "PELARBOJ",
          tipo: "Candeeiro LED de mesa,",
          utilidade: "multicor",
          imagem: "https://picsum.photos/300?random=8",
          precoNormal: 20,
          precoAtual: 15,
          rating: 4.5,
          avaliacoes: 18,
          link: "pelarboj",
        },
      ],
      showcase3: [
        {
          nome: "BJÖRKÅSEN",
          tipo: "Suporte p/portátil,",
          utilidade: "bege",
          imagem: "https://picsum.photos/300?random=9",
          precoNormal: 25,
          precoAtual: 19.99,
          rating: 4.5,
          avaliacoes: 3,
          link: "bjorkasen",
        },
        {
          nome: "ÄNGSLILJA",
          tipo: "Capa de edredão + fronha,",
          utilidade: "cinz, 150x200/50x60 cm",
          imagem: "https://picsum.photos/300?random=10",
          precoNormal: 19,
          precoAtual: 15,
          rating: 4,
          avaliacoes: 31,
          link: "angslilja",
        },
        {
          nome: "LISABO",
          tipo: "Mesa, chapa de freixo,",
          utilidade: "140x78 cm",
          imagem: "https://picsum.photos/300?random=11",
          precoNormal: 129,
          precoAtual: 99,
          rating: 4.5,
          avaliacoes: 27,
          link: "lisabo",
        },
        {
          nome: "SLATORP",
          tipo: "Roupeiro aberto,",
          utilidade: "c/3 gavetas, 70x199 cm",
          imagem: "https://picsum.photos/300?random=12",
          precoNormal: 799,
          precoAtual: 699,
          rating: 5,
          avaliacoes: 8,
          link: "slatorp",
        },
      ],

      filterButtons: [
        {
          label: "Quarto",
        },
        {
          label: "Sala",
        },
        {
          label: "Cozinha",
        },
        {
          label: "Escritório",
        },
        {
          label: "Exterior",
        },
        {
          label: "Quarto de criança e bebé",
        },
        {
          label: "Espaço de refeição",
        },
        {
          label: "Entrada",
        },
        {
          label: "Acessórios",
        },
        {
          label: "Acessórios",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.paginaLoja {
  & .outter-col {
    & .inner-row-1 {
      margin-bottom: 4rem;
    }
    & .inner-row-3 {
      margin-top: 1rem;
    }
  }
}
</style>
