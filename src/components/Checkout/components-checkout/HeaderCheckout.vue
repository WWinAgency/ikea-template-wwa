<template>
  <div class="headerCheckout">
    <div class="header-container">
      <div class="header-logo">
        <div class="logo">
          <a class="brand" href="/">IKEA</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.headerCheckout {
  display: flex;
  align-items: center;
  & .header-container {
    display: flex;
    align-items: center;
    & .header-logo {
      display: flex;
      align-items: center;

      @media (max-width: 950px) {
        margin-left: 0rem;
      }

      & .logo {
        display: flex;
        align-items: center;

        & .brand {
          background-color: blue;
          color: yellow;
          text-decoration: none;
          font-weight: 700;
          padding: 0.5rem 2rem 0.5rem 2rem;
          text-align: center;
        }
      }
    }
  }
}
</style>
