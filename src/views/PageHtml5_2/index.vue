<template>
  <div class="pageHtml5_2">
    <div class="pageContainer">
      <top-header />
      <swipper />
      <book />
      <packages />
      <services />
      <gallery />
      <!-- <review /> -->
      <contact />
      <page-footer />
    </div>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Swipper from "./Swipper.vue";
import Book from "./Book.vue";
import Packages from "./Packages.vue";
import Services from "./Services.vue";
import Gallery from "./Gallery.vue";
// import Review from "./Review.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";
export default {
  components: {
    TopHeader: Header,
    Swipper,
    Book,
    Packages,
    Services,
    Gallery,
    // Review,
    Contact,
    pageFooter: Footer,
  },
  //   setup() {},
};
</script>
<style lang="scss" scoped>
.pageHtml5_2 {
  font-family: "Nunito", sans-serif;
  --orange: #ffa500;
  color: #fff;
  .pageContainer {
    height: 100vh;
    overflow-x: hidden;
    overflow-y: scroll;
  }
}
@media (max-width: 1200px) {
  .pageHtml5_2 {
    font-size: 75%;
  }
}
@media screen and (max-width: 444px) {
  .pageHtml5_2 {
    font-size: 35%;
  }
}
</style>
