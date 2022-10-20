<template>
  <div class="packages">
    <h1 class="heading">
      <span>p</span>
      <span>a</span>
      <span>c</span>
      <span>k</span>
      <span>a</span>
      <span>g</span>
      <span>e</span>
      <span>s</span>
    </h1>

    <div class="box-container">
      <div class="box">
        <img src="./assets/p-1.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            mumbai
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>

      <div class="box">
        <img src="./assets/p-2.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            hawaii
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>

      <div class="box">
        <img src="./assets/p-3.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            sydney
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>

      <div class="box">
        <img src="./assets/p-4.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            paris
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>

      <div class="box">
        <img src="./assets/p-5.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            tokyo
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>

      <div class="box">
        <img src="./assets/p-6.jpg" alt="" />
        <div class="content">
          <h3>
            <i class="fa fa-map-marker-alt"></i>
            eypt
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
            nam!
          </p>
          <div class="stars">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-o"></i>
          </div>
          <div class="price">
            $90.00
            <span>$120.00</span>
          </div>
          <a href="#" class="btn">book now</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  //   setup() { a},
};
</script>
<style lang="scss" scoped>
@import "./public.scss";

.packages {
  color: #333;
  .box-container {
    padding: 2em;
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    .box {
      flex: 1 1 30em;
      border-radius: 1em;
      overflow: hidden;
      box-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
      img {
        width: 100%;
        height: 25em;
        object-fit: cover;
      }
      .content {
        padding: 2em 1.5em;
        h3 {
          font-size: 2.2em;
          font-weight: bold;
        }
        p {
          font-size: 1.8em;
          color: #666;
          line-height: 1.6em;
        }
        .stars {
          color: var(--orange);
          font-size: 2em;
          padding: 0.4em 0;
          i {
            margin-right: 0.2em;
          }
        }
        .price {
          font-size: 2em;
          span {
            color: #666;
            font-size: 0.8em;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 768px) {
  .box {
    flex: 1 1 100%;
  }
}
</style>
