<template>
  <nav>
    <v-toolbar app flat>
      <v-toolbar-side-icon class="secondary--text text--darken-3" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="text-uppercase">
        <v-btn flat router to="/">
          <span class="font-weight-bold title">Vueapp</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="user" flat class="secondary--text text--darken-3">
        <span>Sign out</span>
        <v-icon right>power_settings_new</v-icon>
      </v-btn>
      <template v-if="!user && !$vuetify.breakpoint.smAndDown">
        <v-btn flat class="seondary--text text--darken-3" router to="/signin">
          <span>Sign in</span>
          <v-icon right>exit_to_app</v-icon>
        </v-btn>
        <v-btn flat class="seondary--text text--darken-3" router to="/signup">
          <span>Sign up</span>
          <v-icon right>person_add</v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <v-navigation-drawer class="primary" v-model="drawer" app>
      <v-list class="pa1">
        <v-list-tile v-for="item in items" :key="item.title" router :to="item.route">
          <v-list-tile-action>
            <v-icon color="secondary">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="secondary--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      user: null,
      signupDialog: false,
      drawer: false,
      items: [
        {
          title: "Dashboard",
          icon: "dashboard",
          route: "/"
        },
        {
          title: "Projects",
          icon: "folder",
          route: "/projects"
        },
        {
          title: "Team",
          icon: "people",
          route: "/team"
        },
        {
          title: "Sign in",
          icon: "exit_to_app",
          route: "/signin"
        },
        {
          title: "Sign up",
          icon: "person_add",
          route: "/signup"
        }
      ]
    };
  }
};
</script>

