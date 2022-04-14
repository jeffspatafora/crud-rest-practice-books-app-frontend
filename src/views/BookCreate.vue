<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Add A Book",
      newBook: {
      }
    };
  },
  created: function () { },
  methods: {
    createBook: function () {
      console.log("in create");
      // var newBook = {
      //   title: this.newBook.title,
      //   author: this.newBook.author,
      //   year: this.newBook.year,
      //   image: this.newBook.image
      // };
      // axios.post("/books", newBook).then(response => {
      //   console.log(response.data);
      axios.post("/books", this.newBook).then(response => {
        console.log(response.data);
      })

    }
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div>
      <p>title: <input type="text" v-model="newBook.title" /></p>
      <p>author: <input type="text" v-model="newBook.author" /></p>
      <p>year: <input type="text" v-model="newBook.year" /></p>
      <p>image: <input type="text" v-model="newBook.image" /></p>
    </div>
    <button v-on:click="createBook()">add book</button>
  </div>
</template>

<style>
</style>