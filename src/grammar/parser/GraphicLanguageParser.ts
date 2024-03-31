import { CharStreams, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker'
import RMGLLexer from "../g4/RMGLLexer";
import {RMGLParser} from "../g4/RMGLParser";
import { RMGLParserListenerImpl } from "./RMGLParserListenerImpl";


export class GraphicLanguageParser{

    listener:RMGLParserListenerImpl=new RMGLParserListenerImpl();

    public parseString(text:string):void{
        const inputStream = CharStreams.fromString(text);
        const lexer = new RMGLLexer(inputStream);
        const tokens=new CommonTokenStream(lexer);
        const parser=new RMGLParser(tokens);
        ParseTreeWalker.DEFAULT.walk(this.listener, parser.statement());
    }
}
