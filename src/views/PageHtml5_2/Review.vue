<template>
  <div class="review">
    <h1 class="heading">
      <span>r</span>
      <span>e</span>
      <span>v</span>
      <span>i</span>
      <span>e</span>
      <span>w</span>
    </h1>

    <div class="swiper-container review-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="box">
            <img src="./assets/pic1.png" alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores
              dolorum enim sint quod ipsam distinctio molestias consectetur
              ducimus beatae, reprehenderit exercitationem!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="box">
            <img src="./assets/pic2.png" alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores
              dolorum enim sint quod ipsam distinctio molestias consectetur
              ducimus beatae, reprehenderit exercitationem!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="box">
            <img src="./assets/pic3.png" alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores
              dolorum enim sint quod ipsam distinctio molestias consectetur
              ducimus beatae, reprehenderit exercitationem!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="box">
            <img src="./assets/pic4.png" alt="" />
            <h3>john deo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              adipisci quisquam sunt nesciunt fugiat odit minus illum asperiores
              dolorum enim sint quod ipsam distinctio molestias consectetur
              ducimus beatae, reprehenderit exercitationem!
            </p>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="far fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  // setup() {},
};
</script>
<style lang="scss" scoped>
@import "./public.scss";
.review {
  color: #333;
  padding: 0 2em;
  .swiper-container {
    width: 100%;
    .swiper-wrapper {
      .swiper-slide {
        display: inline-block;
        width: 30em;
        height: 40em;
      }
    }
  }
}
</style>
