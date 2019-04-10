<template>
	<div class="my">
		<div class="logined" v-if="state=='logined'">
			<div class="uesr-info">
				<img src="../../assets/user.png" alt="">
				<p class="uesr-name">用户:{{userData[flag].phone}}</p>
				<ul>
					<router-link to="/cart"><li @click="toCart">我的购物车<span class="iconfont icon-1201youjiantou"></span></li></router-link>
					<li>我的优惠券<span class="iconfont icon-1201youjiantou"></span></li>
					<li>个人设置<span class="iconfont icon-1201youjiantou"></span></li>
					<li>版本信息<span class="iconfont icon-1201youjiantou"></span></li>
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
			<input class="shuru" type="text" placeholder="请输入账号" v-model="regInfo.account">
			<input class="shuru" type="password" placeholder="请输入密码" v-model="regInfo.password">
			<input class="shuru" type="password" placeholder="请再次输入密码" v-model="regInfo.password2">
			<input class="shuru" type="tel" placeholder="输入手机号" v-model="regInfo.phone">
			<br>
			<input class="btn" type="button" value="点击注册" @click="register" />
			<p class="success" v-show="reg_success==1">注册成功！三秒后跳转到登录页面...<a href="javascript:;" @click="cancel">去登录</a></p>
			<p id="null">已有账号？<a href="javascript:;" @click="cancel">立即登录</a></p>
			<p class="fail" v-show="reg_success==0">两次密码不一样!</p>
			<p class="fail" v-show="reg_success==2">账号密码不能为空</p>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import Axios from 'axios'
	import store from '../../store/store.js'
	import LocalDB from '../com/localDB'
	
	import '../../css/font_jdq5enkqg2/iconfont.css'
	
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
					uesrName:''
				},
				regInfo:{
					account:'',
					password:'',
					password2:'',
					phone:''
				},
				userData:[],
				flag:-1
			}
		},
		created(){
			this.$store.commit("changeHeaderTitle",false)
			this.getData()
		},
		methods:{
			getData(){
				Axios.get('../../static/data/user.json').then((response)=>{
					this.userData = response.data.userData
				}).catch((error)=>{
					console.log(error)
				})
			},
			login(){
				for(var i=0;i<this.userData.length;i++){
					if(this.userInfo.lo_accValue==this.userData[i].account&&this.userInfo.re_passValue==this.userData[i].password){
						this.state='logined';
						this.flag = i;
						return;
					}
				}
			},
			toRegister(){
				this.reg_success = -1;
				this.state='register'
				console.log(this.regInfo)
				for(let key in this.regInfo){
					this.regInfo[key]='';
				}
			},
			cancel(){
				this.state='login'
			},
			register(){
				var exist = false;
				for(var i=0;i<this.userData.length;i++){
					if(this.userData[i].account==this.regInfo.account){
						exist = true;
						alert("账号已被注册")
						this.reg_success=-1;
						return;
					}
					else if(this.userData[i].phone==this.regInfo.phone){
						exist = true;
						alert("该手机号已被注册")
						this.reg_success=-1;
						return;
					}
				}
				if(this.regInfo.password==this.regInfo.password2&&this.regInfo.password!=''&&this.regInfo.accword!=''&&this.regInfo.phone&&!exist){
					this.reg_success=1
					this.userData.push(this.regInfo)
					console.log(1)
					// 跳到登录
					this.tiaozhuan();
				}else if(this.userInfo.password!=this.userInfo.password2&&!exist){
					this.reg_success=0
				}else if(this.userInfo.password==''||this.userInfo.account==''&&!exist){
					this.reg_success=2
				}
			},
			toCart(){
				router.push({path:'/cart'})
			},
			tiaozhuan(){
				setTimeout(()=>{
					this.state='login'
				},3000)
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
		font-size: 16px;
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
		position: relative;
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
		display: block;
		width: 20px;
		height: 30px;
		position: absolute;
		bottom: 10px;
		right: 8px;
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