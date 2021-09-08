<template>
  <div class="checkoutPage">
    <div class="header"><HeaderCheckout /></div>
    <div class="content">
      <div class="container-desktop">
        <div class="col-1">
          <CheckoutInfo :subtotal="subtotal" />
        </div>
        <div class="col-2">
          <CheckoutTotal
            :subtotalSIVA="subtotalSIVA"
            :iva="iva"
            :subtotal="subtotal"
          />
        </div>
      </div>
      <div class="container-mobile">
        <div class="row-1">
          <CheckoutTotal
            :subtotalSIVA="subtotalSIVA"
            :iva="iva"
            :subtotal="subtotal"
          />
        </div>
        <div class="row-2">
          <CheckoutInfo />
        </div>
      </div>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import HeaderCheckout from "./components-checkout/HeaderCheckout.vue";
import Footer from "../Footer/Footer.vue";
import CheckoutInfo from "./components-checkout/CheckoutInfo.vue";
import CheckoutTotal from "./components-checkout/CheckoutTotal.vue";
export default {
  components: {
    HeaderCheckout,
    Footer,
    CheckoutInfo,
    CheckoutTotal,
  },
  data() {
    return {
      subtotalSIVA: 100,
      iva: undefined,
      subtotal: undefined,
    };
  },
  mounted() {
    this.calculateIva();
    this.calculateSubtotal();
  },
  methods: {
    calculateIva() {
      this.iva = this.subtotalSIVA * 0.23;
    },
    calculateSubtotal() {
      this.subtotal = this.subtotalSIVA + this.iva;
    },
  },
};
</script>

<style lang="scss">
.checkoutPage {
  & .header {
    margin-bottom: 2rem !important;
    width: 80%;
    height: 100% !important;
    margin: 2rem auto;
    transition: 0.3s ease-in-out;
    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 980px) {
      width: 90%;
      overflow: hidden;
    }
    @media (max-width: 768px) {
      width: 90%;
      overflow: hidden;
    }
  }
  & .content {
    width: 80%;
    height: 100% !important;
    margin: 2rem auto !important;
    transition: 0.3s ease-in-out;
    @media (max-width: 1200px) {
      width: 90%;
    }
    @media (max-width: 980px) {
      width: 90%;
      overflow: hidden;
    }
    @media (max-width: 768px) {
      width: 90%;
      overflow: hidden;
    }

    @media (max-width: 1200px) {
      margin: 0;
    }

    & .container-desktop {
      display: flex;
      max-width: 100%;
      justify-content: space-between;
      margin: 0;

      @media (max-width: 1000px) {
        display: none;
      }

      & .col-1 {
        width: 60%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1200px) {
          width: 50%;
        }
      }

      & .col-2 {
        width: 30%;
        display: flex;
        flex-direction: column;
        @media (max-width: 1200px) {
          width: 50%;
          margin-left: 3rem;
        }
        @media (max-width: 1000px) {
          width: 50%;
          margin-left: 1rem;
        }
      }
    }
    & .container-mobile {
      display: none;
      @media (max-width: 1000px) {
        display: flex;
        flex-direction: column;
      }

      & .row-1 {
        width: 100%;
        display: flex;
        flex-direction: row;
      }

      & .row-2 {
        width: 100%;
        display: flex;
        flex-direction: row;
      }
    }
  }
}
</style>
