import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
	state:{
		headerTitle:'头部'
	},
	mutations:{
		changeHeaderTitle(state,str){
			state.headerTitle= str
		}
	},
	actions:{
		changeHeaderTitle({commit},str){
			commit('changeHeaderTitle',str)
		}
	},
	getters:{
		getHeaderTitle(state){
			return state.headerTitle
		}
	}
})