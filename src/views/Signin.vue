<template>
  <v-layout row wrap justify-center>
    <v-flex md6>
      <v-form ref="form" lazy-validation @submit.prevent="login">
        <v-text-field
          type="email"
          label="Email"
          prepend-icon="email"
          v-model="email"
          :disabled="loading"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          prepend-icon="lock"
          v-model="password"
          :disabled="loading"
          :rules="passwordRules"
        ></v-text-field>
        <v-btn
          type="submit"
          color="primary"
          block
          depressed
          large
          class="secondary--text text-lighten-2 mt-4 subheading"
          :loading="loading"
        >Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailRules: [
        v => !!v || "Email is required.",
        v => /.+@+/.test(v) || "Email not valid."
      ],
      passwordRules: [
        v => (!!v && v.length > 3) || "Password must longer than 4 character."
      ],
      loading: false
    };
  },
  methods: {
    login() {
      this.loading = true
      this.$refs.form.validate()
      if (!this.$refs.form.validate()) {
        this.loading = false
        return false
      }
      import(/*webpackPreload: true*/ "@/firebase").then(({ firebase }) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then(() => {
            this.loading = false
            this.$refs.form.reset()
            this.$router.push("/");
          });
      });
    }
  }
};
</script>
