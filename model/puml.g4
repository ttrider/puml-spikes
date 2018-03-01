grammar puml;

document: diagram+;

diagram: startUml endUml;

startUml: STARTUML SPACE? textLine? CR;
endUml: ENDUML CR;

textLine: (TEXT SPACE?)+;

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
	'.'
	| ';'
	| ':'
	| ','
	| '('
	| ')'
	| '-'
	| '\\'
	| '\''
	| '~'
	| '"'
	| '+';