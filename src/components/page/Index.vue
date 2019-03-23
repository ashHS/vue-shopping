<template>
	<div class="s-index">
		<Swiper></Swiper>
		
		<div class="content">
			<p class="cont-head">
				<span class="head-title">特卖</span>
				<router-link to="/cate" class="head-more">更多 ></router-link>
			</p>
			<div class="cont-main cont-temai">
				<span v-for="(item,index) in temai" :key="index">
					<router-link :to="{name:'detail',query:item}" class="cont-one">
						<span class="name">{{item.brand_name}}</span>
						<span class="price">￥{{item.brand_price}}</span>
						<img class="pic" :src="item.brand_pic_url"/>
					</router-link>
				</span>
			</div>
		</div>
		<div class="content">
			<p class="cont-head">
				<span class="head-title">热销</span>
				<router-link to="/cate" class="head-more">更多 ></router-link>
			</p>
			<div class="cont-main cont-rexiao">
				<span v-for="(item,index) in rexiao" v-if="index==0" :key="index">
					<router-link :to="{name:'detail',query:item}" class="cont-left">
						<span class="name">{{item.brand_name}}</span>
						<span class="desc">{{item.brand_desc}}</span>
						<img class="pic" :src="item.brand_pic_url" alt="">
					</router-link>
				</span>
				<div class="cont-right" v-for="(item,index) in rexiao" v-if="index==1" :key="index">
					<router-link :to="{name:'detail',query:item}" class="cont-right-one">
						<p class="text">
							<span class="name">{{item.brand_name}}</span>
							<span class="desc">{{item.brand_desc}}</span>
						</p>
						<img class="pic" :src="item.brand_pic_url"/>
					</router-link>
					<span v-for="(item,index) in rexiao" v-if="index==2" :key="index">
						<router-link :to="{name:'detail',query:item}" class="cont-right-one">
							<p class="text">
								<span class="name">{{item.brand_name}}</span>
								<span class="desc">{{item.brand_desc}}</span>
							</p>
							<img class="pic" :src="item.brand_pic_url"/>
						</router-link>
					</span>
				</div>
			</div>
		</div>
		<div class="content">
			<p class="cont-head">
				<span class="head-title">精品</span>
				<router-link to="/cate" class="head-more">更多 ></router-link>
			</p>
			<div class="cont-main cont-jingpin">
				<ul>
					<li v-for="(item,index) in jingpin" :key="index">
						<router-link :to="{name:'detail',query:item}" class="cont-li">
							<img class="pic" :src="item.brand_pic_url" alt="">
							<p class="name">{{item.brand_name}}</p>
							<p class="price">{{item.brand_price}}</p>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>
<script>
	import Swiper from '../com/Swiper.vue'
	export default{
		data(){
			return {
				dataIndex:{},
				temai:{},
				rexiao:{},
				jingpin:{}
			}
		},
		components:{
			Swiper:Swiper
		},
		created(){
			this.getDataIndex()
		},
		methods:{
			getDataIndex(){
				this.$http.get('../../static/data/index.json').then((response)=>{
					this.dataIndex = response.data
					this.temai = this.dataIndex.data.temai
					this.rexiao = this.dataIndex.data.rexiao
					this.jingpin = this.dataIndex.data.jingpin
				},(response)=>{
					//error
				})
				console.log(this.temai)
			}
		}
	}
</script>
<style scoped>
	.s-index{
		background: #f6f6f6;
		margin-bottom: 65px;
	}
	a{
		color: #000;
	}
	.content{
		margin-top: 5px;
		padding: 0 .375rem;
	}
	.cont-head{
		height: 1.5rem;
		line-height: 1.5rem;
		padding: 0 .25rem;
		font-size: .7rem;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee;
		background-color: #ffffff;
		text-align: initial;
	}
	.cont-head:before{
		content: '';
		width: 1px;
		height: 100%;
		margin-right: .125rem;
		border-left: 5px solid #282828;
	}
	.cont-head span{
	}
	.head-more{
		float: right;
		color: #666;
	}
	.cont-main{
		background-color: #fff;
		margin-top: -15px;
	}
	.cont-temai{
		overflow: hidden;
		padding: .375rem 0;
		text-align: center;
	}
	.cont-temai .pic{
      width: 80%;
    }
	.cont-one{
		float: left;
		width: 32%;
		overflow: hidden;
		padding: 0 2px;
		border-right: 1px solid #eee;
	}
	.cont-one:last-child{
		border: none;
	}
	.cont-one span{
		display: block;
	}
	.name{
	  font-size: .5rem;
	  height: 31px;
	}
	.cont-main .price{
	  font-size: .7rem;
	  color: #fc8637;
	}
	.cont-main .desc{
    font-size: .6rem;
    color: #666;
    }
	.cont-rexiao{
		height: 9rem;
		overflow: hidden;
		text-align: center;
	}
	.cont-left{
		float: left;
		width: 5.6rem;
		height: 8.6rem;
		padding: .2rem;
		border-right: 1px solid #eee;
	}
	.cont-left span{
		display: block;
	}
	.cont-left .desc{
		margin: .125rem 0 .25rem;
	}
	.cont-left .pic{
		width: 5rem;
		height: 6rem;
	}
	.cont-right{
		float: left;
		width: 9rem;
		height: 9rem;
		padding-left: .2rem;
	}
	.cont-right-one{
		display: block;
		height: 4.1rem;
		padding: 0.2rem;
		position: relative;
	}
	.cont-right-one:first-child{
		border-bottom: 1px solid #eee;
	}
	.cont-right-one .text{
		float: left;
		width: 4.4rem;
		text-align: right;
		margin: 10px 0;
		
	}
	.text span{
		display: block;
	}
	.text .name{
		margin: 0 0 .125rem .1rem;
		text-align: left;
	}
	.text .desc{
		position: absolute;
		bottom: 5px;
	}
	.cont-right-one .pic{
		float: right;
		width: 3.7rem;
		height: 3.7rem;
	}
	/* 精品 */
	.cont-jingpin{
		position: relative;
		overflow: hidden;
		padding-bottom: .4rem;
	}
	.cont-jingpin ul{
		padding: 0;
	}
	.cont-jingpin li{
		display: inline-block;
		list-style: none;
		width: 50%;
	}
	.cont-li{
		display: inline-block;
		margin-top: .4rem;
		margin-left: .3rem;
		padding: .375rem;
		border-radius: .2rem;
		border: 1px solid #eee;
		background: #fff;
	}
	.cont-li .pic{
		display: block;
		width: 6.5rem;
		height: 8.125rem;
		border-bottom: 1px dashed #eee;
	}
</style>