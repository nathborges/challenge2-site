<template>
  <div class="container-question-bar">
    <div>
      <h2>Como se conectar no Health Hub?</h2>
    </div>
    <div class="flex-div">
      <div class="flex-div-image-wrapper">
        <font-awesome-icon class="icon fillBlack" icon="fa-solid fa-key" />
      </div>
      <div class="flex-div-text-wrapper">
        <p>Coloque suas credenciais e acesse a home page do site.</p>
      </div>
    </div>
    <div class="flex-div left">
      <div class="flex-div-text-wrapper">
        <p>Escolha um tópico e escreva seu post.</p>
      </div>
      <div class="flex-div-image-wrapper">
        <font-awesome-icon class="icon fillBlack" icon="fa-solid fa-pen" />
      </div>
    </div>
    <div class="flex-div right">
      <div class="flex-div-image-wrapper">
        <font-awesome-icon class="icon fillBlack" icon="fa-solid fa-user" />
      </div>
      <div class="flex-div-text-wrapper">
        <p>Os moderadores verificam sua postagem e podem aprovar ou não.</p>
      </div>
    </div>
    <div class="flex-div left">
      <div class="flex-div-text-wrapper">
        <p>Caso, aprovado. Sua postagem fica disponível no nosso site.</p>
      </div>
      <div class="flex-div-image-wrapper">
        <font-awesome-icon
          class="icon fillBlack"
          icon="fa-solid fa-user-check"
        />
      </div>
    </div>
    <div class="flex-div right">
      <div class="flex-div-image-wrapper">
        <font-awesome-icon class="icon fillBlack" icon="fa-solid fa-comments" />
      </div>
      <div class="flex-div-text-wrapper">
        <p>
          Você pode também curtir e interagir com as outras pessoas nas
          postagens.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionBar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon {
  height: 80%;
}
.container-question-bar {
  background-image: url("../assets/plastica.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 40px;
  display: flex;
  flex-direction: column;
}

.container-question-bar h2 {
  font-family: "arboria-bold";
  font-size: 40px;
  color: black;
  margin: 0;
}

.container-question-bar p {
  font-family: "arboria1";
  font-size: 30px;
  color: black;
}

.flex-div {
  display: flex;
  margin: 24px;
  flex: 1;
}

.flex-div-text-wrapper {
  flex: 0.5;
  justify-self: left;
  align-self: center;
  align-items: center;
}

.flex-div-image-wrapper {
  flex: 0.5;
  justify-self: left;
}
.right {
  justify-content: left;
}

.left {
  justify-content: right;
}

.icon {
  max-height: 150px;
}

.fillBlack {
  color: black;
}

@media screen and (max-width: 992px) {
  .flex-div {
    flex-direction: column;
  }

  .left {
    flex-direction: column-reverse;
  }
}
</style>
