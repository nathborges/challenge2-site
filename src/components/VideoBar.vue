<template>
  <div class="container-video-bar">
        <div class="wrapper">
          <h2>Mais informacões sobre o nosso projeto</h2>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/6eXkrxThJuA"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
        <div class="wrapper">
          <h2>Apoio</h2>
          <img id="dow" src="../assets/sanofi.png" />
          <img id="fiap" src="../assets/fiap.png" />
        </div>
      </div>
</template>
  
  <script>
export default {
  name: "VideoBar",
};
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-video-bar {
  background-color: black;
  margin: 0;
  padding: 40px;
  display: flex;
  justify-content: space-around;
  padding-bottom: 60px;
}

h2 {
  font-family: "arboria-bold";
  font-size: 40px;
  color: whitesmoke;
  margin: 0;
  text-align: center;
  align-self: center;
  justify-self: center;
  margin-bottom: 30px;
}

p {
  font-family: "arboria1";
  font-size: 30px;
  color: whitesmoke;
}

.wrapper {
  align-content: center;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
}
.wrapper img {
  max-width: 200px;
}

.wrapper iframe {
  align-self: center;
}

#fiap {
  margin-top: 40px;
}

@media screen and (max-width: 992px) { 
      .container-video-bar {
        flex-direction: column;
      }

      .wrapper {
        margin-top: 10px;
      }
      .wrapper iframe {
        align-self: center;
        width: 100%
      }

      .wrapper img {
      max-width: 200px;
      align-self: center;
      margin-top: 15px;
    }
    }
</style>
  