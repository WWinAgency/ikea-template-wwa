<template>
  <div class="header">
    <b-navbar>
      <div class="col-1">
        <div class="sidebar">
          <Sidebar />
        </div>
      </div>
      <div class="col-2">
        <div class="header-logo d-flex align-items-center">
          <div class="logo align-items-center mb-1">
            <a class="brand" href="/">IKEA</a>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="header-form d-flex float-none">
          <div class="input-group rounded">
            <input
              type="search"
              class="form-control rounded"
              placeholder="O que procura?"
              aria-label="Search"
              aria-describedby="search-addon"
            />
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="header-icons d-flex list-inline">
          <b-nav-item class="icon-1" href="/profile"
            ><b-icon icon="person" scale="1.2" variant="dark"></b-icon
          ></b-nav-item>
          <b-nav-item class="icon-2" href="/favorites"
            ><b-icon icon="heart" scale="0.9" variant="dark"></b-icon
          ></b-nav-item>
          <b-nav-item class="icon-3" href="/basket"
            ><b-icon icon="basket3" scale="0.9" variant="dark"></b-icon
          ></b-nav-item>
        </div>
      </div>
    </b-navbar>
  </div>
</template>

<script>
import Sidebar from "./Sidebar.vue";
export default {
  components: { Sidebar },
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 100%;
  margin: auto;
  align-items: center;

  & .navbar {
    width: 100%;
    display: inline-block;
    padding: 0;
    position: relative;

    & .nav-link {
      padding: 8px !important;
    }

    & .col-1 {
      height: 40px;
      width: 5%;
      float: left;
      align-items: center;

      @media (max-width: 950px) {
        width: 7%;
        float: right;
      }
      @media (max-width: 500px) {
        width: 10%;
        float: right;
      }

      & .sidebar {
        display: flex;
        height: 40px;
        @media (max-width: 950px) {
          position: absolute;
          right: 0;
        }
      }
    }
    & .col-2 {
      display: flex;
      height: 40px;
      width: 10%;
      float: left;
      justify-content: center;

      @media (max-width: 950px) {
        float: left;
        width: 20%;
        position: absolute;
        left: 0;
        justify-content: flex-start;
      }

      & .header-logo {
        @media (max-width: 950px) {
          margin-left: 0rem;
        }

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
    & .col-3 {
      width: 70%;
      height: 40px;
      float: left;
      align-items: center;
      margin-left: 2rem;

      @media (max-width: 1500px) {
        width: 65%;
        margin-left: 2rem;
      }
      @media (max-width: 1000px) {
        width: 60%;
        margin-left: 2rem;
      }

      @media (max-width: 950px) {
        width: 100% !important;
        text-align: left;
        position: absolute;
        bottom: 1;
        left: 0;
        margin-top: 4rem !important;
        padding: 0;
        margin-left: 0 !important;
      }

      & .header-form {
        @media (max-width: 950px) {
          margin-left: 0 !important;
        }
        & .form-control {
          border: 1px solid #f5f5f5 !important;
          background-color: #f5f5f5 !important;
          border-radius: 50em !important;
          padding-left: 1.5rem !important;
          height: 40px !important;
          transition: 0.3s ease-in-out;

          &:hover {
            border: 1px solid #e0e0e0 !important;
            background-color: #e0e0e0 !important;
          }
        }
      }
    }
    & .col-4 {
      display: flex;
      height: 40px;
      width: 5%;
      float: right;

      position: relative;
      @media (max-width: 950px) {
        float: right;
        width: 50%;
      }
      & .header-icons {
        position: absolute;
        right: 0;
        align-items: center;
        padding: 0;

        & .icon-1 {
          margin-right: 0.5rem;
          margin-bottom: 0.1rem !important;
        }
        & .icon-2 {
          margin-right: 0.5rem;
          margin-bottom: 0.1rem !important;
        }
        & .icon-3 {
          margin-bottom: 0.3rem !important;

          @media (max-width: 950px) {
            margin-right: 2rem;
          }
        }
      }
    }
  }
}
</style>
