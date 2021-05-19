<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Semua Post</router-link>
      <router-link to="/singlepost">Single Post</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}

#nav {
  text-align: center;
  font-size: 25px;
  margin-bottom: 20px;
}

#nav a{
  padding: 10px;
  color: black;
  text-decoration: none;
}
</style>
