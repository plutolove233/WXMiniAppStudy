import { demoRequest, houseReq, loginReq } from "../../services/request/index";
import { WXLogin } from "../../services/request/wxLogin";

// pages/apiDemo/demo.ts
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		currentPage: 1,
		houseData: [],
		message: "jump to other page"
	},

	/**
	 * 生命周期函数--监听页面加载
	 * 放置网络请求接口
	 */
	onLoad() {
		// 网络请求的基本使用
		// this.getCityData();
		// this.getHouseData();
	},
	async getCityData() { //推荐写法，通过异步函数调用封装的promise语法的函数
		const cityData = await demoRequest({
			url: "http://123.207.32.32:1888/api/city/all"
		});
		console.log(cityData);
	},

	async getHouseData() {
		let req = houseReq
		const respData = await req.get({
			url:"home/houselist",
			data:{
				page: this.data.currentPage,
			}
		});
		const finalData = [...this.data.houseData, ...respData.data]
		this.setData({
			houseData: finalData
		})
	},

	// 弹窗
	onToast(){
		wx.showToast({
			title: "购买成功",
			icon: "error" // 提示的图标
		})
	},
	onModal(){
		wx.showModal({
			title: "if you want to choose it, please confirm you have enough money",
			content: "this is content",
			success: (res) => {
				console.log(res);
				if(res.cancel){
					console.log("you have canceled");
				}else {
					console.log("you have confirmed");
				}
			}
		})
	},
	onActionSheet(){
		wx.showActionSheet({
			itemList: ["dress", "hat", "shoes"],
			success: (res) => {
				console.log(res);
				
			},
			fail: (err) => {
				console.log(err);
				
			}
		})
	},

	// 获取用户设备信息
	onGetSysInfo(){
		// wx.getSystemInfo({
		// 	success: (res) => {
		// 		console.log(res)
		// 	}
		// });
		wx.getLocation({
			success: (res) => {
				console.log(res);
				
			}
		})
	},
	onPageJump(){
		wx.navigateTo({
			url: `../containers/containerDemo?message=${this.data.message}`, // 注意是`不是'
			events: {
				backJump:(data: any) => {
					this.setData({
						message: data.message
					})
				}
			}
		})
	},

	// login
	async onLogin(){
		const token = wx.getStorageSync("token") || "";
		console.log(token);
		const res = await loginReq.post({
			url: "/auth",
			header: {
				token: token
			}
		})
		console.log(res);
		if (res.errorCode === 1001){
			this.LoginHandler();
		} else {
			console.log("do something else");
		}
	},

	async LoginHandler(){
		const code = await WXLogin();
		const res = await loginReq.post({
			url: "/login",
			data: {
				code: code
			}
		})
		console.log(res);
		wx.setStorageSync("token", res.token);
	},

	// onReachBottom(){
	// 	this.data.currentPage += 1;
	// 	this.getHouseData();
	// }
})