export function demoRequest(options: any){
	return new Promise((resolve, reject) => {
		wx.request({
			...options,
			success: (res) => {
				resolve(res.data)
			},
			fail: reject
		})
	})
}

class DemoRequest{
	baseURL: String
	constructor (baseURL:String){
		this.baseURL = baseURL
	}
	request(options: any){
		const {url} = options;
		return new Promise((resolve, reject) => {
			wx.request({
				...options,
				url: this.baseURL + url,
				success: (res) => {
					resolve(res.data)
				},
				fail: reject
			})
		})
	}

	get(options: any){
		return this.request({...options, method: "get"})
	}

	post(options: any){
		return this.request({...options, method:"post"})
	}

	put(options: any){
		return this.request({...options, method:"put"})
	}

	delete(options: any){
		return this.request({...options, method:"delete"})
	}
}

export const houseReq = new DemoRequest("http://123.207.32.32:1888/api");
export const loginReq = new DemoRequest("http://123.207.32.32:3000");