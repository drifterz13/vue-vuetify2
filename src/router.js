import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./views/Dashboard.vue";
import { firebase } from "./firebase";

Vue.use(Router);

let router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "dashboard",
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/signin",
      name: "signin",
      component: () =>
        import(/* webpackChunkName: 'signin' */ "./views/Signin.vue")
    },
    {
      path: "/signup",
      name: "signup",
      component: () =>
        import(/* webpackChunkName: "signup" */ "./views/Signup.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) next("signin");
  else if (!requiresAuth && currentUser) next("/");
  else next();
});

export default router;
