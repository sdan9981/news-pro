import $http from '@/common/http.js'

export const get_label = (data)=>{
	return $http({
		url:'get_label',
		data
	})
}

export const get_list = (data)=>{
	return $http({
		url:'get_list',
		data
	})
}

export const update_like = (data)=>{
	return $http({
		url:'update_like',
		data
	})
}

//搜索
export const get_search = (data)=>{
	return $http({
		url:'get_search',
		data
	})
}
// 编辑标签
export const update_label = (data)=>{
	return $http({
		url:'update_label',
		data
	})
}

//获取文章详情
export const get_detial = (data)=>{
	return $http({
		url:'get_detial',
		data
	})
}