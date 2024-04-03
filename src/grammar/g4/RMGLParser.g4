parser grammar RMGLParser;

options {
    tokenVocab = RMGLLexer;
}

statement:NL* (lineGraphicDefine|annotationDefine|linkDefine)+;

//common
variableName: TokenChar;
charText: TokenChar;
annotationText:AnnotationChar*;
lineAnnotationText:LineAnnotationChar*;
//line graphic define
lineGraphicDefine: graphicType (variableName Comma)* variableName  (propertyDefine|textDefine)* NL*;
graphicType: Rect|Circle;
propertyDefine:(X|Y|W|H|Angle|Color|Alpha|BorderColor|BorderWidth|BorderAlpha|FontSize|FontColor) charText (Comma|Semicolon);
textDefine:Text Quotation annotationText AnnotationQuotation  (Comma|Semicolon);
annotationDefine: Slash lineAnnotationText LineAnnotationNL NL*;
//linkDefine
linkDefine: TokenChar LArrow? (Line|SimpleLine|PolyLine|CurveLine) RArrow? TokenChar (Comma|Semicolon) NL*;