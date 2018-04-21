"use strict";

exports.stackTraceLimit = Error.stackTraceLimit

exports.setStackTraceLimit = function (limit) {
    return function () {
        Error.stackTraceLimit = limit
    }
}
