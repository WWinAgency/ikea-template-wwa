<template>
  <div class="midAdvert">
    <b-card
      :img-src="imageLoungeMid"
      img-alt="Card image"
      img-left
      class="image-card"
    >
      <b-card-text class="text-card d-flex">
        <ul class="text-container">
          <li class="text-top">
            <h1><strong>O Design é para ser tocado</strong></h1>
          </li>
          <li class="text-top">
            <h2>
              Para a IKEA, o design vai muito além da estética. Vai até onde a
              nossa imaginação quiser. Para o provarmos, desafiámos o Noiserv,
              um dos músicos portugueses mais inventivos e versáteis, a compor
              um tema usando apenas móveis e acessórios IKEA. Assim surge o
              Homemade Jingle, uma melodia original e divertida que nos evoca os
              sons da vida em casa.
              <strong>Porque o design é para ser vivido.</strong>
            </h2>
          </li>
          <li class="text-bottom">
            <h3>
              LINNEBÄCK
            </h3>
            <h3>
              Poltrona 39€/ud
            </h3>
          </li>
          <b-button class="button-midAdvert"
            >Ver homemade Jingle by Noiserv
          </b-button>
        </ul>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>
import imageLoungeMid from "@/assets/images/outside-lounge.jpg";
export default {
  data: function() {
    return {
      imageLoungeMid: imageLoungeMid,
    };
  },
};
</script>

<style lang="scss">
.midAdvert {
  width: 100%;
  margin: 4rem auto;

  & .image-card {
    & img {
      width: 70%;

      @media (max-width: 1400px) {
        width: 100%;
      }
    }
    @media (max-width: 1400px) {
      width: 100%;
      flex-direction: column !important;
      margin: auto;
    }

    & .card-body {
      background-color: #046f88;
      width: 30%;

      @media (max-width: 1400px) {
        width: 100%;
      }

      & .text-card {
        text-align: left;

        & .text-container {
          display: flex;
          flex-direction: column;
          margin: 2rem auto 2rem auto;
          list-style: none;
          padding: 1rem !important;

          & .text-top {
            margin-bottom: 0.7rem;
            & h1 {
              font-size: 1.125rem;
              color: white;
            }
            & h2 {
              font-size: 0.825rem;
              line-height: 1.2rem;
              color: white;
            }
          }

          & .text-bottom {
            margin-top: 1rem;
            margin-bottom: 1rem;
            & h3 {
              font-size: 0.875rem;
              line-height: 1.571rem;
              color: white;
              font-weight: bold;

              &:hover {
                color: black;
                text-decoration: underline;
              }
            }
          }

          & .button-midAdvert {
            height: 2.5rem;
            width: 18rem;
            padding: 0 1.5rem;
            background-color: white;
            color: black;
            border-radius: 64px;
            border: none;
            font-size: 0.875rem;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
