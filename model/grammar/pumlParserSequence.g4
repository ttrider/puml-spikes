parser grammar pumlParserSequence;
import pumlParserCommon;
import pumlParserDeclareParticipant;

options {
	tokenVocab = pumlLexer; 
}

sequenceMessageParticipant: declareParticipantIdAndTitle;

sequenceMessage:
	sequenceMessageParticipant WSS? connector WSS? sequenceMessageParticipant WSS? (
		COLON messageText
	)? CRLF;

connector:
	connectorSolid
	| connectorDotted
	| connectorSolidReverse
	| connectorDottedReverse;

connectorSolid:			CONNECTOR_SINGLE_LEFT;
connectorSolidReverse:	CONNECTOR_SINGLE_RIGHT;

connectorDotted:		CONNECTOR_DOUBLE_LEFT;
connectorDottedReverse:	CONNECTOR_DOUBLE_RIGHT;

messageText: (~CRLF)*;

