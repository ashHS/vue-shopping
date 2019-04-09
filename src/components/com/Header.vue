<template>
	<div class="s-header">
		<div v-if="isCart">
			<a class="right" href="javascript:;" @click="changeManage()" v-if="!wan">管理</a>
			<a class="right" href="javascript:;" @click="changeFinish()" v-if="wan">完成</a>
		</div>
	    <a class="left" @click="goBack" href="javascript:;"><img src="../../assets/left.png" alt=""></a>
	    <h4 class="center">{{msg}}</h4>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				msg:"芝麻科技",
				// 管理、完成
				manage:false,
				finish:false,
				wan:false,
				msg2:"管理"
			}
		},
		// 数据改变后自动刷新
		computed: {
			isCart(){
				return this.$store.state.isCart
			}
		},
		methods:{
			goBack(){
				this.$router.go(-1)
			},
			// 管理是否完成
			changeManage(){
				this.wan = !this.wan;
				this.manage=true;
				this.$store.commit("changeManage",this.manage);
				this.finish = !this.finish;
				this.$store.commit("changeFinish",this.finish);
			},
			changeFinish(){
				this.wan = !this.wan;
				this.manage=false;
				this.$store.commit("changeManage",this.manage);
				this.finish = !this.finish;
				this.$store.commit("changeFinish",this.finish);
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