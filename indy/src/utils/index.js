'use strict';

exports.sleep = function (ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms)
    })
};

exports.pathToIndyClientHome = function () {
    return require('os').homedir() + "/.indy_client"
}