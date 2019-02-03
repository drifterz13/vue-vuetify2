<template>
  <v-container fluid grid-list-lg>
    <v-layout row wrap>
      <v-flex md4 sm6 xs12 v-for="book in items" :key="book.title">
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
    <AddBookPopup v-on:add-book="addBook" />
  </v-container>
</template>

<script>
import Vue from "vue";
import AddBookPopup from '@/components/AddBookPopup'

Vue.directive("word-shorten", function(el, binding) {
  if (binding.value.length > 150) {
    el.innerText = `${binding.value.slice(0, 95)}...`;
  }
});

export default {
  components: {
    AddBookPopup
  },
  data() {
    return {
      popup: false,
      items: [
        {
          title: "milk and honey",
          content:
            "Milk and Honey is a collection of poetry and prose about survival. About the experience of violence, abuse, love, loss, and femininity.",
          price: "12.89",
          image:
            "https://dynamic.indigoimages.ca/books/144947425x.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=11&lang=en"
        },
        {
          title: "the sun and her flowers",
          content:
            "A vibrant and transcendent journey about growth and healing. Ancestry and honoring one’s roots. Expatriation and rising up to find a home within yourself.",
          price: "18.26",
          image:
            "https://dynamic.indigoimages.ca/books/1501175262.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=8&lang=en"
        },
        {
          title: "split tooth",
          content:
            "From the internationally acclaimed Inuit throat singer who has dazzled and enthralled the world with music it had never heard before, a fierce, tender, heartbreaking story unlike anything you've ever read.",
          price: "27.33",
          image:
            "https://dynamic.indigoimages.ca/books/0670070092.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=8&lang=en"
        },
        {
          title: "being prime minister",
          content:
            "Behind the politics, discover the lives of Canada's leaders.",
          price: "24.34",
          image:
            "https://dynamic.indigoimages.ca/books/1459738489.jpg?altimages=false&scaleup=true&maxheight=515&width=380&quality=85&sale=9&lang=en"
        }
      ]
    };
  },
  methods: {
    addBook(book) {
      this.items.push(book)
    }
  }
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
