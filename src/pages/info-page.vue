<template>
	<div class="info-page">
		<div class="container">
			<ul class="info-page__inner">
				<li class="info-page__name">{{this.$store.state.item.name}}</li>
				<li class="info-page__rating"><span>imdb </span>{{this.$store.state.item.vote_average}}</li>
				<li><p class="info-page__description">{{this.$store.state.item.overview}}</p></li>
				<li class="info-page__year">{{this.$store.state.item.first_air_date}}</li>
				<li class="info-page__lang">Lingua: {{this.$store.state.item.original_language}}</li>
			</ul>	
		</div>		
	</div>
</template>

<script>

export default {

components: {


  },


  data(){
    return{

    }
  },
 

  methods:{

    
  }
}
</script>

<style lang="scss">
@import "@/styles/globals.scss";
@import '@/styles/variables';

#app{

}

.info-page {
    background: linear-gradient(0deg, rgba(55,25,25,1) 0%, rgba(0,0,0,1) 100%);
    height: 100%;
    min-height: 100vh;
    color: red;
    .info-page__inner{
      padding-top: 120px;
    }
		&__name {
		}

		&__rating {
		}

		&__description {
		}

		&__year {
		}

		&__lang {
		}
}

</style>
