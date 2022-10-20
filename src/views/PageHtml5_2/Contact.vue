<template>
  <div class="contact">
    <h1 class="heading">
      <span>c</span>
      <span>o</span>
      <span>n</span>
      <span>t</span>
      <span>a</span>
      <span>c</span>
      <span>t</span>
    </h1>

    <div class="row">
      <div class="image">
        <img src="./assets/contact-img.svg" alt="" />
      </div>

      <form action="">
        <div class="inputBox">
          <input type="text" placeholder="name" />
          <input type="email" placeholder="email" />
        </div>
        <div class="inputBox">
          <input type="number" placeholder="number" />
          <input type="text" placeholder="subject" />
        </div>
        <textarea
          placeholder="message"
          name=""
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <input type="submit" class="btn" value="send message" />
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  //   setup() {},
};
</script>
<style lang="scss" scoped>
@import "./public.scss";
.contact {
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .image {
    width: calc(50% - 1em);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  form {
    width: calc(50% - 1em);
    color: #666;
    box-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
    padding: 4em;
    .inputBox {
      display: flex;
      gap: 1em;
      margin-bottom: 1em;
      input {
        width: 50%;
        font-size: 1.8em;
        padding: 0.5em 1em;
        border-radius: 5px;
        background: #f7f7f7;
      }
    }
    textarea {
      width: 100%;
      font-size: 1.8em;
      padding: 0.4em 1em;
      border-radius: 5px;
      background: #f7f7f7;
    }
  }
}
@media screen and (max-width: 768px) {
  .contact {
    .row {
      .image {
        width: 100%;
      }
      form {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 444px) {
  .contact form .inputBox {
    flex-wrap: wrap;
    input {
      width: 100%;
    }
  }
}
</style>
