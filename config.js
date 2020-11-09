module.exports = {
    port: process.env.PORT || 1207,
    mongodb: {
        username: process.env.MONGO_USERNAME || 'distributedSystem',
        password: process.env.MONGO_PASSWORD || '5Pt67VQlXBPSPMQf',
        host: process.env.MONGO_HOST || '127.0.0.1',
        port: process.env.MONGO_PORT || '27017',
        database: process.env.MONGO_DATABASE || 'cluster0',
    },
    redis: {
        host: process.env.REDIS_HOST || '127.0.0.1',
        port: process.env.REDIS_PORT || '6379',
        password: process.env.REDIS_PASSWORD || null,
    }
};
