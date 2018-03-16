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
	) WSS namedIdentifier (
		ORDER_KEYWORD declareOrder
	)? (WSS color)? WSS? CRLF;

declareDefaultParticipant:	PARTICIPANT;
declareActor:				ACTOR;
declareBoundary:			BOUNDARY;
declareControl:				CONTROL;
declareEntity:				ENTITY;
declareDatabase:			DATABASE;
declareCollections:			COLLECTIONS;


declareOrder: identifier;
