<template>
  <b-container fluid id='app'>
	  <navbar v-bind:user = 'user'></navbar>
		<keep-alive>
      <router-view v-bind:user = 'user'></router-view>
		</keep-alive>
		<footers></footers>
	</b-container>
</template>

<style lang='stylus'>
	body
		font-size: 14px

	.navbar-brand
		padding-top: 0

	.dropdown-menu
		font-size: inherit
</style>

<script>
  import navbar from './components/navbar/index.vue'
	import footers from './components/footer/index.vue'
	
  export default {
    name: 'app',
		props: {
		},
    data() {
      return {
			  user: window.localStorage.user ? JSON.parse(window.localStorage.user) : null,
      }
    },
    methods: {
    },
		components: {
			navbar,
			footers
		}
  };
</script>
