'use strict';
const db = uniCloud.database();
const dbCmd = db.command
exports.main = async (event, context) => {
	const {
		user_id,
		article_id
	} = event
	
	const userinfo = await db.collection('user')
	.doc(user_id)
	.get()
	
	db.collection('user').doc(user_id).update({
		article_likes_ids : dbCmd.addToSet()
	})
	//返回数据给客户端
	return event
};
