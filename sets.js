const Sets = (redis) =>{
	redis.sadd('groceries:dairies','milk','cheese','yogourt');
	redis.sadd('groceries:seafood','salmon','calamari','lobster');
	redis.sadd('groceries:fruits','apples','grapes','pears','orange');

	redis.smembers('groceries:fruits',(err, result)=>{
		console.log(result);
	});
	redis.spop('groceries:fruits');
	redis.smembers('groceries:fruits',(err, result)=>{
		console.log(result);
	});
}

export default Sets;
