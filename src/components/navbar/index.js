import alerter from '@/components/alert/index.vue'

export default {
	props: {
		
	},
	data() {
		return {
			variant: '',
			message: ''
		}
	}, 
	created() {
	},
	computed: {
		user(){
			return this.$store.state.user.user
		}
	},
	methods: {
		logout() {
			this.$http.post('/api/users/logout').then((res) => {
				if(res.data.isSuccess){
					window.localStorage.user = null
					this.variant = 'success'
			    this.message = '退出成功！跳转中...'
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						window.location.href="/"
					},2000)
				}
			})
		}
	},
	components: {
		alerter
	}
}