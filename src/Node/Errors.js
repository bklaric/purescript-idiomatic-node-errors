"use strict";

exports.stackTraceLimit = function () {
    return Error.stackTraceLimit
}

exports.setStackTraceLimit = function (limit) {
    return function () {
        Error.stackTraceLimit = limit
    }
}
