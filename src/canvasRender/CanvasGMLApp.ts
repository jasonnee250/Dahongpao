import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {CanvasStage} from "@/canvasRender/CanvasStage.ts";

export class CanvasGMLApp {
    parser:GraphicLanguageParser;
    stage:CanvasStage;

    constructor() {
        this.parser=new GraphicLanguageParser();
        this.stage=new CanvasStage();
    }

    init(element: HTMLElement){
        this.stage.init(element);
    }

    draw(text:string){
        this.stage.clear();
        this.parser.parseString(text);
        const map=this.parser.listener.nodeMap;
        for(const [_,v] of map){
            v.draw();
        }
    }

}