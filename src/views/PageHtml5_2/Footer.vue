<template>
  <div class="footer">
    <div class="box-container">
      <div class="box">
        <h3>about us</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          quas magni pariatur est accusantium voluptas enim nemo facilis sit
          debitis.
        </p>
      </div>
      <div class="box">
        <h3>branch locations</h3>
        <a href="#">india</a>
        <a href="#">USA</a>
        <a href="#">japan</a>
        <a href="#">france</a>
      </div>
      <div class="box">
        <h3>quick links</h3>
        <a href="#">home</a>
        <a href="#">book</a>
        <a href="#">packages</a>
        <a href="#">services</a>
        <a href="#">gallery</a>
        <a href="#">review</a>
        <a href="#">contact</a>
      </div>
      <div class="box">
        <h3>follow us</h3>
        <a href="#">facebook</a>
        <a href="#">instagram</a>
        <a href="#">twitter</a>
        <a href="#">linkedin</a>
      </div>
    </div>

    <h1 class="credit">
      created by
      <span>mr. web designer</span>
      | all rights reserved!
    </h1>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.footer {
  background: #333;
  padding: 2em 10em;
  .box-container {
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    .box {
      flex: 1 1 30em;
      h3 {
        font-size: 3em;
        font-weight: bold;
        margin: 0.6em 0;
      }
      p {
        font-size: 1.5em;
        line-height: 1.8em;
      }
      a {
        display: block;
        font-size: 1.8em;
        margin-bottom: 1em;
      }
    }
  }
  .credit {
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding: 1em;
    font-size: 2.4em;
    text-align: center;
    span {
      color: var(--orange);
    }
  }
}
</style>
