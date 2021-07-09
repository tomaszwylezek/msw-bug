<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">

  </div>
</template>

<script>


export default {
  name: 'App',
  async mounted(){
    const res = await fetch('/user+new')
    const data = await res.json()


    console.log({data})
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
