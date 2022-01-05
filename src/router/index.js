import VueRouter from 'vue-router'
import StartPages from '../pages/start-page'
import SerialPage from '../pages/serial-page'
import MoviesPage from '../pages/movies-page'
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			component: StartPages
		},
		{
			path: '/serials',
			component: SerialPage
		},
		{
			path: '/movies',
			component: MoviesPage
		}
	]
})