lexer grammar pumlLexer;
import 
    pumlLexerFragments,
    pumlLexerCommon;
    //pumlLexerNote, 
    //pumlLexerParticipant



STARTUML: AT S T A R T U M L -> pushMode(STARTUML_MODE);
ENDUML: AT E N D U M L WSS? CRLF;


mode STARTUML_MODE;
STARTUML_NAME: .*? CRLF -> popMode; 

