<script>
import Post from "@/components/Project/Post.vue";
import Under from "@/components/Project/Under.vue";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
export default {
  setup() {
    const routeIdx = ref(0);
    const routeArr = ["post", "under"];
    const route = useRoute();
    watch(
      () => route.path,
      () => {
        routeArr.forEach((item, index) => {
          const rp = route.path.substr(1);
          console.log("rp:", rp);

          if (rp === "project") {
            routeIdx.value = 0;
            console.log("rp1:", rp, "index:", index);
          } else {
            if (rp.split("/")[1] === item) {
              routeIdx.value = index;
              console.log("rp:", rp, "index:", index);
            }
          }
        });
      }
    );
    return { routeIdx };
  },
  components: {
    Post,
    Under,
  },
};
</script>
<template>
  <div class="subNav">
    <router-link :class="{ active: routeIdx === 0 }" to="/project/post"
      >Postgraduated</router-link
    >
    <router-link :class="{ active: routeIdx === 1 }" to="/project/under"
      >Undergraduated</router-link
    >
  </div>
  <router-view></router-view>
</template>

<style lang="scss" scoped>
.subNav {
  width: 100%;
  margin-top: 60px;
  > a {
    display: block;
    width: 48%;
    // margin: 0px % 0px 5%;
    text-decoration: none;
    font-size: 2rem;
    float: left;
    color: #063756;
    font-weight: bold;
    padding: 1%;
    border-radius: 2rem 2rem 0px 0px;
  }
  > .active {
    border-top: #865f01 solid 2px;
    background-color: #6183a8;
    color: #e0e1dd;
  }
}
</style>
