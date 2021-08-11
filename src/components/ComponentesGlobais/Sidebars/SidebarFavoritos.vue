<template>
  <div class="sidebarFavoritos">
    <button class="sidebar-button" v-b-toggle.sidebar-share>
      <span class="button-icon">
        <b-icon icon="three-dots" scale="1.5" variant="dark"></b-icon
      ></span>
    </button>
    <b-sidebar right id="sidebar-share">
      <div class="sidebar-col">
        <div class="sidebar-share-row-1">
          <div class="row-1-inner-col">
            <div class="row-1-inner-row-1">
              <strong>Política de Privacidade</strong>
            </div>
            <div class="row-1-inner-row-1">Política de Privacidade</div>
          </div>
        </div>
        <div class="sidebar-share-row-2">
          <div class="inner-col-1">
            <b-icon icon="brush-fill" scale="1.5" variant="dark"></b-icon>
          </div>
          <div class="inner-col-2"><a href="#">Pinterest</a></div>
        </div>
        <div class="sidebar-share-row-3">
          <div class="inner-col-1">
            <b-icon icon="facebook" scale="1.5" variant="dark"></b-icon>
          </div>
          <div class="inner-col-2"><a href="#">Facebook</a></div>
        </div>
        <div class="sidebar-share-row-4">
          <div class="inner-col-1">
            <b-icon icon="twitter" scale="1.5" variant="dark"></b-icon>
          </div>
          <div class="inner-col-2"><a href="#">Twitter</a></div>
        </div>
        <div class="sidebar-share-row-5">
          <div class="inner-col-1">
            <b-icon icon="link-45deg" scale="1.5" variant="dark"></b-icon>
          </div>
          <div class="inner-col-2"><a href="#">Copiar ligação</a></div>
        </div>
      </div>
    </b-sidebar>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.b-sidebar > .b-sidebar-header {
  position: relative;

  & .close {
    position: absolute;
    top: 2rem;
    right: 2rem;

    border: none !important;
    background-color: #f8f9fa !important;
    transition: width 2s, height 2s, transform 2s;

    &:hover {
      transform: rotate(180deg);
    }
  }
}

.sidebarFavoritos {
  .b-sidebar {
    width: 450px !important;

    @media (max-width: 380px) {
      width: 100% !important;
    }

    & .sidebar-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 6rem 3rem 2rem 3rem;

      & .sidebar-share-row-1 {
        display: flex;
        flex-direction: row;
        padding: 0 0 2.5rem 0;
      }
      & .sidebar-share-row-2 {
        display: flex;
        flex-direction: row;
        padding: 2rem 0 2rem 0;

        & .inner-col-1 {
          padding-right: 1rem;
        }
        & .inner-col-2 {
          & a {
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      & .sidebar-share-row-3 {
        display: flex;
        flex-direction: row;
        padding: 2rem 0 2rem 0;

        & .inner-col-1 {
          padding-right: 1rem;
        }
        & .inner-col-2 {
          & a {
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      & .sidebar-share-row-4 {
        display: flex;
        flex-direction: row;
        padding: 2rem 0 2rem 0;

        & .inner-col-1 {
          padding-right: 1rem;
        }
        & .inner-col-2 {
          & a {
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      & .sidebar-share-row-5 {
        display: flex;
        flex-direction: row;
        padding: 2rem 0 2rem 0;

        & .inner-col-1 {
          padding-right: 1rem;
        }
        & .inner-col-2 {
          & a {
            text-decoration: none;
            color: black;

            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
    }
  }
  & .sidebar-button {
    color: black;
    text-decoration: none;
    background-color: white;
    border: none;

    & .button-icon {
      display: flex;
      align-items: center;
      background-color: white;
      padding: 0.7rem;
      border-radius: 64px;
      justify-content: center;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>
