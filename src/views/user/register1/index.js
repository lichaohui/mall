import { validationMixin } from "vuelidate"
import { required, sameAs, minLength } from 'vuelidate/lib/validators'
import alerter from '@/components/alert/index.vue'

export default{
	data () {
    return {
      form: {
				email: window.localStorage.email,
				name: '',
				vcode: '',
        password: '',
				password_confirm: ''
      },
			isSendDisabled: true,
			sendBtnWord: '邮件发送中...',
			isSubShow: true,
			timer: null,
			count: {
				type: Number
			},
			variant: 'success',
			message: '注册成功，进入中...'
    }
  },
	validations: {
		form: {
			vcode: {
				required
			},
			name: {
				required
			},
			password: {
				required,
				minLength: minLength(6),
				$params: {
					minLength: {
						type: "minLength",
						min: 6
					}
				}
			},
			password_confirm: {
				required,
				sameAsPassword: sameAs('password')
			}
		}
  },
	
	mounted(){
		this.sendCode()
	},
	
  methods: {
		//发送邮箱验证码的方法
		sendCode() {
			this.$http.post('/api/emailer',{params:{email: this.form.email}}).then((res) => {
				if(res.data.isSuccess){
					const TIME_COUNT = 60
					if (!this.timer) {
						this.count = TIME_COUNT
						this.isSendDisabled = true
						this.timer = setInterval(() => {
							if (this.count > 0 && this.count <= TIME_COUNT) {
								this.count--
								this.sendBtnWord = `${this.count}秒后可重新发送`
							} else {
								this.isSendDisabled = false
								this.sendBtnWord = '重新发送'
								clearInterval(this.timer)
								this.timer = null
							}
						},1000)
					}
				}else{
					alert('发送失败，请稍后再试')
				}
		  })
		},
		
		//提交表单的方法
		onSubmit(){
			let param = {
				vcode: this.form.vcode,
				name: this.form.name,
				email: this.form.email,
				password: this.form.password
			}
			this.$http.post('/api/users/register',{params: param}).then((res) => {
				if(res.data.isSuccess){
					window.localStorage.user = JSON.stringify(res.data.user)
					this.isSubShow = false
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						window.location.href="/"
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