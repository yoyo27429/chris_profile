<script>
import { onMounted, ref, onUnmounted } from "vue";
export default {
  setup() {
    const imgArr = [
      { name: "d3_1", url: require("@/assets/Project_post/d3_1.jpg") },
      { name: "d3_2", url: require("@/assets/Project_post/d3_2.jpg") },
      { name: "d3_3", url: require("@/assets/Project_post/d3_3.jpg") },
    ];
    const appImg = [
      { name: "app_1", url: require("@/assets/Project_post/app_1.png") },
      { name: "app_2", url: require("@/assets/Project_post/app_2.png") },
      { name: "app_3", url: require("@/assets/Project_post/app_3.png") },
      { name: "app_4", url: require("@/assets/Project_post/app_4.png") },
    ];
    const showIdx = ref(0);
    const idx = ref(0);

    const nextImg = () => {
      if (showIdx.value >= appImg.length - 2) {
        return (showIdx.value = 0);
      }
      showIdx.value += 1;
    };
    const timer = setInterval(() => {
      nextImg();
    }, 5000);
    onMounted(() => {
      setInterval(() => {
        if (idx.value > imgArr.length - 2) {
          idx.value = 0;
        } else {
          idx.value++;
        }
      }, 3000);
    });
    onUnmounted(() => {
      clearInterval(timer);
    });
    return { imgArr, idx, appImg, showIdx };
  },
};
</script>
<template>
  <div class="container bgcOR">
    <div class="sideBox carousel">
      <img
        v-for="(item, index) in imgArr"
        :key="item.name"
        :src="item.url"
        v-show="idx === index"
      />
    </div>
    <div class="sideBox">
      <div class="contentBox">
        <h3 class="title">Open data visualization</h3>
        <h4 class="subTitle tal">Data visualise</h4>
        <p class="tar">03/2020-05/2020</p>
        <li>Use Portege to build ontology schema.</li>
        <li>Convert open data to sematic data.</li>
        <li>Use JavaScript and D3 to visualise.</li>
        <h4 class="subTitle key">Key Tech</h4>
        <h5 class="keyCon">HTML, CSS, Javascript, D3.js</h5>
        <a class="gitLink" href="https://github.com/yoyo27429/OpenDataVisualize"
          >--->Go to Github to check it out!</a
        >
      </div>
    </div>
  </div>
  <!-- <div class="empty"></div> -->
  <div class="container bgcBL">
    <div class="sideBox">
      <div class="contentBox">
        <h3 class="title">Barbershop website</h3>
        <h4 class="subTitle tal">Front-end developer</h4>
        <p class="tar">09/2019-12/2019</p>
        <li>Use ASP.NET framework to build the website.</li>
        <li>Maintain the administrator CRUD pages.</li>
        <li>Constrain the reservation date without past date by JavaScript.</li>
        <h4 class="subTitle key">Key Tech</h4>
        <h5 class="keyCon">Front-end website, JavaScript, C#, ASP.NET</h5>
      </div>
    </div>
    <div class="sideBox">
      <a class="sideBoxLink" href="https://github.com/yoyo27429/barbershop">
        <img
          class="icon"
          src="@/assets/Project_post/github.png"
          alt="githubIcon"
        />
        Go to Github to check it out!</a
      >
    </div>
  </div>

  <div class="container bgc3">
    <div class="sideBox carousel">
      <img class="appImg" :src="appImg[showIdx].url" alt="" />
      <img class="appImg" :src="appImg[showIdx + 1].url" alt="" />
    </div>
    <div class="sideBox">
      <div class="contentBox">
        <h3 class="title">School App</h3>
        <h4 class="subTitle tal">Mobile app developer</h4>
        <p class="tar">03/2020-05/2020</p>
        <li>Develop an android app by Kotlin.</li>
        <li>SearchView and RecyclerView</li>
        <li>Firebase data store</li>
        <h4 class="subTitle key">Key Tech</h4>
        <h5 class="keyCon">Kotlin, firebase</h5>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flip-enter-active {
  transition: all 0.8s ease-out;
}
.flip-enter-from,
.flip-leave-to {
  opacity: 0;
}
.empty {
  width: 100%;
  height: 100px;
  float: left;
}
.carousel {
  width: 100%;
  > img {
    width: 100%;
  }
  > .appImg {
    width: auto;
    height: 200px;
    float: left;
    margin-right: 10px;
  }
}
.bgcBL {
  background-color: #e0e1dd;
}
.bgcOR {
  background-color: #6183a8;
}
.bgc3{
  background-color: #778da9;
}
.container {
  width: 95%;
  padding: 2.5%;
  overflow: auto;
  // min-height: 300px;
  > .sideBox {
    width: 40%;
    margin: 0 5% 0 5%;
    float: left;
    > .contentBox {
      width: 100%;
      > .title {
        font-weight: bold;
        font-size: 1.5rem;
      }
      > .subTitle {
        font-weight: bold;
      }
      > li {
        width: 100%;
        float: left;
        text-align: left;
        padding-left: 5%;
      }
      > .tar {
        float: right;
        width: 50%;
      }
      > .tal {
        float: left;
        width: 50%;
        text-align: left;
      }
      > .key {
        float: left;
        width: 30%;
        text-align-last: left;
      }
      .keyCon {
        float: left;
        width: 70%;
      }
      .gitLink {
        display: block;
        float: left;
        width: 80%;
        margin-left: 10%;
        text-decoration: none;
        color: #063756;
        margin-top: 15px;
      }
    }
    > .sideBoxLink {
      display: block;
      width: 100%;
      line-height: 50%;
      text-decoration: none;
      color: #063756;
      > .icon {
        width: 20%;
        margin: 10% 40% 10px 40%;
      }
    }
  }
}
</style>
