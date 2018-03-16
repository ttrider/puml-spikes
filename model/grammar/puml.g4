parser grammar puml;
import pumlParserCommon;
//import pumlParserDeclareParticipant;

options {
	tokenVocab = pumlLexer; 
}
 
document: diagram+;

diagram: startUml diagramItem* endUml CRLF*;

startUml: STARTUML startUmlName;
startUmlName: STARTUML_NAME;

endUml: ENDUML; 


diagramItem:
	emptyLine
	//| noteItem
	//| declareParticipant
	//| sequenceMessage
	;




