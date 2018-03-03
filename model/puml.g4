grammar puml;

document: diagram+;

diagram: startUml endUml CR*;

startUml: STARTUML SPACE? digramName? CR;
endUml: ENDUML SPACE? CR;

digramName: (TEXT SPACE?)+;
//textLine: (TEXT SPACE?)+;

SEMICOLON: ';';

STARTUML: '@startuml';
ENDUML: '@enduml';

SPACE: (' ' | '\t')+;

//WS : (' '|'\t'|'\n'|'\r'|'\r\n')+ -> skip ;

TEXT: (LETTERS | DIGITS | SYMBOL | WS)+;

WS: [ \t];

CR: ('\r'? '\n') | EOF;

fragment LETTERS: [a-zA-Z];

fragment DIGITS: [0-9];

fragment SYMBOL:
	| '~'
	| '`'
	| '!'
	| '@'
	| '#'
	| '$'
	| '%'
	| '^'
	| '&'
	| '*'
	| '('
	| ')'
	| '_'
	| '+'
	| '='
	| '-'
	| '{'
	| '}'
	| '|'
	| '['
	| ']'
	| '\''
	| ':'
	| ';'
	| '"'
	| '\\'
	| '<'
	| ','
	| '>'
	| '.'
	| '?'
	| '/';