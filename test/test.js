"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = require("tape");
var async = require("async");
var util_1 = require("./util");
var parser_1 = require("../model/parser");
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
                var actual = parser_1.parse(item_1.diagram);
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
// test('common', (t) => {
//     getTests("test/common", (err, matches) => {
//         for (const item of matches) {
//             console.info(item.name);
//             const actual = parse(item.diagram);
//             t.deepEqual(actual, item.data, item.name);
//         }
//         t.end();
//     });
// });
// test('notes', (t) => {
//     getTests("test/notes", (err, matches) => {
//         for (const item of matches) {
//             console.info(item.name);
//             const actual = parse(item.diagram);
//             t.deepEqual(actual, item.data, item.name);
//         }
//         t.end();
//     });
// });
//# sourceMappingURL=test.js.map