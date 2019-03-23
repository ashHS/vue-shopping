<template>
  <div id="app">
    <Header></Header>
		<router-view></router-view>
		<NavBar></NavBar>
  </div>
</template>

<script>
	import Header from './components/com/Header.vue'
	import NavBar from './components/com/NavBar.vue'
export default {
  name: 'App',
	components:{
		Header:Header,
		NavBar:NavBar
	}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body{
	margin: 0;
	padding: 0;
}
a{
	text-decoration: none;
}
</style>
