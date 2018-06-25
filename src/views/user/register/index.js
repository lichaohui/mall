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
			message: '邮箱验证成功，跳转中...'
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
			
			this.$http.post('/api/users/verifyUnique',{params: param}).then((res) => {
				if(res.data.isSuccess){
					this.isSubShow = false
					window.localStorage.email = this.form.email
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						window.location.href="/register1"
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