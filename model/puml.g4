parser grammar puml;
options {
	tokenVocab = pumlLexer;
} 

document: diagram+;

diagram: startUml diagramItem* endUml CR*;

startUml: STARTUMLLINE;

endUml: ENDUML SPACE? CR; 

//digramName: TEXTEOL;
digramName: (ANY | SPACE)*?;

diagramItem:
	emptyLine
	| note
	| declareParticipant
	| sequenceMessage;

color: NAMED_COLORS | HEX_COLORS;

emptyLine: SPACE | CR;

// notes
note:
	singleLineNote
	| singleLineRNote
	| singleLineHNote
	| multiLineNote
	| multiLineRNote
	| multiLineHNote;

singleLineNote:
	NOTE SPACE noteLocation (SPACE color)? SPACE? COLON noteTextLine? CR;
singleLineRNote:
	RNOTE SPACE noteLocation (SPACE color)? SPACE? COLON noteTextLine? CR;
singleLineHNote:
	HNOTE SPACE noteLocation (SPACE color)? SPACE? COLON noteTextLine? CR;

multiLineNote:
	NOTE SPACE noteLocation (SPACE color)? SPACE? CR noteTextLines CR? (
		ENDNOTE
		| END_NOTE
	) CR;
multiLineRNote:
	RNOTE SPACE noteLocation (SPACE color)? SPACE? CR noteTextLines CR? (
		ENDNOTE
		| END_NOTE
		| ENDRNOTE
		| END_RNOTE
		| ENDHNOTE
		| END_HNOTE 
	) CR;
multiLineHNote:
	HNOTE SPACE noteLocation (SPACE color)? SPACE? CR noteTextLines CR? (
		ENDNOTE
		| END_NOTE
		| ENDRNOTE
		| END_RNOTE
		| ENDHNOTE
		| END_HNOTE
	) CR;

noteLocation:
	noteLocationRight (
		SPACE OF SPACE noteAnchor (SPACE? COMMA noteAnchor)*
	)?
	| noteLocationLeft (
		SPACE OF SPACE noteAnchor (SPACE? COMMA noteAnchor)*
	)?
	| noteLocationOver (
		SPACE noteAnchor (SPACE? COMMA noteAnchor)*
	);

noteLocationRight: RIGHT;
noteLocationLeft: LEFT;
noteLocationOver: OVER;

noteTextLine: (ANY | SPACE)*?;
noteTextLines: (ANY | SPACE | CR)*?;
noteAnchor: (ANY | SPACE)*?;

// sequence diagram
declareParticipant: (
		declareDefaultParticipant
		| declareActor
		| declareBoundary
		| declareControl
		| declareEntity
		| declareDatabase
		| declareCollections
	) SPACE declareParticipantIdAndTitle (
		SPACE ORDER SPACE declareOrder
	)? (SPACE color)? SPACE? CR;

declareDefaultParticipant: PARTICIPANT;
declareActor: ACTOR;
declareBoundary: BOUNDARY;
declareControl: CONTROL;
declareEntity: ENTITY;
declareDatabase: DATABASE;
declareCollections: COLLECTIONS;

declareTitleAsId: (quotedIdentifier SPACE AS SPACE identifier)
	| (identifier SPACE AS SPACE identifier);
declareIdAsTitle: identifier SPACE AS SPACE quotedIdentifier;
declareId: identifier | quotedIdentifier;
declareParticipantIdAndTitle: (
		declareId
		| declareTitleAsId
		| declareIdAsTitle
	);
declareOrder: identifier;

sequenceMessageParticipant: declareParticipantIdAndTitle;

sequenceMessage:
	sequenceMessageParticipant SPACE? connector SPACE? sequenceMessageParticipant SPACE? (
		COLON messageText
	)? CR;

connector:
	connectorSolid
	| connectorDotted
	| connectorSolidReverse
	| connectorDottedReverse;

connectorSolid: CONNECTOR_SINGLE_LEFT;
connectorSolidReverse: CONNECTOR_SINGLE_RIGHT;

connectorDotted: CONNECTOR_DOUBLE_LEFT;
connectorDottedReverse: CONNECTOR_DOUBLE_RIGHT;

identifier: ~DBLQUOTE (~(SPACE | CR))*;
quotedIdentifier:
	DBLQUOTE ((~DBLQUOTE) | ESC_DBLQUOTE)* DBLQUOTE;

messageText: (ANY | SPACE)+?;

