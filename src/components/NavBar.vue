<template>
  <div class="container">
    <img class="logo" src="../assets/programa-viva.png" />
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-items: start;
  flex-direction: column;
}
.logo {
  flex: 1;
  height: 20%;
  width: 20%;
  margin: 30px;
  justify-self: flex-start;
}
p {
  flex: 3;
  color: white;
}

@media screen and (max-width: 992px) {
  .container {
    flex-direction: column;
  }
  .slogan {
    font-size: 40px;
  }

  .slogan-div {
    flex: 2;
    margin: 0px;
    padding-right: 10px;
  }

  .image-div {
    position: absolute;
    right: 0;
    top: 0;
    overflow: hidden;
  }

  .left {
    flex-direction: column-reverse;
  }

  .loop {
    height: 200px;
    margin-right: -100px;
    filter: blur(2px);
  }

  .image-div {
    visibility: hidden;
  }

  .logo {
    width: 60%;
  }
}
</style>


idth: 60%;