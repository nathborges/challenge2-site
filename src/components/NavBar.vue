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
</style>
