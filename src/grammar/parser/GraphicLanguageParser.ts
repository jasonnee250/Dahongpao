import RMGLLexer from "../g4/RMGLLexer";
import { RMGLParserListenerImpl } from "./RMGLParserListenerImpl";
import RMGLParser from "../g4/RMGLParser.ts";
import {CharStream, CommonTokenStream, ParseTreeWalker} from "antlr4";


export class GraphicLanguageParser{

    listener:RMGLParserListenerImpl=new RMGLParserListenerImpl();

    public parseString(text:string):void{
        const inputStream = new CharStream(text);
        const lexer = new RMGLLexer(inputStream);
        const tokens=new CommonTokenStream(lexer);
        const parser=new RMGLParser(tokens);
        ParseTreeWalker.DEFAULT.walk(this.listener, parser.statement());
    }
}
