import {GraphicLanguageParser} from "@/grammar/parser/GraphicLanguageParser.ts";
import {CanvasStage} from "@/canvasRender/CanvasStage.ts";
import {CanvasGraphicNode} from "@/canvasRender/CanvasGraphicNode.ts";
import {GMLApp} from "@/entity/graphic.ts";

export class CanvasGMLApp implements GMLApp{
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
        for(const [_,node] of map){
            const renderNode=CanvasGraphicNode.copyFrom(node);
            renderNode.draw();
        }
    }

}