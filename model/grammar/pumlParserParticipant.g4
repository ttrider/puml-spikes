parser grammar pumlParserParticipant;
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
	) namedIdentifier 
	(
		DP_ORDER declareOrder
	)? 
	(DP_WSS color)? DP_WSS? DP_CRLF;

declareDefaultParticipant:	PARTICIPANT;
declareActor:				ACTOR;
declareBoundary:			BOUNDARY;
declareControl:				CONTROL;
declareEntity:				ENTITY;
declareDatabase:			DATABASE;
declareCollections:			COLLECTIONS;

declareOrder: simpleIdentifier;
