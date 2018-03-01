"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var test = require("tape");
var util_1 = require("./util");
var parser_1 = require("../model/parser");
test('common', function (t) {
    util_1.getTests("test/common", function (err, matches) {
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var item = matches_1[_i];
            console.info(item.name);
            var actual = parser_1.parse(item.diagram);
            t.deepEqual(actual, item.data, item.name);
        }
        t.end();
    });
    // t.equal(applyData(testData, (c, data) => {
    //     return "foo";
    // }), "foo");
    // t.equal(applyData(testData, (c, data) => {
    //     return `foo_${data.name}`;
    // }), "foo_nameValue");
    // t.equal(applyData(testData, "prefix_",
    //     (c, data) => {
    //         return `foo_${data.name}`;
    //     },
    //     "_suffix"), "prefix_foo_nameValue_suffix");
});
//# sourceMappingURL=test.js.map