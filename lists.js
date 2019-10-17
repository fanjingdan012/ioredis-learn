const Lists = (redis) =>{
	redis.rpush('planets','venus','earch','mars','jupiter');
	redis.rpush('planets','saturn');
	redis.lpush('planets','mercury');
	redis.rpop('planets');
	redis.lrange('planets',0,-1,(err, result)=>{
		console.log(result);
	});

}

export default Lists;
