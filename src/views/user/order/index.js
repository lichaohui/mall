import uaside from '@/components/uaside/index.vue'
import morer from '@/components/more/index.vue'

export default {
	props: {	
	},
	data() {
		return {
			orders: [],
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
	},
	methods: {
		//订单列表
		index() {
			this.$http.get('/api/order',{params: {page: this.page, pagesize: this.pagesize }}).then((res) => {
				if(res.data.isSuccess){
					if(res.data.data.length == 0){
						this.more.word = '没有更多了'
						this.more.variant = ''
						this.more.disabled = true
					}else{
						for(let order of res.data.data){
							order.total = 0
							for(let good of order.goods){
								order.total += good.price * good.count
							}
						}
						this.orders = this.orders.concat(res.data.data)
					}
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
		
		//删除某条记录
		del(id) {
			if(confirm('确定要删除该订单吗？')){
				this.$http.delete(`/api/order/${id}`).then((res) => {
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