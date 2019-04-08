import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state = {
		list:[],
		cart:[],
		my_index:-1,
		selectColor:'',
		isCart:false,
		manage:false,
		finish:false
	}
	
var mutations = {
		addData(state,data){
			state.list = data
		},
		addCart(state,data){
			console.log(data)
			if(state.cart.length===0){
				state.cart.push(data);
				// console.log(state.cart[0].brand_num)
				// 第一次加入的商品的数量
				state.cart[0].num = data.brand_num;
				state.cart[0].selectColor = state.selectColor;
				console.log(state.cart[0].selectColor)
			}else{
				var flag=0;
				for(var i=0;i<state.cart.length;i++){
					if(state.cart[i].id===data.id){
						// console.log('have')
						// 再次加的商品的数量
						state.cart[i].num += data.brand_num;
						// 是否在购物车中
						flag=1;
					}
				}
				// console.log(flag)
				if(flag===0){
					// 不存在购物车中  push
					state.cart.push(data);
					// 第一次加入的商品的数量
					state.cart[i].num = data.brand_num;
					state.cart[i].selectColor = state.selectColor;
					// console.log(data.brand_num)
				}
			}
			
		},
		addColor(state,data){
			state.my_index = data;
		},
		addSelectColor(state,data){
			state.selectColor = data;
			console.log(state.selectColor)
		},
		changeHeaderTitle(state,data){
			state.isCart = data
			// console.log(state.isCart)
		},
		changeManage(state,data){
			state.manage = data
			console.log(state.manage)
		},
		changeFinish(state,data){
			state.finish = data
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