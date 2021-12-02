<template>
	<section>
<!-- Make a div wrapped slider,set height and width -->
		<div style="width:100%;margin:20px auto;height:350px">
		<h2 v-show="movieList.length > 0" >Movies</h2>
		<!-- Using the slider component -->
		<slider ref="slider" :options="options" >
			<!-- slideritem wrapped package with the components you need -->
			<slideritem class="slide" v-for="(item,index) in movieList" :key="index" >
						<Card
							:img = item.poster_path
							:Titolo = item.title
							:TitoloOriginale = item.original_title
							:Lingua = item.original_language
							:Voto = item.vote_average
							:info = item.overview

						/>
				</slideritem>
			<!-- Customizable loading -->
		</slider>
		</div>

		<div style="width:100%;margin:20px auto;height:350px">
		<h2 v-show="serialList.length > 0" >Series</h2>
		<!-- Using the slider component -->
		<slider ref="slider" :options="options" >
			<!-- slideritem wrapped package with the components you need -->
			<slideritem class="slide" v-for="(item,index) in serialList" :key="index" >
						<Card
							:img = item.poster_path
							:Titolo = item.name
							:TitoloOriginale = item.original_name
							:Lingua = item.original_language
							:Voto = item.vote_average
							:info = item.overview
						/>
				</slideritem>
			<!-- Customizable loading -->
		</slider>
		</div>


		

			

	</section>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import Card from '@/components/Card.vue'

export default {
	name:'CardList',
	data(){
		return{
			options: {
			currentPage: 0,
			tracking: false,
			thresholdDistance: 100,
			thresholdTime: 300,
			infinite: 0,
			slidesToScroll: 4,
			loop: true
     }
		}
	},

	components: {
		Card,
		slider,
		slideritem
	},
 
	props:{
		movieList:Array,
		serialList:Array,
	}
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

section{
	padding: 0 1rem 3rem		;
	h2{
		color: $whitheColor;
		text-transform: uppercase;
		letter-spacing: 4px;
		padding: .625rem 0;
	}
	.slide{
		width: 16%;
		white-space: normal;
		text-align: start;
		margin: 1rem 0;

		
	}
	display: flex;
	flex-direction: column;



}
</style>