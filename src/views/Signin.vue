<template>
  <v-layout row wrap justify-center>
    <v-flex md6>
      <v-form ref="form" lazy-validation>
        <v-text-field label="Emaik" prepend-icon="email" v-model="email"></v-text-field>
        <v-text-field label="Password" prepend-icon="lock" v-model="password"></v-text-field>
        <v-btn color="primary" block depressed large class="secondary--text text-lighten-2 mt-4 subheading">Submit</v-btn>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  }
};
</script>
