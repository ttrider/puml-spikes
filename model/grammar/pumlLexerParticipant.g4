lexer grammar pumlLexer;
import pumlLexerNote, pumlLexerCommon;

//PARTICIPANTS
PARTICIPANT:
	P A R T I C I P A N T WSS -> pushMode(DP_MODE);
ACTOR: A C T O R WSS -> pushMode(DP_MODE);
BOUNDARY:
	B O U N D A R Y WSS -> pushMode(DP_MODE);
CONTROL:
	C O N T R O L WSS -> pushMode(DP_MODE);
ENTITY: E N T I T Y WSS -> pushMode(DP_MODE);
DATABASE:
	D A T A B A S E WSS -> pushMode(DP_MODE);
COLLECTIONS:
	C O L L E C T I O N S WSS -> pushMode(DP_MODE);



mode DP_MODE;

DP_QID:	'"' ((~'"') | '\\"')* '"';
DP_ID:	(~[ \t\r\n"])*;

DP_WSS: WSS;
DP_CRLF: CRLF -> popMode;