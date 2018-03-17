parser grammar pumlParserCommon;
options {
	tokenVocab = pumlLexer;
}

color: COLORS | DP_COLORS;

emptyLine: WSS | CRLF;

identifier: simpleIdentifier | quotedIdentifier;

simpleIdentifier:
	ID | DP_ID;
quotedIdentifier:
	QID | DP_QID; 

namedIdentifier:
	titleAsIdIdentifier 
	| idAsTitleIdentifier
	| identifier;

titleAsIdIdentifier: (
		quotedIdentifier DP_AS simpleIdentifier
	)
	| (simpleIdentifier DP_AS simpleIdentifier);

idAsTitleIdentifier:
	simpleIdentifier DP_AS quotedIdentifier;

eolText: EOL_TEXT;





