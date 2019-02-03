<template>
  <v-layout row wrap justify-center>
    <v-flex md6>
      <v-form ref="form" lazy-validation @submit.prevent="signup">
        <v-text-field
          type="text"
          label="Username"
          prepend-icon="account_box"
          v-model="username"
          required
          :disabled="loading"
          :rules="userNameRules"
        ></v-text-field>
        <v-text-field
          type="email"
          label="Email"
          prepend-icon="email"
          v-model="email"
          required
          :disabled="loading"
          :rules="emailRules"
        ></v-text-field>
        <v-text-field
          type="password"
          label="Password"
          prepend-icon="lock"
          v-model="password"
          required
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
      username: "",
      email: "",
      password: "",
      loading: false,
      userNameRules: [v => !!v && v.length > 3 || 'Minimum character is 4.'],
      emailRules: [
        v => !!v || 'Email is required.',
        v => /.+@+/.test(v) || 'Email not valid.'
      ],
      passwordRules: [v => !!v && v.length > 3 || 'Password must longer than 4 character.']
    };
  },
  methods: {
    signup() {
      this.loading = true;
      this.$refs.form.validate();
      if (!this.$refs.form.validate()) {
        this.loading = false
        return false
      }
      import(/*webpackPrefetch: true*/ /*webpackChunkName: 'firebase-signup'*/ "@/firebase").then(
        ({ firebase }) => {
          firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.loading = false;
              this.$refs.form.reset();
              this.$router.push("/");
            })
            .catch(err => console.log(err));
        }
      );
    }
  }
};
</script>
