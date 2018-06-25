import { required, email } from 'vuelidate/lib/validators'
import alerter from '@/components/alert/index.vue'

export default{
	data () {
    return {
      form: {
				email: '',
				password: ''
      },
			isSubShow: true,
			variant: 'success',
			message: '登录成功，跳转中...'
    }
  },
	validations: {
		form: {
			email: {
				required,
				email
			},
			password: {
				required
			}
		}
  },
  methods: {
    onSubmit () {
      let param = {
				email: this.form.email,
				password: this.form.password
			}
			
			this.$http.post('/api/users/login',{params: param}).then((res) => {
				if(res.data.isSuccess){
					window.localStorage.user = JSON.stringify(res.data.user)
					//this.$store.commit('login', res.data.user)
					this.isSubShow = false
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						history.go(-1)
					},2000)
				}else{
					alert(res.data.message)
				}
			})
    }
  },
	components: {
		alerter
	}
}