import { required, phone } from 'vuelidate/lib/validators'
import uaside from '@/components/uaside/index.vue'
import alerter from '@/components/alert/index.vue'

export default {
	props: {	
	},
	data() {
		return {
			form: {
				receiver: '',
				phone: '',
				area: [
					'北京市',
					'市辖区',
					'东城区'
				],
				address: '',
				isDefault: false
      },
			variant: 'success',
			message: '地址保存成功，跳转中...'
		}
	},
	validations: {
		form: {
			receiver: {
				required
			},
			phone: {
				required,
				phone
			},
			area: {
				required
			},
			address: {
				required
			}
		}
  },
	methods: {
		onSubmit() {
			let param = {
				receiver: this.form.receiver,
				phone: this.form.phone,
				area: this.form.area.join("/"),
				address: this.form.address,
				isDefault: this.form.isDefault
 			}
			
			this.$http.post('/api/address',{params: param}).then((res) => {
				if(res.data.isSuccess){
					this.$refs.alerter.showAlert()
					setTimeout(() => {
						window.location.href="/user/address"
					},2000)
				}else{
					alert(res.data.message)
				}
			})
		}
	},
	components: {
		uaside,
		alerter
	}
}