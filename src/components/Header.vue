<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
export default {
  setup() {
    const idx = ref(0);
    const isBgc = ref(false);
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
        if (idx.value === 1 || 2 || 3) {
          isBgc.value = true;
        }
        if (idx.value === 0) {
          isBgc.value = false;
        }
      }
    );
    return { idx, isBgc };
  },
};
</script>

<template>
  <div id="nav" :class="{ bgc: isBgc }">
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
  <!-- <router-link to="">Home</router-link>
  <router-link to="">About</router-link>
  <router-link to="">Project</router-link>
  <router-link to="">Gallery</router-link> -->
</template>

<style lang="scss" scoped>
.bgc {
  background-color:#468AD0;
}
#nav {
  width: 100%;
  position: fixed;
  height: 60px;
  top: 0px;
  > ul > li {
    display: block;
    float: left;
    width: 23%;
    padding: 10px 1% 10px 1%;
    // margin-top: 30px;
    > a {
      color: rgb(0, 28, 97);
      text-decoration: none;
      font-size: 2rem;
      font-weight: bold;
    }
  }
  > ul >li> .active {
    // background-color: #fff
    color: #fff;
  }
}
</style>
