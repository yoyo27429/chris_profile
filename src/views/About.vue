<script>
import Education from "@/components/About/Education.vue";
import Work from "@/components/About/Work.vue";
import AboutMe from "@/components/About/AboutMe.vue";
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
    <div class="box bg1">
      <AboutMe />
    </div>
    <!-- <div class="box"></div> -->
    <div class="box bg2">
      <Education />
    </div>
    <div class="box bg3">
      <Work />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 60px;
  > .box {
    width: 90%;
    padding: 5%;
    // margin: 50px 5% 50px 5%;
    min-height: 50px;
    display: block;
    // height: 100px;
    overflow: auto;
  }
  .bg1 {
    background-color: #E98457;
  }
  .bg2 {
    background-color: #FFAC87D3;
  }
  .bg3{
    background-color: #D36330;
  }
}
</style>
