<template>
  <div class="gallery">
    <h1 class="heading">
      <span>g</span>
      <span>a</span>
      <span>l</span>
      <span>l</span>
      <span>e</span>
      <span>r</span>
      <span>y</span>
    </h1>

    <div class="box-container">
      <div class="box">
        <img src="./assets/g-1.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-2.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-3.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-4.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-5.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-6.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-7.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-8.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
      <div class="box">
        <img src="./assets/g-9.jpg" alt="" />
        <div class="content">
          <h3>amazing places</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
            tenetur.
          </p>
          <a href="#" class="btn">see more</a>
        </div>
      </div>
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
.gallery {
  padding: 2em;
  .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    .box {
      border-radius: 8px;
      flex: 1 1 30em;
      max-height: 20em;
      background: #fff;
      padding: 1em;
      box-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
      overflow: hidden;
      position: relative;
      &:hover {
        .content {
          top: 0;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .content {
        overflow: hidden;
        position: absolute;
        top: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        padding: 0 2em;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        h3 {
          color: var(--orange);
          font-size: 2.6em;
          font-weight: bold;
        }
        .btn {
          padding: 0.5em 2em;
        }
      }
    }
  }
}
</style>
