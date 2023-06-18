<template>
  <BannerBar />
  <AboutBar />
  <QuestionBar />
  <ObjectiveBar />
  <FormBar />
  <VideoBar />
</template>

<script>
import BannerBar from "./components/BannerBar.vue";
import AboutBar from "./components/AboutBar.vue";
import QuestionBar from "./components/QuestionBar.vue";
import FormBar from "./components/FormBar.vue";
import ObjectiveBar from "./components/ObjectiveBar.vue";
import VideoBar from "./components/VideoBar.vue";

export default {
  name: "App",
  components: {
    BannerBar,
    AboutBar,
    QuestionBar,
    FormBar,
    ObjectiveBar,
    VideoBar,
  },
};
</script>

<style>
@import "@/assets/css/global.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0;
}
</style>
