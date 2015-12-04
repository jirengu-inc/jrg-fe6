var koa = require('koa')
var path = require('path')
var views = require('koa-views')
var serve = require('koa-static')
var bodyParser = require('koa-body-parser')


var app = module.exports = koa()

// initialize render helper
app.use(views('app/views', {
    map: {
        hbs: 'handlebars'
    }
}))

app.use(bodyParser());

require('./app/routes')(app);

if (!module.parent) {
    app.listen(3000)
    console.log('http://127.0.0.1:3000')
}
