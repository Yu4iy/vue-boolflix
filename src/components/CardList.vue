<template>
	<section>
		<div v-for="card in list" :key= 'card.id'  >
			<Card
				:Titolo = card.title
				:TitoloOriginale = card.original_title
				:Lingua = card.original_language
				:Voto = card.vote_average
			/>
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
		list:Array,
	}
}
</script>

<style>

</style> 