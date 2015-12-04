module.exports = {
    index: function *(next) {
        yield this.render('index.hbs', {
            user: 'frank'
        });
        yield next;
    },

    post: function *(next) {
        var user = this.request.body.user
        yield this.render('post.hbs', {
            user: user
        });
        yield next;
    }

};