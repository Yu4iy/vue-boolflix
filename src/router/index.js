import VueRouter from 'vue-router'
import layout from '../pages/layout'
import StartPages from '../pages/start-page'
import SerialPage from '../pages/serial-page'
import MoviesPage from '../pages/movies-page'
import InfoPage from '../pages/info-page'
export default new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			name:'start-page',
			component: StartPages
		},
		{
			path: '/main',
			name:'loyout',
			component: layout,
			children:
			[
				{
					path: '/serials',
					name:'serial-page',
					component: SerialPage
				},

				{
					path: '/movies',
					name:'movies-page',
					component: MoviesPage
				},
				{
					path: ':id',
					name: 'info-page',
					component:InfoPage,
				},	
			]
		},

	]
})