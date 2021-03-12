<script>
import { onMounted, ref } from "vue";
export default {
  setup() {
    const imgArr = [
      { name: "d3_1", url: require("@/assets/Project_post/d3_1.jpg") },
      { name: "d3_2", url: require("@/assets/Project_post/d3_2.jpg") },
      { name: "d3_3", url: require("@/assets/Project_post/d3_3.jpg") },
    ];
    const idx = ref(0);
    onMounted(() => {
      setInterval(() => {
        if (idx.value > imgArr.length - 2) {
          idx.value = 0;
        } else {
          idx.value++;
        }
      }, 3000);
    });
    return { imgArr, idx };
  },
};
</script>
<template>
  <div class="sideBox carousel">
    <transition-group name="flip">
      <img
        v-for="(item, index) in imgArr"
        :key="item.name"
        :src="item.url"
        v-show="idx === index"
      />
    </transition-group>
  </div>
  <div class="sideBox">
    <table>
      <tr>
        <td class="title" colspan="4">Open data visualization</td>
      </tr>
      <tr>
        <td class="subTitle">Data visualise</td>
        <td class="tar">03/2020-05/2020</td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Use Portege to build ontology schema.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Convert open data to sematic data.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Use JavaScript and D3 to visualise
        </td>
      </tr>
      <tr>
        <td class="subTitle">Key Tech</td>
        <td class="tal" colspan="3">
          Front-end website, JavaScript, C#, ASP.NET
        </td>
      </tr>
    </table>
  </div>
  <div class="empty"></div>
  <div class="sideBox">
    <table>
      <tr>
        <td class="title" colspan="4">Barbershop website</td>
      </tr>
      <tr>
        <td class="subTitle">Front-end developer</td>
        <td class="tar">09/2019-12/2019</td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Use ASP.NET framework to build the website.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Maintain the administrator CRUD pages.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Constrain the reservation date without past date by JavaScript
        </td>
      </tr>
      <tr>
        <td class="subTitle">Key Tech</td>
        <td class="tal" colspan="3">
          Front-end website, JavaScript, C#, ASP.NET
        </td>
      </tr>
    </table>
  </div>
  <div class="sideBox">
    <a class="sideBoxLink" href="javascript;:">
      <img
        class="icon"
        src="@/assets/Project_post/github.png"
        alt="githubIcon"
      />
      Go to Github to check it out!</a
    >
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
}
.sideBox {
  width: 40%;
  margin: 0 5% 0 5%;
  float: left;
  > .sideBoxLink {
    display: block;
    width: 100%;
    line-height: 50%;
    > .icon {
      width: 20%;
      margin: 10% 40% 0px 40%;
    }
  }
  > table {
    width: 100%;
    margin-top: 50px;
    > tr {
      > td &.title {
        font-weight: bold;
        font-size: 1.5rem;
      }
    }
  }
}
.title {
  font-weight: bold;
  font-size: 1.5rem;
}
.subTitle {
  font-weight: bold;
}
.tar {
  text-align: right;
}
.tal {
  text-align: left;
}
</style>
