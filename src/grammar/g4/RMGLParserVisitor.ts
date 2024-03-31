// Generated from ./src/grammar/g4/RMGLParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { StatementContext } from "./RMGLParser";
import { VariableNameContext } from "./RMGLParser";
import { CharTextContext } from "./RMGLParser";
import { LineGraphicDefineContext } from "./RMGLParser";
import { GraphicTypeContext } from "./RMGLParser";
import { PropertyDefineContext } from "./RMGLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `RMGLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface RMGLParserVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `RMGLParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `RMGLParser.variableName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableName?: (ctx: VariableNameContext) => Result;

	/**
	 * Visit a parse tree produced by `RMGLParser.charText`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCharText?: (ctx: CharTextContext) => Result;

	/**
	 * Visit a parse tree produced by `RMGLParser.lineGraphicDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineGraphicDefine?: (ctx: LineGraphicDefineContext) => Result;

	/**
	 * Visit a parse tree produced by `RMGLParser.graphicType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGraphicType?: (ctx: GraphicTypeContext) => Result;

	/**
	 * Visit a parse tree produced by `RMGLParser.propertyDefine`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPropertyDefine?: (ctx: PropertyDefineContext) => Result;
}

