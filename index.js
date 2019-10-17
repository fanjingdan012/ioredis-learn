import Redis from 'ioredis';
import Strings from './strings'
import Hashes from './hashes'
import Lists from './lists'
import Sets from './sets'
import SortedSets from './sortedSets'
const redis = new Redis({ password: 'somepwd' });

Strings (redis);
Hashes (redis);
Lists(redis);
Sets(redis);
SortedSets(redis);
