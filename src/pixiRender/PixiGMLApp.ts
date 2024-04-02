import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {PixiStage} from "@/pixiRender/PixiStage.ts";

export class PixiGMLApp {

    parser:GraphicLanguageParser;
    stage:PixiStage;

    constructor() {
        this.parser=new GraphicLanguageParser();
        this.stage=new PixiStage();
    }

    init(element: HTMLElement){
        this.stage.init(element);
    }

    draw(text:string){
        this.stage.clear();
        this.parser.parseString(text);
        const map=this.parser.listener.nodeMap;
        for(const [_,v] of map){
            this.stage.container.addChild(v.g);
            v.draw();
        }
    }
}