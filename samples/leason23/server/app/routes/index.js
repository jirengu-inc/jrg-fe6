module.exports = function(app) {
	var Router 		= require('koa-router'), 
		indexCtrl 	= require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)
        .get('/2', indexCtrl.index2)
        .post('/', indexCtrl.post)
        .post('/post2', indexCtrl.post2)

	app.use(router.middleware());
};