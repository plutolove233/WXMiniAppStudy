// pages/containers/containerDemo.ts
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		imgUrl: "",
		colors: ["red", "green", "yellow", "skyblue", "gold", "dark"],
		message: "Hello World"
	},
	getUserInfoService(){//lower 2.27.0
		
		wx.getUserProfile({
			desc: 'desc',
		}).then(res => {
			console.log(res);
		})
	},
	getLocalPic(){
		wx.chooseMedia({
			mediaType: ['image'],
			sourceType: ['camera', 'album']
		}).then(res => {
			console.log(res);
			const url = res.tempFiles[0].tempFilePath
			this.setData({imgUrl: url})
		})
	},
	bindKeyInput(e: any){
		this.setData({
			message: e.detail.value
		})
	},
	onLoad(options){
		this.setData({
			message: options.message
		})
	},
	jumpBack(){
		wx.navigateBack()
		const channel = this.getOpenerEventChannel()
		channel.emit("backJump", {message: "hello"})
	}
})