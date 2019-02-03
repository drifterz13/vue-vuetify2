<template>
  <v-dialog v-model="popup" width="400" :fullscreen="$vuetify.breakpoint.smAndDown">
    <v-btn
      class="ma-4 secondary--text text-lighten-4"
      dark
      fab
      bottom
      right
      fixed
      color="primary"
      slot="activator"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <v-card>
      <v-toolbar color="primary" dark flat>
        <v-icon @click="popup = false">arrow_back</v-icon>
        <v-toolbar-title>Add book</v-toolbar-title>
      </v-toolbar>
      <v-card-text>
        <v-form class="pa-3" @submit.prevent="addBook" ref="form">
          <v-text-field label="Title" v-model="title"></v-text-field>
          <v-text-field label="Price" prefix="$" v-model="price"></v-text-field>
          <v-text-field
            label="Image URL"
            placeholder="https://www.unsplash.com/nature/001"
            v-model="imageUrl"
          ></v-text-field>
          <v-textarea label="Content" v-model="content"></v-textarea>
          <v-btn
            type="submit"
            class="mb-3 mt-4 subheading"
            depressed
            block
            large
            color="primary"
          >Submit</v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      popup: false,
      title: "",
      content: "",
      price: "",
      imageUrl: ""
    };
  },
  methods: {
    addBook() {
      this.$emit("add-book", {
        title: this.title,
        content: this.content,
        price: this.price,
        image: this.imageUrl
      });
      this.popup = false;
      this.$refs.form.reset()
    }
  }
};
</script>
