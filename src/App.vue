<template>
  <div id="app">
    <router-view></router-view>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: {
    MyFooter
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
