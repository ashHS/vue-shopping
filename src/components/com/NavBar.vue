<template>
	<div class="s-navbar">
		<ul class="ul-nav">
			<li @click="toDetail()"><router-link to="/index"><span><i class="iconfont icon-shouye"></i>首页</span></router-link></li>
			<li @click="toDetail()"><router-link to="/cate"><span><i class="iconfont icon-tubiao_shangcheng"></i>分类</span></router-link></li>
			<li @click="toDetail()"><router-link to="/cart"><span><i class="iconfont icon-gouwuche "></i>购物车</span></router-link></li>
			<li @click="toDetail()"><router-link to="/center"><span><i class="iconfont icon-wode"></i>我的</span></router-link></li>
		</ul>
	</div>
</template>
<script>
	import '../../css/iconfont.css'

	 export default{
		 data(){
			 return{}
		 },
		 methods:{
			 // 使左上角的返回箭头消失
			 toDetail(){
				 this.$store.commit('isToDetail',false)
			 }
		 }
	 }
</script>
<style scoped>
	.s-navbar{
		position: fixed;
		bottom: 0;
		z-index: 100;
		width: 100%;
		height: 60px;
		background: #42B983;
		min-width: 320px;
	}
	.ul-nav{
		width: 100%;
		margin: 0;
		padding: 0;
		padding-top: 10px;
	}
	.ul-nav li{
		display: inline-block;
		width: 23%;
	}
	.ul-nav span{
		font-size: 18px;
		color: #fff;
	}
	.ul-nav a{
		text-decoration: none;
	}
	.router-link-active>span{
		color: #FFA500;
	}
	.iconfont{
		display: block;
		font-size: 24px;
		margin-bottom: -7px;
		margin-top: -3px;
	}
	
</style>