<template>
  <div class="container-bar">
    <div>
      <h2>Assine nossa newsletter</h2>
      <p>
        Busca mais informações informacões sobre o projeto Nome? Cadastre seu
        e-mail e receba novidades
      </p>
      <div class="flex">
        <div class="inputField">
          <InputText v-model="email" class="email" input-id="email" />
          <p class="info">Mais de {{ emailsCadastrados.length + 10 }} pessoas cadastradas</p>
        </div>
        <a class="button" @click.prevent="submit">
          <p class="button-text">Confirmar</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";

export default {
  name: "FormBar",
  components: {
    InputText,
  },
  data() {
    return {
      email: "",
      emailsCadastrados: [],
    };
  },
  methods: {
    submit() {
      if (this.email == '') {
        return;
      }
      this.emailsCadastrados.push(this.email);
      this.email = '';
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-bar {
  background-color: #29253b;

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

.flex {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2%;
}

.flex p {
  padding: 0;
  margin: 0;
}

.flex img {
  max-height: 400px;
}

.button {
  background: #004c90;
  border: 2px solid #004c90;
  border-radius: 10px;
  padding: 10px;
  padding-left: 14px;
  padding-right: 14px;
  cursor: pointer;
}

.button-text {
  font-size: 17px;
}

.email {
  width: 300px;
}

.info {
  font-size: 15px;
}

.inputField {
  display: flex;
  flex-direction: column;
  gap: 1vh;
}

@media screen and (max-width: 992px) {
  .flex {
    flex-direction: column;
  }
}
</style>
