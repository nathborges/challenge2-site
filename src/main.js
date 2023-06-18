import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";
import App from "./App.vue";
import {
  faKey,
  faMagnifyingGlass,
  faComment,
  faComments,
  faUserCheck,
  faPen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faKey,
  faMagnifyingGlass,
  faComment,
  faComments,
  faUserCheck,
  faPen,
  faUser
);

import PrimeVue from "primevue/config";
//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";

createApp(App)
  .use(PrimeVue)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
