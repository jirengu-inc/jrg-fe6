define(function (require) {

    // var messages = require('./message');
    var messages = require('app/message');

    var print = require('app/print');

    print(messages.getHello());
});