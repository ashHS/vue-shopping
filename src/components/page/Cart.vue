<template>
	<div class="s-cart">
		<div class="cart-cont">
			<div class="empty" v-show="carts.length==0">
				<p>这里是空的，快去逛逛吧~</p>
			</div>
			<ul>
				<li class="cont-one" v-for="(item,index) in carts" :key="index">
					<div class="item-selector">
<<<<<<< HEAD
						<div class="icon-selector" v-bind:class="{'selector-active':item.isSelect}" @click="select(item,index)">
=======
						<div class="icon-selector" v-bind:class="{'selector-active':item.isSelect}" @click="select(item)">
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
							<svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
							    <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
							        fill="#ffffff" p-id="2923"></path>
							</svg>
						</div>
					</div>
<<<<<<< HEAD
					<router-link :to="'/detail/'+item.id" class="goods-a">
						<img class="goods-img" :src="item.brand_pic_url" alt="">
					</router-link>
					<div class="goods-info">
						<h5 class="goods-name">{{item.brand_name}}</h5>
						<p class="color">{{item.selectColor}}</p>	
						<span class="goods-price">￥{{item.brand_price}}</span>
					</div>
					<div class="goods-count">
						<a href="javascript:;" class="btn-sub" @click="changeNum(-1,item)">-</a>
						<input type="text" class="goods-num" readonly="readonly" v-model.lazy="item.num">
						<a href="javascript:;" class="btn-add" @click="changeNum(1,item)">+</a>
					</div>
					
					<!-- <a href="javascript:;" class="goods-delete" @click="deleteGoods(index,carts)">删除</a> -->
=======
					<a href="javascript:;" class="goods-a">
						<img class="goods-img" :src="item.brand_pic_url" alt="">
					</a>
					<div class="goods-info">
						<h5 class="goods-name">{{item.brand_name}}</h5>
						<div class="goods-count">
							<a href="javascript:;" class="btn-sub" @click="changeNum(-1,item)">-</a>
							<input type="text" class="goods-num" readonly="readonly" v-model.lazy="item.num">
							<a href="javascript:;" class="btn-add" @click="changeNum(1,item)">+</a>
						</div>
					</div>
					<span class="goods-price">￥{{item.brand_price}}</span>
					<a href="javascript:;" class="goods-delete" @click="deleteGoods(index,carts)">删除</a>
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
				</li>
			</ul>
		</div>
		<div class="1">{{carts.id}}</div>
		<div class="cart-count">
			<div class="g-selector" @click="selectAll()">
				<div class="item-selector">
					<div class="icon-selector" v-bind:class="{'selector-active':checkAllFlag}">
						<svg t="1504061791962" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2922" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12">
						    <path d="M908.288 127.488l-537.6 537.6-254.976-254.976L0 525.824l254.976 254.976 115.712 115.712L486.4 780.8l537.6-537.6z"
						        fill="#ffffff" p-id="2923"></path>
						</svg>
					</div>
				</div>
				<span>全选</span>
			</div>
			<div class="all-price">
			  <p class="price-p">总计 :<em class="price">￥{{totalPrice}}</em></p>
			</div>
<<<<<<< HEAD
			<a class="btn-counter" v-if="!manage">去结算</a>
			<a class="btn-counter delete" v-if="manage" @click="deleteGoods()">删除</a>
