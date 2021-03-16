<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const idx = ref(0);
    const linkArr = ["", "about", "project", "gallery"];
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        linkArr.forEach((item, index) => {
          const rp = route.path.substr(1);
          if (rp === item) {
            idx.value = index;
          }
        });
      }
    );
    return { idx };
  },
};
</script>

<template>
  <div id="header">
    <router-link :class="['nameLink', { active: idx === 0 }]" to="/"
      >Chris Lo</router-link
    >
    <div id="nav">
      <ul>
        <li>
          <router-link :class="{ active: idx === 0 }" to="/">Home</router-link>
        </li>
        <li>
          <router-link :class="{ active: idx === 1 }" to="/about"
            >About</router-link
          >
        </li>
        <li>
          <router-link :class="{ active: idx === 2 }" to="/project"
            >Project</router-link
          >
        </li>
        <li>
          <router-link :class="{ active: idx === 3 }" to="/gallery"
            >Gallery</router-link
          >
        </li>
      </ul>
    </div>
  </div>
  <!-- <router-link to="">Home</router-link>
  <router-link to="">About</router-link>
  <router-link to="">Project</router-link>
  <router-link to="">Gallery</router-link> -->
</template>

<style lang="scss" scoped>
.bgc {
  background-color: #468ad0;
}
#header {
  width: 100%;
  position: fixed;
  height: 60px;
  top: 0px;
  z-index: 999999;
  background-color: #fff;
  > .nameLink {
    color: rgb(0, 28, 97);
    text-decoration: none;
    font-size: 2rem;
    font-weight: bold;
    line-height: 60px;
  }
  > #nav {
    width: 60%;
    float: right;
    margin-right: 5%;
    > ul > li {
      display: block;
      float: left;
      width: 23%;
      padding: 10px 1% 10px 1%;
      // margin-top: 30px;
      > a {
        color: rgb(0, 28, 97);
        text-decoration: none;
        font-size: 1.3rem;
        font-weight: bold;
        line-height: 40px;
      }
    }
  }
  > ul > li > .active {
    // background-color: #fff
    color: black;
  }
}
</style>
