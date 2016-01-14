/**
 * Created on 1/3/16.
 */


exports.read = function () {
    db.serialize(function () {
        var a = db.run('SELECT * from song');
        console.log(a)
    });

    db.close();
}

exports.create = function () {
   
}
