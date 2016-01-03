var fs = require('fs')
var p = require('path')

module.exports = {
    read: function *(next) {
        var files = fs.readdirSync(p.join(__dirname, '../../static/uploaded'))
        console.log(files)

        var data = files.map(function (file) {
            return {
                name: p.basename(file),
                path: '/uploaded/' + file,
            }
        })
        console.log(data)
        yield this.render('read.hbs', {files: data})
        yield next
    },
    create: function *(next) {
        yield this.render('create.hbs')
        yield next
    },
    doCreate: function *(next) {
        var file = this.request.body.files
        try {
            rename(file.file.path, file.file.name)
        } catch (expection) {
            console.log(expection)
            this.body = '上传出错'
            return yield next
        }

        this.body = '上传成功'
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

function rename(oldPath, newName) {
    return fs.renameSync(oldPath, p.join(p.dirname(oldPath), newName))
}