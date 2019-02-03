<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex lg3 md4 sm6 xs12 v-for="book in items" :key="book.id">
        <v-card color="grey lighten-4" max-width="600">
          <v-hover>
            <v-img :aspect-ratio="1" slot-scope="{ hover }" contain :src="book.image">
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal display-3 white--text"
                  style="height: 100%;"
                >${{ book.price }}</div>
              </v-expand-transition>
            </v-img>
          </v-hover>
          <v-card-text class="pt-4" style="position: relative; height: 170px">
            <v-btn absolute color="primary" class="secondary--text" fab small right top>
              <v-icon>shopping_cart</v-icon>
            </v-btn>
            <div class="title font-weight-normal primary--text mb-3 text-uppercase">{{ book.title }}</div>
            <p
              class="font-weight-light title mb-2 subheading"
              v-word-shorten="book.content"
            >{{ book.content }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <AddBookPopup v-on:add-book="addBook"/>
  </v-container>
</template>

<script>
import Vue from "vue";
import AddBookPopup from "@/components/AddBookPopup";

Vue.directive("word-shorten", function(el, binding) {
  if (binding && binding.value && binding.value.length > 150) {
    el.innerText = `${binding.value.slice(0, 95)}...`;
  }
});

export default {
  components: {
    AddBookPopup
  },
  created() {
    import("@/firebase").then(({ db }) => {
      db.collection("books")
        .get()
        .then(querySnapshot => {
          querySnapshot.forEach(doc => {
            const book = doc.data();
            this.items.push(book);
          });
        });
    });
  },
  data() {
    return {
      popup: false,
      items: []
    };
  },
  methods: {
    addBook(book) {
      this.items.push(book);
    }
  },
};
</script>

<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
