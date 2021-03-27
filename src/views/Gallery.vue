<script>
import Carousel from "@/components/Carousel.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/swiper.scss";
export default {
  setup() {
    const pkArr = [
      { name: 1, url: require("@/assets/Gallery/Pokemon/pkg1.jpg") },
      { name: 2, url: require("@/assets/Gallery/Pokemon/pkg2.jpg") },
      { name: 3, url: require("@/assets/Gallery/Pokemon/pkg3.jpg") },
      { name: 4, url: require("@/assets/Gallery/Pokemon/pkg4.jpg") },
      { name: 5, url: require("@/assets/Gallery/Pokemon/pkg5.jpg") },
      { name: 6, url: require("@/assets/Gallery/Pokemon/pkg6.jpg") },
      { name: 7, url: require("@/assets/Gallery/Pokemon/pkg7.jpg") },
      { name: 8, url: require("@/assets/Gallery/Pokemon/pkg8.jpg") },
      { name: 9, url: require("@/assets/Gallery/Pokemon/pkg9.jpg") },
      { name: 10, url: require("@/assets/Gallery/Pokemon/pkg10.jpg") },
      { name: 11, url: require("@/assets/Gallery/Pokemon/pkg11.jpg") },
      { name: 12, url: require("@/assets/Gallery/Pokemon/pkg12.jpg") },
      { name: 13, url: require("@/assets/Gallery/Pokemon/pkg13.jpg") },
      { name: 14, url: require("@/assets/Gallery/Pokemon/pkg14.jpg") },
      { name: 15, url: require("@/assets/Gallery/Pokemon/pkg15.jpg") },
      { name: 16, url: require("@/assets/Gallery/Pokemon/pkg16.jpg") },
      { name: 17, url: require("@/assets/Gallery/Pokemon/pkg17.jpg") },
      { name: 18, url: require("@/assets/Gallery/Pokemon/pkg18.jpg") },
      { name: 19, url: require("@/assets/Gallery/Pokemon/pkg19.jpg") },
      { name: 20, url: require("@/assets/Gallery/Pokemon/pkg20.jpg") },
      { name: 21, url: require("@/assets/Gallery/Pokemon/pkg21.jpg") },
      { name: 22, url: require("@/assets/Gallery/Pokemon/pkg22.jpg") },
      { name: 23, url: require("@/assets/Gallery/Pokemon/pkg23.jpg") },
      { name: 24, url: require("@/assets/Gallery/Pokemon/pkg24.jpg") },
      { name: 25, url: require("@/assets/Gallery/Pokemon/pkg25.jpg") },
      { name: 26, url: require("@/assets/Gallery/Pokemon/pkg26.jpg") },
      { name: 27, url: require("@/assets/Gallery/Pokemon/pkg27.jpg") },
      { name: 28, url: require("@/assets/Gallery/Pokemon/pkg28.jpg") },
      { name: 29, url: require("@/assets/Gallery/Pokemon/pkg29.jpg") },
      { name: 30, url: require("@/assets/Gallery/Pokemon/pkg30.jpg") },
      { name: 31, url: require("@/assets/Gallery/Pokemon/pkg31.jpg") },
      { name: 32, url: require("@/assets/Gallery/Pokemon/pkg32.jpg") },
      { name: 33, url: require("@/assets/Gallery/Pokemon/pkg33.jpg") },
      { name: 34, url: require("@/assets/Gallery/Pokemon/pkg34.jpg") },
      { name: 35, url: require("@/assets/Gallery/Pokemon/pkg35.jpg") },
      { name: 36, url: require("@/assets/Gallery/Pokemon/pkg36.jpg") },
      { name: 37, url: require("@/assets/Gallery/Pokemon/pkg37.jpg") },
      { name: 38, url: require("@/assets/Gallery/Pokemon/pkg38.jpg") },
      { name: 39, url: require("@/assets/Gallery/Pokemon/pkg39.jpg") },
      { name: 40, url: require("@/assets/Gallery/Pokemon/pkg40.jpg") },
      { name: 41, url: require("@/assets/Gallery/Pokemon/pkg41.jpg") },
      { name: 42, url: require("@/assets/Gallery/Pokemon/pkg42.jpg") },
      { name: 43, url: require("@/assets/Gallery/Pokemon/pkg43.jpg") },
    ];
    const photoArr = [
      { name: 1, url: require("@/assets/Gallery/Photo/photo_1.jpg") },
      { name: 2, url: require("@/assets/Gallery/Photo/photo_2.jpg") },
      { name: 3, url: require("@/assets/Gallery/Photo/photo_3.jpg") },
      { name: 4, url: require("@/assets/Gallery/Photo/photo_4.jpg") },
      { name: 5, url: require("@/assets/Gallery/Photo/photo_5.jpg") },
      { name: 6, url: require("@/assets/Gallery/Photo/photo_6.jpg") },
      { name: 7, url: require("@/assets/Gallery/Photo/photo_7.jpg") },
      { name: 8, url: require("@/assets/Gallery/Photo/photo_8.jpg") },
    ];
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    const onSlideChange = () => {
      console.log("slide change");
    };
    return { onSwiper, onSlideChange, pkArr, photoArr };
  },
  components: {
    Carousel,
    Swiper,
    SwiperSlide,
  },
};
</script>

<template>
  <div class="container">
    <h1>Photography Colletcion</h1>
    <div class="carouselBox">
      <swiper
        :slides-per-view="3"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in photoArr" :key="item.name"
          ><img :src="item.url" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  <h1>Shiny Pokemon</h1>
    <div class="carouselBox">
      <swiper
        :slides-per-view="5"
        :space-between="10"
        navigation
        :pagination="{ clickable: true }"
        :scrollbar="{ draggable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="item in pkArr" :key="item.name"
          ><img :src="item.url" alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<style scoped lang="scss">
.container {
  margin-top: 114px;
  > .carouselBox {
    width: 100%;
    max-height: 500px;
  }
  > h1{
    margin-top: 50px;
    margin-bottom: 30px;
  }
}
.swiper-slide > img {
  width: 100%;
}
</style>
