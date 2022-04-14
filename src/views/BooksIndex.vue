<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "All Books",
      books: []
    };
  },
  created: function () {
    this.indexBooks();
  },
  methods: {
    indexBooks: function () {
      console.log("index books");
      axios.get("/books").then(response => {
        console.log(response.data);
        this.books = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="book in books" v-bind:key="book.id">
      <h2>{{ book.title }}</h2>
      <p>{{ book.author }} <br /> {{ book.year }}</p>
      <img v-bind:src="book.image">
    </div>
    <button v-on:click="indexBooks()">all books</button>
  </div>
</template>

<style>
</style>