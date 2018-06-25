export default{
	props: {
		more: {
			type: Object
		}
	},
	data() {
		return {	
			
		}
	},
	methods: {
		loadMore() {
			this.$emit('load-more')
		}
	}
}