<template>
  <div class="container-about-us">
    <div>
      <h2>O que é o Health Hub?</h2>
      <p>
        O Health Hub é um site que busca conectar os clientes da Sanofi, que
        possuem doenças de alta e baixa complexidade, focando sempre no
        acolhimento e bem-estar. Além disso, o Health Hub é um espaço de troca
        de experiências e parceria.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-about-us {
  background-color: #3d3a70;
  margin: 0;
  padding: 40px;
}

.container-about-us h2 {
  font-family: "arboria-bold";
  font-size: 40px;
  color: whitesmoke;
  margin: 0;
}

.container-about-us p {
  font-family: "arboria1";
  font-size: 30px;
  color: whitesmoke;
}
</style>
