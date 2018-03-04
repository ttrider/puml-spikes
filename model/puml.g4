grammar puml;

document: diagram+;

diagram: startUml diagramItem* endUml CR*;

startUml: STARTUMLLINE;

endUml: ENDUML SPACE? CR;

//digramName: TEXTEOL;
digramName: (ANY | SPACE)*?;

diagramItem: note;

// notes
note: singleLineNote;

singleLineNote:
	NOTE SPACE noteLocation SPACE? COLON noteTextLine? CR;

noteLocation: noteLocationRight | noteLocationLeft;

noteLocationRight: RIGHT;
noteLocationLeft: LEFT;

noteTextLine: (ANY | SPACE)*?;

// LEXER rules
STARTUML: '@startuml';
STARTUMLLINE: STARTUML .*? CR;
ENDUML: '@enduml';

// NOTE
NOTE: N O T E;
LEFT: L E F T;
RIGHT: R I G H T;

// COMMON
SEMICOLON: ';';
COLON: ':';

SPACE: (' ' | '\t')+;

//WS : (' '|'\t'|'\n'|'\r'|'\r\n')+ -> skip ;

//WS: [ \t];

CR: ('\r'? '\n') | EOF;

//// THIS MUST BE THE LAST LEXER RULE
ANY: .;
/////////////////////////////////////

fragment LETTERS: [a-zA-Z];

fragment DIGITS: [0-9];

fragment A: 'A' | 'a';
fragment B: 'B' | 'b';
fragment C: 'C' | 'c';
fragment D: 'D' | 'd';
fragment E: 'E' | 'e';
fragment F: 'F' | 'f';
fragment G: 'G' | 'g';
fragment H: 'H' | 'h';
fragment I: 'I' | 'i';
fragment J: 'J' | 'j';
fragment K: 'K' | 'k';
fragment L: 'L' | 'l';
fragment M: 'M' | 'm';
fragment N: 'N' | 'n';
fragment O: 'O' | 'o';
fragment P: 'P' | 'p';
fragment Q: 'Q' | 'q';
fragment R: 'R' | 'r';
fragment S: 'S' | 's';
fragment T: 'T' | 't';
fragment U: 'U' | 'u';
fragment V: 'V' | 'v';
fragment W: 'W' | 'w';
fragment X: 'X' | 'x';
fragment Y: 'Y' | 'y';
fragment Z: 'Z' | 'z';
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