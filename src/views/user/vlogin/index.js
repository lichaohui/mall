import { required, email } from 'vuelidate/lib/validators'
import alerter from '@/components/alert/index.vue'

export default{
	data () {
    return {
      form: {
				email: '',
				captcha: ''
      },
			isSubShow: true,
			variant: 'success',
			message: '邮箱验证成功，请稍后...'
    }
  },
	validations: {
		form: {
			email: {
				required,
				email
			},
			captcha: {
				required
			}
		}
  },
	
	mounted(){
	},
	
  methods: {
    onSubmit () {
			let param = {
				email: this.form.email,
				captcha: this.form.captcha
			}
			
			this.$http.post('/api/users/verifyExist',{params: param}).then((res) => {
				if(res.data.isSuccess){
					this.isSubShow = false
					window.localStorage.email = this.form.email
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						window.location.href="/vlogin1"
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