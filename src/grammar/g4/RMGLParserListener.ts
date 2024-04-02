// Generated from ./src/grammar/g4/RMGLParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { StatementContext } from "./RMGLParser";
import { VariableNameContext } from "./RMGLParser";
import { CharTextContext } from "./RMGLParser";
import { AnnotationTextContext } from "./RMGLParser";
import { LineAnnotationTextContext } from "./RMGLParser";
import { LineGraphicDefineContext } from "./RMGLParser";
import { GraphicTypeContext } from "./RMGLParser";
import { PropertyDefineContext } from "./RMGLParser";
import { TextDefineContext } from "./RMGLParser";
import { AnnotationDefineContext } from "./RMGLParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `RMGLParser`.
 */
export default class RMGLParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `RMGLParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.variableName`.
	 * @param ctx the parse tree
	 */
	enterVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.variableName`.
	 * @param ctx the parse tree
	 */
	exitVariableName?: (ctx: VariableNameContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.charText`.
	 * @param ctx the parse tree
	 */
	enterCharText?: (ctx: CharTextContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.charText`.
	 * @param ctx the parse tree
	 */
	exitCharText?: (ctx: CharTextContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.annotationText`.
	 * @param ctx the parse tree
	 */
	enterAnnotationText?: (ctx: AnnotationTextContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.annotationText`.
	 * @param ctx the parse tree
	 */
	exitAnnotationText?: (ctx: AnnotationTextContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.lineAnnotationText`.
	 * @param ctx the parse tree
	 */
	enterLineAnnotationText?: (ctx: LineAnnotationTextContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.lineAnnotationText`.
	 * @param ctx the parse tree
	 */
	exitLineAnnotationText?: (ctx: LineAnnotationTextContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.lineGraphicDefine`.
	 * @param ctx the parse tree
	 */
	enterLineGraphicDefine?: (ctx: LineGraphicDefineContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.lineGraphicDefine`.
	 * @param ctx the parse tree
	 */
	exitLineGraphicDefine?: (ctx: LineGraphicDefineContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.graphicType`.
	 * @param ctx the parse tree
	 */
	enterGraphicType?: (ctx: GraphicTypeContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.graphicType`.
	 * @param ctx the parse tree
	 */
	exitGraphicType?: (ctx: GraphicTypeContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.propertyDefine`.
	 * @param ctx the parse tree
	 */
	enterPropertyDefine?: (ctx: PropertyDefineContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.propertyDefine`.
	 * @param ctx the parse tree
	 */
	exitPropertyDefine?: (ctx: PropertyDefineContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.textDefine`.
	 * @param ctx the parse tree
	 */
	enterTextDefine?: (ctx: TextDefineContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.textDefine`.
	 * @param ctx the parse tree
	 */
	exitTextDefine?: (ctx: TextDefineContext) => void;
	/**
	 * Enter a parse tree produced by `RMGLParser.annotationDefine`.
	 * @param ctx the parse tree
	 */
	enterAnnotationDefine?: (ctx: AnnotationDefineContext) => void;
	/**
	 * Exit a parse tree produced by `RMGLParser.annotationDefine`.
	 * @param ctx the parse tree
	 */
	exitAnnotationDefine?: (ctx: AnnotationDefineContext) => void;
}

