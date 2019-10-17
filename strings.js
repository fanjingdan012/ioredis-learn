const Strings = (redis) =>{
	redis.set('name', 'Emmanuel1')
	redis.set('name', 'Emmanuel', 'EX', 5)
	redis.get('name', (err, result) => {
	  console.log(result);
	});

	redis.get('address', (err, result) => {
	  console.log(result);
	});
}

export default Strings;
