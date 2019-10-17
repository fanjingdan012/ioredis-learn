const Hashes = (redis) =>{
	redis.hmset('user:450','firstName','Jeremy','city','San Francisco');
	redis.hmset('user:450','age',33);
	redis.hincrby('user:450','age',3);
	redis.hgetall('user:450',(err, result)=>{
		console.log(result);
	});
	redis.mget('street','city',(err, result)=>{
		console.log(result);
	})
}

export default Hashes;
