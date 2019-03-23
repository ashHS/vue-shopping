<template>
	<div class="s-header">
	    <a class="right" href="javascript:;">{{headerTitle}}</a>
	    <a class="left" @click="goBack" href="javascript:;"><img src="../../assets/left.png" alt=""></a>
	    <h4 class="center">芝麻科技</h4>
	</div>
</template>
<script>
	export default {
		data(){
			return {}
		},
		computed:{
			headerTitle(){
				return this.$store.getters.getHaederTitle
			}
		},
		methods:{
			goBack:function(){
				this.$router.go(-1)
			}
		}
	}
</script>
<style scoped>
	.s-header{
		position: fixed;
		top: 0;
		z-index: 100;
		height: 50px;
		width: 100%;
		background: #42B983;
		min-width: 320px;
		margin:0 auto;
		color: #fff;
	}
	
	.center,a{
	  height: 50px;
	  line-height: 50px;
	}
	.center{
	  position: relative;
	  margin: 0 2rem;
	  text-align: center;
	  color: #efefef;
	}
	a{
	  display: inline-block;
	  width:2rem;
	  text-align: center;
	  color:#fff;
	  margin: 0 1rem;
	  text-decoration: none;
	  font-size: 18px;
	}
	.left{
		float: left;
		width: 25px;
		height: 25px;
		
	}
	.left img{
		width: 100%;
		height: 100%;
		margin-top: 14px;
	}
	.right{
		float: right;
		
	}
</style>