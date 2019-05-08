import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
var state = {
		list:[],
		cart:[],
		id:'',
		isCart:'',
		manage:'',
		finish:'',
		selectColor:'',
		my_index:-1,
		isToDetail:false
	}
	
var mutations = {
		addData(state,data){
			state.list = data;
		},
		addCart(state,data){
			
			if(state.cart.length===0){
				data.selectColor = state.selectColor
				state.cart.push(data);
				console.log(state.cart)
			}else{
				var flag=0;
				for(var i=0;i<state.cart.length;i++){
					if(state.cart[i].id===data.id){
						console.log('have')
						state.cart[i].num+=data.brand_num;
						// state.cart[i].num = state.cart[i].brand_num;
						flag=1;
						
					}
				}
				console.log(data.id)
				console.log(flag)
				if(flag===0){
					data.selectColor = state.selectColor
					state.cart.push(data);
				}
			}
		},
		addSelectColor(state,data){
			state.selectColor = data
		},
		addColor(state,data){
			state.my_index = data
		},
		changeHeaderTitle(state,str){
			state.isCart = str
		},
		changeManage(state,data){
			state.manage = data
		},
		changeFinish(state,data){
			state.finish = data
		},
		isToDetail(state,data){
			state.isToDetail = data
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