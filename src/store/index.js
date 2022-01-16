import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);
export default new Vuex.Store({


  state: {
		// count: 0,
		// counts: 0,
		// showModal:true,
		serialList:[],
		test:'star'
	},

getters: {

},

mutations: {
		// increment (state) {
		// 	state.count++
		// 	state.counts = state.counts + 20;	
		// },
		// decrement (state) {
		// 	state.count--

		// },
		// modalTogle (state) {
		// 	state.showModal = !state.showModal
		// },



// ------------
SET_LIST:(state, list) => {
state.test = list
},
updateMessage (state,message) {

	state.test = message
	return axios
		.get('https://api.themoviedb.org/3/search/tv',{
			params: {
			api_key: 'bcb47ae21b247fb462aab053c0af2cb3',
			query: message,
			language: 'it-IT'
			}
		}
		)
		.then(list => {state.serialList =  list.data.results})
},
// ----------------		    

	},
actions: {


}


})