import morer from '@/components/more/index.vue'

export default{
	props: {
		user: {
			type: Object
		}
	},
	data() {
		return {
			price: this.$route.query.price ? this.$route.query.price : '{"$gte": 0}',
			optionsOfPrice: [
				{
					'text': '所有价格',
					'value': '{"$gte": 0}'
				},
				{
					'text': '0-999',
					'value': '{"$gte": 0, "$lte": 999}'
				},
				{
					'text': '1000-1999',
					'value': '{"$gte": 1000, "$lte": 1999}'
				},
				{
					'text': '2000-2999',
					'value': '{"$gte": 2000, "$lte": 2999}'
				},
				{
					'text': '3000+',
					'value': '{"$gte": 3000}'
				}
			],
			orderby: this.$route.query.orderby ? this.$route.query.orderby : '',
			optionsOfOrder: [
				{
					'text': '默认排序',
					'value': ''
				},
				{
					'text': '价格由低到高',
					'value': 'price'
				},
				{
					'text': '价格由高到低',
					'value': '-price'
				}
			],
			page: this.$route.query.page ? this.$route.query.page : 1,
			pagesize: this.$route.query.pagesize ? this.$route.query.pagesize : 4,
			goods: [],
			more: {
				word: '加载更多',
				variant: 'primary',
				disabled: false
			}
		}
	}, 
	created() {
	},
	mounted() {
		this.getGood()
	},
	methods: {
		//加载商品列表
		getGood() {
			let queries = {}
			queries.price = JSON.parse(this.price)
			this.$http.get('/api/good',{params: {orderby: this.orderby, page: this.page, pagesize: this.pagesize, queries: queries}}).then((res) => {
				if(res.data.isSuccess){
					if(res.data.data.length == 0){
						this.more.word = '没有更多了'
						this.more.variant = ''
						this.more.disabled = true
					}else{
						this.goods = this.goods.concat(res.data.data)
					}
				}else{
					alert(res.data.message)
				}
			})
		},
		//获取更多商品
		loadMore() {
			this.page++
			this.getGood()
		},
		//加入购物车
		addShopcar(gid) {
			this.$http.post('/api/shopcar',{params: {gid: gid}}).then((res) => {
				alert(res.data.message)
			})
		},
		//询问用户是否进入登录页面的方法
		goLogin() {
			if(confirm('您还未登录，是否现在登录?')){
				window.location.href = '/login'
			}
		}
	},
	components: {
		morer
	}
}