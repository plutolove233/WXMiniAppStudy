// pages/wxmlDemo/demo.ts
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		message: "Hello World",
		firstName: "liu",
		lastName: "haoyu",
		date: new Date().toLocaleDateString(),
		score: 50,
		isHidden: false,
		mutiData:[
			{
				name: "控计学院",
				class: ["software1", "software2"]
			},
			{
				name: "电气学院",
				class: ["electric1", "electric2"]
			}
		],
		price: 300000,
		books: [
			{
				name: "软件工程",
				price: 100,
			},
			{
				name: "C++ Primer",
				price: 127,
			},
			{
				name: "The Way to Go",
				price: 78,
			}
		]
	},

	shiftHiddenStatus(){
		this.setData({
			isHidden: !this.data.isHidden
		})
	},


	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad() {

	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady() {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow() {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide() {

	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload() {

	},

	/**
	 * 页面相关事件处理函数--监听用户下拉动作
	 */
	onPullDownRefresh() {

	},

	/**
	 * 页面上拉触底事件的处理函数
	 */
	onReachBottom() {

	},

	/**
	 * 用户点击右上角分享
	 */
	onShareAppMessage() {

	}
})