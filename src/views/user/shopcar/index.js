import uaside from '@/components/uaside/index.vue'
import morer from '@/components/more/index.vue'

export default {
	props: {
		
	},
	data() {
		return {
			isNext: false,
			shopcars: [],
			addresses: [],
			selectedAddress: '',
			more: {
				word: '加载更多',
				variant: 'primary',
				disabled: false
			},
			page: this.$route.query.page ? this.$route.query.page : 1,
			pagesize: this.$route.query.pagesize ? this.$route.query.pagesize : 4
		}
	},
	components: {
		uaside,
		morer
	},
	mounted() {
		this.index()
		this.indexAddress()
	},
	computed: {
		getSelected() {
			return this.shopcars.filter((shopcar) => {
				return shopcar.isSelected == true
			})
		},
		isSelectedAll: {
			get() {
				return this.getSelected.length == this.shopcars.length
			},
			set(newValue) {
			}
		},
		totalPrice() {
			let total = 0
			for(let shopcar of this.getSelected){
				total += shopcar.gid.price*shopcar.count
			}
			return total
		}
	},
	methods: {
		//获取购物车列表
		index() {
			this.$http.get('/api/shopcar',{params: {page: this.page, pagesize: this.pagesize }}).then((res) => {
				if(res.data.isSuccess){
					if(res.data.data.length == 0){
						this.more.word = '没有更多了'
						this.more.variant = ''
						this.more.disabled = true
					}else{
						this.shopcars = this.shopcars.concat(res.data.data)
					}
				}else{
					alert(res.data.message)
				}
			})
		},
		
		//获取地址列表
		indexAddress() {
			this.$http.get('/api/address').then((res) => {
				if(res.data.isSuccess){
					this.addresses = res.data.data
					for(let address of this.addresses){
						if(address.isDefault){
							this.selectedAddress = address._id
						}
					}
					console.log(this.selectedAddress)
				}else{
					alert(res.data.message)
				}
			})
		},
		
		//加载更多
		loadMore() {
			this.page++
			this.index()
		},
		
		//全选/全不选购物车
		switchAll(){
			if(this.isSelectedAll){
				for(let shopcar of this.shopcars){
					shopcar.isSelected = false
				}
			}else{
				for(let shopcar of this.shopcars){
					shopcar.isSelected = true
				}
			}			
		},
		
		//编辑购物车
		edit(shopcar) {
			this.$http.post(`/api/shopcar/${shopcar._id}`,{params: {count: shopcar.count, isSelected: shopcar.isSelected}}).then((res) => {
				if(res.data.isSuccess){
				
				}else{
					alert(res.data.message)
				}
			})
		},
		
		//删除购物车
		del(id) {
			if(confirm('确认要删除该条购物车吗？')){
			  this.$http.delete(`/api/shopcar/${id}`).then((res) => {
					alert(res.data.message)
					setTimeout(() => {
						window.location.reload()
					},1000)
				})
			}
		},
		
		//下订单
		createOrder() {
			this.$http.post('/api/order',{params: {aid: this.selectedAddress}}).then((res) => {
				if(res.data.isSuccess){
          alert(res.data.message)
					setTimeout(() => {
						window.location.href = '/user/order'
					},1000)
				}else{
					alert(res.data.message)
				}
			})
		}	
	}
}