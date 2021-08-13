<template>
  <div class="hello">
    <input
      type="text"
      class="input_name"
      v-model="input"
      @change="inputword()"
    />
    <div class="showword">
      {{ data.data.ans }}
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      data: "",
      input: "",
    };
  },
  mounted() {
    axios
      .get("http://localhost:3000")
      .then((response) => (this.data = response));
  },
  methods: {
    inputword() {
      let word = this.input;
      if (isNaN(word)) {
        axios
          .get("http://localhost:3000", {
            params: { word: word },
          })
          .then((response) => (this.data = response));
      }
    },
    // detect() {
    //   let word = this.input;
    //   if (word == Number) {
    //     return
    //   }
    // },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
