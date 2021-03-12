<script>
import Education from "@/components/About/Education.vue";
import Work from "@/components/About/Work.vue";
import AboutMe from "@/components/About/AboutMe.vue"
export default {
  components: {
    Education,
    Work,
    AboutMe,
  },
};
</script>

<template>
  <div class="container">
    <div class="box">
      <AboutMe />
    </div>
    <div class="box"></div>
    <div class="box">
      <Education />
    </div>
    <div class="box">
      <Work />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 164px;
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
