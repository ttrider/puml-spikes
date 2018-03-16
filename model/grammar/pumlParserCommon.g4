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

namedIdentifier:
	titleAsIdIdentifier 
	| idAsTitleIdentifier
	| identifier;

titleAsIdIdentifier: (
		quotedIdentifier AS_KEYWORD simpleIdentifier
	)
	| (simpleIdentifier AS_KEYWORD simpleIdentifier);

idAsTitleIdentifier:
	simpleIdentifier AS_KEYWORD quotedIdentifier;

eolText: EOL_TEXT;
