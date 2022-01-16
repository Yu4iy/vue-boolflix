<template>
	<div class="info-page">
		<div class="container">
			<ul class="info-page__inner">
				<li class="info-page__name">TEST FILM</li>
				<li class="info-page__rating"><span>imdb</span> 9</li>
				<li><p class="info-page__description">Lorem ipsum dolor lo sit amet consectetur, adipisicing elit. Aperiam modi veniam ullam saepe culpa, alias mollitia eaque dignissimos, adipisci beatae, excepturi vero aliquam illo reprehenderit quae facilis laudantium. Fugiat, sed?</p></li>
				<li class="info-page__year">Anno: 2012</li>
				<li class="info-page__lang">Lingua: It</li>
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
