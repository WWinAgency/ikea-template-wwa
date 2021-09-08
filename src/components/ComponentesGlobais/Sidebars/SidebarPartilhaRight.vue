<template>
  <div class="sidebarPartilhaRight">
    <button class="sidebar-button" v-b-toggle.sidebar-share-right>
      <span class="button-icon">
        <b-icon icon="box-arrow-up" scale="1.5" variant="dark"></b-icon
      ></span>
      <span class="button-text">
        <strong>Partilhar</strong>
      </span>
    </button>
    <b-sidebar right id="sidebar-share-right">
      <div class="sidebar-col">
        <div class="sidebar-share-row-1">
          <div class="row-1-inner-col"></div>
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

.sidebarPartilhaRight {
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
    background-color: #f5f5f5;
    border: 1px solid #f5f5f5;
    color: black;
    text-decoration: none;
    border-radius: 64px;
    height: 2.5rem;
    display: inline-flex;
    align-items: center;
    overflow: hidden;
    width: auto;
    max-width: 2.5rem;
    -webkit-transition: max-width 0.5s;
    transition: max-width 0.5s;

    &:hover {
      max-width: 20rem;
      padding: 0 1rem 0 1rem;
      background-color: #c8c8c8;
      border: 1px solid #c8c8c8;
    }

    @media (max-width: 1200px) {
      overflow: inherit;
      max-width: 20rem;
      padding: 0 1rem 0 1rem;
      background-color: #f5f5f5;
      border: 1px solid #f5f5f5;
    }

    & .button-icon {
      padding-left: 6px;
      display: flex;
      align-items: center;
    }

    & .button-text {
      white-space: nowrap;
      padding-left: 1rem;
      font-size: 0.8rem;
      line-height: 1.3333333333;
    }
  }
}
</style>
