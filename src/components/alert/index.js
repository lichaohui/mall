export default {
	props: {
		variant: {
			type: String
		},
		message: {
			type: String,
			default: ''
		}
	},
	data() {
		return {
			dismissSecs: 2,
      dismissCountDown: 0,
      showDismissibleAlert: false
		}
	}, 
	methods: {
		countDownChanged (dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert () {
      this.dismissCountDown = this.dismissSecs
    }
	}
}