import { createApp } from "vue";
import App from "./App.vue";
import "@/scss/main.scss";
import "tippy.js/dist/tippy.css";
import { plugin as VueTippy } from "vue-tippy";
const app = createApp(App);
app.use(
  VueTippy,
  // optional
  {
    directive: "tippy", // => v-tippy
    component: "tippy", // => <tippy/>
    componentSingleton: "tippy-singleton", // => <tippy-singleton/>,
    defaultProps: {
      arrow: false,
      placement: "bottom-start",
      allowHTML: true,
      inlinePositioning: true,
      followCursor: "horizontal",
    }, // => Global default options * see all props
  }
);

app.mount("#app");
