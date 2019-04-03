import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state = {
		list:[],
		cart:[]
	}
	
var mutations = {
		addData(state,data){
			state.list = data
		},
		addCart(state,data){
			
			if(state.cart.length===0){
				state.cart.push(data);
				// 第一次加入的商品的数量
				state.cart[0].num = data.brand_num;
			}else{
				var flag=0;
				for(var i=0;i<state.cart.length;i++){
					if(state.cart[i].id===data.id){
						console.log('have')
						// 再次加的商品的数量
						state.cart[i].num += data.brand_num;
						// 是否在购物车中
						flag=1;
					}
				}
				console.log(flag)
				if(flag===0){
					// 不存在购物车中  push
					state.cart.push(data);
					// 第一次加入的商品的数量
					state.cart[i].num = data.brand_num;
					console.log(data.brand_num)
				}
			}
			
		}
	}
// 	actions:{
// 		changeHeaderTitle({commit},str){
// 			commit('changeHeaderTitle',str)
// 		}
// 	},
// 	getters:{
// 		getHeaderTitle(state){
// 			return state.headerTitle
// 		}
// 	}
const store = new Vuex.Store({
	state,
	mutations
})
export default store;