=======
			<a class="btn-counter">去结算</a>
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import LocalDB from '../com/localDB'
	
	Vue.use(VueRouter);
	const router = new VueRouter()
	export default{
		data(){
			return {
				checkAllFlag:false,
<<<<<<< HEAD
				// 选择颜色的
				color:[],
				dataCart:{},
				// 循环展示的数组/
				carts:[],
				data:[],
				selectIndex:[]
=======
				
				dataCart:{},
				carts:[],
				data:[]
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
			}
		},
		created(){
			this.getDataCart()
<<<<<<< HEAD
			this.$store.commit("changeHeaderTitle",true)
=======
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
		},
		computed:{
			totalPrice(){
				let price = 0
				Array.from(this.carts).forEach(cart=>{
					if(cart.isSelect){
						price += cart.num*cart.brand_price
					}
				})
				return price
<<<<<<< HEAD
			},
			manage(){
				return this.$store.state.manage;
			},
			finish(){
				return this.$store.state.finish;
=======
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
			}
		},
		methods:{
			getDataCart(){
<<<<<<< HEAD
				this.carts = this.$store.state.cart;
				// console.log(this.carts)
				this.carts.selectColor = this.$store.state.selectColor;
// 				console.log(this.$store.state.selectColor)
=======
				this.carts = this.$store.state.cart
				
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
			},
			changeNum(change,carts){
				if(change==-1){
					if(carts.num>=2){
						carts.num = carts.num-1
					}
				}else{
					if(carts.num<carts.stock){
						carts.num = carts.num+1
					}
				}
			},
			// 删除商品
			deleteGoods(index,carts){
<<<<<<< HEAD
				// 删除某些
				// carts.splice(index,1);
				if(!this.checkAllFlag){
					for(var i=0;i<this.selectIndex.length;i++){
						this.carts.splice(this.selectIndex[i],1);
					}
				}
				
				// 全部删除
				if(this.checkAllFlag){
					var len = this.carts.length
					this.carts.splice(0,len);
				}
			},
			select(carts,index){
				carts.isSelect = !carts.isSelect
				let checkAllFlag = Array.from(this.carts).every(cart=>{
					return cart.isSelect
				});
				this.checkAllFlag = checkAllFlag;
				// 删除某些商品
				if(carts.isSelect){
					this.selectIndex.push(index);
					console.log(this.selectIndex)
				}else if(!carts.isSelect){
					this.selectIndex.splice(this.selectIndex[index],1);
					console.log(this.selectIndex)
				}
=======
				carts.splice(index,1)
				//删除本地存储里的数据
// 				let localDB = new LocalDB('dataCart')
// 				this.dataCart.data.carts = this.carts
// 				localDB.set(this.dataCart)
			},
			select(carts){
				carts.isSelect = !carts.isSelect
				let checkAllFlag = Array.from(this.carts).every(cart=>{
					return cart.isSelect
				})
				this.checkAllFlag = checkAllFlag
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
			},
			selectAll(){
				this.checkAllFlag = !this.checkAllFlag
				this.carts.isSelect = this.checkAllFlag
				Array.from(this.carts).forEach(cart=>{
					cart.isSelect = this.checkAllFlag
				})
			}
		}
	}
