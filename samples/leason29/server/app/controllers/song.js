module.exports = {
    read: function *(next) {
        yield this.render('read.hbs')
        yield next
    },
    create: function *(next) {
        this.body = {errorCode: 0}
        yield next
    },
    update: function *(next) {
        this.body = {errorCode: 0}
        yield next
    },
    remove: function *(next) {
        this.body = {errorCode: 0}
        yield next
    }, // 这个逗号
}