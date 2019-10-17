# How to run
```
npm install
npm run start
```

# redis commands
- String
  - set firstName "Manny MM"
  - get firstName
  - decr num1
  - incr num1
  - incrby num1 3
  - getset firstName Stephanie 会得到Many MM，因为是先读后写
  - mget
- Hash
  - hget,hset,hgetall
  - hmset user:345 firstName Tracey lastName Larventz street awesome city awesome age 33
  - hgetall user:345 -> will get 8 strings
  - hget user:345 city -> will get "awesome"
  - hmget user:345 firstName lastName -> will get "Tracey" "Larventz"
  - hexists user:345 zip -> will get 0 meaning not exist, 1 for exist
  - hincrby user:345 age 3-> will get 36
  - 这个Hash的成员比较少时Redis为了节省内存会采用类似一维数组的方式来紧凑存储，而不会采用真正的HashMap结构，对应的value redisObject的encoding为zipmap,当成员数量增大时会自动转成真正的HashMap,此时encoding为ht。
- List 左右都开口
  - lpush,rpush,lpop,rpop,lrange
  - rpush groceries apples cherries pears "red meat" ->get 4
  - lrange groceries 0 -1 -> will get 4 strings
  - lpush groceries grapes -> will get 5, and grapes will be on the first position before apples
  - lpop groceries -> will get "grapes" and remove grapes
  - same rpop
  - ltrim groceries 0 4 will remove other strings than [0-4]
  - Redis list的实现为一个双向链表，即可以支持反向查找和遍历，更方便操作，不过带来了部分额外的内存开销，Redis内部的很多实现，包括发送缓冲队列等也都是用的这个数据结构。
- Set
  - sadd,spop,smembers,sunion
  - sadd tags "react native" graphal javascript
  - smembers tags
  - sadd tags framer sketch -> will get 2
  - sismember tags typescript -> will get 0 meaning is not member, 1 for is member
  - sadd tags: react "react router" redux "react transition group"
  - smembers tags:react
  - sunionstore tags:"react native" tags:react
  - smembers tags:"react native"
  - spop tags:"react native"
  - scard tags -> will get 6
- Sorted Set
  - zadd,zrange,zrem,zcard
  - zadd rocket 1969 "apollo 11" 1998 "Deep space 1" 2008 "Falcon 1" -> will get 3
  - zrange rocket 0 -1
  - zrange rocket 0 -1 withscores
  - zrevrange rocket 0 -1 withscores
  - zrank rocket "Deep space 1"