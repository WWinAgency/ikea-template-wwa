<template>
  <div class="descriptionSidebar">
    <div class="sidebar-text-row">
      <div class="sidebar-text-col-1">{{ tituloSidebar }}</div>
      <div class="sidebar-text-col-2">
        <button class="sidebar-button" v-b-toggle.sidebar-right>
          <b-icon icon="arrow-right" scale="1.6" variant="dark"></b-icon>
        </button>
      </div>
    </div>

    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          fluid
          thumbnail
        ></b-img>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  props: {
    tituloSidebar: String,
  },
};
</script>

<style lang="scss">
.descriptionSidebar {
  position: relative;
  & .sidebar-text-row {
    display: inline-block;
    & .sidebar-text-col-1 {
      float: left;
    }
    & .sidebar-text-col-2 {
      position: absolute;
      right: 0;
      float: right;
      & .sidebar-button {
        border: none;
        background-color: white !important;

        @media (max-width: 950px) {
          margin-top: 0.2rem;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
