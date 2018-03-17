import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";
import * as async from "async";


export function getTests(testPath: string, filePattern:string, cb: (err: Error | null, matches: Array<{ name: string, diagram: string, data: any }>) => void) {
    const pattern = path.resolve(testPath, filePattern);
    console.info(pattern);

    glob(pattern, (err, matches) => {
        if (err) {
            cb(err, []);
        }

        const ret: Array<{ name: string, diagram: string, data: any }> = [];

        async.eachOf(matches, (file, index, icb) => {

            const dir = path.dirname(file);
            const nm = path.basename(file, ".wsd");
            const dn = path.resolve(dir, nm + ".json");

            const ri = {
                name: nm,
                diagram: "",
                data: {}
            };

            if (fs.existsSync(dn)) {

                async.parallel([
                    (rfcb) => {
                        fs.readFile(file, (err, data) => {
                            if (err) {
                                rfcb(err);
                            }
                            else {
                                rfcb(undefined, data.toString());
                            }
                        });
                    },
                    (rfcb) => {
                        fs.readFile(dn, (err, data) => {
                            if (err) {
                                rfcb(err);
                            }
                            else {
                                rfcb(undefined, JSON.parse(data.toString()));
                            }
                        });
                    }
                ], (err, items) => {
                    if (err) {
                        icb(err);
                    }
                    else if (!items || items.length < 2 || !items[0] || !items[1]) {
                        icb("can't read files");
                    }
                    else {
                        if (items[0]) {
                            ri.diagram = items[0] as string;
                        }
                        if (items[1] !== undefined) {
                            ri.data = items[1] as {};
                        }
                        ret.push(ri);
                        icb();
                    }
                });
            } else {
                icb();
            }

        }, (errcb) => {
            cb(err, ret);
        });
    });
}

export function deepCompare(actual: any, expected: any) {
    compareProperty("root", actual, expected);
}

function compareProperty(context: string, actual: any, expected: any) {
    if (actual === undefined) {
        if (expected === undefined) {
            return true;
        }
        else {
            throw new Error(`missing property ${context}`);
        }
    }
    if (expected === undefined) {
        throw new Error(`extra property ${context}`);
    }

    if (actual === null) {
        if (expected === null) {
            return true;
        }
        else {
            throw new Error(`null property ${context}`);
        }
    }
    if (expected === undefined) {
        throw new Error(`null property ${context}`);
    }

    const typeofActual = typeof actual;

    if (typeofActual !== typeof expected) {
        throw new Error(`property type mismatch ${context}`);
    }

    // base types
    if (
        typeofActual === "string" ||
        typeofActual === "number" ||
        typeofActual === "boolean"
    ) {
        if (actual === expected) {
            return true;
        }
        throw new Error(`property value mismatch ${context} (${actual} vs ${expected})`);
    }

    // date
    if (actual instanceof Date) {
        if (expected instanceof Date) {
            if (actual.valueOf() === expected.valueOf()) {
                return true;
            }
            throw new Error(`property value mismatch ${context} (${actual} vs ${expected})`);
        }
        else {
            throw new Error(`property type mismatch ${context}`);
        }
    }
    if (expected instanceof Date) {
        throw new Error(`property type mismatch ${context}`);
    }

    // array
    if (Array.isArray(actual)) {
        if (Array.isArray(expected)) {

            if (actual.length !== expected.length) {
                throw new Error(`mismatch array length ${context}`);
            }

            for (let i = 0; i < actual.length; i++) {
                const contextItem = context + "[" + i + "]";
                compareProperty(contextItem, actual[i], expected[i]);
            }
            return true;
        }
        else {
            throw new Error(`property type mismatch ${context}`);
        }
    }
    if (expected instanceof Date) {
        throw new Error(`property type mismatch ${context}`);
    }

    for (const key in actual) {
        if (actual.hasOwnProperty(key)) {

            const actualItem = actual[key];

            if (expected.hasOwnProperty(key)) {
                const expectedItem = expected[key];
                const contextItem = context + "." + key;
                compareProperty(contextItem, actualItem, expectedItem);
            } else {
                throw new Error(`extra property ${context}.${key}`);
            }
        } 
    }

    for (const key in expected) {
        if (expected.hasOwnProperty(key)) {
            if (!actual.hasOwnProperty(key)) {
                throw new Error(`missing property ${context}.${key}`);
            }
        }
    }


    return true;
}