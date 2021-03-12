<script>
export default {};
</script>

<template>
  <div class="sideBox">
    <h1>About Me</h1>
    <p>I am Tien-Yu Lo, or you can call me Chris.</p>
    <p>I was born in 1996/02/07, I have one brother and one sister. <br> I'm really interested in new technolony, especially the new tech stuff.</p>
  </div>
  <div class="sideBox">
    <img src="@/assets/Me.jpg" alt="" />
  </div>
</template>
<style lang="scss" scoped>
.sideBox {
  float: left;
  width: 50%;
  >img{
      width: 50%;
      margin: 10px 25% 10px 25%;
      border-radius: 50% 50%;
  }
}
</style>
