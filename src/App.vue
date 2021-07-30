<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style lang="scss">
#app {
  width: 80%;
  margin: 1rem auto;
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
</style>
