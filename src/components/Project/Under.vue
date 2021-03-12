<script>
export default {};
</script>
<template>
  <div class="sideBox">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/fDOEXGHM-zo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="sideBox">
    <table>
      <tr>
        <td class="title" colspan="5">Traum - Performance matching platform</td>
      </tr>
      <tr>
        <td colspan="4" class="subTitle tal">
          Team leader, front-end developer and main presenter
        </td>
        <td class="tar">09/2017-04/2018</td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Manage the progress and decide the direction for this project.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Responsible for the front-end of the website by using JavaScript.
        </td>
      </tr>
      <tr>
        <td></td>
        <td class="tal" colspan="3">
          Communicate Between designers and back-end developers.
        </td>
      </tr>
      <tr>
        <td class="subTitle">Key Tech</td>
        <td class="tal" colspan="3">HTML, CSS, JavaScript</td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.sideBox {
  width: 50%;
  float: left;
  > table {
      margin-top: 2%;
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
