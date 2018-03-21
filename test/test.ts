import * as test from 'tape';
import * as async from "async";
import { getTests, deepCompare } from './util';
import { parse } from "../model/parser";
import { parse as rg } from "../model/rgparser";

const testSet = [
    "test/common", 
    // "test/notes",
    //"test/sequence"
];

const filePattern =  "**/*.wsd";
//const filePattern = "**/02.message.wsd";

async.eachOf(testSet,
    (item, index, icb) => {
        test(item, (t) => {

            getTests(item,  filePattern, (err, matches) => {

                for (const item of matches) {
                    console.info(item.name);
                    const actual = rg(item.diagram);
                    //const actual = parse(item.diagram);

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
