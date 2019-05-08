<template>
  <div id="app">
    <Header></Header>
	<transition :name='slideName' mode="out-in">
		<keep-alive>
			<router-view class='change'></router-view>
		</keep-alive>
	</transition>
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
	},
	data(){
		return{
			slideName:'',
			test:''
		}
	},
	watch:{
		'$route'(to,from){
			//detail没有所以是-1        0        1      2         3
			const arr = ['/detail','/center','/cart','/cate','/index'];
			//indexOf()查找第一次出现的位置 to.path到的那个路由  from.path 从哪个路由
			const compare = arr.indexOf(to.path)>arr.indexOf(from.path);
			this.slideName = compare ? 'slideRight':'slideLeft';
			console.log(arr.indexOf(from.path))
			console.log(arr.indexOf(to.path))
			console.log(to.path) //  /cart /detail/148
		}
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
.change{
	width: 100%;
	/* height: 100%; */
	margin:0 0 50px 0;
	position: absolute;
	transition: all .1s ease-out;
	-webkit-transition: all .1s ease-out;
	-moz-transition: all .1s ease-out;
}
.slideLeft-enter,
.slideRight-leave-active {
  -webkit-transform: translate(100%, 0%);
  transform: translate(100%, 0%); 
   /*当左滑进入右滑进入过渡动画*/
}
 
.slideLeft-leave-active,
.slideRight-enter {
  -webkit-transform: translate(-100%, 0); 
  transform: translate(-100%, 0); 
}
</style>
