module.exports = {
    index: function *(next) {
        yield this.render('index.hbs', {
            user: 'frank'
        });
        yield next;
    },

    post: function *(next) {
        var name = this.request.body.name
        var phone = this.request.body.phone
        // 提交到数据库...
        // mysql ...

        yield this.render('post.hbs', {
            name: name,
            phone: phone
        });
        yield next;
    }

};