<script>
export default {};
</script>
<template>
  <div class="container bgcOR">
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
        <li>
          Responsible for the front-end of the website by using JavaScript.
        </li>
        <li>Communicate Between designers and back-end developers.</li>
        <h4 class="subTitle key">Key Tech</h4>
        <h5 class="keyCon">HTML, CSS, JavaScript, JQuery</h5>
        <a class="gitLink" href="https://github.com/yoyo27429/Traum"
          >--->Go to Github to check it out!</a
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bgcOR {
  background-color: #6183a8;
}
.container {
  width: 95%;
  padding: 2.5%;
  overflow: auto;
  > .sideBox {
    width: 50%;
    float: left;
    > iframe {
      min-height: 300px;
    }
    > .contentBox {
      width: 100%;
      padding-left: 2%;
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
  }
}
</style>
