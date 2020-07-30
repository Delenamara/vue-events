<template>
  <div id="app">
    <layout></layout>
  </div>
</template>

<script>
import Layout from './components/Layout'

export default {
  name: 'App',
  components: {
    Layout
  }
}
</script>

<style>
body {
  padding: 0;
    margin: 0;
    font-family: 'Oswald', sans-serif;
    background-color: #030a21;
    color: #ffffff;
    overflow: hidden;
}
a {
  outline: none;
  text-decoration: none;
}
</style>
