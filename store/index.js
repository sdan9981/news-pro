import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	//state数据源
	state:{
		userinfo:uni.getStorageSync('USERINFO') || {},
		historyList:uni.getStorageSync("__history") || []  //uni.getStorageSync("__history")查找本地缓存，如果没有则为一个空数组
	},
	mutations:{
		SET_USER_INFO(state,userinfo){
			state.userinfo = userinfo
		},
		SET_HISTORY_LIST(state,history){
			state.historyList = history
		},
		CLEAR_HISTORY(state,history){
			state.historyList = []
		}
	},
	actions:{
		set_userinfo({commit},userinfo){
			uni.setStorageSync('USERINFO',userinfo)
			commit('SET_USER_INFO',userinfo)
		},
		set_history({commit,state},history){
			let list = state.historyList
			list.unshift(history)
			uni.setStorageSync("__history",list)
			commit('SET_HISTORY_LIST',list)
		},
		clearHistory({commit}){
			uni.removeStorageSync("__history") //清理本地缓存
			commit('CLEAR_HISTORY')
		}
	}
})

export default store