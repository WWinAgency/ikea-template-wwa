<template>
  <div class="info">
    <div class="info-col">
      <li class="info-row">
        <h1>
          <strong>{{ titulo }}</strong>
        </h1>
      </li>
      <li class="info-row">
        <h2>
          {{ body }}
        </h2>
      </li>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titulo: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.info {
  width: 100%;
  background-color: #f5f5f5;
  margin: 0 !important;

  & .info-col {
    list-style: none;
    width: 100%;
    padding: 2rem;

    @media (max-width: 380px) {
      padding: 1rem;
    }

    & .info-row {
      @media (max-width: 380px) {
        margin-bottom: 2rem;
      }
      & h1 {
        font-size: 1.5625rem;
        line-height: 1.9rem;
        letter-spacing: -0.02625rem;
      }

      & h2 {
        font-size: 0.875rem;
        line-height: 1.36rem;
        line-height: 1.571rem;
      }
    }
  }
}
</style>
