export function WXLogin(){
	return new Promise((resolve, reject) => {
		wx.login({
			success: (res)=> {
				resolve(res.code)
			},
			fail: reject
		})
	})
}