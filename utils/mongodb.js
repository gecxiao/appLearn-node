const mongoose = require('mongoose');
const config = require('../config');
const logger = require('./logger');

//mongoose.connect(`mongodb://${(config.mongodb.username && config.mongodb.password) ? `${config.mongodb.username}:${config.mongodb.password}@` : ''}${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`);
mongoose.connect('mongodb%2Bsrv%3A%2F%2FdistributedSystem%3A%3CPeQfy6D81XGC3v3o%3E%40cluster0.pvtfi.mongodb.net%2F%3Cdanmaku%3E%3FretryWrites%3Dtrue%26w%3Dmajority%2FCluster0', {useNewUrlParser: ture}).catch(error => handleError(error));
//mongoose.connect('mongodb%2Bsrv%3A%2F%2FdistributedSystem%3A%3CPeQfy6D81XGC3v3o%3E%40cluster0.pvtfi.mongodb.net%2F%3Cdanmaku%3E%3FretryWrites%3Dtrue%26w%3Dmajority%2FCluster0');

const db = mongoose.connection;
db.on('error', (e) => {
    logger.error('Mongodb error: ', e);
});
db.once('open', () => {
    logger.info('Mongodb connected');
});

const danmakuSchema = new mongoose.Schema({
    player: {
        type: String,
        index: true,
    },
    author: String,
    time: Number,
    text: String,
    color: Number,
    type: Number,
    ip: String,
    referer: String,
    date: Number,
});
const danmaku = mongoose.model('dan', danmakuSchema);

module.exports = danmaku;
