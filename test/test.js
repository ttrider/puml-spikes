"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = require("tape");
var async = require("async");
var util_1 = require("./util");
var rgparser_1 = require("../model/rgparser");
var testSet = [
    //"test/common", 
    // "test/notes",
    "test/sequence"
];
//const filePattern =  "**/*.wsd";
var filePattern = "**/02.message.wsd";
async.eachOf(testSet, function (item, index, icb) {
    test(item, function (t) {
        util_1.getTests(item, filePattern, function (err, matches) {
            for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
                var item_1 = matches_1[_i];
                console.info(item_1.name);
                var actual = rgparser_1.parse(item_1.diagram);
                //const actual = parse(item.diagram);
                try {
                    util_1.deepCompare(actual, item_1.data);
                    t.pass(item_1.name);
                    //t.deepEqual(actual, item.data, item.name);
                }
                catch (e) {
                    console.log(JSON.stringify(actual));
                    t.error(e);
                }
            }
            t.end();
            icb();
        });
    });
}, function (errcb) {
});
//# sourceMappingURL=test.js.map