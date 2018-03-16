parser grammar pumlParserCommon;
options {
	tokenVocab = pumlLexer;
}



color: NAMED_COLORS | HEX_COLORS;

emptyLine: WSS | CRLF;

identifier: simpleIdentifier | quotedIdentifier;

simpleIdentifier: ~DBLQUOTE (~(WSS | CRLF))*;
quotedIdentifier:
	DBLQUOTE ((~DBLQUOTE) | ESC_DBLQUOTE)* DBLQUOTE;

eolText: EOL_TEXT;

