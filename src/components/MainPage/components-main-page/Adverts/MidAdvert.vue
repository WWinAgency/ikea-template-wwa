<template>
  <div class="midAdvert">
    <b-card
      :img-src="imageLoungeMid"
      img-alt="Card image"
      img-left
      class="image-card"
    >
      <b-card-text class="text-card d-flex">
        <div class="text-col">
          <div class="text-row">
            <h1><strong>O Design é para ser tocado</strong></h1>
          </div>
          <div class="text-row">
            <h2>
              Para a IKEA, o design vai muito além da estética. Vai até onde a
              nossa imaginação quiser. Para o provarmos, desafiámos o Noiserv,
              um dos músicos portugueses mais inventivos e versáteis, a compor
              um tema usando apenas móveis e acessórios IKEA. Assim surge o
              Homemade Jingle, uma melodia original e divertida que nos evoca os
              sons da vida em casa.
              <strong>Porque o design é para ser vivido.</strong>
            </h2>
          </div>
          <li class="text-bottom">
            <h3>
              LINNEBÄCK
            </h3>
            <h3>
              Poltrona 39€/ud
            </h3>
          </li>
          <b-button class="button-midAdvert" variant="light"
            >Ver homemade Jingle by Noiserv</b-button
          >
        </div>
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
  margin: 0 !important;

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

        & .text-col {
          display: flex;
          flex-direction: column;
          margin: 2rem auto 2rem auto;
          list-style: none;
          padding: 1rem !important;

          @media (max-width: 380px) {
            padding: 0.5rem !important;
          }

          & .text-row {
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
            background-color: #f5f5f5;
            border: 1px solid #f5f5f5;
            border-radius: 64px;
            border: none;
            font-size: 0.7rem;
            font-weight: bold;

            &:hover {
              background-color: #e0e0e0;
              border: 1px solid #e0e0e0;
            }
          }
        }
      }
    }
  }
}
</style>
