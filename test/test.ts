import * as test from 'tape';
import * as async from "async";
import { getTests } from './util';
import { parse } from "../model/parser";

const testSet = [
//    "test/common",
//    "test/notes",
    "test/sequence"
];

async.eachOf(testSet,
    (item, index, icb) => {
        test(item, (t) => {

            getTests(item, (err, matches) => {
        
                for (const item of matches) {
                    console.info(item.name);
                    const actual = parse(item.diagram);
        
                    t.deepEqual(actual, item.data, JSON.stringify(actual));
                }
                t.end();
                icb();
            });
        });
    }, (errcb) => {

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