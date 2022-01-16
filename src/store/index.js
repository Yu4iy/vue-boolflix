import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({


state: {

	serialList:[],
	movieList:[],
	item:{}

},

getters: {

},

mutations: {

	SET_LIST_SERIALS:(state, list) => {
	state.serialList = list
	},
	SET_LIST_MOVIES:(state, list) => {
	state.movieList = list
	},
	GET_ITEM:(state, payload) => {
	state.item = payload
	}	    

	},
actions: {

	GET_ITEM({commit}, payload){
		commit('GET_ITEM', payload)
	},
	GET_API_LIST ({commit},payload) {
		axios
		.get('https://api.themoviedb.org/3/search/tv',{
			params: {
			api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
			query: payload,
			language: 'it-IT'
			}
		}
		)
		.then(list => { commit('SET_LIST_SERIALS', list.data.results);
		console.log(list.data.results	);
		return list.data.results;
		});

		axios
		.get('https://api.themoviedb.org/3/search/movie',{
			params: {
			api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
			query: payload,
			language: 'it-IT'
			}
		}
		)
		.then(list => { commit('SET_LIST_MOVIES', list.data.results);
		console.log(list.data.results	);
		return list.data.results;
		});
	},

}


})