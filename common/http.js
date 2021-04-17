export default function $http(options) {
	const {
		url,
		data
	} = options
	const dataObj = {
		user_id: "60726b2e1a30730001d7765e",
		...data
	}
	return new Promise((resolve, reject) => {
		uniCloud.callFunction({
			name: url,
			data: dataObj
		}).then((res) => {
			if (res.result.code === 200) {
				//.then
				resolve(res.result)
			} else {
				//.catch
				reject(res.result)
			}
		}).catch((err) => {
			reject(err)
		})
	})
}
