<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,Footer,
  },
};
</script>
<template>
  <Header />
  <div class="viewBox">
    <router-view />
  </div>
  <Footer />
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  padding: 0px;
  margin: 0px;
}
.viewBox{
  margin-top: 60px;
  width: 90%;
  margin-left: 5%;
  background-color: #fff;
  // margin-bottom: 60px;
}
</style>
