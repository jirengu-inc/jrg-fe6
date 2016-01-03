var koa = require('koa')
var path = require('path')
var views = require('koa-views')
var serve = require('koa-static')
var bodyParser = require('koa-body-parser')


var app = module.exports = koa()

// initialize render helper
app.use(views('app/views', {
    map: {hbs: 'handlebars'}
}))

app.use(bodyParser());


app.use(function * (next) {
    console.log('有人访问了: ' + this.request.host + this.request.url) //打印出被访问的路径
    yield next
})

app.use(require('koa-static')('./static'));  // 开启静态文件的访问

require('./app/routes')(app);

if (!module.parent) {
    app.listen(3000)
    console.log('http://127.0.0.1:3000')
}
