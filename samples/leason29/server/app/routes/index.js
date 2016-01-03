module.exports = function (app) {
    var Router = require('koa-router')
    var song = require('../controllers/song')

    var router = new Router();

    router
        .get('/read', song.read)
        .post('/create', song.create)
        .post('/update', song.update)
        //.post('/delete', song.delete)
        .post('/remove', song.remove) // 为什么不用 delete ?


    app.use(router.middleware());
};