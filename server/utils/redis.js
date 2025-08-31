const redis = require('redis');

const client = redis.createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: 'redis-11276.c301.ap-south-1-1.ec2.redns.redis-cloud.com',
    port: 11276,
    tls: true
  }
});

client.on('connect', () => {
  console.log('✅ Redis client connected');
});

client.on('error', (err) => {
  console.error('❌ Redis connection error:', err);
});

(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.error('Redis failed to connect:', err);
  }
})();

module.exports = client;
