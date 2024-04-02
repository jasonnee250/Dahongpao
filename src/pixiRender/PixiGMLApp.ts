import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {PixiStage} from "@/pixiRender/PixiStage.ts";
import {PixiGraphicNode} from "@/pixiRender/PixiGraphicNode.ts";
import {GMLApp} from "@/entity/graphic.ts";

export class PixiGMLApp implements GMLApp {

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
        for(const [_,node] of map){
            const renderNode=PixiGraphicNode.copyFrom(node);
            this.stage.container.addChild(renderNode.g);
            renderNode.draw();
        }
    }
}