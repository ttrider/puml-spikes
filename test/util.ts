import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";
import * as async from "async";


export function getTests(testPath: string, cb: (err: Error | null, matches: Array<{ name: string, diagram: string, data: any }>) => void) {
    const pattern = path.resolve(testPath) + "/**/*.wsd";
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
            } else{
                icb();
            }

        }, (errcb) => {
            cb(err, ret);
        });
    });
}