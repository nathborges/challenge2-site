<template>
  <div class="container-bar">
    <div>
      <h2>Qual é o nosso objetivo com o Health Hub?</h2>
      <div class="flexText">
        <div class="reasons">
          <p>Estar mais próximo do paciente, oferecendo saúde e educação.</p>
        </div>
        <div class="reasons">
          <p>Proporcionar um espaço de acolhimento.</p>
        </div>
        <div class="reasons">
          <p>
            Transformar a vida dos clientes da Sanofi.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BusinessBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-bar {
  background-color: #8177b7;
  margin: 0;
  padding: 40px;
}

h2 {
  font-family: "arboria-bold";
  font-size: 40px;
  color: whitesmoke;
  margin: 0;
}

p {
  font-family: "arboria1";
  font-size: 30px;
  color: whitesmoke;
}

.flexText {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}

.reasons {
  padding: 10px;
}

@media screen and (max-width: 992px) {
  .flexText {
    flex-direction: column;
  }
}
</style>
