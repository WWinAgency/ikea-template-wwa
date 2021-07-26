<template>
  <div class="header">
    <b-navbar>
      <div class="d-flex align-items-center">
        <div class="logo align-items-center mb-1">
          <a class="brand" href="/">
            <b-icon
              class="icon"
              icon="shop"
              scale="1.5"
              variant="dark"
            ></b-icon>
          </a>
        </div>
      </div>
      <div class="d-flex float-none">
        <b-navbar-nav>
          <b-nav-form>
            <b-form-input
              size="sm"
              placeholder=" O que procura? "
            ></b-form-input>
          </b-nav-form>
        </b-navbar-nav>
      </div>
      <div class="d-flex list-inline">
        <b-nav-item href="/delivery">
          <b-icon icon="truck" scale="0.9" variant="dark"></b-icon
        ></b-nav-item>
        <b-nav-item href="/profile"
          ><b-icon icon="person" scale="0.9" variant="dark"></b-icon
        ></b-nav-item>
        <b-nav-item href="/favorites"
          ><b-icon icon="heart" scale="0.9" variant="dark"></b-icon
        ></b-nav-item>
        <b-nav-item href="/basket"
          ><b-icon icon="basket3" scale="0.9" variant="dark"></b-icon
        ></b-nav-item>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
.header {
  width: 100%;
  margin: auto;
}
.navbar {
  justify-content: space-between !important;

  & .brand {
    background-color: white;
    border: none;
    width: 3rem;
    height: 3rem;
  }
}

.nav-link {
  padding: 8px !important;
}

.form-control {
  border: 1px solid #f5f5f5 !important;
  background-color: #f5f5f5 !important;
  border-radius: 50em !important;
  padding-left: 1.5rem !important;
  height: 40px !important;
  transition: 0.3s ease-in-out;

  @media (max-width: 400px) {
    width: 120px !important;
    text-align: left;
  }
  @media (min-width: 600px) {
    width: 300px !important;
  }
  @media (min-width: 768px) {
    width: 400px !important;
  }
  @media (min-width: 992px) {
    width: 600px !important;
  }
  @media (min-width: 1200px) {
    width: 700px !important;
  }
  @media (min-width: 1400px) {
    width: 800px !important;
  }

  &:hover {
    border: 1px solid #e0e0e0 !important;
    background-color: #e0e0e0 !important;
  }
}
</style>
