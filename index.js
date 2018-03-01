"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./model/parser");
var test00 = "@startuml\n";
var test01 = "@startuml    \n";
var test02 = "@startuml some name\n";
parser_1.default(test00);
parser_1.default(test01);
parser_1.default(test02);
//# sourceMappingURL=index.js.map