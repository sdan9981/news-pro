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

//获取用户信息
export const get_user = (data)=>{
	return $http({
		url:'get_user',
		data
	})
}

//提交评论
export const update_comment = (data)=>{
	return $http({
		url:'update_comment',
		data
	})
}

//获取评论列表
export const get_comments = (data)=>{
	return $http({
		url:'get_comments',
		data
	})
}

//关注作者
export const update_author = (data)=>{
	return $http({
		url:'update_author',
		data
	})
}

//点赞
export const update_thumbsup = (data)=>{
	return $http({
		url:'update_thumbsup',
		data
	})
}