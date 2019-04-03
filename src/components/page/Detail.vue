<template>
	<div class="s-detail">
		<div class="detail-head">
			<p>商品详情</p>
		</div>
		<div>
			<div class="pic">
				<img :src="Cate.brand_pic_url" alt="">
			</div>
			<div class="cont">
				<p class="name">{{Cate.brand_name}}</p>
				<span class="price">￥{{Cate.brand_price}}</span>
				<span class="stock">{{Cate.stock}}库存</span>
			</div>
			<div class="bot">
				<div class="goods-counter">
					<a href="javascript:;" class="btn-sub" @click="changeNum(-1,Cate)"> - </a>
					<input type="text" class="goods-num" readonly="readonly" v-model="Cate.brand_num">
					<a href="javascript:;" class="btn-add" @click="changeNum(1,Cate)"> + </a>
				</div>
				<!-- <router-link class="add-cart" v-on:click.native="addCart" to="/cart">加入购物车</router-link> -->
				<a class="add-cart" href="javascript:;" @click="addCart()">加入购物车</a>
				<transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
				    <p class="circle" v-show="flag"> </p>
				</transition>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import Axios from 'axios'
	import LocalDB from '../com/localDB'
	
	Vue.use(VueRouter);
	const router = new VueRouter()
	export default{
		data(){
			return {
				nowID:150,
				flag:false,
				id:0,
				Cate:{},
				detailData:[]
			}
		},
		mounted(){
			this.id = this.$route.params.id
			this.getDataDetail(this.id)
		},
		methods:{
			changeNum(num,data){
				if(num===-1){
					if(data.brand_num>=2){
						data.brand_num = data.brand_num - 1;
					}
				}else{
					if(data.stock>data.brand_num)
					data.brand_num = data.brand_num + 1;
				}
			},
			getDataDetail(id){
				Axios.get('../../static/data/cate.json').then((response)=>{
					this.detailData = response.data.data.allBrand
					// console.log(this.detailData)
					for(var i=0;i<this.detailData.length;i++){
						if(this.detailData[i].id==id){
							this.Cate = this.detailData[i]
							return;
						}
					}
				}).catch((error)=>{
					console.log(error)
				})
			},
			addCart(){
 				this.flag = !this.flag;
// 				let localDB = new LocalDB('dataCart')
// 				if(localDB.get('dataCart').length===0||localDB.get('dataCart').data.carts.length===0){
// 					this.$http.get('../../static/data/cart.json').then((response)=>{
// 						this.dataCart = response.data
// 						this.carts = this.dataCart.data.carts
// 						localDB.set(this.dataCart)
// 						let dataCart = localDB.get('dataCart')
// 						dataCart.data.carts.unshift(this.detailData[0])
// 						localDB.set(dataCart)
// 						// router.push({path:'cart'})
// 					},(response)=>{
// 						//error
// 					})
// 				}else{
// 					let dataCart = localDB.get('dataCart')
// 					dataCart.data.carts.unshift(this.detailData[0])
// 					localDB.set(dataCart)
// 					// router.push({path:'cart'})
// 				}
				this.$store.commit('addCart',this.Cate)
			},
			beforeEnter(el){
			    el.style.transform = "translate(0px, 0px)"
			},
			enter(el, done){
			    // el.offsetWidth 强制html渲染动画
			    // el.offsetWidth 这句话如何不写就不会有动画效果直接渲染的
			    el.offsetWidth;
			    el.style.transform = "translate(140px, 113px)";
			    el.style.transition = "all 1.2s ease";
			    done()
			},
			afterEnter(el){
			    this.flag = !this.flag
			}
		}
	}
</script>
<style scoped>
	.s-detail{
		position: relative;
		height: 510px;
		background: #eee;
		margin-top: -10px;
	}
	.detail-head p{
		padding-top: 10px;
		font-size: 20px;
	}
	.pic{
		border-bottom: 1px solid #333;
		padding-bottom: 20px;
	}
	.pic img{
		height: 10rem;
		width: 66%;
	}
	.cont{
		margin: .3rem 0;
		padding: 0 .375rem;
		text-align: left;
	}
	.cont .name{
		font-size: .65rem;
	}
	.cont .price{
		text-align: center;
		font-size: .8rem;
		color: red;
	}
	.cont .stock{
		font-size: .7rem;
		color: #333;
		margin-left: 20px;
	}
	.bot .goods-counter{
		height: .75rem;
		display: inline-block;
		text-align: left;
		margin: 10px 0 0 20px;
	}
	.goods-counter a{
		display: inline-block;
		height: .75rem;
		line-height: .75rem;
		font-size: .3rem;
		padding: 0 .8rem;
		border: 1px solid #eee;
	}
	.goods-counter .goods-num{
		height: .75rem;
		line-height: .75rem;
		width: 1.4rem;
		text-align: center;
		font-size: .4rem;
		border: 1px solid #eee;
	}
	.bot{
		position: fixed;
		bottom: 60px;
		z-index: 100;
		height: 50px;
		width:16rem;
		max-width: 16rem;
		min-width: 320px;
		margin:0 auto;
		color: #fff;
		border-top: 1px solid #eee;
		background: #ffffff;
	}
	.bot .add-cart{
		float: right;
		height: 34px;
		margin-top: 8px;
		margin-right: .5rem;
		padding: 0 15px;
		line-height: 34px;
		font-size: .5rem;
		color: red;
		border: 1px solid red;
		border-radius: 4px;
	}
	.circle{
		border: solid 1px red;
		background-color: red;
		border-radius: 50%;
		width: 10px;
		height: 10px;
		margin-top: -154px;
		margin-left: 138px;
		z-index: 1000;
		position: relative;
	}
</style>