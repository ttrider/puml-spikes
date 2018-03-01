import * as test from 'tape';
import { getTests } from './util';
import { parse } from "../model/parser";


test('common', (t) => {

    getTests("test/common", (err, matches) => {

        for (const item of matches) {
            console.info(item.name);
            const actual = parse(item.diagram);

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