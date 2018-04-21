"use strict";

exports.defaultCode = function (error) {
    return error.code
}

exports.defaultStack = function (error) {
    return error.stack
}
