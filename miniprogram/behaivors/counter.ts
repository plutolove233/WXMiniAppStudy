export const counterBehavior = Behavior({
	data:{
		counter: 0,
	},
	methods:{
		increment(){
			this.setData({
				counter: this.data.counter+1
			})
		},
		decrement(){
			this.setData({
				counter: this.data.counter-1
			})
		}
	}
	
})