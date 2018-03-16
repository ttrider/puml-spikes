parser grammar pumlParserNote;
import pumlParserCommon;
options {
	tokenVocab = pumlLexer;
}


// // notes
// noteItem:
// 	note|rnote|hnote;

// note:
// 	NOTE noteLocation (WSS color)? (WSS NOTE_SINGLE_LINE eolText CRLF) | (NOTE_MULTI_LINE END_MULTILINE_NOTE);
// rnote:
// 	RNOTE noteLocation (WSS color)? (WSS NOTE_SINGLE_LINE eolText CRLF) | (NOTE_MULTI_LINE END_MULTILINE_RNOTE);
// hnote:
// 	HNOTE noteLocation (WSS color)? (WSS NOTE_SINGLE_LINE eolText CRLF) | (NOTE_MULTI_LINE END_MULTILINE_HNOTE);

// noteLocation:
// 	noteLocationRight
// 	| noteLocationLeft
// 	| noteLocationRightOf
// 	| noteLocationLeftOf
// 	| noteLocationOverOf;

// noteLocationRight:		RIGHT;
// noteLocationLeft:		LEFT;
// noteLocationRightOf:	RIGHT_OF identifier (COMMA identifier)*;
// noteLocationLeftOf:		LEFT_OF identifier (COMMA identifier)*;
// noteLocationOverOf:		OVER_OF identifier (COMMA identifier)*;
