<template>
	<div class="my">
		<div class="logined" v-if="state=='logined'">
			<div class="uesr-info">
				<img src="../../assets/user.png" alt="">
				<p class="uesr-name">用户:{{userInfo.uesrName}}</p>
				<ul>
					<router-link to="/cart"><li @click="toCart">我的购物车<span>></span></li></router-link>
					<li>我的优惠券<span>></span></li>
					<li>个人设置<span>></span></li>
					<li>版本信息<span>></span></li>
				</ul>
			</div>
			<input type="button" value="注销" @click="cancel">
		</div>
		<div class="login" v-if="state=='login'">
			<p>请登录</p>
			<div class="login-input">
				<input class="shuru" type="text" placeholder="请输入账号" v-model="userInfo.lo_accValue">
				<input class="shuru" type="password" placeholder="请输入密码" v-model="userInfo.re_passValue">
			</div>
			<br>
			<input class="btn" type="button" value="登录" @click="login"/><br>
			<p id="null">没有账号？<a href="javascript:;" @click="toRegister">去注册</a></p>
		</div>
		<div class="register" v-if="state=='register'">
			<p>注册账号</p>
			<input class="shuru" type="text" placeholder="请输入账号" v-model="userInfo.accValue">
			<input class="shuru" type="password" placeholder="请输入密码" v-model="userInfo.passValue">
			<input class="shuru" type="password" placeholder="请再次输入密码" v-model="userInfo.passValue2">
			<input class="shuru" type="tel" placeholder="输入手机号" v-model="userInfo.telNum">
			<br>
			<input class="btn" type="button" value="点击注册" @click="register" />
			<p id="null">已有账号？<a href="javascript:;" @click="cancel">立即登录</a></p>
			<p class="success" v-show="reg_success==1">注册成功！<a href="javascript:;" @click="cancel">去登录</a></p>
			<p class="fail" v-show="reg_success==0">两次密码不一样!</p>
			<p class="fail" v-show="reg_success==2">账号密码不能为空</p>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import LocalDB from '../com/localDB'
	
	Vue.use(VueRouter)
	const router = new VueRouter()
	export default {
		data(){
			return{
				state:'login',
				reg_success:-1,
				userInfo:{
					lo_accValue:'',
					re_passValue:'',
					accValue:'',
					passValue:'',
					passValue2:'',
					telNum:'',
					uesrName:''
				}
			}
		},
		methods:{
			login(){
				if(this.userInfo.accValue===this.userInfo.lo_accValue&&this.userInfo.passValue===this.userInfo.re_passValue)
				this.state='logined'
			},
			toRegister(){
				this.state='register'
			},
			cancel(){
				this.state='login'
			},
			register(){
				if(this.userInfo.passValue===this.userInfo.passValue2&&this.userInfo.passValue!=''&&this.userInfo.accValue!=''&&this.userInfo.telNum){
					this.reg_success=1
					this.userInfo.uesrName=this.userInfo.telNum
				}else if(this.userInfo.passValue!=this.userInfo.passValue2){
					this.reg_success=0
				}else if(this.userInfo.passValue===''||this.userInfo.accValue===''){
					this.reg_success=2
				}
			},
			toCart(){
				router.push({path:'/cart'})
			}
		}
	}
</script>
<style scoped>
	.my{
		background: #EEEFF3;
		height: 570px;
		margin-top: -40px;
		padding-top: 20px;
	}
	.login{
		text-align: center;
	}
	.login p{
		margin: 80px 0 40px;
	}
	.login-input{
		width: 100%;
	}
	 .shuru{
		width: 353px;
		height: 30px;
		border-left: none;
		padding-left: 20px;
	}
	.btn{
		width: 90%;
		height: 40px;
		text-align: center;
		background: #FFA854;
		color: #fff;
		font-size: 18px;
		border: none;
		border-radius: 5px;
	}
	a{
		color: #FFA854;
		font-size: 14px;
	}
	#null{
		font-size: 14px;
		float: right;
		margin: 20px 20px 0 0;
	}
	.register{
		margin-top: 80px;
	}
	.register .success{
		font-size: 17px;
	}
	.success a{
		color: #FFA854;
	}
	.fail{
		font-size: 17px;
		color: red;
	}
	.logined{
		padding-top: 40px;
	}
	.logined img{
		width: 50px;
		height: 50px;
		border-radius: 50%;
	}
	.logined p{
		margin-top: 0px;
	}
	.uesr-info ul{
		width: 355px;
		padding-left: 20px;
		border: 1px solid #eee;
		border-left: none;
		border-right: none;
		background: #fff;
	}
	.uesr-info ul a{
		color: #000;
	}
	.uesr-info ul li{
		list-style: none;
		width: 355px;
		border-top: 1px solid #eee;
		text-align: left;
		height: 40px;
		font-size: 16px;
		line-height: 40px;
		letter-spacing: 1px;
	}

	.uesr-info ul li span{
		float: right;
		margin-right: 10px;
		color: #BBBBBB;
	}
	.logined input{
		background: red;
		border: none;
		height: 35px;
		width: 65%;
		color: #fff;
		border-radius: 10px;
	}
</style>