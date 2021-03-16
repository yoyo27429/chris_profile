<script>
export default {};
</script>
<template>
  <div class="sideBox">
    <iframe
      width="100%"
      src="https://www.youtube.com/embed/fDOEXGHM-zo"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
  <div class="sideBox">
    <div class="contentBox">
      <h3 class="title">Traum - Performance matching platform</h3>
      <h4 class="subTitle tal">
        Team leader, front-end developer and main presenter
      </h4>
      <p class="tar">09/2017-04/2018</p>
      <li>Manage the progress and decide the direction for this project.</li>
      <li>Responsible for the front-end of the website by using JavaScript.</li>
      <li>Communicate Between designers and back-end developers.</li>
      <h4 class="subTitle key">Key Tech</h4>
      <h5 class="keyCon">HTML, CSS, JavaScript, JQuery</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sideBox {
  width: 50%;
  float: left;
  >iframe{
    min-height: 300px;
  }
  > .contentBox {
    width: 100%;
    margin-left: 2%;
    >.title {
      font-weight: bold;
      font-size: 1.5rem;
    }
    >.subTitle {
      font-weight: bold;
    }
    > li{
      width: 100%;
      float: left;
      text-align: left;
      padding-left: 5%;
    }
    >.tar {
      float: right;
      width: 50%;
    }
    >.tal {
      float: left;
      width: 50%;
      text-align: left;
    }
    >.key{
      float: left;
      width: 30%;
      text-align-last: left;
    }
    .keyCon{
      float: left;
      width: 70%;
    }
  }
}
</style>
