import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/src/stylus/app.styl";

Vue.use(Vuetify, {
  iconfont: "md",
  theme: {
    primary: "#3a405a",
    secondary: "#f1dede",
    warning: "ff9505",
    danger: "ec4e20"
  }
});
