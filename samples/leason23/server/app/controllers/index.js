module.exports = {
    index: function *(next) {
        yield this.render('index.hbs');
        yield next;
    },
    index2: function *(next) {
        yield this.render('index2.hbs');
        yield next;
    },

    post: function *(next) {
        var name = this.request.body.name
        var phone = this.request.body.phone
        // 提交到数据库...
        // mysql ...

        //yield this.render('post.hbs', {
        //    name: name,
        //    phone: phone
        //});

        this.body = {
            errorCode: 0,
            data:{
                name: name,
                phone: phone
            }
        }
        yield next;
    },
    post2: function *(next) {
        var name = this.request.body.name
        var phone = this.request.body.phone
        // 提交到数据库...
        // mysql ...

        yield this.render('post2.hbs', {
            name2: name, //方应杭
            phone2: phone
        });
        yield next;
    }

};