<template>
	<section>
		<div>
			<div v-for="movieCard in movieList" :key= 'movieCard.id'  >
				<Card
					:Titolo = movieCard.title
					:TitoloOriginale = movieCard.original_title
					:Lingua = movieCard.original_language
					:Voto = movieCard.vote_average
				/>
			</div>
		</div>
		

		<div>
			<div v-for="serialCard in serialList" :key= 'serialCard.id'  >
				<Card
					:Titolo = serialCard.name
					:TitoloOriginale = serialCard.original_name
					:Lingua = serialCard.original_language
					:Voto = serialCard.vote_average
				/>
			</div>
		</div>
	</section>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
	name:'CardList',

	components: {
		Card,
	},
 
	props:{
		movieList:Array,
		serialList:Array,
	}
}
</script>

<style lang="scss" scoped>
section{
	display: flex;
}
</style>