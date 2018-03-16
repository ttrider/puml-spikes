parser grammar pumlParserDeclareParticipant;
import pumlParserCommon;


options {
	tokenVocab = pumlLexer;
}

// sequence diagram
declareParticipant: (
		declareDefaultParticipant
		| declareActor
		| declareBoundary
		| declareControl
		| declareEntity
		| declareDatabase
		| declareCollections
	) WSS declareParticipantIdAndTitle (
		WSS ORDER WSS declareOrder
	)? (WSS color)? WSS? CRLF;

declareDefaultParticipant:	PARTICIPANT;
declareActor:				ACTOR;
declareBoundary:			BOUNDARY;
declareControl:				CONTROL;
declareEntity:				ENTITY;
declareDatabase:			DATABASE;
declareCollections:			COLLECTIONS;

declareTitleAsId: (quotedIdentifier WSS AS WSS simpleIdentifier)
	| (simpleIdentifier WSS AS WSS simpleIdentifier);
declareIdAsTitle:	simpleIdentifier WSS AS WSS quotedIdentifier;
declareId:			identifier;
declareParticipantIdAndTitle: (
		declareId
		| declareTitleAsId
		| declareIdAsTitle
	);
declareOrder: identifier;
