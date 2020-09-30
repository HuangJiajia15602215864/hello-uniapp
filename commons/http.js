// 封装uni.request() --全局处理所有的请求
const http = (options) => {
	return new Promise((resolve,reject)=>{
		uni.showLoading({
			title:'加载中···',
			mask::true,
		})
		uni.request({
			method:options.method,
			url:options.url,
			data:options.data,
			header:{
				'x-token':''
			},
			success:(res)=>{
				resolve(res.data)
			},
			fail: () => {
				reject(err.data)
				let code = err.data.code
				switch(code){
					case 401:
					break;
					case 404:
					break;
				}
			},
			complete: () => {
				uni.hideLoading()
			}
		});
	})
}
export default http