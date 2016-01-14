module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
        .get('/index2', indexCtrl.index2)
        .get('/data.js', indexCtrl.data)
        .post('/', indexCtrl.post)
        .post('/post2', indexCtrl.post2)

	app.use(router.middleware());
};