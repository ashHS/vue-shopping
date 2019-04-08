<template>
	<div class="s-cate">
		<div class="cate-nav">
			<div class="nav-out">
				<div class="nav">
					<a href="javascript:;" class="nav-a" :class="{'nav-a-active':index==nowIndex}" @click="clickType(item.type_now,index)" v-for="(item,index) in types" :key="index">
						{{item.type_name}}
					</a>
				</div>
			</div>
		</div>
		<div class="cate-cont">
			<ul>
				<li v-for="(item,index) in allBrand" v-if="nowType==item.type || nowType==0" :key="index" @click="toDetail(item.id)">
					<!-- 命名路由并用query传值 -->
					<router-link :to="'/detail/'+item.id" class="cont-li">
						<img class="pic" :src="item.brand_pic_url" alt="">
						<div class="goods">
							<p class="name">{{item.brand_name}}</p>
							<p class="price">￥{{item.brand_price}}</p>
						</div>
					</router-link>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import VueRouter from 'vue-router'
	import Axios from 'axios'
	import store from '../../store/store.js'
	import LocalDB from '../com/localDB'
	
	Vue.use(VueRouter)
	const router = new VueRouter()
	export default{
		data(){
			return{
				nowType:0,
				nowIndex:0,
				types:{},
				dataCart:[],
				dataDetail:[],
				allBrand:{}
			}
		},
		created(){
			this.getDataCate();
			this.$store.commit("changeHeaderTitle",false)
		},
		methods:{
			getDataCate(){
				Axios.get('../../static/data/cate.json').then((response) =>{
					this.dataCart = response.data
					this.types = this.dataCart.data.types
					this.allBrand = this.dataCart.data.allBrand
				},(response)=>{
					//error
				})
				// console.log(this.allBrand)
				//console.log(1)
			},
			toDetail(){
				// let localDB = new LocalDB('dataDetail')
				Axios.get('../../static/data/cate.json').then((response)=>{
					this.dataDetail = response.data
					this.detailData = this.dataDetail.data.allBrand
					console.log(this.detailData[0].color)
					this.$store.commit('addData',response.data.data.allBrand)
				}).catch((error)=>{
					console.log(error)
				})
			},
			clickType(type,index){
				this.nowType = type
				this.nowIndex = index
			}
		}
	}
</script>
<style scoped>
	.s-cate{
		margin:-10px 0 60px;
	}
	.cate-nav{
	  position: fixed;
	  width: 4.5rem;
	  /* height: 8.5rem; //动态变动 */
	  overflow: hidden;
	  background: #f6f6f6;
	  }
	  .nav-out{
	    /* // width: 4.5rem; */
	    width: 4.8rem;
	    /* height: 8.5rem; //动态变动 */
	    overflow-x: hidden;
	    overflow-y: auto;
	    border-top: 1px solid #eee;
	    border-bottom: 1px solid #eee;
		}
	    .nav-a{
	      display: block;
	      height: 1.5rem;
	      line-height: 1.5rem;
	      text-align: center;
	      font-size: .625rem;
	      color: #666666;
	      border-bottom: 1px solid #eee;
	    }
	    .nav-a-active{
	      background: #ffffff;
		  }
	      .nav-a-active:before{
	        content: '';
	        float: left;
	        width: 1px;
	        height: 100%;
	        border-right: 5px solid #282828;
	      }
	.cate-cont{
	  position: relative;
	  overflow: hidden;
	  margin-top: .25rem;
	  margin-left: 4.5rem;
	  background: #ffffff;
	  }
	  .cate-cont ul{
		  margin-left: -40px;
	  }
	  li{
	    display: inline-block;
	    float: left;
	    border-bottom: 1px solid #eee;
	    width: 100%;
	  }
	  .cont-li{
		position: relative;
	    display: inline-block;
	    /* margin-bottom: .4rem; */
	    margin-left: .2rem;
	    padding: .275rem;
	    border-radius: .2rem;
	    background: #ffffff;
		}
		.cont-li div{
			display: inline-block;
			width: 160px;
			float: left;
			margin-top: 0;
			text-align: left;
			padding-left: 10px;
		}
	    .pic{
	      display: inline-block;
	      width: 2.8rem;
	      height: 3rem;
		  float: left;
	    }
		.goods .name{
			font-size: 15px;
			color: #000;
			margin-top: 5px;
			margin-bottom: 20px;
		}
		.goods .price{
			margin: 0;
			color: #FFA500;
			font-size: 14px;
			position: absolute;
			bottom: 10px;
			right: 20px;
		}
</style>