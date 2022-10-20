<template>
  <div class="header">
    <div class="menuController" @click="isShowNav = !isShowNav">
      <i class="fa" :class="isShowNav ? 'fa-times' : 'fa-bars'"></i>
    </div>
    <a class="logo">
      <span>T</span>
      RAVEL
    </a>
    <nav :class="isShowNav ? 'navShow' : ''">
      <a href="#home">home</a>
      <a href="#book">book</a>
      <a href="#packages">packages</a>
      <a href="#services">services</a>
      <a href="#gallery">gallery</a>
      <a href="#review">review</a>
      <a href="#contact">contact</a>
    </nav>
    <div class="icons">
      <i
        class="fa fa-search"
        aria-hidden="true"
        @click="searchActive = !searchActive"
      ></i>
      <i
        class="fa fa-user"
        aria-hidden="true"
        @click="userFormActive = true"
      ></i>
    </div>
    <form
      action=""
      class="search-bar-container"
      :class="searchActive ? 'searchActive' : ''"
    >
      <input type="search" id="search-bar" placeholder="search here..." />
      <label for="search-bar" class="fa fa-search"></label>
    </form>
    <div
      class="login-form-container"
      :class="userFormActive ? 'userFormActive' : ''"
    >
      <i
        class="fa fa-times"
        id="form-close"
        @click="userFormActive = false"
      ></i>

      <form action="">
        <h3>login</h3>
        <input type="email" class="box" placeholder="enter your email" />
        <input type="password" class="box" placeholder="enter your password" />
        <input type="submit" value="login now" class="btn" />
        <input type="checkbox" id="remember" />
        <label for="remember">remember me</label>
        <p>
          forget password?
          <a href="#">click here</a>
        </p>
        <p>
          don't have and account?
          <a href="#">register now</a>
        </p>
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    const searchActive = ref(false);
    const userFormActive = ref(false);
    const isShowNav = ref(false);
    return { searchActive, userFormActive, isShowNav };
  },
};
</script>
<style lang="scss" scoped>
@import "./public.scss";
.header {
  background: #333;
  padding: 2em 9%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .menuController {
    display: none;
  }

  .logo {
    font-size: 2.5em;
    font-weight: bold;
    span {
      color: var(--orange);
    }
  }
  nav a {
    font-size: 2.5em;
    padding: 0 0.5em;
    &:hover {
      color: var(--orange);
    }
  }
  .icons i {
    font-size: 2.2em;
    padding: 0 0.5em;
    cursor: pointer;
    &:hover {
      color: var(--orange);
    }
  }
  .search-bar-container {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    padding: 1.5em 2em;
    background: #333;
    display: flex;
    align-items: center;
    border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
    z-index: 1001;
    clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

    input {
      font-size: 2em;
      color: #333;
      width: 100%;
      padding: 0.5em;
      border-radius: 0.4em;
    }
    label {
      font-size: 2em;
      margin-left: 1em;
    }
  }
  .searchActive {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .login-form-container {
    position: fixed;
    top: -120%;
    left: 0;
    z-index: 10000;
    min-height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    .fa-times {
      position: absolute;
      font-size: 4em;
      top: 1em;
      right: 1em;
    }
    form {
      background: #fff;
      color: #333;
      width: 50em;
      padding: 2em;
      border-radius: 0.5em;
      h3 {
        font-size: 3em;
        text-align: center;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0.4em 0;
      }
      .box {
        width: 100%;
        font-size: 1.7em;
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 0.8em;
        margin: 0.4em 0;
      }
      .box:focus {
        border-color: var(--orange);
      }
      .btn {
        display: block;
        width: 100%;
      }
      #remember {
        margin: 2em 0;
      }
      p {
        line-height: 2.6em;
        a {
          color: var(--orange);
          &:hover {
            text-decoration: underline;
            color: #333;
          }
        }
      }
    }
  }
  .userFormActive {
    top: 0%;
  }
}
@media screen and (max-width: 1280px) {
  .header {
    padding: 2em;
  }
}
@media screen and (max-width: 991px) {
  .header {
    font-size: 0.8em;
  }
}
@media screen and (max-width: 768px) {
  .header {
    .menuController {
      display: block;
      height: 5em;
      width: 5em;
      text-align: center;
      line-height: 5em;
      display: inline-block;
      border: 2px solid #fff;
      color: #fff;
      border-radius: 5px;
      cursor: pointer;
      i {
        font-size: 2.5em;
      }
    }

    nav {
      z-index: 1000;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: #333;
      padding: 2em 1.8em;
      border-top: 0.1rem solid rgba(255, 255, 255, 0.2);
      clip-path: polygon(0 0, 100% 0, 100% 0, 0 0);

      a {
        display: block;
        width: 100%;
        border-radius: 6px;
        font-size: 2em;
        background: #222;
        padding: 0.6em;
        margin-bottom: 0.6em;
      }
    }
    .navShow {
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }
  }
}
</style>
