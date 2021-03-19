<script>
import { computed } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const domH = computed(() => {
      return `${window.innerHeight-120}px`;
    });
    console.log(domH);
    return { domH };
  },
};
</script>

<template>
  <div class="box" :style="{ height: domH }">
    <h1 id="welcome">Chris Lo</h1>
    <img class="bannerIMG" src="@/assets/me2.jpg" alt="">
  </div>
</template>

<style lang="scss" scoped>
#nav{
  background-color: none;
}
.box {
  display: block;
  width: 100%;
  background-color: #256087;
  position: relative;
  > #welcome{
    position: absolute;
    top: 40%;
    left: 10%;
    font-size: 5rem;
    color: #FFAC87;
    z-index: 1000;
    font-weight:bolder;
    font-family: 'Trebuchet MS', sans-serif;
  }
  >.bannerIMG{
    height: 80%;
    position: absolute;
    top: 5%;
    right: 5%;
  }
}
</style>
