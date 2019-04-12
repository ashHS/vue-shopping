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
			<div class="shai" @click="showSorts = !showSorts">
				<i class="shai-img"></i>
				<span>筛选</span><i class="down-arrow"></i>
			</div>
			<div class="sort-methods nav" v-if="showSorts">
				<a href="javascript:;" class="nav-a" :class="{'nav-a-active':index==sortIndex}" @click="clickSort(item.sort_now,index)" v-for="(item,index) in sorts" :key="index">
					<i v-if="price==true&&isPrice" :class="{'iconfont icon-paixu-jiangxu':index==2}"></i>
					<i v-if="price==false&&isPrice" :class="{'iconfont icon-paixu-shengxu':index==2}"></i>
					{{item.name}}
				</a>
			</div>
		</div>
		<div class="cate-cont">
			<ul>
				<li v-for="(item,index) in allBrand" v-if="nowType==item.type || nowType==0" :key="index" @click="toDetail(item.id)">
					<!-- 命名路由并用query传值 -->
					<router-link :to="'/detail/'+item.id" class="cont-li">
						<img class="pic" :src="item.brand_pic_url" alt="">
						<div>
							<span class="name">{{item.brand_name}}</span>
							<p class="price">￥{{item.brand_price}}</p>
							<p id="sales">{{item.brand_sales}}人付款</p>
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
	import '../../css/font_nme6qu1ibg/iconfont.css'
	
	Vue.use(VueRouter)
	const router = new VueRouter()
	export default{
		data(){
			return{
				nowType:0,
				nowIndex:0,
				types:{},
				sorts:{},
				showSorts:false,
				sortIndex:0,
				price:'',
				//当点击price时 为true时升降序箭头出现
				isPrice:false,
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
				this.$http.get('../../static/data/cate.json').then((response) =>{
					this.dataCart = response.data
					console.log(this.dataCart)
					this.types = this.dataCart.data.types
					this.sorts = this.dataCart.data.sortMethods
					// console.log(this.)
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
			},
			clickSort(sort,index){
				this.sortIndex = index
				if(this.sorts[index].method=='salesSort'){//按销量
					this.allBrand.sort(this.compare('brand_sales')) 
					// 使价格每次都是升序
					this.price = false
					// 使升降序箭头消失
					this.isPrice = false
				}else if(this.sorts[index].method=='priceSort'){//按价格
				this.isPrice = true
				var type = this.price ? 'desc':'asc'//desc 降序 asc 升序
				this.price = !this.price
					this.allBrand.sort(this.compare('brand_price',type))
				}else if(this.sorts[index].method=='setList'){//综合排序
					this.getDataCate()//如果是综合 就重新获取数据
					this.price = false
					this.isPrice = false
						console.log(1)
				}
			},
			compare(prop,type){
				type = type||'desc'
				// console.log(type)
				var flag1;
				var flag2;
				if(type=='asc'){
					// console.log(1)
					flag1=1;
					flag2=-1;
				}else{
					flag1=-1;
					flag2=1;
				}
				return function(obj1,obj2){
					var val1 = obj1[prop],
					val2 = obj2[prop];
					if(val1>val2){
						return flag1
					}else if(val1<val2){
						return flag2
					}else{
						return 0
					}
				}
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
	    width: 4.8rem;
	    /* height: 8.5rem; //动态变动 */
	    overflow-x: hidden;
	    overflow-y: auto;
	    border-top: 1px solid #eee;
	    border-bottom: 1px solid #eee;
		}
		.shai{
			background: #fff;
			height: 1.5rem;
			line-height: 1.5rem;
			text-align: left;
			padding-left: 35px;
			position: relative;
		}
		.shai .shai-img{
			background: url(../../assets/shaixuan-1.jpg) no-repeat;
			display: block;
			width: 20px;
			height: 20px;
			position: absolute;
			left: 5px;
			bottom: 5px;
		}
		.shai span{
			font-size: .625rem;
		}
		.shai .down-arrow{
			background: url(../../assets/icon_down-arrow.jpg) no-repeat;
			display: block;
			width: 15px;
			height: 15px;
			position: absolute;
			bottom: 5px;
			right: 22px;
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
		/* 升降序箭头 */
		.icon-paixu-jiangxu,.icon-paixu-shengxu{
			position: absolute;
		}
		.icon-paixu-jiangxu{
			bottom: 0px;
			right: 20px;
		}
		.icon-paixu-shengxu{
			bottom: 0px;
			right: 20px;
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
	    display: inline-block;
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
			position: relative;
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
			font-size: 12px;
			position: absolute;
			bottom: 10px;
			right: 20px;
		}
		.name{
			font-size: 16px;
			color: #000;
			
		}
		#sales{
			margin-left: 0;
			color: #333;
			font-size: 10px;
			position: absolute;
			right: 4px;
			bottom: 2px;
		}
		.cont-li div p{
			margin: 0;
			color: #FFA500;
		}
</style>