</script>
<style scoped>
	.s-cart{
		position: relative;
		margin-top: -10px;
	}
	.cart-cont{
		margin: .25rem 0 4.7rem;
		border-top: 1px solid #eee;
		background: #fff;
	}
	.empty{
		margin-top: 150px;
	}
	.empty p{
		font-size: 24px;
		color: #777;
	}
	.cart-cont ul{
		padding: 0;
		margin: 0;
	}
	.cont-one{
<<<<<<< HEAD
		height: 3rem;
=======
		height: 2rem;
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
		overflow: hidden;
		padding: .25rem;
		border-bottom: 1px solid #eee;
		list-style: none;
<<<<<<< HEAD
		margin-top: -1px;
		position: relative;
=======
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	}
	.goods-a{
		float: left;
		width: 1.8rem;
		height: 2rem;
		margin: 0 .25rem;
	}
	.goods-img{
		display: inline-block;
<<<<<<< HEAD
		width: 2.2rem;
		height: 2.2rem;
		margin-right: 5px;
		margin-top: 5px;
=======
		width: 1.8rem;
		height: 2rem;
		margin-right: 5px;
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	}
	/* 单选 */
	.item-selector {
		float: left;
	    width: 12%;
		display: inline-block;
	}
	
	.icon-selector {
	    position: relative;
	    margin: 16px auto 0 auto;
	    width: 16px;
	    height: 16px;
	    border-radius: 50%;
	    border: 2px solid #ccc;
	    cursor: pointer;
	}
	
	.selector-active {
	    background-color: #7a45e5;
	    border-color: #7a45e5;
	}
	
	.selector-active .icon {
	    position: absolute;
	    top: 2px;
	    left: 2px;
	}
	.goods-info{
		float: left;
<<<<<<< HEAD
		/* width: 4.2rem; */
		margin-left: 20px;
=======
		width: 4.2rem;
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	}
	.goods-name{
		min-width: 7.5rem;
		overflow: hidden;
		/* 不换行和省略号 */
		white-space: nowrap;
		text-overflow: ellipsis;
<<<<<<< HEAD
		font-size: .5rem;
		margin-bottom: .2rem;
		margin-top: 0;
		text-align: left;
		width: 4rem;
	}
	.goods-info .color{
		padding: 0 5px;
		height: 15px;
		border-radius: 5px;
		font-size: 12px;
		color: #555555;
		text-align: left;
		margin: 0;
	}
	.goods-count{
		position: absolute;
		bottom: 10px;
		right: 20px;
=======
		font-size: .45rem;
		margin-bottom: .2rem;
		margin-top: 0;
		text-align: left;
		
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	}
	.goods-count a{
		padding: .125rem 0;
	}
	.goods-num{
		width: 1.4rem;
		border: 1px solid #eee;
		text-align: center;
	}
	.goods-price{
		display: inline-block;
		font-size: .6rem;
		color: #fc8637;
<<<<<<< HEAD
		margin-top: 5px;
		float: left;
	}
	.goods-delete{
		float: right;
		height: 2.47rem;
		width: 1.5rem;
		padding: 0 .3rem;
		font-size: 0.6rem;
		line-height: 2.47rem;
		background: red;
		margin-top: -5px;
		margin-right: -6px;
		border-top-left-radius: 4px;
		border-bottom-left-radius: 4px;
		color: #fff;
		font-weight: bold;
=======
		margin-right: 50px;
		margin-top: 23px;
	}
	.goods-delete{
		float: right;
		height: 2rem;
		padding: 0 .3rem;
		font-size: 0.5rem;
		line-height: 2rem;
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	}
	.cart-count{
	  position: fixed;
	  bottom: 60px;
	  z-index: 1;
	  height: 50px;
	  line-height: 50px;
	  width:100%;
/* 	  max-width: 16rem;
	  min-width: 320px; */
	  margin:0 auto;
	  border-top: 1px solid #eee;
	  background: #fff;
	  }
	  .all-checkbox,.all-price,.btn-counter{
	    display: inline-block;
	    height: 50px;
	    font-size: .4rem;
	  }
	  .all-price .price-p{
		  margin-top: 0;
	    margin-left: .8rem;
	    font-size: .6rem;
		}
	    .price{
	      color: #fc8637;
	    }
	  .btn-counter{
	    float: right;
		padding: 0 .8rem 0 .6rem;
		font-size: .6rem;
		background: #7A45E5;
		color: #fff;
	  }
<<<<<<< HEAD
	  .delete{
		  background: red;
	  }
	  .manage{
		  margin-left: -20px;
		  border: 1px solid #eee;
		  padding: 0 5px;
		  margin-top: -2px;
	  }
=======
>>>>>>> a48fef95d6863b6350321dfa699aaf852065181d
	/* 全选 */
	.g-selector {
	    float: left;
	    width: 70px;
	    height: 52px;
	    cursor: pointer;
		margin-left: 20px;
	}
	
	.g-selector .item-selector {
	    position: relative;
	    display: inline-block;
	}
	
	.g-selector span {
		font-size: 18px;
	    position: absolute;
	    color: #5F646E;
		top: 2px;
	}
</style>