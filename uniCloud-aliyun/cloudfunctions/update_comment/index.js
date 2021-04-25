'use strict';
const db = uniCloud.database()
const $ = db.command.aggregate
const dbCmd = db.command
exports.main = async (event, context) => {

	const {
		user_id,
		article_id,
		content
	} = event

	let user = db.collection('user').doc(user_id).get()
	//获取用户对象
	user = user.data[0]
	let commentObj = {
		comment_id: '', //评论id
		comment_content: '', //评论内容
		create_time: '', //创建时间
		author: {
			author_id: user._id,
			author_name: user.author_name,
			author_avatar: user.avatar,
			professional: user.professional
		},
		replays:[] //回复
	}

	//返回数据给客户端
	return event
};
