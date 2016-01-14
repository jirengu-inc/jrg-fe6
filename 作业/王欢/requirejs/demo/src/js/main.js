// console.log('this is main.js');
require.config({
	baseUrl:'./src/js',
	paths:{
		'jquery':'lib/jquery-1.11.3.min'
	}
});
require(['app/index']);