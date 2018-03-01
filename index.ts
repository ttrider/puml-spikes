import test from "./model/parser";


const test00 = `@startuml
`;
const test01 = `@startuml    
`;
const test02 = `@startuml some name
`;



test(test00);
test(test01);
test(test02);
