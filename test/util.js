"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var glob = require("glob");
var async = require("async");
function getTests(testPath, cb) {
    var pattern = path.resolve(testPath) + "/**/*.wsd";
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
//# sourceMappingURL=util.js.map