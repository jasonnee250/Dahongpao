lexer grammar RMGLLexer;

//关键字
Rect: 'Rect';
Circle:'Circle';

//属性关键字
X:'x';
Y:'y';
W:'w';
H:'h';
Angle:'angle';
Color:'color';
Text:'text';
Alpha:'alpha';
BorderWidth:'borderWidth';
BorderColor:'borderColor';
BorderAlpha:'BorderAlpha';

//符号
Comma:',';
Semicolon:';';
Quotation:'"' ->pushMode(ANNOTATION_MODE);
//字符：
TokenChar:[0-9a-zA-Z\u4e00-\u9fa5_]+;
NL:[\r\n];
Space:[\t ]->skip;

Char:'.';

mode ANNOTATION_MODE;

AnnotationQuotation:'"'->popMode;

AnnotationChar:'.';
