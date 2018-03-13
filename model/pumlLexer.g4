lexer grammar pumlLexer;
import pumlLexerNote, pumlLexerFragments;


// LEXER rules
STARTUML: '@startuml';
STARTUMLLINE: STARTUML .*? CR;
ENDUML: '@enduml';

//PARTICIPANTS
PARTICIPANT: P A R T I C I P A N T;
ACTOR: A C T O R; 
BOUNDARY: B O U N D A R Y;
CONTROL: C O N T R O L;
ENTITY: E N T I T Y;
DATABASE: D A T A B A S E;
COLLECTIONS: C O L L E C T I O N S;



AS: A S;
ORDER: O R D E R;

CONNECTOR_SINGLE_LEFT: '->';
CONNECTOR_SINGLE_RIGHT: '<-';
CONNECTOR_DOUBLE_LEFT: '-->';
CONNECTOR_DOUBLE_RIGHT: '<--';

// COMMON
SEMICOLON: ';';
COLON: ':';
COMMA: ',';
DBLQUOTE: '"';

ESC_DBLQUOTE: '\\"';


SPACE: (' ' | '\t')+;

WS: (' ' | '\t');


CR: ('\r'? '\n') | EOF;


SINGLE_LINE_COMMENT: '\'' ~('\r' | '\n')* '\r'? '\n' -> skip;
MULTI_LINE_COMMENT: '/\'' ~('\'')* '\'/' -> skip;

HEX_COLORS:
	'#' HEXDIGITS HEXDIGITS HEXDIGITS (
		HEXDIGITS HEXDIGITS HEXDIGITS
	)?;

NAMED_COLORS:
	'#' A L I C E B L U E
	| '#' A N T I Q U E W H I T E
	| '#' A Q U A
	| '#' A Q U A M A R I N E
	| '#' A Z U R E
	| '#' B E I G E
	| '#' B I S Q U E
	| '#' B L A C K
	| '#' B L A N C H E D A L M O N D
	| '#' B L U E
	| '#' B L U E V I O L E T
	| '#' B R O W N
	| '#' B U R L Y W O O D
	| '#' C A D E T B L U E
	| '#' C H A R T R E U S E
	| '#' C H O C O L A T E
	| '#' C O R A L
	| '#' C O R N F L O W E R B L U E
	| '#' C O R N S I L K
	| '#' C R I M S O N
	| '#' C Y A N
	| '#' D A R K B L U E
	| '#' D A R K C Y A N
	| '#' D A R K G O L D E N R O D
	| '#' D A R K G R A Y
	| '#' D A R K G R E Y
	| '#' D A R K G R E E N
	| '#' D A R K K H A K I
	| '#' D A R K M A G E N T A
	| '#' D A R K O L I V E G R E E N
	| '#' D A R K O R A N G E
	| '#' D A R K O R C H I D
	| '#' D A R K R E D
	| '#' D A R K S A L M O N
	| '#' D A R K S E A G R E E N
	| '#' D A R K S L A T E B L U E
	| '#' D A R K S L A T E G R A Y
	| '#' D A R K S L A T E G R E Y
	| '#' D A R K T U R Q U O I S E
	| '#' D A R K V I O L E T
	| '#' D E E P P I N K
	| '#' D E E P S K Y B L U E
	| '#' D I M G R A Y
	| '#' D I M G R E Y
	| '#' D O D G E R B L U E
	| '#' F I R E B R I C K
	| '#' F L O R A L W H I T E
	| '#' F O R E S T G R E E N
	| '#' F U C H S I A
	| '#' G A I N S B O R O
	| '#' G H O S T W H I T E
	| '#' G O L D
	| '#' G O L D E N R O D
	| '#' G R A Y
	| '#' G R E Y
	| '#' G R E E N
	| '#' G R E E N Y E L L O W
	| '#' H O N E Y D E W
	| '#' H O T P I N K
	| '#' I N D I A N R E D
	| '#' I N D I G O
	| '#' I V O R Y
	| '#' K H A K I
	| '#' L A V E N D E R
	| '#' L A V E N D E R B L U S H
	| '#' L A W N G R E E N
	| '#' L E M O N C H I F F O N
	| '#' L I G H T B L U E
	| '#' L I G H T C O R A L
	| '#' L I G H T C Y A N
	| '#' L I G H T G O L D E N R O D Y E L L O W
	| '#' L I G H T G R A Y
	| '#' L I G H T G R E Y
	| '#' L I G H T G R E E N
	| '#' L I G H T P I N K
	| '#' L I G H T S A L M O N
	| '#' L I G H T S E A G R E E N
	| '#' L I G H T S K Y B L U E
	| '#' L I G H T S L A T E G R A Y
	| '#' L I G H T S L A T E G R E Y
	| '#' L I G H T S T E E L B L U E
	| '#' L I G H T Y E L L O W
	| '#' L I M E
	| '#' L I M E G R E E N
	| '#' L I N E N
	| '#' M A G E N T A
	| '#' M A R O O N
	| '#' M E D I U M A Q U A M A R I N E
	| '#' M E D I U M B L U E
	| '#' M E D I U M O R C H I D
	| '#' M E D I U M P U R P L E
	| '#' M E D I U M S E A G R E E N
	| '#' M E D I U M S L A T E B L U E
	| '#' M E D I U M S P R I N G G R E E N
	| '#' M E D I U M T U R Q U O I S E
	| '#' M E D I U M V I O L E T R E D
	| '#' M I D N I G H T B L U E
	| '#' M I N T C R E A M
	| '#' M I S T Y R O S E
	| '#' M O C C A S I N
	| '#' N A V A J O W H I T E
	| '#' N A V Y
	| '#' O L D L A C E
	| '#' O L I V E
	| '#' O L I V E D R A B
	| '#' O R A N G E
	| '#' O R A N G E R E D
	| '#' O R C H I D
	| '#' P A L E G O L D E N R O D
	| '#' P A L E G R E E N
	| '#' P A L E T U R Q U O I S E
	| '#' P A L E V I O L E T R E D
	| '#' P A P A Y A W H I P
	| '#' P E A C H P U F F
	| '#' P E R U
	| '#' P I N K
	| '#' P L U M
	| '#' P O W D E R B L U E
	| '#' P U R P L E
	| '#' R E B E C C A P U R P L E
	| '#' R E D
	| '#' R O S Y B R O W N
	| '#' R O Y A L B L U E
	| '#' S A D D L E B R O W N
	| '#' S A L M O N
	| '#' S A N D Y B R O W N
	| '#' S E A G R E E N
	| '#' S E A S H E L L
	| '#' S I E N N A
	| '#' S I L V E R
	| '#' S K Y B L U E
	| '#' S L A T E B L U E
	| '#' S L A T E G R A Y
	| '#' S L A T E G R E Y
	| '#' S N O W
	| '#' S P R I N G G R E E N
	| '#' S T E E L B L U E
	| '#' T A N
	| '#' T E A L
	| '#' T H I S T L E
	| '#' T O M A T O
	| '#' T U R Q U O I S E
	| '#' V I O L E T
	| '#' W H E A T
	| '#' W H I T E
	| '#' W H I T E S M O K E
	| '#' Y E L O W
	| '#' Y E L L O W G R E E N;

//// THIS MUST BE THE LAST LEXER RULE
ANY: .;
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

fragment LETTERS: [a-zA-Z];
fragment DIGITS: [0-9];
fragment HEXDIGITS: [0-9aAbBcCdDeEfF];

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