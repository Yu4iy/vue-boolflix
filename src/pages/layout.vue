<template>
  <div class="layout">
<!-- HEADER  -->
	<Header/>
<!-- ROUTER TAG	 -->
	<router-view></router-view>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
	components: {
		Header
	},

}
</script>

<style lang="scss" scoped >
	.layout{
	background: linear-gradient(0deg, rgba(55,25,25,1) 0%, rgba(0,0,0,1) 100%);
	height: 100%;
	min-height: 100vh;
	}
</style>