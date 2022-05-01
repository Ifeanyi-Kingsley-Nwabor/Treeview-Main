<template>
  <NavBar />
  <div class="title"><h3>i18n Treeview Assessment</h3></div>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.title {
  color: rgb(63, 61, 61);
  font-size: 24px;
  margin-top: 10px;
  text-align: center;
}
</style>
