<template>
  <div class="book">
    <h1 class="heading">
      <span>b</span>
      <span>o</span>
      <span>o</span>
      <span>k</span>
      <span class="space"></span>
      <span>n</span>
      <span>o</span>
      <span>w</span>
    </h1>

    <div class="row">
      <div class="image">
        <img src="./assets/book-img.svg" alt="" />
      </div>

      <form action="">
        <div class="inputBox">
          <h3>where to</h3>
          <input type="text" placeholder="place name" />
        </div>
        <div class="inputBox">
          <h3>how many</h3>
          <input type="number" placeholder="number of guests" />
        </div>
        <div class="inputBox">
          <h3>arrivals</h3>
          <input type="date" />
        </div>
        <div class="inputBox">
          <h3>leaving</h3>
          <input type="date" />
        </div>
        <input type="submit" class="btn" value="book now" />
      </form>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue';
export default {
  //   setup() { },
};
</script>
<style lang='scss' scoped>
@import "./public.scss";
.book {
  padding: 3em 4em;
  .heading {
    text-align: center;
    padding: 2em 0;
    span {
      display: inline-block;
      font-size: 4em;
      padding: 0 0.3em;
      border-radius: 10px;
      font-weight: bold;
      color: var(--orange);
      background: rgba(255, 165, 0, 0.2);
      margin-right: 0.1em;
    }
  }
  .row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
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
        h3 {
          font-size: 2.2em;
          font-weight: bold;
          padding: 0.5em 0;
        }
        input {
          width: 100%;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 1.8em;
          padding: 0.4em 1em;
          border-radius: 5px;
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .book {
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
</style>