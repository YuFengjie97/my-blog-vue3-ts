<template>
  <div class="services">
    <h1 class="heading">
      <span>s</span>
      <span>e</span>
      <span>r</span>
      <span>v</span>
      <span>i</span>
      <span>c</span>
      <span>e</span>
      <span>s</span>
    </h1>

    <div class="box-container">
      <div class="box">
        <i class="fa fa-hotel"></i>
        <h3>affordable hotels</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
      </div>
      <div class="box">
        <i class="fa fa-cutlery"></i>
        <h3>food and drinks</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
      </div>
      <div class="box">
        <i class="fa fa-bullhorn"></i>
        <h3>safty guide</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
      </div>
      <div class="box">
        <i class="fa fa-globe"></i>
        <h3>around the world</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
      </div>
      <div class="box">
        <i class="fa fa-plane"></i>
        <h3>fastest travel</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
      </div>
      <div class="box">
        <i class="fa fa-map-signs"></i>
        <h3>adventures</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore
          commodi earum, quis voluptate exercitationem ut minima itaque iusto
          ipsum corrupti!
        </p>
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

.services {
  background: #fff;
  color: #333;
  padding: 0 2em;
  text-align: center;
  margin-bottom: 2em;
  .heading {
    margin-bottom: 2em;
  }
  .box-container {
    display: flex;
    flex-wrap: wrap;
    gap: 2em;
    .box {
      flex: 1 1 30em;
      margin-bottom: 2em;
      padding: 1em 0;
      &:hover {
        box-shadow: 0 1rem 2rem rgb(0 0 0 / 10%);
      }
      i {
        color: var(--orange);
        font-size: 3em;
      }
      h3 {
        font-size: 2em;
        font-weight: bold;
        padding: 0.5em 0;
      }
      p {
        color: #666;
        line-height: 2em;
      }
    }
  }
}
</style>
