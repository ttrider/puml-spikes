parser grammar pumlParserSequence;
import pumlParserCommon;

options {
	tokenVocab = pumlLexer; 
}

sequenceMessage:
	namedIdentifier WSS? connector WSS? namedIdentifier WSS? ( COLON_EOL eolText )? CRLF;

// sequenceMessageParticipant: declareParticipantIdAndTitle;

//connector:

// connector:
// 	connectorSolid
// 	| connectorDotted
// 	| connectorSolidReverse
// 	| connectorDottedReverse;

// connectorSolid:			CONNECTOR_SINGLE_LEFT;
// connectorSolidReverse:	CONNECTOR_SINGLE_RIGHT;

// connectorDotted:		CONNECTOR_DOUBLE_LEFT;
// connectorDottedReverse:	CONNECTOR_DOUBLE_RIGHT;
