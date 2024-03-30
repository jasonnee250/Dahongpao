parser grammar RMGLParser;

options {
    tokenVocab = RMGLLexer;
}

statement:lineGraphicDefine+;

//common
variableName: Letter+;
charText: TokenChar+;

//line graphic define
lineGraphicDefine: graphicType (variableName Comma)* variableName  propertyDefine* NL*;
graphicType: Rect|Circle;
propertyDefine:(X|Y|W|H|Angle|Color|Text|Alpha|BorderColor|BorderWidth|BorderAlpha) charText (Comma|Semicolon);