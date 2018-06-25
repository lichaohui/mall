import { required, phone } from 'vuelidate/lib/validators'
import uaside from '@/components/uaside/index.vue'

export default {
	props: {	
	},
	data() {
		return {
			addresses: [],
			form: {
				id: '',
				receiver: '',
				phone: '',
				area: [],
				address: '',
				isDefault: false
			}
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
	components: {
		uaside
	},
	mounted() {
		this.index()
	},
	methods: {
		//地址列表
		index() {
			this.$http.get('/api/address').then((res) => {
				if(res.data.isSuccess){
					this.addresses = res.data.data
				}else{
					alert(res.data.message)
				}
			})
		},
		//获取特定记录
		query(id) {
			this.$http.get(`/api/address/${id}`).then((res) => {
				if(res.data.isSuccess){
					this.form.id = res.data.data._id
					this.form.receiver = res.data.data.receiver
					this.form.phone = res.data.data.phone
					this.form.area = res.data.data.area.split('/')
					this.form.address = res.data.data.address
					this.form.isDefault = res.data.data.isDefault
				}else{
					alert(res.data.message)
				}
			})
		},
		//更新某条记录
		update(id) {
			let param = {
				receiver: this.form.receiver,
				phone: this.form.phone,
				area: this.form.area.join('/'),
				address: this.form.address,
				isDefault: this.form.isDefault
			}
			this.$http.put(`/api/address/${id}`,{params: param}).then((res) => {
				if(res.data.isSuccess){
					alert(res.data.message)
					setTimeout(() => {
						window.location.reload()
					},1000)
				}else{
					alert(res.data.message)
				}
			})
		},
		//删除某条记录
		del(id) {
			if(confirm('确定要删除该收货地址吗？')){
				this.$http.delete(`/api/address/${id}`).then((res) => {
					if(res.data.isSuccess){
						alert(res.data.message)
						setTimeout(() => {
							window.location.reload()
						},1000)
					}else{
						alert(res.data.message)
					}
				})
			}
		}
	}
}