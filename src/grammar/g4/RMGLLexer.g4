lexer grammar RMGLLexer;

//关键字
Rect: 'Rect';
Circle:'Circle';
Diamond:'Diamond';//菱形
Parallelogram:'Parallelogram';//平行四边形
Trapezoid:'Trapezoid';//梯形
Triangle:'Triangle';//三角形
//连线
Line: '--';
SimpleLine:'-line-';
PolyLine:'-poly-';
CurveLine:'-curve-';
//箭头
LArrow:'<';
RArrow:'>';

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
BorderAlpha:'borderAlpha';
FontSize:'fontSize';
FontColor:'fontColor';

//符号
Comma:',';
Semicolon:';';
Quotation:'"' ->pushMode(ANNOTATION_MODE);
Slash:'//' -> pushMode(LINE_ANNOTATION_MODE);
//字符：
TokenChar:([0-9a-zA-Z\u4e00-\u9fa5_.]|'-')+;
NL:[\r\n];
Space:[\t ]->skip;

Char:.;

mode ANNOTATION_MODE;

AnnotationQuotation:'"'->popMode;

AnnotationChar:.;


mode LINE_ANNOTATION_MODE;

LineAnnotationNL:[\r\n]->popMode;

LineAnnotationChar:.;
