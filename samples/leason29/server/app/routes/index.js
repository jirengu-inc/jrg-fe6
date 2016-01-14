module.exports = function (app) {
    var Router = require('koa-router')
    var song = require('../controllers/song')

    var router = new Router();

    router
        .get('/read', song.read)

        .get('/create', song.create)
        .post('/create', song.doCreate)

        .get('/update', song.update)
        .post('/update', song.doUpdate)

        .post('/remove', song.remove)


    // CRUD



    app.use(router.middleware());
};