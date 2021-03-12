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
  <div class="container">
    <div class="subNav">
      <router-link to="/project/post">Postgraduated</router-link>
      <router-link to="/project/under">Undergraduated</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 114px;
  .subNav {
    width: 50%;
    margin-left: 25%;
    height: 100px;
    > a {
      display: block;
      width: 40%;
      margin: 0px 5% 0px 5%;
      text-decoration: none;
      font-size: 2rem;
      float: left;
      color: #fff;
      background-color: #f7ab54;
      border-radius: 2rem;
    }
  }
  > .box {
    width: 90%;
    margin: 50px 5% 50px 5%;
    min-height: 150px;
    display: block;
    // height: 100px;
    // overflow: auto;
  }
}
</style>
