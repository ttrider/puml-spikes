"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var async = require("async");
function getTests(testPath, filePattern, cb) {
    var pattern = path.resolve(testPath, filePattern);
    console.info(pattern);
    glob(pattern, function (err, matches) {
        if (err) {
            cb(err, []);
        }
        var ret = [];
        async.eachOf(matches, function (file, index, icb) {
            var dir = path.dirname(file);
            var nm = path.basename(file, ".wsd");
            var dn = path.resolve(dir, nm + ".json");
            var ri = {
                name: nm,
                diagram: "",
                data: {}
            };
            if (fs.existsSync(dn)) {
                async.parallel([
                    function (rfcb) {
                        fs.readFile(file, function (err, data) {
                            if (err) {
                                rfcb(err);
                            }
                            else {
                                rfcb(undefined, data.toString());
                            }
                        });
                    },
                    function (rfcb) {
                        fs.readFile(dn, function (err, data) {
                            if (err) {
                                rfcb(err);
                            }
                            else {
                                rfcb(undefined, JSON.parse(data.toString()));
                            }
                        });
                    }
                ], function (err, items) {
                    if (err) {
                        icb(err);
                    }
                    else if (!items || items.length < 2 || !items[0] || !items[1]) {
                        icb("can't read files");
                    }
                    else {
                        if (items[0]) {
                            ri.diagram = items[0];
                        }
                        if (items[1] !== undefined) {
                            ri.data = items[1];
                        }
                        ret.push(ri);
                        icb();
                    }
                });
            }
            else {
                icb();
            }
        }, function (errcb) {
            cb(err, ret);
        });
    });
}
exports.getTests = getTests;
function deepCompare(actual, expected) {
    compareProperty("root", actual, expected);
}
exports.deepCompare = deepCompare;
function compareProperty(context, actual, expected) {
    if (actual === undefined) {
        if (expected === undefined) {
            return true;
        }
        else {
            throw new Error("missing property " + context);
        }
    }
    if (expected === undefined) {
        throw new Error("extra property " + context);
    }
    if (actual === null) {
        if (expected === null) {
            return true;
        }
        else {
            throw new Error("null property " + context);
        }
    }
    if (expected === undefined) {
        throw new Error("null property " + context);
    }
    var typeofActual = typeof actual;
    if (typeofActual !== typeof expected) {
        throw new Error("property type mismatch " + context);
    }
    // base types
    if (typeofActual === "string" ||
        typeofActual === "number" ||
        typeofActual === "boolean") {
        if (actual === expected) {
            return true;
        }
        throw new Error("property value mismatch " + context + " (" + actual + " vs " + expected + ")");
    }
    // date
    if (actual instanceof Date) {
        if (expected instanceof Date) {
            if (actual.valueOf() === expected.valueOf()) {
                return true;
            }
            throw new Error("property value mismatch " + context + " (" + actual + " vs " + expected + ")");
        }
        else {
            throw new Error("property type mismatch " + context);
        }
    }
    if (expected instanceof Date) {
        throw new Error("property type mismatch " + context);
    }
    // array
    if (Array.isArray(actual)) {
        if (Array.isArray(expected)) {
            if (actual.length !== expected.length) {
                throw new Error("mismatch array length " + context);
            }
            for (var i = 0; i < actual.length; i++) {
                var contextItem = context + "[" + i + "]";
                compareProperty(contextItem, actual[i], expected[i]);
            }
            return true;
        }
        else {
            throw new Error("property type mismatch " + context);
        }
    }
    if (expected instanceof Date) {
        throw new Error("property type mismatch " + context);
    }
    for (var key in actual) {
        if (actual.hasOwnProperty(key)) {
            var actualItem = actual[key];
            if (expected.hasOwnProperty(key)) {
                var expectedItem = expected[key];
                var contextItem = context + "." + key;
                compareProperty(contextItem, actualItem, expectedItem);
            }
            else {
                throw new Error("extra property " + context + "." + key);
            }
        }
    }
    for (var key in expected) {
        if (expected.hasOwnProperty(key)) {
            if (!actual.hasOwnProperty(key)) {
                throw new Error("missing property " + context + "." + key);
            }
        }
    }
    return true;
}
//# sourceMappingURL=util.js.map