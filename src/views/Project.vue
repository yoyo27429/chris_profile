<script>
import Post from "@/components/Project/Post.vue";
import Under from "@/components/Project/Under.vue";
export default {
  components: {
    Post,
    Under,
  },
};
</script>
<template>
  <div class="subNav">
    <router-link to="/project/post">Postgraduated</router-link>
    <router-link to="/project/under">Undergraduated</router-link>
  </div>
  <!-- <div class="container"> -->
    <router-view></router-view>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.subNav {
  width: 50%;
  margin-left: 25%;
  height: 100px;
  margin-top: 100px;
  > a {
    display: block;
    width: 40%;
    margin: 0px 5% 0px 5%;
    text-decoration: none;
    font-size: 2rem;
    float: left;
    color: #d36330;
    font-weight: bold;
    // background-color: #f7ab54;
  }
}
// .container {
//   width: 100%;
//   background-color: #256087;
//   overflow: auto;
// }
</style>
