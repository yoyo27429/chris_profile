<script>
export default {};
</script>
<template>
  <div class="sideBox">
    <img src="@/assets/school.jpg" class="img" />
  </div>
  <div class="sideBox">
    <h1>Education</h1>
    <table>
      <tr>
        <td class="title" colspan="3">University of Southampton</td>
      </tr>
      <tr>
        <td class="degree detailBox">MSc Software Engineering</td>
        <td class="detailBox">09/2019-10/2020</td>
        <td class="city detailBox">Southampton, United Kingdon</td>
      </tr>
      <tr>
        <td class="detailBox degree">Modules</td>
        <td colspan="2" class="detail">
          Software Modelling Tools Critical Systems, Web development, Software
          Project Management and Secure, Data Mining, Mobile application, Open
          data innovation
        </td>
      </tr>
      <tr>
        <td class="detailBox degree">Dissertation Title</td>
        <td colspan="2" class="detail">
          Evaluation of the schedulability in queue-based framework in Event-B
        </td>
      </tr>
    </table>

    <table>
      <tr>
        <td class="title" colspan="3">
          National Changhua University of Education
        </td>
      </tr>
      <tr>
        <td class="degree detailBox">B.S. Imformation Management</td>
        <td class="detailBox">09/2014-06/2018</td>
        <td class="city detailBox">Changhua, Taiwan</td>
      </tr>
      <tr>
        <td class="detailBox degree">Modules</td>
        <td colspan="2" class="detail">
          Java, C++ programing, Data structure, Data bases, UNIX, Web
          developing, UI design
        </td>
      </tr>
      <tr>
        <td class="detailBox degree">Graduated project</td>
        <td colspan="2" class="detail">
          Traum - A performance matching platform
        </td>
      </tr>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.sideBox {
  float: left;
  width: 50%;
  > h1 {
    margin: 20px;
  }
  > .img {
    width: 90%;
    float: left;
    margin-left: 5%;
  }
  > table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 50px;
    > tr {
      // border-bottom: 1px solid #000;
      > td {
        border-bottom: 1px solid;
      }
      > .title {
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
      }
      .degree {
        font-weight: bold;
        font-size: 1rem;
        text-align: left;
        line-height: 1.5rem;
      }
      .detailBox {
        width: 33%;
      }
      .detail {
        text-align: left;
      }
      .subTitle {
        font-weight: bold;
        font-size: 1rem;
      }
      .city {
        // font-weight: bold;
        font-size: 1rem;
        text-align: right;
      }
    }
  }
}
</style>
