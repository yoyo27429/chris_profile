<script>
import { computed } from "vue";
export default {
  name: "Home",
  components: {},
  setup() {
    const domH = computed(() => {
      return `${window.innerHeight}px`;
    });
    console.log(domH);
    return { domH };
  },
};
</script>

<template>
  <div class="box" :style="{ height: domH }">
    <h1 id="welcome">Hello! I'm Chris Lo</h1>
  </div>
</template>

<style lang="scss" scoped>
#nav{
  background-color: none;
}
.box {
  display: block;
  width: 100%;
  background-image: url("~@/assets/bgc.jpg");
  background-size: cover;
  > #welcome{
    position: fixed;
    top: 30%;
    left: 5%;
    font-size: 5rem;
    color: antiquewhite;
  }
}
</style>
