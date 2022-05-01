<template>
  <nav class="nav">
    <router-link class="nav-link" to="/">
      <img alt="Tree logo" src="../assets/tree.png"
    /></router-link>
    <router-link class="nav-link" to="/">Home</router-link> |
    <router-link class="nav-link" to="/about">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav {
  margin: 10px;
}
.nav-link {
  text-decoration: none;
  font-family: "Cambria", "Cochin", Georgia, Times, "Times New Roman", serif;
  color: black;
  margin: 30px;
  font-size: 24px;
  padding: 10px;
}
.nav-link:hover {
  background-color: #55bcbc;
  color: whitesmoke;
}
img {
  width: 50px;
  cursor: pointer;
}
</style>
