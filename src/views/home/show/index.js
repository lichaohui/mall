import morer from '@/components/more/index.vue'

export default{
	props: {
		user: {
			type: Object
		}
	},
	data() {
		return {
		}
	}, 
	created() {
	},
	mounted() {
		
	},
	methods: {
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