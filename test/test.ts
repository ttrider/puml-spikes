import * as test from 'tape';
import * as async from "async";
import { getTests, deepCompare } from './util';
import { parse } from "../model/parser";

const testSet = [
    //"test/common", 
    // "test/notes",
    "test/sequence"
];

//const filePattern =  "**/*.wsd";
const filePattern = "**/02.message.wsd";

async.eachOf(testSet,
    (item, index, icb) => {
        test(item, (t) => {

            getTests(item,  filePattern, (err, matches) => {

                for (const item of matches) {
                    console.info(item.name);
                    const actual = parse(item.diagram);

                    try {
                        deepCompare(actual, item.data);
                        t.pass(item.name);
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